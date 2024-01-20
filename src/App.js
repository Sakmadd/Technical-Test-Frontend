import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CategoryList from "./components/CategoryList";
import AddCategory from './components/AddCategory';
import EditCategory from './components/EditCategory';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
        <Routes>
          <Route path='/categories' element={<CategoryList/>}/>
          <Route path='/category/add' element={<AddCategory/>}/>
          <Route path='/category/edit/:id' element={<EditCategory/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
