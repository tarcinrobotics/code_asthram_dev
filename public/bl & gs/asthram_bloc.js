"use strict";

goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");


Blockly.Blocks['piannobox']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.PIANOO_pin)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "pin");
    this.appendStatementInput("box");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(115);
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};


Blockly.Blocks["notone22"]={init:function(){
        this.setColour("#82638E");
        //this.setHelpUrl("STOP - Pin");
        this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField("STOP - Pin");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
       // this.setTooltip(Blockly.Msg.ARDUINO_NOTONE_TOOLTIP)
		}
};


/* communication */
Blockly.Blocks["soft_init"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#0060aa");
         this.setHelpUrl(Blockly.Msg.HELPURL_036);
        this.appendDummyInput()
      .appendField(Blockly.Msg.SSERIAL_Init)
      this.appendValueInput("PIN1", "Number");
      this.appendDummyInput()
	  .appendField(" Tx")
      this.appendValueInput("PIN2", "Number");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.vitesse)
      .appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
       // this.setTooltip(Blockly.Msg.SSERIAL_tooltip)
    }
};
Blockly.Blocks["soft_init_ttl"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#10760e");
         this.setHelpUrl(Blockly.Msg.HELPURL_101);
        this.appendDummyInput()
      .appendField(Blockly.Msg.SSERIAL_Init_ttl)
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN1")
      .appendField("/ Tx")
      .appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN2");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.vitesse)
      .appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
       // this.setTooltip(Blockly.Msg.SSERIAL_tooltip)
    }
};
Blockly.Blocks["bluetooth_soft_init"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#9491DB");
       this.setHelpUrl(Blockly.Msg.HELPURL_038);
        this.appendDummyInput()
      .appendField(Blockly.Msg.SSERIAL_Init_bluetooth)
      this.appendValueInput("PIN1", "Number");
      this.appendDummyInput()
	  .appendField(" Tx")
      this.appendValueInput("PIN2", "Number");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.vitesse)
      .appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.SSERIAL_tooltip)
    }
};
Blockly.Blocks["soft_read"]={init:function(){
        this.setColour("#0060aa");
       this.setHelpUrl(Blockly.Msg.HELPURL_037);
        this.appendDummyInput().appendField(Blockly.Msg.SSERIAL_Read);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        //this.setTooltip(Blockly.Msg.SSERIAL_Read_tooltip)
    }
};
Blockly.Blocks["soft_read_ttl_dis"]={init:function(){
        this.setColour("#10760E");
       this.setHelpUrl(Blockly.Msg.HELPURL_101);
        this.appendDummyInput().appendField(Blockly.Msg.soft_read_ttl_dis);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        //this.setTooltip(Blockly.Msg.SSERIAL_Read_tooltip)
    }
};

Blockly.Blocks["bluetooth_soft_read"]={init:function(){
        this.setColour("#9491DB");
        this.setHelpUrl(Blockly.Msg.HELPURL_039);
        this.appendDummyInput().appendField(Blockly.Msg.SSERIAL_Read_bluetooth);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        //this.setTooltip(Blockly.Msg.SSERIAL_Read_tooltip)
    }
};

Blockly.Blocks["bluetooth_soft_serial_read"]={init:function(){
        this.setColour("#777777");
       // this.setHelpUrl(Blockly.Msg.HELPURL_039);
	   this.appendDummyInput().appendField(Blockly.Msg.ARRAY_index);
	   this.appendDummyInput()
	   .appendField(new Blockly.FieldDropdown([["Serial", "Serial"],["SoftSerial","mySerial"],["Bluetooth","mySerialBT"]]), "color"); 
        this.appendDummyInput().appendField(Blockly.Msg.CAT_TEXT);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        //this.setTooltip(Blockly.Msg.SSERIAL_Read_tooltip)
    }
};

Blockly.Blocks["soft_write"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL_036);
        this.setColour("#0060aa");
        this.appendValueInput("CONTENT", "String").appendField(Blockly.Msg.SSERIAL_Write);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.SSERIAL_Write_tooltip)
    }
};
Blockly.Blocks["soft_write_ttl_uart"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL_101);
        this.setColour("#10760E");
        this.appendValueInput("CONTENT", "String")
		.appendField(Blockly.Msg.base_define_ttl_uart_top_nom);
		this.appendDummyInput()
		.appendField(Blockly.Msg.base_define_ttl_uart_top_nom_var)
		.appendField(new Blockly.FieldTextInput("5"), "TEXT1")
		.appendField(new Blockly.FieldTextInput("0"), "TEXT2")
		.appendField(new Blockly.FieldTextInput("0"), "TEXT3")
		.appendField(new Blockly.FieldTextInput("0"), "TEXT4"); 
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.SSERIAL_Write_tooltip)
    }
};
Blockly.Blocks["bluetooth_soft_write"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL_038);
        this.setColour("#9491DB");
        this.appendValueInput("CONTENT", "String").appendField(Blockly.Msg.SSERIAL_Write_bluetooth);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.SSERIAL_Write_tooltip)
    }
};

Blockly.Blocks["bluetooth_soft_write_esp"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL_038);
        this.setColour("#9491DB");
        this.appendValueInput("CONTENT", "String").appendField("Bluetooth - ESP 32");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.SSERIAL_Write_tooltip)
    }
};


Blockly.Blocks["soft_available"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL_037);
        this.setColour("#0060aa");
        this.appendDummyInput().appendField(Blockly.Msg.SSERIAL_Available);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.SSERIAL_Available_tooltip)
    }
};
Blockly.Blocks["bluetooth_soft_available"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL_039);
        this.setColour("#9491DB");
        this.appendDummyInput().appendField(Blockly.Msg.SSERIAL_Available_bluetooth);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.SSERIAL_Available_tooltip)
    }
};
Blockly.Blocks["serial_init8866"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#5BA599");
        this.setHelpUrl(Blockly.Msg.HELPURL_034);
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
    .appendField(Blockly.Msg.Serial_Init)
    .appendField(new Blockly.FieldDropdown(profile[card].serialPin), "pin");
    this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.Msg.vitesse)
    .appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
        //this.setTooltip(Blockly.Msg.Serial_Init_tooltip)
    }
};
Blockly.Blocks["serial_read"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#5BA599");
        this.setHelpUrl(Blockly.Msg.HELPURL_035);
    if (card!="python"){this.appendDummyInput().appendField(Blockly.Msg.Serial_read);} else {this.appendDummyInput().appendField(Blockly.Msg.repl_read);}
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.Serial_read_tooltip)
    }
};

Blockly.Blocks["serial_line"]={init:function(){
        this.setColour("#0060aa");
        //this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.Serial_saut);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setTooltip(Blockly.Msg.Serial_saut_tooltip)}
};
Blockly.Blocks["serial_tab"]={init:function(){
    this.setColour("#0060aa");
    //this.setHelpUrl(Blockly.Msg.HELPURL);
    this.appendDummyInput().appendField(Blockly.Msg.Serial_space);
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setTooltip(Blockly.Msg.Serial_space_tooltip)}
};
Blockly.Blocks["serial_available"]={init:function(){
        this.setColour("#5BA599");
        this.setHelpUrl(Blockly.Msg.HELPURL_035);
        this.appendDummyInput().appendField(Blockly.Msg.Serial_available);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.Serial_available_tooltip)
    }
};
Blockly.Blocks["serial_write"]={init:function(){
        this.setColour("#5BA599");
        //this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("CONTENT", String).appendField(Blockly.Msg.Serial_Write);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.Serial_write_tooltip)}
};
Blockly.Blocks["serial_write_ln"]={init:function(){
        this.setColour("#5BA599");
       // this.setHelpUrl(Blockly.Msg.HELPURL_034);
        this.appendValueInput("CONTENT", String).appendField(Blockly.Msg.Serial_Write_ln);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.Serial_write_tooltip)
    }
};
Blockly.Blocks["serial_input"]={init:function(){
        this.setColour("#0060aa");
        //this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendValueInput("CONTENT", String).appendField("wait user command");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.Serial_write_tooltip)}
};
/*  entrée-sortie */
Blockly.Blocks["toggle"]={init:function(){
        this.setColour("#5BA58C");
        this.setHelpUrl(Blockly.Msg.tempo_helpurl);
        this.appendValueInput("PIN", "Number").setCheck("Number").appendField(Blockly.Msg.toggle);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.toggle_tooltip)}
};
Blockly.Blocks["inout_digital_write"]={init:function(){
        this.setColour("#A5675B");
        this.setHelpUrl(Blockly.Msg.HELPURL_032);
        this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).setCheck("Number").appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1);
        this.setInputsInline(true);
        this.appendValueInput("STAT", "Boolean").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP)
    }
};
Blockly.Blocks["inout_digital_read"]={init:function(){
        this.setColour("#00929f");
        //this.setHelpUrl(Blockly.Msg.HELPURL_029);
        this.appendValueInput("PIN", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT);
        this.setOutput(true, "Boolean");
       // this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP)
    }
};
Blockly.Blocks["digital_read"]={init:function(){
        this.setColour("#A5675B");
        this.setHelpUrl(Blockly.Msg.HELPURL_029);
        this.appendValueInput("PIN", "Number").appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT);
        //this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldCheckbox("FALSE"), "pullup").appendField(Blockly.Msg.in_pullup);   сопротивление резистор микроконтроллера
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.in_pullup_tooltip)}
};
Blockly.Blocks["digital_readbi"]={init:function(){
        this.setColour("#A5675B");
        this.setHelpUrl(Blockly.Msg.HELPURL_030);
        this.appendValueInput("PIN", "Number").appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT);
        this.appendDummyInput()
    .appendField(Blockly.Msg.in_pullup)
    .appendField(new Blockly.FieldCheckbox("FALSE"), "pullup");  
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.in_pullup_tooltip)}
};
Blockly.Blocks["inout_analog_write"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#A5675B");
        this.setHelpUrl(Blockly.Msg.HELPURL_033);
        this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1).appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "broche");
        this.appendValueInput("NUM", "Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT).setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP)}
};
Blockly.Blocks["inout_analog_write2"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#A5675B");
        this.setHelpUrl(Blockly.Msg.HELPURL_033);
        this.appendValueInput("PIN", "Number").setAlign(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1).setCheck("Number").appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1);
        this.setInputsInline(true);
        this.appendValueInput("STAT", "Boolean").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP)}
};

Blockly.Blocks["inout_analog_write3"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#A5675B");
       // this.setHelpUrl(Blockly.Msg.HELPURL_033);
    this.appendDummyInput()
	 .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1)
	 this.appendValueInput("PIN", "Number");
		
    this.appendDummyInput()
	 .appendField(Blockly.Msg.ARDUINO_INOUTkanal)
	 .appendField(new Blockly.FieldTextInput("0"), "PIN1");
	
    this.appendDummyInput()
	 .appendField(Blockly.Msg.ARDUINO_INOUTgc)
	 .appendField(new Blockly.FieldTextInput("5000"), "PIN2");

    this.appendDummyInput()
	 .appendField(Blockly.Msg.ARDUINO_INOUTbit)
	 .appendField(new Blockly.FieldTextInput("8"), "PIN3");
	 
        this.setInputsInline(true);
        this.appendValueInput("STAT", "Boolean").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_INOUThelpb)
		}
};


Blockly.Blocks["inout_analog_read"]={init:function(){
    var card=window.localStorage.card;
    var prog = window.localStorage.prog;
        this.setColour("#A5675B");
        this.setHelpUrl(Blockly.Msg.HELPURL_031);
    if (prog != "python") {
      this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT).appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
        } else {
      this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT+" A0");
    }
    this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)
    }
};
Blockly.Blocks["inout_analog_read_esp"]={init:function(){
   // var card=window.localStorage.card;
   // var prog = window.localStorage.prog;
        this.setColour("#A5675B");
       // this.setHelpUrl(Blockly.Msg.HELPURL_031);
    this.appendDummyInput()
	 .appendField(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT)
	 this.appendValueInput("PIN", "Number");
	  this.setInputsInline(true);
     //   this.setPreviousStatement(true, null);
     //   this.setNextStatement(true, null);
    this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)
    }
};
Blockly.Blocks['inout_analog_aref']={init:function(){
    this.appendDummyInput()
        .appendField("AREF")
        .appendField(new Blockly.FieldDropdown([["DEFAULT", "DEFAULT"], ["INTERNAL", "INTERNAL"], ["INTERNAL1V1", "INTERNAL1V1"], ["INTERNAL2V56", "INTERNAL2V56"], ["EXTERNAL", "EXTERNAL"]]), "aref_dropdown");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#A5675B");
    //this.setTooltip('help Vitaliy...');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks["inout_attachInterrupt"]={init:function(){
    var card=window.localStorage.card;
    var prog = window.localStorage.prog;
        this.setColour("#00929f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
    if (prog != "python") {
      this.appendDummyInput().appendField(Blockly.Msg.LKL_ATTACHINTERRUPT_PIN).appendField(new Blockly.FieldDropdown(Blockly.Msg.LKL_DROPDOWN), "mode");
        } else {
      this.appendDummyInput().appendField(Blockly.Msg.LKL_ATTACHINTERRUPT_PIN).appendField(new Blockly.FieldDropdown(Blockly.Msg.irq), "mode");
    }
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.LKL_MODE).appendField(new Blockly.FieldDropdown(profile[card].interrupt), 'PIN');
        this.appendStatementInput('DO').appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setInputsInline(false);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        this.setTooltip(Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT)}
};
Blockly.Blocks["inout_detachInterrupt"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#00929f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
    this.appendDummyInput().appendField(Blockly.Msg.LKL_DETACHINTERRUPT_PIN).appendField(new Blockly.FieldDropdown(profile[card].interrupt), 'PIN')
    this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT)}
};
/*  structure  */
Blockly.Blocks["base_setup_loop"]={
  init:function(){
    var prog = window.localStorage.prog;
        this.setColour("#A5995B");
        this.setHelpUrl(Blockly.Msg.HELPURL_022);
    if (prog != "python") {
      this.appendDummyInput().appendField(Blockly.Msg.init);
    } else {
      this.appendDummyInput().appendField(Blockly.Msg.def);
    }
        this.appendStatementInput("DO");
        this.appendDummyInput().appendField(Blockly.Msg.loop);
        this.appendStatementInput("LOOP");
         this.setInputsInline(false);
         this.setTooltip(Blockly.Msg.base_setup_loop);
        this.contextMenu = false},
     getArduinoLoopsInstance:function(){return true},
   onchange:function(){
     var blocks = [];
     for (var blockID in BlocklyDuino.workspace.blockDB_) {
       if (BlocklyDuino.workspace.blockDB_[blockID].type == "base_setup_loop"||BlocklyDuino.workspace.blockDB_[blockID].type == "base_loop") {
         blocks.push(BlocklyDuino.workspace.blockDB_[blockID]);
       }
     }
     if(blocks.length>1) BlocklyDuino.workspace.undo(false)
     }
};
Blockly.Blocks["arduino_setup"] = {
  init: function() {
  this.setColour("#A5995B");
    this.appendDummyInput()
        .appendField(Blockly.Msg.init);
    this.appendStatementInput("MySetup");
    this.appendDummyInput()
        .appendField(Blockly.Msg.loop);
    this.appendStatementInput("MyLoop");
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_005);
    this.setDeletable(true);
  }
};

Blockly.Blocks["base_loop"]={
  init:function(){
        this.setColour("#A5995B");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(Blockly.Msg.loop);
        this.appendStatementInput("LOOP");
    var prog = window.localStorage.prog;
    if (prog == "python")  this.setPreviousStatement(true, null);
        this.setTooltip(Blockly.Msg.loop_tooltip)},
  onchange:function(){
    var blocks = [];
    for (var blockID in BlocklyDuino.workspace.blockDB_) {
      if (BlocklyDuino.workspace.blockDB_[blockID].type == "base_loop") {
        blocks.push(BlocklyDuino.workspace.blockDB_[blockID]);
      }
    }
    if(blocks.length>1) BlocklyDuino.workspace.undo(false)}
};
Blockly.Blocks["base_define"]={
  init:function(){
    var prog = window.localStorage.prog;
    if (prog == "python")  this.setNextStatement(true, null);
        this.setColour("#A5995B");
        this.setHelpUrl(Blockly.Msg.HELPURL_021);
        this.appendDummyInput().appendField(Blockly.Msg.def);
        this.appendStatementInput("DO");
        this.setTooltip(Blockly.Msg.def_tooltip)},
  onchange:function(){
    var blocks = [];
    for (var blockID in BlocklyDuino.workspace.blockDB_) {
      if (BlocklyDuino.workspace.blockDB_[blockID].type == "base_define") {
        blocks.push(BlocklyDuino.workspace.blockDB_[blockID]);
      }
    }
    if(blocks.length>1) BlocklyDuino.workspace.undo(false)}
};
Blockly.Blocks["base_code"]={init:function(){
  var prog = window.localStorage.prog;
  if (prog != "python") {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("code arduino;"), "TEXT");
  } else {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("code python"), "TEXT");
  }
    this.setHelpUrl(Blockly.Msg.HELPURL_023);
    this.setColour("#A5995B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.code_tooltip)}
};




Blockly.Blocks["base_begin"]={
  init:function(){
        this.appendDummyInput().appendField(Blockly.Msg.begin);
        this.setNextStatement(true, null);
        this.setColour("#A5995B");
        this.setTooltip(Blockly.Msg.begin_tooltip);
        this.setHelpUrl(Blockly.Msg.HELPURL)},
  onchange:function(){
    var blocks = [];
    for (var blockID in BlocklyDuino.workspace.blockDB_) {
      if (BlocklyDuino.workspace.blockDB_[blockID].type == "base_begin") {
        blocks.push(BlocklyDuino.workspace.blockDB_[blockID]);
      }
    }
    if(blocks.length>1) BlocklyDuino.workspace.undo(false)}
};
Blockly.Blocks["base_end"]={
  init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour("#A5995B");
        this.appendDummyInput().appendField(Blockly.Msg.END);
        this.setPreviousStatement(true, null);
        //this.setTooltip(Blockly.Msg.END_tooltip)
    },
  onchange:function(){
    var blocks = [];
    for (var blockID in BlocklyDuino.workspace.blockDB_) {
      if (BlocklyDuino.workspace.blockDB_[blockID].type == "base_end") {
        blocks.push(BlocklyDuino.workspace.blockDB_[blockID]);
      }
    }
    if(blocks.length>1) BlocklyDuino.workspace.undo(false)}
};
Blockly.Blocks['base_code_entree']={init:function(){
  var prog = window.localStorage.prog;
  if (prog != "python") {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("code arduino"), "TEXT");
  } else {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("code python"), "TEXT");
  }
  this.setOutput(true);
    this.setColour("#A5995B");
  this.setHelpUrl(Blockly.Msg.HELPURL_024);
  //this.setTooltip(Blockly.Msg.code_tooltip)
  }
};

/*  temps  */
Blockly.Blocks["millis"]={init:function(){
  var prog = window.localStorage.prog;
    this.setColour("#5B99A5");
  if (prog != "python") {
    this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.times), "unite").appendField(Blockly.Msg.millis2);
  } else {
    this.appendDummyInput().appendField(Blockly.Msg.millis).appendField(new Blockly.FieldDropdown(Blockly.Msg.times), "unite");
  }
    this.setOutput(true, "Number");
  //this.setTooltip(Blockly.Msg.tempo_tooltip);
  this.setHelpUrl(Blockly.Msg.HELPURL_014);
  }
};
Blockly.Blocks['tempo_sans_delay']={init:function() {
  var prog = window.localStorage.prog;
  this.appendValueInput("DELAY_TIME", "Number").setCheck("Number").appendField(Blockly.Msg.tempo1);
  if (prog != "python") {
    this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.times), "unite");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null)
  } else {
    this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.time), "unite");
  }
  this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DO);
  this.appendStatementInput("branche");
  this.setInputsInline(true);
  this.setColour("#5B99A5");
  //this.setTooltip(Blockly.Msg.tempo_tooltip);
  this.setHelpUrl(Blockly.Msg.HELPURL_014);
  }
};
Blockly.Blocks["base_delay"]={init:function(){
        this.setColour("#5B99A5");
        this.setHelpUrl(Blockly.Msg.HELPURL_014);
        this.appendValueInput("DELAY_TIME", "Number").appendField(Blockly.Msg.ARDUINO_BASE_DELAY).setCheck("Number");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.times), "unite");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
       // this.setTooltip(Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP)
     }
};
Blockly.Blocks["inout_pulsein"]={init:function(){
        this.setColour("#5B99A5");
        this.appendDummyInput().appendField(Blockly.Msg.ARDUINO_PULSEIN).appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN_0_1), "STAT");
        this.appendValueInput("PIN").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.pin);
        this.setOutput(true, "Number");
    this.setInputsInline(true);
  //this.setTooltip(Blockly.Msg.tempo_tooltip);
  this.setHelpUrl(Blockly.Msg.HELPURL_014);
  }
};
Blockly.Blocks["millis_start"]={init:function(){
  this.appendDummyInput().appendField(Blockly.Msg.millis_start).appendField(new Blockly.FieldDropdown(Blockly.Msg.times), "unite");
    this.setHelpUrl(Blockly.Msg.HELPURL);
    this.setColour("#5B99A5");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.millis_start_tooltip)}
};
/* bluetooth  */
Blockly.Blocks["bluetooth_init"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#0060aa");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(new Blockly.FieldImage('media/bt.png', 48, 48, "*"))
      .appendField("Bluetooth");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.vitesse).appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
    this.appendValueInput("PIN1").setAlign(Blockly.ALIGN_RIGHT).appendField("Rx");
    this.appendValueInput("PIN2").setAlign(Blockly.ALIGN_RIGHT).appendField("Tx");
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.bluetooth_init_tooltip)}
};
Blockly.Blocks["bluetooth_a"]={init:function(){
        this.appendValueInput("data_s").setCheck("Number").appendField(Blockly.Msg.bluetooth2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#0060aa");
        this.setTooltip(Blockly.Msg.bluetooth2_tooltip);
        this.setHelpUrl(Blockly.Msg.bluetooth_helpurl)}
};
Blockly.Blocks["bluetooth_b"]={init:function(){
        this.appendValueInput("CASE0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.bluetooth1+" "+Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.appendStatementInput("DO0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setHelpUrl(Blockly.Msg.bluetooth_helpurl);
        this.setColour("#0060aa");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(["bluetooth_create_item", "bluetooth_default"]));
        this.setTooltip(Blockly.Msg.bluetooth1_tooltip);
        this.casebreakCount_ = 0;
        this.defaultCount_ = 0
    },
    mutationToDom: function() {
        if (!this.casebreakCount_ && !this.defaultCount_) return null;
        var container = document.createElement("mutation");
        if (this.casebreakCount_) container.setAttribute("casebreak", this.casebreakCount_);
        if (this.defaultCount_) container.setAttribute("default", 1);
        return container
    },
    domToMutation: function(xmlElement) {
        this.casebreakCount_ = parseInt(xmlElement.getAttribute("casebreak"), 10);
        this.defaultCount_ = parseInt(xmlElement.getAttribute("default"), 10);
        for (var i = 1; i <= this.casebreakCount_; i++) {
            this.appendValueInput("CASE" + i).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
            this.appendStatementInput("DO" + i).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN)
        }
        if (this.defaultCount_) this.appendStatementInput("DEFAULT").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)},
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock( "bluetooth_create_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.casebreakCount_; i++) {
            var casebreakBlock = workspace.newBlock( "bluetooth_create_item");
            casebreakBlock.initSvg();
            connection.connect(casebreakBlock.previousConnection);
            connection = casebreakBlock.nextConnection
        }
        if (this.defaultCount_) {
            var defaultBlock = workspace.newBlock( "bluetooth_default");
            defaultBlock.initSvg();
            connection.connect(defaultBlock.previousConnection)
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        if (this.defaultCount_) this.removeInput("DEFAULT");
        this.defaultCount_ = 0;
        for (var i = this.casebreakCount_; i > 0; i--) {
            this.removeInput("CASE" + i);
            this.removeInput("DO" + i)
        }
        this.casebreakCount_ = 0;
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "bluetooth_create_item":
                    this.casebreakCount_++;
                    var ifInput = this.appendValueInput("CASE" + this.casebreakCount_).setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
                    var doInput = this.appendStatementInput("DO" + this.casebreakCount_);
                    doInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                case "bluetooth_default":
                    this.defaultCount_++;
                    var defaultInput = this.appendStatementInput("DEFAULT");
                    defaultInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
                    if (clauseBlock.statementConnection_) defaultInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    },
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "bluetooth_create_item":
                    var inputIf = this.getInput("CASE" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case "bluetooth_default":
                    var inputDo = this.getInput("DEFAULT");
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    }
};
Blockly.Blocks["bluetooth_create_item"]={init:function(){
        this.setColour("#0060aa");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["bluetooth_default"]={init:function(){
        this.setColour("#0060aa");
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT);
        this.setPreviousStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["bluetooth_create_container"]={init:function(){
        this.setColour("#0060aa");
        this.appendDummyInput().appendField(Blockly.Msg.bluetooth1+" "+Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.appendStatementInput("STACK");
        this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
        this.contextMenu = false
    }
};
/*  wifi  */
Blockly.Blocks["esp8266_init"]={init:function(){
    this.setColour("#154360");
    this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendDummyInput().appendField(new Blockly.FieldImage('media/wifi.png', 48, 48, "*"))
        .appendField(Blockly.Msg.esp8266_1);
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.Msg.esp8266_10)
    .appendField(new Blockly.FieldDropdown(Blockly.Msg.esp8266_9,function(option){this.sourceBlock_.updateShape1_(option)}), "staticdynamic");
  this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(Blockly.Msg.esp8266_7,function(option){this.sourceBlock_.updateShape2_(option)}), "clientserveur");
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.esp8266_init_tooltip)},
    updateShape2_:function(option){
    var inputExists = this.getInput("V0");
    if (inputExists) {
      this.removeInput("V0")
    }
    if (option=="serveur"){
        this.appendValueInput("V0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_8)
    }
    },
    mutationToDom:function(){
        var container = document.createElement("mutation");
        container.setAttribute("clientserveur", this.getFieldValue("clientserveur"));
        container.setAttribute("staticdynamic", this.getFieldValue("staticdynamic"))
        return container
    },
    domToMutation:function(xmlElement){
        this.updateShape2_(xmlElement.getAttribute("clientserveur"));
        this.updateShape1_(xmlElement.getAttribute("staticdynamic"))
    },
  onchange:function(){
    if (this.getInput("D0")) this.setFieldValue(this.getFieldValue("IPa")+"."+this.getFieldValue("IPb")+"."+this.getFieldValue("IPc")+".", 'adr')
  },
    updateShape1_:function(option){
    var inputExists = this.getInput("D0");
    if (inputExists) {
      this.removeInput("D0");
      this.removeInput("D1");
      this.removeInput("D2")
    }
    if (option=="static"){
        this.appendDummyInput("D0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_4)
        .appendField(new Blockly.FieldTextInput("192"),"IPa").appendField(".")
        .appendField(new Blockly.FieldTextInput("168"),"IPb").appendField(".")
        .appendField(new Blockly.FieldTextInput("1"),"IPc").appendField(".")
        .appendField(new Blockly.FieldTextInput("77"),"IPd");
      this.appendDummyInput("D1").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_6)
        .appendField(new Blockly.FieldTextInput("255"),"MASKa").appendField(".")
        .appendField(new Blockly.FieldTextInput("255"),"MASKb").appendField(".")
        .appendField(new Blockly.FieldTextInput("255"),"MASKc").appendField(".")
        .appendField(new Blockly.FieldTextInput("0"),"MASKd");
      this.appendDummyInput("D2").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_5)
        .appendField(this.getFieldValue("IPa")+"."+this.getFieldValue("IPb")+"."+this.getFieldValue("IPc")+".","adr")
        .appendField(new Blockly.FieldTextInput("1"),"GATEWAY");
    }
    }
};
Blockly.Blocks["esp8266_send"]={init:function(){
    this.setColour("#154360");
    this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendDummyInput().appendField(Blockly.Msg.esp8266_send_html);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.esp8266_send_html_tooltip)}
};
Blockly.Blocks["esp8266_start"]={init:function(){
    this.setColour("#154360");
    this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendDummyInput().appendField(Blockly.Msg.esp8266_start);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.esp8266_start_tooltip)}
};
Blockly.Blocks["esp8266_html"]={init:function(){
    this.setColour("#154360");
    this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendDummyInput().appendField("HTML :").appendField(new Blockly.FieldTextInput("my page"),"HEAD");
  this.appendStatementInput("BODY");
    this.setTooltip(Blockly.Msg.esp8266_html_tooltip)}
};
Blockly.Blocks["esp8266_wait_server"]={init:function(){
    this.setColour("#154360");
    this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendDummyInput().appendField("wait for a client request");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.esp8266_init_tooltip)}
};
Blockly.Blocks["esp8266_wait_client"]={init:function(){
    this.setColour("#154360");
    this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendValueInput("host").appendField("wait for a response from the server");
    this.appendValueInput("port").setAlign(Blockly.ALIGN_RIGHT).appendField("port");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.esp8266_init_tooltip)}
};
Blockly.Blocks["esp8266_request_find"]={
  init:function(){
        this.appendValueInput("CASE0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.esp8266_request);
        this.appendStatementInput("DO0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setHelpUrl("");
        this.setColour("#154360");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(["esp8266_create_item"]));
        this.setTooltip(Blockly.Msg.esp8266_request_tooltip);
        this.casebreakCount_ = 0;
        this.defaultCount_ = 0
    },
    mutationToDom: function() {
        if (!this.casebreakCount_ ) return null;
        var container = document.createElement("mutation");
        if (this.casebreakCount_) container.setAttribute("casebreak", this.casebreakCount_);
        return container
    },
    domToMutation: function(xmlElement) {
        this.casebreakCount_ = parseInt(xmlElement.getAttribute("casebreak"), 10);
        for (var i = 1; i <= this.casebreakCount_; i++) {
            this.appendValueInput("CASE" + i).setAlign(Blockly.ALIGN_RIGHT).appendField("we find");
            this.appendStatementInput("DO" + i).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN)
        }
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock( "esp8266_create_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.casebreakCount_; i++) {
            var casebreakBlock = workspace.newBlock( "esp8266_create_item");
            casebreakBlock.initSvg();
            connection.connect(casebreakBlock.previousConnection);
            connection = casebreakBlock.nextConnection
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        for (var i = this.casebreakCount_; i > 0; i--) {
            this.removeInput("CASE" + i);
            this.removeInput("DO" + i)
        }
        this.casebreakCount_ = 0;
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "esp8266_create_item":
                    this.casebreakCount_++;
                    var ifInput = this.appendValueInput("CASE" + this.casebreakCount_).setAlign(Blockly.ALIGN_RIGHT).appendField("we find");
                    var doInput = this.appendStatementInput("DO" + this.casebreakCount_);
                    doInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    },
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "esp8266_create_item":
                    var inputIf = this.getInput("CASE" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    }
};
Blockly.Blocks["esp8266_create_item"]={init:function(){
    this.setColour("#154360");
    this.appendDummyInput().appendField(Blockly.Msg.esp8266_request_container);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("");
    this.contextMenu = false}
};
Blockly.Blocks["esp8266_create_container"]={init:function(){
        this.setColour("#154360");
        this.appendDummyInput().appendField(Blockly.Msg.esp8266_request);
        this.appendStatementInput("STACK");
        this.setTooltip("");
        this.contextMenu = false
    }
};
/*  stockage  */
Blockly.Blocks["eeprom_write_byte"] = {    
  init: function() {
    this.setColour(100);
    this.appendValueInput("adr")
    .setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_WRITE_BYTE);
    this.appendValueInput("val")
        .setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_DATA_BYTE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_047);
  }
};
Blockly.Blocks["eeprom_read_byte"] = {  
  init: function() {
    this.setColour(100);
    this.appendValueInput("ADDRESS")
    .setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_READ_VARIABLE);
    this.setOutput(true, Number);
  this.setInputsInline(true);
  //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_047);
  }
};


/*  stockage_R */
Blockly.Blocks["eeprom_write_byte_R"] = {    
  init: function() {
    this.setColour("#44693B");
    this.appendValueInput("adr")
    .setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_WRITE_BYTE);
    this.appendValueInput("val")
        .setCheck("Number")
        .appendField("<<<");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_047);
  }
};
Blockly.Blocks["eeprom_read_byte_R"] = {  
  init: function() {
    this.setColour("#44693B");
    this.appendValueInput("adr")
    .setCheck("Number")
        .appendField(Blockly.Msg.STORAGE_EEPROM_WRITE_BYTE);
    this.appendValueInput("val")
        .setCheck("Number")
        .appendField(">>>");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_047);
  }
};



//IR Remote
Blockly.Blocks["init_generalremotecontrol"]={init:function(){
    this.setColour("#154360");
  this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("images/genericRC.png",57,38))
    .appendField(Blockly.Msg.GENERAL_IR)
    this.appendValueInput("PIN", "Number");
       // .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN");
    
  this.setInputsInline(true);
    this.setOutput(true, "Number");
   // this.setTooltip("");
   this.setHelpUrl(Blockly.Msg.HELPURL_040);
  }
};
Blockly.Blocks["init_generalremotecontrol1"]={init:function(){
    this.setColour("#154360");
  this.appendDummyInput()     
    .appendField(Blockly.Msg.GENERAL_IR1);
  this.setInputsInline(true);
    this.setOutput(true, "Number");
   // this.setTooltip("");
   //this.setHelpUrl(Blockly.Msg.HELPURL_040);
  }
};
//IR Led - Pin 3 - Отправить код
Blockly.Blocks["Init_remotecontrolMRT"] = {init: function() {
    this.setColour("#154360");
  this.appendDummyInput()
       // .appendField(new Blockly.FieldImage("images/irreceiverMRT.png",26,38))
        .appendField(Blockly.Msg.GENERAL_IRMM)
  this.appendValueInput("PIN", "Number");
       // .appendField(new Blockly.FieldDropdown([['0','0'],['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10']]), "PIN");  
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip("");
     this.setHelpUrl(Blockly.Msg.HELPURL_041);
  }
};
Blockly.Blocks["Init_remotecontrolMRT1"] = {init: function() {
    this.setColour("#154360");
  this.appendDummyInput()
 .appendField(Blockly.Msg.GENERAL_IRMM1)
  this.appendDummyInput()
  .appendField(new Blockly.FieldTextInput("0x000000"), "TEXT") 
  .appendField(new Blockly.FieldDropdown([['NEC','0'],['Sony','1'],['RC5','2'],['RC6','3'],['JVC','4'],['SAMSUNG','5'],['Denon','6'],['LG','7']]), "PIN"); 
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip("");
    // this.setHelpUrl(Blockly.Msg.HELPURL_041);
  }
};


