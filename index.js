const express = require('express')
var builder = require('xmlbuilder');


const sleep = require('sleep')
const app = express()
const port = 3000

const p0 = ""


app.post('/', (req, res) => {
  // let randNo = Math.random() * 7074;
  // let no = Math.floor(randNo)
  // console.log(no,randNo)
  let resp = "unset";
  resp = { "TEST":"DONE" };
  sleep.msleep("50")


  res.send(resp)
})


app.get('/', (req, res) => {
  let resp = { "TEST":"DONE" };
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

