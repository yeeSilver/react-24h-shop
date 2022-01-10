// index.html과 비슷. 메인 페이지에 들어갈 html내용을 짜는 곳.
// app.js에서 짠 걸 index.js를 이용해서 public/index.html에 가져다 박아버림.
//node_modules 설치한 라이브러리들을 모아둔 폴더
//public : static한 파일 보관.-> 동적으로 바꾸지않는 이미지, html 파일
//package.json 설치한 라이브러리 목록(버전 등)

/* eslint-disable*/
//state 만드는 법 1. {useState} -> 리액트에 있는 useState라는 내장함수 하나를 쓰겠다
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // useState('남자 코트 추천'); [a,b] a:남자코트 추천 b: 남자코트 추천 state정정해주는 함수

  let [카테고리, 카테고리변경] = useState('킬링타임 로맨스 추천');
  let genre = "킬링 타임 로맨스 영화"
  let [영화제목, 영화제목변경] = useState([
    'We are the MILLERS',
    'Bridget Jones Diary',
    "Proposal",
  
  ]);
  let [likes, likes_modify] = useState(0);
 
  // 데이터는 1.변수에 넣거나 2.state에 넣거나
  // state란? 1.변수 대신 쓰는 데이터 저장공간 2.useState를 이용해서 만들어야 함. 왜쓰지? 웹이 app처럼 동작하게 만들고 싶어서/ 장점 : state는 변경되면 html이 자동으로 재랜더링 됩니다.(새로고침 하지 않아도 페이지 재랜더링)

  // 터미널 warning: eslint라는 모듈이 잡아주는 문법 체크사항. eslink-disable을 주석처리로 맨 위에 해주면 안보임

  function 카테고리바꾸기(){
    카테고리변경('킬링타임 코미디 추천');
  }

  return (
    <div className="App">
      <div className='nav-header'>
        <div> Movie Lover </div>
      </div>
      <section className="sec-list-post">
        <h3>{ 카테고리 }</h3>
        <button onclick = {() => {카테고리바꾸기}}>클릭</button> 
        {/* 카테로기바꾸기()로하면 클릭시가아니라 랜더링 되자마자 실행 */}
        <article className="art-list-post">
          <h4>{ 영화제목[0] } <span className='likes' onClick ={ () => {likes_modify(likes += 1)}}>🤍  {likes}</span> </h4>
          <p className ="date"> 2021-02-17 </p>
          <p className ="summary">줄거리 마약을 운반하기 위해 만들어진 가짜 가족의 이야기를 담은 코미디 영화</p>
          <p className ="actors">출연진 : 제니퍼 애니스톤, 제이슨 서데이키스, 윌 폴터, 엠마 로버츠</p>
        </article>

        <article className="art-list-post">
          <h4>{ 영화제목[1] } <span className='likes'>🤍</span> </h4> 
          <p className ="date"> 2021-02-17 </p>
          <p className ="summary">줄거리 어김없이 홀로 새해를 맞은 서른두 살 ‘브리짓’그런 그녀에게 운명처럼 찾아온 정반대의 두 매력남</p>
          <p className ="actors">출연진 : 르네 젤위거, 휴 그랜트, 콜린 퍼스</p>
        </article>

        <article className="art-list-post">
          <h4>{ 영화제목[2] } <span className='likes'>🤍</span> </h4>
          <p className ="date"> 2021-02-17 </p>
          <p className ="summary">나만 믿어! 금방 이혼해줄께?전 세계를 뒤집어 버린 협박보다 무서운(?) 청혼는 연상연하 커플이 할 수 없이 급결혼에 이르게 되는 과정을 포복절도할 코미디로 풀어낸 작품!</p>
          <p className ="actors">출연진 : 산드라 블록, 라이언 레이놀즈</p>
        </article>
      </section>
      </div>
  );
}

export default App;
