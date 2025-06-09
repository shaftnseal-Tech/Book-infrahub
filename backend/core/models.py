from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=100, unique=True)
    start_date=models.DateField()
    end_date=models.DateField()
    comments=models.TextField(blank=True, null=True)
    status = models.CharField(max_length=100)
    created=models.DateTimeField(auto_now_add=True)
    modified=models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name