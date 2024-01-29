// Import Blockly from 'blockly' only once in your project
import Blockly from 'blockly';

// Define a custom button field
Blockly.FieldButton = class extends Blockly.Field {
  constructor(text, callback) {
    super(text);
    this.callback_ = callback;
  }

  showEditor_() {
    var variableName = prompt('Enter variable name:');
    if (variableName && this.callback_) {
      this.callback_(variableName);
    }
  }
};

// Define the Blockly block
Blockly.Blocks['create_variable_button'] = {
  init: function() {
    var thisBlock = this;
    this.appendDummyInput()
        .appendField("Create Variable")
        .appendField(new Blockly.FieldButton("Create", function(variableName) {
          // Create a new variable block
          var variableBlock = thisBlock.workspace.newBlock('variables_get');
          variableBlock.setFieldValue(variableName, 'VAR');
          // Position the variable block
          var xy = thisBlock.getRelativeToSurfaceXY();
          variableBlock.moveBy(xy.x + 10, xy.y + 10);
        }));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(230);
    this.setTooltip('Create a new variable');
  }
};

// Define the Python code generator for the block
Blockly.Python['create_variable_button'] = function(block) {
  // This block doesn't generate Python code
  return '';
};
