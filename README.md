# BrewKeeper

BrewKeeper is a fun and visually appealing web application designed for beer enthusiasts to catalog their beer collection. With an intuitive interface, users can explore, organize, and expand their beer collection effortlessly. This project demonstrates best practices in frontend development, including responsive design, state management, and local data persistence.

---

## Features

### Core Functionality
1. **Collection Overview**:
   - Displays all beers in a responsive grid layout.
   - Each beer card shows basic details (e.g., name, type, and image).

2. **Detailed Beer View**:
   - Displays expanded details of a selected beer.
   - Includes fields such as name, type, year, brewery, ABV, and description.

3. **Add New Beers**:
   - Allows users to add custom beers to their collection.
   - Input fields include name, type, year, brewery, ABV, and description.
   - Includes form validation to ensure data integrity.

### Bonus Features
- **Sorting Options**: Users can sort their collection by name, type, or year.
- **Filtering**: Filters for browsing by type or year range.
- **User Notes and Ratings**:
  - Personal notes for each beer.
  - 5-star rating system.
- **Data Persistence**: Uses LocalStorage to save user data across sessions.

---

## Tech Stack

### Core Technologies
- **Framework**: Nuxt 3 (Vue.js 3 + Composition API)
- **Styling**: TailwindCSS
- **State Management**: Pinia
- **Data Persistence**: LocalStorage

### Tooling
- **Build Tool**: Vite
- **Language**: TypeScript
- **Icons**: Heroicons (via TailwindCSS integration)

---

## Project Structure
```plaintext
src/
|-- components/
|   |-- BeerCard.vue
|   |-- BeerDetail.vue
|   |-- AddBeerForm.vue
|-- layouts/
|   |-- default.vue
|-- pages/
|   |-- index.vue          # Collection Overview
|   |-- add.vue            # Add New Beer
|-- store/
|   |-- beerCollection.ts  # State management for beer data
|-- services/
|   |-- localStorage.ts    # Utility for saving/loading data
|-- assets/
|   |-- styles/            # Tailwind configurations
|-- utils/
|   |-- sorting.js         # Sorting logic
|   |-- filtering.js       # Filtering logic
|-- App.vue
|-- main.ts
```

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repository/brewkeeper.git
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
   Open `http://localhost:3000` in your browser.

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

2. **Random Beer Suggestion**:
   - Add a "Surprise Me" feature to suggest a random beer.

3. **Social Sharing**:
   - Enable users to share their collections with friends.

4. **Advanced Filtering**:
   - Add multi-criteria filtering with a dedicated UI.

---

## Attribution
- **Icons**: Heroicons
- **Framework**: Nuxt.js
- **Styling**: TailwindCSS

For any third-party code, attribution is provided in the relevant files.

---

## License
This project is licensed under the MIT License.

---

## Author
Crafted with passion by [(Ivan Hirskyy](https://ivanhirskyy.github.io/))](https://ivanhirskyy.github.io/).
