import React from 'react'
import './dashboard.css'
import Navigation from '../../components/navigation/navigation'
import Drawer from '../../components/drawer/drawer'
import Home from '../../views/home/home'

class Dashboard extends React.Component {

  state = {
    "page_type": this.props.match.params.toolname
  }

  render() {
    return (
      <div>
      <Navigation></Navigation>
      <div class="container-fluid">
        <div class="row">
          <Drawer></Drawer> 
          <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <Home></Home>
          {/* {this.state.page_type == "quickserver" ? "abcd" : null} */}
          </main>
        </div>
      </div>
      </div>
    )
  }
}
export default Dashboard