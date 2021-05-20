define("ace/theme/adventuron",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-adventuron";
exports.cssText = ".ace-adventuron .ace_gutter {\
background: #0d0d0d;\
color: #606060\
}\
.ace-adventuron .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace-adventuron {\
background-color: #000000;\
color: #ededed\
}\
.ace-adventuron .ace_cursor {\
color: #F8F8F0\
}\
.ace-adventuron .ace_marker-layer .ace_selection {\
background: #494850\
}\
.ace-adventuron.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
border-radius: 2px\
}\
.ace-adventuron .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-adventuron .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-adventuron .ace_marker-layer .ace_active-line {\
background: #1c1c33\
}\
.ace-adventuron .ace_gutter-active-line {\
background: #1c1c33\
}\
.ace-adventuron .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-adventuron .ace_invisible {\
color: #52524d\
}\
.ace-adventuron .ace_entity.ace_name.ace_tag,\
.ace-adventuron .ace_keyword,\
.ace-adventuron .ace_paren,\
.ace-adventuron .ace_meta.ace_tag,\
.ace-adventuron .ace_storage {\
color: rgb(200, 25, 90) /* Projectx Punctuation, parenthesis */\
}\
.ace-adventuron .ace_punctuation,\
.ace-adventuron .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-adventuron .ace_constant.ace_character,\
.ace-adventuron .ace_constant.ace_language,\
.ace-adventuron .ace_constant.ace_numeric,\
.ace-adventuron .ace_constant.ace_other {\
color: #AE81FF/* Projectx special text such as trim, regular expressions */\
}\
.ace-adventuron .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-adventuron .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-adventuron .ace_support.ace_constant,\
.ace-adventuron .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-adventuron .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-adventuron .ace_storage.ace_type,\
.ace-adventuron .ace_support.ace_class,\
.ace-adventuron .ace_support.ace_type {\
color: rgb(40, 219, 40) /* rgb(90, 90, 240) rgb(10, 210, 210) Projectx type rgb(90, 90, 240) rgb(50, 190, 190) #67f rgb(40, 219, 40)*/\
}\
.ace-adventuron .ace_entity.ace_name.ace_function,\
.ace-adventuron .ace_entity.ace_other,\
.ace-adventuron .ace_entity.ace_other.ace_attribute-name,\
.ace-adventuron .ace_variable,\
.ace-adventuron .ace_variable.ace_parameter {\
color: rgb(244, 244, 244) /* rgb(136, 180, 34) Projectx Identifiers */\
}\
.ace-adventuron .ace_variable.ace_parameter {\
color: orange;\
}\
.ace-adventuron .ace_string {\
color: rgb(232, 232, 100)\
}\
.ace-adventuron .ace_comment {\
font-style: italic;\
color: #75715E\
}\
.ace-adventuron .ace_markup {\
color: rgb(200, 25, 90) /* Projectx Punctuation, parenthesis */\
}\
.ace-adventuron .ace_markup.ace_bold {\
color: rgb(200, 25, 90) /* Projectx Punctuation, parenthesis */\
}\
.ace-adventuron .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
