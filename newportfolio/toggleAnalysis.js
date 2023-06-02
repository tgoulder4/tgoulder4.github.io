$(document).ready(function () {
  //remove 'analysis-[color]... classes from elements'
  $(".analysis").each(function () {
    $(this).removeClass(
      "analysis-Red analysis-Yellow analysis-Cyan analysis-Purple"
    );
  });
});
