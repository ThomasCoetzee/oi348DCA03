import { Admin, bwDarkTheme, bwLightTheme, Resource } from 'react-admin';
import { PocketBaseProvider } from '/workspaces/oi348DCA03/myshop-admin/src/ra-pocketbase.js';
import { CustomerCreate, CustomerEdit, CustomerList, CustomerShow } from './Customers';
import { ProductCreate, ProductEdit, ProductList, ProductShow } from './Products';
import { CustOrdersCreate, CustOrdersEdit, CustOrdersList, CustOrdersShow } from './CustOrders';
import CustomerIcon from '@mui/icons-material/People'
import ProductIcon from '@mui/icons-material/Inventory'
import CustOrderIcon from '@mui/icons-material/Assignment'

const pbProvider = PocketBaseProvider('https://reimagined-happiness-pjrp7rjrqp4726p4-8090.app.github.dev/')

const App = () => (
  <Admin
    dataProvider={pbProvider.dataProvider}
    authProvider={pbProvider.authProvider}
    theme={bwLightTheme}
    darkTheme={bwDarkTheme}
  >
    <Resource
      name='customers'
      icon={CustomerIcon}
      list={CustomerList}
      show={CustomerShow}
      edit={CustomerEdit}
      create={CustomerCreate}
      recordRepresentation={(record) => `${record.cust_fname} ${record.cust_lname}`}
    />
    <Resource
      name='products'
      icon={ProductIcon}
      list={ProductList}
      show={ProductShow}
      edit={ProductEdit}
      create={ProductCreate}
      recordRepresentation={(record) => `${record.prod_brand} ${record.prod_name}`}
    />
    <Resource
      name='custorders'
      options={{ label: 'Customer Orders' }}
      icon={CustOrderIcon}
      list={CustOrdersList}
      show={CustOrdersShow}
      edit={CustOrdersEdit}
      create={CustOrdersCreate}
    />
  </Admin>
)

export default App