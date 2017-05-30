var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'paused'
    };
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  componentDidUpdate: function (prevProps,prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0, countdownStatus: 'paused'});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval ( () => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    },1000)
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  render: function () {
    var {count, countdownStatus} = this.state;
    var  renderControls = () => {
      return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
    }

    return (<div>
      <h1 className='page-title'>Timer App</h1>
      <Clock totalSeconds={count}></Clock>
      {renderControls()}
    </div>)
  }
})



module.exports = Timer;
