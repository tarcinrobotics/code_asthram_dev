import Blockly from "blockly";
import "blockly/python";


// Blockly Blocks
Blockly.Blocks['sklearn_linear_regression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Linear Regression");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Linear regression is a supervised learning algorithm used to predict a continuous value based on one or more input features.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sklearn_logistic_regression'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Logistic Regression");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Logistic regression is a supervised learning algorithm used for binary classification.");
    this.setHelpUrl("");
  }
};

  
  
  // Blockly Python
  Blockly.Python['sklearn_linear_regression'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for linear regression
    var code = 'from sklearn.linear_model import LinearRegression\n';
    code += 'model = LinearRegression()\n';
    code += 'model.fit(' + value_x + ', ' + value_y + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['sklearn_logistic_regression'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for logistic regression
    var code = 'from sklearn.linear_model import LogisticRegression\n';
    code += 'model = LogisticRegression()\n';
    code += 'model.fit(' + value_x + ', ' + value_y + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
// Blockly Blocks
Blockly.Blocks['sklearn_decision_tree_classifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Decision Tree Classifier");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Decision tree classifier is a supervised learning algorithm used for classification tasks.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sklearn_random_forest_classifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Random Forest Classifier");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Random forest classifier is an ensemble learning method used for classification tasks, which consists of a multitude of decision trees.");
    this.setHelpUrl("");
  }
};


  // Blockly Python
  Blockly.Python['sklearn_decision_tree_classifier'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for decision tree classifier
    var code = 'from sklearn.tree import DecisionTreeClassifier\n';
    code += 'model = DecisionTreeClassifier()\n';
    code += 'model.fit(' + value_x + ', ' + value_y + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['sklearn_random_forest_classifier'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for random forest classifier
    var code = 'from sklearn.ensemble import RandomForestClassifier\n';
    code += 'model = RandomForestClassifier()\n';
    code += 'model.fit(' + value_x + ', ' + value_y + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
 // Blockly Blocks
Blockly.Blocks['sklearn_k_means_clustering'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn K-Means Clustering");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("K-Means clustering is an unsupervised learning algorithm used for clustering tasks.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sklearn_pca'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Principal Component Analysis (PCA)");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Principal Component Analysis (PCA) is a dimensionality reduction technique used for feature extraction and data visualization.");
    this.setHelpUrl("");
  }
};

  
  // Blockly Python
  Blockly.Python['sklearn_k_means_clustering'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for K-Means clustering
    var code = 'from sklearn.cluster import KMeans\n';
    code += 'model = KMeans()\n';
    code += 'model.fit(' + value_x + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['sklearn_pca'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for PCA
    var code = 'from sklearn.decomposition import PCA\n';
    code += 'model = PCA()\n';
    code += 'model.fit(' + value_x + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
 // Blockly Blocks
Blockly.Blocks['sklearn_svm_classifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Support Vector Machine (SVM) Classifier");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Support Vector Machine (SVM) is a supervised learning algorithm used for classification tasks.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sklearn_naive_bayes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Naive Bayes Classifier");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Naive Bayes is a classification algorithm based on Bayes' theorem with an assumption of independence between features.");
    this.setHelpUrl("");
  }
};


  Blockly.Python['sklearn_svm_classifier'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for SVM classifier
    var code = 'from sklearn.svm import SVC\n';
    code += 'model = SVC()\n';
    code += 'model.fit(' + value_x + ', ' + value_y + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['sklearn_naive_bayes'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for Naive Bayes classifier
    var code = 'from sklearn.naive_bayes import GaussianNB\n';
    code += 'model = GaussianNB()\n';
    code += 'model.fit(' + value_x + ', ' + value_y + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  // Blockly Blocks
Blockly.Blocks['sklearn_k_means_clustering'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn K-Means Clustering");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("K-Means Clustering is an unsupervised learning algorithm used for clustering tasks.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sklearn_pca'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Principal Component Analysis (PCA)");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Principal Component Analysis (PCA) is a dimensionality reduction technique used to reduce the number of variables in the dataset while preserving its important characteristics.");
    this.setHelpUrl("");
  }
};

  Blockly.Python['sklearn_k_means_clustering'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for K-Means clustering
    var code = 'from sklearn.cluster import KMeans\n';
    code += 'model = KMeans()\n';
    code += 'model.fit(' + value_x + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['sklearn_pca'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for PCA
    var code = 'from sklearn.decomposition import PCA\n';
    code += 'model = PCA()\n';
    code += 'model.fit(' + value_x + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
 // Blockly Blocks
Blockly.Blocks['sklearn_grid_search'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Grid Search");
    this.appendValueInput("model")
        .setCheck("Model")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Model");
    this.appendValueInput("param_grid")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Parameter Grid");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Grid Search is used for hyperparameter tuning by exhaustively searching through a specified parameter grid.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sklearn_gradient_boosting_classifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Gradient Boosting Classifier");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Gradient Boosting Classifier is an ensemble learning method that builds a strong model by combining multiple weak models.");
    this.setHelpUrl("");
  }
};

  
  
  // Blockly Python
  Blockly.Python['sklearn_grid_search'] = function(block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_param_grid = Blockly.Python.valueToCode(block, 'param_grid', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for grid search
    var code = 'from sklearn.model_selection import GridSearchCV\n';
    code += 'grid_search = GridSearchCV(' + value_model + ', ' + value_param_grid + ')\n';
    code += 'grid_search.fit(X_train, y_train)\n'; // Assuming X_train, y_train are already defined
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['sklearn_gradient_boosting_classifier'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for Gradient Boosting classifier
    var code = 'from sklearn.ensemble import GradientBoostingClassifier\n';
    code += 'model = GradientBoostingClassifier()\n';
    code += 'model.fit(' + value_x + ', ' + value_y + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  
// Blockly Blocks
Blockly.Blocks['sklearn_ada_boost_classifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn AdaBoost Classifier");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("AdaBoost Classifier is an ensemble learning method that builds a strong model by combining multiple weak models.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sklearn_nearest_neighbors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Nearest Neighbors");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Nearest Neighbors is a method for classification and regression that operates by finding the most similar training instances to the new instance.");
    this.setHelpUrl("");
  }
};

  
  // Blockly Python
  Blockly.Python['sklearn_ada_boost_classifier'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for AdaBoost classifier
    var code = 'from sklearn.ensemble import AdaBoostClassifier\n';
    code += 'model = AdaBoostClassifier()\n';
    code += 'model.fit(' + value_x + ', ' + value_y + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['sklearn_nearest_neighbors'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for Nearest Neighbors
    var code = 'from sklearn.neighbors import KNeighborsClassifier\n';
    code += 'model = KNeighborsClassifier()\n';
    code += 'model.fit(' + value_x + ', ' + value_y + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  
// Blockly Blocks
Blockly.Blocks['sklearn_linear_discriminant_analysis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Linear Discriminant Analysis");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Linear Discriminant Analysis (LDA) is a method used in statistics and machine learning to find a linear combination of features that characterizes or separates classes.");
    this.setHelpUrl("");
  }
};

  // Blockly Python
  Blockly.Python['sklearn_linear_discriminant_analysis'] = function(block) {
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // Generate Python code for Linear Discriminant Analysis
    var code = 'from sklearn.discriminant_analysis import LinearDiscriminantAnalysis\n';
    code += 'model = LinearDiscriminantAnalysis()\n';
    code += 'model.fit(' + value_x + ', ' + value_y + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  
/// Blockly Blocks
Blockly.Blocks['sklearn_one_class_svm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn One-Class SVM");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("One-Class SVM is a method used for novelty detection, which involves identifying observations that deviate from the norm in a dataset.");
    this.setHelpUrl("");
  }
};

// Blockly Python
Blockly.Python['sklearn_one_class_svm'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  // Generate Python code for One-Class SVM
  var code = 'from sklearn.svm import OneClassSVM\n';
  code += 'model = OneClassSVM()\n';
  code += 'model.fit(' + value_x + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly Blocks
Blockly.Blocks['sklearn_isolation_forest'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Isolation Forest");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Isolation Forest is an algorithm used for anomaly detection by isolating anomalies in the dataset.");
    this.setHelpUrl("");
  }
};

// Blockly Python
Blockly.Python['sklearn_isolation_forest'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  // Generate Python code for Isolation Forest
  var code = 'from sklearn.ensemble import IsolationForest\n';
  code += 'model = IsolationForest()\n';
  code += 'model.fit(' + value_x + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly Blocks
Blockly.Blocks['sklearn_linear_discriminant_analysis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Linear Discriminant Analysis");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.appendValueInput("y")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Linear Discriminant Analysis (LDA) is a method used for dimensionality reduction and classification.");
    this.setHelpUrl("");
  }
};

// Blockly Python
Blockly.Python['sklearn_linear_discriminant_analysis'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  // Generate Python code for Linear Discriminant Analysis
  var code = 'from sklearn.discriminant_analysis import LinearDiscriminantAnalysis\n';
  code += 'model = LinearDiscriminantAnalysis()\n';
  code += 'model.fit(' + value_x + ', ' + value_y + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly Blocks
Blockly.Blocks['sklearn_dbscan'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn DBSCAN");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("DBSCAN (Density-Based Spatial Clustering of Applications with Noise) is a clustering algorithm based on density.");
    this.setHelpUrl("");
  }
};

// Blockly Python
Blockly.Python['sklearn_dbscan'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  // Generate Python code for DBSCAN
  var code = 'from sklearn.cluster import DBSCAN\n';
  code += 'model = DBSCAN()\n';
  code += 'model.fit(' + value_x + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly Blocks
Blockly.Blocks['sklearn_principal_component_analysis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Principal Component Analysis");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Principal Component Analysis (PCA) is a technique used for dimensionality reduction and feature extraction.");
    this.setHelpUrl("");
  }
};

// Blockly Python
Blockly.Python['sklearn_principal_component_analysis'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  // Generate Python code for PCA
  var code = 'from sklearn.decomposition import PCA\n';
  code += 'model = PCA()\n';
  code += 'model.fit(' + value_x + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly Blocks
Blockly.Blocks['sklearn_t_distributed_stochastic_neighbor_embedding'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn t-Distributed Stochastic Neighbor Embedding");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("t-Distributed Stochastic Neighbor Embedding (t-SNE) is a technique used for dimensionality reduction and visualization.");
    this.setHelpUrl("");
  }
};

// Blockly Python
Blockly.Python['sklearn_t_distributed_stochastic_neighbor_embedding'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  // Generate Python code for t-SNE
  var code = 'from sklearn.manifold import TSNE\n';
  code += 'model = TSNE()\n';
  code += 'model.fit(' + value_x + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly Blocks
Blockly.Blocks['sklearn_label_propagation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Label Propagation");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Label Propagation is a semi-supervised learning algorithm used for classification.");
    this.setHelpUrl("");
  }
};

// Blockly Python
Blockly.Python['sklearn_label_propagation'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  // Generate Python code for Label Propagation
  var code = 'from sklearn.semi_supervised import LabelPropagation\n';
  code += 'model = LabelPropagation()\n';
  code += 'model.fit(' + value_x + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly Blocks
Blockly.Blocks['sklearn_linear_svc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scikit-learn Linear SVC");
    this.appendValueInput("X")
        .setCheck("Array")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X");
    this.setOutput(true, "Model");
    this.setColour(230);
    this.setTooltip("Linear SVC (Support Vector Classifier) is a linear classification algorithm.");
    this.setHelpUrl("");
  }
};

// Blockly Python
Blockly.Python['sklearn_linear_svc'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  // Generate Python code for Linear SVC
  var code = 'from sklearn.svm import LinearSVC\n';
  code += 'model = LinearSVC()\n';
  code += 'model.fit(' + value_x + ')\n';
  return [code, Blockly.Python.ORDER_NONE];
};
