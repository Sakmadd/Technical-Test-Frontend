import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CategoryList = () => {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    getCategory()
  },[])

  

  const getCategory = async() =>{
    const response = await axios.get('http://localhost:5000/categories')
    setCategories(response.data)
  }
  
  const deleteCategory = async(id) =>{
    try {
      await axios.delete(`http://localhost:5000/categories/${id}`)
      getCategory()
    } catch (error) {
      console.log(error)
    }
  }

  return (
      <><h5 className='has-text-centered is-size-1 mt-5'>CATEGORIES</h5>
      <div className="buttons is-centered my-5">
      <Link to="/category/add" className='button is-success'>Add New Category</Link>
      </div>
      <div className='columns'>
      <div className="colomn is-half mt-5 mx-auto">
        <table className='table is-striped is-fullwidth '>
          <thead>
            <tr>
              <th>No</th>
              <th>Id</th>
              <th>Name</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category._id}>
                <td>{index + 1}</td>
                <td>{category._id}</td>
                <td>{category.name}</td>
                <td>{category.created_at}</td>
                <td>{category.updated_at}</td>
                <td>
                  <Link to={`/categories/${category._id}`} className='button is-warning is-small'>Collection</Link>
                  <Link to={`/category/book/add/${category._id}`} className='button is-success is-small'>Add</Link>
                  <Link to={`/category/edit/${category._id}`} className='button is-info is-small'>Edit</Link>
                  <button onClick={() => deleteCategory(category._id)} className='button is-danger is-small'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></>
  )
}

export default CategoryList
