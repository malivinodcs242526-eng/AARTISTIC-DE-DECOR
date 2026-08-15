# AARTISTIC DE' & DECOR - Interior Design Web Platform

This is the full-stack MEAN web platform for AARTISTIC DE' & DECOR, featuring a public-facing gallery/portfolio and a secure admin panel for content management.

## Tech Stack
- **Frontend**: Angular 18+, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas recommended)
- **Authentication**: JWT & bcrypt

## Project Structure
This is a monorepo containing two main folders:
- `/backend`: The Express.js backend API.
- `/frontend`: The Angular frontend application.

## Local Setup

### 1. Backend Setup
1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Copy the environment variables: `cp .env.example .env`
4. Update the `.env` file with your **MongoDB Atlas URI**, **JWT Secret**, and **SMTP Credentials** (for the contact form email).

### 2. Database Initialization & Security Warning
Before logging into the admin panel for the first time, you must initialize the database with an admin account.
Run the following script:
```bash
node scripts/seedAdmin.js
```
> [!CAUTION]
> **SECURITY WARNING:** The seed script creates an initial admin account with the email `admin@aartisticdecor.com` and password `AdminPassword123!`. 
> **You MUST change this password immediately after your first login** or delete this account and create a new secure one. Do not deploy to production with these default credentials.

### 3. Run the Backend
Start the development server:
```bash
npm run dev
```
The server will run on `http://localhost:5000`.

### 4. Frontend Setup
*(Frontend instructions to be added once initialized...)*

## Deployment

### Backend (Render)
- Connect your GitHub repository to Render.
- Create a new "Web Service".
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`
- Add all variables from your `.env` to the Render Environment Variables.

> **Note on Image Uploads:** This project uses local file storage (`/uploads/images/`) for simplicity. On Render, the free tier file system is ephemeral, meaning uploaded images will be lost during a redeploy. For a production environment, consider upgrading to a Render Persistent Disk or modifying the upload middleware to use Cloudinary or AWS S3.

### Frontend (Vercel)
- Connect your GitHub repository to Vercel.
- Framework Preset: Angular
- Root Directory: `frontend`
- Add the production API URL to the environment variables if required by the frontend configuration.
