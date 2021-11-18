import React from 'react'
import Provider from 'react-redux/lib/components/Provider'
import App from './App'
import store from './store'

function WrapperClass() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default WrapperClass
