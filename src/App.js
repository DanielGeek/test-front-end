import React from 'react';
import { Provider } from 'react-redux';

// store almacena todos mis estados
import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';

const App = () => {
    return (
        // Provider provee a los componentes hijos la info del store
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

export default App;