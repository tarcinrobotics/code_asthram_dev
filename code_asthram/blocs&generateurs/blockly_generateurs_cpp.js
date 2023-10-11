"use strict";

goog.require("Blockly.Arduino");

Blockly.Arduino['ardublock_block']=function(block){
    var deistvie = block.getFieldValue('deistvie');
    var delay = block.getFieldValue('delay');
	
    Blockly.Arduino.includes_['includes_VarSpeedServo'] = '#include <VarSpeedServo.h>';
    Blockly.Arduino.variables_['variables_myServo2'] = 'VarSpeedServo myServo2; \n  ';
	Blockly.Arduino.variables_['variables_myServo3'] = 'VarSpeedServo myServo3; \n  ';
	Blockly.Arduino.variables_['variables_myServo4'] = 'VarSpeedServo myServo4; \n  ';
	Blockly.Arduino.variables_['variables_myServo5'] = 'VarSpeedServo myServo5; \n  ';
	Blockly.Arduino.variables_['variables_myServo6'] = 'VarSpeedServo myServo6; \n  ';
	Blockly.Arduino.variables_['variables_myServo7'] = 'VarSpeedServo myServo7; \n  '; 
	Blockly.Arduino.variables_['variables_myServo8'] = 'VarSpeedServo myServo8; \n  '; 
	Blockly.Arduino.variables_['variables_myServo9'] = 'VarSpeedServo myServo9; \n  ';
    Blockly.Arduino.setups_['setups_myServo2']='myServo2.attach(2); \n myServo2.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo3']='myServo3.attach(3); \n myServo3.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo4']='myServo4.attach(4); \n myServo4.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo5']='myServo5.attach(5); \n myServo5.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo6']='myServo6.attach(6); \n myServo6.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo7']='myServo7.attach(7); \n myServo7.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo8']='myServo8.attach(8); \n myServo8.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo9']='myServo9.attach(9); \n myServo9.detach(); \n  ';
	//Blockly.Arduino.setups_['setups_myServo_delay']=' delay(300);   \n  ';
 
 
 
 if(delay == "1"){ var delaytime = 1000; var spedservo = 60;}
 if(delay == "2"){ var delaytime = 3000; var spedservo = 10;}
	if(deistvie == "0"){var code = ' myServo2.attach(2);  \n  myServo2.slowmove(90,'+spedservo+'); \n    myServo3.attach(3); \n     myServo3.slowmove(90,'+spedservo+'); \n     myServo4.attach(4); \n     myServo4.slowmove(90,'+spedservo+'); \n     myServo5.attach(5); \n      myServo5.slowmove(90,'+spedservo+'); \n    myServo6.attach(6); \n     myServo6.slowmove(160,'+spedservo+'); \n     myServo7.attach(7); \n      myServo7.slowmove(20,'+spedservo+'); \n     myServo8.attach(8); \n      myServo8.slowmove(160,'+spedservo+'); \n    myServo9.attach(9); \n     myServo9.slowmove(20,'+spedservo+'); \n  delay('+delaytime+'); \n   '; }
	if(deistvie == "1"){var code = ' myServo2.attach(2);  \n  myServo2.slowmove(90,'+spedservo+'); \n    myServo3.attach(3); \n     myServo3.slowmove(90,'+spedservo+'); \n     myServo4.attach(4); \n     myServo4.slowmove(90,'+spedservo+'); \n     myServo5.attach(5); \n      myServo5.slowmove(90,'+spedservo+'); \n    myServo6.attach(6); \n     myServo6.slowmove(90,'+spedservo+'); \n     myServo7.attach(7); \n      myServo7.slowmove(90,'+spedservo+'); \n     myServo8.attach(8); \n      myServo8.slowmove(90,'+spedservo+'); \n    myServo9.attach(9); \n     myServo9.slowmove(90,'+spedservo+'); \n  delay('+delaytime+'); \n   '; } 
	if(deistvie == "2"){var code = ' myServo2.attach(2);  \n  myServo2.slowmove(90,'+spedservo+'); \n    myServo3.attach(3); \n     myServo3.slowmove(90,'+spedservo+'); \n     myServo4.attach(4); \n     myServo4.slowmove(90,'+spedservo+'); \n     myServo5.attach(5); \n      myServo5.slowmove(90,'+spedservo+'); \n    myServo6.attach(6); \n     myServo6.slowmove(160,'+spedservo+'); \n     myServo7.attach(7); \n      myServo7.slowmove(20,'+spedservo+'); \n     myServo8.attach(8); \n      myServo8.slowmove(160,'+spedservo+'); \n    myServo9.attach(9); \n     myServo9.slowmove(20,'+spedservo+'); \n  delay('+delaytime+'); \n   '; }
	if(deistvie == "3"){var code = ' myServo2.attach(2);  \n  myServo2.slowmove(90,'+spedservo+'); \n    myServo3.attach(3); \n     myServo3.slowmove(90,'+spedservo+'); \n     myServo4.attach(4); \n     myServo4.slowmove(90,'+spedservo+'); \n     myServo5.attach(5); \n      myServo5.slowmove(90,'+spedservo+'); \n    myServo6.attach(6); \n     myServo6.slowmove(170,'+spedservo+'); \n     myServo7.attach(7); \n      myServo7.slowmove(110,'+spedservo+'); \n     myServo8.attach(8); \n      myServo8.slowmove(70,'+spedservo+'); \n    myServo9.attach(9); \n     myServo9.slowmove(10,'+spedservo+'); \n  delay('+delaytime+'+1000); \n   '; }
	if(deistvie == "4"){var code = ' myServo2.attach(2);  \n  myServo2.slowmove(90,'+spedservo+'); \n    myServo3.attach(3); \n     myServo3.slowmove(90,'+spedservo+'); \n     myServo4.attach(4); \n     myServo4.slowmove(90,'+spedservo+'); \n     myServo5.attach(5); \n      myServo5.slowmove(90,'+spedservo+'); \n    myServo6.attach(6); \n     myServo6.slowmove(70,'+spedservo+'); \n     myServo7.attach(7); \n      myServo7.slowmove(10,'+spedservo+'); \n     myServo8.attach(8); \n      myServo8.slowmove(170,'+spedservo+'); \n    myServo9.attach(9); \n     myServo9.slowmove(110,'+spedservo+'); \n  delay('+delaytime+'+1000); \n   '; }
	if(deistvie == "5"){var code = ' myServo2.attach(2);  \n  myServo2.slowmove(140,'+spedservo+'); \n    myServo3.attach(3); \n     myServo3.slowmove(30,'+spedservo+'); \n     myServo4.attach(4); \n     myServo4.slowmove(150,'+spedservo+'); \n     myServo5.attach(5); \n      myServo5.slowmove(40,'+spedservo+'); \n    myServo6.attach(6); \n     myServo6.slowmove(90,'+spedservo+'); \n     myServo7.attach(7); \n      myServo7.slowmove(90,'+spedservo+'); \n     myServo8.attach(8); \n      myServo8.slowmove(90,'+spedservo+'); \n    myServo9.attach(9); \n     myServo9.slowmove(90,'+spedservo+'); \n  delay('+delaytime+'); \n   '; } 
	if(deistvie == "6"){var code = ' myServo2.attach(2);  \n  myServo2.slowmove(140,'+spedservo+'); \n    myServo3.attach(3); \n     myServo3.slowmove(30,'+spedservo+'); \n     myServo4.attach(4); \n     myServo4.slowmove(150,'+spedservo+'); \n     myServo5.attach(5); \n      myServo5.slowmove(40,'+spedservo+'); \n    myServo6.attach(6); \n     myServo6.slowmove(160,'+spedservo+'); \n     myServo7.attach(7); \n      myServo7.slowmove(20,'+spedservo+'); \n     myServo8.attach(8); \n      myServo8.slowmove(160,'+spedservo+'); \n    myServo9.attach(9); \n     myServo9.slowmove(20,'+spedservo+'); \n  delay('+delaytime+'); \n   '; }
	if(deistvie == "7"){var code = ' myServo2.attach(2);  \n  myServo2.slowmove(140,'+spedservo+'); \n    myServo3.attach(3); \n     myServo3.slowmove(30,'+spedservo+'); \n     myServo4.attach(4); \n     myServo4.slowmove(150,'+spedservo+'); \n     myServo5.attach(5); \n      myServo5.slowmove(40,'+spedservo+'); \n    myServo6.attach(6); \n     myServo6.slowmove(170,'+spedservo+'); \n     myServo7.attach(7); \n      myServo7.slowmove(110,'+spedservo+'); \n     myServo8.attach(8); \n      myServo8.slowmove(70,'+spedservo+'); \n    myServo9.attach(9); \n     myServo9.slowmove(10,'+spedservo+'); \n  delay('+delaytime+'+1000); \n   '; }
	if(deistvie == "8"){var code = ' myServo2.attach(2);  \n  myServo2.slowmove(140,'+spedservo+'); \n    myServo3.attach(3); \n     myServo3.slowmove(30,'+spedservo+'); \n     myServo4.attach(4); \n     myServo4.slowmove(150,'+spedservo+'); \n     myServo5.attach(5); \n      myServo5.slowmove(40,'+spedservo+'); \n    myServo6.attach(6); \n     myServo6.slowmove(70,'+spedservo+'); \n     myServo7.attach(7); \n      myServo7.slowmove(10,'+spedservo+'); \n     myServo8.attach(8); \n      myServo8.slowmove(170,'+spedservo+'); \n    myServo9.attach(9); \n     myServo9.slowmove(110,'+spedservo+'); \n  delay('+delaytime+'+1000); \n   '; }
	
if(delay == "1"){ var delaytime = 1000; var spedservo = 60;}
if(delay == "2"){ var delaytime = 3000; var spedservo = 10;}
if(deistvie == "9"){var code = '  myServo2.attach(2); \n    myServo2.slowmove(map(20, 0, 180, 0, 180),'+spedservo+'); \n   myServo3.attach(3); \n    myServo3.slowmove(map(20, 0, 180, 0, 180),'+spedservo+'); \n   myServo4.attach(4); \n    myServo4.slowmove(map(20, 0, 180, 0, 180),'+spedservo+'); \n    myServo5.attach(5); \n    myServo5.slowmove(map(20, 0, 180, 0, 180),'+spedservo+'); \n    myServo6.attach(6);   myServo6.slowmove(map(20, 0, 180, 180, 0),'+spedservo+'); \n   myServo7.attach(7); \n    myServo7.slowmove(map(20, 0, 180, 0, 180),'+spedservo+'); \n   myServo8.attach(8); \n    myServo8.slowmove(map(20, 0, 180, 180, 0),'+spedservo+'); \n    myServo9.attach(9); \n     myServo9.slowmove(map(20, 0, 180, 0, 180),'+spedservo+'); \n  delay('+delaytime+'+1000); \n'; } 
if(deistvie == "10"){var code = '  myServo2.attach(2); \n    myServo2.slowmove(map(160, 0, 180, 0, 180),'+spedservo+'); \n   myServo3.attach(3); \n    myServo3.slowmove(map(160, 0, 180, 0, 180),'+spedservo+'); \n   myServo4.attach(4); \n    myServo4.slowmove(map(160, 0, 180, 0, 180),'+spedservo+'); \n    myServo5.attach(5); \n    myServo5.slowmove(map(160, 0, 180, 0, 180),'+spedservo+'); \n    myServo6.attach(6);   myServo6.slowmove(map(20, 0, 180, 180, 0),'+spedservo+'); \n   myServo7.attach(7); \n    myServo7.slowmove(map(20, 0, 180, 0, 180),'+spedservo+'); \n   myServo8.attach(8); \n    myServo8.slowmove(map(20, 0, 180, 180, 0),'+spedservo+'); \n    myServo9.attach(9); \n     myServo9.slowmove(map(20, 0, 180, 0, 180),'+spedservo+'); \n  delay('+delaytime+'+1000); \n'; } 
 
if(delay == "1"){ var delaytime = 500; var spedservo = 80;}
if(delay == "2"){ var delaytime = 1000; var spedservo = 50;}
if(deistvie == "11"){var code = '   myServo2.attach(2);	\n            myServo2.slowmove(90,100);	\n          myServo3.attach(3);	\n           myServo3.slowmove(70,100);	\n          myServo4.attach(4);	\n           myServo4.slowmove(90,100);	\n         myServo5.attach(5);	\n          myServo5.slowmove(90,100);	\n         myServo6.attach(6);	\n          myServo6.slowmove(160,100);	\n         myServo7.attach(7);	\n           myServo7.slowmove(20,100);	\n          myServo8.attach(8);	\n           myServo8.slowmove(160,100);	\n          myServo9.attach(9);	\n           myServo9.slowmove(20,100);	\n          delay(1000);	\n          myServo8.attach(8);	\n           myServo8.slowmove(40,'+spedservo+');	\n          delay('+delaytime+');	\n          myServo4.attach(4);	\n           myServo4.slowmove(120,'+spedservo+');	\n          delay('+delaytime+');	\n         myServo8.attach(8);	\n           myServo8.slowmove(90,'+spedservo+');	\n          delay('+delaytime+');	\n          myServo8.attach(8);	\n           myServo8.slowmove(40,'+spedservo+');	\n          delay('+delaytime+');	\n          myServo4.attach(4);	\n          myServo4.slowmove(90,'+spedservo+');	\n          myServo8.attach(8);	\n           myServo8.slowmove(160,'+spedservo+');	\n          delay(1000);	\n         '; }
if(deistvie == "12"){var code = '   myServo2.attach(2);	\n            myServo2.slowmove(90,100);	\n           myServo3.attach(3);	\n           myServo3.slowmove(90,100);	\n          myServo4.attach(4);	\n           myServo4.slowmove(110,100);	\n          myServo5.attach(5);	\n           myServo5.slowmove(90,100);	\n          myServo6.attach(6);	\n           myServo6.slowmove(160,100);	\n           myServo7.attach(7);	\n            myServo7.slowmove(20,100);	\n          myServo8.attach(8);	\n           myServo8.slowmove(160,100);	\n          myServo9.attach(9);	\n           myServo9.slowmove(20,100);	\n          delay(1000);	\n          myServo7.attach(7);	\n           myServo7.slowmove(130,'+spedservo+');	\n          delay('+delaytime+');	\n           myServo3.attach(3);	\n           myServo3.slowmove(50,'+spedservo+');	\n          delay('+delaytime+');	\n          myServo7.attach(7);	\n           myServo7.slowmove(90,'+spedservo+');	\n          delay('+delaytime+');	\n          myServo7.attach(7);	\n           myServo7.slowmove(130,'+spedservo+');	\n          delay('+delaytime+');	\n          myServo3.attach(3);	\n           myServo3.slowmove(90,'+spedservo+');	\n           myServo7.attach(7);	\n            myServo7.slowmove(20,'+spedservo+');	\n           delay(1000);	\n         '; }
 
 
 
  
return code
};

