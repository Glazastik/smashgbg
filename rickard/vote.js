$(function() {
  $.ajax({
      url: "https://rickardsvikarie.se/wp-admin/admin-ajax.php",
      crossOrigin: true,
      type: "POST",
      data: {
          action: "rv_vote",
          post_id: "147"
      },
      dataType: "json"
  });
});
