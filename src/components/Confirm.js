import React from 'react'
import ReactDOM,{findDOMNode} from 'react-dom'
import '../css/confirm.css'
import cn from 'classnames'

class Confirm extends React.Component {
    static defaultProps = {
        animation: 'zoom',
        animationSpeed: 500,
        animationBounce: 1.2,
        autoClose: false,
        backgroundDismiss: false,
        cancel: function () {
        },
        cancelButton: 'Close',
        cancelButtonClass: 'btn-default',
        cancelKeys: [27], // ESC key
        closeAnimation: 'scale',
        closeIcon: null,
        closeIconClass: false,
        columnClass: 'col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',
        confirm: function () {
        },
        confirmButton: 'Okay',
        confirmButtonClass: 'btn-default',
        confirmKeys: [13], // ENTER key
        container: 'body',
        content: 'Are you sure to continue?',
        contentLoaded: function () {
        },
        icon: '',
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
    };

    constructor(props) {
        super(props);
        this.state = {
            boxClicked: false,
            rconfirm_class: ["rconfirm", "rconfirm-" + this.props.theme],
            rconfirm_style: {},
            rconfirmbg_class: ["rconfirm-bg", "seen"],
            rconfirmbg_style: {},
            rbox_class: ["rconfirm-box"],
            rbox_style: {},
            content_style: {},
            contentPane_style: {}
        }
    }

    _unmount() {
        const element = this.props.element;
        ReactDOM.unmountComponentAtNode(element);
        element.remove();
    }

    _cancel() {
        setTimeout(()=> {
            this._unmount();
        })
    }

    _getCSS(speed, bounce) {
        return {
            'WebkitTransitionDuration': speed / 1000 + 's',
            'transitionDuration': speed / 1000 + 's',
            'WebkitTransitionTimingFunction': 'cubic-bezier(.36,1.1,.2, ' + bounce + ')',
            'transitionTimingFunction': 'cubic-bezier(.36,1.1,.2, ' + bounce + ')'
        }
    }

    componentWillMount() {
        this.setState({
            rconfirmbg_style: Object.assign({},
                this.state.rconfirmbg_style,
                {opacity: this.props.opacity},
                this._getCSS(this.props.animationSpeed, 1)
            )
        })
    }

    componentDidMount() {
        this.setDialogCenter();
    }

    setDialogCenter() {
        let contentHeight, paneHeight, style;
        if (this.state.contentPane_style.display == 'none') {
            contentHeight = 0;
            paneHeight = 0;
        } else {
            contentHeight = this.refs.content.clientHeight;
            paneHeight = this.refs.contentPane.clientHeight;
            if (paneHeight == 0)
                paneHeight = contentHeight;
        }
        let off = 100;
        let w = this.refs.content.clientWidth;

        //var s = '-clip-path: inset(0px 0px '+contentHeight+'px 0px);' +
        //    'clip-path: inset(0px 0px '+contentHeight+'px 0px)';

        var windowHeight = window.innerHeight;
        var boxHeight = this.refs.rbox.clientHeight - paneHeight + contentHeight;
        var topMargin = (windowHeight - boxHeight) / 2;
        var minMargin = 100;
        if (boxHeight > (windowHeight - minMargin)) {
            style = {
                marginTop: minMargin / 2,
                marginBottom: minMargin / 2
            };
            document.body.classList.add("rconfirm-noscroll");
        } else {
            style = {
                marginTop: topMargin
            };
            document.body.classList.remove("rconfirm-noscroll");
        }

        this.setState({
            content_style: Object.assign({}, this.state.content_style, {clip: 'rect(0px ' + (off + w) + 'px ' + contentHeight + 'px -' + off + 'px)'}),
            contentPane_style: Object.assign({}, this.state.contentPane_style, {height: contentHeight}),
            rbox_style: Object.assign({}, this.state.rbox_style, style, this._getCSS(this.props.animationSpeed, this.props.animationBounce))
        })
    }

    scrollHandle(e) {
        e.stopPropagation();
        if (this.props.backgroundDismiss) {
            this._cancel()
        } else {
            this.setState({rbox_class: [...this.state.rbox_class, "hilight"]})
            setTimeout(()=> {
                this.setState({rbox_class: this.state.rbox_class.filter((value)=>value !== "hilight")})
            }, 800)
        }
    }

    boxHandle(e) {
        e.stopPropagation();
        this.setState({boxClicked: true});
    }

    render() {
        return (
            <div ref="rconfirm" className={cn(this.state.rconfirm_class)} style={this.state.rconfirm_style}>
                <div ref="rconfirmbg" className={cn(this.state.rconfirmbg_class)} style={this.state.rconfirmbg_style}></div>

                <div className="rconfirm-scrollpane" onClick={this.scrollHandle.bind(this)}>
                    <div className="container">
                        <div className="row">
                            <div ref="rconfirmboxcontainer" className={"rconfirm-box-container "+ this.props.columnClass}>
                                <div ref="rbox" className={cn(this.state.rbox_class)} style={this.state.rbox_style}
                                     onClick={this.boxHandle.bind(this)}>

                                    <div ref="closeIcon" className="closeIcon"
                                         style={{display:this.props.closeIcon?'block':'none'}}
                                         onClick={this._cancel.bind(this)}>
                                        {this.props.closeIconClass ? <i className={this.props.closeIconClass}/> : '×'}
                                    </div>

                                    <Title {...this.props}/>

                                    <div ref="contentPane" className="content-pane" style={this.state.contentPane_style}>
                                        <div ref="content" className="content" style={this.state.content_style}><input
                                            type="text" className="form-control"/></div>
                                    </div>

                                    <div ref="buttons" className="buttons">
                                        <button type="button"
                                                className={"btn "+this.props.confirmButtonClass}>{this.props.confirmButton}</button>
                                        <button type="button" className={"btn "+this.props.cancelButtonClass}
                                                onClick={this._cancel.bind(this)}>{this.props.cancelButton}</button>
                                    </div>

                                    <Rclear />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


//title
class Title extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="title-c">
                <span className="icon-c">
                    <i className={this.props.icon}/>
                </span>
                <span className="title">{this.props.title}</span>
            </div>
        )
    }
}


//Rclear
class Rclear extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="r-clear"></div>
        )
    }
}

export default function confirm(options = {}) {
    const element = document.createElement('div');
    document.body.appendChild(element);

    const props = Object.assign({element}, options);
    ReactDOM.render(<Confirm {...props}/>, element)
}
