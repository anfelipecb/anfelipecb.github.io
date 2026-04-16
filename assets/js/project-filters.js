// Project Tag Filtering (filter buttons on /projects/ page only)
// Badge capitalization is handled by _includes/tag_capitalize.html
(function() {
  var tagColors = {
    'ml': '#FF6B9D',
    'ai-agents': '#7C3AED',
    'geospatial': '#2D9596',
    'data-viz': '#4ECDC4',
    'devops': '#06B6D4',
    'research': '#AA96DA'
  };

  var tagDisplayNames = {
    'ml': 'Machine Learning',
    'ai-agents': 'AI Agents',
    'geospatial': 'Geospatial',
    'data-viz': 'Data Viz',
    'devops': 'DevOps',
    'research': 'Research'
  };

  function getTagColor(tag) { return tagColors[tag] || '#95A5A6'; }
  function getTagDisplay(tag) { return tagDisplayNames[tag] || tag; }

  // Find projects container
  var projectsContainer = document.querySelector('.projects');
  if (!projectsContainer) return;

  var projects = [];
  var items = projectsContainer.querySelectorAll('.grid-item');
  for (var i = 0; i < items.length; i++) { projects.push(items[i]); }

  var allTags = {};
  projects.forEach(function(project) {
    var badges = project.querySelectorAll('.project-tags .badge');
    for (var j = 0; j < badges.length; j++) {
      var tag = badges[j].getAttribute('data-tag') || badges[j].textContent.trim().toLowerCase().replace(/\s+/g, '-');
      allTags[tag] = true;
    }
  });

  var tagList = Object.keys(allTags).sort();
  if (tagList.length === 0) return;

  // Create filter UI
  var filterContainer = document.createElement('div');
  filterContainer.className = 'project-filters mb-3';
  var buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'filter-buttons d-flex flex-wrap';
  buttonsDiv.style.gap = '0.4rem';

  // "All" button
  var allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.setAttribute('data-filter', 'all');
  allBtn.textContent = 'All';
  buttonsDiv.appendChild(allBtn);
  filterContainer.appendChild(buttonsDiv);

  // Tag buttons
  tagList.forEach(function(tag) {
    var btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = getTagDisplay(tag);
    btn.setAttribute('data-filter', tag);
    var color = getTagColor(tag);
    btn.style.backgroundColor = color;
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.padding = '0.35em 0.85em';
    btn.style.borderRadius = '14px';
    btn.style.cursor = 'pointer';
    btn.style.fontSize = '0.8rem';
    btn.style.fontWeight = '500';
    btn.style.transition = 'all 0.2s ease';
    btn.style.opacity = '0.75';
    btn.style.lineHeight = '1.4';

    btn.addEventListener('mouseenter', function() {
      this.style.opacity = '1';
      this.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', function() {
      if (!this.classList.contains('active')) {
        this.style.opacity = '0.75';
      }
      this.style.transform = 'scale(1)';
    });

    buttonsDiv.appendChild(btn);
  });

  // Insert before first grid
  var grid = projectsContainer.querySelector('.grid');
  if (grid) {
    grid.parentNode.insertBefore(filterContainer, grid);
  }

  // Filter logic
  var activeFilter = 'all';
  var allBtns = filterContainer.querySelectorAll('.filter-btn');

  for (var k = 0; k < allBtns.length; k++) {
    allBtns[k].addEventListener('click', function() {
      for (var m = 0; m < allBtns.length; m++) {
        allBtns[m].classList.remove('active');
        allBtns[m].style.opacity = '0.75';
      }
      this.classList.add('active');
      this.style.opacity = '1';
      activeFilter = this.getAttribute('data-filter');
      filterProjects();
    });
  }

  function filterProjects() {
    projects.forEach(function(project) {
      if (activeFilter === 'all') {
        project.style.display = '';
        project.style.opacity = '1';
      } else {
        var badges = project.querySelectorAll('.project-tags .badge');
        var match = false;
        for (var n = 0; n < badges.length; n++) {
          if ((badges[n].getAttribute('data-tag') || '') === activeFilter) {
            match = true;
            break;
          }
        }
        if (match) {
          project.style.display = '';
          project.style.opacity = '0';
          setTimeout(function() { project.style.opacity = '1'; }, 10);
        } else {
          project.style.opacity = '0';
          setTimeout(function() { project.style.display = 'none'; }, 300);
        }
      }
    });
  }

  // Inject styles
  var style = document.createElement('style');
  style.textContent = '.project-filters{margin-bottom:1.5rem}.filter-btn{transition:all .2s ease!important}.filter-btn.active{opacity:1!important;font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,.2)}.grid-item{transition:opacity .3s ease}';
  document.head.appendChild(style);
})();
