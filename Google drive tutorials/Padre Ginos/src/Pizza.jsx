let counter = 0;


const Pizza = (props) => {
  counter = counter++;
  return (
    <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <img src={props.image} alt={props.name} />
    </div>
  )
}

export default Pizza