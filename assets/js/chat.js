document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const chatSubmitButton = document.getElementById('chat-submit-button');
    const chatDisplay = document.getElementById('chat-display');

    // Function to add a message to the chat display
    function addMessageToDisplay(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender === 'user' ? 'user-message' : 'bot-message');
        if (sender === 'bot') {
            messageElement.innerHTML = message; // Use innerHTML for bot messages to render links
        } else {
            messageElement.textContent = message; // Use textContent for user messages for security
        }
        chatDisplay.appendChild(messageElement);
        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to the bottom
    }

    // Function to handle chat submission
    function handleChatSubmit() {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            addMessageToDisplay(userMessage, 'user');
            chatInput.value = ''; // Clear input
            processUserMessage(userMessage.toLowerCase());
        }
    }

    // Function to render skills chart
    function renderSkillsChart() {
        const skillElements = Array.from(document.querySelectorAll('[data-ai-info="skill"]'));
        const skillNamesArray = [];
        const skillValuesArray = [];

        skillElements.forEach(skillEl => {
            const nameElement = skillEl.querySelector('[data-ai-skill-name]');
            // Extract only the skill name, not the level label like "Expert" from the h3
            const skillName = nameElement ? nameElement.firstChild.textContent.trim() : 'N/A';

            const progressBar = skillEl.querySelector('.progress-bar');
            const skillValue = progressBar ? parseInt(progressBar.getAttribute('aria-valuenow')) : 0;

            skillNamesArray.push(skillName);
            skillValuesArray.push(skillValue);
        });

        const canvas = document.getElementById('skillsChartCanvas');
        if (!canvas) {
            console.error("Skills chart canvas not found!");
            addMessageToDisplay("Sorry, I couldn't find the area to display the skills chart.", 'bot');
            return;
        }
        const ctx = canvas.getContext('2d');

        if (window.mySkillsChart instanceof Chart) {
            window.mySkillsChart.destroy();
        }

        window.mySkillsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: skillNamesArray,
                datasets: [{
                    label: 'Skill Proficiency (%)',
                    data: skillValuesArray,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)',
                        'rgba(75, 192, 192, 0.7)',
                        'rgba(153, 102, 255, 0.7)',
                        'rgba(255, 159, 64, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Skill Proficiency Levels'
                    }
                }
            }
        });

        // Make chart container visible and scroll to it
        const chartContainer = canvas.parentElement;
        if (chartContainer) {
            chartContainer.style.display = 'block';
            chartContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }


    // Function to process user message and generate bot response
    function processUserMessage(message) {
        // Default response updated to include "resume"
        let botResponse = "Sorry, I'm still learning. I didn't understand that. You can ask about experience, projects, skills, education, GitHub activity, resume, or contact information.";

        if (message.includes('hello') || message.includes('hi')) {
            botResponse = "Hello there! How can I help you learn about Maxime's experience today?";
        } else if (message.includes('about yourself') || message.includes('about you') || message.includes('who are you')) {
            const aboutMeElement = document.querySelector('[data-ai-info="about-me"]');
            if (aboutMeElement) {
                botResponse = aboutMeElement.textContent.trim();
            } else {
                botResponse = "I couldn't find the 'About Me' information.";
            }
        } else if (message.includes('experience') || message.includes('work')) {
            const experiences = Array.from(document.querySelectorAll('[data-ai-info="experience"]'));
            if (experiences.length > 0) {
                botResponse = "Here's some information about Maxime's work experience:\n";
                experiences.forEach(exp => {
                    const title = exp.querySelector('[data-ai-experience-title]')?.textContent || 'N/A';
                    const company = exp.querySelector('[data-ai-experience-company]')?.textContent || 'N/A';
                    const duration = exp.querySelector('[data-ai-experience-duration]')?.textContent || 'N/A';
                    const description = exp.querySelector('[data-ai-experience-description]')?.textContent || 'N/A';
                    botResponse += `\n- ${title} at ${company} (${duration}): ${description}\n`;
                });
            } else {
                botResponse = "I couldn't find any work experience information.";
            }
        } else if (message.includes('project')) {
            const projects = Array.from(document.querySelectorAll('[data-ai-info="project"]'));
            if (projects.length > 0) {
                botResponse = "Here are some of Maxime's projects:\n";
                projects.forEach(proj => {
                    const title = proj.querySelector('[data-ai-project-title]')?.textContent || 'N/A';
                    const description = proj.querySelector('[data-ai-project-description]')?.textContent || 'N/A';
                    botResponse += `\n- ${title}: ${description}\n`;
                });
            } else {
                botResponse = "I couldn't find any project information.";
            }
        } else if (message.includes('chart skills') || message.includes('visualize skills') || message.includes('show skills chart')) {
            botResponse = "Okay, I'm generating a chart of Maxime's skills for you...";
            setTimeout(() => {
                renderSkillsChart();
            }, 500);
        } else if (message.includes('skill')) {
            const skillsIntro = document.querySelector('[data-ai-info="skills-intro"]')?.textContent;
            const skills = Array.from(document.querySelectorAll('[data-ai-info="skill"]'));
            if (skills.length > 0) {
                botResponse = skillsIntro ? skillsIntro + "\n\nHere are some of Maxime's skills:\n" : "Here are some of Maxime's skills:\n";
                skills.forEach(skill => {
                    const nameElement = skill.querySelector('[data-ai-skill-name]');
                    const skillName = nameElement ? nameElement.firstChild.textContent.trim() : 'N/A'; // Get only name
                    const levelElement = skill.querySelector('[data-ai-skill-level]');
                    const skillLevel = levelElement ? levelElement.textContent.trim() : 'N/A';
                    botResponse += `\n- ${skillName} (${skillLevel})`;
                });
                botResponse += "\n\nPS: You can also ask me to 'visualize skills' for a chart view!";
            } else {
                botResponse = "I couldn't find any skills information. You can ask me to 'visualize skills' if you'd like to see a chart based on available data.";
            }
        } else if (message.includes('education')) {
            const educationItems = Array.from(document.querySelectorAll('[data-ai-info="education"]'));
            if (educationItems.length > 0) {
                botResponse = "Here's Maxime's educational background:\n";
                educationItems.forEach(edu => {
                    const degree = edu.querySelector('[data-ai-education-degree]')?.textContent || 'N/A';
                    const university = edu.querySelector('[data-ai-education-university]')?.textContent || 'N/A';
                    botResponse += `\n- ${degree} from ${university}`;
                });
            } else {
                botResponse = "I couldn't find any education information.";
            }
        } else if (message.includes('github') || message.includes('contributions') || message.includes('activity')) {
            botResponse = "You can see Maxime's GitHub activity chart further down the page. I'll scroll you to it now!";
            const githubSection = document.getElementById('github-graph');
            if (githubSection) {
                setTimeout(() => {
                    githubSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 600);
            } else {
                botResponse = "I found the GitHub activity information, but I couldn't automatically scroll you to it. You can find it in the main content area.";
            }
        } else if (message.includes('resume') || message.includes('cv') || message.includes('curriculum vitae')) {
            botResponse = "You can download Maxime's resume: <a href='MaxCourseyJuly2024.pdf' target='_blank' rel='noopener noreferrer'>MaxCourseyJuly2024.pdf</a>";
        } else if (message.includes('contact') || message.includes('email') || message.includes('location')) {
            const contactList = document.querySelector('[data-ai-info="contact"]');
            if (contactList) {
                botResponse = "Here's how to contact Maxime or find more information:\n";
                const location = contactList.querySelector('[data-ai-contact-location]')?.textContent || '';
                const email = contactList.querySelector('[data-ai-contact-email] a')?.textContent || '';
                const website = contactList.querySelector('[data-ai-contact-website] a')?.href || '';
                if (location) botResponse += `\n- Location: ${location.replace('Location:', '').trim()}`;
                if (email) botResponse += `\n- Email: ${email}`;
                if (website) botResponse += `\n- Website: ${website}`;
            } else {
                botResponse = "I couldn't find contact information.";
            }
        }
        // Note: The initial 'botResponse' declaration already handles the default case if none of the 'if/else if' match.
        // The actual display of botResponse is handled by the setTimeout below.

        // Simulate a slight delay for bot response and display it
        setTimeout(() => {
            addMessageToDisplay(botResponse, 'bot');
        }, 500);
    }

    // Event listeners
    chatSubmitButton.addEventListener('click', handleChatSubmit);
    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleChatSubmit();
        }
    });

    // Initial greeting
    setTimeout(() => {
        addMessageToDisplay("Welcome! I'm here to help you learn about Maxime. Ask me about his experience, projects, skills, or anything else.", 'bot');
    }, 1000);
});
