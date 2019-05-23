import React from 'react';
import style from './home.css';
import { Link } from 'react-router-dom';
class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <h1 className={style.title} id="title">Title</h1>
                <Link to="/">Link</Link>
            </>
        )
    }
}

export default Home;