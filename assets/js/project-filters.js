// D3.js Project Tag Filtering
(function() {
  // Color palette for tags (inspired by Austin Steinhart's site)
  const tagColors = {
    'climate': '#FF6B6B',
    'data-visualization': '#4ECDC4',
    'd3': '#95E1D3',
    'policy': '#F38181',
    'research': '#AA96DA',
    'spatial-analysis': '#FCBAD3',
    'python': '#FFD93D',
    'dash': '#6BCB77',
    'gis': '#4D96FF',
    'machine-learning': '#FF6B9D',
    'data-engineering': '#C44569',
    'web-development': '#F8B500'
  };

  // Get default color for unknown tags
  const getTagColor = (tag) => {
    return tagColors[tag] || '#95A5A6';
  };

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.querySelector('.projects');
    if (!projectsContainer) return;

    // Collect all projects and their tags
    const projects = Array.from(document.querySelectorAll('.grid-item'));
    const allTags = new Set();
    
    projects.forEach(project => {
      const tags = project.querySelectorAll('.project-tags .badge');
      tags.forEach(tag => {
        const tagText = tag.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        allTags.add(tagText);
        tag.setAttribute('data-tag', tagText);
      });
    });

    if (allTags.size === 0) return;

    // Create filter UI
    const filterContainer = document.createElement('div');
    filterContainer.className = 'project-filters mb-4';
    filterContainer.innerHTML = `
      <div class="filter-buttons d-flex flex-wrap align-items-center">
        <button class="filter-btn active" data-filter="all">All</button>
      </div>
    `;

    // Insert before projects grid
    const grid = projectsContainer.querySelector('.grid');
    if (grid) {
      grid.parentNode.insertBefore(filterContainer, grid);
    }

    // Add tag buttons with colors
    const filterButtons = filterContainer.querySelector('.filter-buttons');
    Array.from(allTags).sort().forEach(tag => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.textContent = tag.replace(/-/g, ' ');
      btn.setAttribute('data-filter', tag);
      btn.style.backgroundColor = getTagColor(tag);
      btn.style.color = '#fff';
      btn.style.border = 'none';
      btn.style.padding = '0.5em 1em';
      btn.style.margin = '0.25em';
      btn.style.borderRadius = '20px';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '0.9rem';
      btn.style.transition = 'all 0.3s ease';
      btn.style.opacity = '0.8';
      
      btn.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1.05)';
      });
      btn.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
          this.style.opacity = '0.8';
        }
        this.style.transform = 'scale(1)';
      });
      
      filterButtons.appendChild(btn);
    });

    // Filter functionality
    let activeFilter = 'all';
    
    const filterButtonsAll = filterContainer.querySelectorAll('.filter-btn');
    filterButtonsAll.forEach(btn => {
      btn.addEventListener('click', function() {
        // Update active state
        filterButtonsAll.forEach(b => {
          b.classList.remove('active');
          if (!b.classList.contains('active')) {
            b.style.opacity = '0.8';
          }
        });
        this.classList.add('active');
        this.style.opacity = '1';
        
        activeFilter = this.getAttribute('data-filter');
        filterProjects();
      });
    });

    function filterProjects() {
      projects.forEach(project => {
        if (activeFilter === 'all') {
          project.style.display = '';
          project.style.opacity = '1';
        } else {
          const projectTags = Array.from(project.querySelectorAll('.project-tags .badge'))
            .map(tag => tag.getAttribute('data-tag'));
          
          if (projectTags.includes(activeFilter)) {
            project.style.display = '';
            // Fade in animation
            project.style.opacity = '0';
            setTimeout(() => {
              project.style.opacity = '1';
            }, 10);
          } else {
            // Fade out animation
            project.style.opacity = '0';
            setTimeout(() => {
              project.style.display = 'none';
            }, 300);
          }
        }
      });

      // Re-layout masonry after filtering
      setTimeout(() => {
        const $grid = $('.grid').masonry({
          gutter: 10,
          horizontalOrder: true,
          itemSelector: '.grid-item:visible',
        });
        $grid.masonry('layout');
      }, 350);
    }

    // Add CSS for smooth transitions
    const style = document.createElement('style');
    style.textContent = `
      .project-filters {
        margin-bottom: 2rem;
      }
      .filter-btn {
        transition: all 0.3s ease !important;
      }
      .filter-btn.active {
        opacity: 1 !important;
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      }
      .grid-item {
        transition: opacity 0.3s ease;
      }
    `;
    document.head.appendChild(style);
  });
})();

