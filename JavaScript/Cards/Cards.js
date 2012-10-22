var values = {};
values['J'] = 10;
values['Q'] = 10;
values['K'] = 10;
values['A'] = 11;

function evaluateHand(hand)
{
    var totalValue = 0;
    var suit = new String();
    var splitHand = hand.split(' ');
    for (var card in splitHand)
    {
	var i = 0;
	var cardValue = new String();
	for (; i <= card.length; i++)
	{
	    var charReaded = splitHand[card].charAt(i);
	    if (! isNaN(charReaded))
	    {
		// It's a Number;
		var number = charReaded + '';
		cardValue += number;
	    }
	    else
	    {
		// It's a letter;
		if (charReaded == 'A' || charReaded == 'J' || charReaded == 'Q' || charReaded == 'K')
		// It's a Value
		    cardValue = values[charReaded] + '';
		else
		    // It's the suit
		    if (suit.lastIndexOf(charReaded) == -1)
			suit += splitHand[card].charAt(i);
	    }
	}
	totalValue += parseInt(cardValue);
    }
    if (suit.length == 2)
	totalValue += 10;
    else if (suit.length == 1)
	totalValue += 25;
    return totalValue;
}

module.exports.evaluateHand = evaluateHand;