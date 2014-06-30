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
 * A completion proposed by an {@link AceCompletionProvider}. 
 * 
 * <strong>Warning</strong>: this is an experimental feature of AceGWT.
 * It is possible that the API will change in an incompatible way
 * in future releases.
 */
public class AceCompletionValue extends AceCompletion {
	private final String caption;
	private final String value;
	private final int score;
	private final String meta;

	/**
	 * Constructor. 
	 * 
	 * @param name   the name of the completion
	 * @param value  the text value of the completion
	 * @param meta   the "meta" (category) of the completion
	 * @param snippet the "snippet"
	 */
	public AceCompletionValue(String name, String value, int score, String meta) {
		this.caption = name;
		this.value = value;
		this.score = score;
		this.meta = meta;
	}
	
	/**
	 * Convert to a native JS object in the format expected
	 * by the Ace code completion callback.
	 * 
	 * @return native JS object
	 */
	native JavaScriptObject toJsObject() /*-{
		return {
			caption: this.@edu.ycp.cs.dh.acegwt.client.ace.AceCompletionValue::caption,
			value: this.@edu.ycp.cs.dh.acegwt.client.ace.AceCompletionValue::value,
			score: this.@edu.ycp.cs.dh.acegwt.client.ace.AceCompletionValue::score,
			meta: this.@edu.ycp.cs.dh.acegwt.client.ace.AceCompletionValue::meta
		};
	}-*/;
}