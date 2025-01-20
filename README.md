# Snaps Sprint 1

Welcome to **Snaps**, a photo-sharing application prototype that I developed as part of Sprint 1. This project was an exciting opportunity to build a functional, responsive web application that aligns with the vision of the entrepreneur behind Snaps. I took on the challenge to bring their creative ideas to life and deliver a prototype that showcases both technical capability and design precision.

## Project Overview

The goal of this project was to create a responsive and interactive photo-sharing application using React and Sass within a three-week timeframe. The Snaps Creative Director provided design mockups and assets, which I translated into a working prototype that meets the required functionality and design specifications.

I was working on the backend API to ensure smooth integration in the future. For now, the app focuses on static components and dynamic data rendering using JSON.

## Tools & Technologies Used

- **React (Vite):** A fast and lightweight framework to build the frontend.
- **Sass:** For managing styles efficiently with variables and mixins.
- **JavaScript (ES6+):** To create dynamic and interactive UI components.
- **Git & GitHub:** For version control and collaborative development.

## Implementation Details

### Folder Structure

I adhered to the structured project guidelines, ensuring proper organization of files for maintainability and scalability. The folder structure follows the best practices, including:

```
- src/
  - assets/
    - fonts/
    - images/
  - components/
    - Header/
    - Footer/
    - Hero/
    - Filter/
    - PhotoList/
  - styles/
  - data/
  - App.jsx
  - index.css
```

### Functional Features

1. **Filter Drawer:**
    - Initially hidden and opens upon clicking the "Filters" button.
    - Stays open until manually closed by the user.
2. **Tag Filtering:**
    - Users can select a tag to filter the photo gallery dynamically.
    - Only one filter can be active at a time.
    - Clearing the filter restores the original gallery view.
3. **Responsive Design:**
    - Ensured a seamless experience across various screen sizes.
4. **Interactive UI:**
    - Smooth state management for UI updates using React hooks.

### Visual Design Highlights

- The interface closely follows the provided mockups and maintains consistency across breakpoints.
- BEM methodology was used for class naming to enhance maintainability.
- Flexbox was implemented for layout to achieve responsiveness.
- Inline SVGs were used for interactive icons, ensuring smooth color transitions on user interactions.

## Challenges Faced

Throughout the development process, I encountered and overcame various challenges, such as:
- Optimizing state management to ensure fluid UI interactions.
- Refining the filter system to handle dynamic tag selections efficiently.
- Balancing design accuracy while maintaining functional requirements.

## How to Run the Project

To check out the Snaps prototype on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/snaps.git
   ```
2. Navigate to the project directory:
   ```bash
   cd snaps
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

The application should now be accessible at `http://localhost:5173`.

## Submission Details

I have successfully merged the development branch with the main branch following best practices. 

## Conclusion

Working on Snaps has been an enriching experience, allowing me to sharpen my skills in React, Sass, and responsive design. I'm excited about the potential of this application and look forward to integrating the backend API in future iterations.

---

