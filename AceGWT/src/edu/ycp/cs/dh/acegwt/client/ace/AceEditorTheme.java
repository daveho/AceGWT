// Copyright (c) 2011 David H. Hovemeyer <david.hovemeyer@gmail.com>
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

/**
 * Enumeration for ACE editor themes.
 * Note that the corresponding .js file must be loaded
 * before a theme can be set.
 */
public enum AceEditorTheme {
	AMBIANCE("ambiance"),
	CHROME("chrome"),
	CLOUDS("clouds"),
	CLOUDS_MIDNIGHT("clouds_midnight"),
	COBALT("cobalt"),
	CRIMSON_EDITOR("crimson_editor"),
	DAWN("dawn"),
	DREAMWEAVER("dreamweaver"),
	ECLIPSE("eclipse"),
	GITHUB("github"),
	IDLE_FINGERS("idle_fingers"),
	KR_THEME("kr_theme"),
	KR("kr"),
	MERBIVORE("merbivore"),
	MERBIVORE_SOFT("merbivore_soft"),
	MONO_INDUSTRIAL("mono_industrial"),
	MONOKAI("monokai"),
	PASTEL_ON_DARK("pastel_on_dark"),
	SOLARIZED_DARK("solarized_dark"),
	SOLARIZED_LIGHT("solarized_light"),
	TEXTMATE("textmate"),
	TOMORROW_NIGHT_BLUE("tomorrow_night_blue"),
	TOMORROW_NIGHT_BRIGHT("tomorrow_night_bright"),
	TOMORROW_NIGHT_EIGHTIES("tomorrow_night_eighties"),
	TOMORROW_NIGHT("tomorrow_night"),
	TOMORROW("tomorrow"),
	TWILIGHT("twilight"),
	VIBRANT_INK("vibrant_ink"),
	XCODE("xcode");
	
	private final String name;
	
	private AceEditorTheme(String name) {
		this.name = name;
	}
	
	/**
	 * @return the theme name (e.g., "eclipse")
	 */
	public String getName() {
		return name;
	}
}
