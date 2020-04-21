/**
 * I would probably just import
 * https://react-select.com/home
 * on a production site since it's almost identical to what I did here but has more features
 */
import React from 'react';
import styles from './SelectBasic.module.css';

class SelectBasic extends React.Component {
    constructor (props) {
        super(props)
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect (e) {
        this.props.onSelect(e.target.value)
    }

    render () {
        return (
            <select data-testid='Select' className={styles.select} onChange={this.handleSelect}>
                {this.props.options.map((option) =>
                    <option key={option.id} value={option.value}>{option.label}</option>
                )}
            </select>
        )
    }
}

export default SelectBasic