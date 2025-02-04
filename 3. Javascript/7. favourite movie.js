let favseries = 'moneyheist';
let guess = prompt("guess the series");
while( (favseries != guess )  && ( guess != 'quit')){
    console.log('wrong guess , please try again !!')
}
if( favseries == guess){
    console.log('right guess')
}
else{
    console.log('')
}