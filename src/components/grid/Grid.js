import React from 'react';
import styles from './Grid.module.css'

class Grid extends React.Component {
    render () {
        let styleProps = {
            width: this.props.width
        }
        return (
            <div
                style={styleProps}
                className={styles.container}
                data-halign={this.props.halign}
                data-valign={this.props.valign}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Grid