//r433  отправить переменную
Blockly.Blocks["catr433_sendvar"] = { init: function() {
    this.setColour("#19636E");
    this.appendDummyInput()
    .appendField("R433 Mhz - Pin");
  this.appendValueInput("PIN", "Number");
  this.appendDummyInput()
        .appendField(Blockly.Msg.RF24L01_sendvar);
  this.appendValueInput("variable", "Number");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
   this.setHelpUrl(Blockly.Msg.HELPURL_042);
  }
};
//r433  получить переменную
Blockly.Blocks["catr433_recvvar"] = { init: function() {
    this.setColour("#19636E");
    this.appendDummyInput()
    //.appendField(new Blockly.FieldImage("images/resit.png",25,25))
    .appendField("R433 Mhz - Pin");
  this.appendValueInput("PIN", "Number");
    //.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    this.appendDummyInput()
    .appendField(Blockly.Msg.RF24L01_recvvar);
  this.appendValueInput("variable", "Number");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip("");
     this.setHelpUrl(Blockly.Msg.HELPURL_043);
  //this.setHelpUrl(Blockly.Msg.catr433);
  }
};
//NRF 24l01 подключение
Blockly.Blocks["nrf24l01_init"] = { init: function() {
    this.setColour("#010506");
    this.appendDummyInput()
        .appendField(Blockly.Msg.RF24L01_init)
    .appendField(Blockly.Msg.RF24L01_init2);
  this.appendDummyInput()  
        .appendField(Blockly.Msg.RF24L01_PIN_CE)
     //   .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CE")
  this.appendValueInput("PIN_CE", "Number");
  this.appendDummyInput()  
        .appendField(Blockly.Msg.RF24L01_PIN_CS)
      //  .appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CS")
  this.appendValueInput("PIN_CS", "Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
   this.setHelpUrl(Blockly.Msg.HELPURL_044);
  }
};
Blockly.Blocks["nrf24l01_max"] = { init: function() {
    this.setColour("#010506");
    this.appendDummyInput()
        .appendField(Blockly.Msg.nrf24l1l)
        .appendField(new Blockly.FieldTextInput("100"), "can")
        .appendField(Blockly.Msg.nrf24l2l)
        .appendField(new Blockly.FieldDropdown([['250KBPS','250KBPS'],['1MBPS','1MBPS'],['2MBPS','2MBPS']]), "rate")
        .appendField(Blockly.Msg.nrf24l3l)
        .appendField(new Blockly.FieldDropdown([['MIN -18dBm','MIN'],['LOW -12dBm','LOW'],['HIGH -6dBm','HIGH'],['MAX 0dBm','MAX']]), "pal")
        .appendField(Blockly.Msg.nrf24l3l)
        .appendField(new Blockly.FieldTextInput("0x0123456789LL"), "pip");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
 //   this.setTooltip('help Vitaliy...');
  //  this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
//NRF 24l01 отправить значение переменной
Blockly.Blocks["nrf24l01_sendvar"] = { init: function() {
    this.setColour("#010506");
    this.appendDummyInput()
    .appendField(Blockly.Msg.RF24L01_init3)
  this.appendValueInput("variable", "Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip("");
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
   this.setHelpUrl(Blockly.Msg.HELPURL_045);
  }
};
//NRF 24l01 принять значение и записать в переменную
Blockly.Blocks["nrf24l01_recvvar"] = { init: function() {
    this.setColour("#010506");
    this.appendDummyInput()
    .appendField(Blockly.Msg.RF24L01_init4);
  this.appendValueInput("variable", "Number");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip("");
    //this.setHelpUrl('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-besprovodnogo-modulya-24g-nrf24l01');
  this.setHelpUrl(Blockly.Msg.HELPURL_046);
  }
};
//блок повторять 10 раз
Blockly.Blocks["base_define_for"]={
  init:function(){
        this.setColour("#308189");
        this.setHelpUrl(Blockly.Msg.HELPURL_004);
        this.appendDummyInput()
       .appendField(Blockly.Msg.FOR_004_1); 
    this.appendValueInput("variable", "Number");
    this.appendDummyInput()    
      .appendField(Blockly.Msg.FOR_004_2);
        this.appendStatementInput("DO");
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   }
};

Blockly.Blocks["base_define_while"]={
  init:function(){
        this.setColour("#308189");
       // this.setHelpUrl(Blockly.Msg.HELPURL_004);
   this.appendDummyInput()
    .appendField(Blockly.Msg.base_define_while) 
    this.appendValueInput("variable1", "Number");
	this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([['=',"=="],['≠',"!="],['<',"<"],['≤',"<="],['>',">"],['≥',">="]]), "SPEED"); 
    //.appendField(new Blockly.FieldDropdown([['0', "0"], ['1', "1"], ['2', "2"],['3', "3"],['4', "4"],['5', "5"],['6', "6"],['7', "7"],['8', "8"],['9', "9"]]), "SPEED");	
	this.appendDummyInput() 
    this.appendValueInput("variable2", "Number");

        this.appendStatementInput("DO");
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   }
};

Blockly.Blocks["base_define_while_do"]={
  init:function(){
        this.setColour("#308189");
       // this.setHelpUrl(Blockly.Msg.HELPURL_004);
	   this.appendStatementInput("DO");
   this.appendDummyInput()
    .appendField(Blockly.Msg.base_define_while) 
    this.appendValueInput("variable1", "Number");
	this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([['=',"=="],['≠',"!="],['<',"<"],['≤',"<="],['>',">"],['≥',">="]]), "SPEED"); 
    //.appendField(new Blockly.FieldDropdown([['0', "0"], ['1', "1"], ['2', "2"],['3', "3"],['4', "4"],['5', "5"],['6', "6"],['7', "7"],['8', "8"],['9', "9"]]), "SPEED");	
	this.appendDummyInput() 
    this.appendValueInput("variable2", "Number");

        
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   }
};

Blockly.Blocks["base_define_for_in"]={
  init:function(){
        this.setColour("#308189");
        //this.setHelpUrl(Blockly.Msg.HELPURL_004);
   this.appendDummyInput()
    .appendField(Blockly.Msg.FOR_in_1) 
    this.appendValueInput("variable1", "Number");
	this.appendDummyInput()
	.appendField(Blockly.Msg.FOR_in_2) 
    this.appendValueInput("variable2", "Number");
	this.appendDummyInput()
	.appendField(Blockly.Msg.FOR_in_3)
    this.appendValueInput("variable3", "Number");
	this.appendDummyInput()
	.appendField(Blockly.Msg.FOR_in_4) 
    this.appendValueInput("variable4", "Number");
    
        this.appendStatementInput("DO");
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   }
};
Blockly.Blocks["base_define_for_ino"]={
  init:function(){
        this.setColour("#308189");
        //this.setHelpUrl(Blockly.Msg.HELPURL_004);
   this.appendDummyInput()
    .appendField(Blockly.Msg.FOR_in_1) 
    this.appendValueInput("variable1", "Number");
	this.appendDummyInput()
	.appendField(Blockly.Msg.FOR_in_2) 
    this.appendValueInput("variable2", "Number");
	this.appendDummyInput()
	.appendField(Blockly.Msg.FOR_in_3)
    this.appendValueInput("variable3", "Number");
	this.appendDummyInput()
	.appendField(Blockly.Msg.FOR_in_5) 
    this.appendValueInput("variable4", "Number");
    
        this.appendStatementInput("DO");
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   }
};
//квадратный корень
Blockly.Blocks["math_single"] = {

  init: function() {
    var OPERATORS =
        [[Blockly.Msg.MATH_SINGLE_OP_ROOT, "ROOT"],
         [Blockly.Msg.MATH_SINGLE_OP_ROOT_N, "NEG"],
     [Blockly.Msg.MATH_SINGLE_OP_ROOT_SIN, "SIN"],
     [Blockly.Msg.MATH_SINGLE_OP_ROOT_COS, "COS"],
         [Blockly.Msg.MATH_SINGLE_OP_ROOT_TAN, "TAN"]];
   this.setHelpUrl(Blockly.Msg.HELPURL_010);
    this.setColour("#5B67A5");
    this.setOutput(true, "Number");
    this.appendValueInput("NUM")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    //this.setTooltip("");
  }
};
Blockly.Blocks["math_single_int"] = {

  init: function() {
   this.appendDummyInput()
        .appendField(Blockly.Msg.math_single_int);
  this.appendValueInput("PIN", "Number");
      this.appendDummyInput()
    .appendField(Blockly.Msg.math_single_int2)
     .appendField(new Blockly.FieldDropdown([["byte", "byte"],["int", "int"],["float", "float"]]),"dim");
 
   //this.setHelpUrl(Blockly.Msg.HELPURL_010);
    this.setColour("#5B67A5");
    this.setOutput(true, "Number");
 
    var thisBlock = this;
	 this.setInputsInline(true);
 
    //this.setTooltip("");
  }
};
 
 Blockly.Blocks["math_single_int_text"] = {

  init: function() {
   this.appendDummyInput()
        .appendField(Blockly.Msg.math_single_int);
  this.appendValueInput("PIN", "Number");
      this.appendDummyInput()
    .appendField(Blockly.Msg.math_single_int2)
     .appendField(new Blockly.FieldDropdown([["String", "String"],["char", "char"]]),"dim");
 
   //this.setHelpUrl(Blockly.Msg.HELPURL_010);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setOutput(true, "Number");
 
    var thisBlock = this;
	 this.setInputsInline(true);
 
    //this.setTooltip("");
  }
};

 Blockly.Blocks["math_single_pi"] = {

  init: function() {
      this.appendDummyInput()
     .appendField(new Blockly.FieldDropdown([["𝝿", "1"],["e", "2"],["φ", "3"],["sqrt(2)", "4"],["sqrt(0.5)", "5"],["∞", "6"]]),"dim");
   //this.setHelpUrl(Blockly.Msg.HELPURL_010);
    this.setColour("#5B67A5");
    this.setOutput(true, "Number");
    var thisBlock = this;
	 this.setInputsInline(true);
    //this.setTooltip("");
  }
};
 
Blockly.Blocks["math_single_int_pi"] = {

  init: function() {
   this.appendDummyInput()
        .appendField(Blockly.Msg.math_single_int_pi);
  this.appendValueInput("PIN", "Number");
      this.appendDummyInput()
    .appendField(Blockly.Msg.math_single_int_pi2)
     .appendField(new Blockly.FieldDropdown([[Blockly.Msg.math_single_int_pi3, "1"],[Blockly.Msg.math_single_int_pi4, "2"],[Blockly.Msg.math_single_int_pi5, "3"],[Blockly.Msg.math_single_int_pi6, "4"],[Blockly.Msg.math_single_int_pi7, "5"]]),"dim");
 
   //this.setHelpUrl(Blockly.Msg.HELPURL_010);
    this.setColour("#5B67A5");
    this.setOutput(true, "Number");
 
    var thisBlock = this;
	 this.setInputsInline(true);
 
    //this.setTooltip("");
  }
}; 
 Blockly.Blocks["math_single_int_pi1"] = {

  init: function() {
   this.appendDummyInput()
        .appendField(Blockly.Msg.math_single_int_pi8);
  this.appendValueInput("PIN", "Number");
   this.appendDummyInput()
        .appendField(Blockly.Msg.math_single_int_pi9);
  this.appendValueInput("PIN1", "Number");
   //this.setHelpUrl(Blockly.Msg.HELPURL_010);
    this.setColour("#5B67A5");
    this.setOutput(true, "Number");
 
    var thisBlock = this;
	 this.setInputsInline(true);
 
    //this.setTooltip("");
  }
}; 

  Blockly.Blocks["math_single_int_pi2"] = {

  init: function() {
   this.appendDummyInput()
        .appendField(Blockly.Msg.math_single_int_pi10);
  this.appendValueInput("PIN", "Number");
   this.appendDummyInput()
        .appendField(Blockly.Msg.math_single_int_pi11);
  this.appendValueInput("PIN1", "Number");
   //this.setHelpUrl(Blockly.Msg.HELPURL_010);
    this.setColour("#5B67A5");
    this.setOutput(true, "Number");
 
    var thisBlock = this;
	 this.setInputsInline(true);
 
    //this.setTooltip("");
  }
}; 

  Blockly.Blocks["math_single_int_pi3"] = {

  init: function() {
   this.appendDummyInput()
        .appendField(Blockly.Msg.math_single_int_pi12);
  this.appendValueInput("PIN", "Number");
   this.appendDummyInput()
        .appendField(Blockly.Msg.math_single_int_pi13);
  this.appendValueInput("PIN1", "Number");
     this.appendDummyInput()
        .appendField(Blockly.Msg.math_single_int_pi14);
  this.appendValueInput("PIN2", "Number");
   //this.setHelpUrl(Blockly.Msg.HELPURL_010);
    this.setColour("#5B67A5");
    this.setOutput(true, "Number");
 
    var thisBlock = this;
	 this.setInputsInline(true);
 
    //this.setTooltip("");
  }
};



//модуль времени 1302
Blockly.Blocks["Init_RTC_ds1302"] = {
  init: function() {
    this.setColour("#166E80");
  this.appendDummyInput()
        .appendField(Blockly.Msg.RTCDS1302_RST);
  this.appendValueInput("PIN_RST", "Number");
    //.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_RST")
  this.appendDummyInput()
    .appendField(Blockly.Msg.RTCDS1302_DAT);
  this.appendValueInput("PIN_DAT", "Number");
    //.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_DAT")
  this.appendDummyInput()
    .appendField(Blockly.Msg.RTCDS1302_CLK);
  this.appendValueInput("PIN_CLK", "Number");
    //.appendField(new Blockly.FieldDropdown(profile.default.digital_input), "PIN_CLK")
     this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_015);
  }
};
//модуль времени 1302 запись значений в модуль
Blockly.Blocks["DateTime_RTC_ds1302"] = {
  init: function() {
    this.setColour("#166E80");
  this.appendDummyInput()
    .appendField(Blockly.Msg.RTCDS1302_RTC);
    this.appendValueInput("DS1302_DAY", "Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS1302_MONTH);
  this.appendValueInput("DS1302_MONTH", "Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS1302_YEAR);    
  this.appendValueInput("DS1302_YEAR", "Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS1302_HOUR);    
  this.appendValueInput("DS1302_HOUR", "Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS1302_MINUTE);    
  this.appendValueInput("DS1302_MINUTE", "Number");
  this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS1302_SECOND);    
  this.appendValueInput("DS1302_SECOND", "Number");  
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_016);
  }
};
//модуль времени 1302 чтение даты и времени
Blockly.Blocks["values_ds1302"] = {
  init: function() {
    this.setColour("#166E80");
    this.appendDummyInput()
    .appendField(Blockly.Msg.RTCDS1302_Name2)
    //.appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]]),"dim");
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS1302_YEAR, "0"], [Blockly.Msg.RTCDS1302_MONTH, "1"],[Blockly.Msg.RTCDS1302_DAY, "2"],[Blockly.Msg.RTCDS1302_HOUR, "3"],[Blockly.Msg.RTCDS1302_MINUTE, "4"],[Blockly.Msg.RTCDS1302_SECOND, "5"]]), "OUTPUT_VALUE");
      //.appendField(Blockly.Msg.RTCDS1302_VALUES)
    this.setOutput(true, 'Number');
  this.setInputsInline(true);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_017);
  }
};
// подключение ds3231
Blockly.Blocks["Init_RTC_ds3231w"] = {
  init: function() {
   this.setColour("#358E8E");
  this.appendDummyInput()
    .appendField(Blockly.Msg.RTCDS3231_NAME)
     this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_018);
  }
};
Blockly.Blocks["Init_RTC_ds3231"] = {
  init: function() {
   this.setColour("#358E8E");
  this.appendDummyInput()
    .appendField(Blockly.Msg.RTCDS3231_NAME)
     this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_018);
  }
};
// Запись ds3231
Blockly.Blocks["DateTime_RTC_ds3231w"] = {
  init: function() {
   this.setColour("#358E8E");
  this.appendDummyInput()
    .appendField(Blockly.Msg.RTCDS3231_RTC);
    this.appendValueInput("DS3231_DAY", "Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS3231_MONTH);
  this.appendValueInput("DS3231_MONTH", "Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS3231_YEAR);    
  this.appendValueInput("DS3231_YEAR", "Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS3231_HOUR);    
  this.appendValueInput("DS3231_HOUR", "Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS3231_MINUTE);    
  this.appendValueInput("DS3231_MINUTE", "Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS3231_SECOND);    
  this.appendValueInput("DS3231_SECOND", "Number");  
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_019);
  }
};
Blockly.Blocks["DateTime_RTC_ds3231"] = {
  init: function() {
   this.setColour("#358E8E");
  this.appendDummyInput()
    .appendField(Blockly.Msg.RTCDS3231_RTC);
    this.appendValueInput("DS3231_DAY", "Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS3231_MONTH);
  this.appendValueInput("DS3231_MONTH", "Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS3231_YEAR);    
  this.appendValueInput("DS3231_YEAR", "Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS3231_HOUR);    
  this.appendValueInput("DS3231_HOUR", "Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS3231_MINUTE);    
  this.appendValueInput("DS3231_MINUTE", "Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RTCDS3231_SECOND);    
  this.appendValueInput("DS3231_SECOND", "Number");  
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_019);
  }
};
// Чтение ds3231
Blockly.Blocks['order_read_rtc_ds3231w'] = {
 init: function() {
    this.setColour("#358E8E");
    this.appendDummyInput()
       .appendField(Blockly.Msg.RTCDS3231_NAME2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_020);
  }
};
Blockly.Blocks['order_read_rtc_ds3231'] = {
 init: function() {
    this.setColour("#358E8E");
    this.appendDummyInput()
       .appendField(Blockly.Msg.RTCDS3231_NAME2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_020);
  }
};
Blockly.Blocks["values_ds3231w"] = {
  init: function() {
    this.setColour("#358E8E");
    this.appendDummyInput()
    .appendField(Blockly.Msg.RTCDS3231_NAME3)
    //.appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS3231_YEAR, "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]]),"dim");
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS3231_YEAR, "0"],[Blockly.Msg.RTCDS3231_MONTH, "1"],[Blockly.Msg.RTCDS3231_DAY, "2"],[Blockly.Msg.RTCDS3231_HOUR, "3"],[Blockly.Msg.RTCDS3231_MINUTE, "4"],[Blockly.Msg.RTCDS3231_SECOND, "5"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
  this.setInputsInline(true);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_020);
  }
};
Blockly.Blocks["values_ds3231"] = {
  init: function() {
    this.setColour("#358E8E");
    this.appendDummyInput()
    .appendField(Blockly.Msg.RTCDS3231_NAME3)
    //.appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS3231_YEAR, "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]]),"dim");
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RTCDS3231_YEAR, "0"],[Blockly.Msg.RTCDS3231_MONTH, "1"],[Blockly.Msg.RTCDS3231_DAY, "2"],[Blockly.Msg.RTCDS3231_HOUR, "3"],[Blockly.Msg.RTCDS3231_MINUTE, "4"],[Blockly.Msg.RTCDS3231_SECOND, "5"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
  this.setInputsInline(true);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_020);
  }
};
//сброс платы ресет
Blockly.Blocks['base_code_reset'] = {
 init: function() {
    this.setColour("#A5995B");
    this.appendDummyInput()
       .appendField(Blockly.Msg.GENERAL_RESET);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_025);
  }
};
//сд карта подключение
Blockly.Blocks["sd_init"] = {
   init: function() {
    this.setColour("#446965");
    this.appendDummyInput()
        .appendField(Blockly.Msg.SD_init)
    .appendField(Blockly.Msg.SD_init2);
  this.appendDummyInput()  
  this.appendValueInput("PIN_CS", "Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_048);
  }
};
//сд карта запись текста
Blockly.Blocks["sd_printfile"] = {
  init: function() {
    this.setColour("#446965");
    this.appendDummyInput()
    .appendField(Blockly.Msg.SD_name);
  this.appendValueInput("texttoprint")
        .setCheck('String')  
  this.appendValueInput("filename")
    .appendField(Blockly.Msg.SD_infile)
        .setCheck('String')
  this.appendDummyInput()
      .appendField(Blockly.Msg.SD_linefeed)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_049);
  }
};
Blockly.Blocks["sd_printfile1"] = {
  init: function() {
    this.setColour("#446965");
    this.appendDummyInput()
    .appendField(Blockly.Msg.SD_name1);
  this.appendValueInput("filename")
        .setCheck('String'); 
   this.setOutput(true);
    this.setInputsInline(true);
   //  this.setPreviousStatement(true, null);
   //  this.setNextStatement(true, null);
  //  this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_049);
  }
};
Blockly.Blocks["sd_printfile2"] = {
  init: function() {
    this.setColour("#446965");
    this.appendDummyInput()
    .appendField(Blockly.Msg.SD_name2);
  this.appendValueInput("filename")
        .setCheck('String'); 
   //this.setOutput(true);
    this.setInputsInline(true);
      this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
  //  this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_049);
  }
};
Blockly.Blocks["sd_printfile3"] = {
  init: function() {
    this.setColour("#446965");
    this.appendDummyInput()
    .appendField(Blockly.Msg.SD_name3);
  this.appendValueInput("filename")
        .setCheck('String'); 
   //this.setOutput(true);
     this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  //  this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_049);
  }
};
Blockly.Blocks["sd_printfile4"] = {
  init: function() {
    this.setColour("#446965");
    this.appendDummyInput()
    .appendField(Blockly.Msg.SD_name4);
  this.appendValueInput("filename")
        .setCheck('String'); 
  // this.setOutput(true);
    this.setInputsInline(true);
     this.setPreviousStatement(true, null);
       this.setNextStatement(true, null);
  //  this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_049);
  }
};
//сервомотор 
  Blockly.Blocks["stepservo_continuos_move"] = {
  init: function() {
    this.setColour(80);
  this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.stepPIN)
        this.appendValueInput("PIN", "Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.stepROTSERVO_Direction)
    this.appendValueInput("PIN_GR", "Number");
    //.appendField(new Blockly.FieldDropdown([['250', '250'],['200', '200'],['150', '150'],['100', '100'],['90', '90'],['80', '80'],['70', '70'],['60', '60'],['50', '50'],['40', '40'],['30', '30'],['29', '29'],['28', '28'],['27', '27'],['26', '26'],['25', '25'],['24', '24'],['23', '23'],['22', '22'],['21', '21'],['20', '20'],['19', '19'],['18', '18'],['17', '17'],['16', '16'],['15', '15'],['14', '14'],['13', '13'],['12', '12'],['11', '11'],['10', '10'],['9', '9'],['8', '8'],['7', '7'],['6', '6'],['5', '5'],['4', '4'],['3', '3'],['2', '2'],['1', '1']]), "SERVOMOTOR_DIR");
    this.appendValueInput("SpeedServo")
        .setCheck('Number')
    .appendField(Blockly.Msg.stepROTSERVO_Speed);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_050);
  }
};
//ручное сервомотор 
 Blockly.Blocks["stepservo_continuos_move_ru"] = {
   init: function() {
    this.setColour(80);
  this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.stepPIN)
        this.appendValueInput("PIN", "Number");
  this.appendDummyInput()
    this.appendValueInput("SpeedServo")
        .setCheck('Number')
    .appendField(Blockly.Msg.stepROTSERVO_Speed);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
     this.setTooltip('');
   this.setHelpUrl(Blockly.Msg.HELPURL_093);
  }
};  
//сервомотор отключение
Blockly.Blocks["stepcatServoRot_stop"] = {
  init: function() {
    this.setColour(80);
  this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.stepROTSERVO_Servo)
    this.appendValueInput("PIN", "Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl(Blockly.Msg.HELPURL_050);
  }
};
//base code i2s 
Blockly.Blocks["base_code_i2s"] = {
 init: function() {
    this.setColour("#A5995B");
    this.appendDummyInput()
       .appendField(Blockly.Msg.i2s);
    this.setInputsInline(true);
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_051);
  }
};
//драйвер сервомотор
Blockly.Blocks["servo_movebnn"] = {
  init: function() {
    this.setColour(80);
  this.setInputsInline(true);
    this.appendDummyInput()
    .appendField(Blockly.Msg.SERVO_Servo)
        .appendField(new Blockly.FieldTextInput("0x40"), "NAME")
        .appendField(Blockly.Msg.PIN)
    .appendField(new Blockly.FieldDropdown([['0','0'],['1','1'],['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12'],['13','13'],['14','14'],['15','15']]), "PIN");
    this.appendDummyInput()
    .appendField(Blockly.Msg.Degree)
    this.appendValueInput("DEGREE", 'Number')
        .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
  this.setHelpUrl(Blockly.Msg.HELPURL_052);
  }
};
//драйвер цифро-аналоговый l298p
Blockly.Blocks["motor_autoR"] = {
  init: function() {
    this.setColour(80);
  this.appendDummyInput()
     .appendField(Blockly.Msg.l9110MOTOR_D)
   .appendField(new Blockly.FieldDropdown([['MA', '1'],['MB', '0']]), "MOTOR");
  this.appendDummyInput()
    .appendField(Blockly.Msg.l9110MOTOR)
  this.appendValueInput("PIN_RM1", "Number");   
  this.appendDummyInput()
    .appendField(Blockly.Msg.l9110MOTORn)
  this.appendValueInput("PIN_RM2", "Number");
    this.appendDummyInput()
    .appendField(Blockly.Msg.l9110MOTOR_Direction)
   .appendField(new Blockly.FieldDropdown([[Blockly.Msg.Motor_Forward, '1'],[Blockly.Msg.Motor_Backward, '0']]), "MOTOR_DIR");
   this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.l9110MOTOR_speed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_053);
  }
};
//аналоговый мотор
Blockly.Blocks["motor_autoL"] = {
  init: function() {
    this.setColour(80);
  this.appendDummyInput()
     .appendField(Blockly.Msg.l9110MOTOR_L)
   .appendField(new Blockly.FieldDropdown([['MA', '1'],['MB', '0']]), "MOTOR");
  this.appendDummyInput()
    .appendField(Blockly.Msg.l9110MOTOR_Lm)
  this.appendValueInput("PIN_RM1", "Number");   
  this.appendDummyInput()
    .appendField(Blockly.Msg.l9110MOTORn_L)
  this.appendValueInput("PIN_RM2", "Number");
    this.appendDummyInput()
    .appendField(Blockly.Msg.l9110MOTOR_Direction)
   .appendField(new Blockly.FieldDropdown([[Blockly.Msg.Motor_Forward, '1'],[Blockly.Msg.Motor_Backward, '0']]), "MOTOR_DIR");
   this.appendValueInput("CONTENT", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.l9110MOTOR_speed)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_054);
  }
};
//stepper
Blockly.Blocks["motor_auto_stepper"] = { 
  init: function() {
    this.setColour(80);
  this.appendDummyInput()
    .appendField(Blockly.Msg.STEEPER_name)
      .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "STEEPER_NUMBER");
  this.appendValueInput("STEP_RPM", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.STEEPER_steprev);
    this.appendValueInput("PIN_STEEPER1", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.STEEPER_pin1);
    this.appendValueInput("PIN_STEEPER2", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.STEEPER_pin2); 
    this.appendValueInput("PIN_STEEPER3", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.STEEPER_pin3);
    this.appendValueInput("PIN_STEEPER4", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.STEEPER_pin4);
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 // this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_055);
  }
};
Blockly.Blocks["motor_auto_stepper_box"] = {
   init: function() {
    this.setColour(80);
  this.appendDummyInput()
  .appendField(Blockly.Msg.STEEPER_name_d1)
  .appendField(new Blockly.FieldDropdown([['1','1'],['2','2'],['3','3'],['4','4']]), "STEEPER_NUMBER");
  this.appendValueInput("STEPPER_STEP_h", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.STEEPER_name_d2);
  this.appendValueInput("STEPPER_STEP_j", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.STEEPER_name_d3);
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_055);
  }
};

Blockly.Blocks["motor_step_dir"] = {
   init: function() {
    this.setColour(80);
	
  this.appendDummyInput() .appendField('A4988 - DIR');
  this.appendValueInput("PIN_STEEPER1", 'Number') .setCheck('Number');
  this.appendDummyInput()  .appendField('STEP');
  this.appendValueInput("PIN_STEEPER2", 'Number')  .setCheck('Number');
  this.appendDummyInput()	.appendField(Blockly.Msg.STEEPER_name_d2);
  this.appendValueInput("STEPPER_STEP_h", 'Number')  .setCheck('Number');
  this.appendDummyInput()  .appendField(Blockly.Msg.STEEPER_name_d3);
  this.appendValueInput("STEPPER_STEP_j", 'Number') .setCheck('Number');
 
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('');
   this.setHelpUrl(Blockly.Msg.HELPURL_094);
  }
};


Blockly.Blocks["motor_auto_stepper_stop"] = { 
  init: function() {
    this.setColour(80);
    this.appendDummyInput()
       .appendField(Blockly.Msg.STEEPER_stop);
    this.appendValueInput("PIN_STEEPER1", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.STEEPER_pin1);
    this.appendValueInput("PIN_STEEPER2", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.STEEPER_pin2); 
    this.appendValueInput("PIN_STEEPER3", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.STEEPER_pin3);
    this.appendValueInput("PIN_STEEPER4", 'Number')
        .setCheck('Number')
    .appendField(Blockly.Msg.STEEPER_pin4);
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 // this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_055);
  }
};
//цифровой модуль
Blockly.Blocks["digital_readbiR"]={init:function(){
        this.setColour("#6D7497");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT_N)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.AR_IN_DIG1,'1'],[Blockly.Msg.AR_IN_DIG2,'2'],[Blockly.Msg.AR_IN_DIG3,'3'],[Blockly.Msg.AR_IN_DIG4,'4'],[Blockly.Msg.AR_IN_DIG5,'5'],[Blockly.Msg.AR_IN_DIG6,'6'],[Blockly.Msg.AR_IN_DIG7,'7'],[Blockly.Msg.AR_IN_DIG8,'8'],[Blockly.Msg.AR_IN_DIG9,'9'],[Blockly.Msg.AR_IN_DIG10,'10'],[Blockly.Msg.AR_IN_DIG11,'11'],[Blockly.Msg.AR_IN_DIG12,'12'],[Blockly.Msg.AR_IN_DIG13,'13'],[Blockly.Msg.AR_IN_DIG14,'14']]), "NUMBER");
        this.appendValueInput("PIN", "Number")
      .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT_P);
    
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        //this.setTooltip(Blockly.Msg.in_pullup_tooltip)
    this.setHelpUrl(Blockly.Msg.HELPURL_057);
    }
};
Blockly.Blocks["inout_analog_readR"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#6D7497");
        this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT_A)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.AR_IN_DIGA1,'1'],[Blockly.Msg.AR_IN_DIGA2,'2'],[Blockly.Msg.AR_IN_DIGA3,'3'],[Blockly.Msg.AR_IN_DIGA4,'4'],[Blockly.Msg.AR_IN_DIGA5,'5'],[Blockly.Msg.AR_IN_DIGA6,'6'],[Blockly.Msg.AR_IN_DIGA7,'7'],[Blockly.Msg.AR_IN_DIGA8,'8'],[Blockly.Msg.AR_IN_DIGA9,'9'],[Blockly.Msg.AR_IN_DIGA10,'10'],[Blockly.Msg.AR_IN_DIGA11,'11'],[Blockly.Msg.AR_IN_DIGA12,'12'],[Blockly.Msg.AR_IN_DIGA13,'13'],[Blockly.Msg.AR_IN_DIGA14,'14']]), "NUMBER");
        
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT_P)
      .appendField(new Blockly.FieldDropdown(profile[card].dropdownAnalog), "broche");
    
    this.setInputsInline(true);
    this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)
    this.setHelpUrl(Blockly.Msg.HELPURL_058);
    }
};

Blockly.Blocks["ultrasonic_ranger_sensor"] = {
  init: function() {
     this.setColour("#6D7497");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ultrasonic_ranger)
        .appendField(Blockly.Msg.TRIG);
  this.appendValueInput("PIN_TRIG", 'Number')
        .setCheck('Number');
  this.appendDummyInput()
        .appendField(Blockly.Msg.Echo);
  this.appendValueInput("PIN_ECHO", 'Number')
        .setCheck('Number');
    this.setOutput(true, 'Number');
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_059);
  }
};

Blockly.Blocks["dht_sensor"] = {
  init: function() {
     this.setColour("#6D7497");
    this.appendDummyInput()
      .appendField(Blockly.Msg.DHT_NAME)
        .appendField(Blockly.Msg.PIN);
  this.appendValueInput("PIN_DHT", 'Number')
        .setCheck('Number');
  this.appendDummyInput()
    .appendField(Blockly.Msg.DHT_Type)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.DHT_Type11, "0"], [Blockly.Msg.DHT_Type21, "1"],[Blockly.Msg.DHT_Type22, "2"]]), "OUTPUT_TYPE")
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.DHT_Temp, "0"], [Blockly.Msg.DHT_Humi, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
   // this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_060);
  }
};

Blockly.Blocks['RotaryEncoder_Read'] = {
  init: function() {
     this.setColour("#6D7497");
     this.appendDummyInput()
    .appendField(Blockly.Msg.RE_Interrupt)
  this.appendValueInput("PINDT", 'Number')
        .setCheck('Number');
  this.appendDummyInput()
      .appendField(Blockly.Msg.RE_Interruptg);
  this.appendValueInput("PINCLK", 'Number')
        .setCheck('Number');    
  this.setOutput(true, 'Number');
  this.setInputsInline(true);
   // this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.HELPURL_061);
  }
};

Blockly.Blocks["bmpInit_Compass_HMC5883"] = {
  init: function() {
    this.setColour("#6D7497");
  this.appendDummyInput()
    .appendField(Blockly.Msg.bmpHMC5883);
  this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x77"), "NAME");
  this.appendDummyInput()
    .appendField(Blockly.Msg.bmpHMC5883_2);
  this.appendValueInput("PIN", 'Number')
        .setCheck('Number');
  this.appendDummyInput()
    .appendField(Blockly.Msg.bmpHMC5883_3);
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_062);
  }
};

Blockly.Blocks["Init_Temp_ds18b20"] = {
  init: function() {
    this.setColour("#6D7497");
  this.appendDummyInput()
    .appendField(Blockly.Msg.TempDS18B20);  
  this.appendValueInput("PIN", 'Number')
        .setCheck('Number');
  this.appendDummyInput()
    .appendField(Blockly.Msg.TempDS18B20N);  
  this.appendValueInput("PINR", 'Number')
        .setCheck('Number');
  this.appendDummyInput()
    .appendField(Blockly.Msg.TempDS18B20B);  
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_063);
  }
};

Blockly.Blocks["Init_Accel_ADXL345"] = {
  init: function() {
    this.setColour("#6D7497");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ADXL345);
  this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x53"), "NAME");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ADXL345D);
  this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["X", "x"], ["Y", "y"], ["Z", "z"]]), "OUTPUT_VALUE");  
  this.appendDummyInput()
    .appendField(Blockly.Msg.ADXL345S);
  this.appendValueInput("PIN", 'Number')
        .setCheck('Number');  
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_064);
  }
};

Blockly.Blocks["Init_Compass_HMC5883"] = {
  init: function() {
    this.setColour("#6D7497");
  this.appendDummyInput()
    .appendField(Blockly.Msg.HMC5883);
  this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x0D"), "NAME");
  this.appendDummyInput()
    .appendField(Blockly.Msg.HMC5883D);
  this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["º", "headingDegrees"], ["X", "mag.XAxis"], ["Y", "mag.YAxis"], ["Z", "mag.ZAxis"]]), "OUTPUT_VALUE");  
  this.appendDummyInput()
    .appendField(Blockly.Msg.HMC5883S);
  this.appendValueInput("PIN", 'Number')
        .setCheck('Number');  
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_065);
  }
};

Blockly.Blocks["Init_MPU6050_GY"] = {
  init: function() {
    this.setColour("#6D7497");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MPU6050);
  this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x68"), "NAME");
  this.appendDummyInput()
    .appendField(Blockly.Msg.HMC5883D);
  this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([["a - x", "ax"],["a - y", "ay"],["a - z", "az"],["g - x", "gx"],["g - y", "gy"],["g - z", "gz"]]), "OUTPUT_VALUE");   
  this.appendDummyInput()
    .appendField(Blockly.Msg.HMC5883S);
  this.appendValueInput("PIN", 'Number')
        .setCheck('Number');  
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
   this.setHelpUrl(Blockly.Msg.HELPURL_095);
  }
};

Blockly.Blocks["inout_digital_writeD"]={init:function(){
        this.setColour("#484E6E");
    this.appendDummyInput()
    .appendField(Blockly.Msg.digital_writeD);
        this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.digD1, "1"], [Blockly.Msg.digD2, "2"], [Blockly.Msg.digD3, "3"], [Blockly.Msg.digD4, "4"], [Blockly.Msg.digD5, "5"]]), "OUTPUT_VALUE");  
     this.appendDummyInput()
    .appendField(Blockly.ALIGN_RIGHT_D);       
    this.appendValueInput("PIN", "Number")
    .setCheck("Number");
    this.appendDummyInput()
    .appendField(Blockly.Msg.ALIGN_RIGHT);    
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.digD7, "1"], [Blockly.Msg.digD8, "0"]]), "STAT");  
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP)
    this.setHelpUrl(Blockly.Msg.HELPURL_066);
    }
};

Blockly.Blocks["inout_analog_writeD"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#484E6E");
    this.appendDummyInput()
    .appendField(Blockly.Msg.digital_writeV);
    this.appendDummyInput()
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.digAS1, "1"], [Blockly.Msg.digAS2, "2"], [Blockly.Msg.digAS3, "3"], [Blockly.Msg.digAS4, "4"], [Blockly.Msg.digAS5, "5"]]), "OUTPUT_VALUE");  
        this.appendDummyInput()
    .appendField(Blockly.Msg.digital_writeG)
    .appendField(new Blockly.FieldDropdown(profile[card].dropdownPWM), "broche");
        this.appendValueInput("NUM", "Number")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.Msg._AT)
    .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
       // this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP)
     this.setHelpUrl(Blockly.Msg.HELPURL_067);
    }
};

Blockly.Blocks['actuator_rgbled'] = {
  init: function() {
    this.setColour("#6D7497");
    this.appendDummyInput()
        .appendField(Blockly.Msg.LedRGBName)
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.Cathode, '0'], [Blockly.Msg.Anode, '1']]), "RGB_TYPE");
    this.appendDummyInput()
        .appendField(Blockly.Msg.LedRGBpinR);    
  this.appendValueInput("PINRed", "Number")
    .setCheck("Number");
        this.appendDummyInput()
        .appendField(Blockly.Msg.LedRGBpinG);
  this.appendValueInput("PINGreen", "Number")
    .setCheck("Number");
        this.appendDummyInput()
        .appendField(Blockly.Msg.LedRGBpinB);
  this.appendValueInput("PINBlue", "Number")
    .setCheck("Number");
    

  this.appendDummyInput()
    .appendField(Blockly.Msg.LedRGBcolor)   
    .appendField(new Blockly.FieldColour('#ff0000'), 'RGBCOLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_068);
  }
};

Blockly.Blocks["actuator_rgbled595"] = {
  init: function() {
    this.setColour("#484E6E");
    this.appendDummyInput()
        .appendField("74HC595 ")
    .appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['9', '9'], ['10', '10'], ['11', '11'], ['12', '12'], ['13', '13'], ['14', '14'], ['15', '15'], ['16', '16'], ['17', '17'], ['18', '18'], ['19', '19'], ['20', '20'], ['21', '21'], ['22', '22'], ['23', '23'], ['24', '24'], ['25', '25'], ['26', '26'], ['27', '27'], ['28', '28'], ['29', '29'], ['30', '30'], ['31', '31'], ['32', '32'], ['33', '33'], ['34', '34'], ['35', '35'], ['36', '36'], ['37', '37'], ['38', '38'], ['39', '39'], ['40', '40'], ['41', '41'], ['42', '42'], ['43', '43'], ['44', '44'], ['45', '45'], ['46', '46'], ['47', '47'], ['48', '48'], ['49', '49'], ['50', '50']]), "RGB_TYPE");
  this.appendDummyInput()
    .appendField("D - Pin");
      this.appendValueInput("PINRed", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField("L - Pin");
      this.appendValueInput("PINGreen", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField("C - Pin");
    this.appendValueInput("PINBlue", "Number")
    .setCheck("Number");
  this.appendValueInput("NUM", "Number")
        .appendField(Blockly.Msg.LedPin)
        .setCheck("Number");
  this.appendDummyInput()  
    .appendField(Blockly.Msg.ONOFF)
         .appendField(new Blockly.FieldDropdown([[Blockly.Msg.digD7, "1"], [Blockly.Msg.digD8, "0"]]), "STATUS");
    
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_069);
  }
};


