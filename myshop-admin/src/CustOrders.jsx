import {Datagrid, Show, Edit, SimpleForm, SimpleShowLayout, List, NumberField, NumberInput, required, Create, ReferenceField, ReferenceInput } from 'react-admin';

export const CustOrdersShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source='order_id' label='Order ID'/>
            <ReferenceField source='prod_id' reference='products' label='Product ID'/>
            <ReferenceField source='cust_id' reference='customers' label='Customer ID'/>
            <NumberField source="quantity" label='Quantity'/>
        </SimpleShowLayout>
    </Show>
);

export const CustOrdersList = () => (
    <List>
        <Datagrid>
            <NumberField source='order_id' label='Order ID'/>
            <ReferenceField source='prod_id' reference='products' label='Product ID'/>
            <ReferenceField source='cust_id' reference='customers' label='Customer ID'/>
            <NumberField source="quantity" label='Quantity'/>
        </Datagrid>
    </List>
);

export const CustOrdersEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source='order_id' label='Order ID' validate={required()}/>
            <ReferenceInput source='prod_id' reference='products' label='Product ID'/>
            <ReferenceInput source='cust_id' reference='customers' label='Customer ID'/>
            <NumberInput source="quantity" label='Quantity' validate={required()}/>
        </SimpleForm>
    </Edit>
);

export const CustOrdersCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source='order_id' label='Order ID' validate={required()}/>
            <ReferenceInput source='prod_id' reference='products' label='Product ID'/>
            <ReferenceInput source='cust_id' reference='customers' label='Customer ID'/>
            <NumberInput source="quantity" label='Quantity' validate={required()}/>
        </SimpleForm>
    </Create>
);