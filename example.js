var irc = require('./lib/irc');
var api = irc.api;

var sys = require('sys');

// For all call client must be first argument.
// Client is passed as the first argument for every
// listener callback
//
//
// To send a raw command
// irc.send(client, command, arg ... );
//
// To send a channel message. nick is optional and will direct message at user
// irc.sendMessage(client, channel, message, nick);
//
// To send a private message
// irc.sendPM(client, nick, message);
//
// To join a channel E.g. when invited
// Default channels should be set in config
// irc.join(client, channel);
//
// To part a channel
// irc.part(client, channel, message);
//
// To kick a user
// irc.kick(client, channel, nick, message);


// Now for the event listeners

api.addListener("connect", function(client) {
  // Connect to server
  sys.puts(sys.inspect(arguments));
});

api.addListener("join", function(client, channel) {
  // Joined a channel
  sys.puts(sys.inspect(arguments));
});

api.addListener("disconnect", function(client) {
  // Disconnected from server. The bot will
  // automatically try to re-connect.
  // "connect" event will fire when re-connected
  sys.puts(sys.inspect(arguments));
});

api.addListener("invite", function(client, channel, nick) {
  // Bot was invited to a channel
  sys.puts(sys.inspect(arguments));
});

api.addListener("pm", function(client, message, nick) {
  // Private message sent to profile
  sys.puts(sys.inspect(arguments));
});

api.addListener("message", function(client, message, channel, nick) {
  // Message sent to channel
  sys.puts(sys.inspect(arguments));
});

api.addListener("userjoin", function(client, channel, nick) {
  // A user joined a channel
  sys.puts(sys.inspect(arguments));
});

api.addListener("userpart", function(client, channel, nick, message) {
  // A user parted a channel
  sys.puts(sys.inspect(arguments));
});

api.addListener("userquit", function(client, nick, message) {
  // A user parted a channel
  sys.puts(sys.inspect(arguments));
});

api.addListener("kicked", function(client, channel, message, admin) {
  // Bot got kicked from channel
  sys.puts(sys.inspect(arguments));
});

api.addListener("userkicked", function(client, channel, nick, message, admin) {
  // A user got kicked from channel
  sys.puts(sys.inspect(arguments));
});
