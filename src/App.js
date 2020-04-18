import React from 'react';
import styles from './App.module.css';
import Select from './elements/Select'
import ListBasic from './lists/ListBasic'
import PageHeader from './page-header/PageHeader'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pageTitle: 'Rusty\'s hello world app',
      listBasicItems: [
        { id: 'item1', title: 'Item 1' },
        { id: 'item2', title: 'Item 2' },
        { id: 'item3', title: 'Item 3' }
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
    this.updatePageTheme = this.updatePageTheme.bind(this)
  }

  updatePageTheme (newColor) {
    this.setState({ theme: newColor })
  }

  render () {
    return (
      <div className={styles.container} data-theme={this.state.theme}>
        <header className={styles.header}>
          <PageHeader pageTitle={this.state.pageTitle} />
        </header>
        <main className={styles.main}>
          <p>Change the color of the page:</p>
          <form action="#">
            <Select options={this.state.themes} onSelect={this.updatePageTheme} />
          </form>

          <p>Below is a list of items that doesn't do much right now. Later the bullets will respond to a theme change:</p>
          <ListBasic items={this.state.listBasicItems} />
        </main>
      </div>
    )
  }
}

export default App;
