const Greetings = (props) => {

  function HandleProps() {
    console.log('props: ', props)
  }

  const myName = props.myProps.name
  const herName = props.herProps.name
  return (
    <>
      {HandleProps()}
      <li>My name is { myName }</li>
      <li>And her name is { herName }</li>
    </>
  )
}

export default Greetings