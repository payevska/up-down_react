import React from 'react';
import '../styles/style.scss';
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <div className="error-page">
            <h2>404</h2>
            <h3>page not found</h3>
            <Link to="/">
                <input type="button" value="вернуться на главную страницу" />
            </Link>
        </div>
    );
}

export default Error;
