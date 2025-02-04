let url = "https://dog.ceo/api/breeds/image/random";

async function getImg() {
    try {
        let response = await axios.get(url);
        return response.data.message;
    } catch(error){
        console.log("ERROR : " , error)
    }
    
};
let button = document.querySelector('button');
button.addEventListener("click" ,async () => {
    let dogImg = await getImg();
    let img = document.querySelector("img")
   img.setAttribute("src" , dogImg)
   console.log(dogImg)
} )