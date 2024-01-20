import React,{useState,useEffect} from 'react'
import axios from 'axios'

const CategoryList = () => {

  const [categories, setCategories] = useState([])

  useEffect(()=>{
    getuser()
  },[])

  const getuser = async() =>{
    const response = await axios.get('http://localhost:5000/categories')
    setCategories(response.data)
  }

  return (
    <div className='columns'>
      <div className="colomn is-half">
        <table className='table is-striped is-fullwidth mt-5'>
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
            {categories.map((category,index) => (
            <tr key={category._id}>
              <td>{index + 1}</td>
              <td>{category._id}</td>
              <td>{category.name}</td>
              <td>{category.created_at}</td>
              <td>{category.updated_at}</td>
              <td>
                <button className='button is-info is-small'>Edit</button>
                <button className='button is-danger is-small'>Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CategoryList
