$(document).ready(function() {
  // Init Masonry for regular grids (excluding selected-work-grid which uses CSS Grid)
  var $grid = $('.grid').not('.selected-work-grid').masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
  
  // Note: selected-work-grid uses CSS Grid, not Masonry
});

