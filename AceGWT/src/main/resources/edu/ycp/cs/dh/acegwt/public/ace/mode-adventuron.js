// START -- define('ace/mode/adventuron_highlight_rules')
define('ace/mode/adventuron_highlight_rules', function(require, exports, module) {

var oop = require("ace/lib/oop");
var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

/* --------------------- START ----------------------------- */
var AdventuronHighlightRules = function() {
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
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|\\$)))(?:(?:(\\s*)(\\:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator"],
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
      "regex" : "(->)"
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
"attribute_value_contents_with_scripting__1" : [
   {
      "token" : "variable.parameter",
      "regex" : "(\\})",
      "next" : "pop"
   },
   {
      defaultToken : "variable.parameter",
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
"inside_paragraph_conditional_block__2" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\`(?!`))",
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
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(zA@\\)])"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\(\\(|\\)\\)|\\`\\`|\\{\\{|\\}\\}|\\<\\<|\\>\\>|\\^\\^|\\[\\[|\\]\\]|~~|%%)"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\<)",
      "push" : "uid_band1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\[)",
      "push" : "uid_band2"
   },
   {
      "token" : "comment.line",
      "regex" : "(\\^)",
      "push" : "uid_band3"
   },
   {
      "token" : ["keyword.operator", "text", "variable.language", "text", "keyword.operator"],
      "regex" : "(\\{)(\\s*)([^\\?\\}\\s]+)(\\s*)(\\??)",
      "push" : "uid_band4"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\$\\{)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\\\\\\"~\\[\\]\\{\\}`<>^%]+)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\\\\")"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "(^.*)"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "(.)"
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
      "token" : "variable.parameter",
      "regex" : "(\\$\\{(?!\\{))",
      "push" : "attribute_value_contents_with_scripting__1"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\$\\{\\\\\\\"\\[\\^\\}]+)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\(\\(|\\)\\)|\\`\\`|\\{\\{|\\}\\}|\\<\\<|\\>\\>|\\^\\^|\\[\\[|\\]\\]|~~|%%)"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\<)",
      "push" : "uid_band1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\[)",
      "push" : "uid_band2"
   },
   {
      "token" : "comment.line",
      "regex" : "(\\^)",
      "push" : "uid_band3"
   },
   {
      "token" : ["keyword.operator", "text", "variable.language", "text", "keyword.operator"],
      "regex" : "(\\{)(\\s*)([^\\?\\}\\s]+)(\\s*)(\\??)",
      "push" : "uid_band4"
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
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(zA@\\)])"
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
      "token" : "invalid.illegal",
      "regex" : "(.)"
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
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(zA@\\)])"
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
      "token" : "variable.parameter",
      "regex" : "(\\$\\{(?!\\{))",
      "push" : "attribute_value_contents_with_scripting__1"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\$\\{\\\\\\\"\\[\\^\\}]+)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\(\\(|\\)\\)|\\`\\`|\\{\\{|\\}\\}|\\<\\<|\\>\\>|\\^\\^|\\[\\[|\\]\\]|~~|%%)"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\<)",
      "push" : "uid_band1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\[)",
      "push" : "uid_band2"
   },
   {
      "token" : "comment.line",
      "regex" : "(\\^)",
      "push" : "uid_band3"
   },
   {
      "token" : ["keyword.operator", "text", "variable.language", "text", "keyword.operator"],
      "regex" : "(\\{)(\\s*)([^\\?\\}\\s]+)(\\s*)(\\??)",
      "push" : "uid_band4"
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
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(zA@\\)])"
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
      "token" : "invalid.illegal",
      "regex" : "(.)"
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
      "regex" : "([^\\$\\{\\\\\\\"\\[\\^\\}]+)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\(\\(|\\)\\)|\\`\\`|\\{\\{|\\}\\}|\\<\\<|\\>\\>|\\^\\^|\\[\\[|\\]\\]|~~|%%)"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\<)",
      "push" : "uid_band1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\[)",
      "push" : "uid_band2"
   },
   {
      "token" : "comment.line",
      "regex" : "(\\^)",
      "push" : "uid_band3"
   },
   {
      "token" : ["keyword.operator", "text", "variable.language", "text", "keyword.operator"],
      "regex" : "(\\{)(\\s*)([^\\?\\}\\s]+)(\\s*)(\\??)",
      "push" : "uid_band4"
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
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(zA@\\)])"
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
"uid_band1" : [
   {
      "token" : ["markup.bold", "comment.line", "text", "markup.bold"],
      "regex" : "(\\>(?!\\>))|(?:(\\<(?!\\<)[^\\>]+\\>)(\\s*)(\\>))",
      "next" : "pop"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(zA@\\)])"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\(\\(|\\)\\)|\\`\\`|\\{\\{|\\}\\}|\\<\\<|\\>\\>|\\^\\^|\\[\\[|\\]\\]|~~|%%)"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\<[^\\>]+\\>|,)"
   },
   {
      "token" : "markup.bold",
      "regex" : "([^~\\[\\]\\{\\}`\\<\\>\\^]+)"
   },
   {
      "token" : "text",
      "regex" : "(\\s+)"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "(.)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_band2" : [
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
      "token" : "variable.language",
      "regex" : "([^,\\]]+)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_band3" : [
   {
      "token" : "comment.line",
      "regex" : "(\\^)",
      "next" : "pop"
   },
   {
      defaultToken : "comment.line",
   }
], 
"uid_band4" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\})",
      "next" : "pop"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\?|:)"
   },
   {
      "token" : "variable.language",
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)"
   },
   {
      "token" : ["keyword.operator", "constant.character.escape", "keyword.operator"],
      "regex" : "(`)(``)(`)"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "(``)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\`)",
      "push" : "inside_paragraph_conditional_block__2"
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
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|\\$)))(?:(?:(\\s*)(\\:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator"],
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
      "regex" : "(->)"
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
      "regex" : "(^(?=.{0,1})(?:|))",caseInsensitive: true,
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
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|\\$)))(?:(?:(\\s*)(\\:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator"],
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
      "regex" : "(->)"
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
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|\\$)))(?:(?:(\\s*)(\\:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator"],
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
      "regex" : "(->)"
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
      "regex" : "(^(?=.{0,1})(?:|))",caseInsensitive: true,
      "next" : "pop"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\(\\(|\\)\\)|\\`\\`|\\{\\{|\\}\\}|\\<\\<|\\>\\>|\\^\\^|\\[\\[|\\]\\]|~~|%%)"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\<)",
      "push" : "uid_band1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\[)",
      "push" : "uid_band2"
   },
   {
      "token" : "comment.line",
      "regex" : "(\\^)",
      "push" : "uid_band3"
   },
   {
      "token" : ["keyword.operator", "text", "variable.language", "text", "keyword.operator"],
      "regex" : "(\\{)(\\s*)([^\\?\\}\\s]+)(\\s*)(\\??)",
      "push" : "uid_band4"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "variable.parameter",
      "regex" : "(\\$\\{(?!\\{))",
      "push" : "attribute_value_contents_with_scripting__1"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\$\\{\\\\\\\"\\[\\^\\}]+)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\(\\(|\\)\\)|\\`\\`|\\{\\{|\\}\\}|\\<\\<|\\>\\>|\\^\\^|\\[\\[|\\]\\]|~~|%%)"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\<)",
      "push" : "uid_band1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\[)",
      "push" : "uid_band2"
   },
   {
      "token" : "comment.line",
      "regex" : "(\\^)",
      "push" : "uid_band3"
   },
   {
      "token" : ["keyword.operator", "text", "variable.language", "text", "keyword.operator"],
      "regex" : "(\\{)(\\s*)([^\\?\\}\\s]+)(\\s*)(\\??)",
      "push" : "uid_band4"
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
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(zA@\\)])"
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
      "token" : "invalid.illegal",
      "regex" : "(.)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\$\\\\\\\"\\s\\[\\`\\'\\^\\{\\}]+)",
      "push" : "uid_quoted_attribute_single_line_value1"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(zA@\\)])"
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
      "regex" : "(^(?=.{0,1})(?:|))",caseInsensitive: true,
      "next" : "pop"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "variable.parameter",
      "regex" : "(\\$\\{(?!\\{))",
      "push" : "attribute_value_contents_with_scripting__1"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\$\\{\\\\\\\"\\[\\^\\}]+)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\(\\(|\\)\\)|\\`\\`|\\{\\{|\\}\\}|\\<\\<|\\>\\>|\\^\\^|\\[\\[|\\]\\]|~~|%%)"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\<)",
      "push" : "uid_band1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\[)",
      "push" : "uid_band2"
   },
   {
      "token" : "comment.line",
      "regex" : "(\\^)",
      "push" : "uid_band3"
   },
   {
      "token" : ["keyword.operator", "text", "variable.language", "text", "keyword.operator"],
      "regex" : "(\\{)(\\s*)([^\\?\\}\\s]+)(\\s*)(\\??)",
      "push" : "uid_band4"
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
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(zA@\\)])"
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
      "token" : "invalid.illegal",
      "regex" : "(.)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_regex_with_script" : [
   {
      "token" : "text",
      "regex" : "(^(?=.{0,1})(?:|))",caseInsensitive: true,
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
      "regex" : "(^(?=.{0,1})(?:|))",caseInsensitive: true,
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
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|\\$)))(?:(?:(\\s*)(\\:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator"],
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
      "regex" : "(->)"
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
      "regex" : "([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)(?!(?:\\s*)(?:(?:[._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+)|(?:\\{|;|/|\"|\\$)))(?:(?:(\\s*)(\\:)(\\s*)([._0-9a-zA-Z\\u0030-\\u0039\\u0041-\\u005a\\u0061-\\u007a\\u00a0-\\u2027\\u202a-\\ud7ff\\ue000-\\ufffd]+))?)"
   },
   {
      "token" : ["variable.language", "text", "keyword.operator"],
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
      "regex" : "(->)"
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
      "regex" : "(,)"
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
"uid_start_quoted_text" : [
   {
      "token" : "keyword.operator",
      "regex" : "(\\\"|^.)",
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
      "regex" : "(\\\\[\"\\\\/'b&fnrst=$(zA@\\)])"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\(\\(|\\)\\)|\\`\\`|\\{\\{|\\}\\}|\\<\\<|\\>\\>|\\^\\^|\\[\\[|\\]\\]|~~|%%)"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\<)",
      "push" : "uid_band1"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\[)",
      "push" : "uid_band2"
   },
   {
      "token" : "comment.line",
      "regex" : "(\\^)",
      "push" : "uid_band3"
   },
   {
      "token" : ["keyword.operator", "text", "variable.language", "text", "keyword.operator"],
      "regex" : "(\\{)(\\s*)([^\\?\\}\\s]+)(\\s*)(\\??)",
      "push" : "uid_band4"
   },
   {
      "token" : "markup.bold",
      "regex" : "(\\$\\$\\{)",
      "push" : "script_block_2"
   },
   {
      "token" : "string.unquoted",
      "regex" : "(\\$\\{)"
   },
   {
      "token" : "string.unquoted",
      "regex" : "([^\\\\\\\"~\\[\\]\\{\\}`<>^%]+)"
   },
   {
      "token" : "constant.character.escape",
      "regex" : "(\\\\\\\")"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "(^.*)"
   },
   {
      "token" : "invalid.illegal",
      "regex" : "(.)"
   },
   {
      defaultToken : "text",
   }
]
};
this.normalizeRules();
};
/* ------------------------ END ------------------------------ */

