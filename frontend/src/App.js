import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import BlocklyDuino from "react-blockly";
import logo from './component/code_asthram.png';
import html2canvas from 'html2canvas';
import "./css/bootstrap.min.3.3.6.css";
import "./css/blocklino.css";
import { toggleModal } from "./scripts/buttonFunctions";


export default function App() {

  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  const fileInputRef = useRef(null);
  const workspaceRef = useRef(null);
  const navigate = useNavigate();

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  
    const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "rgb(91, 128, 165)",
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
        colour: "#5bb689",
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
    const code = Blockly.Python.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const xmlContent = reader.result;
        loadWorkspaceFromXml(xmlContent);
      };
      reader.readAsText(file);
    }
  };
  
  const loadWorkspaceFromXml = (xmlContent) => {
    try {
      const xml = Blockly.Xml.textToDom(xmlContent);
      Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, BlocklyDuino.workspace);
    } catch (error) {
      console.error('Error loading XML:', error);
      // Handle the error, e.g., show an alert to the user
    }
  };

  const handleOpenButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleNewButtonClick = () => {
    window.location.reload();
  };

  const saveXmlFile = () => {
    const blob = new Blob([xml], { type: 'application/xml' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'workspace.xml';
    link.click();
  };

  const handleLogoutButtonClick = () => {
    navigate("/");
  };

  const saveInoFile = () => {
    const inoCode = javascriptCode; // assuming javascriptCode holds the Arduino code
    const blob = new Blob([inoCode], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'arduino_code.ino';
    link.click();
  };
  
  const copyToClipboard = () => {
    const textarea = document.getElementById('code'); // Assuming 'code' is the ID of your textarea
    textarea.select();
    document.execCommand('copy');
  };
  
  const takeScreenshot = () => {
    const workspaceElement = workspaceRef.current ; // Replace with the actual class or ID of your BlocklyWorkspace
  
    if (workspaceElement) {
      setTimeout(() => {
        html2canvas(workspaceElement).then((canvas) => {
          const screenshotUrl = canvas.toDataURL('image/png');
          // Now you can save or display the screenshotUrl as needed
          // For example, you can create a link to download the image
          const link = document.createElement('a');
          link.href = screenshotUrl;
          link.download = 'workspace_screenshot.png';
          link.click();
        });
      }, 200);
    }
  };
  

  return (
    <>
    <input
  type="file"
  id="fileInput"
  ref={fileInputRef} 
  style={{ display: 'none' }} // Hide the input element
  onChange={handleFileInputChange}
/>
      <div>
        <div>
          <div className="div1">
            <table className="maintable">
              <tbody>
                <tr>
                  <td className="td1">
                    <div className="button-div">
                      <button title="New" className="b01" 
                      id="btn_new"
                      onClick={handleNewButtonClick}
                      ></button>
                      
                      <button
                        onClick={handleOpenButtonClick}
                        title="Open"
                        className="b02"
                        id="btn_fakeload"
                      ></button>

                      <button
                        title="Save.tarblock"
                        className="b03"
                        id="btn_savexml"
                        onClick={saveXmlFile}
                      ></button>
                      <button
                        id="btn_print"
                        title="Screenshot.png"
                        className="b04"
                        onClick={takeScreenshot}
                      ></button>
                     
                      <button
                        title="Arduino code preview"
                        className="b06"
                        id="btn_preview"
                        onClick={() => toggleModal()}
                      ></button>
                      <button
                        title="Logout"
                        className="b07"
                        id="btn_logout"
                        onClick={handleLogoutButtonClick}
                      ></button>
                    </div>
                  </td>
                  <td className="td2">
                    <div className="logo-div">
                      <img className="logo-main" src={logo} />
                    </div>
                  </td>
                  <td className="td3" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="workspace" ref={workspaceRef}>
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
          style={{backGround: '#FFFFFF'}}
        />

        <div id="toggle" class="modal-content" style={{ display: "none", top:"80px", bottom:"100px" }}>
          <pre id="pre_previewArduino">
            <textarea
              className="textarea"
              id="code"
              style={{
                height: "100%",
                width: "100%",
                boxSizing: "border-box",
                resize: "none",
                border: "none"
              }}
              value={javascriptCode}
              readOnly
            ></textarea>
          </pre>
          <div id="btn_group" class="btn-group" role="group">
            <button
              id="btn_saveino"
              class="btn btn-default"
              title="Save as .ino"
              onClick={saveInoFile}
            >
              <span class="fa fa-floppy-o"> </span>
            </button>
            <button id="btn_copy" class="btn btn-default" 
            onClick={copyToClipboard}
            title="Copy">
              <span class="fa fa-files-o"> </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
