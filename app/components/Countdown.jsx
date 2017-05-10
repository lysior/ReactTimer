var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');


var Countdown =  React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countDownStatus: 'stopped'
    };
  },
  handleSetCountdwon: function (seconds) {
    this.setState ({
      count: seconds,
      countDownStatus: 'started'
    });
  },
  componentDidUpdate: function (prevProps,prevState) {
    if(this.state.countDownStatus !== prevState.countDownStatus) {
      switch (this.state.countDownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval ( () => {
      var newCount = this.state.count -1;
      this.setState({
        count: newCount >= 0 ? newCount: 0
      });
    },1000)
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
