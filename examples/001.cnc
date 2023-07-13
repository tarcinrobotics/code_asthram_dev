<xml xmlns="http://www.w3.org/1999/xhtml">
  <toolbox>toolbox_arduino_all</toolbox>
  <block type="arduino_setup" id="Su`7r@Cf]V;wWYSPu4c2" x="64" y="24">
    <statement name="MyLoop">
      <block type="inout_digital_write" id="O0`({h!xBou*MfzYjIIZ">
        <value name="PIN">
          <shadow type="math_number" id="f$FE[`oy?yC`g-R;nOLD">
            <field name="NUM">25</field>
          </shadow>
        </value>
        <value name="STAT">
          <shadow type="math_number" id="`$M_s].r1~Fd~lr:*A31">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <next>
          <block type="base_delay" id="]M|Aw5Z0Gh}sbA}~lRB+">
            <field name="unite">m</field>
            <value name="DELAY_TIME">
              <shadow type="math_number" id="Ev8;abPrajD6n^*)ck*w">
                <field name="NUM">1000</field>
              </shadow>
            </value>
            <next>
              <block type="inout_digital_write" id="aZ]?@IL8/2f4L^0R#4mH">
                <value name="PIN">
                  <shadow type="math_number" id="=,%5T0ukVw15$YyB;t$2">
                    <field name="NUM">25</field>
                  </shadow>
                </value>
                <value name="STAT">
                  <shadow type="math_number" id="$KkxYp}}e-{p#v/I+YK6">
                    <field name="NUM">0</field>
                  </shadow>
                </value>
                <next>
                  <block type="base_delay" id="1:R=dxT-t?Ezf%OJz|M?">
                    <field name="unite">m</field>
                    <value name="DELAY_TIME">
                      <shadow type="math_number" id="CSr6hE~7y-4}8APvz6[=">
                        <field name="NUM">1000</field>
                      </shadow>
                    </value>
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