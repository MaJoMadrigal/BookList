import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletee, getBooks } from '../../Data/BookSlice'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { body } from './style'

function SmallCard() {
  const know = useSelector((state) => state.bookStore.bookList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <section style={body}>
      {know.map((point) => (
        <Card
        style={{
          width: '20rem',
          boxShadow: '0 0 12px rgba(0,0,0,0.5)',
          borderRadius: '15px',
        }}
      >
        <Card.Body>
          <Card.Img variant="top" src={point.image}/>
          <Card.Header>
            <Card.Title>{point.name}</Card.Title>
          </Card.Header>

          <Card.Subtitle
            className='mb-2 text-muted'
            style={{ marginTop: '10px' }}
          >
            {point.author}
          </Card.Subtitle>
          <Card.Text>{point.review}</Card.Text>
          <footer className='blockquote-footer'>{point.user}</footer>
          <a href={point.link} className='btn btn-secondary me-2' target='_'>
            Link
          </a>
          <Button
            variant='primary'
            onClick={() => dispatch(deletee({ id: point.id }))}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
      ))}
    </section>
  )
}

export default SmallCard