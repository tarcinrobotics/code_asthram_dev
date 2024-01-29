import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['new_boundary_function'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("Boundary Function Name"), "Name");
        this.appendStatementInput("Content")
            .setCheck(null);
        this.setInputsInline(true);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['new_boundary_function'] = function (block) {
    var text_name = block.getFieldValue('Name');
    var statements_content = Blockly.Python.statementToCode(block, 'Content');
    // TODO: Assemble Python into code variable.
    var code = 'def ' + text_name + '(_object,**kwargs):\n' + statements_content + '\n';
    return code;
};

Blockly.Blocks['return'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("return");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['return'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'return ' + value_name + '\n';
    return code;
};

Blockly.Blocks['ardublock_logic_compare'] = {
    init: function() {
      this.setColour(210);
      this.setOutput(true, 'Boolean');
      this.appendValueInput('A')
          .setCheck(['Number', 'Boolean'])
          .appendField(new Blockly.FieldDropdown([['=', 'EQ'], ['<', 'LT'], ['>', 'GT']]), 'OP');
      this.appendValueInput('B')
          .setCheck(['Number', 'Boolean'])
          .appendField('to');
      this.setInputsInline(true);
      this.setTooltip('');
    }
  };
  
  Blockly.Blocks['ardublock_logic_boolean'] = {
    init: function() {
      this.setColour(210);
      this.setOutput(true, 'Boolean');
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([['True', 'TRUE'], ['False', 'FALSE']]), 'BOOL');
      this.setTooltip('');
    }
  };

  Blockly.Python['ardublock_logic_compare'] = function(block) {
    var value_a = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC) || '0';
    var dropdown_op = block.getFieldValue('OP');
    var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC) || '0';
    var code = value_a + ' ' + dropdown_op + ' ' + value_b;
    return [code, Blockly.Python.ORDER_RELATIONAL];
  };
  
  Blockly.Python['ardublock_logic_boolean'] = function(block) {
    var dropdown_bool = block.getFieldValue('BOOL');
    var code = (dropdown_bool === 'TRUE') ? 'True' : 'False';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  



