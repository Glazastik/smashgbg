$(function() {
  $.ajax({
      url: "https://rickardsvikarie.se/wp-admin/admin-ajax.php",
      type: "POST",
      data: {
          action: "rv_vote",
          post_id: "147"
      },
      dataType: "json"
  }).done(function ( data ) {
  $('#result').append(data);
});
});
