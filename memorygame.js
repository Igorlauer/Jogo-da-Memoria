/* Função para carregamento de pagina*/
alert("Está pronto para desafiar os antigos vencedores?\n Se não estiver, saia enquanto há tempo");

/* Função para inicio de jogo */
function alertstart() {
  alert("Tem certeza que irá manchar seu nome com essa derrota?")
}

const board = document.querySelector('.game');
const score = document.querySelector(".score");
let scoreCount = 0;
let pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
let selectedCards = [];

const load = () => {
  scoreCount = 0;
  const shufflepairs = shuffle(pairs);
  let selectedCards = [];

}


const shuffle = (pairs) => {
  for(let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  return pairs;
}

const createCards = (pairs) => {
  pairs.forEach(pair => {
    console.log(pair);
  
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = pair;
    card.dataset.value = pair;
    card.addEventListener("click", isMatch);
  
    board.append(card);
  
  });
  

}

load();

pairs.forEach(pair => {
  console.log(pair);

  const card = document.createElement('div');
  card.className = 'card';
  card.innerText = pair;
  card.dataset.value = pair;
  card.addEventListener("click", isMatch);

  board.append(card);

});

function isMatch(value) {
  const selectedCard = value.target;

  if (selectedCard.classList.contains("opencard")) {
    console.log("Number selected")
    return;
  }

  console.log(value.target);

  selectedCard.classList.add("opencard")

  selectedCards.push(selectedCard)


  if (selectedCards.length > 1) {
    const card1 = selectedCards[0];
    const card2 = selectedCards[1];

    if (card1.dataset.value === card2.dataset.value) {
      scoreCount = scoreCount + 1;
      score.innerText = `score: ${scoreCount}`;
      selectedCards = []
    } else {
      selectedCards = []
      setTimeout(() => {
        card1.classList.remove("opencard")
        card2.classList.remove("opencard")
      }, 800)

    }

    console.log("card 1", card1)
    console.log("card 2", card2);
  }
}

var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});


console.log(board);