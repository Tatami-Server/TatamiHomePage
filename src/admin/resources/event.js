//event.js
import * as React from "react";
import { List, Datagrid, TextField, EditButton, DateField, Toolbar } from 'react-admin';
import { Edit, SimpleForm, TextInput, Create, ReferenceInput, AutocompleteInput } from 'react-admin';
import CustomRichTextInput from '../components/CustomRichTextInput';
import CustomImageInput from "@admin/components/CustomImageInput";
import CustomToolbar from "@admin/components/CustomToolbar";
import CustomFormActions from "@admin/components/CustomFormActions";

export const EventList = props => (
    <List {...props}>
        <Datagrid rowClick="edit" optimized>
            <TextField source="title" label="タイトル" />
            <TextField source="eventType.shortTitle" label="イベント種別" />
            <DateField source='updatedAt' label='更新日時' showTime />
            <EditButton />
        </Datagrid>
    </List>
);

const EditForm = ({toolbar}) => (
    <SimpleForm toolbar={toolbar}>
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
        <CustomRichTextInput label="本文" source="body" resource="event" />
    </SimpleForm>
)

export const EventEdit = props => (
    <Edit {...props} actions={<CustomToolbar />}>
        <EditForm toolbar={<CustomFormActions />} />
    </Edit>
);

export const EventCreate = props => (
    <Create {...props}>
        <EditForm toolbar={<Toolbar />} />
    </Create>
);