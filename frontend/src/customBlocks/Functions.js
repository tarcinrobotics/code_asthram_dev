import Blockly from 'blockly';



Blockly.Blocks['calculate_average'] = {
    init: function() {
      this.appendValueInput('VALUES')
          .setCheck('Array')
          .appendField('Calculate average of');
      this.setOutput(true, 'Number');
      this.setColour("#FDBCB4");
      this.setTooltip('Calculate the average value of a list of variables.');
    }
  };
  
  Blockly.Python['calculate_average'] = function(block) {
    var values = Blockly.Python.valueToCode(block, 'VALUES', Blockly.Python.ORDER_ATOMIC);
    return `sum(${values}) / len(${values})`;
  };

  Blockly.Blocks['find_maximum'] = {
    init: function() {
      this.appendValueInput('NUMBERS')
          .setCheck('Array')
          .appendField('Find maximum of');
      this.setOutput(true, 'Number');
      this.setColour("#FDBCB4");
      this.setTooltip('Find the maximum value in a list of numbers.');
    }
  };
  
  Blockly.Python['find_maximum'] = function(block) {
    var numbers = Blockly.Python.valueToCode(block, 'NUMBERS', Blockly.Python.ORDER_ATOMIC);
    return `max(${numbers})`;
  };
  

  Blockly.Blocks['calculate_factorial'] = {
    init: function() {
      this.appendValueInput('NUMBER')
          .setCheck('Number')
          .appendField('Calculate factorial of');
      this.setOutput(true, 'Number');
      this.setColour("#FDBCB4");
      this.setTooltip('Calculate the factorial of a number.');
    }
  };
  
  Blockly.Python['calculate_factorial'] = function(block) {
    var number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
    return `math.factorial(${number})`;
  };
  
  Blockly.Blocks['calculate_sum'] = {
    init: function() {
      this.appendValueInput('VALUES')
          .setCheck('Array')
          .appendField('Calculate sum of');
      this.setOutput(true, 'Number');
      this.setColour("#FDBCB4");
      this.setTooltip('Calculate the sum of a list of numbers.');
    }
  };
  
  Blockly.Python['calculate_sum'] = function(block) {
    var values = Blockly.Python.valueToCode(block, 'VALUES', Blockly.Python.ORDER_ATOMIC);
    return `sum(${values})`;
  };

  Blockly.Blocks['calculate_median'] = {
    init: function() {
      this.appendValueInput('VALUES')
          .setCheck('Array')
          .appendField('Calculate median of');
      this.setOutput(true, 'Number');
      this.setColour("#FDBCB4");
      this.setTooltip('Calculate the median of a list of numbers.');
    }
  };
  
  Blockly.Python['calculate_median'] = function(block) {
    var values = Blockly.Python.valueToCode(block, 'VALUES', Blockly.Python.ORDER_ATOMIC);
    return `statistics.median(${values})`;
  };

  Blockly.Blocks['calculate_power'] = {
    init: function() {
      this.appendValueInput('BASE')
          .setCheck('Number')
          .appendField('Calculate power of base');
      this.appendValueInput('EXPONENT')
          .setCheck('Number')
          .appendField('and exponent');
      this.setOutput(true, 'Number');
      this.setColour("#FDBCB4");
      this.setTooltip('Calculate the power of a base raised to an exponent.');
    }
  };
  
  Blockly.Python['calculate_power'] = function(block) {
    var base = Blockly.Python.valueToCode(block, 'BASE', Blockly.Python.ORDER_ATOMIC);
    var exponent = Blockly.Python.valueToCode(block, 'EXPONENT', Blockly.Python.ORDER_ATOMIC);
    return `math.pow(${base}, ${exponent})`;
  };
  
  Blockly.Blocks['calculate_standard_deviation'] = {
    init: function() {
      this.appendValueInput('VALUES')
          .setCheck('Array')
          .appendField('Calculate standard deviation of');
      this.setOutput(true, 'Number');
      this.setColour("#FDBCB4");
      this.setTooltip('Calculate the standard deviation of a list of numbers.');
    }
  };
  
  Blockly.Python['calculate_standard_deviation'] = function(block) {
    var values = Blockly.Python.valueToCode(block, 'VALUES', Blockly.Python.ORDER_ATOMIC);
    return `statistics.stdev(${values})`;
  };

  Blockly.Blocks['calculate_variance'] = {
    init: function() {
      this.appendValueInput('VALUES')
          .setCheck('Array')
          .appendField('Calculate variance of');
      this.setOutput(true, 'Number');
      this.setColour("#FDBCB4");
      this.setTooltip('Calculate the variance of a list of numbers.');
    }
  };
  
  Blockly.Python['calculate_variance'] = function(block) {
    var values = Blockly.Python.valueToCode(block, 'VALUES', Blockly.Python.ORDER_ATOMIC);
    return `statistics.variance(${values})`;
  };

  Blockly.Blocks['calculate_mean_absolute_deviation'] = {
    init: function() {
      this.appendValueInput('VALUES')
          .setCheck('Array')
          .appendField('Calculate mean absolute deviation of');
      this.setOutput(true, 'Number');
      this.setColour("#FDBCB4");
      this.setTooltip('Calculate the mean absolute deviation of a list of numbers.');
    }
  };
  
  Blockly.Python['calculate_mean_absolute_deviation'] = function(block) {
    var values = Blockly.Python.valueToCode(block, 'VALUES', Blockly.Python.ORDER_ATOMIC);
    return `statistics.mean_absolute_deviation(${values})`;
  };
  