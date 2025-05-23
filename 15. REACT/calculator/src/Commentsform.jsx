import { useState } from "react"

export default function CommentsForm( {addNewComment } ){

    let [ formData , setFormData ] = useState({username : "" , remarks : "" , rating :  5 })


let handleInputChange = (event) => {
    let inputField = event.target.name;
    let inputData = event.target.value;
    setFormData( (currData) => {
        formData[inputField] = inputData;
        return { ...currData};
    })

}

let onHandleSubmit = (event) => {
    console.log(formData);
    addNewComment(formData);
    event.preventDefault();
    setFormData({
        username : "", remarks : "", rating : 5
    })
}

    return( 
        <div>
            <h4>Give a Comment !</h4>
            <form onSubmit={onHandleSubmit} >
                <label htmlFor="username">Username </label>
                <input type="text" name="username" id="username" placeholder=" username" value={formData.username} onChange={handleInputChange} />

                <br /> <br /> 
            <label htmlFor="remarks">Remarks</label>
                <textarea  value={formData.remarks} placeholder="enter remarks here" name="remarks" id="remarks"  onChange={handleInputChange}>Remarks</textarea>

                <br /> <br />
            <label htmlFor="rating">Rating </label>
                <input  value={formData.rating} type="number" name="rating" id="rating" max={5} min={0} placeholder="rating"  onChange={handleInputChange} />

                <br /> <br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}