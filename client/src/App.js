
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ListContact from './Components/ListContact';
import NavContact from './Components/NavContact';
import EditContact from './Components/EditContact';
import AddContact from './Components/AddContact'


function App() {
  return (
    <div>
    <NavContact/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/List_Contact' element={<ListContact/>}/>
      <Route path='/Add_Contact' element={<AddContact/>}/>
      <Route path='/Edit_Contact/:id' element={<EditContact/>}/>
    </Routes>
    </div>
  )
}

export default App;
