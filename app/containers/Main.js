var React = require('react')

// Styling for this app
var styles = {
  container: {
    width: '100%',
    height: '100%'
  }
}

var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <h1>Main.js Header</h1>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main
