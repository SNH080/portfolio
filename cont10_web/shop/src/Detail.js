import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
  padding : 20px;
`;
let 제목 = styled.h4`
  font-size : 25px;
  color : ${ props => props.색상 }
`;

/* class Detail2 extends React.Component {
  componentDidMount(){}//컴포넌트가 Mount(실행될 때)가 되었을 때 실행할 코드
  componentWillUnmount(){}//컴포넌트가 UnMount(사라질 때) 되기 직전에 실행할 코드
}//예전 Lifecycle & Hook 방식 */

function Detail(props) {

  
  let [alert, alert변경] = useState(true);
  useEffect(()=>{
    let 타이머 = setTimeout(()=>{ alert변경(false) },2000);
    //컴포넌트가 실행, 업데이트 될 때 실행

    return ()=>{ clearTimeout(타이머) }//컴포넌트가 사라질 때 실행

  },[alert]/*useEffect가 실행될 조건을 []안에 쓸수있음 []안에 암것도 안쓰면 처음 실행때만 실행되고 []자체가 아예없으면 업데이트될때마다 실행됨 */);//요즘 Lifecycle & Hook 방식


    let { id } = useParams();
    let history = useHistory();
    let 찾은상품 = props.nikeShoes.find(function(상품){
        return 상품.id == id
    });

    return(
        <div className="container">
          

          {
            alert == true
            ? <Alert />
            : null
          }

          <div className="row">
            <div className="col-md-6">
            <img src={ '/shoes' + id + '.jpg'} width="100%"/>
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{찾은상품.title}</h4>
              <p>{찾은상품.content}</p>
              <p>{찾은상품.price}</p>
              <Button variant="outline-secondary">주문하기</Button>{' '}
              &nbsp;
              <Button variant="outline-secondary" onClick={()=>{
                  history.goBack();
              }}>뒤로가기</Button>{' '}
            </div>
          </div>
        </div> 
    )
}

function Alert(){
  return(
    <div className='my-alert-yellow'>
      <p>재고가 얼마 남지 않았습니다</p>
    </div>
  )
}

export default Detail;