Blockly.Blocks["LedStrip_WS2812B_init"] = {
  init: function() {
  this.setColour("#484E6E");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_nameR);
  this.appendValueInput("PINR", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_nameD);
  this.appendValueInput("PIN", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_nameN);
  this.appendValueInput("LEDI", "Number")
    .setCheck("Number");
  this.appendDummyInput() 
        .appendField(Blockly.Msg.ledstrip_WS2812B_setPixelColor)
    .appendField(new Blockly.FieldColour('#ff0000'), 'RGBCOLOR');  
    this.appendValueInput("Pixel_number")
    .setCheck('Number')
    .appendField(Blockly.Msg.ledstrip_WS2812B_Led_Number);
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_070);
  }
};
Blockly.Blocks["LedStrip_WS2811B_init"] = {
  init: function() {
  this.setColour("#696F94");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2811B_nameR);
  this.appendValueInput("PINR", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_nameD);
  this.appendValueInput("PIN", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_nameN);
  this.appendValueInput("LEDI", "Number")
    .setCheck("Number");
  this.appendDummyInput() 
        .appendField(Blockly.Msg.ledstrip_WS2812B_setPixelColor)
    .appendField(new Blockly.FieldColour('#ff0000'), 'RGBCOLOR');  
    this.appendValueInput("Pixel_number")
    .setCheck('Number')
    .appendField(Blockly.Msg.ledstrip_WS2812B_Led_Number);
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_070);
  }
};
Blockly.Blocks["LedStrip_WS2812B_init_top"] = {
  init: function() {
  this.setColour("#484E6E");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_nameR);
  this.appendValueInput("PINR", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_nameD);
  this.appendValueInput("PIN", "Number")
    .setCheck("Number");
  this.appendDummyInput() 
        .appendField(Blockly.Msg.ledstrip_WS2812B_setPixelColor)
    .appendField(new Blockly.FieldColour('#00FF00'), 'RGBCOLOR');  
    this.appendValueInput("Pixel_number")
    .setCheck('Number')
    .appendField(Blockly.Msg.ledstrip_WS2812B_delay);
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_pro)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ledstrip_WS1,'6'],[Blockly.Msg.ledstrip_WS2,'9'],[Blockly.Msg.ledstrip_WS3,'7'],[Blockly.Msg.ledstrip_WS4,'8'],[Blockly.Msg.ledstrip_WS5,'10'],[Blockly.Msg.ledstrip_WS6,'11'],[Blockly.Msg.ledstrip_WS7,'12'],[Blockly.Msg.ledstrip_WS8,'13'],[Blockly.Msg.ledstrip_WS2812B_pro1,'0'],[Blockly.Msg.ledstrip_WS2812B_pro2,'1'],[Blockly.Msg.ledstrip_WS2812B_pro3,'2'],[Blockly.Msg.ledstrip_WS2812B_pro4,'3'],[Blockly.Msg.ledstrip_WS2812B_pro5,'4'],[Blockly.Msg.ledstrip_WS2812B_pro6,'5'],]), "RE_NUMBER");	
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_070);
  }
};
Blockly.Blocks["LedStrip_WS2811B_init_top"] = {
  init: function() {
  this.setColour("#696F94");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2811B_nameR);
  this.appendValueInput("PINR", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_nameD);
  this.appendValueInput("PIN", "Number")
    .setCheck("Number");
  this.appendDummyInput() 
        .appendField(Blockly.Msg.ledstrip_WS2812B_setPixelColor)
    .appendField(new Blockly.FieldColour('#00FF00'), 'RGBCOLOR');  
    this.appendValueInput("Pixel_number")
    .setCheck('Number')
    .appendField(Blockly.Msg.ledstrip_WS2812B_delay);
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_pro)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ledstrip_WS1,'6'],[Blockly.Msg.ledstrip_WS2,'9'],[Blockly.Msg.ledstrip_WS3,'7'],[Blockly.Msg.ledstrip_WS4,'8'],[Blockly.Msg.ledstrip_WS5,'10'],[Blockly.Msg.ledstrip_WS6,'11'],[Blockly.Msg.ledstrip_WS7,'12'],[Blockly.Msg.ledstrip_WS8,'13'],[Blockly.Msg.ledstrip_WS2812B_pro1,'0'],[Blockly.Msg.ledstrip_WS2812B_pro2,'1'],[Blockly.Msg.ledstrip_WS2812B_pro3,'2'],[Blockly.Msg.ledstrip_WS2812B_pro4,'3'],[Blockly.Msg.ledstrip_WS2812B_pro5,'4'],[Blockly.Msg.ledstrip_WS2812B_pro6,'5'],]), "RE_NUMBER");	
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_070);
  }
};
Blockly.Blocks["LedStrip_WS2812B_initRGB"] = {
  init: function() {
  this.setColour("#484E6E");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_nameR);
  this.appendValueInput("PINR", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_nameD);
  this.appendValueInput("PIN", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField("R");
  this.appendValueInput("Red", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField("G");
  this.appendValueInput("Green", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField("B");
  this.appendValueInput("Blue", "Number")
    .setCheck("Number");      
    this.appendValueInput("Pixel_number")
    .setCheck('Number')
    .appendField(Blockly.Msg.ledstrip_WS2812B_Led_Number);
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_070);
  }
};
Blockly.Blocks["LedStrip_WS2811B_initRGB"] = {
  init: function() {
  this.setColour("#696F94");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2811B_nameR);
  this.appendValueInput("PINR", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ledstrip_WS2812B_nameD);
  this.appendValueInput("PIN", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField("R");
  this.appendValueInput("Red", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField("G");
  this.appendValueInput("Green", "Number")
    .setCheck("Number");
  this.appendDummyInput()
    .appendField("B");
  this.appendValueInput("Blue", "Number")
    .setCheck("Number");      
    this.appendValueInput("Pixel_number")
    .setCheck('Number')
    .appendField(Blockly.Msg.ledstrip_WS2812B_Led_Number);
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
 // this.setHelpUrl(Blockly.Msg.HELPURL_070);
  }
};
Blockly.Blocks["ds1990_Write"] = {
  init: function() {
    this.setColour("#867B9A");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ds1990_Write)
        .appendField(new Blockly.FieldDropdown([['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12']]), "RE_NUMBER");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ds1990_Number);
  this.appendValueInput("Writecounter", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter1", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter2", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter3", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter4", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter5", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter6", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter7", "Number")
        .setCheck("Number");    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_071);
  }
};

Blockly.Blocks["ds1990_Read"] = {
  init: function() {
    this.setColour("#867B9A");
  this.appendDummyInput()
    .appendField(Blockly.Msg.ds1990_Read1)
        .appendField(new Blockly.FieldDropdown([['2','2'],['3','3'],['4','4'],['5','5'],['6','6'],['7','7'],['8','8'],['9','9'],['10','10'],['11','11'],['12','12']]), "NUMBER");    
  this.appendDummyInput()
      .appendField(Blockly.Msg.ds1990_Number);
  this.appendValueInput("Writecounter", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter1", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter2", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter3", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter4", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter5", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter6", "Number")
        .setCheck("Number");
  this.appendValueInput("Writecounter7", "Number")
        .setCheck("Number");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_071);
  }
};

 Blockly.Blocks["initread_acs712"]={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAT_ACS712)
        .appendField(new Blockly.FieldDropdown([["05B", "ACS712_05B"], ["20A", "ACS712_20A"], ["30A", "ACS712_30A"]]), "_dropdown")
        .appendField("Pin")
        .appendField(new Blockly.FieldTextInput("A0"), "pin_text");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#867B9A");
    //this.setTooltip('help Vitaliy...');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};


 Blockly.Blocks['pin_botton_pro']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.pin_botton_pro)
        .appendField(new Blockly.FieldTextInput("INPUT_PULLUP"), "idn_text")
        .appendField(Blockly.Msg.pin_botton_Mode)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.pin_botton_Latched, "0"], [Blockly.Msg.pin_botton_NLatched, "1"]]), "bb_dropdown");   
    this.appendStatementInput("bot_statement");
	this.appendStatementInput("bot_statement1");
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#867B9A");
   // this.setTooltip('№: 0 - 50, ID: 0 - 18');
  //  this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
 
Blockly.Blocks['pin_botton_pro2']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.pin_botton_pro)
        .appendField(new Blockly.FieldTextInput("INPUT"), "idn_text")
        .appendField(Blockly.Msg.pin_botton_Mode)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.pin_botton_Latched, "0"], [Blockly.Msg.pin_botton_NLatched, "1"]]), "bb_dropdown");   
    this.appendStatementInput("bot_statement");
	this.appendStatementInput("bot_statement1");
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#867B9A");
   // this.setTooltip('№: 0 - 50, ID: 0 - 18');
  //  this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks["rfid_init"] = {
   init: function() {
    this.setColour("#6D7497");
    this.appendDummyInput()
        .appendField(Blockly.Msg.RFID_init);
  this.appendDummyInput()
        .appendField(Blockly.Msg.RFID_init2);
  this.appendValueInput("PIN_SDA", "Number")
        .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.RFID_PIN_RST);
  this.appendValueInput("PIN_RST", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField(Blockly.Msg.RFID_init3);
  this.appendValueInput("PIN_KOD", "Number")
        .setCheck("Number");    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_072);
  }
};


Blockly.Blocks["Init_Keypad4x4"] = {
  //helpUrl: ('http://ardublock.ru/index.php?id=instrukciya-po-podklyucheniyu-klaviatura'),
  init: function() {
     this.setColour("#867B9A");
  this.appendDummyInput()
    .appendField(Blockly.Msg.KEYPAD_NAME);
  this.appendValueInput("PIN_C1", "Number")
        .setCheck("Number");
  this.appendValueInput("PIN_C2", "Number")
        .setCheck("Number");
  this.appendValueInput("PIN_C3", "Number")
        .setCheck("Number");
  this.appendValueInput("PIN_C4", "Number")
        .setCheck("Number");
  this.appendValueInput("PIN_R1", "Number")
        .setCheck("Number");
  this.appendValueInput("PIN_R2", "Number")
        .setCheck("Number");
  this.appendValueInput("PIN_R3", "Number")
        .setCheck("Number");
  this.appendValueInput("PIN_R4", "Number")
        .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.KEYPAD_NAME_R);
  this.appendValueInput("PIN_RKOD", "Number")
        .setCheck("Number");
     this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_073);
  }
};

Blockly.Blocks["Initread_fingerprinting"] = {
  init: function() {
     this.setColour("#867B9A");
    this.appendDummyInput()
        .appendField(Blockly.Msg.fingerprinting_read);
  this.appendDummyInput()
        .appendField(Blockly.Msg.fingerprinting_read_pin);
  this.appendDummyInput()
        .appendField(Blockly.Msg.fingerprinting_read_pinR);
    
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_074);
  }
};

Blockly.Blocks["Initread_fingerprintingD"] = {
  init: function() {
    this.setColour("#867B9A");
    this.appendDummyInput()
        .appendField(Blockly.Msg.fingerprinting_read);  
  this.appendDummyInput()
        .appendField(Blockly.Msg.fingerprinting_read_pin);  
  this.appendDummyInput()
        .appendField(Blockly.Msg.fingerprinting_readD);
  this.appendValueInput("PIN_RKOD", "Number")
        .setCheck("Number");    
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_074);
  }
};

Blockly.Blocks["tensorsensor1"] = {
  init: function() {
    this.setColour("#867B9A");
    this.appendDummyInput()
        .appendField(Blockly.Msg.tensorsensor_read);
    this.appendDummyInput()
        .appendField(Blockly.Msg.tensorsensor_read_pin);
  this.appendDummyInput()
        .appendField(Blockly.Msg.tensorsensor_read_D);
  this.appendValueInput("PIN_RKOD", "Number")
        .setCheck("Number");
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_075);
  }
};

Blockly.Blocks["actuator_tonedure"] = {
  init: function() {
  this.setColour("#82638E");
    this.appendDummyInput()
        .appendField(Blockly.Msg.TonePin);
  this.appendValueInput("PIN", "Number")
        .setCheck("Number");
    this.appendValueInput("NUM", "Number")
        .appendField(Blockly.Msg.Frequence)
        .setCheck("Number");
    this.appendValueInput("DUR", "Number")
        .appendField(Blockly.Msg.Duration)
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_076);
  }
};

Blockly.Blocks["frequency"] = {
  init: function() {
    this.setColour("#82638E");
    this.appendDummyInput()
      .appendField(Blockly.Msg.Note)
        .appendField(new Blockly.FieldDropdown([['C (do)','C'],['C# (do#)','C#'],['D (re)','D'],['D# (re#)','D#'],['E (mi)','E'],['F (fa)','F'],['F# (fa#)','F#'],['G (sol)','G'],['G# (sol#)','G#'],['A (la)','A'],['A# (la#)','A#'],['B (si)','B']]), "NOTE");
    this.appendDummyInput()
    .appendField(Blockly.Msg.Octave)
    .appendField(new Blockly.FieldDropdown([['2','2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8']]), "OCTAVE");
  this.setOutput(true, 'Number');
  this.setInputsInline(true);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_076);
  }
};

Blockly.Blocks["RadioTEA5767_init12"] = {
  init: function() {
    this.setColour("#825869");
  this.appendDummyInput()
        .appendField(Blockly.Msg.TEA5767_init)
    .appendField(Blockly.Msg.TEA5767_SetFrequency);
  this.appendValueInput("NUM", "Number")
        .setCheck("Number");
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_077);
  }
};
Blockly.Blocks["RadioTEA5767_init1"] = {
  init: function() {
    this.setColour("#825869");
  this.appendDummyInput()
        .appendField(Blockly.Msg.TEA5767_init1);
 
		this.setOutput(true, 'Number');
		this.setInputsInline(true);
  
  //this.setInputsInline(true);
   // this.setPreviousStatement(true, null);
   // this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_077);
  }
};
Blockly.Blocks["RadioTEA5767_init2"] = {
  init: function() {
    this.setColour("#825869");
  this.appendDummyInput()
        .appendField(Blockly.Msg.TEA5767_init2);   
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_077);
  }
};
Blockly.Blocks["RadioTEA5767_init3"] = {
  init: function() {
    this.setColour("#825869");
  this.appendDummyInput()
        .appendField(Blockly.Msg.TEA5767_init3);   
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_077);
  }
};
Blockly.Blocks["DFPplayerMp3_init_serial1"] = {
  init: function() {
  this.setColour("#A66E96");
  this.appendDummyInput()
        .appendField(Blockly.Msg.MP3_name);
  this.appendValueInput("NOM", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField(Blockly.Msg.MP3_vell);
  this.appendValueInput("VELL", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField(Blockly.Msg.MP3_delay);
  this.appendValueInput("DEL", "Number")
        .setCheck("Number");    
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_078);
  }
};

Blockly.Blocks["DFPplayerMp3_init_serial2"] = {
  init: function() {
  this.setColour("#A66E96");
  this.appendDummyInput()
        .appendField(Blockly.Msg.MP3_name2);
  this.appendValueInput("NOM", "Number")
        .setCheck("Number");   
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_078);
  }
};

Blockly.Blocks["DFPplayerMp3_init_serial3"] = {
  init: function() {
  this.setColour("#A66E96");
  this.appendDummyInput()
        .appendField(Blockly.Msg.MP3_name3);
  this.appendValueInput("VELL", "Number")
        .setCheck("Number");
 
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_078);
  }
};

Blockly.Blocks["DFPplayerMp3_init_serial4"] = {
  init: function() {
  this.setColour("#A66E96");
  this.appendDummyInput()
   .appendField(Blockly.Msg.MP3_name4) 
   .appendField(new Blockly.FieldDropdown([['play', 'mp3_play'],['next', 'mp3_next'],['prev', 'mp3_prev'],['pause', 'mp3_pause'],['stop', 'mp3_stop']]), "dp")  

  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_078);
  }
};

Blockly.Blocks["lcdm7m_setup"] = {
   init: function() {
  this.setColour("#B57D3E");
    this.appendDummyInput()
        .appendField(Blockly.Msg.m7_setup);
  this.appendDummyInput()
        .appendField("e");
  this.appendValueInput("PINe", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField("d");
  this.appendValueInput("PINd", "Number")
        .setCheck("Number");    
  this.appendDummyInput()
        .appendField("dp");
  this.appendValueInput("PINdp", "Number")
        .setCheck("Number");    
  this.appendDummyInput()
        .appendField("c");
  this.appendValueInput("PINc", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField("g");
  this.appendValueInput("PINg", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField("D4");
  this.appendValueInput("PIND4", "Number")
        .setCheck("Number");    
  this.appendDummyInput()
        .appendField("b");
  this.appendValueInput("PINb", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField("D3");
  this.appendValueInput("PIND3", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField("D2");
  this.appendValueInput("PIND2", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField("f");
  this.appendValueInput("PINf", "Number")
        .setCheck("Number");  
  this.appendDummyInput()
        .appendField("a");
  this.appendValueInput("PINa", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField("D1");
  this.appendValueInput("PIND1", "Number")
        .setCheck("Number");    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_079);
  }
};

Blockly.Blocks["lcdm7m_setcursor"] = {
  init: function() {
  this.setColour("#B57D3E");
    this.appendDummyInput()
        .appendField(Blockly.Msg.m7print_setup);
  this.appendValueInput("texttoprint", "Number")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_079);
  }
};

Blockly.Blocks["DisplayTM1637_init"] = {
  init: function() {
  this.setColour("#8E6230");
  this.appendDummyInput()
        .appendField(Blockly.Msg.TM1637_init);
  this.appendValueInput("PIN_CLK", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField(Blockly.Msg.TM1637_init2);    
  this.appendValueInput("PIN_DIO", "Number")
        .setCheck("Number");
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_080);
  }
};

Blockly.Blocks["DisplayTM1637_set_digit"] = {
  init: function() {
  this.setColour("#8E6230");
  this.appendDummyInput()
        .appendField(Blockly.Msg.TM1637_name);
  this.appendValueInput("SSS", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField(Blockly.Msg.TM1637_NNN);
  this.appendValueInput("NNN", "Number")
        .setCheck("Number");    
  this.appendDummyInput()
    .appendField(Blockly.Msg.M1637_dpOFF_ON)
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.digD8,'POINT_OFF'],[Blockly.Msg.digD7,'POINT_ON']]), "TM1637_POINT");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_080);
  }
};

Blockly.Blocks["DisplayTM1637_set_completenumber"] = {
  init: function() {
  this.setColour("#8E6230");
  this.appendDummyInput()
        .appendField(Blockly.Msg.TM1637_nameN);
  this.appendValueInput("NNN", "Number")
        .setCheck("Number");      
  this.appendDummyInput()
    .appendField(Blockly.Msg.M1637_dpOFF_ON)
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.digD8,'POINT_OFF'],[Blockly.Msg.digD7,'POINT_ON']]), "TM1637_POINT");  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_080);
  }
};
Blockly.Blocks["Init_MAX7219_7digit"] = {
  init: function() {
  this.setColour("#AB6E56");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_LM_NAME);
  this.appendValueInput("PIN_DAT", "Number")
        .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_LM_PIN_CS);
  this.appendValueInput("PIN_CS", "Number")
        .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_LM_PIN_CLK);
  this.appendValueInput("PIN_CLK", "Number")
        .setCheck("Number");
     this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_081);
  }
};

Blockly.Blocks["MAX7219_7digit_char"] = {
  init: function() {
  this.setColour("#AB6E56");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_7D_NAME2);
  this.appendValueInput("NNN", "Number")
        .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_7D_NAME3);
  this.appendValueInput("SSS", "Number")
        .setCheck("Number");    
  this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_7D_DP)
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.digD8, 'false'],[Blockly.Msg.digD7, 'true']]), "dp")  
     this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_081);
  }
};

Blockly.Blocks["MAX7219_7digit_char_bm"] = {
  init: function() {
  this.setColour("#AB6E56");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_7D_NAME4);
  this.appendValueInput("SSS", "Number")
        .setCheck("Number");    
  this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_7D_NAME5)
    .appendField(new Blockly.FieldDropdown([['8 - 99999999', '1'],['4 - 9999____', '2'],['4 - ____9999', '3'],['3 - 999_____', '7'],['3 - _999____', '8'],['3 - _____999', '9'],['2 - 99______', '4'],['2 - ___99___', '5'],['2 - ______99', '6']]), "dp")  
     this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_081);
  }
};

Blockly.Blocks["MAX7219_7digit_char_none"] = {
  init: function() {
  this.setColour("#AB6E56");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_7D_NAME6);
      this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_081);
  }
};

Blockly.Blocks["Init_MAX7219_ledmatrix"] = {
  init: function() {
  this.setColour("#AB995F");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_LM_NAMEB);
  this.appendValueInput("PIN_DAT", "Number")
        .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_LM_PIN_CSB);
  this.appendValueInput("PIN_CS", "Number")
        .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_LM_PIN_CLKB);
  this.appendValueInput("PIN_CLK", "Number")
        .setCheck("Number");
     this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_082);
  }
};

Blockly.Blocks["MAX7219_ledmatrix_draw_px"] = {
  init: function() {
  this.setColour("#AB995F");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_LM_PAINT_x);
  this.appendValueInput("xpx", "Number")
        .setCheck("Number");  
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_LM_PAINT_y);
  this.appendValueInput("ypx", "Number")
        .setCheck("Number");		
  this.appendDummyInput()
        .appendField(Blockly.Msg.MAX7219_LM_PAINT_px)
    .appendField(new Blockly.FieldDropdown([['ON', '1'],['OFF', '2']]), "px")  
     this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_082);
  }
};

Blockly.Blocks["MAX7219_ledmatrix_draw1"] = {
  init: function() {
  this.setColour("#B57D3E");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_LM_PAINT);
    this.appendDummyInput()
        .appendField('  ')
        .appendField(' 0')
        .appendField('    1')
        .appendField('   2')
        .appendField('    3')
        .appendField('   4')
        .appendField('    5')
        .appendField('   6')
        .appendField('    7');
    this.appendDummyInput()
        .appendField('0 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel0')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel1')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel2')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel3')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel4')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel5')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel6')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel7');
    this.appendDummyInput()
        .appendField('1 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel8')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel9')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel10')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel11')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel12')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel13')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel14')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel15');
    this.appendDummyInput()
        .appendField('2 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel16')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel17')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel18')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel19')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel20')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel21')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel22')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel23');
    this.appendDummyInput()
        .appendField('3 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel24')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel25')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel26')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel27')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel28')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel29')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel30')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel31');
    this.appendDummyInput()
        .appendField('4 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel32')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel33')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel34')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel35')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel36')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel37')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel38')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel39');
    this.appendDummyInput()
        .appendField('5 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel40')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel41')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel42')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel43')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel44')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel45')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel46')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel47');
    this.appendDummyInput()
        .appendField('6 ')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel48')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel49')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel50')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel51')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel52')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel53')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel54')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel55');
    this.appendDummyInput()
        .appendField('7 ')
    .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel56')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel57')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel58')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel59')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel60')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel61')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel62')
        .appendField(new Blockly.FieldColour('#ffffff'), 'Pixel63');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_082);
  }
};

Blockly.Blocks["MAX7219_ledmatrix_draw"] = {
  init: function() {
  this.setColour("#AB995F");
  this.appendDummyInput()
    .appendField(Blockly.Msg.MAX7219_LM_PAINT);
    this.appendDummyInput()
        .appendField('  ')
        .appendField(' 0')
        .appendField(' 1')
        .appendField(' 2')
        .appendField('  3')
        .appendField(' 4')
        .appendField('  5')
        .appendField(' 6')
        .appendField('  7');
    this.appendDummyInput()
        .appendField('0 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel7');
    this.appendDummyInput()
        .appendField('1 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel15');
    this.appendDummyInput()
        .appendField('2 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel16')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel17')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel18')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel19')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel20')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel21')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel22')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel23');
    this.appendDummyInput()
        .appendField('3 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel24')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel25')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel26')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel27')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel28')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel29')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel30')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel31');
    this.appendDummyInput()
        .appendField('4 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel32')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel33')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel34')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel35')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel36')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel37')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel38')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel39');
    this.appendDummyInput()
        .appendField('5 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel40')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel41')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel42')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel43')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel44')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel45')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel46')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel47');
    this.appendDummyInput()
        .appendField('6 ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel48')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel49')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel50')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel51')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel52')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel53')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel54')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel55');
    this.appendDummyInput()
        .appendField('7 ')
    .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel56')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel57')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel58')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel59')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel60')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel61')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel62')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pixel63');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_082);
  }
};

Blockly.Blocks["lcdm_setup"] = {
   init: function() {
    this.setColour("#6D917F");
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_setup_name);
  this.appendValueInput("PIN_RS", "Number")
    .appendField(Blockly.Msg.LCD_setup_RS)
        .setCheck("Number");
  this.appendValueInput("PIN_E", "Number")
    .appendField(Blockly.Msg.LCD_setup_E)
        .setCheck("Number");
  this.appendValueInput("PIN_DB4", "Number")
      .appendField(Blockly.Msg.LCD_setup_DB4)
        .setCheck("Number");
  this.appendValueInput("PIN_DB5", "Number")
      .appendField(Blockly.Msg.LCD_setup_DB5)
        .setCheck("Number");
  this.appendValueInput("PIN_DB6", "Number")
      .appendField(Blockly.Msg.LCD_setup_DB6)
        .setCheck("Number");
  this.appendValueInput("PIN_DB7", "Number")
      .appendField(Blockly.Msg.LCD_setup_DB7)
        .setCheck("Number");
  this.appendValueInput("COLUMNS", "Number")
      .appendField(Blockly.Msg.LCD_setup_COLUMNS)
        .setCheck("Number");
  this.appendValueInput("ROWS", "Number")
      .appendField(Blockly.Msg.LCD_setup_ROWS)
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_083);
  }
};
Blockly.Blocks["lcdm_setcursor"] = {
   init: function() {
    this.setColour("#6D917F");
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_setup_name_print);
   this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_setup_name_print);
    this.appendValueInput("column", "Number")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCD_setup_COLUMNS);
    this.appendValueInput("row", "Number")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCD_setup_ROWS);
  this.appendValueInput("texttoprint")
        .setCheck('String')  
    .appendField(Blockly.Msg.mLCDP_Print);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_083);
  }
};

Blockly.Blocks["lcd_setcursor_draw_pl"] = {
  init: function() {
this.setColour("#6D917F");
this.appendDummyInput()
.appendField(Blockly.Msg.LCD_lcdi2c_print_grp)
.appendField(new Blockly.FieldTextInput("01"), "TEXT");
this.appendDummyInput()
.appendField(Blockly.Msg.LCD_setup_COLUMNS);
    this.appendValueInput("print_x", "Number")
        .setCheck("Number");
this.appendDummyInput()
.appendField(Blockly.Msg.LCD_setup_ROWS); 
    this.appendValueInput("print_y", "Number")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_083);
  }
};

Blockly.Blocks["lcdi2c_setuprus"] = {
   init: function() {
    this.setColour("#3f594c");
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_I2C_setup)
    .appendField(Blockly.Msg.LCD_I2C_setup2);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x27"), "NAME");
   this.appendValueInput("COLUMNS", "Number")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCD_setup_COLUMNS);
    this.appendValueInput("ROWS", "Number")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCD_setup_ROWS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_084);
  }
};

 Blockly.Blocks["lcdi2c_setcursor"] = {
   init: function() {
    this.setColour("#3f594c");
   this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_lcdi2c_print);
    this.appendValueInput("column", "Number")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCD_setup_COLUMNS);
    this.appendValueInput("row", "Number")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCD_setup_ROWS);
  this.appendValueInput("texttoprint")
        .setCheck('String')  
    .appendField(Blockly.Msg.mLCDP_Print);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_084);
  }
};


Blockly.Blocks["lcdi2c_setcursor_draw"] = {
  init: function() {
this.setColour("#4B886A");
this.appendDummyInput()
.appendField(Blockly.Msg.LCD_lcdi2c_print_gr2)
.appendField(new Blockly.FieldTextInput("01"), "TEXT")
 
			this.appendDummyInput()
		.appendField(' ')
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'Pix0e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e4');
 
    this.setInputsInline(false);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_084);
  }
};
Blockly.Blocks["lcdi2c_setcursor_draw_led"] = {
  init: function() {
this.setColour("#484E6E");
this.appendDummyInput()
.appendField("POV  ")
.appendField(new Blockly.FieldTextInput("1"), "TEXT")
.appendField(" T ")
.appendField(new Blockly.FieldTextInput("10"), "TEXT1")
 
			this.appendDummyInput()
		.appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e4');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e4');
 
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_104);
  }
};

Blockly.Blocks["lcdi2c_setcursor_draw_pl"] = {
  init: function() {
this.setColour("#4B886A");
this.appendDummyInput()
.appendField(Blockly.Msg.LCD_lcdi2c_print_gr)
.appendField(new Blockly.FieldTextInput("01"), "TEXT");
this.appendDummyInput()
.appendField(Blockly.Msg.LCD_setup_COLUMNS);
    this.appendValueInput("print_x", "Number")
        .setCheck("Number");
this.appendDummyInput()
.appendField(Blockly.Msg.LCD_setup_ROWS); 
    this.appendValueInput("print_y", "Number")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_084);
  }
};


Blockly.Blocks["minilcdi2c_setup"] = {
   init: function() {
    this.setColour("#333777");
    this.appendDummyInput()
    .appendField(Blockly.Msg.miniLCD_I2C_setup)
        .appendField(Blockly.Msg.miniLCD_I2C_setup2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_085);
  }
};

Blockly.Blocks["minilcdi2c_setcursor"] = {
  init: function() {
    this.setColour("#333777");
    this.appendDummyInput()
        .appendField(Blockly.Msg.miniLCD_I2C_print_x);
    
    this.appendValueInput("print_x", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField(Blockly.Msg.miniLCD_I2C_print_y);  
    this.appendValueInput("print_y", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField(Blockly.Msg.miniLCD_I2C_print_F)
    .appendField(new Blockly.FieldDropdown([['6x8', '6x8'],['12x16', '12x16']]), "dp")    

  this.appendValueInput("texttoprint")
        .setCheck(null)
    .appendField(Blockly.Msg.miniLCD_I2C_print_T);
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_085);
  }
};


Blockly.Blocks["minilcdi2c_setcursorR"] = {
  init: function() {
    this.setColour("#333777");
    this.appendDummyInput()
        .appendField(Blockly.Msg.miniLCD_I2C_print_x);
    
    this.appendValueInput("print_x", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField(Blockly.Msg.miniLCD_I2C_print_y);  
    this.appendValueInput("print_y", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField(Blockly.Msg.miniLCD_I2C_print_F)
    .appendField(new Blockly.FieldDropdown([['6x8', '6x8'],['12x16', '12x16']]), "dp");    
  this.appendDummyInput()
        .appendField(Blockly.Msg.miniLCD_I2C_print_TI)
    .appendField(new Blockly.FieldDropdown([['long', 'long'],['float 3.1', 'float-1'],['float 3.14', 'float-2'],['float 3.145', 'float-3'],['float 3.1459', 'float-4'],['String', 'String']]), "tipe");  
  this.appendDummyInput()
        .appendField(Blockly.Msg.miniLCD_I2C_print_R);
    
    this.appendValueInput("print_R", "Number")
        .setCheck("Number");
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_085);
  }
};

Blockly.Blocks["minilcdi2c_setcursor_draw"] = {
  init: function() {
this.setColour("#333777");
this.appendDummyInput()
.appendField(Blockly.Msg.miniLCD_I2C_print_draw)
.appendField(new Blockly.FieldTextInput("0"), "TEXT")
	
  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e15');
  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix8e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix9e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix10e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix11e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix12e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix13e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix14e15');
		  this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e4')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e5')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e6')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e7')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e8')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e9')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e10')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e11')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e12')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e13')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e14')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix15e15');
		
    this.setInputsInline(false);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_085);
  }
};
Blockly.Blocks["minilcdi2c_setcursor_draw_pl"] = {
  init: function() {
this.setColour("#333777");
this.appendDummyInput()
.appendField(Blockly.Msg.miniLCD_I2C_print_draw)
.appendField(new Blockly.FieldTextInput("0"), "TEXT");
this.appendDummyInput()
.appendField(' X -');
    this.appendValueInput("print_x", "Number")
        .setCheck("Number");
this.appendDummyInput()
.appendField(' Y -'); 
    this.appendValueInput("print_y", "Number")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_085);
  }
};

Blockly.Blocks["lcd_con_nokia"] = {
  init: function() {
    this.setColour("#1a5c71");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.LCD_Nokia);
    
  this.appendValueInput("SCK_N", "Number")                                                   
        .setCheck("Number");

  this.appendDummyInput()                                                                  
        .appendField("MOSI");  
  this.appendValueInput("MOSI_N", "Number")                                                   
        .setCheck("Number");

  this.appendDummyInput()                                                                  
        .appendField("DC");  
  this.appendValueInput("DC_N", "Number")                                                   
        .setCheck("Number");
  
  this.appendDummyInput()                                                                  
        .appendField("RST");  
  this.appendValueInput("RST_N", "Number")                                                   
        .setCheck("Number");
    
  this.appendDummyInput()                                                                  
        .appendField("CS");  
  this.appendValueInput("CS_N", "Number")                                                   
        .setCheck("Number");
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_086);
  }
};

Blockly.Blocks["lcd_con_nokia_text"] = {
  init: function() {
    this.setColour("#1a5c71");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.LCD_Nokia_text);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.LCD_Nokia_text_x);   
  this.appendValueInput("texttoprint")                                                       
        .setCheck(null);
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_086);
  }
};

Blockly.Blocks["lcd_con_nokia_number"] = {
  init: function() {
    this.setColour("#1a5c71");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.LCD_Nokia_text);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
    
  this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.LCD_Nokia_nom_x)
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LCD_Nokia_SmallFont, 'SmallFont'],[Blockly.Msg.LCD_Nokia_MediumNumbers, 'MediumNumbers'],[Blockly.Msg.LCD_Nokia_BigNumbers, 'BigNumbers']]), "dp");      
   this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.LCD_Nokia_nom_y);  
   this.appendValueInput("Nokia_number", "Number")                                                   
        .setCheck("Number");
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_086);
  }
};

Blockly.Blocks["lcd_128x64px_spi"] = {
  init: function() {
    this.setColour("#123747");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x64px_spi);
  this.appendDummyInput()                                                                  
        .appendField("E");   
  this.appendValueInput("pin1", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("RW");  
  this.appendValueInput("pin2", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("RS");  
  this.appendValueInput("pin3", "Number")                                                   
        .setCheck("Number");
 
 
  this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x64px_spi_pos)
    .appendField(new Blockly.FieldDropdown([['0°', '0'],['90°', '90'],['180°', '180'],['270°', '270']]), "dp");      
  
  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_096);
  }
};
 
