import React from 'react'
import img from './icon2.png'
import Form from '../Form/Form'
import { Card } from 'react-bootstrap'
import { body, secondBody, thirdBody } from './style'
import './CardPresentation.css'
import NavBar from '../NavBar/NavBar'


function CardPresentation() {
  return (
    <div className='cardGradient'>
      <NavBar/>
      <div style={body}>
        <div style={thirdBody}>
          <Card style={secondBody}>
            <img src={img} style={{ width: '250px', margin: '20px' }} />
            <Card.Body>
              <Card.Title>Book List App</Card.Title>
              <Form></Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CardPresentation