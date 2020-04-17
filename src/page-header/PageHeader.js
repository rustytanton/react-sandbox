import React from 'react';
import './PageHeader.css';

class PageHeader extends React.Component {
    constructor (props) {
        super(props)
        this.state = { buttonToggled: false, pageTitleDefault: 'pageTitle default text' }
        this.toggleButton = this.toggleButton.bind(this) // this is kind of dumb
    }

    toggleButton () {
        this.setState((state => ({
            buttonToggled: !state.buttonToggled
        })))
    }

    render () {
        return (
            <div className="PageHeader">
                <h1 data-testid='pageTitle'>{this.props.pageTitle ? this.props.pageTitle : this.state.pageTitleDefault}</h1>
                <button onClick={this.toggleButton}>{this.state.buttonToggled ? 'clicked' : 'click me'}</button>
            </div>
        )
    }
}

export default PageHeader;