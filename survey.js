const readline = require('readline');
let name = "";
let s = "";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name?", (answer) => {
  name = answer;

  rl.question("What's an activity you like doing? ", (answer) => {
    s += name+" really enjoys "+answer;

    rl.question("What do you listen to while doing that? ", (answer) => {
      s += " and listens to "+answer+" music while doing that. ";
      
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer) => {
        s += name + "'s favorite meal is "+answer+". ";
        
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          s += name + " loves to eat "+answer+" during meal. ";
      
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            s += name + "'s  favorite sport is "+answer+". ";
        
            rl.close();
            console.log(s);
          });
         
        });
        
      });
      
    });
    
  });

});