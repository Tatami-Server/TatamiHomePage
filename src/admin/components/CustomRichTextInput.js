import React from 'react';
import {
    DefaultEditorOptions,
    RichTextInput,
    RichTextInputToolbar,
    LevelSelect,
    FormatButtons,
    AlignmentButtons,
    ListButtons,
    LinkButtons,
    QuoteButtons,
    ClearButtons,
    useTiptapEditor,
} from 'ra-input-rich-text';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Remove from '@mui/icons-material/Remove';
import { Button } from '@mui/material';


const MyRichTextInputToolbar = ({ size, ...props }) => {

    const editor = useTiptapEditor();

    // テーブルタグをエディタに挿入するハンドラー
    const handleInsertTable = () => {
        const table = '<table><tr><td>Row 1, Column 1</td><td>Row 1, Column 2</td></tr><tr><td>Row 2, Column 1</td><td>Row 2, Column 2</td></tr></table>';
        editor.chain().focus().insertContent(table).run();
    };

    return (
        // <RichTextInput
        //     {...props}
        //     fullWidth
        //     sx={{
        //         ' .ProseMirror': {
        //             "min-height": '300px'
        //         },
        //     }}
        // />
        <RichTextInputToolbar {...props}>
            <LevelSelect size={size} />
            <FormatButtons size={size} />
            <AlignmentButtons size={size} />
            <ListButtons size={size} />
            <LinkButtons size={size} />
            <QuoteButtons size={size} />
            <ClearButtons size={size} />
            {/* 水平ルールを挿入するToggleボタン */}
            <Button
                aria-label="Add an horizontal rule"
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
            >
                <Remove fontSize="inherit" />
            </Button>
            {/* テーブルタグを挿入するButton */}
            <Button
                aria-label="Insert a table"
                onClick={handleInsertTable}
            >
                Table
            </Button>
        </RichTextInputToolbar>
    );
};

const MyRichTextInput = ({ size, ...props }) => (
    <RichTextInput
        editorOptions={MyEditorOptions}
        toolbar={<MyRichTextInputToolbar size={size} />}
        label="Body"
        source="body"
        {...props}
        fullWidth
        sx={{
            ' .ProseMirror': {
                "min-height": '300px'
            },
        }}
    />
);

// export default CustomRichTextInput;

export const MyEditorOptions = {
    ...DefaultEditorOptions,
    extensions: [
        ...DefaultEditorOptions.extensions,
        HorizontalRule,
    ],
};