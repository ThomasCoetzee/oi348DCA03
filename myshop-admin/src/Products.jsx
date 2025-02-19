import {Datagrid, Show, Edit, SimpleForm, SimpleShowLayout, List, TextField, NumberField, NumberInput, TextInput, required, Create } from 'react-admin';

export const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="prod_id" label='ID'/>
            <TextField source="prod_name" label='Name'/>
            <TextField source="prod_brand" label='Brand'/>
            <NumberField source="prod_price" label='Price'/>
        </SimpleShowLayout>
    </Show>
);

export const ProductList = () => (
    <List reference='products'>
        <Datagrid>
            <NumberField source="prod_id" label='ID'/>
            <TextField source="prod_name" label='Name'/>
            <TextField source="prod_brand" label='Brand'/>
            <NumberField source="prod_price" label='Price'/>
        </Datagrid>
    </List>
);

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="prod_id" label='ID' validate={required()}/>
            <TextInput source="prod_name" label='Name' validate={required()}/>
            <TextInput source="prod_brand" label='Brand' validate={required()}/>
            <NumberInput source="prod_price" label='Price' validate={required()}/>
        </SimpleForm>
    </Edit>
);

export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="prod_id" label='ID' validate={required()}/>
            <TextInput source="prod_name" label='Name' validate={required()}/>
            <TextInput source="prod_brand" label='Brand' validate={required()}/>
            <NumberInput source="prod_price" label='Price' validate={required()}/>
        </SimpleForm>
    </Create>
);