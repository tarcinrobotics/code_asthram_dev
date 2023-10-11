"use strict";


Blockly.Blocks['ardublock_block']={init:function(){
    this.appendDummyInput()
       // .appendField(new Blockly.FieldImage("media/icon_block/001.png", 15, 15, null))
        .appendField(Blockly.Msg.nano1_control_15)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.nano1_control_0, "0"],[Blockly.Msg.nano1_control_1, "1"], [Blockly.Msg.nano1_control_2, "2"], [Blockly.Msg.nano1_control_3, "3"], [Blockly.Msg.nano1_control_4, "4"],[Blockly.Msg.nano1_control_5, "5"], [Blockly.Msg.nano1_control_6, "6"], [Blockly.Msg.nano1_control_7, "7"], [Blockly.Msg.nano1_control_8, "8"],[Blockly.Msg.nano1_control_9, "9"], [Blockly.Msg.nano1_control_10, "10"], [Blockly.Msg.nano1_control_11, "11"], [Blockly.Msg.nano1_control_12, "12"]]), "deistvie")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.nano1_control_13, "1"], [Blockly.Msg.nano1_control_14, "2"]]), "delay");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#7CB5D3");
    //this.setTooltip('help Vitaliy...');
    this.setHelpUrl(Blockly.Msg.HELPURLesp_001)
	}
};

Blockly.Blocks['ardublock_block1']={init:function(){
    this.appendDummyInput()
        //.appendField(new Blockly.FieldImage("media/icon_block/001.png", 15, 15, null))
        .appendField(Blockly.Msg.nano1_control_16)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.nano1_control_18, "1"],[Blockly.Msg.nano1_control_19, "5"],[Blockly.Msg.nano1_control_20, "2"],[Blockly.Msg.nano1_control_21, "6"], [Blockly.Msg.nano1_control_22, "3"], [Blockly.Msg.nano1_control_23, "4"], [Blockly.Msg.nano1_control_24, "7"]]), "deistvie")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.nano1_control_13, "1"], [Blockly.Msg.nano1_control_14, "2"]]), "delay")
		.appendField(Blockly.Msg.nano1_control_17)
		.appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]]), "forrobot");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(185);
    //this.setTooltip('help Vitaliy...');
    this.setHelpUrl(Blockly.Msg.HELPURLesp_002)
	}
};

 

Blockly.Blocks['ardublock_block4']={init:function(){
    this.appendDummyInput()
       // .appendField(new Blockly.FieldImage("media/icon_block/002.png", 25, 20, null))
        .appendField(Blockly.Msg.nano1_control_25)
        //.appendField(new Blockly.FieldNumber("15"), "uni")
		.appendField(new Blockly.FieldDropdown([["5", "5"], ["10", "10"], ["15", "15"], ["20", "20"], ["25", "25"], ["30", "30"], ["35", "35"], ["40", "40"]]), "uni")
        .appendField(Blockly.Msg.nano1_control_26);
    this.appendStatementInput("statement");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#6D7497");
    this.setTooltip(Blockly.Msg.nano1_control_27);
    this.setHelpUrl(Blockly.Msg.HELPURLesp_003)
	}
};

Blockly.Blocks['ardublock_block3']={init:function(){
    this.appendDummyInput()
       // .appendField(new Blockly.FieldImage("media/icon_block/001.png", 15, 15, null))
        .appendField(Blockly.Msg.nano1_control_28)
        .appendField(new Blockly.FieldDropdown([["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"],["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"]]), "deistvie")
        .appendField(Blockly.Msg.nano1_control_29)
		.appendField(new Blockly.FieldDropdown([["10", "10"],["20", "20"],["30", "30"],["40", "40"],["50", "50"],["60", "60"],["70", "70"],["80", "80"],["90", "90"],["100", "100"],["110", "110"],["120", "120"],["130", "130"],["140", "140"],["150", "150"],["160", "160"],["170", "170"]]), "gradus")
		.appendField(Blockly.Msg.nano1_control_30)
		.appendField(new Blockly.FieldDropdown([["10", "10"],["20", "20"],["30", "30"],["40", "40"],["50", "50"],["60", "60"],["70", "70"],["80", "80"],["90", "90"],["100", "100"],["110", "110"],["120", "120"],["130", "130"],["140", "140"],["150", "150"],["160", "160"],["170", "170"],["180", "180"],["190", "190"],["200", "200"],["210", "210"],["220", "220"],["230", "230"],["240", "240"]]), "delay");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#7CB5D3");
    //this.setTooltip('help Vitaliy...');
    this.setHelpUrl(Blockly.Msg.HELPURLesp_006)
	}
};
Blockly.Blocks['ardublock_block5']={init:function(){
    this.appendDummyInput()
       // .appendField(new Blockly.FieldImage("media/icon_block/001.png", 15, 15, null))
        .appendField(Blockly.Msg.nano1_control_31)
        .appendField(new Blockly.FieldDropdown([["100", "100"], ["300", "300"], ["500", "500"], ["700", "700"],["1000", "1000"], ["1500", "1500"], ["3000", "3000"], ["5000", "5000"]]), "delay")
        .appendField(Blockly.Msg.nano1_control_32);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#5B99A5");
    //this.setTooltip('help Vitaliy...');
     this.setHelpUrl(Blockly.Msg.HELPURLesp_007)
	}
};

