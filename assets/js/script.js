// Chapters Data
const chaptersData = [
    { id: 1, title: "Chapter 1", subtitle: "Introductions" },
    { id: 2, title: "Chapter 2", subtitle: "At the Curate's House" },
    { id: 3, title: "Chapter 3", subtitle: "The Blessing of the Animals" },
    { id: 4, title: "Chapter 4", subtitle: "The Filibuster" },
    { id: 5, title: "Chapter 5", subtitle: "Filipinas" },
    { id: 6, title: "Chapter 6", subtitle: "Pillow Talk" },
    { id: 7, title: "Chapter 7", subtitle: "A Dinner Party" },
    { id: 8, title: "Chapter 8", subtitle: "Discussion" },
    { id: 9, title: "Chapter 9", subtitle: "The First Storm" },
    { id: 10, title: "Chapter 10", subtitle: "Before the Fiesta" },
    { id: 11, title: "Chapter 11", subtitle: "The Fiesta" },
    { id: 12, title: "Chapter 12", subtitle: "Disturbance" },
    { id: 13, title: "Chapter 13", subtitle: "The Outbreak" },
    { id: 14, title: "Chapter 14", subtitle: "The Deliverance" },
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadChapters();
    setupFormListeners();
    loadChaptersToLinkMaker();
});

// Load chapters into grid
function loadChapters() {
    const chaptersGrid = document.getElementById('chaptersGrid');
    chaptersGrid.innerHTML = '';
    
    chaptersData.forEach(chapter => {
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.innerHTML = `
            <h3>${chapter.title}</h3>
            <p>${chapter.subtitle}</p>
            <button class="btn btn-primary" onclick="viewChapter(${chapter.id})">View Chapter</button>
        `;
        chaptersGrid.appendChild(card);
    });
}

// View chapter details
function viewChapter(chapterId) {
    alert(`Opening Chapter ${chapterId}...`);
    // Will redirect to chapter detail page
}

// Modal functions
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Form setup
function setupFormListeners() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const registerRole = document.getElementById('registerRole');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    if (registerRole) {
        registerRole.addEventListener('change', toggleSchoolField);
    }
}

function toggleSchoolField() {
    const role = document.getElementById('registerRole').value;
    const schoolField = document.getElementById('schoolField');
    schoolField.style.display = role === 'teacher' ? 'block' : 'none';
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const role = document.getElementById('loginRole').value;

    console.log('Login attempt:', { email, role });
    alert(`Welcome back! Logging in as ${role}...`);
    
    // Store user session
    localStorage.setItem('userRole', role);
    localStorage.setItem('userEmail', email);

    if (role === 'teacher') {
        showTeacherInterface();
    }

    closeModal('loginModal');
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const role = document.getElementById('registerRole').value;

    console.log('Registration:', { name, email, role });
    alert(`Successfully registered as ${role}! Welcome, ${name}!`);

    localStorage.setItem('userName', name);
    localStorage.setItem('userRole', role);
    localStorage.setItem('userEmail', email);

    if (role === 'teacher') {
        showTeacherInterface();
    }

    closeModal('registerModal');
}

// Teacher Interface
function showTeacherInterface() {
    const linkMaker = document.getElementById('linkMaker');
    if (linkMaker) {
        linkMaker.style.display = 'block';
        linkMaker.scrollIntoView({ behavior: 'smooth' });
    }
}

// Load chapters to link maker
function loadChaptersToLinkMaker() {
    const chapterSelect = document.getElementById('chapterSelect');
    if (chapterSelect) {
        chaptersData.forEach(chapter => {
            const option = document.createElement('option');
            option.value = chapter.id;
            option.textContent = chapter.title;
            chapterSelect.appendChild(option);
        });
    }
}

// Generate Link
function generateLink() {
    const chapter = document.getElementById('chapterSelect').value;
    const linkName = document.getElementById('linkName').value;
    const linkType = document.getElementById('linkType').value;
    const linkUrl = document.getElementById('linkUrl').value;

    if (!chapter || !linkName || !linkUrl) {
        alert('Please fill in all fields');
        return;
    }

    // Generate unique link
    const timestamp = Date.now();
    const generatedLink = `noli-me-tangere.edu/link/${chapter}/${linkType}/${timestamp}`;

    const linkOutput = document.getElementById('linkOutput');
    linkOutput.value = generatedLink;

    document.getElementById('generatedLink').style.display = 'block';

    // Store link in localStorage
    const links = JSON.parse(localStorage.getItem('generatedLinks') || '[]');
    links.push({
        id: timestamp,
        chapter: chapter,
        name: linkName,
        type: linkType,
        url: linkUrl,
        generatedLink: generatedLink,
        createdAt: new Date().toLocaleString()
    });
    localStorage.setItem('generatedLinks', JSON.stringify(links));

    console.log('Link generated:', generatedLink);
}

// Copy Link
function copyLink() {
    const linkOutput = document.getElementById('linkOutput');
    linkOutput.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
}

// Check user role on page load
document.addEventListener('DOMContentLoaded', function() {
    const userRole = localStorage.getItem('userRole');
    if (userRole === 'teacher') {
        showTeacherInterface();
    }
});

// Logout function
function logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    location.reload();
}

// View all generated links (for teachers)
function viewGeneratedLinks() {
    const links = JSON.parse(localStorage.getItem('generatedLinks') || '[]');
    if (links.length === 0) {
        alert('No links generated yet');
        return;
    }

    let linksList = 'Generated Links:\n\n';
    links.forEach((link, index) => {
        linksList += `${index + 1}. ${link.name}\n`;
        linksList += `   Type: ${link.type}\n`;
        linksList += `   Link: ${link.generatedLink}\n`;
        linksList += `   Created: ${link.createdAt}\n\n`;
    });

    alert(linksList);
}

// Export generated links to JSON
function exportLinks() {
    const links = JSON.parse(localStorage.getItem('generatedLinks') || '[]');
    const dataStr = JSON.stringify(links, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'noli-me-tangere-links.json';
    link.click();
}
