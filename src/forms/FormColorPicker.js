import React from 'react';
import './FormColorPicker.css';

class FormColorPicker extends React.Component {
    constructor (props) {
        super(props)
        this.updatePageColor = this.updatePageColor.bind(this)
    }

    updatePageColor (e) {
        this.props.onPick(e.target.value)
    }

    render () {
        return (
            <form className="FormColorPicker">
                <select onChange={this.updatePageColor}>
                    {this.props.colors.map((color) =>
                        <option value={color.value}>{color.label}</option>
                    )}
                </select>
            </form>
        )
    }
}

export default FormColorPicker