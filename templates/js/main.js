Sfotipy = {};

Sfotipy.Song = Backbone.Model.extend({});

Sfotipy.Songs = Backbone.Collection.extend({
	model: Sfotipy.Song
});

Sfotipy.SongView = Backbone.View.extend({
	events: {
		//'EVENTO SELECTOR' : 'FUNCION'
		'click .action.icon-add': 'add'
	},

	tagName: 'li',
	className: 'item border-bottom',

	template: Handlebars.compile($("#song-template").html()),

	initialize: function() {
		this.listenTo(this.model, "change", this.render, this);
	},

	render: function(){
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
	},

	add: function(e){
		e.preventDefault();
		alert(this.model.get("name"));
	}

}); 

Sfotipy.Router = Backbone.Router.extend({
	routes: {
		"": "index",
		"album/:name": "album",
		"profile/:username": "profile"
	},

	index: function(){
		console.log("Estoy en el index");
	},

	album: function(name){
		console.log("Album: "+name);
	},

	profile: function(username){
		console.log("Username: " +username);
	}
})

Sfotipy.app = new Sfotipy.Router();
Backbone.history.start();

window.Sfotipy = Sfotipy;