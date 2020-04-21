import React from 'react';
import Home from './pages/Home';
import SiteInfoProvider from './lib/SiteInfoProvider';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      route: '/'
    }
  }

  render () {
    return (
      <SiteInfoProvider>
        <Home title="Home" />
      </SiteInfoProvider>
    )
  }
}

export default App;
