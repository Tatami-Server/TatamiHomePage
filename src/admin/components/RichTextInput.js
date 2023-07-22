import React from 'react';
import { RichTextInput } from 'ra-input-rich-text';
import { Height } from '@mui/icons-material';

const MyRichTextInput = (props) => {

    return (
    <RichTextInput
    {...propes}
    fullWidth
    sx={{
        ' .ProseMirror': {
        "min-height":'300px'
        },
    }}
    />
    );
};

export default MyRichTextInput;