let url = "https://catfact.ninja/fact";

fetch(url)
// fetch is used to make an HTTP request to the given URL. 
// It returns a "promise," which is like saying, 
// "I'll get back to you when I have the result."
    .then( (res) => { //When the API responds, the res parameter holds the response.
        return res.json(); //.json() converts the response data 
        // (which is usually text) into a JavaScript object.
    })
    .then( (data) => {
        console.log(data);
        return fetch(url);
    })
    .then( (res) => {
        return res.json(); //promise
    })
    .then( (data2) => {
        console.log(data2);
    })
    .catch((error) => {
        console.log(error);
    });

    //more readable format
async function getFacts() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.fact);

        let response2 = await fetch(url);
        let data2 = await response2.json();
        console.log(data2.fact);
    } catch(error){
        console.log("ERROR : " , error)
    }
    
};