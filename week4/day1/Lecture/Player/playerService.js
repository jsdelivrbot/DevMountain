angular.module('myApp')
.service('playerService', function() {
  var players = [
    {
      id: 1,
      name: 'Carmelo Anthony',
      image: 'http://butthegameison.com/blog/wp-content/uploads/2009/11/Carmelo-Anthony-2.jpg'
    },
    {
      id: 2,
      name: 'Nikola Jokic',
      image: 'http://i.cdn.turner.com/drp/nba/nuggets/sites/default/files/styles/story_main_photo/public/dn-jokic-magic_header-012517.jpg?itok=TTgpXD24'
    },
    {
      id: 3,
      name: 'Chris Paul',
      image: 'https://i.kinja-img.com/gawker-media/image/upload/s--mn-Co_m3--/c_scale,fl_progressive,q_80,w_800/ov6pfysvj7l1dd8sqfya.jpg'
    }
  ]

  this.getPlayers = function() {
    return players;
  }
  
  this.getPlayerById = function(id) {
    return players.filter(function(player) {
      return player.id == id;
    })[0];
  }
})