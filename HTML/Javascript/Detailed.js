// CONSOLE METHOD
// console.log('Faizan is a busy boy.');

// name = 'jon Doe';
// console.log(name);

// sentence = 'How Are you doing today,nice to see you, hope you have great day';
// console.log(sentence);

// PROMPT METHOD
// food = Number(prompt('what is your favorite food?'));
// console.log(food);

// tipPercentage = Number(prompt('tip %?') / 100);
// tipAmount  = food * tipPercentage;
// total = food + tipAmount;
// console.log(tipAmount)
// console.log(total)
// Conditionals
// let weather = prompt('How is weather?');

// if (weather == 'rain'){
//     console.log('Grab your Umbrella');
// }else {
//     console.log('Wear your Sunglasses');
// }

// FUNCTIONS
// it is a function, having no arguments
// function sayMyName () {
//     console.log('Qazi');

// }

// sayMyName();

// // Dynamic Function
// // IT is a function which have one argument and logs out your name
// function sayMyName2 (name) {
//     console.log(name);
// }
// sayMyName2('Kevin')

// function greeting(name) {
//     console.log(`Hi ${name}, Nice to meet you!`);
// }

// greeting('Qazi');

// function sum (a, b) {
//     return a+b;
// }
// num1 = sum(4, 5);
// console.log(num1)

//  TIP CALCULATOR

// function calculateFoodTotal (food, tip) {
//     const tipPercentage = tip / 100;
//     const tipAmount  = food * tipPercentage;
//     const total = sum(food, tipAmount)
//     return total;
// }
// console.log(calculateFoodTotal(300, 20));

// ES6
// ARROW FUNCTION =>
// const sumArrow = (a, b) => {
//     return a + b;
// }
//  ARROW FUNCTION WITH IMPLICIT RETURN
// IMPORTANT: FOR IMPLICIT RETURN, REMOVE CURLY BRACES
// const sumArrow2 = (a, b) => a + b;
//   console.log(sumArrow2(10, 50));

//   ARRAYS
// const groceries = ['Banana','Apple','Orange','Pear'];
// console.log(groceries);
// console.log(groceries[3]);
// groceries.push('Blue Berries');
// console.log(groceries)

// ARRAY SLICE
// console.log(groceries.slice(3,5))

// ARRAY METHODS (SLICE , PUSH , INDEXOF, LENGTH)
// console.log(groceries.indexOf('Orange'))

// console.log(groceries.length)

// OBJECTS ()
// OBJECTS ARE KEY VALUE PAIR
// const person = {
//     name: 'Leonardo',
//     shirt: 'white'
// }

// console.log(person.name)
// console.log(person.shirt)

// // BRACKET NOTATION
// console.log(person['name'])
// console.log(person['shirt'])

// ASSIGN OBJECT
// person['phone'] = '1-222-333-4444'
// console.log(person.phone)
// console.log(person)

// PERSON2
//  const person2 = {
//     name: 'Qazi',
//     shirt: 'black'
//  }
//  console.log(person2)
//  console.log(person2.name)
//  console.log(person2.shirt)

//  ES6 ARROW FUNCTION (2 ARGUMENTS)
// OBJECT
// TEMPLATE LITERALS
// METHODS -> MATH.FLOOR()
//  const introducer = (name, shirt) => {
//     const person = {
//         name: name,
//         shirt: shirt,
//         assets: 100000,
//         liabilities: 50000,
//         networth: function (){
//             return this.assets - this.liabilities;
//         }
//     }
//   const intro =  `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is ${person.networth()} USD`;
//   return intro;
//  }

//  console.log(introducer('Qazi', 'black'))
//  console.log(introducer('Leonardo','white'))

// LOOPS
// const fruits = ['Apple','Banana','Orange','Pear','Blue Berries'];

// for (let i = 0; i < fruits.length; i++){
//     console.log(i,fruits[i])
// }
// for (const fruit of fruits){
//     console.log(fruit)
// }