Blockly.Arduino['ardublock_block1']=function(block){ //  в разработке движение вперёд ок назад нет
    var deistvie = block.getFieldValue('deistvie');
    var delay = block.getFieldValue('delay');
	var forrobot = block.getFieldValue('forrobot');
	
    Blockly.Arduino.includes_['includes_VarSpeedServo'] = '#include <VarSpeedServo.h>';
    Blockly.Arduino.variables_['variables_myServo2'] = 'VarSpeedServo myServo2; \n  ';
	Blockly.Arduino.variables_['variables_myServo3'] = 'VarSpeedServo myServo3; \n  ';
	Blockly.Arduino.variables_['variables_myServo4'] = 'VarSpeedServo myServo4; \n  ';
	Blockly.Arduino.variables_['variables_myServo5'] = 'VarSpeedServo myServo5; \n  ';
	Blockly.Arduino.variables_['variables_myServo6'] = 'VarSpeedServo myServo6; \n  ';
	Blockly.Arduino.variables_['variables_myServo7'] = 'VarSpeedServo myServo7; \n  '; 
	Blockly.Arduino.variables_['variables_myServo8'] = 'VarSpeedServo myServo8; \n  '; 
	Blockly.Arduino.variables_['variables_myServo9'] = 'VarSpeedServo myServo9; \n  ';
    Blockly.Arduino.setups_['setups_myServo2']='myServo2.attach(2); \n myServo2.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo3']='myServo3.attach(3); \n myServo3.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo4']='myServo4.attach(4); \n myServo4.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo5']='myServo5.attach(5); \n myServo5.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo6']='myServo6.attach(6); \n myServo6.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo7']='myServo7.attach(7); \n myServo7.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo8']='myServo8.attach(8); \n myServo8.detach(); \n  ';
	Blockly.Arduino.setups_['setups_myServo9']='myServo9.attach(9); \n myServo9.detach(); \n  ';
	//Blockly.Arduino.setups_['setups_myServo_delay']=' delay(300);   \n  ';
	
 if(delay == "1"){ var delaytime = 250; var spedservo = 120;}
 if(delay == "2"){ var delaytime = 300; var spedservo = 70;}
	if(deistvie == "1"){var code = ' 	myServo6.attach(6);	\n                         myServo6.slowmove(160,'+spedservo+');	\n                     myServo7.attach(7);	\n                      myServo7.slowmove(20,'+spedservo+');	\n                     myServo8.attach(8);	\n                     myServo8.slowmove(160,'+spedservo+');	\n                     myServo9.attach(9);	\n                      myServo9.slowmove(20,'+spedservo+');	\n                     for (int count = 0; count < '+forrobot+'; count++) {	\n                       myServo2.attach(2);	\n                        myServo2.slowmove(90,'+spedservo+');	\n                       myServo3.attach(3);	\n                        myServo3.slowmove(130,'+spedservo+');	\n                    myServo4.attach(4);	\n                        myServo4.slowmove(50,'+spedservo+');	\n                       myServo5.attach(5);	\n                        myServo5.slowmove(90,'+spedservo+');	\n                       delay('+delaytime+');	\n                       myServo6.attach(6);	\n                       myServo6.slowmove(90,'+spedservo+');	\n                      delay('+delaytime+');	\n                      myServo2.attach(2);	\n                        myServo2.slowmove(10,'+spedservo+');	\n                       myServo3.attach(3);	\n                        myServo3.slowmove(150,'+spedservo+'+30);	\n                        delay('+delaytime+');	\n                       myServo6.attach(6);	\n                        myServo6.slowmove(160,'+spedservo+');	\n                         delay('+delaytime+');	\n                        myServo7.attach(7);	\n                        myServo7.slowmove(90,'+spedservo+');	\n                        delay('+delaytime+');	\n                        myServo3.attach(3);	\n                        myServo3.slowmove(90,'+spedservo+');	\n                         delay('+delaytime+');	\n                        myServo7.attach(7);	\n                         myServo7.slowmove(20,'+spedservo+');	\n                        delay('+delaytime+');	\n                        myServo9.attach(9);	\n                         myServo9.slowmove(90,'+spedservo+');	\n                        myServo2.attach(2);	\n                        myServo2.slowmove(60,'+spedservo+');	\n                         delay('+delaytime+');	\n                       myServo5.attach(5);	\n                         myServo5.slowmove(170,'+spedservo+');	\n                        myServo4.attach(4);	\n                         myServo4.slowmove(30,'+spedservo+'+30);	\n                         delay('+delaytime+');	\n                        myServo9.attach(9);	\n                         myServo9.slowmove(30,'+spedservo+');	\n                         delay('+delaytime+');	\n                        myServo8.attach(8);	\n                        myServo8.slowmove(90,'+spedservo+');	\n                         delay('+delaytime+');	\n                        myServo4.attach(4);	\n                         myServo4.slowmove(90,'+spedservo+');	\n                        delay('+delaytime+');	\n                        myServo8.attach(8);	\n                         myServo8.slowmove(160,'+spedservo+');	\n                         delay('+delaytime+');	\n                      }	\n                    	\n   '; } 
    if(deistvie == "2"){var code = '    myServo8.attach(8);	\n                         myServo8.slowmove(160,'+spedservo+');	\n                    myServo9.attach(9);	\n                         myServo9.slowmove(20,'+spedservo+');	\n                        myServo6.attach(6);	\n                         myServo6.slowmove(160,'+spedservo+');	\n                        myServo7.attach(7);	\n                         myServo7.slowmove(20,'+spedservo+');	\n                        myServo4.attach(4);	\n                         myServo4.slowmove(90,'+spedservo+');	\n                       myServo5.attach(5);	\n                         myServo5.slowmove(130,'+spedservo+');	\n                        myServo2.attach(2);	\n                         myServo2.slowmove(50,'+spedservo+');	\n                        myServo3.attach(3);	\n                         myServo3.slowmove(90,'+spedservo+');	\n                        delay('+delaytime+');	\n                        myServo8.attach(8);	\n                         myServo8.slowmove(90,'+spedservo+');	\n                       delay('+delaytime+');	\n                       myServo4.attach(4);	\n                        myServo4.slowmove(10,'+spedservo+');	\n                       myServo5.attach(5);	\n                        myServo5.slowmove(150,'+spedservo+'+30);	\n                       delay('+delaytime+');	\n                        myServo8.attach(8);	\n                        myServo8.slowmove(160,'+spedservo+');	\n                        delay('+delaytime+');	\n                       myServo9.attach(9);	\n                        myServo9.slowmove(90,'+spedservo+');	\n                       delay('+delaytime+');	\n                       myServo5.attach(5);	\n                        myServo5.slowmove(90,'+spedservo+');	\n                       delay('+delaytime+');	\n                       myServo9.attach(9);	\n                         myServo9.slowmove(20,'+spedservo+');	\n                        delay('+delaytime+');	\n                       myServo7.attach(7);	\n                        myServo7.slowmove(90,'+spedservo+');	\n                       myServo4.attach(4);	\n                         myServo4.slowmove(60,'+spedservo+');	\n                        myServo2.attach(2);	\n                         myServo2.slowmove(20,'+spedservo+'+30);	\n                        delay('+delaytime+');	\n                        myServo3.attach(3);	\n                         myServo3.slowmove(170,'+spedservo+');	\n                        delay('+delaytime+');	\n                       myServo7.attach(7);	\n                        myServo7.slowmove(30,'+spedservo+');	\n                        delay('+delaytime+');	\n                       myServo6.attach(6);	\n                        myServo6.slowmove(90,'+spedservo+');	\n                       delay('+delaytime+');	\n                       myServo2.attach(2);	\n                        myServo2.slowmove(90,'+spedservo+');	\n                       delay('+delaytime+');	\n                       myServo6.attach(6);	\n                        myServo6.slowmove(160,'+spedservo+');	\n                       delay('+delaytime+');	\n      \n   '; } 
  

 if(delay == "1"){ var delaytime = 300; var spedservo = 100;}
 if(delay == "2"){ var delaytime = 500; var spedservo = 70;}
 if(deistvie == "3"){var code = '   for (int count = 0; count < '+forrobot+'; count++) {	\n      myServo2.attach(2);	\n               myServo2.slowmove(90,'+spedservo+');	\n                       myServo3.attach(3);	\n                        myServo3.slowmove(90,'+spedservo+');	\n                      myServo4.attach(4);	\n                       myServo4.slowmove(90,'+spedservo+');	\n                      myServo5.attach(5);	\n                       myServo5.slowmove(90,'+spedservo+');	\n                      myServo6.attach(6);	\n                        myServo6.slowmove(160,'+spedservo+');	\n                       myServo7.attach(7);	\n                       myServo7.slowmove(30,'+spedservo+');	\n                      myServo8.attach(8);	\n                       myServo8.slowmove(160,'+spedservo+');	\n                      myServo9.attach(9);	\n                       myServo9.slowmove(30,'+spedservo+');	\n                      delay('+delaytime+');	\n                      myServo7.attach(7);	\n                       myServo7.slowmove(50,'+spedservo+');	\n                      myServo9.attach(9);	\n                       myServo9.slowmove(50,'+spedservo+');	\n                      delay(200);	\n                      myServo3.attach(3);	\n                       myServo3.slowmove(150,'+spedservo+');	\n                      myServo5.attach(5);	\n                       myServo5.slowmove(150,'+spedservo+');	\n                     delay(200);	\n                      myServo7.attach(7);	\n                        myServo7.slowmove(30,'+spedservo+');	\n                       myServo9.attach(9);	\n                        myServo9.slowmove(30,'+spedservo+');	\n                       delay(200);	\n                       myServo6.attach(6);	\n                        myServo6.slowmove(140,'+spedservo+');	\n                      myServo8.attach(8);	\n                       myServo8.slowmove(140,'+spedservo+');	\n                      delay(200);	\n                      myServo2.attach(2);	\n                       myServo2.slowmove(140,'+spedservo+');	\n                      myServo4.attach(4);	\n                       myServo4.slowmove(140,'+spedservo+');	\n                      delay(200);	\n                      myServo6.attach(6);	\n                      myServo6.slowmove(160,'+spedservo+');	\n                      myServo8.attach(8);	\n                       myServo8.slowmove(160,'+spedservo+');	\n                       delay('+delaytime+');	  \n          }	\n         \n   '; }                 
 if(deistvie == "4"){var code = '   for (int count = 0; count < '+forrobot+'; count++) {	\n      myServo2.attach(2);  \n             myServo2.slowmove(90,'+spedservo+');  \n           myServo3.attach(3);  \n           myServo3.slowmove(90,'+spedservo+');  \n            myServo4.attach(4);  \n            myServo4.slowmove(90,'+spedservo+');  \n           myServo5.attach(5);  \n            myServo5.slowmove(90,'+spedservo+');  \n           myServo6.attach(6);  \n            myServo6.slowmove(160,'+spedservo+');  \n           myServo7.attach(7);  \n            myServo7.slowmove(30,'+spedservo+');  \n           myServo8.attach(8);  \n            myServo8.slowmove(160,'+spedservo+');  \n            myServo9.attach(9);  \n            myServo9.slowmove(30,'+spedservo+');  \n           delay('+delaytime+');  \n            myServo8.attach(8);  \n            myServo8.slowmove(130,'+spedservo+');  \n           myServo6.attach(6);  \n            myServo6.slowmove(130,'+spedservo+');  \n           delay(200);  \n            myServo2.attach(2);  \n             myServo2.slowmove(30,'+spedservo+');  \n           myServo4.attach(4);  \n            myServo4.slowmove(30,'+spedservo+');  \n           delay(200);  \n           myServo8.attach(8);  \n            myServo8.slowmove(150,'+spedservo+');  \n           myServo6.attach(6);  \n            myServo6.slowmove(150,'+spedservo+');  \n            delay(200);  \n            myServo7.attach(7);  \n            myServo7.slowmove(50,'+spedservo+');  \n            myServo9.attach(9);  \n            myServo9.slowmove(50,'+spedservo+');  \n           delay(200);  \n           myServo5.attach(5);  \n             myServo5.slowmove(40,'+spedservo+');  \n           myServo3.attach(3);  \n            myServo3.slowmove(40,'+spedservo+');  \n            delay(200);  \n           myServo7.attach(7);  \n            myServo7.slowmove(30,'+spedservo+');  \n            myServo9.attach(9);  \n             myServo9.slowmove(30,'+spedservo+');	\n                       delay('+delaytime+');	  \n          }	\n         \n   '; }           

 if(delay == "1"){ var delaytime = 200; var delaytime2n = 10; var spedservo = 60;}
 if(delay == "2"){ var delaytime = 400; var delaytime2n = 20; var spedservo = 30;}
 if(deistvie == "5"){var code = '   for (int count = 0; count < '+forrobot+'; count++) {	\n         myServo9.attach(9);	\n        myServo9.slowmove(90,'+spedservo+');	\n        delay('+delaytime+');	\n       myServo2.attach(2);	\n        myServo2.slowmove(90,'+spedservo+');    	\n          delay('+delaytime2n+');	\n       myServo4.attach(4);	\n         myServo4.slowmove(30,'+spedservo+');    	\n             delay('+delaytime2n+');	\n       myServo5.attach(5);	\n       myServo5.slowmove(135,'+spedservo+');   	\n            delay('+delaytime2n+');	\n       myServo7.attach(7);	\n       myServo7.slowmove(80,'+spedservo+');    	\n          delay('+delaytime2n+');	\n       myServo3.attach(3);	\n        myServo3.slowmove(90,'+spedservo+');    	\n          delay('+delaytime2n+');	\n       myServo9.attach(9);	\n        myServo9.slowmove(30,'+spedservo+'); 	\n       delay('+delaytime+');	\n       myServo7.attach(7);	\n       myServo7.slowmove(30,'+spedservo+');    	\n          delay('+delaytime2n+');	\n        myServo6.attach(6);	\n       myServo6.slowmove(90,'+spedservo+'); 	\n        delay('+delaytime+');	\n        myServo8.attach(8);	\n       myServo8.slowmove(90,'+spedservo+'); 	\n       delay('+delaytime2n+');	\n        myServo3.attach(3);	\n       myServo3.slowmove(150,'+spedservo+');   	\n       delay('+delaytime2n+');	\n       myServo5.attach(5);	\n       myServo5.slowmove(90,'+spedservo+'); 	\n       delay('+delaytime2n+');	\n        myServo4.attach(4);	\n       myServo4.slowmove(90,'+spedservo+'); 	\n       delay('+delaytime2n+');	\n        myServo2.attach(2);	\n        myServo2.slowmove(40,'+spedservo+');	\n       delay('+delaytime2n+');	\n       myServo6.attach(6);	\n       myServo6.slowmove(160,'+spedservo+'); 	\n       delay('+delaytime+');	\n       myServo8.attach(8);	\n        myServo8.slowmove(160,'+spedservo+');   	\n         delay('+delaytime2n+');	\n        }	\n         \n   '; }   
 if(deistvie == "6"){var code = '   for (int count = 0; count < '+forrobot+'; count++) {	\n         myServo7.attach(7);	\n        myServo7.slowmove(90,'+spedservo+');	\n        delay('+delaytime+');	\n       myServo4.attach(4);	\n        myServo4.slowmove(90,'+spedservo+');    	\n          delay('+delaytime2n+');	\n       myServo2.attach(2);	\n         myServo2.slowmove(30,'+spedservo+');    	\n             delay('+delaytime2n+');	\n        myServo3.attach(3);	\n       myServo3.slowmove(135,'+spedservo+');   	\n            delay('+delaytime2n+');	\n        myServo9.attach(9);	\n       myServo9.slowmove(80,'+spedservo+');    	\n          delay('+delaytime2n+');	\n        myServo5.attach(5);	\n        myServo5.slowmove(90,'+spedservo+');    	\n          delay('+delaytime2n+');	\n        myServo7.attach(7);	\n        myServo7.slowmove(30,'+spedservo+'); 	\n       delay('+delaytime+');	\n        myServo9.attach(9);	\n       myServo9.slowmove(30,'+spedservo+');    	\n          delay('+delaytime2n+');	\n         myServo8.attach(8);	\n       myServo8.slowmove(90,'+spedservo+'); 	\n        delay('+delaytime+');	\n         myServo6.attach(6);	\n       myServo6.slowmove(90,'+spedservo+'); 	\n       delay('+delaytime2n+');	\n         myServo5.attach(5);	\n       myServo5.slowmove(150,'+spedservo+');   	\n       delay('+delaytime2n+');	\n        myServo3.attach(3);	\n       myServo3.slowmove(90,'+spedservo+'); 	\n       delay('+delaytime2n+');	\n         myServo2.attach(2);	\n       myServo2.slowmove(90,'+spedservo+'); 	\n       delay('+delaytime2n+');	\n         myServo4.attach(4);	\n        myServo4.slowmove(40,'+spedservo+');	\n       delay('+delaytime2n+');	\n        myServo8.attach(8);	\n       myServo8.slowmove(160,'+spedservo+'); 	\n       delay('+delaytime+');	\n        myServo6.attach(6);	\n        myServo6.slowmove(160,'+spedservo+');   	\n         delay('+delaytime2n+');	\n        }	\n    \n   '; }   
	


