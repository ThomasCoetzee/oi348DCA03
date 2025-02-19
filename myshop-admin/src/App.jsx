import { Admin, Resource } from 'react-admin';
import { PocketBaseProvider } from '/workspaces/oi348DCA03/myshop-admin/src/ra-pocketbase.js';
import { CustomerCreate, CustomerEdit, CustomerList, CustomerShow } from './Customers';
import { ProductCreate, ProductEdit, ProductList, ProductShow } from './Products';
import { CustOrdersCreate, CustOrdersEdit, CustOrdersList, CustOrdersShow } from './CustOrders';

const pbProvider = PocketBaseProvider('https://reimagined-happiness-pjrp7rjrqp4726p4-8090.app.github.dev/')

const App = () => (
  <Admin
    dataProvider={pbProvider.dataProvider}
    authProvider={pbProvider.authProvider}
  >
    <Resource
      name='customers'
      list={CustomerList}
      show={CustomerShow}
      edit={CustomerEdit}
      create={CustomerCreate}
      recordRepresentation={(record) => `${record.cust_fname} ${record.cust_lname}`}
    />
    <Resource
      name='products'
      list={ProductList}
      show={ProductShow}
      edit={ProductEdit}
      create={ProductCreate}
      recordRepresentation={(record) => `${record.prod_brand} ${record.prod_name}`}
    />
    <Resource
      name='custorders'
      list={CustOrdersList}
      show={CustOrdersShow}
      edit={CustOrdersEdit}
      create={CustOrdersCreate}
    />
  </Admin>
)

export default App