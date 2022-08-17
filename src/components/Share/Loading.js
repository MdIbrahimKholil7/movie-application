import React from 'react';
import loading from '../../assets/loading.gif'
import '../Style/Loading.css'
const Loading = () => {
    return (
        <div className='loading'>
            <img src={loading} alt="loadingImg" />
        </div>
    );
};

export default Loading;