import React from 'react';
import SignUpR from './SignUpR';
// import "../css/SignUp.css";
// import "../css/Capacity.css";
// import '../css/style.css';
import Capacity from './Capacity';
import SignUp from './SignUp';
import {Container, Row, Col } from 'reactstrap';
// import '../bootstrap.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './New';


class CheckIn extends React.Component {
    render() {
        return (
            <Example/>
            // <div>
            //     <div className="row">
            //         <div className="col-md-6">
            //             <Capacity/>
            //         </div>
            //         <div className="col-md-6">
            //             <SignUpR/>
            //         </div>
            //     </div>
            // </div>
            // <Container>
                
            // <Row>
            //     <Col><Capacity/></Col>
            //     <Col><SignUp/></Col>
            // </Row>
        // </Container>
            
        
        )
    }
}

export default CheckIn;