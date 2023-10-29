import React from 'react';
import './loading.css';
const Loading = () => {
    return (
        <div className='loading_wrapper'>
            <div className="lds-ripple"><div></div><div></div></div>
        </div>
    );
};

export default Loading;