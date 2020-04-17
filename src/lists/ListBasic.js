import React from 'react';
import './ListBasic.css';
import powerT from '../images/power-t.svg'

class ListBasic extends React.Component {
    render () {
        
        return (
            <ul className="ListBasic">
                {this.props.items.map((item) =>
                    <li className="ListBasic-item" key={item.id}>
                    <img alt='' className="ListBasic-bullet" src={powerT} />
                    {item.title}
                    </li>
                )}
            </ul>
        )
    }
}

export default ListBasic