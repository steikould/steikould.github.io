const ChatPortfolioModule = {
    // Configuration for DOM elements
    config: {
        chatInputId: 'chat-input',
        chatSubmitButtonId: 'chat-submit-button',
        chatDisplayId: 'chat-display',
        skillsChartCanvasId: 'skillsChartCanvas',
        githubGraphId: 'github-graph',
    },

    // Store DOM elements
    elements: {
        chatInput: null,
        chatSubmitButton: null,
        chatDisplay: null,
        skillsChartCanvas: null,
        githubGraph: null,
    },

    // Chart instance
    skillsChartInstance: null,

    // Initialization method
    init: function() {
        this.elements.chatInput = document.getElementById(this.config.chatInputId);
        this.elements.chatSubmitButton = document.getElementById(this.config.chatSubmitButtonId);
        this.elements.chatDisplay = document.getElementById(this.config.chatDisplayId);
        this.elements.skillsChartCanvas = document.getElementById(this.config.skillsChartCanvasId);
        this.elements.githubGraph = document.getElementById(this.config.githubGraphId);

        if (!this.elements.chatInput || !this.elements.chatSubmitButton || !this.elements.chatDisplay) {
            console.error("Chat module essential elements not found! Aborting initialization.");
            return;
        }

        this.elements.chatSubmitButton.addEventListener('click', () => this.handleChatSubmit());
        this.elements.chatInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.handleChatSubmit();
            }
        });

        setTimeout(() => {
            this.addMessageToDisplay("Welcome! I'm here to help you learn about Maxime. Ask me about his experience, projects, skills, or anything else.", 'bot');
        }, 1000);

        console.log("ChatPortfolioModule initialized.");
    },

    addMessageToDisplay: function(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender === 'user' ? 'user-message' : 'bot-message');
        if (sender === 'bot') {
            messageElement.innerHTML = message;
        } else {
            messageElement.textContent = message;
        }
        if (this.elements.chatDisplay) {
            this.elements.chatDisplay.appendChild(messageElement);
            this.elements.chatDisplay.scrollTop = this.elements.chatDisplay.scrollHeight;
        } else {
            console.error("Chat display element not found in addMessageToDisplay");
        }
    },

    handleChatSubmit: function() {
        const userMessage = this.elements.chatInput.value.trim();
        if (userMessage) {
            this.addMessageToDisplay(userMessage, 'user');
            this.elements.chatInput.value = '';
            this.processUserMessage(userMessage.toLowerCase());
        }
    },

    // --- Data Fetching Helper Methods ---
    _fetchAboutInfo: function() {
        const aboutMeElement = document.querySelector('[data-ai-info="about-me"]');
        return aboutMeElement ? aboutMeElement.textContent.trim() : null;
    },

    _fetchExperienceInfo: function() {
        const experiences = Array.from(document.querySelectorAll('[data-ai-info="experience"]'));
        if (experiences.length === 0) return null;

        let experienceText = "Here's some information about Maxime's work experience:\n";
        experiences.forEach(exp => {
            const title = exp.querySelector('[data-ai-experience-title]')?.textContent || 'N/A';
            const company = exp.querySelector('[data-ai-experience-company]')?.textContent || 'N/A';
            const duration = exp.querySelector('[data-ai-experience-duration]')?.textContent || 'N/A';
            const description = exp.querySelector('[data-ai-experience-description]')?.textContent || 'N/A';
            experienceText += `\n- ${title} at ${company} (${duration}): ${description.trim()}\n`;
        });
        return experienceText;
    },

    _fetchProjectsInfo: function() { // Specifically for "Latest Projects"
        const projects = Array.from(document.querySelectorAll('[data-ai-info="project"]'));
        if (projects.length === 0) return null;

        let projectText = "Here are some of Maxime's latest projects:\n";
        projects.forEach(proj => {
            const title = proj.querySelector('[data-ai-project-title]')?.textContent || 'N/A';
            const description = proj.querySelector('[data-ai-project-description]')?.textContent || 'N/A';
            projectText += `\n- ${title.trim()}: ${description.trim()}\n`;
        });
        return projectText;
    },

    _fetchNotableWorkInfo: function() {
        const notableWorks = Array.from(document.querySelectorAll('[data-ai-info="notable-work"]'));
        if (notableWorks.length === 0) return null;

        let notableText = "Here's some of Maxime's notable work/articles:\n";
        notableWorks.forEach(work => {
            const title = work.querySelector('[data-ai-project-title]')?.textContent || 'N/A'; // Re-using project-title for consistency
            const description = work.querySelector('[data-ai-project-description]')?.textContent || 'N/A'; // Re-using project-description
            notableText += `\n- ${title.trim()}: ${description.trim()}\n`;
        });
        return notableText;
    },

    _fetchSkillsInfo: function() {
        const skillsIntro = document.querySelector('[data-ai-info="skills-intro"]')?.textContent;
        const skills = Array.from(document.querySelectorAll('[data-ai-info="skill"]'));
        if (skills.length === 0 && !skillsIntro) return null;

        let skillsText = skillsIntro ? skillsIntro.trim() + "\n\nHere are some of Maxime's skills:\n" : "Here are some of Maxime's skills:\n";
        if (skills.length > 0) {
            skills.forEach(skill => {
                const nameElement = skill.querySelector('[data-ai-skill-name]');
                const skillName = nameElement ? nameElement.firstChild.textContent.trim() : 'N/A';
                const levelElement = skill.querySelector('[data-ai-skill-level]');
                const skillLevel = levelElement ? levelElement.textContent.trim() : 'N/A';
                skillsText += `\n- ${skillName} (${skillLevel})`;
            });
            skillsText += "\n\nPS: You can also ask me to 'visualize skills' for a chart view!";
        } else if (!skillsIntro) { // No intro and no skills
            return null;
        }
        return skillsText;
    },

    _fetchEducationInfo: function() {
        const educationItems = Array.from(document.querySelectorAll('[data-ai-info="education"]'));
        if (educationItems.length === 0) return null;

        let educationText = "Here's Maxime's educational background:\n";
        educationItems.forEach(edu => {
            const degree = edu.querySelector('[data-ai-education-degree]')?.textContent || 'N/A';
            const university = edu.querySelector('[data-ai-education-university]')?.textContent || 'N/A';
            educationText += `\n- ${degree.trim()} from ${university.trim()}`;
        });
        return educationText;
    },

    _fetchContactInfo: function() {
        const contactList = document.querySelector('[data-ai-info="contact"]');
        if (!contactList) return null;

        let contactText = "Here's how to contact Maxime or find more information:\n";
        const location = contactList.querySelector('[data-ai-contact-location]')?.textContent || '';
        const email = contactList.querySelector('[data-ai-contact-email] a')?.textContent || '';
        const website = contactList.querySelector('[data-ai-contact-website] a')?.href || '';

        let hasContent = false;
        if (location) {
             contactText += `\n- Location: ${location.replace('Location:', '').trim()}`;
             hasContent = true;
        }
        if (email) {
            contactText += `\n- Email: ${email}`;
            hasContent = true;
        }
        if (website) {
            contactText += `\n- Website: ${website}`;
            hasContent = true;
        }
        return hasContent ? contactText : null;
    },

    processUserMessage: function(message) {
        let botResponse = "Sorry, I'm still learning. I didn't understand that. You can ask about experience, projects, skills, education, GitHub activity, resume, or contact information.";

        if (message.includes('hello') || message.includes('hi')) {
            botResponse = "Hello there! How can I help you learn about Maxime's experience today?";
        } else if (message.includes('about yourself') || message.includes('about you') || message.includes('who are you')) {
            const aboutInfo = this._fetchAboutInfo();
            botResponse = aboutInfo || "I couldn't find the 'About Me' information.";
        } else if (message.includes('experience') || message.includes('work experience')) { // more specific for work experience
            const expInfo = this._fetchExperienceInfo();
            botResponse = expInfo || "I couldn't find any work experience information.";
        } else if (message.includes('notable work') || message.includes('articles')) {
            const notableInfo = this._fetchNotableWorkInfo();
            botResponse = notableInfo || "I couldn't find any notable work or articles.";
        } else if (message.includes('project')) { // General projects, typically "Latest Projects"
            const projInfo = this._fetchProjectsInfo();
            botResponse = projInfo || "I couldn't find any project information.";
        } else if (message.includes('chart skills') || message.includes('visualize skills') || message.includes('show skills chart')) {
            botResponse = "Okay, I'm generating a chart of Maxime's skills for you...";
            setTimeout(() => { this.renderSkillsChart(); }, 500);
        } else if (message.includes('skill')) {
            const skillsData = this._fetchSkillsInfo();
            botResponse = skillsData || "I couldn't find any skills information.";
        } else if (message.includes('education')) {
            const eduInfo = this._fetchEducationInfo();
            botResponse = eduInfo || "I couldn't find any education information.";
        } else if (message.includes('github') || message.includes('contributions') || message.includes('activity')) {
            botResponse = "You can see Maxime's GitHub activity chart further down the page. I'll scroll you to it now!";
            if (this.elements.githubGraph) {
                setTimeout(() => { this.elements.githubGraph.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 600);
            } else {
                botResponse = "I found the GitHub activity information, but I couldn't automatically scroll you to it.";
            }
        } else if (message.includes('resume') || message.includes('cv') || message.includes('curriculum vitae')) {
            botResponse = "You can download Maxime's resume: <a href='MaxCourseyJuly2024.pdf' target='_blank' rel='noopener noreferrer'>MaxCourseyJuly2024.pdf</a>";
        } else if (message.includes('contact') || message.includes('email') || message.includes('location')) {
            const contactDetails = this._fetchContactInfo();
            botResponse = contactDetails || "I couldn't find contact information.";
        }

        setTimeout(() => { this.addMessageToDisplay(botResponse, 'bot'); }, 500);
    },

    renderSkillsChart: function() {
        if (!this.elements.skillsChartCanvas) {
            console.error("Skills chart canvas not found!");
            this.addMessageToDisplay("I tried to show the skills chart, but couldn't find where to draw it.", 'bot');
            return;
        }
        const ctx = this.elements.skillsChartCanvas.getContext('2d');
        const skillElements = Array.from(document.querySelectorAll('[data-ai-info="skill"]'));

        const skillNamesArray = [];
        const skillValuesArray = [];

        skillElements.forEach(skillEl => {
            const nameElement = skillEl.querySelector('[data-ai-skill-name]');
            const skillName = nameElement ? nameElement.firstChild.textContent.trim() : 'N/A';
            const progressBar = skillEl.querySelector('.progress-bar');
            const skillValue = progressBar ? parseInt(progressBar.getAttribute('aria-valuenow')) : 0;
            skillNamesArray.push(skillName);
            skillValuesArray.push(skillValue);
        });

        if (this.skillsChartInstance instanceof Chart) {
            this.skillsChartInstance.destroy();
        }

        this.skillsChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: skillNamesArray,
                datasets: [{
                    label: 'Skill Proficiency (%)',
                    data: skillValuesArray,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)','rgba(54, 162, 235, 0.7)','rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)','rgba(153, 102, 255, 0.7)','rgba(255, 159, 64, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: { y: { beginAtZero: true, max: 100 } },
                plugins: { legend: { display: false }, title: { display: true, text: 'Skill Proficiency Levels' } }
            }
        });

        if (this.elements.skillsChartCanvas.parentElement) {
            this.elements.skillsChartCanvas.parentElement.style.display = 'block';
            this.elements.skillsChartCanvas.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ChatPortfolioModule.init();
});
