import React from 'react';
import styles from './ListBasic.module.css';

class ListBasic extends React.Component {
    render () {
        return (
            <ul className={styles.list}>
                {this.props.items.map((item) =>
                    <li className={styles.item} key={item.id}>
                    {item.title}
                    </li>
                )}
            </ul>
        )
    }
}

export default ListBasic