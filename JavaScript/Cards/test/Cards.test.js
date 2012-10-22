var assert = require("assert"), evaluate = require('./../Cards.js');

describe('evaluateHand', function()
      {
	  it('The value of the hand \"2C 10H AD KH 4S\" should be 37', function ()
		{
		    assert.equal(37, evaluate.evaluateHand("2C 10H AD KH 4S"));
		});
	  
	  it('The value of the hand \"9H QD QC 3H 3D AC AH\" should be 57', function ()
		{
		    assert.equal(57, evaluate.evaluateHand("9H QD QC 3H 3D AC AH"));
		});

	  it('The value of the hand \"7C 8C AC 4D\" should be 40', function ()
		{
		    assert.equal(40, evaluate.evaluateHand("7C 8C AC 4D"));
		});


      });