Blockly.Blocks["lcd_128x64px_spi_mini"] = {
  init: function() {
    this.setColour("#123747");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x64px_spi_mini);
  this.appendDummyInput()                                                                  
        .appendField("CS");   
  this.appendValueInput("pin1", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("DC");  
  this.appendValueInput("pin2", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("RES");  
  this.appendValueInput("pin3", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("SDA");  
  this.appendValueInput("pin4", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("SCK");  
  this.appendValueInput("pin5", "Number")                                                   
        .setCheck("Number");
 
 
  this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x64px_spi_pos)
    .appendField(new Blockly.FieldDropdown([['0°', '0'],['90°', '90'],['180°', '180'],['270°', '270']]), "dp");      
  
  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_097);
  }
};

Blockly.Blocks["lcd_128x64px_spi_top"] = {
  init: function() {
    this.setColour("#123747");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x64px_spi_top);
  this.appendDummyInput()                                                                   
    .appendField(new Blockly.FieldDropdown([['SSD1306 128X64 - I2C / TWI', 'U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_NONE|U8G_I2C_OPT_DEV_0)']
	,['SSD1306 128X64 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_SSD1306_128X64 u8g(13, 11, 10, 9, 8)']
	,['SSD1306 128X64 - SCK = 4, MOSI = 5, CS = 6, A0 = 7', 'U8GLIB_SSD1306_128X64 u8g(4, 5, 6, 7)']
	,['SSD1306 128X64 - CS = 10, A0 = 9, SCK = 13, MOSI = 11', 'U8GLIB_SSD1306_128X64 u8g(10, 9)']
	,['SSD1306 128X32 - I2C / TWI', 'U8GLIB_SSD1306_128X32 u8g(U8G_I2C_OPT_NONE)']
	,['SSD1306 128X64 - I2C / TWI FAST', 'U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_DEV_0|U8G_I2C_OPT_NO_ACK|U8G_I2C_OPT_FAST)']
	,['SSD1306 128X64 - AC I2C', 'U8GLIB_SSD1306_128X64 u8g(U8G_I2C_OPT_NO_ACK)']
	,['SSD1306 ADAFRUIT 128X64 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_SSD1306_ADAFRUIT_128X64 u8g(13, 11, 10, 9)']
	,['SSD1306 ADAFRUIT 128X64 - CS = 10, A0 = 9, SCK = 13, MOSI = 11', 'U8GLIB_SSD1306_ADAFRUIT_128X64 u8g(10, 9)']
	,['SSD1306 128X32 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_SSD1306_128X32 u8g(13, 11, 10, 9)']
	,['SSD1306 128X32 - CS = 10, A0 = 9, SCK = 13, MOSI = 11', 'U8GLIB_SSD1306_128X32 u8g(10, 9)']
	,['NHD27OLED BW - SCK=13, MOSI=11, CS=10, A0=9', 'U8GLIB_NHD27OLED_BW u8g(13, 11, 10, 9)']
	,['U8GLIB SSD1306 64X48 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_SSD1306_64X48 u8g(13, 11, 10, 9)']
	,['U8GLIB SSD1306 64X48 - CS = 10, A0 = 9, SCK = 13, MOSI = 11', 'U8GLIB_SSD1306_64X48 u8g(10, 9)']
	,['U8GLIB SSD1306 64X48 - I2C / TWI', 'U8GLIB_SSD1306_64X48 u8g(U8G_I2C_OPT_NONE)']
	,['NHD27OLED 2X BW - SCK=13, MOSI=11, CS=10, A0=9', 'U8GLIB_NHD27OLED_2X_BW u8g(13, 11, 10, 9)']
	,['NHD27OLED GR - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_NHD27OLED_GR u8g(13, 11, 10, 9)']
	,['NHD27OLED 2X GR - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_NHD27OLED_2X_GR u8g(13, 11, 10, 9)']
	,['NHD31OLED BW - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_NHD31OLED_BW u8g(13, 11, 10, 9)']
	,['NHD31OLED 2X BW - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_NHD31OLED_2X_BW u8g(13, 11, 10, 9)']
	,['NHD31OLED GR - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_NHD31OLED_GR u8g(13, 11, 10, 9)']
	,['NHD31OLED 2X GR - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_NHD31OLED_2X_GR u8g(13, 11, 10, 9)']
	,['DOGS102 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_DOGS102 u8g(13, 11, 10, 9, 8)']
	,['DOGM132 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_DOGM132 u8g(13, 11, 10, 9)']
	,['DOGM128 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_DOGM128 u8g(13, 11, 10, 9)']
	,['DOGM128 2X - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_DOGM128_2X u8g(13, 11, 10, 9)']
	,['ST7920 128X64 1X - D0..D7: 8,9,10,11,4,5,6,7 en=18, di=17,rw=16', 'U8GLIB_ST7920_128X64_1X u8g(8, 9, 10, 11, 4, 5, 6, 7, 18, 17, 16)']
	,['ST7920 128X64 4X - D0..D7: 8,9,10,11,4,5,6,7 en=18, di=17,rw=16', 'U8GLIB_ST7920_128X64_4X u8g(8, 9, 10, 11, 4, 5, 6, 7, 18, 17, 16)']
	,['ST7920 128X64 1X - SCK = en = 18, MOSI = rw = 16, CS = di = 17', 'U8GLIB_ST7920_128X64_1X u8g(18, 16, 17)']
	,['ST7920 128X64 4X - SCK = en = 18, MOSI = rw = 16, CS = di = 17', 'U8GLIB_ST7920_128X64_4X u8g(18, 16, 17)']
	,['ST7920 192X32 1X - D0..D7: 8,9,10,11,4,5,6,7 en=18, di=17,rw=16', 'U8GLIB_ST7920_192X32_1X u8g(8, 9, 10, 11, 4, 5, 6, 7, 18, 17, 16)']
	,['ST7920 192X32 4X - D0..D7: 8,9,10,11,4,5,6,7 en=18, di=17,rw=16', 'U8GLIB_ST7920_192X32_4X u8g(8, 9, 10, 11, 4, 5, 6, 7, 18, 17, 16)']
	,['ST7920 192X32 1X - SCK = en = 18, MOSI = rw = 16, CS = di = 17', 'U8GLIB_ST7920_192X32_1X u8g(18, 16, 17)']
	,['ST7920 192X32 4X - SCK = en = 18, MOSI = rw = 16, CS = di = 17', 'U8GLIB_ST7920_192X32_4X u8g(18, 16, 17)']
	,['ST7920 192X32 1X - SCK = en = 13, MOSI = rw = 11, CS = di = 10', 'U8GLIB_ST7920_192X32_1X u8g(13, 11, 10)']
	,['ST7920 192X32 4X - SCK = en = 13, MOSI = rw = 11, CS = di = 10, HW SPI', 'U8GLIB_ST7920_192X32_4X u8g(10)']
	,['ST7920 202X32 1X - D0..D7: 8,9,10,11,4,5,6,7 en=18, di=17,rw=16', 'U8GLIB_ST7920_202X32_1X u8g(8, 9, 10, 11, 4, 5, 6, 7, 18, 17, 16)']
	,['ST7920 202X32 4X - D0..D7: 8,9,10,11,4,5,6,7 en=18, di=17,rw=16', 'U8GLIB_ST7920_202X32_4X u8g(8, 9, 10, 11, 4, 5, 6, 7, 18, 17, 16)']
	,['ST7920 202X32 1X - SCK = en = 18, MOSI = rw = 16, CS = di = 17', 'U8GLIB_ST7920_202X32_1X u8g(18, 16, 17)']
	,['ST7920 202X32 4X - SCK = en = 18, MOSI = rw = 16, CS = di = 17', 'U8GLIB_ST7920_202X32_4X u8g(18, 16, 17)']
	,['LM6059 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_LM6059 u8g(13, 11, 10, 9)']
	,['LM6063 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_LM6063 u8g(13, 11, 10, 9)']
	,['DOGXL160 BW - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_DOGXL160_BW u8g(10, 9)']
	,['DOGXL160 GR - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_DOGXL160_GR u8g(13, 11, 10, 9)']
	,['DOGXL160 2X BW - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_DOGXL160_2X_BW u8g(13, 11, 10, 9)']
	,['DOGXL160 2X GR - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_DOGXL160_2X_GR u8g(13, 11, 10, 9)']
	,['PCD8544 - SCK = 13, MOSI = 11, CS = 10, A0 = 9, Reset = 8', 'U8GLIB_PCD8544 u8g(13, 11, 10, 9, 8)']
	,['PCF8812 - SCK = 13, MOSI = 11, CS = 10, A0 = 9, Reset = 8', 'U8GLIB_PCF8812 u8g(13, 11, 10, 9, 8)']
	,['KS0108 128 - D0..D7: 8,9,10,11,4,5,6,7 en=18, cs1=14, cs2=15,di=17,rw=16', 'U8GLIB_KS0108_128 u8g(8, 9, 10, 11, 4, 5, 6, 7, 18, 14, 15, 17, 16)']
	,['LC7981 160X80 - D0..D7: 8,9,10,11,4,5,6,7 en=18, cs=14 ,di=15,rw=17, reset = 16', 'U8GLIB_LC7981_160X80 u8g(8, 9, 10, 11, 4, 5, 6, 7,  18, 14, 15, 17, 16)']
	,['LC7981 240X64 - D0..D7: 8,9,10,11,4,5,6,7 en=18, cs=14 ,di=15,rw=17, reset = 16', 'U8GLIB_LC7981_240X64 u8g(8, 9, 10, 11, 4, 5, 6, 7,  18, 14, 15, 17, 16)']
	,['LC7981 240X128 - D0..D7: 8,9,10,11,4,5,6,7 en=18, cs=14 ,di=15,rw=17, reset = 16', 'U8GLIB_LC7981_240X128 u8g(8, 9, 10, 11, 4, 5, 6, 7,  18, 14, 15, 17, 16)']
	,['ILI9325D 320x240 - D0..D7: 0,1,2,3,4,5,6,7 en=wr=18, cs=17, rs=19, rd=U8G_PIN_NONE, reset = 16', 'U8GLIB_ILI9325D_320x240 u8g(18,17,19,U8G_PIN_NONE,16 )']
	,['SBN1661 122X32 - D0..D7: 8,9,10,11,4,5,6,7 cs1=14, cs2=15,di=17,rw=16,reset = 16', 'U8GLIB_SBN1661_122X32 u8g(8,9,10,11,4,5,6,7,14,15, 17, U8G_PIN_NONE, 16)']
	,['SH1106 128X64 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_SH1106_128X64 u8g(13, 11, 10, 9)']
	,['SH1106 128X64 - SCK = 4, MOSI = 5, CS = 6, A0 = 7', 'U8GLIB_SH1106_128X64 u8g(4, 5, 6, 7)']
	,['SH1106 128X64 - I2C / TWI', 'U8GLIB_SH1106_128X64 u8g(U8G_I2C_OPT_NONE)']
	,['SH1106 128X64 - Dev 0, Fast I2C / TWI', 'U8GLIB_SH1106_128X64 u8g(U8G_I2C_OPT_DEV_0|U8G_I2C_OPT_FAST)']
	,['SH1106 128X64 - ACK I2C', 'U8GLIB_SH1106_128X64 u8g(U8G_I2C_OPT_NO_ACK)']
	,['SSD1309 128X64 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_SSD1309_128X64 u8g(13, 11, 10, 9)']
	,['SSD1327 96X96 GR - I2C', 'U8GLIB_SSD1327_96X96_GR u8g(U8G_I2C_OPT_NONE)']
	,['SSD1327 96X96 2X GR - I2C', 'U8GLIB_SSD1327_96X96_2X_GR u8g(U8G_I2C_OPT_NONE)']
	,['UC1611 DOGM240 - I2C', 'U8GLIB_UC1611_DOGM240 u8g(U8G_I2C_OPT_NONE)']
	,['UC1611 DOGM240 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_UC1611_DOGM240 u8g(13, 11, 10, 9)']
	,['UC1611 DOGM240 - CS = 10, A0 = 9, SCK = 13, MOSI = 11', 'U8GLIB_UC1611_DOGM240 u8g(10, 9);']
	,['UC1611 DOGM240 - D0..D7: 8,9,10,11,4,5,6,7 en=18, cs=3, di/a0=17,rw=16', 'U8GLIB_UC1611_DOGM240 u8g(8, 9, 10, 11, 4, 5, 6, 7, 18, 3, 17, 16)']
	,['UC1611 DOGXL240 - I2C', 'U8GLIB_UC1611_DOGXL240 u8g(U8G_I2C_OPT_NONE)']
	,['UC1611 DOGXL240 - SCK = 13, MOSI = 11, CS = 10, A0 = 9', 'U8GLIB_UC1611_DOGXL240 u8g(13, 11, 10, 9)']
	,['UC1611 DOGXL240 - CS = 10, A0 = 9, SCK = 13, MOSI = 11', 'U8GLIB_UC1611_DOGXL240 u8g(10, 9)']
	,['UC1611 DOGXL240 - D0..D7: 8,9,10,11,4,5,6,7 en=18, cs=3, di/a0=17,rw=16', 'U8GLIB_UC1611_DOGXL240 u8g(8, 9, 10, 11, 4, 5, 6, 7, 18, 3, 17, 16)']
	,['NHD C12864 - SCK = 13, MOSI = 11, CS = 10, A0 = 9, RST = 8', 'U8GLIB_NHD_C12864 u8g(13, 11, 10, 9, 8)']
	,['NHD C12832 - SCK = 13, MOSI = 11, CS = 10, A0 = 9, RST = 8', 'U8GLIB_NHD_C12832 u8g(13, 11, 10, 9, 8)']
	,['LD7032 60x32 - SCK = 13, MOSI = 11, CS = 10, A0 = 9, RST = 8', 'U8GLIB_LD7032_60x32 u8g(13, 11, 10, 9, 8)']
	,['LD7032 60x32 - SCK = 11, MOSI = 12, CS = 9, A0 = 10, RST = 8', 'U8GLIB_LD7032_60x32 u8g(11, 12, 9, 10, 8)']
	,['UC1608 240X64 - SCK = 13, MOSI = 11, CS = 10, A0 = 9, RST = 8', 'U8GLIB_UC1608_240X64 u8g(13, 11, 10, 9, 8)']
	,['UC1608 240X64 2X - SCK = 13, MOSI = 11, CS = 10, A0 = 9, RST = 8', 'U8GLIB_UC1608_240X64_2X u8g(13, 11, 10, 9, 8)']
	,['UC1608 240X64 - SCK = 13, MOSI = 11, CS = 10, A0 = 9, RST = 8', 'U8GLIB_UC1608_240X64 u8g(10, 9, 8)']
	,['UC1608 240X64 2X - SCK = 13, MOSI = 11, CS = 10, A0 = 9, RST = 8', 'U8GLIB_UC1608_240X64_2X u8g(10, 9, 8)']
	,['UC1608 240X - SCK = 13, MOSI = 11, CS = 10, A0 = 9, RST = 8', 'U8GLIB_UC1608_240X u8g(13, 11, 10, 9, 8)']
	,['UC1608 240X64 2X - SCK = 13, MOSI = 11, CS = 10, A0 = 9, RST = 8', 'U8GLIB_UC1608_240X64_2X u8g(13, 11, 10, 9, 8)']
	,['UC1608 240X64 - SCK = 13, MOSI = 11, CS = 10, A0 = 9, RST = 8', 'U8GLIB_UC1608_240X64 u8g(10, 9, 8)']
	,['UC1608 240X64 2X - SCK = 13, MOSI = 11, CS = 10, A0 = 9, RST = 8', 'U8GLIB_UC1608_240X64_2X u8g(10, 9, 8)']
	,['T6963 240X128 - D0..D7: 8,9,10,11,4,5,6,7, cs=14, a0=15, wr=17, rd=18, reset=16', 'U8GLIB_T6963_240X128 u8g(8, 9, 10, 11, 4, 5, 6, 7, 14, 15, 17, 18, 16)']
	,['T6963 128X128 - D0..D7: 8,9,10,11,4,5,6,7, cs=14, a0=15, wr=17, rd=18, reset=16', 'U8GLIB_T6963_128X128 u8g(8, 9, 10, 11, 4, 5, 6, 7, 14, 15, 17, 18, 16)']
	,['T6963 240X64 - D0..D7: 8,9,10,11,4,5,6,7, cs=14, a0=15, wr=17, rd=18, reset=16', 'U8GLIB_T6963_240X64 u8g(8, 9, 10, 11, 4, 5, 6, 7, 14, 15, 17, 18, 16)']
	,['T6963 128X64 - D0..D7: 8,9,10,11,4,5,6,7, cs=14, a0=15, wr=17, rd=18, reset=16', 'U8GLIB_T6963_128X64 u8g(8, 9, 10, 11, 4, 5, 6, 7, 14, 15, 17, 18, 16)']
	,['HT1632 24X16 - WR = 3, DATA = 2, CS = 4', 'U8GLIB_HT1632_24X16 u8g(3, 2, 4)']
	,['SSD1351 128X128 332 - SCK = 13, MOSI = 11, CS = 8, A0 = 9, RESET = 7', 'U8GLIB_SSD1351_128X128_332 u8g(13, 11, 8, 9, 7)']
	,['SCK = 13, MOSI = 11, CS = 8, A0 = 9, RESET = 7', 'U8GLIB_SSD1351_128X128_332 u8g(8, 9, 7)']
	]), "dp2");      
 
 
  this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x64px_spi_pos)
    .appendField(new Blockly.FieldDropdown([['0°', '0'],['90°', '90'],['180°', '180'],['270°', '270']]), "dp");      
  
  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_097);
  }
};



Blockly.Blocks['lcd_128x64px_spi_b'] = {
    init: function () {
      this.setColour("#123747");  
        this.appendDummyInput()
		.appendField(Blockly.Msg.lcd_128x64px_spi_b);
          
        this.appendStatementInput("CONTENT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
     this.setHelpUrl(Blockly.Msg.HELPURL_096);
    }};

Blockly.Blocks["lcd_128x64px_spi_text"] = {
  init: function() {
    this.setColour("#123747");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x64px_spi_m);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
    
  this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.LCD_Nokia_nom_x)
    .appendField(new Blockly.FieldDropdown([['UniFont', 'unifont'],['6x10', '6x10'],['6x13', '6x13'],['9x18', '9x18']]), "dp");      
   this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.LCD_Nokia_text_x);  
  this.appendValueInput("texttoprint")                                                       
        .setCheck(null);
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_096);
  }
};

Blockly.Blocks["lcd_128x64px_spi_pix"] = {
  init: function() {
    this.setColour("#123747");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x64px_spi_pix);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_096);
  }
};	

Blockly.Blocks["lcd_128x64px_spi_line"] = {
  init: function() {
    this.setColour("#123747");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x64px_spi_line);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
   this.appendDummyInput()                                                                  
        .appendField("X");    
  this.appendValueInput("X_Nokia2", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia2", "Number")                                                   
        .setCheck("Number"); 
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_096);
  }
};	

Blockly.Blocks["lcd_128x64px_spi_box"] = {
  init: function() {
    this.setColour("#123747");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x64px_spi_box);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
   this.appendDummyInput()                                                                  
        .appendField("H");    
  this.appendValueInput("X_Nokia2", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("W");    
  this.appendValueInput("Y_Nokia2", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("R");    
  this.appendValueInput("Y_Nokia3", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()
      .appendField('K')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');		
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_096);
  }
};


Blockly.Blocks["lcd_128x64px_spi_draw"] = {
  init: function() {
this.setColour("#123747");
this.appendDummyInput()
.appendField(Blockly.Msg.lcd_128x64px_spi_draw_pl)
.appendField(new Blockly.FieldTextInput("01"), "TEXT")
 
			this.appendDummyInput()
		.appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e4')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e5')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e6') 
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix0e7');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e4')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e5')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e6')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix1e7');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e4')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e5')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e6')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix2e7');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e4')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e5')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e6')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix3e7');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e4')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e5')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e6')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix4e7');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e4')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e5')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e6')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix5e7');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e4')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e5')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e6')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix6e7');
		  this.appendDummyInput()
		  .appendField(' ')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e0')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e1')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e2')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e3')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e4')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e5')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e6')
		.appendField(new Blockly.FieldCheckbox('FALSE'), 'Pix7e7');
 
    this.setInputsInline(false);
    this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_096);
  }
};
Blockly.Blocks["lcd_128x64px_spi_draw_pl"] = {
  init: function() {
this.setColour("#123747");
this.appendDummyInput()
.appendField(Blockly.Msg.lcd_128x64px_spi_draw_pl)
.appendField(new Blockly.FieldTextInput("01"), "TEXT");
this.appendDummyInput()
.appendField(' X');
    this.appendValueInput("print_x", "Number")
        .setCheck("Number");
this.appendDummyInput()
.appendField('Y'); 
    this.appendValueInput("print_y", "Number")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_096);
  }
};

Blockly.Blocks["lcd_128x128px_spi"] = {
  init: function() {
    this.setColour("#8B251E");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi);
  this.appendDummyInput()                                                                  
        .appendField("CS");   
  this.appendValueInput("pin1", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("A0");  
  this.appendValueInput("pin2", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("RST");  
  this.appendValueInput("pin3", "Number")                                                   
        .setCheck("Number");
 
   this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_color)
    .appendField(new Blockly.FieldDropdown([["Red", "INITR_REDTAB"],["Black", "INITR_BLACKTAB"], ["Green", "INITR_GREENTAB"]]), "color");      
  this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x64px_spi_pos)
    .appendField(new Blockly.FieldDropdown([['0°', '0'],['90°', '1'],['180°', '2'],['270°', '3']]), "dp");      
  
  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_098);
  }
};

Blockly.Blocks["lcd_128x128px_spi_tv"] = {
  init: function() {
    this.setColour("#a7a217");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv);
 
   this.appendDummyInput()                                                                   
    .appendField(new Blockly.FieldDropdown([["PAL", "PAL"],["NTSC", "NTSC"]]), "format");      
 
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
 this.setHelpUrl(Blockly.Msg.HELPURL_102);
  }
};

Blockly.Blocks["lcd_128x128px_spi_tv_vga"] = {
  init: function() {
    this.setColour("#1788A7");  
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv_vga);
 
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
 this.setHelpUrl(Blockly.Msg.HELPURL_103);
  }
};


Blockly.Blocks["lcd_128x128px_spi_text"] = {
  init: function() {
    this.setColour("#8B251E");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_text);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.LCD_Nokia_text_x);   
  this.appendValueInput("texttoprint")                                                       
        .setCheck(null);
   this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_textcolor)
    .appendField(new Blockly.FieldDropdown([["White", "ST7735_WHITE"],["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"]]), "color");      
    this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_textsize)
    .appendField(new Blockly.FieldDropdown([["Little","1"],["Medium", "2"],["Large", "3"]]), "size");      

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_098);
  }
};

Blockly.Blocks["lcd_128x128px_spi_text_tv"] = {
  init: function() {
    this.setColour("#a7a217");  
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv1);   
  this.appendValueInput("texttoprint")                                                       
        .setCheck(null);
this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv1x);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv1y);    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
   this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv1f)
    .appendField(new Blockly.FieldDropdown([["4x6", "font4x6"],["6x8","font6x8"],["8x8","font8x8"]]), "font");   
 //  this.appendDummyInput()                                                                   
 //       .appendField(Blockly.Msg.lcd_128x128px_spi_tv1c)
 //   .appendField(new Blockly.FieldDropdown([["White", "WHITE"],["Black","BLACK"]]), "color");      
 
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_102);
  }
};

Blockly.Blocks["lcd_128x128px_spi_text_tv_vga"] = {
  init: function() {
    this.setColour("#1788A7");  
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv_vga1);   
  this.appendValueInput("texttoprint")                                                       
        .setCheck(null);
this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv1x);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv1y);    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
   this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv1c)
    .appendField(new Blockly.FieldDropdown([["1", "1"],["2","2"],["3","3"]]), "font");   
 //  this.appendDummyInput()                                                                   
 //       .appendField(Blockly.Msg.lcd_128x128px_spi_tv1c)
 //   .appendField(new Blockly.FieldDropdown([["White", "WHITE"],["Black","BLACK"]]), "color");      
 
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_103);
  }
};
Blockly.Blocks["lcd_128x128px_spi_text_tv_vga1"] = {
  init: function() {
    this.setColour("#1788A7");  
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv_vga2);   
 
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_103);
  }
};
Blockly.Blocks["lcd_128x128px_spi_text_tv_vga2"] = {
  init: function() {
    this.setColour("#1788A7");  
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv_vga3);   
   
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_103);
  }
};

Blockly.Blocks["lcd_128x128px_spi_text_tv_delay"] = {
  init: function() {
    this.setColour("#a7a217");  
 
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv2);    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
      
 
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_102);
  }
};

Blockly.Blocks["lcd_128x128px_spi_pix"] = {
  init: function() {
    this.setColour("#8B251E");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_px);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
   this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_textcolor)
    .appendField(new Blockly.FieldDropdown([["White", "ST7735_WHITE"],["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"]]), "color");      

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_098);
  }
};

Blockly.Blocks["lcd_128x128px_spi_line"] = {
  init: function() {
    this.setColour("#8B251E");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_line);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("X");  
  this.appendValueInput("X_Nokia1", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia1", "Number")                                                   
        .setCheck("Number");
   this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_textcolor)
    .appendField(new Blockly.FieldDropdown([["White", "ST7735_WHITE"],["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"]]), "color");      

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_098);
  }
};

Blockly.Blocks["lcd_128x128px_spi_line_tv"] = {
  init: function() {
    this.setColour("#a7a217");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv3); 
  this.appendDummyInput()
		.appendField("X");
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("X");  
  this.appendValueInput("X_Nokia1", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia1", "Number")                                                   
        .setCheck("Number");
 //  this.appendDummyInput()                                                                   
 //       .appendField(Blockly.Msg.lcd_128x128px_spi_textcolor)
 //   .appendField(new Blockly.FieldDropdown([["White", "ST7735_WHITE"],["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"]]), "color");      

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_102);
  }
};
Blockly.Blocks["lcd_128x128px_spi_line_tv_none"] = {
  init: function() {
    this.setColour("#a7a217");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv6); 
  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_102);
  }
};
Blockly.Blocks["lcd_128x128px_spi_line_tv_box"] = {
  init: function() {
    this.setColour("#a7a217");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv4); 
  this.appendDummyInput()
		.appendField("X");
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv7);  
  this.appendValueInput("X_Nokia1", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_tv8);    
  this.appendValueInput("Y_Nokia1", "Number")                                                   
        .setCheck("Number");
    this.appendDummyInput()                                                                   
         .appendField(Blockly.Msg.lcd_128x128px_spi_tv5)
     .appendField(new Blockly.FieldDropdown([["White", "0"],["Black","1"]]), "color");      

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_102);
  }
};

Blockly.Blocks["lcd_128x128px_spi_box"] = {
  init: function() {
    this.setColour("#8B251E");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_128x128px_spi_box);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
   this.appendDummyInput()                                                                  
        .appendField("H");    
  this.appendValueInput("X_Nokia2", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("W");    
  this.appendValueInput("Y_Nokia2", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("R");    
  this.appendValueInput("Y_Nokia3", "Number")                                                   
        .setCheck("Number");

  this.appendDummyInput()
      .appendField('K')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
		   this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_textcolor)
    .appendField(new Blockly.FieldDropdown([["White", "ST7735_WHITE"],["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"]]), "color");      
			
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_098);
  }
};

Blockly.Blocks["lcd_tah_spi"] = {
  init: function() {
    this.setColour("#333333");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_tah_spi);
 
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_099);
  }
};

Blockly.Blocks["lcd_tah_spi_text"] = {
  init: function() {
    this.setColour("#333333");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_tah_spi_text);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.LCD_Nokia_text_x);   
  this.appendValueInput("texttoprint")                                                       
        .setCheck(null);
   this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_textcolor)
    .appendField(new Blockly.FieldDropdown([ ["WHITE", "WHITE"],["BLACK","BLACK"],["BLUE", "BLUE"],["BRED", "BRED"],["GRED", "GRED"],["GBLUE", "GBLUE"],["RED", "RED"],["MAGENTA", "MAGENTA"],["GREEN", "GREEN"],["CYAN", "CYAN"],["YELLOW", "YELLOW"],["BROWN", "BROWN"],["BRRED", "BRRED"],["GRAY", "GRAY"]]), "color");      
    this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_textsize)
    .appendField(new Blockly.FieldDropdown([["12","1206"],["16", "1608"]]), "size");      

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_099);
  }
};

Blockly.Blocks["lcd_tah_spi_int"] = {
  init: function() {
    this.setColour("#333333");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_tah_spi_text);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_tah_spi_int);   
  this.appendValueInput("texttoprint")                                                       
        .setCheck(null);
   this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_textcolor)
    .appendField(new Blockly.FieldDropdown([["WHITE", "WHITE"],["BLACK","BLACK"],["BLUE", "BLUE"],["BRED", "BRED"],["GRED", "GRED"],["GBLUE", "GBLUE"],["RED", "RED"],["MAGENTA", "MAGENTA"],["GREEN", "GREEN"],["CYAN", "CYAN"],["YELLOW", "YELLOW"],["BROWN", "BROWN"],["BRRED", "BRRED"],["GRAY", "GRAY"]]), "color");      
    this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_textsize)
    .appendField(new Blockly.FieldDropdown([["12","12"],["16", "16"]]), "size");      

    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_099);
  }
};

Blockly.Blocks["lcd_tah_spi_box"] = {
  init: function() {
    this.setColour("#333333");  

  this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.lcd_tah_spi_box);    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
   this.appendDummyInput()                                                                  
        .appendField("H");    
  this.appendValueInput("X_Nokia2", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("W");    
  this.appendValueInput("Y_Nokia2", "Number")                                                   
        .setCheck("Number");

  this.appendDummyInput()
      .appendField('K')
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');	
		   this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.lcd_128x128px_spi_textcolor)
    .appendField(new Blockly.FieldDropdown([["WHITE", "WHITE"],["BLACK","BLACK"],["BLUE", "BLUE"],["BRED", "BRED"],["GRED", "GRED"],["GBLUE", "GBLUE"],["RED", "RED"],["MAGENTA", "MAGENTA"],["GREEN", "GREEN"],["CYAN", "CYAN"],["YELLOW", "YELLOW"],["BROWN", "BROWN"],["BRRED", "BRRED"],["GRAY", "GRAY"]]), "color");      
			
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_099);
  }
};

Blockly.Blocks['lcd_tah_spi_tah'] = {
    init: function () {
      this.setColour("#333333");  
        this.appendDummyInput()
		.appendField(Blockly.Msg.lcd_tah_spi_tah);
       this.appendDummyInput()                                                                  
        .appendField("X");    
  this.appendValueInput("X_Nokia", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");
   this.appendDummyInput()                                                                  
        .appendField("X");    
  this.appendValueInput("X_Nokia2", "Number")                                                   
        .setCheck("Number");
  this.appendDummyInput()                                                                  
        .appendField("Y");    
  this.appendValueInput("Y_Nokia2", "Number")                                                   
        .setCheck("Number");
		
        this.appendStatementInput("CONTENT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
     this.setHelpUrl(Blockly.Msg.HELPURL_099);
    }};
	
 //леонардо
 
 
Blockly.Blocks['leonardo1'] = {
  init: function() {
    this.setColour("#71437A");
    this.appendDummyInput()
    
      .appendField(Blockly.Msg.leonardo_url_1)
     
  this.appendValueInput("Sensor1", 'Number')
  .appendField(Blockly.Msg.leonardo_url_2)
        .setCheck('Number');
    
  this.appendValueInput("Sensor2", 'Number')
  .appendField(Blockly.Msg.leonardo_url_3)
        .setCheck('Number');
    //this.setOutput(true, 'number');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_088);
  }
};

Blockly.Blocks['leonardo2'] = {
  init: function() {
    this.setColour("#71437A");
    this.appendDummyInput()
  
      .appendField(Blockly.Msg.leonardo_url_4)
  .appendField(new Blockly.FieldDropdown([['LEFT', 'MOUSE_LEFT'],['RIGHT', 'MOUSE_RIGHT'],['MIDDLE', 'MOUSE_MIDDLE']]), "maus_DIR");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_088);
  }
};
 
 Blockly.Blocks['leonardo3'] = {
  init: function() {
    this.setColour("#71437A");
    this.appendDummyInput()
    
      .appendField(Blockly.Msg.leonardo_url_5)
  .appendField(new Blockly.FieldDropdown([['LEFT', 'MOUSE_LEFT'],['RIGHT', 'MOUSE_RIGHT'],['MIDDLE', 'MOUSE_MIDDLE']]), "maus_DIR");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_088);
  }
};

Blockly.Blocks['leonardo4'] = {
  init: function() {
    this.setColour("#71437A");
    this.appendDummyInput()
    
      .appendField(Blockly.Msg.leonardo_url_6)
  .appendField(new Blockly.FieldDropdown([['LEFT', 'MOUSE_LEFT'],['RIGHT', 'MOUSE_RIGHT'],['MIDDLE', 'MOUSE_MIDDLE']]), "maus_DIR");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_088);
  }
};
  
Blockly.Blocks['leonardo5'] = {
  init: function() {
    this.setColour("#007700");
    this.appendDummyInput()
    
      .appendField(Blockly.Msg.leonardo_url_7)
  .appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['0', '0'],['q', 'q'],['w', 'w'],['e', 'e'],['r', 'r'],['t', 't'],['y', 'y'],['u', 'u'],['i', 'i'],['o', 'o'],['p', 'p'],['a', 'a'],['s', 's'],['d', 'd'],['f', 'f'],['g', 'g'],['h', 'h'],['j', 'j'],['k', 'k'],['l', 'l'],['z', 'z'],['x', 'x'],['c', 'c'],['v', 'v'],['b', 'b'],['n', 'n'],['m', 'm']]), "maus_DIR");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_088);
  }
};

Blockly.Blocks['leonardo6'] = {
  init: function() {
    this.setColour("#007700");
    this.appendDummyInput()
    
      .appendField(Blockly.Msg.leonardo_url_8)
  .appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['0', '0'],['q', 'q'],['w', 'w'],['e', 'e'],['r', 'r'],['t', 't'],['y', 'y'],['u', 'u'],['i', 'i'],['o', 'o'],['p', 'p'],['a', 'a'],['s', 's'],['d', 'd'],['f', 'f'],['g', 'g'],['h', 'h'],['j', 'j'],['k', 'k'],['l', 'l'],['z', 'z'],['x', 'x'],['c', 'c'],['v', 'v'],['b', 'b'],['n', 'n'],['m', 'm']]), "maus_DIR");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_088);
  }
};

Blockly.Blocks['leonardo7'] = {
  init: function() {
    this.setColour("#007700");
    this.appendDummyInput()
    
      .appendField(Blockly.Msg.leonardo_url_9)
  .appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['0', '0'],['q', 'q'],['w', 'w'],['e', 'e'],['r', 'r'],['t', 't'],['y', 'y'],['u', 'u'],['i', 'i'],['o', 'o'],['p', 'p'],['a', 'a'],['s', 's'],['d', 'd'],['f', 'f'],['g', 'g'],['h', 'h'],['j', 'j'],['k', 'k'],['l', 'l'],['z', 'z'],['x', 'x'],['c', 'c'],['v', 'v'],['b', 'b'],['n', 'n'],['m', 'm']]), "maus_DIR");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_088);
  }
};

Blockly.Blocks['leonardo8'] = {
  init: function() {
    this.setColour("#007700");
    this.appendDummyInput()
    
      .appendField(Blockly.Msg.leonardo_url_10)
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_088);
  }
};

Blockly.Blocks['leonardo9'] = {
  init: function() {
    this.setColour("#007700");
    this.appendDummyInput()
    
      .appendField(Blockly.Msg.leonardo_url_11)
  .appendField(new Blockly.FieldDropdown([['LEFT CTRL', 'KEY_LEFT_CTRL'],['LEFT SHIFT', 'KEY_LEFT_SHIFT'],['LEFT ALT', 'KEY_LEFT_ALT'],['LEFT GUI', 'KEY_LEFT_GUI'],['RIGHT CTRL', 'KEY_RIGHT_CTRL'],['RIGHT SHIFT', 'KEY_RIGHT_SHIFT'],['RIGHT ALT', 'KEY_RIGHT_ALT'],['RIGHT GUI', 'KEY_RIGHT_GUI'],['LEFT ALT', 'KEY_LEFT_ALT'],['LEFT ALT', 'KEY_LEFT_ALT'],['UP ARROW', 'KEY_UP_ARROW'],['DOWN ARROW', 'KEY_DOWN_ARROW'],['LEFT ARROW', 'KEY_LEFT_ARROW'],['RIGHT ARROW', 'KEY_RIGHT_ARROW'],['BACKSPACE', 'KEY_BACKSPACE'],['TAB', 'KEY_TAB'],['RETURN', 'KEY_RETURN'],['ESC', 'KEY_ESC'],['ENTER', 'KEY_INSERT'],['DELETE', 'KEY_DELETE'],['PAGE UP', 'KEY_PAGE_UP'],['PAGE DOWN', 'KEY_PAGE_DOWN'],['HOME', 'KEY_HOME'],['END', 'KEY_END'],['CAPS LOCK', 'KEY_CAPS_LOCK'],['F1', 'KEY_F1'],['F2', 'KEY_F2'],['F3', 'KEY_F3'],['F4', 'KEY_F4'],['F5', 'KEY_F5'],['F6', 'KEY_F6'],['F7', 'KEY_F7'],['F8', 'KEY_F8'],['F9', 'KEY_F9'],['F10', 'KEY_F10'],['F11', 'KEY_F11'],['F12', 'KEY_F12']]), "maus_DIR");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_088);
  }
};

Blockly.Blocks['leonardo10'] = {
  init: function() {
   this.setColour("#007700");
    this.appendDummyInput()
    
      .appendField(Blockly.Msg.leonardo_url_12)
  .appendField(new Blockly.FieldDropdown([['LEFT CTRL', 'KEY_LEFT_CTRL'],['LEFT SHIFT', 'KEY_LEFT_SHIFT'],['LEFT ALT', 'KEY_LEFT_ALT'],['LEFT GUI', 'KEY_LEFT_GUI'],['RIGHT CTRL', 'KEY_RIGHT_CTRL'],['RIGHT SHIFT', 'KEY_RIGHT_SHIFT'],['RIGHT ALT', 'KEY_RIGHT_ALT'],['RIGHT GUI', 'KEY_RIGHT_GUI'],['LEFT ALT', 'KEY_LEFT_ALT'],['LEFT ALT', 'KEY_LEFT_ALT'],['UP ARROW', 'KEY_UP_ARROW'],['DOWN ARROW', 'KEY_DOWN_ARROW'],['LEFT ARROW', 'KEY_LEFT_ARROW'],['RIGHT ARROW', 'KEY_RIGHT_ARROW'],['BACKSPACE', 'KEY_BACKSPACE'],['TAB', 'KEY_TAB'],['RETURN', 'KEY_RETURN'],['ESC', 'KEY_ESC'],['ENTER', 'KEY_INSERT'],['DELETE', 'KEY_DELETE'],['PAGE UP', 'KEY_PAGE_UP'],['PAGE DOWN', 'KEY_PAGE_DOWN'],['HOME', 'KEY_HOME'],['END', 'KEY_END'],['CAPS LOCK', 'KEY_CAPS_LOCK'],['F1', 'KEY_F1'],['F2', 'KEY_F2'],['F3', 'KEY_F3'],['F4', 'KEY_F4'],['F5', 'KEY_F5'],['F6', 'KEY_F6'],['F7', 'KEY_F7'],['F8', 'KEY_F8'],['F9', 'KEY_F9'],['F10', 'KEY_F10'],['F11', 'KEY_F11'],['F12', 'KEY_F12']]), "maus_DIR");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_088);
  }
};

Blockly.Blocks['leonardo11'] = {
  init: function() {
   this.setColour("#007700");
    this.appendDummyInput()
    
      .appendField(Blockly.Msg.leonardo_url_13)
  .appendField(new Blockly.FieldDropdown([['LEFT CTRL', 'KEY_LEFT_CTRL'],['LEFT SHIFT', 'KEY_LEFT_SHIFT'],['LEFT ALT', 'KEY_LEFT_ALT'],['LEFT GUI', 'KEY_LEFT_GUI'],['RIGHT CTRL', 'KEY_RIGHT_CTRL'],['RIGHT SHIFT', 'KEY_RIGHT_SHIFT'],['RIGHT ALT', 'KEY_RIGHT_ALT'],['RIGHT GUI', 'KEY_RIGHT_GUI'],['LEFT ALT', 'KEY_LEFT_ALT'],['LEFT ALT', 'KEY_LEFT_ALT'],['UP ARROW', 'KEY_UP_ARROW'],['DOWN ARROW', 'KEY_DOWN_ARROW'],['LEFT ARROW', 'KEY_LEFT_ARROW'],['RIGHT ARROW', 'KEY_RIGHT_ARROW'],['BACKSPACE', 'KEY_BACKSPACE'],['TAB', 'KEY_TAB'],['RETURN', 'KEY_RETURN'],['ESC', 'KEY_ESC'],['ENTER', 'KEY_INSERT'],['DELETE', 'KEY_DELETE'],['PAGE UP', 'KEY_PAGE_UP'],['PAGE DOWN', 'KEY_PAGE_DOWN'],['HOME', 'KEY_HOME'],['END', 'KEY_END'],['CAPS LOCK', 'KEY_CAPS_LOCK'],['F1', 'KEY_F1'],['F2', 'KEY_F2'],['F3', 'KEY_F3'],['F4', 'KEY_F4'],['F5', 'KEY_F5'],['F6', 'KEY_F6'],['F7', 'KEY_F7'],['F8', 'KEY_F8'],['F9', 'KEY_F9'],['F10', 'KEY_F10'],['F11', 'KEY_F11'],['F12', 'KEY_F12']]), "maus_DIR");
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_088);
  }
};


// прерывание


Blockly.Blocks['interrupts_attach'] = {
    init: function () {
        this.setColour("#9b9b67");
        this.appendDummyInput().appendField(Blockly.Msg.interrupAttach);
        this.appendDummyInput()
     .appendField(new Blockly.FieldDropdown([['3', "3"], ['2', "2"], ['1', "1"],['0', "0"],['18', "18"],['19', "19"],['20', "20"],['21', "21"]]), "PIN");
    //  .appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PIN");
        this.appendDummyInput().appendField(Blockly.Msg.interrupMode).appendField(new Blockly.FieldDropdown([['Low', "LOW"], ['Change', "CHANGE"], ['Rising', "RISING"],['High', "HIGH"],['Falling', "FALLING"]]), "MODE");
        this.appendStatementInput("CONTENT");
        this.setInputsInline(true);
    this.setHelpUrl(Blockly.Msg.HELPURL_089);
    }};
  
//  yield
  
Blockly.Blocks['interrupts_attach_yield'] = {
    init: function () {
        this.setColour(50);
        this.appendDummyInput().appendField(Blockly.Msg.interrupAttachyield);
        //this.appendDummyInput()
     //.appendField(new Blockly.FieldDropdown([['3', "3"], ['2', "2"], ['1', "1"],['0', "0"],['18', "18"],['19', "19"],['20', "20"],['21', "21"]]), "PIN");
    //  .appendField(new Blockly.FieldDropdown(profile.default.interrupt), "PIN");
        //this.appendDummyInput().appendField(Blockly.Msg.interrupMode).appendField(new Blockly.FieldDropdown([['Low', "LOW"], ['Change', "CHANGE"], ['Rising', "RISING"],['High', "HIGH"],['Falling', "FALLING"]]), "MODE");
        this.appendStatementInput("CONTENT");
        this.setInputsInline(true);
    this.setHelpUrl(Blockly.Msg.HELPURL_091);
    }};  
//обнулить инкодер



Blockly.Blocks['RotaryEncoder_None'] = {
  init: function() {
     this.setColour("#6D7497");
     this.appendDummyInput()
    .appendField(Blockly.Msg.RE_Interrupt_none)
  this.appendValueInput("PIN", 'Number')
        .setCheck('Number');
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.HELPURL_061);
  }
};
  
