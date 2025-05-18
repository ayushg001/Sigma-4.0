export default function button(){
    return(
        <div>
            <button onClick={print}>Click me !</button>
            <p onMouseOver={print}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui tempore dicta odio id obcaecati debitis aliquid dolor ducimus quo? Perspiciatis deleniti pariatur iusto sunt qui aut blanditiis nam molestias eligendi.</p>
        </div>
    )
}

function print(){
    console.log("you clicked")
}