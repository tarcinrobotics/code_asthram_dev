function include(file) {
 
    let script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
 
    document.getElementsByTagName('head').item(0).appendChild(script);
 
}
 
/* Include Many js files */

// js directory
include('js/ace.js');
include('js/blocklino.js');
include('js/blockly.min.js');
include('js/boards.js');
include('js/bootstrap.min.3.3.6.js');
include('js/bootstrap.toggle.min.js');
include('js/ext-language_tools.js');
include('js/ext-searchbox.js');
include('js/factory_block.js');
include('js/factory_generator.js');
include('js/generate_cpp.js');
include('js/generate_python.js');
include('js/hexlify.js');
include('js/intel-hex.browser.js');
include('js/jquery.min.2.1.3.js');
include('js/mode-c_cpp.js');
include('js/mode-python.js');
include('js/prettify.min.js');
include('js/python.js');
include('js/theme-sqlserver.js');
include('js/type.js');
include('js/types.js');
include('js/typing.js');
include('js/typings.js');
// js/snippets directory
include('js/snippets/c_cpp.js');
include('js/snippets/python.js');
include('js/snippets/text.js');
// code directory
include('lang/code.js');
include('lang/msg_en.js');
// blocks&generateurs directory
include('blocks&generateurs/arduino_blocs.js');
include('blocks&generateurs/arduino_generateurs_cpp.js');
include('blocks&generateurs/blockly_blocs.js');
include('blocks&generateurs/blockly_generateurs_cpp.js')