import React from 'react'
import './contributions.css'

class Contributions extends React.Component {
  render() {
    return (
      <div>
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Contributions</h1>
            <div class="btn-toolbar mb-2 mb-md-0">

            </div>
        </div>
        <p>
          Everyday Utilities contributors come from all over the world — many of us are students, 
          recent students and developers. We'd like to thank the following contributors who've 
          helped to build the platform. If you'd like to help, here's how you can get involved!
        </p>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Github</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Sourav Badami</td>
                  <td>@souravbadami</td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}
export default Contributions