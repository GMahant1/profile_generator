const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable ", (answer2) => {


  rl.question("What's an activity you like doing? ", (answer3) => {


    rl.question("What do you listen to while doing that? ", (answer4) => {


      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer5) => {


        rl.question("What's your favourite thing to eat for that meal? ", (answer6) => {


          rl.question("Which sport is your absolute favourite? ", (answer7) => {
              console.log(`Your bio is: \nMy name is ${answer2} and I like to ${answer3} while listening to ${answer4}. My favourite meal is ${answer5}, and I enjoy eating ${answer6}! The best sport in the world is ${answer7}.`);

              rl.close();
            });
          });
        });
      });
    });
  });