const express = require('express')
var builder = require('xmlbuilder');


const sleep = require('sleep')
const app = express()
const port = 3000

const p0 = ""


app.get('/', (req, res) => {
   let randNo = Math.random() * 70740000000;
  // let no = Math.floor(randNo)
  console.log(randNo)
  let key = randNo
  
  let resp = "unset";
  resp = {}
for (let jj = 0 ;jj < 10; jj++ ) {
resp["TEST"+jj+key] = "DONE-key-"+jj
}
resp["TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST"+key] = "DONE-key-"

  sleep.msleep("50")
  res.send(resp)
})

app.post('/', (req, res) => {
   let randNo = Math.random() * 70740000000;
  // let no = Math.floor(randNo)
  console.log(randNo)
  let key = randNo
  
  let resp = "unset";
  resp = {}
for (let jj = 0 ;jj < 10000; jj++ ) {
resp["TEST"+jj+key] = "DONE-key-"+jj
}
  sleep.msleep("50")
  res.send(resp)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function buildXML(iteration) {
  var xml = builder.create('root')
    .ele('xmlbuilder')
    .ele('repo', {
      'type': 'git'
    }, 'git://github.com/oozcitak/xmlbuilder-js.git')

    for (let i=0;i<(iteration-139)/44;i++) {
      var item = xml.ele('data');
       item.att('x', 1);
       item.att('y', 1 * 1);
       item.att('z', 1 * 1);
       item.att('a', 1);
       item.att('b', 1 * 1);
       item.att('c', 1 * 1);

    }

    xml = xml.end({
      pretty: true
    });
    return xml
}
