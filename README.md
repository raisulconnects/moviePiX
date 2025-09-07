# 🎬 MoviePiX

MoviePiX is a movie discovery and favorites management app built with **React**, powered by the **OMDb API** for movie data and **Firebase** for authentication and Firestore database.  
Users can search movies, view details, add them to favorites, and keep their list synced securely in the cloud.

> 💡 This project was created to strengthen my fundamentals in **React, state management, Firebase and Authentication**, and to practice building a real-world, interactive web application.

🚀 Live Demo: [MoviePiX](https://movieepix.netlify.app/)

---

## ✨ Features

- 🔍 Search movies via **OMDb API**
- 📖 View detailed movie information
- ❤️ Add / remove movies from **Favorites**
- 🔐 **Authentication** with Firebase (Email + Password)
- ☁️ User favorites stored in **Firestore**
- 🎨 Responsive UI with **TailwindCSS + DaisyUI**
- 🔔 Toast notifications for user actions

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), TailwindCSS, DaisyUI
- **State Management:** React Context API
- **Backend / Auth:** Firebase Authentication
- **Database:** Firebase Firestore
- **API:** OMDb API
- **Hosting:** Netlify

---

## ⚙️ Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/moviepix.git
cd moviepix

### 2. Install dependencies

npm install

### 3. Setup Environment Variables

Create a .env file in the project root:

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_OMDB_API_KEY=your_omdb_api_key

### 4. Run the project

npm run dev

---

### 📂 Project Structure

moviepix/
├── public/ # Static assets
├── src/
│ ├── Components/ # Reusable UI components
│ ├── Context/ # Movie & Auth Context
│ ├── Firebase/ # Firebase config
│ ├── Hooks/ # Custom hooks
│ ├── Pages/ # Main app pages
│ ├── UtilityFunctions/ # Helper functions
│ └── App.jsx # Root component

---

### 🚀 Future Improvements

🔑 Social login (Google, GitHub, etc.)
🌟 Add movie ratings & reviews
🖼️ Better movie detail page with trailers
🌟 Add Comment Section so users can Comment
