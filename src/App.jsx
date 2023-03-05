import Header from './components/Header'
import InputForm from './components/InputForm'
import TodoItems from './components/TodoItems'

import './index.css'

function App() {

  return (
      <div className="container mx-auto max-w-lg">
        <Header />
        <InputForm />
        <TodoItems />
        <TodoItems />
      </div>
  )
}

export default App
