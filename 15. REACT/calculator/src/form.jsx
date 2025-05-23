import { use, useState } from "react";

export default function Form(){

    // let [username , setUsername ] = useState(" ");
    let [ formData , setFormData ] = useState( { username : "" , fullname : "" } )

    let handleInputChange = (event) => {
       let inputField = event.target.name;
       let  newValue = event.target.value;
       setFormData( (currData) => {
        formData[inputField] = newValue;
        return { ...currData   };
       })
    }
    let handleSubmit = (event)=> {
        event.preventDefault();
        console.log(formData)
        setFormData({
            username : "", fullname : ""
        })
    }

return(
    <form onSubmit={handleSubmit} >
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="enter username" value={formData.username}  onChange={handleInputChange} id="username" name="username" />
          <label htmlFor="fullname">Fullname</label>
        <input type="text" placeholder="enter fullname" value={formData.fullname}  onChange={handleInputChange} id="fullname" name="fullname" />
        <button>Submit</button>
    </form>
)
}