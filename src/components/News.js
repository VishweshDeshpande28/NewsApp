import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import StartFirebase from "./FirebaseConfig";
import { ref, onValue } from "firebase/database";
import "./Cardcss.css";
import Spinner from "./Spinner";

const db = StartFirebase();

export class News extends React.Component {
  constructor() {
    super();
    this.state = {
      cardData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(db, "articles");

    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyName, data: data });
      });
      this.setState({ cardData: records });
    });
  }

  render() {
    return (
      <>
      <Container>
      
        <h2>NewsByte - Top Headlines</h2>
        {<Spinner/>}
      
      <div class="d-flex align-content-stretch flex-wrap">
        {this.state.cardData.map((articles) => {
          return (
            
            <Row>
            <Col>
            <Card className= "Cardcss" style={{ width: "20rem" }} >
              <Card.Img variant="top" src={articles.data.image_url} />
              <Card.Body>
                <Card.Title>{articles.data.title}</Card.Title>
                <Card.Text>{articles.data.description}</Card.Text>
              </Card.Body>
              <Accordion>
                  <Accordion.Header><b>About This News</b></Accordion.Header>
                  <Accordion.Body>{articles.data.content}</Accordion.Body>
                  <a href={articles.data.link} class="btn btn-primary active display-flex" role="button" aria-pressed="true" style={{width:"20 rem"}}>Read More..</a>
              </Accordion>
            </Card>
            </Col>
            </Row>
            
          );
        })}
        </div>
        </Container>
      </>
    );
  }
}

export default News;
