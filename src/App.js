import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './component/code_asthram.png';
import './media/btn_add.png';
import './css/buttons.css';


function App() {

  return (
    
    <div>

    <div className='div1'>
      <table className='maintable'>
        <tbody>
          <tr>
            <td className='td1'>    
            <div className='button-div'>
              <button title='New' className ="b01" id="btn_new">
              </button>
              <button title='Open' className ="b02" id="btn_fakeload"> 
              </button>
              <button title='Save.tarblock' className ="b03" id="btn_savexml"> 
              </button>
              <button title='Screenshot.png' className ="b04" id="btn_print"> 
              </button>
              <button title='Serial monitor' className ="b05" id="btn_term"> 
              </button>
              <button title='Arduino code preview' className ="b06" id="btn_preview"> 
              </button>
              <button title='Logout' className ="b07" id="btn_logout"> 
              </button>
              </div>                
            </td>
            <td className='td2'>
              <div className='logo-div'>
                <img className='logo-main' src={logo}/>
              </div>
    
            </td>
            <td className='td3'/>
              
              {/*<select id="boards" className ="ard" onchange="BlocklyDuino.change_card();"
                style="margin:3px;height:31px;width:180px;outline:none;border-radius: 10px;text-align: left;padding-lef: 18px">
                <optgroup label="Arduino">
                <option value="micro">Arduino Micro</option>
                <option value="pro8">Arduino Pro Mini</option>
                <option value="nanooptiboot">Arduino Nano</option>
                <option value="nano">Arduino Nano Old</option>
                <option value="nona4809">Arduino Nano Every</option>
                <option value="uno">Arduino Uno</option>
                <option value="leo32u4">Arduino leonardo</option>
                <option value="yun">Arduino Yun</option>
                <option value="mega">Arduino Mega</option>
                </optgroup>
                <optgroup label="ESP">
                <option value="esp826601">ESP 8266 01</option>
                <option value="esp826612">ESP 8266 12</option>
                <option value="esp32">ESP 32</option>
                </optgroup>
    
              </select>
    
              <select id="portserie" className ="ard" onchange="BlocklyDuino.save_com();" style="margin:3px;height:26px;width:170px;outline:none;border-radis: 10p"></select>*/}
              
          </tr>
        </tbody>
      </table>
    </div>
    

    
    </div>


  );
}

export default App;
