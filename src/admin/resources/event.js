//event.js
import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, DeleteButton } from 'react-admin';
import { Edit, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput } from 'react-admin';
import { Create } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import MyRichTextInput from "../components/RichTextInput";

export const EventList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" label="タイトル" />
            <TextField source="body" label="本文" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const EventEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput fullWidth source="title" label="タイトル" />
            <MyRichTextInput source="body"/>
        </SimpleForm>
    </Edit>
);

export const EventCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput fullWidth  source="title" label="タイトル" />
            <MyRichTextInput source="body"/>      
        </SimpleForm>
    </Create>
);

export const EventShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" label="タイトル" />
            <TextField source="body" label="本文" />
        </SimpleShowLayout>
    </Show>
);
