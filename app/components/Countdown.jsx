var React = require('react');
var Clock = require('Clock');

var Countdown = (props) => {
  return (
    <div>
      <Clock totalSeconds={129}></Clock>
    </div>
  );
}


module.exports = Countdown;
