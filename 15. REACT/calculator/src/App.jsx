import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './form'
import CommentsForm from './Commentsform'
import Comment from './comment'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Form/> */}
     {/* <CommentsForm/> */}
    < Comment/>
    </>
  )
}

export default App
