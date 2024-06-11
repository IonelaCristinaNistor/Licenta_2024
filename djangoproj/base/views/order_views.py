from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from base.models import Artwork, Order, OrderItem, DeliveryAddress
from base.serializers import OrderSerializer
from rest_framework import status


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addItemsInOrder(request):
    user= request.user
    data = request.data

    orderItems = data['orderItems']

    if orderItems and len(orderItems) == 0:
        return Response({'detail': 'Empty Order'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        # Create Order
        order = Order.objects.create(
            user = user,
            paymentMethod = data['paymentMethod'],
            taxPrice = data['taxPrice'],
            deliveryPrice = data['deliveryPrice'],
            totalPrice = data['totalPrice']
        )

        # Create delivery address

        delivery = DeliveryAddress.objects.create (
            order = order, 
            address = data['deliveryAddress']['address'],
            city = data['deliveryAddress']['city'],
        )
        # Create order items combination

        for i in orderItems:
            artwork = Artwork.objects.get(artwork_id=i['artwork'])
            item = OrderItem.objects.create(
            artwork = artwork,
            order = order,
            title = artwork.title,
            quantity = i['quantity'],
            price = i['price'],
            image = artwork.image.url,
            )

            artwork.availability -= int(item.quantity)
            artwork.save()

        serializer = OrderSerializer(order, many=False)

        return Response(serializer.data)