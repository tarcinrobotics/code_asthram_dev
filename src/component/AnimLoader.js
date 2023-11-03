import React, { useState, useEffect } from 'react'
import SyncLoader from "react-spinners/SyncLoader";
import './animloader.css'
import App from '../App';
import PreLogo from './code_asthram_logo.png'


function AnimLoader() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
                    setLoading(true)
    setTimeout(() => {
                    setLoading(false)
    
                }, 2000)
    }, [])
    return (
        <div>
            <div>
                {loading ? (

                    <div  className='loader'>
                    
                    <img src={PreLogo} height={100} alt='Loading...'/>

                    <div className='anim'>
                    <SyncLoader color={"#FFFFFF"} loading={loading} size={10} />
                    </div>
                    
                    </div>)
                    
                    : (
                    <App />
                )}
            </div>
            </div>

    )
}

export default AnimLoader