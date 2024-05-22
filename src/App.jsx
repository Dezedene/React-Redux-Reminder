import Greetings from './Greetings'

export function App() {
  const mySelf = { name: 'greg', nickName: 'DZN' }
  const herSelf = { name: 'Chachounette', nickName: 'Lelem' }
  return (
    <>
      <h1>Hello World</h1>
      <Greetings myProps= { mySelf } herProps={ herSelf } />
    </>
  )
}