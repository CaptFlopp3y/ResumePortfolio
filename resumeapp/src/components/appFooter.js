import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AppFooter = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={12} md={4}>1 of 2</Col>
                    <Col xs={12} md={4}>2 of 2</Col>
                </Row>
            </Container>
        </footer>
    );
};

export default AppFooter