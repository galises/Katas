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
                    if (! isNaN(splitHand[card].charAt(i)))
                        {
                            // It's a Number;
                            var number = splitHand[card].charAt(i) + '';
                            cardValue += number;
                        }
                    else
                        {
                            // It's a letter;
                            if (splitHand[card].charAt(i) == 'A' || splitHand[card].charAt(i) == 'J' || splitHand[card].charAt(i) == 'Q' || splitHand[card].charAt(i) == 'K')
                                {
                                    cardValue = values[splitHand[card].charAt(i)] + '';
                                }
                            else
                                {
                                    if (suit.lastIndexOf(splitHand[card].charAt(i)) == -1)
                                        {
                                            suit += splitHand[card].charAt(i);
                                        }
                                }
                        }
                }
            totalValue += parseInt(cardValue);
        }
    if (suit.length == 2)
        {
            totalValue += 10;
        }
    else if (suit.length == 1)
        {
            totalValue += 25;
        }
    return totalValue;
}

module.exports.evaluateHand = evaluateHand;

// print (evaluateHand("2C 10H AD KH 4S"));
// print (evaluateHand("9H QD QC 3H 3D AC AH"));
// print (evaluateHand("7C 8C AC 4D"));