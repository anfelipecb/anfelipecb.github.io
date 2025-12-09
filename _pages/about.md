---
layout: about
title: about
permalink: /
subtitle: 

profile:
  align: left
  image: prof_pic.jpeg
  image_circular: false  # crops the image to make it circular
  more_info: #>
    #<p style="font-style: italic; font-size: smaller;">Bogotá, Colombia</p>

projects: true  # includes a list of projects
news: true  # includes a list of news items
latest_posts: false  # includes a list of the newest posts
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page
---

<style>
  .profile-section {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    margin-bottom: 2rem;
  }
  
  .profile-image-container {
    flex-shrink: 0;
    width: 280px;
  }
  
  .profile-image-container img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .profile-content {
    flex: 1;
    text-align: justify;
  }
  
  .expertise-section {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .expertise-tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
    width: 100%;
    justify-content: center;
  }
  
  .expertise-tag {
    flex: 1;
    min-width: 0;
    padding: 0.4em 0.6em;
    border-radius: 6px;
    font-weight: 500;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    border: none;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .expertise-tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    opacity: 0.95;
  }
  
  .expertise-tag.active {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
  
  .expertise-description {
    margin-top: 1rem;
    padding: 1rem;
    background-color: var(--global-code-bg-color);
    border-radius: 6px;
    border-left: 3px solid var(--global-theme-color);
    display: none;
    animation: fadeIn 0.3s ease;
  }
  
  .expertise-description.show {
    display: block;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  html[data-theme='dark'] .expertise-tag {
    box-shadow: 0 2px 8px rgba(255, 142, 142, 0.3) !important;
  }
  
  html[data-theme='dark'] .expertise-tag:hover,
  html[data-theme='dark'] .expertise-tag.active {
    box-shadow: 0 4px 12px rgba(255, 142, 142, 0.5) !important;
  }
  
  html[data-theme='dark'] .expertise-description {
    background-color: var(--global-code-bg-color);
    border-left-color: var(--global-theme-color);
  }
  
  @media (max-width: 768px) {
    .profile-section {
      flex-direction: column;
      align-items: center;
    }
    .profile-image-container {
      width: 200px;
    }
    .profile-content {
      text-align: left;
    }
    .expertise-tag {
      flex: 1 1 calc(50% - 0.375rem);
      min-width: 100px;
      font-size: 0.8rem;
      padding: 0.35em 0.5em;
    }
  }
</style>

<div class="profile-section">
  <div class="profile-image-container">
    {%- assign profile_image_path = page.profile.image | prepend: 'assets/img/' -%}
    {% include figure.html
      path=profile_image_path
      class="img-fluid z-depth-1 rounded"
      alt=page.profile.image
      cache_bust=true %}
  </div>
  <div class="profile-content">
    <p style="font-style: italic; font-size: smaller;"> 
      In: Chicago, Illinois | 
      <a href="https://github.com/anfelipecb" style="color: inherit; text-decoration: none; font-style: normal; font-weight: bold;">
        <i class="fab fa-github"></i> GitHub
      </a>
    </p>
    <p><strong>Data Scientist & ML Engineer</strong> | <em>Machine Learning for Social Impact</em></p>
    <p>Data scientist and economist with 8+ years of experience building ML models and data pipelines for policy impact. Currently pursuing an MS in Computational Analysis & Public Policy at the <a href="https://capp.uchicago.edu/">University of Chicago</a>, where I serve as a Teaching Assistant for Computer Science with Applications and Data Science Clinic. I specialize in machine learning, spatial analytics, and large-scale data processing using <code>Python, SQL, PyTorch, AWS, and Google Cloud</code>. My work focuses on developing predictive models and scalable systems that inform evidence-based policy decisions in criminal justice, education, and climate change.</p>
    
    <div class="expertise-section">
      <h3 style="margin-bottom: 0.5rem; font-size: 1.1rem;">Areas of Expertise</h3>
      <div class="expertise-tags-container" id="expertise-tags"></div>
      <div class="expertise-description" id="expertise-description"></div>
    </div>
  </div>
</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
  const expertise = [
    {
      title: "Machine Learning & AI",
      description: "Building predictive models using PyTorch, developing ML systems for recidivism risk prediction, and deploying AI solutions for policy applications."
    },
    {
      title: "Spatial Data Science",
      description: "Processing high-resolution satellite imagery, building geospatial data pipelines, and applying GIS/remote sensing to analyze climate impacts and urban development."
    },
    {
      title: "Scalable Data Engineering",
      description: "Designing end-to-end data pipelines with Python, SQL, AWS, and Google Cloud to process 250+ GB datasets and extract insights from unstructured data using LLMs."
    },
    {
      title: "Public Policy",
      description: "Developing evidence-based solutions for criminal justice, education, and climate policy through statistical modeling, causal inference, and impact evaluation."
    },
    {
      title: "Teaching & Mentorship",
      description: "Teaching Assistant at University of Chicago for Computer Science with Applications and Data Science Clinic. Previously instructor of Spatial Analytics in Python & ArcGIS at Universidad de los Andes."
    }
  ];

  // Color palette: beige, sage green, coral, light blue, salmon
  const colors = ['#E8DCC8', '#B8C9B8', '#E88B8F', '#B8D4D8', '#FFA07A'];
  
  const container = d3.select('#expertise-tags');
  const descriptionDiv = d3.select('#expertise-description');
  let activeTag = null;
  
  const tags = container.selectAll('.expertise-tag')
    .data(expertise)
    .enter()
    .append('div')
    .attr('class', 'expertise-tag')
    .style('background-color', (d, i) => colors[i % colors.length])
    .style('color', (d, i) => {
      // Use dark text for light backgrounds
      const bgColor = colors[i % colors.length];
      if (bgColor === '#E8DCC8' || bgColor === '#B8C9B8' || bgColor === '#B8D4D8') {
        return '#2C3E50'; // Dark charcoal for light backgrounds
      }
      return '#fff'; // White for darker backgrounds
    })
    .text(d => d.title)
    .on('click', function(event, d) {
      // Remove active class from all tags
      tags.classed('active', false);
      
      // Toggle active state
      if (activeTag === d.title) {
        // If clicking the same tag, hide description
        activeTag = null;
        descriptionDiv.classed('show', false);
      } else {
        // Show new description
        activeTag = d.title;
        d3.select(this).classed('active', true);
        descriptionDiv
          .html(d.description)
          .classed('show', true);
      }
    });
</script>

You can find my updated CV [here](assets/pdf/Camacho_Andres_CV_2025_Winter.pdf)