if(delay == "1"){ var delaytime = 400; var spedservo = 70;}
if(delay == "2"){ var delaytime = 200; var spedservo = 40;}
if(deistvie == "7"){var code = '   for (int count = 0; count < '+forrobot+'; count++) {	\n  myServo2.attach(2);	\n              myServo2.slowmove(30,'+spedservo+');	\n             myServo3.attach(3);	\n             myServo3.slowmove(150,'+spedservo+');	\n            myServo4.attach(4);	\n             myServo4.slowmove(30,'+spedservo+');	\n            myServo5.attach(5);	\n             myServo5.slowmove(150,'+spedservo+');	\n             myServo6.attach(6);	\n              myServo6.slowmove(150,'+spedservo+');	\n             myServo7.attach(7);	\n             myServo7.slowmove(30,'+spedservo+');	\n             myServo8.attach(8);	\n              myServo8.slowmove(170,'+spedservo+');	\n            myServo9.attach(9);	\n             myServo9.slowmove(10,'+spedservo+');	\n            delay('+delaytime+');	\n            myServo6.attach(6);	\n             myServo6.slowmove(170,'+spedservo+');	\n             myServo7.attach(7);	\n             myServo7.slowmove(10,'+spedservo+');	\n            myServo8.attach(8);	\n             myServo8.slowmove(150,'+spedservo+');	\n            myServo9.attach(9);	\n             myServo9.slowmove(30,'+spedservo+');	\n            delay('+delaytime+');	\n        }	\n         \n   '; }  
 	
 return code
};




Blockly.Arduino['ardublock_block4']=function(block){
    var value_statement = Blockly.Arduino.statementToCode(block, 'statement');
    var valueuni = block.getFieldValue('uni');
    Blockly.Arduino.includes_['includes_uni'] = '	int ultra = 0;	\n    	\n        long ultrason_12() {	\n        long duration, distance;	\n        digitalWrite(12,LOW);	\n        delayMicroseconds(2);	\n        digitalWrite(12, HIGH);	\n        delayMicroseconds(10);	\n        digitalWrite(12, LOW);	\n        duration = pulseIn(11, HIGH);	\n        distance = duration/58;	\n        return distance;	\n      }	\n      	';
    Blockly.Arduino.setups_['setups_uni']='	  Serial.begin(9600);	\n      pinMode(12, OUTPUT);	\n     pinMode(11, INPUT);	\n    	';
    var code = ' ultra = ultrason_12();	\n      if (ultra > 3) {	\n     Serial.println(" ");   Serial.print(ultra);	\n       if (ultra < '+valueuni+') {	\n          Serial.println(" - ОК");	\n     	  '+value_statement+'	\n       }	\n      }	\n    	';
    return code
};




Blockly.Arduino['ardublock_block3']=function(block){
    var deistvie = block.getFieldValue('deistvie');
    var delay = block.getFieldValue('delay');
	var gradus = block.getFieldValue('gradus');
    Blockly.Arduino.includes_['includes_VarSpeedServo'] = '#include <VarSpeedServo.h>';

    Blockly.Arduino.variables_['variables_myServo'+deistvie] = 'VarSpeedServo myServo'+deistvie+'; \n  ';
    Blockly.Arduino.setups_['setups_myServo'+deistvie]='myServo'+deistvie+'.attach('+deistvie+'); \n myServo'+deistvie+'.detach(); \n  ';
	//Blockly.Arduino.setups_['setups_myServo_delay']=' delay(300);   \n  ';
 
 
    var code = '       myServo'+deistvie+'.attach('+deistvie+');	\n  myServo'+deistvie+'.slowmove('+gradus+','+delay+');	\n  '; 
		  
return code
};

 Blockly.Arduino['ardublock_block5']=function(block){
    var delay = block.getFieldValue('delay');
	
    var code = 'delay('+delay+'); \n  '; 
		  
return code
};



Blockly.Arduino['ardublock_block6']=function(block){
    var value_statement = Blockly.Arduino.statementToCode(block, '_statement');
    Blockly.Arduino.includes_['includes_eeprom'] = '#include <EEPROM.h>';
    Blockly.Arduino.variables_['variables_x'] = 'int resetxxx = 0;';
    Blockly.Arduino.setups_['setups_reset_x']='    resetxxx = EEPROM.read(0); \n  resetxxx = resetxxx + 1; \n  EEPROM.write(0,resetxxx); \n  if (resetxxx == 2) { \n    resetxxx = 0; \n    EEPROM.write(0,resetxxx); \n   }';
    var code = '    if (resetxxx == 0) { \n  	'+value_statement+' \n    } \n  ';
    return code
};

Blockly.Arduino['ardublock_block7']=function(block){
    var digitallled = block.getFieldValue('digitallled');
	
    var code = ' pinMode(13, OUTPUT);  \n    digitalWrite(13, '+digitallled+');\n  ';
   
    return code
};

// блоки сервомотра

Blockly.Arduino['ardublock_block8']=function(block){
    var gradus = block.getFieldValue('gradus');
    Blockly.Arduino.includes_['includes_VarSpeedServo'] = '#include <VarSpeedServo.h> \n  ';
    Blockly.Arduino.variables_['variables_myServo'] = 'VarSpeedServo myServo3; \n  VarSpeedServo myServo4; \n  VarSpeedServo myServo5; \n  VarSpeedServo myServo6; \n  VarSpeedServo myServo7; \n  ';
    Blockly.Arduino.setups_['setups_myServo']='  myServo3.attach(3); \n  myServo3.detach(); \n  myServo4.attach(4); \n myServo4.detach(); \n myServo5.attach(5); \n  myServo5.detach(); \n    myServo6.attach(6); \n   myServo6.detach(); \n   myServo7.attach(7); \n myServo7.detach(); \n  ';
    var code = 'myServo7.attach(7); \n  myServo7.slowmove('+gradus+',30); \n delay(1000); \n ';
    return code
};
  
Blockly.Arduino['ardublock_block9']=function(block){
    var deistvie = block.getFieldValue('deistvie');
    var delay = block.getFieldValue('delay');
	var gradus = block.getFieldValue('gradus');
    Blockly.Arduino.includes_['includes_VarSpeedServo'] = '#include <VarSpeedServo.h> \n  ';
    Blockly.Arduino.variables_['variables_myServo'] = 'VarSpeedServo myServo3; \n  VarSpeedServo myServo4; \n  VarSpeedServo myServo5; \n  VarSpeedServo myServo6; \n  VarSpeedServo myServo7; \n  ';
    Blockly.Arduino.setups_['setups_myServo']='  myServo3.attach(3); \n  myServo3.detach(); \n  myServo4.attach(4); \n myServo4.detach(); \n myServo5.attach(5); \n  myServo5.detach(); \n    myServo6.attach(6); \n   myServo6.detach(); \n   myServo7.attach(7); \n myServo7.detach(); \n  ';
    
	var code = '       myServo'+deistvie+'.attach('+deistvie+');	\n  myServo'+deistvie+'.slowmove('+gradus+','+delay+');	\n  '; 
		  
return code
};

Blockly.Arduino['ardublock_block10']=function(block){
    var delay = block.getFieldValue('delay');
	var gradus = block.getFieldValue('gradus');
    Blockly.Arduino.includes_['includes_VarSpeedServo'] = '#include <VarSpeedServo.h> \n  ';
    Blockly.Arduino.variables_['variables_myServo'] = 'VarSpeedServo myServo3; \n  VarSpeedServo myServo4; \n  VarSpeedServo myServo5; \n  VarSpeedServo myServo6; \n  VarSpeedServo myServo7; \n  ';
    Blockly.Arduino.setups_['setups_myServo']='  myServo3.attach(3); \n  myServo3.detach(); \n  myServo4.attach(4); \n myServo4.detach(); \n myServo5.attach(5); \n  myServo5.detach(); \n    myServo6.attach(6); \n   myServo6.detach(); \n   myServo7.attach(7); \n myServo7.detach(); \n  ';
    
	var code = 'myServo3.attach(3);	\n  myServo3.slowmove('+gradus+','+delay+'); \n delay(map('+delay+', 10, 100, 2000, 200)); \n ';
return code
};

Blockly.Arduino['ardublock_block11']=function(block){
    var idn_text = "2";
	var bb_dropdown = block.getFieldValue('bb_dropdown');
 
	  var bot_statement = Blockly.Arduino.statementToCode(block, 'bot_statement');
	  var bot_statement1 = Blockly.Arduino.statementToCode(block, 'bot_statement1');
	
	Blockly.Arduino.includes_['setups_pin_botton_pro'+idn_text]=' int bt'+idn_text+' = 0; \n  int bn'+idn_text+' = 0; \n  int bc'+idn_text+' = 1; \n  ';
    Blockly.Arduino.setups_['setups_pin_botton_pro'+idn_text]='   pinMode('+idn_text+', INPUT_PULLUP);  \n';

	if(bb_dropdown == 0){
	var code = '  \n   '+
	  '  if (digitalRead('+idn_text+') == 0 & bn'+idn_text+' == 0) { \n   '+
    '   bc'+idn_text+' = bc'+idn_text+' * -1; \n   '+
     '  if (bc'+idn_text+' == 1) { \n   '+
    '  '+bot_statement+'   \n       '+
    '   } \n   '+
    '   if (bc'+idn_text+' == -1) { \n   '+
    '  '+bot_statement1+'   \n       '+
   '    } \n   '+
   '    delay(150); \n   '+
   '    bn'+idn_text+' = 1; \n   '+
   '  } \n   '+
   '  if (digitalRead('+idn_text+') == 1 & bn'+idn_text+' == 1) { \n   '+
   '    bn'+idn_text+' = 0; \n   '+
    ' } \n   '+
   '   	\n	';
	}else{
	var code = '  \n   '+
   '  if (digitalRead('+idn_text+') == 0 & bt'+idn_text+' == 0) { \n       '+
    '  bt'+idn_text+' = 1; \n       '+
   '  '+bot_statement+'   \n       '+
   ' } \n       '+
   ' if (digitalRead('+idn_text+') == 1 & bt'+idn_text+' == 1) { \n       '+
   '   bt'+idn_text+' = 0; \n       '+
   '  '+bot_statement1+'   \n       '+
   ' } \n       '+
    '  \n  ';	
	} 
	return code
};


 Blockly.Arduino['ardublock_block12']=function(block){
    var valuetop = Blockly.Arduino.statementToCode(block, 'top');
    var valuebot = Blockly.Arduino.statementToCode(block, 'bot');
    var valueleft = Blockly.Arduino.statementToCode(block, 'left');
    var valuerighit = Blockly.Arduino.statementToCode(block, 'righit');
    var valuenoneboz = Blockly.Arduino.statementToCode(block, 'noneboz');

    var code = ' if (analogRead(A0) < 50) { \n    '+valuetop+' \n    } else { \n   if (analogRead(A0) > 900) { \n     '+valuebot+' \n  } else { \n    if (analogRead(A1) < 50) { \n   '+valueleft+' \n    } else { \n   if (analogRead(A1) > 900) { \n   '+valuerighit+' \n   } else { \n  '+valuenoneboz+' \n    } \n      } \n    } \n   } \n  ';
    return code
};

 Blockly.Arduino['ardublock_block13']=function(block){
var dropdown = block.getFieldValue('dropdown');
var delay = block.getFieldValue('delay');
    Blockly.Arduino.includes_['includes_VarSpeedServo'] = '#include <VarSpeedServo.h> \n  ';
    Blockly.Arduino.variables_['variables_myServo'] = 'VarSpeedServo myServo3; \n  VarSpeedServo myServo4; \n  VarSpeedServo myServo5; \n  VarSpeedServo myServo6; \n  VarSpeedServo myServo7; \n  ';
    Blockly.Arduino.setups_['setups_myServo']='myServo3.attach(3); \n  myServo3.detach(); \n  myServo4.attach(4); \n myServo4.detach(); \n myServo5.attach(5); \n  myServo5.detach(); \n    myServo6.attach(6); \n   myServo6.detach(); \n   myServo7.attach(7); \n myServo7.detach(); \n  ';
    
 if(delay == "1"){ var delaytime = 300; var spedservo = 50;}
 if(delay == "2"){ var delaytime = 500; var spedservo = 20;}
 if(dropdown == "1"){ var code = 'myServo3.attach(3); \n    myServo3.slowmove(90,'+spedservo+'); \n    myServo6.attach(6); \n    myServo6.slowmove(90,'+spedservo+'); \n    myServo5.attach(5); \n    myServo5.slowmove(90,'+spedservo+'); \n myServo4.attach(4); \n     myServo4.slowmove(90,'+spedservo+'); \n delay('+delaytime+');  \n  '; }
 if(dropdown == "2"){ var code = 'myServo4.attach(4); \n    myServo4.slowmove(70,'+spedservo+'); \n    myServo5.attach(5); \n    myServo5.slowmove(170,'+spedservo+'); \n   myServo6.attach(6); \n    myServo6.slowmove(170,'+spedservo+'); \n delay('+delaytime+');  \n  '; }
 if(dropdown == "3"){ var code = 'myServo4.attach(4); \n    myServo4.slowmove(100,'+spedservo+'); \n   myServo5.attach(5); \n    myServo5.slowmove(170,'+spedservo+'); \n   myServo6.attach(6); \n    myServo6.slowmove(170,'+spedservo+'); \n delay('+delaytime+');  \n  '; }
 if(dropdown == "4"){ var code = 'myServo4.attach(4); \n    myServo4.slowmove(40,'+spedservo+'); \n    myServo5.attach(5); \n    myServo5.slowmove(170,'+spedservo+'); \n   myServo6.attach(6); \n    myServo6.slowmove(170,'+spedservo+');  \n delay('+delaytime+'); \n  '; } 
 if(dropdown == "5"){ var code = 'myServo4.attach(4); \n    myServo4.slowmove(90,'+spedservo+'); \n    myServo5.attach(5); \n    myServo5.slowmove(120,'+spedservo+'); \n   myServo6.attach(6); \n    myServo6.slowmove(170,'+spedservo+'); \n delay('+delaytime+');  \n  '; } 
 if(dropdown == "6"){ var code = 'myServo4.attach(4); \n    myServo4.slowmove(90,'+spedservo+'); \n    myServo5.attach(5); \n    myServo5.slowmove(110,'+spedservo+'); \n   myServo6.attach(6); \n    myServo6.slowmove(130,'+spedservo+'); \n delay('+delaytime+');  \n  '; } 
	
	return code
	
};

// плата enjoy esp32  

Blockly.Arduino['enjoyesp1']=function(block){
    var nomer = block.getFieldValue('nomer');
    var sig = block.getFieldValue('sig');  
	 var code = ' pinMode('+nomer+', OUTPUT); \n   digitalWrite('+nomer+', '+sig+');  \n  ';   
    return code
};

