var React  = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
 render: function () {
   var {countdownStatus} = this.props;
   var renderStartStop = () => {
     if(countdownStatus === 'started') {
       return <button className="button hollow secondary">Pause</button>
     } else if (countdownStatus === 'paused') {
       return <button className="button hollow primary">Start</button>
     }
   };

   return (
     <div className="controls">
       {renderStartStop()}
       <button className="button alert hollow">Reset</button>
     </div>
   )
 }
});

module.exports = Controls;
