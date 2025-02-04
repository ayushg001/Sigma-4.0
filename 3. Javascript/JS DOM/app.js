// // let simages = document.getElementsByClassName("oldImg")
// //  for ( let i=0  ; i < simages.length ; i++ ){
// //     simages[i].src = "assets/spiderman_img.png";
// //     console.dir(simages[i].src)
// //  }

// let links = document.querySelectorAll( " .box a")
//  for (li of links ){
//    li.style.color = "brown"
//  }

let para = document.createElement('p');
let body = document.querySelector('body');
body.appendChild(para);
para.innerText = "Hey I'm red!";
para.classList.add('red')
// para.style.color = 'red';

let head = document.createElement('h3');
head.innerText = "I'm a blue h3!";
head.classList.add('blue')
// head.style.color = "blue";
body.appendChild(head);

let div = document.createElement('div');
body.prepend(div);
div.classList.add('div')
// div.style.border = " 2px solid black";
// div.style.backgroundColor = "pink";
let head1 = document.createElement('h1');
head1.innerText = "I'm in a div"
div.append(head1);
let para2 = document.createElement('p');
para2.innerText = "ME TOO!";
div.append(para2);