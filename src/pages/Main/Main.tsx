import { Route, Routes } from 'react-router-dom';
import Search from '../Search/Search';
import "./main.css"
import Login from '../Login/Login';

import AdminPage from '../adminpage/AdminPage';
import Contact from '../Contact/Contact';

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Search />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/admin' element={<AdminPage />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
            </Routes>
        </main>
    );
}

export default Main;
