import Card from "react-bootstrap/Card";
function SingleCat({ name, latinName, link }) {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={link} height={200} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{latinName}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  export default SingleCat