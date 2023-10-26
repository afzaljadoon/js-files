    // Project
    // VARIABLES
// PROJECT 1
// let btn = document.querySelector('#new-quote');
// let quote = document.querySelector('.quote');
// let person = document.querySelector('.person');

// const quotes = [{
//     quote : "The best way to find yourself is to lose yourself in the service of others.",
//     person: "Mohatma Gandhi."
// },
// {
//     quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
//     person: "Albert Einstein."
// },
// {
//     quote : "At his best, man is the noblest of all animals; separated from law and justice he is the worst.",
//     person: "Aristotle."
// },
// {
//     quote : "Your time is limited, so dont waste it living someone else`s life.",
//     person: "Steve Jobs."
// },
// {
//     quote : "Tell me And I forget. Teach me and I remember, Involve me and I learn.",
//     person: "Benjamin Franklin."
// },
// {
//     quote : "The best way to find yourself is to lose yourself in the service of others.",
//     person: "Mohatma Gandhi."
// },
// {
//     quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
//     person: "Albert Einstein."
// },
// {
//     quote : "At his best, man is the noblest of all animals; separated from law and justice he is the worst.",
//     person: "Aristotle."
// },
// {
//     quote : "Your time is limited, so dont waste it living someone else`s life.",
//     person: "Steve Jobs."
// },
// {
//     quote : "Tell me And I forget. Teach me and I remember, Involve me and I learn.",
//     person: "Benjamin Franklin."
// },
// {
//     quote: "The journey of a thousand miles begins with one step.",
//     person: "Lao Tzu"
// }];

// btn.addEventListener('click', function(){
//     let random = Math.floor(Math.random() * quotes.length);

//     quote.innerText = quotes[random].quote;
//     person.innerText = quotes[random].person;
// });

      // PROJECT 2 : Modal
    //   let openBtn = document.getElementById('open-btn');
    //   let modalContainer = document.getElementById('modal-container');
    //   let closeBtn = document.getElementById('close-btn');

    // //   Event Listeners
    // openBtn.addEventListener('click', function() {
    //     modalContainer.style.display = 'block';
    // });

    // closeBtn.addEventListener('click', function () {
    //     modalContainer.style.display = 'none';
    // });

    // window.addEventListener('click', function (e) {
    //     if (e.target === modalContainer){
    //         modalContainer.style.display = 'none';
    //     }
    // });

    // Project 3 : Accordion
    // VARIABLES
    // const accordion = document.getElementsByClassName('content-container');

    // for (i = 0; i < accordion.length; i++) {
    //     accordion[i].addEventListener('click', function () {
    //         this.classList.toggle('active');
    //     })
    // }
    // Project 4 : Stop Watch
    // Variables for Buttons
    // const startStopBtn = document.querySelector('#startStopBtn');
    // const resetBtn = document.querySelector('#resetBtn');

    // Variables for time values
    // let seconds = 0;
    // let minutes = 0;
    // let hours = 0;

    // Variables For Loading More

    // let leadingSeconds = 0;
    // let leadingMinutes = 0;
    // let leadingHours = 0;

    // Variables For Set interval & Timerstatus
    // let timerInterval = null;
    // let timerstatus = "stopped";

    // StopWatch Function
    // function stopWatch () {
    //     seconds++

    //     if ( seconds / 60 === 1){
    //         seconds = 0;
    //         minutes ++;

    //         if (minutes / 60 === 1) {
    //             minutes = 0;
    //             hours++
    //         }
    //     }

    //     if(seconds < 10){
    //         leadingSeconds = '0' + seconds.toString();
    //     } else {
    //         leadingSeconds = seconds;
    //     }
    //     if(minutes < 10){
    //         leadingMinutes = '0' + minutes.toString();
    //     } else {
    //         leadingMinutes = minutes;
    //     }
    //     if(hours < 10){
    //         leadingHours = '0' + hours.toString();
    //     } else {
    //         leadingHours = hours;
    //     }
        

    //     let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
    // }
    // window.setInterval(stopWatch, 1000);

    // startStopBtn.addEventListener('click', function() {
    //     if(timerstatus === "stopped" ){
    //         timerInterval = window.setInterval(stopWatch, 1000);
    //         document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-pause" id="pause"> </i>'
    //         timerstatus = 'started';
    //     }else{
    //         window.clearInterval(timerInterval);
    //         document.getElementById('startStopBtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
    //         timerstatus = 'stopped';
    //     }
    // });

    // resetBtn.addEventListener('click', function() {
    //     window.clearInterval(timerInterval);
    //     seconds = 0;
    //     minutes = 0;
    //     hours = 0;

    //     document.getElementById('timer').innerHTML = '00:00:00';
    // })

    // Project 5: Todo List
    // variables
    const addTask = document.getElementById('add-task');
    const taskContainer = document.getElementById('task-container');
    const inputTask = document.getElementById('input-task');

    // Event LIstener For Add Button
    addTask.addEventListener('click', function () {
        let task = document.createElement('div');
        task.classList.add('task');

        let li = document.createElement('li');
        li.innerText = `${inputTask.value}`;
        task.appendChild(li);

        let checkButton = document.createElement("button");
        checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkButton.classList.add('checkTask');
        task.appendChild(checkButton);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        deleteButton.classList.add('deleteTask');
        task.appendChild(deleteButton);

        if(inputTask.value === ""){
            alert('Please Enter A Task');
        }
        else {
            taskContainer.appendChild(task);
        }

        inputTask.value = "";

        checkButton.addEventListener('click', function() {
            checkButton.parentElement.style.textDecoration = "line-through";
        });

        deleteButton.addEventListener('click', function(e) {
            let target = e.target;

            target.parentElement.parentElement.remove();
        });
    });

