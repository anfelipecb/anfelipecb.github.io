$(document).ready(function() {
  // Masonry only for legacy .grid layouts; projects page uses .projects-page-grid (CSS Grid)
  var $grid = $('.grid').not('.selected-work-grid').not('.projects-page-grid');
  if (!$grid.length) return;

  $grid.masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  $grid.imagesLoaded().progress(function() {
    $grid.masonry('layout');
  });
});

