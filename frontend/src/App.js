import "./App.css";
import "./customBlocks/custom_Blocks";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import BlocklyDuino from "react-blockly";
import "./customBlocks/LogicBlocks.js";
import logo from './component/code_asthram.png';
import html2canvas from 'html2canvas';
import "./css/bootstrap.min.3.3.6.css";
import "./css/blocklino.css";
import { toggleModal } from "./scripts/buttonFunctions";
import "./customBlocks/openCv.js";
import "./customBlocks/turtleBlocks.js";
import "./customBlocks/plotting.js";
import "./customBlocks/systemFunctions.js";
import "./customBlocks/Structure.js";
import "./customBlocks/fileHandling.js";
import "./customBlocks/Variable.js";


export default function App() {

  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState("");

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
          { kind: "block", type: "controls_if",},
          {kind: "block", type: "logic_compare",},
          { kind: "block",type: "logic_operation", },
          { kind: "block",type: "logic_negate",},
          {kind: "block",type: "logic_boolean", },
          { kind: "block",type: "logic_null",},
          { kind: "block",type: "logic_ternary", },
        ], },
      {
        kind: "category",
        name: "Loops",
        colour: "#5bb689",
        contents: [
          {
            kind: "block",
            type: "controls_repeat_ext",
          },
          {
            kind: "block",
            type: "controls_whileUntil",
          },
          {
            kind: "block",
            type: "controls_for",
          },
          {
            kind: "block",
            type: "controls_forEach",
          },
          {
            kind: "block",
            type: "controls_flow_statements",
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
          {
            kind: "block",
            type: "math_arithmetic",
          },
          {
            kind: "block",
            type: "math_single",
          },
          {
            kind: "block",
            type: "math_trig",
          },
          {
            kind: "block",
            type: "math_constant",
          },
          {
            kind: "block",
            type: "math_on_list",
          },
          {
            kind: "block",
            type: "math_modulo",
          },
          {
            kind: "block",
            type: "math_constrain",
          },
          /*{
            kind: "block",
            type: "math_random_init",
          },*/
          {
            kind: "block",
            type: "math_random_float",
          },
          {
            kind: "block",
            type: "math_atan2",
          },
        ],
      },

      {
        kind: "category",
        name: "Text",
        colour: "#5CA699",
        contents: [
          {
            kind: "block",
            type: "text",
          },
          {
            kind: "block",
            type: "text_join",
          },
          {
            kind: "block",
            type: "text_append",
          },
          {
            kind: "block",
            type: "text_length",
          },
          {
            kind: "block",
            type: "text_isEmpty",
          },
          {
            kind: "block",
            type: "text_indexOf",
          },
          {
            kind: "block",
            type: "text_charAt",
          },
          {
            kind: "block",
            type: "text_getSubstring",
          },
          {
            kind: "block",
            type: "text_changeCase",
          },
          {
            kind: "block",
            type: "text_trim",
          },
          {
            kind: "block",
            type: "text_print",
          },
          {
            kind: "block",
            type: "text_prompt_ext",
          },
        ],
      },
      {
        kind: "category",
        name: "Lists",
        colour: "#5CA699",
        contents: [
          {
            kind: "block",
            type: "lists_create_with",
          },
          {
            kind: "block",
            type: "lists_repeat",
          },
          {
            kind: "block",
            type: "lists_length",
          },
          {
            kind: "block",
            type: "lists_isEmpty",
          },
          {
            kind: "block",
            type: "lists_indexOf",
          },
          {
            kind: "block",
            type: "lists_getIndex",
          },
          {
            kind: "block",
            type: "lists_setIndex",
          },
          {
            kind: "block",
            type: "lists_getSublist",
          },
          {
            kind: "block",
            type: "lists_split",
          },
          {
            kind: "block",
            type: "lists_sort",
          },
        ],
      },
      {
        kind: "category",
        name: "Colours",
        colour: "#5CA699",
        contents: [
          {
            kind: "block",
            type: "colour_picker",
          },
          {
            kind: "block",
            type: "colour_random",
          },
          {
            kind: "block",
            type: "colour_rgb",
          },
          {
            kind: "block",
            type: "colour_blend",
          },
          
        ],
      },

      {
        kind: "category",
        name: "Variables",
        colour: "#393938",
        contents: [
          {
            kind: "block",
            type: "create_variable_button",
          },
          {
            kind: "block",
            type: "matplotlib_xlabel",
          },
          { kind: "block", type: "matplotlib_ylabel",},
          { kind: "block", type: "matplotlib_show",},
          { kind: "block", type: "numpy_linspace",},
          { kind: "block", type: "numpy_arange",},
          { kind: "block", type: "numpy_array",},
          { kind: "block", type: "numpy_trigonometric",},
          { kind: "block", type: "numpy_exp",},
        ],
      },
      
      {
        kind: "category",
        name: "Structure",
        colour: "#393938",
        contents: [
          {
            kind: "block",
            type: "variable_declaration",
          },
          {
            kind: "block",
            type: "matplotlib_xlabel",
          },
          { kind: "block", type: "matplotlib_ylabel",},
          { kind: "block", type: "matplotlib_show",},
          { kind: "block", type: "numpy_linspace",},
          { kind: "block", type: "numpy_arange",},
          { kind: "block", type: "numpy_array",},
          { kind: "block", type: "numpy_trigonometric",},
          { kind: "block", type: "numpy_exp",},
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

      {
        kind: "category",
        name: "Turtle",
        colour: "#be0027",
        contents: [
          {
            kind: "block",
            type: "turtle_command",
          },
          {
            kind: "block",
            type: "turtle_turn",
          },
          { kind: "block", type: "turtle_shape",},
          { kind: "block", type: "turtle_pen",},
          { kind: "block", type: "turtle_color",},
          { kind: "block", type: "turtle_write",},
          { kind: "block", type: "turtle_goto",},
          /*{ kind: "block", type: "turtle_pos",},*/
          { kind: "block", type: "turtle_stamp",},
          { kind: "block", type: "turtle_begin_fill",},
          { kind: "block", type: "turtle_end_fill",},
          { kind: "block", type: "turtle_speed",},
        ],
      },

      {
        kind: "category",
        name: "Plotting",
        colour: "#393938",
        contents: [
          {
            kind: "block",
            type: "matplotlib_title",
          },
          {
            kind: "block",
            type: "matplotlib_xlabel",
          },
          { kind: "block", type: "matplotlib_ylabel",},
          { kind: "block", type: "matplotlib_show",},
          { kind: "block", type: "numpy_linspace",},
          { kind: "block", type: "numpy_arange",},
          { kind: "block", type: "numpy_array",},
          { kind: "block", type: "numpy_trigonometric",},
          { kind: "block", type: "numpy_exp",},
        ],
      },

      {
        kind: "category",
        name: "System Functions",
        colour: "#393938",
        contents: [
          {
            kind: "block",
            type: "delay",
          },
          {
            kind: "block",
            type: "delayed_execution",
          },
          { kind: "block", type: "matplotlib_ylabel",},
          { kind: "block", type: "matplotlib_show",},
          { kind: "block", type: "numpy_linspace",},
          { kind: "block", type: "numpy_arange",},
          { kind: "block", type: "numpy_array",},
          { kind: "block", type: "numpy_trigonometric",},
          { kind: "block", type: "numpy_exp",},
        ],
      },

      {
        kind: "category",
        name: "File Handling",
        colour: "#393938",
        contents: [
          {
            kind: "block",
            type: "file_open",
          },
          {
            kind: "block",
            type: "file_read",
          },
          { kind: "block", type: "file_write",},
          { kind: "block", type: "file_close",},
          { kind: "block", type: "get_file_contents",},
          { kind: "block", type: "file_handling_with_input",},
          { kind: "block", type: "print",},
          { kind: "block", type: "numpy_trigonometric",},
          { kind: "block", type: "numpy_exp",},
        ],
      },
  
              {
                kind: "category",
                name: "Logic Blocks",
                colour: "rgb(91, 128, 165)",
                contents: [
                  {
                    kind: "block",
                    type: "arithmetic_operator",
                  },
                  {
                    kind: "block",
                    type: "comparison_operator",
                  },
                  {
                    kind: "block",
                    type: "logical_operator",
                  },
                  {
                    kind: "block",
                    type: "bitwise_operator",
                  },
                  {
                    kind: "block",
                    type: "assignment_operator",
                  },
                  {
                    kind: "block",
                    type: "identity_operator",
                  },
                  {
                    kind: "block",
                    type: "membership_operator",
                  },
                ],
              },
              {
                kind: "category",
                name: "Open CV",
                colour: "#000",
                contents: [
                  {
                    kind: "block",
                    type: "cv2_readimage",
                  },
                  {
                    kind: "block",
                    type: "cv2_showimage",
                  },
                  {
                    kind: "block",
                    type: "cv2_waitkey",
                  },
                  {
                    kind: "block",
                    type: "cv2_destroyall",
                  },
                  {
                    kind: "block",
                    type: "cv2_imagewrite",
                  },
                  {
                    kind: "block",
                    type: "cv2_capturevideo",
                  },
                  {
                    kind: "block",
                    type: "cv2_videoread",
                  },
                  {
                    kind: "block",
                    type: "cv2_cap_release",
                  },
                  {
                    kind: "block",
                    type: "cv2_capturevideo_file",
                  },
                  {
                    kind: "block",
                    type: "cv2_waitkey2",
                  },
                  {
                    kind: "block",
                    type: "cv2_createimage",
                  },
                  /*{
                    kind: "block",
                    type: "cv2_drawline",
                  },
                  {
                    kind: "block",
                    type: "cv2_drawrectangle",
                  },
                  {
                    kind: "block",
                    type: "cv2_puttext",
                  },
                  {
                    kind: "block",
                    type: "cv2_roi",
                  },
                  {
                    kind: "block",
                    type: "cv2_roi_affect",
                  },
                  {
                    kind: "block",
                    type: "cv2_convertimage",
                  },
                  {
                    kind: "block",
                    type: "cv2_isopen",
                  },
                  {
                    kind: "block",
                    type: "cv2_imageprop",
                  },
                  {
                    kind: "block",
                    type: "cv2_imageadditionw",
                  },
                  {
                    kind: "block",
                    type: "cv2_gettick",
                  },
                  {
                    kind: "block",
                    type: "cv2_cascadeclassifier",
                  },
                  {
                    kind: "block",
                    type: "cv2_CascadeClassifier",
                  },
                  {
                    kind: "block",
                    type: "cv2_detectmultiscale_1p",
                  },
                  {
                    kind: "block",
                    type: "cv2_detectmultiscale_3p",
                  },
                  {
                    kind: "block",
                    type: "cv2_calculatediffpercentage",
                  },
                  {
                    kind: "block",
                    type: "qr_reader_decode",
                  },
                  {
                    kind: "block",
                    type: "qr_reader_data",
                  },
                  {
                    kind: "block",
                    type: "cv2_getproplist",
                  },
                  {
                    kind: "block",
                    type: "cv2_getpropnum",
                  },
                  {
                    kind: "block",
                    type: "cv2_Setproplist",
                  },
                  {
                    kind: "block",
                    type: "cv2_SetpropVal",
                  },
                  {
                    kind: "block",
                    type: "ocr_image_to_string",
                  },
                  {
                    kind: "block",
                    type: "capture_image_stream",
                  },
                  {
                    kind: "block",
                    type: "cv2_getproplist",
                  },*/
                  
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
                        title="Save.xml"
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
                      <img className="logo-main" alt="Code-Asthram-Logo" src={logo} />
                    </div>
                  </td>
                  <td>
                  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="workspace" ref={workspaceRef} style={{overflowY: 'auto'}}>
  
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
          style={{backgroundColor: "#ffffff", border:"none"}}
        >
        <div
    slot="toolbox"
    style={{ overflowY: 'auto', maxHeight: '100vh' }}
  />
  </BlocklyWorkspace>

        <div id="toggle" className="modal-content" style={{ display: "none", top:"80px", bottom:"100px" }}>
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
