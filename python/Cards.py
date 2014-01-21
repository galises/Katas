#!/usr/bin/python

import unittest

import re

values = {'A': 11, 'J': 10, 'Q': 10, 'K': 10}

def evaluate(input):
    suits = []
    totalValue = 0
    splitInput = input.split()
    for card in splitInput:
        value, color = processCard(card)
        if color not in suits:
            suits.append(color)
        totalValue += int(value)   
    suitsValue = sumSuits(len(suits))
    return totalValue + suitsValue

def processCard(card):
    cardValue = getCardValue(card)
    cardColor = getCardColor(card)
    return cardValue, cardColor

def getCardValue(card):
    cardValue = 0
    if (checkIfIsANotNumeredCard(card)):
        cardValue = str(values[getNotNumeredCardValue(card)])
    else:
        cardValue = getNumeredCardValue(card)
    return cardValue

def checkIfIsANotNumeredCard (card):
    return re.match(r"^[A|J|Q|K]",card,re.I|re.M)

def getNotNumeredCardValue(card):
    return re.search(r"^[A|J|Q|K]",card,re.I|re.M).group()

def getNumeredCardValue(card):
    return re.search(r"^(10|[1-9])",card,re.I|re.M).group()
        
def getCardColor(card):
    return re.search(r"\w$", card, re.I|re.M).group()

def sumSuits(sumSuits):
    result = 0
    if sumSuits == 2:
         result = 10
    elif sumSuits == 1:
        result = 25
    return result

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


