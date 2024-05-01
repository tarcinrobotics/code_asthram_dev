import Blockly from "blockly";
import "blockly/python";

Blockly.Blocks['numpy_create_array'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Numpy Array");
    this.appendValueInput("array_values")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Values");
    this.setOutput(true, "Array");
    this.setColour(270);
    this.setTooltip("Create a Numpy array from given values");
    this.setHelpUrl("");
  }
};
  
  Blockly.Python['numpy_create_array'] = function(block) {
    var value_array_values = Blockly.Python.valueToCode(block, 'array_values', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.array(' + value_array_values + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['numpy_reshape_array'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Reshape Numpy Array");
      this.appendValueInput("array")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array");
      this.appendValueInput("shape")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Shape");
      this.setOutput(true, "Array");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_reshape_array'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var value_shape = Blockly.Python.valueToCode(block, 'shape', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.reshape(' + value_array + ', ' + value_shape + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['numpy_transpose_array'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Transpose Numpy Array");
      this.appendValueInput("array")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array");
      this.setOutput(true, "Array");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_transpose_array'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.transpose(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['numpy_random_normal'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Generate Random Numpy Array (Normal)");
      this.appendValueInput("shape")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Shape");
      this.setOutput(true, "Array");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_random_normal'] = function(block) {
    var value_shape = Blockly.Python.valueToCode(block, 'shape', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.random.normal(size=' + value_shape + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
// Define remaining numpy blocks
Blockly.Blocks['numpy_random_uniform'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Generate Random Numpy Array (Uniform)");
      this.appendValueInput("shape")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Shape");
      this.setOutput(true, "Array");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_random_uniform'] = function(block) {
    var value_shape = Blockly.Python.valueToCode(block, 'shape', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.random.uniform(size=' + value_shape + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['numpy_random_choice'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Random Choice from Numpy Array");
      this.appendValueInput("array")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_random_choice'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.random.choice(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
// Define remaining numpy blocks
Blockly.Blocks['numpy_dot_product'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Dot Product of Numpy Arrays");
      this.appendValueInput("array1")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array 1");
      this.appendValueInput("array2")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array 2");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_dot_product'] = function(block) {
    var value_array1 = Blockly.Python.valueToCode(block, 'array1', Blockly.Python.ORDER_ATOMIC);
    var value_array2 = Blockly.Python.valueToCode(block, 'array2', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.dot(' + value_array1 + ', ' + value_array2 + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['numpy_concatenate_arrays'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Concatenate Numpy Arrays");
      this.appendValueInput("array1")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array 1");
      this.appendValueInput("array2")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array 2");
      this.setOutput(true, "Array");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_concatenate_arrays'] = function(block) {
    var value_array1 = Blockly.Python.valueToCode(block, 'array1', Blockly.Python.ORDER_ATOMIC);
    var value_array2 = Blockly.Python.valueToCode(block, 'array2', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.concatenate((' + value_array1 + ', ' + value_array2 + '))';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['numpy_elementwise_addition'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Elementwise Addition of Numpy Arrays");
      this.appendValueInput("array1")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array 1");
      this.appendValueInput("array2")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array 2");
      this.setOutput(true, "Array");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_elementwise_addition'] = function(block) {
    var value_array1 = Blockly.Python.valueToCode(block, 'array1', Blockly.Python.ORDER_ATOMIC);
    var value_array2 = Blockly.Python.valueToCode(block, 'array2', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.add(' + value_array1 + ', ' + value_array2 + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['numpy_elementwise_subtraction'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Elementwise Subtraction of Numpy Arrays");
      this.appendValueInput("array1")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array 1");
      this.appendValueInput("array2")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array 2");
      this.setOutput(true, "Array");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_elementwise_subtraction'] = function(block) {
    var value_array1 = Blockly.Python.valueToCode(block, 'array1', Blockly.Python.ORDER_ATOMIC);
    var value_array2 = Blockly.Python.valueToCode(block, 'array2', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.subtract(' + value_array1 + ', ' + value_array2 + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['numpy_elementwise_multiplication'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Elementwise Multiplication of Numpy Arrays");
      this.appendValueInput("array1")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array 1");
      this.appendValueInput("array2")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array 2");
      this.setOutput(true, "Array");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_elementwise_multiplication'] = function(block) {
    var value_array1 = Blockly.Python.valueToCode(block, 'array1', Blockly.Python.ORDER_ATOMIC);
    var value_array2 = Blockly.Python.valueToCode(block, 'array2', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.multiply(' + value_array1 + ', ' + value_array2 + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['numpy_elementwise_division'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Elementwise Division of Numpy Arrays");
      this.appendValueInput("array1")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array 1");
      this.appendValueInput("array2")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Array 2");
      this.setOutput(true, "Array");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_elementwise_division'] = function(block) {
    var value_array1 = Blockly.Python.valueToCode(block, 'array1', Blockly.Python.ORDER_ATOMIC);
    var value_array2 = Blockly.Python.valueToCode(block, 'array2', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.divide(' + value_array1 + ', ' + value_array2 + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  // Blockly Blocks
Blockly.Blocks['numpy_mean'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Mean of Numpy Array");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_sum'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Sum of Numpy Array");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_max'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Max of Numpy Array");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_min'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Min of Numpy Array");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_std'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Standard Deviation of Numpy Array");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_var'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Variance of Numpy Array");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_sqrt'] = {
    init: function() {
      this.appendValueInput("value")
          .setCheck("Number")
          .appendField("Square Root of");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_log'] = {
    init: function() {
      this.appendValueInput("value")
          .setCheck("Number")
          .appendField("Logarithm of");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_exp'] = {
    init: function() {
      this.appendValueInput("value")
          .setCheck("Number")
          .appendField("Exponential of");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_abs'] = {
    init: function() {
      this.appendValueInput("value")
          .setCheck("Number")
          .appendField("Absolute Value of");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_sin'] = {
    init: function() {
      this.appendValueInput("value")
          .setCheck("Number")
          .appendField("Sine of");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_cos'] = {
    init: function() {
      this.appendValueInput("value")
          .setCheck("Number")
          .appendField("Cosine of");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_tan'] = {
    init: function() {
      this.appendValueInput("value")
          .setCheck("Number")
          .appendField("Tangent of");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_arcsin'] = {
    init: function() {
      this.appendValueInput("value")
          .setCheck("Number")
          .appendField("Arcsine of");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_arccos'] = {
    init: function() {
      this.appendValueInput("value")
          .setCheck("Number")
          .appendField("Arccosine of");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_arctan'] = {
    init: function() {
      this.appendValueInput("value")
          .setCheck("Number")
          .appendField("Arctangent of");
      this.setOutput(true, "Number");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  // Blockly Python Definitions
  Blockly.Python['numpy_mean'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.mean(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_sum'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.sum(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_max'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.max(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_min'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.min(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_std'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.std(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_var'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.var(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_sqrt'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.sqrt(' + value_value + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_log'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.log(' + value_value + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_exp'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.exp(' + value_value + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_abs'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.abs(' + value_value + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_sin'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.sin(' + value_value + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_cos'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.cos(' + value_value + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_tan'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.tan(' + value_value + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_arcsin'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.arcsin(' + value_value + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_arccos'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.arccos(' + value_value + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_arctan'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.arctan(' + value_value + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  // Blockly Blocks
Blockly.Blocks['numpy_reshape_array'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Reshape Array");
      this.appendValueInput("shape")
          .setCheck("Array")
          .appendField("to shape");
      this.setOutput(true, "Array");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_transpose_array'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Transpose Array");
      this.setOutput(true, "Array");
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_random_choice'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Random Choice from Array");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  

  // Blockly Python Definitions
  Blockly.Python['numpy_reshape_array'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var value_shape = Blockly.Python.valueToCode(block, 'shape', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.reshape(' + value_array + ', ' + value_shape + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_transpose_array'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.transpose(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_random_choice'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.random.choice(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };

  // Blockly Blocks
Blockly.Blocks['numpy_dot_product'] = {
    init: function() {
      this.appendValueInput("array1")
          .setCheck("Array")
          .appendField("Dot Product of");
      this.appendValueInput("array2")
          .setCheck("Array")
          .appendField("and");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_concatenate_arrays'] = {
    init: function() {
      this.appendValueInput("arrays")
          .setCheck("Array")
          .appendField("Concatenate Arrays");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_matrix_multiplication'] = {
    init: function() {
      this.appendValueInput("matrix1")
          .setCheck("Array")
          .appendField("Matrix Multiplication of");
      this.appendValueInput("matrix2")
          .setCheck("Array")
          .appendField("and");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  

  // Blockly Python Definitions
  Blockly.Python['numpy_dot_product'] = function(block) {
    var value_array1 = Blockly.Python.valueToCode(block, 'array1', Blockly.Python.ORDER_ATOMIC);
    var value_array2 = Blockly.Python.valueToCode(block, 'array2', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.dot(' + value_array1 + ', ' + value_array2 + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_concatenate_arrays'] = function(block) {
    var value_arrays = Blockly.Python.valueToCode(block, 'arrays', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.concatenate(' + value_arrays + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_matrix_multiplication'] = function(block) {
    var value_matrix1 = Blockly.Python.valueToCode(block, 'matrix1', Blockly.Python.ORDER_ATOMIC);
    var value_matrix2 = Blockly.Python.valueToCode(block, 'matrix2', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.matmul(' + value_matrix1 + ', ' + value_matrix2 + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };

  // Blockly Blocks
Blockly.Blocks['numpy_inverse'] = {
    init: function() {
      this.appendValueInput("matrix")
          .setCheck("Array")
          .appendField("Inverse of Matrix");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_determinant'] = {
    init: function() {
      this.appendValueInput("matrix")
          .setCheck("Array")
          .appendField("Determinant of Matrix");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_eigenvectors'] = {
    init: function() {
      this.appendValueInput("matrix")
          .setCheck("Array")
          .appendField("Eigenvectors of Matrix");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  // Blockly Python Definitions
  Blockly.Python['numpy_inverse'] = function(block) {
    var value_matrix = Blockly.Python.valueToCode(block, 'matrix', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.linalg.inv(' + value_matrix + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_determinant'] = function(block) {
    var value_matrix = Blockly.Python.valueToCode(block, 'matrix', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.linalg.det(' + value_matrix + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_eigenvectors'] = function(block) {
    var value_matrix = Blockly.Python.valueToCode(block, 'matrix', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.linalg.eig(' + value_matrix + ')[1]';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  // Blockly Blocks
Blockly.Blocks['numpy_eigenvalues'] = {
    init: function() {
      this.appendValueInput("matrix")
          .setCheck("Array")
          .appendField("Eigenvalues of Matrix");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_cross_product'] = {
    init: function() {
      this.appendValueInput("vector1")
          .setCheck("Array")
          .appendField("Cross Product of Vector");
      this.appendValueInput("vector2")
          .setCheck("Array")
          .appendField("and Vector");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_cumulative_sum'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Cumulative Sum of Array");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['numpy_eigenvalues'] = function(block) {
    var value_matrix = Blockly.Python.valueToCode(block, 'matrix', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.linalg.eig(' + value_matrix + ')[0]';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_cross_product'] = function(block) {
    var value_vector1 = Blockly.Python.valueToCode(block, 'vector1', Blockly.Python.ORDER_ATOMIC);
    var value_vector2 = Blockly.Python.valueToCode(block, 'vector2', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.cross(' + value_vector1 + ', ' + value_vector2 + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_cumulative_sum'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.cumsum(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  // Blockly Blocks
Blockly.Blocks['numpy_sort'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Sort Array");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_unique'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Unique Elements of Array");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_argmin'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Index of Minimum Value in Array");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['numpy_sort'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.sort(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_unique'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.unique(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_argmin'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.argmin(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  // Blockly Blocks
Blockly.Blocks['numpy_argmax'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Index of Maximum Value in Array");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_bincount'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Bin Count of Array");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_histogram'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Histogram of Array");
      this.appendValueInput("bins")
          .setCheck("Number")
          .appendField("with Bins");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['numpy_argmax'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.argmax(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_bincount'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.bincount(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_histogram'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var value_bins = Blockly.Python.valueToCode(block, 'bins', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.histogram(' + value_array + ', bins=' + value_bins + ')[0]';
    return [code, Blockly.Python.ORDER_NONE];
  };

  // Blockly Blocks
Blockly.Blocks['numpy_diff'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Difference of Consecutive Elements in Array");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_roll'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Roll Array");
      this.appendValueInput("shift")
          .setCheck("Number")
          .appendField("by Shift");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['numpy_flip'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Flip Array");
      this.setOutput(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  

  Blockly.Python['numpy_diff'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.diff(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_roll'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var value_shift = Blockly.Python.valueToCode(block, 'shift', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.roll(' + value_array + ', ' + value_shift + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['numpy_flip'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.flip(' + value_array + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
 
Blockly.Blocks['numpy_fill_diagonal'] = {
    init: function() {
      this.appendValueInput("array")
          .setCheck("Array")
          .appendField("Fill Diagonal of Array");
      this.appendValueInput("value")
          .setCheck(null)
          .appendField("with Value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['numpy_fill_diagonal'] = function(block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var code = 'np.fill_diagonal(' + value_array + ', ' + value_value + ')\n';
    return code;
  };
  