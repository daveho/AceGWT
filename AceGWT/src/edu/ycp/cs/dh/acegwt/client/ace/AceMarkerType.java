package edu.ycp.cs.dh.acegwt.client.ace;

public enum AceMarkerType {
	FULL_LINE("fullLine"),
	SCREEN_LINE("screenLine"),
	TEXT("text");

	private final String name;

	private AceMarkerType(final String name) {
		this.name = name;
	}

	/**
	 * @return the marker type name (e.g., "error")
	 */
	public String getName() {
		return name;
	}
}
