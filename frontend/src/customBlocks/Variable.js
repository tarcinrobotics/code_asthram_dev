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
    this.setColour(230);
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
    this.setColour(230);
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
    this.setColour(230);
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
