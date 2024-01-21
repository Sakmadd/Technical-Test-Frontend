import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CategoryList from "./components/CategoryList";
import AddCategory from './components/AddCategory';
import EditCategory from './components/EditCategory';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import CategoryBookAdd from './components/CategoryBookAdd';
import BookByCategoryList from './components/BookByCategoryList';
import EditBook from './components/EditBook';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
        <Routes>
          <Route path='/categories' element={<CategoryList/>}/>
          <Route path='/categories/:id' element={<BookByCategoryList/>}/>
          <Route path='/category/add' element={<AddCategory/>}/>
          <Route path='/category/edit/:id' element={<EditCategory/>}/>
          <Route path='/category/book/add/:id' element={<CategoryBookAdd/>}/>
          <Route path='/books' element={<BookList/>}/>
          <Route path='/books/add' element={<AddBook/>}/>
          <Route path='/books/edit/:id' element={<EditBook/>}/>

        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
