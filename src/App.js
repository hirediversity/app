import './App.css';
import Data from './APP용.json';
import React, { useState } from 'react';

function App() {
  let [db, setDb] = useState(Data);
  let [box, setBox] = useState(false);

  return (
    <div className="App">
      <div id="search">
        <input id="email" placeholder="e-mail" />
        <input id="rcNumber" placeholder="password" />
        <button type="button" className="btn btn-primary btn-sm" id="searchBtn" onClick={() => {setBox(true)}}>Login</button>

      </div>
      <p></p>
      <div className="container">
        {
          box === true
          ? <Box />
          : null
        }

        <div id="err">⚠ 입력하신 정보가 틀렸습니다.</div>
      </div>
    </div>
  );

  function Box(){
    const em = document.getElementById("email").value;
    const pw = document.getElementById("rcNumber").value;

    let [Link, setLink] = useState(false);

    for (var i = 0; i < db.length; i++) {
      
      if (em === db[i].이메일 && pw === db[i].외국인등록증) {
        
        document.getElementById("search").style.display = "none";
        document.getElementById("err").style.display = "none";

        return (
          <div>
            <div id="box">
              <p>{ db[i].이름 }님, 안녕하세요🙆‍♀️<br/><br/>
              이번달 보험료는 { db[i].수수료계좌 !== null ? db[i].수수료계좌 : "0" }원,<br/>
              미납금은 { db[i].수수료미납계좌 !== null ? db[i].수수료미납계좌 : "0" }원으로<br/>
              총 납부하실 금액은 <b>{ db[i].수수료계좌총액 !== null ? db[i].수수료계좌총액 : "0" }원</b>입니다.</p>
            </div>
            <button className="btn btn-outline-primary" onClick={() => {setLink(true)}}>납부하기</button>

            {
              Link === true
              ? <Form />
              : null
            }
            
          </div>
        )
      } else document.getElementById("err").style.display = "block"
    }

    function Form() {
      window.location.href = `https://${db[i].납부개별링크}`
    }

    return (
      <div></div>
    )

  }

  

  
} export default App