Blockly.Blocks['ardublock_block6']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.nano1_control_33);
    this.appendStatementInput("_statement");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
  //  this.setTooltip('help Vitaliy...');
    this.setHelpUrl(Blockly.Msg.HELPURLesp_004)
	}
};

Blockly.Blocks['ardublock_block7']={init:function(){
    this.appendDummyInput()
       // .appendField(new Blockly.FieldImage("media/icon_block/001.png", 15, 15, null))
        .appendField(Blockly.Msg.nano1_control_34)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.nano1_control_35, "1"], [Blockly.Msg.nano1_control_36, "0"]]), "digitallled");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#A5675B");
    //this.setTooltip('help Vitaliy...');
    this.setHelpUrl(Blockly.Msg.HELPURLesp_008)
	}
};
// робот манипулятор
Blockly.Blocks['ardublock_block8']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.nano1_control_37)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.nano1_control_38, "120"], [Blockly.Msg.nano1_control_39, "50"], [Blockly.Msg.nano1_control_40, "20"]]), "gradus");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip(Blockly.Msg.nano1_control_41);
 this.setHelpUrl(Blockly.Msg.HELPURLesp_014)
	}
};
Blockly.Blocks['ardublock_block9']={init:function(){
    this.appendDummyInput()
       // .appendField(new Blockly.FieldImage("media/icon_block/001.png", 15, 15, null))
        .appendField(Blockly.Msg.nano1_control_28)
        .appendField(new Blockly.FieldDropdown([["3", "3"], ["4", "4"], ["5", "5"],["6", "6"], ["7", "7"]]), "deistvie")
        .appendField(Blockly.Msg.nano1_control_29)
		.appendField(new Blockly.FieldDropdown([["10", "10"],["20", "20"],["30", "30"],["40", "40"],["50", "50"],["60", "60"],["70", "70"],["80", "80"],["90", "90"],["100", "100"],["110", "110"],["120", "120"],["130", "130"],["140", "140"],["150", "150"],["160", "160"],["170", "170"]]), "gradus")
		.appendField(Blockly.Msg.nano1_control_30)
		.appendField(new Blockly.FieldDropdown([["10", "10"],["20", "20"],["30", "30"],["40", "40"],["50", "50"],["60", "60"],["70", "70"],["80", "80"],["90", "90"],["100", "100"],["110", "110"],["120", "120"],["130", "130"],["140", "140"],["150", "150"],["160", "160"],["170", "170"],["180", "180"],["190", "190"],["200", "200"],["210", "210"],["220", "220"],["230", "230"],["240", "240"]]), "delay");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#7CB5D3");
    //this.setTooltip('help Vitaliy...');
    this.setHelpUrl(Blockly.Msg.HELPURLesp_009)
	}
};
Blockly.Blocks['ardublock_block10']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.nano1_control_42)
		//.appendField(new Blockly.FieldAngle("90"), "gradus")
		.appendField(new Blockly.FieldDropdown([["10", "10"],["40", "40"],["90", "90"],["140", "140"],["170", "170"]]), "gradus")
		.appendField(Blockly.Msg.nano1_control_30)
		.appendField(new Blockly.FieldDropdown([["10", "10"],["20", "20"],["30", "30"],["40", "40"],["50", "50"],["60", "60"],["70", "70"],["80", "80"],["90", "90"],["100", "100"]]), "delay");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip(Blockly.Msg.nano1_control_43);
      this.setHelpUrl(Blockly.Msg.HELPURLesp_013)
	}
};

 Blockly.Blocks['ardublock_block11']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.nano1_control_44)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.nano1_control_45, "0"], [Blockly.Msg.nano1_control_46, "1"]]), "bb_dropdown");   
    this.appendStatementInput("bot_statement");
	this.appendStatementInput("bot_statement1");
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#867B9A");
    this.setTooltip(Blockly.Msg.nano1_control_47);
    this.setHelpUrl(Blockly.Msg.HELPURLesp_011)
	}
 };
 
 Blockly.Blocks['ardublock_block12']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.nano1_control_48);
    this.appendStatementInput("top")
        .appendField("↑");
    this.appendStatementInput("bot")
        .appendField("↓");
    this.appendStatementInput("left")
        .appendField("←");
    this.appendStatementInput("righit")
        .appendField("→");
    this.appendStatementInput("noneboz")
        .appendField(" o");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip(Blockly.Msg.nano1_control_49);
    this.setHelpUrl(Blockly.Msg.HELPURLesp_010)
	}
};

Blockly.Blocks['ardublock_block13']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.nano1_control_50)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.nano1_control_51, "1"], [Blockly.Msg.nano1_control_52, "2"], [Blockly.Msg.nano1_control_53, "3"], [Blockly.Msg.nano1_control_54, "4"], [Blockly.Msg.nano1_control_55, "5"], [Blockly.Msg.nano1_control_56, "6"]]), "dropdown")
		.appendField(Blockly.Msg.nano1_control_57)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.nano1_control_58, "1"], [Blockly.Msg.nano1_control_59, "2"]]), "delay");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#00929f");
    this.setTooltip(Blockly.Msg.nano1_control_60);
   this.setHelpUrl(Blockly.Msg.HELPURLesp_012)
	}
};

