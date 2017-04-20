var React = require('react');
var ReactDom = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var Clock = require('Clock');

describe ( 'Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });
  describe ( 'formatSeconds', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    it('should return a string', () => {
      expect(clock.formatSeconds(63)).toBeA('string');
    })
    it('should convert 30 to 0:30', () => {
      expect(clock.formatSeconds(30)).toBe('00:30');
    })
    it('should convert 63 to 1:03', () => {
      expect(clock.formatSeconds(63)).toBe('01:03');
    })
    it('should convert 0 to 0:00', () => {
      expect(clock.formatSeconds(0)).toBe('00:00');
    });
  });
  describe ('render', () => {
    var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
    var $el = $(ReactDom.findDOMNode(clock));
    var actualText = $el.find('.clock-text').text();
    it('should render clock', () => {
      expect(actualText).toBe('01:02')
    })

  })
})
