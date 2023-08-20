// notices.js
import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, DeleteButton } from 'react-admin';
import { Edit, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput } from 'react-admin';
import { Create } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';


export const NoticeList = props => (
    <List {...props} sort={{ field: 'date', order: 'desc' }}>
        <Datagrid>
            <TextField source="title" label="タイトル" />
            <TextField source="url" label="URL" />
            <TextField source="date" label="日付" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const NoticeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput fullWidth source="title" label="タイトル" />
            <TextInput fullWidth source="url" label="URL" />
            <DateInput source="date" label="日付" />
        </SimpleForm>
    </Edit>
);

export const NoticeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput fullWidth source="title" label="タイトル" />
            <TextInput fullWidth source="url" label="URL" />
            <DateInput source="date" label="日付" />        
        </SimpleForm>
    </Create>
);

export const NoticeShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" label="タイトル" />
            <TextField source="url" label="URL" />
            <TextField source="date" label="日付" />        
        </SimpleShowLayout>
    </Show>
);