oop.inherits(AdventuronHighlightRules, TextHighlightRules);
exports.AdventuronHighlightRules = AdventuronHighlightRules;
}
); //END -- define('ace/mode/adventuron_highlight_rules')


/* The CStyle code behaviour is based on code in mode-json.js in the Ace Editor Distribution, MIT License */

define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"], function(require, exports, module) {
   "use strict";
   
   var Range = require("../range").Range;
   
   var MatchingBraceOutdent = function() {};
   
   (function() {
   
       this.checkOutdent = function(line, input) {
           if (! /^\s+$/.test(line))
               return false;
   
           return /^\s*\}/.test(input);
       };
   
       this.autoOutdent = function(doc, row) {
           var line = doc.getLine(row);
           var match = line.match(/^(\s*\})/);
   
           if (!match) return 0;
   
           var column = match[1].length;
           var openBracePos = doc.findMatchingBracket({row: row, column: column});
   
           if (!openBracePos || openBracePos.row == row) return 0;
   
           var indent = this.$getIndent(doc.getLine(openBracePos.row));
           doc.replace(new Range(row, 0, row, column-1), indent);
       };
   
       this.$getIndent = function(line) {
           return line.match(/^\s*/)[0];
       };
   
   }).call(MatchingBraceOutdent.prototype);
   
   exports.MatchingBraceOutdent = MatchingBraceOutdent;
   });
   
   define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"], function(require, exports, module) {
   "use strict";
   
   var oop = require("../../lib/oop");
   var Behaviour = require("../behaviour").Behaviour;
   var TokenIterator = require("../../token_iterator").TokenIterator;
   var lang = require("../../lib/lang");
   
   var SAFE_INSERT_IN_TOKENS =
       ["text", "paren.rparen", "punctuation.operator"];
   var SAFE_INSERT_BEFORE_TOKENS =
       ["text", "paren.rparen", "punctuation.operator", "comment"];
   
   var context;
   var contextCache = {}
   var initContext = function(editor) {
       var id = -1;
       if (editor.multiSelect) {
           id = editor.selection.id;
           if (contextCache.rangeCount != editor.multiSelect.rangeCount)
               contextCache = {rangeCount: editor.multiSelect.rangeCount};
       }
       if (contextCache[id])
           return context = contextCache[id];
       context = contextCache[id] = {
           autoInsertedBrackets: 0,
           autoInsertedRow: -1,
           autoInsertedLineEnd: "",
           maybeInsertedBrackets: 0,
           maybeInsertedRow: -1,
           maybeInsertedLineStart: "",
           maybeInsertedLineEnd: ""
       };
   };
   
   var CstyleBehaviour = function() {
      //  this.add("braces", "insertion", function(state, action, editor, session, text) {
      //      var cursor = editor.getCursorPosition();
      //      var line = session.doc.getLine(cursor.row);
      //      if (text == '{') {
      //          initContext(editor);
      //          var selection = editor.getSelectionRange();
      //          var selected = session.doc.getTextRange(selection);
      //          if (selected !== "" && selected !== "{" && editor.getWrapBehavioursEnabled()) {
      //              return {
      //                  text: '{' + selected + '}',
      //                  selection: false
      //              };
      //          } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
      //              if (/[\]\}\)]/.test(line[cursor.column]) || editor.inMultiSelectMode) {
      //                  CstyleBehaviour.recordAutoInsert(editor, session, "}");
      //                  return {
      //                      text: '{}',
      //                      selection: [1, 1]
      //                  };
      //              } else {
      //                  CstyleBehaviour.recordMaybeInsert(editor, session, "{");
      //                  return {
      //                      text: '{',
      //                      selection: [1, 1]
      //                  };
      //              }
      //          }
      //      } else if (text == '}') {
      //          initContext(editor);
      //          var rightChar = line.substring(cursor.column, cursor.column + 1);
      //          if (rightChar == '}') {
      //              var matching = session.$findOpeningBracket('}', {column: cursor.column + 1, row: cursor.row});
      //              if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
      //                  CstyleBehaviour.popAutoInsertedClosing();
      //                  return {
      //                      text: '',
      //                      selection: [1, 1]
      //                  };
      //              }
      //          }
      //      } else if (text == "\n" || text == "\r\n") {
      //          initContext(editor);
      //          var closing = "";
      //          if (CstyleBehaviour.isMaybeInsertedClosing(cursor, line)) {
      //              closing = lang.stringRepeat("}", context.maybeInsertedBrackets);
      //              CstyleBehaviour.clearMaybeInsertedClosing();
      //          }
      //          var rightChar = line.substring(cursor.column, cursor.column + 1);
      //          if (rightChar === '}') {
      //              var openBracePos = session.findMatchingBracket({row: cursor.row, column: cursor.column+1}, '}');
      //              if (!openBracePos)
      //                   return null;
      //              var next_indent = this.$getIndent(session.getLine(openBracePos.row));
      //          } else if (closing) {
      //              var next_indent = this.$getIndent(line);
      //          } else {
      //              CstyleBehaviour.clearMaybeInsertedClosing();
      //              return;
      //          }
      //          var indent = next_indent + session.getTabString();
   
      //          return {
      //              text: '\n' + indent + '\n' + next_indent + closing,
      //              selection: [1, indent.length, 1, indent.length]
      //          };
      //      } else {
      //          CstyleBehaviour.clearMaybeInsertedClosing();
      //      }
      //  });
   
      //  this.add("braces", "deletion", function(state, action, editor, session, range) {
      //      var selected = session.doc.getTextRange(range);
      //      if (!range.isMultiLine() && selected == '{') {
      //          initContext(editor);
      //          var line = session.doc.getLine(range.start.row);
      //          var rightChar = line.substring(range.end.column, range.end.column + 1);
      //          if (rightChar == '}') {
      //              range.end.column++;
      //              return range;
      //          } else {
      //              context.maybeInsertedBrackets--;
      //          }
      //      }
      //  });
   
      //  this.add("parens", "insertion", function(state, action, editor, session, text) {
      //      if (text == '(') {
      //          initContext(editor);
      //          var selection = editor.getSelectionRange();
      //          var selected = session.doc.getTextRange(selection);
      //          if (selected !== "" && editor.getWrapBehavioursEnabled()) {
      //              return {
      //                  text: '(' + selected + ')',
      //                  selection: false
      //              };
      //          } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
      //              CstyleBehaviour.recordAutoInsert(editor, session, ")");
      //              return {
      //                  text: '()',
      //                  selection: [1, 1]
      //              };
      //          }
      //      } else if (text == ')') {
      //          initContext(editor);
      //          var cursor = editor.getCursorPosition();
      //          var line = session.doc.getLine(cursor.row);
      //          var rightChar = line.substring(cursor.column, cursor.column + 1);
      //          if (rightChar == ')') {
      //              var matching = session.$findOpeningBracket(')', {column: cursor.column + 1, row: cursor.row});
      //              if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
      //                  CstyleBehaviour.popAutoInsertedClosing();
      //                  return {
      //                      text: '',
      //                      selection: [1, 1]
      //                  };
      //              }
      //          }
      //      }
      //  });
   
      //  this.add("parens", "deletion", function(state, action, editor, session, range) {
      //      var selected = session.doc.getTextRange(range);
      //      if (!range.isMultiLine() && selected == '(') {
      //          initContext(editor);
      //          var line = session.doc.getLine(range.start.row);
      //          var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
      //          if (rightChar == ')') {
      //              range.end.column++;
      //              return range;
      //          }
      //      }
      //  });
   
      //  this.add("brackets", "insertion", function(state, action, editor, session, text) {
      //      if (text == '[') {
      //          initContext(editor);
      //          var selection = editor.getSelectionRange();
      //          var selected = session.doc.getTextRange(selection);
      //          if (selected !== "" && editor.getWrapBehavioursEnabled()) {
      //              return {
      //                  text: '[' + selected + ']',
      //                  selection: false
      //              };
      //          } else if (CstyleBehaviour.isSaneInsertion(editor, session)) {
      //              CstyleBehaviour.recordAutoInsert(editor, session, "]");
      //              return {
      //                  text: '[]',
      //                  selection: [1, 1]
      //              };
      //          }
      //      } else if (text == ']') {
      //          initContext(editor);
      //          var cursor = editor.getCursorPosition();
      //          var line = session.doc.getLine(cursor.row);
      //          var rightChar = line.substring(cursor.column, cursor.column + 1);
      //          if (rightChar == ']') {
      //              var matching = session.$findOpeningBracket(']', {column: cursor.column + 1, row: cursor.row});
      //              if (matching !== null && CstyleBehaviour.isAutoInsertedClosing(cursor, line, text)) {
      //                  CstyleBehaviour.popAutoInsertedClosing();
      //                  return {
      //                      text: '',
      //                      selection: [1, 1]
      //                  };
      //              }
      //          }
      //      }
      //  });
   
      //  this.add("brackets", "deletion", function(state, action, editor, session, range) {
      //      var selected = session.doc.getTextRange(range);
      //      if (!range.isMultiLine() && selected == '[') {
      //          initContext(editor);
      //          var line = session.doc.getLine(range.start.row);
      //          var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
      //          if (rightChar == ']') {
      //              range.end.column++;
      //              return range;
      //          }
      //      }
      //  });
   
       this.add("string_dquotes", "insertion", function(state, action, editor, session, text) {
           if (text == '"' || text == "'") {
               initContext(editor);
               var quote = text;
               var selection = editor.getSelectionRange();
               var selected = session.doc.getTextRange(selection);
               if (selected !== "" && selected !== "'" && selected != '"' && editor.getWrapBehavioursEnabled()) {
                   return {
                       text: quote + selected + quote,
                       selection: false
                   };
               } else {
                   var cursor = editor.getCursorPosition();
                   var line = session.doc.getLine(cursor.row);
                   var leftChar = line.substring(cursor.column-1, cursor.column);
                   if (leftChar == '\\') {
                       return null;
                   }
                   var tokens = session.getTokens(selection.start.row);
                   var col = 0, token;
                   var quotepos = -1; // Track whether we're inside an open quote.
   
                   for (var x = 0; x < tokens.length; x++) {
                       token = tokens[x];
                       if (token.type == "string") {
                         quotepos = -1;
                       } else if (quotepos < 0) {
                         quotepos = token.value.indexOf(quote);
                       }
                       if ((token.value.length + col) > selection.start.column) {
                           break;
                       }
                       col += tokens[x].value.length;
                   }
                   if (!token || (quotepos < 0 && token.type !== "comment" && (token.type !== "string" || ((selection.start.column !== token.value.length+col-1) && token.value.lastIndexOf(quote) === token.value.length-1)))) {
                       if (!CstyleBehaviour.isSaneInsertion(editor, session))
                           return;
                       return {
                           text: quote + quote,
                           selection: [1,1]
                       };
                   } else if (token && token.type === "string") {
                       var rightChar = line.substring(cursor.column, cursor.column + 1);
                       if (rightChar == quote) {
                           return {
                               text: '',
                               selection: [1, 1]
                           };
                       }
                   }
               }
           }
       });
   
       this.add("string_dquotes", "deletion", function(state, action, editor, session, range) {
           var selected = session.doc.getTextRange(range);
           if (!range.isMultiLine() && (selected == '"' || selected == "'")) {
               initContext(editor);
               var line = session.doc.getLine(range.start.row);
               var rightChar = line.substring(range.start.column + 1, range.start.column + 2);
               if (rightChar == selected) {
                   range.end.column++;
                   return range;
               }
           }
       });
   
   };
   
       
   CstyleBehaviour.isSaneInsertion = function(editor, session) {
       var cursor = editor.getCursorPosition();
       var iterator = new TokenIterator(session, cursor.row, cursor.column);
       if (!this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS)) {
           var iterator2 = new TokenIterator(session, cursor.row, cursor.column + 1);
           if (!this.$matchTokenType(iterator2.getCurrentToken() || "text", SAFE_INSERT_IN_TOKENS))
               return false;
       }
       iterator.stepForward();
       return iterator.getCurrentTokenRow() !== cursor.row ||
           this.$matchTokenType(iterator.getCurrentToken() || "text", SAFE_INSERT_BEFORE_TOKENS);
   };
   
   CstyleBehaviour.$matchTokenType = function(token, types) {
       return types.indexOf(token.type || token) > -1;
   };
   
   CstyleBehaviour.recordAutoInsert = function(editor, session, bracket) {
       var cursor = editor.getCursorPosition();
       var line = session.doc.getLine(cursor.row);
       if (!this.isAutoInsertedClosing(cursor, line, context.autoInsertedLineEnd[0]))
           context.autoInsertedBrackets = 0;
       context.autoInsertedRow = cursor.row;
       context.autoInsertedLineEnd = bracket + line.substr(cursor.column);
       context.autoInsertedBrackets++;
   };
   
   CstyleBehaviour.recordMaybeInsert = function(editor, session, bracket) {
       var cursor = editor.getCursorPosition();
       var line = session.doc.getLine(cursor.row);
       if (!this.isMaybeInsertedClosing(cursor, line))
           context.maybeInsertedBrackets = 0;
       context.maybeInsertedRow = cursor.row;
       context.maybeInsertedLineStart = line.substr(0, cursor.column) + bracket;
       context.maybeInsertedLineEnd = line.substr(cursor.column);
       context.maybeInsertedBrackets++;
   };
   
   CstyleBehaviour.isAutoInsertedClosing = function(cursor, line, bracket) {
       return context.autoInsertedBrackets > 0 &&
           cursor.row === context.autoInsertedRow &&
           bracket === context.autoInsertedLineEnd[0] &&
           line.substr(cursor.column) === context.autoInsertedLineEnd;
   };
   
   CstyleBehaviour.isMaybeInsertedClosing = function(cursor, line) {
       return context.maybeInsertedBrackets > 0 &&
           cursor.row === context.maybeInsertedRow &&
           line.substr(cursor.column) === context.maybeInsertedLineEnd &&
           line.substr(0, cursor.column) == context.maybeInsertedLineStart;
   };
   
   CstyleBehaviour.popAutoInsertedClosing = function() {
       context.autoInsertedLineEnd = context.autoInsertedLineEnd.substr(1);
       context.autoInsertedBrackets--;
   };
   
   CstyleBehaviour.clearMaybeInsertedClosing = function() {
       if (context) {
           context.maybeInsertedBrackets = 0;
           context.maybeInsertedRow = -1;
       }
   };
   
   
   
   oop.inherits(CstyleBehaviour, Behaviour);
   
   exports.CstyleBehaviour = CstyleBehaviour;
   });
   
   define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module) {
   "use strict";
   
   var oop = require("../../lib/oop");
   var Range = require("../../range").Range;
   var BaseFoldMode = require("./fold_mode").FoldMode;
   
   var FoldMode = exports.FoldMode = function(commentRegex) {
       if (commentRegex) {
           this.foldingStartMarker = new RegExp(
               this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
           );
           this.foldingStopMarker = new RegExp(
               this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
           );
       }
   };
   oop.inherits(FoldMode, BaseFoldMode);
   
   (function() {
   
       this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)|^\s*(\/\/)\s*(start|START|Start)\b\s/;
       this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)|^[\s\*]*(\/\/)\s*(end|END|End)\b/;
   
       this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
           var line = session.getLine(row);
           var match = line.match(this.foldingStartMarker);
           if (match) {
               var i = match.index;
   
               if (match[1])
                   return this.openingBracketBlock(session, match[1], row, i);
                   
               var range = session.getCommentFoldRange(row, i + match[0].length, 1);
               
               if (range && !range.isMultiLine()) {
                   if (forceMultiline) {
                       range = this.getSectionRange(session, row);
                   } else if (foldStyle != "all")
                       range = null;
               }
               
               return range;
           }
   
           if (foldStyle === "markbegin")
               return;
   
           var match = line.match(this.foldingStopMarker);
           if (match) {
               var i = match.index + match[0].length;
   
               if (match[1])
                   return this.closingBracketBlock(session, match[1], row, i);
   
               return session.getCommentFoldRange(row, i, -1);
           }
       };
       
       this.getSectionRange = function(session, row) {
           var line = session.getLine(row);
           var startIndent = line.search(/\S/);
           var startRow = row;
           var startColumn = line.length;
           row = row + 1;
           var endRow = row;
           var maxRow = session.getLength();
           while (++row < maxRow) {
               line = session.getLine(row);
               var indent = line.search(/\S/);
               if (indent === -1)
                   continue;
               if  (startIndent > indent)
                   break;
               var subRange = this.getFoldWidgetRange(session, "all", row);
               
               if (subRange) {
                   if (subRange.start.row <= startRow) {
                       break;
                   } else if (subRange.isMultiLine()) {
                       row = subRange.end.row;
                   } else if (startIndent == indent) {
                       break;
                   }
               }
               endRow = row;
           }
           
           return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
       };
   
   }).call(FoldMode.prototype);
   
   });
   
   

/*
 *  Now we define the mode (which references the highlighting rules).
 */
define(
   "ace/mode/adventuron",
   ["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/adventuron_highlight_rules","ace/range"],
   function(require, exports, module) {
      "use strict";
      var oop                  = require("../lib/oop");
      var TextMode             = require("./text").Mode;
      var Range                = require("../range").Range;
      var AdventuronHighlightRules = require("./adventuron_highlight_rules").AdventuronHighlightRules;
      var MatchingBraceOutdent = require("./matching_brace_outdent").MatchingBraceOutdent;
      var CstyleBehaviour = require("./behaviour/cstyle").CstyleBehaviour;
      var CStyleFoldMode = require("./folding/cstyle").FoldMode;
      var Mode = function() {
         this.HighlightRules = AdventuronHighlightRules;
         this.$outdent = new MatchingBraceOutdent();
         this.$behaviour = new CstyleBehaviour();
         this.foldingRules = new CStyleFoldMode();
      };
      oop.inherits(Mode, TextMode);
      (function() {
         this.lineCommentStart = "//";
         this.$id = "ace/mode/adventuron";
      }).call(Mode.prototype);
      exports.Mode = Mode;
   }
);

