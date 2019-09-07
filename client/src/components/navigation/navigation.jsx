import React from 'react'
import './navigation.css'


class Navigation extends React.Component {
  render() {
    return (
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#"><img class="nav-logo-custom" src={process.env.PUBLIC_URL + "/assets/images/logo.png"} /> Everyday Utilities</a>
            <input class="form-control form-control-dark w-100" type="text" placeholder="Search utilities here ..." aria-label="Search"/>
            <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
                <a class="nav-link" href="#">System Controller</a>
            </li>
            </ul>
        </nav>
    )
  }
}
export default Navigation