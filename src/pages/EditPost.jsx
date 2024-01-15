import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorzied');
  const [description, setDescription] = useState('');
  const [thumbImage, setThumbImage] = useState('');

  const postCategories = ['Education', 'Discovery', 'Agreculture', 'Entertainment', 'Music', 'Art', 'Buusiness', 'Investment', 'Fashion', 'Sports', 'Science', 'Weather']

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '+1' }, { 'indent': '-1' }],
      ['link', 'image'],
      ['clean']
    ]
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  return (
    <section className='editPost'>
      <div className='container form-container editPost-container'>
        <h2>Edit Posts</h2>
        <form action="" className="form editPost-form">
          <p className="form-message">This is the invalid message</p>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
          />
          <select name="category" value={category} id="" onChange={e => setCategory(e.target.value)}>
            {
              postCategories.map((cat, index) => <option key={index}>{cat}</option>)
            }
          </select>

          <ReactQuill modules={modules} formats={formats} value={description} onChange={e => setDescription(e.target.value)} />

          <input
            type="file"
            value={thumbImage}
            onChange={e => setThumbImage(e.target.value)}
            accept='png, jpg, jpeg'
          />

          <button className='btn btn-primary' type='submit'>Update</button>
        </form>
      </div>
    </section>
  )
}

export default EditPost