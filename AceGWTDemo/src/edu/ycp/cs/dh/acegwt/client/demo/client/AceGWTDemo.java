package edu.ycp.cs.dh.acegwt.client.demo.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.VerticalPanel;

import edu.ycp.cs.dh.acegwt.client.ace.AceEditor;
import edu.ycp.cs.dh.acegwt.client.ace.AceEditorMode;
import edu.ycp.cs.dh.acegwt.client.ace.AceEditorTheme;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class AceGWTDemo implements EntryPoint {
	private AceEditor editor1;
	private AceEditor editor2;
	
	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		editor1 = new AceEditor();
		editor1.setWidth("600px");
		editor1.setHeight("300px");
		
		editor2 = new AceEditor();
		editor2.setWidth("600px");
		editor2.setHeight("300px");
		
		VerticalPanel mainPanel = new VerticalPanel();
		mainPanel.setWidth("100%");
		mainPanel.add(new Label("Label above!"));
		mainPanel.add(editor1);
		//mainPanel.add(new Label("Label between!"));
		
		// Create some buttons for testing various editor APIs
		HorizontalPanel buttonPanel = new HorizontalPanel();
		Button insertTextButton = new Button("Insert");
		insertTextButton.addClickHandler(new ClickHandler() {
			@Override
			public void onClick(ClickEvent event) {
				Window.alert("Cursor at: " + editor1.getCursorPosition());
				editor1.insertAtCursor("inserted text!");
			}
		});
		
		buttonPanel.add(insertTextButton);
		
		mainPanel.add(buttonPanel);
		
		mainPanel.add(editor2);
		mainPanel.add(new Label("Label below!"));
		
		RootPanel.get().add(mainPanel);
		
		editor1.startEditor(); // must be called before calling setTheme/setMode/etc.
		editor1.setTheme(AceEditorTheme.ECLIPSE);
		editor1.setMode(AceEditorMode.JAVA);
		
		editor2.startEditor();
		editor2.setTheme(AceEditorTheme.TWILIGHT);
		editor2.setMode(AceEditorMode.PERL);
	}
}
