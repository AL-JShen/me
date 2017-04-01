import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import Hobbies from './Hobbies';
import Media from './Media';
import './App.css';

export default class Body extends Component {
    render() {
        return (
          <Router>
            <div>
                <div className='navbar'>
                    <ul>
                        <li>
                            <Link to='/about' style={{ textDecoration: 'none', color: 'black', fontSize: '1.25em' }}>About</Link>
                        </li>
                        <li>
                            <Link to='/hobbies' style={{ textDecoration: 'none', color: 'black', fontSize: '1.25em' }}>Hobbies</Link>
                        </li>
                        <li>
                            <Link to='/media' style={{ textDecoration: 'none', color: 'black', fontSize: '1.25em' }}>Media</Link>
                        </li>
                    </ul>
                </div>
                <div className='body'>
                    <Route path='/about' component={About}/>
                    <Route path='/hobbies' component={Hobbies}/>
                    <Route path='/media' component={Media}/>
                </div>
            </div>
            </Router>
        );
    }
}