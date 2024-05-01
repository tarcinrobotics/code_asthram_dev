import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['delay'] = {
  init: function () {
    this.appendValueInput('SECONDS')
      .setCheck('Number')
      .appendField('Delay for');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CC5500");
    this.setTooltip('Delay for the specified number of seconds');
  }
};

Blockly.Blocks['delayed_execution'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Run main function');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#CC5500");
    this.setTooltip('Run the main function');
  }
};


Blockly.Python['delay'] = function(block) {
  Blockly.Python.definitions_["cv2"] = "import time";
  var delayTime = Blockly.Python.valueToCode(block, 'DELAY_TIME', Blockly.Python.ORDER_ATOMIC) || '1000';
  return 'time.sleep(' + delayTime + ' )\n';
};

Blockly.Python['delayed_execution'] = function (block) {
  Blockly.Python.definitions_["cv2"] = "import asyncio";
  var code = Blockly.Python.statementToCode(block, 'CODE');
  return 'await asyncio.sleep(1)\n' +
         'await main()\n' +
         code;
};

Blockly.Blocks['system_time_functions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get current time");
    this.setOutput(true, "String");
    this.setColour("#CC5500");
    this.setTooltip("Get the current system time.");
  }
};

Blockly.Python['system_time_functions'] = function(block) {
  var code = 'import datetime\ncurrent_time = str(datetime.datetime.now())\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['system_exit_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Exit program");
    this.setPreviousStatement(true, null);
    this.setColour("#CC5500");
    this.setTooltip("Exit the program.");
  }
};

Blockly.Python['system_exit_function'] = function(block) {
  return 'exit()\n';
};

Blockly.Blocks['system_reboot_function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reboot system");
    this.setPreviousStatement(true, null);
    this.setColour("#CC5500");
    this.setTooltip("Reboot the system.");
  }
};

Blockly.Python['system_reboot_function'] = function(block) {
  return 'import os\nos.system("reboot")\n';
};

Blockly.Blocks['file_system_functions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File System Functions");
    this.setOutput(true, "String");
    this.setColour("#CC5500");
    this.setTooltip("Advanced file system functions.");
  }
};

Blockly.Python['file_system_functions'] = function(block) {
  var code = '# Add your file system functions here\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['system_info_functions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("System Information");
    this.setOutput(true, "String");
    this.setColour("#CC5500");
    this.setTooltip("Get system information.");
  }
};

Blockly.Python['system_info_functions'] = function(block) {
  var code = '# Add your system information functions here\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['system_command_execution_functions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Execute System Command");
    this.setOutput(true, "String");
    this.setColour("#CC5500");
    this.setTooltip("Execute system commands.");
  }
};

Blockly.Python['system_command_execution_functions'] = function(block) {
  var code = '# Add your system command execution functions here\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['networking_functions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Networking Functions");
    this.setOutput(true, "String");
    this.setColour("#CC5500");
    this.setTooltip("Advanced networking functions.");
  }
};

Blockly.Python['networking_functions'] = function(block) {
  var code = '# Add your networking functions here\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['system_configuration_functions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("System Configuration Functions");
    this.setOutput(true, "String");
    this.setColour("#CC5500");
    this.setTooltip("Advanced system configuration functions.");
  }
};
  
Blockly.Python['system_configuration_functions'] = function(block) {
  var code = '# Add your system configuration functions here\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['system_monitoring_functions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("System Monitoring Functions");
    this.setOutput(true, "String");
    this.setColour("#CC5500");
    this.setTooltip("Advanced system monitoring functions.");
  }
};

Blockly.Python['system_monitoring_functions'] = function(block) {
  var code = '# Add your system monitoring functions here\n';
  return [code, Blockly.Python.ORDER_NONE];
};

  