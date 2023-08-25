// notices.js
import * as React from "react";
import { List, Datagrid, TextField, EditButton, DeleteButton, UrlField, DateField } from 'react-admin';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';
import { Create } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';

export const NoticeList = props => (
    <List {...props} sort={{ field: 'date', order: 'desc' }}>
        <Datagrid rowClick="edit" sx={{ '& .RaDatagrid-root': { width: '20%' } }}>
            <TextField source="title" label="タイトル" />
            {/* <UrlField source="url" label="URL" /> */}
            <DateField source="date" label="日付" />
            <DateField source='updatedAt' label='更新日時' showTime />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

const EditForm = () => (
    <SimpleForm>
        <TextInput required fullWidth source="title" label="タイトル" />
        <TextInput required fullWidth source="url" label="URL" />
        <DateInput required source="date" label="日付" />
    </SimpleForm>
)

export const NoticeEdit = props => (
    <Edit {...props}>
        <EditForm />
    </Edit>
);

export const NoticeCreate = props => (
    <Create {...props}>
        <EditForm />
    </Create>
);

export const NoticeShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" label="タイトル" />
            <TextField source="url" label="URL" />
            <TextField source="date" label="日付" />
            <CustomDateField source='updatedAt' label='更新日時' />
        </SimpleShowLayout>
    </Show>
);

