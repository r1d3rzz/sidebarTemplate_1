jQuery(function ($) {
  $(".sidebar-dropdown > a").click(function () {
    var $thisDropdown = $(this).parent();
    var $thisIcon = $(this).find("i");

    $(".sidebar-submenu").slideUp(200);

    if ($thisDropdown.hasClass("active")) {
      $thisDropdown.removeClass("active");
      $thisIcon.removeClass("fa-folder-open").addClass("fa-folder");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(".sidebar-dropdown i")
        .removeClass("fa-folder-open")
        .addClass("fa-folder");
      $thisDropdown.addClass("active");
      $thisIcon.removeClass("fa-folder").addClass("fa-folder-open");
      $(this).next(".sidebar-submenu").slideDown(200);
    }
  });

  $("#close-sidebar").click(function () {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function () {
    $(".page-wrapper").addClass("toggled");
  });
});
