import logo from './logo.svg';
import './App.css';
import Data from './APP용.json';
import React, {useState, useEffect} from 'react';

function App() {
  // let [db, setDb] = useState(Data);
  var db = new Array();
  let [box, setBox] = useState(false);
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: 'keyJzEKvIACHqssJQ'}).base('appmdn5kLtTSnivLC');
  


  base('APP').select({
        view: 'Grid view'
    }).firstPage(function(err, records) {
        if (err) { console.error(err); return; }
        // const air = [];
        // records.forEach(lists => db.push(lists.fields))
        // console.log(air);
        // db.push(air);
        // records.map(lists => db.push(lists.fields))
        // console.log(records[0].fields);

        // console.log(records.length);
        for (var i = 0; i < records.length; i++) {
          db.push(records[i].fields);
          // db[db.length] = records[i];
          
        } return db;
    });
    
    console.log(db.length);
    
  return (
    <div className="App">
      <div id="search">
        <input id="email" placeholder='e-mail'></input>
        <input id="rcNumber" placeholder='password'></input>
        <button type="button" className="btn btn-primary btn-sm" id="searchBtn" onClick={() => {setBox(true)}}>Login</button>
        
      </div>
      <p></p>
      <div className="container">
        {
          box === true
          ? <Box />
          : null
        }
        
        </div>
    </div>
  );
  
 

  function Box(){
    const pw = document.getElementById("rcNumber").value;
    const em = document.getElementById("email").value;
    
    let [Link, setLink] = useState(false);
    
    for (var i = 0; i < db.length; i++) {
      
      if (pw === db[i].외국인등록증 && em === db[i].이메일) {
        document.getElementById("search").style.display = 'none';
  
        return (
        <div>
          <p>{ db[1].이름 }</p>
          <p>{ db[i].이름 }님, 안녕하세요<br/>
          이번달 총액은 { db[i].이번달총액.slice(1) }원,<br/>
          미납금은 { db[i].이번달미납 }원으로<br/>
          총 납부하실 금액은 <b>{ db[i].이번달총액.slice(1) }원</b>입니다.</p>
          <button onClick={() => {setLink(true)}}>돈 내세요</button>

          {
            Link === true
            ? <Form />
            : null
          }

        </div>
        )
      }
    }

    function Form() {
      window.location.href = `https://${ db[i].납부개별링크 }`;
    }

    return (
      <div className="row"></div>
    )
  }
}

export default App;