// const numbers = [1, 2, 3, 4, 5 ,6];

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }
// const double = (numbers) => {
//     let result = []
//     for (const number of numbers){
// console.log(number * 2)
//         result.push(number ** 2)
// }
//     return result;
// }
// console.log(double([1, 2, 3, 4, 5, 6]));

// const letterCounter = () => {

//     let result = 0;

// for of will gave us the letters in phrase and for in will gave us the index of the letters
//     for(const index in phrase){
//         console.log(Number(index)+ 1);
//         result = Number(index) + 1;
//     }
//     return {result}
// }

// const phrase = prompt('Write your phrase?');
// console.log(letterCounter(phrase));

// const sumArray = (numbers) => {
//     let result = 0;
//     // For Loop
//     for (const number of numbers){
//         console.log(number);

//         result = result + number;
//     }
//     return {result}
// }

// const nums = [1, 2, 3, 4, 5];
// console.log(sumArray(nums))

// const max = (numbers) => {
//     let result = numbers[0];

//     // Loop
//     for (const number of numbers){
//         if(number > result){
//             result = number;
//         }
//     }
//           return {result};
// }
// console.log(max([1, 2, 3, 4, 5, 13, 20, 34, 54]));

// const letterFrequency = (phrase) => {
//     console.log(phrase)

//     let frequency = {};
//     for (const letter of phrase){
//         // console.log(letter)
//         if(letter in frequency){
//             frequency[letter] += 1;
//         }
//         else {
//             frequency[letter] = 1;
//         }
//     }
//     return frequency;
// }
// console.log(letterFrequency('lol, what are you doing later tonight?'));

// const wordFrequency = (phrase) => {
// let frequency = {};
//    const words = phrase.split(' ');
//    return letterFrequency(words);
// for (const word of words){
//     console.log(word)
//     if(word in frequency){
//         frequency[word] += 1;
//     }else {
//         frequency[word] = 1;
//     }
// }

// console.log(words)
// return frequency;
// }
// const userInput = prompt('write your sentence')
// console.log(wordFrequency(userInput));

//  HIGHER ORDER FUNCTOIN OR ARRAY METHODS
// Map - Loops and return an Array
// const doubleMap = (numbers) => {
//     return numbers.map(number => number * 2 )
// }

// console.log(doubleMap([1, 3, 4, 5, 6]))
// let result = [1, 2, 3, 4].map(number => number *2);
// console.log(result)

// Filter - Loops and return an Array with matching conditions
// const filter = (numbers, greaterThan) => {
//     let result = [];
//     for (const number of numbers) {
//         if (number > greaterThan) {
//             result.push(number)
//         }
//     }
//     return result;
// }
// console.log(filter([1, 2, 3, 4, 5, 6], 3))
// const nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.filter(num => num >= 3));

// const actors = [
//     {name : 'Johnny', netWorth : 20000},
//     {name: 'Amber', netWorth : 6543},
//     {name : 'Leonardo', netWorth : 7654}
// ]

// let result = console.log(actors.filter(actor => actor.netWorth > 10000));

// playground.innerHTML = `<h1>${JSON.stringify(result)}</h1>`

// Reduce - Reduce takes a function as an argument

// function sum (a, b) {
//     return a + b
// }
// function multiply (a, b) {
//     return a * b
// }
// const nums = [1, 2, 3];
// const result = nums.reduce(multiply)

// console.log(result)

// DOM MANIPULATION
// let title = document.getElementById('title');
// console.log('before : ', title.innerText);
// let message = 'Goodbye My Friend'
// title.innerText = message;

// console.log('after : ', title.innerText);

// title.style.color = 'red';
// title.style.backgroundColor = 'blue';

// let redDiv = document.getElementById('red');
// let yellowDiv = document.getElementById('yellow');
// let greenDiv = document.getElementById('green');

// redDiv.onclick = () => {
//     console.log('red')
// }
// yellowDiv.onclick = () => {
//     console.log('yellow')
// }
// greenDiv.onclick = () => {
//     console.log('green')
// }

