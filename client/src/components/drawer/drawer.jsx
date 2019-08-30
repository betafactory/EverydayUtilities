import React from 'react'
import { withRouter } from 'react-router-dom';
import './drawer.css'

class Drawer extends React.Component {
  render() {
    return (
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link" href="#" onClick= { () => this.props.toolkit("home")}>
                    <span data-feather="home"></span>
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onClick= { () => this.props.toolkit("about")}>
                    <span data-feather="file"></span>
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onClick= { () => this.props.toolkit("contributions")}>
                    <span data-feather="file"></span>
                    Contributions
                  </a>
                </li>
              </ul>

              <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Utilities</span>
                <a class="d-flex align-items-center text-muted" href="#">
                  <span data-feather="plus-circle"></span>
                </a>
              </h6>
              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href="#" onClick= { () => this.props.toolkit("quickserver")}>
                    <span data-feather="file-text"></span>
                    Quick Server
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onClick= { () => this.props.toolkit("imagedownloader")}>
                    <span data-feather="file-text"></span>
                    Image Downloader
                  </a>
                </li>
              </ul>
            </div>
          </nav>
    )
  }
}
export default withRouter(Drawer)