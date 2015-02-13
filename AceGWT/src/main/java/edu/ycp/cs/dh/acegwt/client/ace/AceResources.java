package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.GWT;
import com.google.gwt.resources.client.ClientBundle;
import com.google.gwt.resources.client.TextResource;

/**
* Автор :          dima
* Дата создания :  13.02.15 19:01
*/
public interface AceResources extends ClientBundle {

    public static AceResources instance = GWT.create( AceResources.class );

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ace.js")
    TextResource ace();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-beautify.js")
    TextResource ext_beautify();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-chromevox.js")
    TextResource ext_chromevox();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-elastic_tabstops_lite.js")
    TextResource ext_elastic_tabstops_lite();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-emmet.js")
    TextResource ext_emmet();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-error_marker.js")
    TextResource ext_error_marker();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-keybinding_menu.js")
    TextResource ext_keybinding_menu();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-language_tools.js")
    TextResource ext_language_tools();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-linking.js")
    TextResource ext_linking();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-modelist.js")
    TextResource ext_modelist();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-old_ie.js")
    TextResource ext_old_ie();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-searchbox.js")
    TextResource ext_searchbox();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-settings_menu.js")
    TextResource ext_settings_menu();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-spellcheck.js")
    TextResource ext_spellcheck();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-split.js")
    TextResource ext_split();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-static_highlight.js")
    TextResource ext_static_highlight();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-statusbar.js")
    TextResource ext_statusbar();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-textarea.js")
    TextResource ext_textarea();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-themelist.js")
    TextResource ext_themelist();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/ext-whitespace.js")
    TextResource ext_whitespace();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/keybinding-emacs.js")
    TextResource keybinding_emacs();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/keybinding-vim.js")
    TextResource keybinding_vim();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-abap.js")
    TextResource mode_abap();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-actionscript.js")
    TextResource mode_actionscript();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-ada.js")
    TextResource mode_ada();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-apache_conf.js")
    TextResource mode_apache_conf();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-applescript.js")
    TextResource mode_applescript();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-asciidoc.js")
    TextResource mode_asciidoc();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-assembly_x86.js")
    TextResource mode_assembly_x86();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-autohotkey.js")
    TextResource mode_autohotkey();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-batchfile.js")
    TextResource mode_batchfile();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-c9search.js")
    TextResource mode_c9search();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-c_cpp.js")
    TextResource mode_c_cpp();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-cirru.js")
    TextResource mode_cirru();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-clojure.js")
    TextResource mode_clojure();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-cobol.js")
    TextResource mode_cobol();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-coffee.js")
    TextResource mode_coffee();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-coldfusion.js")
    TextResource mode_coldfusion();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-csharp.js")
    TextResource mode_csharp();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-css.js")
    TextResource mode_css();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-curly.js")
    TextResource mode_curly();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-d.js")
    TextResource mode_d();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-dart.js")
    TextResource mode_dart();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-diff.js")
    TextResource mode_diff();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-django.js")
    TextResource mode_django();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-dockerfile.js")
    TextResource mode_dockerfile();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-dot.js")
    TextResource mode_dot();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-eiffel.js")
    TextResource mode_eiffel();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-ejs.js")
    TextResource mode_ejs();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-elixir.js")
    TextResource mode_elixir();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-elm.js")
    TextResource mode_elm();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-erlang.js")
    TextResource mode_erlang();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-forth.js")
    TextResource mode_forth();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-ftl.js")
    TextResource mode_ftl();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-gcode.js")
    TextResource mode_gcode();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-gherkin.js")
    TextResource mode_gherkin();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-gitignore.js")
    TextResource mode_gitignore();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-glsl.js")
    TextResource mode_glsl();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-golang.js")
    TextResource mode_golang();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-groovy.js")
    TextResource mode_groovy();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-haml.js")
    TextResource mode_haml();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-handlebars.js")
    TextResource mode_handlebars();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-haskell.js")
    TextResource mode_haskell();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-haxe.js")
    TextResource mode_haxe();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-html.js")
    TextResource mode_html();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-html_ruby.js")
    TextResource mode_html_ruby();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-ini.js")
    TextResource mode_ini();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-io.js")
    TextResource mode_io();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-jack.js")
    TextResource mode_jack();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-jade.js")
    TextResource mode_jade();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-java.js")
    TextResource mode_java();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-javascript.js")
    TextResource mode_javascript();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-json.js")
    TextResource mode_json();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-jsoniq.js")
    TextResource mode_jsoniq();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-jsp.js")
    TextResource mode_jsp();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-jsx.js")
    TextResource mode_jsx();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-julia.js")
    TextResource mode_julia();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-latex.js")
    TextResource mode_latex();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-less.js")
    TextResource mode_less();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-liquid.js")
    TextResource mode_liquid();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-lisp.js")
    TextResource mode_lisp();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-livescript.js")
    TextResource mode_livescript();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-logiql.js")
    TextResource mode_logiql();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-lsl.js")
    TextResource mode_lsl();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-lua.js")
    TextResource mode_lua();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-luapage.js")
    TextResource mode_luapage();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-lucene.js")
    TextResource mode_lucene();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-makefile.js")
    TextResource mode_makefile();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-markdown.js")
    TextResource mode_markdown();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-mask.js")
    TextResource mode_mask();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-matlab.js")
    TextResource mode_matlab();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-mel.js")
    TextResource mode_mel();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-mushcode.js")
    TextResource mode_mushcode();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-mysql.js")
    TextResource mode_mysql();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-nix.js")
    TextResource mode_nix();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-objectivec.js")
    TextResource mode_objectivec();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-ocaml.js")
    TextResource mode_ocaml();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-pascal.js")
    TextResource mode_pascal();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-perl.js")
    TextResource mode_perl();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-pgsql.js")
    TextResource mode_pgsql();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-php.js")
    TextResource mode_php();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-plain_text.js")
    TextResource mode_plain_text();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-powershell.js")
    TextResource mode_powershell();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-praat.js")
    TextResource mode_praat();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-prolog.js")
    TextResource mode_prolog();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-properties.js")
    TextResource mode_properties();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-protobuf.js")
    TextResource mode_protobuf();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-python.js")
    TextResource mode_python();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-r.js")
    TextResource mode_r();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-rdoc.js")
    TextResource mode_rdoc();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-rhtml.js")
    TextResource mode_rhtml();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-ruby.js")
    TextResource mode_ruby();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-rust.js")
    TextResource mode_rust();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-sass.js")
    TextResource mode_sass();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-scad.js")
    TextResource mode_scad();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-scala.js")
    TextResource mode_scala();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-scheme.js")
    TextResource mode_scheme();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-scss.js")
    TextResource mode_scss();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-sh.js")
    TextResource mode_sh();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-sjs.js")
    TextResource mode_sjs();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-smarty.js")
    TextResource mode_smarty();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-snippets.js")
    TextResource mode_snippets();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-soy_template.js")
    TextResource mode_soy_template();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-space.js")
    TextResource mode_space();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-sql.js")
    TextResource mode_sql();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-stylus.js")
    TextResource mode_stylus();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-svg.js")
    TextResource mode_svg();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-tcl.js")
    TextResource mode_tcl();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-tex.js")
    TextResource mode_tex();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-text.js")
    TextResource mode_text();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-textile.js")
    TextResource mode_textile();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-toml.js")
    TextResource mode_toml();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-twig.js")
    TextResource mode_twig();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-typescript.js")
    TextResource mode_typescript();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-vala.js")
    TextResource mode_vala();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-vbscript.js")
    TextResource mode_vbscript();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-velocity.js")
    TextResource mode_velocity();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-verilog.js")
    TextResource mode_verilog();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-vhdl.js")
    TextResource mode_vhdl();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-xml.js")
    TextResource mode_xml();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-xquery.js")
    TextResource mode_xquery();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/mode-yaml.js")
    TextResource mode_yaml();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-ambiance.js")
    TextResource theme_ambiance();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-chaos.js")
    TextResource theme_chaos();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-chrome.js")
    TextResource theme_chrome();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-cloud9_day.js")
    TextResource theme_cloud9_day();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-cloud9_night.js")
    TextResource theme_cloud9_night();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-cloud9_night_low_color.js")
    TextResource theme_cloud9_night_low_color();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-clouds.js")
    TextResource theme_clouds();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-clouds_midnight.js")
    TextResource theme_clouds_midnight();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-cobalt.js")
    TextResource theme_cobalt();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-crimson_editor.js")
    TextResource theme_crimson_editor();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-dawn.js")
    TextResource theme_dawn();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-dreamweaver.js")
    TextResource theme_dreamweaver();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-eclipse.js")
    TextResource theme_eclipse();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-github.js")
    TextResource theme_github();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-idle_fingers.js")
    TextResource theme_idle_fingers();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-katzenmilch.js")
    TextResource theme_katzenmilch();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-kr_theme.js")
    TextResource theme_kr_theme();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-kuroir.js")
    TextResource theme_kuroir();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-merbivore.js")
    TextResource theme_merbivore();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-merbivore_soft.js")
    TextResource theme_merbivore_soft();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-mono_industrial.js")
    TextResource theme_mono_industrial();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-monokai.js")
    TextResource theme_monokai();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-pastel_on_dark.js")
    TextResource theme_pastel_on_dark();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-solarized_dark.js")
    TextResource theme_solarized_dark();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-solarized_light.js")
    TextResource theme_solarized_light();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-terminal.js")
    TextResource theme_terminal();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-textmate.js")
    TextResource theme_textmate();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-tomorrow.js")
    TextResource theme_tomorrow();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-tomorrow_night.js")
    TextResource theme_tomorrow_night();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-tomorrow_night_blue.js")
    TextResource theme_tomorrow_night_blue();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-tomorrow_night_bright.js")
    TextResource theme_tomorrow_night_bright();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-tomorrow_night_eighties.js")
    TextResource theme_tomorrow_night_eighties();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-twilight.js")
    TextResource theme_twilight();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-vibrant_ink.js")
    TextResource theme_vibrant_ink();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/theme-xcode.js")
    TextResource theme_xcode();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/worker-coffee.js")
    TextResource worker_coffee();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/worker-css.js")
    TextResource worker_css();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/worker-html.js")
    TextResource worker_html();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/worker-javascript.js")
    TextResource worker_javascript();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/worker-json.js")
    TextResource worker_json();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/worker-lua.js")
    TextResource worker_lua();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/worker-php.js")
    TextResource worker_php();

    @Source("edu/ycp/cs/dh/acegwt/pubilc/ace-min/worker-xquery.js")
    TextResource worker_xquery();


}