// const squares = document.querySelectorAll('.colorSquare');
// console.log(squares);

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

// FOREACH LOOP
// squares.forEach(square => console.log(square.value))

//     const timesClicked = {'red' : 0, 'yellow' :0 , 'green' : 0 };

// squares.forEach(square => {
//     square.onclick = () => {
//         timesClicked[square.value] += 1
//         square.innerText = timesClicked[square.value]
//      }
// })

//     function clearScores () {
//         timesClicked.red = 0
//         timesClicked.yellow = 0
//         timesClicked.green = 0
//         squares.forEach(square => square.innerText = '')
//     }

//     const clearGameBtn = document.getElementById('clear')
//     clearGameBtn.onclick = () => clearScores();

//  TIP CALCULATOR

//     const billInput = document.getElementById('billTotalInput');
//     const tipInput = document.getElementById('tipInput');
//     const numberOfPeopleDiv = document.getElementById('numberOfPeople');
//     const perPersonTotalDiv = document.getElementById('perPersonTotal');

//     let numberOfPeople = Number(numberOfPeopleDiv.innerText)
// const calculateBill = () => {
//    const bill = Number(billInput.value);
//    const tipPercentage = Number(tipInput.value) / 100;

//    const tipAmount = bill * tipPercentage;

//    const total = tipAmount + bill;

//    const perPersonTotal = total / numberOfPeople;

//    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
// }

// const increasePeople = () => {
//     numberOfPeople += 1;

//     numberOfPeopleDiv.innerText = numberOfPeople;

//     calculateBill();
// }

// const decreasePeople = () => {
//     if (numberOfPeople <= 1){
//         return
//     }
//     numberOfPeople -= 1;

//     numberOfPeopleDiv.innerText = numberOfPeople;

//     calculateBill();
// }

// const randomFruit = (fruits) => {

//   const randomNumber = Math.floor(Math.random() * fruits.length);
//   return fruits[randomNumber]
// }

// fruits = ['Banana','Apple','Orange']
// console.log(randomFruit(fruits))

// // If else
// const weatherScorer = (weather, weather2) => {
//     let score
//     if(weather == 'rainy' && weather2 == 'overcast'){
//         score = 1
//     } else if (weather == 'sunny'){
//         score = -1
//     } else {
//         score = 0
//             }
//             return score
// }
// console.log(weatherScorer('rainy','overcast'))

// API
// .then - Promises
// Asychronous programming
// const dogImageDiv = document.getElementById('dogImage');
// const dogButton = document.getElementById('dogButton');

// const getNewDog = () => {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(respone => respone.json())
//     .then(json => {
//         dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300 />`
//     });
// }

// dogButton.onclick = () => getNewDog();

// Super Hero Api
// const SUPERHERO_TOKEN = '819712679934372';
// const BASE_URL =
// `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

// const newHeroButton = document.getElementById('newHeroButton');
// const heroImageDiv = document.getElementById('heroImage');
// const searchButton = document.getElementById('searchButton');
// const searchInput = document.getElementById("searchInput");

// const getSuperHero = (id, name) => {
//     fetch(`${BASE_URL}/${id}`)
//     .then(response => response.json())
//     .then(json => {
//         // console.log(json);
//         const stats = getStatsHTML(json);
//         const name = `<h2>${json.name}</h2>`;
//         heroImageDiv.innerHTML = `${name}<img src="${json.image.url}" height=300 width=200 />
//         ${stats}`;
//     })
// }

// const statToEmoji = {
//     intelligence: '🧠',
//     strength: '💪',
//     speed: '⚡',
//     durability: '🏋️‍♂️',
//     power: '📊',
//     combat: '⚔️',
//   }

// const getStatsHTML = (character) => {
//     const stats =  Object.keys(character.powerstats).map(stat => {
//         return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
//      })
//      console.log(stats.join(''));
//      return stats.join('')
// }

