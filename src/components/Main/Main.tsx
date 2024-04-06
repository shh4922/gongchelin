import { Route, Routes } from 'react-router-dom';
import Info from '../Routes/Info/Info';
import Search from '../Routes/Search/Search';
import Request from '../Routes/Request/Request';
import "./main.css"
import Login from '../../pages/Login/Login';
function Main() {
    return (
        <main>
            <Routes>
                <Route path='/info' element={<Info/>}></Route>
                <Route path='/' element={<Search/>}></Route>
                <Route path='/request' element={<Request/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
        </main>
    );
}

export default Main;