// плата enjoy esp32  

Blockly.Blocks['enjoyesp1']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.espled1)
     .appendField(new Blockly.FieldDropdown([['Board 1', '13'],['Board 2', '15'],['J1', '25'],['J2', '32'],['J3', '12'],['J4', '14'],['J5', '18'],['J6', '19'],['J7', '16'],['J8', '4']]), "nomer")
	 .appendField(new Blockly.FieldDropdown([[Blockly.Msg.espled2, "1"], [Blockly.Msg.espled3, "0"]]), "sig");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#50A0CC");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};Blockly.Blocks['enjoyesp2']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.espled4)
        .appendField(new Blockly.FieldColour("#ff0000"), "colour");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#50A0CC");
  //  this.setTooltip('help Vitaliy...');
  //  this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks["esp32ledi_ws2812"] = {
  init: function() {
  this.setColour("#50A0CC");
  this.appendDummyInput()
        .appendField(Blockly.Msg.espled5)
		.appendField(new Blockly.FieldDropdown([["J1", "25"], ["J2", "32"], ["J3", "12"], ["J4", "14"], ["J5", "18"], ["J6", "19"], ["J7", "4"], ["J8", "16"]]), "Pin");
  this.appendDummyInput()
        .appendField(Blockly.Msg.ledstrip_WS9)
        .appendField(new Blockly.FieldDropdown([["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"],["11", "11"],["12", "12"],["13", "13"],["14", "14"],["15", "15"],["16", "16"],["17", "17"],["18", "18"],["19", "19"],["20", "20"]]), "ledon")
        .appendField(Blockly.Msg.ledstrip_WS10)
        .appendField(new Blockly.FieldDropdown([["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"],["11", "11"],["12", "12"],["13", "13"],["14", "14"],["15", "15"],["16", "16"],["17", "17"],["18", "18"],["19", "19"],["20", "20"]]),  "ledoff")
        .appendField(Blockly.Msg.ledstrip_WS11)
        .appendField(new Blockly.FieldColour("#ff0000"), "RGBCOLOR")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.espled6,'6'],[Blockly.Msg.espled7,'7'],[Blockly.Msg.espled8,'8'],[Blockly.Msg.espled9,'10'],[Blockly.Msg.espled10,'11'],[Blockly.Msg.espled11,'12'],[Blockly.Msg.espled12,'13']]), "RE_NUMBER");	
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURLesp_070);
  }
};       
 
 
 
 
 Blockly.Blocks["serial_read2"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#5BA599");
        this.setHelpUrl(Blockly.Msg.HELPURL_035);
    if (card!="python"){this.appendDummyInput().appendField(Blockly.Msg.Serial_read);} else {this.appendDummyInput().appendField(Blockly.Msg.repl_read);}
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.Serial_read_tooltip)
    }
};

Blockly.Blocks["serial_available2"]={init:function(){
        this.setColour("#5BA599");
        this.setHelpUrl(Blockly.Msg.HELPURL_035);
        this.appendDummyInput().appendField(Blockly.Msg.Serial_available);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.Serial_available_tooltip)
    }
};
Blockly.Blocks["soft_init2"]={init:function(){
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
Blockly.Blocks["soft_write2"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL_036);
        this.setColour("#0060aa");
        this.appendValueInput("CONTENT", "String").appendField(Blockly.Msg.SSERIAL_Write);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.SSERIAL_Write_tooltip)
    }
};
Blockly.Blocks["soft_read2"]={init:function(){
        this.setColour("#0060aa");
       this.setHelpUrl(Blockly.Msg.HELPURL_037);
        this.appendDummyInput().appendField(Blockly.Msg.SSERIAL_Read);
        this.setInputsInline(true);
        this.setOutput(true, "String");
        //this.setTooltip(Blockly.Msg.SSERIAL_Read_tooltip)
    }
};
Blockly.Blocks["soft_available2"]={init:function(){
        this.setHelpUrl(Blockly.Msg.HELPURL_037);
        this.setColour("#0060aa");
        this.appendDummyInput().appendField(Blockly.Msg.SSERIAL_Available);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.SSERIAL_Available_tooltip)
    }
};