// const getSearchSuperHero = (name) => {
//     console.log(searchInput.value);
//     fetch(`${BASE_URL}/search/${name}`)
//     .then(response => response.json())
//     .then(json => {
//         const hero = json.results[0];
//         // console.log(hero)
//         heroImageDiv.innerHTML = `<img src="${hero.image.url}" height=300 width=200 />`;
//     })
// }

// const randomHero = () => {
//     const numberOfHeroes = 731;
//     return Math.floor(Math.random() * numberOfHeroes) + 1;
// }
// newHeroButton.onclick = () => getSuperHero(randomHero());

// searchButton.onclick = () => getSearchSuperHero(searchInput.value);

// ASYNCHRONOUS PROGRAMMING
// PROMISSES
// setTimeout(() => {
//     console.log('soup')
// }, 2000);

// const orderSoup = () => console.log('soup is ready');

// console.log('You Start the convo with Your Bestie');

// // Start your request
// setTimeout(orderSoup, 2000);

// console.log('Still Speaking');

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         isReady = [true,false][Math.floor(Math.random() * 2)]
//         isReady ? resolve('Soup is ready'):
//         reject('No soup today')
//     }, 2000);
// })

// console.log(promise1
//     .then(success => console.log(success))
//     .catch(error => console.log(error))
//     );

// const getSoup = async () => {
//     const data = {rating: 0, tip: 0, pay: 0, review: 0};
//     try {
//         const soup = await promise1;
//     console.log(soup)
//     data.rating = 5
//     data.tip = 0
//     data.pay = 10
//     data.review = 5
//     return data
//     } catch (error){
//         console.log(error);
//         data.rating = 1
//         data.tip = 0
//         data.pay = 0
//         data.review = 1
//         return data
//     }
// }

// getSoup().then(value => console.log(value));

// console.log('fetch:',
//  fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(data => console.log(data))
// )

// const getDog = async () => {
//     const url = 'https://dog.ceo/api/breeds/image/random';
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)

// }

// getDog()

// CLASSES
// Methods
// Properties

// const nums = [1, 2, 3];
// nums.push();

// // This
// class Car {
//     constructor(name, color, topSpeed) {
//         this.name = name;
//         this.color = color;
//         this.topSpeed = topSpeed;
//         this.currentSpeed = 0;
//     }

//     getCurrentSpeed () {
//         return currentSpeed
//     }
//     zeroToSixty () {
//         setTimeout(() => {
//             console.log('Phew! That was fast');
//             this.currentSpeed = 60;

//         }, 3000);
//     }
//     drive () {
//         // console.log('Just drove 2 miles');
//         this.currentSpeed += 10;
//         console.log(`Driving Speed At ${this.currentSpeed} mph`)
//     }

//     brake () {
//         // console.log('Braking: Coming to a screeching Halt');
//         console.log('Braking')
//         this.currentSpeed -= 10;
//     }

//     stop () {
//         console.log('Coming to a screeching hallt!')
//         this.currentSpeed = 0;
//     }
// }

// const ferrari = new Car('ferrari','red', 250);
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// console.log(ferrari.currentSpeed);
// ferrari.brake();
// ferrari.stop();
// console.log(ferrari.currentSpeed);
// // console.log(ferrari.name)
// // console.log(ferrari.color)
// console.log(ferrari.currentSpeed)
// ferrari.drive()
// ferrari.brake()

// ferrari.zeroToSixty()
// console.log(ferrari.currentSpeed)

// const porsche = new Car ('Porsche', 'Yellow', 250);
// console.log(porsche.name)
// console.log(porsche.color)
// console.log(porsche.topSpeed)
// const num = [1, 2, 3, 4, 5];
// num.forEach( _ => porsche.drive())
// porsche.drive(40)
// porsche.drive(80)
// console.log(porsche.currentSpeed)
// porsche.zeroToSixty()
// porsche.stop();
// console.log(porsche.currentSpeed);

//  METHODS
// You can only have Methods inside classes
//     const numbers = [1, 2, 3]
//     numbers.push(4);
//     // console.log(typeof)
//     console.log(numbers)