//esp8266 skan 
Blockly.Blocks["base_code_esp8266"] = {
 init: function() {
    this.setColour("#777777");
    this.appendDummyInput()
       .appendField("ESP 8266 - Scan WiFi - Rx")
	   .appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN1")
       .appendField("/ Tx")
       .appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN2");
	 this.appendDummyInput()
		.appendField("Serial")
		.appendField(new Blockly.FieldDropdown([['300', "300"], ['1200', "1200"], ['2400', "2400"],['4800', "4800"],['9600', "9600"],['19200', "19200"],['38400', "38400"],['57600', "57600"],['74880', "74880"],['115200', "115200"],['230400', "230400"]]), "SPEED1")
		.appendField("Esp")
		.appendField(new Blockly.FieldDropdown([['300', "300"], ['1200', "1200"], ['2400', "2400"],['4800', "4800"],['9600', "9600"],['19200', "19200"],['38400', "38400"],['57600', "57600"],['74880', "74880"],['115200', "115200"],['230400', "230400"]]), "SPEED2");
    this.setInputsInline(true);
	
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_092);
  }
};
Blockly.Blocks["base_conect_esp8266"] = {
 init: function() {
    this.setColour("#777777");
    this.appendDummyInput()
       .appendField("ESP 8266 - Connect WiFi - Rx")
	   .appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN1")
       .appendField("/ Tx")
       .appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN2");
	 this.appendDummyInput()
		.appendField("Serial")
		.appendField(new Blockly.FieldDropdown([['300', "300"], ['1200', "1200"], ['2400', "2400"],['4800', "4800"],['9600', "9600"],['19200', "19200"],['38400', "38400"],['57600', "57600"],['74880', "74880"],['115200', "115200"],['230400', "230400"]]), "SPEED1")
		.appendField("Esp")
		.appendField(new Blockly.FieldDropdown([['300', "300"], ['1200', "1200"], ['2400', "2400"],['4800', "4800"],['9600', "9600"],['19200', "19200"],['38400', "38400"],['57600', "57600"],['74880', "74880"],['115200', "115200"],['230400', "230400"]]), "SPEED2");
    this.appendDummyInput()
	.appendField("Name")
	.appendField(new Blockly.FieldTextInput("HUAWEI-010D9X_Wi-Fi5"), "TEXT1");
	this.appendDummyInput()
	.appendField("Pass")
	.appendField(new Blockly.FieldTextInput("1234567890"), "TEXT2");
	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_092);
  }
};
Blockly.Blocks["base_define_for_esp8266"]={
  init:function(){
        this.setColour("#777777");
       this.setHelpUrl(Blockly.Msg.HELPURL_092);
        this.appendDummyInput()
       .appendField("ESP 8266 - Web") 
       .appendField(new Blockly.FieldTextInput("ArduBlock"), "TEXT");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   }
};
Blockly.Blocks["base_conect_esp8266_text"] = {
 init: function() {
    this.setColour("#777777");
	this.appendDummyInput()
	.appendField("Text")
	.appendField(new Blockly.FieldTextInput("ArduBlock"), "TEXT");
	this.setInputsInline(true);	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_092);
  }
};
Blockly.Blocks["base_conect_esp8266_button_r"] = {
 init: function() {
    this.setColour("#777777");
	this.appendDummyInput()
		.appendField("Button ID")
		.appendField(new Blockly.FieldDropdown([['0', "0"], ['1', "1"], ['2', "2"],['3', "3"],['4', "4"],['5', "5"],['6', "6"],['7', "7"],['8', "8"],['9', "9"]]), "SPEED");
    this.appendDummyInput()
	.appendField("Name")
	.appendField(new Blockly.FieldTextInput("ON/OFF"), "TEXT");
 
	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_092);
  }
};
 
 Blockly.Blocks['base_code_entree_esp8266_button']={init:function(){
  var prog = window.localStorage.prog;
  this.appendDummyInput()
  .appendField("Button ID")
  this.setOutput(true);
    this.setColour("#777777");
  this.setHelpUrl(Blockly.Msg.HELPURL_092);
  //this.setTooltip(Blockly.Msg.code_tooltip)
  }
};
Blockly.Blocks["base_conect_esp8266_text_kode"] = {
 init: function() {
    this.setColour("#777777");
	this.appendDummyInput()
	.appendField("Kode")
	.appendField(new Blockly.FieldTextInput("<h1>Ar</h1>"), "TEXT");
	this.setInputsInline(true);	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_092);
  }
}; 
Blockly.Blocks["esp8266_setcursor"] = {
  init: function() {
  this.setColour("#777777");
    this.appendDummyInput()
        .appendField("Var");
  this.appendValueInput("texttoprint", "Number")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_092);
  }
};  
 Blockly.Blocks["base_conect_esp8266_s"] = {
 init: function() {
    this.setColour("#777777");
    this.appendDummyInput()
       .appendField("ESP 8266 - Server WiFi - Rx")
	   .appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN1")
       .appendField("/ Tx")
       .appendField(new Blockly.FieldDropdown(Blockly.Msg.rxtx), "PIN2");
	 this.appendDummyInput()
		.appendField("Serial")
		.appendField(new Blockly.FieldDropdown([['300', "300"], ['1200', "1200"], ['2400', "2400"],['4800', "4800"],['9600', "9600"],['19200', "19200"],['38400', "38400"],['57600', "57600"],['74880', "74880"],['115200', "115200"],['230400', "230400"]]), "SPEED1")
		.appendField("Esp")
		.appendField(new Blockly.FieldDropdown([['300', "300"], ['1200', "1200"], ['2400', "2400"],['4800', "4800"],['9600', "9600"],['19200', "19200"],['38400', "38400"],['57600', "57600"],['74880', "74880"],['115200', "115200"],['230400', "230400"]]), "SPEED2");
   // this.appendDummyInput()
	//.appendField("Name")
	//.appendField(new Blockly.FieldTextInput("HUAWEI-010D9X_Wi-Fi5"), "TEXT1");
	//this.appendDummyInput()
	//.appendField("Pass")
	//.appendField(new Blockly.FieldTextInput("1234567890"), "TEXT2");
	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
   this.setHelpUrl(Blockly.Msg.HELPURL_092);
  }
};

Blockly.Blocks["base_conect_esp8266_12f"] = {
 init: function() {
    this.setColour("#0e63a0");
	this.appendDummyInput()
	.appendField("ESP 8266 12F - Name")
	.appendField(new Blockly.FieldTextInput("HUAWEI-010D9X"), "TEXT1");
	this.appendDummyInput()
	.appendField("Pass")
	.appendField(new Blockly.FieldTextInput("1234567890"), "TEXT2");
	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
};

Blockly.Blocks["base_conect_esp8266_12f_esp"] = {
 init: function() {
    this.setColour("#0e63a0");
	this.appendDummyInput()
	.appendField("ESP 8266 12F - Name")
	.appendField(new Blockly.FieldTextInput("HUAWEI-010D9X"), "TEXT1");
	this.appendDummyInput()
	.appendField("Pass")
	.appendField(new Blockly.FieldTextInput("1234567890"), "TEXT2");
	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
};

Blockly.Blocks["base_define_for_esp8266_12f"]={
  init:function(){
        this.setColour("#0e63a0");
       this.setHelpUrl(Blockly.Msg.HELPURL_100);
        this.appendDummyInput()
       .appendField("ESP 8266 12F - ID") 
       .appendField(new Blockly.FieldTextInput("1"), "TEXT");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   }
};
 
 Blockly.Blocks["base_define_for_esp8266_12f_esp"]={
  init:function(){
        this.setColour("#0e63a0");
       this.setHelpUrl(Blockly.Msg.HELPURL_100);
        this.appendDummyInput()
       .appendField("ESP 8266 12F - ID") 
       .appendField(new Blockly.FieldTextInput("1"), "TEXT");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   }
};

 Blockly.Blocks["base_define_ttl_uart"]={
  init:function(){
        this.setColour("#10760E");
       this.setHelpUrl(Blockly.Msg.HELPURL_101);
        this.appendDummyInput()
       .appendField(Blockly.Msg.base_define_ttl_uart) 
       .appendField(new Blockly.FieldDropdown([['0', "41"], ['1', "33"], ['2', "64"],['3', "35"],['4', "36"],['5', "37"],['6', "94"],['7', "38"],['8', "42"],['9', "40"]]), "TEXT");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   }
};
 Blockly.Blocks["base_define_ttl_uart_top"]={
  init:function(){
        this.setColour("#10760E");
		 this.appendDummyInput()
       .appendField(Blockly.Msg.base_define_ttl_uart_top);
	this.setInputsInline(true);
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_101);
   }
};
Blockly.Blocks["base_conect_esp8266_button_12f"] = {
 init: function() {
    this.setColour("#0e63a0");
	this.appendDummyInput()
		.appendField("WEB - Button ID")
		.appendField(new Blockly.FieldTextInput("1"), "TEXT2");
    this.appendDummyInput()
	.appendField("Name")
	.appendField(new Blockly.FieldTextInput("ON/OFF"), "TEXT");
 
	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
};
Blockly.Blocks["base_conect_esp8266_title_12f"] = {
 init: function() {
    this.setColour("#0e63a0");
    this.appendDummyInput()
	.appendField("WEB - Name")
	.appendField(new Blockly.FieldTextInput("ArduBlock"), "TEXT");
 
	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
};
Blockly.Blocks["base_conect_esp8266_title_12f_esp"] = {
 init: function() {
    this.setColour("#0e63a0");
    this.appendDummyInput()
	.appendField("WEB - Name")
	.appendField(new Blockly.FieldTextInput("ArduBlock"), "TEXT");
 
	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
};

Blockly.Blocks["base_conect_esp8266_par_12f"] = {
 init: function() {
    this.setColour("#0e63a0");
    this.appendDummyInput()
	.appendField("WEB - Text")
	.appendField(new Blockly.FieldTextInput("ArduBlock"), "TEXT");
 
	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
};
Blockly.Blocks["base_conect_esp8266_par_12f_esp"] = {
 init: function() {
    this.setColour("#0e63a0");
    this.appendDummyInput()
	.appendField("WEB - Text")
	.appendField(new Blockly.FieldTextInput("ArduBlock"), "TEXT");
 
	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
};
Blockly.Blocks["base_conect_esp8266_kode_12f"] = {
 init: function() {
    this.setColour("#0e63a0");
    this.appendDummyInput()
	.appendField("WEB - Kode")
	.appendField(new Blockly.FieldTextInput("<h1>ArduBlock</h1>"), "TEXT");
 
	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
};
Blockly.Blocks["base_form_none"] = {
 init: function() {
    this.setColour("#308189");
    this.appendDummyInput()
	.appendField(Blockly.Msg.base_form_none_1)
	//.appendField(new Blockly.FieldTextInput("<h1>ArduBlock</h1>"), "TEXT");

	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
};
Blockly.Blocks["base_form_none2"] = {
 init: function() {
    this.setColour("#308189");
    this.appendDummyInput()
	.appendField(Blockly.Msg.base_form_none_2)
	//.appendField(new Blockly.FieldTextInput("<h1>ArduBlock</h1>"), "TEXT");

	this.setInputsInline(true);
	
     this.setPreviousStatement(true, null);
     this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
};
 
Blockly.Blocks["base_form_none3"]={
  init:function(){
        this.setColour("#308189");
       // this.setHelpUrl(Blockly.Msg.HELPURL_004);
   this.appendDummyInput()
    .appendField(Blockly.Msg.base_form_none_3) ;

        this.appendStatementInput("DO");
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   }
};



Blockly.Blocks["esp8266_setcursor_12f"] = {
  init: function() {
  this.setColour("#0e63a0");
    this.appendDummyInput()
        .appendField("Var");
  this.appendValueInput("texttoprint", "Number")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
}; 

Blockly.Blocks["base_form_RR"] = {
  init: function() {
  this.setColour("#308189");
    this.appendDummyInput()
        .appendField(Blockly.Msg.FOR_in_1);
  this.appendValueInput("texttoprint", "Number")
        .setCheck("Number");
	this.appendDummyInput()
	.appendField(new Blockly.FieldDropdown([['+1', "++"],['-1', "--"]]), "SPEED");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
}; 

Blockly.Blocks["interrupts_attach1"] = {
  init: function() {
  this.setColour("#9b9b67");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ATTACHE1);
	this.appendDummyInput()
	.appendField(new Blockly.FieldDropdown([['3', "3"], ['2', "2"], ['1', "1"],['0', "0"],['18', "18"],['19', "19"],['20', "20"],['21', "21"]]), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
}; 

Blockly.Blocks["interrupts_attach2"] = {
  init: function() {
  this.setColour("#9b9b67");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ATTACHE2);
	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
}; 

Blockly.Blocks["interrupts_attach3"] = {
  init: function() {
  this.setColour("#9b9b67");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ATTACHE3);
	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_100);
  }
};

Blockly.Blocks['base_code_entree_read']={init:function(){
  var prog = window.localStorage.prog;
  if (prog != "python") {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("D2"), "TEXT");
  } else {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("D2"), "TEXT");
  }
  this.setOutput(true);
    this.setColour("#0e63a0");
   this.setHelpUrl(Blockly.Msg.HELPURL_100);
  //this.setTooltip(Blockly.Msg.code_tooltip)
  }
};

Blockly.Blocks['base_code_entree_var']={init:function(){
  var prog = window.localStorage.prog;
  if (prog != "python") {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("0x00"), "TEXT");
  } else {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("0x00"), "TEXT");
  }
  this.setOutput(true);
    this.setColour(Blockly.Blocks.tab.HUE);
  // this.setHelpUrl(Blockly.Msg.HELPURL_100);
  //this.setTooltip(Blockly.Msg.code_tooltip)
  }
};
Blockly.Blocks['base_code_entree_var1']={init:function(){
  var prog = window.localStorage.prog;
  if (prog != "python") {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("0"), "TEXT");
  } else {
    this.appendDummyInput().appendField(new Blockly.FieldTextInput("0"), "TEXT");
  }
  this.setOutput(true);
    this.setColour(Blockly.Blocks.tab.HUE);
  // this.setHelpUrl(Blockly.Msg.HELPURL_100);
  //this.setTooltip(Blockly.Msg.code_tooltip)
  }
};

Blockly.Blocks["logic_van"]={init:function(){
    var card=window.localStorage.card;
    var prog = window.localStorage.prog;
        this.setColour("#5B80A5");
       // this.setHelpUrl(Blockly.Msg.HELPURL_001);
      this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.t_ru_e, "true"], [Blockly.Msg.f_al_se, "false"], ['0', "0"],['1', "1"],[Blockly.Msg.N_ULL, "NULL"]]), "SPEED1")
    this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)
    }
};
Blockly.Blocks["logic_hilov"]={init:function(){
    var card=window.localStorage.card;
    var prog = window.localStorage.prog;
        this.setColour("#A5675B");
       // this.setHelpUrl(Blockly.Msg.HELPURL_030);
      this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HI_GH, "HIGH"], [Blockly.Msg.LO_W, "LOW"]]), "SPEED1")
    this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)
    }
};
Blockly.Blocks["logic_ONOFF"]={init:function(){
    var card=window.localStorage.card;
    var prog = window.localStorage.prog;
        this.setColour("#A5675B");
       // this.setHelpUrl(Blockly.Msg.HELPURL_030);
      this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.O_N, "1"], [Blockly.Msg.O_FF, "0"]]), "SPEED1")
    this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)
    }
};
 

Blockly.Blocks["logic_N_pin"]={init:function(){
    var card=window.localStorage.card;
    var prog = window.localStorage.prog;
        this.setColour("#A5675B");
       // this.setHelpUrl(Blockly.Msg.HELPURL_030);
	   this.appendDummyInput()
        .appendField("Wemos D1 mini") 
 
      .appendField(new Blockly.FieldDropdown([ ["TX", "1"],["RX", "3"],["D0", "16"],["D1", "5"],["D2", "4"],["D3", "0"],["D4", "2"],["D5", "14"],["D6", "12"],["D7", "13"],["D8", "15"]]), "SPEED1")
    this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)
    }
};

Blockly.Blocks["logic_N_pin2"]={init:function(){
    var card=window.localStorage.card;
    var prog = window.localStorage.prog;
        this.setColour("#A5675B");
       // this.setHelpUrl(Blockly.Msg.HELPURL_030);
	   this.appendDummyInput()
        .appendField("Wemos D1") 
 
      .appendField(new Blockly.FieldDropdown([ ["TX", "1"],["RX", "3"],["D2", "16"],["D3", "5"],["D4", "4"],["D5", "14"],["D6", "12"],["D7", "13"],["D8", "0"],["D9", "2"],["D10", "15"]]), "SPEED1")
    this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)
    }
};
Blockly.Blocks["logic_N_pin3"]={init:function(){
    var card=window.localStorage.card;
    var prog = window.localStorage.prog;
        this.setColour("#A5675B");
       // this.setHelpUrl(Blockly.Msg.HELPURL_030);
	   this.appendDummyInput()
        .appendField("NodeMcu v3") 
 
      .appendField(new Blockly.FieldDropdown([ ["TX", "1"],["RX", "3"],["D0", "16"],["D1", "5"],["D2", "4"],["D3", "0"],["D4", "2"],["D5", "14"],["D6", "12"],["D7", "13"],["D8", "15"],["S3", "10"]]), "SPEED1")
    this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)
    }
};

 Blockly.Blocks["logic_N_pinESP"]={init:function(){
    var card=window.localStorage.card;
    var prog = window.localStorage.prog;
        this.setColour("#0e63a0");
       // this.setHelpUrl(Blockly.Msg.HELPURL_030);
      this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["D13", "D13"],["D12", "D12"],["D11", "D11"],["D10", "D10"],["D9", "D9"],["D8", "D8"],["D7", "D7"],["D6", "D6"],["D5", "D5"],["D4", "D4"],["D3", "D3"],["D2", "D2"],["D1", "D1"],["D0", "D0"],["A0", "A0"]]), "SPEED1")
    this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)
    }
};





Blockly.Blocks["telegram_con"] = {
    init: function() {
    this.setColour("#007CA6");
	
this.appendDummyInput()                                                                     
.appendField("Telegram Bot - WIFI");

this.appendDummyInput()
.appendField("Name")
.appendField(new Blockly.FieldTextInput("HUAWEI-010D9X"), "TEXT1");
this.appendDummyInput()
.appendField("Pass")
.appendField(new Blockly.FieldTextInput("1234567890"), "TEXT2");
this.appendDummyInput()
.appendField("Token")
.appendField(new Blockly.FieldTextInput("5611466513:AAGYoSWZHfeC-SmuBU8N_F3HMUdHvbQC50c"), "TEXT3");
		this.appendStatementInput("DO");
	this.setInputsInline (true);
    this.setPreviousStatement (true);
    this.setNextStatement (true);
	this.setTooltip('');
	this.setHelpUrl('');
	}
};

Blockly.Blocks["telegram_con_ESP32"] = {
    init: function() {
    this.setColour("#007CA6");
	
this.appendDummyInput()                                                                     
.appendField("Telegram Bot - WIFI");

this.appendDummyInput()
.appendField("Name")
.appendField(new Blockly.FieldTextInput("HUAWEI-010D9X"), "TEXT1");
this.appendDummyInput()
.appendField("Pass")
.appendField(new Blockly.FieldTextInput("1234567890"), "TEXT2");
this.appendDummyInput()
.appendField("Token")
.appendField(new Blockly.FieldTextInput("5611466513:AAGYoSWZHfeC-SmuBU8N_F3HMUdHvbQC50c"), "TEXT3");
		this.appendStatementInput("DO");
	this.setInputsInline (true);
    this.setPreviousStatement (true);
    this.setNextStatement (true);
	this.setTooltip('');
	this.setHelpUrl('');
	}
};


 Blockly.Blocks["telegram_otvet"]={
   init:function(){
         this.setColour("#007CA6");
       this.setHelpUrl('');
        this.appendDummyInput()
      .appendField(Blockly.Msg.Telegram_Bot_w1) 
       .appendField(new Blockly.FieldTextInput("Text"), "TEXT");
    this.appendStatementInput("DO");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   }
 };

Blockly.Blocks["telegram_otvet2"] = {
    init: function() {
    this.setColour("#007CA6");
	
	this.appendDummyInput()                                                                     
        .appendField(Blockly.Msg.Telegram_Bot_w2);
	
		this.appendValueInput("text_otvet")                                                         
        .setCheck(null)
		.appendField();
	
		this.setInputsInline (true);
    this.setPreviousStatement (true);
    this.setNextStatement (true);
	
	this.setTooltip('');
	this.setHelpUrl('');
	}
};


Blockly.Blocks["telegram_otpravit"] = {
    init: function() {
    this.setColour("#007CA6");
	
	this.appendDummyInput()                                                                     
        .appendField(Blockly.Msg.Telegram_Bot_w5);
	
	this.appendValueInput("chat_id")                                                         
        .setCheck(null)
		.appendField();
	
	this.appendDummyInput()                                                                     
        .appendField(Blockly.Msg.Telegram_Bot_w4);
	
	this.appendValueInput("text_soob")                                                         
        .setCheck(null)
		.appendField();
	
		this.setInputsInline (true);
    this.setPreviousStatement (true);
    this.setNextStatement (true);
	
	this.setTooltip('');
	this.setHelpUrl('');
	}
};


Blockly.Blocks["telegram_rty"] = {
    init: function() {
    this.setColour("#007CA6");
	
	this.appendDummyInput()                                                                     
        .appendField(Blockly.Msg.Telegram_Bot_w3);
	
	this.setInputsInline(false);
    this.setOutput(true);
	
	this.setTooltip('');
	this.setHelpUrl('');
	}
};

Blockly.Blocks["telegram_rtyid"] = {
    init: function() {
    this.setColour("#007CA6");
	
	this.appendDummyInput()                                                                     
        .appendField(Blockly.Msg.Telegram_Bot_w5);
	
	this.setInputsInline(false);
    this.setOutput(true);
	
	this.setTooltip('');
	this.setHelpUrl('');
	}
};


Blockly.Blocks["telegram_otpravitii"] = {
    init: function() {
    this.setColour("#007CA6");
	
	this.appendDummyInput()                                                                     
        .appendField(Blockly.Msg.Telegram_Bot_w7);
	
	this.setInputsInline(false);
    this.setOutput(true);
	
	this.setTooltip('');
	this.setHelpUrl('');
	}
};
 
 Blockly.Blocks["Init_MAX7219_ledmatrix4x"] = {
  init: function() {
  this.setColour("#6D5B18");
  this.appendDummyInput()
    .appendField("8 x 8 MAX7219");
  this.appendValueInput("PIN_DAT", "Number")
        .setCheck("Number");
  this.appendDummyInput()
    .appendField("x");
  this.appendValueInput("PIN_CS", "Number")
        .setCheck("Number");
  this.appendDummyInput()
    .appendField("DIN - MOSI, CLK - SCK, CS -");
  this.appendValueInput("PIN_CLK", "Number")
        .setCheck("Number");
		  this.appendDummyInput()
		      .appendField(Blockly.Msg.lcd_128x64px_spi_pos) 
    .appendField(new Blockly.FieldDropdown([['0°', '0'],['90°', '1'],['180°', '2'],['270°', '3']]), "dp");  
		  this.appendDummyInput()
		      .appendField(Blockly.Msg.ledstrip_WS2812B_nameN) 
    .appendField(new Blockly.FieldDropdown([['15', '15'],['14', '14'],['13', '13'],['12', '12'],['11', '11'],['10', '10'],['9', '9'],['8', '8'],['7', '7'],['6', '6'],['5', '5'],['4', '4'],['3', '3'],['2', '2'],['1', '1'],['0', '0']]), "dp2");  
     this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_082);
  }
};

Blockly.Blocks["Init_MAX7219_ledmatrix4x_text"] = {
  init: function() {
   this.setColour("#6D5B18");
  this.appendDummyInput()
    .appendField("8 x 8 MAX7219");    
this.appendDummyInput()                                                                  
        .appendField(Blockly.Msg.LCD_Nokia_text_x);   
  this.appendValueInput("texttoprint")                                                       
        .setCheck(null);
   this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.interrupMode)
    .appendField(new Blockly.FieldDropdown([ ["<<<<", "0"],[">><<","1"]]), "size");      
    this.appendDummyInput()                                                                   
        .appendField(Blockly.Msg.ledstrip_WS2812B_delay)    
  this.appendValueInput("Y_Nokia", "Number")                                                   
        .setCheck("Number");

  
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_099);
  }
};



Blockly.Blocks['web_esp_conect']={init:function(){
    this.appendDummyInput()
        .appendField("Web - Wifi > Name")
        .appendField(new Blockly.FieldTextInput("HUAWEI-010D9X"), "name")
        .appendField("Pass")
        .appendField(new Blockly.FieldTextInput("1234567890"), "pass")
		.appendField("Title")
        .appendField(new Blockly.FieldTextInput("ESP Block"), "title");
    this.appendStatementInput("esp_statement");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(220);
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
   }
};
Blockly.Blocks['web_esp_conect_12f']={init:function(){
    this.appendDummyInput()
        .appendField("Web - Wifi > Name")
        .appendField(new Blockly.FieldTextInput("HUAWEI-010D9X"), "name")
        .appendField("Pass")
        .appendField(new Blockly.FieldTextInput("1234567890"), "pass")
		.appendField("Title")
        .appendField(new Blockly.FieldTextInput("ESP Block"), "title");
    this.appendStatementInput("esp_statement");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(220);
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
   }
};
Blockly.Blocks['web_esp_conect_wifi']={init:function(){
    this.appendDummyInput()
        .appendField("Web - Wifi < Name")
        .appendField(new Blockly.FieldTextInput("ESP 32"), "name")
        .appendField("Pass")
        .appendField(new Blockly.FieldTextInput("12345678"), "pass")
		.appendField("Title")
        .appendField(new Blockly.FieldTextInput("ESP Block"), "title");
    this.appendStatementInput("esp_statement");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(220);
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
   }
};
Blockly.Blocks['web_esp_conect_wifi_12f']={init:function(){
    this.appendDummyInput()
        .appendField("Web - Wifi < Name")
        .appendField(new Blockly.FieldTextInput("ESP 8266 12F"), "name")
        .appendField("Pass")
        .appendField(new Blockly.FieldTextInput("12345678"), "pass")
		.appendField("Title")
        .appendField(new Blockly.FieldTextInput("ESP Block"), "title");
    this.appendStatementInput("esp_statement");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(220);
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
   }
};
Blockly.Blocks['web_esp_conect_text']={init:function(){
    this.appendDummyInput()
        .appendField("Web - Text")
        .appendField(new Blockly.FieldTextInput("ESP Block"), "name");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(220);
    //this.setTooltip('help Vitaliy...');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['web_esp_conect_bott']={init:function(){
    this.appendDummyInput()
        .appendField("Web -  Button")
        .appendField(new Blockly.FieldDropdown([["1", "led1"], ["2", "led2"], ["3", "led3"], ["4", "led4"], ["5", "led5"], ["6", "led6"], ["7", "led7"], ["8", "led8"], ["9", "led9"], ["10", "led10"]]), "id")
        .appendField("Name")
        .appendField(new Blockly.FieldTextInput("ON / OFF"), "name");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(220);
    //this.setTooltip('help Vitaliy...');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks['web_esp_conect_b']={init:function(){
    this.appendDummyInput()
        .appendField("Web -  Button")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]]), "id") 
        .appendField("Name")
        .appendField(new Blockly.FieldTextInput("ON / OFF"), "name");
		this.appendStatementInput("bstatement");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(220);
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};



Blockly.Blocks['OLED_data_wifi_kit']={init:function(){
    this.appendDummyInput()
        .appendField("WiFi Kit 32 - OLED")
        .appendField("X");
    this.appendValueInput("xx_block");
    this.appendDummyInput()
        .appendField("Y");
    this.appendValueInput("yy_block");
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAT_TEXT);
    this.appendValueInput("text_block")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#B2B2B2");
    //this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};



Blockly.Blocks['touch_block']={init:function(){
    this.appendDummyInput()
        .appendField("TOUCH")
        .appendField(new Blockly.FieldNumber("3"), "touch_pin");
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#C0749A");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};


Blockly.Blocks['touch_if_block']={init:function(){
    this.appendDummyInput()
        .appendField("TOUCH")
        .appendField(new Blockly.FieldNumber("3"), "touch_pin")
        .appendField("<")
        .appendField(new Blockly.FieldNumber("40"), "touch");
    this.appendStatementInput("_statement");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#C0749A");
    //this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
   }
};

Blockly.Blocks['actuator_tone_esp']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.TonePin)
        .appendField(new Blockly.FieldNumber("16"), "tone_pin")
        .appendField(Blockly.Msg.Note)
        .appendField(new Blockly.FieldDropdown([["C", "C"], ["D", "D"], ["E", "E"], ["F", "F"], ["G", "G"], ["A", "A"], ["B", "B"]]), "tone_note")
        .appendField(Blockly.Msg.Octave)
        .appendField(new Blockly.FieldNumber("3"), "tone_okt")
        .appendField(Blockly.Msg.Duration)
        .appendField(new Blockly.FieldNumber("500"), "tone_delay");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
   }
};
Blockly.Blocks['actuator_tone_esp1']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.TonePin25)
        .appendField(new Blockly.FieldDropdown([["C", "C"], ["D", "D"], ["E", "E"], ["F", "F"], ["G", "G"], ["A", "A"], ["B", "B"]]), "tone_note")
        .appendField(Blockly.Msg.Octave)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"]]), "tone_okt")
        .appendField(Blockly.Msg.Duration)
        .appendField(new Blockly.FieldDropdown([["100", "100"], ["200", "200"], ["300", "300"], ["500", "500"], ["1000", "1000"], ["1500", "1500"]]), "tone_delay");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#AE5D74");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
   }
};
Blockly.Blocks['actuator_tone_esp2']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.TonePin23)
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["5", "5"], ["6", "6"], ["7", "7"]]), "tone_delay");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#AE5D74");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
   }
};
Blockly.Blocks['actone_esp']={init:function(){
    this.appendDummyInput()
       .appendField(Blockly.Msg.TonePin)
        .appendField(new Blockly.FieldNumber("16"), "tone_pin")
        .appendField(Blockly.Msg.Frequence)
		
        .appendField(new Blockly.FieldNumber("1000"), "tone_hz")
        .appendField(Blockly.Msg.Hz)
		.appendField(Blockly.Msg.Duration)
        .appendField(new Blockly.FieldNumber("0"), "tone_delay");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks['notone_esp']={init:function(){
    this.appendDummyInput()
       .appendField(Blockly.Msg.TonePin)
        .appendField(new Blockly.FieldNumber("16"), "tone_pin")
        .appendField(Blockly.Msg.digD8);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['notone_esp1']={init:function(){
    this.appendDummyInput()
       //.appendField(Blockly.Msg.TonePin)
        //.appendField(new Blockly.FieldNumber("16"), "tone_pin")
        .appendField(Blockly.Msg.TonePin24);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#AE5D74");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['hall_read']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.hall_read);
    this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#6D7497");
    //this.setTooltip('help Vitaliy...');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks["hardware_monitor_serial_read"]={init:function(){
        this.setColour("#444444");
       // this.setHelpUrl(Blockly.Msg.HELPURL_039);
	   this.appendDummyInput().appendField("Hardware monitor ");
	   this.appendDummyInput()
	   .appendField(new Blockly.FieldDropdown([["CPU-temp", "0"],["GPU-temp","1"],["Mother-temp","2"],["Max-HDD-temp","3"],["CPU-load","4"],["GPU-load","5"],["RAM-use","6"],["GPU-memory-use","7"],["Max-FAN","8"],["Min-FAN","9"],["Max-TEMP","10"],["Min-TEMP","11"],["Manual-FAN","12"],["Manual-COLOR","13"],["Fan-Ctrl","14"],["Color-Ctrl","15"],["Bright-Ctrl","16"],["LOG-interval","17"],["Temp-Source","18"]]), "id"); 
        this.setInputsInline(true);
        this.setOutput(true, "String");
        //this.setTooltip(Blockly.Msg.SSERIAL_Read_tooltip)
    }
};

 Blockly.Blocks["hardware_monitor_serial_init"]={init:function(){
   // var card=window.localStorage.card;
        this.setColour("#444444");
		this.appendDummyInput().appendField(Blockly.Msg.Hardware_monitor);
    // this.setHelpUrl(Blockly.Msg.HELPURL_034);
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);

        //this.setTooltip(Blockly.Msg.Serial_Init_tooltip)
    }
};

Blockly.Blocks["soft_write_ttl_uart_g"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL_101);
        this.setColour("#10760E");
        this.appendValueInput("CONTENT", "String")
		.appendField(Blockly.Msg.base_define_ttl_uart_top_nom);
		this.appendDummyInput()
		.appendField(Blockly.Msg.base_define_ttl_uart_top_nom_var_g)
		.appendField(new Blockly.FieldTextInput("0"), "TEXT1"); 
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.SSERIAL_Write_tooltip)
    }
};


Blockly.Blocks['dwin_box_ttl']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.Dwin_box);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip(Blockly.Msg.Dwin_box_DWIN_SET);
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['dwin_box_none']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.Dwin_box_none);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['dwin_box_data']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.Dwin_box_data);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['dwin_box_icon']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.dwin_box_icon)
        .appendField(new Blockly.FieldTextInput("1"), "icon_text")
        .appendField("x")
        .appendField(new Blockly.FieldTextInput("0"), "x_text")
        .appendField("y")
        .appendField(new Blockly.FieldTextInput("0"), "y_text");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip('ID: 1 - 49');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['dwin_box_text']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.dwin_box_text)
        .appendField(new Blockly.FieldTextInput("ESP Block"), "id_text")
        .appendField("x")
        .appendField(new Blockly.FieldTextInput("0"), "x_text")
        .appendField("y")
        .appendField(new Blockly.FieldTextInput("0"), "y_text")
        .appendField("h")
        .appendField(new Blockly.FieldTextInput("5"), "h_text")
        .appendField(Blockly.Msg.dwin_box_color)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.dwin_box_color1n, "0"], [Blockly.Msg.dwin_box_color2n, "1"], [Blockly.Msg.dwin_box_color3n, "2"], [Blockly.Msg.dwin_box_color4n, "3"], [Blockly.Msg.dwin_box_color5n, "4"], [Blockly.Msg.dwin_box_color6n, "5"], [Blockly.Msg.dwin_box_color7n, "6"], [Blockly.Msg.dwin_box_color8n, "7"]]), "color_dropdown");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip('h: 3 - 8');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
  
 Blockly.Blocks['dwin_box_bot']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.dwin_box_bottn)
        .appendField(new Blockly.FieldTextInput("1"), "idn_text")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("1"), "id_text")
        .appendField("x")
        .appendField(new Blockly.FieldTextInput("0"), "x_text")
        .appendField("y")
        .appendField(new Blockly.FieldTextInput("0"), "y_text")
        .appendField(Blockly.Msg.dwin_box_text2)
        .appendField(new Blockly.FieldTextInput("OK"), "text_text")
        .appendField(Blockly.Msg.dwin_box_color)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.dwin_box_color1n, "0"], [Blockly.Msg.dwin_box_color2n, "1"], [Blockly.Msg.dwin_box_color3n, "2"], [Blockly.Msg.dwin_box_color4n, "3"], [Blockly.Msg.dwin_box_color5n, "4"], [Blockly.Msg.dwin_box_color6n, "5"], [Blockly.Msg.dwin_box_color7n, "6"], [Blockly.Msg.dwin_box_color8n, "7"]]), "color_dropdown")
    	.appendField(Blockly.Msg.dwin_box_bbb)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.dwin_box_b1n, "0"], [Blockly.Msg.dwin_box_b2n, "1"]]), "bb_dropdown");   
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip('№: 0 - 50, ID: 0 - 18');
  //  this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks['dwin_box_bot_id']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.dwin_box_bottn)
        .appendField(new Blockly.FieldTextInput("1"), "idn_text");
	this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#00929f");
    this.setTooltip('№: 0 - 50');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

 Blockly.Blocks['dwin_box_bot1']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.dwin_box_bottn)
        .appendField(new Blockly.FieldTextInput("1"), "idn_text")
        .appendField("ID")
        .appendField(new Blockly.FieldTextInput("1"), "id_text")
        .appendField("x")
        .appendField(new Blockly.FieldTextInput("0"), "x_text")
        .appendField("y")
        .appendField(new Blockly.FieldTextInput("0"), "y_text")
        .appendField(Blockly.Msg.dwin_box_text2)
        .appendField(new Blockly.FieldTextInput("OK"), "text_text")
        .appendField(Blockly.Msg.dwin_box_color)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.dwin_box_color1n, "0"], [Blockly.Msg.dwin_box_color2n, "1"], [Blockly.Msg.dwin_box_color3n, "2"], [Blockly.Msg.dwin_box_color4n, "3"], [Blockly.Msg.dwin_box_color5n, "4"], [Blockly.Msg.dwin_box_color6n, "5"], [Blockly.Msg.dwin_box_color7n, "6"], [Blockly.Msg.dwin_box_color8n, "7"]]), "color_dropdown")
    	.appendField(Blockly.Msg.dwin_box_bbb)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.dwin_box_b1n, "0"], [Blockly.Msg.dwin_box_b2n, "1"]]), "bb_dropdown");   
    this.appendStatementInput("bot_statement");
	this.appendStatementInput("bot_statement1");
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip('№: 0 - 50, ID: 0 - 18');
  //  this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
 Blockly.Blocks['dwin_box_bot2']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.dwin_box_bottn)
        .appendField(new Blockly.FieldTextInput("1"), "idn_text")
        .appendField("x")
        .appendField(new Blockly.FieldTextInput("0"), "x_text")
        .appendField("y")
        .appendField(new Blockly.FieldTextInput("0"), "y_text")
        .appendField("- ID")
        .appendField(new Blockly.FieldTextInput("1"), "id_text1")
        .appendField(new Blockly.FieldTextInput("ON"), "text_text1")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.dwin_box_color4n, "3"],[Blockly.Msg.dwin_box_color5n, "4"], [Blockly.Msg.dwin_box_color3n, "2"], [Blockly.Msg.dwin_box_color1n, "0"], [Blockly.Msg.dwin_box_color2n, "1"],  [Blockly.Msg.dwin_box_color6n, "5"], [Blockly.Msg.dwin_box_color7n, "6"], [Blockly.Msg.dwin_box_color8n, "7"]]), "color_dropdown1")
 		.appendField(" /")
		.appendField("ID")
        .appendField(new Blockly.FieldTextInput("2"), "id_text2")
        .appendField(new Blockly.FieldTextInput("OFF"), "text_text2")		
       .appendField(new Blockly.FieldDropdown([[Blockly.Msg.dwin_box_color4n, "3"],[Blockly.Msg.dwin_box_color5n, "4"], [Blockly.Msg.dwin_box_color1n, "0"], [Blockly.Msg.dwin_box_color2n, "1"], [Blockly.Msg.dwin_box_color3n, "2"],  [Blockly.Msg.dwin_box_color6n, "5"], [Blockly.Msg.dwin_box_color7n, "6"], [Blockly.Msg.dwin_box_color8n, "7"]]), "color_dropdown2")
  
    this.appendStatementInput("bot_statement");
	this.appendStatementInput("bot_statement1");
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip('№: 0 - 50, ID: 0 - 18');
  //  this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks['dwin_box_var']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.dwin_box_var);
    this.appendValueInput("var_block")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("x")
        .appendField(new Blockly.FieldTextInput("0"), "x_text")
        .appendField("y")
        .appendField(new Blockly.FieldTextInput("0"), "y_text")
        .appendField("h")
        .appendField(new Blockly.FieldTextInput("5"), "text_text")
        .appendField(Blockly.Msg.dwin_box_color)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.dwin_box_color1n, "0"], [Blockly.Msg.dwin_box_color2n, "1"], [Blockly.Msg.dwin_box_color3n, "2"], [Blockly.Msg.dwin_box_color4n, "3"], [Blockly.Msg.dwin_box_color5n, "4"], [Blockly.Msg.dwin_box_color6n, "5"], [Blockly.Msg.dwin_box_color7n, "6"], [Blockly.Msg.dwin_box_color8n, "7"]]), "color_dropdown")
    	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip('h: 3 - 8');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['dwin_box_varsl']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.dwin_box_varsl);
    this.appendValueInput("var_block")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("x")
        .appendField(new Blockly.FieldTextInput("0"), "x_text")
        .appendField("y")
        .appendField(new Blockly.FieldTextInput("0"), "y_text")
        .appendField(Blockly.Msg.dwin_box_color)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.dwin_box_color2n, "0"], [Blockly.Msg.dwin_box_color3n, "1"], [Blockly.Msg.dwin_box_color1n, "2"]]), "color_dropdown")
    	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip('R: 0 - 100');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};


Blockly.Blocks['dwin_box_led']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.dwin_box_led);
    this.appendValueInput("var_block")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip('0 - 64');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['dwin_box_zum']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.dwin_box_zum);
    this.appendValueInput("var_block")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip('0 - 255');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
 

 
