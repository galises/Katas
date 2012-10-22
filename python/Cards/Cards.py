#!/usr/bin/python

import unittest

values = {'A': 11, 'J': 10, 'Q': 10, 'K': 10}

def evaluate(input):
    suits = ''
    totalValue = 0
    splitInput = input.split()
    for card in splitInput:
        cardValue = ""
        for char in card:
            if char.isdigit():
                cardValue = cardValue + str(char)
            else:
                if not char in values and not char in suits:
                    suits += char
                elif char in values:
                    cardValue = str(values[char])
        totalValue += int(cardValue)
    if len(suits) == 2:
        totalValue += 10
    elif len(suits) == 1:
        totalValue += 25
    return totalValue

class TestEvaluate(unittest.TestCase):
    def test1(self):
        value = evaluate("2C 10H AD KH 4S")
        self.assertEquals(value, 37)
        
    def test2(self):
        value = evaluate("9H QD QC 3H 3D AC AH")
        self.assertEquals(value, 57)

    def test3(self):
        value = evaluate("7C 8C AC 4D")
        self.assertEquals(value, 40)

if __name__ == "__main__":
    unittest.main()


