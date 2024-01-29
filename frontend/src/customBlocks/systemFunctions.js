import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['delay'] = {
  init: function () {
    this.appendValueInput('SECONDS')
      .setCheck('Number')
      .appendField('Delay for');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Delay for the specified number of seconds');
  }
};

Blockly.Blocks['delayed_execution'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Run main function');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
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
  
  