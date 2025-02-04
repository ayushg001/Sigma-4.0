let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let response = await axios.get(url);
        return response.data.fact;
    } catch(error){
        console.log("ERROR : " , error)
    }
    
};
let button = document.querySelector('button');
button.addEventListener("click" ,async () => {
    let fact = await getFacts();
    let p = document.querySelector("p")
    p.innerText = fact;
} )