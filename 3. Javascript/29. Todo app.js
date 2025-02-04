let button = document.querySelector('button');
let inp = document.querySelector('input');
let ul =  document.querySelector('ul')
button.addEventListener('click' , () => {
    let item = document.createElement('li');
    item.innerText = inp.value;
    
    
    let delbtn = document.createElement('button');
    delbtn.innerText = 'delete';
    delbtn.classList.add('delete')
    item.appendChild(delbtn)
    ul.appendChild(item)

    inp.value = "";
})

ul.addEventListener('click' , (event) =>{
    if(event.target.nodeName == 'BUTTON'){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted")
    } else{
        console.log("do not delete")
    } //event.target tells which thing is pressed

})
// let delbtns = document.querySelectorAll(".delete");
// for(delBtn of delbtns){
//     delBtn.addEventListener('click', () =>{
//         let par = this.parentElement;
//         console.log(par)
//         par.remove();
//     });

// }