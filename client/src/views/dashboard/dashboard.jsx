import React from 'react'
import { withRouter } from 'react-router-dom';
import './dashboard.css'

// Navigation 
import Navigation from '../../components/navigation/navigation'
import Drawer from '../../components/drawer/drawer'

// Views
import Home from '../../views/home/home'
import About from '../../views/about/about'
import Contributions from '../../views/contributions/contributions'

// Toolkits
import QuickServer from '../../toolkits/quickserver/quickserver'
import ImageDownloader from '../../toolkits/imagedownloader/imagedownloader'

class Dashboard extends React.Component {

  state = {
    "page_type": "home"
  }

  toolkit = (toolname) => {
    this.setState({page_type: toolname})
  }

  render() {
    return (
      <div>
      <Navigation></Navigation>
      <div class="container-fluid">
        <div class="row">
          <Drawer toolkit = {this.toolkit} ></Drawer> 
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            {/* Supportive */}
            {this.state.page_type == "home" ? <Home toolkit = {this.toolkit}></Home>: null}
            {this.state.page_type == "about" ? <About></About>: null}
            {this.state.page_type == "contributions" ? <Contributions></Contributions>: null}

            {/* Core Toolkits */}
            {this.state.page_type == "quickserver" ? <QuickServer></QuickServer>: null}
            {this.state.page_type == "imagedownloader" ? <ImageDownloader></ImageDownloader>: null}
          </main>
        </div>
      </div>
      </div>
    )
  }
}
export default withRouter(Dashboard)