Blockly.Blocks["eeprom_write_byteesp"] = {    
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
Blockly.Blocks["eeprom_read_byteesp"] = {  
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
Blockly.Blocks["dht_sensor11"] = {
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

Blockly.Blocks['lcdi2c_setup'] = {
   init: function() {
   this.setColour("#4B886A");
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_I2C_setup);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0x27"), "NAME");
   this.appendValueInput("COLUMNS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCD_setup_COLUMNS);
    this.appendValueInput("ROWS")
        .setCheck("Number")
        .appendField(Blockly.Msg.LCD_setup_ROWS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip('');
    
  }
};

Blockly.Blocks['lcdi2c_setBacklight'] = {
  init: function() {
    this.setColour("#4B886A");
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_setBcklight)
		.appendField(new Blockly.FieldDropdown([["ON", "1"], ["OFF", "0"]]), "OUTPUT_DISPLAY")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip('');
  //  this.setHelpUrl('');
  }
};

Blockly.Blocks['lcdi2c_clear'] = {
  init: function() {
    this.setColour("#4B886A");
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCDP_Clear);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip('');
   // this.setHelpUrl('');
  }
};

Blockly.Blocks['OLED_init'] = {
  init: function() {
  this.appendDummyInput()
     .appendField(Blockly.Msg.miniLCD_I2C_setup)
     this.appendDummyInput()
     .setAlign(Blockly.ALIGN_RIGHT)
     .appendField(new Blockly.FieldDropdown([["64", "64"], ["32", "32"]]), "height");
	  this.appendDummyInput()
     .appendField(Blockly.Msg.miniLCD_I2C_setupsds)
	 
     .appendField(new Blockly.FieldDropdown([["0x3C", "0x3C"], ["0x3D", "0x3D"], ["0x7A", "0x7A"], ["0x7B", "0x7B"], ["0x78", "0x78"]]), "address");
     this.setInputsInline(true);
	 this.setPreviousStatement(true);
	 this.setNextStatement(true);
     this.setColour("#4b779f");
   //  this.setTooltip('');
  //   this.setHelpUrl('');
   }
 };
 
 Blockly.Blocks['OLED_rotate'] = {
  init: function() {
     this.appendDummyInput()
     .appendField(Blockly.Msg.miniLCD_I2C_setuprotate)
     .appendField(new Blockly.FieldDropdown([["0°", "0"], ["90°", "1"], ["180°", "2"], ["270°", "3"]]), "angle");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#4b779f");
    // this.setTooltip('');
   //  this.setHelpUrl('');
   }
 };
 Blockly.Blocks['OLED_data'] = {
  init: function() {
    Blockly.FieldCheckbox.CHECK_CHAR= '✓'
  this.appendDummyInput()  .appendField(Blockly.Msg.miniLCD_I2C_print_x)
  this.appendValueInput("X") .setAlign(Blockly.ALIGN_RIGHT) .setCheck("Number") ;
  this.appendValueInput("Y") .setAlign(Blockly.ALIGN_RIGHT)  .setCheck("Number")    .appendField(Blockly.Msg.miniLCD_I2C_print_y);
 // this.appendValueInput("height")   .setAlign(Blockly.ALIGN_RIGHT)   .setCheck("Number")   .appendField(Blockly.Msg.miniLCD_I2C_print_F);
   this.appendDummyInput()
   .appendField(Blockly.Msg.miniLCD_I2C_print_F)
   .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "height");
  this.appendValueInput("print")  .setAlign(Blockly.ALIGN_RIGHT)  .appendField(Blockly.Msg.miniLCD_I2C_print_T);
 // this.appendDummyInput() .appendField(Blockly.Msg.MAX7219_LM_Led) .appendField(new Blockly.FieldCheckbox("TRUE"), "draw");
  this.setInputsInline(true);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
     this.setColour("#4b779f");
  //   this.setTooltip('');
  //   this.setHelpUrl('');
   }
 };
 Blockly.Blocks['OLED_clear'] = {
  init: function() {
    this.appendDummyInput()  .appendField(Blockly.Msg.miniLCD_I2C_print_drawnone);
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#4b779f");
   // this.setTooltip('');
   //  this.setHelpUrl('');
  }
};
Blockly.Blocks['dwin_box_ttl2']={init:function(){
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

Blockly.Blocks["DFPplayerMp3_init_serial132"] = {
  init: function() {
  this.setColour("#A66E96");
  this.appendDummyInput()
        .appendField(Blockly.Msg.MP3_name);
  this.appendValueInput("tx", "Number")
        .setCheck("Number");
		  this.appendDummyInput()
        .appendField(Blockly.Msg.MP3_name11);
  this.appendValueInput("rx", "Number")
        .setCheck("Number");
		  
  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_078);
  }
};


Blockly.Blocks["DFPplayerMp3_init_serial232"] = {
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
 

Blockly.Blocks["DFPplayerMp3_init_serial432"] = {
  init: function() {
  this.setColour("#A66E96");
  this.appendDummyInput()
   .appendField(Blockly.Msg.MP3_name4) 
   .appendField(new Blockly.FieldDropdown([['play', '0x0D,0,1'],['next', '0x01,0,1'],['prev', '0x02,0,1'],['pause', '0x0E,0,0']]), "dp")  

  this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_078);
  }
};




Blockly.Blocks['bt_key_print']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.bt_key1)
        .appendField(new Blockly.FieldTextInput("ESP Block 2.0"), "_text");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#697888");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['bt_key_modifikation']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.bt_key2)
        .appendField(new Blockly.FieldDropdown([["RETURN", "KEY_RETURN"],["NEXT TRACK", "KEY_MEDIA_NEXT_TRACK"],["PREVIOUS TRACK", "KEY_MEDIA_PREVIOUS_TRACK"],["STOP", "KEY_MEDIA_STOP"],["PLAY PAUSE", "KEY_MEDIA_PLAY_PAUSE"],["MUTE", "KEY_MEDIA_MUTE"],["VOLUME UP", "KEY_MEDIA_VOLUME_UP"],["VOLUME DOWN", "KEY_MEDIA_VOLUME_DOWN"],["WWW HOME", "KEY_MEDIA_WWW_HOME"],["LOCAL MACHINE BROWSER", "KEY_MEDIA_LOCAL_MACHINE_BROWSER"],["CALCULATOR", "KEY_MEDIA_CALCULATOR"],["WWW BOOKMARKS", "KEY_MEDIA_WWW_BOOKMARKS"],["WWW SEARCH", "KEY_MEDIA_WWW_SEARCH"],["WWW STOP", "KEY_MEDIA_WWW_STOP"],["WWW BACK", "KEY_MEDIA_WWW_BACK"],["CONTROL CONFIGURATION", "KEY_MEDIA_CONSUMER_CONTROL_CONFIGURATION"],["EMAIL READER", "KEY_MEDIA_EMAIL_READER"]]), "_dropdown");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#697888");
  // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
   }
};
Blockly.Blocks['bt_key_press']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.bt_key3)
        .appendField(new Blockly.FieldDropdown([["CTRL", "KEY_LEFT_CTRL"],["ALT", "KEY_LEFT_ALT"],["DELETE", "KEY_DELETE"]]), "_dropdown");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#697888");
  // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
   }
};
Blockly.Blocks['bt_key_release']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.bt_key4);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#697888");
  // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
   }
};

