var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe ('handleSetCountdwon', () => {
    it('should be started and count down', () => {
      var countdownObj = TestUtils.renderIntoDocument(<Countdown/>);
      countdownObj.handleSetCountdwon(10);
      expect(countdownObj.state.count).toBe(10);
      expect(countdownObj.state.countdownStatus).toBe('started');

      setTimeout( () => {
        expect(countdownObj.state.count).toBe(9);
      },1001);
    });
    it('should not be set to a negative number', () => {
      var countdownObj = TestUtils.renderIntoDocument(<Countdown/>);
      countdownObj.handleSetCountdwon(1);

      setTimeout( () => {
        expect(countdownObj.state.count).toBe(0);
      },3001);
    })
  })
})
