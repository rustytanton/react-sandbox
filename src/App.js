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
      pageTitle: 'Rusty\'s React Sandbox',
      listBasicItems: [
        (<a href="http://www.google.com">Google</a>),
        (<a href="http://www.facebook.com">Facebook</a>),
        (<a href="http://www.twitter.com">Twitter</a>),
      ],
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
          <PageHeader pageTitle={this.state.pageTitle} themes={this.state.themes} onSiteThemeChange={this.handleThemeChange} />
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
