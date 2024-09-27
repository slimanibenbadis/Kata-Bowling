export class Game {
  private rolls: number[] = Array(22).fill(0);

  // "currentRoll" est un compteur qui suit le nombre de lancers effectués jusqu'à présent.
  private currentRoll: number = 0;

  // La méthode "score" est utilisée pour calculer le score total d'une partie de bowling.
  // Pour l'instant, elle initialise simplement le score à 0 et le renvoie.
  // Vous devez compléter cette méthode pour qu'elle calcule correctement le score en fonction des lancers effectués.
  score(): number {
    let score = 0;

    function createFrames(rolls:Array<number>) {
      let frames = [];
      let nextRoll = 0;
    
      for (let i = 0; i < rolls.length; i++) {
        let roll = rolls[i];
        let frame = 0;

        if (rolls[i] < 10) {
          nextRoll = rolls[i + 1];

          frame = roll + nextRoll;
          i++;
        }else{
          frame = roll;
        }
        frames.push(frame);
      }
      return frames;
    }

    function calculateScore(frames:Array<number>) {
      score = frames.reduce((a, b) => a + b, 0);
      return score;
    }



    return calculateScore(createFrames(this.rolls));
  }

  // La méthode "roll" est utilisée pour enregistrer le nombre de quilles renversées lors d'un lancer.
  // Elle prend en paramètre "quilles" qui représente le nombre de quilles renversées.
  // Elle enregistre ce nombre dans le tableau "rolls" à l'index "currentRoll" et incrémente ensuite "currentRoll".
  roll(pins: number): void {
    this.rolls[this.currentRoll++] = pins;
  }
}