Blockly.Blocks['bt_key_delay']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.bt_key5)
        .appendField(new Blockly.FieldTextInput("8"), "_text");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#697888");
    this.setTooltip('2 - 10');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};


Blockly.Blocks['bt_key_cliker']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.bt_key6)
        .appendField(new Blockly.FieldDropdown([["CTRL", "KEY_LEFT_CTRL"],["ALT", "KEY_LEFT_ALT"],["DELETE", "KEY_DELETE"]]), "_dropdown");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#697888");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks['bt_key_cliker']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.bt_key6)
        .appendField(new Blockly.FieldDropdown([["LEFT", "MOUSE_LEFT"],["RIGHT", "MOUSE_RIGHT"],["MIDDLE", "MOUSE_MIDDLE"],["BACK", "MOUSE_BACK"],["FORWARD", "MOUSE_FORWARD"]]), "_dropdown");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#697888");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['bt_key_cliker1']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.bt_key7)
        .appendField(new Blockly.FieldDropdown([["up", "up"],["down", "down"],["left", "left"],["right", "right"]]), "_dropdown")
		.appendField(Blockly.Msg.bt_key9)
		.appendField(new Blockly.FieldTextInput("50"), "_text");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#697888");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};
Blockly.Blocks['bt_key_cliker2']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.bt_key8)
        .appendField(new Blockly.FieldDropdown([["up", "up"],["down", "down"],["left", "left"],["right", "right"]]), "_dropdown")
		.appendField(Blockly.Msg.bt_key9)
		.appendField(new Blockly.FieldTextInput("50"), "_text")
		.appendField(Blockly.Msg.bt_key10);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#697888");
   // this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
	}
};

