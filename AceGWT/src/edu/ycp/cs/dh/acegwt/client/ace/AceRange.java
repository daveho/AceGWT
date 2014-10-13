// Copyright (c) 2011-2014, David H. Hovemeyer <david.hovemeyer@gmail.com>
// Copyright (c) 2014, Chris Ainsley <takapa@gmail.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Represents an Ace Range Object.
 */
public final class AceRange extends JavaScriptObject {
	
	protected AceRange() {
	}
	
	public static AceRange create(int startRow, int startColumn, int endRow, int endColumn) {
		return toJsObject(startRow, startColumn, endRow, endColumn).cast();
	}

	/**
	 * Detaches both, start and end from this {@link AceRange}.
	 */
	public void detach() {
		detachStart();
		detachEnd();
	}
	
	/**
	 * Detaches the start anchor from this {@link AceRange}.
	 */
	public native void detachStart() /*-{
		this.start.detach();
	}-*/;

	/**
	 * Detaches the end achor from this {@link AceRange}.
	 */
	public native void detachEnd() /*-{
		this.end.detach();
	}-*/;
	
	/**
	 * @return creates a new Range object.
	 */
	static native JavaScriptObject toJsObject(int startRow, int startColumn, int endRow, int endColumn) /*-{
		var Range = $wnd.require('ace/range').Range;
		var range = new Range(startRow, startColumn, endRow, endColumn);
		return range;
	}-*/;
}