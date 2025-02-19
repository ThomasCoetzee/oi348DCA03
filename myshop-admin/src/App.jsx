import { Admin, EditGuesser, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import { PocketBaseProvider } from 'myshop-admin/src/ra-pocketbase';

const pbProvider = PocketBaseDataProvider('https://reimagined-happiness-pjrp7rjrqp4726p4-8090.app.github.dev/')

const App = () => (
  <Admin>
    <Resource
      name='customers'
      list={ListGuesser}
      show={ShowGuesser}
      edit={EditGuesser}
    />
  </Admin>
)

export default App