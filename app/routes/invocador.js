module.exports = function(app){

  var api = app.api.invocador;

  app.route('/api/basic/:summoner_name/:region')
    .get(api.buscar);


}
