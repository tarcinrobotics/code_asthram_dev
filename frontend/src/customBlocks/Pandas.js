import Blockly from "blockly";
import "blockly/python";

Blockly.Blocks['import_pandas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("import pandas as pd");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Import the pandas library and alias it as 'pd'.");
    this.setHelpUrl("");
  }
};

  
  Blockly.Python['import_pandas'] = function(block) {
    var code = 'import pandas as pd'; // Define the code variable
    Blockly.Python.definitions_['pandas'] = code; // Store the code in Blockly.Python.definitions_
    return code; // Return the code
  };
  
  
  Blockly.Blocks['create_dataframe'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Create DataFrame");
      this.appendValueInput("columns")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Columns");
      this.appendValueInput("data")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Data");
      this.setOutput(true, "DataFrame");
      this.setColour(230);
      this.setTooltip("Create a DataFrame using the specified columns and data.");
      this.setHelpUrl("");
    }
  };


  Blockly.Python['create_dataframe'] = function(block) {
    var value_columns = Blockly.Python.valueToCode(block, 'columns', Blockly.Python.ORDER_ATOMIC);
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    var code = 'pd.DataFrame({' + value_data + '}, columns=[' + value_columns + '])';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Blocks['read_csv'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Read CSV File")
          .appendField(new Blockly.FieldTextInput("filename.csv"), "filename");
      this.setOutput(true, "DataFrame");
      this.setColour(230);
      this.setTooltip("Reads data from a CSV file and creates a DataFrame.");
      this.setHelpUrl("");
    }
  };


  Blockly.Python['read_csv'] = function(block) {
    var text_filename = block.getFieldValue('filename');
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    var code = 'pd.read_csv("' + text_filename + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Blocks['describe_data'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Describe Data");
      this.appendValueInput("data")
          .setCheck("DataFrame")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Data");
      this.setOutput(true, "String");
      this.setColour(230);
      this.setTooltip("Generates descriptive statistics of the DataFrame.");
      this.setHelpUrl("");
    }
  };


  Blockly.Python['describe_data'] = function(block) {
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var code = value_data + '.describe()';
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Blocks['select_columns'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Select Columns")
          .appendField(new Blockly.FieldTextInput("column1, column2"), "columns");
      this.appendValueInput("data")
          .setCheck("DataFrame")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Data");
      this.setOutput(true, "DataFrame");
      this.setColour(230);
      this.setTooltip("Selects specific columns from the DataFrame.");
      this.setHelpUrl("");
    }
  };


  Blockly.Python['select_columns'] = function(block) {
    var text_columns = block.getFieldValue('columns');
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var code = value_data + '[[' + text_columns + ']]';
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Blocks['group_data'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Group Data by")
          .appendField(new Blockly.FieldTextInput("column"), "column");
      this.appendValueInput("data")
          .setCheck("DataFrame")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Data");
      this.setOutput(true, "DataFrameGroupBy");
      this.setColour(230);
      this.setTooltip("Groups the data by the specified column.");
      this.setHelpUrl("");
    }
  };


  Blockly.Python['group_data'] = function(block) {
    var text_column = block.getFieldValue('column');
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var code = value_data + '.groupby("' + text_column + '")';
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Blocks['filter_data'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Filter Data where")
          .appendField(new Blockly.FieldTextInput("condition"), "condition");
      this.appendValueInput("data")
          .setCheck("DataFrame")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Data");
      this.setOutput(true, "DataFrame");
      this.setColour(230);
      this.setTooltip("Filters the data based on the specified condition.");
      this.setHelpUrl("");
    }
  };


  Blockly.Python['filter_data'] = function(block) {
    var text_condition = block.getFieldValue('condition');
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var code = value_data + '[' + text_condition + ']';
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Blocks['sort_data'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sort Data by")
          .appendField(new Blockly.FieldTextInput("column"), "column");
      this.appendValueInput("data")
          .setCheck("DataFrame")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Data");
      this.setOutput(true, "DataFrame");
      this.setColour(230);
      this.setTooltip("Sorts the data based on the values in the specified column.");
      this.setHelpUrl("");
    }
  };


  Blockly.Python['sort_data'] = function(block) {
    var text_column = block.getFieldValue('column');
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var code = value_data + '.sort_values(by="' + text_column + '")';
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Blocks['plot_data'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Plot Data")
          .appendField(new Blockly.FieldDropdown([["line", "line"], ["scatter", "scatter"], ["histogram", "hist"]]), "plot_type")
          .appendField("of")
          .appendField(new Blockly.FieldTextInput("column"), "column")
          .appendField("vs")
          .appendField(new Blockly.FieldTextInput("column"), "column2");
      this.appendValueInput("data")
          .setCheck("DataFrame")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Data");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Plots the selected data. Choose the type of plot and columns to plot against each other.");
      this.setHelpUrl("");
    }
  };


  Blockly.Python['plot_data'] = function(block) {
    var dropdown_plot_type = block.getFieldValue('plot_type');
    var text_column = block.getFieldValue('column');
    var text_column2 = block.getFieldValue('column2');
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var code = value_data + '[[' + text_column + ', ' + text_column2 + ']].plot(kind="' + dropdown_plot_type + '")\n';
    return code;
  };

  Blockly.Blocks['merge_dataframes'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Merge DataFrames");
      this.appendValueInput("dataframe1")
          .setCheck(null)
          .appendField("DataFrame 1");
      this.appendValueInput("dataframe2")
          .setCheck(null)
          .appendField("DataFrame 2");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("Merges two DataFrames together based on common columns or indices.");
    }
  };

  
  Blockly.Python['merge_dataframes'] = function(block) {
    var value_dataframe1 = Blockly.Python.valueToCode(block, 'dataframe1', Blockly.Python.ORDER_ATOMIC);
    var value_dataframe2 = Blockly.Python.valueToCode(block, 'dataframe2', Blockly.Python.ORDER_ATOMIC);
    var code = value_dataframe1 + ".merge(" + value_dataframe2 + ")";
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };

  Blockly.Blocks['concatenate_dataframes'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Concatenate DataFrames");
      this.appendValueInput("dataframes")
          .setCheck(null)
          .appendField("DataFrames");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("Concatenates multiple DataFrames along rows or columns.");
    }
  };

  
  Blockly.Python['concatenate_dataframes'] = function(block) {
    var value_dataframes = Blockly.Python.valueToCode(block, 'dataframes', Blockly.Python.ORDER_ATOMIC);
    var code = "pd.concat(" + value_dataframes + ")";
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };

  Blockly.Blocks['group_by_and_aggregate'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Group By and Aggregate");
      this.appendValueInput("dataframe")
          .setCheck(null)
          .appendField("DataFrame");
      this.appendValueInput("group_by_column")
          .setCheck(null)
          .appendField("Group By Column");
      this.appendValueInput("aggregations")
          .setCheck(null)
          .appendField("Aggregations");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("Groups the DataFrame by specified column(s) and applies specified aggregations.");
    }
  };

  
  Blockly.Python['group_by_and_aggregate'] = function(block) {
    var value_dataframe = Blockly.Python.valueToCode(block, 'dataframe', Blockly.Python.ORDER_ATOMIC);
    var value_group_by_column = Blockly.Python.valueToCode(block, 'group_by_column', Blockly.Python.ORDER_ATOMIC);
    var value_aggregations = Blockly.Python.valueToCode(block, 'aggregations', Blockly.Python.ORDER_ATOMIC);
    var code = value_dataframe + ".groupby(" + value_group_by_column + ").agg(" + value_aggregations + ")";
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };

  Blockly.Blocks['pivot_table'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Pivot Table");
      this.appendValueInput("dataframe")
          .setCheck(null)
          .appendField("DataFrame");
      this.appendValueInput("values")
          .setCheck(null)
          .appendField("Values");
      this.appendValueInput("index")
          .setCheck(null)
          .appendField("Index");
      this.appendValueInput("columns")
          .setCheck(null)
          .appendField("Columns");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("Creates a pivot table from the DataFrame with specified values, index, and columns.");
    }
  };

  
  Blockly.Python['pivot_table'] = function(block) {
    var value_dataframe = Blockly.Python.valueToCode(block, 'dataframe', Blockly.Python.ORDER_ATOMIC);
    var value_values = Blockly.Python.valueToCode(block, 'values', Blockly.Python.ORDER_ATOMIC);
    var value_index = Blockly.Python.valueToCode(block, 'index', Blockly.Python.ORDER_ATOMIC);
    var value_columns = Blockly.Python.valueToCode(block, 'columns', Blockly.Python.ORDER_ATOMIC);
    var code = "pd.pivot_table(" + value_dataframe + ", values=" + value_values + ", index=" + value_index + ", columns=" + value_columns + ")";
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  
  Blockly.Blocks['apply_function'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Apply Function to DataFrame");
      this.appendValueInput("dataframe")
          .setCheck(null)
          .appendField("DataFrame");
      this.appendValueInput("function")
          .setCheck(null)
          .appendField("Function");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("Applies a function to each element of the DataFrame.");
    }
  };

  
  Blockly.Python['apply_function'] = function(block) {
    var value_dataframe = Blockly.Python.valueToCode(block, 'dataframe', Blockly.Python.ORDER_ATOMIC);
    var value_function = Blockly.Python.valueToCode(block, 'function', Blockly.Python.ORDER_ATOMIC);
    var code = value_dataframe + ".apply(" + value_function + ")";
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };

  Blockly.Blocks['rename_columns'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Rename Columns");
      this.appendValueInput("dataframe")
          .setCheck(null)
          .appendField("DataFrame");
      this.appendValueInput("new_names")
          .setCheck(null)
          .appendField("New Column Names");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("Renames columns of the DataFrame with specified new names.");
    }
  };

  
  Blockly.Python['rename_columns'] = function(block) {
    var value_dataframe = Blockly.Python.valueToCode(block, 'dataframe', Blockly.Python.ORDER_ATOMIC);
    var value_new_names = Blockly.Python.valueToCode(block, 'new_names', Blockly.Python.ORDER_ATOMIC);
    var code = value_dataframe + ".rename(columns=" + value_new_names + ")";
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  Blockly.Blocks['drop_columns'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Drop Columns");
      this.appendValueInput("dataframe")
          .setCheck(null)
          .appendField("DataFrame");
      this.appendValueInput("columns")
          .setCheck(null)
          .appendField("Columns to Drop");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(230);
      this.setTooltip("Drops specified columns from the DataFrame.");
    }
  };

  
  Blockly.Python['drop_columns'] = function(block) {
    var value_dataframe = Blockly.Python.valueToCode(block, 'dataframe', Blockly.Python.ORDER_ATOMIC);
    var value_columns = Blockly.Python.valueToCode(block, 'columns', Blockly.Python.ORDER_ATOMIC);
    var code = value_dataframe + ".drop(columns=" + value_columns + ")";
    Blockly.Python.definitions_['pandas'] = 'import pandas as pd';
    return [code, Blockly.Python.ORDER_FUNCTION_CALL];
  };
  
  Blockly.Blocks['fillna_values'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Fill NaN values in")
          .appendField(new Blockly.FieldTextInput("column_name"), "COLUMN");
      this.appendValueInput("VALUE")
          .setCheck(null)
          .appendField("with value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Fill NaN values in a column with a specified value");
      this.setHelpUrl("");
    }
  };


  Blockly.Python['fillna_values'] = function(block) {
    var text_column = block.getFieldValue('COLUMN');
    var value_value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code to fill NaN values
    var code = 'df[' + text_column + '].fillna(' + value_value + ', inplace=True)\n';
    return code;
  };

  Blockly.Blocks['drop_duplicates'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Drop duplicate rows");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Drop duplicate rows from the DataFrame");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['drop_duplicates'] = function(block) {
    // Generate Python code to drop duplicate rows
    var code = 'df.drop_duplicates(inplace=True)\n';
    return code;
  };

  Blockly.Blocks['reset_index'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Reset index");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Reset the index of the DataFrame");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['reset_index'] = function(block) {
    // Generate Python code to reset index
    var code = 'df.reset_index(drop=True, inplace=True)\n';
    return code;
  };

  Blockly.Blocks['set_index'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Set index to")
          .appendField(new Blockly.FieldTextInput("column_name"), "COLUMN");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Set the index of the DataFrame to a specified column");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['set_index'] = function(block) {
    var text_column = block.getFieldValue('COLUMN');
    // Generate Python code to set index
    var code = 'df.set_index("' + text_column + '", inplace=True)\n';
    return code;
  };

  Blockly.Blocks['group_by_and_transform'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Group by")
          .appendField(new Blockly.FieldTextInput("column_name"), "COLUMN")
          .appendField("and transform using")
          .appendField(new Blockly.FieldDropdown([["mean", "mean"], ["sum", "sum"], ["min", "min"], ["max", "max"]]), "METHOD");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Group by a column and transform the grouped data using a specified method");
      this.setHelpUrl("");
    }
  };

  Blockly.Python['group_by_and_transform'] = function(block) {
    var text_column = block.getFieldValue('COLUMN');
    var dropdown_method = block.getFieldValue('METHOD');
    // Generate Python code to group by and transform
    var code = 'df.groupby("' + text_column + '").transform("' + dropdown_method + '")\n';
    return code;
  };
  