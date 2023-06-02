$(document).ready(function () {
  //remove 'analysis-[color]... classes from elements'
  $(".analysis").each(function () {
    $(this).removeClass(
      "analysis-Red analysis-Green analysis-Yellow analysis-Cyan analysis-Purple"
    );
  });
});
