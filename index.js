const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event){
  let cards = [];
  for (let i = 0; i<names.length; i++){
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    cards.push(message);
  }
  return cards;
}

function countDown(i){ 
  while (i >= 0){
    console.log(i);
    i--;
  }
}