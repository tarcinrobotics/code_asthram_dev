import Blockly from 'blockly';
import 'blockly/python';

// Initialize the array block
Blockly.Blocks['initialize_array'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initialize array")
        .appendField(new Blockly.FieldVariable("arr"), "ARR")
        .appendField("with size");
    this.appendValueInput("SIZE")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EEDFCC");
    this.setTooltip("Initialize an array with the given size.");
  }
};

// Blockly Python code for initializing the array
Blockly.Python['initialize_array'] = function(block) {
  var array = Blockly.Python.variableDB_.getName(block.getFieldValue('ARR'), Blockly.Variables.NAME_TYPE);
  var size = Blockly.Python.valueToCode(block, 'SIZE', Blockly.Python.ORDER_ATOMIC);
  return array + ' = [' + '0' + '] * ' + size + '\n';
};
  
// Set List Element
Blockly.Blocks['set_list_element'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set element")
        .appendField(new Blockly.FieldVariable("arr"), "LIST")
        .appendField("at index");
    this.appendValueInput("INDEX")
        .setCheck("Number");
    this.appendValueInput("VALUE")
        .setCheck("Number")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EEDFCC");
    this.setTooltip("Set an element in the list at the specified index.");
  }
};

// Set List Element
Blockly.Python['set_list_element'] = function(block) {
  var list = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'), Blockly.Variables.NAME_TYPE);
  var index = Blockly.Python.valueToCode(block, 'INDEX', Blockly.Python.ORDER_ATOMIC);
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  return list + '[' + index + '] = ' + value + '\n';
};

// Bubble Sort Logic
Blockly.Blocks['bubble_sort_logic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Bubble Sort Logic");
    this.appendStatementInput("CODE")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EEDFCC");
    this.setTooltip("Bubble Sort logic.");
  }
};


// Bubble Sort Logic
Blockly.Python['bubble_sort_logic'] = function(block) {
  var code = Blockly.Python.statementToCode(block, 'CODE');
  return code;
};

// For loop block
Blockly.Blocks['for_loop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("For")
        .appendField(new Blockly.FieldVariable("i"), "VAR")  // Use unique names for each loop variable
        .appendField("in range");
    this.appendValueInput("START")
        .setCheck("Number");
    this.appendValueInput("END")
        .setCheck("Number")
        .appendField("to");
    this.appendValueInput("STEP")
        .setCheck("Number")
        .appendField("step");
    this.appendStatementInput("STATEMENTS")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EEDFCC");
    this.setTooltip("For loop with specified range and step size.");
  }
};

// Blockly Python code for the for loop
Blockly.Python['for_loop'] = function(block) {
  var variable = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var start = Blockly.Python.valueToCode(block, 'START', Blockly.Python.ORDER_ATOMIC);
  var end = Blockly.Python.valueToCode(block, 'END', Blockly.Python.ORDER_ATOMIC);
  var step = Blockly.Python.valueToCode(block, 'STEP', Blockly.Python.ORDER_ATOMIC);
  var statements = Blockly.Python.statementToCode(block, 'STATEMENTS');
  return 'for ' + variable + ' in range(' + start + ', ' + end + ', ' + step + '):\n' + statements + '\n';
};
  
  
// Swap Elements
Blockly.Blocks['swap_elements'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Swap elements")
        .appendField(new Blockly.FieldVariable("arr"), "LIST")
        .appendField("at indices");
    this.appendValueInput("INDEX1")
        .setCheck("Number");
    this.appendValueInput("INDEX2")
        .setCheck("Number")
        .appendField("and");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#EEDFCC");
    this.setTooltip("Swap elements in the list at the specified indices.");
  }
};

Blockly.Python['swap_elements'] = function(block) {
  var list = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'), Blockly.Variables.NAME_TYPE);
  var index1 = Blockly.Python.valueToCode(block, 'INDEX1', Blockly.Python.ORDER_ATOMIC);
  var index2 = Blockly.Python.valueToCode(block, 'INDEX2', Blockly.Python.ORDER_ATOMIC);
  return list + '[' + index1 + '], ' + list + '[' + index2 + '] = ' + list + '[' + index2 + '], ' + list + '[' + index1 + ']\n';
};


// Return Statement
Blockly.Blocks['return_statement'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("return");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour("#EEDFCC");
    this.setTooltip("Return statement");
  }
};
  
// Return Statement
Blockly.Python['return_statement'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_NONE) || '';
  return 'return ' + value + '\n';
};

Blockly.Blocks['if_statement'] = {
  init: function() {
    this.appendValueInput('CONDITION')
        .setCheck('Boolean')
        .appendField('if');
    this.appendStatementInput('DO')
        .appendField('do');
    this.setPreviousStatement(true, null);
    this.setColour("#EEDFCC");
    this.setTooltip('If Statement');
    this.setNextStatement(true, null); // Add bottom connection bump
  }
};

  
  Blockly.Python['if_statement'] = function(block) {
  var condition = Blockly.Python.valueToCode(block, 'CONDITION', Blockly.Python.ORDER_NONE) || 'False';
  var statements = Blockly.Python.statementToCode(block, 'DO');
  var code = 'if ' + condition + ':\n' + statements;
  return code;
  };
  
  
  
  
