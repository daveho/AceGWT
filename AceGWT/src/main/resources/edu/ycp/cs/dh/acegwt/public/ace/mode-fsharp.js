define("ace/mode/fsharp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function (require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
var FSharpHighlightRules = function () {

    var keywordMapper = this.createKeywordMapper({
        "variable": "this",
        "keyword": 'abstract|assert|base|begin|class|default|delegate|done|downcast|downto|elif\
|else|exception|extern|false|finally|function|global|inherit|inline|interface|internal|lazy|match\
|member|module|mutable|namespace|open|or|override|private|public|rec|return|return!|select|static\
|struct|then|to|true|try|typeof|upcast|use|use!|val|void|when|while|with|yield|yield!|__SOURCE_DIRECTORY__\
|as|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue\
|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall\
|trait|virtual|volatile|and|do|end|for|fun|if|in|let|let!|new|not|null|of|endif',
        "constant": "true|false"
    }, "identifier");

    var floatNumber = "(?:(?:(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))|(?:\\d+))(?:[eE][+-]?\\d+))|(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.)))";

    this.$rules = {
        "start": [
            {
              token: "variable.classes",
              regex: '\\[\\<[.]*\\>\\]'
            },
            {
                token: "comment",
                regex: '//.*$'
            },
            {
                token: "comment.start",
                regex: /\(\*/,
                push: "blockComment"
            },
            {
                token: "string",
                regex: "'.'"
            },
            {
                token: "string",
                regex: '"""',
                next  : [{
                    token : "constant.language.escape",
                    regex : /\\./,
                    next  : "qqstring"
                }, {
                    token : "string",
                    regex : '"""',
                    next  : "start"
                }, {
                    defaultToken: "string"
                }]
            },
            {
                token: "string",
                regex: '"',
                next  : [{
                    token : "constant.language.escape",
                    regex : /\\./,
                    next  : "qqstring"
                }, {
                    token : "string",
                    regex : '"',
                    next  : "start"
                }, {
                    defaultToken: "string"
                }]
            },
            {
                token: ["verbatim.string", "string"],
                regex: '(@?)(")',
                stateName : "qqstring",
                next  : [{
                    token : "constant.language.escape",
                    regex : '""'
                }, {
                    token : "string",
                    regex : '"',
                    next  : "start"
                }, {
                    defaultToken: "string"
                }]
            },
            {
                token: "constant.float",
                regex: "(?:" + floatNumber + "|\\d+)[jJ]\\b"
            },
            {
                token: "constant.float",
                regex: floatNumber
            },
            {
                token: "constant.integer",
                regex: "(?:(?:(?:[1-9]\\d*)|(?:0))|(?:0[oO]?[0-7]+)|(?:0[xX][\\dA-Fa-f]+)|(?:0[bB][01]+))\\b"
            },
            {
                token: ["keyword.type", "variable"],
                regex: "(type\\s)([a-zA-Z0-9_$\-]*\\b)"
            },
            {
                token: keywordMapper,
                regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            },
            {
                token: "keyword.operator",
                regex: "\\+\\.|\\-\\.|\\*\\.|\\/\\.|#|;;|\\+|\\-|\\*|\\*\\*\\/|\\/\\/|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|<-|="
            },
            {
                token: "paren.lpar",
                regex: "[[({]"
            },
            {
                token: "paren.rpar",
                regex: "[\\])}]"
            }
        ],
        blockComment: [{
            regex: /\(\*/,
            token: "comment.start",
            push: "blockComment"
        }, {
            regex: /\*\)/,
            token: "comment.end",
            next: "pop"
        }, {
            defaultToken: "comment"
        }]
    };
    this.normalizeRules();
};


oop.inherits(FSharpHighlightRules, TextHighlightRules);

exports.FSharpHighlightRules = FSharpHighlightRules;
});

define("ace/mode/fsharp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/fsharp_highlight_rules"], function (require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var FSharpHighlightRules = require("./fsharp_highlight_rules").FSharpHighlightRules;

    var Mode = function () {
        TextMode.call(this);
        this.HighlightRules = FSharpHighlightRules;
    };

    oop.inherits(Mode, TextMode);


    (function () {
        this.lineCommentStart = "//";
        this.blockComment = {start: "(*", end: "*)"};


        this.$id = "ace/mode/fsharp";
    }).call(Mode.prototype);

    exports.Mode = Mode;
});
                (function() {
                    window.require(["ace/mode/fsharp"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            