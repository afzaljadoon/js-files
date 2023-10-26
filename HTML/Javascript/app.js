// DOM Manipulation

// Styling Elements
// const title = document.querySelector('#main-heading');
// title.style.color = 'red';
// console.log(title);

// const listItems = document.querySelectorAll('.list-items');

// for ( i = 0; i < listItems.length; i++) {
//     listItems[i].style.fontSize = '5rem';
// }

    // Creating Elements
    // const ul = document.querySelector('ul');
    // const li = document.createElement('li');

    // Adding Elements
    // ul.append(li)
    // Modifying the text
    // const firstListItem = document.querySelector('.list-items');

    // li.innerText = 'X-Men';

    // Modifying Attributes & Classes
    // li.setAttribute('id','main-heading');
    // li.removeAttribute('id')

    // const title = document.querySelector('#main-heading');
    // console.log(title.getAttribute('id'));

    // li.classList.remove/add('list-items');

    // console.log(li.classList.contains('list-items'));

    // Remove Elements
    // li.remove();

    // Parent Node Traversal
    // let ul = document.querySelector('ul');
    // console.log(ul.parentNode.parentNode);
    // console.log(ul.parentElement.parentElement);
    // const html = document.documentElement;
    // console.log(html.parentNode);
    // console.log(html.parentElement);

    // let ul = document.querySelector('ul');
    // console.log(ul.childNodes);
    // console.log(ul.firstChild);
    // console.log(ul.lastChild);

    // ul.childNodes[1].style.backgroundColor = 'blue';

    // console.log(ul.children);
    // console.log(ul.firstElementChild);
    // console.log(ul.lastElementChild);

    // let ul = document.querySelector('ul');
    // const div = document.querySelector('div');

    // console.log(div.childNodes)
    // console.log(ul.previousElementSibling);
    // console.log(ul.nextElementSibling);


// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);


// GetElementById()
//  const title = document.getElementById('main-heading');
//  console.log(title);

// GetElementByClassName()
//  const listItem = document.getElementsByClassName('list-items');
//  console.log(listItem);

// GetElementsByTagName()
// const listItem = document.getElementsByTagName('li');
// console.log(listItem);

// querySelector()
// const container = document.querySelector('div');
// console.log(container);

// querySelectorAll()
// const container = document.querySelectorAll('div');
// console.log(container);

// Event Listeners
// Element.addEventListener{'click',function};

// const buttonTwo = document.querySelector('.btn-2');
// function alertBtn () {
//     alert('I also Love Javascript');
// }

// buttonTwo.addEventListener("click", alertBtn);

// Mouseover
// const newBackgroundColor = document.querySelector('.box-3');

// function changeBgColor () {
//     newBackgroundColor.style.backgroundColor = 'blue';
// }
// newBackgroundColor.addEventListener("mouseover",changeBgColor);

// Reveal Event
// const revealBtn = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content')

// function revealContent () {
//     if (hiddenContent.classList.contains('reveal-btn')){
//         hiddenContent.classList.remove('reveal-btn')
//     }else{
//         hiddenContent.classList.add('reveal-btn')
//     }
// }

// revealBtn.addEventListener('click', revealContent);

    // Event Propagation
    // window.addEventListener("click",function () {
    //     console.log("Window");
    // }, false);

    // document.addEventListener("click",function () {
    //     console.log("Document")
    // },false);

    // document.querySelector(".div2").addEventListener("click", function(e) {
    //     // e.stopPropagation()
    //     console.log("DIV 2");
    // },{once: true});

    // document.querySelector(".div1").addEventListener("click",function () {
    //     console.log("DIV 1");
    // },false);
    // document.querySelector(".button").addEventListener("click",function (e) {
    //     e.preventDefault();
    //     console.log(e.target.innerText = 'Clicked!');
    // },false);

    // Event Delagation
    // document.querySelector('#football').addEventListener('click',function (e){
    //   console.log('Football is Clicked!')
    //   const target = e.target;

    //   if(target.matches('li')){
    //     target.style.backgroundColor = 'lightgrey';
    //   }
    // })
    // // 2
    // document.querySelector('#basketball').addEventListener('click',function (e){
    //     console.log('Football is Clicked!')
    //     const target = e.target;
  
    //     if(target.matches('li')){
    //       target.style.backgroundColor = 'lightgrey';
    //     }
    //   });
    // //   3
    // document.querySelector('#boxing').addEventListener('click',function (e){
    //     console.log('Football is Clicked!')
    //     const target = e.target;
  
    //     if(target.matches('li')){
    //       target.style.backgroundColor = 'lightgrey';
    //     }
    //   })
    // //   4
    // document.querySelector('#tennis').addEventListener('click',function (e){
    //     console.log('Football is Clicked!')
    //     const target = e.target;
  
    //     if(target.matches('li')){
    //       target.style.backgroundColor = 'lightgrey';
    //     }
    //   })
    // //   5
    // document.querySelector('#golf').addEventListener('click',function (e){
    //     console.log('Football is Clicked!')
    //     const target = e.target;
  
    //     if(target.matches('li')){
    //       target.style.backgroundColor = 'lightgrey';
    //     }
    //   })

    // Event Delagation allow users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendents that match a selector.
    // document.querySelector('#sports').addEventListener('click', function (e) {
    //     console.log(e.target.getAttribute('id') + " is clicked");
    //     const target = e.target;

    //     if (target.matches('li')){
    //         target.style.backgroundColor = 'lightgrey';
    //     }
    // });

    // const sports = document.querySelector('#sports');
    // const newSport = document.createElement('li');

    // newSport.innerText = 'rugby';
    // newSport.setAttribute('id', 'rugby');
    // sports.appendChild(newSport);

    
    
