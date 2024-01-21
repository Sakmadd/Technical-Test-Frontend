import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const BookByCategoryList = () => {

  const [books, setBooks] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    getBookByCategoryId()
  })

  const getBookByCategoryId = async() =>{
    const response = await axios.get(`http://localhost:5000/categories/${id}/books`)
    setBooks(response.data)
  }

  const deletebook = async(id) =>{
    try {
      await axios.delete(`http://localhost:5000/books/${id}`)
      getBookByCategoryId()
    } catch (error) {
      console.log(error)
    }
  }

  return (

      <><h5 className='has-text-centered is-size-1 mt-5'>BOOKS BY CATEGORY</h5>
      <div className="buttons is-centered my-5">
      <Link to="/books/add" className='button is-success'>Add New Book</Link>
      </div>
      <div className='columns'>
      <div className="colomn is-half mt-5 mx-auto">
        <table className='table is-striped is-fullwidth '>
          <thead>
            <tr>
              <th>No</th>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image URL</th>
              <th>Release Year</th>
              <th>Price</th>
              <th>Total Page</th>
              <th>Thickness</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book._id}</td>
                <td>{book.title}</td>
                <td>{book.description}</td>
                <td>{book.image_url}</td>
                <td>{book.release_year}</td>
                <td>{book.price}</td>
                <td>{book.total_page}</td>
                <td>{book.thickness}</td>
                <td>{book.created_at}</td>
                <td>{book.updated_at}</td>
                <td>
                  <Link to={`/books/edit/${book._id}`} className='button is-info is-small'>Edit</Link>
                  <button onClick={() => deletebook(book._id)} className='button is-danger is-small'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></>
  )
}

export default BookByCategoryList
