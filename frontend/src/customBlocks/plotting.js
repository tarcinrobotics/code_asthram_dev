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

  Blockly.Blocks['matplotlib_bar_plot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Plot Bar Graph");
      this.appendValueInput("X_VALUE")
          .setCheck(null)
          .appendField("x:")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldTextInput("['a', 'b', 'c', 'd', 'e']"), "DEFAULT_X");
      this.appendValueInput("Y_VALUE")
          .setCheck(null)
          .appendField("y:")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldTextInput("[1, 2, 3, 4, 5]"), "DEFAULT_Y");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Plot a bar graph using matplotlib");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['matplotlib_bar_plot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Plot Bar Graph");
      this.appendDummyInput()
          .appendField("x:")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldTextInput("['a', 'b', 'c', 'd', 'e']"), "DEFAULT_X");
      this.appendDummyInput()
          .appendField("y:")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(new Blockly.FieldTextInput("[1, 2, 3, 4, 5]"), "DEFAULT_Y");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Plot a bar graph using matplotlib");
      this.setHelpUrl("");
    }
  };
  
      
  Blockly.Python['matplotlib_bar_plot'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    var defaultX = block.getFieldValue('DEFAULT_X') || "['a', 'b', 'c', 'd', 'e']";
    var defaultY = block.getFieldValue('DEFAULT_Y') || "[1, 2, 3, 4, 5]";
    var xValue = Blockly.Python.valueToCode(block, 'X_VALUE', Blockly.Python.ORDER_ATOMIC) || defaultX;
    var yValue = Blockly.Python.valueToCode(block, 'Y_VALUE', Blockly.Python.ORDER_ATOMIC) || defaultY;
    return "plt.bar(" + xValue + ", " + yValue + ")\n";
  };
  
  Blockly.Blocks['matplotlib_plot'] = {
    init: function() {
      this.appendValueInput("X_DATA")
          .setCheck(null)
          .appendField("Plot Data (X)");
      this.appendValueInput("Y_DATA")
          .setCheck(null)
          .appendField("(Y):");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Plot data using matplotlib");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['matplotlib_plot'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    var xData = Blockly.Python.valueToCode(block, 'X_DATA', Blockly.Python.ORDER_ATOMIC) || '';
    var yData = Blockly.Python.valueToCode(block, 'Y_DATA', Blockly.Python.ORDER_ATOMIC) || '';
    return "plt.plot(" + xData + ", " + yData + ")\n";
  };
  

  Blockly.Blocks['matplotlib_add_legend'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Add Legend");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Add a legend to the matplotlib plot");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['matplotlib_add_legend'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    return "plt.legend()\n";
  };
  
  

  Blockly.Blocks['matplotlib_show_plot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Show Plot");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Show the matplotlib plot");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['matplotlib_show_plot'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    return "plt.show()\n";
  };
  
  Blockly.Blocks['matplotlib_plot_histogram'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Plot Histogram of Data")
          .appendField(new Blockly.FieldTextInput("0"), "DEFAULT_DATA");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Plot a histogram using matplotlib");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['matplotlib_plot_histogram'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    var data = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_ATOMIC) || block.getFieldValue('DEFAULT_DATA') || "0";
    return "plt.hist(" + data + ")\n";
  };
  
  
  Blockly.Blocks['matplotlib_plot_scatter'] = {
    init: function() {
      this.appendValueInput("X_DATA")
          .setCheck(null)
          .appendField("Plot Scatter Plot of Data")
          .appendField("X Data:")
          .appendField(new Blockly.FieldTextInput("[1, 2, 3, 4, 5]"), "DEFAULT_X");
      this.appendValueInput("Y_DATA")
          .setCheck(null)
          .appendField("Y Data:")
          .appendField(new Blockly.FieldTextInput("[5, 4, 3, 2, 1]"), "DEFAULT_Y");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Plot a scatter plot using matplotlib");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['matplotlib_plot_scatter'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    var xData = Blockly.Python.valueToCode(block, 'X_DATA', Blockly.Python.ORDER_ATOMIC) || block.getFieldValue('DEFAULT_X') || "[1, 2, 3, 4, 5]";
    var yData = Blockly.Python.valueToCode(block, 'Y_DATA', Blockly.Python.ORDER_ATOMIC) || block.getFieldValue('DEFAULT_Y') || "[5, 4, 3, 2, 1]";
    return "plt.scatter(" + xData + ", " + yData + ")\n";
  };

  Blockly.Blocks['matplotlib_plot_pie'] = {
    init: function() {
      this.appendValueInput("DATA")
          .setCheck(null)
          .appendField("Plot Pie Chart of Data");
      this.appendDummyInput()
          .appendField("Labels:")
          .appendField(new Blockly.FieldTextInput("['A', 'B', 'C', 'D']"), "LABELS");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Plot a pie chart using matplotlib");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['matplotlib_plot_pie'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    var data = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_ATOMIC) || "[]";
    var labels = block.getFieldValue('LABELS') || "['A', 'B', 'C', 'D']";
    return "plt.pie(" + data + ", labels=" + labels + ")\n";
  };  

  Blockly.Blocks['matplotlib_plot_pie'] = {
    init: function() {
      this.appendValueInput("DATA")
          .setCheck(null)
          .appendField("Plot Pie Chart of Data")
          .appendField(new Blockly.FieldTextInput("[1, 2, 3, 4]"), "DEFAULT_DATA");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Plot a pie chart using matplotlib");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['matplotlib_plot_pie'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    var data = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_ATOMIC) || block.getFieldValue('DEFAULT_DATA') || "[1, 2, 3, 4]";
    return "plt.pie(" + data + ")\n";
  };

  Blockly.Blocks['matplotlib_add_grid'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Add Grid Lines");
      this.appendDummyInput()
          .appendField("Which Axes?")
          .appendField(new Blockly.FieldDropdown([["Both", "both"], ["X-axis", "x"], ["Y-axis", "y"]]), "AXIS");
      this.appendDummyInput()
          .appendField("Line Style:")
          .appendField(new Blockly.FieldDropdown([["Solid", "-"], ["Dashed", "--"], ["Dotted", ":"]]), "LINE_STYLE");
      this.appendDummyInput()
          .appendField("Line Width:")
          .appendField(new Blockly.FieldNumber(1, 0.5, 5, 0.1), "LINE_WIDTH");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Add grid lines to the plot");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['matplotlib_add_grid'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    var axis = block.getFieldValue('AXIS');
    var lineStyle = block.getFieldValue('LINE_STYLE');
    var lineWidth = block.getFieldValue('LINE_WIDTH');
    return "plt.grid(axis='" + axis + "', linestyle='" + lineStyle + "', linewidth=" + lineWidth + ")\n";
  };
  
  Blockly.Blocks['matplotlib_create_figure'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Create Figure");
      this.appendDummyInput()
          .appendField("Figure Size:")
          .appendField("Width:")
          .appendField(new Blockly.FieldNumber(8, 1, 20, 1), "FIGURE_WIDTH");
      this.appendDummyInput()
          .appendField("Height:")
          .appendField(new Blockly.FieldNumber(6, 1, 20, 1), "FIGURE_HEIGHT");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Create a figure with a specific size");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['matplotlib_create_figure'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    var figureWidth = block.getFieldValue('FIGURE_WIDTH');
    var figureHeight = block.getFieldValue('FIGURE_HEIGHT');
    return "plt.figure(figsize=("+ figureWidth + ", " + figureHeight + "))\n";
  };

  Blockly.Blocks['matplotlib_create_subplot'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Create Subplot");
      this.appendDummyInput()
          .appendField("Number of Rows:")
          .appendField(new Blockly.FieldNumber(1, 1, 10, 1), "NUM_ROWS");
      this.appendDummyInput()
          .appendField("Number of Columns:")
          .appendField(new Blockly.FieldNumber(1, 1, 10, 1), "NUM_COLUMNS");
      this.appendDummyInput()
          .appendField("Index of Plot:")
          .appendField(new Blockly.FieldNumber(1, 1, 100), "INDEX");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Create a subplot with specified number of rows, columns, and index");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['matplotlib_create_subplot'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    var numRows = block.getFieldValue('NUM_ROWS');
    var numColumns = block.getFieldValue('NUM_COLUMNS');
    var index = block.getFieldValue('INDEX');
    return "plt.subplot(" + numRows + ", " + numColumns + ", " + index + ")\n";
  };

  Blockly.Blocks['matplotlib_add_subtitle'] = {
    init: function() {
      this.appendValueInput("SUBTITLE")
          .setCheck(null)
          .appendField("Add Subtitle")
          .appendField(new Blockly.FieldTextInput("My Subtitle"), "DEFAULT_SUBTITLE");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Add a subtitle to the plot");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['matplotlib_add_subtitle'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    var subtitle = Blockly.Python.valueToCode(block, 'SUBTITLE', Blockly.Python.ORDER_ATOMIC) || "'" + block.getFieldValue('DEFAULT_SUBTITLE') + "'";
    return "plt.suptitle(" + subtitle + ")\n";
  };
  
  Blockly.Blocks['matplotlib_add_colorbar'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Add Colorbar");
      this.appendValueInput("MAPPABLE")
          .setCheck(null)
          .appendField("Mappable Object:");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Add a colorbar to the plot");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['matplotlib_add_colorbar'] = function(block) {
    Blockly.Python.definitions_['import_matplotlib'] = 'import matplotlib.pyplot as plt';
    var mappable = Blockly.Python.valueToCode(block, 'MAPPABLE', Blockly.Python.ORDER_ATOMIC) || '';
    return "plt.colorbar(" + mappable + ")\n";
  };
 
  Blockly.Blocks['mappable_object'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Mappable Object:");
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput("ax"), "DEFAULT_MAPPABLE_OBJECT");
      this.setOutput(true, null);
      this.setColour("#004D3B");
      this.setTooltip("Provide a mappable object for the colorbar");
      this.setHelpUrl("");
    }
  };
  
  
  Blockly.Python['mappable_object'] = function(block) {
    var mappableObject = Blockly.Python.valueToCode(block, 'MAPPABLE_OBJECT', Blockly.Python.ORDER_ATOMIC) || block.getFieldValue('DEFAULT_MAPPABLE_OBJECT') || 'ax';
    return [mappableObject, Blockly.Python.ORDER_NONE];
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
  