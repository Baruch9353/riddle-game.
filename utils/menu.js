// Handles main menu logic
import readline from 'readline-sync';
import { playGame } from './play.js';
import { showLeaderboard } from './leaderboard.js';
import { manageRiddles } from './riddleManager.js';

export function menu() {
  while (true) {
    console.log('\nWhat do you want to do?');
    console.log('1. Play the game');
    console.log('2. Manage riddles');
    console.log('3. View leaderboard');
    console.log('4. Exit');

    const choice = readline.question('Choose an option: ');
    if (choice === '1') playGame();
    else if (choice === '2') manageRiddles();
    else if (choice === '3') showLeaderboard();
    else if (choice === '4') break;
  }
}
