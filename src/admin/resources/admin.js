import * as React from "react";
import { List, Datagrid, TextField, Button, FunctionField, DateField, BooleanField } from 'react-admin';
import dataProvider from "../providers/firestoreDataProvider";

const ApproveButton = (record) => {
    if(record.status)  return
    const approve = () => {
        dataProvider.update('admin', { 
            id: record.id, 
            data: { status: true } 
        })
    }
    return (
        <Button
            variant="contained"
            color="success"
            size="medium"
            sx={{
                '.MuiButton-startIcon': {
                    margin: 0,
                }
            }}
            onClick={approve}
        >
            承認
        </Button>
    )
}

const ApproveField = props => {
    return <FunctionField {...props} render={ApproveButton} />
}

export const AdminList = props => {
    return (
        <List {...props} sort={ { field: 'status', order: 'asc' }} perPage={50}>
            <Datagrid bulkActionButtons={false}>
                <ApproveField />
                <TextField source="email" label="メールアドレス" />
                <BooleanField source="status" label="承認ステータス" />
                <DateField source='createdAt' label='作成日時' showTime />
                <DateField source='updatedAt' label='更新日時' showTime />
            </Datagrid>
        </List>
    )
};
