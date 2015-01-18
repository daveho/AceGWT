package edu.ycp.cs.dh.acegwt.client.ace;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.core.client.JavaScriptObject;

public class AceSelection {
	private final JavaScriptObject selection;
	private final AceSelectionListener rootListener;
	private final List<AceSelectionListener> subListeners = new ArrayList<AceSelectionListener>();
	
	public AceSelection(JavaScriptObject selection) {
		this.selection = selection;
		this.rootListener = new AceSelectionListener() {
			@Override
			public void onChangeSelection(AceSelection ignore) {
				for (AceSelectionListener lst : subListeners)
					lst.onChangeSelection(AceSelection.this);
			}
		};
		registerRootListener(selection, rootListener);
	}
	
	private static native void registerRootListener(JavaScriptObject selection, AceSelectionListener rootListener) /*-{
		selection.addEventListener("changeSelection", function() {
			rootListener.@edu.ycp.cs.dh.acegwt.client.ace.AceSelectionListener::onChangeSelection(Ledu/ycp/cs/dh/acegwt/client/ace/AceSelection;)(null);
		});
	}-*/;
	
	public void addSelectionListener(AceSelectionListener listener) {
		subListeners.add(listener);
	}
	
	public void removeSelectionListener(AceSelectionListener listener) {
		subListeners.remove(listener);
	}

	public native boolean isEmpty() /*-{
		return this.@edu.ycp.cs.dh.acegwt.client.ace.AceSelection::selection.isEmpty();
	}-*/;
	
	public native boolean isMultiLine() /*-{
		return this.@edu.ycp.cs.dh.acegwt.client.ace.AceSelection::selection.isMultiLine();
	}-*/;

	private AceEditorCursorPosition getCursorPositionImpl(final double row, final double column) {
		return new AceEditorCursorPosition((int) row, (int) column);
	}

	public native AceEditorCursorPosition getSelectionLead() /*-{
		var pos = this.@edu.ycp.cs.dh.acegwt.client.ace.AceSelection::selection.getSelectionLead();
		return this.@edu.ycp.cs.dh.acegwt.client.ace.AceSelection::getCursorPositionImpl(DD)(pos.row, pos.column);
	}-*/;
	
	public native AceEditorCursorPosition getSelectionAnchor() /*-{
		var pos = this.@edu.ycp.cs.dh.acegwt.client.ace.AceSelection::selection.getSelectionAnchor();
		return this.@edu.ycp.cs.dh.acegwt.client.ace.AceSelection::getCursorPositionImpl(DD)(pos.row, pos.column);
	}-*/;
	
	public native boolean isBackwards() /*-{
		return this.@edu.ycp.cs.dh.acegwt.client.ace.AceSelection::selection.isBackwards();
	}-*/;

	public native void clearSelection() /*-{
		this.@edu.ycp.cs.dh.acegwt.client.ace.AceSelection::selection.clearSelection();
	}-*/;
	
	public native void selectAll() /*-{
		this.@edu.ycp.cs.dh.acegwt.client.ace.AceSelection::selection.selectAll();
	}-*/;

	public native void select(int fromRow, int fromColumn, int toRow, int toColumn) /*-{
		this.@edu.ycp.cs.dh.acegwt.client.ace.AceSelection::selection.setSelectionAnchor(fromRow, fromColumn);
		this.@edu.ycp.cs.dh.acegwt.client.ace.AceSelection::selection.selectTo(toRow, toColumn);
	}-*/;

	public native void selectLine() /*-{
		var s = this.@edu.ycp.cs.dh.acegwt.client.ace.AceSelection::selection;
		var pos = s.getSelectionLead();
		var len = s.doc.getLine(pos.row).length;
		s.setSelectionAnchor(pos.row, 0);
		s.selectTo(pos.row, len);
	}-*/;
}