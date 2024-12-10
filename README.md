Here's the generated `README.md` file for your project:

---

# 🎥 **CinemaSync - Movie Portal**

## Live Site: [CinemaSync](https://authsupport-156bb.firebaseapp.com/)

## backend: [Backend](https://movie-server-zeta.vercel.app/)

CinemaSync is a user-friendly Movie Portal designed to simplify exploring, managing, and favoriting movies. The portal offers a dynamic user interface, robust functionality, and a seamless user experience.

---

## 🚀 **Features**

### **User Authentication**

- Login and Registration with form validation.
- Google authentication for easy access.
- Conditional navbar buttons based on authentication status.

### **Movie Management**

- Add new movies with a fully validated form.
- Update or delete movie details.
- Explore all movies in a 3-column grid layout with a search functionality.
- See detailed information for each movie, including the ability to add it to favorites or delete it.

### **User-Specific Features**

- View and manage personal favorite movies on a private route.
- Favorites are filtered based on the logged-in user's email.

### **Dynamic Design**

- Responsive layout for mobile, tablet, and desktop.
- Dark/Light theme toggle for enhanced usability.
- Attractive carousel banner and unique extra sections.

### **Error Handling & User Feedback**

- Toast notifications for all CRUD operations and validations.
- Custom 404 page for unmatched routes.
- Loading spinners for better user feedback during data fetching.

---

## 📋 **Key Components**

### **Navbar**

- Includes website logo, home, all movies, add movie (private), my favorites (private), and an additional public route.
- Shows login/register or user profile and logout options based on authentication.

### **Home Page**

- Static carousel banner with meaningful slides.
- Featured movies section showcasing the 6 highest-rated movies.
- Two additional meaningful sections to enhance user engagement.

### **All Movies Page**

- Displays all movies in a responsive grid layout.
- Search functionality to find movies by title.
- "See Details" button to navigate to the movie details page.

### **Add Movie Page (Private)**

- A form to add new movies with extensive validation.
- Inputs include movie poster URL, title, genre dropdown, duration, release year, rating, and summary.
- Successfully added movies are immediately displayed on the "All Movies" page.

### **Movie Details Page (Private)**

- Displays all movie details with options to delete, update, or add to favorites.

### **Favorite Movies Page (Private)**

- Displays the logged-in user's favorite movies.
- Option to remove movies from the favorites list.

### **Footer**

- Includes website name, copyright, contact info, and social media links.

### **Additional Challenges**

- Movie update form with the same validations as the add movie form.
- Dark/Light mode toggle.

---

## 🔧 **Technology Stack**

### **Frontend**

- React
- Tailwind CSS for styling
- React Router for navigation
- React Hook Form for efficient form handling
- Sweet Alert2 for notifications
- React Simple Star Rating for movie ratings

### **Backend**

- Node.js with Express.js
- MongoDB for database
- Hosted on Vercel

### **Hosting**

- Client hosted on Netlify
- Server hosted on Vercel

---

## 📌 **Notable Commits**

### **Client-Side**

- Added dynamic navbar with conditional rendering for authentication.
- Implemented dark/light theme toggle.
- Created responsive All Movies page with search functionality.
- Integrated Toastify for user feedback on form validation and CRUD operations.

### **Server-Side**

- Built RESTful APIs for movie management (CRUD).
- Implemented user-specific favorite movie filtering.
- Secured MongoDB credentials using environment variables.

---