//    Array.prototype.myPush  = function (item) {
//     this[this.length] = item
//     return this
//    }

//    const fruits = ['Banana','Apple','Orange','Peer','Pine'];
//    console.log(fruits.myPush('Black Berrie'));
//    console.log(fruits.myPush('Sugar cane'));
//    console.log(fruits.myPush('good'));
//    console.log(fruits.myPush('Blue Berrie'));
//    console.log(fruits);

// BANK APP WITH CLASSES
    // class Bank {
    //     constructor(balance) {
    //         this.balance = balance;
    //     }

    //     withdraw(amount) {
    //         if (this.balance - amount <= 0) {
    //             console.log("You cannot withdraw more than what you have");
    //             return;
    //         }
    //         this.balance -= amount;
    //         console.log("withdrew", amount);
    //         console.log({ balance: this.balance });
    //     }

    //     deposit(amount) {
    //         this.balance += amount;
    //         console.log("deposited", `${amount}`);
    //         console.log({ balance: this.balance });
    //     }
    // }

    // const qaziChecking = new Bank(100);
    // console.log(qaziChecking.balance);
    // qaziChecking.deposit(100);
    // // console.log(qaziChecking.balance);
    // qaziChecking.withdraw(100);
    // qaziChecking.withdraw(200);
    // // qaziChecking.withdraw(100);

    // const depositButton = document.getElementById("deposit");
    // const withddrawButton = document.getElementById("withdraw");
    // const amountInput = document.getElementById("amount");
    // const balanceDiv = document.getElementById('balance');

    // depositButton.onclick = () => {
    //     const amount = Number(amountInput.value);
    //     qaziChecking.deposit(amount);
    //     // console.log(amountInput.value);
    //     balanceDiv.innerText = `Balance : ${qaziChecking.balance}`
    // };

    // withddrawButton.onclick = () => {
    //    const amount = qaziChecking.withdraw(Number(amountInput.value));
    //    qaziChecking.withdraw(amount);
    //    balanceDiv.innerText = `Balance : ${qaziChecking.balance}`
    // }

    // FIGHTING GAME
    //  While Loop : When you are not sure how many times U want to loop
    // For Loop : when you KNOW how many times U want to loop

    // let finished = true;
    // while (finished == true) {
    //     console.log('Looping');
    //     finished = false
    // }

    // // DOM : Document Object Model
    // let playDiv = document.getElementById('play');
    // playDiv.onclick = () => {
    //     console.log('Yo Yo')
    // }

    // playDiv.addEventListener('click',function(){
    //     console.log('Heyopo')
    // })

    // document.addEventListener('keydown', function (e) {
    //     if(e.key == "q"){
    //         console.log('You pressed Q')
    //     }else {
    //         console.log("Not Q")
    //     }
    // });

    // FIGHTING GAME
     // lets get all DOM element by their id`s

    //  let playButton = document.getElementById('play');
    //  let resultDiv = document.getElementById('result');
    //  let p1NameDiv = document.getElementById('p1Name');
    //  let p2NameDiv = document.getElementById('p2Name');
    //  let p1HealthDiv = document.getElementById('p1Health');
    //  let p2HealthDiv = document.getElementById('p2Health');
 
 
    //  const updateGame = (p1, p2, gameState) => {
    //      p1NameDiv.innerText = p1.name;
    //      p2NameDiv.innerText = p2.name;
    //      p1HealthDiv.innerText = p1.health;
    //      p2HealthDiv.innerText = p2.health;
 
    //      if(p1.health <= 0 || p2.health <= 0) {
    //          game.isOver = true;
    //          gameState = game.isOver;
    //          resultDiv.innerText =
    //           game.declareWinner(game.isOver, p1, p2);
    //           return gameState;
    //      }
         
    //  }
 
    //  class Player {
    //      constructor(name, health, attackDamage) {
    //          this.name = name;
    //          this.health = health;
    //          this.attackDamage = attackDamage;
    //      }
 
    //      strike (player, enemy, attackDamage) {
    //          // Get random number between 1-10 and that is damageAmount
    //          let damageAmount = Math.ceil(Math.random() * this.attackDamage);
    //          // Subtract the enemy health with damageAmount
    //          enemy.health -= damageAmount;
    //          // Update the game and DOM with updateGame()
    //          updateGame(player, enemy, game.isOver);
    //          // Return A Message Of 'Player name Attacks Enemy Name For damageAmount'
    //          return `${player.name} attacks ${enemy.name} for ${damageAmount} damage`;
 
    //      }
 
    //      heal (player) {
    //          // Get the random number between 1 - 5 and store that in hpAmount
    //          let hpAmount = Math.ceil(Math.random() * 5);
    //          // Add hpAmount to player health
    //          player.health += hpAmount;
    //          // Update the game and DOM with updateGame()
    //          updateGame(p1, p2, game.isOver);
    //          // Returns a message of 'player name heals for hpAmount HP'
    //          return `${player.name} heals for ${hpAmount} HP!`;
    //      }
    //  }
 
    //  class Game {
    //      constructor () {
    //          this.isOver = false;
    //      }
 
    //      declareWinner (isOver, p1, p2) {
    //          // Create a message variable that will hold a message variable based on the condition
    //          let message = 'TIE';
 
    //          // If isOver is true and p1 health <= 0 then update message variable to 'p2 WINS'
    //          if (isOver == true && p1.health <= 0) {
    //              message = `${p2.name} WINS`;
    //          }
    //          // If isOver is true and p2 health <= 0 then update message variable to 'p1 WINS'
    //          else if (isOver == true && p2.health <= 0) {
    //              message = `${p1.name} WINS`;
    //          } 
    //          // Play victory Sound
    //          document.getElementById('victory').play();
    //          // Return message variable
    //          return message;
    //      }
 
    //      reset (p1, p2) {
    //          p1.health = 100;
    //          p2.health = 100;
    //          this.isOver = false;
    //          resultDiv.innerText = '';
    //          updateGame(p1, p2, this.isOver);
    //      }
 
    //      play (p1, p2) {
 
    //          this.reset(p1, p2);
 
    //          while (!this.isOver) {
 
    //              p1.strike(p1, p2, p1.attackDamage);
    //              p2.heal(p2);
    //              p2.strike(p2, p1, p2.attackDamage);
    //              p1.heal(p1);
    //          }
    //          return this.declareWinner(this.isOver, p1, p2)
    //      }
    //  }
 
    //  let player1 = new Player('Qazi', 100, 10);
    //  let player2 = new Player('Lance', 100, 10);
     
 
    //  let p1 = player1;
    //  let p2 = player2;
 
     
 
    //  let game = new Game();
 
    //  updateGame(p1, p2, game.isOver);
 
 
    //  let gameState;
 
    //  playButton.onclick = () => resultDiv.innerText = 
    //  game.play(p1,p2);
 
    //  document.addEventListener('keydown', function(e) {
    //      if(e.key == 'q' && p2.health > 0 && game.isOver == false) {
    //          // After stricking play the attack sound
    //          p1.strike(p1, p2, p1.attackDamage);
    //          document.getElementById('p1heal').play();
    //      }
    //  });
 
    //  document.addEventListener('keydown', function(e) {
    //      if(e.key == 'a' && p2.health >0 && game.isOver == false) {
    //          p1.heal(p1);
    //          document.getElementById('p1attack').play();
    //      }
    //  });
 
    //  document.addEventListener('keydown', function(e) {
    //      if(e.key == 'p' && p1.health > 0 && game.isOver == false) {
    //          p2.strike(p2, p1, p2.attackDamage);
    //          document.getElementById('p2heal').play();
    //      }
    //  });
 
    //  document.addEventListener('keydown', function(e) {
    //      if(e.key == 'l' && p1.health > 0 ) {
    //          p2.heal(p2);
    //          document.getElementById('p2attack').play();
    //      }
    //  });
 
    



