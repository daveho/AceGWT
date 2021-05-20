// START -- define('ace/mode/rion_highlight_rules')
define('ace/mode/rion_highlight_rules', function(require, exports, module) {

var oop = require("ace/lib/oop");
var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;


/* --------------------- START ----------------------------- */
var RionHighlightRules = function() {
this.$rules = {
"start" : [
   {
      "token" : "comment.line",
      "regex" : "((?:(?:#)|(?:\\@\\@)|(?:\\/\\/)).*)$"
   },
   {
      "token" : "comment.line",
      "regex" : "(/\\*)",
      "push" : "uid_multi_line_comment_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(/)(?!\\*)"
   },
   {
      "token" : ["storage.type", "text", "keyword.operator", "text", "storage.type", "text", "keyword.operator", "storage.type", "keyword.operator", "text", "keyword.operator"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|$)))(?:(?:(\\s*)(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)(\\s*)(\\[)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]*)(\\])(\\s*)(\\{)",
      "push" : "uid_sausage_x"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator", "text"],
      "regex" : "(=)(\\s*)(\\[)(\\s*)",
      "push" : "attribute_multivalue_semicolon_delimited__1"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator", "text", "storage.type"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|$)))(?:(?:(\\s*)(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)"
   },
   {
      "token" : ["storage.type", "text", "keyword.operator"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(\\{|;|/)",
      "push" : "uid_sausage_2"
   },
   {
      "token" : "variable.language",
      "regex" : "^(\\s*[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+\\s*)(?=(?:\\s*)(?:\"|$))$"
   },
   {
      "token" : "storage.type",
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?=(?:\\s*)(?:\"|$))"
   },
   {
      "token" : ["storage.type", "text", "variable.language"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "text", "storage.type"],
      "regex" : "(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(>=|=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multi_line"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(`=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multiline_no_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\\\\\=)(\\s*)",
      "push" : "uid_regex_without_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\=)(\\s*)",
      "push" : "uid_regex_with_script"
   },
   {
      "token" : ["keyword.operator", "text", "constant.language", "text", "keyword.operator", "text", "constant.language", "text"],
      "regex" : "(\\@=)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(,)?(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)(?!\\s*[\\\"\\`\\[\\'])",
      "push" : "uid_pronto"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)"
   },
   {
      "token" : ["invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal"],
      "regex" : "(\\[)(\\s*)(\\])(\\s*)(=)(?!\\s*\\{)(.*)"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator", "text", "keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\[)(\\s*)(\\])(\\s*)(=)(\\s*)(\\{)",
      "push" : "uid_attribute_multivalue_matrix"
   },
   {
      "token" : ["keyword.operator", "storage.type", "keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\[)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]*)(\\])(\\s*)(\\{)",
      "push" : "uid_lonely_tarsier"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\{)",
      "push" : "uid_inner_brace_bracket"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\()",
      "push" : "uid_spain"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "push" : "uid_start_quoted_text"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`\\`\\`)",
      "push" : "uid_tick6"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "push" : "uid_tick5"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "push" : "uid_tick4"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`)",
      "push" : "uid_tick3"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`)",
      "push" : "uid_tick2"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`)",
      "push" : "uid_tick1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\'\\')",
      "push" : "uid_squote_6"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\')",
      "push" : "uid_squote_5"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\')",
      "push" : "uid_squote_4"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\')",
      "push" : "uid_squote_3"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\')",
      "push" : "uid_squote_2"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\')",
      "push" : "uid_squote_1"
   },
   {
      "token" : ["keyword.operator", "string.unquoted", "keyword.operator"],
      "regex" : "(\\?)((?=\\s*\\$).*)(\\{)",
      "push" : "uid_devonshire"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\?)(\\s*)(\\[)",
      "push" : "in_square_brackets"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\)(\\s*)$",
      "push" : "multi_line_attribute_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\<--)",
      "push" : "uid_import_start"
   },
   {
      "token" : "comment.line",
      "regex" : "^(%.*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(@)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(,|\\[|\\]|::|;)"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator", "text", "invalid.illegal", "invalid.illegal"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)(=)(\\s*)(\\')(.*)"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "([^\\s]+)"
   },
   {
      defaultToken : "text",
   }
], 
"attribute_multivalue_semicolon_delimited__1" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\])",
      "next" : "pop"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(,)"
   },
   {
      "token" : "comment.line",
      "regex" : "((?:(?:#)|(?:\\@\\@)|(?:\\/\\/)).*)$"
   },
   {
      "token" : "comment.line",
      "regex" : "(/\\*)",
      "push" : "uid_multi_line_comment_content"
   },
   {
      "token" : "entity.other",
      "regex" : "(\\\\X)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\u0000-\\u002d\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007f\\u0080-\\u009f\\u2028-\\u2029\\ud800-\\udfff\\ufffe-\\uffff](?:[^\\u0000-\\u0008\\u0010-\\u001f,\\];/\\$\\\\\\u007f-\\u009f\\u2028-\\u2029\\ud800-\\udfff\\ufffe-\\uffff])*)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "push" : "uid_start_quoted_text"
   },
   {
      defaultToken : "text",
   }
], 
"in_square_brackets" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\])",
      "next" : "pop"
   },
   {
      "token" : "constant.language",
      "regex" : "([%_0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd])"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(,)"
   },
   {
      "token" : "constant.language",
      "regex" : "(\\!)"
   },
   {
      defaultToken : "text",
   }
], 
"multi_line_attribute_content" : [
   {
      "token" : ["text", "keyword.operator", "text"],
      "regex" : "^(\\s*)(\\\\)(\\s*)$",
      "next" : "pop"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\$\\\\\\\"]+)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\u(?:[0-9a-f]{4}))"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\x(?:[0-9a-f]{2}))"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(A@])"
   },
   {
      "token" : "entity.other",
      "regex" : "(\\\\X)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\$|\\\")"
   },
   {
      defaultToken : "text",
   }
], 
"script_block_2" : [
   {
      "token" : "markup.bold",
      "regex" : "(\\})",
      "next" : "pop"
   },
   {
      "token" : "entity.other",
      "regex" : "(\\\\X)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "push" : "uid_start_quoted_text"
   },
   {
      "token" : "markup.bold",
      "regex" : "([^}\"\\\\]+)"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\\\)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_attribute_multivalue_matrix" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\})",
      "next" : "pop"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(>=|=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multi_line"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(`=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multiline_no_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\\\\\=)(\\s*)",
      "push" : "uid_regex_without_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\=)(\\s*)",
      "push" : "uid_regex_with_script"
   },
   {
      "token" : ["keyword.operator", "text", "constant.language", "text", "keyword.operator", "text", "constant.language", "text"],
      "regex" : "(\\@=)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(,)?(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)(?!\\s*[\\\"\\`\\[\\'])",
      "push" : "uid_pronto"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "push" : "uid_start_quoted_text"
   },
   {
      "token" : "comment.line",
      "regex" : "((?:(?:#)|(?:\\@\\@)|(?:\\/\\/)).*)$"
   },
   {
      "token" : "comment.line",
      "regex" : "(/\\*)",
      "push" : "uid_multi_line_comment_content"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\u0000-\\u002d\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007f\\u0080-\\u009f\\u2028-\\u2029\\ud800-\\udfff\\ufffe-\\uffff](?:[^\\u0000-\\u0008\\u0010-\\u001f,\\];/\\$\\\\\\u007f-\\u009f\\u2028-\\u2029\\ud800-\\udfff\\ufffe-\\uffff])*)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\u(?:[0-9a-f]{4}))"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\x(?:[0-9a-f]{2}))"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(A@])"
   },
   {
      "token" : "entity.other",
      "regex" : "(\\\\X)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(,)"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "([^\\s])"
   },
   {
      defaultToken : "text",
   }
], 
"uid_attribute_single_value_multi_line" : [
   {
      "token" : ["text", "keyword.operator", "text"],
      "regex" : "^(\\s*)(\\\\)(\\s*)$",
      "next" : "pop"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\$\\\\\\\"]+)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\u(?:[0-9a-f]{4}))"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\x(?:[0-9a-f]{2}))"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(A@])"
   },
   {
      "token" : "entity.other",
      "regex" : "(\\\\X)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\$|\\\")"
   },
   {
      defaultToken : "text",
   }
], 
"uid_attribute_single_value_multiline_no_script" : [
   {
      "token" : ["text", "keyword.operator", "text"],
      "regex" : "^(\\s*)(\\\\)(\\s*)$",
      "next" : "pop"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\$\\\\\\\"]+)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\u(?:[0-9a-f]{4}))"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\x(?:[0-9a-f]{2}))"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(A@])"
   },
   {
      "token" : "entity.other",
      "regex" : "(\\\\X)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\$|\\\")"
   },
   {
      defaultToken : "text",
   }
], 
"uid_devonshire" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\})",
      "next" : "pop"
   },
   {
      "token" : "comment.line",
      "regex" : "((?:(?:#)|(?:\\@\\@)|(?:\\/\\/)).*)$"
   },
   {
      "token" : "comment.line",
      "regex" : "(/\\*)",
      "push" : "uid_multi_line_comment_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(/)(?!\\*)"
   },
   {
      "token" : ["storage.type", "text", "keyword.operator", "text", "storage.type", "text", "keyword.operator", "storage.type", "keyword.operator", "text", "keyword.operator"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|$)))(?:(?:(\\s*)(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)(\\s*)(\\[)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]*)(\\])(\\s*)(\\{)",
      "push" : "uid_sausage_x"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator", "text"],
      "regex" : "(=)(\\s*)(\\[)(\\s*)",
      "push" : "attribute_multivalue_semicolon_delimited__1"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator", "text", "storage.type"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|$)))(?:(?:(\\s*)(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)"
   },
   {
      "token" : ["storage.type", "text", "keyword.operator"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(\\{|;|/)",
      "push" : "uid_sausage_2"
   },
   {
      "token" : "variable.language",
      "regex" : "^(\\s*[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+\\s*)(?=(?:\\s*)(?:\"|$))$"
   },
   {
      "token" : "storage.type",
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?=(?:\\s*)(?:\"|$))"
   },
   {
      "token" : ["storage.type", "text", "variable.language"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "text", "storage.type"],
      "regex" : "(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(>=|=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multi_line"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(`=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multiline_no_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\\\\\=)(\\s*)",
      "push" : "uid_regex_without_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\=)(\\s*)",
      "push" : "uid_regex_with_script"
   },
   {
      "token" : ["keyword.operator", "text", "constant.language", "text", "keyword.operator", "text", "constant.language", "text"],
      "regex" : "(\\@=)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(,)?(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)(?!\\s*[\\\"\\`\\[\\'])",
      "push" : "uid_pronto"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)"
   },
   {
      "token" : ["invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal"],
      "regex" : "(\\[)(\\s*)(\\])(\\s*)(=)(?!\\s*\\{)(.*)"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator", "text", "keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\[)(\\s*)(\\])(\\s*)(=)(\\s*)(\\{)",
      "push" : "uid_attribute_multivalue_matrix"
   },
   {
      "token" : ["keyword.operator", "storage.type", "keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\[)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]*)(\\])(\\s*)(\\{)",
      "push" : "uid_lonely_tarsier"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\{)",
      "push" : "uid_inner_brace_bracket"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\()",
      "push" : "uid_spain"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "push" : "uid_start_quoted_text"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`\\`\\`)",
      "push" : "uid_tick6"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "push" : "uid_tick5"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "push" : "uid_tick4"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`)",
      "push" : "uid_tick3"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`)",
      "push" : "uid_tick2"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`)",
      "push" : "uid_tick1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\'\\')",
      "push" : "uid_squote_6"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\')",
      "push" : "uid_squote_5"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\')",
      "push" : "uid_squote_4"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\')",
      "push" : "uid_squote_3"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\')",
      "push" : "uid_squote_2"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\')",
      "push" : "uid_squote_1"
   },
   {
      "token" : ["keyword.operator", "string.unquoted", "keyword.operator"],
      "regex" : "(\\?)((?=\\s*\\$).*)(\\{)",
      "push" : "uid_devonshire"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\?)(\\s*)(\\[)",
      "push" : "in_square_brackets"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\)(\\s*)$",
      "push" : "multi_line_attribute_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\<--)",
      "push" : "uid_import_start"
   },
   {
      "token" : "comment.line",
      "regex" : "^(%.*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(@)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(,|\\[|\\]|::|;)"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator", "text", "invalid.illegal", "invalid.illegal"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)(=)(\\s*)(\\')(.*)"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "([^\\s]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_import_start" : [
   {
      "token" : "text",
      "regex" : "(^(?=.{0,1})(?:|))",
      "next" : "pop"
   },
   {
      "token" : "constant.language",
      "regex" : "(\\!|\\?)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "push" : "uid_import_within_quotes"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "([^\\s]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_import_within_quotes" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "next" : "pop"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "(^.*)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_inner_brace_bracket" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\})",
      "next" : "pop"
   },
   {
      "token" : "comment.line",
      "regex" : "((?:(?:#)|(?:\\@\\@)|(?:\\/\\/)).*)$"
   },
   {
      "token" : "comment.line",
      "regex" : "(/\\*)",
      "push" : "uid_multi_line_comment_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(/)(?!\\*)"
   },
   {
      "token" : ["storage.type", "text", "keyword.operator", "text", "storage.type", "text", "keyword.operator", "storage.type", "keyword.operator", "text", "keyword.operator"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|$)))(?:(?:(\\s*)(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)(\\s*)(\\[)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]*)(\\])(\\s*)(\\{)",
      "push" : "uid_sausage_x"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator", "text"],
      "regex" : "(=)(\\s*)(\\[)(\\s*)",
      "push" : "attribute_multivalue_semicolon_delimited__1"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator", "text", "storage.type"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|$)))(?:(?:(\\s*)(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)"
   },
   {
      "token" : ["storage.type", "text", "keyword.operator"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(\\{|;|/)",
      "push" : "uid_sausage_2"
   },
   {
      "token" : "variable.language",
      "regex" : "^(\\s*[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+\\s*)(?=(?:\\s*)(?:\"|$))$"
   },
   {
      "token" : "storage.type",
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?=(?:\\s*)(?:\"|$))"
   },
   {
      "token" : ["storage.type", "text", "variable.language"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "text", "storage.type"],
      "regex" : "(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(>=|=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multi_line"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(`=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multiline_no_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\\\\\=)(\\s*)",
      "push" : "uid_regex_without_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\=)(\\s*)",
      "push" : "uid_regex_with_script"
   },
   {
      "token" : ["keyword.operator", "text", "constant.language", "text", "keyword.operator", "text", "constant.language", "text"],
      "regex" : "(\\@=)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(,)?(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)(?!\\s*[\\\"\\`\\[\\'])",
      "push" : "uid_pronto"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)"
   },
   {
      "token" : ["invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal"],
      "regex" : "(\\[)(\\s*)(\\])(\\s*)(=)(?!\\s*\\{)(.*)"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator", "text", "keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\[)(\\s*)(\\])(\\s*)(=)(\\s*)(\\{)",
      "push" : "uid_attribute_multivalue_matrix"
   },
   {
      "token" : ["keyword.operator", "storage.type", "keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\[)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]*)(\\])(\\s*)(\\{)",
      "push" : "uid_lonely_tarsier"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\{)",
      "push" : "uid_inner_brace_bracket"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\()",
      "push" : "uid_spain"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "push" : "uid_start_quoted_text"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`\\`\\`)",
      "push" : "uid_tick6"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "push" : "uid_tick5"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "push" : "uid_tick4"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`)",
      "push" : "uid_tick3"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`)",
      "push" : "uid_tick2"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`)",
      "push" : "uid_tick1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\'\\')",
      "push" : "uid_squote_6"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\')",
      "push" : "uid_squote_5"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\')",
      "push" : "uid_squote_4"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\')",
      "push" : "uid_squote_3"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\')",
      "push" : "uid_squote_2"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\')",
      "push" : "uid_squote_1"
   },
   {
      "token" : ["keyword.operator", "string.unquoted", "keyword.operator"],
      "regex" : "(\\?)((?=\\s*\\$).*)(\\{)",
      "push" : "uid_devonshire"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\?)(\\s*)(\\[)",
      "push" : "in_square_brackets"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\)(\\s*)$",
      "push" : "multi_line_attribute_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\<--)",
      "push" : "uid_import_start"
   },
   {
      "token" : "comment.line",
      "regex" : "^(%.*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(@)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(,|\\[|\\]|::|;)"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator", "text", "invalid.illegal", "invalid.illegal"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)(=)(\\s*)(\\')(.*)"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "([^\\s]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_lonely_tarsier" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\})",
      "next" : "pop"
   },
   {
      "token" : "comment.line",
      "regex" : "((?:(?:#)|(?:\\@\\@)|(?:\\/\\/)).*)$"
   },
   {
      "token" : "comment.line",
      "regex" : "(/\\*)",
      "push" : "uid_multi_line_comment_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(/)(?!\\*)"
   },
   {
      "token" : ["storage.type", "text", "keyword.operator", "text", "storage.type", "text", "keyword.operator", "storage.type", "keyword.operator", "text", "keyword.operator"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|$)))(?:(?:(\\s*)(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)(\\s*)(\\[)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]*)(\\])(\\s*)(\\{)",
      "push" : "uid_sausage_x"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator", "text"],
      "regex" : "(=)(\\s*)(\\[)(\\s*)",
      "push" : "attribute_multivalue_semicolon_delimited__1"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator", "text", "storage.type"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|$)))(?:(?:(\\s*)(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)"
   },
   {
      "token" : ["storage.type", "text", "keyword.operator"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(\\{|;|/)",
      "push" : "uid_sausage_2"
   },
   {
      "token" : "variable.language",
      "regex" : "^(\\s*[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+\\s*)(?=(?:\\s*)(?:\"|$))$"
   },
   {
      "token" : "storage.type",
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?=(?:\\s*)(?:\"|$))"
   },
   {
      "token" : ["storage.type", "text", "variable.language"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "text", "storage.type"],
      "regex" : "(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(>=|=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multi_line"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(`=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multiline_no_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\\\\\=)(\\s*)",
      "push" : "uid_regex_without_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\=)(\\s*)",
      "push" : "uid_regex_with_script"
   },
   {
      "token" : ["keyword.operator", "text", "constant.language", "text", "keyword.operator", "text", "constant.language", "text"],
      "regex" : "(\\@=)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(,)?(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)(?!\\s*[\\\"\\`\\[\\'])",
      "push" : "uid_pronto"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)"
   },
   {
      "token" : ["invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal"],
      "regex" : "(\\[)(\\s*)(\\])(\\s*)(=)(?!\\s*\\{)(.*)"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator", "text", "keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\[)(\\s*)(\\])(\\s*)(=)(\\s*)(\\{)",
      "push" : "uid_attribute_multivalue_matrix"
   },
   {
      "token" : ["keyword.operator", "storage.type", "keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\[)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]*)(\\])(\\s*)(\\{)",
      "push" : "uid_lonely_tarsier"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\{)",
      "push" : "uid_inner_brace_bracket"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\()",
      "push" : "uid_spain"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "push" : "uid_start_quoted_text"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`\\`\\`)",
      "push" : "uid_tick6"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "push" : "uid_tick5"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "push" : "uid_tick4"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`)",
      "push" : "uid_tick3"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`)",
      "push" : "uid_tick2"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`)",
      "push" : "uid_tick1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\'\\')",
      "push" : "uid_squote_6"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\')",
      "push" : "uid_squote_5"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\')",
      "push" : "uid_squote_4"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\')",
      "push" : "uid_squote_3"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\')",
      "push" : "uid_squote_2"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\')",
      "push" : "uid_squote_1"
   },
   {
      "token" : ["keyword.operator", "string.unquoted", "keyword.operator"],
      "regex" : "(\\?)((?=\\s*\\$).*)(\\{)",
      "push" : "uid_devonshire"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\?)(\\s*)(\\[)",
      "push" : "in_square_brackets"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\)(\\s*)$",
      "push" : "multi_line_attribute_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\<--)",
      "push" : "uid_import_start"
   },
   {
      "token" : "comment.line",
      "regex" : "^(%.*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(@)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(,|\\[|\\]|::|;)"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator", "text", "invalid.illegal", "invalid.illegal"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)(=)(\\s*)(\\')(.*)"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "([^\\s]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_multi_line_comment_content" : [
   {
      "token" : "comment.line",
      "regex" : "(.*?\\*/)",
      "next" : "pop"
   },
   {
      defaultToken : "comment.line",
   }
], 
"uid_pronto" : [
   {
      "token" : "text",
      "regex" : "(^(?=.{0,1})(?:|))",
      "next" : "pop"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\$\\\\\\\"\\s\\[\\`\\']+)",
      "push" : "uid_quoted_attribute_single_line_value1"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(A@])"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      defaultToken : "text",
   }
], 
"uid_quoted_attribute_single_line_value1" : [
   {
      "token" : "text",
      "regex" : "(^(?=.{0,1})(?:|))",
      "next" : "pop"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\$\\\\\\\"]+)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\u(?:[0-9a-f]{4}))"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\x(?:[0-9a-f]{2}))"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(A@])"
   },
   {
      "token" : "entity.other",
      "regex" : "(\\\\X)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\$|\\\")"
   },
   {
      defaultToken : "text",
   }
], 
"uid_regex_with_script" : [
   {
      "token" : "text",
      "regex" : "(^(?=.{0,1})(?:|))",
      "next" : "pop"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "variable.parameter",
      "regex" : "(\\$|[^$]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_regex_without_script" : [
   {
      "token" : "text",
      "regex" : "(^(?=.{0,1})(?:|))",
      "next" : "pop"
   },
   {
      "token" : "variable.parameter",
      "regex" : "(.*)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_sausage_2" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\})",
      "next" : "pop"
   },
   {
      "token" : "comment.line",
      "regex" : "((?:(?:#)|(?:\\@\\@)|(?:\\/\\/)).*)$"
   },
   {
      "token" : "comment.line",
      "regex" : "(/\\*)",
      "push" : "uid_multi_line_comment_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(/)(?!\\*)"
   },
   {
      "token" : ["storage.type", "text", "keyword.operator", "text", "storage.type", "text", "keyword.operator", "storage.type", "keyword.operator", "text", "keyword.operator"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|$)))(?:(?:(\\s*)(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)(\\s*)(\\[)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]*)(\\])(\\s*)(\\{)",
      "push" : "uid_sausage_x"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator", "text"],
      "regex" : "(=)(\\s*)(\\[)(\\s*)",
      "push" : "attribute_multivalue_semicolon_delimited__1"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator", "text", "storage.type"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|$)))(?:(?:(\\s*)(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)"
   },
   {
      "token" : ["storage.type", "text", "keyword.operator"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(\\{|;|/)",
      "push" : "uid_sausage_2"
   },
   {
      "token" : "variable.language",
      "regex" : "^(\\s*[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+\\s*)(?=(?:\\s*)(?:\"|$))$"
   },
   {
      "token" : "storage.type",
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?=(?:\\s*)(?:\"|$))"
   },
   {
      "token" : ["storage.type", "text", "variable.language"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "text", "storage.type"],
      "regex" : "(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(>=|=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multi_line"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(`=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multiline_no_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\\\\\=)(\\s*)",
      "push" : "uid_regex_without_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\=)(\\s*)",
      "push" : "uid_regex_with_script"
   },
   {
      "token" : ["keyword.operator", "text", "constant.language", "text", "keyword.operator", "text", "constant.language", "text"],
      "regex" : "(\\@=)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(,)?(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)(?!\\s*[\\\"\\`\\[\\'])",
      "push" : "uid_pronto"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)"
   },
   {
      "token" : ["invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal"],
      "regex" : "(\\[)(\\s*)(\\])(\\s*)(=)(?!\\s*\\{)(.*)"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator", "text", "keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\[)(\\s*)(\\])(\\s*)(=)(\\s*)(\\{)",
      "push" : "uid_attribute_multivalue_matrix"
   },
   {
      "token" : ["keyword.operator", "storage.type", "keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\[)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]*)(\\])(\\s*)(\\{)",
      "push" : "uid_lonely_tarsier"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\{)",
      "push" : "uid_inner_brace_bracket"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\()",
      "push" : "uid_spain"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "push" : "uid_start_quoted_text"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`\\`\\`)",
      "push" : "uid_tick6"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "push" : "uid_tick5"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "push" : "uid_tick4"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`)",
      "push" : "uid_tick3"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`)",
      "push" : "uid_tick2"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`)",
      "push" : "uid_tick1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\'\\')",
      "push" : "uid_squote_6"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\')",
      "push" : "uid_squote_5"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\')",
      "push" : "uid_squote_4"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\')",
      "push" : "uid_squote_3"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\')",
      "push" : "uid_squote_2"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\')",
      "push" : "uid_squote_1"
   },
   {
      "token" : ["keyword.operator", "string.unquoted", "keyword.operator"],
      "regex" : "(\\?)((?=\\s*\\$).*)(\\{)",
      "push" : "uid_devonshire"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\?)(\\s*)(\\[)",
      "push" : "in_square_brackets"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\)(\\s*)$",
      "push" : "multi_line_attribute_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\<--)",
      "push" : "uid_import_start"
   },
   {
      "token" : "comment.line",
      "regex" : "^(%.*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(@)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(,|\\[|\\]|::|;)"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator", "text", "invalid.illegal", "invalid.illegal"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)(=)(\\s*)(\\')(.*)"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "([^\\s]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_sausage_x" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\})",
      "next" : "pop"
   },
   {
      "token" : "comment.line",
      "regex" : "((?:(?:#)|(?:\\@\\@)|(?:\\/\\/)).*)$"
   },
   {
      "token" : "comment.line",
      "regex" : "(/\\*)",
      "push" : "uid_multi_line_comment_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(/)(?!\\*)"
   },
   {
      "token" : ["storage.type", "text", "keyword.operator", "text", "storage.type", "text", "keyword.operator", "storage.type", "keyword.operator", "text", "keyword.operator"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|$)))(?:(?:(\\s*)(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)(\\s*)(\\[)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]*)(\\])(\\s*)(\\{)",
      "push" : "uid_sausage_x"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator", "text"],
      "regex" : "(=)(\\s*)(\\[)(\\s*)",
      "push" : "attribute_multivalue_semicolon_delimited__1"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator", "text", "storage.type"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|$)))(?:(?:(\\s*)(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)"
   },
   {
      "token" : ["storage.type", "text", "keyword.operator"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(\\{|;|/)",
      "push" : "uid_sausage_2"
   },
   {
      "token" : "variable.language",
      "regex" : "^(\\s*[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+\\s*)(?=(?:\\s*)(?:\"|$))$"
   },
   {
      "token" : "storage.type",
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?=(?:\\s*)(?:\"|$))"
   },
   {
      "token" : ["storage.type", "text", "variable.language"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "text", "storage.type"],
      "regex" : "(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(>=|=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multi_line"
   },
   {
      "token" : ["keyword.operator", "text", "comment.line", "text", "keyword.operator", "text"],
      "regex" : "(`=)(\\s*)(/\\*.*?\\*/)?(\\s*)(\\\\)(\\s*)$",
      "push" : "uid_attribute_single_value_multiline_no_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\\\\\=)(\\s*)",
      "push" : "uid_regex_without_script"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\=)(\\s*)",
      "push" : "uid_regex_with_script"
   },
   {
      "token" : ["keyword.operator", "text", "constant.language", "text", "keyword.operator", "text", "constant.language", "text"],
      "regex" : "(\\@=)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(\\s*)(,)?(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)(?!\\s*[\\\"\\`\\[\\'])",
      "push" : "uid_pronto"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\=)"
   },
   {
      "token" : ["invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal", "invalid.illegal"],
      "regex" : "(\\[)(\\s*)(\\])(\\s*)(=)(?!\\s*\\{)(.*)"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator", "text", "keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\[)(\\s*)(\\])(\\s*)(=)(\\s*)(\\{)",
      "push" : "uid_attribute_multivalue_matrix"
   },
   {
      "token" : ["keyword.operator", "storage.type", "keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\[)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]*)(\\])(\\s*)(\\{)",
      "push" : "uid_lonely_tarsier"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\{)",
      "push" : "uid_inner_brace_bracket"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\()",
      "push" : "uid_spain"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "push" : "uid_start_quoted_text"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`\\`\\`)",
      "push" : "uid_tick6"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "push" : "uid_tick5"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "push" : "uid_tick4"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`)",
      "push" : "uid_tick3"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`)",
      "push" : "uid_tick2"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`)",
      "push" : "uid_tick1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\'\\')",
      "push" : "uid_squote_6"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\')",
      "push" : "uid_squote_5"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\')",
      "push" : "uid_squote_4"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\')",
      "push" : "uid_squote_3"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\')",
      "push" : "uid_squote_2"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\')",
      "push" : "uid_squote_1"
   },
   {
      "token" : ["keyword.operator", "string.unquoted", "keyword.operator"],
      "regex" : "(\\?)((?=\\s*\\$).*)(\\{)",
      "push" : "uid_devonshire"
   },
   {
      "token" : ["keyword.operator", "text", "keyword.operator"],
      "regex" : "(\\?)(\\s*)(\\[)",
      "push" : "in_square_brackets"
   },
   {
      "token" : ["keyword.operator", "text"],
      "regex" : "(\\\\)(\\s*)$",
      "push" : "multi_line_attribute_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\<--)",
      "push" : "uid_import_start"
   },
   {
      "token" : "comment.line",
      "regex" : "^(%.*)$"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(@)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(,|\\[|\\]|::|;)"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator", "text", "invalid.illegal", "invalid.illegal"],
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)?(\\s*)(=)(\\s*)(\\')(.*)"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "([^\\s]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_spain" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\))",
      "next" : "pop"
   },
   {
      "token" : "storage.type",
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?=\\s*\\(|\\s*\\{|\\s*\\\")"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\()",
      "push" : "uid_spain"
   },
   {
      "token" : "comment.line",
      "regex" : "(/\\*)",
      "push" : "uid_multi_line_comment_content"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "push" : "uid_start_quoted_text"
   },
   {
      "token" : "variable.language",
      "regex" : "(\\d|\\.)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(&|\\|\\||\\!=?|\\+|\\-|\\*|\\/|\\%|==|>=|>|<=|<|\\!=|\\?|\\:)"
   },
   {
      "token" : ["keyword.operator", "text", "storage.type"],
      "regex" : "(:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\{)",
      "push" : "uid_inner_brace_bracket"
   },
   {
      "token" : "constant.language",
      "regex" : "(true|false|null)"
   },
   {
      "token" : "variable.language",
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\()",
      "push" : "uid_spain"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "([^\\s]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_squote_1" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\')",
      "next" : "pop"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\$)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\'\\$]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_squote_2" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\')",
      "next" : "pop"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\$)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\')"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\'\\$]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_squote_3" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\')",
      "next" : "pop"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\$)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\')"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\'\\$]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_squote_4" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\')",
      "next" : "pop"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\$)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\')"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\'\\$]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_squote_5" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\')",
      "next" : "pop"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\$)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\')"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\'\\$]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_squote_6" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\'\\'\\'\\'\\'\\')",
      "next" : "pop"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\$)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\')"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\'\\$]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_start_quoted_text" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\\")",
      "next" : "pop"
   },
   {
      "token" : "entity.other",
      "regex" : "(\\\\X)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\u(?:[0-9a-f]{4}))"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\x(?:[0-9a-f]{2}))"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(A@])"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\"\\\\]+)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\\\\")"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "(\\\\)"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "(^.*)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_tick1" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\`)",
      "next" : "pop"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\`])"
   },
   {
      defaultToken : "text",
   }
], 
"uid_tick2" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`)",
      "next" : "pop"
   },
   {
      defaultToken : "string.unquoted",
   }
], 
"uid_tick3" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`)",
      "next" : "pop"
   },
   {
      defaultToken : "string.unquoted",
   }
], 
"uid_tick4" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`)",
      "next" : "pop"
   },
   {
      defaultToken : "string.unquoted",
   }
], 
"uid_tick5" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`\\`)",
      "next" : "pop"
   },
   {
      defaultToken : "string.unquoted",
   }
], 
"uid_tick6" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\`\\`\\`\\`\\`\\`)",
      "next" : "pop"
   },
   {
      defaultToken : "string.unquoted",
   }
]
};
this.normalizeRules();
};
/* ------------------------ END ------------------------------ */


oop.inherits(RionHighlightRules, TextHighlightRules);
exports.RionHighlightRules = RionHighlightRules;
}
); //END -- define('ace/mode/rion_highlight_rules')

/*
 *  Now we define the mode (which references the highlighting rules).
 */
define(
	"ace/mode/rion",
	["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/rion_highlight_rules","ace/range"],
	function(require, exports, module) {
		"use strict";
		var oop                  = require("../lib/oop");
		var TextMode             = require("./text").Mode;
		var Range                = require("../range").Range;
		var RionHighlightRules = require("./rion_highlight_rules").RionHighlightRules;
		var Mode = function() {
			this.HighlightRules = RionHighlightRules;
		};
		oop.inherits(Mode, TextMode);
		(function() {
			this.lineCommentStart = "//";
			this.$id = "ace/mode/rion";
		}).call(Mode.prototype);
		exports.Mode = Mode;
	}
);

