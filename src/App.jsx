import { useState } from 'react'
import { Button } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container py-5">
      <h1 className="mb-4">AdoptApp</h1>
      <Button variant="primary" onClick={() => setCount(count + 1)}>
        Count is {count}
      </Button>
    </div>
  )
}

export default App
