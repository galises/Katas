var assert = require("assert"), Player = require("../TennisMatch.js").Player, Match = require("../TennisMatch.js").Match;

describe("Match", function()
	 {
	     var match;
	     before(function ()
			{
			    match = new Match("Nadal", "Federer");
			});
			    
	     it ('The players starts with 0-0 punctuation', function ()
		 {
		     var nadalPoints = match.getPoints("Nadal");
		     var federerPoints = match.getPoints("Federer");
		     assert.equal("0", "0", nadalPoints, federerPoints);
		 });

	     it ('Nadal Make a point', function ()
		 {
		     match.doPoint("Nadal");
		     var nadalPoints = match.getPoints("Nadal");
		     assert.equal("15", nadalPoints);
		 });
	     
	     it ('Federer Make a point', function ()
		 {
		     match.doPoint("Federer");
		     var federerPoints = match.getPoints("Federer");
		     assert.equal("15", federerPoints);
		 });

	     it  ('Nadal do the second point', function ()
		  {
		      match.doPoint("Nadal");
		      var nadalPoints = match.getPoints("Nadal");
		      assert.equal("30", nadalPoints);
		  });
	     
	     it ('Nadal do the thirth point', function ()
		 {
		     match.doPoint("Nadal");
		     var nadalPoints = match.getPoints("Nadal");
		     assert.equal("40", nadalPoints);
		 });

	     
	     it  ('Federer do the second point', function ()
		  {
		      match.doPoint("Federer");
		      var federerPoints = match.getPoints("Federer");
		      assert.equal("30", federerPoints);
		  });
	     
	     it ('Federer do the thirth point', function ()
		 {
		     match.doPoint("Federer");
		     var federerPoints = match.getPoints("Federer");
		     assert.equal("40", federerPoints);
		 });

	     it ('The game is deuce', function ()
		 {
		     var deuce = match.isDeuce();
		     assert.equal(true, deuce);
		 });

	     it ('The game isn\'t finished', function ()
		 {
		     var winner = match.isFinish();
		     assert.equal("", winner);
		 });
	     
	     it ('Advantage Nadal', function ()
		 {
		     match.doPoint("Nadal");
		     var nadalPoints = match.getPoints("Nadal");
		     var winner = match.isFinish();
		     assert.ok(nadalPoints == "Advantage" && winner == "");
		 });

	     it ('The game is deuce', function ()
		 {
		     match.doPoint("Federer");
		     var federerPoints = match.getPoints("Federer");
		     var nadalPoints = match.getPoints("Nadal");
		     var deuce = match.isDeuce();
		     assert.equal("40", "40", true, nadalPoints, federerPoints, deuce);
		 });
	     
	     it ('Nadal win the game', function ()
		 {
		     match.doPoint("Nadal");
		     match.doPoint("Nadal");
		     var winner = match.isFinish();
		     assert.equal("Nadal", winner);
		 });
	 });

describe("Clean set Match", function()
	 {
	     var match;
	     before(function ()
			{
			    match = new Match("Nadal", "Federer");
			});
	     
	     it ('Nadal does a clean set', function ()
		 {
		     match.doPoint("Nadal");
		     match.doPoint("Nadal");
		     match.doPoint("Nadal");
		     var notWinner = match.isFinish()
		     match.doPoint("Nadal");
		     var winner = match.isFinish();
		     assert.ok("Nadal" ==  winner && "" == notWinner);
		 });
	 });
			    










