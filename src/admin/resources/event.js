//event.js
import * as React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton, DateField, RichTextField } from 'react-admin';
import { Edit, SimpleForm, TextInput, SelectInput, Create } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import CustomRichTextInput from '../components/CustomRichTextInput';
import CustomImageInput from "@admin/components/CustomImageInput";
import CustomDateField from "@admin/components/CustomDateField";

const eventTypes = [
    { id: 'normal', name: '通常イベント（イベントサーバー）' },
    { id: 'exclusive', name: 'サブスクライバー限定イベント（イベントサーバー）' },
    { id: 'alltime', name: '常時イベント（常時サーバー）' },
    { id: 'life', name: '生活サーバー' },
    ];

export const EventList = props => (
    <List {...props}>
        <Datagrid rowClick="edit" optimized>
            <TextField source="title" label="タイトル" />
            <CustomDateField source='updatedAt' label='更新日時' />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

const EditForm = () => (
    <SimpleForm>
        <SelectInput fullWidth required  source="eventType" label="イベントの種類" choices={eventTypes} />
        <TextInput fullWidth required source="title" label="タイトル" />
        <TextInput  fullWidth source="url" label="URL" placeholder="本文を入力せず、特定のページに飛ばしたいときのみ入力" />
        <CustomImageInput />
        <CustomRichTextInput label="本文" source="body" />
    </SimpleForm>
)

export const EventEdit = props => (
    <Edit {...props}>
        <EditForm />
    </Edit>
);

export const EventCreate = props => (
    <Create {...props}>
        <EditForm />
    </Create>
);

export const EventShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="eventType" label="イベントの種類" />
            <TextField source="title" label="タイトル" />
            <CustomDateField source='updatedAt' label='更新日時' />
        </SimpleShowLayout>
    </Show>
);
