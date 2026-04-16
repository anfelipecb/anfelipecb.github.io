// Project Tag Filtering & Badge Colorization
(function() {
  // Color palette for tags
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
    'web-development': '#F8B500',
    'geospatial': '#2D9596',
    'satellite': '#8B7355',
    'jupyter': '#F37726',
    'javascript': '#E8B931',
    'ai-agents': '#7C3AED',
    'llm': '#EC4899',
    'nlp': '#8B5CF6',
    'devops': '#06B6D4',
    'terraform': '#844FBA',
    'cloud': '#0EA5E9'
  };

  const getTagColor = (tag) => tagColors[tag] || '#95A5A6';

  document.addEventListener('DOMContentLoaded', function() {
    // Filter UI only on pages with .grid-item (the /projects/ page)
    const projectsContainer = document.querySelector('.projects');
    if (!projectsContainer) return;

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
    filterContainer.className = 'project-filters mb-3';
    filterContainer.innerHTML = `
      <div class="filter-buttons d-flex flex-wrap" style="gap: 0.3rem;">
        <button class="filter-btn active" data-filter="all">all</button>
      </div>
    `;

    const grid = projectsContainer.querySelector('.grid');
    if (grid) {
      grid.parentNode.insertBefore(filterContainer, grid);
    }

    // Add tag buttons
    const filterButtons = filterContainer.querySelector('.filter-buttons');
    Array.from(allTags).sort().forEach(tag => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.textContent = tag.replace(/-/g, ' ');
      btn.setAttribute('data-filter', tag);
      const color = getTagColor(tag);
      btn.style.backgroundColor = color;
      btn.style.color = '#fff';
      btn.style.border = 'none';
      btn.style.padding = '0.3em 0.7em';
      btn.style.borderRadius = '12px';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '0.72rem';
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

      filterButtons.appendChild(btn);
    });

    // Filter functionality
    let activeFilter = 'all';

    const filterButtonsAll = filterContainer.querySelectorAll('.filter-btn');
    filterButtonsAll.forEach(btn => {
      btn.addEventListener('click', function() {
        filterButtonsAll.forEach(b => {
          b.classList.remove('active');
          b.style.opacity = '0.75';
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
            project.style.opacity = '0';
            setTimeout(() => { project.style.opacity = '1'; }, 10);
          } else {
            project.style.opacity = '0';
            setTimeout(() => { project.style.display = 'none'; }, 300);
          }
        }
      });
    }

    // Inject styles
    const style = document.createElement('style');
    style.textContent = `
      .project-filters { margin-bottom: 1.5rem; }
      .filter-btn {
        transition: all 0.2s ease !important;
      }
      .filter-btn.active {
        opacity: 1 !important;
        font-weight: 600;
        box-shadow: 0 1px 6px rgba(0,0,0,0.18);
      }
      .grid-item {
        transition: opacity 0.3s ease;
      }
    `;
    document.head.appendChild(style);
  });
})();
