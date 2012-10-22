var assert = require("assert"), evaluate = require('./../Cards.js');

describe('evaluateHand', function()
      {
	  it('evaluateHand should return the value of the Hand', function ()
		{
		    assert.equal(37, evaluate.evaluateHand("2C 10H AD KH 4S"));
		});
      });