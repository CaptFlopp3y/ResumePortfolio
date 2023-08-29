import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <header>Full Stack Developer</header>
                </Col>
                <Col>
                    <p>
                        I create full stack web applications can
                        be integraded with databases or third party SaaS systems
                    </p>
                    <p>
                        Favorite front end frameworks to
                        use are ReactJS, HandlebarsJS, Bootstrap,
                        and Apollo.
                    </p>
                    Favorite backend technologies to
                    use are ExpressJS, MongoDB, MySQL,
                    NoSQL, and Apollo

                    <p>

                    </p>
                </Col>
            </Row>
        </Container>
    );
};
export default HomePage;