Blockly.Blocks['RTTTL_music'] = {
  init: function() {
  this.setColour("#82638E");
    this.appendDummyInput()
        .appendField(Blockly.Msg.TonePin);
  this.appendValueInput("PIN", "Number")
        .setCheck("Number");
	this.appendDummyInput()	
		.appendField(Blockly.Msg.ARDUINO_RTTTL_BLOCK)
        .appendField(new Blockly.FieldDropdown([['StarWars','StarWars'],['MahnaMahna','MahnaMahna'],['LeisureSuit','LeisureSuit'],['MissionImp','MissionImp'],['Entertainer','Entertainer'],['Muppets','Muppets'],['Flinstones','Flinstones'],['YMCA','YMCA'],['TheSimpsons','TheSimpsons'],['Indiana','Indiana'],['TakeOnMe','TakeOnMe'],['Looney','Looney'],['thCenFox','thCenFox'],['Bond','Bond'],['GoodBad','GoodBad'],['PinkPanther','PinkPanther'],['ATeam','ATeam'],['Jeopardy','Jeopardy'],['Gadget','Gadget'],['Smurfs','Smurfs'],['Toccata','Toccata'],['Short','Short'],['JingleBell','JingleBell'],['Rudolph','Rudolph'],['WeWishYou','WeWishYou'],['WinterWonderland','WinterWonderland'],['OhDennenboom','OhDennenboom'],['LetItSnow','LetItSnow'],['Frosty','Frosty'],['SilentNight','SilentNight'],['LastChristmas','LastChristmas'],['AllIWant','AllIWant'],['AmazingGrace','AmazingGrace']]), "MELODY");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip("Play RTTTL melody");
	//this.setHelpUrl(''); 
  }
};
Blockly.Blocks['RTTTL_music1'] = {
  init: function() {
  this.setColour("#AE5D74");
    this.appendDummyInput()
        .appendField(Blockly.Msg.TonePin23);
  //this.appendValueInput("PIN", "Number")
  //      .setCheck("Number");
	this.appendDummyInput()	
		.appendField(Blockly.Msg.ARDUINO_RTTTL_BLOCK)
        .appendField(new Blockly.FieldDropdown([['StarWars','StarWars'],['MahnaMahna','MahnaMahna'],['LeisureSuit','LeisureSuit'],['MissionImp','MissionImp'],['Entertainer','Entertainer'],['Muppets','Muppets'],['Flinstones','Flinstones'],['YMCA','YMCA'],['TheSimpsons','TheSimpsons'],['Indiana','Indiana'],['TakeOnMe','TakeOnMe'],['Looney','Looney'],['thCenFox','thCenFox'],['Bond','Bond'],['GoodBad','GoodBad'],['PinkPanther','PinkPanther'],['ATeam','ATeam'],['Jeopardy','Jeopardy'],['Gadget','Gadget'],['Smurfs','Smurfs'],['Toccata','Toccata'],['Short','Short'],['JingleBell','JingleBell'],['Rudolph','Rudolph'],['WeWishYou','WeWishYou'],['WinterWonderland','WinterWonderland'],['OhDennenboom','OhDennenboom'],['LetItSnow','LetItSnow'],['Frosty','Frosty'],['SilentNight','SilentNight'],['LastChristmas','LastChristmas'],['AllIWant','AllIWant'],['AmazingGrace','AmazingGrace']]), "MELODY");
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
   // this.setTooltip("Play RTTTL melody");
	//this.setHelpUrl(''); 
  }
};
//сервомотор  32
  Blockly.Blocks["stepservo_continuos_move_ru32"] = {
  init: function() {
    this.setColour(80);
  this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.stepPIN)
		.appendField(new Blockly.FieldDropdown([['25', '1'],['32', '2'],['14', '3'],['12', '4'],['18', '5'],['19', '6'],['16', '7'],['4', '8']]), "PIN");
        //this.appendValueInput("PIN", "Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.stepROTSERVO_Direction)
   // this.appendValueInput("PIN_GR", "Number");
      .appendField(new Blockly.FieldDropdown([['10', '16'],['20', '15'],['30', '14'],['40', '13'],['50', '12'],['60', '11'],['70', '10'],['80', '9'],['90', '8'],['100', '7']]), "PIN_GR");
    this.appendValueInput("SpeedServo")
        .setCheck('Number')
    .appendField(Blockly.Msg.stepROTSERVO_Speed);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
 // this.setHelpUrl(Blockly.Msg.HELPURL_050);
  }
};
//сервомотор  32
  Blockly.Blocks["stepservo_continuos_move_ru32ww"] = {
  init: function() {
    this.setColour("#B39E2C");
  this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.stepPIN)
		.appendField(new Blockly.FieldDropdown([['J1', '1'],['J2', '2'],['J3', '4'],['J4', '3'],['J5', '5'],['J6', '6'],['J7', '8'],['J8', '7']]), "PIN");
        //this.appendValueInput("PIN", "Number");
  this.appendDummyInput()
    .appendField(Blockly.Msg.stepROTSERVO_Direction)
   // this.appendValueInput("PIN_GR", "Number");
      .appendField(new Blockly.FieldDropdown([['10', '16'],['20', '15'],['30', '14'],['40', '13'],['50', '12'],['60', '11'],['70', '10'],['80', '9'],['90', '8'],['100', '7']]), "PIN_GR");
    this.appendValueInput("SpeedServo")
        .setCheck('Number')
    .appendField(Blockly.Msg.stepROTSERVO_Speed);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
 // this.setHelpUrl(Blockly.Msg.HELPURL_050);
  }
};

//сервомотор  32n
  Blockly.Blocks["stepservo_continuos_move_ru32n"] = {
  init: function() {
    this.setColour(80);
  this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.stepPIN)
		.appendField(new Blockly.FieldDropdown([['25', '1'],['32', '2'],['14', '3'],['12', '4'],['18', '5'],['19', '6'],['16', '7'],['4', '8']]), "PIN");
        //this.appendValueInput("PIN", "Number");
  this.appendDummyInput()
   // .appendField(Blockly.Msg.stepROTSERVO_Direction)
   // this.appendValueInput("PIN_GR", "Number");
   //   .appendField(new Blockly.FieldDropdown([['10', '16'],['20', '15'],['30', '14'],['40', '13'],['50', '12'],['60', '11'],['70', '10'],['80', '9'],['90', '8'],['100', '7']]), "PIN_GR");
    this.appendValueInput("SpeedServo")
        .setCheck('Number')
    .appendField(Blockly.Msg.stepROTSERVO_Speed);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_050);
  }
};
//сервомотор  32n
  Blockly.Blocks["stepservo_continuos_move_ru32n2"] = {
  init: function() {
    this.setColour('#B39E2C');
  this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(Blockly.Msg.stepPIN)
		.appendField(new Blockly.FieldDropdown([['J1', '1'],['J2', '2'],['J3', '4'],['J4', '3'],['J5', '5'],['J6', '6'],['J7', '8'],['J8', '7']]), "PIN");
        //this.appendValueInput("PIN", "Number");
  this.appendDummyInput()
   // .appendField(Blockly.Msg.stepROTSERVO_Direction)
   // this.appendValueInput("PIN_GR", "Number");
   //   .appendField(new Blockly.FieldDropdown([['10', '16'],['20', '15'],['30', '14'],['40', '13'],['50', '12'],['60', '11'],['70', '10'],['80', '9'],['90', '8'],['100', '7']]), "PIN_GR");
    this.appendValueInput("SpeedServo")
        .setCheck('Number')
    .appendField(Blockly.Msg.stepROTSERVO_Speed);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
 // this.setHelpUrl(Blockly.Msg.HELPURL_050);
  }
};
 
 Blockly.Blocks["inout_angle_maths22"] = {
    init: function() {
        this.setColour('#B39E2C');
       // this.setHelpUrl(Blockly.Msg.HELPURL_006);
        this.appendDummyInput("").appendField(new Blockly.FieldAngle("90"), "ANGLE");
        this.setOutput(true, "Number");
        //this.setTooltip("angle")
    }
};
Blockly.Blocks["ultrasonic_ranger_sensor32w"] = {
  init: function() {
     this.setColour("#2CB396");
    this.appendDummyInput()
      .appendField(Blockly.Msg.ultrasonic_ranger);
    //    .appendField(Blockly.Msg.TRIG);
  //this.appendValueInput("PIN_TRIG", 'Number')
    //    .setCheck('Number');
 // this.appendDummyInput()
     //   .appendField(Blockly.Msg.Echo);
 // this.appendValueInput("PIN_ECHO", 'Number')
  //      .setCheck('Number');
    this.setOutput(true, 'Number');
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_059);
  }
};

