import React from 'react';
import styles from './App.module.css';
import Intro from './intro/Intro'
import ListBasic from './lists/ListBasic'
import PageHeader from './page-header/PageHeader'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      buttonToggled: false,
      pageTitle: 'Rusty\'s hello world React app',
      listBasicItems: [
        { id: 'item1', title: 'Item 1' },
        { id: 'item2', title: 'Item 2' },
        { id: 'item3', title: 'Item 3' }
      ],
      theme: 'tennessee'
    }
    this.handleThemeChange = this.handleThemeChange.bind(this)
    this.toggleButton = this.toggleButton.bind(this)
  }

  toggleButton () {
    this.setState((state => ({
        buttonToggled: !state.buttonToggled
    })))
  }

  handleThemeChange (newTheme) {
    this.setState({
      theme: newTheme
    })
  }

  render () {
    return (
      <div className={styles.container} data-theme={this.state.theme}>
        <header className={styles.header}>
          <PageHeader pageTitle={this.state.pageTitle} onSiteThemeChange={this.handleThemeChange} />
        </header>
        <main className={styles.main}>
          <Intro />

          <p>A list of items which responds to site theme changes:</p>
          <ListBasic items={this.state.listBasicItems} />

          <p>Click a button:</p>
          <button className={styles.button} onClick={this.toggleButton}>{this.state.buttonToggled ? 'clicked' : 'click me'}</button>
        </main>
      </div>
    )
  }
}

export default App;
