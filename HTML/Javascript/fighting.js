    // lets get all DOM element by their id`s

    let playButton = document.getElementById('play');
    let resultDiv = document.getElementById('result');
    let p1NameDiv = document.getElementById('p1Name');
    let p2NameDiv = document.getElementById('p2Name');
    let p1HealthDiv = document.getElementById('p1Health');
    let p2HealthDiv = document.getElementById('p2Health');


    const updateGame = (p1, p2, gameState) => {
        p1NameDiv.innerText = p1.name;
        p2NameDiv.innerText = p2.name;
        p1HealthDiv.innerText = p1.health;
        p2HealthDiv.innerText = p2.health;

        if(p1.health <= 0 || p2.health <= 0) {
            game.isOver = true;
            gameState = game.isOver;
            resultDiv.innerText =
             game.declareWinner(game.isOver, p1, p2);
             return gameState;
        }
        
    }

    class Player {
        constructor(name, health, attackDamage) {
            this.name = name;
            this.health = health;
            this.attackDamage = attackDamage;
        }

        strike (player, enemy, attackDamage) {
            // Get random number between 1-10 and that is damageAmount
            let damageAmount = Math.ceil(Math.random() * this.attackDamage);
            // Subtract the enemy health with damageAmount
            enemy.health -= damageAmount;
            // Update the game and DOM with updateGame()
            updateGame(player, enemy, game.isOver);
            // Return A Message Of 'Player name Attacks Enemy Name For damageAmount'
            return `${player.name} attacks ${enemy.name} for ${damageAmount} damage`;

        }

        heal (player) {
            // Get the random number between 1 - 5 and store that in hpAmount
            let hpAmount = Math.ceil(Math.random() * 5);
            // Add hpAmount to player health
            player.health += hpAmount;
            // Update the game and DOM with updateGame()
            updateGame(p1, p2, game.isOver);
            // Returns a message of 'player name heals for hpAmount HP'
            return `${player.name} heals for ${hpAmount} HP!`;
        }
    }

    class Game {
        constructor () {
            this.isOver = false;
        }

        declareWinner (isOver, p1, p2) {
            // Create a message variable that will hold a message variable based on the condition
            let message = 'TIE';

            // If isOver is true and p1 health <= 0 then update message variable to 'p2 WINS'
            if (isOver == true && p1.health <= 0) {
                message = `${p2.name} WINS`;
            }
            // If isOver is true and p2 health <= 0 then update message variable to 'p1 WINS'
            else if (isOver == true && p2.health <= 0) {
                message = `${p1.name} WINS`;
            } 
            // Play victory Sound
            document.getElementById('victory').play();
            // Return message variable
            return message;
        }

        reset (p1, p2) {
            p1.health = 100;
            p2.health = 100;
            this.isOver = false;
            resultDiv.innerText = '';
            updateGame(p1, p2, this.isOver);
        }

        play (p1, p2) {

            this.reset(p1, p2);

            while (!this.isOver) {

                p1.strike(p1, p2, p1.attackDamage);
                p2.heal(p2);
                p2.strike(p2, p1, p2.attackDamage);
                p1.heal(p1);
            }
            return this.declareWinner(this.isOver, p1, p2)
        }
    }

    let player1 = new Player('Qazi', 100, 10);
    let player2 = new Player('Lance', 100, 10);
    

    let p1 = player1;
    let p2 = player2;

    

    let game = new Game();

    updateGame(p1, p2, game.isOver);


    let gameState;

    playButton.onclick = () => resultDiv.innerText = 
    game.play(p1,p2);

    document.addEventListener('keydown', function(e) {
        if(e.key == 'q' && p2.health > 0 && game.isOver == false) {
            // After stricking play the attack sound
            p1.strike(p1, p2, p1.attackDamage);
            document.getElementById('p1heal').play();
        }
    });

    document.addEventListener('keydown', function(e) {
        if(e.key == 'a' && p2.health >0 && game.isOver == false) {
            p1.heal(p1);
            document.getElementById('p1attack').play();
        }
    });

    document.addEventListener('keydown', function(e) {
        if(e.key == 'p' && p1.health > 0 && game.isOver == false) {
            p2.strike(p2, p1, p2.attackDamage);
            document.getElementById('p2heal').play();
        }
    });

    document.addEventListener('keydown', function(e) {
        if(e.key == 'l' && p1.health > 0 ) {
            p2.heal(p2);
            document.getElementById('p2attack').play();
        }
    });
