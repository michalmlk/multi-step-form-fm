import { FC, ReactElement, useRef } from 'react';

import { Button, Typography } from '@mui/material';
import { Editor } from '@monaco-editor/react';
import { EditorFooter, EditorHeader, EditorOverlay } from './SchemaEditor.styles.tsx';

interface SchemaEditorProps {
    onCancel: () => void;
    onSave: () => void;
    isOpen: boolean;
}


const SchemaEditor: FC<SchemaEditorProps> = ({ onCancel, onSave, isOpen }): ReactElement => {
    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    function handleEditorChange(value, event) {
        console.log('here is the current model value:', value);
    }

    return (
        <EditorOverlay isOpen={isOpen}>
            <EditorHeader>
                <Typography component="h2">Edit schema</Typography>
            </EditorHeader>
            <Editor height="calc(100vh - 120px)" defaultValue={'//some comment'} defaultLanguage="javascript"
                    onMount={handleEditorDidMount} onChange={handleEditorChange} />
            <EditorFooter>
                <Button variant="outlined" onClick={onCancel}>Cancel</Button>
                <Button variant="contained" onClick={onSave}>Save</Button>
            </EditorFooter>
        </EditorOverlay>
    );
};

export default SchemaEditor;