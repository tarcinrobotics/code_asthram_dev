// Import Blockly from 'blockly' only once in your project
import Blockly from 'blockly';

Blockly.Blocks['create_variable'] = {
  init: function() {
    this.setColour("#DAA520");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("var"), "VAR_NAME");
    this.setOutput(true, null);
    this.setTooltip("Create a variable with the specified name");
  }
};

Blockly.Python['create_variable'] = function(block) {
  var varName = block.getFieldValue('VAR_NAME') || 'var'; // Default variable name 'var' if not provided
  return [varName, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['create_variable_2'] = {
  init: function() {
    this.setColour("#DAA520");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("variable"), "VAR_NAME");

    // Allows this block to connect to a statement before it and after it.
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);

    this.setTooltip("Create a variable with the specified name");
    this.setHelpUrl(""); // Optional: URL to a help page
  }
};


Blockly.Python['create_variable_2'] = function(block) {
  var varName = block.getFieldValue('VAR_NAME') || 'var'; // Default variable name 'var' if not provided
  // Return a Python statement for declaring a variable; for Python, typically no declaration is needed unless initializing
  var code = varName + ' = None\n'; // Initializing to None or some default value
  return code;
};


Blockly.Blocks['set_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set variable")
        .appendField(new Blockly.FieldTextInput(''), 'VAR_NAME')
        .appendField(new Blockly.FieldDropdown([
          ["=", "="], 
          ["+=", "+="], 
          ["-=", "-="], 
          ["*=", "*="], 
          ["/=", "/="],
          ["%=", "%="]
        ]), 'OPERATOR')
        .appendField("to");
    this.appendValueInput("VALUE")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DAA520");
    this.setTooltip("Assigns a value to a variable with the selected operator.");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['user_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("User Input:");
    this.appendValueInput("DEFAULT_INPUT")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("1"), "DEFAULT_VALUE");
    this.setOutput(true, null);
    this.setColour("#DAA520");
    this.setTooltip("Get user input");
    this.setHelpUrl("");
  }
};

Blockly.Python['user_input'] = function(block) {
  var defaultValue = Blockly.Python.valueToCode(block, 'DEFAULT_INPUT', Blockly.Python.ORDER_ATOMIC) || "'" + block.getFieldValue('DEFAULT_VALUE') + "'";
  return ['input(' + defaultValue + ')', Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['float_operator'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("Convert to Float");
    this.setOutput(true, null);
    this.setColour("#DAA520");
    this.setTooltip("Convert a value to a float");
    this.setHelpUrl("");
  }
};

Blockly.Python['float_operator'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '0';
  return ['float(' + value + ')', Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['import_statements'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Import")
        .appendField(new Blockly.FieldDropdown([
          ["time", "time"], 
          ["random", "random"],
          ["math", "math"],
          ["os", "os"],
          ["sys", "sys"],
          ["datetime", "datetime"],
          ["json", "json"],
          ["re", "re"],
          ["requests", "requests"],
          ["csv", "csv"],
          ["numpy as np", "numpy"]
        ]), "MODULES");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DAA520");
    this.setTooltip("Import a selected module in Python");
    this.setHelpUrl("");
  }
};

Blockly.Python['import_statements'] = function(block) {
  var module = block.getFieldValue('MODULES');
  var code = '';
  if (module === 'numpy') {
    Blockly.Python.definitions_['import_' + module] = 'import numpy as np\n';
  } else {
    Blockly.Python.definitions_['import_' + module] = 'import ' + module + '\n';
  }
  return code;
};

Blockly.Blocks['time_sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sleep for")
        .appendField(new Blockly.FieldNumber(1, 0, Infinity, 1), "SLEEP_TIME")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DAA520");
    this.setTooltip("Pauses the program for the specified amount of time (in seconds).");
    this.setHelpUrl("https://docs.python.org/3/library/time.html#time.sleep");
  }
};

Blockly.Python['time_sleep'] = function(block) {
  var sleepTime = block.getFieldValue('SLEEP_TIME');
  // Add the import statement for time if it hasn't been added yet
  Blockly.Python.definitions_['import_time'] = 'import time\n';
  var code = 'time.sleep(' + sleepTime + ')\n';
  return code;
};



Blockly.Python['set_variable'] = function(block) {
  var varName = block.getFieldValue('VAR_NAME');
  var operator = block.getFieldValue('OPERATOR');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  // Generate Python code with the selected assignment operator
  var code = varName + ' ' + operator + ' ' + value + '\n';
  return code;
};


Blockly.Blocks['plain_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("item"), "VAR");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#DAA520");
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
    this.setColour("#DAA520");
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

Blockly.Blocks['convert_to_data_type'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("Convert to")
        .appendField(new Blockly.FieldDropdown([
          ["integer", "int"],
          ["float", "float"],
          ["string", "str"],
          ["boolean", "bool"],
          ["list", "list"],
          ["tuple", "tuple"],
          ["set", "set"],
          ["dictionary", "dict"],
          ["complex", "complex"],
          ["bytes", "bytes"],
          ["bytearray", "bytearray"]
          // Add more data types here as needed
        ]), "TYPE");
    this.setOutput(true, null);
    this.setColour("#DAA520");
    this.setTooltip("Convert a value to the selected data type");
    this.setHelpUrl("");
  }
};


Blockly.Python['convert_to_data_type'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '0';
  var dataType = block.getFieldValue('TYPE');
  return [dataType + '(' + value + ')', Blockly.Python.ORDER_NONE];
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
    this.setColour("#DAA520");
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
    this.setColour("#DAA520");
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
    this.setColour("#DAA520");
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
    this.setColour("#DAA520");
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
    this.setColour("#DAA520");
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
    this.setColour("#DAA520");
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
    this.setColour("#DAA520");
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
    this.setColour("#DAA520");
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
    this.setColour("#DAA520");
    this.setTooltip('Define the scope of a variable (local or global).');
  }
};
Blockly.Python['variable_scope'] = function(block) {
  var scope = block.getFieldValue('SCOPE');
  return `# Set variable scope to ${scope}\n`;
};
