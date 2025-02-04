let url = "http://universities.hipolabs.com/search?name=";
let button = document.querySelector('button');

button.addEventListener("click" ,async () => {
    let country = document.querySelector('input').value;
    console.log(country);
    let colArray = await getColleges(country);
   console.log(colArray)
   show(colArray);
} );

function show(colArray){
    let list = document.querySelector('ul');
    for(col of colArray){
        let listitems = document.createElement('li');
        listitems.innerText = col.name;
        list.appendChild(listitems);
    }
}

async function getColleges(country) {
    try {
        let response = await axios.get(url+country);
        return response.data;
    } catch(error){
        console.log("ERROR : " , error)
    }
    
};