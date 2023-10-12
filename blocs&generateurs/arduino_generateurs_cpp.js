


Blockly.Arduino['piannobox']=function(block){
    var valuebox = Blockly.Arduino.statementToCode(block, 'box');
    var valuepin = block.getFieldValue('pin');
    Blockly.Arduino.includes_["includes_piannobox"] = '#include "CapacitiveSensor.h" \n #include <Arduino.h> \n #include <Wire.h> \n';
    Blockly.Arduino.variables_["variables_piannobox"] = 'CapacitiveSensor   cs00 = CapacitiveSensor(2,3); \n CapacitiveSensor   cs01 = CapacitiveSensor(2,4); \n CapacitiveSensor   cs02 = CapacitiveSensor(2,5); \n CapacitiveSensor   cs03 = CapacitiveSensor(2,6); \n CapacitiveSensor   cs04 = CapacitiveSensor(2,7); \n CapacitiveSensor   cs05 = CapacitiveSensor(2,8); \n CapacitiveSensor   cs06 = CapacitiveSensor(2,9); \n int total0 = 0; \n int total1 = 0; \n int total2 = 0; \n int total3 = 0; \n int total4 = 0; \n int total5 = 0; \n int total6 = 0; \n  ';
    Blockly.Arduino.setups_["setups_piannobox"]='    cs00.set_CS_Timeout_Millis(30); \n    cs01.set_CS_Timeout_Millis(30); \n     cs02.set_CS_Timeout_Millis(30); \n    cs03.set_CS_Timeout_Millis(30); \n    cs04.set_CS_Timeout_Millis(30); \n    cs05.set_CS_Timeout_Millis(30); \n   cs06.set_CS_Timeout_Millis(30); \n ';
		if (valuepin == '1'){
	var code = ' total0 =  cs00.capacitiveSensor(30); \n if (total0 == -2) { \n  ' + valuebox + ' \n  } \n ';
    }
	    if (valuepin == '2'){
	var code = ' total1 =  cs01.capacitiveSensor(30); \n if (total1 == -2) { \n  ' + valuebox + ' \n  } \n ';
    }
		if (valuepin == '3'){
	var code = ' total2 =  cs02.capacitiveSensor(30); \n if (total2 == -2) { \n  ' + valuebox + ' \n  } \n ';
    }
		if (valuepin == '4'){
	var code = ' total3 =  cs03.capacitiveSensor(30); \n if (total3 == -2) { \n  ' + valuebox + ' \n  } \n ';
    }
		if (valuepin == '5'){
	var code = ' total4 =  cs04.capacitiveSensor(30); \n if (total4 == -2) { \n  ' + valuebox + ' \n  } \n ';
    }
		if (valuepin == '6'){
	var code = ' total5 =  cs05.capacitiveSensor(30); \n if (total5 == -2) { \n  ' + valuebox + ' \n  } \n ';
    }
		if (valuepin == '7'){
	var code = ' total6 =  cs06.capacitiveSensor(30); \n if (total6 == -2) { \n  ' + valuebox + ' \n  } \n ';
    }
 
	return code
};



Blockly.Arduino["notone22"]=function(block){
    var value_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
     
    return "noTone(" + value_pin + ");\n"
};



/*  communication  */
Blockly.Arduino["serial_init8866"]=function(block){
    var dropdown_speed=block.getFieldValue("SPEED");
	var dropdown_pin=block.getFieldValue("pin");
	window.localStorage.baudrate=dropdown_speed;
	switch (dropdown_pin) {
        case "0":
            Blockly.Arduino.setups_["serial_begin"]="Serial.begin(" + dropdown_speed + ");";
            break;
        case "19":
            Blockly.Arduino.setups_["serial_begin"]="Serial1.begin(" + dropdown_speed + ");";
            break;
        case "17":
            Blockly.Arduino.setups_["serial_begin"]="Serial2.begin(" + dropdown_speed + ");";
            break
        case "15":
            Blockly.Arduino.setups_["serial_begin"]="Serial3.begin(" + dropdown_speed + ");";
            break
	}
  return ""
};
Blockly.Arduino["serial_read"]=function(block){
    var code="Serial.read()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["serial_line"]=function(block){
    var code='"\\n"';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["serial_tab"]=function(block){
    var code='" ; "';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["serial_available"]=function(block){
    var code="Serial.available()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["serial_write"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
    return "Serial.print(" + content + ");\n"
};
Blockly.Arduino["serial_write_ln"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
    return "Serial.println(" + content + ");\n"
};
Blockly.Arduino["serial_flush"]=function(block){
    return "Serial.flush();\n"
};
Blockly.Arduino["soft_init"]=function(block){
    var dropdown_pin1=Blockly.Arduino.valueToCode(block,"PIN1", Blockly.Arduino.ORDER_NONE);
    var dropdown_pin2=Blockly.Arduino.valueToCode(block,"PIN2", Blockly.Arduino.ORDER_NONE);
    var dropdown_speed=block.getFieldValue("SPEED");
    Blockly.Arduino.includes_["define_ss"]="#include <SoftwareSerial.h>";
	Blockly.Arduino.definitions_["define_ss"]="SoftwareSerial mySerial(" + dropdown_pin1 + "," + dropdown_pin2 + ");";
    Blockly.Arduino.setups_["setup_sserial"]="mySerial.begin(" + dropdown_speed + ");";
    return ""
};
Blockly.Arduino["soft_init_ttl"]=function(block){
    var dropdown_pin1=block.getFieldValue("PIN1");
    var dropdown_pin2=block.getFieldValue("PIN2");
    var dropdown_speed=block.getFieldValue("SPEED");
    Blockly.Arduino.includes_["define_ss"]="#include <SoftwareSerial.h>";
	Blockly.Arduino.definitions_["define_ss"]="SoftwareSerial mySerial(" + dropdown_pin1 + "," + dropdown_pin2 + ");";
    Blockly.Arduino.setups_["setup_sserial"]="mySerial.begin(" + dropdown_speed + ");";
    return ""
};
Blockly.Arduino["bluetooth_soft_init"]=function(block){
    var dropdown_pin1=Blockly.Arduino.valueToCode(block,"PIN1", Blockly.Arduino.ORDER_NONE);
    var dropdown_pin2=Blockly.Arduino.valueToCode(block,"PIN2", Blockly.Arduino.ORDER_NONE);
    var dropdown_speed=block.getFieldValue("SPEED");
    Blockly.Arduino.includes_["define_ss"]="#include <SoftwareSerial.h>";
	Blockly.Arduino.definitions_["define_BT"]="SoftwareSerial mySerialBT(" + dropdown_pin2 + "," + dropdown_pin1 + ");";
    Blockly.Arduino.setups_["setup_sserial_BT"]="mySerialBT.begin(" + dropdown_speed + ");";
    return ""
};
Blockly.Arduino["soft_read"]=function(block){
    var code="mySerial.read()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["soft_read_ttl_dis"]=function(block){
    var code="mySerial.read()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["bluetooth_soft_read"]=function(block){
    var code="mySerialBT.read()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino["bluetooth_soft_serial_read"]=function(block){
var color = this.getFieldValue('color'); 
    var code=""+color+".readString()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino["soft_write"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
    return "mySerial.write(" + content + ");\n"
};
Blockly.Arduino["soft_write_ttl_uart"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
	var hexcode1 = block.getFieldValue("TEXT1");
	var hexcode2 = block.getFieldValue("TEXT2");
	var hexcode3 = block.getFieldValue("TEXT3");
	var hexcode4 = block.getFieldValue("TEXT4");
	Blockly.Arduino.includes_["soft_write_ttl_uart"+hexcode1+hexcode2+hexcode3+hexcode4]=" 	char x"+hexcode1+hexcode2+hexcode3+hexcode4+"m [7] ={0x5A,0xA5,0x05,0x82,0x"+hexcode1+""+hexcode2+",0x"+hexcode3+""+hexcode4+",0x00}; \n int x"+hexcode1+hexcode2+hexcode3+hexcode4+"w = 0; \n	";
    return " 	x"+hexcode1+hexcode2+hexcode3+hexcode4+"w = " + content + "; \n    mySerial.write(x"+hexcode1+hexcode2+hexcode3+hexcode4+"m , 7); \n    mySerial.write(x"+hexcode1+hexcode2+hexcode3+hexcode4+"w); \n  "
};
Blockly.Arduino["bluetooth_soft_write"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
    return "mySerialBT.println(" + content + ");\n"
};
Blockly.Arduino["bluetooth_soft_write_esp"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.includes_['define_ssBT'] = '#include "BluetoothSerial.h"\nBluetoothSerial mySerialBT;\n';
  Blockly.Arduino.setups_['setup_sserialBT'] = 'mySerialBT.begin('+ content +');\n';
  var code = '';
  return code;
};



Blockly.Arduino["soft_available"]=function(block){
    var code="mySerial.available()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["bluetooth_soft_available"]=function(block){
    var code="mySerialBT.available()";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
/*  wifi  */
Blockly.Arduino['esp8266_init']=function(block){
	var mode=block.getFieldValue("clientserveur");
	var adressage=block.getFieldValue("staticdynamic");
	var reseau=block.getFieldValue("SSID");
	var cle=block.getFieldValue("KEY");
	Blockly.Arduino.includes_["esp8266"] = "#include <ESP8266WiFi.h>";
	if (adressage=="static"){
		var ipabc=block.getFieldValue("IPa")+","+block.getFieldValue("IPb")+","+block.getFieldValue("IPc");
		var ipd=block.getFieldValue("IPd");
		var passerelle=block.getFieldValue("GATEWAY");
		var masque=block.getFieldValue("MASKa")+","+block.getFieldValue("MASKb")+","+block.getFieldValue("MASKc")+","+block.getFieldValue("MASKd");
		Blockly.Arduino.definitions_["esp8266"] = 'IPAddress ip('+ipabc+','+ipd+');\nIPAddress gateway('+ipabc+','+passerelle+');\nIPAddress subnet('+masque+');\n';
		Blockly.Arduino.setups_["esp8266"] = 'WiFi.disconnect();\n  delay(2500);\n  WiFi.config(ip, gateway, subnet);\n  WiFi.begin("'+reseau+'","'+cle+'");\n  while (WiFi.status() != WL_CONNECTED) { delay(250); };\n';
	} else {
		Blockly.Arduino.definitions_["esp8266"] = "";
		Blockly.Arduino.setups_["esp8266"] = 'WiFi.disconnect();\n  delay(2500);\n  WiFi.begin("'+reseau+'","'+cle+'");\n  while (WiFi.status() != WL_CONNECTED) { delay(250); };\n';
	}
	if (mode=="serveur"){
		var port=Blockly.Arduino.valueToCode(block, "V0", Blockly.Arduino.ORDER_ATOMIC);
		Blockly.Arduino.definitions_["esp8266"] += 'WiFiServer server(' + port + ');\n';
		Blockly.Arduino.setups_["esp8266"] += '  server.begin();\n';
	} else {
		Blockly.Arduino.definitions_["esp8266"] += 'WiFiClient client;\n';
	}
	return "" ;
};
Blockly.Arduino['esp8266_send']=function(block){
	var data=Blockly.Arduino.valueToCode(block, 'message', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'client.println("HTTP/1.1 200 OK");\nclient.println("Content-Type: text/html");\nclient.println("");\nclient.println("<!DOCTYPE HTML>");\n';
	code += 'client.println("<html>");\nclient.println(' + data + ');\nclient.println("</html>");\n';
	return code
};
Blockly.Arduino['esp8266_send_html']=function(block){
	var htmlhead=Blockly.Arduino.statementToCode(block, 'HEAD');
	var htmlbody=Blockly.Arduino.statementToCode(block, "BODY");
    var code = 'client.println("HTTP/1.1 200 OK");\nclient.println("Content-Type: text/html; charset=UTF-8");\nclient.println("");\nclient.println("<!DOCTYPE HTML>");\n';
	code += 'client.println("<html>");\nclient.println("<head>");\n' + htmlhead + 'client.println("</head>");\n';
	code += 'client.println("<body>");\n' + htmlbody + 'client.println("</body>");\nclient.println("</html>");\n';
	code += 'delay(1);\nclient.stop();\n' ;
	return code
};
Blockly.Arduino['esp8266_wait_server']=function(block){
	return 'WiFiClient client = server.available();\nif (!client) return;\nwhile (!client.available()) { delay(1); }\nchar request = client.read();\nclient.flush();\n'
};
Blockly.Arduino['esp8266_wait_client']=function(block){
	var host=Blockly.Arduino.valueToCode(block, "host", Blockly.Arduino.ORDER_ATOMIC);
	var port=Blockly.Arduino.valueToCode(block, "port", Blockly.Arduino.ORDER_ATOMIC);
	return 'if (!client.connect(' + host + ',' + port + ')) { delay(1000) ; return }.\nwhile (client.available()){ String reponse = client.read(); };\n'
};
Blockly.Arduino["esp8266_request_indexof"]=function(block){
    var n=0;
    var argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
    var branch=Blockly.Arduino.statementToCode(block, "DO" + n);
	var code='if (request.indexOf(' + argument + ') != -1) {\n' + branch + '}\n';
	for (n=1; n <= block.casebreakCount_; n++) {
        argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
        branch=Blockly.Arduino.statementToCode(block, "DO" + n);
        code += 'if (request.indexOf(' + argument + ') != -1) {\n' + branch + '}\n'
    }
	return code
};
/*  bluetooth  */

Blockly.Arduino["bluetooth_init"]=function(block){
    var dropdown_pin1=Blockly.Arduino.valueToCode(block,"PIN1", Blockly.Arduino.ORDER_NONE);
    var dropdown_pin2=Blockly.Arduino.valueToCode(block,"PIN2", Blockly.Arduino.ORDER_NONE);
    var dropdown_speed=block.getFieldValue("SPEED");
    var n=0;
	Blockly.Arduino.includes_["bluetooth"]="#include <SoftwareSerial.h>";
	Blockly.Arduino.definitions_["bluetooth"]="SoftwareSerial bluetooth("+dropdown_pin1+","+dropdown_pin2+");";
	Blockly.Arduino.setups_["bluetooth"]="bluetooth.begin(" + dropdown_speed + ");";
	return ""
};
Blockly.Arduino["bluetooth_a"]=function(block){
    var value_data_s=Blockly.Arduino.valueToCode(block, "data_s", Blockly.Arduino.ORDER_NONE);
    return "if (bluetooth.available() > 0) {\n  bluetooth.write(" + value_data_s + ");\n}\n"
};
Blockly.Arduino["bluetooth_b"]=function(block){
    var n=0;
    var argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
    var branch=Blockly.Arduino.statementToCode(block, "DO" + n);
    var code="if (bluetooth.available() > 0) {\n  char dataR=bluetooth.read();\n  if (dataR == " + argument + ") {\n  " + branch + "  }\n";
	for (n=1; n <= block.casebreakCount_; n++) {
        argument=Blockly.Arduino.valueToCode(block, "CASE" + n, Blockly.Arduino.ORDER_NONE);
        branch=Blockly.Arduino.statementToCode(block, "DO" + n);
        code += "  if (dataR == " + argument + ") {\n  " + branch + "  }\n"
    }
    code += "}\n"
	return code
};
/*  structure  */
Blockly.Arduino["base_setup_loop"]=function(block){
    var branch=Blockly.Arduino.statementToCode(block, "DO");
    var loop=Blockly.Arduino.statementToCode(block, "LOOP");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    var code=branch;
    var setup_key=Blockly.Arduino.variableDB_.getDistinctName("base_setup", Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.setups_[setup_key]=code;
    return [loop, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino['arduino_setup'] = function(block) {
  var statements_setup = Blockly.Arduino.statementToCode(block, 'MySetup');
  var statements_loop = Blockly.Arduino.statementToCode(block, 'MyLoop');
 
  Blockly.Arduino.setups_['setup'] = statements_setup;
 
  var code = statements_loop;
  return code;
};
Blockly.Arduino["base_loop"]=function(block){
    function statementToCodeNoTab(block, name) {
        var targetBlock=block.getInputTargetBlock(name);
        var code=Blockly.Arduino.blockToCode(targetBlock);
        if (!goog.isString(code)) throw 'Expecting code from statement block "' + targetBlock.type + '".';
        return code
    }
    var loopBranch=statementToCodeNoTab(block, "LOOP");
    return loopBranch
};
Blockly.Arduino["base_define"]=function(block){
    var branch=Blockly.Arduino.statementToCode(block, "DO");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    var code=branch;
    var setup_key=Blockly.Arduino.variableDB_.getDistinctName("base_setup", Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_[setup_key]=code;
    return ""
};
Blockly.Arduino["base_code"]=function(block){
    return block.getFieldValue("TEXT") + "\n"
};




Blockly.Arduino["base_end"]=function(block){
    return "while(true);\n"
};
Blockly.Arduino["base_begin"]=function(block){
    return ""
};
Blockly.Arduino['base_code_entree']=function(block){
	var code=block.getFieldValue("TEXT");
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Arduino['base_code_entree_var']=function(block){
	var code=block.getFieldValue("TEXT");
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Arduino['base_code_entree_var1']=function(block){
	var code=block.getFieldValue("TEXT");
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Arduino['base_code_entree_read']=function(block){
	var code=block.getFieldValue("TEXT");
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
/*  temps  */
Blockly.Arduino["inout_pulsein"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat=block.getFieldValue("STAT");
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT);";
    var code="pulseIn(" + dropdown_pin + "," + dropdown_stat + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["millis"]=function(block){
	var _u=block.getFieldValue("unite");
    switch (_u) {
        case "u":
            var code="micros()";
            break;
        case "m":
            var code="millis()";
            break;
        case "s":
            code="millis()/1000";
            break
	}
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["base_delay"]=function(block){
    var _u=block.getFieldValue("unite");
    var delay_time=Blockly.Arduino.valueToCode(block, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC);
    switch (_u) {
        case "u":
            var code="delayMicroseconds(" + delay_time + ");\n";
            break;
        case "m":
            var code="delay(" + delay_time + ");\n";
            break;
        case "s":
            code="delay(" + delay_time + "*1000);\n";
            break
    };
    return code
};
Blockly.Arduino["tempo_sans_delay"]=function(block){
    var _u=block.getFieldValue("unite");
    var delay_time=Blockly.Arduino.valueToCode(block, "DELAY_TIME", Blockly.Arduino.ORDER_ATOMIC);
	var faire=Blockly.Arduino.statementToCode(block, "branche");
	var temps="temps"+delay_time;
	Blockly.Arduino.definitions_["temporisation"+delay_time]="long "+temps+"=0 ;";
    switch (_u) {
        case "u":
            var code="if ((micros()-"+temps+")>=" + delay_time + ") {\n  "+temps+"=micros();\n"+faire+"}\n";
            break;
        case "m":
            var code="if ((millis()-"+temps+")>=" + delay_time + ") {\n  "+temps+"=millis();\n"+faire+"}\n";
            break;
        case "s":
            code="if ((millis()-"+temps+")>=" + delay_time + "*1000) {\n  "+temps+"=millis();\n"+faire+"}\n";
            break
    };
    return code
};
/*  entree sortie  */
Blockly.Arduino["inout_attachInterrupt"]=function(block){
	var dropdown_pin=block.getFieldValue('PIN');
	var dropdown_mode=block.getFieldValue('mode');
	var funcName='interrupt_'+dropdown_pin;
	Blockly.Arduino.setups_['setup_Interrupt_'+dropdown_pin]='pinMode('+dropdown_pin+', INPUT);\n  attachInterrupt('+dropdown_pin+','+funcName+','+dropdown_mode+');';
	var branch=Blockly.Arduino.statementToCode(block, 'DO' );
	Blockly.Arduino.codeFunctions_[funcName] ='void ' + funcName + '() {\n' + branch + '}';
	return "";
};
Blockly.Arduino["inout_detachInterrupt"]=function(block){
	var dropdown_pin=block.getFieldValue('PIN');
	return 'detachInterrupt('+dropdown_pin+');\n';
};
Blockly.Arduino["inout_digital_write"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_stat=Blockly.Arduino.valueToCode(block, "STAT", Blockly.Arduino.ORDER_ATOMIC);
  //  Blockly.Arduino.setups_["setup_output_" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    var code="pinMode(" + dropdown_pin + ", OUTPUT); \n digitalWrite(" + dropdown_pin + ", " + dropdown_stat + ");\n";
    return code
};
Blockly.Arduino["inout_digital_read"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT_PULLUP);";
    var code="digitalRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["digital_read"]=function(block){
    var pull_up=block.getFieldValue('pullup') == 'TRUE';
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    if (pull_up) {
        Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT_PULLUP);"
    } else {
        Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT);"
    };
    var code="digitalRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["digital_readbi"]=function(block){
    var pull_up=block.getFieldValue('pullup') == 'TRUE';
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    if (pull_up) {
        Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT_PULLUP);"
		var code="!digitalRead(" + dropdown_pin + ")";
    } else {
        Blockly.Arduino.setups_["setup_input_" + dropdown_pin]="pinMode(" + dropdown_pin + ", INPUT_PULLUP);"
		var code="digitalRead(" + dropdown_pin + ")";
    };
    
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["inout_analog_write"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var value_num=Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_ATOMIC);
     Blockly.Arduino.setups_["setup_output" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    var code=" analogWrite(" + dropdown_pin + ", " + value_num + ");\n";
    return code
};
Blockly.Arduino["inout_analog_write2"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var value_num=Blockly.Arduino.valueToCode(block, "STAT", Blockly.Arduino.ORDER_ATOMIC);
     Blockly.Arduino.setups_["setup_output" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    var code=" analogWrite(" + dropdown_pin + ", " + value_num + ");\n";
    return code
};
Blockly.Arduino["inout_analog_write3"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	   var dropdown_pin1=block.getFieldValue("PIN1")
	      var dropdown_pin2=block.getFieldValue("PIN2")
		     var dropdown_pin3=block.getFieldValue("PIN3")
 
    var value_num=Blockly.Arduino.valueToCode(block, "STAT", Blockly.Arduino.ORDER_ATOMIC);
     Blockly.Arduino.setups_["setup_output" + dropdown_pin]="  ledcSetup(" + dropdown_pin1 + ", " + dropdown_pin2 + ", " + dropdown_pin3 + "); \n  ledcAttachPin(" + dropdown_pin + ", " + dropdown_pin1 + "); \n ";
    var code="ledcWrite(" + dropdown_pin1 + ", " + value_num + ");\n";
    return code
};
Blockly.Arduino["inout_analog_read"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["inout_analog_read_esp"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    var code="analogRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino['inout_analog_aref']=function(block){
    var valuearef_dropdown = block.getFieldValue('aref_dropdown');
    Blockly.Arduino.variables_["variables_valuearef_dropdown"] = 'uint16_t raw_bandgap = 0; \n float volt_battery = 0.0; \n ';
    Blockly.Arduino.setups_["setups_valuearef_dropdown"]='analogReference('+valuearef_dropdown+');';
    var code = 'analogRead(14)';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["inout_angle_maths"]=function(block){
    var angle=block.getFieldValue("ANGLE");
    return [angle, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["toggle"]=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_["toggle"+dropdown_pin]="boolean etat_" + dropdown_pin + "=LOW;";
    Blockly.Arduino.setups_["setup_output_" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    return "digitalWrite(" + dropdown_pin + ", etat_" + dropdown_pin + ");\netat_"+ dropdown_pin + "=!etat_"+ dropdown_pin + ";\n";
};
/*  stockage  */
Blockly.Arduino['eeprom_write_byte'] = function(block) {
	var adresse = Blockly.Arduino.valueToCode(block, 'adr', Blockly.Arduino.ORDER_ATOMIC);
	var valeur = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_["eeprom"] = '#include <EEPROM.h> \n  ';
		//Blockly.Arduino.setups_["setup_eeprom"]='EEPROM.begin(100); \n ';
	return 'EEPROM.write('+adresse+','+valeur+'); \n ';
};
Blockly.Arduino['eeprom_read_byte'] = function(block) {
	var address = Blockly.Arduino.valueToCode(this, 'ADDRESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
	Blockly.Arduino.includes_["eeprom"] = '#include <EEPROM.h> \n ';
	//Blockly.Arduino.setups_["setup_eeprom"]='EEPROM.begin(100); \n ';
	var code ='EEPROM.read('+address+')';
	return [code,Blockly.Arduino.ORDER_ATOMIC];
};

/*  stockage_R  */
Blockly.Arduino['eeprom_write_byte_R'] = function(block) {
	var adresse = Blockly.Arduino.valueToCode(block, 'adr', Blockly.Arduino.ORDER_ATOMIC);
	var valeur = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_["eeprom"] = '#include <EEPROM.h>';
	return 'EEPROM.put('+adresse+','+valeur+');\n';
};
Blockly.Arduino['eeprom_read_byte_R'] = function(block) {
	var adresse = Blockly.Arduino.valueToCode(block, 'adr', Blockly.Arduino.ORDER_ATOMIC);
	var valeur = Blockly.Arduino.valueToCode(block, 'val', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_["eeprom"] = '#include <EEPROM.h>';
	return 'EEPROM.get('+adresse+','+valeur+');\n';
};

Blockly.Arduino['init_generalremotecontrol'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
   
  Blockly.Arduino.definitions_['include_enableinterrupt'] = '#include <IRremote.h>  \n IRsend irsend; \n';
  Blockly.Arduino.definitions_['reception_function'] = 'IRrecv ir_rx('+dropdown_pin+');\n'+
'decode_results ir_rx_results;\n'+
'\n'+
'unsigned long fnc_ir_rx_decode()\n'+
' {\n'+
'  bool decoded=false;\n'+
'  if( ir_rx.decode(&ir_rx_results))\n'+
'	{\n'+
'		decoded=true;\n'+
'		ir_rx.resume();\n'+
'	}\n'+
'	if(decoded) \n'+
'		return ir_rx_results.value; \n'+
'	else \n'+
'		return 0;\n'+
' }\n';
  
  
  Blockly.Arduino.setups_['setup_genericRC'] = 'ir_rx.enableIRIn();\n';
  	 	 
  var code='(unsigned long)fnc_ir_rx_decode()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['init_generalremotecontrol1'] = function(block) {
 
  var code='String("0x") + String(ir_rx_results.value, HEX)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Init_remotecontrolMRT'] = function(block) {
   
  var Channel = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['include_enableinterrupt'] = '#include <IRremote.h>  \n IRsend irsend; \n';
  
  var code = 'irsend.sendRC6('+Channel+',8); \n';  
  return code;
};

Blockly.Arduino['Init_remotecontrolMRT1'] = function(block) {
   
  var Channel = block.getFieldValue("PIN");
  var hexcode = block.getFieldValue("TEXT");
  
  Blockly.Arduino.definitions_['include_enableinterrupt'] = '#include <IRremote.h>  \n IRsend irsend; \n';
  
  if(Channel == '0'){
  var code = 'irsend.sendNEC('+hexcode+', 32); \n';
}
  if(Channel == '1'){
  var code = 'irsend.sendSony('+hexcode+', 12); \n';
}
  if(Channel == '2'){
  var code = 'irsend.sendRC5('+hexcode+', 12); \n';
}
  if(Channel == '3'){
  var code = 'irsend.sendRC6('+hexcode+', 20); \n';
} 
  if(Channel == '4'){
  var code = 'irsend.sendJVC('+hexcode+', 8, false); \n';
}  
  if(Channel == '5'){
  var code = 'irsend.sendSAMSUNG('+hexcode+', 20); \n';
} 
  if(Channel == '6'){
  var code = 'irsend.sendDenon('+hexcode+', 15); \n';
} 
  if(Channel == '7'){
  var code = 'irsend.sendLG('+hexcode+', 32); \n';
} 
  return code;
};
 

Blockly.Arduino['catr433_sendvar'] = function(block) {
var dropdown_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
    Blockly.Arduino.definitions_['define_sendvar'] = '  #include <VirtualWire.h> \n char msg[3] = { }; \n const int transmit_pin = '+dropdown_pin+'; \n int i = 0; \n  ';
  
    Blockly.Arduino.setups_['catr433_sendvar'] = ' vw_set_tx_pin(transmit_pin); \n    vw_set_ptt_inverted(true); \n    vw_setup(2000);  \n  '  ;

	var code = 'vw_send((uint8_t *)msg, '+variable+'+1); \n vw_wait_tx(); \n';
  
return code;
};

Blockly.Arduino['catr433_recvvar'] = function(block) {
var dropdown_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
    Blockly.Arduino.definitions_['define_sendvar'] = ' #include <VirtualWire.h> \n const int receive_pin = '+dropdown_pin+'; \n int ivins; \n  ';
  
    Blockly.Arduino.setups_['catr433_sendvar'] = '    vw_set_rx_pin(receive_pin); \n vw_set_ptt_inverted(true);  \n     vw_setup(2000);  \n    vw_rx_start();   \n  '  ;

	var code = ' uint8_t buf[VW_MAX_MESSAGE_LEN]; \n  uint8_t buflen = VW_MAX_MESSAGE_LEN; \n  if (vw_get_message(buf, &buflen)) \n { \n for (ivins = 0; ivins < buflen-1; ivins++) \n { \n  } \n } \n  '+variable+' = ivins;  \n';
 
return code;
};


Blockly.Arduino['nrf24l01_init'] = function(block) {

   var pin_CE = Blockly.Arduino.valueToCode(block, "PIN_CE", Blockly.Arduino.ORDER_ATOMIC);
   var pin_CS = Blockly.Arduino.valueToCode(block, "PIN_CS", Blockly.Arduino.ORDER_ATOMIC);
    
   Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>\n';
   Blockly.Arduino.definitions_['define_RF24L01'] = '#include <nRF24L01.h>\n';
   Blockly.Arduino.definitions_['define_RF24'] = '#include <RF24.h>\n';
 
   Blockly.Arduino.definitions_['define_var_NRF24L01'] = 'RF24 radio('+pin_CE+','+pin_CS+');\n';
 
   Blockly.Arduino.setups_['nrf24l01_begin']='radio.begin(); \n   ';
 
   var code = '';
   return code;
};
Blockly.Arduino['nrf24l01_max'] = function(block) {

    var valuecan = block.getFieldValue('can');
    var valuerate = block.getFieldValue('rate');
    var valuepal = block.getFieldValue('pal');
    var valuepip = block.getFieldValue('pip');
 
   Blockly.Arduino.setups_['nrf24l01_max']='radio.setChannel(' + valuecan + ');  \n  radio.setDataRate (RF24_' + valuerate + '); \n radio.setPALevel(RF24_PA_' + valuepal + '); \n radio.openWritingPipe(' + valuepip + '); \n';
                                            
   var code = '';
   return code;
};

Blockly.Arduino['nrf24l01_sendvar'] = function(block) {

  var variable = Blockly.Arduino.valueToCode(block, "variable", Blockly.Arduino.ORDER_ATOMIC);   
 
  var code = ' radio.write(&'+variable+',sizeof('+variable+'));\n';
 
  return code;
};

Blockly.Arduino['nrf24l01_recvvar'] = function(block) {

  var variable = Blockly.Arduino.valueToCode(block, "variable", Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['radio_start']='radio.startListening(); \n ';
  var code = ' radio.read(&'+variable+',sizeof('+variable+'));\n';
 
  return code;
};

Blockly.Arduino["base_define_for"]=function(block){
 var repeats = Blockly.Arduino.valueToCode(block, "variable", Blockly.Arduino.ORDER_ATOMIC);
 var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var loopVar = Blockly.Arduino.variableDB_.getName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for (int ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + repeats + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

 Blockly.Arduino["base_define_while"]=function(block){
 var repeats1 = Blockly.Arduino.valueToCode(block, "variable1", Blockly.Arduino.ORDER_ATOMIC);
  var repeats2 = Blockly.Arduino.valueToCode(block, "variable2", Blockly.Arduino.ORDER_ATOMIC);
   var pin = block.getFieldValue("SPEED");
 var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var loopVar = Blockly.Arduino.variableDB_.getName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'while (' + repeats1 + ' ' + pin + ' ' + repeats2 + '){ \n' +
     // loopVar + ' < ' + repeats + '; ' +
     // loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};
 Blockly.Arduino["base_define_while_do"]=function(block){
 var repeats1 = Blockly.Arduino.valueToCode(block, "variable1", Blockly.Arduino.ORDER_ATOMIC);
  var repeats2 = Blockly.Arduino.valueToCode(block, "variable2", Blockly.Arduino.ORDER_ATOMIC);
   var pin = block.getFieldValue("SPEED");
 var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var loopVar = Blockly.Arduino.variableDB_.getName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'do { \n' +
     // loopVar + ' < ' + repeats + '; ' +
     // loopVar + '++) {\n' +
      branch + '} while (' + repeats1 + ' ' + pin + ' ' + repeats2 + ');\n';
  return code;
};
 
 Blockly.Arduino["base_define_for_in"]=function(block){
 var repeats1 = Blockly.Arduino.valueToCode(block, "variable1", Blockly.Arduino.ORDER_ATOMIC);
  var repeats2 = Blockly.Arduino.valueToCode(block, "variable2", Blockly.Arduino.ORDER_ATOMIC);
   var repeats3 = Blockly.Arduino.valueToCode(block, "variable3", Blockly.Arduino.ORDER_ATOMIC);
    var repeats4 = Blockly.Arduino.valueToCode(block, "variable4", Blockly.Arduino.ORDER_ATOMIC);
	
 var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var loopVar = Blockly.Arduino.variableDB_.getName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for (int ' + repeats1 + '=' + repeats2 + '; ' + repeats1 + '<=' + repeats3 + '; ' + repeats1 + '=' + repeats1 + '+' + repeats4 + ') {\n' +
      // loopVar + ' < ' + repeats1 + '; ' +
      // loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};
  Blockly.Arduino["base_define_for_ino"]=function(block){
 var repeats1 = Blockly.Arduino.valueToCode(block, "variable1", Blockly.Arduino.ORDER_ATOMIC);
  var repeats2 = Blockly.Arduino.valueToCode(block, "variable2", Blockly.Arduino.ORDER_ATOMIC);
   var repeats3 = Blockly.Arduino.valueToCode(block, "variable3", Blockly.Arduino.ORDER_ATOMIC);
    var repeats4 = Blockly.Arduino.valueToCode(block, "variable4", Blockly.Arduino.ORDER_ATOMIC);
	
 var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var loopVar = Blockly.Arduino.variableDB_.getName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for (int ' + repeats1 + '=' + repeats2 + '; ' + repeats1 + '>=' + repeats3 + '; ' + repeats1 + '=' + repeats1 + '-' + repeats4 + ') {\n' +
      // loopVar + ' < ' + repeats1 + '; ' +
      // loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

Blockly.Arduino['math_single'] = function(block) {
  var operator = block.getFieldValue('OP');
  var code;
  var arg;
  if (operator == 'NEG') {
    var code = Blockly.Arduino.valueToCode(block, 'NUM',
        Blockly.Arduino.ORDER_UNARY_SIGN) || '0';
    return ['-' + code, Blockly.Arduino.ORDER_UNARY_SIGN];
  }
  //Blockly.Arduino.definitions_['include_math'] = '#include <math.h>';
  if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
    arg = Blockly.Arduino.valueToCode(block, 'NUM',
        Blockly.Arduino.ORDER_MULTIPLICATIVE) || '0';
  } else {
    arg = Blockly.Arduino.valueToCode(block, 'NUM',
        Blockly.Arduino.ORDER_NONE) || '0';
  }

  if (code) {
    return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
  }
 
  return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

Blockly.Arduino['math_single_int'] = function(block) {
    var pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	var dim = this.getFieldValue('dim');
	var code = ''+dim+'('+pin+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['math_single_int_text'] = function(block) {
    var pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	var dim = this.getFieldValue('dim');
	var code = ''+dim+'('+pin+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['math_single_pi'] = function(block) {
	var dim = this.getFieldValue('dim');
	if(dim == '1'){
	var code = 'PI';
	}
	if(dim == '2'){
	var code = 'EULER';
	}
	if(dim == '3'){
	var code = '(1 + sqrt(5)) / 2';
	}
	if(dim == '4'){
	var code = 'sqrt(2)';
	}
	if(dim == '5'){
	var code = 'sqrt(0.5)';
	}
	if(dim == '6'){
	var code = 'INFINITY';
	}
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['math_single_int_pi'] = function(block) {
    var pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	var dim = this.getFieldValue('dim');
	if(dim == '1'){
	var code = '('+pin+' % 2 == 0)';
	}
	if(dim == '2'){
	var code = '('+pin+' % 2 == 1)';
	}
	if(dim == '3'){
	var code = '('+pin+' % 1 == 0)';
	}
	if(dim == '4'){
	var code = '('+pin+' > 0)';
	}
	if(dim == '5'){
	var code = '('+pin+' < 0)';
	}
 
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};  
 Blockly.Arduino['math_single_int_pi1'] = function(block) {
    var pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	var pin1 = Blockly.Arduino.valueToCode(block, "PIN1", Blockly.Arduino.ORDER_ATOMIC);
	 
	var code = '('+pin+' % '+pin1+' == 0)';
	 
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

  Blockly.Arduino['math_single_int_pi2'] = function(block) {
    var pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	var pin1 = Blockly.Arduino.valueToCode(block, "PIN1", Blockly.Arduino.ORDER_ATOMIC);
	 
	var code = '(int)'+pin+' % (int)'+pin1+'';
	 
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
 
   Blockly.Arduino['math_single_int_pi3'] = function(block) {
    var pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	var pin1 = Blockly.Arduino.valueToCode(block, "PIN1", Blockly.Arduino.ORDER_ATOMIC);
	var pin2 = Blockly.Arduino.valueToCode(block, "PIN2", Blockly.Arduino.ORDER_ATOMIC);
	
	var code = '(constrain('+pin+','+pin1+','+pin2+'))';
	 
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

  
Blockly.Arduino['Init_RTC_ds1302'] = function(block) {
  var pin_rst = Blockly.Arduino.valueToCode(block, "PIN_RST", Blockly.Arduino.ORDER_ATOMIC);
  var pin_dat = Blockly.Arduino.valueToCode(block, "PIN_DAT", Blockly.Arduino.ORDER_ATOMIC);
  var pin_clk = Blockly.Arduino.valueToCode(block, "PIN_CLK", Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['include_DS1302'] = '#include <iarduino_RTC.h>\n';
  
  Blockly.Arduino.definitions_['init_ds1302'] = 'iarduino_RTC time(RTC_DS1302, '+pin_rst+','+pin_clk+','+pin_dat+');\n';
 
  var code=' time.begin();\n';
  return code;
};

Blockly.Arduino['DateTime_RTC_ds1302'] = function(block) {
	
  var day = Blockly.Arduino.valueToCode(block, "DS1302_DAY", Blockly.Arduino.ORDER_ATOMIC);
  var month = Blockly.Arduino.valueToCode(block, "DS1302_MONTH", Blockly.Arduino.ORDER_ATOMIC);
  var year = Blockly.Arduino.valueToCode(block, "DS1302_YEAR", Blockly.Arduino.ORDER_ATOMIC);
  var hour = Blockly.Arduino.valueToCode(block, "DS1302_HOUR", Blockly.Arduino.ORDER_ATOMIC); 
  var min = Blockly.Arduino.valueToCode(block, "DS1302_MINUTE", Blockly.Arduino.ORDER_ATOMIC);
  var sec = Blockly.Arduino.valueToCode(block, "DS1302_SECOND", Blockly.Arduino.ORDER_ATOMIC);
   	
   var code='time.settime('+sec+','+min+','+hour+','+day+','+month+','+year+', 1);\n'
  return code;
};

Blockly.Arduino['values_ds1302'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==5)
	  var code = 'time.gettime("s")';
  else if (Output_Value==4)
		var code = 'time.gettime("i")';
   else if (Output_Value==3)
			var code = 'time.gettime("H")';
    else if (Output_Value==2)
				var code = 'time.gettime("d")';
	 else if (Output_Value==1)
				var code = 'time.gettime("m")';
			else
					var code = 'time.gettime("Y")';
    
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['Init_RTC_ds3231w'] = function(block) {
   
  //Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['include_RTClib'] = '#include <RTClib.h>\n';
  
  Blockly.Arduino.definitions_['init_ds3232'] = 'RTC_DS3231 rtc;\n'+
  'DateTime t;\n'+
  'String daysOfTheWeek[7]={"Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"};\n'+
  'String monthsNames[12]={"Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"};\n';
    
  Blockly.Arduino.setups_['setup_ds3232'] = 'rtc.begin();\n';
  	 	 
  var code='';
  return code;
};
Blockly.Arduino['Init_RTC_ds3231'] = function(block) {
   
  //Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['include_RTClib'] = '#include <RTClib.h>\n';
  
  Blockly.Arduino.definitions_['init_ds3232'] = 'RTC_DS3231 rtc;\n'+
  'DateTime t;\n'+
  'String daysOfTheWeek[7]={"Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"};\n'+
  'String monthsNames[12]={"Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"};\n';
    
  Blockly.Arduino.setups_['setup_ds3232'] = 'rtc.begin();\n';
  	 	 
  var code='';
  return code;
};
Blockly.Arduino['DateTime_RTC_ds3231w'] = function(block) {
	
	
  var day = Blockly.Arduino.valueToCode(this, 'DS3231_DAY', Blockly.Arduino.ORDER_ATOMIC);
  var month = Blockly.Arduino.valueToCode(this, 'DS3231_MONTH', Blockly.Arduino.ORDER_ATOMIC);
  var year = Blockly.Arduino.valueToCode(this, 'DS3231_YEAR', Blockly.Arduino.ORDER_ATOMIC);
  var hour = Blockly.Arduino.valueToCode(this, 'DS3231_HOUR', Blockly.Arduino.ORDER_ATOMIC); 
  var min = Blockly.Arduino.valueToCode(this, 'DS3231_MINUTE', Blockly.Arduino.ORDER_ATOMIC);
  var sec = Blockly.Arduino.valueToCode(this, 'DS3231_SECOND', Blockly.Arduino.ORDER_ATOMIC);
   
   var code='rtc.adjust(DateTime('+year+','+month+','+day+','+hour+','+min+','+sec+'));\n';
  return code;
};
Blockly.Arduino['DateTime_RTC_ds3231'] = function(block) {
	
	
  var day = Blockly.Arduino.valueToCode(this, 'DS3231_DAY', Blockly.Arduino.ORDER_ATOMIC);
  var month = Blockly.Arduino.valueToCode(this, 'DS3231_MONTH', Blockly.Arduino.ORDER_ATOMIC);
  var year = Blockly.Arduino.valueToCode(this, 'DS3231_YEAR', Blockly.Arduino.ORDER_ATOMIC);
  var hour = Blockly.Arduino.valueToCode(this, 'DS3231_HOUR', Blockly.Arduino.ORDER_ATOMIC); 
  var min = Blockly.Arduino.valueToCode(this, 'DS3231_MINUTE', Blockly.Arduino.ORDER_ATOMIC);
  var sec = Blockly.Arduino.valueToCode(this, 'DS3231_SECOND', Blockly.Arduino.ORDER_ATOMIC);
   
   var code='rtc.adjust(DateTime('+year+','+month+','+day+','+hour+','+min+','+sec+'));\n';
  return code;
};
Blockly.Arduino['order_read_rtc_ds3231w'] = function(block) {
  var code = 't=rtc.now();\n'  
  return code;
};
Blockly.Arduino['order_read_rtc_ds3231'] = function(block) {
  var code = 't=rtc.now();\n'  
  return code;
};
Blockly.Arduino['values_ds3231w'] = function(block) {
 var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	

  if (Output_Value==5)
	  var code = 't.second()';
  else if (Output_Value==4)
		var code = 't.minute()';
   else if (Output_Value==3)
			var code = 't.hour()';
    else if (Output_Value==2)
				var code = 't.day()';
	 else if (Output_Value==1)
				var code = 't.month()';
			 else if (Output_Value==0)
				 var code = 't.year()';
				 else
					var code = 't.dayOfTheWeek()';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['values_ds3231'] = function(block) {
 var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	

  if (Output_Value==5)
	  var code = 't.second()';
  else if (Output_Value==4)
		var code = 't.minute()';
   else if (Output_Value==3)
			var code = 't.hour()';
    else if (Output_Value==2)
				var code = 't.day()';
	 else if (Output_Value==1)
				var code = 't.month()';
			 else if (Output_Value==0)
				 var code = 't.year()';
				 else
					var code = 't.dayOfTheWeek()';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['base_code_reset'] = function(block) {
  var code = ' ESP.restart(); \n'  
  return code;
};

Blockly.Arduino['sd_init'] = function(block) {

   var pin_CS = Blockly.Arduino.valueToCode(this, 'PIN_CS', Blockly.Arduino.ORDER_ATOMIC); 
    
   Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>\n';
   Blockly.Arduino.definitions_['define_SD'] = '#include <SD.h>\n';
 
   Blockly.Arduino.setups_['setup_sd']='SD.begin('+pin_CS+');\n'
 
   var code = '';
   return code;
};

Blockly.Arduino['sd_printfile'] = function(block) {

  var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
  var logic = this.getFieldValue('LOGIC');
  
   Blockly.Arduino.definitions_['define_sd_print'] = 'void sd_print(String file, String texttoprint, boolean lf)\n'+
'	{\n'+
'   File sd_file;\n'+
'  	sd_file = SD.open(file, FILE_WRITE);\n'+
'	if(sd_file){\n'+
'		if(lf)sd_file.println(texttoprint);\n'+
'		else sd_file.print(texttoprint);\n'+
'		sd_file.close();\n'+
'	}\n'+
'}\n ';
//Blockly.Arduino.setups_['setup_sd_file']='SD.remove('+filename+'); \n'

 if(logic=='TRUE')
	var code = 'sd_print('+filename+','+texttoprint+',true);\n';
 else
	 var code = 'sd_print('+filename+','+texttoprint+',false);\n';
 
   return code;
};

Blockly.Arduino['sd_printfile1'] = function(block) {
  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
 Blockly.Arduino.definitions_['define_sd_print1'] = 'String values; \n';
 Blockly.Arduino.setups_['define_sd_print1'] = 'File myFile = SD.open('+filename+');  \n    if (myFile)  \n  {  \n    byte h = 0;  \n    char text[] = {};  \n    while (myFile.available())  \n    {  \n     text[h] = myFile.read();  \n      h++;  \n    }  \n    values = text;  \n    myFile.close();  \n }  \n  \n';
  
 	var code = 'values';
	return [code, Blockly.Arduino.ORDER_ATOMIC] ; 
};

Blockly.Arduino['sd_printfile2'] = function(block) {
  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
 
 var code = ' SD.remove('+filename+'); \n';

   return code;
};
Blockly.Arduino['sd_printfile3'] = function(block) {
  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
 
 var code = ' SD.mkdir('+filename+'); \n';

   return code;
};
Blockly.Arduino['sd_printfile4'] = function(block) {
  var filename = Blockly.Arduino.valueToCode(block, 'filename', Blockly.Arduino.ORDER_ATOMIC);
 
 var code = ' SD.rmdir('+filename+'); \n';

   return code;
};

Blockly.Arduino['stepservo_continuos_move'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);  
  var servomotor_dir = Blockly.Arduino.valueToCode(this, 'PIN_GR', Blockly.Arduino.ORDER_ATOMIC); 
  var SpeedServo = Blockly.Arduino.valueToCode(this, 'SpeedServo', Blockly.Arduino.ORDER_ATOMIC);  
  
if (SpeedServo>=180)
    SpeedServo=180;

	
  Blockly.Arduino.definitions_['define_servo'] = '#include <VarSpeedServo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+dropdown_pin] = 'VarSpeedServo myServo'+dropdown_pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+dropdown_pin] = 'myServo'+dropdown_pin+'.attach('+dropdown_pin+');\n';


	var code = 'myServo'+dropdown_pin+'.attach('+dropdown_pin+'); \n myServo'+dropdown_pin+'.slowmove('+SpeedServo+','+servomotor_dir+');\n';
 
  
  return code;
};
//ручное серво
Blockly.Arduino['stepservo_continuos_move_ru'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);  
  var SpeedServo = Blockly.Arduino.valueToCode(this, 'SpeedServo', Blockly.Arduino.ORDER_ATOMIC);  
  
if (SpeedServo>=180)
    SpeedServo=180;
Blockly.Arduino.definitions_['define_servo_ru'] = '';
  Blockly.Arduino.definitions_['var_servo_ru'] = '';
  Blockly.Arduino.setups_['setup_servo_ru'] = '';
  
	var code = 'for (int count = 0; count < 15; count++) { pinMode('+dropdown_pin+', OUTPUT); \n digitalWrite('+dropdown_pin+', 1); \n delayMicroseconds((7 * '+SpeedServo+' + 500)); \n pinMode('+dropdown_pin+', OUTPUT); \n digitalWrite('+dropdown_pin+', 0); \n delay(20); \n } \n '; 

  return code;
};

Blockly.Arduino['stepcatServoRot_stop'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);  
  
  var code = 'myServo'+dropdown_pin+'.detach(); \n';
  return code;
};
 
Blockly.Arduino['base_code_i2s'] = function(block) {
  
  Blockly.Arduino.definitions_['define_i2s'] = '#include <Wire.h>\n';
  Blockly.Arduino.setups_['define_i2s'] = '  Wire.begin(); Serial.begin(9600); \n  while (!Serial); \n Serial.println(" I2C Scanner"); \n';
  
  var code = ' byte error, address; \n   int nDevices;  \n   nDevices = 0; \n  for(address = 8; address < 127; address++ ){ \n   Wire.beginTransmission(address); \n    error = Wire.endTransmission(); \n  if (error == 0){ \n  Serial.print("0x"); \n    if (address<16) \n    Serial.print("0"); \n    Serial.println(address,HEX);  \n    nDevices++; \n   } \n  else if (error==4) { \n  Serial.print("0x"); \n  if (address<16) \n  Serial.print("0"); \n  Serial.println(address,HEX); \n   } \n  } \n  if (nDevices == 0) \n  Serial.println("No I2C");   \n delay(1000); \n';  
  return code;
};

Blockly.Arduino['servo_movebnn'] = function(block) {
var text_name = block.getFieldValue('NAME'); 
  var dropdown_pin = this.getFieldValue('PIN');
 
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  
  
 if (value_degree>=180)
    value_degree=180;

  Blockly.Arduino.definitions_['define_servo'] = '#include <iarduino_MultiServo.h>  \n iarduino_MultiServo MSS'+text_name+';';
  Blockly.Arduino.setups_['var_servo'+text_name] = '  MSS'+text_name+'.servoSet(0, SERVO_SG90); \n MSS'+text_name+'.servoSet(1, SERVO_SG90); \n  MSS'+text_name+'.servoSet(2, SERVO_SG90); \n MSS'+text_name+'.servoSet(3, SERVO_SG90); \n MSS'+text_name+'.servoSet(4, SERVO_SG90); \n MSS'+text_name+'.servoSet(5, SERVO_SG90); \n MSS'+text_name+'.servoSet(6, SERVO_SG90); \n MSS'+text_name+'.servoSet(7, SERVO_SG90); \n MSS'+text_name+'.servoSet(8, SERVO_SG90); \n MSS'+text_name+'.servoSet(9, SERVO_SG90); \n MSS'+text_name+'.servoSet(10, SERVO_SG90); \n MSS'+text_name+'.servoSet(11, SERVO_SG90); \n MSS'+text_name+'.servoSet(12, SERVO_SG90); \n MSS'+text_name+'.servoSet(13, SERVO_SG90); \n MSS'+text_name+'.servoSet(14, SERVO_SG90); \n MSS'+text_name+'.servoSet(15, SERVO_SG90); \n MSS'+text_name+'.servoSet(16, SERVO_SG90); \n MSS'+text_name+'.begin('+text_name+'); \n'  ;

  var code = 'MSS'+text_name+'.servoWrite('+dropdown_pin+',byte('+value_degree+')); \n';
  
  return code;
};

Blockly.Arduino['motor_autoR'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var motor_pin1 = Blockly.Arduino.valueToCode(this, 'PIN_RM1', Blockly.Arduino.ORDER_ATOMIC); 
  var motor_pin2 = Blockly.Arduino.valueToCode(this, 'PIN_RM2', Blockly.Arduino.ORDER_ATOMIC); 
  var motor_direction = this.getFieldValue('MOTOR_DIR');
  var motor_speed = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);
 
var code = 'pinMode('+motor_pin1+',OUTPUT); \n pinMode('+motor_pin2+',OUTPUT); \n digitalWrite('+motor_pin1+','+motor_direction+'); \n analogWrite('+motor_pin2+','+motor_speed+'); \n '; 
 
  return code;
};


 Blockly.Arduino['motor_autoL'] = function(block) {
 
  var motor_pin1 = Blockly.Arduino.valueToCode(this, 'PIN_RM1', Blockly.Arduino.ORDER_ATOMIC); 
  var motor_pin2 = Blockly.Arduino.valueToCode(this, 'PIN_RM2', Blockly.Arduino.ORDER_ATOMIC); 
  var motor_direction = this.getFieldValue('MOTOR_DIR');
  var motor_speed = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC);

		if(motor_direction == '1'){ 
	    var code = 'pinMode('+motor_pin1+',OUTPUT); \n pinMode('+motor_pin2+',OUTPUT); \n analogWrite('+motor_pin1+','+motor_speed+');\n analogWrite('+motor_pin2+',0);\n'; 
		}
		if(motor_direction == '0'){
	    var code = 'pinMode('+motor_pin1+',OUTPUT); \n pinMode('+motor_pin2+',OUTPUT); \n analogWrite('+motor_pin1+',0);\n analogWrite('+motor_pin2+','+motor_speed+');\n';
		}

  return code;
};

Blockly.Arduino['motor_auto_stepper'] = function(block) {

  var steeper_number = this.getFieldValue('STEEPER_NUMBER'); 
  var steeper_pin1 = Blockly.Arduino.valueToCode(this, 'PIN_STEEPER1', Blockly.Arduino.ORDER_ATOMIC);  
  var steeper_pin2 = Blockly.Arduino.valueToCode(this, 'PIN_STEEPER2', Blockly.Arduino.ORDER_ATOMIC);  
  var steeper_pin3 = Blockly.Arduino.valueToCode(this, 'PIN_STEEPER3', Blockly.Arduino.ORDER_ATOMIC);  
  var steeper_pin4 = Blockly.Arduino.valueToCode(this, 'PIN_STEEPER4', Blockly.Arduino.ORDER_ATOMIC);  
  var stepper_steprev = Blockly.Arduino.valueToCode(this, 'STEP_RPM', Blockly.Arduino.ORDER_ATOMIC);  
 
  Blockly.Arduino.definitions_['define_stepper'] = '#include <Stepper.h> \n';
  Blockly.Arduino.definitions_['define_stepper_'+steeper_number] = 'Stepper stepper_'+steeper_number+'('+stepper_steprev+','+steeper_pin1+','+steeper_pin2+','+steeper_pin3+','+steeper_pin4+'); \n';

  var code = '';
  return code;
};

Blockly.Arduino['motor_step_dir'] = function(block) {

  var steeper_number = Blockly.Arduino.valueToCode(this, 'STEPPER_STEP_h', Blockly.Arduino.ORDER_ATOMIC);  
  var steeper_pin1 = Blockly.Arduino.valueToCode(this, 'PIN_STEEPER1', Blockly.Arduino.ORDER_ATOMIC);  
  var steeper_pin2 = Blockly.Arduino.valueToCode(this, 'PIN_STEEPER2', Blockly.Arduino.ORDER_ATOMIC);   
  var stepper_steprev = Blockly.Arduino.valueToCode(this, 'STEPPER_STEP_j', Blockly.Arduino.ORDER_ATOMIC);  
 
  Blockly.Arduino.definitions_['define_stepper'+steeper_pin1+steeper_pin2] = ' long stepn'+steeper_pin1+''+steeper_pin2+' = 0; \n long spedn'+steeper_pin1+''+steeper_pin2+' = 0; \n';
  Blockly.Arduino.setups_['define_stepper'+steeper_pin1+steeper_pin2] = ' pinMode('+steeper_pin1+', OUTPUT); \n   pinMode('+steeper_pin2+', OUTPUT); \n ';

  var code = '  '+ 
' stepn'+steeper_pin1+''+steeper_pin2+' = '+stepper_steprev+';  \n'+ 
' spedn'+steeper_pin1+''+steeper_pin2+' = '+steeper_number+';  \n'+
'   if (stepn'+steeper_pin1+''+steeper_pin2+' < 0 && spedn'+steeper_pin1+''+steeper_pin2+' > 0){  \n'+
'     stepn'+steeper_pin1+''+steeper_pin2+' = stepn'+steeper_pin1+''+steeper_pin2+'*-1;  \n'+
'     for (int count = 0; count < stepn'+steeper_pin1+''+steeper_pin2+'; count++) {  \n'+
'       digitalWrite('+steeper_pin1+', 0);  \n'+
'       digitalWrite('+steeper_pin2+', 1);  \n'+
'       delayMicroseconds(map(spedn'+steeper_pin1+''+steeper_pin2+', 100, 1, 4000, 10000));  \n'+
'       digitalWrite('+steeper_pin2+', 0);  \n'+
'       delayMicroseconds(map(spedn'+steeper_pin1+''+steeper_pin2+', 100, 1, 4000, 10000));  \n'+
'     }  \n'+
'    stepn'+steeper_pin1+''+steeper_pin2+' = stepn'+steeper_pin1+''+steeper_pin2+'*-1;  \n'+
'      }  \n' +
'   if (stepn'+steeper_pin1+''+steeper_pin2+' > 0 && spedn'+steeper_pin1+''+steeper_pin2+' > 0){  \n'+
'     for (int count = 0; count < stepn'+steeper_pin1+''+steeper_pin2+'; count++) {  \n' +   
'       digitalWrite('+steeper_pin1+', 1);  \n'+
'       digitalWrite('+steeper_pin2+', 1);  \n'+
'       delayMicroseconds(map(spedn'+steeper_pin1+''+steeper_pin2+', 100, 1, 4000, 10000));  \n'+
'       digitalWrite('+steeper_pin2+', 0);  \n'+
'       delayMicroseconds(map(spedn'+steeper_pin1+''+steeper_pin2+', 100, 1, 4000, 10000));  \n'+
'     }  \n'+
'      }  \n'+
'   if (stepn'+steeper_pin1+''+steeper_pin2+' == 0 | spedn'+steeper_pin1+''+steeper_pin2+' == 0){  \n'+
'       digitalWrite('+steeper_pin1+', 0);  \n' +
'       digitalWrite('+steeper_pin2+', 0);  \n'+
'      }  \n'+
'   \n';
  return code;
};




Blockly.Arduino['motor_auto_stepper_box'] = function(block) {

  var stepper_speed = Blockly.Arduino.valueToCode(this, 'STEPPER_STEP_h', Blockly.Arduino.ORDER_ATOMIC);
  var steeper_number = this.getFieldValue('STEEPER_NUMBER');
  var stepper_steps = Blockly.Arduino.valueToCode(this, 'STEPPER_STEP_j', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'stepper_'+steeper_number+'.setSpeed('+stepper_speed+'); \n stepper_'+steeper_number+'.step('+stepper_steps+');\n ';
   
  return code;
};

Blockly.Arduino['motor_auto_stepper_stop'] = function(block) {

  var steeper_pin1 = Blockly.Arduino.valueToCode(this, 'PIN_STEEPER1', Blockly.Arduino.ORDER_ATOMIC);  
  var steeper_pin2 = Blockly.Arduino.valueToCode(this, 'PIN_STEEPER2', Blockly.Arduino.ORDER_ATOMIC);  
  var steeper_pin3 = Blockly.Arduino.valueToCode(this, 'PIN_STEEPER3', Blockly.Arduino.ORDER_ATOMIC);  
  var steeper_pin4 = Blockly.Arduino.valueToCode(this, 'PIN_STEEPER4', Blockly.Arduino.ORDER_ATOMIC); 
  
  Blockly.Arduino.setups_[steeper_pin1] = 'pinMode('+steeper_pin1+', OUTPUT); ';
  Blockly.Arduino.setups_[steeper_pin2] = 'pinMode('+steeper_pin2+', OUTPUT); ';
  Blockly.Arduino.setups_[steeper_pin3] = 'pinMode('+steeper_pin3+', OUTPUT); ';
  Blockly.Arduino.setups_[steeper_pin4] = 'pinMode('+steeper_pin4+', OUTPUT); ';
  
  var code = 'digitalWrite('+steeper_pin1+',LOW); \n digitalWrite('+steeper_pin2+',LOW); \n digitalWrite('+steeper_pin3+',LOW); \n digitalWrite('+steeper_pin4+',LOW); \n '
  
  return code;
};

Blockly.Arduino['digital_readbiR']=function(block){
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
     
        Blockly.Arduino.setups_['setup_input_' + dropdown_pin]='pinMode(' + dropdown_pin + ', INPUT_PULLUP);';
		var code='digitalRead(' + dropdown_pin + ')';
 
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino["inout_analog_readR"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var code="analogRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino['ultrasonic_ranger_sensor'] = function(block) {
    var PIN_TRIG = Blockly.Arduino.valueToCode(block, "PIN_TRIG", Blockly.Arduino.ORDER_ATOMIC);  
    var PIN_ECHO = Blockly.Arduino.valueToCode(block, "PIN_ECHO", Blockly.Arduino.ORDER_ATOMIC);  
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

Blockly.Arduino['dht_sensor'] = function(block) {
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

Blockly.Arduino['RotaryEncoder_Read'] = function(block) {

  var dropdown_pinDT = Blockly.Arduino.valueToCode(block, "PINDT", Blockly.Arduino.ORDER_ATOMIC);  
  var dropdown_pinCLK = Blockly.Arduino.valueToCode(block, "PINCLK", Blockly.Arduino.ORDER_ATOMIC);  
  
  Blockly.Arduino.definitions_['include_encoder'] = '#include <Encoder.h>';
  Blockly.Arduino.definitions_['rotaryencoder_1'] = 'Encoder encoder_1('+dropdown_pinDT+','+dropdown_pinCLK+');\n';
  
  var code = '(encoder_1.read()/4)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['bmpInit_Compass_HMC5883'] = function(block) {
   var text_name = block.getFieldValue('NAME'); 
   var dropdown_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC); 
 // Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_Sensor33'] = '#include <iarduino_Pressure_BMP.h> \n iarduino_Pressure_BMP sensor('+text_name+'); \n float bmppressure; \n float bmptemperature; \n float bmpaltitude; \n float bmppressure2; \n ';
  Blockly.Arduino.setups_['setup_HMC5883'] = 'sensor.begin(); \n';
  var code = 'if(sensor.read(1)){ \n    bmppressure = sensor.pressure;  \n    bmptemperature = sensor.temperature; \n    bmpaltitude = sensor.altitude; \n  } \n      if(sensor.read(2)){ \n    bmppressure2 = sensor.pressure; \n '+dropdown_pin+' = bmppressure; \n } \n';
   
  return code;
};

Blockly.Arduino['Init_Temp_ds18b20'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC); 
  var dropdown_pinn = Blockly.Arduino.valueToCode(block, "PINR", Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['include_oneWire'] = '#include <OneWire.h>';
  Blockly.Arduino.definitions_['include_DallasTemperature'] = '#include <DallasTemperature.h>';
  Blockly.Arduino.definitions_['init_ds18b20'] = 'OneWire oneWireBus('+dropdown_pin+');\nDallasTemperature sensors(&oneWireBus);\n';
  Blockly.Arduino.setups_['setup_ds18b20'] = 'sensors.begin();\n';
  	 	 
  var code = 'sensors.requestTemperatures();\n '+dropdown_pinn+' = sensors.getTempCByIndex(0); \n';
   
  return code;
};

Blockly.Arduino['Init_Accel_ADXL345'] = function(block) {
  var typeAccel = this.getFieldValue('OUTPUT_VALUE');
  var dropdown_pinn = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_Sensor77'] = '#include <Adafruit_Sensor.h>';
  Blockly.Arduino.definitions_['include_Adafruit_ADXL345_U'] = '#include <Adafruit_ADXL345_U.h>';
  
  Blockly.Arduino.definitions_['init_ADXL345'] = 'Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified(12345);\n';
  Blockly.Arduino.definitions_['init_var1_ADXL345'] = 'sensors_event_t event;\n';
    
  Blockly.Arduino.setups_['setup_ADXL345'] = 'accel.begin(); \n  accel.setRange(ADXL345_RANGE_16_G); \n';
  	 	 
  var code='accel.getEvent(&event);  \n  '+dropdown_pinn+' = event.acceleration.'+typeAccel+'; \n';
  return code;
};

Blockly.Arduino['Init_Compass_HMC5883'] = function(block) {
  var typeAccel = this.getFieldValue('OUTPUT_VALUE');
  var dropdown_pinn = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['include_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['include_Adafruit_Sensor22'] = '#include <DFRobot_QMC5883.h>';
  Blockly.Arduino.definitions_['include_Adafruit_HMC5883_U'] = 'DFRobot_QMC5883 compass;';
    
  Blockly.Arduino.setups_['setup_HMC5883'] = ' while (!compass.begin()){ \n   Serial.println(" "); \n    delay(500); \n} \n  if(compass.isHMC() ){  \n    Serial.println(" ");  \n    compass.setRange(HMC5883L_RANGE_1_3GA);  \n    compass.setMeasurementMode(HMC5883L_CONTINOUS);  \n    compass.setDataRate(HMC5883L_DATARATE_15HZ);  \n    compass.setSamples(HMC5883L_SAMPLES_8);  \n  }else if(compass.isQMC()){  \n    Serial.println(" ");  \n    compass.setRange(QMC5883_RANGE_2GA);  \n   compass.setMeasurementMode(QMC5883_CONTINOUS);   \n   compass.setDataRate(QMC5883_DATARATE_50HZ);  \n    compass.setSamples(QMC5883_SAMPLES_8);  \n}\n';
  
  var code = ' Vector mag = compass.readRaw(); \n  float heading = atan2(mag.YAxis, mag.XAxis); \n float declinationAngle = (4.0 + (26.0 / 60.0)) / (180 / PI); \n  heading += declinationAngle; \n if (heading < 0){ \n   heading += 2 * PI; \n  } \n  if (heading > 2 * PI){ \n    heading -= 2 * PI; \n  } \n  float headingDegrees = heading * 180/PI; \n  '+dropdown_pinn+' = '+typeAccel+'; \n ';
 
  return code;
};


Blockly.Arduino['Init_MPU6050_GY'] = function(block) {
  var typeAccel = this.getFieldValue('OUTPUT_VALUE');
  var dropdown_pinn = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
  
   Blockly.Arduino.definitions_['include_MPU6050_GY'] = '  #include "I2Cdev.h" \n #include "MPU6050.h" \n #define TIME_OUT 20 \n   int16_t ax, ay, az, gx, gy, gz; \n  MPU6050 accgyro; \n';
   Blockly.Arduino.setups_['setup_MPU6050_GY'] = '   accgyro.initialize();  \n';
  
   var code = ' accgyro.getMotion6(&ax, &ay, &az, &gx, &gy, &gz); \n     '+dropdown_pinn+' = '+typeAccel+'; \n     ';
 
  return code;
};

Blockly.Arduino["inout_digital_writeD"]=function(block){
	var typeAccel = this.getFieldValue('OUTPUT_VALUE');
	var dropdown_stat = this.getFieldValue('STAT');
    var dropdown_pin=Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
	
  // Blockly.Arduino.setups_["setup_output_" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
  if (typeAccel == "3"){
  if(dropdown_stat =="1"){
  dropdown_stat = "0";} else {
  dropdown_stat = "1"
  }
  }
    var code="pinMode(" + dropdown_pin + ", OUTPUT); \n digitalWrite(" + dropdown_pin + ", " + dropdown_stat + ");\n";
    return code
};

Blockly.Arduino["inout_analog_writeD"]=function(block){
    var dropdown_pin=block.getFieldValue("broche");
    var value_num=Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_ATOMIC);
     Blockly.Arduino.setups_["setup_output" + dropdown_pin]="pinMode(" + dropdown_pin + ", OUTPUT);";
    var code=" analogWrite(" + dropdown_pin + ", " + value_num + ");\n";
    return code
};

Blockly.Arduino['actuator_rgbled'] = function(block) {
  var RGB_Type = block.getFieldValue('RGB_TYPE');
  var dropdown_pinR = Blockly.Arduino.valueToCode(block, "PINRed", Blockly.Arduino.ORDER_ATOMIC); 
  var dropdown_pinG = Blockly.Arduino.valueToCode(block, "PINGreen", Blockly.Arduino.ORDER_ATOMIC); 
  var dropdown_pinB = Blockly.Arduino.valueToCode(block, "PINBlue", Blockly.Arduino.ORDER_ATOMIC); 
  var colorall = block.getFieldValue('RGBCOLOR');
 
  var red = parseInt(colorall.substring(1,3),16);
  var green = parseInt(colorall.substring(3,5),16);
  var blue = parseInt(colorall.substring(5,7),16);
  
  if (RGB_Type=='1')
  {
	 red=255-red;
	 green=255-green;
	 blue=255-blue;
  }
	
  Blockly.Arduino.setups_['setup_output_'+dropdown_pinR] = 'pinMode('+dropdown_pinR+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+dropdown_pinG] = 'pinMode('+dropdown_pinG+', OUTPUT);';
  Blockly.Arduino.setups_['setup_output_'+dropdown_pinB] = 'pinMode('+dropdown_pinB+', OUTPUT);';
 
  var code = 'analogWrite('+dropdown_pinR+','+red+');\nanalogWrite('+dropdown_pinG+','+green+');\nanalogWrite('+dropdown_pinB+','+blue+');\n';
 
 
  return code;
}; 


Blockly.Arduino['actuator_rgbled595'] = function(block) {
  var type = block.getFieldValue('RGB_TYPE');
  var dropdown_pinD = Blockly.Arduino.valueToCode(block, "PINRed", Blockly.Arduino.ORDER_ATOMIC); 
  var dropdown_pinL = Blockly.Arduino.valueToCode(block, "PINGreen", Blockly.Arduino.ORDER_ATOMIC); 
  var dropdown_pinC = Blockly.Arduino.valueToCode(block, "PINBlue", Blockly.Arduino.ORDER_ATOMIC);
  var Number = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var STATUS = block.getFieldValue('STATUS');
 
 Blockly.Arduino.definitions_['actuator_rgbled595'] = ' #include <Shift595.h> \n #define   dataPin '+dropdown_pinD+'    \n  #define   latchPin '+dropdown_pinL+'  \n   #define   clockPin '+dropdown_pinC+'   \n   #define   numOfRegisters '+type+' \n  Shift595 Shifter(dataPin, latchPin, clockPin, numOfRegisters); \n ';
	
  var code = 'Shifter.setRegisterPin('+Number+', '+STATUS+'); \n ';

  return code;
};


Blockly.Arduino['LedStrip_WS2812B_init'] = function(block) {
	
  var numberstrip = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC); //"1";	
  var pin_ledrgb = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);  
  var numpixels = Blockly.Arduino.valueToCode(block, "PINR", Blockly.Arduino.ORDER_ATOMIC);
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
  var lumin = Blockly.Arduino.valueToCode(this, 'LEDI', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = ' #include <Adafruit_NeoPixel.h> \n #ifdef __AVR__ \n  #include <avr/power.h>  \n #endif \n ';
 Blockly.Arduino.definitions_['define_ledRGB_WS2812B_' + numberstrip] = 'Adafruit_NeoPixel pixels_'+numberstrip+ ' = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n';
 
 Blockly.Arduino.setups_['setup_ledRGB_WS2812B'+numberstrip] = 'pixels_'+numberstrip+'.begin();\n';
  

  var colorall = block.getFieldValue('RGBCOLOR');
  var red = parseInt(colorall.substring(1,3),16);
  var green = parseInt(colorall.substring(3,5),16);
  var blue = parseInt(colorall.substring(5,7),16)
  

  var code = 'pixels_'+numberstrip+'.setBrightness('+lumin+');\n pixels_'+numberstrip+'.setPixelColor('+pixel_number+'-1, pixels_'+numberstrip+'.Color('+red+','+green+','+blue+'));\n pixels_'+numberstrip+'.show();\n ';

  return code;
   
};
 
 Blockly.Arduino['LedStrip_WS2811B_init'] = function(block) {
	
  var numberstrip = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC); //"1";	
  var pin_ledrgb = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);  
  var numpixels = Blockly.Arduino.valueToCode(block, "PINR", Blockly.Arduino.ORDER_ATOMIC);
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
  var lumin = Blockly.Arduino.valueToCode(this, 'LEDI', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = ' #include <Adafruit_NeoPixel.h> \n #ifdef __AVR__ \n  #include <avr/power.h>  \n #endif \n ';
 Blockly.Arduino.definitions_['define_ledRGB_WS2812B_' + numberstrip] = 'Adafruit_NeoPixel pixels_'+numberstrip+ ' = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n';
 
 Blockly.Arduino.setups_['setup_ledRGB_WS2812B'+numberstrip] = 'pixels_'+numberstrip+'.begin();\n';
  

  var colorall = block.getFieldValue('RGBCOLOR');
  var red = parseInt(colorall.substring(1,3),16);
  var blue = parseInt(colorall.substring(3,5),16);
  var green = parseInt(colorall.substring(5,7),16)
  

  var code = 'pixels_'+numberstrip+'.setBrightness('+lumin+');\n pixels_'+numberstrip+'.setPixelColor('+pixel_number+'-1, pixels_'+numberstrip+'.Color('+red+','+green+','+blue+'));\n pixels_'+numberstrip+'.show();\n ';

  return code;
   
};

 Blockly.Arduino['LedStrip_WS2812B_init_top'] = function(block) {
	
  var numberstrip = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC); //"1";	
  var pin_ledrgb = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);  
  var numpixels = Blockly.Arduino.valueToCode(block, "PINR", Blockly.Arduino.ORDER_ATOMIC);
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
  
  var number = this.getFieldValue('RE_NUMBER');
  
 Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = ' #include <Adafruit_NeoPixel.h> \n #ifdef __AVR__ \n  #include <avr/power.h>  \n #endif \n long Pixcil = 0; \n long NeoPix = 0; \n';
Blockly.Arduino.definitions_['define_ledRGB_WS2812B_top' + numberstrip] = ' Adafruit_NeoPixel strip'+numberstrip+'('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800); \n  '+
  ' void theaterChaseD'+numberstrip+'(uint32_t color, int wait) {                \n '+
  '  for(int a=10; a>0; a--) {                   \n '+
  '    for(int b=3; b>0; b--) {                  \n '+
  '      strip'+numberstrip+'.clear();                              \n '+
  '      for(int c=b; c<strip'+numberstrip+'.numPixels(); c += 3) {                \n '+
  '        strip'+numberstrip+'.setPixelColor(c, color);                \n  '+
  '      }                \n '+
  '      strip'+numberstrip+'.show();                 \n  '+
  '      delay(wait);                  \n  '+
 '     }               \n  '+
 '   }               \n '+
 ' }                \n '+
 ' void colorWipeD'+numberstrip+'(uint32_t color, int wait) {               \n  '+
 '   for(int i=strip'+numberstrip+'.numPixels(); i>-1; i--) {                \n   '+
 '     strip'+numberstrip+'.setPixelColor(i, color);                         \n '+
 '     strip'+numberstrip+'.show();                                         \n  '+
 '     delay(wait);                                          \n   '+
 '   }                \n '+
 ' }               \n  '+
 ' void colorWipe'+numberstrip+'(uint32_t color, int wait) {               \n  '+
 '   for(int i=0; i<strip'+numberstrip+'.numPixels(); i++) {               \n    '+
 '     strip'+numberstrip+'.setPixelColor(i, color);                       \n   '+
 '     strip'+numberstrip+'.show();                                        \n   '+
 '     delay(wait);                                         \n    '+
 '   }               \n  '+
 ' }                \n '+
 ' void theaterChase'+numberstrip+'(uint32_t color, int wait) {              \n   '+
 '   for(int a=0; a<10; a++) {                \n    '+
 '     for(int b=0; b<3; b++) {               \n    '+
 '       strip'+numberstrip+'.clear();                       \n   '+
 '       for(int c=b; c<strip'+numberstrip+'.numPixels(); c += 3) {               \n  '+
 '         strip'+numberstrip+'.setPixelColor(c, color);              \n    '+
 '       }               \n  '+
 '       strip'+numberstrip+'.show();               \n    '+
 '       delay(wait);                \n    '+
 '     }              \n   '+
 '   }               \n  '+
 ' }               \n  '+
 ' void rainbow'+numberstrip+'(int wait) {               \n  '+
 '   for(long firstPixelHue = 0; firstPixelHue < 5*65536; firstPixelHue += 256) {              \n   '+
 '     for(int i=0; i<strip'+numberstrip+'.numPixels(); i++) {                \n  '+
 '       int pixelHue = firstPixelHue + (i * 65536L / strip'+numberstrip+'.numPixels());              \n    '+
 '       strip'+numberstrip+'.setPixelColor(i, strip'+numberstrip+'.gamma32(strip'+numberstrip+'.ColorHSV(pixelHue)));              \n   '+
 '     }               \n  '+
 '     strip'+numberstrip+'.show();                 \n  '+
 '     delay(wait);               \n    '+
 '   }              \n   '+
 ' }               \n  '+
 ' void theaterChaseRainbow'+numberstrip+'(int wait) {            \n     '+
 '   int firstPixelHue = 0;                   \n   '+
 '   for(int a=0; a<30; a++) {              \n    '+
 '     for(int b=0; b<3; b++) {                \n   '+
 '       strip'+numberstrip+'.clear();                      \n  '+
 '       for(int c=b; c<strip'+numberstrip+'.numPixels(); c += 3) {              \n   '+
 '         int      hue   = firstPixelHue + c * 65536L / strip'+numberstrip+'.numPixels();            \n     '+
 '         uint32_t color = strip'+numberstrip+'.gamma32(strip'+numberstrip+'.ColorHSV(hue));             \n      '+
 '         strip'+numberstrip+'.setPixelColor(c, color);               \n    '+
 '       }             \n    '+
 '       strip'+numberstrip+'.show();                      \n  '+        
 '       delay(wait);                               \n  '+
 '       firstPixelHue += 65536 / 90;                 \n  '+
 '     }              \n   '+
 '   }             \n    '+
 ' }             \n    '+
 '  \n ';


 Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'] = ' #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000) \n   clock_prescale_set(clock_div_1); \n #endif \n ';
  
 Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'+numberstrip] = '  strip'+numberstrip+'.begin();  \n  strip'+numberstrip+'.show();  \n  strip'+numberstrip+'.setBrightness(50);  \n';
  

  var colorall = block.getFieldValue('RGBCOLOR');
  var red = parseInt(colorall.substring(1,3),16);
  var green = parseInt(colorall.substring(3,5),16);
  var blue = parseInt(colorall.substring(5,7),16)
  
if(number == 0){
 var code = ' colorWipe'+numberstrip+'(strip'+numberstrip+'.Color('+red+','+green+','+blue+'), '+pixel_number+');   \n ';
}
 
if(number == 1){
 var code = ' colorWipeD'+numberstrip+'(strip'+numberstrip+'.Color('+red+','+green+','+blue+'), '+pixel_number+');   \n ';
}
if(number == 2){
 var code = ' theaterChase'+numberstrip+'(strip'+numberstrip+'.Color('+red+','+green+','+blue+'), '+pixel_number+');   \n ';
}
if(number == 3){
 var code = ' theaterChaseD'+numberstrip+'(strip'+numberstrip+'.Color('+red+','+green+','+blue+'), '+pixel_number+');   \n ';
}
if(number == 4){
 var code = ' theaterChaseRainbow'+numberstrip+'('+pixel_number+'); \n ';
}
if(number == 5){
  var code = 'rainbow'+numberstrip+'('+pixel_number+');   \n ';
}
if(number == 6){
  var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n  for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n   strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n    strip'+numberstrip+'.show(); \n      } \n   Pixcil = 0; \n   delay('+pixel_number+'); \n ';
}

if(number == 7){
  var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n   for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n     strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n     delay('+pixel_number+'); \n    strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n      strip'+numberstrip+'.show(); \n      } \n      Pixcil = 0; \n ';
 } 
 
if(number == 8){
  var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n   Pixcil = NeoPix; \n for (int count = 0; count < NeoPix; count++) { \n   strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n    delay('+pixel_number+'); \n    strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n      strip'+numberstrip+'.show(); \n   Pixcil = Pixcil - 1; \n   } \n     Pixcil = 0; \n ';
 }  
 if(number == 9){
  var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n  for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n   strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n    strip'+numberstrip+'.show(); \n      } \n   Pixcil = 0; \n  delay('+pixel_number+'); \n  ';
}
 if(number == 10){ 
 var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n  Pixcil = NeoPix + 1; \n   for (int count = 0; count < NeoPix; count++) { \n    for (int count = 0; count < NeoPix; count++) { \n       Pixcil = Pixcil - 1; \n       strip'+numberstrip+'.setBrightness(255); \n        strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n       strip'+numberstrip+'.show(); \n       delay('+pixel_number+'); \n      strip'+numberstrip+'.setBrightness(255); \n       strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n        strip'+numberstrip+'.show(); \n        } \n     strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n      strip'+numberstrip+'.show(); \n      Pixcil = NeoPix + (Pixcil + 1); \n   } \n   Pixcil = 0; \n  ';
}
 if(number == 11){ 
 var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n     for (int count = 0; count < '+numpixels+'; count++) { \n     for (int count = 0; count < NeoPix; count++) { \n      strip'+numberstrip+'.setBrightness(255); \n       strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n        strip'+numberstrip+'.show(); \n         delay('+pixel_number+'); \n       strip'+numberstrip+'.setBrightness(255); \n        strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n       strip'+numberstrip+'.show(); \n       Pixcil = Pixcil + 1; \n    } \n    strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n      Pixcil = 0; \n     NeoPix = NeoPix - 1; \n   } \n   Pixcil = 0; \n   ';
} 
 if(number == 12){ 
 var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n     for (int count = 0; count < NeoPix; count++) { \n     Pixcil = Pixcil + 1; \n     strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n      delay('+pixel_number+'); \n } \n   Pixcil = 0;  \n    ';
} 
 if(number == 13){ 
 var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n       Pixcil = NeoPix; \n   for (int count = 0; count < NeoPix; count++) { \n    strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n     delay('+pixel_number+'); \n     Pixcil = Pixcil - 1; \n   } \n   Pixcil = 0; \n       ';
} 
  return code;
 
};

 Blockly.Arduino['LedStrip_WS2811B_init_top'] = function(block) {
	
  var numberstrip = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC); //"1";	
  var pin_ledrgb = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);  
  var numpixels = Blockly.Arduino.valueToCode(block, "PINR", Blockly.Arduino.ORDER_ATOMIC);
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
  
  var number = this.getFieldValue('RE_NUMBER');
  
 Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = ' #include <Adafruit_NeoPixel.h> \n #ifdef __AVR__ \n  #include <avr/power.h>  \n #endif \n long Pixcil = 0; \n long NeoPix = 0; \n';
Blockly.Arduino.definitions_['define_ledRGB_WS2812B_top' + numberstrip] = ' Adafruit_NeoPixel strip'+numberstrip+'('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800); \n  '+
  ' void theaterChaseD'+numberstrip+'(uint32_t color, int wait) {                \n '+
  '  for(int a=10; a>0; a--) {                   \n '+
  '    for(int b=3; b>0; b--) {                  \n '+
  '      strip'+numberstrip+'.clear();                              \n '+
  '      for(int c=b; c<strip'+numberstrip+'.numPixels(); c += 3) {                \n '+
  '        strip'+numberstrip+'.setPixelColor(c, color);                \n  '+
  '      }                \n '+
  '      strip'+numberstrip+'.show();                 \n  '+
  '      delay(wait);                  \n  '+
 '     }               \n  '+
 '   }               \n '+
 ' }                \n '+
 ' void colorWipeD'+numberstrip+'(uint32_t color, int wait) {               \n  '+
 '   for(int i=strip'+numberstrip+'.numPixels(); i>-1; i--) {                \n   '+
 '     strip'+numberstrip+'.setPixelColor(i, color);                         \n '+
 '     strip'+numberstrip+'.show();                                         \n  '+
 '     delay(wait);                                          \n   '+
 '   }                \n '+
 ' }               \n  '+
 ' void colorWipe'+numberstrip+'(uint32_t color, int wait) {               \n  '+
 '   for(int i=0; i<strip'+numberstrip+'.numPixels(); i++) {               \n    '+
 '     strip'+numberstrip+'.setPixelColor(i, color);                       \n   '+
 '     strip'+numberstrip+'.show();                                        \n   '+
 '     delay(wait);                                         \n    '+
 '   }               \n  '+
 ' }                \n '+
 ' void theaterChase'+numberstrip+'(uint32_t color, int wait) {              \n   '+
 '   for(int a=0; a<10; a++) {                \n    '+
 '     for(int b=0; b<3; b++) {               \n    '+
 '       strip'+numberstrip+'.clear();                       \n   '+
 '       for(int c=b; c<strip'+numberstrip+'.numPixels(); c += 3) {               \n  '+
 '         strip'+numberstrip+'.setPixelColor(c, color);              \n    '+
 '       }               \n  '+
 '       strip'+numberstrip+'.show();               \n    '+
 '       delay(wait);                \n    '+
 '     }              \n   '+
 '   }               \n  '+
 ' }               \n  '+
 ' void rainbow'+numberstrip+'(int wait) {               \n  '+
 '   for(long firstPixelHue = 0; firstPixelHue < 5*65536; firstPixelHue += 256) {              \n   '+
 '     for(int i=0; i<strip'+numberstrip+'.numPixels(); i++) {                \n  '+
 '       int pixelHue = firstPixelHue + (i * 65536L / strip'+numberstrip+'.numPixels());              \n    '+
 '       strip'+numberstrip+'.setPixelColor(i, strip'+numberstrip+'.gamma32(strip'+numberstrip+'.ColorHSV(pixelHue)));              \n   '+
 '     }               \n  '+
 '     strip'+numberstrip+'.show();                 \n  '+
 '     delay(wait);               \n    '+
 '   }              \n   '+
 ' }               \n  '+
 ' void theaterChaseRainbow'+numberstrip+'(int wait) {            \n     '+
 '   int firstPixelHue = 0;                   \n   '+
 '   for(int a=0; a<30; a++) {              \n    '+
 '     for(int b=0; b<3; b++) {                \n   '+
 '       strip'+numberstrip+'.clear();                      \n  '+
 '       for(int c=b; c<strip'+numberstrip+'.numPixels(); c += 3) {              \n   '+
 '         int      hue   = firstPixelHue + c * 65536L / strip'+numberstrip+'.numPixels();            \n     '+
 '         uint32_t color = strip'+numberstrip+'.gamma32(strip'+numberstrip+'.ColorHSV(hue));             \n      '+
 '         strip'+numberstrip+'.setPixelColor(c, color);               \n    '+
 '       }             \n    '+
 '       strip'+numberstrip+'.show();                      \n  '+        
 '       delay(wait);                               \n  '+
 '       firstPixelHue += 65536 / 90;                 \n  '+
 '     }              \n   '+
 '   }             \n    '+
 ' }             \n    '+
 '  \n ';


 Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'] = ' #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000) \n   clock_prescale_set(clock_div_1); \n #endif \n ';
  
 Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'+numberstrip] = '  strip'+numberstrip+'.begin();  \n  strip'+numberstrip+'.show();  \n  strip'+numberstrip+'.setBrightness(50);  \n';
  

  var colorall = block.getFieldValue('RGBCOLOR');
  var red = parseInt(colorall.substring(1,3),16);
  var blue = parseInt(colorall.substring(3,5),16);
  var green = parseInt(colorall.substring(5,7),16)
  
if(number == 0){
 var code = ' colorWipe'+numberstrip+'(strip'+numberstrip+'.Color('+red+','+green+','+blue+'), '+pixel_number+');   \n ';
}
 
if(number == 1){
 var code = ' colorWipeD'+numberstrip+'(strip'+numberstrip+'.Color('+red+','+green+','+blue+'), '+pixel_number+');   \n ';
}
if(number == 2){
 var code = ' theaterChase'+numberstrip+'(strip'+numberstrip+'.Color('+red+','+green+','+blue+'), '+pixel_number+');   \n ';
}
if(number == 3){
 var code = ' theaterChaseD'+numberstrip+'(strip'+numberstrip+'.Color('+red+','+green+','+blue+'), '+pixel_number+');   \n ';
}
if(number == 4){
 var code = ' theaterChaseRainbow'+numberstrip+'('+pixel_number+'); \n ';
}
if(number == 5){
  var code = 'rainbow'+numberstrip+'('+pixel_number+');   \n ';
}
if(number == 6){
  var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n  for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n   strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n    strip'+numberstrip+'.show(); \n      } \n   Pixcil = 0; \n   delay('+pixel_number+'); \n ';
}

if(number == 7){
  var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n   for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n     strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n     delay('+pixel_number+'); \n    strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n      strip'+numberstrip+'.show(); \n      } \n      Pixcil = 0; \n ';
 } 
 
if(number == 8){
  var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n   Pixcil = NeoPix; \n for (int count = 0; count < NeoPix; count++) { \n   strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n    delay('+pixel_number+'); \n    strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n      strip'+numberstrip+'.show(); \n   Pixcil = Pixcil - 1; \n   } \n     Pixcil = 0; \n ';
 }  
 if(number == 9){
  var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n  for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n   strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n    strip'+numberstrip+'.show(); \n      } \n   Pixcil = 0; \n  delay('+pixel_number+'); \n  ';
}
 if(number == 10){ 
 var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n  Pixcil = NeoPix + 1; \n   for (int count = 0; count < NeoPix; count++) { \n    for (int count = 0; count < NeoPix; count++) { \n       Pixcil = Pixcil - 1; \n       strip'+numberstrip+'.setBrightness(255); \n        strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n       strip'+numberstrip+'.show(); \n       delay('+pixel_number+'); \n      strip'+numberstrip+'.setBrightness(255); \n       strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n        strip'+numberstrip+'.show(); \n        } \n     strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n      strip'+numberstrip+'.show(); \n      Pixcil = NeoPix + (Pixcil + 1); \n   } \n   Pixcil = 0; \n  ';
}
 if(number == 11){ 
 var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n     for (int count = 0; count < '+numpixels+'; count++) { \n     for (int count = 0; count < NeoPix; count++) { \n      strip'+numberstrip+'.setBrightness(255); \n       strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n        strip'+numberstrip+'.show(); \n         delay('+pixel_number+'); \n       strip'+numberstrip+'.setBrightness(255); \n        strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n       strip'+numberstrip+'.show(); \n       Pixcil = Pixcil + 1; \n    } \n    strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n      Pixcil = 0; \n     NeoPix = NeoPix - 1; \n   } \n   Pixcil = 0; \n   ';
} 
 if(number == 12){ 
 var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n     for (int count = 0; count < NeoPix; count++) { \n     Pixcil = Pixcil + 1; \n     strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n      delay('+pixel_number+'); \n } \n   Pixcil = 0;  \n    ';
} 
 if(number == 13){ 
 var code = ' Pixcil = 0; \n NeoPix = '+numpixels+'; \n       Pixcil = NeoPix; \n   for (int count = 0; count < NeoPix; count++) { \n    strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n     delay('+pixel_number+'); \n     Pixcil = Pixcil - 1; \n   } \n   Pixcil = 0; \n       ';
} 
  return code;
 
};
 Blockly.Arduino['LedStrip_WS2812B_initRGB'] = function(block) {
	
  var numberstrip = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC); //"1";	
  var pin_ledrgb = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);  
  var numpixels = Blockly.Arduino.valueToCode(block, "PINR", Blockly.Arduino.ORDER_ATOMIC);
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
  var lumin = "255";
  
  Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = ' #include <Adafruit_NeoPixel.h> \n #ifdef __AVR__ \n  #include <avr/power.h>  \n #endif \n ';
 Blockly.Arduino.definitions_['define_ledRGB_WS2812B_' + numberstrip] = 'Adafruit_NeoPixel pixels_'+numberstrip+ ' = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n';
 
 Blockly.Arduino.setups_['setup_ledRGB_WS2812B'+numberstrip] = 'pixels_'+numberstrip+'.begin();\n';
  

  var red = Blockly.Arduino.valueToCode(block, "Red", Blockly.Arduino.ORDER_ATOMIC); 
  var green = Blockly.Arduino.valueToCode(block, "Green", Blockly.Arduino.ORDER_ATOMIC); 
  var blue = Blockly.Arduino.valueToCode(block, "Blue", Blockly.Arduino.ORDER_ATOMIC); 
  

  var code = 'pixels_'+numberstrip+'.setBrightness('+lumin+');\n pixels_'+numberstrip+'.setPixelColor('+pixel_number+'-1, pixels_'+numberstrip+'.Color('+red+','+green+','+blue+'));\n pixels_'+numberstrip+'.show();\n ';

  return code;
   
};
  
   Blockly.Arduino['LedStrip_WS2811B_initRGB'] = function(block) {
	
  var numberstrip = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC); //"1";	
  var pin_ledrgb = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);  
  var numpixels = Blockly.Arduino.valueToCode(block, "PINR", Blockly.Arduino.ORDER_ATOMIC);
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
  var lumin = "255";
  
  Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = ' #include <Adafruit_NeoPixel.h> \n #ifdef __AVR__ \n  #include <avr/power.h>  \n #endif \n ';
 Blockly.Arduino.definitions_['define_ledRGB_WS2812B_' + numberstrip] = 'Adafruit_NeoPixel pixels_'+numberstrip+ ' = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n';
 
 Blockly.Arduino.setups_['setup_ledRGB_WS2812B'+numberstrip] = 'pixels_'+numberstrip+'.begin();\n';
  

  var red = Blockly.Arduino.valueToCode(block, "Red", Blockly.Arduino.ORDER_ATOMIC); 
  var blue = Blockly.Arduino.valueToCode(block, "Green", Blockly.Arduino.ORDER_ATOMIC); 
  var green = Blockly.Arduino.valueToCode(block, "Blue", Blockly.Arduino.ORDER_ATOMIC); 
  

  var code = 'pixels_'+numberstrip+'.setBrightness('+lumin+');\n pixels_'+numberstrip+'.setPixelColor('+pixel_number+'-1, pixels_'+numberstrip+'.Color('+red+','+green+','+blue+'));\n pixels_'+numberstrip+'.show();\n ';

  return code;
   
};
 
Blockly.Arduino['ds1990_Write'] = function(block) {
  
  var number = this.getFieldValue('RE_NUMBER');
  var writenumber1 = Blockly.Arduino.valueToCode(block, 'Writecounter', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber2 = Blockly.Arduino.valueToCode(block, 'Writecounter1', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber3 = Blockly.Arduino.valueToCode(block, 'Writecounter2', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber4 = Blockly.Arduino.valueToCode(block, 'Writecounter3', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber5 = Blockly.Arduino.valueToCode(block, 'Writecounter4', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber6 = Blockly.Arduino.valueToCode(block, 'Writecounter5', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber7 = Blockly.Arduino.valueToCode(block, 'Writecounter6', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber8 = Blockly.Arduino.valueToCode(block, 'Writecounter7', Blockly.Arduino.ORDER_ATOMIC);
  
Blockly.Arduino.definitions_['include_ds1990_Write'] = '#include <OneWire.h> \n #define pin '+number+'    \n OneWire ibutton (pin);  \n byte addr[8];  \n int writeByte(byte data){ \n  int data_bit; \n for(data_bit=0; data_bit<8; data_bit++){ \n  if (data & 1){ \n     digitalWrite(pin, LOW); pinMode(pin, OUTPUT); \n     delayMicroseconds(60); \n     pinMode(pin, INPUT); digitalWrite(pin, HIGH); \n    delay(10);  \n   } else { \n     digitalWrite(pin, LOW); pinMode(pin, OUTPUT); \n      pinMode(pin, INPUT); digitalWrite(pin, HIGH); \n      delay(10); \n   } \n   data = data >> 1; \n } \n  return 0; \n} \n';
Blockly.Arduino.setups_['setup_include_ds1990']='Serial.begin(9600);\n';
var code = ' if ( !ibutton.search(addr) ) { \n return; \n } \n ibutton.skip(); \n ibutton.reset(); \n ibutton.write(0x33); \n     ibutton.skip(); \n     ibutton.reset(); \n     ibutton.write(0xD1); \n     digitalWrite(pin, LOW);  \n     pinMode(pin, OUTPUT);  \n     delayMicroseconds(60); \n     pinMode(pin, INPUT);  \n     digitalWrite(pin, HIGH);  \n     delay(10); \n     byte newID[8] = {0x44, 0x0F, 0xC8, 0x0B, 0x00, 0x00, 0x00, 0x2C}; \n  newID[0] = '+writenumber1+'; \n  newID[1] = '+writenumber2+'; \n  newID[2] = '+writenumber3+'; \n  newID[3] = '+writenumber4+'; \n  newID[4] = '+writenumber5+'; \n  newID[5] = '+writenumber6+'; \n  newID[6] = '+writenumber7+'; \n  newID[7] = '+writenumber8+'; \n    Serial.println();  \n     ibutton.skip(); \n     ibutton.reset(); \n     ibutton.write(0xD5); \n     for (byte x = 0; x<8; x++){ \n       writeByte(newID[x]); \n       Serial.print("*"); \n     } \n     ibutton.reset(); \n     ibutton.write(0xD1); \n     digitalWrite(pin, LOW);  \n     pinMode(pin, OUTPUT);  \n     delayMicroseconds(10); \n     pinMode(pin, INPUT);  \n     digitalWrite(pin, HIGH);  \n     delay(10); \n Serial.print(" "); \n   ibutton.skip();ibutton.reset();ibutton.write(0x33); \n Serial.print("Code recorded:"); \n     for (byte x=0; x<8; x++){ \n       Serial.print(" "); \n     Serial.print(ibutton.read()); \n    } \n   Serial.println(" ok"); \n delay(2000); \n  \n';
return code;
};

Blockly.Arduino['ds1990_Read'] = function(block) {
   
   var number = this.getFieldValue('RE_NUMBER');  
   var numberpin = this.getFieldValue('NUMBER'); 
  var writenumber1 = Blockly.Arduino.valueToCode(block, 'Writecounter', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber2 = Blockly.Arduino.valueToCode(block, 'Writecounter1', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber3 = Blockly.Arduino.valueToCode(block, 'Writecounter2', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber4 = Blockly.Arduino.valueToCode(block, 'Writecounter3', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber5 = Blockly.Arduino.valueToCode(block, 'Writecounter4', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber6 = Blockly.Arduino.valueToCode(block, 'Writecounter5', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber7 = Blockly.Arduino.valueToCode(block, 'Writecounter6', Blockly.Arduino.ORDER_ATOMIC);
  var writenumber8 = Blockly.Arduino.valueToCode(block, 'Writecounter7', Blockly.Arduino.ORDER_ATOMIC);
	 
   Blockly.Arduino.definitions_['include_ds1990_Write1'] = 'long NaN = 0; \n #include <OneWire.h> \n #define pin '+numberpin+'    \n OneWire ibutton (pin);  \n byte addr[8];  \n int writeByte(byte data){ \n  int data_bit; \n for(data_bit=0; data_bit<8; data_bit++){ \n  if (data & 1){ \n     digitalWrite(pin, LOW); pinMode(pin, OUTPUT); \n     delayMicroseconds(60); \n     pinMode(pin, INPUT); digitalWrite(pin, HIGH); \n    delay(10);  \n   } else { \n     digitalWrite(pin, LOW); pinMode(pin, OUTPUT); \n      pinMode(pin, INPUT); digitalWrite(pin, HIGH); \n      delay(10); \n   } \n   data = data >> 1; \n } \n  return 0; \n} \n';

   var code = 'if ( !ibutton.search(addr) ) { \n return; \n } \n ibutton.skip(); \n '+writenumber1+' = addr[0]; \n '+writenumber2+' = addr[1]; \n '+writenumber3+' = addr[2]; \n '+writenumber4+' = addr[3]; \n '+writenumber5+' = addr[4]; \n '+writenumber6+' = addr[5]; \n '+writenumber7+' = addr[6]; \n '+writenumber8+' = addr[7]; \n';
  
  return code;
};

 Blockly.Arduino['initread_acs712']=function(block){
    var value_dropdown = block.getFieldValue('_dropdown');
    var valuepin_text = block.getFieldValue('pin_text');
 
    Blockly.Arduino.includes_['includes_initread_acs712'] = '#include <ACS712.h> \n ACS712 sensor('+value_dropdown+', '+valuepin_text+');  \n  ';
    Blockly.Arduino.setups_['setups_initread_acs712']='sensor.calibrate();  \n ';
    var code = 'sensor.getCurrentDC()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino['pin_botton_pro']=function(block){
    var idn_text = block.getFieldValue('idn_text');
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
 
 
Blockly.Arduino['pin_botton_pro2']=function(block){
    var idn_text = block.getFieldValue('idn_text');
	var bb_dropdown = block.getFieldValue('bb_dropdown');
 
	  var bot_statement = Blockly.Arduino.statementToCode(block, 'bot_statement');
	  var bot_statement1 = Blockly.Arduino.statementToCode(block, 'bot_statement1');
	
	Blockly.Arduino.includes_['setups_pin_botton_pro'+idn_text]=' int bt'+idn_text+' = 0; \n  int bn'+idn_text+' = 0; \n  int bc'+idn_text+' = 1; \n  ';
    Blockly.Arduino.setups_['setups_pin_botton_pro'+idn_text]='   pinMode('+idn_text+', INPUT);  \n';

	if(bb_dropdown == 0){
	var code = '  \n   '+
	  '  if (digitalRead('+idn_text+') == 1 & bn'+idn_text+' == 0) { \n   '+
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
   '  if (digitalRead('+idn_text+') == 0 & bn'+idn_text+' == 1) { \n   '+
   '    bn'+idn_text+' = 0; \n   '+
    ' } \n   '+
   '   	\n	';
	}else{
	var code = '  \n   '+
   '  if (digitalRead('+idn_text+') == 1 & bt'+idn_text+' == 0) { \n       '+
    '  bt'+idn_text+' = 1; \n       '+
   '  '+bot_statement+'   \n       '+
   ' } \n       '+
   ' if (digitalRead('+idn_text+') == 0 & bt'+idn_text+' == 1) { \n       '+
   '   bt'+idn_text+' = 0; \n       '+
   '  '+bot_statement1+'   \n       '+
   ' } \n       '+
    '  \n  ';	
	} 
	return code
};

Blockly.Arduino['rfid_init'] = function(block) {

   var pin_RST = Blockly.Arduino.valueToCode(block, 'PIN_RST', Blockly.Arduino.ORDER_ATOMIC);   
   var pin_SDA = Blockly.Arduino.valueToCode(block, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);   
   var PIN_KOD = Blockly.Arduino.valueToCode(block, 'PIN_KOD', Blockly.Arduino.ORDER_ATOMIC);
	
   Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>';
   Blockly.Arduino.definitions_['define_MRFC522'] = '#include <MFRC522.h>';
    
   Blockly.Arduino.definitions_['define_mrfc522'] = 'MFRC522 mfrc522('+pin_SDA+','+pin_RST+'); \n byte cardx[4]= {0x3F,0x01,0x23,0x44}; \n String cardreaded(byte *buffer,byte bufferSize) \n { \n String card=""; \n for (byte i=0; i<bufferSize; i++) \n { \n card+=String(buffer[i]<0x10 ? " 0" : " "); \n card+=String(buffer[i],HEX); \n } \n return card; \n  } \n ';
 
   Blockly.Arduino.setups_['setup_spi']='SPI.begin();\n ';
   Blockly.Arduino.setups_['setup_mrfc522']='mfrc522.PCD_Init();\n';

  var code = ' if (mfrc522.PICC_ReadCardSerial() == 1 | mfrc522.PICC_IsNewCardPresent() == 1) { \n  '+PIN_KOD+' = cardreaded(mfrc522.uid.uidByte, mfrc522.uid.size); \n  } \n   ';
 // Serial.println(mfrc522.PICC_ReadCardSerial()); \n   Serial.println(mfrc522.PICC_IsNewCardPresent()); \n 
  return code;
};

Blockly.Arduino['Init_Keypad4x4'] = function(block) {
  var pin_r1 = Blockly.Arduino.valueToCode(block, 'PIN_R1', Blockly.Arduino.ORDER_ATOMIC); 
  var pin_r2 = Blockly.Arduino.valueToCode(block, 'PIN_R2', Blockly.Arduino.ORDER_ATOMIC); 
  var pin_r3 = Blockly.Arduino.valueToCode(block, 'PIN_R3', Blockly.Arduino.ORDER_ATOMIC);
  var pin_r4 = Blockly.Arduino.valueToCode(block, 'PIN_R4', Blockly.Arduino.ORDER_ATOMIC);
  var pin_c1 = Blockly.Arduino.valueToCode(block, 'PIN_C1', Blockly.Arduino.ORDER_ATOMIC);
  var pin_c2 = Blockly.Arduino.valueToCode(block, 'PIN_C2', Blockly.Arduino.ORDER_ATOMIC);
  var pin_c3 = Blockly.Arduino.valueToCode(block, 'PIN_C3', Blockly.Arduino.ORDER_ATOMIC);
  var pin_c4 = Blockly.Arduino.valueToCode(block, 'PIN_C4', Blockly.Arduino.ORDER_ATOMIC);
  var PIN_RKOD = Blockly.Arduino.valueToCode(block, 'PIN_RKOD', Blockly.Arduino.ORDER_ATOMIC);
   
  Blockly.Arduino.definitions_['include_keypad'] = '#include <Keypad.h>';
  Blockly.Arduino.definitions_['init_keypad'] = 'byte Pins_Rows[]={'+pin_r4+','+pin_r3+','+pin_r2+','+pin_r1+'};\n'+
  'byte Pins_Columns[]={'+pin_c4+','+pin_c3+','+pin_c2+','+pin_c1+'};\n'+
  'char keys[4][4]={{\'1\',\'2\',\'3\',\'A\'},{\'4\',\'5\',\'6\',\'B\'},{\'7\',\'8\',\'9\',\'C\'},{\'*\',\'0\',\'#\',\'D\'}};\n'+
  'Keypad Keyboard= Keypad(makeKeymap(keys),Pins_Rows,Pins_Columns,4,4);\n'; 	 	 
  var code = ''+PIN_RKOD+' = Keyboard.getKey();\n';
  return code;
};

Blockly.Arduino['Initread_fingerprinting'] = function(block) {
   
  Blockly.Arduino.definitions_['include_Adafruit_Sensor55'] = '#include <Adafruit_Fingerprint.h> \n SoftwareSerial mySerial(2, 3);   \n  Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial); \n ';
   	 
  Blockly.Arduino.definitions_['include_Adafruit_Sensor55'] = ' \n uint8_t id; \n   uint8_t readnumber(void) { \n   uint8_t num = 0; \n   while (num == 0) { \n   while (! Serial.available()); \n    num = Serial.parseInt(); \n  } \n  return num; \n  } \n ';
  Blockly.Arduino.setups_['include_Adafruit_Sensor55'] = ' Serial.begin(9600); \n  while (!Serial);  \n  delay(100); \n  Serial.println("ArduBlock.ru"); \n Serial.println("Adafruit Fingerprint sensor enrollment"); \n  finger.begin(57600); \n if (finger.verifyPassword()) { \n    Serial.println("Found fingerprint sensor!"); \n } else { \n   Serial.println("Did not find fingerprint sensor :("); \n   while (1) { delay(1); } \n } \n ';
  	 	 
  var code=' Serial.println("Ready to enroll a fingerprint!"); \n    Serial.println("Please type in the ID # (from 1 to 127) you want to save this finger as..."); \n   id = readnumber(); \n    if (id == 0) { \n      return; \n    } \n    Serial.print("Enrolling ID #"); \n    Serial.println(id); \n   while (!  getFingerprintEnroll() ); \n  } \n uint8_t getFingerprintEnroll() { \n    int p = -1; \n    Serial.print("Waiting for valid finger to enroll as #"); Serial.println(id); \n   while (p != FINGERPRINT_OK) { \n     p = finger.getImage(); \n     switch (p) { \n     case FINGERPRINT_OK: \n      Serial.println("Image taken"); \n       break; \n     case FINGERPRINT_NOFINGER: \n       Serial.println("."); \n        break; \n      case FINGERPRINT_PACKETRECIEVEERR: \n        Serial.println("Communication error"); \n        break; \n      case FINGERPRINT_IMAGEFAIL: \n        Serial.println("Imaging error"); \n        break; \n     default: \n       Serial.println("Unknown error"); \n       break; \n      }\n }\n p = finger.image2Tz(1); \n   switch (p) { \n     case FINGERPRINT_OK: \n        Serial.println("Image converted"); \n        break; \n     case FINGERPRINT_IMAGEMESS: \n       Serial.println("Image too messy"); \n       return p; \n     case FINGERPRINT_PACKETRECIEVEERR: \n       Serial.println("Communication error"); \n       return p; \n     case FINGERPRINT_FEATUREFAIL: \n       Serial.println("Could not find fingerprint features"); \n       return p; \n    case FINGERPRINT_INVALIDIMAGE: \n      Serial.println("Could not find fingerprint features"); \n       return p; \n     default: \n        Serial.println("Unknown error"); \n        return p; \n    } \n    Serial.println("Remove finger"); \n   delay(2000); \n   p = 0; \n   while (p != FINGERPRINT_NOFINGER) { \n     p = finger.getImage(); \n   } \n    Serial.print("ID "); Serial.println(id); \n    p = -1; \n    Serial.println("Place same finger again"); \n   while (p != FINGERPRINT_OK) { \n    p = finger.getImage(); \n    switch (p) { \n    case FINGERPRINT_OK: \n       Serial.println("Image taken"); \n       break; \n    case FINGERPRINT_NOFINGER: \n      Serial.print("."); \n       break; \n     case FINGERPRINT_PACKETRECIEVEERR: \n      Serial.println("Communication error"); \n        break; \n     case FINGERPRINT_IMAGEFAIL: \n       Serial.println("Imaging error"); \n       break; \n    default: \n       Serial.println("Unknown error"); \n       break; \n     } \n    } \n    p = finger.image2Tz(2); \n   switch (p) { \n     case FINGERPRINT_OK: \n      Serial.println("Image converted"); \n      break; \n    case FINGERPRINT_IMAGEMESS: \n       Serial.println("Image too messy"); \n       return p; \n     case FINGERPRINT_PACKETRECIEVEERR: \n        Serial.println("Communication error"); \n        return p; \n     case FINGERPRINT_FEATUREFAIL: \n       Serial.println("Could not find fingerprint features"); \n      return p; \n    case FINGERPRINT_INVALIDIMAGE: \n      Serial.println("Could not find fingerprint features"); \n      return p; \n     default: \n       Serial.println("Unknown error"); \n        return p; \n    } \n    Serial.print("Creating model for #");  Serial.println(id); \n     p = finger.createModel(); \n    if (p == FINGERPRINT_OK) { \n      Serial.println("Prints matched!"); \n    } else if (p == FINGERPRINT_PACKETRECIEVEERR) { \n      Serial.println("Communication error"); \n      return p; \n    } else if (p == FINGERPRINT_ENROLLMISMATCH) { \n      Serial.println("Fingerprints did not match"); \n     return p; \n    } else { \n      Serial.println("Unknown error"); \n      return p; \n   }    \n     Serial.print("ID "); Serial.println(id); \n    p = finger.storeModel(id); \n    if (p == FINGERPRINT_OK) { \n      Serial.println("Stored!"); \n   } else if (p == FINGERPRINT_PACKETRECIEVEERR) { \n      Serial.println("Communication error"); \n     return p; \n    } else if (p == FINGERPRINT_BADLOCATION) { \n      Serial.println("Could not store in that location"); \n      return p; \n    } else if (p == FINGERPRINT_FLASHERR) { \n      Serial.println("Error writing to flash"); \n      return p; \n    } else { \n      Serial.println("Unknown error"); \n      return p; \n    }    \n    ';
  return code;
};

Blockly.Arduino['Initread_fingerprintingD'] = function(block) {
  var PIN_RKOD = Blockly.Arduino.valueToCode(block, 'PIN_RKOD', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_Adafruit_Sensor66'] = '#include <Adafruit_Fingerprint.h> \n SoftwareSerial mySerial(2, 3);   \n  Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial); \n ';
  Blockly.Arduino.definitions_['include_Adafruit_Sensor66'] = '#include <Adafruit_Fingerprint.h> \n SoftwareSerial mySerial(2, 3);   \n  Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial); \n ';
  
  Blockly.Arduino.setups_['include_Adafruit_Sensor66'] = ' finger.begin(57600); \n delay(5); \n   finger.getTemplateCount(); \n';
  	 	 
  var code='  uint8_t p = finger.getImage(); \n  if (p != FINGERPRINT_OK)  return -1; \n   p = finger.image2Tz(); \n   if (p != FINGERPRINT_OK)  return -1; \n   p = finger.fingerFastSearch(); \n  if (p != FINGERPRINT_OK)  return -1; \n   '+PIN_RKOD+' = finger.fingerID; \n';
  return code; 	 

};

Blockly.Arduino['tensorsensor1'] = function(block) {
   var PIN_RKOD = Blockly.Arduino.valueToCode(block, 'PIN_RKOD', Blockly.Arduino.ORDER_ATOMIC);
   Blockly.Arduino.definitions_['include_Adafruit_Sensor2'] = ' #include "HX711.h" \n #define calibration_factor -7050.0  \n  #define DOUT  3 \n #define CLK  2 \n HX711 scale(DOUT, CLK); \n ';
   Blockly.Arduino.setups_['include_Adafruit_Sensor2'] = 'scale.set_scale(calibration_factor); \n scale.tare(); \n ';	 
   var code=' '+PIN_RKOD+' = scale.get_units() * 45.35 / 5; \n ';
   return code;
};

Blockly.Arduino['actuator_tonedure'] = function(block) {
  var dropdown_pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var duration = Blockly.Arduino.valueToCode(this, 'DUR', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  
  var code = 'tone('+dropdown_pin+','+value+','+duration+'); \n delay('+duration+');\n';
  return code;
};

Blockly.Arduino['frequency'] = function(block) {
  var note = this.getFieldValue('NOTE');
  var octave = this.getFieldValue('OCTAVE');
  var code;
  
  switch(note)
  {
	  case 'C':
				switch(octave)
				{
				  case '2':
							code='65';
							break;
				  case '3':
							code='131';
							break;
				  case '4':
							code='262';
							break;
				  case '5':
							code='523';
							break;
				  case '6':
							code='1046';
							break;
				  case '7':
							code='2093';
							break;
				  case '8':
							code='4186';
							break;
				  default:
							code='4186';
						    break;					
				}
	    break;
	  case 'C#':
				switch(octave)
				{
				  case '2':
							code='69';
							break;
				  case '3':
							code='139';
							break;
				  case '4':
							code='277';
							break;
				  case '5':
							code='554';
							break;
				  case '6':
							code='1109';
							break;
				  case '7':
							code='2217';
							break;
				  case '8':
							code='4435';
							break;
				  default:
							code='4435';
						    break;					
				}
	    break;		
		case 'D':
				switch(octave)
				{
				  case '2':
							code='73';
							break;
				  case '3':
							code='147';
							break;
				  case '4':
							code='294';
							break;
				  case '5':
							code='587';
							break;
				  case '6':
							code='1175';
							break;
				  case '7':
							code='2349';
							break;
				  case '8':
							code='4699';
							break;
				  default:
							code='4699';
						    break;					
				}
	    break;		
		
		case 'D#':
				switch(octave)
				{
				  case '2':
							code='78';
							break;
				  case '3':
							code='156';
							break;
				  case '4':
							code='311';
							break;
				  case '5':
							code='622';
							break;
				  case '6':
							code='1245';
							break;
				  case '7':
							code='2489';
							break;
				  case '8':
							code='4978';
							break;
				  default:
							code='4978';
						    break;					
				}
	    break;				
		case 'E':
				switch(octave)
				{
				  case '2':
							code='82';
							break;
				  case '3':
							code='165';
							break;
				  case '4':
							code='330';
							break;
				  case '5':
							code='659';
							break;
				  case '6':
							code='1319';
							break;
				  case '7':
							code='2637';
							break;
				  case '8':
							code='5274';
							break;
				  default:
							code='5274';
						    break;					
				}
	    break;				
		case 'F':
				switch(octave)
				{
				  case '2':
							code='87';
							break;
				  case '3':
							code='175';
							break;
				  case '4':
							code='349';
							break;
				  case '5':
							code='698';
							break;
				  case '6':
							code='1397';
							break;
				  case '7':
							code='2794';
							break;
				  case '8':
							code='5588';
							break;
				  default:
							code='5588';
						    break;					
				}
	    break;			
		case 'F#':
				switch(octave)
				{
				  case '2':
							code='92';
							break;
				  case '3':
							code='185';
							break;
				  case '4':
							code='370';
							break;
				  case '5':
							code='740';
							break;
				  case '6':
							code='1480';
							break;
				  case '7':
							code='2960';
							break;
				  case '8':
							code='5920';
							break;
				  default:
							code='5920';
						    break;					
				}
	    break;					
			case 'G':
				switch(octave)
				{
				  case '2':
							code='98';
							break;
				  case '3':
							code='196';
							break;
				  case '4':
							code='392';
							break;
				  case '5':
							code='784';
							break;
				  case '6':
							code='1568';
							break;
				  case '7':
							code='3136';
							break;
				  case '8':
							code='6272';
							break;
				  default:
							code='6272';
						    break;					
				}
	    break;				
		case 'G#':
				switch(octave)
				{
				  case '2':
							code='104';
							break;
				  case '3':
							code='208';
							break;
				  case '4':
							code='415';
							break;
				  case '5':
							code='831';
							break;
				  case '6':
							code='1661';
							break;
				  case '7':
							code='3322';
							break;
				  case '8':
							code='6645';
							break;
				  default:
							code='6645';
						    break;					
				}
	    break;			
		case 'A':
				switch(octave)
				{
				  case '2':
							code='110';
							break;
				  case '3':
							code='220';
							break;
				  case '4':
							code='440';
							break;
				  case '5':
							code='880';
							break;
				  case '6':
							code='1760';
							break;
				  case '7':
							code='3520';
							break;
				  case '8':
							code='7040';
							break;
				  default:
							code='7040';
						    break;					
				}
	    break;			
			case 'A#':
				switch(octave)
				{
				  case '2':
							code='117';
							break;
				  case '3':
							code='233';
							break;
				  case '4':
							code='466';
							break;
				  case '5':
							code='932';
							break;
				  case '6':
							code='1867';
							break;
				  case '7':
							code='3729';
							break;
				  case '8':
							code='7459';
							break;
				  default:
							code='7459';
						    break;					
				}
	    break;		
			case 'B':
				switch(octave)
				{
				  case '2':
							code='123';
							break;
				  case '3':
							code='247';
							break;
				  case '4':
							code='494';
							break;
				  case '5':
							code='988';
							break;
				  case '6':
							code='1976';
							break;
				  case '7':
							code='3951';
							break;
				  case '8':
							code='7902';
							break;
				  default:
							code='7902';
						    break;					
				}
	    break;		
			
	  default:
				code='7040';
				break;
	  
  }
 
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['RadioTEA5767_init12'] = function(block) {
	
 var value = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);  
 
 Blockly.Arduino.definitions_['define_TEA5767_library'] = '#include <TEA5767N.h>';
 Blockly.Arduino.definitions_['define_TEA5767N'] = 'TEA5767N radio=TEA5767N();\n';
  
 var code = 'radio.selectFrequency((float)'+value+');\n';
 return code;
   
};
Blockly.Arduino['RadioTEA5767_init1'] = function(block) {
 
 var code = 'radio.getSignalLevel()';
return [code, Blockly.Arduino.ORDER_ATOMIC];
   
};
Blockly.Arduino['RadioTEA5767_init2'] = function(block) {
 
 var code = 'radio.mute(); \n';
 return code;
   
};
Blockly.Arduino['RadioTEA5767_init3'] = function(block) {
 
 var code = 'radio.turnTheSoundBackOn(); \n';
 return code;
   
};

Blockly.Arduino['DFPplayerMp3_init_serial1'] = function(block) {
	var NOM = Blockly.Arduino.valueToCode(block, 'NOM', Blockly.Arduino.ORDER_ATOMIC); 
	var VELL = Blockly.Arduino.valueToCode(block, 'VELL', Blockly.Arduino.ORDER_ATOMIC); 
	var DEL = Blockly.Arduino.valueToCode(block, 'DEL', Blockly.Arduino.ORDER_ATOMIC); 

 Blockly.Arduino.definitions_['define_dfplayermp3_library'] = '#include <SoftwareSerial.h> \n #include <DFPlayer_Mini_Mp3.h>';

 Blockly.Arduino.setups_['setup_serial1_baudios'] = 'Serial.begin (9600); \n';
 Blockly.Arduino.setups_['setup_dfplayermp3'] = 'mp3_set_serial (Serial); \n';

  
  var code='mp3_set_volume ('+VELL+'); \n mp3_play ('+NOM+'); \n delay('+DEL+'); \n';
  return code;
   
};

Blockly.Arduino['DFPplayerMp3_init_serial2'] = function(block) {
	var NOM = Blockly.Arduino.valueToCode(block, 'NOM', Blockly.Arduino.ORDER_ATOMIC); 
	 

 Blockly.Arduino.definitions_['define_dfplayermp3_library'] = '#include <SoftwareSerial.h> \n #include <DFPlayer_Mini_Mp3.h>';

 Blockly.Arduino.setups_['setup_serial1_baudios'] = 'Serial.begin (9600); \n';
 Blockly.Arduino.setups_['setup_dfplayermp3'] = 'mp3_set_serial (Serial); \n';

  
  var code=' mp3_play ('+NOM+'); \n  ';
  return code;
   
};

Blockly.Arduino['DFPplayerMp3_init_serial3'] = function(block) {
	  
	var VELL = Blockly.Arduino.valueToCode(block, 'VELL', Blockly.Arduino.ORDER_ATOMIC); 
	 

 Blockly.Arduino.definitions_['define_dfplayermp3_library'] = '#include <SoftwareSerial.h> \n #include <DFPlayer_Mini_Mp3.h>';

 Blockly.Arduino.setups_['setup_serial1_baudios'] = 'Serial.begin (9600); \n';
 Blockly.Arduino.setups_['setup_dfplayermp3'] = 'mp3_set_serial (Serial); \n';

  
  var code='mp3_set_volume ('+VELL+'); \n ';
  return code;
   
};

Blockly.Arduino['DFPplayerMp3_init_serial4'] = function(block) {
	  
	var VELL = block.getFieldValue("dp");
 
  var code=''+VELL+' (); \n ';
  return code;
   
};

Blockly.Arduino['lcdm7m_setup'] = function(block) {
	var PINe = Blockly.Arduino.valueToCode(block, 'PINe', Blockly.Arduino.ORDER_ATOMIC); 
	var PINd = Blockly.Arduino.valueToCode(block, 'PINd', Blockly.Arduino.ORDER_ATOMIC);
	var PINdp = Blockly.Arduino.valueToCode(block, 'PINdp', Blockly.Arduino.ORDER_ATOMIC);
	var PINc = Blockly.Arduino.valueToCode(block, 'PINc', Blockly.Arduino.ORDER_ATOMIC);
	var PINg = Blockly.Arduino.valueToCode(block, 'PINg', Blockly.Arduino.ORDER_ATOMIC);
	var PIND4 = Blockly.Arduino.valueToCode(block, 'PIND4', Blockly.Arduino.ORDER_ATOMIC);
	var PINb = Blockly.Arduino.valueToCode(block, 'PINb', Blockly.Arduino.ORDER_ATOMIC);
	var PIND3 = Blockly.Arduino.valueToCode(block, 'PIND3', Blockly.Arduino.ORDER_ATOMIC);
	var PIND2 = Blockly.Arduino.valueToCode(block, 'PIND2', Blockly.Arduino.ORDER_ATOMIC);
	var PINf = Blockly.Arduino.valueToCode(block, 'PINf', Blockly.Arduino.ORDER_ATOMIC);
	var PINa = Blockly.Arduino.valueToCode(block, 'PINa', Blockly.Arduino.ORDER_ATOMIC);
	var PIND1 = Blockly.Arduino.valueToCode(block, 'PIND1', Blockly.Arduino.ORDER_ATOMIC);
	
   Blockly.Arduino.definitions_['define_lcdm7m_setup'] = '#include <fDigitsSegtPin.h>\n'; 
   Blockly.Arduino.definitions_['define_lcdlcdm7m_setup'] = 'fDigitsSegtPin Display('+PINe+','+PINd+','+PINdp+','+PINc+','+PINg+','+PIND4+','+PINb+','+PIND3+','+PIND2+','+PINf+','+PINa+','+PIND1+'); \n ';

   Blockly.Arduino.setups_['setup_llcdm7m_setupc']='Display.begin(); \n Display.doPrint_lastDot = 1; \n Display.doPrint_firstZero = 1; \n Display.doReport_overRange = 0; \n ';

  var code = '';
  return code;
};

Blockly.Arduino['lcdm7m_setcursor'] = function(block) {

  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'Display.print('+value_texttoprint+'); \n';

  return code;
};

Blockly.Arduino['DisplayTM1637_init'] = function(block) {
	

  var pin_clk = Blockly.Arduino.valueToCode(block, 'PIN_CLK', Blockly.Arduino.ORDER_ATOMIC);  
  var pin_dio = Blockly.Arduino.valueToCode(block, 'PIN_DIO', Blockly.Arduino.ORDER_ATOMIC);  

 Blockly.Arduino.definitions_['define_TM1637_library'] = '#include "TM1637.h"';
 Blockly.Arduino.definitions_['define_TM1637_1'] = 'TM1637 tm1637('+pin_clk+','+pin_dio+');\n';
 Blockly.Arduino.setups_['define_TM1637_2'] ='tm1637.init();\n  tm1637.set(BRIGHT_TYPICAL);\n';
  var code = ' ';
  return code;
   
};

Blockly.Arduino['DisplayTM1637_set_digit'] = function(block) {
	
 var value = Blockly.Arduino.valueToCode(block, 'NNN', Blockly.Arduino.ORDER_ATOMIC); 
 var digit = Blockly.Arduino.valueToCode(block, 'SSS', Blockly.Arduino.ORDER_ATOMIC);  
 var digit = digit - "1";
 var dp = this.getFieldValue('TM1637_POINT'); 	

  var code = 'tm1637.point('+dp+'); \n tm1637.display('+digit+','+value+'); \n';
   
 return code;
};

Blockly.Arduino['DisplayTM1637_set_completenumber'] = function(block) {
	
 var value = Blockly.Arduino.valueToCode(block, 'NNN', Blockly.Arduino.ORDER_ATOMIC); 
 var dp = this.getFieldValue('TM1637_POINT'); 	

  var code = 'tm1637.point('+dp+'); \n tm1637.display('+value+'); \n ';
   
 return code;
};

Blockly.Arduino['Init_MAX7219_7digit'] = function(block) {

  var pin_clk = Blockly.Arduino.valueToCode(block, 'PIN_CLK', Blockly.Arduino.ORDER_ATOMIC);  
  var pin_dat = Blockly.Arduino.valueToCode(block, 'PIN_DAT', Blockly.Arduino.ORDER_ATOMIC);  
  var pin_cs = Blockly.Arduino.valueToCode(block, 'PIN_CS', Blockly.Arduino.ORDER_ATOMIC); 
  
  Blockly.Arduino.definitions_['include_LedControl'] = '#include <LedControl.h>\n';
  Blockly.Arduino.definitions_['init_Ledcontrol_7d'] = 'LedControl lc7d=LedControl('+pin_dat+','+pin_clk+','+pin_cs+',1);\n';
  

     	 	 
  var code='';
  return code;
};

Blockly.Arduino['MAX7219_7digit_char'] = function(block) {
  
	var digit = Blockly.Arduino.valueToCode(block, 'SSS', Blockly.Arduino.ORDER_ATOMIC);  
	var digit = digit - "1";
	var value = Blockly.Arduino.valueToCode(block, 'NNN', Blockly.Arduino.ORDER_ATOMIC);  
	var point = this.getFieldValue('dp');
     	 	 
  var code='lc7d.setIntensity(0,15); \n lc7d.shutdown(0,false); \n lc7d.setDigit(0,'+digit+','+value+','+point+'); \n ';

  return code;
};

Blockly.Arduino['MAX7219_7digit_char_bm'] = function(block) {
  
	var digit = Blockly.Arduino.valueToCode(block, 'SSS', Blockly.Arduino.ORDER_ATOMIC);    
	var dp = this.getFieldValue('dp');
    if(dp == 1){
	var code='  lc7d.setIntensity(0,15); \n  lc7d.shutdown(0,false); \n  lc7d.setDigit(0,7,('+digit+' / 10000000),false); \n  lc7d.setDigit(0,6,('+digit+' / 1000000 - ('+digit+' / 10000000) * 10),false); \n  lc7d.setDigit(0,5,('+digit+' / 100000 - ('+digit+' / 1000000) * 10),false); \n   lc7d.setDigit(0,4,('+digit+' / 10000 - ('+digit+' / 100000) * 10),false); \n   lc7d.setDigit(0,3,('+digit+' / 1000 - ('+digit+' / 10000) * 10),false); \n  lc7d.setDigit(0,2,('+digit+' / 100 - ('+digit+' / 1000) * 10),false); \n   lc7d.setDigit(0,1,('+digit+' / 10 - ('+digit+' / 100) * 10),false); \n  lc7d.setDigit(0,0,('+digit+' / 1 - ('+digit+' / 10) * 10),false); \n ';
	} 	 	 
	if(dp == 2){
	var code='  lc7d.setIntensity(0,15);	\n    lc7d.shutdown(0,false);	\n    lc7d.setDigit(0,7,('+digit+' / 1000),false);	\n    lc7d.setDigit(0,6,('+digit+' / 100 - ('+digit+' / 1000) * 10),false);	\n    lc7d.setDigit(0,5,('+digit+' / 10 - ('+digit+' / 100) * 10),false);	\n    lc7d.setDigit(0,4,('+digit+' / 1 - ('+digit+' / 10) * 10),false);	\n ';
	}
	if(dp == 3){
	var code='   lc7d.setIntensity(0,15);	\n    lc7d.shutdown(0,false);	\n    lc7d.setDigit(0,3,('+digit+' / 1000),false);	\n   lc7d.setDigit(0,2,('+digit+' / 100 - ('+digit+' / 1000) * 10),false);	\n    lc7d.setDigit(0,1,('+digit+' / 10 - ('+digit+' / 100) * 10),false);	\n    lc7d.setDigit(0,0,('+digit+' / 1 - ('+digit+' / 10) * 10),false);	\n ';
	}
	if(dp == 4){
	var code='    lc7d.setIntensity(0,15);  \n    lc7d.shutdown(0,false);  \n   lc7d.setDigit(0,7,('+digit+' / 10 - ('+digit+' / 100) * 10),false);  \n   lc7d.setDigit(0,6,('+digit+' / 1 - ('+digit+' / 10) * 10),false);  \n ';
	}
	if(dp == 5){
	var code='    lc7d.setIntensity(0,15);  \n   lc7d.shutdown(0,false);  \n   lc7d.setDigit(0,4,('+digit+' / 10 - ('+digit+' / 100) * 10),false);  \n   lc7d.setDigit(0,3,('+digit+' / 1 - ('+digit+' / 10) * 10),false);  \n ';
	}
	if(dp == 6){
	var code='    lc7d.setIntensity(0,15);  \n    lc7d.shutdown(0,false);  \n    lc7d.setDigit(0,1,('+digit+' / 10 - ('+digit+' / 100) * 10),false);  \n    lc7d.setDigit(0,0,('+digit+' / 1 - ('+digit+' / 10) * 10),false);  \n ';
	}
	if(dp == 7){
	var code='     lc7d.setIntensity(0,15);  lc7d.shutdown(0,false);  lc7d.setDigit(0,7,('+digit+' / 100 - ('+digit+' / 1000) * 10),false);    lc7d.setDigit(0,6,('+digit+' / 10 - ('+digit+' / 100) * 10),false);   lc7d.setDigit(0,5,('+digit+' / 1 - ('+digit+' / 10) * 10),false);   \n ';
	}
	if(dp == 8){
	var code='  lc7d.setIntensity(0,15);   lc7d.shutdown(0,false);  lc7d.setDigit(0,6,('+digit+' / 100 - ('+digit+' / 1000) * 10),false);  lc7d.setDigit(0,5,('+digit+' / 10 - ('+digit+' / 100) * 10),false);  lc7d.setDigit(0,4,('+digit+' / 1 - ('+digit+' / 10) * 10),false);   \n ';
	}
	if(dp == 9){
	var code='  lc7d.setIntensity(0,15);   lc7d.shutdown(0,false);   lc7d.setDigit(0,2,('+digit+' / 100 - ('+digit+' / 1000) * 10),false);   lc7d.setDigit(0,1,('+digit+' / 10 - ('+digit+' / 100) * 10),false);    lc7d.setDigit(0,0,('+digit+' / 1 - ('+digit+' / 10) * 10),false);   \n ';
	}
  return code;
};

Blockly.Arduino['MAX7219_7digit_char_none'] = function(block) {

  var code='lc7d.clearDisplay(0); \n ';

  return code;
};


Blockly.Arduino['Init_MAX7219_ledmatrix'] = function(block) {
  var pin_clk = Blockly.Arduino.valueToCode(block, 'PIN_CLK', Blockly.Arduino.ORDER_ATOMIC);  
  var pin_dat = Blockly.Arduino.valueToCode(block, 'PIN_DAT', Blockly.Arduino.ORDER_ATOMIC);  
  var pin_cs = Blockly.Arduino.valueToCode(block, 'PIN_CS', Blockly.Arduino.ORDER_ATOMIC); 

  
  Blockly.Arduino.definitions_['include_LedControl'] = '#include <LedControl.h>\n';
  Blockly.Arduino.definitions_['init_Ledcontrol_LM'] = 'LedControl lclm=LedControl('+pin_dat+','+pin_clk+','+pin_cs+',1);\n';
     	 	 
  var code='';
  return code;
};

Blockly.Arduino['MAX7219_ledmatrix_draw_px'] = function(block) {
  
	var xpx = Blockly.Arduino.valueToCode(block, 'xpx', Blockly.Arduino.ORDER_ATOMIC);    
	var ypx = Blockly.Arduino.valueToCode(block, 'ypx', Blockly.Arduino.ORDER_ATOMIC);  
	var px = this.getFieldValue('px');
    if(px == 1){
	var code=' lclm.setIntensity(0,15);  \n   lclm.shutdown(0,false);  \n  lclm.setLed(0,'+xpx+','+ypx+',true); \n ';
	} 	 	 
	if(px == 2){
	var code='lclm.setIntensity(0,15);  \n   lclm.shutdown(0,false);  \n  lclm.setLed(0,'+xpx+','+ypx+',false); \n ';
	}
  return code;
};
 
Blockly.Arduino['MAX7219_ledmatrix_draw1'] = function(block) {

  var code = 'lclm.setIntensity(0,15); \n lclm.shutdown(0,false); \n';
  var rowcounter=0;
  var rowvalue='B';
  var rowline=0;
  for (var i=0; i<64; i++) {
	
	if (this.getFieldValue('Pixel' + i) != '#ffffff') 
		rowvalue=rowvalue+'1';
	else
		rowvalue=rowvalue+'0';
	
	rowcounter+=1;
	if (rowcounter==8)
		{
		 code+='lclm.setRow(0,'+rowline+','+rowvalue+');';
		 rowcounter=0;
		 rowvalue='B';
		 rowline=rowline+1;
		}
  };
  code+='\n ';
  return code;
};

Blockly.Arduino['MAX7219_ledmatrix_draw'] = function(block) {

  var code = 'lclm.setIntensity(0,15); \n lclm.shutdown(0,false); \n';
  var rowcounter=0;
  var rowvalue='B';
  var rowline=0;
  for (var i=0; i<64; i++) {
	
	if (this.getFieldValue('Pixel' + i) != 'FALSE') 
		rowvalue=rowvalue+'1';
	else
		rowvalue=rowvalue+'0';
	
	rowcounter+=1;
	if (rowcounter==8)
		{
		 code+='lclm.setRow(0,'+rowline+','+rowvalue+');';
		 rowcounter=0;
		 rowvalue='B';
		 rowline=rowline+1;
		}
  };
  code+='\n ';
  return code;
};

Blockly.Arduino['lcdm_setup'] = function(block) {

    var PIN_RS = Blockly.Arduino.valueToCode(block, 'PIN_RS', Blockly.Arduino.ORDER_ATOMIC); 
	var PIN_E = Blockly.Arduino.valueToCode(block, 'PIN_E', Blockly.Arduino.ORDER_ATOMIC); 
	var PIN_DB4 = Blockly.Arduino.valueToCode(block, 'PIN_DB4', Blockly.Arduino.ORDER_ATOMIC); 
	var PIN_DB5 = Blockly.Arduino.valueToCode(block, 'PIN_DB5', Blockly.Arduino.ORDER_ATOMIC); 
	var PIN_DB6 = Blockly.Arduino.valueToCode(block, 'PIN_DB6', Blockly.Arduino.ORDER_ATOMIC); 
	var PIN_DB7 = Blockly.Arduino.valueToCode(block, 'PIN_DB7', Blockly.Arduino.ORDER_ATOMIC); 
    var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
    var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
	
  // Blockly.Arduino.definitions_['define_lcd'] = '#include <LiquidCrystal.h> \n';  
  //Blockly.Arduino.definitions_['define_lcdpins'] = 'LiquidCrystal lcd('+PIN_RS+','+PIN_E+','+PIN_DB4+','+PIN_DB5+','+PIN_DB6+','+PIN_DB7+'); \n';
 Blockly.Arduino.definitions_['define_lcd_ru'] = '#include <LiquidCrystalRus.h> \n';  
 Blockly.Arduino.definitions_['define_lcdpins_ru'] = 'LiquidCrystalRus lcd('+PIN_RS+',14,'+PIN_E+','+PIN_DB4+','+PIN_DB5+','+PIN_DB6+','+PIN_DB7+'); \n';
 
   Blockly.Arduino.setups_['setup_lcdRus_ru']='lcd.begin('+value_columns+','+value_rows+'); \n';

  var code = '';
  return code;
};

Blockly.Arduino['lcdm_setcursor'] = function(block) {

	var value_column = Blockly.Arduino.valueToCode(block, 'column', Blockly.Arduino.ORDER_ATOMIC);
	//var value_column = value_column - "1";
	var value_row = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_ATOMIC);
	//var value_row = value_row - "1";
	var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);

 var code = 'lcd.setCursor('+value_column+', '+value_row+ '); \n lcd.print('+texttoprint+');\n ';
return code;
};

Blockly.Arduino['lcd_setcursor_draw_pl'] = function(block) {
    var nomer = block.getFieldValue("TEXT");
	var rowx =  Blockly.Arduino.valueToCode(block, 'print_x', Blockly.Arduino.ORDER_ATOMIC);
	var rowy =  Blockly.Arduino.valueToCode(block, 'print_y', Blockly.Arduino.ORDER_ATOMIC);
    var code = '   lcd.createChar('+nomer+', customChar'+nomer+'); \n  lcd.setCursor('+rowx+', '+rowy+'); \n  lcd.write((uint8_t)'+nomer+'); \n ';
  return code;
};

 

Blockly.Arduino['lcdi2c_setuprus'] = function(block) {
var text_name = block.getFieldValue('NAME');  
    Blockly.Arduino.definitions_['define_lcd_2c'] = '#include <Wire.h> \n #include <LCD_1602_RUS.h>\n';
    
    var value_columns = Blockly.Arduino.valueToCode(block, 'COLUMNS', Blockly.Arduino.ORDER_ATOMIC);
    var value_rows = Blockly.Arduino.valueToCode(block, 'ROWS', Blockly.Arduino.ORDER_ATOMIC);
   
   Blockly.Arduino.definitions_['define_lcdpins_2c'] = 'LCD_1602_RUS lcd('+text_name+','+value_columns+','+value_rows+');\n';

   Blockly.Arduino.setups_['setup_lcdi2c_2c']='lcd.init(); \n lcd.backlight(); \n';

  var code = '';
  return code;
};

Blockly.Arduino['lcdi2c_setcursor'] = function(block) {

	var value_column = Blockly.Arduino.valueToCode(block, 'column', Blockly.Arduino.ORDER_ATOMIC);
	//var value_column = value_column - "1";
	var value_row = Blockly.Arduino.valueToCode(block, 'row', Blockly.Arduino.ORDER_ATOMIC);
	//var value_row = value_row - "1";
	var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);

 var code = 'lcd.setCursor('+value_column+', '+value_row+ '); \n lcd.print('+texttoprint+');\n ';
return code;
};


 

Blockly.Arduino['lcdi2c_setcursor_draw'] = function(block) {
    
	 
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
 
  var code = ' ';
  return code;
};

Blockly.Arduino['lcdi2c_setcursor_draw_led'] = function(block) {
    
	 
    var nomer = block.getFieldValue("TEXT");
	var nomer1 = block.getFieldValue("TEXT1");
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


	
	
 Blockly.Arduino.definitions_['minilcdi2c_setcursor_draw_led' + nomer] = 'byte customChar'+nomer+'[8] = { \n '+
' 0b'+Pix7e0+''+Pix6e0+''+Pix5e0+''+Pix4e0+''+Pix3e0+''+Pix2e0+''+Pix1e0+''+Pix0e0+', \n'+
'  0b'+Pix7e1+''+Pix6e1+''+Pix5e1+''+Pix4e1+''+Pix3e1+''+Pix2e1+''+Pix1e1+''+Pix0e1+', \n'+
'  0b'+Pix7e2+''+Pix6e2+''+Pix5e2+''+Pix4e2+''+Pix3e2+''+Pix2e2+''+Pix1e2+''+Pix0e2+', \n'+
'  0b'+Pix7e3+''+Pix6e3+''+Pix5e3+''+Pix4e3+''+Pix3e3+''+Pix2e3+''+Pix1e3+''+Pix0e3+', \n'+
'  0b'+Pix7e4+''+Pix6e4+''+Pix5e4+''+Pix4e4+''+Pix3e4+''+Pix2e4+''+Pix1e4+''+Pix0e4+', \n'+
'  0b00000000, \n'+
'  0b00000000, \n'+
'  0b00000000 \n'+
'}; \n';
 
  Blockly.Arduino.setups_['minilcdi2c_setcursor_draw_led']= '  DDRD = B11111111; \n  ';
  
  var code = '    for (byte i = 0; i < 8; i++){ \n   PORTD = customChar'+nomer+'[i]; \n   delay('+nomer1+'); \n } \n ';
  return code;
};

Blockly.Arduino['lcdi2c_setcursor_draw_pl'] = function(block) {
    var nomer = block.getFieldValue("TEXT");
	var rowx =  Blockly.Arduino.valueToCode(block, 'print_x', Blockly.Arduino.ORDER_ATOMIC);
	var rowy =  Blockly.Arduino.valueToCode(block, 'print_y', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'lcd.createChar('+nomer+', customChar'+nomer+'); \n  lcd.setCursor('+rowx+', '+rowy+'); \n  lcd.write('+nomer+'); \n ';
  return code;
};

 

Blockly.Arduino['minilcdi2c_setup'] = function(block) {

  Blockly.Arduino.definitions_['define_lcd_i2c'] = '#include <Wire.h>\n#include "ASOLED.h"\n';

   Blockly.Arduino.setups_['setup_lcdi2c_i2c']= 'LD.init(); \n LD.clearDisplay(); \n';

  var code = '';
  return code;
};

Blockly.Arduino['minilcdi2c_setcursor'] = function(block) {
  var print_x = Blockly.Arduino.valueToCode(block, 'print_x', Blockly.Arduino.ORDER_ATOMIC);
  var print_y = Blockly.Arduino.valueToCode(block, 'print_y', Blockly.Arduino.ORDER_ATOMIC);
  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
  var point = this.getFieldValue('dp');
  
  var code = 'LD.printString_'+point+'('+value_texttoprint+', '+print_x+', '+print_y+ ');\n';

  return code;
};

Blockly.Arduino['minilcdi2c_setcursorR'] = function(block) {
	var print_x = Blockly.Arduino.valueToCode(block, 'print_x', Blockly.Arduino.ORDER_ATOMIC);
	var print_y = Blockly.Arduino.valueToCode(block, 'print_y', Blockly.Arduino.ORDER_ATOMIC);
	var print_R = Blockly.Arduino.valueToCode(block, 'print_R', Blockly.Arduino.ORDER_ATOMIC);
	var point = this.getFieldValue('dp');
	var tipe = this.getFieldValue('tipe');
	
  if(tipe == "long"){
    var code = 'LD.printString_'+point+'("", '+print_x+', '+print_y+ '); \n LD.printNumber((long)'+print_R+'); \n';
	}
  if(tipe == "float-1"){
  var code = 'LD.printString_'+point+'("", '+print_x+', '+print_y+ '); \n LD.printNumber('+print_R+',1); \n';
	}
	  if(tipe == "float-2"){
  var code = 'LD.printString_'+point+'("", '+print_x+', '+print_y+ '); \n LD.printNumber('+print_R+',2); \n';
	}
	  if(tipe == "float-3"){
  var code = 'LD.printString_'+point+'("", '+print_x+', '+print_y+ '); \n LD.printNumber('+print_R+',3); \n';
	}
	  if(tipe == "float-4"){
  var code = 'LD.printString_'+point+'("", '+print_x+', '+print_y+ '); \n LD.printNumber('+print_R+',4); \n';
	}
  if(tipe == "String"){
  var code = 'LD.printString_'+point+'('+print_R+'.c_str(), '+print_x+', '+print_y+ ');\n';
	}
	
  return code;
};

Blockly.Arduino['minilcdi2c_setcursor_draw'] = function(block) {
    
	 
    var nomer = block.getFieldValue("TEXT");
	var Pix0e0 = this.getFieldValue('Pix0e0'); if(Pix0e0 == 'FALSE'){Pix0e0 = 0;}else{Pix0e0 = 1;}
	var Pix0e1 = this.getFieldValue('Pix0e1'); if(Pix0e1 == 'FALSE'){Pix0e1 = 0;}else{Pix0e1 = 1;}
	var Pix0e2 = this.getFieldValue('Pix0e2'); if(Pix0e2 == 'FALSE'){Pix0e2 = 0;}else{Pix0e2 = 1;}
	var Pix0e3 = this.getFieldValue('Pix0e3'); if(Pix0e3 == 'FALSE'){Pix0e3 = 0;}else{Pix0e3 = 1;}
	var Pix0e4 = this.getFieldValue('Pix0e4'); if(Pix0e4 == 'FALSE'){Pix0e4 = 0;}else{Pix0e4 = 1;}
	var Pix0e5 = this.getFieldValue('Pix0e5'); if(Pix0e5 == 'FALSE'){Pix0e5 = 0;}else{Pix0e5 = 1;}
	var Pix0e6 = this.getFieldValue('Pix0e6'); if(Pix0e6 == 'FALSE'){Pix0e6 = 0;}else{Pix0e6 = 1;}
	var Pix0e7 = this.getFieldValue('Pix0e7'); if(Pix0e7 == 'FALSE'){Pix0e7 = 0;}else{Pix0e7 = 1;}
	var Pix0e8 = this.getFieldValue('Pix0e8'); if(Pix0e8 == 'FALSE'){Pix0e8 = 0;}else{Pix0e8 = 1;}
	var Pix0e9 = this.getFieldValue('Pix0e9'); if(Pix0e9 == 'FALSE'){Pix0e9 = 0;}else{Pix0e9 = 1;}
	var Pix0e10 = this.getFieldValue('Pix0e10'); if(Pix0e10 == 'FALSE'){Pix0e10 = 0;}else{Pix0e10 = 1;}
	var Pix0e11 = this.getFieldValue('Pix0e11'); if(Pix0e11 == 'FALSE'){Pix0e11 = 0;}else{Pix0e11 = 1;}
	var Pix0e12 = this.getFieldValue('Pix0e12'); if(Pix0e12 == 'FALSE'){Pix0e12 = 0;}else{Pix0e12 = 1;}
	var Pix0e13 = this.getFieldValue('Pix0e13'); if(Pix0e13 == 'FALSE'){Pix0e13 = 0;}else{Pix0e13 = 1;}
	var Pix0e14 = this.getFieldValue('Pix0e14'); if(Pix0e14 == 'FALSE'){Pix0e14 = 0;}else{Pix0e14 = 1;}
	var Pix0e15 = this.getFieldValue('Pix0e15'); if(Pix0e15 == 'FALSE'){Pix0e15 = 0;}else{Pix0e15 = 1;}

	var Pix1e0 = this.getFieldValue('Pix1e0'); if(Pix1e0 == 'FALSE'){Pix1e0 = 0;}else{Pix1e0 = 1;}
	var Pix1e1 = this.getFieldValue('Pix1e1'); if(Pix1e1 == 'FALSE'){Pix1e1 = 0;}else{Pix1e1 = 1;}
	var Pix1e2 = this.getFieldValue('Pix1e2'); if(Pix1e2 == 'FALSE'){Pix1e2 = 0;}else{Pix1e2 = 1;}
	var Pix1e3 = this.getFieldValue('Pix1e3'); if(Pix1e3 == 'FALSE'){Pix1e3 = 0;}else{Pix1e3 = 1;}
	var Pix1e4 = this.getFieldValue('Pix1e4'); if(Pix1e4 == 'FALSE'){Pix1e4 = 0;}else{Pix1e4 = 1;}
	var Pix1e5 = this.getFieldValue('Pix1e5'); if(Pix1e5 == 'FALSE'){Pix1e5 = 0;}else{Pix1e5 = 1;}
	var Pix1e6 = this.getFieldValue('Pix1e6'); if(Pix1e6 == 'FALSE'){Pix1e6 = 0;}else{Pix1e6 = 1;}
	var Pix1e7 = this.getFieldValue('Pix1e7'); if(Pix1e7 == 'FALSE'){Pix1e7 = 0;}else{Pix1e7 = 1;}
	var Pix1e8 = this.getFieldValue('Pix1e8'); if(Pix1e8 == 'FALSE'){Pix1e8 = 0;}else{Pix1e8 = 1;}
	var Pix1e9 = this.getFieldValue('Pix1e9'); if(Pix1e9 == 'FALSE'){Pix1e9 = 0;}else{Pix1e9 = 1;}
	var Pix1e10 = this.getFieldValue('Pix1e10'); if(Pix1e10 == 'FALSE'){Pix1e10 = 0;}else{Pix1e10 = 1;}
	var Pix1e11 = this.getFieldValue('Pix1e11'); if(Pix1e11 == 'FALSE'){Pix1e11 = 0;}else{Pix1e11 = 1;}
	var Pix1e12 = this.getFieldValue('Pix1e12'); if(Pix1e12 == 'FALSE'){Pix1e12 = 0;}else{Pix1e12 = 1;}
	var Pix1e13 = this.getFieldValue('Pix1e13'); if(Pix1e13 == 'FALSE'){Pix1e13 = 0;}else{Pix1e13 = 1;}
	var Pix1e14 = this.getFieldValue('Pix1e14'); if(Pix1e14 == 'FALSE'){Pix1e14 = 0;}else{Pix1e14 = 1;}
	var Pix1e15 = this.getFieldValue('Pix1e15'); if(Pix1e15 == 'FALSE'){Pix1e15 = 0;}else{Pix1e15 = 1;}
	
	var Pix2e0 = this.getFieldValue('Pix2e0'); if(Pix2e0 == 'FALSE'){Pix2e0 = 0;}else{Pix2e0 = 1;}
	var Pix2e1 = this.getFieldValue('Pix2e1'); if(Pix2e1 == 'FALSE'){Pix2e1 = 0;}else{Pix2e1 = 1;}
	var Pix2e2 = this.getFieldValue('Pix2e2'); if(Pix2e2 == 'FALSE'){Pix2e2 = 0;}else{Pix2e2 = 1;}
	var Pix2e3 = this.getFieldValue('Pix2e3'); if(Pix2e3 == 'FALSE'){Pix2e3 = 0;}else{Pix2e3 = 1;}
	var Pix2e4 = this.getFieldValue('Pix2e4'); if(Pix2e4 == 'FALSE'){Pix2e4 = 0;}else{Pix2e4 = 1;}
	var Pix2e5 = this.getFieldValue('Pix2e5'); if(Pix2e5 == 'FALSE'){Pix2e5 = 0;}else{Pix2e5 = 1;}
	var Pix2e6 = this.getFieldValue('Pix2e6'); if(Pix2e6 == 'FALSE'){Pix2e6 = 0;}else{Pix2e6 = 1;}
	var Pix2e7 = this.getFieldValue('Pix2e7'); if(Pix2e7 == 'FALSE'){Pix2e7 = 0;}else{Pix2e7 = 1;}
	var Pix2e8 = this.getFieldValue('Pix2e8'); if(Pix2e8 == 'FALSE'){Pix2e8 = 0;}else{Pix2e8 = 1;}
	var Pix2e9 = this.getFieldValue('Pix2e9'); if(Pix2e9 == 'FALSE'){Pix2e9 = 0;}else{Pix2e9 = 1;}
	var Pix2e10 = this.getFieldValue('Pix2e10'); if(Pix2e10 == 'FALSE'){Pix2e10 = 0;}else{Pix2e10 = 1;}
	var Pix2e11 = this.getFieldValue('Pix2e11'); if(Pix2e11 == 'FALSE'){Pix2e11 = 0;}else{Pix2e11 = 1;}
	var Pix2e12 = this.getFieldValue('Pix2e12'); if(Pix2e12 == 'FALSE'){Pix2e12 = 0;}else{Pix2e12 = 1;}
	var Pix2e13 = this.getFieldValue('Pix2e13'); if(Pix2e13 == 'FALSE'){Pix2e13 = 0;}else{Pix2e13 = 1;}
	var Pix2e14 = this.getFieldValue('Pix2e14'); if(Pix2e14 == 'FALSE'){Pix2e14 = 0;}else{Pix2e14 = 1;}
	var Pix2e15 = this.getFieldValue('Pix2e15'); if(Pix2e15 == 'FALSE'){Pix2e15 = 0;}else{Pix2e15 = 1;}
	
	var Pix3e0 = this.getFieldValue('Pix3e0'); if(Pix3e0 == 'FALSE'){Pix3e0 = 0;}else{Pix3e0 = 1;}
	var Pix3e1 = this.getFieldValue('Pix3e1'); if(Pix3e1 == 'FALSE'){Pix3e1 = 0;}else{Pix3e1 = 1;}
	var Pix3e2 = this.getFieldValue('Pix3e2'); if(Pix3e2 == 'FALSE'){Pix3e2 = 0;}else{Pix3e2 = 1;}
	var Pix3e3 = this.getFieldValue('Pix3e3'); if(Pix3e3 == 'FALSE'){Pix3e3 = 0;}else{Pix3e3 = 1;}
	var Pix3e4 = this.getFieldValue('Pix3e4'); if(Pix3e4 == 'FALSE'){Pix3e4 = 0;}else{Pix3e4 = 1;}
	var Pix3e5 = this.getFieldValue('Pix3e5'); if(Pix3e5 == 'FALSE'){Pix3e5 = 0;}else{Pix3e5 = 1;}
	var Pix3e6 = this.getFieldValue('Pix3e6'); if(Pix3e6 == 'FALSE'){Pix3e6 = 0;}else{Pix3e6 = 1;}
	var Pix3e7 = this.getFieldValue('Pix3e7'); if(Pix3e7 == 'FALSE'){Pix3e7 = 0;}else{Pix3e7 = 1;}
	var Pix3e8 = this.getFieldValue('Pix3e8'); if(Pix3e8 == 'FALSE'){Pix3e8 = 0;}else{Pix3e8 = 1;}
	var Pix3e9 = this.getFieldValue('Pix3e9'); if(Pix3e9 == 'FALSE'){Pix3e9 = 0;}else{Pix3e9 = 1;}
	var Pix3e10 = this.getFieldValue('Pix3e10'); if(Pix3e10 == 'FALSE'){Pix3e10 = 0;}else{Pix3e10 = 1;}
	var Pix3e11 = this.getFieldValue('Pix3e11'); if(Pix3e11 == 'FALSE'){Pix3e11 = 0;}else{Pix3e11 = 1;}
	var Pix3e12 = this.getFieldValue('Pix3e12'); if(Pix3e12 == 'FALSE'){Pix3e12 = 0;}else{Pix3e12 = 1;}
	var Pix3e13 = this.getFieldValue('Pix3e13'); if(Pix3e13 == 'FALSE'){Pix3e13 = 0;}else{Pix3e13 = 1;}
	var Pix3e14 = this.getFieldValue('Pix3e14'); if(Pix3e14 == 'FALSE'){Pix3e14 = 0;}else{Pix3e14 = 1;}
	var Pix3e15 = this.getFieldValue('Pix3e15'); if(Pix3e15 == 'FALSE'){Pix3e15 = 0;}else{Pix3e15 = 1;}

	var Pix4e0 = this.getFieldValue('Pix4e0'); if(Pix4e0 == 'FALSE'){Pix4e0 = 0;}else{Pix4e0 = 1;}
	var Pix4e1 = this.getFieldValue('Pix4e1'); if(Pix4e1 == 'FALSE'){Pix4e1 = 0;}else{Pix4e1 = 1;}
	var Pix4e2 = this.getFieldValue('Pix4e2'); if(Pix4e2 == 'FALSE'){Pix4e2 = 0;}else{Pix4e2 = 1;}
	var Pix4e3 = this.getFieldValue('Pix4e3'); if(Pix4e3 == 'FALSE'){Pix4e3 = 0;}else{Pix4e3 = 1;}
	var Pix4e4 = this.getFieldValue('Pix4e4'); if(Pix4e4 == 'FALSE'){Pix4e4 = 0;}else{Pix4e4 = 1;}
	var Pix4e5 = this.getFieldValue('Pix4e5'); if(Pix4e5 == 'FALSE'){Pix4e5 = 0;}else{Pix4e5 = 1;}
	var Pix4e6 = this.getFieldValue('Pix4e6'); if(Pix4e6 == 'FALSE'){Pix4e6 = 0;}else{Pix4e6 = 1;}
	var Pix4e7 = this.getFieldValue('Pix4e7'); if(Pix4e7 == 'FALSE'){Pix4e7 = 0;}else{Pix4e7 = 1;}
	var Pix4e8 = this.getFieldValue('Pix4e8'); if(Pix4e8 == 'FALSE'){Pix4e8 = 0;}else{Pix4e8 = 1;}
	var Pix4e9 = this.getFieldValue('Pix4e9'); if(Pix4e9 == 'FALSE'){Pix4e9 = 0;}else{Pix4e9 = 1;}
	var Pix4e10 = this.getFieldValue('Pix4e10'); if(Pix4e10 == 'FALSE'){Pix4e10 = 0;}else{Pix4e10 = 1;}
	var Pix4e11 = this.getFieldValue('Pix4e11'); if(Pix4e11 == 'FALSE'){Pix4e11 = 0;}else{Pix4e11 = 1;}
	var Pix4e12 = this.getFieldValue('Pix4e12'); if(Pix4e12 == 'FALSE'){Pix4e12 = 0;}else{Pix4e12 = 1;}
	var Pix4e13 = this.getFieldValue('Pix4e13'); if(Pix4e13 == 'FALSE'){Pix4e13 = 0;}else{Pix4e13 = 1;}
	var Pix4e14 = this.getFieldValue('Pix4e14'); if(Pix4e14 == 'FALSE'){Pix4e14 = 0;}else{Pix4e14 = 1;}
	var Pix4e15 = this.getFieldValue('Pix4e15'); if(Pix4e15 == 'FALSE'){Pix4e15 = 0;}else{Pix4e15 = 1;}

	var Pix5e0 = this.getFieldValue('Pix5e0'); if(Pix5e0 == 'FALSE'){Pix5e0 = 0;}else{Pix5e0 = 1;}
	var Pix5e1 = this.getFieldValue('Pix5e1'); if(Pix5e1 == 'FALSE'){Pix5e1 = 0;}else{Pix5e1 = 1;}
	var Pix5e2 = this.getFieldValue('Pix5e2'); if(Pix5e2 == 'FALSE'){Pix5e2 = 0;}else{Pix5e2 = 1;}
	var Pix5e3 = this.getFieldValue('Pix5e3'); if(Pix5e3 == 'FALSE'){Pix5e3 = 0;}else{Pix5e3 = 1;}
	var Pix5e4 = this.getFieldValue('Pix5e4'); if(Pix5e4 == 'FALSE'){Pix5e4 = 0;}else{Pix5e4 = 1;}
	var Pix5e5 = this.getFieldValue('Pix5e5'); if(Pix5e5 == 'FALSE'){Pix5e5 = 0;}else{Pix5e5 = 1;}
	var Pix5e6 = this.getFieldValue('Pix5e6'); if(Pix5e6 == 'FALSE'){Pix5e6 = 0;}else{Pix5e6 = 1;}
	var Pix5e7 = this.getFieldValue('Pix5e7'); if(Pix5e7 == 'FALSE'){Pix5e7 = 0;}else{Pix5e7 = 1;}
	var Pix5e8 = this.getFieldValue('Pix5e8'); if(Pix5e8 == 'FALSE'){Pix5e8 = 0;}else{Pix5e8 = 1;}
	var Pix5e9 = this.getFieldValue('Pix5e9'); if(Pix5e9 == 'FALSE'){Pix5e9 = 0;}else{Pix5e9 = 1;}
	var Pix5e10 = this.getFieldValue('Pix5e10'); if(Pix5e10 == 'FALSE'){Pix5e10 = 0;}else{Pix5e10 = 1;}
	var Pix5e11 = this.getFieldValue('Pix5e11'); if(Pix5e11 == 'FALSE'){Pix5e11 = 0;}else{Pix5e11 = 1;}
	var Pix5e12 = this.getFieldValue('Pix5e12'); if(Pix5e12 == 'FALSE'){Pix5e12 = 0;}else{Pix5e12 = 1;}
	var Pix5e13 = this.getFieldValue('Pix5e13'); if(Pix5e13 == 'FALSE'){Pix5e13 = 0;}else{Pix5e13 = 1;}
	var Pix5e14 = this.getFieldValue('Pix5e14'); if(Pix5e14 == 'FALSE'){Pix5e14 = 0;}else{Pix5e14 = 1;}
	var Pix5e15 = this.getFieldValue('Pix5e15'); if(Pix5e15 == 'FALSE'){Pix5e15 = 0;}else{Pix5e15 = 1;}

	var Pix6e0 = this.getFieldValue('Pix6e0'); if(Pix6e0 == 'FALSE'){Pix6e0 = 0;}else{Pix6e0 = 1;}
	var Pix6e1 = this.getFieldValue('Pix6e1'); if(Pix6e1 == 'FALSE'){Pix6e1 = 0;}else{Pix6e1 = 1;}
	var Pix6e2 = this.getFieldValue('Pix6e2'); if(Pix6e2 == 'FALSE'){Pix6e2 = 0;}else{Pix6e2 = 1;}
	var Pix6e3 = this.getFieldValue('Pix6e3'); if(Pix6e3 == 'FALSE'){Pix6e3 = 0;}else{Pix6e3 = 1;}
	var Pix6e4 = this.getFieldValue('Pix6e4'); if(Pix6e4 == 'FALSE'){Pix6e4 = 0;}else{Pix6e4 = 1;}
	var Pix6e5 = this.getFieldValue('Pix6e5'); if(Pix6e5 == 'FALSE'){Pix6e5 = 0;}else{Pix6e5 = 1;}
	var Pix6e6 = this.getFieldValue('Pix6e6'); if(Pix6e6 == 'FALSE'){Pix6e6 = 0;}else{Pix6e6 = 1;}
	var Pix6e7 = this.getFieldValue('Pix6e7'); if(Pix6e7 == 'FALSE'){Pix6e7 = 0;}else{Pix6e7 = 1;}
	var Pix6e8 = this.getFieldValue('Pix6e8'); if(Pix6e8 == 'FALSE'){Pix6e8 = 0;}else{Pix6e8 = 1;}
	var Pix6e9 = this.getFieldValue('Pix6e9'); if(Pix6e9 == 'FALSE'){Pix6e9 = 0;}else{Pix6e9 = 1;}
	var Pix6e10 = this.getFieldValue('Pix6e10'); if(Pix6e10 == 'FALSE'){Pix6e10 = 0;}else{Pix6e10 = 1;}
	var Pix6e11 = this.getFieldValue('Pix6e11'); if(Pix6e11 == 'FALSE'){Pix6e11 = 0;}else{Pix6e11 = 1;}
	var Pix6e12 = this.getFieldValue('Pix6e12'); if(Pix6e12 == 'FALSE'){Pix6e12 = 0;}else{Pix6e12 = 1;}
	var Pix6e13 = this.getFieldValue('Pix6e13'); if(Pix6e13 == 'FALSE'){Pix6e13 = 0;}else{Pix6e13 = 1;}
	var Pix6e14 = this.getFieldValue('Pix6e14'); if(Pix6e14 == 'FALSE'){Pix6e14 = 0;}else{Pix6e14 = 1;}
	var Pix6e15 = this.getFieldValue('Pix6e15'); if(Pix6e15 == 'FALSE'){Pix6e15 = 0;}else{Pix6e15 = 1;}

	var Pix7e0 = this.getFieldValue('Pix7e0'); if(Pix7e0 == 'FALSE'){Pix7e0 = 0;}else{Pix7e0 = 1;}
	var Pix7e1 = this.getFieldValue('Pix7e1'); if(Pix7e1 == 'FALSE'){Pix7e1 = 0;}else{Pix7e1 = 1;}
	var Pix7e2 = this.getFieldValue('Pix7e2'); if(Pix7e2 == 'FALSE'){Pix7e2 = 0;}else{Pix7e2 = 1;}
	var Pix7e3 = this.getFieldValue('Pix7e3'); if(Pix7e3 == 'FALSE'){Pix7e3 = 0;}else{Pix7e3 = 1;}
	var Pix7e4 = this.getFieldValue('Pix7e4'); if(Pix7e4 == 'FALSE'){Pix7e4 = 0;}else{Pix7e4 = 1;}
	var Pix7e5 = this.getFieldValue('Pix7e5'); if(Pix7e5 == 'FALSE'){Pix7e5 = 0;}else{Pix7e5 = 1;}
	var Pix7e6 = this.getFieldValue('Pix7e6'); if(Pix7e6 == 'FALSE'){Pix7e6 = 0;}else{Pix7e6 = 1;}
	var Pix7e7 = this.getFieldValue('Pix7e7'); if(Pix7e7 == 'FALSE'){Pix7e7 = 0;}else{Pix7e7 = 1;}
	var Pix7e8 = this.getFieldValue('Pix7e8'); if(Pix7e8 == 'FALSE'){Pix7e8 = 0;}else{Pix7e8 = 1;}
	var Pix7e9 = this.getFieldValue('Pix7e9'); if(Pix7e9 == 'FALSE'){Pix7e9 = 0;}else{Pix7e9 = 1;}
	var Pix7e10 = this.getFieldValue('Pix7e10'); if(Pix7e10 == 'FALSE'){Pix7e10 = 0;}else{Pix7e10 = 1;}
	var Pix7e11 = this.getFieldValue('Pix7e11'); if(Pix7e11 == 'FALSE'){Pix7e11 = 0;}else{Pix7e11 = 1;}
	var Pix7e12 = this.getFieldValue('Pix7e12'); if(Pix7e12 == 'FALSE'){Pix7e12 = 0;}else{Pix7e12 = 1;}
	var Pix7e13 = this.getFieldValue('Pix7e13'); if(Pix7e13 == 'FALSE'){Pix7e13 = 0;}else{Pix7e13 = 1;}
	var Pix7e14 = this.getFieldValue('Pix7e14'); if(Pix7e14 == 'FALSE'){Pix7e14 = 0;}else{Pix7e14 = 1;}
	var Pix7e15 = this.getFieldValue('Pix7e15'); if(Pix7e15 == 'FALSE'){Pix7e15 = 0;}else{Pix7e15 = 1;}

	var Pix8e0 = this.getFieldValue('Pix8e0'); if(Pix8e0 == 'FALSE'){Pix8e0 = 0;}else{Pix8e0 = 1;}
	var Pix8e1 = this.getFieldValue('Pix8e1'); if(Pix8e1 == 'FALSE'){Pix8e1 = 0;}else{Pix8e1 = 1;}
	var Pix8e2 = this.getFieldValue('Pix8e2'); if(Pix8e2 == 'FALSE'){Pix8e2 = 0;}else{Pix8e2 = 1;}
	var Pix8e3 = this.getFieldValue('Pix8e3'); if(Pix8e3 == 'FALSE'){Pix8e3 = 0;}else{Pix8e3 = 1;}
	var Pix8e4 = this.getFieldValue('Pix8e4'); if(Pix8e4 == 'FALSE'){Pix8e4 = 0;}else{Pix8e4 = 1;}
	var Pix8e5 = this.getFieldValue('Pix8e5'); if(Pix8e5 == 'FALSE'){Pix8e5 = 0;}else{Pix8e5 = 1;}
	var Pix8e6 = this.getFieldValue('Pix8e6'); if(Pix8e6 == 'FALSE'){Pix8e6 = 0;}else{Pix8e6 = 1;}
	var Pix8e7 = this.getFieldValue('Pix8e7'); if(Pix8e7 == 'FALSE'){Pix8e7 = 0;}else{Pix8e7 = 1;}
	var Pix8e8 = this.getFieldValue('Pix8e8'); if(Pix8e8 == 'FALSE'){Pix8e8 = 0;}else{Pix8e8 = 1;}
	var Pix8e9 = this.getFieldValue('Pix8e9'); if(Pix8e9 == 'FALSE'){Pix8e9 = 0;}else{Pix8e9 = 1;}
	var Pix8e10 = this.getFieldValue('Pix8e10'); if(Pix8e10 == 'FALSE'){Pix8e10 = 0;}else{Pix8e10 = 1;}
	var Pix8e11 = this.getFieldValue('Pix8e11'); if(Pix8e11 == 'FALSE'){Pix8e11 = 0;}else{Pix8e11 = 1;}
	var Pix8e12 = this.getFieldValue('Pix8e12'); if(Pix8e12 == 'FALSE'){Pix8e12 = 0;}else{Pix8e12 = 1;}
	var Pix8e13 = this.getFieldValue('Pix8e13'); if(Pix8e13 == 'FALSE'){Pix8e13 = 0;}else{Pix8e13 = 1;}
	var Pix8e14 = this.getFieldValue('Pix8e14'); if(Pix8e14 == 'FALSE'){Pix8e14 = 0;}else{Pix8e14 = 1;}
	var Pix8e15 = this.getFieldValue('Pix8e15'); if(Pix8e15 == 'FALSE'){Pix8e15 = 0;}else{Pix8e15 = 1;}

	var Pix9e0 = this.getFieldValue('Pix9e0'); if(Pix9e0 == 'FALSE'){Pix9e0 = 0;}else{Pix9e0 = 1;}
	var Pix9e1 = this.getFieldValue('Pix9e1'); if(Pix9e1 == 'FALSE'){Pix9e1 = 0;}else{Pix9e1 = 1;}
	var Pix9e2 = this.getFieldValue('Pix9e2'); if(Pix9e2 == 'FALSE'){Pix9e2 = 0;}else{Pix9e2 = 1;}
	var Pix9e3 = this.getFieldValue('Pix9e3'); if(Pix9e3 == 'FALSE'){Pix9e3 = 0;}else{Pix9e3 = 1;}
	var Pix9e4 = this.getFieldValue('Pix9e4'); if(Pix9e4 == 'FALSE'){Pix9e4 = 0;}else{Pix9e4 = 1;}
	var Pix9e5 = this.getFieldValue('Pix9e5'); if(Pix9e5 == 'FALSE'){Pix9e5 = 0;}else{Pix9e5 = 1;}
	var Pix9e6 = this.getFieldValue('Pix9e6'); if(Pix9e6 == 'FALSE'){Pix9e6 = 0;}else{Pix9e6 = 1;}
	var Pix9e7 = this.getFieldValue('Pix9e7'); if(Pix9e7 == 'FALSE'){Pix9e7 = 0;}else{Pix9e7 = 1;}
	var Pix9e8 = this.getFieldValue('Pix9e8'); if(Pix9e8 == 'FALSE'){Pix9e8 = 0;}else{Pix9e8 = 1;}
	var Pix9e9 = this.getFieldValue('Pix9e9'); if(Pix9e9 == 'FALSE'){Pix9e9 = 0;}else{Pix9e9 = 1;}
	var Pix9e10 = this.getFieldValue('Pix9e10'); if(Pix9e10 == 'FALSE'){Pix9e10 = 0;}else{Pix9e10 = 1;}
	var Pix9e11 = this.getFieldValue('Pix9e11'); if(Pix9e11 == 'FALSE'){Pix9e11 = 0;}else{Pix9e11 = 1;}
	var Pix9e12 = this.getFieldValue('Pix9e12'); if(Pix9e12 == 'FALSE'){Pix9e12 = 0;}else{Pix9e12 = 1;}
	var Pix9e13 = this.getFieldValue('Pix9e13'); if(Pix9e13 == 'FALSE'){Pix9e13 = 0;}else{Pix9e13 = 1;}
	var Pix9e14 = this.getFieldValue('Pix9e14'); if(Pix9e14 == 'FALSE'){Pix9e14 = 0;}else{Pix9e14 = 1;}
	var Pix9e15 = this.getFieldValue('Pix9e15'); if(Pix9e15 == 'FALSE'){Pix9e15 = 0;}else{Pix9e15 = 1;}

	var Pix10e0 = this.getFieldValue('Pix10e0'); if(Pix10e0 == 'FALSE'){Pix10e0 = 0;}else{Pix10e0 = 1;}
	var Pix10e1 = this.getFieldValue('Pix10e1'); if(Pix10e1 == 'FALSE'){Pix10e1 = 0;}else{Pix10e1 = 1;}
	var Pix10e2 = this.getFieldValue('Pix10e2'); if(Pix10e2 == 'FALSE'){Pix10e2 = 0;}else{Pix10e2 = 1;}
	var Pix10e3 = this.getFieldValue('Pix10e3'); if(Pix10e3 == 'FALSE'){Pix10e3 = 0;}else{Pix10e3 = 1;}
	var Pix10e4 = this.getFieldValue('Pix10e4'); if(Pix10e4 == 'FALSE'){Pix10e4 = 0;}else{Pix10e4 = 1;}
	var Pix10e5 = this.getFieldValue('Pix10e5'); if(Pix10e5 == 'FALSE'){Pix10e5 = 0;}else{Pix10e5 = 1;}
	var Pix10e6 = this.getFieldValue('Pix10e6'); if(Pix10e6 == 'FALSE'){Pix10e6 = 0;}else{Pix10e6 = 1;}
	var Pix10e7 = this.getFieldValue('Pix10e7'); if(Pix10e7 == 'FALSE'){Pix10e7 = 0;}else{Pix10e7 = 1;}
	var Pix10e8 = this.getFieldValue('Pix10e8'); if(Pix10e8 == 'FALSE'){Pix10e8 = 0;}else{Pix10e8 = 1;}
	var Pix10e9 = this.getFieldValue('Pix10e9'); if(Pix10e9 == 'FALSE'){Pix10e9 = 0;}else{Pix10e9 = 1;}
	var Pix10e10 = this.getFieldValue('Pix10e10'); if(Pix10e10 == 'FALSE'){Pix10e10 = 0;}else{Pix10e10 = 1;}
	var Pix10e11 = this.getFieldValue('Pix10e11'); if(Pix10e11 == 'FALSE'){Pix10e11 = 0;}else{Pix10e11 = 1;}
	var Pix10e12 = this.getFieldValue('Pix10e12'); if(Pix10e12 == 'FALSE'){Pix10e12 = 0;}else{Pix10e12 = 1;}
	var Pix10e13 = this.getFieldValue('Pix10e13'); if(Pix10e13 == 'FALSE'){Pix10e13 = 0;}else{Pix10e13 = 1;}
	var Pix10e14 = this.getFieldValue('Pix10e14'); if(Pix10e14 == 'FALSE'){Pix10e14 = 0;}else{Pix10e14 = 1;}
	var Pix10e15 = this.getFieldValue('Pix10e15'); if(Pix10e15 == 'FALSE'){Pix10e15 = 0;}else{Pix10e15 = 1;}

	var Pix11e0 = this.getFieldValue('Pix11e0'); if(Pix11e0 == 'FALSE'){Pix11e0 = 0;}else{Pix11e0 = 1;}
	var Pix11e1 = this.getFieldValue('Pix11e1'); if(Pix11e1 == 'FALSE'){Pix11e1 = 0;}else{Pix11e1 = 1;}
	var Pix11e2 = this.getFieldValue('Pix11e2'); if(Pix11e2 == 'FALSE'){Pix11e2 = 0;}else{Pix11e2 = 1;}
	var Pix11e3 = this.getFieldValue('Pix11e3'); if(Pix11e3 == 'FALSE'){Pix11e3 = 0;}else{Pix11e3 = 1;}
	var Pix11e4 = this.getFieldValue('Pix11e4'); if(Pix11e4 == 'FALSE'){Pix11e4 = 0;}else{Pix11e4 = 1;}
	var Pix11e5 = this.getFieldValue('Pix11e5'); if(Pix11e5 == 'FALSE'){Pix11e5 = 0;}else{Pix11e5 = 1;}
	var Pix11e6 = this.getFieldValue('Pix11e6'); if(Pix11e6 == 'FALSE'){Pix11e6 = 0;}else{Pix11e6 = 1;}
	var Pix11e7 = this.getFieldValue('Pix11e7'); if(Pix11e7 == 'FALSE'){Pix11e7 = 0;}else{Pix11e7 = 1;}
	var Pix11e8 = this.getFieldValue('Pix11e8'); if(Pix11e8 == 'FALSE'){Pix11e8 = 0;}else{Pix11e8 = 1;}
	var Pix11e9 = this.getFieldValue('Pix11e9'); if(Pix11e9 == 'FALSE'){Pix11e9 = 0;}else{Pix11e9 = 1;}
	var Pix11e10 = this.getFieldValue('Pix11e10'); if(Pix11e10 == 'FALSE'){Pix11e10 = 0;}else{Pix11e10 = 1;}
	var Pix11e11 = this.getFieldValue('Pix11e11'); if(Pix11e11 == 'FALSE'){Pix11e11 = 0;}else{Pix11e11 = 1;}
	var Pix11e12 = this.getFieldValue('Pix11e12'); if(Pix11e12 == 'FALSE'){Pix11e12 = 0;}else{Pix11e12 = 1;}
	var Pix11e13 = this.getFieldValue('Pix11e13'); if(Pix11e13 == 'FALSE'){Pix11e13 = 0;}else{Pix11e13 = 1;}
	var Pix11e14 = this.getFieldValue('Pix11e14'); if(Pix11e14 == 'FALSE'){Pix11e14 = 0;}else{Pix11e14 = 1;}
	var Pix11e15 = this.getFieldValue('Pix11e15'); if(Pix11e15 == 'FALSE'){Pix11e15 = 0;}else{Pix11e15 = 1;}

	var Pix12e0 = this.getFieldValue('Pix12e0'); if(Pix12e0 == 'FALSE'){Pix12e0 = 0;}else{Pix12e0 = 1;}
	var Pix12e1 = this.getFieldValue('Pix12e1'); if(Pix12e1 == 'FALSE'){Pix12e1 = 0;}else{Pix12e1 = 1;}
	var Pix12e2 = this.getFieldValue('Pix12e2'); if(Pix12e2 == 'FALSE'){Pix12e2 = 0;}else{Pix12e2 = 1;}
	var Pix12e3 = this.getFieldValue('Pix12e3'); if(Pix12e3 == 'FALSE'){Pix12e3 = 0;}else{Pix12e3 = 1;}
	var Pix12e4 = this.getFieldValue('Pix12e4'); if(Pix12e4 == 'FALSE'){Pix12e4 = 0;}else{Pix12e4 = 1;}
	var Pix12e5 = this.getFieldValue('Pix12e5'); if(Pix12e5 == 'FALSE'){Pix12e5 = 0;}else{Pix12e5 = 1;}
	var Pix12e6 = this.getFieldValue('Pix12e6'); if(Pix12e6 == 'FALSE'){Pix12e6 = 0;}else{Pix12e6 = 1;}
	var Pix12e7 = this.getFieldValue('Pix12e7'); if(Pix12e7 == 'FALSE'){Pix12e7 = 0;}else{Pix12e7 = 1;}
	var Pix12e8 = this.getFieldValue('Pix12e8'); if(Pix12e8 == 'FALSE'){Pix12e8 = 0;}else{Pix12e8 = 1;}
	var Pix12e9 = this.getFieldValue('Pix12e9'); if(Pix12e9 == 'FALSE'){Pix12e9 = 0;}else{Pix12e9 = 1;}
	var Pix12e10 = this.getFieldValue('Pix12e10'); if(Pix12e10 == 'FALSE'){Pix12e10 = 0;}else{Pix12e10 = 1;}
	var Pix12e11 = this.getFieldValue('Pix12e11'); if(Pix12e11 == 'FALSE'){Pix12e11 = 0;}else{Pix12e11 = 1;}
	var Pix12e12 = this.getFieldValue('Pix12e12'); if(Pix12e12 == 'FALSE'){Pix12e12 = 0;}else{Pix12e12 = 1;}
	var Pix12e13 = this.getFieldValue('Pix12e13'); if(Pix12e13 == 'FALSE'){Pix12e13 = 0;}else{Pix12e13 = 1;}
	var Pix12e14 = this.getFieldValue('Pix12e14'); if(Pix12e14 == 'FALSE'){Pix12e14 = 0;}else{Pix12e14 = 1;}
	var Pix12e15 = this.getFieldValue('Pix12e15'); if(Pix12e15 == 'FALSE'){Pix12e15 = 0;}else{Pix12e15 = 1;}

	var Pix13e0 = this.getFieldValue('Pix13e0'); if(Pix13e0 == 'FALSE'){Pix13e0 = 0;}else{Pix13e0 = 1;}
	var Pix13e1 = this.getFieldValue('Pix13e1'); if(Pix13e1 == 'FALSE'){Pix13e1 = 0;}else{Pix13e1 = 1;}
	var Pix13e2 = this.getFieldValue('Pix13e2'); if(Pix13e2 == 'FALSE'){Pix13e2 = 0;}else{Pix13e2 = 1;}
	var Pix13e3 = this.getFieldValue('Pix13e3'); if(Pix13e3 == 'FALSE'){Pix13e3 = 0;}else{Pix13e3 = 1;}
	var Pix13e4 = this.getFieldValue('Pix13e4'); if(Pix13e4 == 'FALSE'){Pix13e4 = 0;}else{Pix13e4 = 1;}
	var Pix13e5 = this.getFieldValue('Pix13e5'); if(Pix13e5 == 'FALSE'){Pix13e5 = 0;}else{Pix13e5 = 1;}
	var Pix13e6 = this.getFieldValue('Pix13e6'); if(Pix13e6 == 'FALSE'){Pix13e6 = 0;}else{Pix13e6 = 1;}
	var Pix13e7 = this.getFieldValue('Pix13e7'); if(Pix13e7 == 'FALSE'){Pix13e7 = 0;}else{Pix13e7 = 1;}
	var Pix13e8 = this.getFieldValue('Pix13e8'); if(Pix13e8 == 'FALSE'){Pix13e8 = 0;}else{Pix13e8 = 1;}
	var Pix13e9 = this.getFieldValue('Pix13e9'); if(Pix13e9 == 'FALSE'){Pix13e9 = 0;}else{Pix13e9 = 1;}
	var Pix13e10 = this.getFieldValue('Pix13e10'); if(Pix13e10 == 'FALSE'){Pix13e10 = 0;}else{Pix13e10 = 1;}
	var Pix13e11 = this.getFieldValue('Pix13e11'); if(Pix13e11 == 'FALSE'){Pix13e11 = 0;}else{Pix13e11 = 1;}
	var Pix13e12 = this.getFieldValue('Pix13e12'); if(Pix13e12 == 'FALSE'){Pix13e12 = 0;}else{Pix13e12 = 1;}
	var Pix13e13 = this.getFieldValue('Pix13e13'); if(Pix13e13 == 'FALSE'){Pix13e13 = 0;}else{Pix13e13 = 1;}
	var Pix13e14 = this.getFieldValue('Pix13e14'); if(Pix13e14 == 'FALSE'){Pix13e14 = 0;}else{Pix13e14 = 1;}
	var Pix13e15 = this.getFieldValue('Pix13e15'); if(Pix13e15 == 'FALSE'){Pix13e15 = 0;}else{Pix13e15 = 1;}

	var Pix14e0 = this.getFieldValue('Pix14e0'); if(Pix14e0 == 'FALSE'){Pix14e0 = 0;}else{Pix14e0 = 1;}
	var Pix14e1 = this.getFieldValue('Pix14e1'); if(Pix14e1 == 'FALSE'){Pix14e1 = 0;}else{Pix14e1 = 1;}
	var Pix14e2 = this.getFieldValue('Pix14e2'); if(Pix14e2 == 'FALSE'){Pix14e2 = 0;}else{Pix14e2 = 1;}
	var Pix14e3 = this.getFieldValue('Pix14e3'); if(Pix14e3 == 'FALSE'){Pix14e3 = 0;}else{Pix14e3 = 1;}
	var Pix14e4 = this.getFieldValue('Pix14e4'); if(Pix14e4 == 'FALSE'){Pix14e4 = 0;}else{Pix14e4 = 1;}
	var Pix14e5 = this.getFieldValue('Pix14e5'); if(Pix14e5 == 'FALSE'){Pix14e5 = 0;}else{Pix14e5 = 1;}
	var Pix14e6 = this.getFieldValue('Pix14e6'); if(Pix14e6 == 'FALSE'){Pix14e6 = 0;}else{Pix14e6 = 1;}
	var Pix14e7 = this.getFieldValue('Pix14e7'); if(Pix14e7 == 'FALSE'){Pix14e7 = 0;}else{Pix14e7 = 1;}
	var Pix14e8 = this.getFieldValue('Pix14e8'); if(Pix14e8 == 'FALSE'){Pix14e8 = 0;}else{Pix14e8 = 1;}
	var Pix14e9 = this.getFieldValue('Pix14e9'); if(Pix14e9 == 'FALSE'){Pix14e9 = 0;}else{Pix14e9 = 1;}
	var Pix14e10 = this.getFieldValue('Pix14e10'); if(Pix14e10 == 'FALSE'){Pix14e10 = 0;}else{Pix14e10 = 1;}
	var Pix14e11 = this.getFieldValue('Pix14e11'); if(Pix14e11 == 'FALSE'){Pix14e11 = 0;}else{Pix14e11 = 1;}
	var Pix14e12 = this.getFieldValue('Pix14e12'); if(Pix14e12 == 'FALSE'){Pix14e12 = 0;}else{Pix14e12 = 1;}
	var Pix14e13 = this.getFieldValue('Pix14e13'); if(Pix14e13 == 'FALSE'){Pix14e13 = 0;}else{Pix14e13 = 1;}
	var Pix14e14 = this.getFieldValue('Pix14e14'); if(Pix14e14 == 'FALSE'){Pix14e14 = 0;}else{Pix14e14 = 1;}
	var Pix14e15 = this.getFieldValue('Pix14e15'); if(Pix14e15 == 'FALSE'){Pix14e15 = 0;}else{Pix14e15 = 1;}

	var Pix15e0 = this.getFieldValue('Pix15e0'); if(Pix15e0 == 'FALSE'){Pix15e0 = 0;}else{Pix15e0 = 1;}
	var Pix15e1 = this.getFieldValue('Pix15e1'); if(Pix15e1 == 'FALSE'){Pix15e1 = 0;}else{Pix15e1 = 1;}
	var Pix15e2 = this.getFieldValue('Pix15e2'); if(Pix15e2 == 'FALSE'){Pix15e2 = 0;}else{Pix15e2 = 1;}
	var Pix15e3 = this.getFieldValue('Pix15e3'); if(Pix15e3 == 'FALSE'){Pix15e3 = 0;}else{Pix15e3 = 1;}
	var Pix15e4 = this.getFieldValue('Pix15e4'); if(Pix15e4 == 'FALSE'){Pix15e4 = 0;}else{Pix15e4 = 1;}
	var Pix15e5 = this.getFieldValue('Pix15e5'); if(Pix15e5 == 'FALSE'){Pix15e5 = 0;}else{Pix15e5 = 1;}
	var Pix15e6 = this.getFieldValue('Pix15e6'); if(Pix15e6 == 'FALSE'){Pix15e6 = 0;}else{Pix15e6 = 1;}
	var Pix15e7 = this.getFieldValue('Pix15e7'); if(Pix15e7 == 'FALSE'){Pix15e7 = 0;}else{Pix15e7 = 1;}
	var Pix15e8 = this.getFieldValue('Pix15e8'); if(Pix15e8 == 'FALSE'){Pix15e8 = 0;}else{Pix15e8 = 1;}
	var Pix15e9 = this.getFieldValue('Pix15e9'); if(Pix15e9 == 'FALSE'){Pix15e9 = 0;}else{Pix15e9 = 1;}
	var Pix15e10 = this.getFieldValue('Pix15e10'); if(Pix15e10 == 'FALSE'){Pix15e10 = 0;}else{Pix15e10 = 1;}
	var Pix15e11 = this.getFieldValue('Pix15e11'); if(Pix15e11 == 'FALSE'){Pix15e11 = 0;}else{Pix15e11 = 1;}
	var Pix15e12 = this.getFieldValue('Pix15e12'); if(Pix15e12 == 'FALSE'){Pix15e12 = 0;}else{Pix15e12 = 1;}
	var Pix15e13 = this.getFieldValue('Pix15e13'); if(Pix15e13 == 'FALSE'){Pix15e13 = 0;}else{Pix15e13 = 1;}
	var Pix15e14 = this.getFieldValue('Pix15e14'); if(Pix15e14 == 'FALSE'){Pix15e14 = 0;}else{Pix15e14 = 1;}
	var Pix15e15 = this.getFieldValue('Pix15e15'); if(Pix15e15 == 'FALSE'){Pix15e15 = 0;}else{Pix15e15 = 1;}
	
 Blockly.Arduino.definitions_['minilcdi2c_setcursor_draw' + nomer] = 'static const unsigned char PROGMEM Logo_BMP'+nomer+'[] = \n '+
 ' { 0x10, 0x10, 0xff, 0x01,  \n '+
'   B'+Pix7e0+''+Pix6e0+''+Pix5e0+''+Pix4e0+''+Pix3e0+''+Pix2e0+''+Pix1e0+''+Pix0e0+',  '+
'	B'+Pix7e1+''+Pix6e1+''+Pix5e1+''+Pix4e1+''+Pix3e1+''+Pix2e1+''+Pix1e1+''+Pix0e1+',  '+
'	B'+Pix7e2+''+Pix6e2+''+Pix5e2+''+Pix4e2+''+Pix3e2+''+Pix2e2+''+Pix1e2+''+Pix0e2+',  '+
'	B'+Pix7e3+''+Pix6e3+''+Pix5e3+''+Pix4e3+''+Pix3e3+''+Pix2e3+''+Pix1e3+''+Pix0e3+',  '+
'	B'+Pix7e4+''+Pix6e4+''+Pix5e4+''+Pix4e4+''+Pix3e4+''+Pix2e4+''+Pix1e4+''+Pix0e4+',  '+
'	B'+Pix7e5+''+Pix6e5+''+Pix5e5+''+Pix4e5+''+Pix3e5+''+Pix2e5+''+Pix1e5+''+Pix0e5+',  '+
'	B'+Pix7e6+''+Pix6e6+''+Pix5e6+''+Pix4e6+''+Pix3e6+''+Pix2e6+''+Pix1e6+''+Pix0e6+',  '+
'	B'+Pix7e7+''+Pix6e7+''+Pix5e7+''+Pix4e7+''+Pix3e7+''+Pix2e7+''+Pix1e7+''+Pix0e7+', \n '+
'   B'+Pix7e8+''+Pix6e8+''+Pix5e8+''+Pix4e8+''+Pix3e8+''+Pix2e8+''+Pix1e8+''+Pix0e8+',  '+
'   B'+Pix7e9+''+Pix6e9+''+Pix5e9+''+Pix4e9+''+Pix3e9+''+Pix2e9+''+Pix1e9+''+Pix0e9+',  '+
'   B'+Pix7e10+''+Pix6e10+''+Pix5e10+''+Pix4e10+''+Pix3e10+''+Pix2e10+''+Pix1e10+''+Pix0e10+',  '+
'   B'+Pix7e11+''+Pix6e11+''+Pix5e11+''+Pix4e11+''+Pix3e11+''+Pix2e11+''+Pix1e11+''+Pix0e11+',  '+
'   B'+Pix7e12+''+Pix6e12+''+Pix5e12+''+Pix4e12+''+Pix3e12+''+Pix2e12+''+Pix1e12+''+Pix0e12+',  '+
'   B'+Pix7e13+''+Pix6e13+''+Pix5e13+''+Pix4e13+''+Pix3e13+''+Pix2e13+''+Pix1e13+''+Pix0e13+',  '+
'   B'+Pix7e14+''+Pix6e14+''+Pix5e14+''+Pix4e14+''+Pix3e14+''+Pix2e14+''+Pix1e14+''+Pix0e14+',  '+
'   B'+Pix7e15+''+Pix6e15+''+Pix5e15+''+Pix4e15+''+Pix3e15+''+Pix2e15+''+Pix1e15+''+Pix0e15+', \n '+
'   B'+Pix15e0+''+Pix14e0+''+Pix13e0+''+Pix12e0+''+Pix11e0+''+Pix10e0+''+Pix9e0+''+Pix8e0+',  '+
'	B'+Pix15e1+''+Pix14e1+''+Pix13e1+''+Pix12e1+''+Pix11e1+''+Pix10e1+''+Pix9e1+''+Pix8e1+',  '+
'	B'+Pix15e2+''+Pix14e2+''+Pix13e2+''+Pix12e2+''+Pix11e2+''+Pix10e2+''+Pix9e2+''+Pix8e2+',  '+
'	B'+Pix15e3+''+Pix14e3+''+Pix13e3+''+Pix12e3+''+Pix11e3+''+Pix10e3+''+Pix9e3+''+Pix8e3+',  '+
'	B'+Pix15e4+''+Pix14e4+''+Pix13e4+''+Pix12e4+''+Pix11e4+''+Pix10e4+''+Pix9e4+''+Pix8e4+',  '+
'	B'+Pix15e5+''+Pix14e5+''+Pix13e5+''+Pix12e5+''+Pix11e5+''+Pix10e5+''+Pix9e5+''+Pix8e5+',  '+
'	B'+Pix15e6+''+Pix14e6+''+Pix13e6+''+Pix12e6+''+Pix11e6+''+Pix10e6+''+Pix9e6+''+Pix8e6+',  '+
'	B'+Pix15e7+''+Pix14e7+''+Pix13e7+''+Pix12e7+''+Pix11e7+''+Pix10e7+''+Pix9e7+''+Pix8e7+', \n '+
'   B'+Pix15e8+''+Pix14e8+''+Pix13e8+''+Pix12e8+''+Pix11e8+''+Pix10e8+''+Pix9e8+''+Pix8e8+',  '+
'   B'+Pix15e9+''+Pix14e9+''+Pix13e9+''+Pix12e9+''+Pix11e9+''+Pix10e9+''+Pix9e9+''+Pix8e9+',  '+
'   B'+Pix15e10+''+Pix14e10+''+Pix13e10+''+Pix12e10+''+Pix11e10+''+Pix10e10+''+Pix9e10+''+Pix8e10+',  '+
'   B'+Pix15e11+''+Pix14e11+''+Pix13e11+''+Pix12e11+''+Pix11e11+''+Pix10e11+''+Pix9e11+''+Pix8e11+',  '+
'   B'+Pix15e12+''+Pix14e12+''+Pix13e12+''+Pix12e12+''+Pix11e12+''+Pix10e12+''+Pix9e12+''+Pix8e12+',  '+
'   B'+Pix15e13+''+Pix14e13+''+Pix13e13+''+Pix12e13+''+Pix11e13+''+Pix10e13+''+Pix9e13+''+Pix8e13+',  '+
'   B'+Pix15e14+''+Pix14e14+''+Pix13e14+''+Pix12e14+''+Pix11e14+''+Pix10e14+''+Pix9e14+''+Pix8e14+',  '+
'   B'+Pix15e15+''+Pix14e15+''+Pix13e15+''+Pix12e15+''+Pix11e15+''+Pix10e15+''+Pix9e15+''+Pix8e15+' \n '+
 '  }; ';
    
  var code = ' ';
  return code;
};

Blockly.Arduino['minilcdi2c_setcursor_draw_pl'] = function(block) {
    
	 
    var nomer = block.getFieldValue("TEXT");
	var rowx =  Blockly.Arduino.valueToCode(block, 'print_x', Blockly.Arduino.ORDER_ATOMIC);
	var rowy =  Blockly.Arduino.valueToCode(block, 'print_y', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'LD.drawBitmap(Logo_BMP'+nomer+', '+rowx+', '+rowy+');  \n';
  return code;
};


Blockly.Arduino['lcd_con_nokia'] = function(block) {

var sck_n = Blockly.Arduino.valueToCode(block, 'SCK_N', Blockly.Arduino.ORDER_ATOMIC);
var mosi_n = Blockly.Arduino.valueToCode(block, 'MOSI_N', Blockly.Arduino.ORDER_ATOMIC);
var dc_n = Blockly.Arduino.valueToCode(block, 'DC_N', Blockly.Arduino.ORDER_ATOMIC);
var rst_n = Blockly.Arduino.valueToCode(block, 'RST_N', Blockly.Arduino.ORDER_ATOMIC);
var cs_n = Blockly.Arduino.valueToCode(block, 'CS_N', Blockly.Arduino.ORDER_ATOMIC);



Blockly.Arduino.definitions_['define_lcd_con_nokia'] = '#include <LCD5110_Basic.h> \n LCD5110 LCD('+sck_n+','+mosi_n+','+dc_n+','+rst_n+','+cs_n+'); \n extern uint8_t SmallFont[]; \n extern uint8_t MediumNumbers[]; \n extern uint8_t BigNumbers[]; \n ';

Blockly.Arduino.setups_['setup_lcd_con_nokia']=' LCD.InitLCD(); \n';

var code = ' ';

return code;
};



Blockly.Arduino['lcd_con_nokia_text'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);



var code = 'LCD.setFont(SmallFont); \n LCD.print('+texttoprint+', '+X_Nokia+', '+Y_Nokia+'); \n	';

return code;
};



Blockly.Arduino['lcd_con_nokia_number'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Nokia_number = Blockly.Arduino.valueToCode(block, 'Nokia_number', Blockly.Arduino.ORDER_ATOMIC);
var point = this.getFieldValue('dp'); 
var no1 = "'0'"; 

var code = 'long inokia = '+Nokia_number+';  \n LCD.setFont('+point+'); \n  LCD.printNumI(inokia, '+X_Nokia+', '+Y_Nokia+', 2, '+no1+'); \n	';

return code;
};


Blockly.Arduino['lcd_128x64px_spi'] = function(block) {

var pin1 = Blockly.Arduino.valueToCode(block, 'pin1', Blockly.Arduino.ORDER_ATOMIC);
var pin2 = Blockly.Arduino.valueToCode(block, 'pin2', Blockly.Arduino.ORDER_ATOMIC);
var pin3 = Blockly.Arduino.valueToCode(block, 'pin3', Blockly.Arduino.ORDER_ATOMIC);
var dp = this.getFieldValue('dp'); 

Blockly.Arduino.definitions_['lcd_128x64px_spi'] = ' #include "U8glib.h" \n U8GLIB_ST7920_128X64_1X u8g('+pin3+', '+pin2+', '+pin1+'); \n ';

if(dp == 0){
Blockly.Arduino.setups_['setups_lcd_128x64px_spi']=' \n';
}else{
Blockly.Arduino.setups_['setups_lcd_128x64px_spi']='u8g.setRot'+dp+'(); \n';
}

var code = ' ';

return code;
};

Blockly.Arduino['lcd_128x64px_spi_mini'] = function(block) {

var pin1 = Blockly.Arduino.valueToCode(block, 'pin1', Blockly.Arduino.ORDER_ATOMIC);
var pin2 = Blockly.Arduino.valueToCode(block, 'pin2', Blockly.Arduino.ORDER_ATOMIC);
var pin3 = Blockly.Arduino.valueToCode(block, 'pin3', Blockly.Arduino.ORDER_ATOMIC);
var pin4 = Blockly.Arduino.valueToCode(block, 'pin4', Blockly.Arduino.ORDER_ATOMIC);
var pin5 = Blockly.Arduino.valueToCode(block, 'pin5', Blockly.Arduino.ORDER_ATOMIC);
var dp = this.getFieldValue('dp'); 

Blockly.Arduino.definitions_['lcd_128x64px_spi'] = ' #include "U8glib.h" \n U8GLIB_SSD1306_128X64 u8g('+pin5+', '+pin4+', '+pin1+', '+pin2+', '+pin3+'); \n ';

if(dp == 0){
Blockly.Arduino.setups_['setups_lcd_128x64px_spi']=' \n';
}else{
Blockly.Arduino.setups_['setups_lcd_128x64px_spi']='u8g.setRot'+dp+'(); \n';
}

var code = ' ';

return code;
};

Blockly.Arduino['lcd_128x64px_spi_top'] = function(block) {

var dp2 = this.getFieldValue('dp2'); 
var dp = this.getFieldValue('dp'); 

Blockly.Arduino.definitions_['lcd_128x64px_spi'] = ' #include "U8glib.h" \n  '+dp2+'; \n ';

if(dp == 0){
Blockly.Arduino.setups_['setups_lcd_128x64px_spi']=' \n';
}else{
Blockly.Arduino.setups_['setups_lcd_128x64px_spi']='u8g.setRot'+dp+'(); \n';
}

var code = ' ';

return code;
};

Blockly.Arduino['lcd_128x64px_spi_b'] = function (block) {   
  var branch = Blockly.Arduino.statementToCode(this, "CONTENT"); 
  var code = '    u8g.firstPage(); \n  do {  \n' +
  branch + '  } while(    u8g.nextPage()   );  \n';
  return code;
  return ""
};

Blockly.Arduino['lcd_128x64px_spi_text'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
var dp = this.getFieldValue('dp'); 


var code = '      u8g.setFont(u8g_font_'+dp+'); \n   u8g.setPrintPos('+X_Nokia+', '+Y_Nokia+'); \n   u8g.print('+texttoprint+'); \n	';

return code;
};

Blockly.Arduino['lcd_128x64px_spi_pix'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);

var code = '  u8g.drawPixel('+X_Nokia+', '+Y_Nokia+'); \n	';

return code;
};

Blockly.Arduino['lcd_128x64px_spi_line'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var X_Nokia2 = Blockly.Arduino.valueToCode(block, 'X_Nokia2', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia2 = Blockly.Arduino.valueToCode(block, 'Y_Nokia2', Blockly.Arduino.ORDER_ATOMIC);

var code = ' u8g.drawLine('+X_Nokia+', '+Y_Nokia+', '+X_Nokia2+', '+Y_Nokia2+');    \n	';

return code;
};

Blockly.Arduino['lcd_128x64px_spi_box'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var X_Nokia2 = Blockly.Arduino.valueToCode(block, 'X_Nokia2', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia2 = Blockly.Arduino.valueToCode(block, 'Y_Nokia2', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia3 = Blockly.Arduino.valueToCode(block, 'Y_Nokia3', Blockly.Arduino.ORDER_ATOMIC);
var logic = this.getFieldValue('LOGIC');
  
  if(logic == 'FALSE'){
  var code = ' u8g.drawRFrame('+X_Nokia+', '+Y_Nokia+', '+Y_Nokia2+', '+X_Nokia2+', '+Y_Nokia3+');   \n	';
  }else{
  var code = ' u8g.drawRBox('+X_Nokia+', '+Y_Nokia+', '+Y_Nokia2+', '+X_Nokia2+', '+Y_Nokia3+');   \n	';

  }

return code;
};


Blockly.Arduino['lcd_128x64px_spi_draw'] = function(block) {
    
	 
    var nomer = block.getFieldValue("TEXT");
	var Pix0e0 = this.getFieldValue('Pix0e0'); if(Pix0e0 == 'FALSE'){Pix0e0 = 0;}else{Pix0e0 = 1;}
	var Pix0e1 = this.getFieldValue('Pix0e1'); if(Pix0e1 == 'FALSE'){Pix0e1 = 0;}else{Pix0e1 = 1;}
	var Pix0e2 = this.getFieldValue('Pix0e2'); if(Pix0e2 == 'FALSE'){Pix0e2 = 0;}else{Pix0e2 = 1;}
	var Pix0e3 = this.getFieldValue('Pix0e3'); if(Pix0e3 == 'FALSE'){Pix0e3 = 0;}else{Pix0e3 = 1;}
	var Pix0e4 = this.getFieldValue('Pix0e4'); if(Pix0e4 == 'FALSE'){Pix0e4 = 0;}else{Pix0e4 = 1;}
	var Pix0e5 = this.getFieldValue('Pix0e5'); if(Pix0e5 == 'FALSE'){Pix0e5 = 0;}else{Pix0e5 = 1;}
	var Pix0e6 = this.getFieldValue('Pix0e6'); if(Pix0e6 == 'FALSE'){Pix0e6 = 0;}else{Pix0e6 = 1;}
	var Pix0e7 = this.getFieldValue('Pix0e7'); if(Pix0e7 == 'FALSE'){Pix0e7 = 0;}else{Pix0e7 = 1;}

	var Pix1e0 = this.getFieldValue('Pix1e0'); if(Pix1e0 == 'FALSE'){Pix1e0 = 0;}else{Pix1e0 = 1;}
	var Pix1e1 = this.getFieldValue('Pix1e1'); if(Pix1e1 == 'FALSE'){Pix1e1 = 0;}else{Pix1e1 = 1;}
	var Pix1e2 = this.getFieldValue('Pix1e2'); if(Pix1e2 == 'FALSE'){Pix1e2 = 0;}else{Pix1e2 = 1;}
	var Pix1e3 = this.getFieldValue('Pix1e3'); if(Pix1e3 == 'FALSE'){Pix1e3 = 0;}else{Pix1e3 = 1;}
	var Pix1e4 = this.getFieldValue('Pix1e4'); if(Pix1e4 == 'FALSE'){Pix1e4 = 0;}else{Pix1e4 = 1;}
	var Pix1e5 = this.getFieldValue('Pix1e5'); if(Pix1e5 == 'FALSE'){Pix1e5 = 0;}else{Pix1e5 = 1;}
	var Pix1e6 = this.getFieldValue('Pix1e6'); if(Pix1e6 == 'FALSE'){Pix1e6 = 0;}else{Pix1e6 = 1;}
	var Pix1e7 = this.getFieldValue('Pix1e7'); if(Pix1e7 == 'FALSE'){Pix1e7 = 0;}else{Pix1e7 = 1;}
	
	var Pix2e0 = this.getFieldValue('Pix2e0'); if(Pix2e0 == 'FALSE'){Pix2e0 = 0;}else{Pix2e0 = 1;}
	var Pix2e1 = this.getFieldValue('Pix2e1'); if(Pix2e1 == 'FALSE'){Pix2e1 = 0;}else{Pix2e1 = 1;}
	var Pix2e2 = this.getFieldValue('Pix2e2'); if(Pix2e2 == 'FALSE'){Pix2e2 = 0;}else{Pix2e2 = 1;}
	var Pix2e3 = this.getFieldValue('Pix2e3'); if(Pix2e3 == 'FALSE'){Pix2e3 = 0;}else{Pix2e3 = 1;}
	var Pix2e4 = this.getFieldValue('Pix2e4'); if(Pix2e4 == 'FALSE'){Pix2e4 = 0;}else{Pix2e4 = 1;}
	var Pix2e5 = this.getFieldValue('Pix2e5'); if(Pix2e5 == 'FALSE'){Pix2e5 = 0;}else{Pix2e5 = 1;}
	var Pix2e6 = this.getFieldValue('Pix2e6'); if(Pix2e6 == 'FALSE'){Pix2e6 = 0;}else{Pix2e6 = 1;}
	var Pix2e7 = this.getFieldValue('Pix2e7'); if(Pix2e7 == 'FALSE'){Pix2e7 = 0;}else{Pix2e7 = 1;}
	
	var Pix3e0 = this.getFieldValue('Pix3e0'); if(Pix3e0 == 'FALSE'){Pix3e0 = 0;}else{Pix3e0 = 1;}
	var Pix3e1 = this.getFieldValue('Pix3e1'); if(Pix3e1 == 'FALSE'){Pix3e1 = 0;}else{Pix3e1 = 1;}
	var Pix3e2 = this.getFieldValue('Pix3e2'); if(Pix3e2 == 'FALSE'){Pix3e2 = 0;}else{Pix3e2 = 1;}
	var Pix3e3 = this.getFieldValue('Pix3e3'); if(Pix3e3 == 'FALSE'){Pix3e3 = 0;}else{Pix3e3 = 1;}
	var Pix3e4 = this.getFieldValue('Pix3e4'); if(Pix3e4 == 'FALSE'){Pix3e4 = 0;}else{Pix3e4 = 1;}
    var Pix3e5 = this.getFieldValue('Pix3e5'); if(Pix3e5 == 'FALSE'){Pix3e5 = 0;}else{Pix3e5 = 1;}
	var Pix3e6 = this.getFieldValue('Pix3e6'); if(Pix3e6 == 'FALSE'){Pix3e6 = 0;}else{Pix3e6 = 1;}
	var Pix3e7 = this.getFieldValue('Pix3e7'); if(Pix3e7 == 'FALSE'){Pix3e7 = 0;}else{Pix3e7 = 1;}

	var Pix4e0 = this.getFieldValue('Pix4e0'); if(Pix4e0 == 'FALSE'){Pix4e0 = 0;}else{Pix4e0 = 1;}
	var Pix4e1 = this.getFieldValue('Pix4e1'); if(Pix4e1 == 'FALSE'){Pix4e1 = 0;}else{Pix4e1 = 1;}
	var Pix4e2 = this.getFieldValue('Pix4e2'); if(Pix4e2 == 'FALSE'){Pix4e2 = 0;}else{Pix4e2 = 1;}
	var Pix4e3 = this.getFieldValue('Pix4e3'); if(Pix4e3 == 'FALSE'){Pix4e3 = 0;}else{Pix4e3 = 1;}
	var Pix4e4 = this.getFieldValue('Pix4e4'); if(Pix4e4 == 'FALSE'){Pix4e4 = 0;}else{Pix4e4 = 1;}
    var Pix4e5 = this.getFieldValue('Pix4e5'); if(Pix4e5 == 'FALSE'){Pix4e5 = 0;}else{Pix4e5 = 1;}
	var Pix4e6 = this.getFieldValue('Pix4e6'); if(Pix4e6 == 'FALSE'){Pix4e6 = 0;}else{Pix4e6 = 1;}
	var Pix4e7 = this.getFieldValue('Pix4e7'); if(Pix4e7 == 'FALSE'){Pix4e7 = 0;}else{Pix4e7 = 1;}
	
	var Pix5e0 = this.getFieldValue('Pix5e0'); if(Pix5e0 == 'FALSE'){Pix5e0 = 0;}else{Pix5e0 = 1;}
	var Pix5e1 = this.getFieldValue('Pix5e1'); if(Pix5e1 == 'FALSE'){Pix5e1 = 0;}else{Pix5e1 = 1;}
	var Pix5e2 = this.getFieldValue('Pix5e2'); if(Pix5e2 == 'FALSE'){Pix5e2 = 0;}else{Pix5e2 = 1;}
	var Pix5e3 = this.getFieldValue('Pix5e3'); if(Pix5e3 == 'FALSE'){Pix5e3 = 0;}else{Pix5e3 = 1;}
	var Pix5e4 = this.getFieldValue('Pix5e4'); if(Pix5e4 == 'FALSE'){Pix5e4 = 0;}else{Pix5e4 = 1;}
    var Pix5e5 = this.getFieldValue('Pix5e5'); if(Pix5e5 == 'FALSE'){Pix5e5 = 0;}else{Pix5e5 = 1;}
	var Pix5e6 = this.getFieldValue('Pix5e6'); if(Pix5e6 == 'FALSE'){Pix5e6 = 0;}else{Pix5e6 = 1;}
	var Pix5e7 = this.getFieldValue('Pix5e7'); if(Pix5e7 == 'FALSE'){Pix5e7 = 0;}else{Pix5e7 = 1;}
	
	var Pix6e0 = this.getFieldValue('Pix6e0'); if(Pix6e0 == 'FALSE'){Pix6e0 = 0;}else{Pix6e0 = 1;}
	var Pix6e1 = this.getFieldValue('Pix6e1'); if(Pix6e1 == 'FALSE'){Pix6e1 = 0;}else{Pix6e1 = 1;}
	var Pix6e2 = this.getFieldValue('Pix6e2'); if(Pix6e2 == 'FALSE'){Pix6e2 = 0;}else{Pix6e2 = 1;}
	var Pix6e3 = this.getFieldValue('Pix6e3'); if(Pix6e3 == 'FALSE'){Pix6e3 = 0;}else{Pix6e3 = 1;}
	var Pix6e4 = this.getFieldValue('Pix6e4'); if(Pix6e4 == 'FALSE'){Pix6e4 = 0;}else{Pix6e4 = 1;}
    var Pix6e5 = this.getFieldValue('Pix6e5'); if(Pix6e5 == 'FALSE'){Pix6e5 = 0;}else{Pix6e5 = 1;}
	var Pix6e6 = this.getFieldValue('Pix6e6'); if(Pix6e6 == 'FALSE'){Pix6e6 = 0;}else{Pix6e6 = 1;}
	var Pix6e7 = this.getFieldValue('Pix6e7'); if(Pix6e7 == 'FALSE'){Pix6e7 = 0;}else{Pix6e7 = 1;}
	
	var Pix7e0 = this.getFieldValue('Pix7e0'); if(Pix7e0 == 'FALSE'){Pix7e0 = 0;}else{Pix7e0 = 1;}
	var Pix7e1 = this.getFieldValue('Pix7e1'); if(Pix7e1 == 'FALSE'){Pix7e1 = 0;}else{Pix7e1 = 1;}
	var Pix7e2 = this.getFieldValue('Pix7e2'); if(Pix7e2 == 'FALSE'){Pix7e2 = 0;}else{Pix7e2 = 1;}
	var Pix7e3 = this.getFieldValue('Pix7e3'); if(Pix7e3 == 'FALSE'){Pix7e3 = 0;}else{Pix7e3 = 1;}
	var Pix7e4 = this.getFieldValue('Pix7e4'); if(Pix7e4 == 'FALSE'){Pix7e4 = 0;}else{Pix7e4 = 1;}
    var Pix7e5 = this.getFieldValue('Pix7e5'); if(Pix7e5 == 'FALSE'){Pix7e5 = 0;}else{Pix7e5 = 1;}
	var Pix7e6 = this.getFieldValue('Pix7e6'); if(Pix7e6 == 'FALSE'){Pix7e6 = 0;}else{Pix7e6 = 1;}
	var Pix7e7 = this.getFieldValue('Pix7e7'); if(Pix7e7 == 'FALSE'){Pix7e7 = 0;}else{Pix7e7 = 1;}

	
	
 Blockly.Arduino.definitions_['minilcdi2c_setcursor_draw' + nomer] = 'const uint8_t customChar'+nomer+'[] U8G_PROGMEM = { \n '+
' B'+Pix0e0+''+Pix0e1+''+Pix0e2+''+Pix0e3+''+Pix0e4+''+Pix0e5+''+Pix0e6+''+Pix0e7+', \n'+
'  B'+Pix1e0+''+Pix1e1+''+Pix1e2+''+Pix1e3+''+Pix1e4+''+Pix1e5+''+Pix1e6+''+Pix1e7+', \n'+
'  B'+Pix2e0+''+Pix2e1+''+Pix2e2+''+Pix2e3+''+Pix2e4+''+Pix2e5+''+Pix2e6+''+Pix2e7+', \n'+
'  B'+Pix3e0+''+Pix3e1+''+Pix3e2+''+Pix3e3+''+Pix3e4+''+Pix3e5+''+Pix3e6+''+Pix3e7+', \n'+
'  B'+Pix4e0+''+Pix4e1+''+Pix4e2+''+Pix4e3+''+Pix4e4+''+Pix4e5+''+Pix4e6+''+Pix4e7+', \n'+
'  B'+Pix5e0+''+Pix5e1+''+Pix5e2+''+Pix5e3+''+Pix5e4+''+Pix5e5+''+Pix5e6+''+Pix5e7+', \n'+
'  B'+Pix6e0+''+Pix6e1+''+Pix6e2+''+Pix6e3+''+Pix6e4+''+Pix6e5+''+Pix6e6+''+Pix6e7+', \n'+
'  B'+Pix7e0+''+Pix7e1+''+Pix7e2+''+Pix7e3+''+Pix7e4+''+Pix7e5+''+Pix7e6+''+Pix7e7+' \n'+
'}; \n';
 
  var code = ' ';
  return code;
};

Blockly.Arduino['lcd_128x64px_spi_draw_pl'] = function(block) {
    var nomer = block.getFieldValue("TEXT");
	var rowx =  Blockly.Arduino.valueToCode(block, 'print_x', Blockly.Arduino.ORDER_ATOMIC);
	var rowy =  Blockly.Arduino.valueToCode(block, 'print_y', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'u8g.drawBitmapP( '+rowx+', '+rowy+', 1, 8, customChar'+nomer+'); \n ';
  return code;
};

 Blockly.Arduino['lcd_128x128px_spi'] = function(block) {

var pin1 = Blockly.Arduino.valueToCode(block, 'pin1', Blockly.Arduino.ORDER_ATOMIC);
var pin2 = Blockly.Arduino.valueToCode(block, 'pin2', Blockly.Arduino.ORDER_ATOMIC);
var pin3 = Blockly.Arduino.valueToCode(block, 'pin3', Blockly.Arduino.ORDER_ATOMIC);
var color = this.getFieldValue('color'); 
 
var dp = this.getFieldValue('dp'); 

Blockly.Arduino.definitions_['lcd_128x128px_spi'] = '#include <SPI.h>   \n #include <Adafruit_GFX.h>   \n #include <Adafruit_ST7735.h>   \n Adafruit_ST7735 tft1=Adafruit_ST7735('+pin1+','+pin2+','+pin3+');  \n ';

Blockly.Arduino.setups_['setups_lcd_128x128px_spi']='   tft1.initR('+color+');  \n  tft1.setRotation('+dp+'); \n tft1.fillScreen(ST7735_BLACK);  \n  ';
var code = ' ';

return code;
};
 
  Blockly.Arduino['lcd_128x128px_spi_tv'] = function(block) {
 
var format = this.getFieldValue('format'); 
  
Blockly.Arduino.definitions_['lcd_128x128px_spi_tv'] = ' #include <TVout.h> \n #include <fontALL.h> \n TVout TV; \n   ';

Blockly.Arduino.setups_['setup_lcd_128x128px_spi_tv']=' TV.begin('+format+',120,96); \n    ';

var code = ' ';

return code;
};


Blockly.Arduino['lcd_128x128px_spi_tv_vga'] = function(block) {
 
var format = this.getFieldValue('format'); 
  
Blockly.Arduino.definitions_['lcd_128x128px_spi_tv'] = '  \n'+
'  #include <VGAX.h>   \n'+
'  #define FNT_UFONT_HEIGHT 6   \n'+
'  #define FNT_UFONT_SYMBOLS_COUNT 95   \n'+
'      \n'+
'  const unsigned char fnt_ufont_data[FNT_UFONT_SYMBOLS_COUNT][1+FNT_UFONT_HEIGHT] PROGMEM={   \n'+
'  { 1, 128, 128, 128,   0, 128,   0, }, //glyph ! code=0   \n'+
'  { 3, 160, 160,   0,   0,   0,   0, }, //glyph " code=1   \n'+
'  { 5,  80, 248,  80, 248,  80,   0, }, //glyph # code=2   \n'+
'  { 5, 120, 160, 112,  40, 240,   0, }, //glyph $ code=3   \n'+
'  { 5, 136,  16,  32,  64, 136,   0, }, //glyph % code=4   \n'+
'  { 5,  96, 144, 104, 144, 104,   0, }, //glyph & code=5   \n'+
'  { 2, 128,  64,   0,   0,   0,   0, }, //glyph  code=6   \n'+
'  { 2,  64, 128, 128, 128,  64,   0, }, //glyph ( code=7   \n'+
'  { 2, 128,  64,  64,  64, 128,   0, }, //glyph ) code=8   \n'+
'  { 3,   0, 160,  64, 160,   0,   0, }, //glyph * code=9   \n'+
'  { 3,   0,  64, 224,  64,   0,   0, }, //glyph + code=10   \n'+
'  { 2,   0,   0,   0,   0, 128,  64, }, //glyph , code=11   \n'+
'  { 3,   0,   0, 224,   0,   0,   0, }, //glyph - code=12   \n'+
'  { 1,   0,   0,   0,   0, 128,   0, }, //glyph . code=13   \n'+
'  { 5,   8,  16,  32,  64, 128,   0, }, //glyph / code=14   \n'+
'  { 4,  96, 144, 144, 144,  96,   0, }, //glyph 0 code=15   \n'+
'  { 3,  64, 192,  64,  64, 224,   0, }, //glyph 1 code=16   \n'+
'  { 4, 224,  16,  96, 128, 240,   0, }, //glyph 2 code=17   \n'+
'  { 4, 224,  16,  96,  16, 224,   0, }, //glyph 3 code=18   \n'+
'  { 4, 144, 144, 240,  16,  16,   0, }, //glyph 4 code=19   \n'+
'  { 4, 240, 128, 224,  16, 224,   0, }, //glyph 5 code=20   \n'+
'  { 4,  96, 128, 224, 144,  96,   0, }, //glyph 6 code=21   \n'+
'  { 4, 240,  16,  32,  64,  64,   0, }, //glyph 7 code=22   \n'+
'  { 4,  96, 144,  96, 144,  96,   0, }, //glyph 8 code=23   \n'+
'  { 4,  96, 144, 112,  16,  96,   0, }, //glyph 9 code=24   \n'+
'  { 1,   0, 128,   0, 128,   0,   0, }, //glyph : code=25   \n'+
'  { 2,   0, 128,   0,   0, 128,  64, }, //glyph ; code=26   \n'+
'  { 3,  32,  64, 128,  64,  32,   0, }, //glyph < code=27   \n'+
'  { 3,   0, 224,   0, 224,   0,   0, }, //glyph = code=28   \n'+
'  { 3, 128,  64,  32,  64, 128,   0, }, //glyph > code=29   \n'+
'  { 4, 224,  16,  96,   0,  64,   0, }, //glyph ? code=30   \n'+
'  { 4,  96, 144, 176, 128, 112,   0, }, //glyph @ code=31   \n'+
'  { 4,  96, 144, 240, 144, 144,   0, }, //glyph A code=32   \n'+
'  { 4, 224, 144, 224, 144, 224,   0, }, //glyph B code=33   \n'+
'  { 4, 112, 128, 128, 128, 112,   0, }, //glyph C code=34   \n'+
'  { 4, 224, 144, 144, 144, 224,   0, }, //glyph D code=35   \n'+
'  { 4, 240, 128, 224, 128, 240,   0, }, //glyph E code=36   \n'+
'  { 4, 240, 128, 224, 128, 128,   0, }, //glyph F code=37   \n'+
'  { 4, 112, 128, 176, 144, 112,   0, }, //glyph G code=38   \n'+
'  { 4, 144, 144, 240, 144, 144,   0, }, //glyph H code=39   \n'+
'  { 3, 224,  64,  64,  64, 224,   0, }, //glyph I code=40   \n'+
'  { 4, 240,  16,  16, 144,  96,   0, }, //glyph J code=41   \n'+
'  { 4, 144, 160, 192, 160, 144,   0, }, //glyph K code=42   \n'+
'  { 4, 128, 128, 128, 128, 240,   0, }, //glyph L code=43   \n'+
'  { 5, 136, 216, 168, 136, 136,   0, }, //glyph M code=44   \n'+
'  { 4, 144, 208, 176, 144, 144,   0, }, //glyph N code=45   \n'+
'  { 4,  96, 144, 144, 144,  96,   0, }, //glyph O code=46   \n'+
'  { 4, 224, 144, 224, 128, 128,   0, }, //glyph P code=47   \n'+
'  { 4,  96, 144, 144, 144,  96,  16, }, //glyph Q code=48   \n'+
'  { 4, 224, 144, 224, 160, 144,   0, }, //glyph R code=49   \n'+
'  { 4, 112, 128,  96,  16, 224,   0, }, //glyph S code=50   \n'+
'  { 3, 224,  64,  64,  64,  64,   0, }, //glyph T code=51   \n'+
'  { 4, 144, 144, 144, 144,  96,   0, }, //glyph U code=52   \n'+
'  { 3, 160, 160, 160, 160,  64,   0, }, //glyph V code=53   \n'+
'  { 5, 136, 168, 168, 168,  80,   0, }, //glyph W code=54   \n'+
'  { 4, 144, 144,  96, 144, 144,   0, }, //glyph X code=55   \n'+
'  { 3, 160, 160,  64,  64,  64,   0, }, //glyph Y code=56   \n'+
'  { 4, 240,  16,  96, 128, 240,   0, }, //glyph Z code=57   \n'+
'  { 2, 192, 128, 128, 128, 192,   0, }, //glyph [ code=58   \n'+
'  { 5, 128,  64,  32,  16,   8,   0, }, //glyph \ code=59   \n'+
'  { 2, 192,  64,  64,  64, 192,   0, }, //glyph ] code=60   \n'+
'  { 5,  32,  80, 136,   0,   0,   0, }, //glyph ^ code=61   \n'+
'  { 4,   0,   0,   0,   0, 240,   0, }, //glyph _ code=62   \n'+
'  { 2, 128,  64,   0,   0,   0,   0, }, //glyph  code=63   \n'+
'  { 3,   0, 224,  32, 224, 224,   0, }, //glyph a code=64   \n'+
'  { 3, 128, 224, 160, 160, 224,   0, }, //glyph b code=65   \n'+
'  { 3,   0, 224, 128, 128, 224,   0, }, //glyph c code=66   \n'+
'  { 3,  32, 224, 160, 160, 224,   0, }, //glyph d code=67   \n'+
'  { 3,   0, 224, 224, 128, 224,   0, }, //glyph e code=68   \n'+
'  { 2,  64, 128, 192, 128, 128,   0, }, //glyph f code=69   \n'+
'  { 3,   0, 224, 160, 224,  32, 224, }, //glyph g code=70   \n'+
'  { 3, 128, 224, 160, 160, 160,   0, }, //glyph h code=71   \n'+
'  { 1, 128,   0,   128, 128, 128, 0, }, //glyph i code=72   \n'+
'  { 2,   0, 192,  64,  64,  64, 128, }, //glyph j code=73   \n'+
'  { 3, 128, 160, 192, 160, 160,   0, }, //glyph k code=74   \n'+
'  { 1, 128, 128, 128, 128, 128,   0, }, //glyph l code=75   \n'+
'  { 5,   0, 248, 168, 168, 168,   0, }, //glyph m code=76   \n'+
'  { 3,   0, 224, 160, 160, 160,   0, }, //glyph n code=77   \n'+
'  { 3,   0, 224, 160, 160, 224,   0, }, //glyph o code=78   \n'+
'  { 3,   0, 224, 160, 160, 224, 128, }, //glyph p code=79   \n'+
'  { 3,   0, 224, 160, 160, 224,  32, }, //glyph q code=80   \n'+
'  { 3,   0, 224, 128, 128, 128,   0, }, //glyph r code=81   \n'+
'  { 2,   0, 192, 128,  64, 192,   0, }, //glyph s code=82   \n'+
'  { 3,  64, 224,  64,  64,  64,   0, }, //glyph t code=83   \n'+
'  { 3,   0, 160, 160, 160, 224,   0, }, //glyph u code=84   \n'+
'  { 3,   0, 160, 160, 160,  64,   0, }, //glyph v code=85   \n'+
'  { 5,   0, 168, 168, 168,  80,   0, }, //glyph w code=86   \n'+
'  { 3,   0, 160,  64, 160, 160,   0, }, //glyph x code=87   \n'+
'  { 3,   0, 160, 160, 224,  32, 224, }, //glyph y code=88   \n'+
'  { 2,   0, 192,  64, 128, 192,   0, }, //glyph z code=89   \n'+
'  { 3,  96,  64, 192,  64,  96,   0, }, //glyph { code=90   \n'+
'  { 1, 128, 128, 128, 128, 128,   0, }, //glyph | code=91   \n'+
'  { 3, 192,  64,  96,  64, 192,   0, }, //glyph } code=92   \n'+
'  { 3,  96, 192,   0,   0,   0,   0, }, //glyph ~ code=93   \n'+
'  { 4,  48,  64, 224,  64, 240,   0, }, //glyph £ code=94   \n'+
'  };   \n'+
'  VGAX vga;   \n'+
'   \n   ';

Blockly.Arduino.setups_['setup_lcd_128x128px_spi_tv']='   vga.begin(); \n  vga.clear(0); \n    ';

var code = ' ';

return code;
};


 Blockly.Arduino['lcd_128x128px_spi_text'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
var color = this.getFieldValue('color'); 
var size = this.getFieldValue('size'); 


var code = '     tft1.setCursor('+X_Nokia+', '+Y_Nokia+');  \n   tft1.setTextColor('+color+',0);  \n    tft1.setTextSize('+size+');  \n   tft1.println('+texttoprint+');  \n	';

return code;
};

 Blockly.Arduino['lcd_128x128px_spi_text_tv'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
//var color = this.getFieldValue('color'); 
var size = this.getFieldValue('font'); 


var code = '    TV.select_font('+size+'); \n  TV.println('+X_Nokia+', '+Y_Nokia+','+texttoprint+'); \n ';
return code;
};

 Blockly.Arduino['lcd_128x128px_spi_text_tv_vga'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
var size = this.getFieldValue('font'); 

var id = Math.floor(Math.random() * 9999999) + 1;
var code = 'static const char ard'+id+'[] PROGMEM='+texttoprint+';  \n  vga.printPROGMEM((byte*)fnt_ufont_data, FNT_UFONT_SYMBOLS_COUNT, FNT_UFONT_HEIGHT, 3, 1, ard'+id+', '+X_Nokia+', '+Y_Nokia+', '+size+');   \n ';
 
return code;
};

 Blockly.Arduino['lcd_128x128px_spi_text_tv_vga1'] = function(block) {
  
var code = ' vga.clear(0);  \n ';
 
return code;
};

 Blockly.Arduino['lcd_128x128px_spi_text_tv_vga2'] = function(block) {
  var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var code = ' vga.delay('+X_Nokia+');  \n ';
 
return code;
};

 Blockly.Arduino['lcd_128x128px_spi_text_tv_delay'] = function(block) {

var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
  
var code = ' TV.delay('+Y_Nokia+');   \n ';
return code;
};

 Blockly.Arduino['lcd_128x128px_spi_pix'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var color = this.getFieldValue('color'); 

var code = ' tft1.drawPixel('+X_Nokia+', '+Y_Nokia+','+color+'); \n	';

return code;
};

 Blockly.Arduino['lcd_128x128px_spi_line'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var X_Nokia1 = Blockly.Arduino.valueToCode(block, 'X_Nokia1', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia1 = Blockly.Arduino.valueToCode(block, 'Y_Nokia1', Blockly.Arduino.ORDER_ATOMIC);
var color = this.getFieldValue('color'); 

var code = 'tft1.drawLine('+X_Nokia+', '+Y_Nokia+','+X_Nokia1+', '+Y_Nokia1+','+color+');  \n	';

return code;
};

 Blockly.Arduino['lcd_128x128px_spi_line_tv'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var X_Nokia1 = Blockly.Arduino.valueToCode(block, 'X_Nokia1', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia1 = Blockly.Arduino.valueToCode(block, 'Y_Nokia1', Blockly.Arduino.ORDER_ATOMIC);
//var color = this.getFieldValue('color'); 

var code = 'TV.draw_line('+X_Nokia+', '+Y_Nokia+','+X_Nokia1+','+Y_Nokia1+',INVERT);  \n	';

return code;
};
 Blockly.Arduino['lcd_128x128px_spi_line_tv_none'] = function(block) {

 
var code = ' TV.clear_screen();  \n	';

return code;
};
 Blockly.Arduino['lcd_128x128px_spi_line_tv_box'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var X_Nokia1 = Blockly.Arduino.valueToCode(block, 'X_Nokia1', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia1 = Blockly.Arduino.valueToCode(block, 'Y_Nokia1', Blockly.Arduino.ORDER_ATOMIC);
var color = this.getFieldValue('color'); 

if(color == 1){
var code = ' TV.draw_rect('+X_Nokia+', '+Y_Nokia+','+X_Nokia1+','+Y_Nokia1+',WHITE);  \n	';
}
if(color == 0){
var code = ' TV.draw_rect('+X_Nokia+', '+Y_Nokia+','+X_Nokia1+','+Y_Nokia1+',WHITE,INVERT);  \n	';
}
  
return code;
};

 Blockly.Arduino['lcd_128x128px_spi_box'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var X_Nokia2 = Blockly.Arduino.valueToCode(block, 'X_Nokia2', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia2 = Blockly.Arduino.valueToCode(block, 'Y_Nokia2', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia3 = Blockly.Arduino.valueToCode(block, 'Y_Nokia3', Blockly.Arduino.ORDER_ATOMIC);
var color = this.getFieldValue('color'); 

var logic = this.getFieldValue('LOGIC');
  
  if(logic == 'FALSE'){
  var code = ' tft1.drawRoundRect('+X_Nokia+', '+Y_Nokia+', '+Y_Nokia2+', '+X_Nokia2+', '+Y_Nokia3+', '+color+');   \n	';
  }else{
  var code = ' tft1.fillRoundRect('+X_Nokia+', '+Y_Nokia+', '+Y_Nokia2+', '+X_Nokia2+', '+Y_Nokia3+', '+color+');   \n	';

  }
return code;
};

 Blockly.Arduino['lcd_tah_spi'] = function(block) {
 
Blockly.Arduino.definitions_['lcd_tah_spi'] = '  #include <stdint.h> \n  #include <LCD.h> \n  #include <SPI.h> \n  #include <XPT2046.h> \n  #include <Touch.h> \n  #include <EEPROM.h> \n ';

Blockly.Arduino.setups_['setups_lcd_tah_spi']='   SPI.setDataMode(SPI_MODE3); \n SPI.setBitOrder(MSBFIRST); \n SPI.setClockDivider(SPI_CLOCK_DIV4); \n  SPI.begin(); \n  Tft.lcd_init(); \n Tft.lcd_clear_screen(BLACK);   \n  ';
var code = ' ';

return code;
};

 Blockly.Arduino['lcd_tah_spi_text'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
var color = this.getFieldValue('color'); 
var size = this.getFieldValue('size'); 


var code = '  Tft.lcd_display_string('+X_Nokia+', '+Y_Nokia+', (const uint8_t *)'+texttoprint+', FONT_'+size+', '+color+');  \n	';

return code;
};

 Blockly.Arduino['lcd_tah_spi_int'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
var color = this.getFieldValue('color'); 
var size = this.getFieldValue('size'); 


var code = ' Tft.lcd_display_num('+X_Nokia+', '+Y_Nokia+', '+texttoprint+', 4, '+size+', '+color+');  \n	';

return code;
};

Blockly.Arduino['lcd_tah_spi_box'] = function(block) {

var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var X_Nokia2 = Blockly.Arduino.valueToCode(block, 'X_Nokia2', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia2 = Blockly.Arduino.valueToCode(block, 'Y_Nokia2', Blockly.Arduino.ORDER_ATOMIC);
var color = this.getFieldValue('color'); 

var logic = this.getFieldValue('LOGIC');
  
  if(logic == 'FALSE'){
  var code = ' Tft.lcd_draw_rect('+X_Nokia+', '+Y_Nokia+', '+Y_Nokia2+', '+X_Nokia2+', '+color+');   \n	';
  }else{
  var code = ' Tft.lcd_fill_rect('+X_Nokia+', '+Y_Nokia+', '+Y_Nokia2+', '+X_Nokia2+', '+color+');   \n	';

  }
return code;
};

Blockly.Arduino['lcd_tah_spi_tah'] = function (block) {   
 var branch = Blockly.Arduino.statementToCode(this, "CONTENT"); 
var X_Nokia = Blockly.Arduino.valueToCode(block, 'X_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var X_Nokia2 = Blockly.Arduino.valueToCode(block, 'X_Nokia2', Blockly.Arduino.ORDER_ATOMIC);
var Y_Nokia2 = Blockly.Arduino.valueToCode(block, 'Y_Nokia2', Blockly.Arduino.ORDER_ATOMIC);
 Blockly.Arduino.definitions_['include_lcd_tah_spi_tah'] = 'int hwYpos; \n int hwXpos; \n';
 Blockly.Arduino.setups_['setups_lcd_tah_spi_tah']= 'Tp.tp_init();  \n Tp.tp_adjust();  \n Tp.tp_dialog();  \n  Tft.lcd_clear_screen(BLACK); \n';
 
  var code = '  hwXpos = EEPROM.read(250) * 2;  \n   hwYpos = EEPROM.read(251) * 2;  \n  Tp.tp_draw_board();  \n  if(hwYpos > '+Y_Nokia+' && hwYpos < '+Y_Nokia2+' && hwXpos > '+X_Nokia+' && hwXpos < '+X_Nokia2+'){  \n ' +
     branch + ' EEPROM.write(250, 0);  \n EEPROM.write(251, 0);  \n  } \n';
	 
  return code;
  return ""
};

     
	 
//леонардо


Blockly.Arduino['leonardo1'] = function(block) {
  var num_sensor1 =Blockly.Arduino.valueToCode(this, 'Sensor1', Blockly.Arduino.ORDER_ATOMIC); 
  var num_sensor2 =Blockly.Arduino.valueToCode(this, 'Sensor2', Blockly.Arduino.ORDER_ATOMIC);
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Mouse.move('+num_sensor1+','+num_sensor2+'); \n';
  //Mouse.move(200,200);
  return code;
};

Blockly.Arduino['leonardo2'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Mouse.click('+maus_direction+'); \n';
  
  return code;
};

Blockly.Arduino['leonardo3'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Mouse.press('+maus_direction+'); \n';
  
  return code;
};

Blockly.Arduino['leonardo4'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Mouse.release('+maus_direction+'); \n';
  
  return code;
};

Blockly.Arduino['leonardo5'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Keyboard.write(\''+maus_direction+'\'); \n';

  return code;
};
Blockly.Arduino['leonardo6'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Keyboard.press(\''+maus_direction+'\'); \n';

  return code;
};
Blockly.Arduino['leonardo7'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Keyboard.release(\''+maus_direction+'\'); \n';

  return code;
};
Blockly.Arduino['leonardo8'] = function(block) {
 
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = '\n Keyboard.releaseAll(); \n';

  return code;
};

Blockly.Arduino['leonardo9'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Keyboard.write('+maus_direction+'); \n';

  return code;
};
Blockly.Arduino['leonardo10'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Keyboard.press('+maus_direction+'); \n';

  return code;
};
Blockly.Arduino['leonardo11'] = function(block) {
  var maus_direction = this.getFieldValue('maus_DIR');
  
    Blockly.Arduino.definitions_['include_leonardo'] = '#include "Keyboard.h" \n #include "Mouse.h" \n';
	Blockly.Arduino.setups_['setup_leonardo'] = '  Mouse.begin(); \n  Keyboard.begin(); \n  delay(500); \n Serial.begin(9600); \n';
    
  var code = 'Keyboard.release('+maus_direction+'); \n';

  return code;
};

// прерывание

Blockly.Arduino['interrupts_attach'] = function (block) {

    var a = this.getFieldValue("PIN"), b = this.getFieldValue("MODE"), c = Blockly.Arduino.statementToCode(this, "CONTENT");
    Blockly.Arduino.setups_["setup_interrupt_" + a] = 'attachInterrupt(digitalPinToInterrupt('+a+'),interrupt_' + a + ',' + b + ');';
    Blockly.Arduino.definitions_["define_interrupt_" + a] = "void interrupt_" + a + "(){\n" + c + "}\n";
	
    return ""
};

// фоновый yield

Blockly.Arduino['interrupts_attach_yield'] = function (block) {

   // var a = this.getFieldValue("PIN"), b = this.getFieldValue("MODE"),
    var c = Blockly.Arduino.statementToCode(this, "CONTENT");
   // Blockly.Arduino.setups_["setup_interrupt_yield"] = 'attachInterrupt(digitalPinToInterrupt('+a+'),interrupt_' + a + ',' + b + ');';
    Blockly.Arduino.definitions_["define_interrupt_yield"] = "void yield (){\n" + c + "}\n";
	
    return ""
};

// обнулить инкодер



Blockly.Arduino['RotaryEncoder_None'] = function(block) {

  var dropdown_pin = Blockly.Arduino.valueToCode(block, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
 
	var code = 'encoder_1.write('+dropdown_pin+');\n';
  
  return code;
};

// esp8266 scan
Blockly.Arduino['base_code_esp8266'] = function(block) {
 var dropdown_pin1=block.getFieldValue("PIN1");
 var dropdown_pin2=block.getFieldValue("PIN2");
 var dropdown_speed1 = block.getFieldValue("SPEED1");
 var dropdown_speed2 = block.getFieldValue("SPEED2");
 var enter = ("\\r\\n");
 Blockly.Arduino.definitions_['define_base_code_esp8266']='#include <SoftwareSerial.h> \n SoftwareSerial esp8266('+ dropdown_pin1 +','+ dropdown_pin2 +'); \n\n String sendData(String command, const int timeout, boolean debug){ \n String response = ""; \n  esp8266.print(command); \n  long int time = millis(); \n  while((time+timeout) > millis()) { \n  while(esp8266.available()){ \n char c = esp8266.read(); \n  response+=c; \n } \n } \n if(debug){ \n Serial.print(response); \n } \n return response;   \n } \n  ';

 Blockly.Arduino.setups_['define_base_codenn_esp8266'] = ' Serial.begin('+ dropdown_speed1 +'); \n delay(1000); \n esp8266.begin('+ dropdown_speed2 +'); \n sendData("AT+RST'+enter+'", 3000, 1); \n delay (3000); \n sendData("AT+CWMODE=3'+enter+'", 3000, 1); \n delay (3000); \n sendData("AT+CWLAP'+enter+'", 4000, 1); \n delay (4000); \n';
};

Blockly.Arduino['base_conect_esp8266'] = function(block) {
 var dropdown_pin1=block.getFieldValue("PIN1");
 var dropdown_pin2=block.getFieldValue("PIN2");
 var dropdown_speed1 = block.getFieldValue("SPEED1");
 var dropdown_speed2 = block.getFieldValue("SPEED2");
 var login = block.getFieldValue("TEXT1");
 var pass = block.getFieldValue("TEXT2");
 var enter = ("\\r\\n");
 Blockly.Arduino.definitions_['define_base_codemm_esp8266']='  #include <EEPROM.h> \n int esp = 0; \n #include <SoftwareSerial.h> \n SoftwareSerial esp8266('+ dropdown_pin1 +','+ dropdown_pin2 +'); \n\n String sendData(String command, const int timeout, boolean debug){ \n String response = ""; \n  esp8266.print(command); \n  long int time = millis(); \n  while((time+timeout) > millis()) { \n  while(esp8266.available()){ \n char c = esp8266.read(); \n  response+=c; \n } \n } \n if(debug){ \n Serial.print(response); \n } \n return response;   \n } \n  ';
 var code = ' \n Serial.begin('+ dropdown_speed1 +'); \n esp8266.begin('+ dropdown_speed2 +'); \n sendData("AT+RST'+enter+'", 2000, 1); \n delay(1000); \n sendData("AT+CWJAP=\\"'+ login +'\\",\\"'+ pass +'\\"'+enter+'", 2000, 1); \n delay (3000); \n sendData("AT+CWMODE=1'+enter+'", 1500, 1); \n delay (1000); \n sendData("AT+CIFSR'+enter+'", 1500, 1); \n delay (1000); \n sendData("AT+CIPMUX=1'+enter+'", 1500, 1); \n delay (1000); \n sendData("AT+CIPSERVER=1,80'+enter+'", 1500, 1); \n';
return code;
};

Blockly.Arduino["base_define_for_esp8266"]=function(block){
 var repeats = block.getFieldValue("TEXT");
 var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code = 'if(esp8266.available()){ \n if(esp8266.find("+IPD,")){ \n delay(1000); \n int connectionId = esp8266.read()-48; \n esp8266.find("i/"); \n int esp = (esp8266.read()-48); \n EEPROM.write(0,esp); \n String webpage = "<title>' + repeats + '</title>' +
      branch + ' "; \n  String cipSend = "AT+CIPSEND="; \n cipSend += connectionId; \n cipSend += ","; \n cipSend +=webpage.length(); \n cipSend +="\\r\\n"; \n sendData(cipSend,2000,1); \n sendData(webpage,3000,1); \n String closeCommand = "AT+CIPCLOSE="; \n closeCommand+=connectionId; \n closeCommand+="\\r\\n"; \n sendData(closeCommand,3000,1); \n } \n } \n';
  return code;
};

Blockly.Arduino['base_conect_esp8266_text'] = function(block) {
var login = block.getFieldValue("TEXT");
var code = '<p>'+login+'</p>';
return code;
};

Blockly.Arduino['base_conect_esp8266_button_r'] = function(block) {
	var dropdown = block.getFieldValue("SPEED");
	var login = block.getFieldValue("TEXT");
	switch (dropdown) {
        case "0":
            var hrl = "'/i/0'";
            break;
        case "1":
            var hrl = "'/i/1'";
            break;
        case "2":
            var hrl = "'/i/2'";
            break;
        case "3":
            var hrl = "'/i/3'";
            break;
        case "4":
            var hrl = "'/i/4'";
            break;
        case "5":
            var hrl = "'/i/5'";
            break;
        case "6":
            var hrl = "'/i/6'";
            break;
        case "7":
            var hrl = "'/i/7'";
            break;
		case "8":
            var hrl = "'/i/8'";
            break;
		case "9":
            var hrl = "'/i/9'";
            break;
        default:
            throw " ";
    }
	 var rik = "'";
 
	var code = '<a href='+hrl+' style='+rik+'padding:10px 15px;border:1px solid #777;color:#777;text-decoration:none;'+rik+'>'+login+'</a>  ';
return code;
};

Blockly.Arduino['base_code_entree_esp8266_button']=function(block){
	var code='EEPROM.read(0)';
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};

Blockly.Arduino['base_conect_esp8266_text_kode'] = function(block) {
var login = block.getFieldValue("TEXT");
var code = ''+login+'';
return code;
};

Blockly.Arduino['esp8266_setcursor'] = function(block) {

  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);

  var code = '<p>" + String('+value_texttoprint+') + "</p>';

  return code;
};
 Blockly.Arduino['base_conect_esp8266_s'] = function(block) {
 var dropdown_pin1=block.getFieldValue("PIN1");
 var dropdown_pin2=block.getFieldValue("PIN2");
 var dropdown_speed1 = block.getFieldValue("SPEED1");
 var dropdown_speed2 = block.getFieldValue("SPEED2");
 var enter = ("\\r\\n");
 Blockly.Arduino.definitions_['define_base_codemm_esp8266']='  #include <EEPROM.h> \n int esp = 0; \n #include <SoftwareSerial.h> \n SoftwareSerial esp8266('+ dropdown_pin1 +','+ dropdown_pin2 +'); \n\n String sendData(String command, const int timeout, boolean debug){ \n String response = ""; \n  esp8266.print(command); \n  long int time = millis(); \n  while((time+timeout) > millis()) { \n  while(esp8266.available()){ \n char c = esp8266.read(); \n  response+=c; \n } \n } \n if(debug){ \n Serial.print(response); \n } \n return response;   \n } \n  ';
 var code = ' \n Serial.begin('+ dropdown_speed1 +'); \n esp8266.begin('+ dropdown_speed2 +'); \n sendData("AT+RST'+enter+'", 2000, 1); \n delay (3000); \n sendData("AT+CWMODE=2'+enter+'", 1500, 1); \n delay (1000); \n sendData("AT+CIFSR'+enter+'", 1500, 1); \n delay (1000); \n sendData("AT+CIPMUX=1'+enter+'", 1500, 1); \n delay (1000); \n sendData("AT+CIPSERVER=1,80'+enter+'", 1500, 1); \n';
return code;
};

Blockly.Arduino['base_conect_esp8266_12f'] = function(block) {
 var login = block.getFieldValue("TEXT1");
 var pass = block.getFieldValue("TEXT2");
 var enter = ("\\r\\n");
 var rr = ("('r')");
 Blockly.Arduino.definitions_['base_conect_esp8266_12f']=' #include <ESP8266WiFi.h> \n WiFiServer server(80);  \n  ';
 Blockly.Arduino.setups_['define_base_conect_esp8266_12f'] = '   Serial.begin(9600); \n   WiFi.begin("'+login+'", "'+pass+'");  \n  while (WiFi.status() != WL_CONNECTED){ \n   delay(500); \n     Serial.print("."); \n   } \n server.begin(); \n   Serial.println(WiFi.localIP()); \n';

 var code = '   WiFiClient client = server.available();  \n  String lineal = client. readStringUntil'+rr+';  \n';
return code;
};

Blockly.Arduino['base_conect_esp8266_12f_esp'] = function(block) {
 var login = block.getFieldValue("TEXT1");
 var pass = block.getFieldValue("TEXT2");


 Blockly.Arduino.definitions_['base_conect_esp8266_12f']=' #include <WiFi.h> \n #include <WebServer.h> \n WebServer server(80);  \n  ';
 Blockly.Arduino.setups_['define_base_conect_esp8266_12f'] = '   Serial.begin(9600); \n  delay(1000); \n WiFi.begin("'+login+'", "'+pass+'");  \n  while (WiFi.status() != WL_CONNECTED){ \n   delay(1000); \n     Serial.print("."); \n   } \n Serial.println(WiFi.localIP()); \n server.begin(); \n ';

 var code = '   server.handleClient();  \n ';
return code;
};

Blockly.Arduino["base_define_for_esp8266_12f"]=function(block){
 var repeats = block.getFieldValue("TEXT");
 var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code = '  if(lineal.indexOf("ID='+repeats+'")>0){   \n  ' +
      branch + ' }  \n';
  return code;
};

Blockly.Arduino["base_define_for_esp8266_12f_esp"]=function(block){
 var repeats = block.getFieldValue("TEXT");
 var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code = '  if(lineal.indexOf("ID='+repeats+'")>0){   \n  ' +
      branch + ' }  \n';
  return code;
};

Blockly.Arduino["base_define_ttl_uart_top"]=function(block){
 Blockly.Arduino.definitions_['base_define_ttl_uart_top']=' String UARTDISPLAY = "  ";  \n  ';
var code = '  UARTDISPLAY = mySerial.read();  \n';
return code;
};
Blockly.Arduino["base_define_ttl_uart"]=function(block){
 var repeats = block.getFieldValue("TEXT");
 var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code = ' if (UARTDISPLAY == "'+repeats+'") {\n ' +
 
      branch + ' }  \n   ';
  return code;
};

Blockly.Arduino['base_conect_esp8266_button_12f'] = function(block) {
	var dropdown = block.getFieldValue("TEXT2");
	var login = block.getFieldValue("TEXT");
    var rik = "'";
	var code = 'client.println(" <a href='+rik+'./?ID='+dropdown+''+rik+' style='+rik+'padding:10px 15px;mergin:10px;border:1px solid #777;color:#777;text-decoration:none;'+rik+'>'+login+'</a> "); \n ';
return code;
};
      
         
 Blockly.Arduino['base_conect_esp8266_title_12f'] = function(block) {
	var login = block.getFieldValue("TEXT");
	var code = 'client.println("<!DOCTYPE html> <html lang=ru> <head> <meta charset=UTF-8> <title>'+login+'</title> <meta name=viewport content=width=200> </head> <body data-attr=ru>"); \n ';
return code;
}; 
 Blockly.Arduino['base_conect_esp8266_title_12f_esp'] = function(block) {
	var login = block.getFieldValue("TEXT");
	var code = ' server.send(200, "text/html", "<!DOCTYPE html> <html lang=ru> <head> <meta charset=UTF-8> <title>'+login+'</title> <meta name=viewport content=width=200> </head> <body data-attr=ru>"); \n ';
return code;
};
     
 Blockly.Arduino['base_conect_esp8266_par_12f'] = function(block) {
	var login = block.getFieldValue("TEXT");
	var code = 'client.println(" <p>'+login+'</p> "); \n ';
return code;
}; 
 Blockly.Arduino['base_conect_esp8266_par_12f_esp'] = function(block) {
	var login = block.getFieldValue("TEXT");
	var code = 'server.send(200, "text/html", " <p>'+login+'</p> "); \n ';
return code;
};  
 Blockly.Arduino['base_conect_esp8266_kode_12f'] = function(block) {
	var login = block.getFieldValue("TEXT");
	var code = 'client.println("'+login+'"); \n ';
return code;
};    

 Blockly.Arduino['base_form_none'] = function(block) {
	//var login = block.getFieldValue("TEXT");
	var code = 'break; \n ';
return code;
};  
 Blockly.Arduino['base_form_none2'] = function(block) {
	//var login = block.getFieldValue("TEXT");
	var code = 'continue; \n ';
return code;
};
 Blockly.Arduino['base_form_none3'] = function(block) {

 var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  var loopVar = Blockly.Arduino.variableDB_.getName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'while (1){ \n' +
     // loopVar + ' < ' + repeats + '; ' +
     // loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};




Blockly.Arduino['esp8266_setcursor_12f'] = function(block) {

  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'client.print('+value_texttoprint+'); \n ';    

  return code;
};

Blockly.Arduino['base_form_RR'] = function(block) {

  var value_texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
var dropdown_pin = block.getFieldValue("SPEED");
  var code = ' '+value_texttoprint+''+dropdown_pin+' ; \n ';    

  return code;
};

Blockly.Arduino['interrupts_attach1'] = function(block) {

var dropdown_pin = block.getFieldValue("PIN");
  var code = ' detachInterrupt('+dropdown_pin+'); \n ';    
 
  return code;
};
Blockly.Arduino['interrupts_attach2'] = function(block) {


  var code = ' interrupts(); \n ';    
 
  return code;
};
Blockly.Arduino['interrupts_attach3'] = function(block) {


  var code = ' noInterrupts(); \n ';    
 
  return code;
};


Blockly.Arduino["logic_van"]=function(block){
    var dropdown_pin=block.getFieldValue("SPEED1");
    var code=''+ dropdown_pin +'';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["logic_hilov"]=function(block){
    var dropdown_pin=block.getFieldValue("SPEED1");
    var code=''+ dropdown_pin +'';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["logic_ONOFF"]=function(block){
    var dropdown_pin=block.getFieldValue("SPEED1");
    var code=''+ dropdown_pin +'';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["logic_N_pin"]=function(block){
    var dropdown_pin=block.getFieldValue("SPEED1");
    var code=''+ dropdown_pin +'';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
 Blockly.Arduino["logic_N_pin2"]=function(block){
    var dropdown_pin=block.getFieldValue("SPEED1");
    var code=''+ dropdown_pin +'';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
 Blockly.Arduino["logic_N_pin3"]=function(block){
    var dropdown_pin=block.getFieldValue("SPEED1");
    var code=''+ dropdown_pin +'';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["logic_N_pinESP"]=function(block){
    var dropdown_pin=block.getFieldValue("SPEED1");
    var code=''+ dropdown_pin +'';
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};






Blockly.Arduino['telegram_con'] = function(block) {
	var Pass_wifi = block.getFieldValue("TEXT2");
	var Name_wifi = block.getFieldValue("TEXT1");
    var token_bot = block.getFieldValue("TEXT3");
    var branch = Blockly.Arduino.statementToCode(this, 'DO');

Blockly.Arduino.definitions_['define_Universal-Arduino-Telegram-Bot-master'] = '#include <ESP8266WiFi.h>\n#include <WiFiClientSecure.h>\n#include <UniversalTelegramBot.h>\n#define WIFI_SSID "'+Name_wifi+'" \n #define WIFI_PASSWORD "'+Pass_wifi+'" \n #define BOT_TOKEN "'+token_bot+'" \n const unsigned long BOT_MTBS = 100; \n X509List cert(TELEGRAM_CERTIFICATE_ROOT); \n WiFiClientSecure secured_client; \n UniversalTelegramBot bot(BOT_TOKEN, secured_client); \n unsigned long bot_lasttime; \n int ledStatus = 0; \n void handleNewMessages(int numNewMessages) \n {     \n for (int i = 0; i < numNewMessages; i++) \n { \n String chat_id = bot.messages[i].chat_id; \n String text = bot.messages[i].text; \n String from_name = bot.messages[i].from_name; \n if (from_name == "") \n from_name = "Guest"; \n ' +
      branch + ' }  \n }  \n';

Blockly.Arduino.setups_['setup_Universal-Arduino-Telegram-Bot-master']='Serial.begin(9600); \n Serial.println(); \n configTime(0, 0, "pool.ntp.org"); \n secured_client.setTrustAnchors(&cert); \n WiFi.begin(WIFI_SSID, WIFI_PASSWORD); \n while (WiFi.status() != WL_CONNECTED) \n { \n  \n delay(500); \n } \n Serial.print("WiFi connected. IP address: "); \n Serial.println(WiFi.localIP()); \n Serial.print("Retrieving time: "); \n time_t now = time(nullptr); \n while (now < 24 * 3600) \n { \n  delay(100); \n now = time(nullptr); \n }    \n';

var code = 'if (millis() - bot_lasttime > BOT_MTBS) \n{ \n int numNewMessages = bot.getUpdates(bot.last_message_received + 1); \n    while (numNewMessages) \n { \n  \n handleNewMessages(numNewMessages); \n numNewMessages = bot.getUpdates(bot.last_message_received + 1); \n} \n bot_lasttime = millis(); \n } \n';

return code;
};


Blockly.Arduino['telegram_con_ESP32'] = function(block) {
	var Pass_wifi = block.getFieldValue("TEXT2");
	var Name_wifi = block.getFieldValue("TEXT1");
    var token_bot = block.getFieldValue("TEXT3");
    var branch = Blockly.Arduino.statementToCode(this, 'DO');

Blockly.Arduino.definitions_['define_Universal-Arduino-Telegram-Bot-master'] = '#include <WiFi.h>  \n ' +
 ' #include <WiFiClientSecure.h>  \n ' +
 ' #include <UniversalTelegramBot.h>  \n ' +
 ' #define WIFI_SSID "'+Name_wifi+'"  \n ' +
 ' #define WIFI_PASSWORD "'+Pass_wifi+'"  \n ' +
 ' #define BOT_TOKEN "'+token_bot+'"  \n ' +
 ' const unsigned long BOT_MTBS = 1000;  \n ' +
 ' WiFiClientSecure secured_client;  \n ' +
 ' UniversalTelegramBot bot(BOT_TOKEN, secured_client);  \n ' +
 ' unsigned long bot_lasttime;   \n ' +
 ' void handleNewMessages(int numNewMessages)  \n ' +
 ' {  \n ' +
 '   Serial.print("handleNewMessages ");  \n ' +
 '   Serial.println(numNewMessages);  \n ' +
 '   \n ' +
 '   for (int i = 0; i < numNewMessages; i++)  \n ' +
 '   {  \n ' +
 '     String chat_id = bot.messages[i].chat_id;  \n ' +
 '     String text = bot.messages[i].text;  \n ' +
 '     String from_name = bot.messages[i].from_name;  \n ' +
 '     if (from_name == "")  \n ' +
 '       from_name = "Guest";  \n ' +
 
    branch + ' }  \n }  \n';

Blockly.Arduino.setups_['setup_Universal-Arduino-Telegram-Bot-master']='Serial.begin(9600); \n  '+
 ' Serial.println(); \n '+
 '   Serial.print("Connecting to Wifi SSID "); \n '+
 '   Serial.print(WIFI_SSID); \n '+
 '   WiFi.begin(WIFI_SSID, WIFI_PASSWORD); \n '+
 '   secured_client.setCACert(TELEGRAM_CERTIFICATE_ROOT);  \n '+ 
 '   while (WiFi.status() != WL_CONNECTED) \n '+
 '   { \n '+
 '     Serial.print("."); \n '+
 '     delay(500); \n '+
 '   } \n '+
 '   Serial.print("WiFi connected. IP address: "); \n '+
 '   Serial.println(WiFi.localIP()); \n '+
 '   Serial.print("Retrieving time: "); \n '+
 '   configTime(0, 0, "pool.ntp.org");  \n '+
 '   time_t now = time(nullptr); \n '+
 '   while (now < 24 * 3600) \n '+
 '   { \n '+
 '     Serial.print("."); \n '+
 '     delay(100); \n '+
 '     now = time(nullptr); \n '+
 '   } \n '+
 '   Serial.println(now); \n '+
 '    \n';

var code = ' if (millis() - bot_lasttime > BOT_MTBS) \n '+
 '   { \n '+
 '     int numNewMessages = bot.getUpdates(bot.last_message_received + 1); \n '+
 '     while (numNewMessages) \n '+
 '     { \n '+
 '       Serial.println("got response"); \n '+
 '       handleNewMessages(numNewMessages); \n '+
 '       numNewMessages = bot.getUpdates(bot.last_message_received + 1); \n '+
 '     } \n '+
 '     bot_lasttime = millis(); \n '+
 '   } \n '+
 '   \n';

return code;
};


Blockly.Arduino["telegram_otvet"]=function(block){
var repeats = block.getFieldValue("TEXT");
var branch = Blockly.Arduino.statementToCode(this, 'DO');
var code = '  if(text == "'+repeats+'"){   \n  ' +
    branch + ' }  \n';
  return code;
};



Blockly.Arduino['telegram_otvet2'] = function(block) {

var text_otvet = Blockly.Arduino.valueToCode(block, 'text_otvet', Blockly.Arduino.ORDER_ATOMIC);

var code = 'bot.sendMessage(chat_id, '+text_otvet+', "");\n';

return code;
};

Blockly.Arduino['telegram_otpravit'] = function(block) {

var chat_id = Blockly.Arduino.valueToCode(block, 'chat_id', Blockly.Arduino.ORDER_ATOMIC);
var text_soob = Blockly.Arduino.valueToCode(block, 'text_soob', Blockly.Arduino.ORDER_ATOMIC);

var code = 'bot.sendMessage('+chat_id+', '+text_soob+', "");\n';

return code;
};


Blockly.Arduino['telegram_rty'] = function(block) {

    

var code = 'text';

return [code, Blockly.Arduino.ORDER_ATOMIC]

return code;
};

Blockly.Arduino['telegram_rtyid'] = function(block) {

    

var code = 'chat_id';

return [code, Blockly.Arduino.ORDER_ATOMIC]

return code;
};


Blockly.Arduino['telegram_otpravitii'] = function(block) {


var code = 'bot.messages[i].from_name';

return [code, Blockly.Arduino.ORDER_ATOMIC]

return code;
};


Blockly.Arduino['Init_MAX7219_ledmatrix4x'] = function(block) {
  var pin_clk = Blockly.Arduino.valueToCode(block, 'PIN_DAT', Blockly.Arduino.ORDER_ATOMIC);  
  var pin_dat = Blockly.Arduino.valueToCode(block, 'PIN_CS', Blockly.Arduino.ORDER_ATOMIC);  
  var pin_cs = Blockly.Arduino.valueToCode(block, 'PIN_CLK', Blockly.Arduino.ORDER_ATOMIC); 
  var dp = this.getFieldValue('dp');
  var dp2 = this.getFieldValue('dp2');
  var kv = "'";
  var sl = "\\";
  Blockly.Arduino.definitions_['Init_MAX7219_ledmatrix4x'] = '#include <SPI.h> \n '+
' #include <Adafruit_GFXx.h> \n '+
' #include <Max72xxPanel.h> \n '+
' int pinCS = '+pin_cs+';  \n '+
' int numberOfHorizontalDisplays = '+pin_clk+';  \n '+
' int numberOfVerticalDisplays = '+pin_dat+';  \n '+
' Max72xxPanel matrix = Max72xxPanel(pinCS, numberOfHorizontalDisplays, numberOfVerticalDisplays); \n '+
' String tape = " "; \n '+
' int wait = 30; \n '+
' int spacer = 1;  \n '+
' int width = 5 + spacer;  \n '+
' int i; \n '+
' String utf8rus(String source) \n '+
' { \n '+
'   int i,k; \n '+
'   String target; \n '+
'   unsigned char n; \n '+
'   char m[2] = { '+kv+'0'+kv+', '+kv+''+sl+'0'+kv+' }; \n '+
'   k = source.length(); i = 0; \n '+
'   while (i < k) {'+
'     n = source[i]; i++; \n '+
'     if (n >= 0xC0) { \n '+
'       switch (n) { \n '+
'         case 0xD0: { \n '+
'           n = source[i]; i++; \n '+
'           if (n == 0x81) { n = 0xA8; break; } \n '+
'           if (n >= 0x90 && n <= 0xBF) n = n + 0x2F; \n '+
'           break; \n '+
'         } \n '+
'         case 0xD1: { \n '+
'           n = source[i]; i++; \n '+
'           if (n == 0x91) { n = 0xB7; break; } \n '+
'           if (n >= 0x80 && n <= 0x8F) n = n + 0x6F; \n '+
'           break; \n '+
'         } \n '+
'       } \n '+
'     } \n '+
'     m[0] = n; target = target + String(m); \n '+
'   } \n '+
' return target; \n '+
' } \n';

  Blockly.Arduino.setups_['setup_Init_MAX7219_ledmatrix4x']='   matrix.setIntensity('+dp2+'); \n  matrix.setRotation(matrix.getRotation()+'+dp+'); \n'; 

  var code='';
  return code;
};


 Blockly.Arduino['Init_MAX7219_ledmatrix4x_text'] = function(block) {

var Y_Nokia = Blockly.Arduino.valueToCode(block, 'Y_Nokia', Blockly.Arduino.ORDER_ATOMIC);
var texttoprint = Blockly.Arduino.valueToCode(block, 'texttoprint', Blockly.Arduino.ORDER_ATOMIC);
var size = this.getFieldValue('size'); 
Blockly.Arduino.definitions_['Init_MAX7219_ledmatrix4x_text'] = '  int x; \n int y; \n   ';

if(size == 0){
var code = '    tape = utf8rus('+texttoprint+'); \n	     \n	  for ( int i = 0 ; i < width * tape.length() + matrix.width() - 1 - spacer; i++ )  \n	       { \n	    matrix.fillScreen(LOW); \n	    int letter = i / width; \n	      x = (matrix.width() - 1) - i % width;   \n	     y = (matrix.height() - 8) / 2; \n	   while ( x + width - spacer >= 0 && letter >= 0 ) { \n	      if ( letter < tape.length() ) { \n	        matrix.drawChar(x, y, tape[letter], HIGH, LOW,1); \n	      } \n	      letter--; \n	     x -= width; \n	    } \n	    matrix.write(); \n	    delay('+Y_Nokia+'); \n	  } \n	';
}
if(size == 1){

 var code = ' tape = utf8rus('+texttoprint+'); \n	  x = (matrix.width() - (tape.length() * width)) / 2;  \n	  y = (matrix.height() - 8) / 2;  \n	  matrix.fillScreen(LOW); \n	  for ( int i = 0 ; i < tape.length(); i++ ) {    \n	     int letter = i; \n	     matrix.drawChar(x, y, tape[letter], HIGH, LOW, 1);   \n	      x += width;   \n	   } \n	   matrix.write();  \n	 delay('+Y_Nokia+'); \n  	 ';
}
return code;
};



Blockly.Arduino['web_esp_conect']=function(block){
    var valuename = block.getFieldValue('name');
    var valuepass = block.getFieldValue('pass');
	var valuetitle = block.getFieldValue('title');
    var valueesp_statement = Blockly.Arduino.statementToCode(block, 'esp_statement');

    Blockly.Arduino.userFunctions_['userFunctions_web_esp_conect'] = ' \n '+	
 ' #include <WiFi.h> \n '+
 ' #include <WebServer.h> \n '+
 ' const char* ssid = "'+valuename+'";  \n '+ 
 ' const char* password = "'+valuepass+'";  \n '+ 
 ' WebServer server(80); \n '+
 ' int a = 0; \n '+
 '  \n '+
 ' void handle_led1off() { \n '+
 ' a = 1; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led2off() { \n '+
 ' a = 2; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led3off() { \n '+
 ' a = 3; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led4off() { \n '+
 ' a = 4; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led5off() { \n '+
 ' a = 5; \n '+
 '   server.send(200, "text/html", SendHTML(false,0)); \n '+ 
 ' } \n '+
 ' void handle_led6off() { \n '+
 ' a = 6; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led7off() { \n '+
 ' a = 7; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led8off() { \n '+
 ' a = 8; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led9off() { \n '+
 ' a = 9; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led10off() { \n '+
 ' a = 10; \n '+
 '   server.send(200, "text/html", SendHTML(false,0)); \n '+
 ' } \n '+
  ' void handle_NotFound(){ \n '+
 '   server.send(404, "text/plain", "Not found 404"); \n '+
 ' } \n '+
  ' void handle_OnConnect() {\n '+
 '   server.send(200, "text/html", SendHTML(false,0)); \n '+
 ' }  \n '+
 '  String SendHTML(uint8_t led1stat,uint8_t led2stat){ \n '+
 '   String ptr = "<!DOCTYPE html> <html>"; \n '+
 '   ptr +="<meta http-equiv=\\"Content-type\\" content=\\"text/html; charset=utf-8\\"><head><meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0, user-scalable=no\\">"; \n '+
 '   ptr +="<title>'+valuetitle+'</title>"; \n '+
 '   ptr +="<style>html { font-family: Helvetica; display: inline-block; margin: 0px auto; text-align: center;}"; \n '+
 '   ptr +="body{margin-top: 50px;} h1 {color: #444444;margin: 50px auto 30px;} h3 {color: #444444;margin-bottom: 50px;}"; \n '+
 '   ptr +=".button {display: block;width: 80px;background-color: #ffffff;border: none;color: #777777 ;padding: 13px 30px;text-decoration: none;font-size: 25px;margin: 0px auto 35px;cursor: pointer;border: 1px solid #777777;}"; \n '+
 '   ptr +=".button-off {background-color: #ffffff;}"; \n '+
 '   ptr +=".button-off:active {background-color: #ffffff;}"; \n '+
 '   ptr +="p {font-size: 14px;color: #888;margin-bottom: 10px;}"; \n '+
 '   ptr +="</style>"; \n '+
 '   ptr +="<script>        "; \n '+
 '   ptr +="function send(led_sts)      ";    \n '+
 '   ptr +="{        "; \n '+
 '   ptr +="  var xhttp = new XMLHttpRequest();     ";    \n '+
 '   ptr +="  xhttp.onreadystatechange = function() {      ";  \n '+ 
 '   ptr +="    if (this.readyState == 4 && this.status == 200) {      ";   \n '+
 '   ptr +="      document.getElementById(\\"state\\").innerHTML = this.responseText;    ";  \n '+   
 '   ptr +="    }        "; \n '+
 '   ptr +="  };        "; \n '+
 '   ptr +="  xhttp.open(\\"GET\\", \\"led\\"+led_sts, true);   ";   \n '+   
 '   ptr +="  xhttp.send();        "; \n '+
 '   ptr +=" } ";        \n '+
 '   ptr +="setInterval(function()       ";   \n '+
 '   ptr +="{        "; \n '+
 '   ptr +="  getData();    ";  \n '+   
 '   ptr +="}, 2000);       ";  \n '+ 
 '   ptr +="function getData() {   ";  \n '+    
 '   ptr +="  var xhttp = new XMLHttpRequest();       ";  \n '+
 '   ptr +="  xhttp.onreadystatechange = function() {        "; \n '+
 '   ptr +="    if (this.readyState == 4 && this.status == 200) {        "; \n '+
 '   ptr +="      document.getElementById(\\"adc_val\\").innerHTML = this.responseText;    ";  \n '+   
 '   ptr +="    }        "; \n '+
 '   ptr +="  };        "; \n '+
 '   ptr +="  xhttp.open(\\"GET\\", \\"adcread\\", true);    ";    \n '+ 
 '   ptr +="  xhttp.send();     ";  \n '+  
 '   ptr +="}        "; \n '+
 '   ptr +="</script>   "; \n '+
 '   ptr +="</head>"; \n '+
 '   ptr +="<body>"; \n '+
 '  '+valueesp_statement+' '+
 '   ptr +="</body>"; \n '+
 '   ptr +="</html>"; \n '+
 '   return ptr; \n '+
 ' } \n';

 
    Blockly.Arduino.setups_['setups_web_esp_conect']=' \n '+ 	
 '   Serial.begin(9600); \n '+ 
 '   delay(100); \n '+ 
 '   Serial.println("Connecting to "); \n '+ 
 '   Serial.println(ssid); \n '+ 
 '   WiFi.begin(ssid, password); \n '+ 
 '   while (WiFi.status() != WL_CONNECTED) { \n '+ 
 '   delay(1000); \n '+ 
 '   Serial.print("."); \n '+ 
 '   } \n '+ 
 '   Serial.println(""); \n '+ 
 '   Serial.println("WiFi connected..!"); \n '+ 
 '   Serial.print("Got IP: ");  Serial.println(WiFi.localIP()); \n '+ 
 '  server.on("/", handle_OnConnect); \n '+ 
 '   server.on("/led1", handle_led1off); \n '+
 '   server.on("/led2", handle_led2off); \n '+
 '   server.on("/led3", handle_led3off); \n '+
 '   server.on("/led4", handle_led4off); \n '+
 '   server.on("/led5", handle_led5off); \n '+
 '   server.on("/led6", handle_led6off); \n '+
 '   server.on("/led7", handle_led7off); \n '+
 '   server.on("/led8", handle_led8off); \n '+
 '   server.on("/led9", handle_led9off); \n '+
 '   server.on("/led10", handle_led10off); \n '+
  '  \n '+
 '   server.onNotFound(handle_NotFound); \n '+ 
 '   server.begin(); \n '+ 
 '   Serial.println("HTTP server started"); \n ';
   
    var code = 'server.handleClient(); \n ';
    return code
};

Blockly.Arduino['web_esp_conect_12f']=function(block){
    var valuename = block.getFieldValue('name');
    var valuepass = block.getFieldValue('pass');
	var valuetitle = block.getFieldValue('title');
    var valueesp_statement = Blockly.Arduino.statementToCode(block, 'esp_statement');

    Blockly.Arduino.userFunctions_['userFunctions_web_esp_conect'] = ' \n '+	
 ' #include <ESP8266WiFi.h>  \n '+ 
 ' #include <ESP8266WebServer.h>  \n '+ 
 ' const char* ssid = "'+valuename+'";  \n '+ 
 ' const char* password = "'+valuepass+'";  \n '+ 
 ' ESP8266WebServer server(80); \n '+
 ' int a = 0; \n '+
 '  \n '+
 ' void handle_led1off() { \n '+
 ' a = 1; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led2off() { \n '+
 ' a = 2; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led3off() { \n '+
 ' a = 3; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led4off() { \n '+
 ' a = 4; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led5off() { \n '+
 ' a = 5; \n '+
 '   server.send(200, "text/html", SendHTML(false,0)); \n '+ 
 ' } \n '+
 ' void handle_led6off() { \n '+
 ' a = 6; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led7off() { \n '+
 ' a = 7; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led8off() { \n '+
 ' a = 8; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led9off() { \n '+
 ' a = 9; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led10off() { \n '+
 ' a = 10; \n '+
 '   server.send(200, "text/html", SendHTML(false,0)); \n '+
 ' } \n '+
  ' void handle_NotFound(){ \n '+
 '   server.send(404, "text/plain", "Not found 404"); \n '+
 ' } \n '+
  ' void handle_OnConnect() {\n '+
 '   server.send(200, "text/html", SendHTML(false,0)); \n '+
 ' }  \n '+
 '  String SendHTML(uint8_t led1stat,uint8_t led2stat){ \n '+
 '   String ptr = "<!DOCTYPE html> <html>"; \n '+
 '   ptr +="<meta http-equiv=\\"Content-type\\" content=\\"text/html; charset=utf-8\\"><head><meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0, user-scalable=no\\">"; \n '+
 '   ptr +="<title>'+valuetitle+'</title>"; \n '+
 '   ptr +="<style>html { font-family: Helvetica; display: inline-block; margin: 0px auto; text-align: center;}"; \n '+
 '   ptr +="body{margin-top: 50px;} h1 {color: #444444;margin: 50px auto 30px;} h3 {color: #444444;margin-bottom: 50px;}"; \n '+
 '   ptr +=".button {display: block;width: 80px;background-color: #ffffff;border: none;color: #777777 ;padding: 13px 30px;text-decoration: none;font-size: 25px;margin: 0px auto 35px;cursor: pointer;border: 1px solid #777777;}"; \n '+
 '   ptr +=".button-off {background-color: #ffffff;}"; \n '+
 '   ptr +=".button-off:active {background-color: #ffffff;}"; \n '+
 '   ptr +="p {font-size: 14px;color: #888;margin-bottom: 10px;}"; \n '+
 '   ptr +="</style>"; \n '+
 '   ptr +="</head>"; \n '+
 '   ptr +="<body>"; \n '+
 '  '+valueesp_statement+' '+
 '   ptr +="</body>"; \n '+
 '   ptr +="</html>"; \n '+
 '   return ptr; \n '+
 ' } \n';

 
    Blockly.Arduino.setups_['setups_web_esp_conect']=' \n '+ 	
 '   Serial.begin(9600); \n '+ 
 '   delay(100); \n '+ 
 '   Serial.println("Connecting to "); \n '+ 
 '   Serial.println(ssid); \n '+ 
 '   WiFi.begin(ssid, password); \n '+ 
 '   while (WiFi.status() != WL_CONNECTED) { \n '+ 
 '   delay(1000); \n '+ 
 '   Serial.print("."); \n '+ 
 '   } \n '+ 
 '   Serial.println(""); \n '+ 
 '   Serial.println("WiFi connected..!"); \n '+ 
 '   Serial.print("Got IP: ");  Serial.println(WiFi.localIP()); \n '+ 
 '  server.on("/", handle_OnConnect); \n '+ 
 '   server.on("/led1", handle_led1off); \n '+
 '   server.on("/led2", handle_led2off); \n '+
 '   server.on("/led3", handle_led3off); \n '+
 '   server.on("/led4", handle_led4off); \n '+
 '   server.on("/led5", handle_led5off); \n '+
 '   server.on("/led6", handle_led6off); \n '+
 '   server.on("/led7", handle_led7off); \n '+
 '   server.on("/led8", handle_led8off); \n '+
 '   server.on("/led9", handle_led9off); \n '+
 '   server.on("/led10", handle_led10off); \n '+
  '  \n '+
 '   server.onNotFound(handle_NotFound); \n '+ 
 '   server.begin(); \n '+ 
 '   Serial.println("HTTP server started"); \n ';
   
    var code = 'server.handleClient(); \n ';
    return code
};


Blockly.Arduino['web_esp_conect_wifi']=function(block){
    var valuename = block.getFieldValue('name');
    var valuepass = block.getFieldValue('pass');
	var valuetitle = block.getFieldValue('title');
    var valueesp_statement = Blockly.Arduino.statementToCode(block, 'esp_statement');

    Blockly.Arduino.userFunctions_['userFunctions_web_esp_conect'] = ' \n '+	
 ' #include <WiFi.h> \n '+
 ' #include <WebServer.h> \n '+
 ' const char* ssid = "'+valuename+'";  \n '+ 
 ' const char* password = "'+valuepass+'";  \n '+ 
 ' IPAddress local_ip(192,168,1,1);  \n '+ 
 ' IPAddress gateway(192,168,1,1);  \n '+ 
 ' IPAddress subnet(255,255,255,0);  \n '+ 
 ' WebServer server(80); \n '+
 ' int a = 0; \n '+
 '  \n '+
 ' void handle_led1off() { \n '+
 ' a = 1; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led2off() { \n '+
 ' a = 2; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led3off() { \n '+
 ' a = 3; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led4off() { \n '+
 ' a = 4; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led5off() { \n '+
 ' a = 5; \n '+
 '   server.send(200, "text/html", SendHTML(false,0)); \n '+ 
 ' } \n '+
 ' void handle_led6off() { \n '+
 ' a = 6; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led7off() { \n '+
 ' a = 7; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led8off() { \n '+
 ' a = 8; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led9off() { \n '+
 ' a = 9; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led10off() { \n '+
 ' a = 10; \n '+
 '   server.send(200, "text/html", SendHTML(false,0)); \n '+
 ' } \n '+
  ' void handle_NotFound(){ \n '+
 '   server.send(404, "text/plain", "Not found 404"); \n '+
 ' } \n '+
  ' void handle_OnConnect() {\n '+
 '   server.send(200, "text/html", SendHTML(false,0)); \n '+
 ' }  \n '+
 '  String SendHTML(uint8_t led1stat,uint8_t led2stat){ \n '+
 '   String ptr = "<!DOCTYPE html> <html>"; \n '+
 '   ptr +="<meta http-equiv=\\"Content-type\\" content=\\"text/html; charset=utf-8\\"><head><meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0, user-scalable=no\\">"; \n '+
 '   ptr +="<title>'+valuetitle+'</title>"; \n '+
 '   ptr +="<style>html { font-family: Helvetica; display: inline-block; margin: 0px auto; text-align: center;}"; \n '+
 '   ptr +="body{margin-top: 50px;} h1 {color: #444444;margin: 50px auto 30px;} h3 {color: #444444;margin-bottom: 50px;}"; \n '+
 '   ptr +=".button {display: block;width: 80px;background-color: #ffffff;border: none;color: #777777 ;padding: 13px 30px;text-decoration: none;font-size: 25px;margin: 0px auto 35px;cursor: pointer;border: 1px solid #777777;}"; \n '+
 '   ptr +=".button-off {background-color: #ffffff;}"; \n '+
 '   ptr +=".button-off:active {background-color: #ffffff;}"; \n '+
 '   ptr +="p {font-size: 14px;color: #888;margin-bottom: 10px;}"; \n '+
 '   ptr +="</style>"; \n '+
 '   ptr +="<script>        "; \n '+
 '   ptr +="function send(led_sts)      ";    \n '+
 '   ptr +="{        "; \n '+
 '   ptr +="  var xhttp = new XMLHttpRequest();     ";    \n '+
 '   ptr +="  xhttp.onreadystatechange = function() {      ";  \n '+ 
 '   ptr +="    if (this.readyState == 4 && this.status == 200) {      ";   \n '+
 '   ptr +="      document.getElementById(\\"state\\").innerHTML = this.responseText;    ";  \n '+   
 '   ptr +="    }        "; \n '+
 '   ptr +="  };        "; \n '+
 '   ptr +="  xhttp.open(\\"GET\\", \\"led\\"+led_sts, true);   ";   \n '+   
 '   ptr +="  xhttp.send();        "; \n '+
 '   ptr +=" } ";        \n '+
 '   ptr +="setInterval(function()       ";   \n '+
 '   ptr +="{        "; \n '+
 '   ptr +="  getData();    ";  \n '+   
 '   ptr +="}, 2000);       ";  \n '+ 
 '   ptr +="function getData() {   ";  \n '+    
 '   ptr +="  var xhttp = new XMLHttpRequest();       ";  \n '+
 '   ptr +="  xhttp.onreadystatechange = function() {        "; \n '+
 '   ptr +="    if (this.readyState == 4 && this.status == 200) {        "; \n '+
 '   ptr +="      document.getElementById(\\"adc_val\\").innerHTML = this.responseText;    ";  \n '+   
 '   ptr +="    }        "; \n '+
 '   ptr +="  };        "; \n '+
 '   ptr +="  xhttp.open(\\"GET\\", \\"adcread\\", true);    ";    \n '+ 
 '   ptr +="  xhttp.send();     ";  \n '+  
 '   ptr +="}        "; \n '+
 '   ptr +="</script>   "; \n '+
 '   ptr +="</head>"; \n '+
 '   ptr +="<body>"; \n '+
 '  '+valueesp_statement+' '+
 '   ptr +="</body>"; \n '+
 '   ptr +="</html>"; \n '+
 '   return ptr; \n '+
 ' } \n';

 
    Blockly.Arduino.setups_['setups_web_esp_conect']=' \n '+ 	
 '   Serial.begin(9600); \n '+ 
 '   delay(100); \n '+ 
 '   WiFi.softAP(ssid, password); \n '+ 
 '   WiFi.softAPConfig(local_ip, gateway, subnet); \n '+ 
 '   delay(100); \n '+  
 '  server.on("/", handle_OnConnect); \n '+ 
 '   server.on("/led1", handle_led1off); \n '+
 '   server.on("/led2", handle_led2off); \n '+
 '   server.on("/led3", handle_led3off); \n '+
 '   server.on("/led4", handle_led4off); \n '+
 '   server.on("/led5", handle_led5off); \n '+
 '   server.on("/led6", handle_led6off); \n '+
 '   server.on("/led7", handle_led7off); \n '+
 '   server.on("/led8", handle_led8off); \n '+
 '   server.on("/led9", handle_led9off); \n '+
 '   server.on("/led10", handle_led10off); \n '+
  '  \n '+
 '   server.onNotFound(handle_NotFound); \n '+ 
 '   server.begin(); \n '+ 
 '   Serial.println("HTTP server started"); \n ';
   
    var code = 'server.handleClient(); \n ';
    return code
};

Blockly.Arduino['web_esp_conect_wifi_12f']=function(block){
    var valuename = block.getFieldValue('name');
    var valuepass = block.getFieldValue('pass');
	var valuetitle = block.getFieldValue('title');
    var valueesp_statement = Blockly.Arduino.statementToCode(block, 'esp_statement');

    Blockly.Arduino.userFunctions_['userFunctions_web_esp_conect'] = ' \n '+	
 ' #include <ESP8266WiFi.h>  \n '+ 
 ' #include <ESP8266WebServer.h>  \n '+ 
 ' const char* ssid = "'+valuename+'";  \n '+ 
 ' const char* password = "'+valuepass+'";  \n '+ 
 ' IPAddress local_ip(192,168,1,1);  \n '+ 
 ' IPAddress gateway(192,168,1,1);  \n '+ 
 ' IPAddress subnet(255,255,255,0);  \n '+ 
 ' ESP8266WebServer server(80); \n '+
 ' int a = 0; \n '+
 '  \n '+
 ' void handle_led1off() { \n '+
 ' a = 1; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led2off() { \n '+
 ' a = 2; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led3off() { \n '+
 ' a = 3; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led4off() { \n '+
 ' a = 4; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led5off() { \n '+
 ' a = 5; \n '+
 '   server.send(200, "text/html", SendHTML(false,0)); \n '+ 
 ' } \n '+
 ' void handle_led6off() { \n '+
 ' a = 6; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led7off() { \n '+
 ' a = 7; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led8off() { \n '+
 ' a = 8; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led9off() { \n '+
 ' a = 9; \n '+
 '   server.send(200, "text/html", SendHTML(false,0));  \n '+
 ' } \n '+
 ' void handle_led10off() { \n '+
 ' a = 10; \n '+
 '   server.send(200, "text/html", SendHTML(false,0)); \n '+
 ' } \n '+
  ' void handle_NotFound(){ \n '+
 '   server.send(404, "text/plain", "Not found 404"); \n '+
 ' } \n '+
  ' void handle_OnConnect() {\n '+
 '   server.send(200, "text/html", SendHTML(false,0)); \n '+
 ' }  \n '+
 '  String SendHTML(uint8_t led1stat,uint8_t led2stat){ \n '+
 '   String ptr = "<!DOCTYPE html> <html>"; \n '+
 '   ptr +="<meta http-equiv=\\"Content-type\\" content=\\"text/html; charset=utf-8\\"><head><meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0, user-scalable=no\\">"; \n '+
 '   ptr +="<title>'+valuetitle+'</title>"; \n '+
 '   ptr +="<style>html { font-family: Helvetica; display: inline-block; margin: 0px auto; text-align: center;}"; \n '+
 '   ptr +="body{margin-top: 50px;} h1 {color: #444444;margin: 50px auto 30px;} h3 {color: #444444;margin-bottom: 50px;}"; \n '+
 '   ptr +=".button {display: block;width: 80px;background-color: #ffffff;border: none;color: #777777 ;padding: 13px 30px;text-decoration: none;font-size: 25px;margin: 0px auto 35px;cursor: pointer;border: 1px solid #777777;}"; \n '+
 '   ptr +=".button-off {background-color: #ffffff;}"; \n '+
 '   ptr +=".button-off:active {background-color: #ffffff;}"; \n '+
 '   ptr +="p {font-size: 14px;color: #888;margin-bottom: 10px;}"; \n '+
 '   ptr +="</style>"; \n '+
 '   ptr +="</head>"; \n '+
 '   ptr +="<body>"; \n '+
 '  '+valueesp_statement+' '+
 '   ptr +="</body>"; \n '+
 '   ptr +="</html>"; \n '+
 '   return ptr; \n '+
 ' } \n';

 
    Blockly.Arduino.setups_['setups_web_esp_conect']=' \n '+ 	
 '   Serial.begin(9600); \n '+ 
 '   delay(100); \n '+ 
 '   WiFi.softAP(ssid, password); \n '+ 
 '   WiFi.softAPConfig(local_ip, gateway, subnet); \n '+ 
 '   delay(100); \n '+  
 '  server.on("/", handle_OnConnect); \n '+ 
 '   server.on("/led1", handle_led1off); \n '+
 '   server.on("/led2", handle_led2off); \n '+
 '   server.on("/led3", handle_led3off); \n '+
 '   server.on("/led4", handle_led4off); \n '+
 '   server.on("/led5", handle_led5off); \n '+
 '   server.on("/led6", handle_led6off); \n '+
 '   server.on("/led7", handle_led7off); \n '+
 '   server.on("/led8", handle_led8off); \n '+
 '   server.on("/led9", handle_led9off); \n '+
 '   server.on("/led10", handle_led10off); \n '+
  '  \n '+
 '   server.onNotFound(handle_NotFound); \n '+ 
 '   server.begin(); \n '+ 
 '   Serial.println("HTTP server started"); \n ';
   
    var code = 'server.handleClient(); \n ';
    return code
};
Blockly.Arduino['web_esp_conect_text']=function(block){
    var valuename = block.getFieldValue('name');

    var code = 'ptr +="<p>'+valuename+'</p>"; \n';
    return code
};
Blockly.Arduino['web_esp_conect_bott']=function(block){
    var valueid = block.getFieldValue('id');
    var valuename = block.getFieldValue('name');
 
    var code = 'ptr +="<a class=\\"button button-off\\" href=\\"/'+valueid+'\\">'+valuename+'</a>"; \n';
    return code
};

Blockly.Arduino['web_esp_conect_b']=function(block){
    var valueid = block.getFieldValue('id');
	var valuename = block.getFieldValue('name');
    var valuebstatement = Blockly.Arduino.statementToCode(block, 'bstatement');
    var code = 'ptr +="<a class=\\"button button-off\\"  onclick=\\"send('+valueid+')\\">'+valuename+'</a>"; \n   if (a == '+valueid+') { \n    '+valuebstatement+' \n   } \n  ';
    return code
};
 

Blockly.Arduino['OLED_data_wifi_kit']=function(block){
    var valuexx_block = Blockly.Arduino.valueToCode(block, 'xx_block', Blockly.Arduino.ORDER_ATOMIC);
    var valueyy_block = Blockly.Arduino.valueToCode(block, 'yy_block', Blockly.Arduino.ORDER_ATOMIC);
    var valuetext_block = Blockly.Arduino.valueToCode(block, 'text_block', Blockly.Arduino.ORDER_ATOMIC);
	
    Blockly.Arduino.includes_['includes_OLED_data_wifi_kit'] = '  #include "lcdgfx.h"   \n  DisplaySSD1306_128x64_I2C Afficheur_G(16,{-1, 0, 15, 4, 0});  \n ';
    Blockly.Arduino.setups_['setups_OLED_data_wifi_kit']=' Afficheur_G.begin(); \n  Afficheur_G.clear();  \n  ';
    var code = 'Afficheur_G.setFixedFont( ssd1306xled_font6x8 );  \n Afficheur_G.printFixed('+valuexx_block+',  '+valueyy_block+', '+valuetext_block+', STYLE_NORMAL); \n ';
    return code
};


Blockly.Arduino['touch_block']=function(block){
    var valuetouch_pin = block.getFieldValue('touch_pin');
   // Blockly.Arduino.includes_[] = 'code des bibliotheques';
   // Blockly.Arduino.variables_[] = 'code des variables';
   // Blockly.Arduino.definitions_[] = 'code des instances';
   // Blockly.Arduino.userFunctions_[] = 'code des fonctions';
   // Blockly.Arduino.setups_[]='placer ici le code du setup()';
    var code = 'touchRead(T'+valuetouch_pin+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['touch_if_block']=function(block){
    var value_statement = Blockly.Arduino.statementToCode(block, '_statement');
    var valuetouch_pin = block.getFieldValue('touch_pin');
    var valuetouch = block.getFieldValue('touch');
	
   Blockly.Arduino.userFunctions_['includes_touch_if_block'+valuetouch_pin] = ' bool touch'+valuetouch_pin+'detected = false; \n void gotTouch'+valuetouch_pin+'(){ \n touch'+valuetouch_pin+'detected = true; \n  } \n  ';
   
   Blockly.Arduino.setups_['includes_touch_if_block'+valuetouch_pin]='touchAttachInterrupt(T'+valuetouch_pin+', gotTouch'+valuetouch_pin+', '+valuetouch+');  \n  ';
	
    var code = '  if(touch'+valuetouch_pin+'detected){  \n   touch'+valuetouch_pin+'detected = false;  \n    '+value_statement+'   \n   }  \n  ';
    return code
};


Blockly.Arduino['actuator_tone_esp']=function(block){
    var valuetone_pin = block.getFieldValue('tone_pin');
    var valuetone_note = block.getFieldValue('tone_note');
    var valuetone_okt = block.getFieldValue('tone_okt');
    var valuetone_delay = block.getFieldValue('tone_delay');

    Blockly.Arduino.userFunctions_['actuator_tone_esp'] = '#include <Tone32.h> \n #define BUZZER_CHANNEL 0 \n ';
   var code = '  tone('+valuetone_pin+', NOTE_'+valuetone_note+''+valuetone_okt+', '+valuetone_delay+', BUZZER_CHANNEL); \n    ';
    return code
};
Blockly.Arduino['actuator_tone_esp1']=function(block){
    var valuetone_pin = 17;
    var valuetone_note = block.getFieldValue('tone_note');
    var valuetone_okt = block.getFieldValue('tone_okt');
    var valuetone_delay = block.getFieldValue('tone_delay');

    Blockly.Arduino.userFunctions_['actuator_tone_esp'] = '#include <Tone32.h> \n #define BUZZER_CHANNEL 0 \n ';
   var code = '  tone('+valuetone_pin+', NOTE_'+valuetone_note+''+valuetone_okt+', '+valuetone_delay+', BUZZER_CHANNEL); \n    ';
    return code
};

Blockly.Arduino['actuator_tone_esp2']=function(block){
    var valuetone_pin = 17;
    var valuetone_delay = block.getFieldValue('tone_delay');

 var code = '   for (int count = 0; count < 10; count++) { \n    pinMode('+valuetone_pin+', OUTPUT); \n     digitalWrite('+valuetone_pin+', 1); \n    delay('+valuetone_delay+'); \n     pinMode('+valuetone_pin+', OUTPUT); \n      digitalWrite('+valuetone_pin+', 0); \n      delay('+valuetone_delay+'); \n   } \n   ';
 return code
};

Blockly.Arduino['actone_esp']=function(block){
    var valuetone_pin = block.getFieldValue('tone_pin');
    var valuetone_tone_hz = block.getFieldValue('tone_hz');
    var valuetone_delay = block.getFieldValue('tone_delay');
   
  Blockly.Arduino.userFunctions_['actuator_tone_esp'] = '#include <Tone32.h> \n #define BUZZER_CHANNEL 0 \n ';
   var code = '  tone('+valuetone_pin+', '+valuetone_tone_hz+', '+valuetone_delay+', BUZZER_CHANNEL); \n   ';
  
  
    return code
};

Blockly.Arduino['notone_esp']=function(block){
    var valuetone_pin = block.getFieldValue('tone_pin');
 
    Blockly.Arduino.userFunctions_['actuator_tone_esp'] = '#include <Tone32.h> \n #define BUZZER_CHANNEL 0 \n ';
   var code = '  noTone('+valuetone_pin+', BUZZER_CHANNEL); \n  ';
    return code
};
Blockly.Arduino['notone_esp1']=function(block){
    var valuetone_pin = 17;
 
    Blockly.Arduino.userFunctions_['actuator_tone_esp'] = '#include <Tone32.h> \n #define BUZZER_CHANNEL 0 \n ';
   var code = '  noTone('+valuetone_pin+', BUZZER_CHANNEL); \n  ';
    return code
};
Blockly.Arduino['hall_read']=function(block){

    var code = 'hallRead()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino["hardware_monitor_serial_read"]=function(block){
var id = this.getFieldValue('id'); 
    var code="PCdata["+id+"]";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["hardware_monitor_serial_init"]=function(block){
var dn = "'";

	 Blockly.Arduino.definitions_['definitions_hardware_monitor_serial_init'] = '#define ERROR_UPTIME 0    \n   '+
 ' char inData[82];   \n   '+
 ' int PCdata[20];      \n   '+
 ' byte PLOTmem[6][16];    \n   '+
 ' byte blocks, halfs;  \n   '+
 ' byte indexc = 0;  \n   '+
 ' String string_convert;  \n   '+
 ' unsigned long timeout, uptime_timer, plot_timer;  \n   '+
 ' boolean lightState, reDraw_flag = 1, updateDisplay_flag, updateTemp_flag, timeOut_flag = 1;   \n   '+
 ' byte plotLines[] = {0, 1, 4, 5, 6, 7};    \n   '+
 ' void parsing() {  \n   '+
 '   while (Serial.available() > 0) {  \n   '+
 '     char aChar = Serial.read();  \n   '+
 '     if (aChar != '+dn+'E'+dn+') {  \n   '+
 '       inData[indexc] = aChar;  \n   '+
 '       indexc++;  \n   '+
 '       inData[indexc] = '+dn+'\\0'+dn+';  \n   '+
 '     } else {  \n   '+
 '       char *p = inData;  \n   '+
 '       char *str;  \n   '+
 '       indexc = 0;  \n   '+
 '       String value = "";  \n   '+
 '       while ((str = strtok_r(p, ";", &p)) != NULL) {  \n   '+
 '         string_convert = str;  \n   '+
 '         PCdata[indexc] = string_convert.toInt();  \n   '+
 '         indexc++;  \n   '+
 '       }  \n   '+
 '       indexc = 0;  \n   '+
 '       updateDisplay_flag = 1;  \n   '+
 '       updateTemp_flag = 1;  \n   '+
 '     }  \n   '+
 '     if (!timeOut_flag) {   \n   '+                                
 '       if (ERROR_UPTIME) uptime_timer = millis();    \n   '+      
 '     }  \n   '+
 '     timeout = millis();  \n   '+
 '     timeOut_flag = 1;  \n   '+
 '   }  \n   '+
 ' }  \n   '+
 ' void updatePlot() {  \n   '+
 '   if ((millis() - plot_timer) > (PCdata[17] * 1000)) {  \n   '+
 '     for (int i = 0; i < 6; i++) {           \n   '+  
 '       for (int j = 0; j < 15; j++) {      \n   '+    
 '         PLOTmem[i][j] = PLOTmem[i][j + 1];   \n   '+
 '       }  \n   '+
 '     }  \n   '+
 '     for (int i = 0; i < 6; i++) {  \n   '+
 '      PLOTmem[i][15] = ceil(PCdata[plotLines[i]] / 3);  \n   '+
 '     }  \n   '+
 '     plot_timer = millis();  \n   '+
 '   }  \n   '+
 ' }  \n     '; 
	 
	 Blockly.Arduino.setups_['setups_hardware_monitor_serial_init'] = 'Serial.begin(9600);   \n ';
	 
	 
	 var code = 'parsing(); \n  updatePlot();   \n ';
	 
	  return code;
};

Blockly.Arduino["soft_write_ttl_uart_g"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
	var hexcode1 = block.getFieldValue("TEXT1");
	Blockly.Arduino.includes_["soft_write_ttl_uart"+hexcode1]=" 	char x"+hexcode1+"m [13] ={0x5A, 0xA5, 0x0B, 0x82, 0x03, 0x10, 0x5A, 0xA5, 0x01, 0x00, 0x0"+hexcode1+", 0x01, 0x00}; \n int x"+hexcode1+"w = 0; \n	";
    return " 	x"+hexcode1+"w = " + content + "; \n    mySerial.write(x"+hexcode1+"m , 13); \n    mySerial.write(x"+hexcode1+"w); \n  "
};

Blockly.Arduino['dwin_box_ttl']=function(block){

    Blockly.Arduino.definitions_["definitions_dwin_box_ttl"] = '  #include <Arduino.h> \n #ifdef ARDUINO_ARCH_ESP32 \n   #include "designerDWIN.h"  \n   #else \n    #include "arduinoDWINbox.h"  \n   #endif \n ';
    Blockly.Arduino.setups_["setups_dwin_box_ttl"]='   #ifdef ARDUINO_ARCH_ESP32  \n    \n  #else  \n    dwinSerial.begin(115200);   \n  ClearDisplayDwin(); \n   #endif  \n ';    
  
    var code = ' ';
    return code
};
Blockly.Arduino['dwin_box_none']=function(block){
    var code = 'ClearDisplayDwin(); \n ';
    return code
};
Blockly.Arduino['dwin_box_data']=function(block){
    var code = 'ReadSerial(); \n ';
    return code
};
 
 Blockly.Arduino['dwin_box_icon']=function(block){
    var valueicon_text = block.getFieldValue('icon_text');
    var valuex_text = block.getFieldValue('x_text');
    var valuey_text = block.getFieldValue('y_text');
    var code = 'setIconDwin('+valueicon_text+', '+valuex_text+', '+valuey_text+'); \n';
    return code
};


Blockly.Arduino['dwin_box_text']=function(block){
    var valueid_text = block.getFieldValue('id_text');
    var valuex_text = block.getFieldValue('x_text');
    var valuey_text = block.getFieldValue('y_text');
    var valueh_text = block.getFieldValue('h_text');
    var valuecolor_dropdown = block.getFieldValue('color_dropdown');

    var code = 'cutStringDwinActiv('+valuex_text+', '+valuey_text+', '+valueh_text+', '+valuecolor_dropdown+', "'+valueid_text+'" ); \n';
    return code
};

Blockly.Arduino['dwin_box_bot']=function(block){
    var valueidn_text = block.getFieldValue('idn_text');
    var valueid_text = block.getFieldValue('id_text');
    var valuex_text = block.getFieldValue('x_text');
    var valuey_text = block.getFieldValue('y_text');
    var valuetext_text = block.getFieldValue('text_text');
    var valuecolor_dropdown = block.getFieldValue('color_dropdown'); 
    Blockly.Arduino.setups_['setups_dwin_box_bot'+valueidn_text]='setBtnDwin('+valueid_text+', '+valuex_text+', '+valuey_text+', '+valuecolor_dropdown+', "'+valuetext_text+'");  \n';
    var bb_dropdown = block.getFieldValue('bb_dropdown'); 
	if(bb_dropdown == 0){
	var code = 'setBtnActivDwin('+valueidn_text+', '+valueid_text+', '+valuex_text+', '+valuey_text+', '+valuecolor_dropdown+', "'+valuetext_text+'"); \n bool stek_bool'+valueidn_text+' = stek_bool_bt['+valueidn_text+']; \n';
	}else{
	var code = 'setSwichActivDwin('+valueidn_text+', '+valueid_text+', '+valuex_text+', '+valuey_text+', '+valuecolor_dropdown+', "'+valuetext_text+'"); \n bool stek_bool'+valueidn_text+' = stek_bool_sw['+valueidn_text+']; \n';
	} 
	return code
};

Blockly.Arduino['dwin_box_bot_id']=function(block){
    var valueidn_text = block.getFieldValue('idn_text');
    var code = 'stek_bool'+valueidn_text+'';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['dwin_box_bot1']=function(block){
    var valueidn_text = block.getFieldValue('idn_text');
    var valueid_text = block.getFieldValue('id_text');
    var valuex_text = block.getFieldValue('x_text');
    var valuey_text = block.getFieldValue('y_text');
    var valuetext_text = block.getFieldValue('text_text');
    var valuecolor_dropdown = block.getFieldValue('color_dropdown'); 
	var bot_statement = Blockly.Arduino.statementToCode(block, 'bot_statement');  
	var bot_statement1 = Blockly.Arduino.statementToCode(block, 'bot_statement1');
	
    Blockly.Arduino.setups_['setups_dwin_box_bot1'+valueidn_text]='setBtnDwin('+valueid_text+', '+valuex_text+', '+valuey_text+', '+valuecolor_dropdown+', "'+valuetext_text+'");  \n';
    
	var bb_dropdown = block.getFieldValue('bb_dropdown');
	
	if(bb_dropdown == 0){
	var code = '  \n   '+
 ' setBtnActivDwin('+valueidn_text+', '+valueid_text+', '+valuex_text+', '+valuey_text+', '+valuecolor_dropdown+', "'+valuetext_text+'");  \n   '+
 ' static bool last_bt'+valueidn_text+'; \n   '+
 '   if (stek_bool_bt['+valueidn_text+'] && !last_bt'+valueidn_text+') \n   '+
 '   { \n   '+
  '    last_bt'+valueidn_text+' = true; \n   '+
 ' '+bot_statement+' \n   '+
  '  } \n   '+
  '  else  if (!stek_bool_bt['+valueidn_text+'] && last_bt'+valueidn_text+'){ \n   '+
  '    last_bt'+valueidn_text+' = false; \n   '+
 ' '+bot_statement1+'    \n   '+
 '   }  \n   '+
 ' 	';
	}else{
	var code = '  \n   '+
 ' setSwichActivDwin('+valueidn_text+', '+valueid_text+', '+valuex_text+', '+valuey_text+', '+valuecolor_dropdown+', "'+valuetext_text+'");  \n   '+
 ' static bool last_sw'+valueidn_text+'; \n   '+
 '   if (stek_bool_sw['+valueidn_text+'] && !last_sw'+valueidn_text+') \n   '+
 '   { \n   '+
  '    last_sw'+valueidn_text+' = true; \n   '+
 ' '+bot_statement+' \n   '+
  '  } \n   '+
  '  else  if (!stek_bool_sw['+valueidn_text+'] && last_sw'+valueidn_text+'){ \n   '+
  '    last_sw'+valueidn_text+' = false; \n   '+
 ' '+bot_statement1+'    \n   '+
 '   }  \n   '+
 ' 	';	
	} 
	return code
};

 Blockly.Arduino['dwin_box_bot2']=function(block){
    var valueidn_text = block.getFieldValue('idn_text');
    var valueid_text1 = block.getFieldValue('id_text1');
	var valueid_text2 = block.getFieldValue('id_text2');
    var valuex_text = block.getFieldValue('x_text');
    var valuey_text = block.getFieldValue('y_text');
    var valuetext_text1 = block.getFieldValue('text_text1');
	var valuetext_text2 = block.getFieldValue('text_text2');
    var valuecolor_dropdown1 = block.getFieldValue('color_dropdown1'); 
	var valuecolor_dropdown2 = block.getFieldValue('color_dropdown2'); 
	var bot_statement = Blockly.Arduino.statementToCode(block, 'bot_statement');  
	var bot_statement1 = Blockly.Arduino.statementToCode(block, 'bot_statement1');
	Blockly.Arduino.definitions_['definitions_dwin_box_bot2'+valueidn_text]='int xb'+valueidn_text+'n = 0;  \n';
    Blockly.Arduino.setups_['setups_dwin_box_bot2'+valueidn_text]='setBtnDwin('+valueid_text1+', '+valuex_text+', '+valuey_text+', '+valuecolor_dropdown1+', "'+valuetext_text1+'");  \n';
    

	var code = '  \n   '+
 '     if (xb'+valueidn_text+'n == 1) { \n   '+
'       setSwichActivDwin('+valueidn_text+', '+valueid_text1+', '+valuex_text+', '+valuey_text+', '+valuecolor_dropdown1+', "'+valuetext_text1+'"); \n   '+
'        bool stek_bool'+valueidn_text+' = stek_bool_sw['+valueidn_text+']; \n   '+
'       xb'+valueidn_text+'n = stek_bool'+valueidn_text+'; \n   '+
 ' '+bot_statement+'    \n   '+
 '    } \n   '+
 '    if (xb'+valueidn_text+'n == 0) { \n   '+
'       setSwichActivDwin('+valueidn_text+', '+valueid_text2+', '+valuex_text+', '+valuey_text+', '+valuecolor_dropdown2+', "'+valuetext_text2+'"); \n   '+
'        bool stek_bool'+valueidn_text+' = stek_bool_sw['+valueidn_text+']; \n   '+
'       xb'+valueidn_text+'n = stek_bool'+valueidn_text+'; \n   '+
 ' '+bot_statement1+'    \n   '+
 '    } \n   '+
 '    \n  	';	
	 
	return code
};
 

Blockly.Arduino['dwin_box_var']=function(block){
    var value_block = Blockly.Arduino.valueToCode(block, 'var_block', Blockly.Arduino.ORDER_ATOMIC);
    var valuex_text = block.getFieldValue('x_text');
    var valuey_text = block.getFieldValue('y_text');
    var valuetext_text = block.getFieldValue('text_text');
    var valuecolor_dropdown = block.getFieldValue('color_dropdown');

    var code = 'setNumberDwin('+value_block+', '+valuex_text+', '+valuey_text+', '+valuecolor_dropdown+', '+valuetext_text+'); \n ';
    return code
};

Blockly.Arduino['dwin_box_varsl']=function(block){
    var value_block = Blockly.Arduino.valueToCode(block, 'var_block', Blockly.Arduino.ORDER_ATOMIC);
    var valuex_text = block.getFieldValue('x_text');
    var valuey_text = block.getFieldValue('y_text');
    var valuecolor_dropdown = block.getFieldValue('color_dropdown');

    var code = ' setSliderDwin('+valuecolor_dropdown+', '+valuex_text+', '+valuey_text+', '+value_block+' ); \n';
    return code
};
Blockly.Arduino['dwin_box_led']=function(block){
    var value_block = Blockly.Arduino.valueToCode(block, 'var_block', Blockly.Arduino.ORDER_ATOMIC);

    var code = ' cutBrightnessDwin('+value_block+'); \n';
    return code
};
Blockly.Arduino['dwin_box_zum']=function(block){
    var value_block = Blockly.Arduino.valueToCode(block, 'var_block', Blockly.Arduino.ORDER_ATOMIC);

    var code = ' cutBuzzerDwin('+value_block+'); \n';
    return code
};

 
 Blockly.Arduino['ledi_ws2812'] = function(block) {
	
  var numberstrip = block.getFieldValue('pin'); // номер
  var pin_ledrgb = block.getFieldValue('pin'); // пин ленты
  var numpixels = block.getFieldValue('led'); // количество пикселей в ленте
 
 Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = ' #include <Adafruit_NeoPixel.h> \n #ifdef __AVR__ \n  #include <avr/power.h>  \n #endif \n long Pixcil = 0; \n long NeoPix = 0; \n';
Blockly.Arduino.definitions_['define_ledRGB_WS2812B_top' + numberstrip] = ' Adafruit_NeoPixel strip'+numberstrip+'('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);   \n ';


 Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'] = ' #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000) \n   clock_prescale_set(clock_div_1); \n #endif \n ';
  
 Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'+numberstrip] = '  strip'+numberstrip+'.begin();  \n  strip'+numberstrip+'.show();  \n  strip'+numberstrip+'.setBrightness(50);  \n';
  
    var valueledon = block.getFieldValue('ledon'); //start
    var valueledoff = block.getFieldValue('ledoff'); //stop
	 
	 
  var pixel_number = block.getFieldValue('delayled'); // задержка
  
  var colorall = block.getFieldValue('RGBCOLOR'); // цвет ленты
  var valuews = block.getFieldValue('ws'); // выбор ленты модели
  if(valuews == 0){
  var red = parseInt(colorall.substring(1,3),16);
  var green = parseInt(colorall.substring(3,5),16);
  var blue = parseInt(colorall.substring(5,7),16);
  }
  if(valuews == 1){
  var red = parseInt(colorall.substring(1,3),16);
  var blue = parseInt(colorall.substring(3,5),16);
  var green = parseInt(colorall.substring(5,7),16);
  }
  
  
   var number = this.getFieldValue('RE_NUMBER'); // программа ленты
   

if(number == 6){
  var code = ' Pixcil = '+valueledon+'; \n NeoPix = '+valueledoff+' - Pixcil; \n  for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n   strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n    strip'+numberstrip+'.show(); \n      } \n   Pixcil = '+valueledon+'; \n   delay('+pixel_number+'); \n ';
}

if(number == 7){
  var code = ' Pixcil = '+valueledon+'; \n NeoPix = '+valueledoff+' - Pixcil; \n   for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n     strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n     delay('+pixel_number+'); \n    strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n      strip'+numberstrip+'.show(); \n      } \n      Pixcil = '+valueledon+'; \n ';
 } 
 
if(number == 8){
  var code = '  Pixcil = '+valueledoff+'; \n  NeoPix = '+valueledoff+' - '+valueledon+'; \n //Pixcil = NeoPix; \n for (int count = 0; count < NeoPix; count++) { \n   strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n    delay('+pixel_number+'); \n    strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n      strip'+numberstrip+'.show(); \n   Pixcil = Pixcil - 1; \n   } \n     Pixcil = '+valueledoff+'; \n ';
 }  
 
 if(number == 10){ 
 var code = ' Pixcil = '+valueledoff+' + 1; \n NeoPix = '+valueledoff+' - '+valueledon+'; \n    for (int count = 0; count < NeoPix*Pixcil; count++) { \n    for (int count = 0; count < NeoPix; count++) { \n       Pixcil = Pixcil - 1; \n       strip'+numberstrip+'.setBrightness(255); \n        strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n       strip'+numberstrip+'.show(); \n       delay('+pixel_number+'); \n      strip'+numberstrip+'.setBrightness(255); \n       strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n        strip'+numberstrip+'.show(); \n        } \n     strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n      strip'+numberstrip+'.show(); \n      Pixcil = Pixcil + NeoPix; \n NeoPix = NeoPix - 1; \n   } \n   Pixcil = '+valueledoff+' + 1; \n ';
}
 if(number == 11){ 
 var code = ' Pixcil = '+valueledon+'+1; \n NeoPix = '+valueledoff+' - Pixcil; \n     for (int count = 0; count < '+valueledoff+'; count++) { \n     for (int count = 0; count < NeoPix; count++) { \n      strip'+numberstrip+'.setBrightness(255); \n       strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n        strip'+numberstrip+'.show(); \n         delay('+pixel_number+'); \n       strip'+numberstrip+'.setBrightness(255); \n        strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n       strip'+numberstrip+'.show(); \n       Pixcil = Pixcil + 1; \n    } \n    strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n      Pixcil = '+valueledon+'+1; \n     NeoPix = NeoPix - 1; \n   } \n   Pixcil = '+valueledon+'; \n   ';
} 
 if(number == 12){ 
 var code = ' Pixcil = '+valueledon+'; \n NeoPix = '+valueledoff+' - Pixcil; \n     for (int count = 0; count < NeoPix; count++) { \n     Pixcil = Pixcil + 1; \n     strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n      delay('+pixel_number+'); \n } \n   Pixcil = '+valueledon+';  \n    ';
} 
 if(number == 13){ 
 var code = ' Pixcil = '+valueledoff+'; \n  NeoPix = '+valueledoff+' - '+valueledon+'; \n   //    Pixcil = NeoPix; \n   for (int count = 0; count < NeoPix; count++) { \n    strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n     strip'+numberstrip+'.show(); \n     delay('+pixel_number+'); \n     Pixcil = Pixcil - 1; \n   } \n   Pixcil = '+valueledon+'; \n       ';
} 
  return code;
 
};


 Blockly.Arduino['ledi_ws2812x2'] = function(block) {
	
  var numberstrip = block.getFieldValue('pin'); // номер
  var pin_ledrgb = block.getFieldValue('pin'); // пин ленты
  var numberstrip1 = block.getFieldValue('pin1'); // номер
  var pin_ledrgb1 = block.getFieldValue('pin1'); // пин ленты
  var numpixels = block.getFieldValue('led'); // количество пикселей в ленте
 
 Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = ' #include <Adafruit_NeoPixel.h> \n #ifdef __AVR__ \n  #include <avr/power.h>  \n #endif \n long Pixcil = 0; \n long NeoPix = 0; \n';
Blockly.Arduino.definitions_['define_ledRGB_WS2812B_top' + numberstrip] = ' Adafruit_NeoPixel strip'+numberstrip+'('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800); \n  ';
Blockly.Arduino.definitions_['define_ledRGB_WS2812B_top' + numberstrip1] = ' Adafruit_NeoPixel strip'+numberstrip1+'('+numpixels+', '+pin_ledrgb1+', NEO_GRB + NEO_KHZ800);   \n ';


 Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'] = ' #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000) \n   clock_prescale_set(clock_div_1); \n #endif \n ';
  
 Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'+numberstrip] = '  strip'+numberstrip+'.begin();  \n  strip'+numberstrip+'.show();  \n  strip'+numberstrip+'.setBrightness(50);  \n';
  Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'+numberstrip1] = '  strip'+numberstrip1+'.begin();  \n  strip'+numberstrip1+'.show();  \n  strip'+numberstrip1+'.setBrightness(50);  \n';
  
    var valueledon = block.getFieldValue('ledon'); //start
    var valueledoff = block.getFieldValue('ledoff'); //stop
	 
	 
  var pixel_number = block.getFieldValue('delayled'); // задержка
  
  var colorall = block.getFieldValue('RGBCOLOR'); // цвет ленты
    var colorall1 = block.getFieldValue('RGBCOLOR1'); // цвет ленты2
  var valuews = block.getFieldValue('ws'); // выбор ленты модели
  if(valuews == 0){
  var red = parseInt(colorall.substring(1,3),16);
  var green = parseInt(colorall.substring(3,5),16);
  var blue = parseInt(colorall.substring(5,7),16);
  
  var red1 = parseInt(colorall1.substring(1,3),16);
  var green1 = parseInt(colorall1.substring(3,5),16);
  var blue1 = parseInt(colorall1.substring(5,7),16);
  }
  if(valuews == 1){
  var red = parseInt(colorall.substring(1,3),16);
  var blue = parseInt(colorall.substring(3,5),16);
  var green = parseInt(colorall.substring(5,7),16);
  
  var red1 = parseInt(colorall1.substring(1,3),16);
  var blue1 = parseInt(colorall1.substring(3,5),16);
  var green1 = parseInt(colorall1.substring(5,7),16);
  }
  
  
   var number = this.getFieldValue('RE_NUMBER'); // программа ленты
   
 
if(number == 6){
  var code = ' Pixcil = '+valueledon+'; \n NeoPix = '+valueledoff+' - Pixcil; \n  for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n   strip'+numberstrip+'.setBrightness(255); \n  strip'+numberstrip1+'.setBrightness(255); \n   strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n  strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n   strip'+numberstrip+'.show(); \n  strip'+numberstrip1+'.show(); \n    } \n   Pixcil = '+valueledon+'; \n   delay('+pixel_number+'); \n ';
  }

if(number == 7){
  var code = ' Pixcil = '+valueledon+'; \n NeoPix = '+valueledoff+' - Pixcil; \n   for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n     strip'+numberstrip+'.setBrightness(255); \n  strip'+numberstrip1+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n   strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n   strip'+numberstrip+'.show(); \n strip'+numberstrip1+'.show(); \n     delay('+pixel_number+'); \n    strip'+numberstrip+'.setBrightness(255); \n strip'+numberstrip1+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color(0,0,0)); \n      strip'+numberstrip+'.show(); \n  strip'+numberstrip1+'.show(); \n      } \n      Pixcil = '+valueledon+'; \n ';
 } 
 
if(number == 8){
  var code = '  Pixcil = '+valueledoff+'; \n  NeoPix = '+valueledoff+' - '+valueledon+'; \n   for (int count = 0; count < NeoPix; count++) { \n   strip'+numberstrip+'.setBrightness(255); \n strip'+numberstrip1+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n  strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n     strip'+numberstrip+'.show(); \n   strip'+numberstrip1+'.show(); \n    delay('+pixel_number+'); \n    strip'+numberstrip+'.setBrightness(255); \n strip'+numberstrip1+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n   strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color(0,0,0)); \n      strip'+numberstrip+'.show(); \n   strip'+numberstrip1+'.show(); \n   Pixcil = Pixcil - 1; \n   } \n     Pixcil = '+valueledoff+'; \n ';
 }  
 
 if(number == 10){ 
 var code = ' Pixcil = '+valueledoff+' + 1; \n NeoPix = '+valueledoff+' - '+valueledon+'; \n    for (int count = 0; count < NeoPix*Pixcil; count++) { \n    for (int count = 0; count < NeoPix; count++) { \n       Pixcil = Pixcil - 1; \n       strip'+numberstrip+'.setBrightness(255); \n  strip'+numberstrip1+'.setBrightness(255); \n        strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n    strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n       strip'+numberstrip+'.show(); \n     strip'+numberstrip1+'.show(); \n       delay('+pixel_number+'); \n      strip'+numberstrip+'.setBrightness(255); \n   strip'+numberstrip1+'.setBrightness(255); \n       strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n    strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color(0,0,0)); \n        strip'+numberstrip+'.show(); \n    strip'+numberstrip1+'.show(); \n        } \n     strip'+numberstrip+'.setBrightness(255); \n   strip'+numberstrip1+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n    strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n      strip'+numberstrip+'.show(); \n    strip'+numberstrip1+'.show(); \n      Pixcil = Pixcil + NeoPix; \n NeoPix = NeoPix - 1; \n   } \n   Pixcil = '+valueledoff+' + 1; \n ';
}
 if(number == 11){ 
 var code = ' Pixcil = '+valueledon+'+1; \n NeoPix = '+valueledoff+' - Pixcil; \n     for (int count = 0; count < '+valueledoff+'; count++) { \n     for (int count = 0; count < NeoPix; count++) { \n      strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip1+'.setBrightness(255); \n       strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n      strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n        strip'+numberstrip+'.show(); \n       strip'+numberstrip1+'.show(); \n         delay('+pixel_number+'); \n       strip'+numberstrip+'.setBrightness(255); \n      strip'+numberstrip1+'.setBrightness(255); \n        strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n    strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color(0,0,0)); \n       strip'+numberstrip+'.show(); \n   strip'+numberstrip1+'.show(); \n       Pixcil = Pixcil + 1; \n    } \n    strip'+numberstrip+'.setBrightness(255); \n   strip'+numberstrip1+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n    strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n     strip'+numberstrip+'.show(); \n   strip'+numberstrip1+'.show(); \n      Pixcil = '+valueledon+'+1; \n     NeoPix = NeoPix - 1; \n   } \n   Pixcil = '+valueledon+'; \n   ';
} 
 if(number == 12){ 
 var code = ' Pixcil = '+valueledon+'; \n NeoPix = '+valueledoff+' - Pixcil; \n     for (int count = 0; count < NeoPix; count++) { \n     Pixcil = Pixcil + 1; \n     strip'+numberstrip+'.setBrightness(255); \n   strip'+numberstrip1+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n   strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n     strip'+numberstrip+'.show(); \n     strip'+numberstrip1+'.show(); \n      delay('+pixel_number+'); \n } \n   Pixcil = '+valueledon+';  \n    ';
} 
 if(number == 13){ 
 var code = ' Pixcil = '+valueledoff+'; \n  NeoPix = '+valueledoff+' - '+valueledon+'; \n      for (int count = 0; count < NeoPix; count++) { \n    strip'+numberstrip+'.setBrightness(255); \n    strip'+numberstrip1+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n    strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n     strip'+numberstrip+'.show(); \n   strip'+numberstrip1+'.show(); \n     delay('+pixel_number+'); \n     Pixcil = Pixcil - 1; \n   } \n   Pixcil = '+valueledon+'; \n       ';
} 
  return code;
 
};

Blockly.Arduino['ledi_ws2812x4'] = function(block) {
	
  var numberstrip = block.getFieldValue('pin'); // номер
  var pin_ledrgb = block.getFieldValue('pin'); // пин ленты
  
  var numberstrip1 = block.getFieldValue('pin1'); // номер
  var pin_ledrgb1 = block.getFieldValue('pin1'); // пин ленты
  
    var numberstrip2 = block.getFieldValue('pin2'); // номер
  var pin_ledrgb2 = block.getFieldValue('pin2'); // пин ленты
  
    var numberstrip3 = block.getFieldValue('pin3'); // номер
  var pin_ledrgb3 = block.getFieldValue('pin3'); // пин ленты
  
  var numpixels = block.getFieldValue('led'); // количество пикселей в ленте
 
 Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = ' #include <Adafruit_NeoPixel.h> \n #ifdef __AVR__ \n  #include <avr/power.h>  \n #endif \n long Pixcil = 0; \n long NeoPix = 0; \n';
Blockly.Arduino.definitions_['define_ledRGB_WS2812B_top' + numberstrip] = ' Adafruit_NeoPixel strip'+numberstrip+'('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800); \n  ';
Blockly.Arduino.definitions_['define_ledRGB_WS2812B_top' + numberstrip1] = ' Adafruit_NeoPixel strip'+numberstrip1+'('+numpixels+', '+pin_ledrgb1+', NEO_GRB + NEO_KHZ800);   \n ';
Blockly.Arduino.definitions_['define_ledRGB_WS2812B_top' + numberstrip2] = ' Adafruit_NeoPixel strip'+numberstrip2+'('+numpixels+', '+pin_ledrgb2+', NEO_GRB + NEO_KHZ800);   \n ';
Blockly.Arduino.definitions_['define_ledRGB_WS2812B_top' + numberstrip3] = ' Adafruit_NeoPixel strip'+numberstrip3+'('+numpixels+', '+pin_ledrgb3+', NEO_GRB + NEO_KHZ800);   \n ';


 Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'] = ' #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000) \n   clock_prescale_set(clock_div_1); \n #endif \n ';
  
 Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'+numberstrip] = '  strip'+numberstrip+'.begin();  \n  strip'+numberstrip+'.show();  \n  strip'+numberstrip+'.setBrightness(50);  \n';
  Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'+numberstrip1] = '  strip'+numberstrip1+'.begin();  \n  strip'+numberstrip1+'.show();  \n  strip'+numberstrip1+'.setBrightness(50);  \n';
    Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'+numberstrip2] = '  strip'+numberstrip2+'.begin();  \n  strip'+numberstrip2+'.show();  \n  strip'+numberstrip2+'.setBrightness(50);  \n';
    Blockly.Arduino.setups_['setup_ledRGB_WS2812B_top'+numberstrip3] = '  strip'+numberstrip3+'.begin();  \n  strip'+numberstrip3+'.show();  \n  strip'+numberstrip3+'.setBrightness(50);  \n';
  
    var valueledon = block.getFieldValue('ledon'); //start
    var valueledoff = block.getFieldValue('ledoff'); //stop
	 
	 
  var pixel_number = block.getFieldValue('delayled'); // задержка
  
  var colorall = block.getFieldValue('RGBCOLOR'); // цвет ленты
    var colorall1 = block.getFieldValue('RGBCOLOR1'); // цвет ленты2
	var colorall2 = block.getFieldValue('RGBCOLOR2'); // цвет ленты2
	var colorall3 = block.getFieldValue('RGBCOLOR3'); // цвет ленты2
	
  var valuews = block.getFieldValue('ws'); // выбор ленты модели
  if(valuews == 0){
  var red = parseInt(colorall.substring(1,3),16);
  var green = parseInt(colorall.substring(3,5),16);
  var blue = parseInt(colorall.substring(5,7),16);
  
  var red1 = parseInt(colorall1.substring(1,3),16);
  var green1 = parseInt(colorall1.substring(3,5),16);
  var blue1 = parseInt(colorall1.substring(5,7),16);
  
    var red2 = parseInt(colorall2.substring(1,3),16);
  var green2 = parseInt(colorall2.substring(3,5),16);
  var blue2 = parseInt(colorall2.substring(5,7),16);
  
    var red3 = parseInt(colorall3.substring(1,3),16);
  var green3 = parseInt(colorall3.substring(3,5),16);
  var blue3 = parseInt(colorall3.substring(5,7),16);
  }
  if(valuews == 1){
  var red = parseInt(colorall.substring(1,3),16);
  var blue = parseInt(colorall.substring(3,5),16);
  var green = parseInt(colorall.substring(5,7),16);
  
  var red1 = parseInt(colorall1.substring(1,3),16);
  var blue1 = parseInt(colorall1.substring(3,5),16);
  var green1 = parseInt(colorall1.substring(5,7),16);
  
    var red2 = parseInt(colorall2.substring(1,3),16);
  var blue2 = parseInt(colorall2.substring(3,5),16);
  var green2 = parseInt(colorall2.substring(5,7),16);
  
    var red3 = parseInt(colorall3.substring(1,3),16);
  var blue3 = parseInt(colorall3.substring(3,5),16);
  var green3 = parseInt(colorall3.substring(5,7),16);
  }
  
  
   var number = this.getFieldValue('RE_NUMBER'); // программа ленты
   
 
if(number == 6){
  var code = ' Pixcil = '+valueledon+'; \n NeoPix = '+valueledoff+' - Pixcil; \n  for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n   strip'+numberstrip+'.setBrightness(255); \n  strip'+numberstrip1+'.setBrightness(255); \n strip'+numberstrip2+'.setBrightness(255); \n strip'+numberstrip3+'.setBrightness(255); \n  strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n  strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n  strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip2+'.Color('+red2+','+green2+','+blue2+')); \n  strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip3+'.Color('+red3+','+green3+','+blue3+')); \n   strip'+numberstrip+'.show(); \n  strip'+numberstrip1+'.show(); \n   strip'+numberstrip2+'.show(); \n   strip'+numberstrip3+'.show(); \n    } \n   Pixcil = '+valueledon+'; \n   delay('+pixel_number+'); \n ';
  }

if(number == 7){
  var code = ' Pixcil = '+valueledon+'; \n NeoPix = '+valueledoff+' - Pixcil; \n   for (int count = 0; count < NeoPix; count++) { \n    Pixcil = Pixcil + 1; \n     strip'+numberstrip+'.setBrightness(255); \n  strip'+numberstrip1+'.setBrightness(255); \n  strip'+numberstrip2+'.setBrightness(255); \n  strip'+numberstrip3+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n   strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n  strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip2+'.Color('+red2+','+green2+','+blue2+')); \n  strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip3+'.Color('+red3+','+green3+','+blue3+')); \n   strip'+numberstrip+'.show(); \n strip'+numberstrip1+'.show(); \n  strip'+numberstrip2+'.show(); \n  strip'+numberstrip3+'.show(); \n     delay('+pixel_number+'); \n    strip'+numberstrip+'.setBrightness(255); \n strip'+numberstrip1+'.setBrightness(255); \n  strip'+numberstrip2+'.setBrightness(255); \n  strip'+numberstrip3+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color(0,0,0)); \n  strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip2+'.Color(0,0,0)); \n strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip3+'.Color(0,0,0)); \n       strip'+numberstrip+'.show(); \n  strip'+numberstrip1+'.show(); \n   strip'+numberstrip2+'.show(); \n   strip'+numberstrip3+'.show(); \n      } \n      Pixcil = '+valueledon+'; \n ';
 } 
 
if(number == 8){
  var code = '  Pixcil = '+valueledoff+'; \n  NeoPix = '+valueledoff+' - '+valueledon+'; \n   for (int count = 0; count < NeoPix; count++) { \n    strip'+numberstrip+'.setBrightness(255); \n   strip'+numberstrip1+'.setBrightness(255); \n       strip'+numberstrip2+'.setBrightness(255); \n   strip'+numberstrip3+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n    strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n     strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip2+'.Color('+red2+','+green2+','+blue2+')); \n    strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip3+'.Color('+red3+','+green3+','+blue3+')); \n      strip'+numberstrip+'.show(); \n     strip'+numberstrip1+'.show(); \n   strip'+numberstrip2+'.show(); \n   strip'+numberstrip3+'.show(); \n     delay('+pixel_number+'); \n     strip'+numberstrip+'.setBrightness(255); \n   strip'+numberstrip1+'.setBrightness(255); \n    strip'+numberstrip2+'.setBrightness(255); \n    strip'+numberstrip3+'.setBrightness(255); \n      strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n     strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color(0,0,0)); \n     strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip2+'.Color(0,0,0)); \n    strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip3+'.Color(0,0,0)); \n      strip'+numberstrip+'.show(); \n     strip'+numberstrip1+'.show(); \n    strip'+numberstrip2+'.show(); \n    strip'+numberstrip3+'.show(); \n      Pixcil = Pixcil - 1; \n   } \n     Pixcil = '+valueledoff+'; \n ';
 }  
 
 if(number == 10){ 
 var code = ' Pixcil = '+valueledoff+' + 1; \n NeoPix = '+valueledoff+' - '+valueledon+'; \n    for (int count = 0; count < NeoPix*Pixcil; count++) { \n    for (int count = 0; count < NeoPix; count++) { \n       Pixcil = Pixcil - 1; \n      strip'+numberstrip+'.setBrightness(255); \n  strip'+numberstrip1+'.setBrightness(255); \n    strip'+numberstrip2+'.setBrightness(255); \n  strip'+numberstrip3+'.setBrightness(255); \n   strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n  strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n   strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red2+','+green2+','+blue2+')); \n   strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red3+','+green3+','+blue3+')); \n    strip'+numberstrip+'.show(); \n    strip'+numberstrip1+'.show(); \n   strip'+numberstrip2+'.show(); \n   strip'+numberstrip3+'.show(); \n    delay('+pixel_number+'); \n    strip'+numberstrip+'.setBrightness(255); \n   strip'+numberstrip1+'.setBrightness(255); \n     strip'+numberstrip2+'.setBrightness(255); \n     strip'+numberstrip3+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n   strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color(0,0,0)); \n    strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip2+'.Color(0,0,0)); \n    strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip3+'.Color(0,0,0)); \n     strip'+numberstrip+'.show(); \n   strip'+numberstrip1+'.show(); \n     strip'+numberstrip2+'.show(); \n     strip'+numberstrip3+'.show(); \n      } \n    strip'+numberstrip+'.setBrightness(255); \n   strip'+numberstrip1+'.setBrightness(255); \n     strip'+numberstrip2+'.setBrightness(255); \n     strip'+numberstrip3+'.setBrightness(255); \n     strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n   strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n   strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip2+'.Color('+red2+','+green2+','+blue2+')); \n   strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip3+'.Color('+red3+','+green3+','+blue3+')); \n   strip'+numberstrip+'.show(); \n   strip'+numberstrip1+'.show(); \n     strip'+numberstrip2+'.show(); \n      strip'+numberstrip3+'.show(); \n    Pixcil = Pixcil + NeoPix; \n NeoPix = NeoPix - 1; \n   } \n   Pixcil = '+valueledoff+' + 1; \n ';
}
 if(number == 11){ 
 var code = ' Pixcil = '+valueledon+'+1; \n NeoPix = '+valueledoff+' - Pixcil; \n  for (int count = 0; count < '+valueledoff+'; count++) { \n    for (int count = 0; count < NeoPix; count++) { \n     strip'+numberstrip+'.setBrightness(255); \n    strip'+numberstrip1+'.setBrightness(255); \n  strip'+numberstrip2+'.setBrightness(255); \n  strip'+numberstrip3+'.setBrightness(255); \n   strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n    strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n   strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip2+'.Color('+red2+','+green2+','+blue2+')); \n   strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip3+'.Color('+red3+','+green3+','+blue3+')); \n     strip'+numberstrip+'.show(); \n    strip'+numberstrip1+'.show(); \n    strip'+numberstrip2+'.show(); \n    strip'+numberstrip3+'.show(); \n     delay('+pixel_number+'); \n     strip'+numberstrip+'.setBrightness(255); \n     strip'+numberstrip1+'.setBrightness(255); \n    strip'+numberstrip2+'.setBrightness(255); \n   strip'+numberstrip3+'.setBrightness(255); \n    strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color(0,0,0)); \n   strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color(0,0,0)); \n   strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip2+'.Color(0,0,0)); \n   strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip3+'.Color(0,0,0)); \n   strip'+numberstrip+'.show(); \n   strip'+numberstrip1+'.show(); \n   strip'+numberstrip2+'.show(); \n    strip'+numberstrip3+'.show(); \n   Pixcil = Pixcil + 1; \n    } \n   strip'+numberstrip+'.setBrightness(255); \n   strip'+numberstrip1+'.setBrightness(255); \n  strip'+numberstrip2+'.setBrightness(255); \n   strip'+numberstrip3+'.setBrightness(255); \n   strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n   strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n    strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip2+'.Color('+red2+','+green2+','+blue2+')); \n    strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip3+'.Color('+red3+','+green3+','+blue3+')); \n     strip'+numberstrip+'.show(); \n   strip'+numberstrip1+'.show(); \n   strip'+numberstrip2+'.show(); \n    strip'+numberstrip3+'.show(); \n   Pixcil = '+valueledon+'+1; \n     NeoPix = NeoPix - 1; \n   } \n   Pixcil = '+valueledon+'; \n   ';
} 
 if(number == 12){ 
 var code = ' Pixcil = '+valueledon+'; \n NeoPix = '+valueledoff+' - Pixcil; \n    for (int count = 0; count < NeoPix; count++) { \n     Pixcil = Pixcil + 1; \n    strip'+numberstrip+'.setBrightness(255); \n   strip'+numberstrip1+'.setBrightness(255); \n  strip'+numberstrip2+'.setBrightness(255); \n  strip'+numberstrip3+'.setBrightness(255); \n   strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n   strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n     strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip2+'.Color('+red2+','+green2+','+blue2+')); \n      strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip3+'.Color('+red3+','+green3+','+blue3+')); \n    strip'+numberstrip+'.show(); \n   strip'+numberstrip1+'.show(); \n  strip'+numberstrip2+'.show(); \n   strip'+numberstrip3+'.show(); \n    delay('+pixel_number+'); \n } \n   Pixcil = '+valueledon+';  \n    ';
} 
 if(number == 13){  var code = ' Pixcil = '+valueledoff+'; \n  NeoPix = '+valueledoff+' - '+valueledon+'; \n    for (int count = 0; count < NeoPix; count++) { \n    strip'+numberstrip+'.setBrightness(255); \n   strip'+numberstrip1+'.setBrightness(255); \n    strip'+numberstrip2+'.setBrightness(255); \n     strip'+numberstrip3+'.setBrightness(255); \n   strip'+numberstrip+'.setPixelColor(Pixcil-1, strip'+numberstrip+'.Color('+red+','+green+','+blue+')); \n   strip'+numberstrip1+'.setPixelColor(Pixcil-1, strip'+numberstrip1+'.Color('+red1+','+green1+','+blue1+')); \n   strip'+numberstrip2+'.setPixelColor(Pixcil-1, strip'+numberstrip2+'.Color('+red2+','+green2+','+blue2+')); \n    strip'+numberstrip3+'.setPixelColor(Pixcil-1, strip'+numberstrip3+'.Color('+red3+','+green3+','+blue3+')); \n  strip'+numberstrip+'.show(); \n  strip'+numberstrip1+'.show(); \n   strip'+numberstrip2+'.show(); \n     strip'+numberstrip3+'.show(); \n   delay('+pixel_number+'); \n     Pixcil = Pixcil - 1; \n   } \n   Pixcil = '+valueledon+'; \n       ';
} 
  return code;
 
};


Blockly.Arduino["soft_write_ttl_uart_led"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_["includes_soft_write_ttl_uart_led"]=" char leddwin [10] ={0x5A,0xA5,0x07,0x82,0x00,0x82,0x00,0x00,0x00,0x00}; \n ";
     var code = "  leddwin[6]=" + content + "; \n    leddwin[7]=" + content + "; \n     mySerial.write(leddwin,10); \n  ";
	 return code
};
Blockly.Arduino["soft_write_ttl_uart_reset"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.includes_["includes_soft_write_ttl_uart_reset"]=" char resetdwin [10] ={0x5A,0xA5,0x07,0x82,0x00,0x04,0x55,0xAA,0x5A,0xA5}; \n ";
     var code = "   mySerial.write(resetdwin,10); \n  ";
	 return code
};
 
 
  Blockly.Arduino["soft_write_ttl_uart2"]=function(block){
    var content=Blockly.Arduino.valueToCode(block, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
	var hexcode1 = block.getFieldValue("TEXT1");
	var hexcode2 = block.getFieldValue("TEXT2");
	var hexcode3 = block.getFieldValue("TEXT3");
	var hexcode4 = block.getFieldValue("TEXT4");
	Blockly.Arduino.includes_["soft_write_ttl_uart2"]=" int nb = 0; \n  int xb = 0; \n ";
	Blockly.Arduino.includes_["soft_write_ttl_uart"+hexcode1+hexcode2+hexcode3+hexcode4]=" 	char x"+hexcode1+hexcode2+hexcode3+hexcode4+"m [6] ={0x5A,0xA5,0x05,0x82,0x"+hexcode1+""+hexcode2+",0x"+hexcode3+""+hexcode4+"}; \n int x"+hexcode1+hexcode2+hexcode3+hexcode4+"w = 0; \n	";
    return ' 	x'+hexcode1+hexcode2+hexcode3+hexcode4+'w = '+content+'; \n '+
' nb = int(x'+hexcode1+hexcode2+hexcode3+hexcode4+'w / 255); \n '+
' xb = int(x'+hexcode1+hexcode2+hexcode3+hexcode4+'w - (nb * 255)-nb); \n '+
' mySerial.write(x'+hexcode1+hexcode2+hexcode3+hexcode4+'m , 6); \n '+
' mySerial.write(nb); \n '+
' mySerial.write(xb); \n ';
 
};


// controle
Blockly.Arduino['controls_switch']=function(block){
    var n = 0;
    var switchvar = Blockly.Arduino.variableDB_.getName(block.getFieldValue('SWVAR'), Blockly.Variables.NAME_TYPE);
    var argument = Blockly.Arduino.valueToCode(block, 'CASE' + n, Blockly.Arduino.ORDER_NONE);
    var branch = Blockly.Arduino.statementToCode(block, 'DO' + n);
    var code = 'switch (' + switchvar + ') {\n' + 'case ' + argument + ': \n' + branch + '  break;\n';
    for (n = 1; n <= block.casebreakCount_; n++) {
        argument = Blockly.Arduino.valueToCode(block, 'CASE' + n, Blockly.Arduino.ORDER_NONE);
        branch = Blockly.Arduino.statementToCode(block, 'DO' + n);
        code += ' case ' + argument + ': \n' + branch + '  break;\n';
    }
    if (block.defaultCount_) {
        branch = Blockly.Arduino.statementToCode(block, 'DEFAULT');
        code += ' default :\n' + branch + ' ';
    }
    code += '}\n'
    return code;
};
Blockly.Arduino["controls_for"]=function(block){
    var variable0 = Blockly.Arduino.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    var argument0 = Blockly.Arduino.valueToCode(block, "FROM", Blockly.Arduino.ORDER_ASSIGNMENT);
    var argument1 = Blockly.Arduino.valueToCode(block, "TO", Blockly.Arduino.ORDER_ASSIGNMENT);
    var argument2 = Blockly.Arduino.valueToCode(block, "BY", Blockly.Arduino.ORDER_ASSIGNMENT);
    var branch = Blockly.Arduino.statementToCode(block, "DO");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    return "for (" + variable0 + "=" + argument0 + " ; " + variable0 + "<=" + argument1 + " ; " + variable0 + "=" + variable0 + "+" + argument2 + ") {\n" + branch + "}\n"
};
Blockly.Arduino["controls_if"]=function(block){
    var n = 0;
    var argument = Blockly.Arduino.valueToCode(block, "IF" + n, Blockly.Arduino.ORDER_NONE);
    var branch = Blockly.Arduino.statementToCode(block, "DO" + n);
    var code = "if (" + argument + ") {\n" + branch + "}";
    for (n = 1; n <= block.elseifCount_; n++) {
        argument = Blockly.Arduino.valueToCode(block, "IF" + n, Blockly.Arduino.ORDER_NONE);
        branch = Blockly.Arduino.statementToCode(block, "DO" + n);
        code += " else if (" + argument + ") {\n" + branch + "}"
    }
    if (block.elseCount_) {
        branch = Blockly.Arduino.statementToCode(block, "ELSE");
        code += " else {\n" + branch + "}"
    }
    return code + "\n"
};
Blockly.Arduino["controls_repeat_ext"]=function(block){
    var repeats = Blockly.Arduino.valueToCode(block, "TIMES", Blockly.Arduino.ORDER_ASSIGNMENT);
    var branch = Blockly.Arduino.statementToCode(block, "DO");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    var loopVar = Blockly.Arduino.variableDB_.getName("count", Blockly.Variables.NAME_TYPE);
    var code = "for (int " + loopVar + "=0 ; " + loopVar + "<" + repeats + " ; " + loopVar + "++) {\n" + branch + "}\n";
    return code
};
Blockly.Arduino["controls_whileUntil"]=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, "BOOL", Blockly.Arduino.ORDER_NONE);
    var branch = Blockly.Arduino.statementToCode(block, "DO");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    if (block.getFieldValue("MODE") == "UNTIL") {
        if (!argument0.match(/^\w+$/)) argument0 = "(" + argument0 + ")";
        argument0 = "!" + argument0
    }
    return "while (" + argument0 + ") {\n" + branch + "}\n"
};
Blockly.Arduino["controls_forEach"]=function(block){
    var variable0 = Blockly.Arduino.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    var argument0 = Blockly.Arduino.valueToCode(block, "LIST", Blockly.Arduino.ORDER_ASSIGNMENT);
    var branch = Blockly.Arduino.statementToCode(block, "DO");
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + block.id + "'") + branch;
    var code = "for (var " + variable0 + " in  " + argument0 + ") {\n" + branch + "}\n";
    return code
};
Blockly.Arduino["controls_flow_statements"]=function(block){
    switch (block.getFieldValue("FLOW")) {
        case "BREAK":
            return "break;\n";
        case "CONTINUE":
            return "continue;\n"
    }
    throw "Unknown flow statement.";
};
Blockly.Arduino["logic_operation"]=function(block){
    var mode = block.getFieldValue("OP");
	var operator = Blockly.Arduino.logic_operation.OPERATORS[mode];
    var order = operator == "&&" ? Blockly.Arduino.ORDER_LOGICAL_AND : Blockly.Arduino.ORDER_LOGICAL_OR;
    var argument0 = Blockly.Arduino.valueToCode(block, "A", order);
    var argument1 = Blockly.Arduino.valueToCode(block, "B", order);
    var code = argument0 + " " + operator + " " + argument1;
    return [code, order]
};
Blockly.Arduino.logic_operation.OPERATORS = {and: "&", and2: "&&", or: "|", or2: "||", xor: "^", shiftL: "<<", shiftR: ">>"};
Blockly.Arduino["logic_negate"]=function(block){
    var order = Blockly.Arduino.ORDER_UNARY_PREFIX;
    var argument0 = Blockly.Arduino.valueToCode(block, "BOOL", order);
    var code = "!" + argument0;
    return [code, order]
};
Blockly.Arduino["logic_null"]=function(block){
    var code = "NULL";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["inout_onoff"]=function(block){
    var code=block.getFieldValue("BOOL") == "HIGH" ? "HIGH" : "LOW";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
// math
Blockly.Arduino["logic_compare_log"]=function(block){
    var mode = block.getFieldValue("OP");
    var operator = Blockly.Arduino.logic_compare.OPERATORS[mode];
    var order = operator == "==" || operator == "!=" ? Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
    var argument0 = Blockly.Arduino.valueToCode(block, "A", order);
    var argument1 = Blockly.Arduino.valueToCode(block, "B", order);
    var code = argument0 + " " + operator + " " + argument1;
    return [code, order]
};
Blockly.Arduino["logic_compare"]=function(block){
    var mode = block.getFieldValue("OP");
    var operator = Blockly.Arduino.logic_compare.OPERATORS[mode];
    var order = operator == "==" || operator == "!=" ? Blockly.Arduino.ORDER_EQUALITY : Blockly.Arduino.ORDER_RELATIONAL;
    var argument0 = Blockly.Arduino.valueToCode(block, "A", order);
    var argument1 = Blockly.Arduino.valueToCode(block, "B", order);
    var code = argument0 + " " + operator + " " + argument1;
    return [code, order]
};
Blockly.Arduino.logic_compare.OPERATORS = {EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">="};
Blockly.Arduino['intervalle']=function(block){
    var OPERATORS = {
        'LT': '<',
        'LTE': '<=',
        'GT': '>',
        'GTE': '>='
    };
    var value_inf = Blockly.Arduino.valueToCode(block, 'inf', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_comp_inf = block.getFieldValue('comp_inf');
    var value_valeur = Blockly.Arduino.valueToCode(block, 'valeur', Blockly.Arduino.ORDER_ATOMIC);
    var dropdown_comp_sup = OPERATORS[block.getFieldValue('comp_sup')];
    var value_sup = Blockly.Arduino.valueToCode(block, 'sup', Blockly.Arduino.ORDER_ATOMIC);
    var code = '';
    if (dropdown_comp_inf == 'LT') {
        code += '(' + value_valeur + ' > ' + value_inf + ')';
    }
    if (dropdown_comp_inf == 'GT') {
        code += '(' + value_valeur + ' < ' + value_inf + ' )';
    }
    if (dropdown_comp_inf == 'GTE') {
        code += '(' + value_valeur + ' <= ' + value_inf + ' )';
    }
    if (dropdown_comp_inf == 'LTE') {
        code += '(' + value_valeur + ' >= ' + value_inf + ' )';
    }
    code += ' && ( ' + value_valeur + ' ' + dropdown_comp_sup + ' ' + value_sup + ')';
    return [code, Blockly.Arduino.ORDER_NONE]
};
Blockly.Arduino["math_number"]=function(block){
    var code = window.parseFloat(block.getFieldValue("NUM"));
    var order = code < 0 ? Blockly.Arduino.ORDER_UNARY_PREFIX : Blockly.Arduino.ORDER_ATOMIC;
    return [code, order]
};
Blockly.Arduino["math_arithmetic"]=function(block){
    var mode = block.getFieldValue("OP");
    var tuple = Blockly.Arduino.math_arithmetic.OPERATORS[mode];
    var operator = tuple[0];
    var order = tuple[1];
    var argument0 = Blockly.Arduino.valueToCode(block, "A", order);
    var argument1 = Blockly.Arduino.valueToCode(block, "B", order);
    var code;
    if (!operator) {
        code = "pow(" + argument0 + ", " + argument1 + ")";
        return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX]
    }
    code = argument0 + operator + argument1;
    return [code, order]
};
Blockly.Arduino.math_arithmetic.OPERATORS = {ADD: [" + ", Blockly.Arduino.ORDER_ADDITIVE],MINUS: [" - ", Blockly.Arduino.ORDER_ADDITIVE], MULTIPLY: [" * ", Blockly.Arduino.ORDER_MULTIPLICATIVE], DIVIDE: [" / ", Blockly.Arduino.ORDER_MULTIPLICATIVE], POWER: [null, Blockly.Arduino.ORDER_NONE]};
Blockly.Arduino["math_single"]=function(block){
    var operator = block.getFieldValue("OP");
    var code;
    var arg;
    if (operator == "NEG") {
        arg = Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_UNARY_NEGATION);
        if (arg[0] == "-") arg = " " + arg;
        code = "-" + arg;
        return [code, Blockly.Arduino.ORDER_UNARY_NEGATION]
    }
    if (operator == "SIN" || operator == "COS" || operator == "TAN") arg = Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_DIVISION);
    else arg = Blockly.Arduino.valueToCode(block, "NUM", Blockly.Arduino.ORDER_NONE);
    switch (operator) {
        case "ABS":
            code = "abs(" + arg + ")";
            break;
        case "ROOT":
            code = "sqrt(" + arg + ")";
            break;
        case "ROUND":
            code = "round(" + arg + ")";
            break;
        case "ROUNDUP":
            code = "ceil(" + arg + ")";
            break;
        case "ROUNDDOWN":
            code = "floor(" + arg + ")";
            break;
        case "SIN":
            code = "sin(" + arg + ")";
            break;
        case "COS":
            code = "cos(" + arg + ")";
            break;
        case "TAN":
            code = "tan(" + arg + ")";
            break;
        default:
            throw "Unknown math operator: " + operator;
    }
    if (code) return [code, Blockly.Arduino.ORDER_FUNCTION_CALL];
    return [code, Blockly.Arduino.ORDER_DIVISION]
};
Blockly.Arduino["math_constant"]=function(block){
    var CONSTANTS = {
        PI: ["PI", Blockly.Arduino.ORDER_MEMBER],
        E: ["E", Blockly.Arduino.ORDER_MEMBER],
        GOLDEN_RATIO: ["(1 + sqrt(5)) / 2", Blockly.Arduino.ORDER_DIVISION],
        SQRT2: ["SQRT2", Blockly.Arduino.ORDER_MEMBER],
        SQRT1_2: ["SQRT1_2", Blockly.Arduino.ORDER_MEMBER],
        INFINITY: ["Infinity", Blockly.Arduino.ORDER_ATOMIC]
    };
    return CONSTANTS[block.getFieldValue("CONSTANT")]
};
Blockly.Arduino["math_number_property"]=function(block){
    var number_to_check = Blockly.Arduino.valueToCode(block, "NUMBER_TO_CHECK", Blockly.Arduino.ORDER_MODULUS);
    var dropdown_property = block.getFieldValue("PROPERTY");
    var code;
    if (dropdown_property == "PRIME") {
        var functionName = Blockly.Arduino.provideFunction_("math_isPrime", ["function " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 ||" + " n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).", "  for (var x = 6; x <= sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"]);
        code = functionName + "(" + number_to_check + ")";
        return [code, Blockly.Arduino.ORDER_FUNCTION_CALL]
    }
    switch (dropdown_property) {
        case "EVEN":
            code = number_to_check + " % 2 == 0";
            break;
        case "ODD":
            code = number_to_check + " % 2 == 1";
            break;
        case "WHOLE":
            code = number_to_check + " % 1 == 0";
            break;
        case "POSITIVE":
            code = number_to_check + " > 0";
            break;
        case "NEGATIVE":
            code = number_to_check + " < 0";
            break;
        case "DIVISIBLE_BY":
            var divisor = Blockly.Arduino.valueToCode(block, "DIVISOR", Blockly.Arduino.ORDER_MODULUS);
            code = number_to_check + " % " + divisor + " == 0";
            break
    }
    return [code, Blockly.Arduino.ORDER_EQUALITY]
};
Blockly.Arduino["math_round"] = Blockly.Arduino["math_single"];
Blockly.Arduino["math_trig"] = Blockly.Arduino["math_single"];
Blockly.Arduino["math_modulo"]=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, "DIVIDEND", Blockly.Arduino.ORDER_MODULUS);
    var argument1 = Blockly.Arduino.valueToCode(block, "DIVISOR", Blockly.Arduino.ORDER_MODULUS);
    var code = argument0 + " % " + argument1;
    return [code, Blockly.Arduino.ORDER_MODULUS]
};
Blockly.Arduino["math_random_int"]=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, "FROM", Blockly.Arduino.ORDER_COMMA);
//  var arg = Blockly.Arduino.valueToCode(block, "TO", Blockly.Arduino.ORDER_COMMA);
//	var argument1 = parseInt(arg) + 1 ;
	var argument1 = Blockly.Arduino.valueToCode(block, "TO", Blockly.Arduino.ORDER_COMMA);
    var functionName = Blockly.Arduino.provideFunction_("random_int", ["long " + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + "(int a,int b) {", "  if (a > b) {",  "    int c = a;", "    a = b;", "    b = c;", "  }", "  return random(a,b);", "}"]);
    Blockly.Arduino.setups_["randomseed"] = "randomSeed(analogRead(0));";
	var code = functionName + "(" + argument0 + ", " + argument1 + ")";
    return [code, Blockly.Arduino.ORDER_FUNCTION_CALL]
};
Blockly.Arduino["math_random_int_g"]=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, "FROM", Blockly.Arduino.ORDER_COMMA);
	var argument1 = Blockly.Arduino.valueToCode(block, "TO", Blockly.Arduino.ORDER_COMMA);
    var code = "random("+argument0+","+argument1+")";
    return [code, Blockly.Arduino.ORDER_FUNCTION_CALL]
};
Blockly.Arduino["math_random_int_map"]=function(block){
    var mi1 = Blockly.Arduino.valueToCode(block, "Mi1", Blockly.Arduino.ORDER_COMMA);
    var mi2 = Blockly.Arduino.valueToCode(block, "Mi2", Blockly.Arduino.ORDER_COMMA);
    var mi3 = Blockly.Arduino.valueToCode(block, "Mi3", Blockly.Arduino.ORDER_COMMA);
    var mi4 = Blockly.Arduino.valueToCode(block, "Mi4", Blockly.Arduino.ORDER_COMMA);
    var mi5 = Blockly.Arduino.valueToCode(block, "Mi5", Blockly.Arduino.ORDER_COMMA);	
	
	var code = "map(" + mi1 + ", " + mi2 + ", " + mi3 + ", " + mi4 + ", " + mi5 + ")";   
    return [code, Blockly.Arduino.ORDER_FUNCTION_CALL]
};
// texte
Blockly.Arduino['text_char']=function(block){
    var code = '\'' + block.getFieldValue('TEXT') + '\'';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino["text"]=function(block){
    var code = Blockly.Arduino.quote_(block.getFieldValue("TEXT"));
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};
Blockly.Arduino["text_join"]=function(block){
    var code;
    if (block.itemCount_ == 0) return ['""', Blockly.Arduino.ORDER_ATOMIC];
    else if (block.itemCount_ == 1) {
        var argument0 = Blockly.Arduino.valueToCode(block, "ADD0", Blockly.Arduino.ORDER_UNARY_POSTFIX);
        code = "String(" + argument0 + ")";
        return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX]
    } else {
        var argument;
        code = [];
        for (var n = 0; n < block.itemCount_; n++) {
            argument = Blockly.Arduino.valueToCode(block, "ADD" + n, Blockly.Arduino.ORDER_NONE);
            if (argument == "") code[n] = '""';
            else code[n] = "String(" + argument + ")"
        }
        code = code.join(" + ");
        return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX]
    }
};
Blockly.Arduino["text_length"]=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, "VALUE", Blockly.Arduino.ORDER_UNARY_POSTFIX);
    var code = "String(" + argument0 + ").length()";
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX]
};
Blockly.Arduino["text_isEmpty"]=function(block){
    var func = [];
    func.push("boolean " + Blockly.Arduino.DEF_FUNC_NAME + "(String msg) {");
    func.push("  if (msg.length() > 0) {");
    func.push("    return true;");
    func.push("  } else {");
    func.push("    return false;");
    func.push("  }");
    func.push("}");
    var funcName = Blockly.Arduino.addFunction("isStringEmpty", func.join("\n"));
    var argument0 = Blockly.Arduino.valueToCode(block, "PIN", Blockly.Arduino.ORDER_ATOMIC);
    if (argument0 == "") argument0 = '""';
    else argument0 = "String(" + argument0 + ")";
    var code = funcName + "(" + argument0 + ")";
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX]
};
// variable
Blockly.Arduino["math_change"]=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, "DELTA", Blockly.Arduino.ORDER_ADDITIVE);
    var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    var code = varName + " = " + varName + " + " + argument0 + ";\n";
    return code
};
Blockly.Arduino['variables_get']=function(block){
    var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino['variables_set']=function(block){
    var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
    var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + ' = ' + argument0 + ';\n';
    return code;
};
Blockly.Arduino['variables_set_init']=function(block){
	var argument0 = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ASSIGNMENT);
	var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var typeBlock = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('VARIABLE_SETTYPE_TYPE')]);
	Blockly.Arduino.variables_[varName] = typeBlock + ' ' + varName + ' = ' + argument0 + ';';
	return "";
};
Blockly.Arduino["base_define_const"]=function(block){
    var value_text1 = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var value_text2 = Blockly.Arduino.valueToCode(block, "TEXT2", Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.variables_[value_text1] = "#define " + value_text1 + " " + value_text2;
    return ""
};
Blockly.Arduino["variables_const"]=function(block){
  var argument0 = Blockly.Arduino.valueToCode(block, 'VAL_CONST', Blockly.Arduino.ORDER_ASSIGNMENT);
  var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var typeBlock = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('VARIABLE_SETTYPE_TYPE')]);
  Blockly.Arduino.variables_[varName] = 'const ' + typeBlock + ' ' + varName + ' = ' + argument0 + ';';
  return "";  
};
// fonction
Blockly.Arduino['procedures_defnoreturn'] = function(block){
    var funcName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Arduino.statementToCode(block, 'STACK');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + block.id + '\'') + branch;
    }
	var args = [];
	for (var x = 0; x < block.arguments_.length; x++) {
		args[x] = Blockly.Arduino.getArduinoType_(Blockly.Types[block.argumentstype_[x]]) + ' ' + block.arguments_[x];
	}
    var code = 'void ' + funcName + '(' + args.join(',') + ') {\n' + branch + '}\n';
    code = Blockly.Arduino.scrub_(block, code);
    Blockly.Arduino.codeFunctions_[funcName] = code;
    return "";
};
Blockly.Arduino['procedures_defreturn']=function(block){
    var funcName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Arduino.statementToCode(block, 'STACK');
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + block.id + '\'') + branch;
    }
    var returnValue = Blockly.Arduino.valueToCode(block, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
    if (returnValue) {
        returnValue = '  return ' + returnValue + ';\n';
    }
    var returnType = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('type')]);
    var args = [];
	for (var x = 0; x < block.arguments_.length; x++) {
		args[x] = Blockly.Arduino.getArduinoType_(Blockly.Types[block.argumentstype_[x]]) + ' ' + Blockly.Arduino.variableDB_.getName(block.arguments_[x], Blockly.Variables.NAME_TYPE);
	}
    var code = returnType + ' ' + funcName + '(' + args.join(',') + ') {\n' + branch + returnValue + '}\n';
    code = Blockly.Arduino.scrub_(block, code);
    Blockly.Arduino.codeFunctions_[funcName] = code;
    return '';
};
Blockly.Arduino['procedures_callreturn']=function(block){
    var funcName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var args = [];
    for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.Arduino.valueToCode(block, 'ARG' + x, Blockly.Arduino.ORDER_NONE) || 'null';
    }
    var code = funcName + '(' + args.join(', ') + ')';
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};
Blockly.Arduino['procedures_callnoreturn']=function(block){
    var funcName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'),
        Blockly.Procedures.NAME_TYPE);
    var args = [];
    for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.Arduino.valueToCode(block, 'ARG' + x,
            Blockly.Arduino.ORDER_NONE) || 'null';
    }
    var code = funcName + '(' + args.join(', ') + ');\n';
    return code;
};
Blockly.Arduino['procedures_ifreturn']=function(block){
    if (block.hasReturnValue_) {
        var value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_NONE) || 'null';
        var code = '  return ' + value + ';\n';
    } else {
        var code = '  return;\n';
    }
    return code;
};
// tableau
Blockly.Arduino['creer_tableau']=function(block){
	var varName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var typeBlock = Blockly.Arduino.getArduinoType_(Blockly.Types[block.getFieldValue('type')]);
	var menu = "c2";
	var dimension = block.getFieldValue("dim");
	var l = "" ;
	var k = "" ;
	switch (menu) {
        case "c1":
            for (var i = 0; i < dimension; i++) {
				var j = Blockly.Arduino.valueToCode(block, "D" + i, Blockly.Arduino.ORDER_ASSIGNMENT);
				k += "[" + j + "]"
			}
			Blockly.Arduino.variables_[varName] = typeBlock + ' ' + varName + k + ';';
			break;
        case "c2":
			k += "{" ;
			for (var i = 0; i < dimension; i++) {
				var j = Blockly.Arduino.valueToCode(block, "D" + i, Blockly.Arduino.ORDER_ASSIGNMENT);
				var nb = j.split(',');
				k += j + ",";
				l += "[" + nb.length + "]";
			}
			k=k.substr(0,k.length-1);
			k+="}";
			Blockly.Arduino.variables_[varName] = typeBlock + ' ' + varName +' [' + dimension +'] =' + k + ';';
			break;
		}
	return '';
};
Blockly.Arduino['fixer_tableau']=function(block){
    var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
	var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var dimension = block.getFieldValue("Number");
	var dimension = dimension - 1;
	 
	 var code = ''+code+'[' + dimension +']='+value_value+';\n';
    return code;
};
Blockly.Arduino["array_getIndex"]=function(block){
    var code = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var dimension = block.getFieldValue("Number");
	var dimension = dimension - 1;
		var code = ''+code+'[' + dimension +']';
 
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Arduino["array_getsize"]=function(block){
    var list = Blockly.Arduino.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = 'sizeof('+list+')/sizeof('+list+'[0])';
	return [code, Blockly.Arduino.ORDER_ATOMIC] ;
};
Blockly.Arduino["array_create_with"]=function(block){
    var code = new Array(block.itemCount_);
    for (var n = 0; n < block.itemCount_; n++) {
        code[n] = Blockly.Arduino.valueToCode(block, 'ADD' + n, Blockly.Arduino.ORDER_COMMA) || 'null';
    }
    code = '{' + code.join(',') + '}';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['arduino_b_code']=function(block){
    var valuetext = block.getFieldValue('text');
    var valueincludes = block.getFieldValue('includes');
    var valuevariables = block.getFieldValue('variables');
    var valuedefinitions = block.getFieldValue('definitions');
    var valueuserfunctions = block.getFieldValue('userFunctions');
    var valuesetups = block.getFieldValue('setups');
    var valuecode = block.getFieldValue('code');
    Blockly.Arduino.includes_['includes'+valueincludes] = ''+valueincludes+' \n';
    Blockly.Arduino.variables_['variables'+valuevariables] = ''+valuevariables+' \n';
    Blockly.Arduino.definitions_['definitions'+valuedefinitions] = ''+valuedefinitions+' \n';
    Blockly.Arduino.userFunctions_['userFunctions'+valueuserfunctions] = ''+valueuserfunctions+' \n';
    Blockly.Arduino.setups_['setups'+valuesetups]=''+valuesetups+' \n';
    var code = ''+valuecode+' \n';
    return code
};

 Blockly.Arduino['arduino_a_code']=function(block){
    var valuetext = block.getFieldValue('text');
    var valueincludes = block.getFieldValue('includes');
    var valuevariables = block.getFieldValue('variables');
    var valuedefinitions = block.getFieldValue('definitions');
    var valueuserfunctions = block.getFieldValue('userFunctions');
    var valuesetups = block.getFieldValue('setups');
    var valuecode = block.getFieldValue('code');
    Blockly.Arduino.includes_['includes'+valueincludes] = ''+valueincludes+' \n';
    Blockly.Arduino.variables_['variables'+valuevariables] = ''+valuevariables+' \n';
    Blockly.Arduino.definitions_['definitions'+valuedefinitions] = ''+valuedefinitions+' \n';
    Blockly.Arduino.userFunctions_['userFunctions'+valueuserfunctions] = ''+valueuserfunctions+' \n';
    Blockly.Arduino.setups_['setups'+valuesetups]=''+valuesetups+' \n';
    var code = ''+valuecode+'';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino["serial_init"]=function(block){
    var dropdown_speed=block.getFieldValue("SPEED");
	var dropdown_pin=block.getFieldValue("pin");
	window.localStorage.baudrate=dropdown_speed;
	switch (dropdown_pin) {
        case "0":
            Blockly.Arduino.setups_["serial_begin"]="Serial.begin(" + dropdown_speed + ");";
            break;
        case "19":
            Blockly.Arduino.setups_["serial_begin"]="Serial1.begin(" + dropdown_speed + ");";
            break;
        case "17":
            Blockly.Arduino.setups_["serial_begin"]="Serial2.begin(" + dropdown_speed + ");";
            break
        case "15":
            Blockly.Arduino.setups_["serial_begin"]="Serial3.begin(" + dropdown_speed + ");";
            break
	}
  return ""
};

 

Blockly.Arduino["GPS_init_ss"] = function(block) {
	
 var pin_rx = this.getFieldValue('PIN_RX');
 var pin_tx = this.getFieldValue('PIN_TX');
  
 Blockly.Arduino.includes_['define_softwareserial_library'] = '#include <SoftwareSerial.h>';
 Blockly.Arduino.includes_['define_gps_library'] = '#include <TinyGPSPlus.h>';
 Blockly.Arduino.definitions_['define_GPS_variable'] = 'TinyGPSPlus gps;\n';
 Blockly.Arduino.definitions_['define_softwareserial_gps'] = 'SoftwareSerial mySoftwareSerialgps('+pin_tx+','+pin_rx+');\n';
 Blockly.Arduino.definitions_['gps_variables'] ='float flat,flon,falt,fc,fk,fmph,fmps,fkmph;\n'+
'int year;\n'+ 
'byte month, day, hour, minutes, second, hundredths,nsat;\n'+ 
'unsigned long fix_age; \n';   
 
 Blockly.Arduino.setups_['setup_sserial_gps_baudios'] = 'mySoftwareSerialgps.begin(9600);\n';
 

  var code='';
  return code;
   
};



Blockly.Arduino["GPS_read_save_values"] = function(block) {
 		
 var code = 'while (mySoftwareSerialgps.available()>0)\n'+
' {\n'+ 
'  if (gps.encode(mySoftwareSerialgps.read())) \n'+
'   {\n'+
'	  if (gps.location.isValid()) \n'+
'		{	\n'+
'		  flat= gps.location.lat();\n'+
'		  flon =gps.location.lng();\n'+
'       }\n'+
'	  if (gps.altitude.isValid()) \n'+
'		{	\n'+
'		  falt= gps.altitude.meters();\n'+
'       }\n'+
'	  if (gps.course.isValid()) \n'+
'		{	\n'+
'		  fc= gps.course.deg();\n'+
'       }\n'+
'	  if (gps.satellites.isValid()) \n'+
'		{	\n'+
'		  nsat=gps.satellites.value();\n'+
'       }\n'+
'	  if (gps.speed.isValid()) \n'+
'		{	\n'+
'		  fk=gps.speed.knots();\n'+
'		  fmph=gps.speed.mph();\n'+
'		  fmps= gps.speed.mps();\n'+
'		  fkmph =gps.speed.kmph();\n'+
'       }\n'+
'	  if (gps.date.isValid()) \n'+
'		{	\n'+
'		  year=gps.date.year();\n'+
'		  month=gps.date.month();\n'+
'		  day=gps.date.day();\n'+
'       }\n'+
'	  if (gps.time.isValid()) \n'+
'		{	\n'+
'		  hour=gps.time.hour();\n'+
'		  minutes=gps.time.minute();\n'+
'		  second=gps.time.second();\n'+
'       }\n'+
'   }\n'+
'  }\n';

  return code;
};



Blockly.Arduino["GPS_location"] = function(block) {
	
 var parameter = this.getFieldValue('PARAMETERS1'); 
 
 
  if(parameter ==0)
   var code='flat';
  else  if(parameter ==1)
   var code='flon';
	else  if(parameter ==2)
		 var code='falt';
	 else if(parameter ==3)
		 var code='fc';
		else
	      var code='nsat';
	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};


Blockly.Arduino["GPS_speed"] = function(block) {
	
 var parameter = this.getFieldValue('PARAMETERS2'); 
 
 
  if(parameter ==0)
   var code='fk';
  else  if(parameter ==1)
   var code='fmph';
	else  if(parameter ==2)
		 var code='fmps';
		else
	      var code='fkmph';
	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};


Blockly.Arduino["GPS_datetime"] = function(block) {
	
 var parameter = this.getFieldValue('PARAMETERS3'); 
 
 
  if(parameter ==0)
   var code='year';
  else  if(parameter ==1)
   var code='month';
	else  if(parameter ==2)
		 var code='day';
	 else if(parameter ==3)
		 var code='hour';
		else if(parameter ==4)
			var code='minutes';
			else
				var code='second';
	  
   return [code, Blockly.Arduino.ORDER_ATOMIC];

};


Blockly.Arduino["x9c103s"]=function(block){
    var valuen4_number = block.getFieldValue('n4_number');
    var valuen3_number = block.getFieldValue('n3_number');
    var valuen2_number = block.getFieldValue('n2_number');
    var value_block = Blockly.Arduino.valueToCode(block, '_block', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.variables_["variables_x9c103s"] = 'long zen = 0; \n long zenm = 0; \n ';
    Blockly.Arduino.setups_["setups_x9c103s"]='  pinMode('+valuen2_number+', OUTPUT);  \n  pinMode('+valuen3_number+', OUTPUT);  \n  pinMode('+valuen4_number+', OUTPUT);  \n  digitalWrite('+valuen4_number+', 1);  \n';
    var code = 'zen = '+value_block+';   \n'+
 '    if (zen > zenm ) {   \n'+
 '      zenm = zenm + 1;   \n'+
 '  digitalWrite('+valuen2_number+', HIGH);     \n'   +       
 '  digitalWrite('+valuen3_number+', HIGH);     \n'  +       
 '  digitalWrite('+valuen4_number+', LOW);     \n'  +         
 '  delayMicroseconds(1);                   \n'+
 '  digitalWrite('+valuen3_number+', LOW);     \n' +         
 '  delayMicroseconds(1);   \n'+
 '  digitalWrite('+valuen3_number+', HIGH);   \n'+
 '  delayMicroseconds(1);   \n'+
 '  digitalWrite('+valuen4_number+', HIGH);    \n'+
 '    }   \n'+
 '    if (zen < zenm) {   \n'+
 '      zenm = zenm - 1;   \n'+
 '  digitalWrite('+valuen2_number+', LOW);   \n'+
 '  digitalWrite('+valuen3_number+', HIGH);   \n'+
 '  digitalWrite('+valuen4_number+', LOW);   \n'+
 '  delayMicroseconds(1);   \n'+
 '  digitalWrite('+valuen3_number+', LOW);   \n'+
 '  delayMicroseconds(1);   \n'+
 '  digitalWrite('+valuen3_number+', HIGH);   \n'+
 '  delayMicroseconds(1);   \n'+
 '  digitalWrite('+valuen4_number+', HIGH);   \n'+
 '    }   \n';

    return code
};


//sim 800

Blockly.Arduino["sim800_init_ss"]=function(block){
    var valuen8_number = block.getFieldValue('n8_number');
    var valuen9_number = block.getFieldValue('n9_number');

    Blockly.Arduino.variables_["variables_sim800_init_ss"] = '#include <SoftwareSerial.h>  \n  SoftwareSerial sim800l('+valuen8_number+', '+valuen9_number+');  \n 	String currStr = "";     \n   boolean isStringMessage = false;  \n ';
    Blockly.Arduino.setups_["setups_sim800_init_ss"]='sim800l.begin(19200);  \n   '+      
 ' delay(2000); \n '+
 '   sim800l.print("AT+CMGF=1\\r");  \n   '+      
 '     delay(100); \n '+
 '   sim800l.print("AT+IFC=1, 1\\r");  \n '+     
 '     delay(100); \n '+
 '   sim800l.print("AT+CPBS=\\"SM\\"\\r");   \n '+  
 '     delay(100); \n '+
 '   sim800l.print("AT+GSMBUSY=1, 1\\r");   \n '+
 '     delay(100); \n '+
 '   sim800l.print("AT+CNMI=1,2,2,1,0\\r");  \n '+
 '     delay(300); \n '+
 '   sim800l.print("AT+CMGDA=«DEL ALL»\\r");  \n';
    var code = ' ';
    return code
};
Blockly.Arduino['sim800_send']=function(block){
    var valuetext_block = Blockly.Arduino.valueToCode(block, 'text_block', Blockly.Arduino.ORDER_ATOMIC);
    var valuetell_number = block.getFieldValue('tell_number');

    var code = ' sim800l.print("AT+CMGF=1\\r"); \n '+
 '   delay(100); \n '+
 '   sim800l.println("AT + CMGS = \\"+'+valuetell_number+'\\"\\r");   \n '+
 '   delay(100);  \n '+
 '   sim800l.print('+valuetext_block+'); \n '+ 
 '   delay(100); \n '+
 '   sim800l.println((char)26);   \n '+                    
 '   delay(5000); \n '+
 '   sim800l.print("AT+CMGDA=«DEL ALL»\\r");   \n '+
 '   delay (2000);  \n';
    return code
};
Blockly.Arduino['sim800_send_sms']=function(block){
    var valuesms_statement = Blockly.Arduino.statementToCode(block, 'sms_statement');
var dio="'";
    var code = '  if (!sim800l.available()) return; \n '+
  '    char currSymb = sim800l.read();    \n '+ 
  '    if ('+dio+'\\r'+dio+' == currSymb) \n '+
 '        { \n '+
 '          if (isStringMessage) \n '+
 '            { \n '+
 '   '+valuesms_statement+'           \n '+
 '             isStringMessage = false; \n '+
 '            } \n '+
 '          else { if (currStr.startsWith("+CMT")) { isStringMessage = true;}} \n '+
 '         currStr = ""; \n '+
 '       }  \n '+
 '     else if ('+dio+'\\n'+dio+' != currSymb) { currStr += String(currSymb); \n '+
 '     }    \n  ';
    return code
};

Blockly.Arduino['sim800_init_sms']=function(block){
    var valuesms_statement = Blockly.Arduino.statementToCode(block, 'sms_statement');
    var valuesss_text = block.getFieldValue('sss_text');

    var code = 'if (!currStr.compareTo("'+valuesss_text+'"))   { \n         '+valuesms_statement+' \n     } \n ';
    return code
};
 
 Blockly.Arduino['initread_acs712']=function(block){
    var value_dropdown = block.getFieldValue('_dropdown');
    var valuepin_text = block.getFieldValue('pin_text');
 
    Blockly.Arduino.includes_['includes_initread_acs712'] = '#include <ACS712.h> \n ACS712 sensor('+value_dropdown+', '+valuepin_text+');  \n  ';
    Blockly.Arduino.setups_['setups_initread_acs712']='sensor.calibrate();  \n ';
    var code = 'sensor.getCurrentDC()';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['init_temp_ds18b20_1']=function(block){
    var valuepin = block.getFieldValue('pin');
    Blockly.Arduino.includes_["includes_init_temp_ds18b20_1"] = '#include <OneWire.h> \n #include <DallasTemperature.h> \n #define ONE_WIRE_BUS '+valuepin+' \n OneWire oneWire(ONE_WIRE_BUS); \n DallasTemperature sensors(&oneWire); \n DeviceAddress Thermometer;   \n int deviceCount = 0;   \n ';
    Blockly.Arduino.userFunctions_["userFunctions_init_temp_ds18b20_1"] = 'void printAddress(DeviceAddress deviceAddress) \n { \n for (uint8_t i = 0; i < 8; i++) \n { \n Serial.print("0x"); \n if (deviceAddress[i] < 0x10) Serial.print("0"); \n Serial.print(deviceAddress[i], HEX); \n if (i < 7) Serial.print(", "); \n } \n Serial.println(""); \n } \n ';
	
    Blockly.Arduino.setups_["setups_init_temp_ds18b20_1"]='Serial.begin(9600); \n  sensors.begin(); \n  Serial.println("Locating devices..."); \n  Serial.print("Found "); \n  deviceCount = sensors.getDeviceCount(); \n  Serial.print(deviceCount, DEC); \n  Serial.println(" devices."); \n  Serial.println(""); \n  Serial.println("Printing addresses..."); \n  for (int i = 0; i < deviceCount; i++) \n  { \n  Serial.print("Sensor "); \n  Serial.print(i+1); \n  Serial.print(" : "); \n  sensors.getAddress(Thermometer, i); \n  printAddress(Thermometer); \n  } \n  ';
    var code = ' ';
    return code
};

Blockly.Arduino['init_temp_ds18b20_2']=function(block){
    var valuepin = block.getFieldValue('pin');
    var valuenomer = block.getFieldValue('nomer');
    var valueadres = block.getFieldValue('adres');
    Blockly.Arduino.includes_['includes_ds18b20_2'] = '#include <OneWire.h> \n #include <DallasTemperature.h> \n ';
    Blockly.Arduino.definitions_['includes_ds18b20_2'+valuepin] = 'OneWire oneWireBus'+valuepin+'('+valuepin+'); \n  DallasTemperature sensors'+valuepin+'(&oneWireBus'+valuepin+');  \n ';
	Blockly.Arduino.variables_['variables_ds18b20_2'+valuenomer] = ' int T'+valuenomer+'[8] = {'+valueadres+'};  \n ';
    Blockly.Arduino.setups_['setups_ds18b20_2'+valuepin]='  sensors'+valuepin+'.begin(); \n ';
    var code = ' ';
    return code   
};
Blockly.Arduino['init_temp_ds18b20_3']=function(block){
    var valuepin = block.getFieldValue('pin');
    var code = 'sensors'+valuepin+'.requestTemperatures();  \n ';
    return code
};

Blockly.Arduino['init_temp_ds18b20_4']=function(block){
    var valuenomer = block.getFieldValue('nomer');
    var valuepin = block.getFieldValue('pin');
    var code = 'sensors'+valuepin+'.getTempCByIndex(T'+valuenomer+')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};




Blockly.Arduino['ESP_DeepSleep'] = function(block) {
 		
 var value = Blockly.Arduino.valueToCode(this, 'Value', Blockly.Arduino.ORDER_ATOMIC);
  
   if ( value== "0")
	   var code = 'ESP.deepSleep(0);\n';
	else
		var code = 'ESP.deepSleep('+value+'e6);\n';
 
  return code;
};

Blockly.Arduino["digital_mcp_write1"]=function(block){
    var dropdown_pin=block.getFieldValue("PIN");
    var dropdown_stat=block.getFieldValue("STAT");

Blockly.Arduino.includes_['include_MCP23X08'] = '#include <Wire.h> \n #include <Adafruit_MCP23X17.h> \n  ';
 Blockly.Arduino.definitions_['define_MCP23X08'] = 'Adafruit_MCP23X17 mcp;\n ';

Blockly.Arduino.setups_['mcp_begin'] = 'mcp.begin_I2C();\n';

    Blockly.Arduino.setups_["setup_mcp_output_" + dropdown_pin]="mcp.pinMode(" + dropdown_pin + ", OUTPUT);";
    return "mcp.digitalWrite(" + dropdown_pin + ", " + dropdown_stat + ");\n";
};

Blockly.Arduino["digital_mcp_read"]=function(block){
    var pull_up=block.getFieldValue('pullup') == 'TRUE';
    var dropdown_pin=block.getFieldValue("PIN");

Blockly.Arduino.includes_['include_MCP23X08'] = '#include <Wire.h> \n #include <Adafruit_MCP23X17.h> \n  ';
 Blockly.Arduino.definitions_['define_MCP23X08'] = 'Adafruit_MCP23X17 mcp;\n ';

Blockly.Arduino.setups_['mcp_begin'] = 'mcp.begin_I2C();\n';

    if (pull_up) {

        Blockly.Arduino.setups_["setup_mcp_input_" + dropdown_pin]="mcp.pinMode(" + dropdown_pin + ", INPUT_PULLUP);"
    } else {

        Blockly.Arduino.setups_["setup_mcp_input_" + dropdown_pin]="mcp.pinMode(" + dropdown_pin + ", INPUT);"
    };

    var code="mcp.digitalRead(" + dropdown_pin + ")";
    return [code, Blockly.Arduino.ORDER_ATOMIC]
};

Blockly.Arduino['wifi_init_sta'] = function(block) {
	
   var ssid = block.getFieldValue('SSID');  
   var wifipassword = block.getFieldValue('PASSWORD');  
   var logic = this.getFieldValue('LOGIC');
  
  Blockly.Arduino.includes_['include_wifi'] = '#include "ESP8266WiFi.h"\n';
  
  Blockly.Arduino.variables_['define_wifi_variables'] = 'const char wifi_ssid[]="'+ssid+'";\n'+
'const char wifi_pass[]="'+wifipassword+'";\n';

  
if(logic=='TRUE')
{
 var code= 'Serial.begin(115200);\n'+
'	delay(2000);\n'+
'	WiFi.begin(wifi_ssid,wifi_pass);\n'+
'	Serial.println("Conectando");\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	Serial.print(".");\n'+
'	delay(500);\n'+
'	}\n'+
'	Serial.println("ESP8266 MAC Address:  ");\n'+
'	Serial.println(WiFi.macAddress());\n'+
'   Serial.println();\n'+
'   Serial.print("Conectado a:\t");\n'+
'   Serial.println(WiFi.SSID()); \n'+
'   Serial.print("IP address:\t");\n'+
'   Serial.println(WiFi.localIP());\n';

}
else{
 var code= 'delay(2000);\n'+
'	WiFi.begin(wifi_ssid,wifi_pass);\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	delay(500);\n'+
'	}\n';
}

  return code;
};

Blockly.Arduino['wifi_sta_staticip'] = function(block) {
	
 var IP_sta = block.getFieldValue('IP'); 
 var Mask_sta = block.getFieldValue('Mask'); 
 var Gateway_sta = block.getFieldValue('Gateway');  
     
    
Blockly.Arduino.variables_['define_wifi_static_ip_sta'] = 'IPAddress staticIP_sta('+IP_sta+');\n'+
'IPAddress gateway_sta('+Gateway_sta+');\n'+
'IPAddress subnet_sta('+Mask_sta+');\n';
 
  var code='WiFi.config(staticIP_sta, gateway_sta, subnet_sta);\n';

  return code;
};

Blockly.Arduino['wifi_init_ap'] = function(block) {
	
   var ssid = block.getFieldValue('SSID');  
   var wifipassword = block.getFieldValue('PASSWORD');  
   var logic = this.getFieldValue('LOGIC');
  
  Blockly.Arduino.includes_['include_wifi'] = '#include "ESP8266WiFi.h"\n';
  
  Blockly.Arduino.variables_['define_wifi_variables'] = 'const char wifi_ssid[]="'+ssid+'";\n'+
'const char wifi_pass[]="'+wifipassword+'";\n';

  
if(logic=='TRUE')
{
 var code= 'Serial.begin(115200);\n'+
'delay(2000);\n'+
'WiFi.mode(WIFI_AP);\n'+
'Serial.println("Conectando como modo punto de acceso");\n'+
'while (!WiFi.softAP(wifi_ssid,wifi_pass)){\n'+
'	Serial.print(".");\n'+
'	delay(500);\n'+
'	}\n'+
'Serial.println("ESP8266 MAC Address:  ");\n'+
'Serial.println(WiFi.macAddress());\n'+
'Serial.println();\n'+
'Serial.print("Iniciado Access point:\t");\n'+
'Serial.println(wifi_ssid); \n'+
'Serial.print("with this IP address:\t");\n'+
'Serial.println(WiFi.softAPIP());\n';

}
else{
 var code= 'delay(2000);\n'+
'   WiFi.mode(WIFI_AP);\n'+
'	while (!WiFi.softAP(wifi_ssid,wifi_pass)){\n'+
'	delay(500);\n'+
'	}\n';
}

  return code;
};


Blockly.Arduino['wifi_ap_staticip'] = function(block) {
	
 var IP_ap = block.getFieldValue('IP'); 
 var Mask_ap = block.getFieldValue('Mask'); 
 var Gateway_ap = block.getFieldValue('Gateway');  
     
    
Blockly.Arduino.variables_['define_wifi_static_ip_ap'] = 'IPAddress staticIP_ap('+IP_ap+');\n'+
'IPAddress gateway_ap('+Gateway_ap+');\n'+
'IPAddress subnet_ap('+Mask_ap+');\n';
 
  var code='WiFi.softAPConfig(staticIP_ap, gateway_ap, subnet_ap);\n';

  return code;
};



Blockly.Arduino['wifi_init_sta_ap'] = function(block) {
	
   var ssid = block.getFieldValue('SSID');  
   var wifipassword = block.getFieldValue('PASSWORD');  
   var ssid2 = block.getFieldValue('SSID2');  
   var wifipassword2 = block.getFieldValue('PASSWORD2');  
     
   var logic = this.getFieldValue('LOGIC');
  
  Blockly.Arduino.includes_['include_wifi'] = '#include "ESP8266WiFi.h"\n';
  
  Blockly.Arduino.variables_['define_wifi_variables'] = 'const char wifi_ssid[]="'+ssid+'";\n'+
'const char wifi_ssid2[]="'+ssid2+'";\n'+
'const char wifi_pass[]="'+wifipassword+'";\n'+
'const char wifi_pass2[]="'+wifipassword2+'";\n';
 
if(logic=='TRUE')
{
 var code= 'Serial.begin(115200);\n'+
'	delay(2000);\n'+
'   WiFi.mode(WIFI_AP_STA);\n'+
'	WiFi.softAP(wifi_ssid2,wifi_pass2);\n'+
'	WiFi.begin(wifi_ssid,wifi_pass);\n'+
'	Serial.println("Conectando");\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	Serial.print(".");\n'+
'	delay(500);\n'+
'	}\n'+
'	WiFi.setAutoReconnect(true);\n'+
'   Serial.println();\n'+
'	Serial.println("ESP8266 MAC Address:  ");\n'+
'	Serial.println(WiFi.macAddress());\n'+
'   Serial.print("Conectado a:\t");\n'+
'   Serial.println(WiFi.SSID()); \n'+
'   Serial.print("IP address:\t");\n'+
'   Serial.println(WiFi.localIP());\n'+
'   Serial.print("Iniciado Access point:\t");\n'+
'   Serial.println(wifi_ssid2); \n'+
' 	Serial.print("AP dirección IP: ");\n'+
'	Serial.println(WiFi.softAPIP());\n';
}
else{
var code= 'delay(2000);\n'+
'   WiFi.mode(WIFI_AP_STA);\n'+
'	WiFi.softAP(wifi_ssid2,wifi_pass2);\n'+
'	WiFi.begin(wifi_ssid,wifi_pass);\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	delay(500);\n'+
'	}\n'+
'	WiFi.setAutoReconnect(true);\n';
}


  return code;
};


Blockly.Arduino['wifiserver_port'] = function(block) {
  var server_port = Blockly.Arduino.valueToCode(block, 'server_port', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.variables_['define_wifiserver_port'] = 'WiFiServer server('+server_port+');\n';
  
  var code = 'server.begin();\n';
  
  return code;
};


Blockly.Arduino['wifiserver_waitconnection'] = function(block) {
	 
 var code ='WiFiClient client = server.available();\n'+
    'if (!client) { return; }\n'+
    'while(!client.available()){  delay(1); }\n';
    	
  return code;
};



Blockly.Arduino['wifiserver_ip'] = function(block) {
 
  
  var code = 'client.remoteIP()';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['wifiserver_request'] = function(block) {
 
  
  var code = 'client.readStringUntil(\'\\r\')';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['wifiserver_answer'] = function(block) {
  var server_answer = Blockly.Arduino.valueToCode(block, 'server_answer', Blockly.Arduino.ORDER_ATOMIC);
  
   var code ='client.println("HTTP/1.1 200 OK");\n'+
    'client.println("Content-Type: text/html");\n'+
	'client.println("");\n'+
	'client.println("<!DOCTYPE HTML>");\n'+
	'client.println("<html>");\n'+
	'client.println('+server_answer+');\n'+
	'client.println("</html>");\n'+
	'delay(1);\n';
	 
  
  return code;
};
Blockly.Arduino['wifiserver_stop'] = function(block) {
	 
 var code ='client.stop();\n';
        	
  return code;
};

Blockly.Arduino['wifiserver_flush'] = function(block) {
	 
 var code ='client.flush();\n';
        	
  return code;
};

Blockly.Arduino['wifiserver_port_library'] = function(block) {
  var server_port = Blockly.Arduino.valueToCode(block, 'server_port', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['define_esp8266webserver'] = '#include<ESP8266WebServer.h>\n';
  
  Blockly.Arduino.variables_['define_wifiserver_port'] = 'ESP8266WebServer server('+server_port+');\n';
  
  var code = 'server.begin();\n';
  
  return code;
};


Blockly.Arduino['esp8266_handle_request'] = function(block) {
	 
  var code='server.handleClient();\n';
        	
  return code;
};

Blockly.Arduino['esp8266_send']=function(block){
	
	var pagina=block.getFieldValue('text');
    var direccion=block.getFieldValue('address');
    var ordenes=Blockly.Arduino.statementToCode(block, "ORDERS");

	  Blockly.Arduino.definitions_["esp8266_server"+pagina]='void serve'+pagina+'() {\n'
	  +"server.send(200,\"text/html\",p"+pagina+"());\n"+ordenes+"\n}\n";

	  Blockly.Arduino.setups_["esp8266_query"+pagina]='server.on(\"/'+direccion+'\",serve'+pagina+');';

 
    var code='';
    return code;
};

Blockly.Arduino['esp8266_getArg']=function(block){
	var arg=block.getFieldValue("arg");
    var code="String "+arg+"=server.arg(\""+arg+"\");\n"
	
	return code;
};


Blockly.Arduino['esp8266_useArg']=function(block){
    var arg=block.getFieldValue("arg");
    var code=arg;
	
	return [code,Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mqtt_init'] = function(block) {
	
   var ssid = block.getFieldValue('SSID');  
   var wifipassword = block.getFieldValue('PASSWORD');  
   var server = block.getFieldValue('SERVER');  
   var port = block.getFieldValue('PORT');  
   var usermqtt = block.getFieldValue('USER');  
   var APIKey = block.getFieldValue('APIKEY');  
   var Idclient = block.getFieldValue('IDCLIENT'); 
   var logic = this.getFieldValue('LOGIC');
  
  Blockly.Arduino.includes_['include_mqtt'] = '#include "ESP8266WiFi.h"\n'+
  '#include "PubSubClient.h"\n';
  
  Blockly.Arduino.variables_['define_mqtt_variables'] = 'const char mqtt_wifi_ssid[]="'+ssid+'";\n'+
'const char mqtt_wifi_pass[]="'+wifipassword+'";\n'+
'const char mqtt_broker[]="'+server+'";\n'+
'const int mqtt_port='+port+';\n'+
'const char mqtt_user[]="'+usermqtt+'";\n'+
'const char mqtt_pass[]="'+APIKey+'";\n'+
'const char mqtt_clientid[]="'+Idclient+'";\n'+
'\n'+
'WiFiClient mqtt_wifiClient;\n'+
'PubSubClient mqtt_client(mqtt_wifiClient);\n'+
'\n'+
'char mqtt_payload[64];\n';

Blockly.Arduino.definitions_['define_mqtt_loop'] = 'void mqtt_loop(){\n'+
'	if (!mqtt_client.connected()) {\n'+
'		mqtt_client.connect(mqtt_clientid,mqtt_user,mqtt_pass);\n'+
'		mqtt_subscribe();\n'+
'	}\n'+
'	if (mqtt_client.connected()) {\n'+
' 	mqtt_client.loop();\n'+
'	}\n'+
'}\n';

Blockly.Arduino.definitions_['define_mqtt_subscribe'] = 'void mqtt_subscribe(){\n'+
'}\n';

  
Blockly.Arduino.definitions_['define_mqtt_otherfunctions'] = 'double mqtt_payload2double(unsigned char *_payload, int _length)\n'+
'{\n'+
'  int i;\n'+
'  for (i = 0; i<_length && i<64; i++){\n'+
'    mqtt_payload[i] = _payload[i];\n'+
'  }\n'+
'  mqtt_payload[i] = 0;\n'+
'  return atof(mqtt_payload);\n'+
'}\n'+
'\n'+
'String mqtt_payload2string(unsigned char *_payload, int _length)\n'+
'{\n'+
'  int i;\n'+
'  for (i = 0; i<_length && i<64; i++){\n'+
'    mqtt_payload[i] = _payload[i];\n'+
'  }\n'+
'  mqtt_payload[i] = 0;\n'+
'  return String(mqtt_payload);\n'+
'}\n';

Blockly.Arduino.definitions_['define_mqtt_callback'] = 'void mqtt_callback(char* _topic, unsigned char* _payload, unsigned int _payloadlength){\n'+
'	double varNum=mqtt_payload2double(_payload,_payloadlength);\n'+
'	String varText=mqtt_payload2string(_payload,_payloadlength);\n'+
'}\n';
  
if(logic=='TRUE')
{
Blockly.Arduino.setups_['setup_mqtt_setup'] = 'Serial.begin(115200);\n'+
'	delay(2000);\n'+
'	WiFi.begin(mqtt_wifi_ssid,mqtt_wifi_pass);\n'+
'	Serial.println("Conectando");\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	Serial.print(".");\n'+
'	delay(500);\n'+
'	}\n'+
'   Serial.println();\n'+
'   Serial.print("Conectado a:\t");\n'+
'   Serial.println(WiFi.SSID()); \n'+
'   Serial.print("IP address:\t");\n'+
'   Serial.println(WiFi.localIP());\n'+
'	randomSeed(micros());\n'+
'	mqtt_client.setServer(mqtt_broker, mqtt_port);\n'+
'	mqtt_client.setCallback(mqtt_callback);\n'+
'	mqtt_subscribe();\n';
}
else{
Blockly.Arduino.setups_['setup_mqtt_setup'] = '	delay(2000);\n'+
'	WiFi.begin(mqtt_wifi_ssid,mqtt_wifi_pass);\n'+
'	while (WiFi.status() != WL_CONNECTED){\n'+
'	delay(500);\n'+
'	}\n'+
'	randomSeed(micros());\n'+
'	mqtt_client.setServer(mqtt_broker, mqtt_port);\n'+
'	mqtt_client.setCallback(mqtt_callback);\n'+
'	mqtt_subscribe();\n';	
}


  var code='';
  return code;
};

Blockly.Arduino['mqtt_loop'] = function(block) {

  var code = 'mqtt_loop();\n';
  return code;
};

Blockly.Arduino['mqtt_subscribe_num'] = function(block) {

 var topic = block.getFieldValue('TOPIC');  
 var varName = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
 
 
//Insert in mqtt_subscribe 
 if (typeof(Blockly.Arduino.definitions_['define_mqtt_subscribe']) == "undefined")
	{
		Blockly.Arduino.definitions_['define_mqtt_subscribe'] = 'void mqtt_subscribe(){\n'+
		' mqtt_client.subscribe(String(String("'+topic+'")).c_str());\n'+
		'}\n';
	}
else 
	{
		Blockly.Arduino.definitions_['define_mqtt_subscribe']=Blockly.Arduino.definitions_['define_mqtt_subscribe'].split("}",1);
		Blockly.Arduino.definitions_['define_mqtt_subscribe']=Blockly.Arduino.definitions_['define_mqtt_subscribe'] + 
		'mqtt_client.subscribe(String(String("'+topic+'")).c_str());\n'+
		'}\n'; 
	}
 
 //Insert in mqtt_callback
 
 
 if (typeof(Blockly.Arduino.definitions_['define_mqtt_callback']) == "undefined")
	{
		Blockly.Arduino.definitions_['define_mqtt_callback'] = 'void mqtt_callback(char* _topic, unsigned char* _payload, unsigned int _payloadlength){\n'+
'	double varNum=mqtt_payload2double(_payload,_payloadlength);\n'+
'	String varText=mqtt_payload2string(_payload,_payloadlength);\n'+
'   if(String(_topic)==String(String("'+topic+'")))'+varName+'=varNum;\n'+
'}\n';
	}
else 
	{
		Blockly.Arduino.definitions_['define_mqtt_callback']=Blockly.Arduino.definitions_['define_mqtt_callback'].split("}",1);
		Blockly.Arduino.definitions_['define_mqtt_callback']=Blockly.Arduino.definitions_['define_mqtt_callback'] + 
		'   if(String(_topic)==String(String("'+topic+'")))'+varName+'=varNum;\n'+
		'}\n';
	}
  
    
  var code = '';
  return code;
};


Blockly.Arduino['mqtt_subscribe_text'] = function(block) {

 var topic = block.getFieldValue('TOPIC');  
 var varName = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
 
 
//Insert in mqtt_subscribe 
 if (typeof(Blockly.Arduino.definitions_['define_mqtt_subscribe']) == "undefined")
	{
		Blockly.Arduino.definitions_['define_mqtt_subscribe'] = 'void mqtt_subscribe(){\n'+
		' mqtt_client.subscribe(String(String("'+topic+'")).c_str());\n'+
		'}\n';
	}

else 
	{
		Blockly.Arduino.definitions_['define_mqtt_subscribe']=Blockly.Arduino.definitions_['define_mqtt_subscribe'].split("}",1);
		Blockly.Arduino.definitions_['define_mqtt_subscribe']=Blockly.Arduino.definitions_['define_mqtt_subscribe'] + '\n mqtt_client.subscribe(String(String("'+topic+'")).c_str());\n'+
		'}\n';
	}
 
 //Insert in mqtt_callback
 if (typeof(Blockly.Arduino.definitions_['define_mqtt_callback']) == "undefined")
	{
		Blockly.Arduino.definitions_['define_mqtt_callback'] = 'void mqtt_callback(char* _topic, unsigned char* _payload, unsigned int _payloadlength){\n'+
'	double varNum=mqtt_payload2double(_payload,_payloadlength);\n'+
'	String varText=mqtt_payload2string(_payload,_payloadlength);\n'+
'   if(String(_topic)==String(String("'+topic+'")))'+varName+'=varText;\n'+
'}\n';
	}

else 
	{
		Blockly.Arduino.definitions_['define_mqtt_callback']=Blockly.Arduino.definitions_['define_mqtt_callback'].split("}",1);
		Blockly.Arduino.definitions_['define_mqtt_callback']=Blockly.Arduino.definitions_['define_mqtt_callback'] + 
		'   if(String(_topic)==String(String("'+topic+'")))'+varName+'=varText;\n'+
		'}\n';
	}
  
    
  var code = '';
  return code;
};

Blockly.Arduino['mqtt_publish'] = function(block) {

 var topic = block.getFieldValue('TOPIC');  
 var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 
    
  var code = 'mqtt_client.publish(String(String("'+topic+'")).c_str(),String(String('+variable+')).c_str());\n';
  return code;
};

Blockly.Arduino['ifttt_init'] = function(block) {
	
	var api_key = block.getFieldValue('API_KEY');  

	Blockly.Arduino.definitions_['define_IFTTT'] = '#define IFTTTKEY "'+api_key+'"\n';

	//Blockly.Arduino.variables_['ifttt_client'] = 'WiFiClientSecure clientIFTTT;\n';

	var code='';
	return code;
};



Blockly.Arduino['ifttt_send'] = function(block) {
  var value1 = Blockly.Arduino.valueToCode(block, 'value1', Blockly.Arduino.ORDER_ATOMIC);
  var value2 = Blockly.Arduino.valueToCode(block, 'value2', Blockly.Arduino.ORDER_ATOMIC);
  var value3 = Blockly.Arduino.valueToCode(block, 'value3', Blockly.Arduino.ORDER_ATOMIC);
  var evento = Blockly.Arduino.valueToCode(block, 'evento', Blockly.Arduino.ORDER_ATOMIC); 
  
  
Blockly.Arduino.includes_['include_httpclient'] = '#include "ESP8266HTTPClient.h"\n';  
  
    
Blockly.Arduino.codeFunctions_['send_ifttt_function'] = 'void enviar_ifttt(String evento,String valor1, String valor2, String valor3)\n'+
'{\n'+
' // Cerramos cualquier conexión anterior\n'+
' HTTPClient http;\n'+
' WiFiClient client;\n'+
'\n'+
'String servername=\"http://maker.ifttt.com/trigger/\"+evento+\"/with/key/\"+IFTTTKEY;\n'+
'http.begin(client,servername);\n'+
'\n'+
' http.addHeader(\"Content-Type\",\"application/x-www-form-urlencoded\");\n'+
'\n'+
' // Hacemos la petición final\n'+
'String httpRequestData = \"value1=\"+String(valor1)+"&value2=\"+String(valor2)+\"&value3=\"+String(valor3);\n'+
     
' // Send HTTP POST request\n'+
' http.POST(httpRequestData);\n'+
' http.end();\n'+
'}\n';


  var code= 'enviar_ifttt('+evento+','+value1+','+value2+','+value3+');\n';
  return code;
};



Blockly.Arduino['Init_NTP'] = function(block) {
	
	var gmt_local = this.getFieldValue('GMT');

	Blockly.Arduino.includes_['include_NTPClient'] = '#include <NTPClient.h>\n'+
  '#include <WiFiUdp.h>\n';

  Blockly.Arduino.definitions_['definition_NTPClient'] = 'WiFiUDP ntpUDP;\n'+
  'NTPClient timeClient(ntpUDP, "pool.ntp.org",(int)('+gmt_local+'*3600), 60000);\n'+
  'unsigned long epochTime;\n'+
  'struct tm *ptm;\n'+
  'String weekDays[7]={"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};\n'+
  'String months[12]={"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};\n';
  
    
  Blockly.Arduino.setups_['setup_NTPClient'] = 'timeClient.begin();\n';

	var code='';
	return code;
};


Blockly.Arduino['order_read_NTP_server'] = function(block) {
  // TODO: Assemble Python into code variable.
  
  var code = 'timeClient.update();\n'+
  'epochTime = timeClient.getEpochTime();\n'+
  'ptm = gmtime ((time_t *)&(epochTime));\n'
   
  return code;
};



Blockly.Arduino['values_NTP_server'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==6)
	  var code = 'timeClient.getSeconds()';
  else if (Output_Value==5)
		var code = 'timeClient.getMinutes()';
   else if (Output_Value==4)
			var code = 'timeClient.getHours()';
    else if (Output_Value==3)
				var code = 'ptm->tm_mday';
	 else if (Output_Value==2)
				var code = 'ptm->tm_mon+1';
			else if (Output_Value==1)
					var code = 'ptm->tm_year+1900';
				else
					var code = 'timeClient.getEpochTime()';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino['values_text_NTP_server'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==1)
	  var code = 'months[ptm->tm_mon]';
   else if (Output_Value==0)
	   var code = 'weekDays[timeClient.getDay()]';
     else 
	    var code = 'timeClient.getFormattedTime()';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['Init_OpenWeather'] = function(block) {
	
	var api_key = this.getFieldValue('API_KEY');

	Blockly.Arduino.includes_['include_OpenWeather'] = '#include <ESP8266HTTPClient.h>\n'+
  '#include <WiFiClient.h>\n'+
  '#include <ArduinoJson.h>\n';

  Blockly.Arduino.definitions_['definition_OpenWeather'] = 'String openWeatherMapApiKey = "'+api_key+'";\n'+
'String city;\n'+
'String country_code;\n'+
'String location;\n'+
'String country;\n'+
'String icono;\n'+
'String weather;\n'+
'String description;\n'+
'float temperature;\n'+
'float humidity;\n'+
'float pressure;\n'+
'int sunrise;\n'+
'int sunset;\n'+
'float temp_min;\n'+
'float temp_max;\n'+
'float feels_like;\n'+
'float Cloud;\n'+
'float visibility;\n'+
'float wind_speed;\n'+
'float wind_angle;\n'+
'int id;\n'+
'\n'+
'String jsonBuffer;\n';
 
 Blockly.Arduino.codeFunctions_['functions_OpenWeather'] = 'String httpGETRequest(const char* serverName) {\n'+
  'HTTPClient http;\n'+
  'http.begin(serverName);\n'+
  'int httpResponseCode = http.GET();\n'+
  'String payload = "{}";\n'+ 
  'if (httpResponseCode>0) {\n'+
  '  payload = http.getString();\n'+
  '}\n'+
 'http.end();\n'+
 '\n'+
  'return payload;\n'+
 '}\n'+
 '\n'+
'void GetValuesWeather (String jsonBuffer)\n'+
'{\n'+
'   jsonBuffer.replace(\'[\', \' \');\n'+
'   jsonBuffer.replace(\']\', \' \');\n'+ 
'   char jsonArray [jsonBuffer.length()+1];\n'+
'   jsonBuffer.toCharArray(jsonArray,sizeof(jsonArray));\n'+
'   jsonArray[jsonBuffer.length() + 1] = \'\\0\';\n'+ 
'\n'+
'   DynamicJsonDocument root(1024);\n'+
'   DeserializationError error = deserializeJson(root, jsonArray);\n'+
'   if (error)\n'+
'      return;\n'+
'    location = (const char *)root["name"];\n'+
'    country = (const char *)root["sys"]["country"];\n'+
'    temperature = root["main"]["temp"];\n'+
'    humidity = root["main"]["humidity"];\n'+
'    weather = (const char *)root["weather"]["main"];\n'+
'    description = (const char *)root["weather"]["description"];\n'+
'    pressure = root["main"]["pressure"];\n'+
'    sunrise = root["sys"]["sunrise"];\n'+
'    sunset = root["sys"]["sunset"];\n'+
'    feels_like = root["main"]["feels_like"];\n'+
'    temp_min = root["main"]["temp_min"];\n'+
'    temp_max = root["main"]["temp_max"];\n'+
'    Cloud = root["clouds"]["all"];\n'+
'    visibility = root["visibility"];\n'+
'    wind_angle = root["wind"]["deg"];\n'+
'    wind_speed = root["wind"]["speed"];\n'+
'    icono = (const char *)root["weather"]["icon"];\n'+
'    id= root["weather"]["id"];\n'+
'}\n';

  
	var code='';
	return code;
};


Blockly.Arduino['order_read_OpenWeather_server'] = function(block) {
	
  var city = Blockly.Arduino.valueToCode(block, 'city', Blockly.Arduino.ORDER_ATOMIC);
  var countrycode = Blockly.Arduino.valueToCode(block, 'countrycode', Blockly.Arduino.ORDER_ATOMIC);
   
  var code = 'if(WiFi.status()== WL_CONNECTED){\n'+
    'city='+city+';\n'+
	'country_code='+countrycode+';\n'+
    'String serverPath = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+country_code+"&lang='+window.localStorage.lang+'&APPID="+openWeatherMapApiKey;\n'+
    'jsonBuffer = httpGETRequest(serverPath.c_str());\n'+
    'GetValuesWeather (jsonBuffer);\n'+
    '}\n';
   
  return code;
};


Blockly.Arduino['values_OpenWeather_server'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==0)
	var code = '(temperature-273.15)';
	else if (Output_Value==1)
		var code = 'humidity';
		else if (Output_Value==2)
			var code = 'pressure';
			else if (Output_Value==3)
				var code = '(temp_max-273.15)';
				else if (Output_Value==4)
					var code = '(temp_min-273.15)';
					else if (Output_Value==5)
						var code = '(feels_like-273.15)';
						else if (Output_Value==6)
							var code = 'Cloud/100.00';
							else if (Output_Value==7)
								var code = 'wind_speed';
								else if (Output_Value==8)
									var code = 'wind_angle';
									else if (Output_Value==9)
										var code = 'id';
										else if (Output_Value==10)
											var code = 'visibility/100.00';
											else if (Output_Value==11)
												var code = 'sunrise';
												else
													var code = 'sunset';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['values_text_OpenWeather_server'] = function(block) {
  var Output_Value = this.getFieldValue('OUTPUT_VALUE'); 	
  
  if (Output_Value==0)
	  var code = 'description';
   else if (Output_Value==1)
	   var code = 'weather';
		else if (Output_Value==2)
			var code = 'icono';
			else if (Output_Value==3)
				var code = 'country';
					else 
						var code = 'location';
    
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['thingspeak_init'] = function(block) {
	 
   var Channel = block.getFieldValue('CHANNEL');  
   var APIWriteKey = block.getFieldValue('API_WRITE_KEY');  
   var APIReadKey = block.getFieldValue('API_READ_KEY');  

   Blockly.Arduino.includes_['include_thingspeak'] = '#include "ThingSpeak.h"\n';
  
  
  Blockly.Arduino.variables_['define_thingspeak_variables'] = 'WiFiClient client;\n'+
'unsigned long myChannelNumber ='+Channel+';\n'+
'const char * myWriteAPIKey ="'+APIWriteKey+'";\n'+
'const char * myReadAPIKey="'+APIReadKey+'";\n';


Blockly.Arduino.setups_['setup_thingspeak'] = 'ThingSpeak.begin(client);\n';

  var code='';
  return code;
};

Blockly.Arduino['thingspeak_write'] = function(block) {

 var variable = Blockly.Arduino.valueToCode(block, 'variable', Blockly.Arduino.ORDER_ATOMIC);
 var field = this.getFieldValue('FIELD');
    
  var code = 'ThingSpeak.writeField(myChannelNumber,'+field+','+variable+', myWriteAPIKey);\n';
  return code;
};

Blockly.Arduino['thingspeak_write_long'] = function(block) {
  var field = this.getFieldValue('FIELD');	
  
  var code = 'ThingSpeak.readLongField(myChannelNumber,'+field+',myReadAPIKey)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['thingspeak_write_float'] = function(block) {
  var field = this.getFieldValue('FIELD');	
  
  var code = 'ThingSpeak.readFloatField(myChannelNumber,'+field+',myReadAPIKey)';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['telegram_init'] = function(block) {
	 
 var BotToken = block.getFieldValue('BOT_TOKEN');  
 var ChatID = block.getFieldValue('CHAT_ID'); 
 
  Blockly.Arduino.includes_['include_telegram'] = '#include <WiFiClientSecure.h>\n'+
  '#include <UniversalTelegramBot.h>\n';
  
  Blockly.Arduino.variables_['define_telegram'] = '#define BOT_TOKEN "'+BotToken+'"\n'+
 '#define CHAT_ID "'+ChatID+'"\n';
  
  Blockly.Arduino.variables_['define_telegram_variables'] = 'X509List cert(TELEGRAM_CERTIFICATE_ROOT);\n'+
	'WiFiClientSecure secured_client;\n'+
	'UniversalTelegramBot bot(BOT_TOKEN, secured_client);\n'+
	'int numNewMessages=0;\n';

  Blockly.Arduino.setups_['setup_telegram'] = 'secured_client.setTrustAnchors(&cert);\n';

  var code='';
  return code;
};


Blockly.Arduino['telegram_loop_message'] = function(block) {
    
  var code ='numNewMessages = bot.getUpdates(bot.last_message_received + 1);\n'+
    'while (numNewMessages)\n'+
    '{\n'+
    '  handleNewMessages(numNewMessages);\n'+
    '  numNewMessages = bot.getUpdates(bot.last_message_received + 1);\n'+
    '}\n';
	
  return code;
};



Blockly.Arduino["telegram_reception_function"]=function(block){
	

	var branch=Blockly.Arduino.statementToCode(block, 'DO' );
	Blockly.Arduino.codeFunctions_['telegram_reception_function'] ='void handleNewMessages(int numNewMessages){\n'+
	 'for (int i = 0; i < numNewMessages; i++)\n'+
		'{\n'+
		'	String text = bot.messages[i].text;\n'+	branch + '}\n'+
	'}\n';
	
	return "";
};


Blockly.Arduino['telegram_sendmessage'] = function(block) {
  var texttosend = Blockly.Arduino.valueToCode(block, 'texttosend', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = 'bot.sendMessage(CHAT_ID, '+ texttosend+', "");\n';
  
  return code;
};


Blockly.Arduino['telegram_message_name_received'] = function(block) {
   
  var code = 'bot.messages[i].from_name';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['telegram_message_received'] = function(block) {
  
  var code = 'text';
  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino['emptytext'] = function(block) {
    var text_content = block.getFieldValue('content');
    return looseEscape(text_content)
};
  Blockly.Arduino['esp_dig_pin'] = function(block) {
    var estado =Blockly.Arduino.valueToCode(block, "estado");
    var code=')=====\"+'+estado+'+R\"=====(\n';
    return code;
};

Blockly.Arduino['textmod'] = function(block){
    var content = Blockly.Arduino.statementToCode(block,'content');
    var type = block.getFieldValue("type");
    return '<' + type + '>' + content + '</' + type + '>'
};

Blockly.Arduino['paragraph'] = function(block) {
    var statements_content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier');
    return '<p' + block_modifier + '>' + statements_content + '</p>\n'
};

Blockly.Arduino['header'] = function(block) {
    var statements_content = Blockly.Arduino.statementToCode(block, 'content');
    var header_size = block.getFieldValue("size");
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<h' + header_size + block_modifier + '>' + statements_content + '</h' + header_size + '>\n'
};

Blockly.Arduino['link'] = function(block){
    var text = Blockly.Arduino.statementToCode(block, 'content');
    var link = block.getFieldValue('target');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<a href=\"' + link + '\" target=\"_blank\"' + block_modifier + '>' + text + '</a>'
};

Blockly.Arduino['table'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<table' + block_modifier + '>' + content + '</table>");\n'
};

Blockly.Arduino['tablerow'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<tr' + block_modifier + '>' + content + '</tr>'
};

Blockly.Arduino['tableheading'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<th' + block_modifier + '>' + content + '</th>'
};

Blockly.Arduino['tabledata'] = function(block){
    var content = Blockly.Arduino.statementToCode(block, 'content');
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<td' + block_modifier + '>' + content + '</td>'
};

Blockly.Arduino['image'] = function(block){
    var source = block.getFieldValue('source');
    var code = '<img src=\"' + URLInput(source) + '\">\n';
    return code
};
Blockly.Arduino['args'] = function(block) {
    var code = Blockly.Arduino.statementToCode(block, 'content');
    return 'style=\"' + code + '\"'
};
Blockly.Arduino['color'] = function(block){
    var color = block.getFieldValue('value');
    return 'color : ' + color + ' ; '
};
Blockly.Arduino['bgcolor'] = function(block){
    var color = block.getFieldValue('value');
    return 'background-color : ' + color + ' ; '
};
Blockly.Arduino['textalign'] = function(block){
    var value = block.getFieldValue('value');
    return 'text-align : ' + value + ' ; '
};
Blockly.Arduino['border'] = function(block){
    var width = fullEscape(block.getFieldValue('width'));
    var type =  block.getFieldValue('type');
    var color = block.getFieldValue('color');
    return 'border : ' + width + 'px ' + type + ' ' + color + ' ; '
};
Blockly.Arduino['input'] = function(block){
    var type = block.getFieldValue('type');
    var name=looseEscape(block.getFieldValue('name'))
    var value = looseEscape(block.getFieldValue('value'));
    return '<input type=\"' + type + '\" name=\"'+name+'\" value=\"' + value + '\" name=\"' + value + '\">';
};

Blockly.Arduino['form'] = function(block){
	var action = block.getFieldValue('action');
	var method = block.getFieldValue('method');
    var content = Blockly.Arduino.statementToCode(block, 'content');
/*     Blockly.Arduino.setups_["esp8266_query"]='server.on(\"/'+action+'\",HTTP_'+method+','+method+action+');\n';
    Blockly.Arduino.includes_["esp8266query"]='void '+method+action+'(){\n//Here goes the code\n}\n'; */
    var block_modifier = Blockly.Arduino.statementToCode(block, 'modifier', Blockly.Arduino.ORDER_ATOMIC);
    return '<form action=\"' + action + '\" method=\"' + method + '\" ' + block_modifier + '>\n' + content + '\n</form>\n'
};

Blockly.Arduino['label'] = function(block){
    var content = looseEscape(block.getFieldValue('value'));
    var for_value = block.getFieldValue('for');
    return '<label for=' + for_value + '>' + content + '</label>\n'
};

Blockly.Arduino['br'] = function(block){
    return '<br>'
};

Blockly.Arduino['esp8266_html']=function(block){
	var htmlhead=block.getFieldValue("HEAD");
	var htmlbody=Blockly.Arduino.statementToCode(block, "BODY");
    Blockly.Arduino.definitions_["esp8266_pag"+htmlhead] ='String p'+htmlhead+'(){\nString cadena=(String) R\"=====(\n'
    +'<!DOCTYPE HTML>\n'
    +' <html>\n<head><title>'+htmlhead+'</title></head>\n<body>\n'
    +htmlbody
    +'\n</body>\n</html>\n'
    +')=====\";\n return cadena;\n}\n ';
   
	return ''
};

  ////////////////
 /*  function  */
////////////////
function fullEscape(input){
    return escape(input)
        .replace(/%25/g, "%");
}
function looseEscape(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .replace(/á/g, "&aacute;")
        .replace(/é/g, "&eacute;")
        .replace(/í/g, "&iacute;")
        .replace(/ó/g, "&oacute;")
        .replace(/ú/g, "&uacute;")
        .replace(/Á/g, "&Aacute;")
        .replace(/É/g, "&Eacute;")
        .replace(/Í/g, "&Iacute;")
        .replace(/Ó/g, "&Oacute;")
        .replace(/Ú/g, "&Uacute;")
        .replace(/Ñ/g, "&Ntilde;")
        .replace(/ñ/g, "&ntilde;")
        .replace(/Ú/g, "&Uacute;")
        .replace(/º/g,"&deg;");
}
function CSSEscape(input) {
    return input
        .replace(/;/g, "")
        .replace(/{/g, "")
        .replace(/}/g, "")
        .replace(/</g, "")
        .replace(/:/g, "")
}
function URLInput(input){
    var URLRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(URLRegex.test(input)){
        return input;
    }
}

Blockly.Arduino['emptyVar'] = function(block) {
    var value = block.getFieldValue('VAR');
    //console.log("Variable: "+value);
    
    var code=')=====\"+'+value+'+R\"=====(\n';
    return code
};

Blockly.Arduino['rfid_init22'] = function(block) {

   var pin_RST = Blockly.Arduino.valueToCode(block, 'PIN_RST', Blockly.Arduino.ORDER_ATOMIC);   
   var pin_SDA = Blockly.Arduino.valueToCode(block, 'PIN_SDA', Blockly.Arduino.ORDER_ATOMIC);   
   var PIN_KOD = Blockly.Arduino.valueToCode(block, 'PIN_KOD', Blockly.Arduino.ORDER_ATOMIC);
	
   Blockly.Arduino.definitions_['define_spi'] = '#include <SPI.h>';
   Blockly.Arduino.definitions_['define_MRFC522'] = '#include <MFRC522.h>';
    
   Blockly.Arduino.definitions_['define_mrfc522'] = 'MFRC522 mfrc522('+pin_SDA+','+pin_RST+'); \n byte cardx[4]= {0x3F,0x01,0x23,0x44}; \n String cardreaded(byte *buffer,byte bufferSize) \n { \n String card=""; \n for (byte i=0; i<bufferSize; i++) \n { \n card+=String(buffer[i]<0x10 ? " 0" : " "); \n card+=String(buffer[i],HEX); \n } \n return card; \n  } \n ';
 
   Blockly.Arduino.setups_['setup_spi']='SPI.begin();\n ';
   Blockly.Arduino.setups_['setup_mrfc522']='mfrc522.PCD_Init();\n';

  var code = ' if (mfrc522.PICC_ReadCardSerial() == 1 | mfrc522.PICC_IsNewCardPresent() == 1) { \n  '+PIN_KOD+' = cardreaded(mfrc522.uid.uidByte, mfrc522.uid.size); \n  } \n   ';
 // Serial.println(mfrc522.PICC_ReadCardSerial()); \n   Serial.println(mfrc522.PICC_IsNewCardPresent()); \n 
  return code;
};


Blockly.Arduino['st7735_backgroundcolor'] = function(block) {

  var Color = block.getFieldValue('COLOR');
	   
  var code = 'tft1.fillScreen('+Color+');\n';
  return code;
};

Blockly.Arduino['st7735_icon'] = function(block) {

   var IconName = block.getFieldValue('NAME');  
   var Var_Codes = block.getFieldValue('CODES');

   Blockly.Arduino.includes_['define_pgmspace'] = '#include <avr/pgmspace.h>\n';   
   Blockly.Arduino.definitions_['define_iconvalus_'+IconName+''] = 'const unsigned char '+IconName+'[] PROGMEM= {'+Var_Codes+'};\n';
 
  var code = '';
  return code;
};

Blockly.Arduino['st7735_drawicon'] = function(block) {

  var x0 = Blockly.Arduino.valueToCode(this, 'x0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var y0 = Blockly.Arduino.valueToCode(this, 'y0', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var width = Blockly.Arduino.valueToCode(this, 'width', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var height = Blockly.Arduino.valueToCode(this, 'height', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var IconName = block.getFieldValue('NAME');
  var Color = block.getFieldValue('COLOR');


  
  var code = 'tft1.drawBitmap('+x0+','+y0+','+IconName+','+width+','+height+','+Color+');\n';
 
  return code;
};

Blockly.Arduino['otto_configuration'] = function(block) {

  var PIN_YL= block.getFieldValue('PIN_YL');
  var PIN_YR= block.getFieldValue('PIN_YR');
  var PIN_RL= block.getFieldValue('PIN_RL');
  var PIN_RR= block.getFieldValue('PIN_RR');
  var PIN_Buzzer= block.getFieldValue('PIN_Buzzer');

  Blockly.Arduino.includes_['otto_lib'] = '#include <Otto.h>\n'
	+ 'Otto Otto;';

  Blockly.Arduino.definitions_['otto_legs'] = '#define LeftLeg '+ PIN_YL +' // left leg pin, servo[0]\n'
 	+ '#define RightLeg '+ PIN_YR +' // right leg pin, servo[1]\n'
	+ '#define LeftFoot '+ PIN_RL +' // left foot pin, servo[2]\n'
    + '#define RightFoot '+ PIN_RR +' // right foot pin, servo[3]\n'
    + '#define Buzzer '+ PIN_Buzzer +' //buzzer pin \n';

  Blockly.Arduino.setups_['otto_init']='Otto.init(LeftLeg, RightLeg, LeftFoot, RightFoot, true, Buzzer);\n'
  + 'Otto.home();\n';
  var code = '';
  return code;
};

Blockly.Arduino['otto_home'] = function(block) {

  var code = 'Otto.home();\n';
  return code;
};

 Blockly.Arduino['otto_move'] = function(block) {
  var dropdown_otto_move_sens = block.getFieldValue('otto_move_sens');
  var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');

  var code = '';
  switch(dropdown_otto_move_sens) {
	case 'FORWARD':
		code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',1); // FORWARD\n';
		break;
	case 'BACKWARD':
		code = 'Otto.walk(1,' + dropdown_otto_move_speed + ',-1); // BACKWARD\n';
		break;
	case 'LEFT':
		code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',1); // LEFT\n';
		break;
	case 'RIGHT':
		code = 'Otto.turn(1,' + dropdown_otto_move_speed + ',-1); // RIGHT\n';
		break;
	case 'BENDLEFT':
		code = 'Otto.bend(1,' + dropdown_otto_move_speed + ',1);\n';
		break;
	case 'BENDRIGHT':
		code = 'Otto.bend(1,' + dropdown_otto_move_speed + ',-1);\n';
		break;
	case 'SHAKERIGHT':
		code = 'Otto.shakeLeg(1,' + dropdown_otto_move_speed + ',1);\n';
		break;
	case 'SHAKELEFT':
		code = 'Otto.shakeLeg(1,' + dropdown_otto_move_speed + ',-1);\n';
    break;
    case 'jump':
		code = 'Otto.jump(1,' + dropdown_otto_move_speed + ');\n';
		break;
  }
  return code;
};

Blockly.Arduino['otto_dance'] = function(block) {
  var dropdown_otto_dance_movement = block.getFieldValue('otto_dance_movement');
  var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
  var dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');

  var code = '';
  switch(dropdown_otto_dance_movement) {
    case 'moonwalkerLEFT':
      code = 'Otto.moonwalker(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1);\n';
      break;
    case 'moonwalkerRIGHT':
      code = 'Otto.moonwalker(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1);\n';
      break;
    case 'crusaitoLEFT':
      code = 'Otto.crusaito(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1);\n';
      break;
    case 'crusaitoRIGHT':
      code = 'Otto.crusaito(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1);\n';
      break;
    case 'flappingFRONT':
      code = 'Otto.flapping(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', 1);\n';
      break;
    case 'flappingBACK':
      code = 'Otto.flapping(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ', -1);\n';
      break;
    }
  return code;
};
Blockly.Arduino['otto_do'] = function(block) {
  var dropdown_otto_do_movement = block.getFieldValue('otto_do_movement');
  var dropdown_otto_move_speed = block.getFieldValue('otto_move_speed');
  var dropdown_otto_dance_size = block.getFieldValue('otto_dance_size');

  var code = 'Otto.' + dropdown_otto_do_movement + '(1, ' + dropdown_otto_move_speed + ', ' + dropdown_otto_dance_size + ');\n';
  return code;
};


Blockly.Arduino['otto_sound'] = function(block) {
  var dropdown_otto_sound = block.getFieldValue('otto_sound');

  var code = 'Otto.sing(' + dropdown_otto_sound + ');\n';
  return code;
};



