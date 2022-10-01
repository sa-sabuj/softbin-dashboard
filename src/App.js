import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MainSite from './components/MainSite/MainSite';
import News from './components/News/News';
import UserPolicy from './components/UserPolicy/UserPolicy'
import Contact from './components/Contact/Contact';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import PageList from './components/PageList/PageList';
import NotFound from './components/NotFound/NotFound';






function App() {
  return (
    <div >
      <Header></Header>
      {/* <LeftSidebar></LeftSidebar>
      <RightSidebar></RightSidebar> */}
      <Routes>
        <Route path='/' element={<MainSite></MainSite>}></Route>
        <Route path='/mainsite' element={<MainSite></MainSite>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/user' element={<UserPolicy></UserPolicy>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/pages' element={<PageList></PageList>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>

      
    </div>
  );
}

export default App;
