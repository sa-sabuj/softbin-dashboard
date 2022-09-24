import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainSite from './components/MainSite/MainSite';
import News from './components/News/News';
import UserPolicy from './components/UserPolicy/UserPolicy'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<MainSite></MainSite>}></Route>
        <Route path='/mainsite' element={<MainSite></MainSite>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/user' element={<UserPolicy></UserPolicy>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
