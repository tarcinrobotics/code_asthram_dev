import Blockly from 'blockly';
import 'blockly/python';


// Define a custom block for creating a Turtle screen
Blockly.Blocks['turtle_create_screen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Create Turtle Screen');
    this.setColour("#8B0000");
    this.setTooltip('Create a Turtle screen');
    this.setPreviousStatement(false, null); // Remove previous statement connection
    this.setNextStatement(true, null); // Allow next statement connection
  }
};

// Define code generation for the custom block
Blockly.Python['turtle_create_screen'] = function(block) {
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = 'screen = turtle.Screen()\n';
  return pythonCode;
};

Blockly.Blocks['turtle_ondrag'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turtle ondrag");
    this.appendValueInput("FUNCTION")
        .setCheck(null)
        .appendField("Function:")
        .appendField(new Blockly.FieldTextInput("my_function"), "DEFAULT_FUNCTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip("Set a function to be called when the turtle is dragged");
    this.setHelpUrl("");
  }
};

Blockly.Python['turtle_ondrag'] = function(block) {
  var func = Blockly.Python.valueToCode(block, 'FUNCTION', Blockly.Python.ORDER_ATOMIC) || block.getFieldValue('DEFAULT_FUNCTION');
  return 'turtle.ondrag(' + func + ')\n';
};





// Define a custom block for setting the background color in Turtle with a default color
Blockly.Blocks['turtle_set_background_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Set Background Color')
        .appendField(new Blockly.FieldColour('#ffffff'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Set the background color in Turtle');
    // Set default color
    this.getField('COLOR').setValue('#ffffff');
  }
};

// Define code generation for the custom block
Blockly.Python['turtle_set_background_color'] = function(block) {
  var colorValue = block.getFieldValue('COLOR');
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = `screen.bgcolor('${colorValue}')\n`;
  return pythonCode;
};




// Define a custom block with a dropdown for Turtle commands
Blockly.Blocks['turtle_command'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Turtle command')
        .appendField(new Blockly.FieldDropdown([
          ['Forward', 'forward'],
          ['Backward', 'backward'],
          // Add more options as needed
        ]), 'COMMAND');
    this.appendValueInput('VALUE')
        .setCheck('Number')
        .appendField('by');
    this.appendDummyInput()
        .appendField('units');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Choose a Turtle command and specify the distance');
  }
};

// Define a custom block for turtle.circle()
// Define a custom block for turtle.circle()
Blockly.Blocks['turtle_circle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('draw circle with radius')
        .appendField(new Blockly.FieldNumber(50, 0), 'RADIUS')
        .appendField('and shape');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['Classic', 'classic'],
          ['Arrow', 'arrow'],
          ['Circle', 'circle'],
          ['Square', 'square'],
          ['Triangle', 'triangle'],
          // Add more options as needed
        ]), 'SHAPE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Draw a circle with a specified radius and shape');
  }
};



// Define code generation for the custom block
// Define code generation for the custom block
Blockly.Python['turtle_circle'] = function(block) {
  var radius = block.getFieldValue('RADIUS') || '50'; // Get the radius value from the block or use default '50'
  var shape = block.getFieldValue('SHAPE');
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = `\nturtle.circle(${radius}, '${shape}')\n`;
  return pythonCode;
};



// Define code generation for the custom block
Blockly.Python['turtle_command'] = function(block) {
  var command = block.getFieldValue('COMMAND');
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '0';
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = `\nturtle.${command}(${value})\n`;
  return pythonCode;
};

Blockly.Blocks['turtle_turn'] = {
  init: function() {
    this.appendDummyInput()
    .appendField('Turn')
        .appendField(new Blockly.FieldDropdown([
          ['Right', 'right'],
          ['Left', 'left'],
        ]), 'DIRECTION');
    this.appendValueInput('DEGREES')
        .setCheck('Number')
        .appendField('by');
    this.appendDummyInput()
        .appendField('degrees');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Choose a Turtle turn direction and specify the degrees');
  }
};

Blockly.Python['turtle_turn'] = function(block) {
  var direction = block.getFieldValue('DIRECTION');
  var degrees = Blockly.Python.valueToCode(block, 'DEGREES', Blockly.Python.ORDER_ATOMIC) || '0';
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = `\nturtle.${direction}(${degrees})\n`;
  return pythonCode;
};

