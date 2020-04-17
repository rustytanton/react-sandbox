import React from 'react';
import './App.css';
import PageHeader from './page-header/PageHeader'
import ListBasic from './lists/ListBasic'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pageTitle: "Rusty's hello world app",
      listBasicItems: [
        { id: 'item1', title: 'Item 1' },
        { id: 'item2', title: 'Item 2' },
        { id: 'item3', title: 'Item 3' }
      ]
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <PageHeader pageTitle={this.state.pageTitle} />
        </header>
        <main className="App-main">
          <ListBasic items={this.state.listBasicItems} />
        </main>
      </div>
    )
  }
}

export default App;
