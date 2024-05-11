import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Search from '../Search/Search';
import "./main.css"
import Login from '../Login/Login';

import AdminPage from '../adminpage/AdminPage';
import Contact from '../Contact/Contact';
import Info from '../info/Info';
import UpdateBoard from '../updateBoard/UpdateBoard';
import ReadMe from '../ReadMe/ReadMe';
import Foogja from '../Foogja/Foogja';

function Main() {
    
    
    return (
        <main>
            <Routes>
                <Route path='/' element={<Search />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/admin' element={<AdminPage />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/readme' element={<ReadMe />}></Route>
                <Route path='/info/:id' element={<Info />}></Route>
                <Route path='/updateBoard' element={<UpdateBoard />}></Route>
                <Route path="*" element={<h1>404Error</h1>} />
            </Routes>
        </main>
    );
}

export default Main;
