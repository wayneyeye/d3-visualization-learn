$.getJSON( "main.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li><a href='" + data[key].url + "'>" + data[key].name + "</a></li>" );
  });
 
  $( "<div/>", {
    "class": "links",
    html: items.join( "" )
  }).appendTo( "body" );
});