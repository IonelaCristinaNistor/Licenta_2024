import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import OrderProgress from '../components/OrderProgress'
import FormComponent from '../components/FormComponent';
import { saveDeliveryAddress } from '../actions/cartActions'

function Delivery() {
  const cart = useSelector(state => state.cart)
  const { deliveryAddress } = cart
  const [address, setAddress] = useState(deliveryAddress.address)
  const [city, setCity] = useState(deliveryAddress.city)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveDeliveryAddress({address, city}))
    navigate('/payment')
  } 

  return (
    <FormComponent>
      <OrderProgress step1 step2/>
      <h1  style={{color: 'black'}}>Delivery</h1>
      <Form onSubmit={submitHandler}>

        <Form.Group controlId='address'>
            <Form.Label  style={{color: 'black', fontSize: 'large'}}>Address</Form.Label>
            <Form.Control
                type='text'
                required
                placeholder='Enter Address'
                value={address ? address : ''}
                onChange={(e) => setAddress(e.target.value)}
                className='rounded'
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
            <Form.Label style={{color: 'black', fontSize: 'large'}}>City</Form.Label>
            <Form.Control
                type='text'
                required
                placeholder='Enter City'
                value={city ? city : ''}
                onChange={(e) => setCity(e.target.value)}
                className='rounded'
            ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='my-3 rounded'>Continue</Button>
      </Form>
    </FormComponent>
  )
}

export default Delivery
