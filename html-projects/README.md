# HTML Projects Directory

This directory contains your HTML/CSS/JavaScript projects that will be displayed on your portfolio.

## 📁 Project Structure

Each project should be in its own folder with this structure:
```
html-projects/
├── project-name/
│   ├── index.html          # Main HTML file
│   ├── style.css           # CSS styles
│   ├── script.js           # JavaScript (optional)
│   ├── screenshot.png      # Project thumbnail (optional)
│   └── assets/             # Images, fonts, etc. (optional)
├── another-project/
│   ├── index.html
│   ├── style.css
│   └── ...
└── projects-config.json    # Configuration file
```

## 🚀 How to Add New Projects

### Method 1: Manual Addition (Recommended)
1. **Create a new folder** with your project name
2. **Add your HTML/CSS/JS files** 
3. **Update projects-config.json** with your project details
4. **Add via Admin Dashboard** using the live URL

### Method 2: Auto-Detection (Advanced)
The system can automatically detect HTML projects and add them to your portfolio.

## 📝 Project Configuration

Edit `projects-config.json` to configure how your projects appear:

```json
{
  "id": "my-project",
  "title": "My Awesome Project",
  "description": "Description of what this project does",
  "folder": "my-project",
  "tags": ["HTML", "CSS", "JavaScript"],
  "featured": true,
  "thumbnail": "screenshot.png",
  "liveUrl": "/html-projects/my-project/index.html"
}
```

## 🎯 Integration with Portfolio

Your HTML projects will be:
- **Served locally** during development
- **Displayed as project cards** on your main portfolio
- **Accessible via live preview** links
- **Categorized with tags** you specify

## 💡 Best Practices

1. **Keep projects organized** - one folder per project
2. **Use descriptive names** - avoid spaces, use hyphens
3. **Include screenshots** - helps with portfolio presentation
4. **Test responsiveness** - ensure projects work on all devices
5. **Optimize assets** - compress images and minify code

## 🔗 Accessing Projects

- **Development**: `http://localhost:3000/html-projects/project-name/`
- **Production**: Will be served from your deployed portfolio

## 📸 Adding Screenshots

To add project thumbnails:
1. Take a screenshot of your project
2. Save as `screenshot.png` in the project folder
3. Update the `thumbnail` field in projects-config.json
