var express = require('express');
var router = express.Router();

/* Book Metro Tanker */
router.post('/', function (req, res, next) {
  var phoneNumber = req.body.number;
  var tanker = req.body.tanker;
  console.log(__dirname);
  const spawn = require("child_process").spawn;
  const pythonProcess = spawn('python3', [__dirname+"/../metrowater.py", phoneNumber, tanker]);
  pythonProcess.stdout.on('data', function (data) {
    res.send(data.toString());
  });
});

module.exports = router;
