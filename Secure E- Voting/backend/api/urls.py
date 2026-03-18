from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    RegisterView, LoginView, LogoutView, LandingPageStatsView, 
    Home, Contact, VerifyOTPView, PartyViewSet, PartyMemberViewSet,
    CandidateDashboardView, ManagerDashboardView
)

router = DefaultRouter()
router.register(r'parties', PartyViewSet)
router.register(r'partymembers', PartyMemberViewSet)

urlpatterns = [
    path('', Home.as_view(), name='home'),
    path('register/', RegisterView.as_view(), name='register'),
    path('verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('stats/', LandingPageStatsView.as_view(), name='landing-page-stats'),
    path('contact/', Contact.as_view(), name='contact'),
    path('candidate/dashboard/', CandidateDashboardView.as_view(), name='candidate-dashboard'),
    path('manager/dashboard/', ManagerDashboardView.as_view(), name='manager-dashboard'),
    path('', include(router.urls)),
]
