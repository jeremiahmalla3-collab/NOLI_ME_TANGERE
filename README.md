# Noli Me Tangere - Educational Platform

A vintage-styled educational website dedicated to José Rizal's classic novel *Noli Me Tangere*. This platform allows teachers to create custom learning links and provides students with comprehensive resources for each chapter.

## Features

### 🎓 User Roles
- **Teachers**: Can create and manage custom links for each chapter
- **Students**: Can access chapters and educational resources

### 📚 Chapter Resources
Each chapter includes:
- **Summaries**: Detailed chapter summaries
- **Images**: Illustrations and artwork related to each chapter
- **Audio**: Chapter narrations and audio guides
- **Videos**: Environment, characters, and author information
- **PowerPoints**: Educational presentations
- **Assessments**: Chapter quizzes and tests

### 🔗 Link Maker (Teacher Feature)
Teachers can generate custom links for chapter resources:
- Create links for summaries, images, audio, videos, PPT, and assessments
- Automatic link generation
- Copy and export functionality

### 🎨 Design
- **Vintage/Old Style**: Classic aesthetic with serif fonts
- **Serif Font**: Playfair Display for headings, Crimson Text for body
- **Color Scheme**: Brown, tan, and cream tones
- **Responsive**: Works on desktop and mobile devices

## Project Structure

```
noli-me-tangere/
├── index.html              # Main landing page
├── assets/
│   ├── css/
│   │   └── style.css      # Vintage styling
│   ├── js/
│   │   └── script.js      # Authentication and link generation
│   ├── images/            # Chapter images
│   ├── audio/             # Chapter audio files
│   └── videos/            # Chapter videos
├── chapters/
│   ├── chapter-1.html
│   ├── chapter-2.html
│   └── ...
└── README.md
```

## Getting Started

### Installation
1. Clone this repository
2. Open `index.html` in your web browser
3. No server setup required for basic functionality

### Usage

#### For Students
1. Click "Register" and select "Student" role
2. Browse chapters in the "Chapters" section
3. Click on any chapter card to view details
4. Access summaries, images, audio, videos, and assessments

#### For Teachers
1. Click "Register" and select "Teacher" role
2. Enter your school name
3. Navigate to the "Link Maker" section
4. Select a chapter and resource type
5. Provide the resource URL
6. Click "Generate Link"
7. Copy or export generated links

## Features in Detail

### Authentication System
- Local registration and login
- Two user roles: Teacher and Student
- Session management with localStorage

### Link Generation
- Unique links for each resource
- Multiple content types supported
- Easy copy-to-clipboard functionality
- Export links to JSON format

### Chapter Content
- 14 chapters of Noli Me Tangere
- Customizable resources per chapter
- Support for multimedia content

## Customization

### Adding Your Own Resources
1. Prepare your images, audio, and video files
2. Place them in the respective folders (`assets/images/`, `assets/audio/`, `assets/videos/`)
3. Use the Link Maker to create links to these resources

### Editing Links
Teachers can edit generated links by:
1. Accessing the teacher dashboard
2. Viewing all generated links
3. Modifying resource URLs as needed

## Supported Content Types
- **Summary**: Text descriptions and plot summaries
- **Image**: Chapter illustrations and artwork
- **Audio**: Narrations and audio guides
- **Video**: Environment descriptions, character introductions, author information
- **PowerPoint**: Educational presentations
- **Assessment**: Quizzes and tests

## Technologies Used
- HTML5
- CSS3 (with Vintage/Serif styling)
- Vanilla JavaScript
- Google Fonts (Playfair Display, Crimson Text)
- LocalStorage for session management

## Browser Compatibility
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Future Enhancements
- Backend database for permanent storage
- User authentication system
- Class management for teachers
- Student progress tracking
- Real-time collaboration features
- Mobile app version

## License
Educational purposes only. Based on José Rizal's Noli Me Tangere.

## Contributors
Created by students as an educational project

---

*Noli Me Tangere* - "Touch Me Not" in Latin, refers to the untouchable aspects of colonial society that Rizal critiqued in his novel.
