from django.urls import path
from base.views import order_views as views

urlpatterns = [
    path('add/', views.addItemsInOrder, name='orders-add'),
    path('<str:pk>/', views.getOrderById, name='order'),

]
