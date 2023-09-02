// notices.js
import CustomFormActions from "@admin/components/CustomFormActions";
import CustomToolbar from "@admin/components/CustomToolbar";
import * as React from "react";
import { List, Datagrid, TextField, EditButton, DateField } from 'react-admin';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';
import { Create } from 'react-admin';

export const NoticeList = props => (
    <List {...props} sort={{ field: 'date', order: 'desc' }}>
        <Datagrid rowClick="edit" sx={{ '& .RaDatagrid-root': { width: '20%' } }}>
            <TextField source="title" label="タイトル" />
            <DateField source="date" label="日付" />
            <DateField source='updatedAt' label='更新日時' showTime />
            <EditButton />
        </Datagrid>
    </List>
);

const EditForm = () => (
    <SimpleForm toolbar={<CustomFormActions />}>
        <TextInput required fullWidth source="title" label="タイトル" />
        <TextInput required fullWidth source="url" label="URL" />
        <DateInput required source="date" label="日付" />
    </SimpleForm>
)

export const NoticeEdit = props => (
    <Edit {...props} actions={<CustomToolbar />}>
        <EditForm />
    </Edit>
);

export const NoticeCreate = props => (
    <Create {...props}>
        <EditForm />
    </Create>
);

