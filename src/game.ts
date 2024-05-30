export class Game {
  private rolls: number[] = Array(22).fill(0);

  // "currentRoll" est un compteur qui suit le nombre de lancers effectués jusqu'à présent.
  private currentRoll: number = 0;

  // La méthode "score" est utilisée pour calculer le score total d'une partie de bowling.
  // Pour l'instant, elle initialise simplement le score à 0 et le renvoie.
  // Vous devez compléter cette méthode pour qu'elle calcule correctement le score en fonction des lancers effectués.
  score(): number {
    let score = 0;

    // À faire

    return score;
  }

  // La méthode "roll" est utilisée pour enregistrer le nombre de quilles renversées lors d'un lancer.
  // Elle prend en paramètre "quilles" qui représente le nombre de quilles renversées.
  // Elle enregistre ce nombre dans le tableau "rolls" à l'index "currentRoll" et incrémente ensuite "currentRoll".
  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }
}
