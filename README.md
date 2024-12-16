# BrewKeeper

BrewKeeper is a fun and visually appealing web application designed for beer enthusiasts to catalog their beer collection. With an intuitive interface, users can explore, organize, and expand their beer collection effortlessly. This project demonstrates best practices in frontend development, including responsive design, state management, and local data persistence.

---

## Features

### Core Functionality

1. **Collection Overview**:

   - Displays all beers in a responsive grid layout.

2. **Detailed Beer View**:

   - Displays expanded details of a selected beer.

3. **Add New Beers**:

   - Allows users to add custom beers to their collection.
   - Input fields include name, type, year, brewery, ABV, and description.
   - Includes simple HTML form validation to ensure data integrity.

4. **Edit Beers**:

   - Allows users to edit their beers information.

5. **Delete Beers**:

   - Allows users to delete their beers.

### Bonus Features

- **Sorting Options**: Users can sort their collection by name, type, year...
- **Filtering**: Filters for browsing by type or year.
- **Ratings**:
  - 5-star rating system.
- **Data Persistence**: Uses LocalStorage to save user data across sessions.

---

## Tech Stack

### Core Technologies

- **Framework**: Vue 3
- **Styling**: TailwindCSS
- **State Management**: Pinia
- **Data Persistence**: LocalStorage

### Tooling

- **Build Tool**: Vite
- **Language**: TypeScript

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps to Run the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ivanhirskyy/BrewKeeper.git
   cd brewkeeper
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open `http://localhost:5173/` in your browser.

4. **Build for Production**

   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview the Production Build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

---

## Future Enhancements

1. **Cloud Sync**:

   - Integrate Firebase or Supabase for cloud-based collection storage.

2. **Image system**:

   - Implement an image system to store images in the cloud.

3. **Testing**:

   - Implement Unit and end to end testing.

4. **Random Beer Suggestion**:

   - Add a "Surprise Me" feature to suggest a random beer.

5. **Social Sharing**:

   - Enable users to share their collections with friends.

---

## License

This project is licensed under the MIT License.

---

## Author

Crafted with love by [Ivan Hirskyy](https://ivanhirskyy.github.io/)❤️.