Blockly.Blocks['bubble_sort'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Bubble Sort");
      this.appendValueInput("LIST")
          .setCheck("Array")
          .appendField("List");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EEDFCC");
      this.setTooltip("Sort an array using Bubble Sort.");
      this.setNextStatement(true, null); // Add bottom connection bump
    }
  };
  

  Blockly.Python['bubble_sort'] = function(block) {
    var list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
    var code = 'arr = ' + list + '\n';  // Fixing the assignment syntax
    code += 'sorted_arr = bubble_sort(arr[:])\n';
    code += 'def bubble_sort(arr):\n';
    code += '    n = len(arr)\n';
    code += '    for i in range(n):\n';
    code += '        for j in range(0, n-i-1):\n';
    code += '            if arr[j] > arr[j+1]:\n';
    code += '                arr[j], arr[j+1] = arr[j+1], arr[j]\n';
    code += '    return arr\n';
    return code;
  };
  

  //insertion sort  
  Blockly.Blocks['insertion_sort_logic'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Insertion Sort Logic");
      this.appendStatementInput("CODE")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EEDFCC");
      this.setTooltip("Insertion Sort logic.");
    }
  };
  
  Blockly.Python['insertion_sort_logic'] = function(block) {
    var code = Blockly.Python.statementToCode(block, 'CODE');
    return 'def insertion_sort(arr):\n' + code + '\n';
  };
  
  Blockly.Blocks['compare_elements'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Compare elements")
          .appendField(new Blockly.FieldVariable("arr"), "LIST")
          .appendField("at indices");
      this.appendValueInput("INDEX1")
          .setCheck("Number");
      this.appendValueInput("INDEX2")
          .setCheck("Number")
          .appendField("and");
      this.setInputsInline(true);
      this.setOutput(true, "Boolean");
      this.setColour("#EEDFCC");
      this.setTooltip("Compare elements in the list at the specified indices.");
    }
  };

  Blockly.Python['compare_elements'] = function(block) {
    var list = Blockly.Python.variableDB_.getName(block.getFieldValue('LIST'), Blockly.Variables.NAME_TYPE);
    var index1 = Blockly.Python.valueToCode(block, 'INDEX1', Blockly.Python.ORDER_ATOMIC);
    var index2 = Blockly.Python.valueToCode(block, 'INDEX2', Blockly.Python.ORDER_ATOMIC);
    return list + '[' + index1 + '] < ' + list + '[' + index2 + ']';
  };
  
  
  
  Blockly.Blocks['insertion_sort'] = {
    init: function() {
      this.appendValueInput("LIST")
          .setCheck("Array")
          .appendField("Insertion Sort");
      this.setOutput(true, "Array");
      this.setColour("#EEDFCC");
      this.setTooltip("Sort an array using Insertion Sort.");
    }
  };
  
  Blockly.Python['insertion_sort'] = function(block) {
    var list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
    var code = 'def insertion_sort(arr):\n';
    code += '    for i in range(1, len(arr)):\n';
    code += '        key = arr[i]\n';
    code += '        j = i-1\n';
    code += '        while j >=0 and key < arr[j] :\n';
    code += '                arr[j+1] = arr[j]\n';
    code += '                j -= 1\n';
    code += '        arr[j+1] = key\n';
    code += '    return arr\n';
    code += list + ' = insertion_sort(' + list + '[:])\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
//merge sort

Blockly.Blocks['merge_sort_logic'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Merge Sort Logic");
      this.appendStatementInput("CODE")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EEDFCC");
      this.setTooltip("Merge Sort logic.");
    }
  };
  
  Blockly.Python['merge_sort_logic'] = function(block) {
    var code = Blockly.Python.statementToCode(block, 'CODE');
    return 'def merge_sort(arr):\n' + code + '\n';
  };
  
  Blockly.Blocks['merge'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Merge")
          .appendField(new Blockly.FieldVariable("arr"), "ARRAY")
          .appendField("from indices");
      this.appendValueInput("START1")
          .setCheck("Number");
      this.appendValueInput("END1")
          .setCheck("Number")
          .appendField("to");
      this.appendValueInput("START2")
          .setCheck("Number")
          .appendField("and");
      this.appendValueInput("END2")
          .setCheck("Number")
          .appendField("to");
      this.setInputsInline(true);
      this.setOutput(true, "Array");
      this.setColour("#EEDFCC");
      this.setTooltip("Merge two sorted subarrays into a single sorted array.");
    }
  };
  
  Blockly.Python['merge'] = function(block) {
    var array = Blockly.Python.variableDB_.getName(block.getFieldValue('ARRAY'), Blockly.Variables.NAME_TYPE);
    var start1 = Blockly.Python.valueToCode(block, 'START1', Blockly.Python.ORDER_ATOMIC);
    var end1 = Blockly.Python.valueToCode(block, 'END1', Blockly.Python.ORDER_ATOMIC);
    var start2 = Blockly.Python.valueToCode(block, 'START2', Blockly.Python.ORDER_ATOMIC);
    var end2 = Blockly.Python.valueToCode(block, 'END2', Blockly.Python.ORDER_ATOMIC);
    return array + '[' + start1 + ':' + end1 + '] + ' + array + '[' + start2 + ':' + end2 + ']';
  };
  
 
  Blockly.Blocks['merge_sort'] = {
    init: function() {
      this.appendValueInput("LIST")
          .setCheck("Array")
          .appendField("Merge Sort");
      this.setOutput(true, "Array");
      this.setColour("#EEDFCC");
      this.setTooltip("Sort an array using Merge Sort.");
    }
  };

  Blockly.Python['merge_sort'] = function(block) {
    var list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
    var code = 'def merge_sort(arr):\n';
    code += '    if len(arr) > 1:\n';
    code += '        mid = len(arr)//2\n';
    code += '        L = arr[:mid]\n';
    code += '        R = arr[mid:]\n';
    code += '        merge_sort(L)\n';
    code += '        merge_sort(R)\n';
    code += '        i = j = k = 0\n';
    code += '        while i < len(L) and j < len(R):\n';
    code += '            if L[i] < R[j]:\n';
    code += '                arr[k] = L[i]\n';
    code += '                i += 1\n';
    code += '            else:\n';
    code += '                arr[k] = R[j]\n';
    code += '                j += 1\n';
    code += '            k += 1\n';
    code += '        while i < len(L):\n';
    code += '            arr[k] = L[i]\n';
    code += '            i += 1\n';
    code += '            k += 1\n';
    code += '        while j < len(R):\n';
    code += '            arr[k] = R[j]\n';
    code += '            j += 1\n';
    code += '            k += 1\n';
    code += '    return arr\n';
    code += list + ' = merge_sort(' + list + '[:])\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  //quick sort

  Blockly.Blocks['quick_sort_logic'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Quick Sort Logic");
      this.appendStatementInput("CODE")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#EEDFCC");
      this.setTooltip("Quick Sort logic.");
    }
  };

  Blockly.Python['quick_sort_logic'] = function(block) {
    var code = Blockly.Python.statementToCode(block, 'CODE');
    return 'def quick_sort(arr):\n' + code + '\n';
  };

  Blockly.Blocks['partition'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Partition")
          .appendField(new Blockly.FieldVariable("arr"), "ARRAY")
          .appendField("around pivot");
      this.appendValueInput("PIVOT")
          .setCheck("Number");
      this.setInputsInline(true);
      this.setOutput(true, "Array");
      this.setColour("#EEDFCC");
      this.setTooltip("Partition the array into two subarrays around a pivot element.");
    }
  };

  Blockly.Python['partition'] = function(block) {
    var array = Blockly.Python.variableDB_.getName(block.getFieldValue('ARRAY'), Blockly.Variables.NAME_TYPE);
    var pivot = Blockly.Python.valueToCode(block, 'PIVOT', Blockly.Python.ORDER_ATOMIC);
    // Code to partition the array around the pivot
    return '...'; // Placeholder code
  };

  Blockly.Blocks['combine'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Combine")
          .appendField(new Blockly.FieldVariable("left"), "LEFT")
          .appendField("and")
          .appendField(new Blockly.FieldVariable("right"), "RIGHT")
          .appendField("with pivot");
      this.appendValueInput("PIVOT")
          .setCheck("Number");
      this.setInputsInline(true);
      this.setOutput(true, "Array");
      this.setColour("#EEDFCC");
      this.setTooltip("Combine sorted subarrays with a pivot element.");
    }
  };

  Blockly.Python['combine'] = function(block) {
    var leftArray = Blockly.Python.variableDB_.getName(block.getFieldValue('LEFT'), Blockly.Variables.NAME_TYPE);
    var rightArray = Blockly.Python.variableDB_.getName(block.getFieldValue('RIGHT'), Blockly.Variables.NAME_TYPE);
    var pivot = Blockly.Python.valueToCode(block, 'PIVOT', Blockly.Python.ORDER_ATOMIC);
    // Code to combine the sorted subarrays with the pivot
    return '...'; // Placeholder code
  };
  

  Blockly.Blocks['quick_sort'] = {
    init: function() {
      this.appendValueInput("LIST")
          .setCheck("Array")
          .appendField("Quick Sort");
      this.setOutput(true, "Array");
      this.setColour("#EEDFCC");
      this.setTooltip("Sort an array using Quick Sort.");
    }
  };

  Blockly.Python['quick_sort'] = function(block) {
    var list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
    var code = 'def quick_sort(arr):\n';
    code += '    if len(arr) <= 1:\n';
    code += '        return arr\n';
    code += '    pivot = arr[len(arr)//2]\n';
    code += '    left = [x for x in arr if x < pivot]\n';
    code += '    middle = [x for x in arr if x == pivot]\n';
    code += '    right = [x for x in arr if x > pivot]\n';
    code += '    return quick_sort(left) + middle + quick_sort(right)\n';
    code += list + ' = quick_sort(' + list + '[:])\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  