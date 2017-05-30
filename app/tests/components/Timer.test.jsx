var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });
  describe('handleTimer', () => {
    it('should show 0 initially', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>)

      expect(timer.state.count).toBe(0);
      expect(timer.state.countdownStatus).toBe('paused');
    });
    it('should count up when started',()=> {
      var timer = TestUtils.renderIntoDocument(<Timer/>)

      timer.handleStatusChange('started');
      setTimeout(() => {
        expect(this.state.count).toBe(3)
        expect(timer.state.countdownStatus).toBe('started');
      },3001);
    });
    it('should set count to 0 on stopped and status to paused', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 3, countdownStatus: 'started'})
      expect(timer.state.count).toBe(3);
      timer.handleStatusChange('stopped');

      setTimeout(()=> {
        expect(timer.state.count).toBe(0);
        expect(timer.state.countdownStatus).toBe('paused');
        done();
      },1001)
    });
  })
})
