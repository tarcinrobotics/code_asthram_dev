// Import Blockly from 'blockly' only once in your project
import Blockly from 'blockly';

Blockly.Blocks['set_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set variable")
        .appendField(new Blockly.FieldTextInput(''), 'VAR_NAME')
        .appendField("to");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8A3369");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python['set_variable'] = function(block) {
  var varName = block.getFieldValue('VAR_NAME');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  // Generate Python code to set the variable to the specified value
  var code = varName + ' = ' + value;
  return code + '\n';
};

Blockly.Blocks['plain_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "VAR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8A3369");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Python['plain_variable'] = function(block) {
  var variableName = Blockly.Python.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return variableName + ' = None\n';
};

// Define the options for declaration type dropdown
const declarationOptions = [
  ["Global", "GLOBAL"],
  ["Local", "LOCAL"]
];

// Define the options for data type dropdown
const dataTypeOptions = [
  ["int", "int"],
  ["String", "String"],
  ["boolean", "boolean"],
  ["byte", "byte"],
  ["char", "char"],
  ["char*", "char*"],
  ["const char*", "const char*"],
  ["double", "double"],
  ["float", "float"],
  ["long", "long"],
  ["short", "short"],
  ["size_t", "size_t"],
  ["unsigned char", "unsigned char"],
  ["unsigned int", "unsigned int"],
  ["unsigned long", "unsigned long"],
  ["word", "word"]
];

Blockly.Blocks['array_declaration'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("Declare")
        .appendField(new Blockly.FieldDropdown(declarationOptions), "DECLARATION_TYPE")
        .appendField(new Blockly.FieldDropdown(dataTypeOptions), "DATA_TYPE")
        .appendField(new Blockly.FieldTextInput("var"), "VAR_NAME")
        .appendField("")
        .appendField(new Blockly.FieldNumber(2), "LENGTH")
        .appendField("")
        .appendField("=");
    this.appendValueInput("VALUE")
        .setCheck(null); // Allow any type of input
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(false, null); // Remove previous output connection
    this.setColour("#8A3369");
    this.setTooltip("Variable Declaration");
    this.setHelpUrl("");
  }
};


Blockly.Python['array_declaration'] = function(block) {
  var declarationType = block.getFieldValue('DECLARATION_TYPE');
  var dataType = block.getFieldValue('DATA_TYPE');
  var varName = Blockly.Python.variableDB_.getName(
      block.getFieldValue('VAR_NAME'), Blockly.Variables.NAME_TYPE);
  var length = block.getFieldValue('LENGTH');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE);

  if (declarationType === 'GLOBAL') {
    return `${dataType} ${varName}[${length}] = ${value};\n`;
  } else if (declarationType === 'LOCAL') {
    return `  ${dataType} ${varName}[${length}] = ${value};\n`;
  }
};

Blockly.Blocks['increment_variable'] = {
  init: function() {
    this.appendValueInput('VARIABLE')
        .setCheck('Number')
        .appendField('Increment variable');
    this.appendValueInput('AMOUNT')
        .setCheck('Number')
        .appendField('by');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8A3369");
    this.setTooltip('Increment the value of a variable by a specified amount.');
  }
};

Blockly.Python['increment_variable'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, 'VARIABLE', Blockly.Python.ORDER_ATOMIC);
  var amount = Blockly.Python.valueToCode(block, 'AMOUNT', Blockly.Python.ORDER_ATOMIC);
  return `${variable} += ${amount}\n`;
};

Blockly.Blocks['decrement_variable'] = {
  init: function() {
    this.appendValueInput('VARIABLE')
        .setCheck('Number')
        .appendField('Decrement variable');
    this.appendValueInput('AMOUNT')
        .setCheck('Number')
        .appendField('by');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8A3369");
    this.setTooltip('Decrement the value of a variable by a specified amount.');
  }
};

Blockly.Python['decrement_variable'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, 'VARIABLE', Blockly.Python.ORDER_ATOMIC);
  var amount = Blockly.Python.valueToCode(block, 'AMOUNT', Blockly.Python.ORDER_ATOMIC);
  return `${variable} -= ${amount}\n`;
};

