<xml xmlns="http://www.w3.org/1999/xhtml">
  <toolbox>toolbox_arduino_all</toolbox>
  <block type="base_setup_loop" id="^nX}_e-F9tJ/ax8/^?/4" x="47" y="40">
    <statement name="DO">
      <block type="variables_set_init" id="m6:,IeoGDsvlG8DnQRzi">
        <field name="VAR">x</field>
        <field name="VARIABLE_SETTYPE_TYPE">NUMBER</field>
        <value name="VALUE">
          <block type="math_number" id="ozK%q6bgblLa3/cy9X;*">
            <field name="NUM">10</field>
          </block>
        </value>
        <next>
          <block type="dwin_box_ttl" id="VQegtf{,FU[B)gtYSXx9">
            <next>
              <block type="dwin_box_text" id="L)OmuJUz1M`?G}5|a1WV">
                <field name="id_text">Led Pin G4</field>
                <field name="x_text">15</field>
                <field name="y_text">5</field>
                <field name="h_text">5</field>
                <field name="color_dropdown">4</field>
                <next>
                  <block type="dwin_box_text" id="sA//@q0T#2*N/)JM)TuY">
                    <field name="id_text">LCD Led</field>
                    <field name="x_text">15</field>
                    <field name="y_text">255</field>
                    <field name="h_text">5</field>
                    <field name="color_dropdown">4</field>
                    <next>
                      <block type="dwin_box_var" id="l$?XBGgr#O{)g#`P0hD)">
                        <field name="x_text">170</field>
                        <field name="y_text">260</field>
                        <field name="text_text">4</field>
                        <field name="color_dropdown">4</field>
                        <value name="var_block">
                          <shadow type="math_number" id="-9VWt7={BINhdNKAMd;M">
                            <field name="NUM">R</field>
                          </shadow>
                          <block type="variables_get" id="pxMWBk18aD,lcD$*l4J|">
                            <field name="VAR">x</field>
                          </block>
                        </value>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <statement name="LOOP">
      <block type="dwin_box_data" id="T9iM1c}lmrGJL~Eu1`!`">
        <next>
          <block type="dwin_box_bot1" id="/XNvR!fRM9WnM1ju=hmc">
            <field name="idn_text">1</field>
            <field name="id_text">1</field>
            <field name="x_text">0</field>
            <field name="y_text">50</field>
            <field name="text_text">   ON - Led  </field>
            <field name="color_dropdown">4</field>
            <field name="bb_dropdown">0</field>
            <statement name="bot_statement">
              <block type="inout_digital_write" id="wH`OTJ2vZsS~^Ze=hmZt">
                <value name="PIN">
                  <shadow type="math_number" id="C-PLj0N;ck}7taBRXa*{">
                    <field name="NUM">4</field>
                  </shadow>
                </value>
                <value name="STAT">
                  <shadow type="math_number" id="@rm!Hv2Z#gjqOh9i-iEL">
                    <field name="NUM">1</field>
                  </shadow>
                </value>
                <next>
                  <block type="dwin_box_zum" id="m+:s~;rn!kPOgo.(/Pq#">
                    <value name="var_block">
                      <shadow type="math_number" id="tV{XwsQL:XA=]e/!6~TO">
                        <field name="NUM">5</field>
                      </shadow>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
            <next>
              <block type="dwin_box_bot1" id="_Cp^!VG`l#ho7W%e,ywj">
                <field name="idn_text">2</field>
                <field name="id_text">2</field>
                <field name="x_text">0</field>
                <field name="y_text">150</field>
                <field name="text_text">   OFF - Led  </field>
                <field name="color_dropdown">4</field>
                <field name="bb_dropdown">0</field>
                <statement name="bot_statement">
                  <block type="inout_digital_write" id=";)KjkZRKi!|:N#2Q07At">
                    <value name="PIN">
                      <shadow type="math_number" id="38aa4PKs76fhI,42X3n3">
                        <field name="NUM">4</field>
                      </shadow>
                    </value>
                    <value name="STAT">
                      <shadow type="math_number" id="gT~,Qee#BFo_4gWzXxpS">
                        <field name="NUM">0</field>
                      </shadow>
                    </value>
                    <next>
                      <block type="dwin_box_zum" id="Kpfx@[sCP~,Ck,2S?ErP">
                        <value name="var_block">
                          <shadow type="math_number" id="rK,Uh~Hif^V{|lZ+G^|/">
                            <field name="NUM">5</field>
                          </shadow>
                        </value>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="dwin_box_bot1" id="y4rzno^bpt^%C:gO=}AN">
                    <field name="idn_text">3</field>
                    <field name="id_text">3</field>
                    <field name="x_text">0</field>
                    <field name="y_text">300</field>
                    <field name="text_text">   - 1</field>
                    <field name="color_dropdown">4</field>
                    <field name="bb_dropdown">0</field>
                    <statement name="bot_statement">
                      <block type="base_form_RR" id="1CC7_3M*z`Q;L.0a~n#i">
                        <field name="SPEED">--</field>
                        <value name="texttoprint">
                          <shadow type="math_number" id="RPGQA:,l1@[w}YtY;#:r">
                            <field name="NUM">R</field>
                          </shadow>
                          <block type="variables_get" id="I1ixf=g3r8eeO~@t:tsJ">
                            <field name="VAR">x</field>
                          </block>
                        </value>
                        <next>
                          <block type="dwin_box_icon" id="RV!DKATsl5^Xx90tv+[a">
                            <field name="icon_text">50</field>
                            <field name="x_text">170</field>
                            <field name="y_text">262</field>
                            <next>
                              <block type="dwin_box_var" id=":.p~|bf)q6U[i)vZh~T2">
                                <field name="x_text">170</field>
                                <field name="y_text">260</field>
                                <field name="text_text">4</field>
                                <field name="color_dropdown">4</field>
                                <value name="var_block">
                                  <shadow type="math_number" id="-9VWt7={BINhdNKAMd;M">
                                    <field name="NUM">R</field>
                                  </shadow>
                                  <block type="variables_get" id=")GN8snC9e%YwM_FPwBEb">
                                    <field name="VAR">x</field>
                                  </block>
                                </value>
                                <next>
                                  <block type="dwin_box_led" id="pSz1539|~?EuY(4!g1.h">
                                    <value name="var_block">
                                      <shadow type="math_number" id="iF:orBh0ln9jVn,-e^:C">
                                        <field name="NUM">64</field>
                                      </shadow>
                                      <block type="variables_get" id="AQ:BAS;UCB)tdEv%~!^b">
                                        <field name="VAR">x</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="dwin_box_zum" id="B)+^G]{esx,1lFG!f5h+">
                                        <value name="var_block">
                                          <shadow type="math_number" id="l{xs1yfWdoP:Wu]!:0A,">
                                            <field name="NUM">5</field>
                                          </shadow>
                                        </value>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next>
                      <block type="dwin_box_bot1" id="-(u|k.*B7jAn#S$bpW|y">
                        <field name="idn_text">4</field>
                        <field name="id_text">3</field>
                        <field name="x_text">200</field>
                        <field name="y_text">300</field>
                        <field name="text_text">   + 1</field>
                        <field name="color_dropdown">4</field>
                        <field name="bb_dropdown">0</field>
                        <statement name="bot_statement">
                          <block type="base_form_RR" id="7jy|6JBSN7S[DF|gVS`L">
                            <field name="SPEED">++</field>
                            <value name="texttoprint">
                              <shadow type="math_number" id="RPGQA:,l1@[w}YtY;#:r">
                                <field name="NUM">R</field>
                              </shadow>
                              <block type="variables_get" id="e3;B,CY?h;Lp~7@v5(x0">
                                <field name="VAR">x</field>
                              </block>
                            </value>
                            <next>
                              <block type="dwin_box_icon" id="[B]ekEPL4=ygRbJWG8}{">
                                <field name="icon_text">50</field>
                                <field name="x_text">170</field>
                                <field name="y_text">262</field>
                                <next>
                                  <block type="dwin_box_var" id="1av2!{S0W{o9VD`wtgSl">
                                    <field name="x_text">170</field>
                                    <field name="y_text">260</field>
                                    <field name="text_text">4</field>
                                    <field name="color_dropdown">4</field>
                                    <value name="var_block">
                                      <shadow type="math_number" id="-9VWt7={BINhdNKAMd;M">
                                        <field name="NUM">R</field>
                                      </shadow>
                                      <block type="variables_get" id="iCrBO-Li%OF9n/54E/_$">
                                        <field name="VAR">x</field>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="dwin_box_led" id=";*bLX?M1gEo-@kG[G{;i">
                                        <value name="var_block">
                                          <shadow type="math_number" id="VB|^rrvT8D{S,!d}X6R#">
                                            <field name="NUM">64</field>
                                          </shadow>
                                          <block type="variables_get" id="ln|U%n-H|rIZ7+}JsqWs">
                                            <field name="VAR">x</field>
                                          </block>
                                        </value>
                                        <next>
                                          <block type="dwin_box_zum" id="C=cy1k{MvxLYrVVpQcR_">
                                            <value name="var_block">
                                              <shadow type="math_number" id="1VEI8.AzX0V1)K3Z[x%d">
                                                <field name="NUM">5</field>
                                              </shadow>
                                            </value>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>