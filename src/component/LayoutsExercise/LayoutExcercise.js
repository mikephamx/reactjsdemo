import React, { Component } from 'react'
import HeaderDemo from './HeaderDemo'
import Product from './Product'

export default class LayoutExcercise extends Component {
    render() {
        return (
            <div>
                <HeaderDemo />
                <Product />
            </div>
        )
    }
}
