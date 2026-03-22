import { BrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'
import './app.css'

import Header from './pages/header';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import ProjectMenu from './pages/projectMenu';

function App() {

    return (
        <div className='main_main'>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path='/' element=<AboutMe /> />
                    <Route path='/contact' element=<Contact /> />
                    <Route path='/projects' element=<ProjectMenu /> />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;