Blockly.Arduino['enjoyesp2']=function(block){
var value_colour = block.getFieldValue('colour');
 var numberstrip = 0;
 var pin_ledrgb = 33;
 var numpixels = 1;
 
Blockly.Arduino.definitions_['define_enjoyesp2'] = ' #include <Adafruit_NeoPixel.h> \n #ifdef __AVR__ \n #include <avr/power.h> \n #endif \n ';
Blockly.Arduino.definitions_['define_enjoyesp2' + numberstrip] = 'Adafruit_NeoPixel pixels_'+numberstrip+ ' = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n';
Blockly.Arduino.setups_['setup_enjoyesp2' + numberstrip] = 'pixels_'+numberstrip+'.begin();\n';
 
  var colorall = block.getFieldValue('colour');
  var red = parseInt(colorall.substring(1,3),16);
  var green = parseInt(colorall.substring(3,5),16);
  var blue = parseInt(colorall.substring(5,7),16)
  

  var code = 'pixels_'+numberstrip+'.setBrightness(255);\n pixels_'+numberstrip+'.setPixelColor('+numpixels+'-1, pixels_'+numberstrip+'.Color('+red+','+green+','+blue+'));\n pixels_'+numberstrip+'.show();\n ';
 
  return code
   
};

  Blockly.Arduino['esp32ledi_ws2812'] = function(block) {	
  var numberstrip = block.getFieldValue('Pin');   // номер
  var pin_ledrgb = block.getFieldValue('Pin');   // пин ленты
  var numpixels = block.getFieldValue('ledoff'); // количество пикселей в ленте
  Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = ' #include <Adafruit_NeoPixel.h> \n #ifdef __AVR__ \n  #include <avr/power.h>  \n #endif \n long Pixcil = 0; \n long NeoPix = 0; \n';
  Blockly.Arduino.definitions_['define_ledRGB_WS2812B_top' + numberstrip] = ' Adafruit_NeoPixel strip'+numberstrip+'('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);   \n ';
  Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'] = ' #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000) \n   clock_prescale_set(clock_div_1); \n #endif \n ';
  Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'+numberstrip] = '  strip'+numberstrip+'.begin();  \n  strip'+numberstrip+'.show();  \n  strip'+numberstrip+'.setBrightness(50);  \n';
  var valueledon = block.getFieldValue('ledon'); //start
  var valueledoff = block.getFieldValue('ledoff'); //stop
  var colorall = block.getFieldValue('RGBCOLOR'); // цвет ленты
  var red = parseInt(colorall.substring(1,3),16);
  var green = parseInt(colorall.substring(3,5),16);
  var blue = parseInt(colorall.substring(5,7),16);
  var number = this.getFieldValue('RE_NUMBER'); // программа ленты
if(number == 6){
	 var pixel_number = 1; // задержка
  var code = ' Pixcil = '+valueledon+'; \n NeoPix = '+valueledoff+' - Pixcil; \n  for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n   strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n    strip'+numberstrip+'.show(); \n      } \n   Pixcil = '+valueledon+'; \n   delay('+pixel_number+'); \n ';
}
if(number == 7){
	 var pixel_number = 50; // задержка
  var code = ' Pixcil = '+valueledon+'; \n NeoPix = '+valueledoff+' - Pixcil; \n   for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n     strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n     delay('+pixel_number+'); \n    strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n      strip'+numberstrip+'.show(); \n      } \n      Pixcil = '+valueledon+'; \n ';
 } 
if(number == 8){
	 var pixel_number = 50; // задержка
  var code = '  Pixcil = '+valueledoff+'; \n  NeoPix = '+valueledoff+' - '+valueledon+'; \n //Pixcil = NeoPix; \n for (int count = 0; count < NeoPix; count++) { \n   strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n    delay('+pixel_number+'); \n    strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n      strip'+numberstrip+'.show(); \n   Pixcil = Pixcil - 1; \n   } \n     Pixcil = '+valueledoff+'; \n ';
 }  
 if(number == 10){ 
  var pixel_number = 50; // задержка
 var code = ' Pixcil = '+valueledoff+' + 1; \n NeoPix = '+valueledoff+' - '+valueledon+'; \n    for (int count = 0; count < NeoPix*Pixcil; count++) { \n    for (int count = 0; count < NeoPix; count++) { \n       Pixcil = Pixcil - 1; \n       strip'+numberstrip+'.setBrightness(255); \n        strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n       strip'+numberstrip+'.show(); \n       delay('+pixel_number+'); \n      strip'+numberstrip+'.setBrightness(255); \n       strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n        strip'+numberstrip+'.show(); \n        } \n     strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n      strip'+numberstrip+'.show(); \n      Pixcil = Pixcil + NeoPix; \n NeoPix = NeoPix - 1; \n   } \n   Pixcil = '+valueledoff+' + 1; \n ';
}
 if(number == 11){ 
  var pixel_number = 50; // задержка
 var code = ' Pixcil = '+valueledon+'+1; \n NeoPix = '+valueledoff+' - Pixcil; \n     for (int count = 0; count < '+valueledoff+'; count++) { \n     for (int count = 0; count < NeoPix; count++) { \n      strip'+numberstrip+'.setBrightness(255); \n       strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n        strip'+numberstrip+'.show(); \n         delay('+pixel_number+'); \n       strip'+numberstrip+'.setBrightness(255); \n        strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n       strip'+numberstrip+'.show(); \n       Pixcil = Pixcil + 1; \n    } \n    strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n      Pixcil = '+valueledon+'+1; \n     NeoPix = NeoPix - 1; \n   } \n   Pixcil = '+valueledon+'; \n   ';
} 
 if(number == 12){ 
  var pixel_number = 100; // задержка
 var code = ' Pixcil = '+valueledon+'; \n NeoPix = '+valueledoff+' - Pixcil; \n     for (int count = 0; count < NeoPix; count++) { \n     Pixcil = Pixcil + 1; \n     strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n      delay('+pixel_number+'); \n } \n   Pixcil = '+valueledon+';  \n    ';
} 
 if(number == 13){ 
  var pixel_number = 100; // задержка
 var code = ' Pixcil = '+valueledoff+'; \n  NeoPix = '+valueledoff+' - '+valueledon+'; \n   //    Pixcil = NeoPix; \n   for (int count = 0; count < NeoPix; count++) { \n    strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n     delay('+pixel_number+'); \n     Pixcil = Pixcil - 1; \n   } \n   Pixcil = '+valueledon+'; \n       ';
} 
  return code;
};

Blockly.Arduino["serial_read2"]=function(block){
    var code="Serial.read()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["serial_available2"]=function(block){
    var code="Serial.available()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["soft_init2"]=function(block){
    var dropdown_pin1=Blockly.Arduino.valueToCode(block,"PIN1", Blockly.Arduino.ORDER_NONE);
    var dropdown_pin2=Blockly.Arduino.valueToCode(block,"PIN2", Blockly.Arduino.ORDER_NONE);
    var dropdown_speed=block.getFieldValue("SPEED");
    Blockly.Arduino.includes_["define_ss"]="#include <SoftwareSerial.h>";
	Blockly.Arduino.definitions_["define_ss"]="SoftwareSerial mySerial(" + dropdown_pin1 + "," + dropdown_pin2 + ");";
    Blockly.Arduino.setups_["setup_sserial"]="mySerial.begin(" + dropdown_speed + ");";
    return ""
};
Blockly.Arduino["soft_write2"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
    return "mySerial.write(" + content + ");\n"
};
Blockly.Arduino["soft_read2"]=function(block){
    var code="mySerial.read()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino["soft_available2"]=function(block){
    var code="mySerial.available()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino['eeprom_write_byteesp'] = function(block) {
	var adresse = Blockly.Arduino.valueToCode(block, 'adr', Blockly.Arduino.ORDER_ATOMIC);
	var valeur = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_["eeprom"] = '#include <EEPROM.h> \n  ';
		Blockly.Arduino.setups_["setup_eeprom"]='EEPROM.begin(100); \n ';
	return 'EEPROM.write('+adresse+','+valeur+'); \n EEPROM.commit(); \n';
};
Blockly.Arduino['eeprom_read_byteesp'] = function(block) {
	var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
	Blockly.Arduino.includes_["eeprom"] = '#include <EEPROM.h> \n ';
	Blockly.Arduino.setups_["setup_eeprom"]='EEPROM.begin(100); \n ';
	var code ='EEPROM.read('+address+')';
	return [code,Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['dht_sensor11'] = function(block) {
    var PinDHT = Blockly.Arduino.valueToCode(block, "PIN_DHT", Blockly.Arduino.ORDER_ATOMIC);
	var TypeDHT = this.getFieldValue('OUTPUT_TYPE');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	
	Blockly.Arduino.definitions_['include_dht'] = '#include "DHT.h" \n';
	
	if (TypeDHT=='0')
	{
		//Blockly.Arduino.definitions_['define_dht'] = '#define DHTTYPE DHT11   // DHT 11\n';
		Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHT11);\n';
		}
	else if (TypeDHT=='1')
		{
		//Blockly.Arduino.definitions_['define_dht'] = '#define DHTTYPE DHT21   // DHT 21\n';
		Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHT21);\n';
		}
	else
		{
		//Blockly.Arduino.definitions_['define_dht'] = '#define DHTTYPE DHT22   // DHT 22\n';
		Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHT22);\n';
		}
	//Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHTTYPE);\n';
	Blockly.Arduino.setups_['setup_input_'+PinDHT] = 'dht_'+PinDHT+'.begin();\n';
	
    if(Status=='0')
      var code = 'dht_'+PinDHT+'.readTemperature()';  
    else if (Status=='1')
      var code = 'dht_'+PinDHT+'.readHumidity()';
    else
		var code= 'dht_'+PinDHT+'.computeHeatIndex(dht_'+PinDHT+'.readTemperature(),dht_'+PinDHT+'.readHumidity(),true)';	
  
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['lcdi2c_setup'] = function(block) {
var text_name = block.getFieldValue('NAME');  // TODO: Assemble Arduino into code variable.
    Blockly.Arduino.includes_['define_lcd'] = '#include <Wire.h>\n#include <LiquidCrystal_I2C.h>   \n';


    var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
    var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
   
   Blockly.Arduino.definitions_['define_lcdpins'] = 'LiquidCrystal_I2C lcd('+text_name+','+value_columns+','+value_rows+');\n';
    
   Blockly.Arduino.setups_['setup_lcdi2c']='lcd.init();\n'

  var code = '';
  return code;
};

