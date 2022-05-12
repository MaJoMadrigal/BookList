import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { noValue, putBook } from '../../Data/BookSlice'
import './Form.css'

function Form() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && author && image && review) {
      dispatch(
        putBook({
          load: {
            id: new Date().getTime().toString(),
            name,
            author,
            image,
            review
          },
        })
      )
      setName('');
      setAuthor('');
      setImage('');
      setReview('');
    } else {
      dispatch(noValue())
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='form-group'>
          <label htmlFor='name'> Name: </label>
          <input
            className='form-control'
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='author'> Author: </label>
          <input
            className='form-control'
            type='text'
            id='author'
            name='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
      </div>

      <div className='row'>
        <div className='form-group'>
          <label htmlFor='image'> Image src: </label>
          <input
            className='form-control'
            type='text'
            id='image'
            name='image'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='review'> Review: </label>
          <textarea
            className='form-control'
            type='text'
            id='review'
            name='review'
            value={review}
            maxLength="1500"
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
      </div>
      
      <button type='submit' className='btn btn-primary deleteBookBtn'>
        {' '}
        Submit{' '}
      </button>
    </form>
  )
}

export default Form