Blockly.Blocks["ledi_ws2812"] = {
  init: function() {
  this.setColour("#484E6E");
  this.appendDummyInput()
        .appendField("WS")
        .appendField(new Blockly.FieldDropdown([["2812", "0"], ["2813", "1"]]), "ws")
        .appendField("Pin")
        .appendField(new Blockly.FieldTextInput("2"), "pin")
        .appendField("Led")
        .appendField(new Blockly.FieldTextInput("60"), "led")
        .appendField(Blockly.Msg.ledstrip_WS9)
        .appendField(new Blockly.FieldTextInput("0"), "ledon")
        .appendField(Blockly.Msg.ledstrip_WS10)
        .appendField(new Blockly.FieldTextInput("30"), "ledoff")
        .appendField(Blockly.Msg.ledstrip_WS11)
        .appendField(new Blockly.FieldColour("#ff0000"), "RGBCOLOR")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ledstrip_WS1n,'6'],[Blockly.Msg.ledstrip_WS3n,'7'],[Blockly.Msg.ledstrip_WS4n,'8'],[Blockly.Msg.ledstrip_WS5n,'10'],[Blockly.Msg.ledstrip_WS6n,'11'],[Blockly.Msg.ledstrip_WS7n,'12'],[Blockly.Msg.ledstrip_WS8n,'13']]), "RE_NUMBER")
        .appendField(Blockly.Msg.ledstrip_WS12)
        .appendField(new Blockly.FieldTextInput("30"), "delayled");
		
   this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_070);
  }
};
Blockly.Blocks["ledi_ws2812x2"] = {
  init: function() {
  this.setColour("#484E6E");
  this.appendDummyInput()
        .appendField("WS")
        .appendField(new Blockly.FieldDropdown([["2812", "0"], ["2813", "1"]]), "ws")
        .appendField("Pin")
        .appendField(new Blockly.FieldTextInput("2"), "pin")
		.appendField(new Blockly.FieldTextInput("3"), "pin1")
        .appendField(" Led")
        .appendField(new Blockly.FieldTextInput("60"), "led")
        .appendField(Blockly.Msg.ledstrip_WS9)
        .appendField(new Blockly.FieldTextInput("0"), "ledon")
        .appendField(Blockly.Msg.ledstrip_WS10)
        .appendField(new Blockly.FieldTextInput("30"), "ledoff")
        .appendField(Blockly.Msg.ledstrip_WS11)
        .appendField(new Blockly.FieldColour("#ff0000"), "RGBCOLOR")
		.appendField(new Blockly.FieldColour("#0000ff"), "RGBCOLOR1")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ledstrip_WS1n,'6'],[Blockly.Msg.ledstrip_WS3n,'7'],[Blockly.Msg.ledstrip_WS4n,'8'],[Blockly.Msg.ledstrip_WS5n,'10'],[Blockly.Msg.ledstrip_WS6n,'11'],[Blockly.Msg.ledstrip_WS7n,'12'],[Blockly.Msg.ledstrip_WS8n,'13']]), "RE_NUMBER")
        .appendField(Blockly.Msg.ledstrip_WS12)
        .appendField(new Blockly.FieldTextInput("30"), "delayled");
		
   this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_070);
  }
};

Blockly.Blocks["ledi_ws2812x4"] = {
  init: function() {
  this.setColour("#484E6E");
  this.appendDummyInput()
        .appendField("WS")
        .appendField(new Blockly.FieldDropdown([["2812", "0"], ["2813", "1"]]), "ws")
        .appendField("Pin")
        .appendField(new Blockly.FieldTextInput("2"), "pin")
		.appendField(new Blockly.FieldTextInput("3"), "pin1")
		.appendField(new Blockly.FieldTextInput("4"), "pin2")
		.appendField(new Blockly.FieldTextInput("5"), "pin3")
        .appendField(" Led")
        .appendField(new Blockly.FieldTextInput("60"), "led")
        .appendField(Blockly.Msg.ledstrip_WS9)
        .appendField(new Blockly.FieldTextInput("0"), "ledon")
        .appendField(Blockly.Msg.ledstrip_WS10)
        .appendField(new Blockly.FieldTextInput("30"), "ledoff")
        .appendField(Blockly.Msg.ledstrip_WS11)
        .appendField(new Blockly.FieldColour("#ff0000"), "RGBCOLOR")
		.appendField(new Blockly.FieldColour("#0000ff"), "RGBCOLOR1")
		.appendField(new Blockly.FieldColour("#00ff00"), "RGBCOLOR2")
		.appendField(new Blockly.FieldColour("#ff00ff"), "RGBCOLOR3")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ledstrip_WS1n,'6'],[Blockly.Msg.ledstrip_WS3n,'7'],[Blockly.Msg.ledstrip_WS4n,'8'],[Blockly.Msg.ledstrip_WS5n,'10'],[Blockly.Msg.ledstrip_WS6n,'11'],[Blockly.Msg.ledstrip_WS7n,'12'],[Blockly.Msg.ledstrip_WS8n,'13']]), "RE_NUMBER")
        .appendField(Blockly.Msg.ledstrip_WS12)
        .appendField(new Blockly.FieldTextInput("30"), "delayled");
		
   this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_070);
  }
};



Blockly.Blocks["soft_write_ttl_uart_led"]={init:function(){
      // this.setHelpUrl(Blockly.Msg.HELPURL_101);
        this.setColour("#10760E");
        this.appendValueInput("CONTENT", "String")
		.appendField(Blockly.Msg.dwinledonof); 
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.SSERIAL_Write_tooltip)
    }
};
Blockly.Blocks["soft_write_ttl_uart_reset"]={init:function(){
      // this.setHelpUrl(Blockly.Msg.HELPURL_101);
        this.setColour("#10760E");
		this.appendDummyInput()
        .appendField(Blockly.Msg.dwinreset);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.SSERIAL_Write_tooltip)
    }
};




Blockly.Blocks["soft_write_ttl_uart2"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL_101);
        this.setColour("#10760E");
        this.appendValueInput("CONTENT", "String")
		.appendField(Blockly.Msg.base_define_ttl_uart_top_nom);
		this.appendDummyInput()
		.appendField(Blockly.Msg.base_define_ttl_uart_top_nom_var)
		.appendField(new Blockly.FieldTextInput("5"), "TEXT1")
		.appendField(new Blockly.FieldTextInput("0"), "TEXT2")
		.appendField(new Blockly.FieldTextInput("0"), "TEXT3")
		.appendField(new Blockly.FieldTextInput("0"), "TEXT4"); 
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.SSERIAL_Write_tooltip)
    }
};

goog.require("Blockly.Blocks");
goog.provide("Blockly.Blocks.controls");
goog.provide("Blockly.Blocks.procedures");
goog.provide("Blockly.Blocks.math");
goog.provide("Blockly.Blocks.variables");
goog.provide("Blockly.Blocks.texts");
goog.provide("Blockly.Blocks.tab");

Blockly.Blocks.controls.HUE = "#5B80A5";
Blockly.Blocks.math.HUE = "#5B67A5";
Blockly.Blocks.procedures.HUE = "#995BA5";
Blockly.Blocks.texts.HUE = "#5BA58C";
Blockly.Blocks.variables.HUE = "#A55B80";
Blockly.Blocks.tab.HUE = "#A55B80";

// controle
Blockly.Blocks["controls_if"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL_001);
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendValueInput("IF0").setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
        this.appendStatementInput("DO0").appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(["controls_if_elseif", "controls_if_else"]));
        var thisBlock = this;
        this.setTooltip(function() {
            if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
            else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
            else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
            else if (thisBlock.elseifCount_ && thisBlock.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
            return ""
        });
        this.elseifCount_ = 0;
        this.elseCount_ = 0
    },
    mutationToDom: function() {
        if (!this.elseifCount_ && !this.elseCount_) return null;
        var container = document.createElement("mutation");
        if (this.elseifCount_) container.setAttribute("elseif", this.elseifCount_);
        if (this.elseCount_) container.setAttribute("else", 1);
        return container
    },
    domToMutation: function(xmlElement) {
        this.elseifCount_ = parseInt(xmlElement.getAttribute("elseif"), 10) || 0;
        this.elseCount_ = parseInt(xmlElement.getAttribute("else"), 10) || 0;
        for (var i = 1; i <= this.elseifCount_; i++) {
            this.appendValueInput("IF" + i).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
            this.appendStatementInput("DO" + i).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN)
        }
        if (this.elseCount_) this.appendStatementInput("ELSE").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock( "controls_if_if");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.elseifCount_; i++) {
            var elseifBlock = workspace.newBlock( "controls_if_elseif");
            elseifBlock.initSvg();
            connection.connect(elseifBlock.previousConnection);
            connection = elseifBlock.nextConnection
        }
        if (this.elseCount_) {
            var elseBlock = workspace.newBlock( "controls_if_else");
            elseBlock.initSvg();
            connection.connect(elseBlock.previousConnection)
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        if (this.elseCount_) this.removeInput("ELSE");
        this.elseCount_ = 0;
        for (var i = this.elseifCount_; i > 0; i--) {
            this.removeInput("IF" + i);
            this.removeInput("DO" + i)
        }
        this.elseifCount_ = 0;
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "controls_if_elseif":
                    this.elseifCount_++;
                    var ifInput = this.appendValueInput("IF" + this.elseifCount_).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
                    var doInput = this.appendStatementInput("DO" + this.elseifCount_);
                    doInput.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                case "controls_if_else":
                    this.elseCount_++;
                    var elseInput = this.appendStatementInput("ELSE");
                    elseInput.appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
                    if (clauseBlock.statementConnection_) elseInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    },
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "controls_if_elseif":
                    var inputIf = this.getInput("IF" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case "controls_if_else":
                    var inputDo = this.getInput("ELSE");
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    }
};
Blockly.Blocks["controls_if_if"] = {
    init: function() {
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF);
        this.appendStatementInput("STACK");
        this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["controls_if_elseif"] = {
    init: function() {
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["controls_if_else"] = {
    init: function() {
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE);
        this.setPreviousStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["controls_switch"] = {
    init: function() {
        //this.setHelpUrl(Blockly.Msg.HELPURL_001);
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), "SWVAR");
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
        this.contextMenuType_ = "variables_set";
        this.appendValueInput("CASE0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.appendStatementInput("DO0").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(["controls_case_break", "controls_case_default"]));
        var thisBlock = this;
        this.setTooltip(function() {
            if (!thisBlock.casebreakCount_ && !thisBlock.defaultCount_) return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1;
            else if (!thisBlock.casebreakCount_ && thisBlock.defaultCount_) return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2;
            else if (thisBlock.casebreakCount_ && !thisBlock.defaultCount_) return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3;
            else if (thisBlock.casebreakCount_ && thisBlock.defaultCount_) return Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4;
            return ""
        });
        this.casebreakCount_ = 0;
        this.defaultCount_ = 0
    },
    getVarType: function(varName) {
        return Blockly.Types.NUMBER
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("SWVAR"))) this.setFieldValue(newName, "SWVAR")
    },
    mutationToDom: function() {
        if (!this.casebreakCount_ && !this.defaultCount_) return null;
        var container = document.createElement("mutation");
        if (this.casebreakCount_) container.setAttribute("casebreak", this.casebreakCount_);
        if (this.defaultCount_) container.setAttribute("default", 1);
        return container
    },
    domToMutation: function(xmlElement) {
        this.casebreakCount_ = parseInt(xmlElement.getAttribute("casebreak"), 10);
        this.defaultCount_ = parseInt(xmlElement.getAttribute("default"), 10);
        for (var i = 1; i <= this.casebreakCount_; i++) {
            this.appendValueInput("CASE" + i).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
            this.appendStatementInput("DO" + i).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN)
        }
        if (this.defaultCount_) this.appendStatementInput("DEFAULT")
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock( "controls_switch_var");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 1; i <= this.casebreakCount_; i++) {
            var casebreakBlock = workspace.newBlock( "controls_case_break");
            casebreakBlock.initSvg();
            connection.connect(casebreakBlock.previousConnection);
            connection = casebreakBlock.nextConnection
        }
        if (this.defaultCount_) {
            var defaultBlock = workspace.newBlock( "controls_case_default");
            defaultBlock.initSvg();
            connection.connect(defaultBlock.previousConnection)
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        if (this.defaultCount_) this.removeInput("DEFAULT");
        this.defaultCount_ = 0;
        for (var i = this.casebreakCount_; i > 0; i--) {
            this.removeInput("CASE" + i);
            this.removeInput("DO" + i)
        }
        this.casebreakCount_ = 0;
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "controls_case_break":
                    this.casebreakCount_++;
                    var ifInput = this.appendValueInput("CASE" + this.casebreakCount_).setAlign(Blockly.ALIGN_RIGHT).setCheck("Number").appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
                    var doInput = this.appendStatementInput("DO" + this.casebreakCount_);
                    doInput.setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                    if (clauseBlock.valueConnection_) ifInput.connection.connect(clauseBlock.valueConnection_);
                    if (clauseBlock.statementConnection_) doInput.connection.connect(clauseBlock.statementConnection_);
                    break;
                   case "controls_case_default":
                      this.defaultCount_++;
					  var defaultInput = this.appendStatementInput("DEFAULT")
					  .setAlign(Blockly.ALIGN_RIGHT)
					 .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
					   
                      defaultInput;
                     if (clauseBlock.statementConnection_) defaultInput.connection.connect(clauseBlock.statementConnection_);
                      break;
                 default:
                 throw "Unknown block type.";
			    
              
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    },
    saveConnections: function(containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 1;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case "controls_case_break":
                    var inputIf = this.getInput("CASE" + i);
                    var inputDo = this.getInput("DO" + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case "controls_case_default":
                    var inputDo = this.getInput("DEFAULT");
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw "Unknown block type.";
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock()
        }
    }
};
Blockly.Blocks["controls_switch_var"] = {
    init: function() {
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR);
        this.appendStatementInput("STACK");
        this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["controls_case_break"] = {
    init: function() {
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["controls_case_default"] = {
    init: function() {
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT);
        this.setPreviousStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["controls_repeat_ext"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.CONTROLS_REPEAT_TITLE,
            args0: [{
                type: "input_value",
                name: "TIMES",
                check: "Number"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.controls.HUE,
            tooltip: Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL
        });
        this.appendStatementInput("DO").appendField("")
    }
};
Blockly.Blocks["controls_whileUntil"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, "WHILE"],
            [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, "UNTIL"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendValueInput("BOOL").setCheck("Boolean").appendField(new Blockly.FieldDropdown(OPERATORS), "MODE");
        this.appendStatementInput("DO").appendField("");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue("MODE");
            var TOOLTIPS = {
                WHILE: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
                UNTIL: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
            };
            return TOOLTIPS[op]
        })
    }
};
Blockly.Blocks["controls_flow_statements"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK, "BREAK"],
            [Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE, "CONTINUE"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.controls.HUE);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(OPERATORS), "FLOW");
        this.setPreviousStatement(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue("FLOW");
            var TOOLTIPS = {
                BREAK: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK,
                CONTINUE: Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE
            };
            return TOOLTIPS[op]
        })
    },
    onchange: function() {
        var legal = false;
        var block = this;
        do {
            if (block.type == "controls_repeat" || block.type == "controls_repeat_ext" || block.type == "controls_forEach" || block.type == "controls_for" || block.type == "controls_whileUntil" || block.type == "base_loop") {
                legal = true;
                break
            }
            block = block.getSurroundParent()
        } while (block);
        if (legal) this.setWarningText(null);
        else this.setWarningText(Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING)
    }
};
Blockly.Blocks["inout_onoff"] = {
    init: function() {
        this.setColour("#5B80A5");
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), "BOOL");
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP)
    }
};
Blockly.Blocks["logic_operation"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL_003);
        this.setColour(Blockly.Blocks.controls.HUE);
        this.setOutput(true, "Boolean");
        this.appendValueInput("A");
        this.appendValueInput("B").appendField(new Blockly.FieldDropdown(Blockly.Msg.LOGIC_OPERATOR), "OP");
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var op = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                "and": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND,
                "xor": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_xor,
                "shiftL": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftL,
                "shiftR": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftR,
                "or": Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR
            };
            return TOOLTIPS[op]
        })
    }
};
Blockly.Blocks["controls_for"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.CONTROLS_FOR_TITLE,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: null
            }, {
                type: "input_value",
                name: "FROM",
                check: "Number",
                align: "RIGHT"
            }, {
                type: "input_value",
                name: "TO",
                check: "Number",
                align: "RIGHT"
            }, {
                type: "input_value",
                name: "BY",
                check: "Number",
                align: "RIGHT"
            }],
            inputsInline: true,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.controls.HUE,
            helpUrl: Blockly.Msg.HELPURL
        });
        this.appendStatementInput("DO");
        var thisBlock = this;
        this.setTooltip(function() {
            return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace("%1", thisBlock.getFieldValue("VAR"))
        })
    },
    customContextMenu: function(options) {
        if (!this.isCollapsed()) {
            var option = {
                enabled: true
            };
            var name = this.getFieldValue("VAR");
            option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", name);
            var xmlField = goog.dom.createDom("field", null, name);
            xmlField.setAttribute("name", "VAR");
            var xmlBlock = goog.dom.createDom("block", null, xmlField);
            xmlBlock.setAttribute("type", "variables_get");
            option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
            options.push(option)
        }
    },
    getVarType: function(varName) {
        return Blockly.Types.NUMBER
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
    }
};
Blockly.Blocks["logic_negate"] = {
     init: function() {
       this.jsonInit({
              message0: Blockly.Msg.LOGIC_NEGATE_TITLE,
          args0: [{
               type: "input_value",
                name: "BOOL",
               check: "Boolean"
            }],
             output: "Boolean",
           colour: Blockly.Blocks.controls.HUE,
           //tooltip: Blockly.Msg.LOGIC_NEGATE_TOOLTIP,
            //helpUrl: Blockly.Msg.HELPURL_001
         })
     }
};
Blockly.Blocks["logic_null"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.LOGIC_NULL,
            output: null,
            colour: Blockly.Blocks.controls.HUE,
            tooltip: Blockly.Msg.LOGIC_NULL_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL
        })
    }
};
Blockly.Blocks["controls_forEach"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.CONTROLS_FOREACH_TITLE,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: null
            }, {
                type: "input_value",
                name: "LIST",
                check: "Array"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.controls.HUE,
            helpUrl: Blockly.Msg.HELPURL
        });
        this.appendStatementInput("DO");
        var thisBlock = this;
        this.setTooltip(function() {
            return Blockly.Msg.CONTROLS_FOREACH_TOOLTIP.replace("%1", thisBlock.getFieldValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
    }
};
// variable
/*
Blockly.Blocks["math_change"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.MATH_CHANGE_TITLE,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: Blockly.Msg.MATH_CHANGE_TITLE_ITEM
            }, {
                type: "input_value",
                name: "DELTA",
                check: "Number"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.variables.HUE,
            helpUrl: Blockly.Msg.HELPURL
        });
        var e = this;
        this.setTooltip(function() {
            return Blockly.Msg.MATH_CHANGE_TOOLTIP.replace("%1", e.getFieldValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(e, l) {
        Blockly.Names.equals(e, this.getFieldValue("VAR")) && this.setFieldValue(l, "VAR")
    },
    customContextMenu: function(e) {
        if (!this.isCollapsed()) {
            var l = {
                    enabled: !0
                },
                t = this.getFieldValue("VAR");
            l.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", t);
            var a = goog.dom.createDom("field", null, t);
            a.setAttribute("name", "VAR");
            var o = goog.dom.createDom("block", null, a);
            o.setAttribute("type", "variables_get"), l.callback = Blockly.ContextMenu.callbackFactory(this, o), e.push(l)
        }
    },
    getVarType: function(e) {
        return Blockly.Types.NUMBER
    }
};*/
Blockly.Blocks["variables_get"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL_028);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), "VAR");
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET
    },
    contextMenuType_: "variables_set",
    customContextMenu: function(options) {
        var option = {
            enabled: true
        };
        var name = this.getFieldValue("VAR");
        option.text = this.contextMenuMsg_.replace("%1", name);
        var xmlField = goog.dom.createDom("field", null, name);
        xmlField.setAttribute("name", "VAR");
        var xmlBlock = goog.dom.createDom("block", null, xmlField);
        xmlBlock.setAttribute("type", this.contextMenuType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option)
    },
    getBlockType: function() {
        return [Blockly.Types.UNDEF, this.getFieldValue("VAR")]
    },
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};

Blockly.Blocks["variables_set"] = {
    init: function() {
        this.appendValueInput("VALUE")
            .appendField(Blockly.Msg.VARIABLES_SET)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
            .appendField(Blockly.Msg._AT);
        this.setHelpUrl(Blockly.Msg.HELPURL_027);
        this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
    },
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks['variables_set_init'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .appendField(Blockly.Msg.var_set_init)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
            .appendField(Blockly.Msg.VARIABLES_AS)
            .appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), 'VARIABLE_SETTYPE_TYPE')
            .appendField(Blockly.Msg._AT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL_026);
        this.setTooltip(Blockly.Msg.var_set_init_tooltip);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET
    },
    contextMenuType_: 'variables_set',
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
/*
Blockly.Blocks["base_define_const"] = {
    init: function() {
        this.appendValueInput("TEXT2")
            .appendField(Blockly.Msg.base_def_const)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
            .appendField(Blockly.Msg.base_define_const);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setTooltip(Blockly.Msg.base_define_const_tooltip);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
    },
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
*/
/*Blockly.Blocks['variables_const'] = {
    init: function() {
        this.appendValueInput("VAL_CONST")
            .appendField(Blockly.Msg.ARDUINO_VAR_CONST)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR')
            .appendField(Blockly.Msg.VARIABLES_AS)
            .appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), 'VARIABLE_SETTYPE_TYPE')
            .appendField(Blockly.Msg._AT);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.ARDUINO_VAR_CONST_tooltip);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
    },
    contextMenuType_: 'variables_get',
    customContextMenu: Blockly.Blocks['variables_get'].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};*/
// texte
Blockly.Blocks["text"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL_011);
        this.setColour(Blockly.Blocks.texts.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQffBQoVHw647ilMAAAAJmlUWHRDb21tZW50AAAAAABDcmVhdGVkIHdpdGggR0lNUCBvbiBhIE1hY5XkX1sAAAJ7SURBVEjHtZZNSFRRGIbfe/E6FjU1Vs6kwxBkiRr9EBG6MKyEWkRQFrYIoY2LoJUrFwVBP9SiIFq0NKIgKKJNkCTCBDYLhQLLKLCgBg0SorI/4W0xc++cc+aenxa9q3vOfXj5zved75wDWMQUr/EyfTiJSzjE+6yzg/s4S5Lc6WTbwWmS5EEz1sjbDDXC5Q4rCzXJBj3YS1knjLa7OSPRF+OxJIcV2yK7taYJnqWqY3FgE8cV7AxXGFIwotBXuCYOXM/nElZguyEFGSWIKXbGgxvLdQ11krX/YHueS+PBnBJtl7Fgq5iX6F4dmJSyVeRmo22C9yTbbj16QbLdZtm3A5Jtjx7slMA9FtuWckeW1KcHkxwVwHMWWzkNdwwFZr8ATjJjMd4rJa3ZVN9x1+YFuIyPBHrIhO4XwLfMWYy3SNVoi6d8gD4OCzMv8clyOu4SvsfwUWuMNLYKM0+9n+ajHOLWmsV3vTEQCDOvLPHWY4MwynuL8VgNgCzEHrvBowBqAUxjFIWq+D38EkbX2VGm3+MJ8t6CuLgu6lXkIfm+41rlPJHVL+xpozFJ3hUvRzZUndayHjNVybFZR3BcGAVIGekeDIYxbJL6Pk5TbIoizhpTEe1tH8BnzFlibsO6Si6QsK5xe8nYd0CjiDGPGSu9smT8xQFNR19/sODyePEB7xseWLmv0TZexE1HYwBj1iyL/yfwwkInQuN3eGZBi0LrfcCEhS5USr3DuH2Gle5rVh5Ush5Kr03lcqT5hOYBg7F6u/OUxrbd6dFoeouwlZcU7CpXa0/mHE8rPXursjav+gZGI9IIEOAHXnvzlmuqBhlkESDAb7zx5vD/9RdeRqsZWptG5gAAAABJRU5ErkJggg==", 12, 12))
            .appendField(new Blockly.FieldTextInput(""), "TEXT")
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAkCAQAAABY3hDnAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQffBQoVHjaJ96CTAAACc0lEQVRIx7WWz0tUURTHv28wHadMGquZfmCFlpUwElJT0gzpGBQhSrgoiIQ2QUF/QIuCIIsKEtoHUtQiimgVPGjTwn5QVJAIGbVQ0U21i+lF3xYz87z3ee89r0VndQ983vede849517gP5mnOsxgK+oRIMAM5r3f7k+ZRgcaESDAAua8sg1r5V2qNs8LbLWKruYYdbvGHSawSLMNG2U7OW2kz0XBHO02YNjbtJU+rYJJPnEIf2G7JpvgOF22exEt0G23NeEugX7MBgBIAMgLJ6ebGxVvvUDvxeaacFlAc+hWvIxAZ3CgJizbSdaF6yaRHuKKuMIpLAvXCyK9Bc0V4R8x0HS4nhXpMv5UhN/EQBdb/ysmxSy3AAnAm8SogDaA4XCZxZgonK7l+AZ8J/odgeLdwYPYQ471HHEc+vdcF+m+o5xz8EVtbDKFAkrYBOAXgBOK0gcc8WYioSSRRx+2V+kS1F/v8V7b93BGiWCKG4QdD0T3ZznHrENBcT/hm5BLdRYHrs5bjqzi+d5PZ7xJ7Ffcd44m4k6tGF1CIvQJfdgV8ZCyforPQiL60RauX+CVPYJ27TD1C/Fm+VahR1xn+r4CPqwMbofwZYV+xpV28Jh2V3cIsiWtGj128KD1cjTRu7SkXbGDvZqskAbmNFnfmgYOa7LP2eKULUbmifl5wxRHNXCCWefQOqvRU9xmBnv48R9kO/kyEm2bCVvDm5Gx53OVVbSZFyP0hHFE8fiSaXrJXjL2LpnD45aS8WrkQdXnLNipOI/GCrpWachb9hRU6Sb6IX2P7lcRB6t13RfrEstXO/KQjCb5iOfZGPN2TPC6vDPgL0FuY1v91jVtAAAAAElFTkSuQmCC", 12, 12));
        this.setOutput(true, "String");
        this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP)
    }
};
Blockly.Blocks["text_char"] = {
    init: function() {
		this.setHelpUrl(Blockly.Msg.HELPURL_012);
        this.setColour(Blockly.Blocks.texts.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAQAAAAnDwIWAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4JGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTYtMDMtMjlUMTU6MDc6MzcrMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNi0wMy0yOVQxNToxNDo0MiswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTYtMDMtMjlUMTU6MTQ6NDIrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjE8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6YjRlNmRhNzEtOThkYi1kZDQ2LWEwOGQtZGYxMGQ1ZWY5YjY1PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmI0ZTZkYTcxLTk4ZGItZGQ0Ni1hMDhkLWRmMTBkNWVmOWI2NTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmI0ZTZkYTcxLTk4ZGItZGQ0Ni1hMDhkLWRmMTBkNWVmOWI2NTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpiNGU2ZGE3MS05OGRiLWRkNDYtYTA4ZC1kZjEwZDVlZjliNjU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTYtMDMtMjlUMTU6MDc6MzcrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MzY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PpgO+tkAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAYBJREFUeNqM1D9LAzEYBvAnpe1ZcfAUS4XSqSI46OBUB0Wxo7h00MnRL+DUwcFB3BzELyCCkw4ugiIIHYpDBQVBcCiCSl3cLKiFx8H7k+RyuT5LIe+v4U0uCQjCHuZY5xkHACRhVvhEklxNwHR5QD93zFswl9imnL0YTIc71LNuxHR5pcF9jhl7ZoFNBT5yzi9pOEJ3ORgWFcxRNhRaU2eSMB2eKnRR71DGmwqtRlceYE6yI9E10456WGvhhFkbXpboO8vmjwoC4BAvJFyPOwH/eEZZ2pTZprzfBWnsBm8WzBzkbergyzbzCCaksYbomXEaACDwLY0dsgIgC+AF12iIrrJAjvOe8dkI9pwgmNdOmp5LumHPGbjWW1vFVjhz0dpGsPcp7x8OkjLr40+0E/Gwj3/RRR9JAYDo4ahvDKCFhwTpBFi8opWAb+XDX9YeKzXn2ivKFQuejt7uWgydNz8yJW4rd5w8ZsmvCgIQ6kVLo4AiMsjgB8/iI6wIov/8DQBvHwY6b768dwAAAABJRU5ErkJggg==", 12, 12))
            .appendField(new Blockly.FieldTextInput("", Blockly.FieldTextInput.char_validator), "TEXT")
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAkCAQAAAAnDwIWAAAACXBIWXMAAAsTAAALEwEAmpwYAAA4JGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTYtMDMtMjlUMTU6MDc6NTArMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNi0wMy0yOVQxNToxNTo0NSswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTYtMDMtMjlUMTU6MTU6NDUrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjE8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6ZTJiYjk3YjYtMDBlNS1iNjQ2LTg5MTktN2EwY2YwMmYzMmRmPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmUyYmI5N2I2LTAwZTUtYjY0Ni04OTE5LTdhMGNmMDJmMzJkZjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmUyYmI5N2I2LTAwZTUtYjY0Ni04OTE5LTdhMGNmMDJmMzJkZjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDplMmJiOTdiNi0wMGU1LWI2NDYtODkxOS03YTBjZjAyZjMyZGY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTYtMDMtMjlUMTU6MDc6NTArMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MjI8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MzY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Piq0yUIAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAYJJREFUeNqMlL1Lw1AUxU9qbTVOVawFpSJUBIc6dBCFCH5NKjp0UBBxE/wTHBwcipuDu5PQSQcnsaODkw6CIoi4FOmkblIrHIc2yX0v6UvP9G7y4+Xem3OvRXQuSwYcwjgSaKCBKmrWn/JOCbI8p1SNh8xK2MM5x3AVAzDzbK81BWYPrwzwO3MSdmjWmQvHAExHdKzAkeYhBqAeAedR8OFo7TDeOWyj24W/I+Ex9LvwfSRcb9oiBljPKEXASWENpnhj7PQd026fYX1hFbvGArs0i9KGg0WMAvgFsC3gR6ygariM+yKNFw57aYSgcTgifMWn6af0ISOiivVjSmJS6caU77owbYjzNd5M9+b4Ie5d0mZQQRMsC/SCSRO8qcz4RGC6BbqslLYXsgq8R/MK2kohFGZRQW85ELpkANosaU7LqOvL30izfDKh/t4Y5Inm3wpTgWpAgFsBqx/5ZenwsbasFtr8VRBgmg8eehr8vJ7zesvgM6aZ9bfoJQ/Yax5wgvgfAD7U4iksjN2QAAAAAElFTkSuQmCC", 12, 12));
        this.setOutput(true, "String");
        this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP)
    }
};
Blockly.Blocks["text_join"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL_013);
        this.setColour(Blockly.Blocks.texts.HUE);
        this.itemCount_ = 2;
        this.updateShape_();
        this.setOutput(true, "String");
        this.setMutator(new Blockly.Mutator(["text_create_join_item"]));
        this.setTooltip(Blockly.Msg.TEXT_JOIN_TOOLTIP)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("items", this.itemCount_);
        return container
    },
    domToMutation: function(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute("items"), 10);
        this.updateShape_()
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock("text_create_join_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock("text_create_join_item");
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock("STACK");
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        for (var i = 0; i < this.itemCount_; i++)
            if (connections[i]) this.getInput("ADD" + i).connection.connect(connections[i])
    },
    saveConnections: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 0;
        while (itemBlock) {
            var input = this.getInput("ADD" + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
        }
    },
    updateShape_: function() {
        if (this.getInput("EMPTY")) this.removeInput("EMPTY");
        else {
            var i = 0;
            while (this.getInput("ADD" + i)) {
                this.removeInput("ADD" + i);
                i++
            }
        }
        if (this.itemCount_ == 0) this.appendDummyInput("EMPTY").appendField(this.newQuote_(true)).appendField(this.newQuote_(false));
        else
            for (var i = 0; i < this.itemCount_; i++) {
                var input = this.appendValueInput("ADD" + i);
                if (i == 0) input.appendField(Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH)
            }
    },
    newQuote_: Blockly.Blocks["text"].newQuote_
};
Blockly.Blocks["text_create_join_container"] = {
    init: function() {
        this.setColour(Blockly.Blocks.texts.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN);
        this.appendStatementInput("STACK");
        this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["text_create_join_item"] = {
    init: function() {
        this.setColour(Blockly.Blocks.texts.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP);
        this.contextMenu = false
    }
};
Blockly.Blocks["text_length"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.TEXT_LENGTH_TITLE,
            args0: [{
                type: "input_value",
                name: "VALUE",
                check: ["String", "Array"]
            }],
            output: "Number",
            colour: Blockly.Blocks.texts.HUE,
            //tooltip: Blockly.Msg.TEXT_LENGTH_TOOLTIP,
            //helpUrl: Blockly.Msg.HELPURL
        })
    }
};
Blockly.Blocks["text_isEmpty"] = {

    init: function() {
	   this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_ISEMPTY_TITLE);
       this.appendValueInput("PIN", "Number");
  
       // this.jsonInit({
       //     message0: Blockly.Msg.TEXT_ISEMPTY_TITLE,
       //     args0: [{
        //        type: "input_value",
        //        name: "VALUE",
        //        check: ["String", "Array"]
        //    }],
        //    output: "Boolean",
    this.setColour(Blockly.Blocks.texts.HUE);
    this.setOutput(true, "Number");
 
    var thisBlock = this;
	 this.setInputsInline(true);
     //   })
    }
};
// math
Blockly.Blocks["math_number"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL_005);
        this.setColour(Blockly.Blocks.math.HUE);
        this.appendDummyInput().appendField(new Blockly.FieldNumber(0), "NUM");
        this.setOutput(true, "Number");
        this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP)
    }
};
Blockly.Blocks["math_arithmetic"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_ADDITION_SYMBOL, "ADD"],
            [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, "MINUS"],
            [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, "MULTIPLY"],
            [Blockly.Msg.MATH_DIVISION_SYMBOL, "DIVIDE"],
            [Blockly.Msg.MATH_POWER_SYMBOL, "POWER"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL_007);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        this.appendValueInput("A").setCheck("Number");
        this.appendValueInput("B").setCheck("Number").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        this.setInputsInline(true);
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                ADD: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
                MINUS: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
                MULTIPLY: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
                DIVIDE: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
                POWER: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
            };
            return TOOLTIPS[mode]
        })
    }
};
Blockly.Blocks["logic_compare_log"] = {
    init: function() {
        var OPERATORS = Blockly.RTL ? [
            ["=", "EQ"],
            ["\u2260", "NEQ"],
            [">", "LT"],
            ["\u2264", "LTE"],
            ["<", "GT"],
            ["\u2265", "GTE"]
        ] : [
            ["=", "EQ"],
            ["\u2260", "NEQ"],
            ["<", "LT"],
            ["\u2264", "LTE"],
            [">", "GT"],
            ["\u2265", "GTE"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL_002);
        this.setColour("#5B80A5");
        this.setOutput(true, "Boolean");
        this.appendValueInput("A");
        this.appendValueInput("B").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        this.setInputsInline(true);
        var thisBlock = this;
//        this.setTooltip(function() {
//            var op = thisBlock.getFieldValue("OP");
//            var TOOLTIPS = {
//                EQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
//                NEQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
//                LT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
//                LTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
//                GT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
//                GTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
//            };
//            return TOOLTIPS[op]
//        });
 //     this.prevBlocks_ = [null, null]
    },
    onchange: function() {
        var blockA = this.getInputTargetBlock("A");
        var blockB = this.getInputTargetBlock("B");
        if (blockA && blockB && !blockA.outputConnection.checkType_(blockB.outputConnection))
            for (var i = 0; i < this.prevBlocks_.length; i++) {
                var block = this.prevBlocks_[i];
                if (block === blockA || block === blockB) {
                    block.setParent(null);
                    block.bumpNeighbours_()
                }
            }
        this.prevBlocks_[0] = blockA;
        this.prevBlocks_[1] = blockB
    }
};

Blockly.Blocks["logic_compare"] = {
    init: function() {
        var OPERATORS = Blockly.RTL ? [
            ["=", "EQ"],
            ["\u2260", "NEQ"],
            [">", "LT"],
            ["\u2264", "LTE"],
            ["<", "GT"],
            ["\u2265", "GTE"]
        ] : [
            ["=", "EQ"],
            ["\u2260", "NEQ"],
            ["<", "LT"],
            ["\u2264", "LTE"],
            [">", "GT"],
            ["\u2265", "GTE"]
        ];
        this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Boolean");
        this.appendValueInput("A");
        this.appendValueInput("B").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        this.setInputsInline(true);
        var thisBlock = this;
      //  this.setTooltip(function() {
      //      var op = thisBlock.getFieldValue("OP");
      //      var TOOLTIPS = {
      //          EQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
      //          NEQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
      //          LT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
      //          LTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
      //          GT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
     //           GTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
     //       };
     //       return TOOLTIPS[op]
     //   });
        this.prevBlocks_ = [null, null]
    },
    onchange: function() {
        var blockA = this.getInputTargetBlock("A");
        var blockB = this.getInputTargetBlock("B");
        if (blockA && blockB && !blockA.outputConnection.checkType_(blockB.outputConnection))
            for (var i = 0; i < this.prevBlocks_.length; i++) {
                var block = this.prevBlocks_[i];
                if (block === blockA || block === blockB) {
                    block.setParent(null);
                    block.bumpNeighbours_()
                }
            }
        this.prevBlocks_[0] = blockA;
        this.prevBlocks_[1] = blockB
    }
};
Blockly.Blocks["math_single"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_SINGLE_OP_ROOT, "ROOT"],
            [Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE, "ABS"],
            ["-", "NEG"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                ROOT: Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT,
                ABS: Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS,
                NEG: Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG
            };
            return TOOLTIPS[mode]
        })
    }
};
Blockly.Blocks["math_trig"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_TRIG_SIN, "SIN"],
            [Blockly.Msg.MATH_TRIG_COS, "COS"],
            [Blockly.Msg.MATH_TRIG_TAN, "TAN"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        var thisBlock = this;
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                SIN: Blockly.Msg.MATH_TRIG_TOOLTIP_SIN,
                COS: Blockly.Msg.MATH_TRIG_TOOLTIP_COS,
                TAN: Blockly.Msg.MATH_TRIG_TOOLTIP_TAN
            };
            return TOOLTIPS[mode]
        })
    }
};
Blockly.Blocks["math_constant"] = {
    init: function() {
        var CONSTANTS = [
            ["\u03c0", "PI"],
            ["e", "E"],
            ["\u03c6", "GOLDEN_RATIO"],
            ["\u221A 2", "SQRT2"],
            ["\u221A \u00BD", "SQRT1_2"],
            ["\u221E", "INFINITY"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(CONSTANTS), "CONSTANT");
        this.setTooltip(Blockly.Msg.MATH_CONSTANT_TOOLTIP)
    }
};
Blockly.Blocks["math_number_property"] = {
    init: function() {
        var PROPERTIES = [
            [Blockly.Msg.MATH_IS_EVEN, "EVEN"],
            [Blockly.Msg.MATH_IS_ODD, "ODD"],
            [Blockly.Msg.MATH_IS_PRIME, "PRIME"],
            [Blockly.Msg.MATH_IS_WHOLE, "WHOLE"],
            [Blockly.Msg.MATH_IS_POSITIVE, "POSITIVE"],
            [Blockly.Msg.MATH_IS_NEGATIVE, "NEGATIVE"],
            [Blockly.Msg.MATH_IS_DIVISIBLE_BY, "DIVISIBLE_BY"]
        ];
        this.setColour(Blockly.Blocks.math.HUE);
        this.appendValueInput("NUMBER_TO_CHECK").setCheck("Number");
        var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
            var divisorInput = option == "DIVISIBLE_BY";
            this.sourceBlock_.updateShape_(divisorInput)
        });
        this.appendDummyInput().appendField(dropdown, "PROPERTY");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.MATH_IS_TOOLTIP)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        var divisorInput = this.getFieldValue("PROPERTY") == "DIVISIBLE_BY";
        container.setAttribute("divisor_input", divisorInput);
        return container
    },
    domToMutation: function(xmlElement) {
        var divisorInput = xmlElement.getAttribute("divisor_input") == "true";
        this.updateShape_(divisorInput)
    },
    updateShape_: function(divisorInput) {
        var inputExists = this.getInput("DIVISOR");
        if (divisorInput) {
            if (!inputExists) this.appendValueInput("DIVISOR").setCheck("Number")
        } else if (inputExists) this.removeInput("DIVISOR")
    }
};
Blockly.Blocks["math_round"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUND, "ROUND"],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP, "ROUNDUP"],
            [Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN, "ROUNDDOWN"]
        ];
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(OPERATORS), "OP");
        this.setTooltip(Blockly.Msg.MATH_ROUND_TOOLTIP)
    }
};
Blockly.Blocks["math_on_list"] = {
    init: function() {
        var OPERATORS = [
            [Blockly.Msg.MATH_ONLIST_OPERATOR_SUM, "SUM"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MIN, "MIN"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MAX, "MAX"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE, "AVERAGE"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN, "MEDIAN"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_MODE, "MODE"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV, "STD_DEV"],
            [Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM, "RANDOM"]
        ];
        var thisBlock = this;
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        var dropdown = new Blockly.FieldDropdown(OPERATORS, function(newOp) {
            thisBlock.updateType_(newOp)
        });
        this.appendValueInput("LIST").setCheck("Array").appendField(dropdown, "OP");
        this.setTooltip(function() {
            var mode = thisBlock.getFieldValue("OP");
            var TOOLTIPS = {
                SUM: Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM,
                MIN: Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN,
                MAX: Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX,
                AVERAGE: Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE,
                MEDIAN: Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN,
                MODE: Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE,
                STD_DEV: Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV,
                RANDOM: Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM
            };
            return TOOLTIPS[mode]
        })
    },
    updateType_: function(newOp) {
        if (newOp == "MODE") this.outputConnection.setCheck("Array");
        else this.outputConnection.setCheck("Number")
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("op", this.getFieldValue("OP"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateType_(xmlElement.getAttribute("op"))
    }
};
Blockly.Blocks["math_modulo"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.MATH_MODULO_TITLE,
            args0: [{
                type: "input_value",
                name: "DIVIDEND",
                check: "Number"
            }, {
                type: "input_value",
                name: "DIVISOR",
                check: "Number"
            }],
            inputsInline: true,
            output: "Number",
            colour: Blockly.Blocks.math.HUE,
            tooltip: Blockly.Msg.MATH_MODULO_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL
        })
    }
};
Blockly.Blocks["math_constrain"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.MATH_CONSTRAIN_TITLE,
            args0: [{
                type: "input_value",
                name: "VALUE",
                check: "Number"
            }, {
                type: "input_value",
                name: "LOW",
                check: "Number"
            }, {
                type: "input_value",
                name: "HIGH",
                check: "Number"
            }],
            inputsInline: true,
            output: "Number",
            colour: Blockly.Blocks.math.HUE,
            tooltip: Blockly.Msg.MATH_CONSTRAIN_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL
        })
    }
};
Blockly.Blocks["math_random_int"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.MATH_RANDOM_INT_TITLE + "A",
            args0: [{
                type: "input_value",
                name: "FROM",
                check: "Number"
            }, {
                type: "input_value",
                name: "TO",
                check: "Number"
            }],
            inputsInline: true,
            output: "Number",
            colour: Blockly.Blocks.math.HUE,
            tooltip: Blockly.Msg.MATH_RANDOM_INT_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL_008
        })
    }
};
Blockly.Blocks["math_random_int_g"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.MATH_RANDOM_INT_TITLE + "G",
            args0: [{
                type: "input_value",
                name: "FROM",
                check: "Number"
            }, {
                type: "input_value",
                name: "TO",
                check: "Number"
            }],
            inputsInline: true,
            output: "Number",
            colour: Blockly.Blocks.math.HUE,
            tooltip: Blockly.Msg.MATH_RANDOM_INT_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL_008
        })
    }
};
Blockly.Blocks["math_random_int_map"] = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.MATH_RANDOM_INT_TITLE_map,
            args0: [{
                type: "input_value",
                name: "Mi1",
                check: "Number"
            }, {
                type: "input_value",
                name: "Mi2",
                check: "Number"
            }, {
                type: "input_value",
                name: "Mi3",
                check: "Number"
            }, {
                type: "input_value",
                name: "Mi4",
                check: "Number"
            }, {
                type: "input_value",
                name: "Mi5",
                check: "Number"
            }],
            inputsInline: true,
            output: "Number",
            colour: Blockly.Blocks.math.HUE,
            //tooltip: Blockly.Msg.MATH_RANDOM_INT_TOOLTIP,
            helpUrl: Blockly.Msg.HELPURL_009
        })
    }
};
Blockly.Blocks["math_random_float"] = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(true, "Number");
        this.appendDummyInput().appendField(Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM);
        this.setTooltip(Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP)
    }
};
Blockly.Blocks["inout_angle_maths"] = {
    init: function() {
        this.setColour(Blockly.Blocks.math.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL_006);
        this.appendDummyInput("").appendField(new Blockly.FieldAngle("90"), "ANGLE");
        this.setOutput(true, "Number");
        //this.setTooltip("angle")
    }
};
Blockly.Blocks["intervalle"] = {
    init: function() {
        var OPERATORS = [
            ["<", "LT"],
            ["\u2264", "LTE"],
            [">", "GT"],
            ["\u2265", "GTE"]
        ];
        this.appendValueInput("inf").setCheck("Number");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(OPERATORS), "comp_inf");
        this.appendValueInput("valeur").setCheck(null);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(OPERATORS), "comp_sup");
        this.appendValueInput("sup").setCheck("Number");
        this.setOutput(true, "Boolean");
        this.setColour(Blockly.Blocks.math.HUE);
        this.setTooltip(Blockly.Msg.compare);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
