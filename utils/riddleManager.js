// Provides CRUD options for riddles
import fs from 'fs';
import readline from 'readline-sync';

export function manageRiddles() {
  const path = './riddles/db.txt';
  let riddles = JSON.parse(fs.readFileSync(path));

  console.log('\nRiddle Manager');
  console.log('1. Create');
  console.log('2. Read');
  console.log('3. Update');
  console.log('4. Delete');

  const choice = readline.question('Choose an option: ');
  if (choice === '1') {
    const id = riddles.length + 1;
    const name = readline.question('Enter riddle name: ');
    const taskDescription = readline.question('Enter description: ');
    const correctAnswer = readline.question('Enter correct answer: ');
    riddles.push({ id, name, taskDescription, correctAnswer });
  } else if (choice === '2') {
    console.log(riddles);
  } else if (choice === '3') {
    const id = parseInt(readline.question('Enter riddle ID to update: '));
    const riddle = riddles.find(r => r.id === id);
    if (riddle) {
      riddle.name = readline.question('Enter new name: ');
      riddle.taskDescription = readline.question('Enter new description: ');
      riddle.correctAnswer = readline.question('Enter new answer: ');
    }
  } else if (choice === '4') {
    const id = parseInt(readline.question('Enter riddle ID to delete: '));
    riddles = riddles.filter(r => r.id !== id);
  }

  fs.writeFileSync(path, JSON.stringify(riddles, null, 2));
}
