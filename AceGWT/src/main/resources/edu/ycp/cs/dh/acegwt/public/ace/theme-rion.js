define("ace/theme/rion",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-rion";
exports.cssText = ".ace-rion .ace_gutter {\
background: #2F3129;\
color: #8F908A\
}\
.ace-rion .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace-rion {\
background-color: #272822;\
color: #ededed\
}\
.ace-rion .ace_cursor {\
color: #F8F8F0\
}\
.ace-rion .ace_marker-layer .ace_selection {\
background: #49483E\
}\
.ace-rion.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
border-radius: 2px\
}\
.ace-rion .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-rion .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-rion .ace_marker-layer .ace_active-line {\
background: #403030\
}\
.ace-rion .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-rion .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-rion .ace_invisible {\
color: #52524d\
}\
.ace-rion .ace_entity.ace_name.ace_tag,\
.ace-rion .ace_keyword,\
.ace-rion .ace_paren,\
.ace-rion .ace_meta.ace_tag,\
.ace-rion .ace_storage {\
color: rgb(200, 25, 90) /* rion Punctuation, parenthesis */\
}\
.ace-rion .ace_punctuation,\
.ace-rion .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-rion .ace_constant.ace_character,\
.ace-rion .ace_constant.ace_language,\
.ace-rion .ace_constant.ace_numeric,\
.ace-rion .ace_constant.ace_other {\
color: #AE81FF/* rion special text such as trim, regular expressions */\
}\
.ace-rion .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-rion .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-rion .ace_support.ace_constant,\
.ace-rion .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-rion .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-rion .ace_storage.ace_type,\
.ace-rion .ace_support.ace_class,\
.ace-rion .ace_support.ace_type {\
color: rgb(40, 219, 40) /* rgb(90, 90, 240) rgb(10, 210, 210) rion type rgb(90, 90, 240) rgb(50, 190, 190) #67f rgb(40, 219, 40)*/\
}\
.ace-rion .ace_entity.ace_name.ace_function,\
.ace-rion .ace_entity.ace_other,\
.ace-rion .ace_entity.ace_other.ace_attribute-name,\
.ace-rion .ace_variable,\
.ace-rion .ace_variable.ace_parameter {\
color: rgb(238, 238, 238) /* rgb(136, 180, 34) rion Identifiers */\
}\
.ace-rion .ace_variable.ace_parameter {\
color: orange;\
}\
.ace-rion .ace_string {\
color: rgb(220, 209, 106)\
}\
.ace-rion .ace_comment {\
font-style: italic;\
color: #75715E\
}\
.ace-rion .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
