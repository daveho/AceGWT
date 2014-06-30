package edu.ycp.cs.dh.acegwt.client.demo.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.CheckBox;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.InlineLabel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.VerticalPanel;

import edu.ycp.cs.dh.acegwt.client.ace.AceAnnotationType;
import edu.ycp.cs.dh.acegwt.client.ace.AceCompletion;
import edu.ycp.cs.dh.acegwt.client.ace.AceCompletionCallback;
import edu.ycp.cs.dh.acegwt.client.ace.AceCompletionProvider;
import edu.ycp.cs.dh.acegwt.client.ace.AceCompletionSnippet;
import edu.ycp.cs.dh.acegwt.client.ace.AceCompletionSnippetSegment;
import edu.ycp.cs.dh.acegwt.client.ace.AceCompletionSnippetSegmentLiteral;
import edu.ycp.cs.dh.acegwt.client.ace.AceCompletionSnippetSegmentTabstopItem;
import edu.ycp.cs.dh.acegwt.client.ace.AceCompletionValue;
import edu.ycp.cs.dh.acegwt.client.ace.AceEditor;
import edu.ycp.cs.dh.acegwt.client.ace.AceEditorCallback;
import edu.ycp.cs.dh.acegwt.client.ace.AceEditorCursorPosition;
import edu.ycp.cs.dh.acegwt.client.ace.AceEditorMode;
import edu.ycp.cs.dh.acegwt.client.ace.AceEditorTheme;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class AceGWTDemo implements EntryPoint {
	private AceEditor editor1;
	private AceEditor editor2;
	private InlineLabel rowColLabel;
	
	private static final String JAVA_TEXT =
			"public class Hello {\n" +
			"\tpublic static void main(String[] args) {\n" +
			"\t\tSystem.out.println(\"Hello, world!\");\n" +
			"\t}\n" +
			"}\n";
	
	private static class MyCompletionProvider implements AceCompletionProvider {
		@Override		

		public void getProposals(AceEditor editor, AceEditorCursorPosition pos, String prefix, AceCompletionCallback callback) {
			GWT.log("sending completion proposals");
			callback.invokeWithCompletions(new AceCompletion[]{
					new AceCompletionValue("first", "firstcompletion", 10, "custom"),
					new AceCompletionValue("second", "secondcompletion", 11, "custom"),
					new AceCompletionValue("third", "thirdcompletion", 12, "custom"),
					new AceCompletionSnippet("fourth (snippets)",
							new AceCompletionSnippetSegment[]{
							new AceCompletionSnippetSegmentLiteral("filler_"),
							new AceCompletionSnippetSegmentTabstopItem("tabstop1"),
							new AceCompletionSnippetSegmentLiteral("_\\filler_"), // putting backslash in here to prove escaping is working
							new AceCompletionSnippetSegmentTabstopItem("tabstop2"),
							new AceCompletionSnippetSegmentLiteral("_$filler_"), // putting dollar in here to prove escaping is working
							new AceCompletionSnippetSegmentTabstopItem("tabstop3"),
							new AceCompletionSnippetSegmentLiteral("\nnextlinefiller_"),
							new AceCompletionSnippetSegmentTabstopItem("tabstop}4"),
							new AceCompletionSnippetSegmentLiteral("_filler_"),
							new AceCompletionSnippetSegmentTabstopItem("") /* Empty tabstop -- tab to end of replacement text */
					},14, "csnip")
			});
		}
	}
	
	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		
		// create first AceEditor widget
		editor1 = new AceEditor();
		editor1.setWidth("800px");
		editor1.setHeight("300px");
		
		// create second AceEditor widget
		editor2 = new AceEditor();
		editor2.setWidth("800px");
		editor2.setHeight("300px");
		
		// Try out custom code completer
		AceEditor.addCompletionProvider(new MyCompletionProvider());
		
		// build the UI
		buildUI();
		
		// start the first editor and set its theme and mode
		editor1.startEditor(); // must be called before calling setTheme/setMode/etc.
		editor1.setTheme(AceEditorTheme.ECLIPSE);
		editor1.setMode(AceEditorMode.JAVA);
		
		// use cursor position change events to keep a label updated
		// with the current row/col
		editor1.addOnCursorPositionChangeHandler(new AceEditorCallback() {
			@Override
			public void invokeAceCallback(JavaScriptObject obj) {
				updateEditor1CursorPosition();
			}
		});
		updateEditor1CursorPosition(); // initial update
		
		// set some initial text in editor 1
		editor1.setText(JAVA_TEXT);
		
		// add some annotations
		editor1.addAnnotation(0, 1, "What's up?", AceAnnotationType.WARNING);
		editor1.addAnnotation(2, 1, "This code is lame", AceAnnotationType.ERROR);
		editor1.setAnnotations();
		
		// start the second editor and set its theme and mode
		editor2.startEditor();
		editor2.setTheme(AceEditorTheme.TWILIGHT);
		editor2.setMode(AceEditorMode.PERL);
	}

	/**
	 * This method builds the UI.
	 * It creates UI widgets that exercise most/all of the AceEditor methods,
	 * so it's a bit of a kitchen sink.
	 */
	private void buildUI() {
		VerticalPanel mainPanel = new VerticalPanel();
		mainPanel.setWidth("100%");
		
		mainPanel.add(new Label("Label above!"));
		
		mainPanel.add(editor1);
		
		// Label to display current row/column
		rowColLabel = new InlineLabel("");
		mainPanel.add(rowColLabel);
		
		// Create some buttons for testing various editor APIs
		HorizontalPanel buttonPanel = new HorizontalPanel();
		
		// Add button to insert text at current cursor position
		Button insertTextButton = new Button("Insert");
		insertTextButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				//Window.alert("Cursor at: " + editor1.getCursorPosition());
				editor1.insertAtCursor("inserted text!");
			}
		});
		buttonPanel.add(insertTextButton);
		
		// Add check box to enable/disable soft tabs
		final CheckBox softTabsBox = new CheckBox("Soft tabs");
		softTabsBox.setValue(true); // I think soft tabs is the default
		softTabsBox.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				editor1.setUseSoftTabs(softTabsBox.getValue());
			}
		});
		buttonPanel.add(softTabsBox);
		
		// add text box and button to set tab size
		final TextBox tabSizeTextBox = new TextBox();
		tabSizeTextBox.setWidth("4em");
		Button setTabSizeButton = new Button("Set tab size");
		setTabSizeButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				editor1.setTabSize(Integer.parseInt(tabSizeTextBox.getText()));
			}
		});
		buttonPanel.add(new InlineLabel("Tab size"));
		buttonPanel.add(tabSizeTextBox);
		buttonPanel.add(setTabSizeButton);
		
		// add text box and button to go to a given line
		final TextBox gotoLineTextBox = new TextBox();
		gotoLineTextBox.setWidth("4em");
		Button gotoLineButton = new Button("Go to line");
		gotoLineButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				editor1.gotoLine(Integer.parseInt(gotoLineTextBox.getText()));
			}
		});
		buttonPanel.add(new InlineLabel("Go to line"));
		buttonPanel.add(gotoLineTextBox);
		buttonPanel.add(gotoLineButton);
		
		// checkbox to set whether or not horizontal scrollbar is always visible
		final CheckBox hScrollBarAlwaysVisibleBox = new CheckBox("H scrollbar");
		hScrollBarAlwaysVisibleBox.setValue(true);
		hScrollBarAlwaysVisibleBox.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				editor1.setHScrollBarAlwaysVisible(hScrollBarAlwaysVisibleBox.getValue());
			}
		});
		buttonPanel.add(hScrollBarAlwaysVisibleBox);
		
		// checkbox to show/hide gutter
		final CheckBox showGutterBox = new CheckBox("Show gutter");
		showGutterBox.setValue(true);
		showGutterBox.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				editor1.setShowGutter(showGutterBox.getValue());
			}
		});
		buttonPanel.add(showGutterBox);
		
		// checkbox to set/unset readonly mode
		final CheckBox readOnlyBox = new CheckBox("Read only");
		readOnlyBox.setValue(false);
		readOnlyBox.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				editor1.setReadOnly(readOnlyBox.getValue());
			}
		});
		buttonPanel.add(readOnlyBox);
		
		// checkbox to show/hide print margin
		final CheckBox showPrintMarginBox = new CheckBox("Show print margin");
		showPrintMarginBox.setValue(true);
		showPrintMarginBox.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				editor1.setShowPrintMargin(showPrintMarginBox.getValue());
			}
		});
		buttonPanel.add(showPrintMarginBox);
		
		// checkbox to enable/disable autocomplete
		final CheckBox enableAutocompleteBox = new CheckBox("Enable autocomplete");
		enableAutocompleteBox.setValue(false);
		enableAutocompleteBox.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				editor1.setAutocompleteEnabled(enableAutocompleteBox.getValue());
			}
		});
		buttonPanel.add(enableAutocompleteBox);
		
		// Test for AceEditor.getRow
		final Button clickMe = new Button("Click me!");
		clickMe.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				AceEditorCursorPosition pos = editor1.getCursorPosition();
				String line = editor1.getLine(pos.getRow());
				Window.alert("Current line is: " + line);
			}
		});
		buttonPanel.add(clickMe);
		
		mainPanel.add(buttonPanel);
		
		mainPanel.add(editor2);
		mainPanel.add(new Label("Label below!"));
		
		RootPanel.get().add(mainPanel);
	}

	private void updateEditor1CursorPosition() {
		rowColLabel.setText(editor1.getCursorPosition().toString());
	}
}
