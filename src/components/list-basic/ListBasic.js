import React from 'react';
import styles from './ListBasic.module.css';

class ListBasic extends React.Component {
    render () {
        return (
            <ul className={styles.list}>
                {this.props.items.map((item, index) =>
                    <li className={styles.item} key={index.toString()}>
                    {item}
                    </li>
                )}
            </ul>
        )
    }
}

export default ListBasic