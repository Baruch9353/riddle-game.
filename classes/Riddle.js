// Represents a single riddle
import readline from 'readline-sync';

export class Riddle {
  constructor({ id, name, taskDescription, correctAnswer }) {
    this.id = id;
    this.name = name;
    this.taskDescription = taskDescription;
    this.correctAnswer = correctAnswer;
  }

  // Asks the riddle and waits for the correct answer
  ask() {
    let answer;
    do {
      answer = readline.question(`${this.taskDescription} `).trim();
    } while (answer.toLowerCase() !== this.correctAnswer.toLowerCase());
    console.log('Correct!\n');
  }
}
