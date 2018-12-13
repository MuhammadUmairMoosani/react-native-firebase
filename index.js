import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './src/store';

class ReduxApp extends React.Component {
    render() {
        return (
        <Provider store={store}>
        <App />
        </Provider>
        )
    }
}

AppRegistry.registerComponent('Nombox', () => ReduxApp);