// liste
Blockly.Blocks["list_create"]={
	init: function() {
		this.appendValueInput("list")
			.appendField(Blockly.Msg.LISTS_CREATE1).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR').appendField(Blockly.Msg.LISTS_CREATE2)
		this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.LISTS_CREATE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
    },
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks["list_append"]={
	init: function() { this.jsonInit({
        "message0": Blockly.Msg.LISTS_append,
        "args0": [
            {
                    "type": "input_value",
                    "name": "value"
                },
            {
                "type": "field_variable",
                "name": "VAR",
                "variable": Blockly.Msg.VARIABLES_GET_ITEM
            }
        ],
		"inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": Blockly.Blocks.tab.HUE,
        "tooltip": Blockly.Msg.LISTS_append_TOOLTIP,
        "helpUrl": Blockly.Msg.ARRAY_append_url
    })},
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks["list_size"] = {
    init: function() {
        this.appendDummyInput().appendField(Blockly.Msg.ARRAY_dim).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR');
        this.setOutput(true);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.size_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
Blockly.Blocks["list_set"] = {
    init: function() {
		this.appendValueInput("index")
			.appendField(Blockly.Msg.LISTS_SET_INDEX_SET);
		this.appendDummyInput()
        	.appendField(Blockly.Msg.LISTS_of)
			.appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR');
        this.appendValueInput("value")
			.setAlign(Blockly.ALIGN_RIGHT)
			.appendField(Blockly.Msg._AT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.contextMenuMsg_ = Blockly.Msg.tab_create
    },
    contextMenuType_: "array_getIndex",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
Blockly.Blocks["list_get"] = {
    init: function() {
		this.appendValueInput("index")
		.appendField(Blockly.Msg.LISTS_GET);
        this.appendDummyInput()
			.appendField(Blockly.Msg.LISTS_of)
			.appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR');
		this.setOutput(true);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1);
        this.setHelpUrl(Blockly.Msg.HELPURL);
		this.contextMenuMsg_ = Blockly.Msg.tab_create_fix
    },
    contextMenuType_: "fixer_tableau",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};
// tableau
Blockly.Blocks["creer_tableau"] = {
    init: function() {
		var prog = window.localStorage.prog;
		if (prog != "python") {
			this.appendDummyInput().appendField(Blockly.Msg.ARRAY_create).appendField(new Blockly.FieldVariable("R"), 'VAR').appendField(Blockly.Msg.VARIABLES_AS).appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), "type");
		} else {
			//this.appendDummyInput().appendField(Blockly.Msg.ARRAY_create).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR');
			this.appendDummyInput().appendField(Blockly.Msg.ARRAY_create).appendField(new Blockly.FieldVariable("R"), 'VAR');
		}
		this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARRAY_dim)
			.appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"]],function(option){this.sourceBlock_.updateShape_(option)}),"dim");
        
		this.appendValueInput("D0")
			.appendField(Blockly.Msg._AT)
             .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.tab.HUE);
        //this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2);
        this.setHelpUrl(Blockly.Msg.HELPURL_090)
    },
     getVarType: function(varName) {
         return Blockly.Types.getChildBlockType(this)
     },
     renameVar: function(oldName, newName) {
         if (Blockly.Names.equals(oldName, this.getFieldValue("VAR"))) this.setFieldValue(newName, "VAR")
     },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("dim", this.getFieldValue("dim"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("dim"))
    },
    updateShape_: function(option) {
		for (var i = 1; i < 10; i++) {
			var inputExists = this.getInput("D"+i);
			if (inputExists) {
				this.removeInput("D"+i)
			}
		}
		switch (option) {
		case "2":
            this.appendValueInput("D1");
			break;
		case "3":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			break;
		case "4":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
			break;
		case "5":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			break;
		case "6":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			this.appendValueInput("D5");
			break;
		case "7":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			this.appendValueInput("D5");
			this.appendValueInput("D6");
			break;
		case "8":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			this.appendValueInput("D5");
			this.appendValueInput("D6");
			this.appendValueInput("D7");
			break;
		case "9":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			this.appendValueInput("D5");
            this.appendValueInput("D6");
			this.appendValueInput("D7");
            this.appendValueInput("D8");
			break;
		case "10":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			this.appendValueInput("D5");
            this.appendValueInput("D6");
			this.appendValueInput("D7");
            this.appendValueInput("D8");
			this.appendValueInput("D9");
			break;
		}
    }
};
Blockly.Blocks["fixer_tableau"] = {
    init: function() {
		this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_GETINDEX_ITEM)
			.appendField(new Blockly.FieldVariable("R"), 'VAR')
			.appendField(Blockly.Msg.ARRAY_fixe)
			.appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"]]),"Number");
        this.appendValueInput("value").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT);
       // this.appendValueInput("D0").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARRAY_index);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Blocks.tab.HUE);
       // this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3);
        this.setHelpUrl(Blockly.Msg.HELPURL_090)
        this.contextMenuMsg_ = Blockly.Msg.tab_create
    },
    contextMenuType_: "array_getIndex",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("dim", this.getFieldValue("dim"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("dim"))
    },
    updateShape_: function(option) {
		for (var i = 1; i < 7; i++) {
			var inputExists = this.getInput("D"+i);
			if (inputExists) {
				this.removeInput("D"+i)
			}
		}
		switch (option) {
		case "2":
            this.appendValueInput("D1");
			break;
		case "3":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			break;
		case "4":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
			break;
		case "5":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			break;
		}
    }
};
Blockly.Blocks["array_getIndex"] = {
    init: function() {
        this.appendDummyInput()
			.appendField(Blockly.Msg.ARRAY_GETINDEX_ITEM)
			.appendField(new Blockly.FieldVariable("R"), 'VAR')
			.appendField(Blockly.Msg.ARRAY_index)
			.appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"]]),"Number");
        //this.appendValueInput("D0").setCheck("Number").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ARRAY_index);
        this.setOutput(true);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.tab.HUE);
       // this.setTooltip(Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1);
        this.setHelpUrl(Blockly.Msg.HELPURL_090)
		this.contextMenuMsg_ = Blockly.Msg.tab_create_fix
    },
    contextMenuType_: "fixer_tableau",
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("dim", this.getFieldValue("dim"));
        return container
    },
    domToMutation: function(xmlElement) {
        this.updateShape_(xmlElement.getAttribute("dim"))
    },
    updateShape_: function(option) {
		for (var i = 1; i < 7; i++) {
			var inputExists = this.getInput("D"+i);
			if (inputExists) {
				this.removeInput("D"+i)
			}
		}
		switch (option) {
		case "2":
            this.appendValueInput("D1");
			break;
		case "3":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			break;
		case "4":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
			break;
		case "5":
            this.appendValueInput("D1");
            this.appendValueInput("D2");
			this.appendValueInput("D3");
            this.appendValueInput("D4");
			break;
		}
    }
};
Blockly.Blocks["array_create_with"] = {
    init: function() {
        //this.setHelpUrl(Blockly.Msg.HELPURL);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.itemCount_ = 2;
        this.updateShape_();
        this.setOutput(true, "Array");
        this.setMutator(new Blockly.Mutator(["array_create_with_item"]));
       // this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP)
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("items", this.itemCount_);
        return container
    },
    domToMutation: function(xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute("items"), 10);
        this.updateShape_()
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock( "array_create_with_container");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock( "array_create_with_item");
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection
        }
        return containerBlock
    },
    compose: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock("STACK");
        var connections = [];
        var i = 0;
        while (itemBlock) {
            connections[i] = itemBlock.valueConnection_;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
            i++
        }
        this.itemCount_ = i;
        this.updateShape_();
        for (var i = 0; i < this.itemCount_; i++)
            if (connections[i]) this.getInput("ADD" + i).connection.connect(connections[i])
    },
    saveConnections: function(containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock("STACK");
        var i = 0;
        while (itemBlock) {
            var input = this.getInput("ADD" + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock()
        }
    },
    updateShape_: function() {
        if (this.getInput("EMPTY")) this.removeInput("EMPTY");
        else {
            var i = 0;
            while (this.getInput("ADD" + i)) {
                this.removeInput("ADD" + i);
                i++
            }
        }
        if (this.itemCount_ == 0) this.appendDummyInput("EMPTY").appendField(Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE);
        else
            for (var i = 0; i < this.itemCount_; i++) {
                var input = this.appendValueInput("ADD" + i);
                if (i == 0) input.appendField(Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH)
            }
    }
};
Blockly.Blocks["array_create_with_item"] = {
    init: function() {
        this.setColour(Blockly.Blocks.tab.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
};
Blockly.Blocks["array_create_with_container"] = {
    init: function() {
        this.setColour(Blockly.Blocks.tab.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};
Blockly.Blocks["array_getsize"] = {
    init: function() {
        this.appendDummyInput().appendField(Blockly.Msg.size).appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_GET_ITEM), 'VAR');
        this.setOutput(true);
        this.setInputsInline(true);
        this.setColour(Blockly.Blocks.tab.HUE);
        this.setTooltip(Blockly.Msg.size_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HELPURL)
    }
};
// fonction
Blockly.Blocks["procedures_defnoreturn"] = {
    init: function() {
 
        var nameField = new Blockly.FieldTextInput(Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE_name, Blockly.Procedures.rename);
        nameField.setSpellcheck(false);
        this.appendDummyInput()
		.appendField( Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE )
		.appendField(nameField, "NAME")
		.appendField("", "PARAMS");
		this.appendStatementInput("STACK");
       // this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
        this.setColour(Blockly.Blocks.procedures.HUE);
      //  this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
         this.setHelpUrl(Blockly.Msg.HELPURL_087);
         this.arguments_ = [];
         this.argumentstype_ = []
    },   
    updateParams_: function() {
        var badArg = false;
        var hash = {};
        for (var i = 0; i < this.arguments_.length; i++) {
            if (hash["arg_" + this.arguments_[i].toLowerCase()]) {
                badArg = true;
                break
            }
            hash["arg_" + this.arguments_[i].toLowerCase()] = true
        }
        if (badArg) {
			this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
		} else {
			this.setWarningText(null);
		}
        var paramString = "";
        if (this.arguments_.length) paramString = "(" + this.arguments_.join(",") + ")";
        Blockly.Events.disable();
        this.setFieldValue(paramString, "PARAMS")
        Blockly.Events.enable()
    },
   mutationToDom: function() {
        var container = document.createElement("mutation");
        for (var i = 0; i < this.arguments_.length; i++) {
            var parameter = document.createElement("arg");
            parameter.setAttribute("name", this.arguments_[i]);
			parameter.setAttribute('vartype', this.argumentstype_[i]);
            container.appendChild(parameter)
        }
        return container
    },
   domToMutation: function(xmlElement) {
        this.arguments_ = [];
		this.argumentstype_ = [];
        for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++){
            if (childNode.nodeName.toLowerCase() == "arg") {
				this.arguments_.push(childNode.getAttribute("name"));
				this.argumentstype_.push(childNode.getAttribute('vartype'));
			}
		}
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);
    },
    decompose: function(workspace) {
        var containerBlock = workspace.newBlock("procedures_mutatorcontainer");
        containerBlock.initSvg();
        var connection = containerBlock.getInput("STACK").connection;
        for (var i = 0; i < this.arguments_.length; i++) {
            var paramBlock = workspace.newBlock("procedures_mutatorarg");
            paramBlock.initSvg();
            paramBlock.setFieldValue(this.arguments_[i], "NAME");
			paramBlock.setFieldValue(this.argumentstype_[i], 'TYPEVAR');
            paramBlock.oldLocation = i;
            connection.connect(paramBlock.previousConnection);
            connection = paramBlock.nextConnection
        }
        Blockly.Procedures.mutateCallers(this);
        return containerBlock
    },
    compose: function(containerBlock) {
        this.arguments_ = [];
        this.argumentstype_ = [];
        this.paramIds_ = [];
        var paramBlock = containerBlock.getInputTargetBlock("STACK");
        while (paramBlock) {
            this.arguments_.push(paramBlock.getFieldValue("NAME"));
            this.argumentstype_.push(paramBlock.getFieldValue('TYPEVAR'));
            this.paramIds_.push(paramBlock.id);
            paramBlock = paramBlock.nextConnection && paramBlock.nextConnection.targetBlock()
        }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this)
    },
    getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, false]
    },
    renameVar: function(oldName, newName) {
        var change = false;
        for (var i = 0; i < this.arguments_.length; i++){
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                change = true
            }
		}
         if (change) {
            this.updateParams_();
            if (this.mutator.isVisible()) {
                var blocks = this.mutator.workspace_.getAllBlocks();
                for (var i = 0, block; block = blocks[i]; i++)
                    if (block.type == "procedures_mutatorarg" && Blockly.Names.equals(oldName, block.getFieldValue("NAME"))) block.setFieldValue(newName, "NAME")
            }
        } 
    },
     customContextMenu: function(options) {
        var option = {enabled:true};
        var name = this.getFieldValue("NAME");
        option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", name);
        var xmlMutation = goog.dom.createDom("mutation");
        xmlMutation.setAttribute("name", name);
        for (var i = 0; i < this.arguments_.length; i++) {
            var xmlArg = goog.dom.createDom("arg");
            xmlArg.setAttribute("name", this.arguments_[i]);
			xmlArg.setAttribute('type', this.argumentstype_[i]);
            xmlMutation.appendChild(xmlArg)
        }
        var xmlBlock = goog.dom.createDom("block", null, xmlMutation);
        xmlBlock.setAttribute("type", this.callType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
        if (!this.isCollapsed()){
            for (var i = 0; i < this.arguments_.length; i++) {
                var option = {enabled:true};
                var name = this.arguments_[i];
                option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", name);
                var xmlField = goog.dom.createDom("field", null, name);
                xmlField.setAttribute("name", "VAR");
				xmlField.setAttribute('type', 'TYPEVAR');
                var xmlBlock = goog.dom.createDom("block", null, xmlField);
                xmlBlock.setAttribute("type", "variables_get");
                option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
                options.push(option)
            }
		}
    }, 
    callType_: "procedures_callnoreturn"
};
/*
Blockly.Blocks["procedures_defreturn"] = {
	init: function() {
		var nameField = new Blockly.FieldTextInput(Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, Blockly.Procedures.rename);
		nameField.setSpellcheck(false);
		this.setInputsInline(false);
		this.appendDummyInput().appendField(nameField, "NAME").appendField("", "PARAMS");
		this.appendStatementInput("STACK");
		this.appendValueInput("RETURN").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
		var prog = window.localStorage.prog;
		if (prog != "python") {
			this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TYPE).appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), "type")
		}
		this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
		this.setColour(Blockly.Blocks.procedures.HUE);
		this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
		this.setHelpUrl(Blockly.Msg.HELPURL);
		this.arguments_ = [];
		this.argumentstype_ = []
	},
    updateParams_: Blockly.Blocks["procedures_defnoreturn"].updateParams_,
    mutationToDom: Blockly.Blocks["procedures_defnoreturn"].mutationToDom,
    domToMutation: Blockly.Blocks["procedures_defnoreturn"].domToMutation,
    decompose: Blockly.Blocks["procedures_defnoreturn"].decompose,
    compose: Blockly.Blocks["procedures_defnoreturn"].compose,
    getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, true]
    },
    renameVar: Blockly.Blocks["procedures_defnoreturn"].renameVar,
    customContextMenu: Blockly.Blocks["procedures_defnoreturn"].customContextMenu,
    callType_: "procedures_callreturn"
};

*/


Blockly.Blocks["procedures_mutatorcontainer"] = {
    init: function() {
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE);
        this.appendStatementInput("STACK");
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = false
    }
};

Blockly.Blocks["procedures_mutatorarg"] = {
    init: function() {
        var field = new Blockly.FieldTextInput("x", this.validator_);
        this.appendDummyInput().appendField("utiliser la variable").appendField(field, "NAME").appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TYPE)
			.appendField(new Blockly.FieldDropdown(Blockly.Types.getValidTypeArray()), "TYPEVAR");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = false;
        field.onFinishEditing_ = this.createNewVar_;
        field.onFinishEditing_("x")
    },
    getBlockType: function() {
        var blocklyTypeKey = this.getFieldValue("TYPEVAR");
        return Blockly.Types[blocklyTypeKey]
    },
    validator_: function(newVar) {
        newVar = newVar.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
        return newVar || null
    },
    createNewVar_: function(newText) {
        var source = this.sourceBlock_;
        if (source && source.workspace && source.workspace.options && source.workspace.options.parentWorkspace) source.workspace.options.parentWorkspace.createVariable(newText)
    }
};
Blockly.Blocks["procedures_callnoreturn"] = {
    init: function() {
        this.appendDummyInput("TOPROW").appendField(this.id, "NAME");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null
    },
    getProcedureCall: function() {
        return this.getFieldValue("NAME")
    },
    renameProcedure: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getProcedureCall())) {
            this.setFieldValue(newName, "NAME");
			this.setHelpUrl(Blockly.Msg.HELPURL_087);
            //this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", newName))
        }
    },
    setProcedureParameters_: function(paramNames, paramIds) {
        var defBlock = Blockly.Procedures.getDefinition(this.getProcedureCall(), this.workspace);
        var mutatorOpen = defBlock && defBlock.mutator && defBlock.mutator.isVisible();
        if (!mutatorOpen) {
            this.quarkConnections_ = {};
            this.quarkIds_ = null
        }
        if (!paramIds) return;
        if (goog.array.equals(this.arguments_, paramNames)) {
            this.quarkIds_ = paramIds;
            return
        }
        if (paramIds.length != paramNames.length) throw "Error: paramNames and paramIds must be the same length.";
        this.setCollapsed(false);
        if (!this.quarkIds_) {
            this.quarkConnections_ = {};
            if (paramNames.join("\n") == this.arguments_.join("\n")) this.quarkIds_ = paramIds;
            else this.quarkIds_ = []
        }
        var savedRendered = this.rendered;
        this.rendered = false;
        for (var i = 0; i < this.arguments_.length; i++) {
            var input = this.getInput("ARG" + i);
            if (input) {
                var connection = input.connection.targetConnection;
                this.quarkConnections_[this.quarkIds_[i]] = connection;
                if (mutatorOpen && connection && paramIds.indexOf(this.quarkIds_[i]) == -1) {
                    connection.disconnect();
                    connection.getSourceBlock().bumpNeighbours_()
                }
            }
        }
        this.arguments_ = [].concat(paramNames);
        this.updateShape_();
        this.quarkIds_ = paramIds;
        if (this.quarkIds_)
            for (var i = 0; i < this.arguments_.length; i++) {
                var quarkId = this.quarkIds_[i];
                if (quarkId in this.quarkConnections_) {
                    var connection = this.quarkConnections_[quarkId];
                    if (!Blockly.Mutator.reconnect(connection, this, "ARG" + i)) delete this.quarkConnections_[quarkId]
                }
            }
        this.rendered = savedRendered;
        if (this.rendered) this.render()
    },
    updateShape_: function() {
        for (var i = 0; i < this.arguments_.length; i++) {
            var field = this.getField("ARGNAME" + i);
            if (field) {
                Blockly.Events.disable();
                try {
                    field.setValue(this.arguments_[i])
                } finally {
                    Blockly.Events.enable()
                }
            } else {
                field = new Blockly.FieldLabel(this.arguments_[i]);
                var input = this.appendValueInput("ARG" + i).appendField(field, "ARGNAME" + i).appendField("=").setAlign(Blockly.ALIGN_RIGHT);
                input.init()
            }
        }
        while (this.getInput("ARG" + i)) {
            this.removeInput("ARG" + i);
            i++
        }
        var topRow = this.getInput("TOPROW");
        if (topRow)
            if (this.arguments_.length) {
                if (!this.getField("WITH")) {
                    topRow.appendField("", "WITH");
                    topRow.init()
                }
            } else if (this.getField("WITH")) topRow.removeField("WITH")
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("name", this.getProcedureCall());
        for (var i = 0; i < this.arguments_.length; i++) {
            var parameter = document.createElement("arg");
            parameter.setAttribute("name", this.arguments_[i]);
            container.appendChild(parameter)
        }
        return container
    },
    domToMutation: function(xmlElement) {
        var name = xmlElement.getAttribute("name");
        this.renameProcedure(this.getProcedureCall(), name);
        var args = [];
        var paramIds = [];
        for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++)
            if (childNode.nodeName.toLowerCase() == "arg") {
                args.push(childNode.getAttribute("name"));
                paramIds.push(childNode.getAttribute("paramId"))
            }
        this.setProcedureParameters_(args, paramIds)
    },
    renameVar: function(oldName, newName) {
        for (var i = 0; i < this.arguments_.length; i++)
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                this.getField("ARGNAME" + i).setValue(newName)
            }
    },
    onchange: function(event) {
        if (!this.workspace || this.workspace.isFlyout) return;
        if (event.type == Blockly.Events.CREATE && event.ids.indexOf(this.id) != -1) {
            var name = this.getProcedureCall();
            var def = Blockly.Procedures.getDefinition(name, this.workspace);
            if (def && (def.type != this.defType_ || JSON.stringify(def.arguments_) != JSON.stringify(this.arguments_))) def = null;
            if (!def) {
                Blockly.Events.setGroup(event.group);
                var xml = goog.dom.createDom("xml");
                var block = goog.dom.createDom("block");
                block.setAttribute("type", this.defType_);
                var xy = this.getRelativeToSurfaceXY();
                var x = xy.x + Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1);
                var y = xy.y + Blockly.SNAP_RADIUS * 2;
                block.setAttribute("x", x);
                block.setAttribute("y", y);
                var mutation = this.mutationToDom();
                block.appendChild(mutation);
                var field = goog.dom.createDom("field");
                field.setAttribute("name", "NAME");
                field.appendChild(document.createTextNode(this.getProcedureCall()));
                block.appendChild(field);
                xml.appendChild(block);
                Blockly.Xml.domToWorkspace(xml, this.workspace);
                Blockly.Events.setGroup(false)
            }
        } else if (event.type == Blockly.Events.DELETE) {
            var name = this.getProcedureCall();
            var def = Blockly.Procedures.getDefinition(name, this.workspace);
            if (!def) {
                Blockly.Events.setGroup(event.group);
                this.dispose(true, false);
                Blockly.Events.setGroup(false)
            }
        }
    },
    customContextMenu: function(options) {
        var option = {
            enabled: true
        };
        option.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
        var name = this.getProcedureCall();
        var workspace = this.workspace;
        option.callback = function() {
            var def = Blockly.Procedures.getDefinition(name, workspace);
            def && def.select()
        };
        options.push(option)
    },
    defType_: "procedures_defnoreturn"
};
Blockly.Blocks["procedures_callreturn"] = {
    init: function() {
		this.setInputsInline(true);
        this.appendDummyInput("TOPROW").appendField("", "NAME");
        this.setOutput(true);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null
    },
    getProcedureCall: Blockly.Blocks["procedures_callnoreturn"].getProcedureCall,
    renameProcedure: Blockly.Blocks["procedures_callnoreturn"].renameProcedure,
    setProcedureParameters_: Blockly.Blocks["procedures_callnoreturn"].setProcedureParameters_,
    updateShape_: Blockly.Blocks["procedures_callnoreturn"].updateShape_,
    mutationToDom: Blockly.Blocks["procedures_callnoreturn"].mutationToDom,
    domToMutation: Blockly.Blocks["procedures_callnoreturn"].domToMutation,
    renameVar: Blockly.Blocks["procedures_callnoreturn"].renameVar,
    onchange: Blockly.Blocks["procedures_callnoreturn"].onchange,
    customContextMenu: Blockly.Blocks["procedures_callnoreturn"].customContextMenu,
    defType_: "procedures_defreturn"
};


/*
Blockly.Blocks["procedures_ifreturn"] = {
    init: function() {
        this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setInputsInline(false);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HELPURL);
        this.hasReturnValue_ = true
    },
    mutationToDom: function() {
        var container = document.createElement("mutation");
        container.setAttribute("value", Number(this.hasReturnValue_));
        return container
    },
    domToMutation: function(xmlElement) {
        var value = xmlElement.getAttribute("value");
        this.hasReturnValue_ = value == 1;
        if (!this.hasReturnValue_) {
            this.removeInput("VALUE");
            this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN)
        }
    },
    onchange: function(e) {
        if (this.workspace.isDragging()) return;
        var legal = false;
        var block = this;
        do {
            if (this.FUNCTION_TYPES.indexOf(block.type) != -1) {
                legal = true;
                break
            }
            block = block.getSurroundParent()
        } while (block);
        if (legal) {
            if (block.type == "procedures_defnoreturn" && this.hasReturnValue_) {
                this.removeInput("VALUE");
                this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
                this.hasReturnValue_ = false
            } else if (block.type == "procedures_defreturn" && !this.hasReturnValue_) {
                this.removeInput("VALUE");
                this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
                this.hasReturnValue_ = true
            }
            this.setWarningText(null);
            if (!this.isInFlyout) this.setDisabled(false)
        } else {
            this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING);
            if (!this.isInFlyout && !this.getInheritedDisabled()) this.setDisabled(true)
        }
    },
    FUNCTION_TYPES: ["procedures_defnoreturn", "procedures_defreturn"]
};

*/
 


Blockly.Blocks['arduino_b_code']={init:function(){
    this.appendDummyInput()
        .appendField("  ")
        .appendField(new Blockly.FieldTextInput("Name block"), "text");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("includes code"), "includes");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("variables  code"), "variables");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("definitions  code"), "definitions");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("userFunctions  code"), "userFunctions");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("setups  code"), "setups");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("code"), "code");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#A5995B");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['arduino_a_code']={init:function(){
    this.appendDummyInput()
        .appendField("  ")
        .appendField(new Blockly.FieldTextInput("Name block"), "text");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("includes code"), "includes");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("variables  code"), "variables");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("definitions  code"), "definitions");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("userFunctions  code"), "userFunctions");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("setups  code"), "setups");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("code"), "code");
   this.setInputsInline(false);
    this.setOutput(true);
    this.setColour("#A5995B");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};



Blockly.Blocks["serial_init"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#5BA599");
        this.setHelpUrl(Blockly.Msg.HELPURL_034);
        this.setInputsInline(true);
    this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.appendDummyInput()
    .appendField(Blockly.Msg.Serial_Init)
    .appendField(new Blockly.FieldDropdown(profile[card].serialPin), "pin");
    this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.Msg.vitesse)
    .appendField(new Blockly.FieldDropdown(profile[card].serial), "SPEED");
        //this.setTooltip(Blockly.Msg.Serial_Init_tooltip)
    }
};

 
Blockly.Blocks["GPS_init_ss"] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
	this.appendDummyInput()
        .appendField(Blockly.Msg.GPS_init)
	this.appendDummyInput()
		.appendField(Blockly.Msg.GPS_TX)
		.appendField(new Blockly.FieldNumber("2"), "PIN_TX");
		//.appendField(new Blockly.FieldDropdown(profile[card].dropdownDigital), "PIN_TX");
    this.appendDummyInput()
		.appendField(Blockly.Msg.GPS_RX)
		.appendField(new Blockly.FieldNumber("3"), "PIN_RX");
		//.appendField(new Blockly.FieldDropdown(profile[card].dropdownDigital), "PIN_RX");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Init the GPS module');
  }
};




Blockly.Blocks["GPS_read_save_values"] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
	this.appendDummyInput()
        .appendField(Blockly.Msg.GPS_name)
		.appendField(Blockly.Msg.GPS_readvalues)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('Read the GPS values and save in the variables');
  }
};


Blockly.Blocks["GPS_location"] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
	this.appendDummyInput()
        .appendField(Blockly.Msg.GPS_name)
		.appendField(Blockly.Msg.GPS_paramter)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.GPS_Latitude,'0'],[Blockly.Msg.GPS_Longitude,'1'],[Blockly.Msg.GPS_Altitude_in_meters,'2'],[Blockly.Msg.GPS_Course_in_degrees,'3'],[Blockly.Msg.GPS_Number_of_satellites,'4']]), "PARAMETERS1")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
  //  this.setTooltip('Return location parameters');
  }
};


Blockly.Blocks["GPS_speed"] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
	this.appendDummyInput()
        .appendField(Blockly.Msg.GPS_name2)
		.appendField(new Blockly.FieldDropdown([['km/h','3'],['knots','0'],['miles/h','1'],['m/sec','2']]), "PARAMETERS2")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
  //  this.setTooltip('Return speed parameters');
  }
};



Blockly.Blocks["GPS_datetime"] = {
  helpUrl: '',
  init: function() {
	this.setColour("#2a93e8");
	this.appendDummyInput()

        .appendField(Blockly.Msg.GPS_name)
		.appendField(Blockly.Msg.GPS_paramter3)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.GPS_Year,'0'],[Blockly.Msg.GPS_Month,'1'],[Blockly.Msg.GPS_Day,'2'],[Blockly.Msg.GPS_Hours,'3'],[Blockly.Msg.GPS_Minutes,'4'],[Blockly.Msg.GPS_Seconds,'5']]), "PARAMETERS3")
	this.setInputsInline(true);
    this.setOutput(true, 'Number');
   // this.setTooltip('Return datetime parameters');
  }
};



Blockly.Blocks["x9c103s"]={init:function(){
    this.appendDummyInput()
		.appendField(Blockly.Msg.x9c103s)
        .appendField(new Blockly.FieldNumber("4"), "n4_number")
        .appendField("INC")
        .appendField(new Blockly.FieldNumber("3"), "n3_number")
        .appendField("U/D")
        .appendField(new Blockly.FieldNumber("2"), "n2_number")
        .appendField(Blockly.Msg.x9c103sval);
    this.appendValueInput("_block")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#867B9A");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
 
//sim 800

Blockly.Blocks['sim800_init_ss']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAT_SIM800)
        .appendField(new Blockly.FieldNumber("8"), "n8_number")
        .appendField("TX")
        .appendField(new Blockly.FieldNumber("9"), "n9_number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
    //this.setTooltip('help Vitaliy...');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks['sim800_send']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAT_SIM800_send);
    this.appendValueInput("text_block")
        .setCheck("String");
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAT_SIM800_tell)
        .appendField(new Blockly.FieldNumber("79510612577"), "tell_number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
  //  this.setTooltip('help Vitaliy...');
    // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['sim800_send_sms']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAT_SIM800_tell_sms);
    this.appendStatementInput("sms_statement");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks['sim800_init_sms']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.CAT_SIM800_tell_sms_text)
        .appendField(new Blockly.FieldTextInput("ON/OFF"), "sss_text");
    this.appendStatementInput("sms_statement");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(340);
  //  this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};


Blockly.Blocks['init_temp_ds18b20_1']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.init_temp_ds18b20_1)
        .appendField(new Blockly.FieldTextInput("2"), "pin");
    this.setInputsInline(true);
    this.setColour("#525771");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks['init_temp_ds18b20_2']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.init_temp_ds18b20_2)
        .appendField(new Blockly.FieldTextInput("2"), "pin")
        .appendField(Blockly.Msg.init_temp_ds18b20_3)
        .appendField(new Blockly.FieldTextInput("1"), "nomer")
        .appendField(Blockly.Msg.init_temp_ds18b20_4)
        .appendField(new Blockly.FieldTextInput("0x28, 0xAA, 0xA0, 0xBA, 0x4B, 0x14, 0x01, 0x4D"), "adres");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#525771");
    //this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks['init_temp_ds18b20_3']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.init_temp_ds18b20_5)
        .appendField(new Blockly.FieldTextInput("2"), "pin")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#525771");
    //this.setTooltip('help Vitaliy...');
    //this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks['init_temp_ds18b20_4']={init:function(){
    this.appendDummyInput()
        .appendField("DS18B20 - Pin")
	    .appendField(new Blockly.FieldTextInput("2"), "pin")
        .appendField(Blockly.Msg.init_temp_ds18b20_3)
        .appendField(new Blockly.FieldTextInput("1"), "nomer");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#525771");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks['ESP_DeepSleep'] = {
  helpUrl: '',
  init: function() {
	this.setColour("#5B99A5");
	this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/ESP8266icon.png",33,33))
        .appendField(Blockly.Msg.ESP_deepsleep)
	this.appendValueInput("Value")
		.setCheck('Number');
	this.appendDummyInput()
		.appendField(Blockly.Msg.ESP_timesleep);	 
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip('To sleep the ESP8266 deeply. Important: You need to connect D0(GPIO16) to Reset pin');
  }
};

