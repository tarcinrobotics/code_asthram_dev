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
      this.setColour("#3B2F5B");
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
      this.setColour("#3B2F5B");
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
      this.setColour("#3B2F5B");
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
      this.setColour("#3B2F5B");
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
      this.setColour("#3B2F5B");
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
      this.setColour("#3B2F5B");
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
    
      this.setColour("#3B2F5B");
      this.setTooltip('Print a message.');
    }
  };
  Blockly.Python['print'] = function(block) {
    var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
    return 'print(' + text + ')\n';
  };
  
  Blockly.Blocks['file_exists'] = {
    init: function() {
      this.appendValueInput('FILENAME')
          .setCheck('String')
          .appendField('File exists?');
      this.setOutput(true, 'Boolean');
      this.setColour("#3B2F5B");
      this.setTooltip('Check if a file exists.');
    }
  };

  Blockly.Python['file_exists'] = function(block) {
    var filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC) || '""';
    return [`os.path.exists(${filename})`, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Blocks['file_rename'] = {
    init: function() {
      this.appendValueInput('OLD_FILENAME')
          .setCheck('String')
          .appendField('Rename file');
      this.appendValueInput('NEW_FILENAME')
          .setCheck('String')
          .appendField('to');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#3B2F5B");
      this.setTooltip('Rename a file.');
    }
  };

  Blockly.Python['file_rename'] = function(block) {
    var oldFilename = Blockly.Python.valueToCode(block, 'OLD_FILENAME', Blockly.Python.ORDER_ATOMIC) || '""';
    var newFilename = Blockly.Python.valueToCode(block, 'NEW_FILENAME', Blockly.Python.ORDER_ATOMIC) || '""';
    return `os.rename(${oldFilename}, ${newFilename})\n`;
  };

  Blockly.Blocks['file_delete'] = {
    init: function() {
      this.appendValueInput('FILENAME')
          .setCheck('String')
          .appendField('Delete file');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#3B2F5B");
      this.setTooltip('Delete a file.');
    }
  };

  Blockly.Python['file_delete'] = function(block) {
    var filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC) || '""';
    return `os.remove(${filename})\n`;
  };
  
  Blockly.Blocks['file_size'] = {
    init: function() {
      this.appendValueInput('FILENAME')
          .setCheck('String')
          .appendField('File size (bytes)');
      this.setOutput(true, 'Number');
      this.setColour("#3B2F5B");
      this.setTooltip('Get the size of a file in bytes.');
    }
  };

  Blockly.Python['file_size'] = function(block) {
    var filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC) || '""';
    return [`os.path.getsize(${filename})`, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Blocks['file_extension'] = {
    init: function() {
      this.appendValueInput('FILENAME')
          .setCheck('String')
          .appendField('File extension');
      this.setOutput(true, 'String');
      this.setColour("#3B2F5B");
      this.setTooltip('Get the extension of a file.');
    }
  };

  Blockly.Python['file_extension'] = function(block) {
    var filename = Blockly.Python.valueToCode(block, 'FILENAME', Blockly.Python.ORDER_ATOMIC) || '""';
    return [`os.path.splitext(${filename})[1]`, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Blocks['list_files'] = {
    init: function() {
      this.appendValueInput('DIRECTORY')
          .setCheck('String')
          .appendField('List files in directory');
      this.setOutput(true, 'Array');
      this.setColour("#3B2F5B");
      this.setTooltip('List all files in a directory.');
    }
  };

  Blockly.Python['list_files'] = function(block) {
    var directory = Blockly.Python.valueToCode(block, 'DIRECTORY', Blockly.Python.ORDER_ATOMIC) || '""';
    return [`os.listdir(${directory})`, Blockly.Python.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['file_copy'] = {
    init: function() {
      this.appendValueInput('SOURCE')
          .setCheck('String')
          .appendField('Copy file');
      this.appendValueInput('DESTINATION')
          .setCheck('String')
          .appendField('to destination');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#3B2F5B");
      this.setTooltip('Copy a file from source to destination.');
    }
  };

  Blockly.Python['file_copy'] = function(block) {
    var source = Blockly.Python.valueToCode(block, 'SOURCE', Blockly.Python.ORDER_ATOMIC) || '""';
    var destination = Blockly.Python.valueToCode(block, 'DESTINATION', Blockly.Python.ORDER_ATOMIC) || '""';
    return `shutil.copy(${source}, ${destination})\n`;
  };

  Blockly.Blocks['file_move'] = {
    init: function() {
      this.appendValueInput('SOURCE')
          .setCheck('String')
          .appendField('Move file');
      this.appendValueInput('DESTINATION')
          .setCheck('String')
          .appendField('to destination');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#3B2F5B");
      this.setTooltip('Move or rename a file.');
    }
  };

  Blockly.Python['file_move'] = function(block) {
    var source = Blockly.Python.valueToCode(block, 'SOURCE', Blockly.Python.ORDER_ATOMIC) || '""';
    var destination = Blockly.Python.valueToCode(block, 'DESTINATION', Blockly.Python.ORDER_ATOMIC) || '""';
    return `shutil.move(${source}, ${destination})\n`;
  };
  