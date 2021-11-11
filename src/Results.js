import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Results = () => {

const testStyle = {
    objectFit: 'cover',
    width: '40vw',
    height: '100%'
}

    return (
<div>
<Container>
<Row className="mx-auto px-0">    
<Col>
<Card style={{ width: '41vw', height:'31vh' }}>
  <Card.Img variant="top" style={testStyle} src="https://i.imgur.com/0cxVl.jpg" alt="Card image"/>
  <Card.ImgOverlay style={{paddingTop: '15vh',}}>
    <Card.Title>McDonalds</Card.Title>
    <Card.Text>
      0.7 Miles Away
    </Card.Text>
    <Button variant="primary">Visit</Button>
    </Card.ImgOverlay>
</Card>
</Col>
<Col>
<Card style={{ width: '41vw', height:'31vh' }}>
  <Card.Img variant="top" style={testStyle} src="https://i.pinimg.com/originals/be/38/04/be3804c5f37524ab1f3d691b0b33b606.jpg" alt="Card image"/>
  <Card.ImgOverlay style={{paddingTop: '15vh',}}>
    <Card.Title>McDonalds</Card.Title>
    <Card.Text>
      0.7 Miles Away
    </Card.Text>
    <Button variant="primary">Visit</Button>
    </Card.ImgOverlay>
</Card>
</Col>
</Row>
<Row className="mx-auto px-0">    
<Col>
<Card style={{ width: '41vw', height:'31vh' }}>
  <Card.Img variant="top" style={testStyle} src="https://i.imgur.com/0cxVl.jpg" alt="Card image"/>
  <Card.ImgOverlay style={{paddingTop: '15vh',}}>
    <Card.Title>McDonalds</Card.Title>
    <Card.Text>
      0.7 Miles Away
    </Card.Text>
    <Button variant="primary">Visit</Button>
    </Card.ImgOverlay>
</Card>
</Col>
<Col>
<Card style={{ width: '41vw', height:'31vh' }}>
  <Card.Img variant="top" style={testStyle} src="https://i.pinimg.com/originals/be/38/04/be3804c5f37524ab1f3d691b0b33b606.jpg" alt="Card image"/>
  <Card.ImgOverlay style={{paddingTop: '15vh',}}>
    <Card.Title>McDonalds</Card.Title>
    <Card.Text>
      0.7 Miles Away
    </Card.Text>
    <Button variant="primary">Visit</Button>
    </Card.ImgOverlay>
</Card>
</Col>
</Row>
<Row className="mx-auto px-0">    
<Col>
<Card style={{ width: '41vw', height:'31vh' }}>
  <Card.Img variant="top" style={testStyle} src="https://i.imgur.com/0cxVl.jpg" alt="Card image"/>
  <Card.ImgOverlay style={{paddingTop: '15vh',}}>
    <Card.Title>McDonalds</Card.Title>
    <Card.Text>
      0.7 Miles Away
    </Card.Text>
    <Button variant="primary">Visit</Button>
    </Card.ImgOverlay>
</Card>
</Col>
<Col>
<Card style={{ width: '41vw', height:'31vh' }}>
  <Card.Img variant="top" style={testStyle} src="https://i.pinimg.com/originals/be/38/04/be3804c5f37524ab1f3d691b0b33b606.jpg" alt="Card image"/>
  <Card.ImgOverlay style={{paddingTop: '15vh',}}>
    <Card.Title>McDonalds</Card.Title>
    <Card.Text>
      0.7 Miles Away
    </Card.Text>
    <Button variant="primary">Visit</Button>
    </Card.ImgOverlay>
</Card>
</Col>
</Row>
</Container>
    </div>);
}

export default Results;
