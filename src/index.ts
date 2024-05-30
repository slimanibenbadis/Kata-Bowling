import { Game } from './game';

// Création d'une nouvelle instance de jeu
const firstGame = new Game();

// Nous allons jouer 10 tours (ou "frames") dans une partie de bowling
for (let frame = 0; frame < 10; frame++) {
  // Chaque tour a deux lancers, nous allons donc lancer deux fois
  firstGame.roll(1); // Premier lancer
  firstGame.roll(2); // Deuxième lancer
}

// Affichage du score final
console.log('Score du jeu classique :', firstGame.score());

// --------------------------------

// Création d'une nouvelle instance de jeu avec des spares
const secondGame = new Game();

// Nous allons jouer 10 tours (ou "frames") dans une partie de bowling
for (let frame = 0; frame < 10; frame++) {
  // Chaque tour a deux lancers, nous allons donc lancer deux fois
  // Dans ce cas, nous faisons un "spare" à chaque deuxième tour
  if (frame % 2 === 0) {
    secondGame.roll(1); // Premier lancer
    secondGame.roll(2); // Deuxième lancer
  } else {
    secondGame.roll(5); // Premier lancer
    secondGame.roll(5); // Deuxième lancer (spare)
  }
}

// Affichage du score final
console.log('Score du jeu des spares :', secondGame.score());

// --------------------------------

// Création d'une nouvelle instance de jeu avec des strikes
const thirdGame = new Game();

// Nous allons jouer 10 tours (ou "frames") dans une partie de bowling
for (let frame = 0; frame < 10; frame++) {
  // Chaque tour a deux lancers, nous allons donc lancer deux fois
  // Dans ce cas, nous faisons un "strike" à chaque troisième tour
  if (frame % 3 === 0) {
    thirdGame.roll(10); // Premier lancer (strike)
  } else {
    thirdGame.roll(1); // Premier lancer
    thirdGame.roll(2); // Deuxième lancer
  }
}

// Lancers bonus après un strike au dernier tour
thirdGame.roll(5); // Premier lancer bonus
thirdGame.roll(4); // Deuxième lancer bonus

// Affichage du score final
console.log('Score du jeu avec des strikes :', thirdGame.score());
