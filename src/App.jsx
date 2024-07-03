import Cards  from './Components/Cards'
import CurrentScore  from './Components/CurrentScore'
import HighestScore  from './Components/HighestScore'

const App = () => {
  return (
    <>
      <h1 className='text-xl text-black'>Header</h1>
      <Cards />
      <CurrentScore />
      <HighestScore />
    </>
  )
}

export default App
