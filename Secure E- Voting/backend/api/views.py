from rest_framework import generics, status, viewsets
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer, ContactMessageSerializer, PartySerializer, PartyMemberSerializer
from .models import User, Party, PartyMember
from django.core.mail import send_mail
from django.utils import timezone
from datetime import timedelta
import random

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Generate OTP
        otp = str(random.randint(100000, 999999))
        
        # Get user data
        validated_data = serializer.validated_data
        
        # Create user instance but keep it inactive until OTP verification
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            role=validated_data.get('role', 'voter'),
            is_active=False
        )
        user.set_password(validated_data['password'])
        
        # Set OTP and OTP creation time
        user.otp = otp
        user.otp_created_at = timezone.now()
        user.save()

        # Send OTP email
        try:
            # Note: Ensure your email settings in settings.py are correctly configured for this to work.
            send_mail(
                'Your OTP for E-Voting System Registration',
                f'Your OTP is: {otp}',
                'secureevotingsystem@gmail.com',
                [user.email],
                fail_silently=False,
            )
        except Exception as e:
            # If email sending fails, we should delete the created user
            # because they will not be able to verify their account.
            user.delete()
            return Response({
                'detail': f'Failed to send OTP email. Please check your email configuration. Error: {e}'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({'detail': 'OTP sent to your email. Please verify to activate your account.'}, status=status.HTTP_201_CREATED)


class VerifyOTPView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        otp = request.data.get('otp')

        if not email or not otp:
            return Response({'detail': 'Email and OTP are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'detail': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)

        if user.is_active and user.is_verified:
            return Response({'detail': 'User is already verified and active.'}, status=status.HTTP_400_BAD_REQUEST)

        if user.otp != otp:
            return Response({'detail': 'Invalid OTP.'}, status=status.HTTP_400_BAD_REQUEST)

        # OTP expiry time (e.g., 15 minutes)
        if user.otp_created_at:
            otp_expiry_time = user.otp_created_at + timedelta(minutes=15)
            if timezone.now() > otp_expiry_time:
                return Response({'detail': 'OTP has expired.'}, status=status.HTTP_400_BAD_REQUEST)

        user.is_active = True
        user.is_verified = True
        user.otp = None
        user.otp_created_at = None
        user.save()

        return Response({'detail': 'Email verified successfully. You can now log in.'}, status=status.HTTP_200_OK)


class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        
        # Django's authentication backend checks for is_active=True by default.
        # We add this check for our custom is_verified field.
        if not user.is_verified:
            return Response({'detail': 'Account not verified. Please check your email for an OTP.'}, status=status.HTTP_401_UNAUTHORIZED)
            
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
            'role': user.role
        })

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        try:
            request.user.auth_token.delete()
        except (AttributeError, Token.DoesNotExist):
            pass
        return Response(status=status.HTTP_204_NO_CONTENT)

class LandingPageStatsView(APIView):
    def get(self, request, *args, **kwargs):
        voter_count = User.objects.filter(role='voter').count()
        candidate_count = User.objects.filter(role='candidate').count()
        return Response({
            'voters': voter_count,
            'candidates': candidate_count,
        })

class Home(APIView):
    def get(self, request):
        return Response({"message": "Welcome to the Secure E-Voting System API!"})


class Contact(generics.CreateAPIView):
    serializer_class = ContactMessageSerializer

class PartyViewSet(viewsets.ModelViewSet):
    queryset = Party.objects.all()
    serializer_class = PartySerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class PartyMemberViewSet(viewsets.ModelViewSet):
    queryset = PartyMember.objects.all()
    serializer_class = PartyMemberSerializer

class CandidateDashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        if user.role != 'candidate':
            return Response({'detail': 'You are not authorized to view this page.'}, status=status.HTTP_403_FORBIDDEN)

        party_memberships = PartyMember.objects.filter(user=user)
        serializer = PartyMemberSerializer(party_memberships, many=True)
        return Response(serializer.data)

class ManagerDashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        user = request.user
        if user.role != 'manager':
            return Response({'detail': 'You are not authorized to view this page.'}, status=status.HTTP_403_FORBIDDEN)

        managed_parties = Party.objects.filter(created_by=user)
        serializer = PartySerializer(managed_parties, many=True)
        return Response(serializer.data)

