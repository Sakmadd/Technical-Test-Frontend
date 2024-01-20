import React,{useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const [name,setName] = useState("")
    const navigate = useNavigate()
    const saveCategory = async (e)=> {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/categories',{name})
            navigate('/categories')
        } catch (error) {
            console.log(error)
        }
    }


    return (
    <div className="columns">
        <div className="column is-half mt-5 mx-auto">
            <form onSubmit={saveCategory}>
            <div className="field">
                <label className='label'>Create New Category</label>
                <div className="control">
                    <input type="text" className="input" placeholder='Name of category' value={name} onChange={(e) => setName(e.target.value)} />    
                </div>    
            </div>
            <div className="field">
                <div className="control">
                   <button type='submit' className="button is-success">Save</button>
                </div>    
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddCategory
