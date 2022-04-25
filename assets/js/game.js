// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


var playerMoney = 10;
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto the Ravenger", "Annamarie the Terror", "Max the Mincer"];
console.log(enemyNames)
console.log(enemyNames.length)
for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyNames) {

  window.alert("Welcome to RoboGladiator!");
  
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight"){

    console.log(
      playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
    );
  
    enemyHealth = enemyHealth - playerAttack;

    if (enemyHealth <= 0) {
      window.alert(enemyNames + " has died!");
    } 
    else {
      window.alert(enemyNames + " still has " + enemyHealth + " health left.");
   }
  
    console.log(
     enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    playerHealth = playerHealth - enemyAttack;

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } 
   else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
   }
  
  } else if (promptFight === "skip" || promptFight === "SKIP" || promptFight === "Skip") {
      window.alert(playerName + " has chosen to skip the fight!");

    var confirmSkip = window.confirm("Are you sure you want to quit???")

    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");

      playerMoney = playerMoney - 10
    }
    
    else {
      fight();
    }
  } else {
      window.alert("You need to choose a valid option. Try again!");
  }
}
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}