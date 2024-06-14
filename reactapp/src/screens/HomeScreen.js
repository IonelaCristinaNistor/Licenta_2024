import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { listArtworks } from '../actions/artworkActions'
import SpinnerComponent from '../components/SpinnerComponent'
import Message from '../components/Message'

import Artwork from '../components/Artwork'

function HomeScreen() {
  const dispatch = useDispatch()
  const artworkList = useSelector(state => state.artworkList)
  const { error, loading, artworks } = artworkList

  useEffect(() => {
    dispatch(listArtworks())
    }, [dispatch])

  return (
    <div>
      <h1 className='d-flex justify-content-center my-3' style={{color: 'black'}}>Latest Products</h1>

      {loading ? <SpinnerComponent />
            :error ? <Message variant='danger'>{ error }</Message>
            :
            <Row>
              {artworks.map(artwork => (
                  <Col className='d-flex justify-content-center' key={artwork.artwork_id} sm={12} md={6} lg={4} xl={3}>
                      <Artwork artwork={artwork}></Artwork>
                  </Col>
              ))}
            </Row>       
      }
    </div>
  )
}

export default HomeScreen
