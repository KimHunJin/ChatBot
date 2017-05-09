module.exports = function(app, fs) {

  console.log('test');
  
  app.get('/keyboard', function(req, res) {
	fs.readFile(__dirname + "/../data/" + "keyboard.json", 'utf8', function(err, data) {
	  console.log(data);
	  res.end(data);
	});
  });

  app.post('/message', function(req, res) {
	var result = { };

	var messageObject = new Object();
	var resultObject = new Object();

	var text = "";

	var content = req.body.content;


	if(content == "시작하기") {
	  text = "이제 시작 합니다";
	  messageObject.text = text;
	  resultObject.message = messageObject;
	  var resultJson = JSON.stringify(resultObject);
	  res.send(resultJson);

	} else if(content == "개념") {
	  text = "개념이지만 아직..";
	  messageObject.text = text;
	  resultObject.message = messageObject;
	  var resultJson = JSON.stringify(resultObject);
	  res.send(resultJson);

	} else if(content == "도움말") {
	  text = "개발 관련 및 포트포리오입니다.";
	  messageObject.text = text;
	  resultObject.message = messageObject;
	  var resultJson = JSON.stringify(resultObject);
	  res.send(resultJson);

	} else if(content == "만든이") {
	  var config = require('../config/mySQLConnect');
	  var sql = "select `id`, `name` from my_info";
	
	  config.query(sql, function(err, result) {
		if(err) {
		  console.error("Select Query Error : ", err);
		} else {
		  var id = result[0]['id'];
		  var name = result[0]['name'];

		  text = name;

		  messageObject.text = text;

		  resultObject.message = messageObject;
		  var resultJson = JSON.stringify(resultObject);
		  res.send(resultJson);
		}
	  });

	} else if(content == "포트폴리오") {
		text = "포트폴리오 아직 안만듬";
		messageObject.text = text;
		resultObject.message = messageObject;
		var resultJson = JSON.stringify(resultObject);
		res.send(resultJson);
	} else if(content == "스킬") {
	  text = "스킬인데 아직 안만듬 ㅎㅎ";
	  messageObject.text = text;
	  resultObject.message = messageObject;
	  var resultJson = JSON.stringify(resultObject);
	  res.send(resultJson);
	} else {
	  text = "모르는 단어";
	  messageObject.text = text;
	  resultObject.message = messageObject;
	  var resultJson = JSON.stringify(resultObject);
	  res.send(resultJson);
	}

//	messageObject.text = text;
//	resultObject.message = messageObject;
//	var resultJson = JSON.stringify(resultObject);
//	console.log("text" + this.text);
//	res.send(resultJson);
  });
};
