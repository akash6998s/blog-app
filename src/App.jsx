import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Post from './Post';
import Footer from './Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



const App = () => {
    return (
        <div className='body-bg'>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />   
                    </Route>
                    <Route exact path="/post">
                        <Post />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch> 
                <Footer/>
            </Router>  
        </div>
    )
}

export default App;
