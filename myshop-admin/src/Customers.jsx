import {Datagrid, Show, Edit, SimpleForm, SimpleShowLayout, List, TextField, NumberField, NumberInput, TextInput, required, Create } from 'react-admin';

export const CustomerShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="cust_id" label='ID'/>
            <TextField source="cust_fname" label='First Name'/>
            <TextField source="cust_lname" label='Last Name'/>
            <TextField source="cust_cell" label='Cell Number'/>
            <TextField source="cust_email" label='Email'/>
        </SimpleShowLayout>
    </Show>
);

export const CustomerList = () => (
    <List reference='customers'>
        <Datagrid>
            <NumberField source="cust_id" label='ID'/>
            <TextField source="cust_fname" label='First Name'/>
            <TextField source="cust_lname" label='Last Name'/>
            <TextField source="cust_cell" label='Cell Number'/>
            <TextField source="cust_email" label='Email'/>
        </Datagrid>
    </List>
);

export const CustomerEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="cust_id" label='ID' validate={required()}/>
            <TextInput source="cust_fname" label='First Name' validate={required()}/>
            <TextInput source="cust_lname" label='Last Name' validate={required()}/>
            <TextInput source="cust_cell" label='Cell Number' validate={required()}/>
            <TextInput source="cust_email" label='Email' validate={required()}/>
        </SimpleForm>
    </Edit>
);

export const CustomerCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="cust_id" label='ID' validate={required()}/>
            <TextInput source="cust_fname" label='First Name' validate={required()}/>
            <TextInput source="cust_lname" label='Last Name' validate={required()}/>
            <TextInput source="cust_cell" label='Cell Number' validate={required()}/>
            <TextInput source="cust_email" label='Email' validate={required()}/>
        </SimpleForm>
    </Create>
);