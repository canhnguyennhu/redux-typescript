import './App.css';
import RoutesComponent from './sceen/routes';
import store from "./stores/Store";
import { Provider } from 'react-redux'

const  App : React.FC = () => {
  return (
		<Provider store={store}>
			<div className="App">
				<RoutesComponent></RoutesComponent>
			</div>
		</Provider>	
  );
}

export default App;
