const CoreConcepts = (props) => {
  return (
    <div>
      <li>
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    </div>
  );
};
export default CoreConcepts;
