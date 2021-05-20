define("ace/theme/eclipse_2",["require","exports","module","ace/lib/dom"], function(require, exports, module) {
"use strict";

exports.isDark = false;
exports.cssText = ".ace-eclipse-2 .ace_gutter {\
background: #ebebeb;\
border-right: 1px solid rgb(159, 159, 159);\
color: rgb(136, 136, 136);\
}\
.ace-eclipse-2 .ace_print-margin {\
width: 1px;\
background: #ebebeb;\
}\
.ace-eclipse-2 {\
background-color: #FFFFFF;\
color: black;\
}\
.ace-eclipse-2 .ace_fold {\
background-color: rgb(60, 76, 114);\
}\
.ace-eclipse-2 .ace_cursor {\
color: black;\
}\
.ace-eclipse-2 .ace_storage,\
.ace-eclipse-2 .ace_keyword,\
.ace-eclipse-2 .ace_variable {\
color: rgb(0, 0, 0);\
}\
.ace-eclipse-2 .ace_unquoted {\
color: rgb(207, 0, 0);\
}\
.ace-eclipse-2 .ace_storage {\
color: rgb(0, 255, 0);\
}\
.ace-eclipse-2 .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-eclipse-2 .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-eclipse-2 .ace_function {\
color: rgb(60, 76, 114);\
}\
.ace-eclipse-2 .ace_string {\
color: rgb(50, 50, 200);\
}\
.ace-eclipse-2 .ace_comment {\
color: rgb(10, 112, 10);\
}\
.ace-eclipse-2 .ace_comment.ace_doc {\
color: rgb(63, 95, 191);\
}\
.ace-eclipse-2 .ace_comment.ace_doc.ace_tag {\
color: rgb(127, 159, 191);\
}\
.ace-eclipse-2 .ace_constant.ace_numeric {\
color: darkblue;\
}\
.ace-eclipse-2 .ace_tag {\
color: rgb(25, 118, 116);\
}\
.ace-eclipse-2 .ace_type {\
color: rgb(120, 12, 120);\
font-weight: bold;\
}\
.ace-eclipse-2 .ace_xml-pe {\
color: rgb(104, 104, 91);\
}\
.ace-eclipse-2 .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-eclipse-2 .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-eclipse-2 .ace_meta.ace_tag {\
color:rgb(25, 118, 116);\
}\
.ace-eclipse-2 .ace_invisible {\
color: #ddd;\
}\
.ace-eclipse-2 .ace_entity.ace_other.ace_attribute-name {\
color:rgb(127, 0, 127);\
}\
.ace-eclipse-2 .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0);\
}\
.ace-eclipse-2 .ace_active-line {\
background: rgb(232, 242, 254);\
}\
.ace-eclipse-2 .ace_gutter-active-line {\
background-color : #DADADA;\
}\
.ace-eclipse-2 .ace_marker-layer .ace_selected-word {\
border: 1px solid rgb(181, 213, 255);\
}\
.ace-eclipse-2 .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}";

exports.cssClass = "ace-eclipse-2";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
