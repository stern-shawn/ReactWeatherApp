var React = require('react')

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <h1>Main.js Header</h1>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = Main
