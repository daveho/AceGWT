package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArrayString;


/**
 * 
 * @author Chris Ainsley
 *
 */
public interface AceEditorDeltaCallback {
	
	public void onInsertText(AceRange range, String text);
	
	public void onInsertLines(AceRange range, JsArrayString lines);
	
	public void onRemoveText(AceRange range, String text);
	
	public void onRemoveLines(AceRange range, JsArrayString lines);
	
	public void onUnhandled(JavaScriptObject other); 
	
}
