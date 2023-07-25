//event.js
import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, DeleteButton } from 'react-admin';
import { Edit, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput, Create, required  } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { MyRichTextInput, MyEditorOptions } from '../components/CustomRichTextInput';

const eventTypes = [
    { id: 'normal', name: '通常イベント（イベントサーバー）' },
    { id: 'exclusive', name: 'サブスクライバー限定イベント（イベントサーバー）' },
    { id: 'alltime', name: '常時イベント（常時サーバー）' },
    ];

export const EventList = props => (
    <List {...props}>
        <Datagrid>
            {/* <TextField source="eventType" label="イベントの種類" /> */}
            <TextField source="title" label="タイトル" />
            {/* <TextField source="body" label="本文" /> */}
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const EventEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <SelectInput fullWidth required  source="eventType" label="イベントの種類" choices={eventTypes} />
            <TextInput fullWidth required source="title" label="タイトル" />
            <MyRichTextInput editorOptions={MyEditorOptions} source="body" />
        </SimpleForm>
    </Edit>
);

export const EventCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <SelectInput fullWidth required  source="eventType" label="イベントの種類" choices={eventTypes} /> 
            <TextInput fullWidth required  source="title" label="タイトル" />
            <MyRichTextInput editorOptions={MyEditorOptions} source="body" />  
        </SimpleForm>
    </Create>
);

export const EventShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="eventType" label="イベントの種類" />
            <TextField source="title" label="タイトル" />
            {/* <TextField source="body" label="本文" /> */}
        </SimpleShowLayout>
    </Show>
);
