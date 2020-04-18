import React from 'react';
import styles from './Select.module.css';

class Select extends React.Component {
    constructor (props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect (e) {
        this.props.onSelect(e.target.value)
    }

    render () {
        return (
            <select className={styles.select} onChange={this.handleSelect}>
                {this.props.options.map((option) =>
                    <option key={option.id} value={option.value}>{option.label}</option>
                )}
            </select>
        )
    }
}

export default Select