document.addEventListener('DOMContentLoaded', () => {
    const projectTitleElement = document.getElementById('project-title');
    const projectImageElement = document.getElementById('project-image');
    const projectExtendedDescriptionElement = document.getElementById('project-extended-description');
    const projectTechStackElement = document.getElementById('project-tech-stack');
    const projectTechnicalComplexityElement = document.getElementById('project-technical-complexity');
    const projectValueCreatedElement = document.getElementById('project-value-created');
    const projectLinksContainerElement = document.getElementById('project-links-container');
    const projectDetailContentElement = document.getElementById('project-detail-content');

    // Function to safely set text content
    const setText = (element, text) => {
        if (element) {
            element.textContent = text || 'N/A';
        }
    };

    // Function to safely set image source and alt text
    const setImage = (element, src, alt) => {
        if (element) {
            if (src) {
                element.src = src;
                element.alt = alt || 'Project Image';
                element.style.display = ''; // Show image
            } else {
                element.style.display = 'none'; // Hide if no image src
            }
        }
    };

    // Function to populate list items (e.g., for tech stack)
    const populateList = (listElement, items, itemClass = 'list-inline-item', badgeClass = 'badge bg-secondary') => {
        if (listElement && items && Array.isArray(items)) {
            listElement.innerHTML = ''; // Clear existing
            items.forEach(itemText => {
                const listItem = document.createElement('li');
                listItem.className = itemClass;
                const badge = document.createElement('span');
                badge.className = badgeClass;
                badge.textContent = itemText;
                listItem.appendChild(badge);
                listElement.appendChild(listItem);
            });
        } else if (listElement) {
            listElement.innerHTML = '<li>N/A</li>';
        }
    };

    // Function to create and append links
    const populateLinks = (container, liveLink, sourceLink) => {
        if (!container) return;
        container.innerHTML = ''; // Clear existing

        if (liveLink) {
            const liveDemoButton = document.createElement('a');
            liveDemoButton.href = liveLink;
            liveDemoButton.className = 'btn btn-primary me-2 mb-2';
            liveDemoButton.target = '_blank';
            liveDemoButton.rel = 'noopener noreferrer';
            liveDemoButton.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Demo';
            container.appendChild(liveDemoButton);
        }

        if (sourceLink) {
            const sourceCodeButton = document.createElement('a');
            sourceCodeButton.href = sourceLink;
            sourceCodeButton.className = 'btn btn-secondary mb-2';
            sourceCodeButton.target = '_blank';
            sourceCodeButton.rel = 'noopener noreferrer';
            sourceCodeButton.innerHTML = '<i class="fab fa-github"></i> Source Code';
            container.appendChild(sourceCodeButton);
        }

        if (!liveLink && !sourceLink) {
            container.textContent = 'No project links available.';
        }
    };


    async function loadProjectDetails() {
        const params = new URLSearchParams(window.location.search);
        const projectId = params.get('id');

        if (!projectId) {
            if(projectDetailContentElement) projectDetailContentElement.innerHTML = '<p class="text-danger text-center">No project ID provided in the URL.</p>';
            if(projectTitleElement) projectTitleElement.textContent = 'Error';
            return;
        }

        const projectJsonPath = `projects_data/${projectId}.json`;

        try {
            const response = await fetch(projectJsonPath);
            if (!response.ok) {
                throw new Error(`Failed to load project data for ${projectId}: ${response.statusText}`);
            }
            const projectData = await response.json();

            // Populate the page
            if(projectTitleElement) projectTitleElement.textContent = projectData.title || 'Project Details';
            document.title = `${projectData.title || 'Project'} | Maxime Coursey`; // Update page title

            setImage(projectImageElement, projectData.image, projectData.title);
            setText(projectExtendedDescriptionElement, projectData.extendedDescription);
            populateList(projectTechStackElement, projectData.techStack);
            setText(projectTechnicalComplexityElement, projectData.technicalComplexityNotes);
            setText(projectValueCreatedElement, projectData.valueCreated);
            populateLinks(projectLinksContainerElement, projectData.liveDemoLink, projectData.sourceCodeLink);

        } catch (error) {
            console.error('Failed to load project details:', error);
            if(projectDetailContentElement) projectDetailContentElement.innerHTML = `<p class="text-danger text-center">Could not load details for project '${projectId}'. Please check the project ID or try again later.</p>`;
            if(projectTitleElement) projectTitleElement.textContent = 'Error Loading Project';
        }
    }

    loadProjectDetails();
});