Blockly.Blocks["dht_sensor11ww"] = {
  init: function() {
     this.setColour("#2CB396");
    this.appendDummyInput()
        .appendField(Blockly.Msg.DHT_NAME)
        .appendField(Blockly.Msg.PIN)
        .appendField(new Blockly.FieldDropdown([['J1', '25'],['J2', '32'],['J3', '12'],['J4', '14'],['J5', '18'],['J6', '19'],['J7', '16'],['J8', '4']]), "PIN_DHT")
        .appendField(Blockly.Msg.DHT_Type)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.DHT_Type11, "0"], [Blockly.Msg.DHT_Type21, "1"],[Blockly.Msg.DHT_Type22, "2"]]), "OUTPUT_TYPE")
    .appendField(new Blockly.FieldDropdown([[Blockly.Msg.DHT_Temp, "0"], [Blockly.Msg.DHT_Humi, "1"]]), "OUTPUT_VALUE");
    this.setOutput(true, 'Number');
   // this.setTooltip('');
  this.setHelpUrl(Blockly.Msg.HELPURL_060);
  }
};

 Blockly.Blocks['ardublock_block11ww']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.nano1_control_44)
        .appendField(new Blockly.FieldDropdown([['Board', '0'],['J1', '25'],['J2', '32'],['J3', '12'],['J4', '14'],['J5', '18'],['J6', '19'],['J7', '16'],['J8', '4']]), "PIN")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.nano1_control_45, "0"], [Blockly.Msg.nano1_control_46, "1"]]), "bb_dropdown");   
    this.appendStatementInput("bot_statement");
	this.appendStatementInput("bot_statement1");
	this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#CD9B37");
   // this.setTooltip(Blockly.Msg.nano1_control_47);
   // this.setHelpUrl(Blockly.Msg.HELPURLesp_011)
	}
 };
 
Blockly.Blocks['text_char32']={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.text_char32);
    this.appendValueInput("block")
        .setCheck("");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#A5995B");
  //  this.setTooltip('help Vitaliy...');
   // this.setHelpUrl('http://ardublock.ru/wiki')
   }
};

