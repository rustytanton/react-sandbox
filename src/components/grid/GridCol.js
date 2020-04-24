import React from 'react';
import styles from './GridCol.module.css';

class GridCol extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            width: '100%'
        };
    }

    /* @todo figure out a clean way to handle media queries with css modules + react */
    componentDidMount() {
        let self = this
        this.resizeEvent = window.addEventListener('resize', () => {
            self.updateStateOnResize();
        })
        self.updateStateOnResize();
    }
  
    /* @todo figure out a clean way to handle media queries with css modules + react */
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeEvent);
    }

    /* @todo figure out a clean way to handle media queries with css modules + react */
    updateStateOnResize () {
        if (window.innerWidth > 768 && this.props.width) {
            this.setState({
                width: this.props.width
            });
        } else if (window.innerWidth < 768) {
            this.setState({
                width: '100%'
            });
        } else {
            this.setState({
                width: 'auto'
            });
        }
    }
    
    render () {
        return (
            <div
                className={styles.container}
                style={{ width: this.state.width }}
                data-stretch={this.props.stretch}
                data-halign={this.props.halign}
                data-valign={this.props.valign}
            >
                {this.props.children}
            </div>
        )
    }
}

export default GridCol