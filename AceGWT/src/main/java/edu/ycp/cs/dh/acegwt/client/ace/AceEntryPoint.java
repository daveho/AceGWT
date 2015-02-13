package edu.ycp.cs.dh.acegwt.client.ace;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.ScriptInjector;

public class AceEntryPoint implements EntryPoint {

    @Override
    public void onModuleLoad() {
        ScriptInjector.fromString( AceResources.instance.ace().getText() ).setWindow( ScriptInjector.TOP_WINDOW ).inject();
    }
}
