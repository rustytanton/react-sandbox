import React from 'react';
import Home from './pages/Home';
import BlogPostPage from './pages/BlogPostPage'
import PageHeader from './components/page-header/PageHeader'
import SiteInfoProvider from './lib/SiteInfoProvider';
import SiteInfoContext from './lib/SiteInfoContext';
import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render () {
    return (
      <SiteInfoProvider>
        <SiteInfoContext.Consumer>
          {context => (
            <div className={styles.container} style={context.theme.cssProperties}>
              <Router>
                <PageHeader navLinks={[
                  <Link to="/">Home</Link>
                ]} />
                <Switch>
                  <Route path="/blog/:postId" component={BlogPostPage} />
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Router>
            </div>
          )}
        </SiteInfoContext.Consumer>
      </SiteInfoProvider>
    )
  }
}

export default App;
