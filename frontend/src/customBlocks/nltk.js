import Blockly from "blockly";
import "blockly/python";


// Blockly Blocks
Blockly.Blocks['nltk_tokenize'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField("Tokenize Text");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Tokenizes the input text into individual words or tokens.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['nltk_pos_tag'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField("POS Tagging of Text");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Performs part-of-speech tagging on the input text.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['nltk_sentiment_analysis'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField("Sentiment Analysis of Text");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("Analyzes the sentiment of the input text and returns a sentiment score.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['nltk_wordnet_synonyms'] = {
  init: function() {
    this.appendValueInput("word")
        .setCheck("String")
        .appendField("Get Synonyms of Word");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Retrieves synonyms of the input word using WordNet.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['nltk_wordnet_antonyms'] = {
  init: function() {
    this.appendValueInput("word")
        .setCheck("String")
        .appendField("Get Antonyms of Word");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Retrieves antonyms of the input word using WordNet.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['nltk_wordnet_hyponyms'] = {
  init: function() {
    this.appendValueInput("word")
        .setCheck("String")
        .appendField("Get Hyponyms of Word");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Retrieves hyponyms of the input word using WordNet.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['nltk_wordnet_hypernyms'] = {
  init: function() {
    this.appendValueInput("word")
        .setCheck("String")
        .appendField("Get Hypernyms of Word");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Retrieves hypernyms of the input word using WordNet.");
    this.setHelpUrl("");
  }
};

  // Blockly Python Definitions
  Blockly.Python['nltk_tokenize'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.word_tokenize(' + value_text + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['nltk_pos_tag'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.pos_tag(' + value_text + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['nltk_sentiment_analysis'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.sentiment_analysis(' + value_text + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['nltk_wordnet_synonyms'] = function(block) {
    var value_word = Blockly.Python.valueToCode(block, 'word', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.wordnet.synsets(' + value_word + ')[0].lemma_names()';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['nltk_wordnet_antonyms'] = function(block) {
    var value_word = Blockly.Python.valueToCode(block, 'word', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.wordnet.synsets(' + value_word + ')[0].lemmas()[0].antonyms()';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['nltk_wordnet_hyponyms'] = function(block) {
    var value_word = Blockly.Python.valueToCode(block, 'word', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.wordnet.synsets(' + value_word + ')[0].hyponyms()';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['nltk_wordnet_hypernyms'] = function(block) {
    var value_word = Blockly.Python.valueToCode(block, 'word', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.wordnet.synsets(' + value_word + ')[0].hypernyms()';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
 // Blockly Blocks
Blockly.Blocks['nltk_wordnet_definitions'] = {
  init: function() {
    this.appendValueInput("word")
        .setCheck("String")
        .appendField("Get Definitions of Word");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Retrieves definitions of the input word from WordNet.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['nltk_wordnet_examples'] = {
  init: function() {
    this.appendValueInput("word")
        .setCheck("String")
        .appendField("Get Examples of Word");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Retrieves examples of the input word from WordNet.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['nltk_wordnet_hypernyms_path'] = {
  init: function() {
    this.appendValueInput("word")
        .setCheck("String")
        .appendField("Get Hypernyms Path of Word");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Retrieves the path of hypernyms of the input word from WordNet.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['nltk_wordnet_hyponyms_path'] = {
  init: function() {
    this.appendValueInput("word")
        .setCheck("String")
        .appendField("Get Hyponyms Path of Word");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Retrieves the path of hyponyms of the input word from WordNet.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['nltk_wordnet_similar_words'] = {
  init: function() {
    this.appendValueInput("word")
        .setCheck("String")
        .appendField("Get Similar Words");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Retrieves words similar to the input word from WordNet.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['nltk_wordnet_distance'] = {
  init: function() {
    this.appendValueInput("word1")
        .setCheck("String")
        .appendField("Get WordNet Distance between Words");
    this.appendValueInput("word2")
        .setCheck("String")
        .appendField("and");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("Calculates the WordNet distance between the two input words.");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['nltk_wordnet_depth'] = {
  init: function() {
    this.appendValueInput("word")
        .setCheck("String")
        .appendField("Get WordNet Depth of Word");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("Calculates the WordNet depth of the input word.");
    this.setHelpUrl("");
  }
};

  // Blockly Python Definitions
  Blockly.Python['nltk_wordnet_definitions'] = function(block) {
    var value_word = Blockly.Python.valueToCode(block, 'word', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.wordnet.synsets(' + value_word + ')[0].definition()';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['nltk_wordnet_examples'] = function(block) {
    var value_word = Blockly.Python.valueToCode(block, 'word', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.wordnet.synsets(' + value_word + ')[0].examples()';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['nltk_wordnet_hypernyms_path'] = function(block) {
    var value_word = Blockly.Python.valueToCode(block, 'word', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.wordnet.synsets(' + value_word + ')[0].hypernym_paths()';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['nltk_wordnet_hyponyms_path'] = function(block) {
    var value_word = Blockly.Python.valueToCode(block, 'word', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.wordnet.synsets(' + value_word + ')[0].hyponym_paths()';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['nltk_wordnet_similar_words'] = function(block) {
    var value_word = Blockly.Python.valueToCode(block, 'word', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.wordnet.synsets(' + value_word + ')[0].lemmas()[0].similar_tos()';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['nltk_wordnet_distance'] = function(block) {
    var value_word1 = Blockly.Python.valueToCode(block, 'word1', Blockly.Python.ORDER_ATOMIC);
    var value_word2 = Blockly.Python.valueToCode(block, 'word2', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.wordnet.synsets(' + value_word1 + ')[0].shortest_path_distance(nltk.wordnet.synsets(' + value_word2 + ')[0])';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Python['nltk_wordnet_depth'] = function(block) {
    var value_word = Blockly.Python.valueToCode(block, 'word', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk.wordnet.synsets(' + value_word + ')[0].min_depth()';
    return [code, Blockly.Python.ORDER_NONE];
  };

 // NLTK WordNet Synonyms
Blockly.Blocks['nltk_wordnet_synonyms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("NLTK WordNet Synonyms of")
        .appendField(new Blockly.FieldTextInput("word"), "word");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Retrieves synonyms of the input word from NLTK WordNet.");
    this.setHelpUrl("");
  }
};

  
  Blockly.Python['nltk_wordnet_synonyms'] = function(block) {
    var text_word = block.getFieldValue('word');
    var code = 'nltk.corpus.wordnet.synsets("' + text_word + '")[0].lemma_names()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
 // NLTK WordNet Antonyms
Blockly.Blocks['nltk_wordnet_antonyms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("NLTK WordNet Antonyms of")
        .appendField(new Blockly.FieldTextInput("word"), "word");
    this.setOutput(true, "Array");
    this.setColour(120);
    this.setTooltip("Retrieves antonyms of the input word from NLTK WordNet.");
    this.setHelpUrl("");
  }
};

  Blockly.Python['nltk_wordnet_antonyms'] = function(block) {
    var text_word = block.getFieldValue('word');
    var code = 'nltk.corpus.wordnet.synsets("' + text_word + '")[0].lemmas()[0].antonyms()[0].name()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK WordNet Hypernyms
  Blockly.Blocks['nltk_wordnet_hypernyms'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK WordNet Hypernyms of")
          .appendField(new Blockly.FieldTextInput("word"), "word");
      this.setOutput(true, "Array");
      this.setColour(120);
      this.setTooltip("Get hypernyms of a word from NLTK WordNet");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_wordnet_hypernyms'] = function(block) {
    var text_word = block.getFieldValue('word');
    var code = 'nltk.corpus.wordnet.synsets("' + text_word + '")[0].hypernyms()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK WordNet Hyponyms
  Blockly.Blocks['nltk_wordnet_hyponyms'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK WordNet Hyponyms of")
          .appendField(new Blockly.FieldTextInput("word"), "word");
      this.setOutput(true, "Array");
      this.setColour(120);
      this.setTooltip("Get hyponyms of a word from NLTK WordNet");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_wordnet_hyponyms'] = function(block) {
    var text_word = block.getFieldValue('word');
    var code = 'nltk.corpus.wordnet.synsets("' + text_word + '")[0].hyponyms()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK WordNet Meronyms
  Blockly.Blocks['nltk_wordnet_meronyms'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK WordNet Meronyms of")
          .appendField(new Blockly.FieldTextInput("word"), "word");
      this.setOutput(true, "Array");
      this.setColour(120);
      this.setTooltip("Get meronyms of a word from NLTK WordNet");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_wordnet_meronyms'] = function(block) {
    var text_word = block.getFieldValue('word');
    var code = 'nltk.corpus.wordnet.synsets("' + text_word + '")[0].part_meronyms()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK WordNet Holonyms
  Blockly.Blocks['nltk_wordnet_holonyms'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK WordNet Holonyms of")
          .appendField(new Blockly.FieldTextInput("word"), "word");
      this.setOutput(true, "Array");
      this.setColour(120);
      this.setTooltip("Get holonyms of a word from NLTK WordNet");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_wordnet_holonyms'] = function(block) {
    var text_word = block.getFieldValue('word');
    var code = 'nltk.corpus.wordnet.synsets("' + text_word + '")[0].part_holonyms()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK Tokenize Sentence
  Blockly.Blocks['nltk_tokenize_sentence'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Tokenize Sentence of")
          .appendField(new Blockly.FieldTextInput("text"), "text");
      this.setOutput(true, "Array");
      this.setColour(120);
      this.setTooltip("Tokenize sentence using NLTK");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_tokenize_sentence'] = function(block) {
    var text_text = block.getFieldValue('text');
    var code = 'nltk.sent_tokenize("' + text_text + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK Tokenize Words
  Blockly.Blocks['nltk_tokenize_words'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Tokenize Words of")
          .appendField(new Blockly.FieldTextInput("text"), "text");
      this.setOutput(true, "Array");
      this.setColour(120);
      this.setTooltip("Tokenize words using NLTK");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_tokenize_words'] = function(block) {
    var text_text = block.getFieldValue('text');
    var code = 'nltk.word_tokenize("' + text_text + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK Tokenize POS Tags
  Blockly.Blocks['nltk_tokenize_pos_tags'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Tokenize POS Tags of")
          .appendField(new Blockly.FieldTextInput("text"), "text");
      this.setOutput(true, "Array");
      this.setColour(120);
      this.setTooltip("Tokenize words with part-of-speech tags using NLTK");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_tokenize_pos_tags'] = function(block) {
    var text_text = block.getFieldValue('text');
    var code = 'nltk.pos_tag(nltk.word_tokenize("' + text_text + '"))';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK Tokenize Chunks
  Blockly.Blocks['nltk_tokenize_chunks'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Tokenize Chunks of")
          .appendField(new Blockly.FieldTextInput("text"), "text");
      this.setOutput(true, "Array");
      this.setColour(120);
      this.setTooltip("Tokenize chunks using NLTK");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_tokenize_chunks'] = function(block) {
    var text_text = block.getFieldValue('text');
    var code = 'nltk.chunk.ne_chunk(nltk.pos_tag(nltk.word_tokenize("' + text_text + '")))';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK Lemmatize
  Blockly.Blocks['nltk_lemmatize'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Lemmatize Word")
          .appendField(new Blockly.FieldTextInput("word"), "word");
      this.setOutput(true, "String");
      this.setColour(120);
      this.setTooltip("Lemmatize a word using NLTK");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_lemmatize'] = function(block) {
    var text_word = block.getFieldValue('word');
    var code = 'nltk.stem.WordNetLemmatizer().lemmatize("' + text_word + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK Stemming
  Blockly.Blocks['nltk_stemming'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Stem Word")
          .appendField(new Blockly.FieldTextInput("word"), "word");
      this.setOutput(true, "String");
      this.setColour(120);
      this.setTooltip("Stem a word using NLTK");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_stemming'] = function(block) {
    var text_word = block.getFieldValue('word');
    var code = 'nltk.stem.PorterStemmer().stem("' + text_word + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK Remove Stopwords
  Blockly.Blocks['nltk_stopwords_removal'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Remove Stopwords from")
          .appendField(new Blockly.FieldTextInput("text"), "text");
      this.setOutput(true, "Array");
      this.setColour(120);
      this.setTooltip("Remove stopwords using NLTK");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_stopwords_removal'] = function(block) {
    var text_text = block.getFieldValue('text');
    var code = '[word for word in nltk.word_tokenize("' + text_text + '") if word.lower() not in nltk.corpus.stopwords.words("english")]';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK N-Grams
  Blockly.Blocks['nltk_ngrams'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK N-Grams of")
          .appendField(new Blockly.FieldTextInput("text"), "text")
          .appendField("with n =")
          .appendField(new Blockly.FieldNumber(2, 2), "n");
      this.setOutput(true, "Array");
      this.setColour(120);
      this.setTooltip("Generate N-grams using NLTK");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_ngrams'] = function(block) {
    var text_text = block.getFieldValue('text');
    var number_n = block.getFieldValue('n');
    var code = 'list(nltk.ngrams(nltk.word_tokenize("' + text_text + '"), ' + number_n + '))';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  // NLTK Sentiment Analysis (VADER)
  Blockly.Blocks['nltk_sentiment_analysis_vader'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Sentiment Analysis (VADER) of")
          .appendField(new Blockly.FieldTextInput("text"), "text");
      this.setOutput(true, "String");
      this.setColour(120);
      this.setTooltip("Perform sentiment analysis using VADER tool from NLTK");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_sentiment_analysis_vader'] = function(block) {
    var text_text = block.getFieldValue('text');
    var code = 'nltk.sentiment.vader.SentimentIntensityAnalyzer().polarity_scores("' + text_text + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['nltk_chunking'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Chunking");
      this.appendValueInput("text")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Text");
      this.setOutput(true, "Array");
      this.setColour(160);
      this.setTooltip("NLTK Chunking");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_chunking'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk_chunking(' + value_text + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['nltk_named_entity_recognition'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Named Entity Recognition");
      this.appendValueInput("text")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Text");
      this.setOutput(true, "Array");
      this.setColour(160);
      this.setTooltip("NLTK Named Entity Recognition");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_named_entity_recognition'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk_named_entity_recognition(' + value_text + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['nltk_word_similarity'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Word Similarity");
      this.appendValueInput("word1")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Word 1");
      this.appendValueInput("word2")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Word 2");
      this.setOutput(true, "Number");
      this.setColour(160);
      this.setTooltip("NLTK Word Similarity");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_word_similarity'] = function(block) {
    var value_word1 = Blockly.Python.valueToCode(block, 'word1', Blockly.Python.ORDER_ATOMIC);
    var value_word2 = Blockly.Python.valueToCode(block, 'word2', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk_word_similarity(' + value_word1 + ', ' + value_word2 + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['nltk_concordance'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Concordance");
      this.appendValueInput("text")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Text");
      this.appendValueInput("word")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Word");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("NLTK Concordance");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_concordance'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var value_word = Blockly.Python.valueToCode(block, 'word', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk_concordance(' + value_text + ', ' + value_word + ')\n';
    return code;
  };
  
  Blockly.Blocks['nltk_frequencies'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Frequencies");
      this.appendValueInput("text")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Text");
      this.setOutput(true, "Dictionary");
      this.setColour(160);
      this.setTooltip("NLTK Frequencies");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_frequencies'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk_frequencies(' + value_text + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  
  Blockly.Blocks['nltk_collocations'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("NLTK Collocations");
      this.appendValueInput("text")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Text");
      this.setOutput(true, "Array");
      this.setColour(160);
      this.setTooltip("NLTK Collocations");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Python['nltk_collocations'] = function(block) {
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var code = 'nltk_collocations(' + value_text + ')';
    return [code, Blockly.Python.ORDER_NONE];
  };
  