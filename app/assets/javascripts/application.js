// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .
//= require_self
//= require chartkick

var blocmetrics = {};
blocmetrics.report = function(eventName){
   var event = { name: eventName };
   var request = new XMLHttpRequest();
   request.open("POST", "https://bloc-foundation-torievandijk.c9users.io/api/events", true);
   request.setRequestHeader('Content-Type', 'application/json');
   request.send(JSON.stringify(event));
  };
  
 function ready() {
            $("#menu-toggle").click(function(e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
      };
      
$(document).ready(ready);
$(document).on('page:load', ready);