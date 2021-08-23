
import store from './redux/store';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

function App() {

    return (
        <Provider store={store}> 
            <AppRouter />
        </Provider>
    );

}

export default App;
