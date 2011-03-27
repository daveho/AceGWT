package edu.ycp.cs.dh.acegwt.client.ace;

/**
 * Enumeration for ACE editor themes.
 * Note that the corresponding .js file must be loaded
 * before a theme can be set.
 */
public enum AceEditorTheme {
	CLOUDS("clouds"),
	CLOUDS_MIDNIGHT("clouds_midnight"),
	COBALT("cobalt"),
	DAWN("dawn"),
	ECLIPSE("eclipse"),
	IDLE_FINGERS("idle_fingers"),
	KR_THEME("kr_theme"),
	MERBIVORE("merbivore"),
	MERBIVORE_SOFT("merbivore_soft"),
	MONO_INDUSTRIAL("mono_industrial"),
	MONOKAI("monokai"),
	PASTEL_ON_DARK("pastel_on_dark"),
	TWILIGHT("twilight"),
	VIBRANT_INK("vibrant_ink");
	
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
