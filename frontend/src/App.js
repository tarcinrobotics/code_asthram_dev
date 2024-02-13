import "./App.css";
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


import "./customBlocks/custom_Blocks";
import "./customBlocks/LogicBlocks.js";
import "./customBlocks/openCv.js";
import "./customBlocks/turtleBlocks.js";
import "./customBlocks/plotting.js";
import "./customBlocks/systemFunctions.js";
import "./customBlocks/Structure.js";
import "./customBlocks/fileHandling.js";
import "./customBlocks/Variable.js";
import "./customBlocks/Sorting.js";
import "./customBlocks/Functions.js";


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
        colour: "#4169E1",
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
        colour: "#6A0DAD",
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
        colour: "#ED2939",
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
        colour: "#800000",
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
        colour: "#FFD700",
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
        colour: "#1D4E89",
        contents: [
          {kind: "block",type: "colour_picker", },
          { kind: "block",type: "colour_random", },
          {kind: "block",type: "colour_rgb", },
          { kind: "block",type: "colour_blend",},
          
        ],
      },

      {
        kind: "category",
        name: "Variables",
        colour: "#CA2C92",
        contents: [
          { kind: "block", type: "set_variable", },
          { kind: "block", type: "plain_variable", },
          { kind: "block", type: "array_declaration",},
          { kind: "block", type: "check_variable_value", },
          { kind: "block", type: "swap_variables", },
          { kind: "block", type: "copy_variable",},

          { kind: "block", type: "find_maximum_value", },
          { kind: "block", type: "calculate_average", },
          { kind: "block", type: "variable_scope",},
          { kind: "block", type: "increment_variable", },
          { kind: "block", type: "decrement_variable", },
          { kind: "block", type: "reset_variable",},

        ],
      },
      
      {
        kind: "category",
        name: "Structure",
        colour: "#FFD700",
        contents: [
          {kind: "block", type: "base_structure", },
          { kind: "block",type: "declaration_structure", },
          { kind: "block", type: "custom_yield",},
          {kind: "block", type: "if_else_structure", },
          { kind: "block",type: "for_loop_structure", },
          { kind: "block", type: "while_loop_structure",},
          {kind: "block", type: "do_while_loop_structure", },
          { kind: "block",type: "class_structure", },
          {kind: "block", type: "function_definition_structure", },
          { kind: "block",type: "try_catch_structure", },
          { kind: "block", type: "switch_case_structure",},
          
        ],
      },

      {
        kind: "category",
        name: "Functions",
        colour: "#4B0082",
        contents: [
          { kind: "block",type: "new_boundary_function",colour:"#191970" },
          {kind: "block",type: "return", },
          { kind: "block",type: "calculate_average", },
          {kind: "block",type: "find_maximum", },
          { kind: "block",type: "calculate_factorial", },
          { kind: "block",type: "calculate_sum", },
          {kind: "block",type: "calculate_median", },
          { kind: "block",type: "calculate_power", },
          { kind: "block",type: "calculate_standard_deviation", },
          {kind: "block",type: "calculate_variance", },
          { kind: "block",type: "calculate_mean_absolute_deviation", },
        ],
      },

      {
        kind: "category",
        name: "Turtle",
        colour: "#DC143C",
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
        colour: "#008080",
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
        name: "Sorting",
        colour: "#800020",
        contents: [
          {kind: "block",type: "initialize_array",},
          { kind: "block", type: "set_list_element",},
        {kind: "block",type: "bubble_sort_logic",},
          {kind: "block",type: "swap_elements",},
          { kind: "block", type: "for_loop",},
          { kind: "block", type: "if_statement",},
          {kind: "block",type: "return_statement",},
          { kind: "block", type: "insertion_sort_logic",},
          {kind: "block",type: "compare_elements",},
          { kind: "block", type: "merge_sort_logic",},
          {kind: "block",type: "merge",},
          {kind: "block",type: "quick_sort_logic",},
          { kind: "block", type: "partition",},
          {kind: "block",type: "combine",},
          {kind: "block",type: "bubble_sort",},
          { kind: "block", type: "insertion_sort",},
          {kind: "block",type: "merge_sort",},
        {kind: "block",type: "quick_sort",}
    
        ],
      },

      {
        kind: "category",
        name: "System Functions",
        colour: "#FF4500",
        contents: [
          {kind: "block",type: "delay",},
          { kind: "block", type: "delayed_execution",},
          {kind: "block",type: "file_system_functions",},
          { kind: "block", type: "system_info_functions",},   
          {kind: "block",type: "networking_functions",},
          { kind: "block", type: "system_configuration_functions",},
          {kind: "block",type: "system_monitoring_functions",},
          {kind: "block",type: "system_command_execution_functions",},
          {kind: "block",type: "system_time_functions",},
          { kind: "block", type: "system_exit_function",},
          {kind: "block",type: "system_reboot_function",},

        ],
      },

     

      {
        kind: "category",
        name: "File Handling",
        colour: "#7851A9",
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
          { kind: "block", type: "file_exists",},
          { kind: "block", type: "file_rename",},
          { kind: "block", type: "file_delete"},
          { kind: "block", type: "file_size",},
          { kind: "block", type: "file_extension",},
          { kind: "block", type: "list_files"},
          { kind: "block", type: "file_copy",},
          { kind: "block", type: "file_move"},
        ],
      },
  
      {
        "kind": "category",
        "name": "Open CV",
        "colour": "#00AEEF",
        "contents": [
          { kind: "block", type: "cv2_readimage", colour: "#6A5ACD" },
          { "kind": "block", "type": "cv2_showimage", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_waitkey", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_destroyall", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_imagewrite", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_capturevideo", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_videoread", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_cap_release", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_capturevideo_file", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_waitkey2", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_createimage", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_drawline", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_puttext", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_roi", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_roi_affect", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_convertimage", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_isopen", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_imageprop", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_imageadditionw", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_gettick", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_cascadeclassifier", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_detectmultiscale_1p", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_detectmultiscale_3p", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_calculatediffpercentage", "colour": "#6A5ACD" },
          { "kind": "block", "type": "qr_reader_decode", "colour": "#6A5ACD" },
          { "kind": "block", "type": "qr_reader_data", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_getproplist", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_getpropnum", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_Setproplist", "colour": "#6A5ACD" },
          { "kind": "block", "type": "cv2_SetpropVal", "colour": "#6A5ACD" },
          { "kind": "block", "type": "ocr_image_to_string", "colour": "#6A5ACD" },
          { "kind": "block", "type": "capture_image_stream", "colour": "#6A5ACD" }
        ]
      }
      
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
              colour: "#002244 ",
              snap: true,
            },
          }}
          onWorkspaceChange={workspaceDidChange}
          onXmlChange={setXml}
          style={{backgroundColor: "#002244 ", border:"none"}}
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
