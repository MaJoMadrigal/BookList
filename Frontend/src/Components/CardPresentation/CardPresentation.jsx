import React from 'react'
import img from './reading.png'
import Form from '../Form/Form'
import { Card } from 'react-bootstrap'
import { body, secondBody, thirdBody } from './style'
import './CardPresentation.css'
import NavBar from '../NavBar/NavBar'
/* import Mode from './Components/Mode/Mode' */
import { useSelector } from 'react-redux'
import Mode from '../Mode/Mode'


function CardPresentation() {
  const mode = useSelector((state) => state.bookStore.mode)
  return (
    <div className='cardGradient'>
      <NavBar/>
      {mode && <Mode />}
      <div style={body}>
        <div style={thirdBody}>
          <Card style={secondBody}>
            <img src={img} style={{ height: '364px', margin: '20px' }} />
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