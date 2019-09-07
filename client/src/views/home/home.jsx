import React from 'react'
import './home.css'

class Home extends React.Component {
  render() {
    return (
        <div>
            <div class="jumbotron-intro">
                <h1 class="hd1">Everyday Utilities!</h1>
                <p class="lead hd1">
                    Tired of clicking the same spot on your screen again and again? 
                    <br></br>
                    Got bored of typing the same phrase over and over again during your day?
                </p>
                <hr class="my-4"/>
                <p class="hd1">Start playing around with your favourite utilities by selecting them from the left panel. Meanwhile, you can help us improve!</p>
                <p class="lead">
                    <a class="btn btn-warning btn-lg jumbotron-button" href="https://github.com/souravbadami/utilities" role="button">Contribute</a> 
                    <a class="btn btn-light btn-lg jumbotron-button" href="#" onClick= { () => this.props.toolkit("about")} role="button">About</a>
                    <a class="btn btn-success btn-lg jumbotron-button" href="#" role="button">Donate</a>
                </p>
            </div>
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 class="h2">What's New ?</h1>
                <div class="btn-toolbar mb-2 mb-md-0">

                </div>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Toolkit</th>
                        <th scope="col">Usage</th>
                        <th scope="col">Contributor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>SimpleHTTPServerWithUpload</td>
                    <td>GET/POST/UPLOAD Quick Server.</td>
                    <td>@souravbadami</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>GoogleImagesDownloader</td>
                    <td>Download Images From Google.</td>
                    <td>@souravbadami</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
  }
}
export default Home