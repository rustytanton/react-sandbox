import React from 'react';
import './App.css';
import PageHeader from './page-header/PageHeader'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pageTitle: "Rusty's hello world app"
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <PageHeader pageTitle={this.state.pageTitle} />
        </header>
      </div>
    )
  }
}

export default App;
