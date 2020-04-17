import React from 'react';
import './App.css';
import Select from './forms/Select'
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
              label: 'Tennessee - Orange/White',
              value: 'tennessee'
          },
          {
              label: 'Florida - Blue/Orange',
              value: 'florida'
          },
          {
              label: 'Georgia - Red/Black',
              value: 'georgia'
          },
          {
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
      <div className="App" data-theme={this.state.theme}>
        <header className="App-header">
          <PageHeader pageTitle={this.state.pageTitle} />
        </header>
        <main className="App-main">
          <p>Change the color of the page:</p>
          <form>
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
