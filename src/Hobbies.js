import React, {Component} from 'react';
import './App.css';

export default class Hobbies extends Component {
    render() {
        return (
            <div className='hobbies'>
                <h3>Hobbies</h3>
                <div className='hobbyList'>
                    <ul>
                        <li>Coding</li>
                        <li>Browing the Internet</li>
                        <li>Sleeping</li>
                        <li>Reading</li>
                        <li>Writing</li>
                        <li>Eating</li>
                    </ul>
                </div>
                <p>A look at my <a href='https://www.reddit.com/user/skyrious'>Reddit account</a> would probably provide more information about me.</p>
            </div>
        );
    }
}