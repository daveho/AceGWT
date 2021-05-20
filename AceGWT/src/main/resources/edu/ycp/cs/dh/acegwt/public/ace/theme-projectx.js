define("ace/theme/projectx",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-projectx";
exports.cssText = ".ace-projectx .ace_gutter {\
background: #2F3129;\
color: #8F908A\
}\
.ace-projectx .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace-projectx {\
background-color: #272822;\
color: #ededed\
}\
.ace-projectx .ace_cursor {\
color: #F8F8F0\
}\
.ace-projectx .ace_marker-layer .ace_selection {\
background: #49483E\
}\
.ace-projectx.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
border-radius: 2px\
}\
.ace-projectx .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-projectx .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-projectx .ace_marker-layer .ace_active-line {\
background: #403030\
}\
.ace-projectx .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-projectx .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-projectx .ace_invisible {\
color: #52524d\
}\
.ace-projectx .ace_entity.ace_name.ace_tag,\
.ace-projectx .ace_keyword,\
.ace-projectx .ace_paren,\
.ace-projectx .ace_meta.ace_tag,\
.ace-projectx .ace_storage {\
color: rgb(200, 25, 90) /* Projectx Punctuation, parenthesis */\
}\
.ace-projectx .ace_punctuation,\
.ace-projectx .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-projectx .ace_constant.ace_character,\
.ace-projectx .ace_constant.ace_language,\
.ace-projectx .ace_constant.ace_numeric,\
.ace-projectx .ace_constant.ace_other {\
color: #AE81FF/* Projectx special text such as trim, regular expressions */\
}\
.ace-projectx .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-projectx .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-projectx .ace_support.ace_constant,\
.ace-projectx .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-projectx .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-projectx .ace_storage.ace_type,\
.ace-projectx .ace_support.ace_class,\
.ace-projectx .ace_support.ace_type {\
color: rgb(40, 219, 40) /* rgb(90, 90, 240) rgb(10, 210, 210) Projectx type rgb(90, 90, 240) rgb(50, 190, 190) #67f rgb(40, 219, 40)*/\
}\
.ace-projectx .ace_entity.ace_name.ace_function,\
.ace-projectx .ace_entity.ace_other,\
.ace-projectx .ace_entity.ace_other.ace_attribute-name,\
.ace-projectx .ace_variable,\
.ace-projectx .ace_variable.ace_parameter {\
color: rgb(238, 238, 238) /* rgb(136, 180, 34) Projectx Identifiers */\
}\
.ace-projectx .ace_variable.ace_parameter {\
color: orange;\
}\
.ace-projectx .ace_string {\
color: rgb(220, 209, 106)\
}\
.ace-projectx .ace_comment {\
font-style: italic;\
color: #75715E\
}\
.ace-projectx .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
