# Executive Director Professional Portfolio

A modern, responsive professional portfolio website designed for executive-level professionals.

## Features

### 🎨 Professional Design
- Clean, modern interface with professional color scheme
- Responsive design that works on all devices
- Beautiful animations and smooth scrolling
- Professional typography using Inter font

### 📱 Responsive Layout
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Optimized viewing experience across all screen sizes
- Touch-friendly interface elements

### 📄 Key Sections
- **Hero Section**: Professional introduction with social links
- **About Me**: Personal introduction and core competencies
- **Experience**: Timeline view of professional history
- **Resume**: Integrated PDF viewer with download option
- **Contact**: Contact form and professional contact information

### 🔧 Technical Features
- Smooth scrolling navigation
- Active section highlighting
- Form validation and submission handling
- PDF resume viewer with fallback
- Scroll-based animations
- Performance optimized with debounced scroll events
- Accessibility features (keyboard navigation, skip links)

### 🎯 Social Media Integration
- LinkedIn profile link
- Twitter profile link
- Instagram profile link
- Professional email contact
- Easy-to-update social media links

## Setup Instructions

1. **Clone or Download**: Get the website files to your local directory
2. **Customize Content**: Update the content in `index.html` with your personal information
3. **Add Resume**: Replace `resume.pdf` with your actual resume file
4. **Update Social Links**: Modify the social media links in the HTML
5. **Deploy**: Upload to your web hosting service or GitHub Pages

## Customization Guide

### Personal Information
Update the following sections in `index.html`:
- Name and title in the hero section
- About me content
- Professional experience timeline
- Contact information
- Social media links

### Colors and Styling
The color scheme can be customized by modifying the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;     /* Main brand color */
    --accent-color: #f59e0b;      /* Accent color */
    --text-dark: #1e293b;        /* Dark text */
    --text-light: #64748b;       /* Light text */
}
```

### Resume Integration
1. Save your resume as `resume.pdf` in the root directory
2. The website will automatically display it in the resume section
3. Visitors can view the PDF inline or download it

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure
```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── resume.pdf          # Your resume (to be added)
└── README.md          # This file
```

## Performance Features
- Optimized images and assets
- Debounced scroll events
- Efficient CSS animations
- Minimal external dependencies

## Accessibility Features
- Keyboard navigation support
- Screen reader friendly
- High contrast color scheme
- Focus management
- Skip to content link

## Deployment Options

### GitHub Pages
1. Create a GitHub repository named `yourusername.github.io`
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://yourusername.github.io`

### Other Hosting Services
- Netlify: Drag and drop deployment
- Vercel: Connect GitHub repository
- Traditional web hosting: Upload via FTP

## Professional Tips
- Use a professional headshot in place of the placeholder
- Keep experience descriptions concise but impactful
- Update social media links to your actual profiles
- Ensure your resume PDF is current and well-formatted
- Test the website on multiple devices before deployment

## Support
For technical support or customization help, refer to the code comments or standard web development resources.

---

**Note**: This template is designed for professional use and follows modern web development best practices. All code is clean, commented, and follows accessibility guidelines.
