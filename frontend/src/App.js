import React, { Component } from 'react'
import './App.scss'
import router from 'config/router'
import { Provider } from 'react-redux'
import store from 'store/index'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    { router }
                </div>
            </Provider>
        )
    }
}

export default App
