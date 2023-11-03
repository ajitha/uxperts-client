const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const expertUsersResponse1 = {
  content: "Test response for question 1",
}

const expertUsersResponse2 = {
  content: "Test response for question 2",
  expertUsers: [
    {
      username: "John Smith",
      email: "john@ifs.com",
      avatarUrl: 'https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg'
    },
    {
      username: "Jonny Silverhand",
      email: "jonny@ifs.com",
      avatarUrl: 'https://cyberpunk2077.wiki.fextralife.com/file/Cyberpunk-2077/johnny-silverhand-npc-cyberpunk-2077-wiki-guide.png'
    },
  ]
};

app.get('/getExpertUsers', (req, res) => {
  const msg  = req.query;
  console.log('Received msg: ', msg);

  if(msg && msg.message && msg.message.includes('expert')) {
    setTimeout(() => {
      res.status(200).send(expertUsersResponse2);
    }, 2000);
  }
  else{
    setTimeout(() => {
      res.status(200).send(expertUsersResponse1);
    }, 2000);
  }

});

app.listen(4000, () => {
  console.log('Listening on 4000');
});