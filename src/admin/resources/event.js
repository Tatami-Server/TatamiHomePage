//event.js
import * as React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';
import { Edit, SimpleForm, TextInput, SelectInput, Create } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import CustomRichTextInput from '../components/CustomRichTextInput';
import CustomImageInput from "@admin/components/CustomImageInput";

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
            <CustomImageInput />
            <CustomRichTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const EventCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <SelectInput fullWidth required  source="eventType" label="イベントの種類" choices={eventTypes} /> 
            <TextInput fullWidth required  source="title" label="タイトル" />
            <CustomImageInput />
            <CustomRichTextInput source="body" />
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
