import React from 'react';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Aboutme from './aboutme';
import Main from './main'

function MainPage()
{
    return(
                <Routes>
                    <Route exact path="/" element={<Main/>} />
                    <Route path="/aboutme" element={<Aboutme/>} />
                </Routes>
    )
}

export default MainPage;