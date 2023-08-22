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
import { Button, IconButton, Select, MenuItem } from '@mui/material';
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableHeader from '@tiptap/extension-table-header'
import TableCell from '@tiptap/extension-table-cell'
import Style from '../../style/pages/EventDetail.module.css'
import ImageExtension from '@tiptap/extension-image'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GridOnIcon from '@mui/icons-material/GridOn';


const CustomRichTextInputToolbar = ({ size, ...props }) => {

    const editor = useTiptapEditor();

    // テーブルタグをエディタに挿入するハンドラー
    const handleInsertTable = () => {
        editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
    };

    const handleUploadImage = () => {
        console.log('upload')
    }

    return (
        <RichTextInputToolbar {...props}>
            <LevelSelect size={size} />
            <FormatButtons size={size} />
            <ColorButtons size={size} />
            <AlignmentButtons size={size} />
            <ListButtons size={size} />
            <LinkButtons size={size} />
            <QuoteButtons size={size} />
            <ClearButtons size={size} />

            <ImageButtons size={size} />
            {/* 画像アップロードボタン */}
            <IconButton onClick={handleUploadImage}>
                <AddPhotoAlternateIcon />
            </IconButton>

            {/* テーブルタグを挿入するButton */}
            <IconButton onClick={handleInsertTable}>
                <GridOnIcon />
            </IconButton>
            <Select 
                sx={{
                    marginLeft: '-13px',
                    outline: 'none',
                    '.MuiSelect-select' :{ maxWidth: '20px', outline: 'none', padding: '5px' }
                }}
            >
                <MenuItem onClick={() => editor.chain().focus().deleteColumn().run()}>列の削除</MenuItem>
                <MenuItem onClick={() => editor.chain().focus().addColumnAfter().run()}>列の追加</MenuItem>
                <MenuItem onClick={() => editor.chain().focus().deleteRow().run()}>行の削除</MenuItem>
                <MenuItem onClick={() => editor.chain().focus().addRowAfter().run()}>行の追加</MenuItem>
                <MenuItem onClick={() => editor.chain().focus().mergeCells().run()}>セルの結合</MenuItem>
                <MenuItem onClick={() => editor.chain().focus().splitCell().run()}>セルの分割</MenuItem>
                <MenuItem onClick={() => editor.chain().focus().deleteTable().run()}>テーブルの削除</MenuItem>
            </Select>
        </RichTextInputToolbar>
    );
};

const uploadImage = async () => {
    return 'https://cdn.pixabay.com/photo/2021/05/22/11/38/yt-6273367_1280.png'
}

const CustomEditorOptions = {
    ...DefaultEditorOptions,
    extensions: [
        ...DefaultEditorOptions.extensions,
        Table.configure({ resizable: true }),
        TableRow,
        TableHeader,
        TableCell,
        ImageExtension,
    ],
    editorProps: {
        handleDrop: function (view, event, slice, moved) {
            if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) { // if dropping external files
                let file = event.dataTransfer.files[0]; // the dropped file
                let filesize = ((file.size / 1024) / 1024).toFixed(4); // get the filesize in MB
                if ((file.type === "image/jpeg" || file.type === "image/png") && filesize < 10) { // check valid image type under 10MB
                    // check the dimensions
                    let _URL = window.URL || window.webkitURL;
                    let img = new Image(); /* global Image */
                    img.src = _URL.createObjectURL(file);
                    img.onload = function () {
                        if (this.width > 5000 || this.height > 5000) {
                            window.alert("Your images need to be less than 5000 pixels in height and width."); // display alert
                        } else {
                            // valid image so upload to server
                            // uploadImage will be your function to upload the image to the server or s3 bucket somewhere
                            uploadImage(file).then(function (response) { // response is the image url for where it has been saved
                                // pre-load the image before responding so loading indicators can stay
                                // and swaps out smoothly when image is ready
                                let image = new Image();
                                image.src = response;
                                image.onload = function () {
                                    // place the now uploaded image in the editor where it was dropped
                                    const { schema } = view.state;
                                    const coordinates = view.posAtCoords({ left: event.clientX, top: event.clientY });
                                    const node = schema.nodes.image.create({ src: response }); // creates the image element
                                    const transaction = view.state.tr.insert(coordinates.pos, node); // places it in the correct position
                                    return view.dispatch(transaction);
                                }
                            }).catch(function (error) {
                                if (error) {
                                    window.alert("There was a problem uploading your image, please try again.");
                                }
                            });
                        }
                    };
                } else {
                    window.alert("Images need to be in jpg or png format and less than 10mb in size.");
                }
                return true; // handled
            }
            return false; // not handled use default behaviour
        }
    }
};

const CustomRichTextInput = ({ size, ...props }) => (
    <RichTextInput
        className={Style["event-body"]}
        editorOptions={CustomEditorOptions}
        toolbar={<CustomRichTextInputToolbar size={size} />}
        label="Body"
        source="body"
        {...props}
        fullWidth
        sx={{
            ' .ProseMirror': {
                minHeight: '300px',
                maxHeight: '90vh',
                overflow: 'scroll',
                backgroundColor: 'rgb(249,246,239) !important',
                color: 'black',
            },
            '.resize-cursor': {
                cursor: 'col-resize'
            },
            '.selectedCell': {
                backgroundColor: '#3b83ff9d'
            },
        }}
    />
);

export default CustomRichTextInput