from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('voter', 'Voter'),
        ('candidate', 'Candidate'),
        ('manager', 'Manager'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='voter')
    middle_name = models.CharField(max_length=150, blank=True)
    is_verified = models.BooleanField(default=False)
    otp = models.CharField(max_length=6, null=True, blank=True)
    otp_created_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.username

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.subject

class Party(models.Model):
    name = models.CharField(max_length=200)
    acronym = models.CharField(max_length=20)
    platform = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='managed_parties')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class PartyMember(models.Model):
    party = models.ForeignKey(Party, on_delete=models.CASCADE, related_name='members')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='party_memberships')
    position = models.CharField(max_length=100)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.user.username} - {self.party.name}'
