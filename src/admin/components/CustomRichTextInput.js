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
    ColorButtons,
    ImageButtons,
    useTiptapEditor,
} from 'ra-input-rich-text';
import Remove from '@mui/icons-material/Remove';
import { Button } from '@mui/material';
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableHeader from '@tiptap/extension-table-header'
import TableCell from '@tiptap/extension-table-cell'


const CustomRichTextInputToolbar = ({ size, ...props }) => {

    const editor = useTiptapEditor();

    // テーブルタグをエディタに挿入するハンドラー
    const handleInsertTable = () => {
        editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
    };

    return (
        <RichTextInputToolbar {...props}>
            <LevelSelect size={size} />
            <FormatButtons size={size} />
            <ColorButtons size={size} />
            <AlignmentButtons size={size} />
            <ListButtons size={size} />
            <LinkButtons size={size} />
            <ImageButtons size={size} />
            <QuoteButtons size={size} />
            <ClearButtons size={size} />
            {/* テーブルタグを挿入するButton */}
            <Button onClick={handleInsertTable}>テーブル</Button>
            <Button onClick={() => editor.chain().focus().deleteColumn().run()}>列の削除</Button>
            <Button onClick={() => editor.chain().focus().addColumnAfter().run()}>列の追加</Button>
            <Button onClick={() => editor.chain().focus().deleteRow().run()}>行の削除</Button>
            <Button onClick={() => editor.chain().focus().addRowAfter().run()}>行の追加</Button>
            <Button onClick={() => editor.chain().focus().mergeCells().run()}>セルの結合</Button>
            <Button onClick={() => editor.chain().focus().splitCell().run()}>セルの分割</Button>
        </RichTextInputToolbar>
    );
};

const CustomEditorOptions = {
    ...DefaultEditorOptions,
    extensions: [
        ...DefaultEditorOptions.extensions,
        Table.configure({ resizable: true }),
        TableRow,
        TableHeader,
        TableCell
    ],
};

const CustomRichTextInput = ({ size, ...props }) => (
    <RichTextInput
        editorOptions={CustomEditorOptions}
        toolbar={<CustomRichTextInputToolbar size={size} />}
        label="Body"
        source="body"
        {...props}
        fullWidth
        sx={{
            ' .ProseMirror': {
                minHeight: '300px'
            },
            'tr, td, th': {
                borderWidth: '1px',
            },
            '.resize-cursor': {
                cursor: 'col-resize'
            },
            '.selectedCell': {
                backgroundColor: '#3b83ff9d'
            }
        }}
    />
);

export default CustomRichTextInput