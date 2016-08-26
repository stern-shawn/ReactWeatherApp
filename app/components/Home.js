var React = require('react')

var Home = React.createClass({
  render: function () {
    var homeStyle = {
      backgroundSize: 'cover',
      backgroundImage: "url('app/images/background-texture.svg')",
      height: '100%',
      width: '100%'
    }

    return (
      <div className="container text-center" style={homeStyle}>
        <h1>Enter a City and State</h1>
        <div className="col-sm-12">
          <form>
            <input className="form-control"
              placeholder="Portland, OR"
              type="text" />
          </form>
        </div>
        <div className="col-sm-12">
          <button className="btn btn-success" type="submit">Get Weather</button>
        </div>
      </div>
    )
  }
})

module.exports = Home
