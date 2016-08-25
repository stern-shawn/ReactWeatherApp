var React = require('react')

var home = React.createClass({
  render: function () {
    var homeStyle = {
      backgroundImage: "url('app/images/background-texture.svg')"
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

module.exports = home
