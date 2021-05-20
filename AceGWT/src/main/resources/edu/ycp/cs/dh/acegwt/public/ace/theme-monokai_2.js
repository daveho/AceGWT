define("ace/theme/monokai_2",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-monokai-2";
exports.cssText = ".ace-monokai-2 .ace_gutter {\
background: #222626;\
color: #8F908A\
}\
.ace-monokai-2 .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace-monokai-2 {\
background-color: #181b1b;\
color: #F8F8F2\
}\
.ace-monokai-2 .ace_cursor {\
color: #F8F8F0\
}\
.ace-monokai-2 .ace_marker-layer .ace_selection {\
background: #49483E\
}\
.ace-monokai-2.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
border-radius: 2px\
}\
.ace-monokai-2 .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-monokai-2 .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-monokai-2 .ace_marker-layer .ace_active-line {\
background: #303046\
}\
.ace-monokai-2 .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-monokai-2 .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-monokai-2 .ace_invisible {\
color: #52524d\
}\
.ace-monokai-2 .ace_entity.ace_name.ace_tag,\
.ace-monokai-2 .ace_keyword,\
.ace-monokai-2 .ace_meta.ace_tag,\
.ace-monokai-2 .ace_storage {\
color: #E92672\
}\
.ace-monokai-2 .ace_punctuation,\
.ace-monokai-2 .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-monokai-2 .ace_constant.ace_character,\
.ace-monokai-2 .ace_constant.ace_language,\
.ace-monokai-2 .ace_constant.ace_numeric,\
.ace-monokai-2 .ace_constant.ace_other {\
color: #AE81FF\
}\
.ace-monokai-2 .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-monokai-2 .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-monokai-2 .ace_support.ace_constant,\
.ace-monokai-2 .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-monokai-2 .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-monokai-2 .ace_storage.ace_type,\
.ace-monokai-2 .ace_support.ace_class,\
.ace-monokai-2 .ace_support.ace_type {\
color: rgb(8,252,30)\
}\
.ace-monokai-2 .ace_entity.ace_name.ace_function,\
.ace-monokai-2 .ace_entity.ace_other,\
.ace-monokai-2 .ace_entity.ace_other.ace_attribute-name,\
.ace-monokai-2 .ace_variable {\
color: #f6f6f6\
}\
.ace-monokai-2 .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
.ace-monokai-2 .ace_markup.ace_bold {\
color: #E92672\
}\
.ace-monokai-2 .ace_string {\
color: #F0F074\
}\
.ace-monokai-2 .ace_comment {\
color: #75715E\
}\
.ace-monokai-2 .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
