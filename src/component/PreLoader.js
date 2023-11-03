import './preloader.css'
import logo from './code_asthram.png'  /* loading image as a variable */
import App from '../App';



function PreLoader() {
<div className='preloader'>
        <div className='outer'>
            <span className='inner'>
              <img src={logo} height={45} alt='No image'/>
            </span>
        </div>
    </div>

}

export default PreLoader