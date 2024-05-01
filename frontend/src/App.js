import "./App.css";
import React, { useRef, useState, useEffect, forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import BlocklyDuino from "react-blockly";
import logo from './component/code_asthram.png';
import html2canvas from 'html2canvas';
import "./css/bootstrap.min.3.3.6.css";
import "./css/blocklino.css";
import { toggleModal } from "./scripts/buttonFunctions";
import modulesData from "./scripts/modules.json";
import { ModuleDropdown, ProjectDropdown } from './dropDown.js';
import FloatingScreen from "./scripts/FloatingMiniScreen.js";
import ParentComponent from "./scripts/ParentComponent.js";

import "./customBlocks/custom_Blocks";
import "./customBlocks/LogicBlocks.js";
import "./customBlocks/openCv.js";
import "./customBlocks/turtleBlocks.js";
import "./customBlocks/plotting.js";
import "./customBlocks/systemFunctions.js";
import "./customBlocks/Structure.js";
import "./customBlocks/fileHandling.js";
import "./customBlocks/Variable.js";
import "./customBlocks/Sorting.js";
import "./customBlocks/Functions.js";
import "./customBlocks/Pandas.js";
import "./customBlocks/tensorFlow.js";
import "./customBlocks/numPy.js";
import "./customBlocks/nltk.js";
import "./customBlocks/scikit.js";
import "./customBlocks/Django.js";
import "./customBlocks/Flask.js";

export default function App() {

  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  const [workspace, setWorkspace] = useState(null);

  const [selectedModuleIndex, setSelectedModuleIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const [isVisible, setIsVisible] = useState(false); // State to control visibility of the FloatingScreen
  const [showMiniScreen, setShowMiniScreen] = useState(false);
  const fileInputRef = useRef(null);
  const workspaceRef = useRef(null);
  const navigate = useNavigate();

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  
    const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Logic",
        colour: "#3172A3",
        contents: [
          {kind: "block", type: "controls_ifelse"
        }, {  kind: "block",   type: "controls_if_elif",
        }, {  kind: "block",   type: "controls_if",
      },
       // { kind: "block", type: "if_elif_else_dropdown" },
       {
          kind: "block",
          type: "controls_else",
        },
          {kind: "block", type: "logic_compare",},
          {kind: "block", type: "controls_if_if",},
          {kind: "block", type: "controls_if_elseif",},
          { kind: "block",type: "logic_operation", },
          { kind: "block",type: "logic_negate",},
          {kind: "block",type: "logic_boolean", },
          {kind: "block", type: "arithmetic_operator"},
          {kind: "block", type: "assignment_operator"},
          { kind: "block",type: "logic_null",},
          { kind: "block",type: "logic_ternary", },
        ], },
      {
        kind: "category",
        name: "Loops",
        colour: "#227446",
        contents: [
          {
            kind: "block",
            type: "controls_repeat_ext",
            colour: "#FFB266"
          },
        
          {
            kind: "block",
            type: "controls_whileUntil",
          },
          {
            kind: "block",
            type: "controls_for",
          },
          {
            kind: "block",
            type: "controls_forEach",
          },
          {
            kind: "block",
            type: "controls_flow_statements",
          },
        ],
      },
      {
        kind: "category",
        name: "Math",
        colour: "#4B0082",
        contents: [
          {
            kind: "block",
            type: "math_round",
          },
          {
            kind: "block",
            type: "math_number",
          },
          {
            kind: "block",
            type: "math_arithmetic",
          },
          {
            kind: "block",
            type: "math_single",
          },
          {
            kind: "block",
            type: "math_trig",
          },
          {
            kind: "block",
            type: "math_constant",
          },
          {
            kind: "block",
            type: "math_on_list",
          },
          {
            kind: "block",
            type: "math_modulo",
          },
          {
            kind: "block",
            type: "math_constrain",
          },
          /*{
            kind: "block",
            type: "math_random_init",
          },*/
          {
            kind: "block",
            type: "math_random_float",
          },
          {
            kind: "block",
            type: "math_atan2",
          },
        ],
      },

      {
        kind: "category",
        name: "Text",
        colour: "#70DBDB",
        contents: [
          {
            kind: "block",
            type: "text",
          },
          {
            kind: "block",
            type: "text_join",
          },
          {
            kind: "block",
            type: "text_append",
          },
          {
            kind: "block",
            type: "text_length",
          },
          {
            kind: "block",
            type: "text_isEmpty",
          },
          {
            kind: "block",
            type: "text_indexOf",
          },
          {
            kind: "block",
            type: "text_charAt",
          },
          {
            kind: "block",
            type: "text_getSubstring",
          },
          {
            kind: "block",
            type: "text_changeCase",
          },
          {
            kind: "block",
            type: "text_trim",
          },
          {
            kind: "block",
            type: "text_print",
          },
          {
            kind: "block",
            type: "text_prompt_ext",
          },
        ],
      },
      {
        kind: "category",
        name: "Lists",
        colour: "#DA70D6",
        contents: [
          {
            kind: "block",
            type: "lists_create_with",
          },
          {
            kind: "block",
            type: "lists_repeat",
          },
          {
            kind: "block",
            type: "lists_length",
          },
          {
            kind: "block",
            type: "lists_isEmpty",
          },
          {
            kind: "block",
            type: "lists_indexOf",
          },
          {
            kind: "block",
            type: "lists_getIndex",
          },
          {
            kind: "block",
            type: "lists_setIndex",
          },
          {
            kind: "block",
            type: "lists_getSublist",
          },
          {
            kind: "block",
            type: "lists_split",
          },
          {
            kind: "block",
            type: "lists_sort",
          },
        ],
      },
      {
        kind: "category",
        name: "Colours",
        colour: "#A0522D",
        contents: [
          {kind: "block",type: "colour_picker", },
          { kind: "block",type: "colour_random", },
          {kind: "block",type: "colour_rgb", },
          { kind: "block",type: "colour_blend",},
          
        ],
      },

      {
        kind: "category",
        name: "Variables",
        colour: "#FFFF00",
        contents: [
          {kind: "block", type: "create_variable"},
          {kind: "block", type: "create_variable_2"},
          { kind: "block", type: "set_variable", },
          { kind: "block", type: "plain_variable", },
          { kind: "block", type: "array_declaration",},
          { kind: "block", type: "check_variable_value", },
          { kind: "block", type: "swap_variables", },
          { kind: "block", type: "convert_to_data_type", },
          { kind: "block", type: "copy_variable",},
          { kind: "block", type: "float_operator",},
          { kind: "block", type: "import_statements",},
          { kind: "block", type: "time_sleep",},
          { kind: "block", type: "user_input",},
          { kind: "block", type: "find_maximum_value", },
          { kind: "block", type: "calculate_average", },
          { kind: "block", type: "variable_scope",},
          { kind: "block", type: "increment_variable", },
          { kind: "block", type: "decrement_variable", },
          { kind: "block", type: "reset_variable",},

        ],
      },
      
      {
        kind: "category",
        name: "Structure",
        colour: "#003153",
        contents: [
          {kind: "block", type: "base_structure", },
          { kind: "block",type: "declaration_structure", },
          { kind: "block", type: "custom_yield",},
          {kind: "block", type: "if_else_structure", },
          { kind: "block",type: "dynamic_for_loop", },
          { kind: "block", type: "while_loop_structure",},
          {kind: "block", type: "do_while_loop_structure", },
          { kind: "block",type: "class_structure", },
          { kind: "block",type: "break_statement", },
          {kind: "block", type: "function_definition_structure", },
          { kind: "block",type: "try_catch_structure", },
          { kind: "block", type: "switch_case_structure",},
          
        ],
      },

      {
        kind: "category",
        name: "Functions",
        colour: "#E2725B",
        contents: [
          { kind: "block",type: "new_boundary_function",colour:"#191970" },
          {kind: "block",type: "return", },
          { kind: "block",type: "calculate_average", },
          {kind: "block",type: "find_maximum", },
          { kind: "block",type: "calculate_factorial", },
          { kind: "block",type: "calculate_sum", },
          {kind: "block",type: "calculate_median", },
          { kind: "block",type: "calculate_power", },
          { kind: "block",type: "calculate_standard_deviation", },
          {kind: "block",type: "calculate_variance", },
          { kind: "block",type: "calculate_mean_absolute_deviation", },
        ],
      },

      {
        kind: "category",
        name: "Turtle",
        colour: "#800020",
        contents: [
          { kind: "block", type: "turtle_create_screen"
          },
          {
kind: "block", type: "turtle_set_background_color"
          },
          {
            kind: "block",
            type: "turtle_command",
          },
          {
            kind: "block",
            type: "turtle_turn",
          },
          { kind: "block", type: "turtle_shape",},
          { kind: "block", type: "turtle_pen",},
          { kind: "block", type: "turtle_color",},
          { kind: "block", type: "turtle_write",},
          {kind: "block", type: "turtle_circle"},
          { kind: "block", type: "turtle_goto",},
          { kind: "block", type: "turtle_ondrag",},
          /*{ kind: "block", type: "turtle_pos",},*/
          { kind: "block", type: "turtle_stamp",},
          {kind: "block", type: "turtle_done",},
          { kind: "block", type: "turtle_begin_fill",},
          { kind: "block", type: "turtle_end_fill",},
          { kind: "block", type: "turtle_speed",},
        ],
      },

      {
        kind: "category",
        name: "Plotting",
        colour: "#008080",
        contents: [
          {
            kind: "block",
            type: "matplotlib_title",
          },
          {
            kind: "block",
            type: "matplotlib_xlabel",
          }, {kind: "block", type: "matplotlib_bar_plot"},
          {kind: "block", type: "matplotlib_show_plot"},
          {kind: "block", type: "matplotlib_add_legend"},
          {kind: "block", type: "matplotlib_plot_histogram"},
          {kind: "block", type: "matplotlib_plot_scatter"},
          {kind: "block", type: "matplotlib_plot_pie"},
          {kind: "block", type: "matplotlib_add_grid"},
          {kind: "block", type: "matplotlib_create_figure"},
          {kind: "block", type: "matplotlib_create_subplot"},
          {kind: "block", type: "matplotlib_add_subtitle"},
          {kind: "block", type: "matplotlib_add_colorbar"},
          {kind: "block", type: "mappable_object"},
          {kind: "block", type: "matplotlib_plot"},
          { kind: "block", type: "matplotlib_ylabel",},
          { kind: "block", type: "numpy_linspace",},
          { kind: "block", type: "numpy_arange",},
          { kind: "block", type: "numpy_array",},
          { kind: "block", type: "numpy_trigonometric",},
        //  { kind: "block", type: "numpy_exp",},
        ],
      },

      {
        kind: "category",
        name: "Sorting",
        colour: "#610C04",
        contents: [
          {kind: "block",type: "initialize_array",},
          { kind: "block", type: "set_list_element",},
        {kind: "block",type: "bubble_sort_logic",},
          {kind: "block",type: "swap_elements",},
          { kind: "block", type: "for_loop",},
          { kind: "block", type: "if_statement",},
          {kind: "block",type: "return_statement",},
          { kind: "block", type: "insertion_sort_logic",},
          {kind: "block",type: "compare_elements",},
          { kind: "block", type: "merge_sort_logic",},
          {kind: "block",type: "merge",},
          {kind: "block",type: "quick_sort_logic",},
          { kind: "block", type: "partition",},
          {kind: "block",type: "combine",},
          {kind: "block",type: "bubble_sort",},
          { kind: "block", type: "insertion_sort",},
          {kind: "block",type: "merge_sort",},
        {kind: "block",type: "quick_sort",}
    
        ],
      },

      {
        kind: "category",
        name: "System Functions",
        colour: "#FF4500",
        contents: [
          {kind: "block",type: "delay",},
          { kind: "block", type: "delayed_execution",},
          {kind: "block",type: "file_system_functions",},
          { kind: "block", type: "system_info_functions",},   
          {kind: "block",type: "networking_functions",},
          { kind: "block", type: "system_configuration_functions",},
          {kind: "block",type: "system_monitoring_functions",},
          {kind: "block",type: "system_command_execution_functions",},
          {kind: "block",type: "system_time_functions",},
          { kind: "block", type: "system_exit_function",},
          {kind: "block",type: "system_reboot_function",},

        ],
      },

     

      {
        kind: "category",
        name: "File Handling",
        colour: "#7851A9",
        contents: [
          {
            kind: "block",
            type: "file_open",
          },
          {
            kind: "block",
            type: "file_read",
          },
          { kind: "block", type: "file_write"},
          { kind: "block", type: "file_close"},
          { kind: "block", type: "get_file_contents"},
          { kind: "block", type: "file_handling_with_input"},
          { kind: "block", type: "print"},
          { kind: "block", type: "file_exists"},
          { kind: "block", type: "file_rename"},
          { kind: "block", type: "file_delete"},
          { kind: "block", type: "file_size"},
          { kind: "block", type: "file_extension",},
          { kind: "block", type: "list_files"},
          { kind: "block", type: "file_copy"},
          { kind: "block", type: "file_move"},
        ],
      },
      {
        kind: "category",
        "name": "Pandas",
        "colour": "#FFA07A",
        "contents": [
          { kind: "block", type: "import_pandas", "colour": "#FFA07A" },
          { kind: "block", type: "create_dataframe", "colour": "#FFA07A" },
          { kind: "block", type: "read_csv", "colour": "#FFA07A" },
          { kind: "block", type: "describe_data", "colour": "#FFA07A" },
          { kind: "block", type: "select_columns", "colour": "#FFA07A" },
          { kind: "block", type: "group_data", "colour": "#FFA07A" },
          { kind: "block", type: "filter_data", "colour": "#FFA07A" },
          { kind: "block", type: "sort_data", "colour": "#FFA07A" },
          { kind: "block", type: "plot_data", "colour": "#FFA07A" },
          {kind: "block",  type: "merge_dataframes",    "colour": "#FFA07A"  },
          { kind: "block", type: "concatenate_dataframes", "colour": "#FFA07A" },
          {kind: "block", type: "group_by_and_aggregate", "colour": "#FFA07A" },
          {kind: "block", type: "pivot_table", "colour": "#FFA07A"  },
          { kind: "block",   type: "apply_function",  "colour": "#FFA07A"     },
          { kind: "block",type: "rename_columns","colour": "#FFA07A"      }
,{ kind: "block", type: "drop_columns","colour": "#FFA07A"},       
{ kind: "block", type: "fillna_values", "colour": "#FFA07A" },
{ kind: "block", type: "drop_duplicates", "colour": "#FFA07A" },
{ kind: "block", type: "reset_index", "colour": "#FFA07A" },
{ kind: "block", type: "set_index", "colour": "#FFA07A" },
{ kind: "block", type: "group_by_and_transform", "colour": "#FFA07A" }   
          
  
        ]
      },

      {
        kind: "category",
        name: "TensorFlow",
        colour: "#FF4500",
        contents: [
          {kind: "block", type: "import_tensorflow"},
          {kind: "block", type: "define_sequential_model"},
          {kind: "block", type: "add_dense_layer"},
          {kind: "block", type: "compile_model"},
          {kind: "block", type: "define_conv2d_layer"},
          {kind: "block", type: "define_maxpooling2d_layer"},
          {kind: "block", type: "define_flatten_layer"},
          {kind: "block", type: "define_dropout_layer"},
          {kind: "block", type: "fit_model"},
          {kind: "block", type: "evaluate_model"},
          {kind: "block", type: "predict_with_model"},
          {kind: "block", type: "save_model"},
          {kind: "block", type: "load_model"},
          {kind: "block", type: "define_custom_layer"},
          {kind: "block", type: "define_custom_loss_function"},
          {kind: "block", type: "define_custom_metric_function"},
          {kind: "block", type: "define_custom_activation_function"},
          {kind: "block", type: "define_convolutional_layer"},
          {kind: "block", type: "define_maxpooling_layer"},
          {kind: "block", type: "define_flatten_layer"},
          {kind: "block", type: "define_dropout_layer"},
          {kind: "block", type: "define_lstm_layer"},
          {kind: "block", type: "define_gru_layer"},
          {kind: "block", type: "define_embedding_layer"},
          {kind: "block", type: "define_custom_optimizer"},
        ],
      },
      
      {
        kind: "category",
        "name": "Numpy",
        "colour": "#8A2BE2",
        "contents": [
          {kind: "block", type: "numpy_create_array"},
          {kind: "block", type: "numpy_reshape_array"},
          {kind: "block", type: "numpy_transpose_array"},
          {kind: "block", type: "numpy_random_normal"},
          {kind: "block", type: "numpy_random_uniform"},
          {kind: "block", type: "numpy_random_choice"},
          {kind: "block", type: "numpy_dot_product"},
          {kind: "block", type: "numpy_concatenate_arrays"},
          {kind: "block", type: "numpy_elementwise_addition"},
          {kind: "block", type: "numpy_elementwise_subtraction"},
          {kind: "block", type: "numpy_elementwise_multiplication"},
          {kind: "block", type: "numpy_elementwise_division"},
          { kind: "block", type: "numpy_mean" },
{ kind: "block", type: "numpy_sum" },
{ kind: "block", type: "numpy_max" },
{ kind: "block", type: "numpy_min" },
{ kind: "block", type: "numpy_std" },
{ kind: "block", type: "numpy_var" },
{ kind: "block", type: "numpy_sqrt" },
{ kind: "block", type: "numpy_log" },
{ kind: "block", type: "numpy_exp" },
{ kind: "block", type: "numpy_abs" },
{ kind: "block", type: "numpy_sin" },
{ kind: "block", type: "numpy_cos" },
{ kind: "block", type: "numpy_tan" },
{ kind: "block", type: "numpy_arcsin" },
{ kind: "block", type: "numpy_arccos" },
{ kind: "block", type: "numpy_arctan" },
{ kind: "block", type: "numpy_reshape_array" },
{ kind: "block", type: "numpy_transpose_array" },
{ kind: "block", type: "numpy_random_choice" },
{ kind: "block", type: "numpy_dot_product" },
{ kind: "block", type: "numpy_concatenate_arrays" },
{ kind: "block", type: "numpy_matrix_multiplication" },
{ kind: "block", type: "numpy_inverse" },
{ kind: "block", type: "numpy_determinant" },
{ kind: "block", type: "numpy_eigenvectors" },
{ kind: "block", type: "numpy_eigenvalues" },
{ kind: "block", type: "numpy_cross_product" },
{ kind: "block", type: "numpy_cumulative_sum" },
{ kind: "block", type: "numpy_sort" },
{ kind: "block", type: "numpy_unique" },
{ kind: "block", type: "numpy_argmin" },
{ kind: "block", type: "numpy_argmax" },
{ kind: "block", type: "numpy_bincount" },
{ kind: "block", type: "numpy_histogram" },
{ kind: "block", type: "numpy_diff" },
{ kind: "block", type: "numpy_roll" },
{ kind: "block", type: "numpy_flip" },
{ kind: "block", type: "numpy_fill_diagonal" }
        ]
      },
      
      {
        kind: "category",
        "name": "NLTK",
        "colour": "#4CAF50",
        "contents": [
          { kind: "block", type: "nltk_tokenize" },
          { kind: "block", type: "nltk_pos_tag" },
          { kind: "block", type: "nltk_sentiment_analysis" },
          { kind: "block", type: "nltk_wordnet_synonyms" },
          { kind: "block", type: "nltk_wordnet_antonyms" },
          { kind: "block", type: "nltk_wordnet_hyponyms" },
          { kind: "block", type: "nltk_wordnet_hypernyms" },
          { kind: "block", type: "nltk_wordnet_definitions" },
    { kind: "block", type: "nltk_wordnet_examples" },
    { kind: "block", type: "nltk_wordnet_hypernyms_path" },
    { kind: "block", type: "nltk_wordnet_hyponyms_path" },
    { kind: "block", type: "nltk_wordnet_similar_words" },
    { kind: "block", type: "nltk_wordnet_distance" },
    { kind: "block", type: "nltk_wordnet_depth" },
    { kind: "block", type: "nltk_wordnet_synonyms" },
    { kind: "block", type: "nltk_wordnet_antonyms" },
    { kind: "block", type: "nltk_wordnet_hypernyms" },
    { kind: "block", type: "nltk_wordnet_hyponyms" },
    { kind: "block", type: "nltk_wordnet_meronyms" },
    { kind: "block", type: "nltk_wordnet_holonyms" },
    { kind: "block", type: "nltk_tokenize_sentence" },
    { kind: "block", type: "nltk_tokenize_words" },
    { kind: "block", type: "nltk_tokenize_pos_tags" },
    { kind: "block", type: "nltk_tokenize_chunks" },
    { kind: "block", type: "nltk_lemmatize" },
    { kind: "block", type: "nltk_stemming" },
    { kind: "block", type: "nltk_stopwords_removal" },
    { kind: "block", type: "nltk_ngrams" },
    { kind: "block", type: "nltk_sentiment_analysis_vader" },
    { kind: "block", type: "nltk_chunking" },
    { kind: "block", type: "nltk_named_entity_recognition" },
    { kind: "block", type: "nltk_word_similarity" },
    { kind: "block", type: "nltk_concordance" },
    { kind: "block", type: "nltk_frequencies" },
    { kind: "block", type: "nltk_collocations" }
        ]
      },
      {
        kind: "category",
        "name": "Scikit-learn",
        "colour": "#FF5722",
        "contents": [
          { kind: "block", type: "sklearn_linear_regression" },
          { kind: "block", type: "sklearn_logistic_regression" },
          { kind: "block", type: "sklearn_decision_tree_classifier" },
          { kind: "block", type: "sklearn_random_forest_classifier" },
          { kind: "block", type: "sklearn_k_means_clustering" },
          { kind: "block", type: "sklearn_pca" },
          { kind: "block", type: "sklearn_svm_classifier" },
          { kind: "block", type: "sklearn_naive_bayes" },
          { kind: "block", type: "sklearn_grid_search" },
          { kind: "block", type: "sklearn_gradient_boosting_classifier" },
          { kind: "block", type: "sklearn_ada_boost_classifier" },
          { kind: "block", type: "sklearn_nearest_neighbors" },
          { kind: "block", type: "sklearn_linear_discriminant_analysis" },
          { kind: "block", type: "sklearn_one_class_svm" },
          { kind: "block", type: "sklearn_isolation_forest" },
          { kind: "block", type: "sklearn_dbscan" },
          { kind: "block", type: "sklearn_principal_component_analysis" },
          { kind: "block", type: "sklearn_t_distributed_stochastic_neighbor_embedding" },
          { kind: "block", type: "sklearn_label_propagation" },
          { kind: "block", type: "sklearn_linear_svc" }
        ]
      }
,      
  
{
  kind: "category",
  "name": "Django",
  "colour": "#FF9800",
  "contents": [
    { kind: "block", type: "django_create_project" },
    { kind: "block", type: "django_create_app" },
    { kind: "block", type: "django_create_model" },
    { kind: "block", type: "django_create_view" },
    { kind: "block", type: "django_create_template" },
    { kind: "block", type: "django_create_form" },
    { kind: "block", type: "django_create_serializer" },
    { kind: "block", type: "django_create_migration" },
    { kind: "block", type: "django_runserver" },
    { kind: "block", type: "django_makemigrations" },
    { kind: "block", type: "django_migrate" },
    { kind: "block", type: "django_createsuperuser" },
    { kind: "block", type: "django_manage" },
    { kind: "block", type: "django_collectstatic" },
    { kind: "block", type: "django_test" },
    { kind: "block", type: "django_shell" },
    { kind: "block", type: "django_dumpdata" },
    { kind: "block", type: "django_loaddata" },
    { kind: "block", type: "django_create_admin" },
    { kind: "block", type: "django_create_user" },
    { kind: "block", type: "django_create_group" },
    { kind: "block", type: "django_create_url" },
    { kind: "block", type: "django_create_template_tag" },
    { kind: "block", type: "django_create_management_command" },
    { kind: "block", type: "django_create_middleware" },
    { kind: "block", type: "django_create_signal" },
    { kind: "block", type: "django_create_custom_field" },
    { kind: "block", type: "django_create_admin_action" },
    { kind: "block", type: "django_create_cache_middleware" },
    { kind: "block", type: "django_create_authentication_backend" },
    { kind: "block", type: "django_create_management_form" },
    { kind: "block", type: "django_create_celery_task" },
    { kind: "block", type: "django_create_rest_api" }
  ]
},

{
  "kind": "category",
  "name": "Flask",
  "colour": "#FF5733",
  "contents": [
    {"kind": "block", "type": "flask_create_app"},
    {"kind": "block", "type": "flask_route"},
    {"kind": "block", "type": "flask_render_template"},
    {"kind": "block", "type": "flask_request"},
    {"kind": "block", "type": "flask_response"},
    {"kind": "block", "type": "flask_redirect"},
    {"kind": "block", "type": "flask_abort"},
    {"kind": "block", "type": "flask_sqlalchemy"},
    {"kind": "block", "type": "flask_login"},
    {"kind": "block", "type": "flask_wtf"},
    {"kind": "block", "type": "flask_mail"},
    {"kind": "block", "type": "flask_restful"},
    {"kind": "block", "type": "flask_cors"},
    {"kind": "block", "type": "flask_jwt_extended"},
    {"kind": "block", "type": "flask_socketio"},
    {"kind": "block", "type": "flask_marshmallow"},
    {"kind": "block", "type": "flask_bcrypt"},
    {"kind": "block", "type": "flask_redis"},
    {"kind": "block", "type": "flask_migrate"},
    {"kind": "block", "type": "flask_oauthlib"},
    {"kind": "block", "type": "flask_restx"},
    {"kind": "block", "type": "flask_debug_toolbar"},
    {"kind": "block", "type": "flask_limiter"},
    {"kind": "block", "type": "flask_pymongo"},
    {"kind": "block", "type": "flask_login_manager"},
    {"kind": "block", "type": "flask_simple_captcha"},
    {"kind": "block", "type": "flask_cache"},
    {"kind": "block", "type": "flask_apscheduler"},
    {"kind": "block", "type": "flask_compress"}
  ]
}
,

      {
        kind: "category",
        "name": "Open CV",
        "colour": "#00AEEF",
        "contents": [
          { kind: "block", type: "cv2_readimage", colour: "#6A5ACD" },
          { kind: "block", type: "cv2_showimage", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_waitkey", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_destroyall", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_imagewrite", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_capturevideo", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_videoread", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_cap_release", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_capturevideo_file", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_waitkey2", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_createimage", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_drawline", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_puttext", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_roi", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_roi_affect", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_convertimage", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_isopen", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_imageprop", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_imageadditionw", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_gettick", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_cascadeclassifier", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_detectmultiscale_1p", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_detectmultiscale_3p", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_calculatediffpercentage", "colour": "#6A5ACD" },
          { kind: "block", type: "qr_reader_decode", "colour": "#6A5ACD" },
          { kind: "block", type: "qr_reader_data", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_getproplist", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_getpropnum", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_Setproplist", "colour": "#6A5ACD" },
          { kind: "block", type: "cv2_SetpropVal", "colour": "#6A5ACD" },
          { kind: "block", type: "ocr_image_to_string", "colour": "#6A5ACD" },
          { kind: "block", type: "capture_image_stream", "colour": "#6A5ACD" }
        ]
      }
      
    ],
  };

  const handleModuleSelect = (index) => {
    setSelectedModuleIndex(index);
    setSelectedProject(null);
    setIsVisible(false);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsVisible(true);
  };

  const projectsData = selectedModuleIndex !== null ? modulesData[selectedModuleIndex].projects : [];

  const toggleVisibility = () => setIsVisible(!isVisible); // Toggle visibility state


  function workspaceDidChange(workspace) {
    const code = Blockly.Python.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const xmlContent = reader.result;
        loadWorkspaceFromXml(xmlContent);
      };
      reader.readAsText(file);
    }
  };
  
  const loadWorkspaceFromXml = (xmlContent) => {
    try {
      const xml = Blockly.Xml.textToDom(xmlContent);
      Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, BlocklyDuino.workspace);
    } catch (error) {
      console.error('Error loading XML:', error);
      // Handle the error, e.g., show an alert to the user
    }
  };

  // Function to handle opening the mini screen
  const handleOpenButtonClick = () => {
    setShowMiniScreen(!showMiniScreen); // Toggle the state of showMiniScreen
  };


  // Function to create a new workspace (reload the page)
  const createNewWorkspace = () => {
    window.location.reload(); // Reload the page
  };

 
 {/* const handleSelectImage = (imageUrl) => {
    console.log("Selected image URL:", imageUrl);
    // Ensure that the imageUrl is properly logged
    setSelectedImage(imageUrl); // Assuming you have state for selectedImage
  };
 
// Function to create a new empty workspace
{/*{const createNewWorkspace = () => {
  setTimeout(() => {
    const div = document.getElementById('blocklyDiv');
    if (div) {
      const newWorkspace = Blockly.inject(div, {
        toolbox: document.getElementById('toolbox'),
      });
      setWorkspace(newWorkspace);
    } else {
      console.error("blocklyDiv element not found");
    }
  }, 2000); // Delay in milliseconds
};

// Function to close the current workspace
const closeWorkspace = () => {
  if (workspace) {
    workspace.dispose(); // Dispose the current workspace
    setWorkspace(null); // Reset workspace state to null
  }
};

useEffect(() => {
  createNewWorkspace();
}, []);*/}

  const saveXmlFile = () => {
    const blob = new Blob([xml], { type: 'application/xml' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'workspace.xml';
    link.click();
  };

  const handleLogoutButtonClick = () => {
    navigate("/");
  };

  const savePyFile = (filename) => {
    const pythonCode = javascriptCode; // assuming javascriptCode holds the Python code
    const blob = new Blob([pythonCode], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    
    if (typeof filename !== 'string') {
        filename = 'python_code'; // Default filename if not provided or not a string
    }

    link.download = filename.endsWith('.py') ? filename : `${filename}.py`;
    link.click();
};

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn_saveino').addEventListener('click', function() {
      savePyFile('my_python_code');
  });
});



  
  const copyToClipboard = () => {
    const textarea = document.getElementById('code'); // Assuming 'code' is the ID of your textarea
    textarea.select();
    document.execCommand('copy');
  };
  
  const takeScreenshot = () => {
    const workspaceElement = workspaceRef.current ; // Replace with the actual class or ID of your BlocklyWorkspace
  
    if (workspaceElement) {
      setTimeout(() => {
        html2canvas(workspaceElement).then((canvas) => {
          const screenshotUrl = canvas.toDataURL('image/png');
          // Now you can save or display the screenshotUrl as needed
          // For example, you can create a link to download the image
          const link = document.createElement('a');
          link.href = screenshotUrl;
          link.download = 'workspace_screenshot.png';
          link.click();
        });
      }, 200);
    }
  };

  return (
    <>
    <input
  type="file"
  id="fileInput"
  ref={fileInputRef} 
  style={{ display: 'none' }} // Hide the input element
  onChange={handleFileInputChange}
/>
      <div>
        <div>
          <div className="div1">
            <table className="maintable">
              <tbody>
                <tr>
                  <td className="td1">
                    <div className="button-div">
                      <button title="New" className="b01" 
                      id="btn_new"
                      onClick={createNewWorkspace}
                      ></button>
                      
                      <button
                        onClick={() => setIsVisible(!isVisible)}
                        title="Open"
                        className="b02"
                        id="btn_fakeload"
                      ></button>

                      <button
                        title="Save.xml"
                        className="b03"
                        id="btn_savexml"
                        onClick={saveXmlFile}
                      ></button>
                      <button
                        id="btn_print"
                        title="Screenshot.png"
                        className="b04"
                        onClick={takeScreenshot}
                      ></button>
                     
                      <button
                        title="Arduino code preview"
                        className="b06"
                        id="btn_preview"
                        onClick={() => toggleModal()}
                      ></button>
                      <button
                        title="Logout"
                        className="b07"
                        id="btn_logout"
                        onClick={handleLogoutButtonClick}
                      ></button>
                    </div>
                  </td>
                  <td className="td2">
                    <div className="logo-div">
                      <img className="logo-main" alt="Code-Asthram-Logo" src={logo} />
                    </div>
                  </td>
                  <td>
                  <ParentComponent
        modulesData={modulesData}
        selectedModuleIndex={selectedModuleIndex}
        onSelectModule={handleModuleSelect}
        projectsData={projectsData}
        onSelectProject={handleProjectSelect}
      />
      {isVisible && selectedProject && (
        <FloatingScreen
          isVisible={isVisible}
          toggleVisibility={() => setIsVisible(false)}
          content={<img src={selectedProject.image} alt={selectedProject.name} style={{ width: '100%', height: 'auto' }} />}
          hints={selectedProject.hints || []}
        />
      )}
               {/*   <a className="projecthref" href="https://canvas.instructure.com/courses/9304102" target="_blank">projects</a>
*/}

                 
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

  
        <BlocklyWorkspace
          toolboxConfiguration={toolboxCategories}
          initialXml={initialXml}
          className="fill-height"
          workspaceConfiguration={{
            grid: {
              spacing: 20,
              length: 3,
              colour: "#002244 ",
              snap: true,
            },
          }}
          onWorkspaceChange={workspaceDidChange}
          onXmlChange={setXml}
          style={{backgroundColor: "#002244 ", border:"none"}}
        >
        <div
    slot="toolbox"
    style={{ overflowY: 'auto', maxHeight: '100vh' }}
  />
  </BlocklyWorkspace>

        <div id="toggle" className="modal-content" style={{ display: "none", top:"80px", bottom:"100px" }}>
          <pre id="pre_previewArduino">
            <textarea
              className="textarea"
              id="code"
              style={{
                height: "100%",
                width: "100%",
                boxSizing: "border-box",
                resize: "none",
                border: "none"
              }}
              value={javascriptCode}
              readOnly
            ></textarea>
          </pre>
          <div id="btn_group" class="btn-group" role="group">
            <button
              id="btn_saveino"
              class="btn btn-default"
              title="Save as .py"
              onClick={savePyFile}
            >
              <span class="fa fa-floppy-o"> </span>
            </button>
            <button id="btn_copy" class="btn btn-default" 
            onClick={copyToClipboard}
            title="Copy">
              <span class="fa fa-files-o"> </span>
            </button>
          </div>
        </div>
    {/* 
        {isVisible && selectedProject && (
        <div className="floating-screen">
          <img src={selectedProject.image} alt={selectedProject.name} style={{ width: '100%', height: 'auto' }} />
          <button onClick={toggleVisibility}>Close</button>
        </div>
      )}
       
    {/* Floating mini screen 
    {showMiniScreen && (
        <div className="floating-mini-screen">
          {/* Content of the mini screen */}
          {/* Here you can display media content such as images, videos, etc. 
          <img src="your_image_url.jpg" alt="Media" />
          <video controls>
            <source src="your_video_url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    */}
    </>
  );
}
