//event.js
import * as React from "react";
import { List, Datagrid, TextField, EditButton, DateField, Toolbar, CreateButton, ExportButton, Link, TopToolbar, NumberInput } from 'react-admin';
import { Edit, SimpleForm, TextInput, Create, ReferenceInput, AutocompleteInput } from 'react-admin';
import CustomRichTextInput from '../components/CustomRichTextInput';
import CustomImageInput from "@admin/components/CustomImageInput";
import CustomToolbar from "@admin/components/CustomToolbar";
import CustomFormActions from "@admin/components/CustomFormActions";
import { Button } from "@mui/material";


const EventListActions = props => (
    <TopToolbar>
        <Button to='/event/sort' variant="outlined" LinkComponent={Link}>並び順変更</Button>
        <CreateButton />
        <ExportButton />
    </TopToolbar>
)

export const EventList = props => (
    <List {...props} perPage={50} actions={<EventListActions/>}>
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
        <TextInput fullWidth source="url" label="URL" placeholder="本文を入力せず、特定のページに飛ばしたいときのみ入力" />
        <TextInput fullWidth source="description" label="説明" placeholder="サムネイル下の説明文" multiline rows={3} />
        <CustomImageInput />
        <CustomRichTextInput label="本文" source="body" resource="event" />
        <NumberInput fullWidth required source="sortNum" label="並び順" defaultValue={0} />
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