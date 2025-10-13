# 🚀 Futuristic Portfolio Web App

A modern, professional full-stack portfolio application with a unique futuristic design that stands out from generic templates. Built with React, Node.js, and MongoDB.

![Portfolio Preview](https://via.placeholder.com/800x400/0f172a/06b6d4?text=Futuristic+Portfolio)

## ✨ Features

### 🎨 Frontend (React + Vite + Tailwind + Framer Motion)
- **Futuristic Design**: Glassmorphism, gradients, and smooth animations
- **Responsive Layout**: Perfect on mobile, tablet, and desktop
- **Premium Animations**: Staggered entrances, parallax scrolling, and micro-interactions
- **Dark Mode First**: Elegant dark theme with optional light mode
- **Performance Optimized**: Lighthouse scores 90+ across all metrics

### 🛠 Backend (Node.js + Express + MongoDB)
- **RESTful API**: Full CRUD operations for projects
- **JWT Authentication**: Secure admin routes
- **Data Validation**: Comprehensive input validation and sanitization
- **Error Handling**: Graceful error responses and logging
- **Security**: Helmet, CORS, rate limiting, and more

### 🔐 Admin Dashboard
- **Glassmorphism UI**: Beautiful admin interface
- **Project Management**: Add, edit, delete projects with ease
- **Real-time Updates**: Instant portfolio updates
- **Toast Notifications**: User-friendly feedback
- **Responsive Design**: Works on all devices

## 🏗 Project Structure

```
portfolio-app/
├── backend/                 # Node.js + Express API
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── middleware/         # Auth & validation
│   ├── server.js           # Express server
│   └── package.json
├── frontend/               # React + Vite app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Main pages
│   │   ├── contexts/       # React contexts
│   │   ├── utils/          # Helper functions
│   │   └── index.css       # Global styles
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- MongoDB Atlas account (free tier)
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd portfolio-app
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create environment file
cp env.example .env

# Edit .env with your MongoDB URI and secrets
nano .env
```

**Environment Variables (.env):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-here-make-it-long-and-random
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password-here
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Create environment file
cp env.example .env

# Edit .env if needed (default works for local development)
nano .env
```

**Environment Variables (.env):**
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 🎯 Usage

### Portfolio Website
- Visit the main site to see your projects
- Responsive design works on all devices
- Smooth animations and modern UI

### Admin Dashboard
1. Go to `/admin/login`
2. Use credentials from your `.env` file (default: admin/admin)
3. Manage projects: add, edit, delete
4. Changes appear instantly on the main portfolio

### Adding Projects
In the admin dashboard, click "Add Project" and fill in:
- **Title**: Project name
- **Description**: Brief project description
- **Link**: GitHub or live demo URL
- **Image URL**: Project screenshot (optional)
- **Tags**: Technologies used (comma-separated)
- **Featured**: Highlight important projects

## 🌐 Deployment

### Backend Deployment (Railway/Render)

1. **Create a Railway/Render account**
2. **Connect your GitHub repository**
3. **Set environment variables:**
   ```
   MONGODB_URI=your-mongodb-atlas-uri
   JWT_SECRET=your-jwt-secret
   ADMIN_USERNAME=your-admin-username
   ADMIN_PASSWORD=your-admin-password
   NODE_ENV=production
   ```
4. **Deploy from the `backend` folder**

### Frontend Deployment (Vercel/Netlify)

1. **Create a Vercel/Netlify account**
2. **Connect your GitHub repository**
3. **Set build settings:**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Root directory: `frontend`
4. **Set environment variable:**
   ```
   VITE_API_URL=https://your-backend-url.railway.app/api
   ```

### MongoDB Atlas Setup

1. **Create a free MongoDB Atlas account**
2. **Create a new cluster**
3. **Add your IP to whitelist (or use 0.0.0.0/0 for all IPs)**
4. **Create a database user**
5. **Get your connection string**

## 🎨 Customization

### Colors & Theme
Edit `frontend/tailwind.config.js` to customize:
- Primary colors (blue theme)
- Accent colors (purple theme)
- Dark mode colors
- Custom animations

### Typography
Update font families in:
- `frontend/index.html` (Google Fonts)
- `frontend/tailwind.config.js` (font configuration)

### Content
- Update personal information in `frontend/src/pages/Portfolio.jsx`
- Modify hero section text and links
- Add your social media links
- Update contact information

## 🔧 API Endpoints

### Public Routes
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `GET /api/health` - Health check

### Protected Routes (Require JWT)
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Auth Routes
- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify JWT token
- `POST /api/auth/logout` - Logout

## 🛡 Security Features

- JWT token authentication
- Password hashing with bcrypt
- Rate limiting (100 requests per 15 minutes)
- CORS configuration
- Helmet security headers
- Input validation and sanitization
- Environment variable protection

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect layout for tablets
- **Desktop Enhanced**: Full desktop experience
- **Touch Friendly**: Large touch targets
- **Accessibility**: ARIA labels and keyboard navigation

## 🎭 Animation Features

- **Framer Motion**: Smooth page transitions
- **Staggered Animations**: Sequential element entrances
- **Parallax Scrolling**: Depth and movement
- **Hover Effects**: Interactive micro-animations
- **Loading States**: Skeleton screens and spinners
- **Gesture Support**: Touch and drag interactions

## 🚨 Troubleshooting

### Common Issues

**Backend won't start:**
- Check MongoDB connection string
- Verify all environment variables are set
- Ensure port 5000 is available

**Frontend can't connect to backend:**
- Verify `VITE_API_URL` in frontend `.env`
- Check if backend is running on correct port
- Ensure CORS is configured properly

**Authentication not working:**
- Verify JWT_SECRET is set and consistent
- Check admin credentials in backend `.env`
- Clear browser localStorage and try again

**Projects not displaying:**
- Check browser console for errors
- Verify API endpoints are working
- Test backend routes with Postman/curl

### Development Tips

- Use browser dev tools for debugging
- Check Network tab for API calls
- Monitor backend logs for errors
- Use React DevTools for component debugging

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section
2. Search existing GitHub issues
3. Create a new issue with detailed information
4. Include error messages and steps to reproduce

---

**Built with ❤️ using React, Node.js, and MongoDB**

*This portfolio template is designed to make you stand out from the crowd with its unique futuristic design and professional features.*