Blockly.Blocks['turtle_shape'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('shape')
        .appendField(new Blockly.FieldDropdown([
          ['Turtle', 'turtle'],
          ['Circle', 'circle'],
          ['Classic', 'classic'],
          ['Square', 'square'],
          ['Triangle', 'triangle'],
        ]), 'SHAPE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Choose a Turtle shape');
  }
};

Blockly.Python['turtle_shape'] = function(block) {
  var shape = block.getFieldValue('SHAPE');
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = `\nturtle.shape("${shape}")\n`;
  return pythonCode;
};

Blockly.Blocks['turtle_pen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('pen')
        .appendField(new Blockly.FieldDropdown([
          ['up', 'penup'],
          ['down', 'pendown'],
        ]), 'PEN_STATE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Set the pen state (up or down)');
  }
};

Blockly.Python['turtle_pen'] = function(block) {
  var penState = block.getFieldValue('PEN_STATE');
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = `\nturtle.${penState}()\n`;
  return pythonCode;
};

Blockly.Blocks['turtle_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('set color')
        .appendField(new Blockly.FieldColour('#8B0000'), 'COLOR');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Set the pen color');
  }
};

Blockly.Python['turtle_color'] = function(block) {
  var colorValue = block.getFieldValue('COLOR');
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = `\nturtle.color('${colorValue}')\n`;
  return pythonCode;
};

Blockly.Blocks['turtle_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Write');
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('Insert text'), 'CONTENT')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('text');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('font size')
        .appendField(new Blockly.FieldNumber(20, 1, 100), 'FONT_SIZE')
        .appendField(new Blockly.FieldDropdown([['px', 'px'], ['pt', 'pt']]), 'FONT_UNIT');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('font thickness')
        .appendField(new Blockly.FieldDropdown([['Normal', 'normal'], ['Bold', 'bold']]), 'FONT_THICKNESS');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Write text with turtle');
  }
};

Blockly.Python['turtle_write'] = function(block) {
  var content = Blockly.Python.quote_(block.getFieldValue('CONTENT') || "");
  var fontSize = block.getFieldValue('FONT_SIZE') || 20;
  var fontUnit = block.getFieldValue('FONT_UNIT') || 'px';
  var fontThickness = block.getFieldValue('FONT_THICKNESS') || 'normal';
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = `turtle.write(${content}, font=("Arial", ${fontSize}, "${fontThickness}"))\n`;
  return pythonCode;
};




Blockly.Blocks['turtle_goto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('go to');
    this.appendValueInput('X')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('X');
    this.appendValueInput('Y')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Y');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Move turtle to a specific position');
  }
};

Blockly.Python['turtle_goto'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC) || 0;
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC) || 0;
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = `\nturtle.goto(${x}, ${y})\n`;
  return pythonCode;
};

Blockly.Blocks['turtle_pos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('get turtle position');
    this.setOutput(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Get the current position of the turtle');
  }
};

Blockly.Python['turtle_pos'] = function(block) {
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = '\nturtle.pos()';
  return [pythonCode, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['turtle_stamp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('stamp turtle');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Stamp the turtle on the screen');
  }
};

Blockly.Python['turtle_stamp'] = function(block) {
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = '\nturtle.stamp()\n';
  return pythonCode;
};

// Define a custom block for turtle.done()
Blockly.Blocks['turtle_done'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('turtle done');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Keep the Turtle window open until closed by the user');
  }
};

// Define code generation for the custom block
Blockly.Python['turtle_done'] = function(block) {
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = '\nturtle.done()\n';
  return pythonCode;
};


Blockly.Blocks['turtle_begin_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('begin fill');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Begin filling the shape with color');
  }
};

Blockly.Python['turtle_begin_fill'] = function(block) {
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = '\nturtle.begin_fill()\n';
  return pythonCode;
};

Blockly.Blocks['turtle_end_fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('end fill');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('End filling the shape with color');
  }
};

Blockly.Python['turtle_end_fill'] = function(block) {
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  var pythonCode = '\nturtle.end_fill()\n';
  return pythonCode;
};

Blockly.Blocks['turtle_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('set turtle speed to')
        .appendField(new Blockly.FieldDropdown([
          ['slowest', '1'],
          ['slow', '3'],
          ['normal', '6'],
          ['fast', '9'],
          ['fastest', '0']
        ]), 'SPEED');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8B0000");
    this.setTooltip('Set turtle speed');
  }
};

Blockly.Python['turtle_speed'] = function(block) {
  var speed = block.getFieldValue('SPEED');
  Blockly.Python.definitions_['turtle'] = 'import turtle';
  return 'turtle.speed(' + speed + ')\n';
};
