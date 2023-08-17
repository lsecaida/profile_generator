const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you think of Node.js? ", (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);

  rl.question(
    "What's your name? Nicknames are also acceptable :) ",
    (answer2) => {
      console.log(`Hello, ${answer2}! Nice to meet you.`);

      rl.question("What's an activity you like doing? ", (answer3) => {
        console.log(`Interesting! I also enjoy ${answer3}.`);

        rl.question("What do you listen to while doing that? ", (answer4) => {
          console.log(`Ah, ${answer4} is a great choice of music.`);

          rl.question(
            "Which meal is your favourite (e.g., dinner, brunch, etc.)? ",
            (answer5) => {
              console.log(`I see, ${answer5} is your favorite meal.`);

              rl.question(
                `What's your favourite thing to eat for ${answer5}? `,
                (answer6) => {
                  console.log(`Yum, ${answer6} sounds delicious.`);

                  rl.question(
                    "Which sport is your absolute favourite? ",
                    (answer7) => {
                      console.log(
                        `Oh, ${answer7} is a fantastic sport choice.`
                      );

                      rl.question(
                        "What is your superpower? In a few words, tell us what you are amazing at! ",
                        (answer8) => {
                          console.log(
                            `Impressive! Your superpower is ${answer8}.`
                          );

                          rl.close();
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        });
      });
    }
  );
});
