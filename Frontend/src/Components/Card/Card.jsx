import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBooks, deleteBook } from '../../Data/BookSlice'
import { Button } from 'react-bootstrap' //Misma linea
import { Card } from 'react-bootstrap' //Misma linea
import { body } from './style'
import './Card.css'

function SmallCard() {
  const know = useSelector((state) => state.bookStore.bookList)
  const dispatch = useDispatch()
  const [searchBook, setSearchBook] = useState('');
  const [isReadMoreShown,setReadMoreShown] = useState(false);
  const toggleBtn = () => {
    setReadMoreShown(prevState => !prevState)
  }

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <section>
      <div className='divSearchBooks'>
        <input class="form-control searchBooks" type="search" placeholder="Find some books..." aria-label="Search" value={searchBook} onChange={(e) => setSearchBook(e.target.value)}></input>
      </div>
      <div style={body}>
        {know.filter((point) => {
          if (searchBook===""){
            return point;
          }
          else if(point.name.toLowerCase().includes(searchBook.toLowerCase())){
            return point
          }
        })
        .map((point) => (
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
            <Card.Text>
              { isReadMoreShown ? (point.review) : (point.review).substr(0,100) }
              <button className='readBtn' onClick={toggleBtn}>{isReadMoreShown ? 'Read less' : 'Read more'}</button>
            </Card.Text>
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