Blockly.Blocks["digital_mcp_write1"]={init:function(){
 //   var card=window.localStorage.card;
	this.setColour("#00929f");
   this.appendDummyInput().appendField("MCP23017 Pin - ").appendField(new Blockly.FieldDropdown([ ['GPA0','0'], ['GPA1','1'], ['GPA2','2'], ['GPA3','3'], ['GPA4','4'], ['GPA5','5'], ['GPA6','6'], ['GPA7','7'],['GPB0','8'], ['GPB1','9'], ['GPB2','10'], ['GPB3','11'],['GPB4','12'], ['GPB5','13'],['GPB6','14'],['GPB7','15']]), "PIN");
    this.appendDummyInput().appendField(" - ").appendField(new Blockly.FieldDropdown([['0','0'],['1','1']]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setHelpUrl(Blockly.Msg.HELPURL);
   // this.setTooltip(Blockly.Msg.del_tooltip)
	}
};
Blockly.Blocks["digital_mcp_read"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#00929f");
        this.setHelpUrl(Blockly.Msg.HELPURL);
   this.appendDummyInput().appendField("MCP23017 Pin - ").appendField(new Blockly.FieldDropdown([ ['GPA0','0'], ['GPA1','1'], ['GPA2','2'], ['GPA3','3'], ['GPA4','4'], ['GPA5','5'], ['GPA6','6'], ['GPA7','7'],['GPB0','8'], ['GPB1','9'], ['GPB2','10'], ['GPB3','11'],['GPB4','12'], ['GPB5','13'],['GPB6','14'],['GPB7','15']]), "PIN");
        this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT).appendField(" - ").appendField(new Blockly.FieldCheckbox("FALSE"), "pullup");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        this.setTooltip(Blockly.Msg.in_pullup_tooltip)}
};

Blockly.Blocks['wifi_init_sta'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		
        .appendField(Blockly.Msg.WIFI_sta_init)
		.appendField(Blockly.Msg.WIFI_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
	this.appendDummyInput()
		.appendField(Blockly.Msg.WIFI_ssid)
        .appendField(new Blockly.FieldTextInput("Wifi"), "SSID")
		.appendField(Blockly.Msg.WIFI_password)
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxxxxxxxx"), "PASSWORD");			
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip('Init and connect Wifi in station mode');
  //  this.setHelpUrl(''); 
  }
};

Blockly.Blocks['wifi_sta_staticip'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
        .appendField(Blockly.Msg.Wifi_sta_fixip)
	this.appendDummyInput()
		.appendField(Blockly.Msg.Wifi_ip)
        .appendField(new Blockly.FieldTextInput("192,168,1,150"), "IP")
		.appendField(Blockly.Msg.Wifi_Gateway)
        .appendField(new Blockly.FieldTextInput("192,168,1,1"), "Gateway")
		.appendField(Blockly.Msg.Wifi_Mask)
        .appendField(new Blockly.FieldTextInput("255,255,255,0"), "Mask");
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('In access point fix a ip static');
   // this.setHelpUrl(''); 
  }
};

Blockly.Blocks['wifi_init_ap'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/wifi.png",62,38))
        .appendField(Blockly.Msg.WIFI_ap_init)
		.appendField(Blockly.Msg.WIFI_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
	this.appendDummyInput()
		.appendField(Blockly.Msg.WIFI_ssid_ap)
        .appendField(new Blockly.FieldTextInput("Wifi"), "SSID")
		.appendField(Blockly.Msg.WIFI_password_ap)
        .appendField(new Blockly.FieldTextInput("1234"), "PASSWORD");			
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Init and connect Wifi in access point mode');
   // this.setHelpUrl(''); 
  }
};


Blockly.Blocks['wifi_ap_staticip'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
        .appendField(Blockly.Msg.Wifi_ap_fixip)
	this.appendDummyInput()
		.appendField(Blockly.Msg.Wifi_ip)
        .appendField(new Blockly.FieldTextInput("192,168,7,2"), "IP")
		.appendField(Blockly.Msg.Wifi_Gateway)
        .appendField(new Blockly.FieldTextInput("192,168,7,1"), "Gateway")
		.appendField(Blockly.Msg.Wifi_Mask)
        .appendField(new Blockly.FieldTextInput("255,255,255,0"), "Mask");
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('In access point fix a ip static');
   // this.setHelpUrl(''); 
  }
};

Blockly.Blocks['wifi_init_sta_ap'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/wifi.png",62,38))
        .appendField(Blockly.Msg.WIFI_sta_ap_init)
		.appendField(Blockly.Msg.WIFI_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
	this.appendDummyInput()
		.appendField(Blockly.Msg.WIFI_ssid)
        .appendField(new Blockly.FieldTextInput("Wifi"), "SSID")
		.appendField(Blockly.Msg.WIFI_password)
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxxxxxxxx"), "PASSWORD");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.WIFI_ssid_ap)
        .appendField(new Blockly.FieldTextInput("Wifi"), "SSID2")
		.appendField(Blockly.Msg.WIFI_password_ap)
        .appendField(new Blockly.FieldTextInput("1234"), "PASSWORD2");
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Init and connect Wifi in station and ap mode');
   // this.setHelpUrl(''); 
  }
};

Blockly.Blocks['wifiserver_port'] = {
  init: function() {
     this.setColour("#26C333");
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
		.appendField(Blockly.Msg.WifiServer_port);
   	this.appendValueInput("server_port")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Init the internal web server in the defined port number in the block');
   // this.setHelpUrl('');
  }
};


Blockly.Blocks['wifiserver_waitconnection'] = {
   init: function() {
    this.setColour("#26C333");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
        .appendField(Blockly.Msg.WifiServer_wait)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Wait connection into the internal server');
   //this.setHelpUrl(''); 
  }
};

Blockly.Blocks['wifiserver_ip'] = {
  init: function() {
    this.setColour("#26C333");
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
		.appendField(Blockly.Msg.WifiServer_ip)
    this.setOutput(true, 'String');
	this.setInputsInline(true);
   // this.setTooltip('Refund the ip of the connected customer');
	//this.setHelpUrl(''); 
  }
};

Blockly.Blocks['wifiserver_request'] = {
  init: function() {
    this.setColour("#26C333");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
		.appendField(Blockly.Msg.WifiServer_request)
    this.setOutput(true, 'String');
	this.setInputsInline(true);
   // this.setTooltip('Refund the request of the connected customer');
	//this.setHelpUrl(''); 
  }
};


Blockly.Blocks['wifiserver_answer'] = {
  init: function() {
     this.setColour("#26C333");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
		.appendField(Blockly.Msg.WifiServer_answer);
   	this.appendValueInput("server_answer")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Answer text.Our server respond to any customer this text');
   // this.setHelpUrl('');
  }
};

Blockly.Blocks['wifiserver_stop'] = {
   init: function() {
    this.setColour("#26C333");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
        .appendField(Blockly.Msg.WifiServer_stop)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Stop connected client');
   // this.setHelpUrl(''); 
  }
};

Blockly.Blocks['wifiserver_flush'] = {
   init: function() {
    this.setColour("#26C333");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
        .appendField(Blockly.Msg.WifiServer_flush)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('flush connected client');
   // this.setHelpUrl(''); 
  }
};

Blockly.Blocks['wifiserver_port_library'] = {
  init: function() {
     this.setColour("#00AAAA");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
		.appendField(Blockly.Msg.WifiServer_ESP8266webserver_port);
   	this.appendValueInput("server_port")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Init the internal web server in the defined port number in the block using the library ESP8266 WebServer');
   // this.setHelpUrl('');
  }
};

Blockly.Blocks['esp8266_handle_request'] = {
   init: function() {
    this.setColour("#00AAAA");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
        .appendField(Blockly.Msg.WifiServer_esp8266_manage_requets)
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Handle requests of clients');
   // this.setHelpUrl(''); 
  }
};
Blockly.Blocks["esp8266_send"]={init:function(){
    this.setColour("#00AAAA");
   
	this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
		.appendField(Blockly.Msg.WifiServer_esp8266_send_html_URL)
		.appendField(new Blockly.FieldTextInput(""),"address");
	this.appendDummyInput()
		.appendField(Blockly.Msg.WifiServer_esp8266_send_html_HTML_page)
		.appendField(new Blockly.FieldTextInput(Blockly.Msg.esp8266_send_html_title), "text");
    this.appendDummyInput()
		.appendField(Blockly.Msg.WifiServer_esp8266_send_html_execute);
    this.appendStatementInput("ORDERS");
    this.setPreviousStatement(true);
    this.setNextStatement(true); 
	//this.setHelpUrl(Blockly.Msg.esp8266_url);
  //  this.setTooltip(Blockly.Msg.esp8266_send_html_tooltip)
  }
};


Blockly.Blocks["esp8266_getArg"]={
	init:function(){
    this.setColour("#00AAAA");
   	this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
       	.appendField(Blockly.Msg.WifiServer_ESP8266webserver_parameter)
        .appendField(new Blockly.FieldTextInput("xxxxx"), "arg");		
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	//this.setTooltip(Blockly.Msg.esp8266_html_tooltip);
	//this.setHelpUrl(Blockly.Msg.esp8266_url);
	
    }
};


Blockly.Blocks["esp8266_useArg"]={init:function(){
    this.setColour("#00AAAA");
   // this.setHelpUrl(Blockly.Msg.esp8266_url);
   	this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/wifi.png",25,25))
       	.appendField(Blockly.Msg.WifiServer_ESP8266webserver_parameter2)
        .appendField(new Blockly.FieldTextInput("xxxxx"), "arg");	
    //this.setTooltip(Blockly.Msg.esp8266_html_tooltip);
    this.setOutput(true);
  }
};
Blockly.Blocks['mqtt_init'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/mqtt_image.png",62,38))
        .appendField(Blockly.Msg.MQTT_name_init)
		.appendField(Blockly.Msg.MQTT_logs)
        .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOGIC');
	this.appendDummyInput()
		.appendField(Blockly.Msg.MQTT_ssid)
        .appendField(new Blockly.FieldTextInput("Red Wifi"), "SSID")
		.appendField(Blockly.Msg.MQTT_password)
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxxxxxxxx"), "PASSWORD");			
	this.appendDummyInput()
		.appendField(Blockly.Msg.MQTT_server)
        .appendField(new Blockly.FieldTextInput("io.adafruit.com"), "SERVER")
		.appendField(Blockly.Msg.MQTT_port)
        .appendField(new Blockly.FieldTextInput("1883"), "PORT");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.MQTT_user)
        .appendField(new Blockly.FieldTextInput(" "), "USER")
		.appendField(Blockly.Msg.MQTT_APIkey)
        .appendField(new Blockly.FieldTextInput(" "), "APIKEY")	
		.appendField(Blockly.Msg.MQTT_client)
        .appendField(new Blockly.FieldTextInput("LX5_"), "IDCLIENT");	
		
		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip('Init mqtt functions');
  //  this.setHelpUrl(''); 
  }
};

Blockly.Blocks['mqtt_loop'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/mqtt_image.png", 62,38 ))
        .appendField(Blockly.Msg.MQTT_name)
		.appendField(Blockly.Msg.MQTT_topicattend)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Topic attend in the loop');
   // this.setHelpUrl('');
  }
};

Blockly.Blocks['mqtt_subscribe_num'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/mqtt_image.png", 62,38 ))
        .appendField(Blockly.Msg.MQTT_name)
		.appendField(Blockly.Msg.MQTT_topicsubscribe)
		.appendField(new Blockly.FieldTextInput("Topic path"), "TOPIC")
		.appendField(Blockly.Msg.MQTT_topicsubscribe2)
	this.appendValueInput("variable");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Topic subscription');
   // this.setHelpUrl('');
  },
    contextMenuType_: 'variables_set',
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};

Blockly.Blocks['mqtt_subscribe_text'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/mqtt_image.png", 62,38 ))
        .appendField(Blockly.Msg.MQTT_name)
		.appendField(Blockly.Msg.MQTT_topicsubscribe)
		.appendField(new Blockly.FieldTextInput("Topic path"), "TOPIC")
		.appendField(Blockly.Msg.MQTT_topicsubscribe3)
	this.appendValueInput("variable");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Topic subscription');
    //this.setHelpUrl('');
  },
    contextMenuType_: 'variables_set',
    customContextMenu: Blockly.Blocks["variables_get"].customContextMenu,
    getVarType: function(varName) {
        return Blockly.Types.getChildBlockType(this)
    }
};


Blockly.Blocks['mqtt_publish'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/mqtt_image.png", 62,38 ))
        .appendField(Blockly.Msg.MQTT_name)
		.appendField(Blockly.Msg.MQTT_topicpublish)
		.appendField(new Blockly.FieldTextInput("Topic path"), "TOPIC")
		.appendField(Blockly.Msg.MQTT_topicvalue)
	this.appendValueInput("variable");	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip('Topic subscription');
   // this.setHelpUrl('');
  }
};

Blockly.Blocks['ifttt_init'] = {
   init: function() {
    this.setColour("#26C555");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/ifttt.png",62,38))
       	.appendField(Blockly.Msg.IFTTT_init)
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxxxxxx"), "API_KEY");			
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip('Init IFTTT configuration');
   // this.setHelpUrl(''); 
  }
};


Blockly.Blocks['ifttt_send'] = {
   init: function() {
    this.setColour("#26C555");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/ifttt.png",62,38))
        .appendField(Blockly.Msg.IFTTT_send)
	this.appendValueInput("evento")
		.appendField(Blockly.Msg.IFTTT_event);
    this.appendValueInput("value1")
        .appendField(Blockly.Msg.IFTTT_value1);
    this.appendValueInput("value2")
        .appendField(Blockly.Msg.IFTTT_value2);
	this.appendValueInput("value3")
		.appendField(Blockly.Msg.IFTTT_value3);
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Send request to IFTTT');
   // this.setHelpUrl(''); 
  }
};

Blockly.Blocks['Init_NTP'] = {
   init: function() {
    this.setColour("#AD7B39");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/ntp_icon.png",25,25))
       	.appendField(Blockly.Msg.NTP_NAME);
    this.appendDummyInput()
        .appendField(Blockly.Msg.NTP_GMT)
		.appendField(new Blockly.FieldDropdown([['-12', '-12'],['-11', '-11'],['-10', '-10'],['-9', '-9'],['-8', '-8'],['-7', '-7'],['-6', '-6'],['-5', '-5'],['-4', '-4'],['-3', '-3'],['-2', '-2'],['-1', '-1'],['0', '0'],['+12', '12'],['+11', '11'],['+10', '10'],['+9', '9'],['+8', '8'],['+7', '7'],['+6', '6'],['+5', '5'],['+4', '4'],['+3', '3'],['+2', '2'],['+1', '1']]),"GMT")		
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip('Init IFTTT configuration');
  //  this.setHelpUrl(''); 
  }
};


Blockly.Blocks['order_read_NTP_server'] = {
  init: function() {
   this.setColour("#AD7B39");
    this.appendDummyInput()
	 //   .appendField(new Blockly.FieldImage("media/ntp_icon.png",25,25))
        .appendField(Blockly.Msg.NTP_READ_RTC);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip("Order to read of NTP server");
	//this.setHelpUrl(''); 
  }
};


Blockly.Blocks['values_NTP_server'] = {
  init: function() {
    this.setColour("#AD7B39");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/ntp_icon.png",25,25))
		.appendField(Blockly.Msg.NTP_NAME2)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.NTP_EPOCH, "0"],[Blockly.Msg.NTP_YEAR, "1"], [Blockly.Msg.NTP_MONTH, "2"],[Blockly.Msg.NTP_DAY, "3"],[Blockly.Msg.NTP_HOUR, "4"],[Blockly.Msg.NTP_MINUTE, "5"],[Blockly.Msg.NTP_SECOND, "6"]]), "OUTPUT_VALUE")
	    .appendField(Blockly.Msg.NTP_VALUES)
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
   // this.setTooltip('Refund the date or time parameter');
	//this.setHelpUrl(''); 
  }
};


Blockly.Blocks['values_text_NTP_server'] = {
  init: function() {
    this.setColour("#AD7B39");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/ntp_icon.png",25,25))
		.appendField(Blockly.Msg.NTP_NAME2)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.NTP_TEXT_DOFWEEK, "0"], [Blockly.Msg.NTP_TEXT_MONTH, "1"],[Blockly.Msg.NTP_TEXT_TIME, "2"]]), "OUTPUT_VALUE")
    this.setOutput(true, 'String');
	this.setInputsInline(true);
  //  this.setTooltip('Refund the text of day of week or month');
	//this.setHelpUrl(''); 
  }
};

Blockly.Blocks['Init_OpenWeather'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/openweather.png",25,25))
       	.appendField(Blockly.Msg.Openweather_init);
    this.appendDummyInput()
		.appendField(Blockly.Msg.Api_key)
        .appendField(new Blockly.FieldTextInput("xxxxxxxxxxx"), "API_KEY");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip('Init OpenWeather configuration');
  //  this.setHelpUrl(''); 
  }
};


Blockly.Blocks['order_read_OpenWeather_server'] = {
  init: function() {
   this.setColour("#26C6F8");
    this.appendDummyInput()
	//    .appendField(new Blockly.FieldImage("media/openweather.png",25,25))
        .appendField(Blockly.Msg.ReadWeather);
	this.appendValueInput("city")
        .setCheck(null)
		.appendField(Blockly.Msg.City);	
	this.appendValueInput("countrycode")
        .setCheck(null)
		.appendField(Blockly.Msg.CountryCode);		
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip("Order to read of OpenWeather server");
	//this.setHelpUrl(''); 
  }
};


Blockly.Blocks['values_OpenWeather_server'] = {
  init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/openweather.png",25,25))
		.appendField(Blockly.Msg.OW_Value)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.OW_Temperature, "0"],[Blockly.Msg.Humidity, "1"], [Blockly.Msg.Preassure, "2"],[Blockly.Msg.Temp_max, "3"],[Blockly.Msg.Temp_min, "4"],[Blockly.Msg.Feels_like, "5"],[Blockly.Msg.Cloud, "6"],[Blockly.Msg.wind_speed, "7"],[Blockly.Msg.wind_angle, "8"],[Blockly.Msg.icon_id, "9"],[Blockly.Msg.Visibility, "10"],[Blockly.Msg.sunrise, "11"],[Blockly.Msg.sunset, "12"]]), "OUTPUT_VALUE")
	    .appendField(Blockly.Msg.NTP_VALUES)
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
  //  this.setTooltip('Refund the date or time parameter');
	//this.setHelpUrl(''); 
  }
};


Blockly.Blocks['values_text_OpenWeather_server'] = {
  init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/openweather.png",25,25))
		.appendField(Blockly.Msg.OW_Value)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.Description, "0"], [Blockly.Msg.Weather, "1"],[Blockly.Msg.Icon, "2"],[Blockly.Msg.Country, "3"],[Blockly.Msg.LocationOW, "4"]]), "OUTPUT_VALUE")
    this.setOutput(true, 'String');
	this.setInputsInline(true);
  //  this.setTooltip('Refund the text of day of week or month');
	//this.setHelpUrl(''); 
  }
};

Blockly.Blocks['thingspeak_init'] = {
   init: function() {
    this.setColour("#5B7B8F");
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/thingspeak.png",25,25))
        .appendField(Blockly.Msg.Thingspeak_name_init)
		.appendField(Blockly.Msg.Thingspeak_channel)
        .appendField(new Blockly.FieldTextInput("1233456"), "CHANNEL")
	this.appendDummyInput()
		.appendField(Blockly.Msg.Thingspeak_apiwrite)
        .appendField(new Blockly.FieldTextInput("xxxxxxxx"), "API_WRITE_KEY")
		.appendField(Blockly.Msg.Thingspeak_apiread)
        .appendField(new Blockly.FieldTextInput("yyyyyyyy"), "API_READ_KEY");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Init thingspeak functions');
  //  this.setHelpUrl(''); 
  }
};


Blockly.Blocks['thingspeak_write'] = {
   init: function() {
    this.setColour("#5B7B8F");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/thingspeak.png",25,25))
        .appendField(Blockly.Msg.Thingspeak_name)
		.appendField(Blockly.Msg.Thingspeak_Write)
	this.appendValueInput("variable");	
	this.appendDummyInput()
        .appendField(Blockly.Msg.Thingspeak_field)
		.appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8']]),"FIELD")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Write field in thingspeak');
   // this.setHelpUrl('You need to wait >20 second to send another value');
  }
};


Blockly.Blocks['thingspeak_write_long'] = {
  init: function() {
    this.setColour("#5B7B8F");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/thingspeak.png",25,25))
        .appendField(Blockly.Msg.Thingspeak_name)
		.appendField(Blockly.Msg.Thingspeak_ReadLong)
		.appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8']]),"FIELD")	
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
   // this.setTooltip('Refund the field in long or number');
	//this.setHelpUrl(''); 
  }
};


Blockly.Blocks['thingspeak_write_float'] = {
  init: function() {
    this.setColour("#5B7B8F");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/thingspeak.png",25,25))
        .appendField(Blockly.Msg.Thingspeak_name)
		.appendField(Blockly.Msg.Thingspeak_ReadFloat)
		.appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8']]),"FIELD")	
    this.setOutput(true, 'Number');
	this.setInputsInline(true);
 //   this.setTooltip('Refund the field in long or number');
//	this.setHelpUrl(''); 
  }
};


Blockly.Blocks['telegram_init'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/telegram.png",25,25))
        .appendField(Blockly.Msg.Telegram_name_init)
		.appendField(Blockly.Msg.Telegram_BotToken)
        .appendField(new Blockly.FieldTextInput("xxxxxxxx"), "BOT_TOKEN")
	 this.appendDummyInput()
		.appendField(Blockly.Msg.Telegram_ChatID)
        .appendField(new Blockly.FieldTextInput("xxxxxxxx"), "CHAT_ID")
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip('Init telegram functions');
   // this.setHelpUrl(''); 
  }
};



Blockly.Blocks['telegram_loop_message'] = {
   init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/telegram.png",25,25))
        .appendField(Blockly.Msg.Telegram_Loop)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('');
   // this.setHelpUrl('');
  }
};


Blockly.Blocks["telegram_reception_function"]={init:function(){
		
        this.setColour("#26C6F8");

       // this.setHelpUrl(Blockly.Msg.HELPURL);
		this.appendDummyInput()
			//.appendField(new Blockly.FieldImage("media/telegram.png",25,25))
			.appendField(Blockly.Msg.Telegram_receive)
		this.appendStatementInput('DO').appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setInputsInline(false);
        this.setPreviousStatement(false);
        this.setNextStatement(false);
        //this.setTooltip('')
		}
};


Blockly.Blocks['telegram_sendmessage'] = {
  init: function() {
     this.setColour("#26C6F8");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/telegram.png",25,25))
		.appendField(Blockly.Msg.Telegram_name);
   	this.appendValueInput("texttosend")
        .setCheck(null)
		.appendField(Blockly.Msg.TelegramSend);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('');
    //this.setHelpUrl('');
  }
};



Blockly.Blocks['telegram_message_name_received'] = {
  init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
		//.appendField(new Blockly.FieldImage("media/telegram.png",25,25))
		.appendField(Blockly.Msg.Telegram_name)
        .appendField(Blockly.Msg.Telegram_fromName);
    this.setOutput(true, "String");
	this.setInputsInline(true);
   // this.setTooltip('Refund the field in long or number');
	//this.setHelpUrl(''); 
  }
};


Blockly.Blocks['telegram_message_received'] = {
  init: function() {
    this.setColour("#26C6F8");
    this.appendDummyInput()
	//	.appendField(new Blockly.FieldImage("media/telegram.png",25,25))
        .appendField(Blockly.Msg.Telegram_message)	
    this.setOutput(true, "String");
	this.setInputsInline(true);
    //this.setTooltip('Refund the message');
	//this.setHelpUrl(''); 
  }
};

Blockly.Blocks['emptytext'] = {
    init: function() {
        this.jsonInit({
            "message0": '%1',
            "args0": [
                {
                    "type": "field_input",
                    "name": "content",
                    "text": "text"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#FD6C9E"
        });
    }
};
Blockly.Blocks['esp_dig_pin'] = {init: function() {

    this.appendDummyInput().
    appendField("Medi: ");
    this.appendValueInput("estado");
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  this.setColour("#FD6C9E");
     }
  };


Blockly.Blocks['textmod'] = {
    init: function() {
        this.jsonInit({
            "message0": '< %1 > %2 %3 </>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "gras",
                            "strong"
                        ],
                        [
                            "italique",
                            "em"
                        ]
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#FD6C9E"
        });
    }
};

Blockly.Blocks['paragraph'] = {
    init: function() {
        this.jsonInit({
            "message0": '<p> %1 %2 </p>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#000000"
        });
    }
};

Blockly.Blocks['header'] = {
    init: function() {
        this.jsonInit({
            "message0": '<h %1 > %2 %3 </h>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "size",
                    "options": [["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],
]
                },
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#000000"
        });
    }
};

Blockly.Blocks['link'] = {
    init: function() {
        this.jsonInit({
            "message0": '<a href=%1 > %2 %3 </a>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "target",
                    "text": "http://"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "textcontainer"
                }
            ],
            "previousStatement": "textcontainer",
            "nextStatement": "textcontainer",
            "colour": "#FD6C9E"
        });
    }
};

Blockly.Blocks['table'] = {
    init: function() {
        this.jsonInit({
            "message0": '<table> %1 %2 </table>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "table"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#727272"
        });
    }
};

Blockly.Blocks['tablerow'] = {
    init: function() {
        this.jsonInit({
            "message0": '<tr> %1 %2 </tr>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "tablerow"
                }
            ],
            "previousStatement": "table",
            "nextStatement": "table",
            "colour": "#727272"
        });
    }
};

Blockly.Blocks['tableheading'] = {
    init: function() {
        this.jsonInit({
            "message0": '<th> %1 %2 </th>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html","textcontainer"]
                }
            ],
            "previousStatement": "tablerow",
            "nextStatement": "tablerow",
            "colour": "#727272"
        });
    }
};

Blockly.Blocks['tabledata'] = {
    init: function() {
        this.jsonInit({
            "message0": '<td> %1 %2 </td>',
            "args0": [
                {
                    "type": "input_value",
                    "name": "modifier",
					"check": "attributes"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": ["html","textcontainer"]
                }
            ],
            "previousStatement": "tablerow",
            "nextStatement": "tablerow",
            "colour": "#727272"
        });
    }
};

Blockly.Blocks['image'] = {
    init: function() {
        this.jsonInit({
            "message0": '<img src=%1 >',
            "args0": [
                {
                    "type": "field_input",
                    "name": "source",
                    "text": "http://lesormeaux.net/img/puzzle-piece.png"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#000000"
        });
    }
};

Blockly.Blocks['args'] = {
    init: function() {
        this.jsonInit({
            "message0": 'style : %1 %2',
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "stylecontent"
                }
            ],
            "colour": "#00CC00",
            "output": "attributes"
        });
    }
};

Blockly.Blocks['color'] = {
    init: function() {
        this.jsonInit({
            "message0": 'color: %1 ;',
            "args0": [
                {
                    "type": "field_colour",
                    "name": "value",
                    "colour": "#FF0000"

                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00CC00"
        });
    }
};

Blockly.Blocks['bgcolor'] = {
    init: function() {
        this.jsonInit({
            "message0": 'background-color: %1 ;',
            "args0": [
                {
                    "type": "field_colour",
                    "name": "value",
                    "colour": "#339999"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00CC00"
        });
    }
};

Blockly.Blocks['textalign'] = {
    init: function(){
        this.jsonInit({
            "message0": "text-align: %1 ;",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "value",
                    "options": [
                        ["center", "center"],
                        ["left", "left"],
                        ["right", "right"]
                    ]
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00CC00"
        })
    }
};

Blockly.Blocks['border'] = {
    init: function() {
        this.jsonInit({
            "message0": 'border: %1 px %2 %3 ;',
            "args0": [
                {
                    "type": "field_number",
                    "name": "width",
                    "value": 2,
                    "min": 1
                },
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [
                        [
                            "solid",
                            "solid"
                        ],
                        [
                            "dotted",
                            "dotted"
                        ],
                        [
                            "dashed",
                            "dashed"
                        ],
                        [
                            "double",
                            "double"
                        ]
                    ]
                },
                {
                    "type": "field_colour",
                    "name": "color",
                    "colour": "#000000"
                }
            ],
            "previousStatement": "stylecontent",
            "nextStatement": "stylecontent",
            "colour": "#00CC00"
        });
    }
};

Blockly.Blocks['input'] = {
    init: function() {
        this.jsonInit({
            "message0": '<input type=%1 name=%2 value=%3>',
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "type",
                    "options": [["checkbox","checkbox"],["radio","radio"],["submit","submit"],["text","text"]]
                },
                {
                    "type": "field_input",
                    "name": "name",
                    "text": ""
                },
                {
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                }
            ],
            "previousStatement": "form",
            "nextStatement": "form",
            "colour": "#154360"
        });
    }
};

Blockly.Blocks['form'] = {
    init: function() {
        this.jsonInit({
            "message0": '<form action=%1 method=%2> %3 %4 </form>',
            "args0": [
				{
                    "type": "field_input",
                    "name": "action",
                    "text": "/"
                },
                {
                    "type": "field_dropdown",
                    "name": "method",
                    "options": [["GET","GET"],["POST","POST"],["PUT","PUT"]]
                },
				{
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "content",
                    "check": "form"
                }
            ],
            "previousStatement": "html",
            "nextStatement": "html",
            "colour": "#154360"
        });
    }
};

Blockly.Blocks['label'] = {
    init: function() {
        this.jsonInit({
            "message0": '<label for=%1> %2 </label>',
            "args0": [
                {
                    "type": "field_input",
                    "name": "for",
                    "text": ""
                },
				{
                    "type": "field_input",
                    "name": "value",
                    "text": ""
                }
            ],
            "previousStatement": "form",
            "nextStatement": "form",
            "colour": "#154360"
        });
    }
};

Blockly.Blocks['br'] = {
    init: function() {
        this.jsonInit({
            "message0": '<br>',
            "args0": [
                {
                    "type": "field_dummy"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#000000"
        });
    }
};

Blockly.Blocks["esp8266_html"]={init:function(){
    this.setColour("#154360");
   // this.setHelpUrl(Blockly.Msg.esp8266_url);
    this.appendDummyInput().appendField(Blockly.Msg.esp8266_html_webpage).appendField(new Blockly.FieldTextInput("Name xxxxx"), "HEAD") ;
	this.appendStatementInput("BODY");
  //  this.setTooltip(Blockly.Msg.esp8266_html_tooltip)
  }
};

Blockly.Blocks['emptyVar'] = {
    init: function() {
        this.jsonInit({
            "message0": '%1',
            "args0": [
                {
                    "type": "field_variable",
                    "name": "VAR",
                    "variable": Blockly.Msg.VARIABLES_GET_ITEM
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#FFA500"
        });
    }
};
 Blockly.Blocks["rfid_init22"] = {
   init: function() {
    this.setColour("#6D7497");
    this.appendDummyInput()
        .appendField(Blockly.Msg.RFID_init);
  this.appendDummyInput()
        .appendField(Blockly.Msg.RFID_init2);
  this.appendValueInput("PIN_SDA", "Number")
        .setCheck("Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.RFID_PIN_RST);
  this.appendValueInput("PIN_RST", "Number")
        .setCheck("Number");
  this.appendDummyInput()
        .appendField(Blockly.Msg.RFID_init3);
  this.appendValueInput("PIN_KOD", "Number")
        .setCheck("Number");    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_072);
  }
};


Blockly.Blocks['st7735_backgroundcolor'] = {
   init: function() {
    this.setColour("#8B251E");
    this.appendDummyInput()
        .appendField(Blockly.Msg.ST7735_name)
	this.appendDummyInput()	
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('Fill the background of the color attached.');
    //this.setHelpUrl('');
  }
};


Blockly.Blocks['st7735_icon'] = {
   init: function() {
    this.setColour("#8B251E");
	this.appendDummyInput()
		.appendField(Blockly.Msg.ST7735_IconName)
        .appendField(new Blockly.FieldTextInput("IconName"), "NAME");	
	this.appendDummyInput()
		.appendField(Blockly.Msg.ST7735_ValueList)
        .appendField(new Blockly.FieldTextInput("0x00,0xff,0xaf,0x00"), "CODES");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 //   this.setTooltip('Write icon bmp image in memory');
  //  this.setHelpUrl('');
  }
};



Blockly.Blocks['st7735_drawicon'] = {
   init: function() {
    this.setColour("#8B251E");
    this.appendDummyInput()
		.appendField(Blockly.Msg.ST7735_IconName)
	this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("IconName"), "NAME");	
	this.appendValueInput("x0")
        .setCheck("Number")
        .appendField("X");
	this.appendValueInput("y0")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("W");
	this.appendValueInput("height")
        .setCheck("Number")
        .appendField("H");
	this.appendDummyInput()	
        .appendField(Blockly.Msg.lcd_128x128px_spi_textcolor)
		.appendField(new Blockly.FieldDropdown([["Black","ST7735_BLACK"],["Green", "ST7735_GREEN"],["Red", "ST7735_RED"],["Blue","ST7735_BLUE"],["Cyan", "ST7735_CYAN"],["Magenta", "ST7735_MAGENTA"],["Yellow", "ST7735_YELLOW"],["White", "ST7735_WHITE"]]), "COLOR")	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('Draw a bmp icon');
   // this.setHelpUrl('');
  }
};



Blockly.Blocks['otto_configuration'] = {init: function() {
	var card=window.localStorage.card;
    this.appendDummyInput("") 
	.appendField(Blockly.Msg.otto1);
	this.appendDummyInput()
	.appendField("TR")
	.setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_YL");
	this.appendDummyInput()
	.appendField("TL")
	.setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_YR");
	this.appendDummyInput()
	.appendField("BR")
	.setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_RL");
	this.appendDummyInput()
	.appendField("BL")
	.setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_RR");
	this.appendDummyInput()
	.appendField(Blockly.Msg.otto2)
	.setAlign(Blockly.ALIGN_RIGHT)
	.appendField(new Blockly.FieldDropdown(profile[card].dropdownAllPins), "PIN_Buzzer");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
   // this.setHelpUrl("");  
	}
};


Blockly.Blocks['otto_home'] = {init: function() {
    this.appendDummyInput("") 
	.appendField(Blockly.Msg.otto3);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
   // this.setTooltip(Blockly.Msg.OTTO9_HOME_TOOLTIP);
   // this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL); 
	}
};

 Blockly.Blocks['otto_move'] = {init: function() {
    this.appendDummyInput() 
        .appendField(Blockly.Msg.otto4)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.otto5, "FORWARD"], [Blockly.Msg.otto6, "BACKWARD"], [Blockly.Msg.otto7, "LEFT"], [Blockly.Msg.otto8, "RIGHT"], [Blockly.Msg.otto9, "BENDLEFT"], [Blockly.Msg.otto10, "BENDRIGHT"], [Blockly.Msg.otto11, "SHAKELEFT"], [Blockly.Msg.otto12, "SHAKERIGHT"], [Blockly.Msg.otto13, "jump"]]), "otto_move_sens");
    this.appendDummyInput() 
	.setAlign(Blockly.ALIGN_RIGHT) 
	.appendField(Blockly.Msg.otto31)  
	.appendField(new Blockly.FieldDropdown([[Blockly.Msg.otto14, "1000"],[Blockly.Msg.otto15, "2000"],[Blockly.Msg.otto16, "3000"] , [Blockly.Msg.otto17, "750"], [Blockly.Msg.otto18, "500"], [Blockly.Msg.otto19, "250"]]), "otto_move_speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
   // this.setTooltip(Blockly.Msg.OTTO9_MOVE_TOOLTIP);
  //  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
	}
};


Blockly.Blocks['otto_dance'] = {
  init: function() {
    this.appendDummyInput()
	.appendField(Blockly.Msg.otto28)
        .appendField(new Blockly.FieldDropdown([[" ⟵", "moonwalkerLEFT"],  [" ⟶", "moonwalkerRIGHT"],[" ⟵", "crusaitoLEFT"],[" ⟶", "crusaitoRIGHT"], [" ↑", "flappingFRONT"], [" ↓", "flappingBACK"]]), "otto_dance_movement");
    this.appendDummyInput()
	.setAlign(Blockly.ALIGN_RIGHT)
	.appendField(Blockly.Msg.otto29)
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.otto14, "1000"],[Blockly.Msg.otto15, "2000"],[Blockly.Msg.otto16, "3000"] , [Blockly.Msg.otto17, "750"], [Blockly.Msg.otto18, "500"], [Blockly.Msg.otto19, "250"]]), "otto_move_speed");
    this.appendDummyInput()
    .setAlign(Blockly.ALIGN_RIGHT)
	.appendField(Blockly.Msg.otto30)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.otto20, "25"], [Blockly.Msg.otto21, "10"], [Blockly.Msg.otto22, "40"]]), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
   // this.setTooltip(Blockly.Msg.OTTO9_DANCE_TOOLTIP);
   // this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
	}
};
 

Blockly.Blocks['otto_do'] = {init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.otto32)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.otto23, "swing"], [Blockly.Msg.otto24, "updown"], [Blockly.Msg.otto25, "tiptoeSwing"], [Blockly.Msg.otto26, "jitter"], [Blockly.Msg.otto27, "ascendingTurn"]]), "otto_do_movement");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
	.appendField(Blockly.Msg.otto31)
	.appendField(new Blockly.FieldDropdown([[Blockly.Msg.otto14, "1000"],[Blockly.Msg.otto15, "2000"],[Blockly.Msg.otto16, "3000"] , [Blockly.Msg.otto17, "750"], [Blockly.Msg.otto18, "500"], [Blockly.Msg.otto19, "250"]]), "otto_move_speed");
    this.appendDummyInput().setAlign(Blockly.ALIGN_RIGHT)
	.appendField(Blockly.Msg.otto30)
	     .appendField(new Blockly.FieldDropdown([[Blockly.Msg.otto20, "25"], [Blockly.Msg.otto21, "10"], [Blockly.Msg.otto22, "40"]]), "otto_dance_size");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
    // this.setTooltip(Blockly.Msg.OTTO9_DO_TOOLTIP);
    // this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL); 
	}
};


Blockly.Blocks['otto_sound'] = {init: function() {
    this.appendDummyInput() 
	.appendField(Blockly.Msg.otto33) 
	.appendField(new Blockly.FieldDropdown([[Blockly.Msg.otto34, "S_superHappy"], [Blockly.Msg.otto35, "S_happy"], [Blockly.Msg.otto36, "S_happy_short"], [Blockly.Msg.otto37, "S_sad"], [Blockly.Msg.otto38, "S_confused"], [Blockly.Msg.otto39, "S_OhOoh"], [Blockly.Msg.otto40, "S_OhOoh2"], [Blockly.Msg.otto41, "S_surprise"],[Blockly.Msg.otto42, "S_connection"], [Blockly.Msg.otto43, "S_disconnection"]]), "otto_sound");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4759F5");
  //  this.setTooltip(Blockly.Msg.OTTO9_SOUND_TOOLTIP);
  //  this.setHelpUrl(Blockly.Msg.OTTO9_DIY_URL);
	}
};
