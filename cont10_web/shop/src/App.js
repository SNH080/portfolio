
import React, { useState } from 'react';
import {Navbar,Container,Nav,NavDropdown,Button} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import nike from './nike.jpg';
import nikeImg1 from './nikeImg1.png';
import nikeImg2 from './nikeImg2.png';
import nikeLogo from './nikeLogo.png';
import video from './move.mp4';
import Data from './data.js'
import Data2 from './data2.js'
import Detail from './Detail.js';
import Spring from './Spring.js';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';


function App() {

  let [nikeShoes, nikeShoes변경] = useState(Data);
  let [nikeShoes2, nikeShoes2변경] = useState(Data2);
  let [상품갯수, 상품갯수변경] = useState(3);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to="/"><img src={nikeLogo} className='nikeLogo'/></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='#Men'>Men</Nav.Link>
              <Nav.Link href='#Women'>Women</Nav.Link>
              <Nav.Link href='#Kids'>Kids</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">마이페이지</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">주문/배송</ NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Switch>      

      <Route exact path="/">
        <div className='backgrond'>
          {/* <div className='hover-img'><img src={nike2}/></div> */}
          <div className='main-img'><Link to="/Spring"><img src={nike}/></Link></div>
        </div>

        <div className='container'>
        <div className='row'>

        <h2 className='title'>New sneakers</h2>

          {nikeShoes.map((a,i)=>{
            return(
              <Card nikeShoes={a} i={i} key={i}></Card>
            )
            })}
        </div>
        
        {
            상품갯수 < 6
            ? <Button variant="outline-secondary" className='btn-more' onClick={()=>{

              nikeShoes변경( [...nikeShoes, ...nikeShoes2 ] );
              상품갯수변경(3+3);
              
    
            }}>더보기</Button>
            : null
          }
        <br></br>
        <h2 className='cont2Title'>AIR MAX VERONA</h2>
        <div className='moveBox'>
          <video controls autoPlay loop muted className='move'>
          <source src={video} type="video/mp4" ></source>
          </video>
          <div>
            <img src={nikeImg1} className='nikeImg nikeImg1' />
            <img src={nikeImg2} className='nikeImg nikeImg2' />
          </div>
        </div>
        <br></br>
        <div className='textBox'>
        <p className='minetxt1'>그때의 그매력 그대로</p>
        <p className='minetxt2'>과거에서 영감을 받은 친숙한 라인과 새로운 실루엣이 돋보이는에어맥스 던으로 나만의 레트로 룩을 완성해 보세요.</p>
        <Button variant="outline-secondary">구매하기</Button>{' '}
        </div>
        <br></br>
        <br></br>
        <br></br>
        
      </div>
      </Route>

      <Route path="/detail/:id">
        <Detail nikeShoes={nikeShoes} />
      </Route>

      <Route path="/Spring">
        <Spring />
      </Route>

      </Switch>

      

    </div>
  );
}

function Card(props) {
  return(
    <div className='col-md-4 shoes1'>
      <Link to={"/detail/"+ props.i}><img src={ '../shoes' + props.i + '.jpg'}/></Link>
      <h4 className='shoesText'>{props.nikeShoes.title}</h4>
      <p className='shoestxt'>{props.nikeShoes.content}</p>
      <p className='shoestxt2'>{props.nikeShoes.price}</p>
    </div>
  )
}

export default App;
