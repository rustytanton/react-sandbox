import React from 'react';
import styles from './GridCol.module.css'

class GridCol extends React.Component {
    render () {
        return (
            <div class={styles.container}>
                {this.props.children}
            </div>
        )
    }
}

export default GridCol