import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['matplotlib_title'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Title");
      this.appendValueInput("TITLE")
          .setCheck("String")
          .appendField("");
      this.appendDummyInput()
          .appendField("");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Set title for matplotlib plot");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['matplotlib_title'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot';
    var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_ATOMIC) || "''";
    var code = "matplotlib.pyplot.title(" + title + ")\n";
    return code;
  };
  
  Blockly.Blocks['matplotlib_xlabel'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("X Label");
      this.appendValueInput("XLABEL")
          .setCheck("String")
          .appendField("");
      this.appendDummyInput()
          .appendField("");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Set X label for matplotlib plot");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['matplotlib_xlabel'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot';
    var xlabel = Blockly.Python.valueToCode(block, 'XLABEL', Blockly.Python.ORDER_ATOMIC) || "''";
    var code = "matplotlib.pyplot.xlabel(" + xlabel + ")\n";
    return code;
  };
  
  Blockly.Blocks['matplotlib_ylabel'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Y Label");
      this.appendValueInput("YLABEL")
          .setCheck("String")
          .appendField("");
      this.appendDummyInput()
          .appendField("");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Set Y label for matplotlib plot");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['matplotlib_ylabel'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot';
    var ylabel = Blockly.Python.valueToCode(block, 'YLABEL', Blockly.Python.ORDER_ATOMIC) || "''";
    var code = "matplotlib.pyplot.ylabel(" + ylabel + ")\n";
    return code;
  };
  
  Blockly.Blocks['matplotlib_show'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Show Plot");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Display the matplotlib plot");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['matplotlib_show'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot';
    var code = "matplotlib.pyplot.show()\n";
    return code;
  };
  
  Blockly.Blocks['numpy_linspace'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NumPy.Linspace");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start")
          .appendField(new Blockly.FieldTextInput('0'), 'START');
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("stop")
          .appendField(new Blockly.FieldTextInput('0'), 'STOP');
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("num")
          .appendField(new Blockly.FieldTextInput('50'), 'NUM');
      this.appendDummyInput()
          .appendField("");
      this.setInputsInline(true);  // Set as inline block
      this.setOutput(true, null);  // This block can be used as an input
      this.setColour("#004D3B");
      this.setTooltip("Create an array of evenly spaced values using NumPy linspace");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_linspace'] = function(block) {
    Blockly.Python.definitions_['import_numpy'] = 'import numpy';
    var start = block.getFieldValue('START');
    var stop = block.getFieldValue('STOP');
    var num = block.getFieldValue('NUM');
    var code = `numpy.linspace(${start}, ${stop}, ${num})`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['numpy_arange'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NumPy.Arange");
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("start")
          .appendField(new Blockly.FieldTextInput('0'), 'START');
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("stop")
          .appendField(new Blockly.FieldTextInput('0'), 'STOP');
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("step")
          .appendField(new Blockly.FieldTextInput('1'), 'STEP');
      this.appendDummyInput()
          .appendField("");
      this.setInputsInline(true);  // Set as inline block
      this.setOutput(true, null);  // This block can be used as an input
      this.setColour("#004D3B");
      this.setTooltip("Create an array with evenly spaced values using NumPy arange");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_arange'] = function(block) {
    Blockly.Python.definitions_['import_numpy'] = 'import numpy';
    var start = block.getFieldValue('START');
    var stop = block.getFieldValue('STOP');
    var step = block.getFieldValue('STEP');
    var code = `numpy.arange(${start}, ${stop}, ${step})`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['numpy_array'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Create NumPy Array");
      this.appendValueInput("ARRAY")
          .setCheck("Array")
          .appendField("");
      this.appendDummyInput()
          .appendField("");
      this.setInputsInline(true);  // Set as inline block
      this.setOutput(true, null);  // This block can be used as an input
      this.setColour("#004D3B");
      this.setTooltip("NumPy.array");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_array'] = function(block) {
    Blockly.Python.definitions_['import_numpy'] = 'import numpy';
    var array = Blockly.Python.valueToCode(block, 'ARRAY', Blockly.Python.ORDER_ATOMIC) || '[]';
    var code = `numpy.array(${array})`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['numpy_trigonometric'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NumPy Trigonometric");
      this.appendValueInput("VALUE")
          .setCheck("Number")
          .appendField(new Blockly.FieldDropdown([
            ["sin", "sin"],
            ["cos", "cos"],
            ["tan", "tan"]
          ]), "FUNCTION");
      this.setInputsInline(true);  // Set as inline block
      this.setOutput(true, "Array");  // This block outputs an array
      this.setColour("#004D3B");
      this.setTooltip("Apply trigonometric function from NumPy");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_trigonometric'] = function(block) {
    Blockly.Python.definitions_['import_numpy'] = 'import numpy';
    var functionType = block.getFieldValue('FUNCTION');
    var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '';
    var code = `numpy.${functionType}([${value}])`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['numpy_exp'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NumPy.exp");
      this.appendValueInput("VALUE")
          .setCheck("Number")
          .appendField("");
      this.setInputsInline(true);  // Set as inline block
      this.setOutput(true, "Array");  // This block outputs an array
      this.setColour("#004D3B");
      this.setTooltip("Apply exponential function from NumPy");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_exp'] = function(block) {
    Blockly.Python.definitions_['import_numpy'] = 'import numpy';
    var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '';
    var code = `numpy.exp([${value}])`;
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  