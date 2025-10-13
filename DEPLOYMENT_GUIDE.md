# 🚀 Vercel Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)
- Your portfolio code ready

## Step 1: Push to GitHub

1. **Initialize Git Repository** (if not already done):
```bash
cd "/Users/arun/Documents/Pranav Cursor"
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

2. **Create GitHub Repository**:
   - Go to github.com and create a new repository
   - Name it something like `portfolio-website`
   - Don't initialize with README (since you already have files)

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy Frontend to Vercel

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub

2. **Import Project**:
   - Click "New Project"
   - Import your GitHub repository
   - Select the `frontend` folder as the root directory

3. **Configure Build Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Environment Variables**:
   - Add `VITE_API_URL` with your backend URL (we'll set this up next)

## Step 3: Deploy Backend to Railway

1. **Go to Railway**:
   - Visit [railway.app](https://railway.app)
   - Sign in with GitHub

2. **Deploy Backend**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Select the `backend` folder

3. **Configure Environment Variables**:
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secret_jwt_key_here
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=admin-cntrl@2025
   ```

4. **Get Railway URL**:
   - After deployment, copy the Railway app URL
   - It will look like: `https://your-app-name.railway.app`

## Step 4: Update Frontend with Backend URL

1. **Update Vercel Environment Variables**:
   - Go to your Vercel project settings
   - Add environment variable:
     - `VITE_API_URL`: `https://your-railway-app.railway.app/api`

2. **Redeploy Frontend**:
   - Vercel will automatically redeploy when you push changes
   - Or manually redeploy from Vercel dashboard

## Step 5: Set Up Custom Subdomain

### Option A: Free Vercel Subdomain
1. **In Vercel Project Settings**:
   - Go to "Domains" tab
   - Your default domain: `your-project-name.vercel.app`
   - You can customize the project name for a cleaner URL

### Option B: Custom Domain (if you own one)
1. **Add Custom Domain**:
   - In Vercel "Domains" tab
   - Add your domain (e.g., `portfolio.yourdomain.com`)
   - Follow DNS configuration instructions

### Option C: Free Subdomain Services
1. **Use services like**:
   - `subdomain.is-a.dev` (free)
   - `subdomain.vercel.app` (Vercel's default)
   - Apply for free subdomains through GitHub Student Pack

## Step 6: MongoDB Atlas Setup (Free Tier)

1. **Create MongoDB Atlas Account**:
   - Go to [mongodb.com/atlas](https://mongodb.com/atlas)
   - Create free cluster

2. **Get Connection String**:
   - Create database user
   - Whitelist IP addresses (0.0.0.0/0 for all IPs)
   - Get connection string

3. **Update Railway Environment**:
   - Add the MongoDB connection string to Railway

## Final URLs Structure

After deployment, you'll have:
- **Frontend**: `https://your-portfolio.vercel.app`
- **Backend**: `https://your-backend.railway.app`
- **Admin Panel**: `https://your-portfolio.vercel.app/admin/login`

## Quick Commands Summary

```bash
# Build and test locally
cd frontend
npm run build
npm run preview

# Deploy updates
git add .
git commit -m "Update: description of changes"
git push origin main
```

## Troubleshooting

- **Build Errors**: Check the Vercel build logs
- **API Errors**: Verify Railway backend is running
- **CORS Issues**: Ensure backend allows your Vercel domain
- **Environment Variables**: Double-check all env vars are set correctly

## 🎉 You're Live!

Once deployed, your portfolio will be accessible worldwide with:
- ✅ Professional subdomain
- ✅ SSL certificate (HTTPS)
- ✅ Global CDN
- ✅ Automatic deployments from GitHub
- ✅ Admin panel for project management

Need help with any step? Let me know! 🚀
