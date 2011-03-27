package edu.ycp.cs.dh.acegwt.client.demo.client;

import com.google.gwt.core.client.EntryPoint;
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
	private AceEditor editor;
	
	/**
	 * This is the entry point method.
	 */
	public void onModuleLoad() {
		editor = new AceEditor();
		editor.setWidth("600px");
		editor.setHeight("400px");
		
		VerticalPanel mainPanel = new VerticalPanel();
		mainPanel.setWidth("100%");
		mainPanel.add(new Label("Label above!"));
		mainPanel.add(editor);
		mainPanel.add(new Label("Label below!"));
		
		RootPanel.get().add(mainPanel);
		
		editor.startEditor(); // must be called before calling setTheme/setMode/etc.
		editor.setTheme(AceEditorTheme.ECLIPSE);
		editor.setMode(AceEditorMode.JAVA);
	}
}
