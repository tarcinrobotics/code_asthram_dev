import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import logo from './component/code_asthram.png';

export default function App() {

  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#5C81A6",
        contents: [
          {
            kind: "block",
            type: "controls_if",
          },
          {
            kind: "block",
            type: "logic_compare",
          },
        ],
      },
      {
        kind: "category",
        name: "Math",
        colour: "#5CA65C",
        contents: [
          {
            kind: "block",
            type: "math_round",
          },
          {
            kind: "block",
            type: "math_number",
          },
        ],
      },
      {
        kind: "category",
        name: "Custom",
        colour: "#5CA699",
        contents: [
          {
            kind: "block",
            type: "new_boundary_function",
          },
          {
            kind: "block",
            type: "return",
          },
        ],
      },
    ],
  };
  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

  return (
    <>
      <div>
        <div>
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
              
          </tr>
        </tbody>
      </table>
    </div>
    
     </div>

        </div>

        <div className="workspace">
        <BlocklyWorkspace
          toolboxConfiguration={toolboxCategories}
          initialXml={initialXml}
          className="fill-height"
          workspaceConfiguration={{
            grid: {
              spacing: 20,
              length: 3,
              colour: "#ccc",
              snap: true,
            },
          }}
          onWorkspaceChange={workspaceDidChange}
          onXmlChange={setXml}
        />
        <pre id="generated-xml">{xml}</pre>
        <textarea
          id="code"
          style={{ height: "200px", width: "400px" }}
          value={javascriptCode}
          readOnly
        ></textarea>
        </div>
      </div>
    </>
  );
}
