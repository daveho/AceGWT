package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.JavaScriptObject;

public class AceCompletionCustomFunction  extends AceCompletion {
	/**
	 * The caption of the completion (this is the left aligned autocompletion name on the left side of items in the dropdown box. If only a single completion is available in a context, then the caption will not be seen.
	 */
	private final String caption;
	
	/**
	 * The text value of the completion. This does not need to be escaped.
	 */
	private final AceCompletionCustomFunctionCallback insertMatch;
	
	
	/**
	 * "meta" means the category of the substitution (this appears right aligned on the dropdown list). This is freeform description and can contain anything but typically a very short category description (9 chars or less) such as "function" or "param" or "template".
	 */
	private final String meta;

	/**
	 * The score is the value assigned to the autocompletion option. Scores with a higher value will appear closer to the top. Items with an identical score are sorted alphbetically by caption in the drop down.
	 */
	private final int score;
	
	/**
	 * The score is the value assigned to the autocompletion option. Scores with a higher value will appear closer to the top. Items with an identical score are sorted alphbetically by caption in the drop down.
	 */
	private final String tooltip;

	
	/**
	 * Constructor. 
	 * 
	 * @param caption The caption of the completion (this is the left aligned autocompletion name on the left side of items in the dropdown box. If only a single completion is available in a context, then the caption will not be seen.
	 * @param value  The text value of the completion. This does not need to be escaped.
	 * @param meta "meta" means the category of the substitution (this appears right aligned on the dropdown list). This is freeform description and can contain anything but typically a very short category description (9 chars or less) such as "function" or "param" or "template".
	 * @param tooltip "tooltip" is an escaped html tooltip to be displayed when the completion option is displayed, this can be null. 
	 * @param score  The score is the value assigned to the autocompletion option. Scores with a higher value will appear closer to the top. Items with an identical score are sorted alphbetically by caption in the drop down.
	 */
	public AceCompletionCustomFunction(String name, AceCompletionCustomFunctionCallback insertMatch, String meta, String tooltip, int score) {
		this.caption = name;
		this.insertMatch = insertMatch;
		this.score = score;
		this.tooltip = tooltip;
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
				caption: this.@edu.ycp.cs.dh.acegwt.client.ace.AceCompletionCustomFunction::caption,
				insertMatch: this.@edu.ycp.cs.dh.acegwt.client.ace.AceCompletionCustomFunction::insertMatch,
				score: this.@edu.ycp.cs.dh.acegwt.client.ace.AceCompletionCustomFunction::score,
				meta: this.@edu.ycp.cs.dh.acegwt.client.ace.AceCompletionCustomFunction::meta,
			    aceGwtHtmlTooltip: this.@edu.ycp.cs.dh.acegwt.client.ace.AceCompletionCustomFunction::tooltip
			};

	}-*/;
}
