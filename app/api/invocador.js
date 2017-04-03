var mongoose = require('mongoose');
var key = require('../../config/key');
var request = require('request');
var api = {};

api.buscar = function(req, res) {

  // Aqui faz a requisição em localhost:3001/api/usuarios/ + name
  // responde com o body em json

  var summoner_name = req.params.summoner_name;
	var region = req.params.region;

	request("https://na.api.pvp.net/api/lol/" + region + "/v1.4/summoner/by-name/" + summoner_name + "?api_key=" + api.KEY, function(err, httpResponse, body) {
		if (!err) {
			res.write(body);
		} else {
			res.write(err);
		}
		 res.end();
	});

}

module.exports = api;
