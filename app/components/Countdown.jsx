var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');


var Countdown =  React.createClass({
  getInitialState: function() {
    return {count: 0};
  },
  handleSetCountdwon: function (seconds) {
    this.setState ({
      count: seconds
    });
  },
  render: function () {
    var count = this.state.count;
    return (
      <div>
        <Clock totalSeconds={count}></Clock>
        <CountdownForm onSetCountdown={this.handleSetCountdwon}></CountdownForm>
      </div>
    );
  }
})


module.exports = Countdown;
