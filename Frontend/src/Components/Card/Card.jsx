import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks, deleteBook } from '../../Data/BookSlice'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { body } from './style'

function SmallCard() {
  const know = useSelector((state) => state.bookStore.bookList)
  const dispatch = useDispatch()
  const [searchBook, setSearchBook] = useState('');

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <section>
      <div>
        <input class="form-control" type="search" placeholder="Find some books..." aria-label="Search" value={searchBook} onChange={(e) => setSearchBook(e.target.value)}></input>
      </div>
      <div style={body}>
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
              className='deleteBookBtn'
              onClick={() => dispatch(deleteBook({ name: point.name ,id: point.id }))}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
        ))}
      </div>
    </section>
  )
}

export default SmallCard