Blockly.Blocks['ardublock_block532']={init:function(){
    this.appendDummyInput()
       // .appendField(new Blockly.FieldImage("media/icon_block/001.png", 15, 15, null))
        .appendField(Blockly.Msg.nano1_control_31)
        .appendField(new Blockly.FieldDropdown([["100", "100"], ["300", "300"], ["500", "500"], ["700", "700"],["1000", "1000"], ["1500", "1500"], ["3000", "3000"], ["5000", "5000"]]), "delay")
        .appendField(Blockly.Msg.nano1_control_32);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour("#A5995B");
    //this.setTooltip('help Vitaliy...');
    // this.setHelpUrl(Blockly.Msg.HELPURLesp_007)
	}
};
Blockly.Blocks['lcdi2c_setup32'] = {
   init: function() {
   this.setColour("#4B886A");
    this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_I2C_setup);
    this.appendDummyInput()
	.appendField(new Blockly.FieldDropdown([['0x3F', '0x3F'],['0x27', '0x27'],['0x3D', '0x3D'],['0x3B', '0x3B'],['0x3E', '0x3E']]), "NAME") 
    .appendField(Blockly.Msg.LCD_setup_COLUMNS) 
 	.appendField(new Blockly.FieldDropdown([['16', '16'],['20', '20'],['8', '8']]), "COLUMNS") 
    .appendField(Blockly.Msg.LCD_setup_ROWS) 
 	.appendField(new Blockly.FieldDropdown([['2', '2'],['4', '4'],['1', '1']]), "ROWS");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  //  this.setTooltip('');
    
  }
};

 Blockly.Blocks["lcdi2c_setcursor32"] = {
   init: function() {
    this.setColour("#4B886A");
   this.appendDummyInput()
        .appendField(Blockly.Msg.LCD_lcdi2c_print) 
        .appendField(Blockly.Msg.LCD_setup_COLUMNS)
        .appendField(new Blockly.FieldDropdown([['1', '0'],['2', '1'],['3', '2'],['4', '3'],['5', '4'],['6', '5'],['7', '6'],['8', '7'],['9', '8'],['10', '9'],['11', '10'],['12', '11'],['13', '12'],['14', '13'],['15', '14'],['16', '15']]), "column") 
        .appendField(Blockly.Msg.LCD_setup_ROWS)
        .appendField(new Blockly.FieldDropdown([['1', '0'],['2', '1'],['3', '2'],['4', '3']]), "row"); 
     this.appendValueInput("texttoprint")
        .setCheck('')  
    .appendField(Blockly.Msg.mLCDP_Print);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip('');
 // this.setHelpUrl(Blockly.Msg.HELPURL_084);
  }
};


 Blockly.Blocks["lcdi2c_setcursor_draw32"] = {
  init: function() {
this.setColour("#4B886A");
this.appendDummyInput()
.appendField(Blockly.Msg.LCD_lcdi2c_print_gr232);
this.appendDummyInput()
.appendField(new Blockly.FieldDropdown([['1', '1'],['2', '2'],['3', '3'],['4', '4'],['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'],['10', '10'],['11', '11'],['12', '12'],['13', '13'],['14', '14'],['15', '15'],['16', '16'],['17', '17'],['18', '18'],['19', '19'],['20', '20']]), "TEXT") 
.appendField(new Blockly.FieldDropdown([['1', '0'],['2', '1'],['3', '2'],['4', '3'],['5', '4'],['6', '5'],['7', '6'],['8', '7'],['9', '8'],['10', '9'],['11', '10'],['12', '11'],['13', '12'],['14', '13'],['15', '14'],['16', '15']]), "print_x") 
.appendField(new Blockly.FieldDropdown([['1', '0'],['2', '1'],['3', '2'],['4', '3']]), "print_y");
		
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
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip('');
  //this.setHelpUrl(Blockly.Msg.HELPURL_084);
  }
};

Blockly.Blocks["inout_analog_write32w"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#B39E2C");
       // this.setHelpUrl(Blockly.Msg.HELPURL_033);
    this.appendDummyInput()
	 .appendField(Blockly.Msg.ARDUINO_INOUT_motoresp)
	 .appendField(new Blockly.FieldDropdown([['J1', '1'],['J2', '2'],['J3', '3'],['J4', '4'],['J5', '5'],['J6', '6'],['J7', '7'],['J8', '8']]), "PIN") ;

        this.appendValueInput("STAT", "Boolean").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUThelpb)
		}
};

Blockly.Blocks["inout_analog_read_esp32"]={init:function(){
   // var card=window.localStorage.card;
   // var prog = window.localStorage.prog;
        this.setColour("#2CB396");
       // this.setHelpUrl(Blockly.Msg.HELPURL_031);
    this.appendDummyInput()
	 .appendField(Blockly.Msg.potenwiometre)
	 .appendField(new Blockly.FieldDropdown([['J1', '25'],['J2', '32'],['J3', '12'],['J4', '14'],['J5', '18'],['J6', '19'],['J7', '16'],['J8', '4']]), "PIN") ;
	  this.setInputsInline(true);
     //   this.setPreviousStatement(true, null);
     //   this.setNextStatement(true, null);
    this.setOutput(true, "Number");
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP)
    }
};
 
 Blockly.Blocks["math_random_int_map32"]={init:function(){
    this.appendDummyInput()
        .appendField(Blockly.Msg.espMap1);
    this.appendValueInput("block")
        .setCheck("");
    this.appendDummyInput()
        .appendField(Blockly.Msg.espMap2)
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1023", "1023"], ["4096", "4096"]]), "pi1")
        .appendField(Blockly.Msg.espMap3)
        .appendField(new Blockly.FieldDropdown([["4096", "4096"], ["1023", "1023"], ["0", "0"]]), "pi2")
        .appendField(Blockly.Msg.espMap4)
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["90", "90"], ["180", "180"], ["255", "255"]]), "pi3")
        .appendField(Blockly.Msg.espMap5)
        .appendField(new Blockly.FieldDropdown([["255", "255"], ["180", "180"], ["90", "90"], ["0", "0"]]), "pi4");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour("#5B80A5");
    //this.setTooltip('help Vitaliy...');
    //this.setHelpUrl('http://ardublock.ru/wiki')
    }
};

Blockly.Blocks["inout_analog_write32wLed"]={init:function(){
    var card=window.localStorage.card;
        this.setColour("#50A0CC");
       // this.setHelpUrl(Blockly.Msg.HELPURL_033);
    this.appendDummyInput()
	 .appendField(Blockly.Msg.ARDUINO_INOUT_ledpwmesp32)
	 .appendField(new Blockly.FieldDropdown([['Board 1', '9'],['Board 2', '10'],['J1', '1'],['J2', '2'],['J3', '3'],['J4', '4'],['J5', '5'],['J6', '6'],['J7', '7'],['J8', '8']]), "PIN") ;

        this.appendValueInput("STAT", "Boolean").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg._AT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        //this.setTooltip(Blockly.Msg.ARDUINO_INOUThelpb)
		}
};