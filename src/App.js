import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/index';
import ProductTable from './components/Product_Table';
import PostTable from './components/Post_Table';
import RoutesContainer from './components/Routes';

function App() {
  return (

    <Provider store={store}>
    <RoutesContainer/>
    </Provider>
    
  );
}

export default App;
