import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" value="art" id="art" name="cat" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" value="science" id="science" name="cat" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" value="technology" id="technology" name="cat" />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" value="cinema" id="cinema" name="cat" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" value="design" id="design" name="cat" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" value="food" id="food" name="cat" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write