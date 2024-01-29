import Blockly from 'blockly';
import 'blockly/python';

Blockly.Blocks['variable_declaration'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Declare variable');

        this.appendStatementInput('STACK')
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('Declare a variable and assign a value');
        this.setMutator(new Blockly.Mutator(['variable_declaration_item']));
    },
    mutationToDom: function() {
        var container = Blockly.utils.xml.createElement('mutation');
        var inputStack = this.getInput('STACK');
        if (inputStack && inputStack.connection) {
            var itemBlock = inputStack.connection.targetBlock();
            if (itemBlock) {
                container.setAttribute('items', 1);
            }
        }
        return container;
    },

    domToMutation: function(xmlElement) {
        var items = parseInt(xmlElement.getAttribute('items'), 10) || 0;
        this.updateShape_(items);
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock('variable_declaration_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        var itemBlock = workspace.newBlock('variable_declaration_item');
        itemBlock.initSvg();
        connection.connect(itemBlock.previousConnection);
        return containerBlock;
    },
    compose: function(containerBlock) {
        var inputStack = this.getInput('STACK');
        if (!inputStack) {
            inputStack = this.appendDummyInput('STACK');
        }
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var items = 0;
        if (itemBlock) {
            items = 1;
        }
        this.updateShape_(items);
    },
    updateShape_: function(items) {
        // Add or remove value input based on the number of items.
        var inputExists = this.getInput('VALUE');
        if (items === 1 && !inputExists) {
            this.appendValueInput('VALUE')
                .appendField('Declare variable')
                .setCheck(null);
        } else if (items === 0 && inputExists) {
            this.removeInput('VALUE');
        }
    },
};

Blockly.Python['variable_declaration'] = function(block) {
    // Loop through each variable name in the stack
    var code = '';
    var values = Blockly.Python.statementToCode(block, 'STACK');
    values = values.split('\n').filter(function(line) {
        return line.trim() !== '';
    });

    for (var i = 0; i < values.length; i++) {
        var variableName = values[i].trim();
        code += variableName + ' = your_value_here\n';  // Replace with your logic for assigning values
    }
    return code;
};
