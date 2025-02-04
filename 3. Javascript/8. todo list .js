let todo = [];
let req =  prompt('please enter the task');

while(true){
    if( req == 'quit'){
        console.log('quitting app')
            break;
    }
    else if( req == 'list'){
        console.log("-------");
        for( let i = 0 ; i < todo.length ; i++){
            console.log(i , todo[i])
        }  
        console.log("-------");
    }

    else if( req == 'add'){
         let task = prompt('enter the task to add');
         todo.push(task);
         console.log('task added')
    }
    else if ( req == 'delete'){
        let idx = prompt('enter the index for deleting the task');
        todo.slice(idx, 1);
        console.log('task deleted')
    }
    else{
        console.log('wrong input')
    }
    req =  prompt('please enter the task');
}