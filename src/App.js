import React from 'react';
import styles from './App.module.css';
import PageHeader from './components/page-header/PageHeader';
import Home from './pages/Home';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      route: '/',
      pageTitle: 'Rusty\'s React Sandbox',
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
          <PageHeader
            pageTitle={this.state.pageTitle}
            themes={this.state.themes}
            onThemeChange={this.handleThemeChange}
          />
        </header>
        <main className={styles.main}>
          {this.state.route === '/' &&
            <Home />
          }
        </main>
      </div>
    )
  }
}

export default App;
