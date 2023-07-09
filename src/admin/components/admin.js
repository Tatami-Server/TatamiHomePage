// notices.js
import * as React from "react";
import { List, Datagrid, TextField, Button } from 'react-admin';

export const AdminList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="email" label="メールアドレス" />
            <Button>承認</Button>
        </Datagrid>
    </List>
);
