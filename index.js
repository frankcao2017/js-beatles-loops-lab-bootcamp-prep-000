function theBeatlesPlay(musicians, instruments) {
  var arr = []

  for (var i = 0, l = musicians.length; i < l; i++) {
    arr.push(musicians[i] + " plays " + instruments[i])
  }

  return arr
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var theFacts = []

  var i = 0
  while (i < facts.length) {
    theFacts.push(facts[i] + "!!!")
    i++
  }
  return theFacts
}