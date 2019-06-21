import React from 'react';
import './loader.scss';

const Loader = (props) => {
    return (
        <>
            {props.isLoading &&
                <div className="lds-ripple">
                    <div></div><div></div>
                </div>
            }
        </>
    );
}

export default Loader;