Blockly.Blocks['reset_variable'] = {
  init: function() {
    this.appendValueInput('VARIABLE')
        .setCheck('Number')
        .appendField('Reset variable');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8A3369");
    this.setTooltip('Reset the value of a variable to its initial value.');
  }
};

Blockly.Python['reset_variable'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, 'VARIABLE', Blockly.Python.ORDER_ATOMIC);
  return `${variable} = 0\n`; // Change 0 to initial value if needed
};

Blockly.Blocks['check_variable_value'] = {
  init: function() {
    this.appendValueInput('VARIABLE')
        .setCheck('Number')
        .appendField('Check if');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['is equal to', '=='],
          ['is not equal to', '!='],
          ['is greater than', '>'],
          ['is less than', '<'],
          ['is greater than or equal to', '>='],
          ['is less than or equal to', '<=']
        ]), 'OPERATOR');
    this.appendValueInput('VALUE')
        .setCheck('Number');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour("#8A3369");
    this.setTooltip('Check if a variable\'s value meets a specified condition.');
  }
};

Blockly.Python['check_variable_value'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, 'VARIABLE', Blockly.Python.ORDER_ATOMIC);
  var operator = block.getFieldValue('OPERATOR');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  return `${variable} ${operator} ${value}`;
};

Blockly.Blocks['swap_variables'] = {
  init: function() {
    this.appendValueInput('VARIABLE1')
        .setCheck('Number')
        .appendField('Swap variables');
    this.appendValueInput('VARIABLE2')
        .setCheck('Number')
        .appendField('and');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8A3369");
    this.setTooltip('Swap the values of two variables.');
  }
};

Blockly.Python['swap_variables'] = function(block) {
  var variable1 = Blockly.Python.valueToCode(block, 'VARIABLE1', Blockly.Python.ORDER_ATOMIC);
  var variable2 = Blockly.Python.valueToCode(block, 'VARIABLE2', Blockly.Python.ORDER_ATOMIC);
  return `${variable1}, ${variable2} = ${variable2}, ${variable1}\n`;
};


Blockly.Blocks['copy_variable'] = {
  init: function() {
    this.appendValueInput('VARIABLE')
        .setCheck('Number')
        .appendField('Copy variable');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8A3369");
    this.setTooltip('Create a copy of a variable with the same value.');
  }
};

Blockly.Python['copy_variable'] = function(block) {
  var variable = Blockly.Python.valueToCode(block, 'VARIABLE', Blockly.Python.ORDER_ATOMIC);
  return `copy_of_${variable} = ${variable}\n`;
};

Blockly.Blocks['find_maximum_value'] = {
  init: function() {
    this.appendValueInput('VALUES')
        .setCheck('Array')
        .appendField('Find maximum value in');
    this.setOutput(true, 'Number');
    this.setColour("#8A3369");
    this.setTooltip('Find the maximum value among a list of variables.');
  }
};

Blockly.Python['find_maximum_value'] = function(block) {
  var values = Blockly.Python.valueToCode(block, 'VALUES', Blockly.Python.ORDER_ATOMIC);
  return `max(${values})`;
};

Blockly.Blocks['calculate_average'] = {
  init: function() {
    this.appendValueInput('VALUES')
        .setCheck('Array')
        .appendField('Calculate average of');
    this.setOutput(true, 'Number');
    this.setColour("#8A3369");
    this.setTooltip('Calculate the average value of a list of variables.');
  }
};

Blockly.Python['calculate_average'] = function(block) {
  var values = Blockly.Python.valueToCode(block, 'VALUES', Blockly.Python.ORDER_ATOMIC);
  return `sum(${values}) / len(${values})`;
};

Blockly.Blocks['variable_scope'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Set variable scope to')
        .appendField(new Blockly.FieldDropdown([
          ['Local', 'LOCAL'],
          ['Global', 'GLOBAL']
        ]), 'SCOPE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8A3369");
    this.setTooltip('Define the scope of a variable (local or global).');
  }
};
Blockly.Python['variable_scope'] = function(block) {
  var scope = block.getFieldValue('SCOPE');
  return `# Set variable scope to ${scope}\n`;
};
