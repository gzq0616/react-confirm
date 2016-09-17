import React from 'react'
import { findDOMNode } from 'react-dom'

import confirm from '../components/Confirm'

export default class App extends React.Component {
    hanlder() {
        confirm({
            animation: 'zoom',
            animationSpeed: 500,
            animationBounce: 1.2,
            autoClose: false,
            backgroundDismiss: false,
            cancel: function () {
            },
            cancelButton: '关闭',
            cancelButtonClass: 'btn-danger',
            cancelKeys: [27], // ESC key
            closeAnimation: 'scale',
            closeIcon: null,
            closeIconClass: false,
            columnClass: 'col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',
            confirm: function () {
            },
            confirmButton: '确认',
            confirmButtonClass: 'btn-info',
            confirmKeys: [13], // ENTER key
            container: 'body',
            content: '<input class="form-control" type="text"/>',
            contentLoaded: function () {
            },
            icon: 'glyphicon glyphicon-heart',
            keyboardEnabled: false,
            onAction: function () {
            },
            onClose: function () {
            },
            onOpen: function () {
            },
            opacity: 0.2,
            rtl: false,
            theme: 'white',
            title: 'Hello',
            watchInterval: 100
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">react confirm test example</h1>
                <button className="btn btn-default" onClick={this.hanlder.bind(this)}>confirm</button>
            </div>
        )
    }
}