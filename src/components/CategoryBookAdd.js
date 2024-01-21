import React,{useEffect, useState} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';


const CategoryBookAdd = () => {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [image_url,setImageUrl] = useState("")
    const [release_year,setReleaseYear] = useState("")
    const [price,setPrice] = useState("")
    const [total_page,setTotalPage] = useState("")
    const [category_id,setCategoryId] = useState("")

    const {id} = useParams()

    useEffect(()=>{
        getCategoryById()
    })

    const getCategoryById = async ()=>{
        const response = await axios.get(`http://localhost:5000/categories/${id}`)
        setCategoryId(response.data._id)
        console.log(response._id)
    }

    const navigate = useNavigate()

    const saveBook = async (e)=> {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/books',{title,description,image_url,release_year,price,total_page,category_id})
            navigate(`/categories/${id}`)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <><h5 className='has-text-centered is-size-1 mt-5'>ADD NEW BOOK</h5>
        <div className="columns">
            <div className="column is-half mt-5 mx-auto">
                <form onSubmit={saveBook}>
                    <div className="field">
                        <label className='label'>Title</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Tittle' value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Description</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Image Url</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Link to Image' value={image_url} onChange={(e) => setImageUrl(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Release Year</label>
                        <div className="control">
                            <input type="number" className="input" placeholder='The Year Of Book Release' value={release_year} onChange={(e) => setReleaseYear(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Price</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='Price Of The Book' value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Total Page</label>
                        <div className="control">
                            <input type="number" className="input" placeholder='Total Page' value={total_page} onChange={(e) => setTotalPage(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Category ID</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='The Id Category For The Book' value={category_id} onChange={(e) => setCategoryId(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button type='submit' className="button is-success">Apply</button>
                        </div>
                    </div>
                </form>
            </div>
        </div></>
  )
}


export default CategoryBookAdd
