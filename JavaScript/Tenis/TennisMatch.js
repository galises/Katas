var Player = function (playerName)
{
    this.name = new String(playerName);
    this.points = 0;
    
    this.doPoint = function ()
    {
	this.points += 1;
    }

    this.getPoints = function ()
    {
	var points = new String(0);
	switch (this.points)
	{
	case 1:
	    points = "15";
	    break;
	case 2:
	    points = "30";
	    break;
	case 3:
	    points = "40";
	    break
	case 4:
	    points = "Advantage";
	    break;
	}
	return points;
    }

    this.deuce = function ()
    {
	this.points = 3;
    }
}

var Match = function (playerName1, playerName2)
{
    this.player1 = new Player(playerName1);
    this.player2 = new Player(playerName2);

    this.doPoint = function (playerName)
    {
	if (playerName == this.player1.name)
	    this.player1.doPoint();
	else if (playerName == this.player2.name)
	    this.player2.doPoint();
	if ((this.player1.points == this.player2.points && this.player1.points == 4))
	{
	    this.player1.deuce();
	    this.player2.deuce();
	}
    }
    
    this.isFinish = function ()
    {
	var winner = new String();
	if ((this.player1.points == 4 && this.player2.points <= 2) || (this.player1.points == 5 && this.player2.points == 3))
	    winner = this.player1.name;
	else if ((this.player2.points == 4 && this.player1.points <= 2) || (this.player2.points == 5 && this.player1.points == 3))
	    winner = this.player2.name;
	return winner;
    }

    this.isDeuce = function()
    {
	var deuce = new Boolean(false);
	if ((this.player1.points == this.player2.points && this.player1.points == 4) || (this.player1.points == this.player2.points && this.player1.points == 3))
	    deuce = true;
	return deuce;
    }

    this.getPoints = function (playerName)
    {
	var result = new String();
	if (playerName == this.player1.name)
	    result = this.player1.getPoints();
	else if (playerName == this.player2.name)
	    result = this.player2.getPoints();
	return result;
    }
}

module.exports.Player = Player;
module.exports.Match = Match;