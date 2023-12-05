function ExampleComponent(props) {
    const divStyle = {background: 'red', padding: '1rem'}
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component</p>
      <h2 style={{ color: "blue", textTransform: "uppercase" }}>
        {props.name}
      </h2>
      
    </div>
  );
}
export default ExampleComponent;
