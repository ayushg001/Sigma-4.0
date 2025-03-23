function printHello(){
    console.log("hello")
}

export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printHello} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quas pariatur consequuntur necessitatibus? Quas ex ab praesentium id vel illo, quidem molestias, modi quisquam deleniti totam. Quas in necessitatibus consequuntur.</p>
        </div>
    )
}