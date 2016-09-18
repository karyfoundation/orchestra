
//
// Copyright 2016 Kary Foundation, Inc.
//   Author: Pouya Kary <k@karyfoundation.org>
//

//
// ─── ELECTRON LOADS ─────────────────────────────────────────────────────────────
//

    const { ipcRenderer } = require( 'electron' );
    const OrchestraWindow = require( 'electron' ).remote.getCurrentWindow( );
    const openExternal    = require('electron').shell.openExternal;
    const clipboard       = require('electron').clipboard;


    const path = require('path');
	const fs   = require('fs');

//
// ─── CONSTANTS ──────────────────────────────────────────────────────────────────
//

    const EditorWindowScreenElement = 'EditorView';
    const PlaygroundWindowScreenElement = 'PlaygroundView';
    const TabsPlaceholder = 'header-tabs';
    const playgroundEditorID = 'playground-editor';
    var __SPACE_UNICODE_STRING__ = "\\u0020";

//
// ─── TAB MANAGER ────────────────────────────────────────────────────────────────
//

    var CurrentActiveView = 'editor';

//
// ─── EDITOR ─────────────────────────────────────────────────────────────────────
//

    var QuartetGenerator;
    var quartetActiveBlockId = '';
    var workspace;
    var CompiledRegEx = '';
    var ComposeBlock;

//
// ─── PLAYGROUND ─────────────────────────────────────────────────────────────────
//

    var playgroundEditor;

// ────────────────────────────────────────────────────────────────────────────────
