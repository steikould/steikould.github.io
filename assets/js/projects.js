document.addEventListener('DOMContentLoaded', () => {
    const projectGridContainer = document.getElementById('project-grid-container');
    const manifestPath = 'projects_data/project_manifest.json';

    if (!projectGridContainer) {
        console.error('Project grid container not found!');
        return;
    }

    async function loadProjects() {
        try {
            const manifestResponse = await fetch(manifestPath);
            if (!manifestResponse.ok) {
                throw new Error(`Failed to load project manifest: ${manifestResponse.statusText}`);
            }
            const projectFiles = await manifestResponse.json();

            if (!Array.isArray(projectFiles) || projectFiles.length === 0) {
                projectGridContainer.innerHTML = '<p class="col-12 text-center">No projects found in manifest or manifest is empty.</p>';
                return;
            }

            // Clear any placeholder content
            projectGridContainer.innerHTML = '';

            for (const projectFile of projectFiles) {
                try {
                    const projectResponse = await fetch(`projects_data/${projectFile}`);
                    if (!projectResponse.ok) {
                        console.warn(`Failed to load project data for ${projectFile}: ${projectResponse.statusText}`);
                        // Optionally, display a placeholder for this failed project
                        displayProjectError(projectFile);
                        continue; // Skip to the next project
                    }
                    const projectData = await projectResponse.json();
                    displayProject(projectData);
                } catch (error) {
                    console.error(`Error fetching or parsing project ${projectFile}:`, error);
                    displayProjectError(projectFile);
                }
            }
        } catch (error) {
            console.error('Failed to load project manifest or process projects:', error);
            projectGridContainer.innerHTML = '<p class="col-12 text-center">Could not load project information. Please try again later.</p>';
        }
    }

    function displayProject(projectData) {
        if (!projectData || !projectData.id || !projectData.title || !projectData.summaryDescription) {
            console.warn('Skipping project due to missing essential data:', projectData);
            return;
        }

        const projectWrapper = document.createElement('div');
        // Using Bootstrap's column classes for responsiveness
        projectWrapper.className = 'col-md-6 col-lg-4 mb-4 d-flex align-items-stretch';
        projectWrapper.id = projectData.id; // Set the ID for direct linking

        const card = document.createElement('div');
        card.className = 'card project-card h-100'; // h-100 to make cards in a row equal height

        const detailUrl = `project_detail.html?id=${projectData.id}`;

        let imageHtml = '';
        if (projectData.image) {
            imageHtml = `<img src="${projectData.image}" class="card-img-top" alt="${projectData.title}">`;
        } else {
            // Placeholder image or style if no image is provided
            imageHtml = '<div class="card-img-top project-image-placeholder d-flex align-items-center justify-content-center bg-light text-muted" style="height: 200px;"><span>No Image</span></div>';
        }

        card.innerHTML = `
            ${imageHtml}
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${projectData.title}</h5>
                <p class="card-text flex-grow-1">${projectData.summaryDescription}</p>
                <a href="${detailUrl}" class="btn btn-primary mt-auto">View Details</a>
            </div>
        `;

        // Make the entire card clickable (optional, as there's already a button)
        // card.addEventListener('click', () => {
        //     window.location.href = detailUrl;
        // });

        projectWrapper.appendChild(card);
        projectGridContainer.appendChild(projectWrapper);
    }

    function displayProjectError(projectFile) {
        const errorWrapper = document.createElement('div');
        errorWrapper.className = 'col-md-6 col-lg-4 mb-4';
        errorWrapper.innerHTML = `
            <div class="card project-card h-100 border-danger">
                <div class="card-body text-danger">
                    <h5 class="card-title">Error Loading Project</h5>
                    <p class="card-text">Could not load details for ${projectFile.replace('.json','')}.</p>
                </div>
            </div>
        `;
        projectGridContainer.appendChild(errorWrapper);
    }

    loadProjects();
});
