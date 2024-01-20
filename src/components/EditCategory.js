import React,{useState} from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';


const EditCategory = () => {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()



    const updateCategory = async (e)=> {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/categories/${id}`,{
                name
            })
            navigate('/categories')
        } catch (error) {
            console.log(error)
        }
    }


    return (
    <div className="columns">
        <div className="column is-half mt-5 mx-auto">
            <form onSubmit={updateCategory}>
            <div className="field">
                <label className='label'>Edit Category</label>
                <div className="control">
                    <input type="text" className="input" placeholder='Name of category' value={name} onChange={(e) => setName(e.target.value)} />    
                </div>    
            </div>
            <div className="field">
                <div className="control">
                   <button type='submit' className="button is-success">Update</button>
                </div>    
            </div>
            </form>
        </div>
    </div>
  )
}

export default EditCategory
