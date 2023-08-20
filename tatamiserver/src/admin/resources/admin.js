import * as React from "react";
import { List, Datagrid, TextField, Button, FunctionField } from 'react-admin';
import dataProvider from "../providers/firestoreDataProvider";

const ApproveButton = (record) => {
    const approve = () => {
        dataProvider.update('admin', { 
            id: record.id, 
            data: { status: true } 
        })
    }
    return <Button onClick={approve}><small>承認</small></Button>;
}

const ApproveField = props => {
    return <FunctionField {...props} render={ApproveButton} />
}

export const AdminList = props => {
    return (
        <List {...props} filter={{ status: ['==', false] }}>
            <Datagrid bulkActionButtons={false}>
                <TextField source="email" label="メールアドレス" />
                <ApproveField />
            </Datagrid>
        </List>
    )
};