Blockly.Arduino['lcdi2c_setBacklight'] = function(block) {
  var OptionDisplay = this.getFieldValue('OUTPUT_DISPLAY'); 
   if (OptionDisplay==1)
     var code = 'lcd.backlight();\n';
   else
     var code = 'lcd.noBacklight();\n';
  return code;
};
Blockly.Arduino['lcdi2c_clear'] = function(block) {
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino['OLED_init'] = function(block) {
  var value_height = block.getFieldValue('height');
  var value_address = block.getFieldValue('address');
  Blockly.Arduino.includes_['OLED'] = '#include <Adafruit_GFX.h>\n'
  +'#include <Adafruit_SSD1306.h>';
  Blockly.Arduino.definitions_['OLED'] = '#define SCREEN_WIDTH 128 // OLED display width, in pixels\n'
  +'#define SCREEN_HEIGHT '+value_height+'  // OLED display height, in pixels\n'
  +'#define OLED_RESET  -1 // sharing Arduino reset pin\n'
  +'Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);';
  Blockly.Arduino.setups_['OLED']='display.begin(SSD1306_SWITCHCAPVCC, '+value_address+');\n'
  +'display.clearDisplay();\n'
  +'display.display();\n' ;
  return ""
};

 Blockly.Arduino['OLED_rotate'] = function(block) {
  var angle = block.getFieldValue('angle');
  var code = 'display.setRotation('+angle+');\n';
  return code
};

 Blockly.Arduino['OLED_data'] = function(block) {
  var value_x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
  var value_y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
  var value_size  = block.getFieldValue('height');
  var value_print = Blockly.Arduino.valueToCode(block, 'print', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'display.setTextSize('+value_size+');\n'
  +'display.setTextColor(WHITE);\n'
  +'display.setCursor('+value_x+','+value_y+');\n'
  +'display.println('+value_print+');\n display.display(); \n';
  return code
};
Blockly.Arduino['OLED_clear'] = function(block) {
  var code = 'display.clearDisplay();\n' ;
  return code;
};
Blockly.Arduino['dwin_box_ttl2']=function(block){
    Blockly.Arduino.definitions_["definitions_dwin_box_ttl"] = '  \n   '+
 ' #include "designerDWIN.h"  \n   ';
 
    var code = ' ';
    return code
};

Blockly.Arduino['DFPplayerMp3_init_serial132'] = function(block) {
var rx = Blockly.Arduino.valueToCode(block, 'rx', Blockly.Arduino.ORDER_ATOMIC); 
var tx = Blockly.Arduino.valueToCode(block, 'tx', Blockly.Arduino.ORDER_ATOMIC); 
 
 Blockly.Arduino.definitions_['define_dfplayermp3_library'] = '  #include <SoftwareSerial.h> \n SoftwareSerial DFMiniSerial('+rx+','+tx+'); \n void exe_cmd(byte CMD, byte Par1, byte Par2) { \n  word check=-(0xFF + 0x06 + CMD + 0x00 + Par1 + Par2); \n  byte Command[10]={0x7E,0xFF,0x06,CMD,0x00,Par1,Par2,highByte(check),lowByte(check),0xEF}; \n   for (int i=0; i<10; i++) { \n    DFMiniSerial.write( Command[i]); \n  }; \n  } \n ';


 Blockly.Arduino.setups_['setup_serial1_baudios'] = '  DFMiniSerial.begin(9600); \n  delay(1000); \n  exe_cmd(0x3F,0,0); \n  exe_cmd(0x06,0,0x14); \n';
 //Blockly.Arduino.setups_['setup_dfplayermp3'] = 'mp3_set_serial (Serial); \n';

  
  var code=' ';
  return code;
   
};

Blockly.Arduino['DFPplayerMp3_init_serial232'] = function(block) {
	var NOM = Blockly.Arduino.valueToCode(block, 'NOM', Blockly.Arduino.ORDER_ATOMIC); 
	 

 
  var code=' exe_cmd(0x03,0,'+NOM+');\n ';
  return code;
   
};

 

Blockly.Arduino['DFPplayerMp3_init_serial432'] = function(block) {
	  
	var VELL = block.getFieldValue("dp");
 
  var code='exe_cmd('+VELL+'); \n ';
  return code;
   
};



Blockly.Arduino['bt_key_print']=function(block){
    var value_text = block.getFieldValue('_text');
    Blockly.Arduino.includes_["includes_bt_key_print"] = '#include <BleKeyboard.h> \n   BleKeyboard bleKeyboard; \n ';
    Blockly.Arduino.setups_["setups_bt_key_print"]='bleKeyboard.begin(); \n';
    var code = 'bleKeyboard.print("'+value_text+'"); \n';
    return code
};
Blockly.Arduino['bt_key_modifikation']=function(block){
    var value_dropdown = block.getFieldValue('_dropdown');
   Blockly.Arduino.includes_["includes_bt_key_print"] = '#include <BleKeyboard.h> \n   BleKeyboard bleKeyboard; \n ';
    Blockly.Arduino.setups_["setups_bt_key_print"]='bleKeyboard.begin(); \n';
    var code = 'bleKeyboard.write('+value_dropdown+'); \n';
    return code
};
Blockly.Arduino['bt_key_press']=function(block){
    var value_dropdown = block.getFieldValue('_dropdown');
   Blockly.Arduino.includes_["includes_bt_key_print"] = '#include <BleKeyboard.h> \n   BleKeyboard bleKeyboard; \n ';
    Blockly.Arduino.setups_["setups_bt_key_print"]='bleKeyboard.begin(); \n';
    var code = 'bleKeyboard.press('+value_dropdown+'); \n';
    return code
};
Blockly.Arduino['bt_key_release']=function(block){
     
    Blockly.Arduino.includes_["includes_bt_key_print"] = '#include <BleKeyboard.h> \n   BleKeyboard bleKeyboard; \n ';
    Blockly.Arduino.setups_["setups_bt_key_print"]='bleKeyboard.begin(); \n';
    var code = 'bleKeyboard.releaseAll(); \n';
    return code
};
Blockly.Arduino['bt_key_delay']=function(block){
    var value_text = block.getFieldValue('_text');
    Blockly.Arduino.includes_["includes_bt_key_print"] = '#include <BleKeyboard.h> \n   BleKeyboard bleKeyboard; \n ';
    Blockly.Arduino.setups_["setups_bt_key_print"]='bleKeyboard.begin(); \n';
    var code = 'bleKeyboard.setDelay('+value_text+'); \n';
    return code
};
Blockly.Arduino['bt_key_cliker']=function(block){
    var value_dropdown = block.getFieldValue('_dropdown');
    Blockly.Arduino.includes_["includes_bt_key_cliker"] = '#include <BleMouse.h> \n   BleMouse bleMouse; \n ';
    Blockly.Arduino.setups_["setups_bt_key_cliker"]='bleMouse.begin(); \n';
    var code = 'bleMouse.click('+value_dropdown+'); \n';
    return code
};
Blockly.Arduino['bt_key_cliker1']=function(block){
    var value_dropdown = block.getFieldValue('_dropdown');
	var value_text = block.getFieldValue('_text');
    Blockly.Arduino.includes_["includes_bt_key_cliker"] = '#include <BleMouse.h> \n   BleMouse bleMouse; \n ';
    Blockly.Arduino.setups_["setups_bt_key_cliker"]='bleMouse.begin(); \n';
	
	if(value_dropdown == "up"){var code = ' for (int count = 0; count < '+value_text+'; count++) {  \n  bleMouse.move(0,0,1); \n delay(10); \n }  \n';}
	if(value_dropdown == "down"){var code = ' for (int count = 0; count < '+value_text+'; count++) {  \n  bleMouse.move(0,0,-1); \n delay(10); \n }  \n';}
	if(value_dropdown == "left"){var code = ' for (int count = 0; count < '+value_text+'; count++) {  \n  bleMouse.move(0,0,0,-1); \n delay(10); \n }  \n';}
	if(value_dropdown == "right"){var code = ' for (int count = 0; count < '+value_text+'; count++) {  \n  bleMouse.move(0,0,0,1); \n delay(10); \n }  \n';}
        
    return code
};
Blockly.Arduino['bt_key_cliker2']=function(block){
    var value_dropdown = block.getFieldValue('_dropdown');
	var value_text = block.getFieldValue('_text');
    Blockly.Arduino.includes_["includes_bt_key_cliker"] = '#include <BleMouse.h> \n   BleMouse bleMouse; \n ';
    Blockly.Arduino.setups_["setups_bt_key_cliker"]='bleMouse.begin(); \n';
	
	if(value_dropdown == "up"){var code = ' for (int count = 0; count < '+value_text+'; count++) {  \n   bleMouse.move(0,-1); \n delay(10); \n }  \n';}
	if(value_dropdown == "down"){var code = ' for (int count = 0; count < '+value_text+'; count++) {  \n  bleMouse.move(0,1); \n delay(10); \n }  \n';}
	if(value_dropdown == "left"){var code = ' for (int count = 0; count < '+value_text+'; count++) {  \n  bleMouse.move(-1,0); \n delay(10);  \n } \n';}
	if(value_dropdown == "right"){var code = ' for (int count = 0; count < '+value_text+'; count++) {  \n  bleMouse.move(1,0); \n delay(10); \n } \n';}
        
    return code
};
 Blockly.Arduino['RTTTL_music'] = function(block) {
  var melody = this.getFieldValue('MELODY');
  var PIN_BUZZER = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
Blockly.Arduino.includes_["includes_NonBlockingRtttl"] = '#include <NonBlockingRtttl.h>  \n       '+
'#define BUZZER_PIN '+PIN_BUZZER+'   \n       '+
'const char * StarWars = "StarWars:d=32,o=5,b=45,l=2:p,f#,f#,f#,8b.,8f#.6,e6,d#6,c#6,8b.6,16f#.6,e6,d#6,c#6,8b.6,16f#.6,e6,d#6,e6,8c#6";  \n       '+
'const char * MahnaMahna = "MahnaMahna:d=16,o=6,b=125:c#,c.,b5,8a#.5,8f.,4g#,a#,g.,4d#,8p,c#,c.,b5,8a#.5,8f.,g#.,8a#.,4g,8p,c#,c.,b5,8a#.5,8f.,4g#,f,g.,8d#.,f,g.,8d#.,f,8g,8d#.,f,8g,d#,8c,a#5,8d#.,8d#.,16d#.,16d#.,8d#.";  \n       '+
'const char * LeisureSuit = "LeisureSuit:d=16,o=6,b=56:f.5,f#.5,g.5,g#5,32a#5,f5,g#.5,a#.5,32f5,g#5,32a#5,g#5,8c#.,a#5,32c#,a5,a#.5,c#.,32a5,a#5,32c#,d#,8e,c#.,f.,f.,f.,f.,f,32e,d#,8d,a#.5,e,32f,e,32f,c#,d#.,c#";  \n       '+
'const char * MissionImp = "MissionImp:d=16,o=6,b=95:32d,32d#,32d,32d#,32d,32d#,32d,32d#,32d,32d,32d#,32e,32f,32f#,32g,g,8p,g,8p,a#,p,c7,p,g,8p,g,8p,f,p,f#,p,g,8p,g,8p,a#,p,c7,p,g,8p,g,8p,f,p,f#,p,a#,g,2d,32p,a#,g,2c#,32p,a#,g,2c,a#5,8c,2p,32p,a#5,g5,2f#,32p,a#5,g5,2f,32p,a#5,g5,2e,d#,8d";  \n       '+
'const char * Entertainer = "Entertainer:d=4,o=5,b=140:8d,8d#,8e,c6,8e,c6,8e,2c.6,8c6,8d6,8d#6,8e6,8c6,8d6,e6,8b,d6,2c6,p,8d,8d#,8e,c6,8e,c6,8e,2c.6,8p,8a,8g,8f#,8a,8c6,e6,8d6,8c6,8a,2d6";  \n       '+
'const char * Muppets = "Muppets:d=4,o=5,b=250:c6,c6,a,b,8a,b,g,p,c6,c6,a,8b,8a,8p,g.,p,e,e,g,f,8e,f,8c6,8c,8d,e,8e,8e,8p,8e,g,2p,c6,c6,a,b,8a,b,g,p,c6,c6,a,8b,a,g.,p,e,e,g,f,8e,f,8c6,8c,8d,e,8e,d,8d,c";  \n       '+
'const char * Flinstones = "Flinstones:d=32,o=5,b=40:p,16f6,16a#,16a#6,g6,16f6,16a#.,16f6,d#6,d6,d6,d#6,f6,16a#,16c6,4d6,16f6,16a#.,16a#6,g6,16f6,16a#.,f6,f6,d#6,d6,d6,d#6,f6,16a#,16c6,4a#,16a6,16d.6,16a#6,a6,a6,g6,f#6,a6,8g6,16g6,16c.6,a6,a6,g6,g6,f6,e6,g6,8f6,16f6,16a#.,16a#6,g6,16f6,16a#.,16f6,d#6,d6,d6,d#6,f6,16a#,16c.6,d6,d#6,f6,16a#,16c.6,d6,d#6,f6,16a#6,16c7,8a#.6";  \n       '+
'const char * YMCA = "YMCA:d=4,o=5,b=160:8c#6,8a#,2p,8a#,8g#,8f#,8g#,8a#,c#6,8a#,c#6,8d#6,8a#,2p,8a#,8g#,8f#,8g#,8a#,c#6,8a#,c#6,8d#6,8b,2p,8b,8a#,8g#,8a#,8b,d#6,8f#6,d#6,f.6,d#.6,c#.6,b.,a#,g#";  \n       '+
'const char * TheSimpsons = "TheSimpsons:d=4,o=5,b=160:c.6,e6,f#6,8a6,g.6,e6,c6,8a,8f#,8f#,8f#,2g,8p,8p,8f#,8f#,8f#,8g,a#.,8c6,8c6,8c6,c6";  \n       '+
'const char * Indiana = "Indiana:d=4,o=5,b=250:e,8p,8f,8g,8p,1c6,8p.,d,8p,8e,1f,p.,g,8p,8a,8b,8p,1f6,p,a,8p,8b,2c6,2d6,2e6,e,8p,8f,8g,8p,1c6,p,d6,8p,8e6,1f.6,g,8p,8g,e.6,8p,d6,8p,8g,e.6,8p,d6,8p,8g,f.6,8p,e6,8p,8d6,2c6";  \n       '+
'const char * TakeOnMe = "TakeOnMe:d=8,o=4,b=160:f#5,f#5,f#5,d5,p,b,p,e5,p,e5,p,e5,g#5,g#5,a5,b5,a5,a5,a5,e5,p,d5,p,f#5,p,f#5,p,f#5,e5,e5,f#5,e5,f#5,f#5,f#5,d5,p,b,p,e5,p,e5,p,e5,g#5,g#5,a5,b5,a5,a5,a5,e5,p,d5,p,f#5,p,f#5,p,f#5,e5,e5";  \n       '+
'const char * Looney = "Looney:d=4,o=5,b=140:32p,c6,8f6,8e6,8d6,8c6,a.,8c6,8f6,8e6,8d6,8d#6,e.6,8e6,8e6,8c6,8d6,8c6,8e6,8c6,8d6,8a,8c6,8g,8a#,8a,8f";  \n       '+
'const char * thCenFox = "thCenFox:d=16,o=5,b=140:b,8p,b,b,2b,p,c6,32p,b,32p,c6,32p,b,32p,c6,32p,b,8p,b,b,b,32p,b,32p,b,32p,b,32p,b,32p,b,32p,b,32p,g#,32p,a,32p,b,8p,b,b,2b,4p,8e,8g#,8b,1c#6,8f#,8a,8c#6,1e6,8a,8c#6,8e6,1e6,8b,8g#,8a,2b";  \n       '+
'const char * Bond = "Bond:d=16,o=5,b=80:p,c#6,32d#6,32d#6,d#6,8d#6,c#6,c#6,c#6,c#6,32e6,32e6,e6,8e6,d#6,d#6,d#6,c#6,32d#6,32d#6,d#6,8d#6,c#6,c#6,c#6,c#6,32e6,32e6,e6,8e6,d#6,d6,c#6,c#7,4c.7,g#6,f#6,4g#.6";  \n       '+
'const char * GoodBad = "GoodBad:d=4,o=5,b=56:32p,32a#,32d#6,32a#,32d#6,8a#.,16f#.,16g#.,d#,32a#,32d#6,32a#,32d#6,8a#.,16f#.,16g#.,c#6,32a#,32d#6,32a#,32d#6,8a#.,16f#.,32f.,32d#.,c#,32a#,32d#6,32a#,32d#6,8a#.,16g#.,d#";  \n       '+
'const char * PinkPanther = "PinkPanther:d=16,o=5,b=160:8d#,8e,2p,8f#,8g,2p,8d#,8e,p,8f#,8g,p,8c6,8b,p,8d#,8e,p,8b,2a#,2p,a,g,e,d,2e";  \n       '+
'const char * ATeam = "ATeam:d=8,o=5,b=125:4d#6,a#,2d#6,16p,g#,4a#,4d#.,p,16g,16a#,d#6,a#,f6,2d#6,16p,c#.6,16c6,16a#,g#.,2a#";  \n       '+
'const char * Jeopardy = "Jeopardy:d=4,o=6,b=125:c,f,c,f5,c,f,2c,c,f,c,f,a.,8g,8f,8e,8d,8c#,c,f,c,f5,c,f,2c,f.,8d,c,a#5,a5,g5,f5,p,d#,g#,d#,g#5,d#,g#,2d#,d#,g#,d#,g#,c.7,8a#,8g#,8g,8f,8e,d#,g#,d#,g#5,d#,g#,2d#,g#.,8f,d#,c#,c,p,a#5,p,g#.5,d#,g#";  \n       '+
'const char * Gadget = "Gadget:d=16,o=5,b=50:32d#,32f,32f#,32g#,a#,f#,a,f,g#,f#,32d#,32f,32f#,32g#,a#,d#6,4d6,32d#,32f,32f#,32g#,a#,f#,a,f,g#,f#,8d#";  \n       '+
'const char * Smurfs = "Smurfs:d=32,o=5,b=200:4c#6,16p,4f#6,p,16c#6,p,8d#6,p,8b,p,4g#,16p,4c#6,p,16a#,p,8f#,p,8a#,p,4g#,4p,g#,p,a#,p,b,p,c6,p,4c#6,16p,4f#6,p,16c#6,p,8d#6,p,8b,p,4g#,16p,4c#6,p,16a#,p,8b,p,8f,p,4f#";  \n       '+
'const char * Toccata = "Toccata:d=4,o=5,b=160:16a4,16g4,1a4,16g4,16f4,16d4,16e4,2c#4,16p,d.4,2p,16a4,16g4,1a4,8e.4,8f.4,8c#.4,2d4";  \n       '+
'const char * Short = "Short:d=4,o=3,b=240,s=4:c4,8g,8g,a,g.,b,c4";  \n       '+
'const char * JingleBell = "JingleBell:d=8,o=5,b=112:a,a,4a,a,a,4a,a,c6,f.,16g,2a,a#,a#,a#.,16a#,a#,a,a.,16a,a,g,g,a,4g,4c6,16p,a,a,4a,a,a,4a,a,c6,f.,16g,2a,a#,a#,a#.,16a#,a#,a,a.,16a,c6,c6,a#,g,2f";  \n       '+
'const char * Rudolph = "Rudolph:d=16,o=6,b=100:32p,g#5,8a#5,g#5,8f5,8c#,8a#5,4g#.5,g#5,a#5,g#5,a#5,8g#5,8c#,2c,f#5,8g#5,f#5,8d#5,8c,8a#5,4g#.5,g#5,a#5,g#5,a#5,8g#5,8a#5,2f5,g#5,8a#5,a#5,8f5,8c#,8a#5,4g#.5,g#5,a#5,g#5,a#5,8g#5,8c#,2c,f#5,8g#5,f#5,8d#5,8c,8a#5,4g#.5,g#5,a#5,g#5,a#5,8g#5,8d#,2c#";  \n       '+
'const char * WeWishYou = "WeWishYou:d=4,o=5,b=200:d,g,8g,8a,8g,8f#,e,e,e,a,8a,8b,8a,8g,f#,d,d,b,8b,8c6,8b,8a,g,e,d,e,a,f#,2g,d,g,8g,8a,8g,8f#,e,e,e,a,8a,8b,8a,8g,f#,d,d,b,8b,8c6,8b,8a,g,e,d,e,a,f#,1g,d,g,g,g,2f#,f#,g,f#,e,2d,a,b,8a,8a,8g,8g,d6,d,d,e,a,f#,2g";  \n       '+
'const char * WinterWonderland = "WinterWonderland:d=16,o=5,b=112:8a#.,a#,2a#.,8a#.,a#,4g,2a#,8a#.,a#,2a#.,8a#.,a#,4g#,2a#,8p,a#,8d.6,d6,8d.6,4c.6,8p,c6,8a#.,a#,8a#.,4g#.,8p,g#,8g.,g,8g.,g,8f.,f,8f.,f,2d#,4p,8a#.,a#,2a#.,8a#.,a#,4g,2a#,8a#.,a#,2a#.,8a#.,a#,4g#,2a#,8p,a#,8d.6,d6,8d.6,4c.6,8p,c6,8a#.,a#,8a#.,4g#.,8p,g#,8g.,g,8g.,g,8f.,f,8f.,f,2d#,4p,8d.,d,8b.,b,8e.,e,8c.6,c6,4b,2g,4p,8d.,d,8b.,b,8e.,e,8c.6,c6,2b.";  \n       '+
'const char * OhDennenboom = "OhDennenboom:d=4,o=6,b=100:8c5,8f.5,16f5,f.5,8g5,8a.5,16a5,a5,8p,8a5,8g5,8a5,a_5,e5,g5,f.5,8c5,8f.5,16f5,f.5,8g5,8a.5,16a5,a5,8p,8a5,8g5,8a5,a_5,e5,g5,f.5,8c,8c,8a5,d.,8c,8c,8a_5,a_.5,8a_5,8a_5,8g5,c.,8a_5,8a_5,8a5,a.5,8c5,8f.5,16f5,f.5,8g5,8a.5,16a5,a5,8p,8a5,8g5,8a5,a_5,e5,g5,2f5";  \n       '+
'const char * LetItSnow = "LetItSnow:d=4,o=5,b=125:8c,8c,8c6,8c6,a#,a,g,f,2c,8c,16c,g.,8f,g.,8f,e,2c,d,8d6,8d6,c6,a#,a,2g.,8e.6,16d6,c6,8c.6,16a#,a,8a#.,16a,2f.,c,8c6,8c6,a#,a,g,f,2c,8c.,16c,g.,8f,g.,8f,e,2c,d,8d6,8d6,c6,a#,a,2g.,8e.6,16d6,c6,8c.6,16a#,a,8a.,16g,2f.";  \n       '+
'const char * Frosty = "Frosty:d=4,o=5,b=125:2g,e.,8f,g,2c6,8h,8c6,d6,c6,h,a,2g.,8h,8c6,d6,c6,h,8a,8a,g,c6,e,8g,8a,g,f,e,f,1g";  \n       '+
'const char * SilentNight = "SilentNight:d=4,o=5,b=112:g.,8a,g,2e.,g.,8a,g,2e.,2d6,d6,2b.,2c6,c6,2g.,2a,a,c6.,8b,a,g.,8a,g,2e.,2a,a,c6.,8b,a,g.,8a,g,2e.,2d6,d6,f6.,8d6,b,2c6.,2e6.,c6,g,e,g.,8f,d,2c.";  \n       '+
'const char * LastChristmas = "LastChristmas:d=4,o=6,b=112:g,16f5,16p,8g,16f5,16p,8f,16f5,16p,8c,8g,8g,8a,f,16f5,16p,16f5,16p,8c,8g,8g,8a,16d5,16p,f,16d5,16p,8f,8e,8f,8e,d,16d5,16p,16d5,16p,16d5,16p,a,16g5,16p,8a,16g5,16p,g,8d,8a,8a,8a_,g,16g5,16p,16g5,16p,8f,8e,8f,16c5,16p,8e,16c5,16p,8f,16c5,16p,8e,16c5,16p,c,16c5,16p,16c5,16p,16c5,16p,16c5,16p,16d5,16p,8f5";  \n       '+
'const char * AllIWant = "AllIWant:d=4,o=6,b=160:c5,e5,g5,8b5,c,b.5,8a5,g.5,d,c,8c,b5,c,b5,8a5,2g5,a5,c,8d,e,d,c,a.5,f5,8g#5,c.,8d,d#,d,a#5,g#.5,c,d,b5,8c,a5,b5,2g#5,c,d,b5,8c,a5,b5,2g#5,g5,a5,8c,g,f,8g,2f,e,d,c,a5,g#5,2d,e,8d.,2c.";  \n       '+
'const char * AmazingGrace = "AmazingGrace:d=8,o=5,b=80:c,f,2f,a,g,f,2a,a,g,2f,4d,2c,c,f,2f,a,g,f,2a,g,a,2c.6";  \n       '+
'byte songIndex = 0;  \n   ';

Blockly.Arduino.setups_["setups_NonBlockingRtttl"]=' pinMode(BUZZER_PIN, OUTPUT); \n';

var code = 'if ( !rtttl::isPlaying() ) { rtttl::begin(BUZZER_PIN, '+melody+');  unsigned long start = millis();  while( millis() - start < 20000 )  { rtttl::play(); }  rtttl::stop();  } \n';
 

var code;
return code;
};
 Blockly.Arduino['RTTTL_music1'] = function(block) {
  var melody = this.getFieldValue('MELODY');
  var PIN_BUZZER = 17;
Blockly.Arduino.includes_["includes_NonBlockingRtttl"] = '#include <NonBlockingRtttl.h>  \n       '+
'#define BUZZER_PIN '+PIN_BUZZER+'   \n       '+
'const char * StarWars = "StarWars:d=32,o=5,b=45,l=2:p,f#,f#,f#,8b.,8f#.6,e6,d#6,c#6,8b.6,16f#.6,e6,d#6,c#6,8b.6,16f#.6,e6,d#6,e6,8c#6";  \n       '+
'const char * MahnaMahna = "MahnaMahna:d=16,o=6,b=125:c#,c.,b5,8a#.5,8f.,4g#,a#,g.,4d#,8p,c#,c.,b5,8a#.5,8f.,g#.,8a#.,4g,8p,c#,c.,b5,8a#.5,8f.,4g#,f,g.,8d#.,f,g.,8d#.,f,8g,8d#.,f,8g,d#,8c,a#5,8d#.,8d#.,16d#.,16d#.,8d#.";  \n       '+
'const char * LeisureSuit = "LeisureSuit:d=16,o=6,b=56:f.5,f#.5,g.5,g#5,32a#5,f5,g#.5,a#.5,32f5,g#5,32a#5,g#5,8c#.,a#5,32c#,a5,a#.5,c#.,32a5,a#5,32c#,d#,8e,c#.,f.,f.,f.,f.,f,32e,d#,8d,a#.5,e,32f,e,32f,c#,d#.,c#";  \n       '+
'const char * MissionImp = "MissionImp:d=16,o=6,b=95:32d,32d#,32d,32d#,32d,32d#,32d,32d#,32d,32d,32d#,32e,32f,32f#,32g,g,8p,g,8p,a#,p,c7,p,g,8p,g,8p,f,p,f#,p,g,8p,g,8p,a#,p,c7,p,g,8p,g,8p,f,p,f#,p,a#,g,2d,32p,a#,g,2c#,32p,a#,g,2c,a#5,8c,2p,32p,a#5,g5,2f#,32p,a#5,g5,2f,32p,a#5,g5,2e,d#,8d";  \n       '+
'const char * Entertainer = "Entertainer:d=4,o=5,b=140:8d,8d#,8e,c6,8e,c6,8e,2c.6,8c6,8d6,8d#6,8e6,8c6,8d6,e6,8b,d6,2c6,p,8d,8d#,8e,c6,8e,c6,8e,2c.6,8p,8a,8g,8f#,8a,8c6,e6,8d6,8c6,8a,2d6";  \n       '+
'const char * Muppets = "Muppets:d=4,o=5,b=250:c6,c6,a,b,8a,b,g,p,c6,c6,a,8b,8a,8p,g.,p,e,e,g,f,8e,f,8c6,8c,8d,e,8e,8e,8p,8e,g,2p,c6,c6,a,b,8a,b,g,p,c6,c6,a,8b,a,g.,p,e,e,g,f,8e,f,8c6,8c,8d,e,8e,d,8d,c";  \n       '+
'const char * Flinstones = "Flinstones:d=32,o=5,b=40:p,16f6,16a#,16a#6,g6,16f6,16a#.,16f6,d#6,d6,d6,d#6,f6,16a#,16c6,4d6,16f6,16a#.,16a#6,g6,16f6,16a#.,f6,f6,d#6,d6,d6,d#6,f6,16a#,16c6,4a#,16a6,16d.6,16a#6,a6,a6,g6,f#6,a6,8g6,16g6,16c.6,a6,a6,g6,g6,f6,e6,g6,8f6,16f6,16a#.,16a#6,g6,16f6,16a#.,16f6,d#6,d6,d6,d#6,f6,16a#,16c.6,d6,d#6,f6,16a#,16c.6,d6,d#6,f6,16a#6,16c7,8a#.6";  \n       '+
'const char * YMCA = "YMCA:d=4,o=5,b=160:8c#6,8a#,2p,8a#,8g#,8f#,8g#,8a#,c#6,8a#,c#6,8d#6,8a#,2p,8a#,8g#,8f#,8g#,8a#,c#6,8a#,c#6,8d#6,8b,2p,8b,8a#,8g#,8a#,8b,d#6,8f#6,d#6,f.6,d#.6,c#.6,b.,a#,g#";  \n       '+
'const char * TheSimpsons = "TheSimpsons:d=4,o=5,b=160:c.6,e6,f#6,8a6,g.6,e6,c6,8a,8f#,8f#,8f#,2g,8p,8p,8f#,8f#,8f#,8g,a#.,8c6,8c6,8c6,c6";  \n       '+
'const char * Indiana = "Indiana:d=4,o=5,b=250:e,8p,8f,8g,8p,1c6,8p.,d,8p,8e,1f,p.,g,8p,8a,8b,8p,1f6,p,a,8p,8b,2c6,2d6,2e6,e,8p,8f,8g,8p,1c6,p,d6,8p,8e6,1f.6,g,8p,8g,e.6,8p,d6,8p,8g,e.6,8p,d6,8p,8g,f.6,8p,e6,8p,8d6,2c6";  \n       '+
'const char * TakeOnMe = "TakeOnMe:d=8,o=4,b=160:f#5,f#5,f#5,d5,p,b,p,e5,p,e5,p,e5,g#5,g#5,a5,b5,a5,a5,a5,e5,p,d5,p,f#5,p,f#5,p,f#5,e5,e5,f#5,e5,f#5,f#5,f#5,d5,p,b,p,e5,p,e5,p,e5,g#5,g#5,a5,b5,a5,a5,a5,e5,p,d5,p,f#5,p,f#5,p,f#5,e5,e5";  \n       '+
'const char * Looney = "Looney:d=4,o=5,b=140:32p,c6,8f6,8e6,8d6,8c6,a.,8c6,8f6,8e6,8d6,8d#6,e.6,8e6,8e6,8c6,8d6,8c6,8e6,8c6,8d6,8a,8c6,8g,8a#,8a,8f";  \n       '+
'const char * thCenFox = "thCenFox:d=16,o=5,b=140:b,8p,b,b,2b,p,c6,32p,b,32p,c6,32p,b,32p,c6,32p,b,8p,b,b,b,32p,b,32p,b,32p,b,32p,b,32p,b,32p,b,32p,g#,32p,a,32p,b,8p,b,b,2b,4p,8e,8g#,8b,1c#6,8f#,8a,8c#6,1e6,8a,8c#6,8e6,1e6,8b,8g#,8a,2b";  \n       '+
'const char * Bond = "Bond:d=16,o=5,b=80:p,c#6,32d#6,32d#6,d#6,8d#6,c#6,c#6,c#6,c#6,32e6,32e6,e6,8e6,d#6,d#6,d#6,c#6,32d#6,32d#6,d#6,8d#6,c#6,c#6,c#6,c#6,32e6,32e6,e6,8e6,d#6,d6,c#6,c#7,4c.7,g#6,f#6,4g#.6";  \n       '+
'const char * GoodBad = "GoodBad:d=4,o=5,b=56:32p,32a#,32d#6,32a#,32d#6,8a#.,16f#.,16g#.,d#,32a#,32d#6,32a#,32d#6,8a#.,16f#.,16g#.,c#6,32a#,32d#6,32a#,32d#6,8a#.,16f#.,32f.,32d#.,c#,32a#,32d#6,32a#,32d#6,8a#.,16g#.,d#";  \n       '+
'const char * PinkPanther = "PinkPanther:d=16,o=5,b=160:8d#,8e,2p,8f#,8g,2p,8d#,8e,p,8f#,8g,p,8c6,8b,p,8d#,8e,p,8b,2a#,2p,a,g,e,d,2e";  \n       '+
'const char * ATeam = "ATeam:d=8,o=5,b=125:4d#6,a#,2d#6,16p,g#,4a#,4d#.,p,16g,16a#,d#6,a#,f6,2d#6,16p,c#.6,16c6,16a#,g#.,2a#";  \n       '+
'const char * Jeopardy = "Jeopardy:d=4,o=6,b=125:c,f,c,f5,c,f,2c,c,f,c,f,a.,8g,8f,8e,8d,8c#,c,f,c,f5,c,f,2c,f.,8d,c,a#5,a5,g5,f5,p,d#,g#,d#,g#5,d#,g#,2d#,d#,g#,d#,g#,c.7,8a#,8g#,8g,8f,8e,d#,g#,d#,g#5,d#,g#,2d#,g#.,8f,d#,c#,c,p,a#5,p,g#.5,d#,g#";  \n       '+
'const char * Gadget = "Gadget:d=16,o=5,b=50:32d#,32f,32f#,32g#,a#,f#,a,f,g#,f#,32d#,32f,32f#,32g#,a#,d#6,4d6,32d#,32f,32f#,32g#,a#,f#,a,f,g#,f#,8d#";  \n       '+
'const char * Smurfs = "Smurfs:d=32,o=5,b=200:4c#6,16p,4f#6,p,16c#6,p,8d#6,p,8b,p,4g#,16p,4c#6,p,16a#,p,8f#,p,8a#,p,4g#,4p,g#,p,a#,p,b,p,c6,p,4c#6,16p,4f#6,p,16c#6,p,8d#6,p,8b,p,4g#,16p,4c#6,p,16a#,p,8b,p,8f,p,4f#";  \n       '+
'const char * Toccata = "Toccata:d=4,o=5,b=160:16a4,16g4,1a4,16g4,16f4,16d4,16e4,2c#4,16p,d.4,2p,16a4,16g4,1a4,8e.4,8f.4,8c#.4,2d4";  \n       '+
'const char * Short = "Short:d=4,o=3,b=240,s=4:c4,8g,8g,a,g.,b,c4";  \n       '+
'const char * JingleBell = "JingleBell:d=8,o=5,b=112:a,a,4a,a,a,4a,a,c6,f.,16g,2a,a#,a#,a#.,16a#,a#,a,a.,16a,a,g,g,a,4g,4c6,16p,a,a,4a,a,a,4a,a,c6,f.,16g,2a,a#,a#,a#.,16a#,a#,a,a.,16a,c6,c6,a#,g,2f";  \n       '+
'const char * Rudolph = "Rudolph:d=16,o=6,b=100:32p,g#5,8a#5,g#5,8f5,8c#,8a#5,4g#.5,g#5,a#5,g#5,a#5,8g#5,8c#,2c,f#5,8g#5,f#5,8d#5,8c,8a#5,4g#.5,g#5,a#5,g#5,a#5,8g#5,8a#5,2f5,g#5,8a#5,a#5,8f5,8c#,8a#5,4g#.5,g#5,a#5,g#5,a#5,8g#5,8c#,2c,f#5,8g#5,f#5,8d#5,8c,8a#5,4g#.5,g#5,a#5,g#5,a#5,8g#5,8d#,2c#";  \n       '+
'const char * WeWishYou = "WeWishYou:d=4,o=5,b=200:d,g,8g,8a,8g,8f#,e,e,e,a,8a,8b,8a,8g,f#,d,d,b,8b,8c6,8b,8a,g,e,d,e,a,f#,2g,d,g,8g,8a,8g,8f#,e,e,e,a,8a,8b,8a,8g,f#,d,d,b,8b,8c6,8b,8a,g,e,d,e,a,f#,1g,d,g,g,g,2f#,f#,g,f#,e,2d,a,b,8a,8a,8g,8g,d6,d,d,e,a,f#,2g";  \n       '+
'const char * WinterWonderland = "WinterWonderland:d=16,o=5,b=112:8a#.,a#,2a#.,8a#.,a#,4g,2a#,8a#.,a#,2a#.,8a#.,a#,4g#,2a#,8p,a#,8d.6,d6,8d.6,4c.6,8p,c6,8a#.,a#,8a#.,4g#.,8p,g#,8g.,g,8g.,g,8f.,f,8f.,f,2d#,4p,8a#.,a#,2a#.,8a#.,a#,4g,2a#,8a#.,a#,2a#.,8a#.,a#,4g#,2a#,8p,a#,8d.6,d6,8d.6,4c.6,8p,c6,8a#.,a#,8a#.,4g#.,8p,g#,8g.,g,8g.,g,8f.,f,8f.,f,2d#,4p,8d.,d,8b.,b,8e.,e,8c.6,c6,4b,2g,4p,8d.,d,8b.,b,8e.,e,8c.6,c6,2b.";  \n       '+
'const char * OhDennenboom = "OhDennenboom:d=4,o=6,b=100:8c5,8f.5,16f5,f.5,8g5,8a.5,16a5,a5,8p,8a5,8g5,8a5,a_5,e5,g5,f.5,8c5,8f.5,16f5,f.5,8g5,8a.5,16a5,a5,8p,8a5,8g5,8a5,a_5,e5,g5,f.5,8c,8c,8a5,d.,8c,8c,8a_5,a_.5,8a_5,8a_5,8g5,c.,8a_5,8a_5,8a5,a.5,8c5,8f.5,16f5,f.5,8g5,8a.5,16a5,a5,8p,8a5,8g5,8a5,a_5,e5,g5,2f5";  \n       '+
'const char * LetItSnow = "LetItSnow:d=4,o=5,b=125:8c,8c,8c6,8c6,a#,a,g,f,2c,8c,16c,g.,8f,g.,8f,e,2c,d,8d6,8d6,c6,a#,a,2g.,8e.6,16d6,c6,8c.6,16a#,a,8a#.,16a,2f.,c,8c6,8c6,a#,a,g,f,2c,8c.,16c,g.,8f,g.,8f,e,2c,d,8d6,8d6,c6,a#,a,2g.,8e.6,16d6,c6,8c.6,16a#,a,8a.,16g,2f.";  \n       '+
'const char * Frosty = "Frosty:d=4,o=5,b=125:2g,e.,8f,g,2c6,8h,8c6,d6,c6,h,a,2g.,8h,8c6,d6,c6,h,8a,8a,g,c6,e,8g,8a,g,f,e,f,1g";  \n       '+
'const char * SilentNight = "SilentNight:d=4,o=5,b=112:g.,8a,g,2e.,g.,8a,g,2e.,2d6,d6,2b.,2c6,c6,2g.,2a,a,c6.,8b,a,g.,8a,g,2e.,2a,a,c6.,8b,a,g.,8a,g,2e.,2d6,d6,f6.,8d6,b,2c6.,2e6.,c6,g,e,g.,8f,d,2c.";  \n       '+
'const char * LastChristmas = "LastChristmas:d=4,o=6,b=112:g,16f5,16p,8g,16f5,16p,8f,16f5,16p,8c,8g,8g,8a,f,16f5,16p,16f5,16p,8c,8g,8g,8a,16d5,16p,f,16d5,16p,8f,8e,8f,8e,d,16d5,16p,16d5,16p,16d5,16p,a,16g5,16p,8a,16g5,16p,g,8d,8a,8a,8a_,g,16g5,16p,16g5,16p,8f,8e,8f,16c5,16p,8e,16c5,16p,8f,16c5,16p,8e,16c5,16p,c,16c5,16p,16c5,16p,16c5,16p,16c5,16p,16d5,16p,8f5";  \n       '+
'const char * AllIWant = "AllIWant:d=4,o=6,b=160:c5,e5,g5,8b5,c,b.5,8a5,g.5,d,c,8c,b5,c,b5,8a5,2g5,a5,c,8d,e,d,c,a.5,f5,8g#5,c.,8d,d#,d,a#5,g#.5,c,d,b5,8c,a5,b5,2g#5,c,d,b5,8c,a5,b5,2g#5,g5,a5,8c,g,f,8g,2f,e,d,c,a5,g#5,2d,e,8d.,2c.";  \n       '+
'const char * AmazingGrace = "AmazingGrace:d=8,o=5,b=80:c,f,2f,a,g,f,2a,a,g,2f,4d,2c,c,f,2f,a,g,f,2a,g,a,2c.6";  \n       '+
'byte songIndex = 0;  \n   ';

Blockly.Arduino.setups_["setups_NonBlockingRtttl"]=' pinMode(BUZZER_PIN, OUTPUT); \n';

var code = 'if ( !rtttl::isPlaying() ) { rtttl::begin(BUZZER_PIN, '+melody+');  unsigned long start = millis();  while( millis() - start < 20000 )  { rtttl::play(); }  rtttl::stop();  } \n';
 

var code;
return code;
};
Blockly.Arduino['stepservo_continuos_move_ru32'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN'); 
  var servomotor_dir = this.getFieldValue('PIN_GR');
  var SpeedServo = Blockly.Arduino.valueToCode(this, 'SpeedServo', Blockly.Arduino.ORDER_ATOMIC);  
  
if (SpeedServo>=180)
    SpeedServo=180;

 

Blockly.Arduino.variables_['variables_myServo'] = '#include <ESP32_Servo.h>  \n  int minUs = 500; \n int maxUs = 2400;  \n  ';
if(dropdown_pin == 1){var servoPin = '25';}
if(dropdown_pin == 2){var servoPin = '32';}
if(dropdown_pin == 3){var servoPin = '14';}
if(dropdown_pin == 4){var servoPin = '12';}
if(dropdown_pin == 5){var servoPin = '18';}
if(dropdown_pin == 6){var servoPin = '19';}
if(dropdown_pin == 7){var servoPin = '16';}
if(dropdown_pin == 8){var servoPin = '4';}
Blockly.Arduino.definitions_['define_servo'+dropdown_pin] = 'Servo servo'+dropdown_pin+'; \n int servo'+dropdown_pin+'Pin = '+servoPin+';  \n  int p'+dropdown_pin+'os = 90;   \n   int s'+dropdown_pin+'er = 0; \n  int p'+dropdown_pin+'os1 = 0;  \n  int d'+dropdown_pin+'el = 16; \n  ';
Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = ' servo'+dropdown_pin+'.attach(servo'+dropdown_pin+'Pin, minUs, maxUs);\n';
Blockly.Arduino.userFunctions_['userFunctions_'+dropdown_pin] = '  void espservo'+dropdown_pin+'(uint16_t s'+dropdown_pin+'er,uint16_t d'+dropdown_pin+'el) {   \n  if(s'+dropdown_pin+'er != p'+dropdown_pin+'os){ \n  if (s'+dropdown_pin+'er > p'+dropdown_pin+'os) { \n  for (p'+dropdown_pin+'os = p'+dropdown_pin+'os1; p'+dropdown_pin+'os <= s'+dropdown_pin+'er; p'+dropdown_pin+'os += 1) {  \n   servo'+dropdown_pin+'.write(p'+dropdown_pin+'os);   \n                  delay(d'+dropdown_pin+'el);     \n                     }  \n  s'+dropdown_pin+'er = p'+dropdown_pin+'os; \n  p'+dropdown_pin+'os1 = p'+dropdown_pin+'os; \n  } \n if (s'+dropdown_pin+'er < p'+dropdown_pin+'os) { \n   for (p'+dropdown_pin+'os = p'+dropdown_pin+'os1; p'+dropdown_pin+'os >= s'+dropdown_pin+'er; p'+dropdown_pin+'os -= 1) {   \n     servo'+dropdown_pin+'.write(p'+dropdown_pin+'os);    \n               delay(d'+dropdown_pin+'el);   \n                        } \n   s'+dropdown_pin+'er = p'+dropdown_pin+'os; \n   p'+dropdown_pin+'os1 = p'+dropdown_pin+'os; \n  } \n   } \n   }  \n';	
	
	
	
var code = 'espservo'+dropdown_pin+'('+SpeedServo+','+servomotor_dir+'); \n';
 
  return code;
};

Blockly.Arduino['stepservo_continuos_move_ru32ww'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN'); 
  var servomotor_dir = this.getFieldValue('PIN_GR');
  var SpeedServo = Blockly.Arduino.valueToCode(this, 'SpeedServo', Blockly.Arduino.ORDER_ATOMIC);  
  
if (SpeedServo>=180)
    SpeedServo=180;

 

Blockly.Arduino.variables_['variables_myServo'] = '#include <ESP32_Servo.h>  \n  int minUs = 500; \n int maxUs = 2400;  \n  ';
if(dropdown_pin == 1){var servoPin = '25';}
if(dropdown_pin == 2){var servoPin = '32';}
if(dropdown_pin == 3){var servoPin = '14';}
if(dropdown_pin == 4){var servoPin = '12';}
if(dropdown_pin == 5){var servoPin = '18';}
if(dropdown_pin == 6){var servoPin = '19';}
if(dropdown_pin == 7){var servoPin = '16';}
if(dropdown_pin == 8){var servoPin = '4';}
Blockly.Arduino.definitions_['define_servo'+dropdown_pin] = 'Servo servo'+dropdown_pin+'; \n int servo'+dropdown_pin+'Pin = '+servoPin+';  \n  int p'+dropdown_pin+'os = 90;   \n   int s'+dropdown_pin+'er = 0; \n  int p'+dropdown_pin+'os1 = 0;  \n  int d'+dropdown_pin+'el = 16; \n  ';
Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = ' servo'+dropdown_pin+'.attach(servo'+dropdown_pin+'Pin, minUs, maxUs);\n';
Blockly.Arduino.userFunctions_['userFunctions_'+dropdown_pin] = '  void espservo'+dropdown_pin+'(uint16_t s'+dropdown_pin+'er,uint16_t d'+dropdown_pin+'el) {   \n  if(s'+dropdown_pin+'er != p'+dropdown_pin+'os){ \n  if (s'+dropdown_pin+'er > p'+dropdown_pin+'os) { \n  for (p'+dropdown_pin+'os = p'+dropdown_pin+'os1; p'+dropdown_pin+'os <= s'+dropdown_pin+'er; p'+dropdown_pin+'os += 1) {  \n   servo'+dropdown_pin+'.write(p'+dropdown_pin+'os);   \n                  delay(d'+dropdown_pin+'el);     \n                     }  \n  s'+dropdown_pin+'er = p'+dropdown_pin+'os; \n  p'+dropdown_pin+'os1 = p'+dropdown_pin+'os; \n  } \n if (s'+dropdown_pin+'er < p'+dropdown_pin+'os) { \n   for (p'+dropdown_pin+'os = p'+dropdown_pin+'os1; p'+dropdown_pin+'os >= s'+dropdown_pin+'er; p'+dropdown_pin+'os -= 1) {   \n     servo'+dropdown_pin+'.write(p'+dropdown_pin+'os);    \n               delay(d'+dropdown_pin+'el);   \n                        } \n   s'+dropdown_pin+'er = p'+dropdown_pin+'os; \n   p'+dropdown_pin+'os1 = p'+dropdown_pin+'os; \n  } \n   } \n   }  \n';	
	
	
	
var code = 'espservo'+dropdown_pin+'('+SpeedServo+','+servomotor_dir+'); \n';
 
  return code;
};

Blockly.Arduino['stepservo_continuos_move_ru32n'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN'); 
  var SpeedServo = Blockly.Arduino.valueToCode(this, 'SpeedServo', Blockly.Arduino.ORDER_ATOMIC);  
  
if (SpeedServo>=180)
    SpeedServo=180;

 

Blockly.Arduino.variables_['variables_myServo'] = '#include <ESP32_Servo.h>  \n  int minUs = 500; \n int maxUs = 2400;  \n  ';
if(dropdown_pin == 1){var servoPin = '25';}
if(dropdown_pin == 2){var servoPin = '32';}
if(dropdown_pin == 3){var servoPin = '14';}
if(dropdown_pin == 4){var servoPin = '12';}
if(dropdown_pin == 5){var servoPin = '18';}
if(dropdown_pin == 6){var servoPin = '19';}
if(dropdown_pin == 7){var servoPin = '16';}
if(dropdown_pin == 8){var servoPin = '4';}
Blockly.Arduino.definitions_['define_servo'+dropdown_pin] = 'Servo servo'+dropdown_pin+'; \n int servo'+dropdown_pin+'Pin = '+servoPin+';  \n  int p'+dropdown_pin+'os = 90;   \n   int s'+dropdown_pin+'er = 0; \n  int p'+dropdown_pin+'os1 = 0;  \n  int d'+dropdown_pin+'el = 16; \n  ';
Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = ' servo'+dropdown_pin+'.attach(servo'+dropdown_pin+'Pin, minUs, maxUs);\n';
 	
var code = ' servo'+dropdown_pin+'.write('+SpeedServo+');   \n';
  return code;
};

Blockly.Arduino['stepservo_continuos_move_ru32n2'] = function(block) {
  var dropdown_pin = this.getFieldValue('PIN'); 
  var SpeedServo = Blockly.Arduino.valueToCode(this, 'SpeedServo', Blockly.Arduino.ORDER_ATOMIC);  
  
if (SpeedServo>=180)
    SpeedServo=180;

 

Blockly.Arduino.variables_['variables_myServo'] = '#include <ESP32_Servo.h>  \n  int minUs = 500; \n int maxUs = 2400;  \n  ';
if(dropdown_pin == 1){var servoPin = '25';}
if(dropdown_pin == 2){var servoPin = '32';}
if(dropdown_pin == 3){var servoPin = '14';}
if(dropdown_pin == 4){var servoPin = '12';}
if(dropdown_pin == 5){var servoPin = '18';}
if(dropdown_pin == 6){var servoPin = '19';}
if(dropdown_pin == 7){var servoPin = '16';}
if(dropdown_pin == 8){var servoPin = '4';}
Blockly.Arduino.definitions_['define_servo'+dropdown_pin] = 'Servo servo'+dropdown_pin+'; \n int servo'+dropdown_pin+'Pin = '+servoPin+';  \n  int p'+dropdown_pin+'os = 90;   \n   int s'+dropdown_pin+'er = 0; \n  int p'+dropdown_pin+'os1 = 0;  \n  int d'+dropdown_pin+'el = 16; \n  ';
Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = ' servo'+dropdown_pin+'.attach(servo'+dropdown_pin+'Pin, minUs, maxUs);\n';
 	
var code = ' servo'+dropdown_pin+'.write('+SpeedServo+');   \n';
  return code;
};

Blockly.Arduino["inout_angle_maths22"]=function(block){
    var angle=block.getFieldValue("ANGLE");
    return [angle, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino['ultrasonic_ranger_sensor32w'] = function(block) {
    var PIN_TRIG = 23;  
    var PIN_ECHO = 5;  
    Blockly.Arduino.setups_['setup_output_'+PIN_TRIG] = 'pinMode('+PIN_TRIG+', OUTPUT);';
    Blockly.Arduino.setups_['setup_input_'+PIN_ECHO] = 'pinMode('+PIN_ECHO+', INPUT);';
    Blockly.Arduino.definitions_['var_ultrasonic'+PIN_TRIG] = 'long ultrason_'+PIN_TRIG+ '() {\n'+
        '   long duration, distance;\n'+
        '   digitalWrite('+PIN_TRIG+',LOW);\n'+
        '   delayMicroseconds(2);\n'+
        '   digitalWrite('+PIN_TRIG+', HIGH);\n'+
        '   delayMicroseconds(10);\n'+
        '   digitalWrite('+PIN_TRIG+', LOW);\n'+
        '   duration = pulseIn('+ PIN_ECHO +', HIGH);\n'+
        '   distance = duration/58;\n'+
        '   return distance;\n'+
        '}\n';;
    var code;
    code = 'ultrason_'+PIN_TRIG+'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['dht_sensor11ww'] = function(block) {
    var PinDHT = this.getFieldValue('PIN_DHT');  
	var TypeDHT = this.getFieldValue('OUTPUT_TYPE');
    var Status = this.getFieldValue('OUTPUT_VALUE');
	var code;
	
	Blockly.Arduino.definitions_['include_dht'] = '#include "DHT.h" \n';
	
	if (TypeDHT=='0')
	{
		//Blockly.Arduino.definitions_['define_dht'] = '#define DHTTYPE DHT11   // DHT 11\n';
		Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHT11);\n';
		}
	else if (TypeDHT=='1')
		{
		//Blockly.Arduino.definitions_['define_dht'] = '#define DHTTYPE DHT21   // DHT 21\n';
		Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHT21);\n';
		}
	else
		{
		//Blockly.Arduino.definitions_['define_dht'] = '#define DHTTYPE DHT22   // DHT 22\n';
		Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHT22);\n';
		}
	//Blockly.Arduino.definitions_['begin_dht_'+PinDHT] = 'DHT dht_'+PinDHT+'('+PinDHT+',DHTTYPE);\n';
	Blockly.Arduino.setups_['setup_input_'+PinDHT] = 'dht_'+PinDHT+'.begin();\n';
	
    if(Status=='0')
      var code = 'dht_'+PinDHT+'.readTemperature()';  
    else if (Status=='1')
      var code = 'dht_'+PinDHT+'.readHumidity()';
    else
		var code= 'dht_'+PinDHT+'.computeHeatIndex(dht_'+PinDHT+'.readTemperature(),dht_'+PinDHT+'.readHumidity(),true)';	
  
   
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['ardublock_block11ww']=function(block){
    var idn_text = this.getFieldValue('PIN'); 
	var bb_dropdown = block.getFieldValue('bb_dropdown');
 
	  var bot_statement = Blockly.Arduino.statementToCode(block, 'bot_statement');
	  var bot_statement1 = Blockly.Arduino.statementToCode(block, 'bot_statement1');
	
	Blockly.Arduino.includes_['setups_pin_botton_pro'+idn_text]=' int bt'+idn_text+' = 0; \n  int bn'+idn_text+' = 0; \n  int bc'+idn_text+' = 1; \n  ';
    Blockly.Arduino.setups_['setups_pin_botton_pro'+idn_text]='   pinMode('+idn_text+', INPUT);  \n';

	if(bb_dropdown == 0){
	var code = '  \n   '+
	  '  if (digitalRead('+idn_text+') == 0 & bn'+idn_text+' == 0) { \n   '+
    '   bc'+idn_text+' = bc'+idn_text+' * -1; \n   '+
     '  if (bc'+idn_text+' == 1) { \n   '+
    '  '+bot_statement+'   \n       '+
    '   } \n   '+
    '   if (bc'+idn_text+' == -1) { \n   '+
    '  '+bot_statement1+'   \n       '+
   '    } \n   '+
   '    delay(150); \n   '+
   '    bn'+idn_text+' = 1; \n   '+
   '  } \n   '+
   '  if (digitalRead('+idn_text+') == 1 & bn'+idn_text+' == 1) { \n   '+
   '    bn'+idn_text+' = 0; \n   '+
    ' } \n   '+
   '   	\n	';
	}else{
	var code = '  \n   '+
   '  if (digitalRead('+idn_text+') == 0 & bt'+idn_text+' == 0) { \n       '+
    '  bt'+idn_text+' = 1; \n       '+
   '  '+bot_statement+'   \n       '+
   ' } \n       '+
   ' if (digitalRead('+idn_text+') == 1 & bt'+idn_text+' == 1) { \n       '+
   '   bt'+idn_text+' = 0; \n       '+
   '  '+bot_statement1+'   \n       '+
   ' } \n       '+
    '  \n  ';	
	} 
	return code
};


Blockly.Arduino['text_char32']=function(block){
    var value_block = Blockly.Arduino.valueToCode(block, 'block', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setups_text_char32'] = 'Serial.begin(9600);';
    var code = 'Serial.println('+value_block+'); \n  '; 
    return code
};
 Blockly.Arduino['ardublock_block532']=function(block){
    var delay = block.getFieldValue('delay');
	
    var code = 'delay('+delay+'); \n  '; 
		  
return code
};

Blockly.Arduino['lcdi2c_setup32'] = function(block) {
var text_name = block.getFieldValue('NAME');  
    Blockly.Arduino.includes_['define_lcd'] = '#include <Wire.h>\n#include <LiquidCrystal_I2C.h>   \n';


    var value_columns = block.getFieldValue('COLUMNS');  
    var value_rows = block.getFieldValue('ROWS'); 
   
   Blockly.Arduino.definitions_['define_lcdpins'] = 'LiquidCrystal_I2C lcd('+text_name+','+value_columns+','+value_rows+');\n';
    
   Blockly.Arduino.setups_['setup_lcdi2c']='lcd.init(); \n lcd.backlight(); \n'

  var code = '';
  return code;
};

Blockly.Arduino['lcdi2c_setcursor32'] = function(block) {

	var value_column = block.getFieldValue('column');  
	var value_row = block.getFieldValue('row');  
	var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);

 var code = 'lcd.setCursor('+value_column+', '+value_row+ '); \n lcd.print('+texttoprint+');\n ';
return code;
};

 Blockly.Arduino['lcdi2c_setcursor_draw32'] = function(block) {
   
    var nomer = block.getFieldValue("TEXT");
	var Pix0e0 = this.getFieldValue('Pix0e0'); if(Pix0e0 == 'FALSE'){Pix0e0 = 0;}else{Pix0e0 = 1;}
	var Pix0e1 = this.getFieldValue('Pix0e1'); if(Pix0e1 == 'FALSE'){Pix0e1 = 0;}else{Pix0e1 = 1;}
	var Pix0e2 = this.getFieldValue('Pix0e2'); if(Pix0e2 == 'FALSE'){Pix0e2 = 0;}else{Pix0e2 = 1;}
	var Pix0e3 = this.getFieldValue('Pix0e3'); if(Pix0e3 == 'FALSE'){Pix0e3 = 0;}else{Pix0e3 = 1;}
	var Pix0e4 = this.getFieldValue('Pix0e4'); if(Pix0e4 == 'FALSE'){Pix0e4 = 0;}else{Pix0e4 = 1;}

	var Pix1e0 = this.getFieldValue('Pix1e0'); if(Pix1e0 == 'FALSE'){Pix1e0 = 0;}else{Pix1e0 = 1;}
	var Pix1e1 = this.getFieldValue('Pix1e1'); if(Pix1e1 == 'FALSE'){Pix1e1 = 0;}else{Pix1e1 = 1;}
	var Pix1e2 = this.getFieldValue('Pix1e2'); if(Pix1e2 == 'FALSE'){Pix1e2 = 0;}else{Pix1e2 = 1;}
	var Pix1e3 = this.getFieldValue('Pix1e3'); if(Pix1e3 == 'FALSE'){Pix1e3 = 0;}else{Pix1e3 = 1;}
	var Pix1e4 = this.getFieldValue('Pix1e4'); if(Pix1e4 == 'FALSE'){Pix1e4 = 0;}else{Pix1e4 = 1;}
	
	var Pix2e0 = this.getFieldValue('Pix2e0'); if(Pix2e0 == 'FALSE'){Pix2e0 = 0;}else{Pix2e0 = 1;}
	var Pix2e1 = this.getFieldValue('Pix2e1'); if(Pix2e1 == 'FALSE'){Pix2e1 = 0;}else{Pix2e1 = 1;}
	var Pix2e2 = this.getFieldValue('Pix2e2'); if(Pix2e2 == 'FALSE'){Pix2e2 = 0;}else{Pix2e2 = 1;}
	var Pix2e3 = this.getFieldValue('Pix2e3'); if(Pix2e3 == 'FALSE'){Pix2e3 = 0;}else{Pix2e3 = 1;}
	var Pix2e4 = this.getFieldValue('Pix2e4'); if(Pix2e4 == 'FALSE'){Pix2e4 = 0;}else{Pix2e4 = 1;}
	
	var Pix3e0 = this.getFieldValue('Pix3e0'); if(Pix3e0 == 'FALSE'){Pix3e0 = 0;}else{Pix3e0 = 1;}
	var Pix3e1 = this.getFieldValue('Pix3e1'); if(Pix3e1 == 'FALSE'){Pix3e1 = 0;}else{Pix3e1 = 1;}
	var Pix3e2 = this.getFieldValue('Pix3e2'); if(Pix3e2 == 'FALSE'){Pix3e2 = 0;}else{Pix3e2 = 1;}
	var Pix3e3 = this.getFieldValue('Pix3e3'); if(Pix3e3 == 'FALSE'){Pix3e3 = 0;}else{Pix3e3 = 1;}
	var Pix3e4 = this.getFieldValue('Pix3e4'); if(Pix3e4 == 'FALSE'){Pix3e4 = 0;}else{Pix3e4 = 1;}

	var Pix4e0 = this.getFieldValue('Pix4e0'); if(Pix4e0 == 'FALSE'){Pix4e0 = 0;}else{Pix4e0 = 1;}
	var Pix4e1 = this.getFieldValue('Pix4e1'); if(Pix4e1 == 'FALSE'){Pix4e1 = 0;}else{Pix4e1 = 1;}
	var Pix4e2 = this.getFieldValue('Pix4e2'); if(Pix4e2 == 'FALSE'){Pix4e2 = 0;}else{Pix4e2 = 1;}
	var Pix4e3 = this.getFieldValue('Pix4e3'); if(Pix4e3 == 'FALSE'){Pix4e3 = 0;}else{Pix4e3 = 1;}
	var Pix4e4 = this.getFieldValue('Pix4e4'); if(Pix4e4 == 'FALSE'){Pix4e4 = 0;}else{Pix4e4 = 1;}

	var Pix5e0 = this.getFieldValue('Pix5e0'); if(Pix5e0 == 'FALSE'){Pix5e0 = 0;}else{Pix5e0 = 1;}
	var Pix5e1 = this.getFieldValue('Pix5e1'); if(Pix5e1 == 'FALSE'){Pix5e1 = 0;}else{Pix5e1 = 1;}
	var Pix5e2 = this.getFieldValue('Pix5e2'); if(Pix5e2 == 'FALSE'){Pix5e2 = 0;}else{Pix5e2 = 1;}
	var Pix5e3 = this.getFieldValue('Pix5e3'); if(Pix5e3 == 'FALSE'){Pix5e3 = 0;}else{Pix5e3 = 1;}
	var Pix5e4 = this.getFieldValue('Pix5e4'); if(Pix5e4 == 'FALSE'){Pix5e4 = 0;}else{Pix5e4 = 1;}

	var Pix6e0 = this.getFieldValue('Pix6e0'); if(Pix6e0 == 'FALSE'){Pix6e0 = 0;}else{Pix6e0 = 1;}
	var Pix6e1 = this.getFieldValue('Pix6e1'); if(Pix6e1 == 'FALSE'){Pix6e1 = 0;}else{Pix6e1 = 1;}
	var Pix6e2 = this.getFieldValue('Pix6e2'); if(Pix6e2 == 'FALSE'){Pix6e2 = 0;}else{Pix6e2 = 1;}
	var Pix6e3 = this.getFieldValue('Pix6e3'); if(Pix6e3 == 'FALSE'){Pix6e3 = 0;}else{Pix6e3 = 1;}
	var Pix6e4 = this.getFieldValue('Pix6e4'); if(Pix6e4 == 'FALSE'){Pix6e4 = 0;}else{Pix6e4 = 1;}

	var Pix7e0 = this.getFieldValue('Pix7e0'); if(Pix7e0 == 'FALSE'){Pix7e0 = 0;}else{Pix7e0 = 1;}
	var Pix7e1 = this.getFieldValue('Pix7e1'); if(Pix7e1 == 'FALSE'){Pix7e1 = 0;}else{Pix7e1 = 1;}
	var Pix7e2 = this.getFieldValue('Pix7e2'); if(Pix7e2 == 'FALSE'){Pix7e2 = 0;}else{Pix7e2 = 1;}
	var Pix7e3 = this.getFieldValue('Pix7e3'); if(Pix7e3 == 'FALSE'){Pix7e3 = 0;}else{Pix7e3 = 1;}
	var Pix7e4 = this.getFieldValue('Pix7e4'); if(Pix7e4 == 'FALSE'){Pix7e4 = 0;}else{Pix7e4 = 1;}


	
	
 Blockly.Arduino.definitions_['minilcdi2c_setcursor_draw' + nomer] = 'byte customChar'+nomer+'[] = { \n '+
' B'+Pix0e0+''+Pix0e1+''+Pix0e2+''+Pix0e3+''+Pix0e4+', \n'+
'  B'+Pix1e0+''+Pix1e1+''+Pix1e2+''+Pix1e3+''+Pix1e4+', \n'+
'  B'+Pix2e0+''+Pix2e1+''+Pix2e2+''+Pix2e3+''+Pix2e4+', \n'+
'  B'+Pix3e0+''+Pix3e1+''+Pix3e2+''+Pix3e3+''+Pix3e4+', \n'+
'  B'+Pix4e0+''+Pix4e1+''+Pix4e2+''+Pix4e3+''+Pix4e4+', \n'+
'  B'+Pix5e0+''+Pix5e1+''+Pix5e2+''+Pix5e3+''+Pix5e4+', \n'+
'  B'+Pix6e0+''+Pix6e1+''+Pix6e2+''+Pix6e3+''+Pix6e4+', \n'+
'  B'+Pix7e0+''+Pix7e1+''+Pix7e2+''+Pix7e3+''+Pix7e4+' \n'+
'}; \n';
 
    var nomer = block.getFieldValue("TEXT");
	var rowx =  block.getFieldValue("print_x");
	var rowy =  block.getFieldValue("print_y");
    var code = 'lcd.createChar('+nomer+', customChar'+nomer+'); \n  lcd.setCursor('+rowx+', '+rowy+'); \n  lcd.write('+nomer+'); \n ';
 
  return code;
};

Blockly.Arduino["inout_analog_write32w"]=function(block){

	var dropdown_pin1 = block.getFieldValue("PIN");
	var dropdown_pin2 = '5000';
	var dropdown_pin3 = '8';
 
if(dropdown_pin1 == 1){var dropdown_pin = '25';}
if(dropdown_pin1 == 2){var dropdown_pin = '32';}
if(dropdown_pin1 == 3){var dropdown_pin = '14';}
if(dropdown_pin1 == 4){var dropdown_pin = '12';}
if(dropdown_pin1 == 5){var dropdown_pin = '18';}
if(dropdown_pin1 == 6){var dropdown_pin = '19';}
if(dropdown_pin1 == 7){var dropdown_pin = '16';}
if(dropdown_pin1 == 8){var dropdown_pin = '4';}

    var value_num=Blockly.Arduino.valueToCode(block, "STAT", Blockly.Arduino.ORDER_ATOMIC);
     Blockly.Arduino.setups_["setup_output" + dropdown_pin]="  ledcSetup(" + dropdown_pin1 + ", " + dropdown_pin2 + ", " + dropdown_pin3 + "); \n  ledcAttachPin(" + dropdown_pin + ", " + dropdown_pin1 + "); \n ";
    var code="ledcWrite(" + dropdown_pin1 + ", " + value_num + ");\n";
    return code
};

Blockly.Arduino["inout_analog_read_esp32"]=function(block){
    var dropdown_pin=block.getFieldValue("PIN");
    var code="analogRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};

 Blockly.Arduino["math_random_int_map32"]=function(block){
    var value_block = Blockly.Arduino.valueToCode(block, 'block', Blockly.Arduino.ORDER_ATOMIC);
    var valuepi1 = block.getFieldValue('pi1');
    var valuepi2 = block.getFieldValue('pi2');
    var valuepi3 = block.getFieldValue('pi3');
    var valuepi4 = block.getFieldValue('pi4');	
	
	var code = "map(" + value_block + ", " + valuepi1 + ", " + valuepi2 + ", " + valuepi3 + ", " + valuepi4 + ")";   
    return [code, Blockly.Arduino.ORDER_FUNCTION_CALL]
};

Blockly.Arduino["inout_analog_write32wLed"]=function(block){

	var dropdown_pin1 = block.getFieldValue("PIN");
	var dropdown_pin2 = '5000';
	var dropdown_pin3 = '8';
 
if(dropdown_pin1 == 1){var dropdown_pin = '25';}
if(dropdown_pin1 == 2){var dropdown_pin = '32';}
if(dropdown_pin1 == 3){var dropdown_pin = '14';}
if(dropdown_pin1 == 4){var dropdown_pin = '12';}
if(dropdown_pin1 == 5){var dropdown_pin = '18';}
if(dropdown_pin1 == 6){var dropdown_pin = '19';}
if(dropdown_pin1 == 7){var dropdown_pin = '16';}
if(dropdown_pin1 == 8){var dropdown_pin = '4';}
if(dropdown_pin1 == 9){var dropdown_pin = '13';}
if(dropdown_pin1 == 10){var dropdown_pin = '15';}

    var value_num=Blockly.Arduino.valueToCode(block, "STAT", Blockly.Arduino.ORDER_ATOMIC);
     Blockly.Arduino.setups_["setup_output" + dropdown_pin]="  ledcSetup(" + dropdown_pin1 + ", " + dropdown_pin2 + ", " + dropdown_pin3 + "); \n  ledcAttachPin(" + dropdown_pin + ", " + dropdown_pin1 + "); \n ";
    var code="ledcWrite(" + dropdown_pin1 + ", " + value_num + ");\n";
    return code
};