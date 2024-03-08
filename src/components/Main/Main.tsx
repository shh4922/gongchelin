import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Info from '../Routes/Info/Info';
import Search from '../Routes/Search/Search';
import Request from '../Routes/Request/Request';
import "./main.css"
function Main() {
    return (
        <main>
            <Routes>
                <Route path='/info' element={<Info/>}></Route>
                <Route path='/' element={<Search/>}></Route>
                <Route path='/request' element={<Request/>}></Route>
            </Routes>
        </main>
    );
}

export default Main;
