// START -- define('ace/mode/sce_highlight_rules')
define('ace/mode/sce_highlight_rules', function(require, exports, module) {

var oop = require("ace/lib/oop");
var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

/* --------------------- START ----------------------------- */
var SceHighlightRules = function() {
this.$rules = {
"start" : [
   {
      "token" : ["text", "comment"],
      "regex" : "(\\s*)((?:;|;).*)$"
   },
   {
      "token" : "storage.type",
      "regex" : "(#INCLUDE|#DEFINE|#VAR|#IF|#ENDIF|#ECHO|#LOOKUP|#INCBIN|#DEFB|#DEFW|#HEX|#DBADDR|#USRPTR|#ELSE|#EXTERN|#SFX|#INT|#include|#define|#var|#if|#endif|#echo|#lookup|#incbin|#defb|#defw|#hex|#dbaddr|#usrptr|#extern|#sfx|#int|#else)\\b",
      "push" : "preprocessor__1"
   },
   {
      "token" : "storage.type",
      "regex" : "((?:^/)?(?:OBJ))",
      "push" : "obj_block__1"
   },
   {
      "token" : "storage.type",
      "regex" : "((?:^/)?(?!OBJ|PRO)(?:CTL|TOK))",
      "push" : "ctl_or_tok_block__1"
   },
   {
      "token" : ["storage.type", "text", "storage.type"],
      "regex" : "((?:^/)?PRO)(\\s+)(\\d+)",
      "push" : "pro_block__1"
   },
   {
      "token" : "storage.type",
      "regex" : "((?:^/)?(?!OBJ|PRO)[A-Z]+)",
      "push" : "uid_non_pro_block"
   },
   {
      defaultToken : "text",
   }
], 
"ctl_or_tok_block__1" : [
   {
      "token" : "storage.type",
      "regex" : "^(/(?!\\d))",
      "next" : "pop"
   },
   {
      "token" : "meta.use",
      "regex" : "^([0-9a-zA-Z\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a5',\\;-__\\.!\\*]+)"
   },
   {
      "token" : "text",
      "regex" : "(^\\s*$)"
   },
   {
      "token" : ["text", "comment"],
      "regex" : "(\\s*)((?:;|;).*)$"
   },
   {
      "token" : "storage.type",
      "regex" : "(#INCLUDE|#DEFINE|#VAR|#IF|#ENDIF|#ECHO|#LOOKUP|#INCBIN|#DEFB|#DEFW|#HEX|#DBADDR|#USRPTR|#ELSE|#EXTERN|#SFX|#INT|#include|#define|#var|#if|#endif|#echo|#lookup|#incbin|#defb|#defw|#hex|#dbaddr|#usrptr|#extern|#sfx|#int|#else)\\b",
      "push" : "preprocessor__1"
   },
   {
      defaultToken : "text",
   }
], 
"obj_block__1" : [
   {
      "token" : "storage.type",
      "regex" : "^(/(?!\\d))",
      "next" : "pop"
   },
   {
      "token" : ["text", "constant.numeric"],
      "regex" : "^(\\s*)(/\\d+)"
   },
   {
      "token" : ["text", "comment"],
      "regex" : "(\\s*)((?:;|#|;).*)$"
   },
   {
      "token" : "comment",
      "regex" : "(_|_)"
   },
   {
      "token" : "constant.numeric",
      "regex" : "(-?\\d+)"
   },
   {
      "token" : "meta.use",
      "regex" : "([0-9a-zA-Z\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a5][0-9a-zA-Z\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a50-9]*)"
   },
   {
      defaultToken : "text",
   }
], 
"preprocessor__1" : [
   {
      "token" : "text",
      "regex" : "(^(?=.{0,1})(?:|))",caseInsensitive: true,
      "next" : "pop"
   },
   {
      "token" : "constant.numeric",
      "regex" : "(-(?=\\d))"
   },
   {
      "token" : "constant.numeric",
      "regex" : "\\b(\\d+)\\b"
   },
   {
      "token" : "string",
      "regex" : "(TRUE|FALSE|true|false)\\b"
   },
   {
      "token" : ["text", "comment"],
      "regex" : "(\\s*)((?:;|;).*)$"
   },
   {
      "token" : "entity",
      "regex" : "(.)"
   },
   {
      defaultToken : "text",
   }
], 
"pro_block__1" : [
   {
      "token" : "storage.type",
      "regex" : "^(/)",
      "next" : "pop"
   },
   {
      "token" : ["text", "comment"],
      "regex" : "(\\s*)((?:;|;).*)$"
   },
   {
      "token" : "storage.type",
      "regex" : "(#INCLUDE|#DEFINE|#VAR|#IF|#ENDIF|#ECHO|#LOOKUP|#INCBIN|#DEFB|#DEFW|#HEX|#DBADDR|#USRPTR|#ELSE|#EXTERN|#SFX|#INT|#include|#define|#var|#if|#endif|#echo|#lookup|#incbin|#defb|#defw|#hex|#dbaddr|#usrptr|#extern|#sfx|#int|#else)\\b",
      "push" : "preprocessor__1"
   },
   {
      "token" : "constant.numeric",
      "regex" : "(\\d+)"
   },
   {
      "token" : "comment",
      "regex" : "(\\[|\\]|\\+|\\-|\\*)"
   },
   {
      "token" : ["text", "comment"],
      "regex" : "(\\s*)((?:\\$).*)$"
   },
   {
      "token" : ["meta.use", "text", "meta.use"],
      "regex" : "^(\\s{0,1}[0-9A-Z\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a5_\\*-]{1,9}\\b)(\\s+)(\\b[0-9A-Z\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a5_\\*-]{1,9}\\b)"
   },
   {
      "token" : ["keyword", "text", "constant.numeric", "text", "constant.numeric"],
      "regex" : "(EQ|GT|LT)(\\s+)(\\d+)(\\s+)((?:[0-9A-Z\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a5_\\-][0-9A-Za-z\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a5]*)|\\d+)"
   },
   {
      "token" : ["keyword", "text", "entity", "text", "constant.numeric"],
      "regex" : "(EQ|GT|LT|LET|PLACE)(\\s+)([0-9A-Za-z\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a5]+)(\\s+)((?:[0-9A-Za-z\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a5]+)|\\d+)"
   },
   {
      "token" : "keyword",
      "regex" : "\\b(?:ABILITY|ABSENT|ADD|ADJECT1|ADJECT2|ADVERB|ANYKEY|AT|ATGT|ATLT|AUTOD|AUTOG|AUTOP|AUTOR|AUTOT|AUTOW|BACKAT|BEEP|BIGGER|BORDER|BRIGHT|CALL|CARRIED|CENTRE|CHANCE|CHARACTERS|CHARSET|CLEAR|CLOTHING|CLS|CONNECTIONS|CONSTANT|CONTAINER|COPYBF|COPYFF|COPYFO|COPYOF|COPYOO|CREATE|D|DEFAULTS|DESC|DESTROY|DISPLAY|DOALL|DONE|DPRINT|DROP|DROPALL|E|END|EQ|EXIT|EXTERN|FLAG|FLASH|GET|GFX|GOTO|GRAPHIC|GRAPHICS|GT|HASAT|HASNAT|HERE|INITIALLYAT|INK|INKEY|INPUT|INVEN|INVERSE|ISAT|ISDONE|ISNDONE|ISNOTAT|LET|LINE|LISTAT|LISTOBJ|LOAD|LOCATION|LT|MES|MESSAGE|MESSAGES|MINUS|MODE|MOUSE|MOVE|N|NE|NEWLINE|NEWTEXT|NOTAT|NOTCARR|NOTCREATED|NOTDONE|NOTEQ|NOTSAME|NOTWORN|NOTZERO|NOUN2|NW|OBJECT|OK|OVER|PAPER|PARSE|PAUSE|PICTURE|PLACE|PLUS|PREP|PRESENT|PRINT|PRINTAT|PROCESS|PROMPT|PROPERTY|PROTECT|PUTIN|PUTO|QUIT|RAMLOAD|RAMSAVE|RANDOM|REDO|REMOVE|RESET|RESPONSE|RESTART|S|SAME|SAVE|SAVEAT|SCORE|SE|SET|SETCO|SFX|SKIP|SMALLER|SPACE|SUB|SW|SWAP|SYNONYM|SYSMESS|SYSMESSAGES|TAB|TAKEOUT|TIME|TIMEOUT|TO|TURNS|U|VOCABULARY|W|WEAR|WEIGH|WEIGHT|WHATO|WINAT|WINDOW|WINSIZE|WORN|ZERO)\\b"
   },
   {
      "token" : "meta.use",
      "regex" : "(\\b[0-9A-Z\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a5_\\*-]{1,9}\\b)"
   },
   {
      "token" : "entity",
      "regex" : "([0-9A-Z\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a5_\\-][0-9A-Za-z\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a5]*)"
   },
   {
      defaultToken : "text",
   }
], 
"uid_non_pro_block" : [
   {
      "token" : "storage.type",
      "regex" : "^(/(?!\\d))",
      "next" : "pop"
   },
   {
      "token" : ["text", "meta.use", "text", "constant.numeric", "text", "keyword", "comment"],
      "regex" : "^(\\s*)([0-9A-Za-z\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\ufffd\\u00a0\\u00a5\u00a1]{1,7})((?: |\\t)+)(\\d+)(\\s+)(noun|verb|adjective|adverb|preposition|pronoun|conjugation|Noun|Verb|Adjective|Adverb|Preposition|Pronoun|Conjugation|NOUN|VERB|ADJECTIVE|ADVERB|PREPOSITION|PRONOUN|CONJUGATION|CONJUNCTION)((?:\\s*;.*)?)$"
   },
   {
      "token" : ["text", "constant.numeric"],
      "regex" : "^(\\s*)(/\\d+)"
   },
   {
      "token" : ["text", "meta.use", "text", "constant.numeric", "text", "comment"],
      "regex" : "^(\\s*)([0-9A-Z\u00f1\u00e1\u00e9\u00ed\u00f3\u00fa\u00fc\\u00a2\\u00a0\\u00a5]{1,9})(\\s+)(\\d+)(?:(?:(\\s+)(?:(?:(;.*)?))?)?)$"
   },
   {
      "token" : "text",
      "regex" : "(^\\s*$)"
   },
   {
      "token" : ["text", "comment"],
      "regex" : "(\\s*)((?:;|;).*)$"
   },
   {
      "token" : "storage.type",
      "regex" : "(#INCLUDE|#DEFINE|#VAR|#IF|#ENDIF|#ECHO|#LOOKUP|#INCBIN|#DEFB|#DEFW|#HEX|#DBADDR|#USRPTR|#ELSE|#EXTERN|#SFX|#INT|#include|#define|#var|#if|#endif|#echo|#lookup|#incbin|#defb|#defw|#hex|#dbaddr|#usrptr|#extern|#sfx|#int|#else)\\b",
      "push" : "preprocessor__1"
   },
   {
      "token" : "meta.use",
      "regex" : "^([^/].*)$"
   },
   {
      defaultToken : "text",
   }
]
};
this.normalizeRules();
};
/* ------------------------ END ------------------------------ */



oop.inherits(SceHighlightRules, TextHighlightRules);
exports.SceHighlightRules = SceHighlightRules;
}
); //END -- define('ace/mode/sce_highlight_rules')

/*
 *  Now we define the mode (which references the highlighting rules).
 */
define(
   "ace/mode/sce",
   ["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sce_highlight_rules","ace/range"],
   function(require, exports, module) {
      "use strict";
      var oop                  = require("../lib/oop");
      var TextMode             = require("./text").Mode;
      var Range                = require("../range").Range;
      var SceHighlightRules = require("./sce_highlight_rules").SceHighlightRules;
      var Mode = function() {
         this.HighlightRules = SceHighlightRules;
      };
      oop.inherits(Mode, TextMode);
      (function() {
         this.lineCommentStart = "//";
         this.$id = "ace/mode/sce";
      }).call(Mode.prototype);
      exports.Mode = Mode;
   }
);

