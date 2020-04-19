import React from 'react'
import Select from '../elements/Select'
import styles from './ThemeSwitcher.module.css'

class ThemeSwitcher extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            theme: 'tennessee',
            themes: [
                {
                    id: 'opt1',
                    label: 'Tennessee - Orange/White',
                    value: 'tennessee'
                },
                {
                    id: 'opt2',
                    label: 'Florida - Blue/Orange',
                    value: 'florida'
                },
                {
                    id: 'opt3',
                    label: 'Georgia - Red/Black',
                    value: 'georgia'
                },
                {
                    id: 'opt4',
                    label: 'Alabama - Crimson/White',
                    value: 'bama'
                }
            ]
        }
        this.onSelect = this.onSelect.bind(this)
    }

    onSelect (newColor) {
        this.props.onSelect(newColor)
    }

    render () {
        return (
            <div className={styles.container}>
                <p>Change the page theme:</p>
                <form action="#">
                    <Select options={this.state.themes} onSelect={this.onSelect} />
                </form>
            </div>
        )
    }
}

export default ThemeSwitcher