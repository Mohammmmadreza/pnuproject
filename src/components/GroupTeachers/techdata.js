import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './card.css'
function Teachdata(props) {
  return (
    <Link to={`/teachdata/${props.id}`} style={{textDecoration:'none'}}>
    <Card className='card-T' >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
        <Button variant="primary">صفحه استاد</Button>
      </Card.Body>
    </Card></Link>
  );
}

export default Teachdata;







