//event.js
import * as React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton, DateField } from 'react-admin';
import { Edit, SimpleForm, TextInput, Create, ReferenceInput, AutocompleteInput } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import CustomRichTextInput from '../components/CustomRichTextInput';
import CustomImageInput from "@admin/components/CustomImageInput";

export const EventList = props => (
    <List {...props}>
        <Datagrid rowClick="edit" optimized>
            <TextField source="title" label="タイトル" />
            <DateField source='updatedAt' label='更新日時' showTime />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

const EditForm = () => (
    <SimpleForm>
        <ReferenceInput 
            source="eventTypeRef"
            reference="eventType"
            sort={{ field: 'sortNum', order: 'ASC' }}
            perPage={100}
        >
            <AutocompleteInput label="イベント種別" fullWidth />
        </ReferenceInput>
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
