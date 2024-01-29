import Blockly from "blockly";
import "blockly/python";

Blockly.Blocks['file_open'] = {
    init: function() {
      this.appendValueInput('FILE_PATH')
          .setCheck('String')
          .appendField('Open file');
      this.appendDummyInput()
          .appendField('with mode')
          .appendField(new Blockly.FieldDropdown([
            ['read', 'r'],
            ['write', 'w'],
            ['append', 'a']
          ]), 'MODE');
      this.setOutput(true, 'File');
      this.setColour(230);
      this.setTooltip('Open a file with the specified mode.');
    }
  };
  
  Blockly.Python['file_open'] = function(block) {
    var file_path = Blockly.Python.valueToCode(block, 'FILE_PATH', Blockly.Python.ORDER_ATOMIC) || "''";
    var mode = block.getFieldValue('MODE') || 'r';  // Default to 'r' if mode is not specified
    return [`with open(${file_path}, '${mode}') as file:\n`, Blockly.Python.ORDER_ATOMIC];
};

  
  Blockly.Blocks['file_read'] = {
    init: function() {
      this.appendValueInput('FILE')
          .setCheck('File')
          .appendField('Read file');
      this.setOutput(true, 'String');
      this.setColour(230);
      this.setTooltip('Read the contents of the file.');
    }
  };

  Blockly.Python['file_read'] = function(block) {
    var file = Blockly.Python.valueToCode(block, 'FILE', Blockly.Python.ORDER_ATOMIC);
    return [`${file}.read()`, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Blocks['file_write'] = {
    init: function() {
      this.appendValueInput('FILE')
          .setCheck('File')
          .appendField('Write');
      this.appendValueInput('CONTENT')
          .setCheck('String')
          .appendField('to file');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip('Write content to the file.');
    }
  };

  Blockly.Python['file_write'] = function(block) {
    var file = Blockly.Python.valueToCode(block, 'FILE', Blockly.Python.ORDER_ATOMIC);
    var content = Blockly.Python.valueToCode(block, 'CONTENT', Blockly.Python.ORDER_ATOMIC);
    return `${file}.write(${content})\n`;
  };

  Blockly.Blocks['file_close'] = {
    init: function() {
      this.appendValueInput('FILE')
          .setCheck('File')
          .appendField('Close file');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip('Close the file.');
    }
  };

  Blockly.Python['file_close'] = function(block) {
    var file = Blockly.Python.valueToCode(block, 'FILE', Blockly.Python.ORDER_ATOMIC);
    return `${file}.close()\n`;
  };
  
  Blockly.Blocks['get_file_contents'] = {
    init: function() {
      this.appendDummyInput()
          .appendField('Enter the contents for the file:');
      this.setOutput(true, 'String');
      this.setColour(230);
      this.setTooltip('Get input for file contents.');
    }
  };
  
  Blockly.Python['get_file_contents'] = function(block) {
    return ['input("Enter the contents: ")', Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Blocks['file_handling_with_input'] = {
    init: function() {
      this.appendValueInput('CONTENTS')
          .setCheck('String')
          .appendField('Enter the contents for the file:');
      this.appendDummyInput()
          .appendField('Save to file:')
          .appendField(new Blockly.FieldTextInput('filename.txt'), 'FILENAME');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip('Write contents to a file.');
    }
  };

  Blockly.Python['file_handling_with_input'] = function(block) {
    var contents = Blockly.Python.valueToCode(block, 'CONTENTS', Blockly.Python.ORDER_ATOMIC) || '""';
    var filename = block.getFieldValue('FILENAME') || 'filename.txt';
    return 'with open("' + filename + '", "w") as file:\n' +
           '    file.write(' + contents + ')\n';
  };
  
  Blockly.Blocks['print'] = {
    init: function() {
      this.appendValueInput('TEXT')
          .setCheck(null)
          .appendField('Print');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip('Print a message.');
    }
  };
  Blockly.Python['print'] = function(block) {
    var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
    return 'print(' + text + ')\n';
  };
  
  