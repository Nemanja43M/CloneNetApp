# United Cloud Task

# Overview

The application is built using React with TypeScript, combining the React's component-based architecture with TypeScript's static typing capabilities.

# Getting Started

To run the project locally, follow these steps:

# Install Dependencies:

npm install

# Run Development Server:

npm run dev

# Open in Browser:

Navigate to http://localhost:3000 to view the application.

# Tasks Implementation

# 1 Filter duplicated movies from the response

Mapping Data: Initially, movieData is mapped to an array of Item type objects (data), where each object represents a movie with properties such as id, title, poster_path, release_date, inFavorites, ratings, and overview.

Using Set: The Set data structure is employed to collect unique id values from the data array. This ensures that only unique movies are retained based on their id.

Filtering and Mapping: After obtaining unique id values using Set, the array is mapped to filter and retrieve the corresponding Item objects (uniqueData). This ensures that each movie appears only once in the final list.

# 2 Sort movies by imdb rating

Sorting: The sortedData array is created as a copy of uniqueData, sorted in descending order based on the IMDb rating (ratingB - ratingA). This ensures that movies with higher IMDb ratings appear first in the sorted list.

Rating Extraction: Each movie's IMDb rating (rating.id === "imdb") is extracted using Array.prototype.find. If a movie lacks an IMDb rating, it defaults to 0 to ensure consistent sorting.

# 3 Render all filtered & sorted movies in grid view

# 4 Each rendered movie item should display title, poster, release date and inFavorites

The filteredSortedMovies array state is mapped over to render each movie in a grid view (movie-grid). Each movie is displayed in a movie-card container, showing essential details such as the poster image, title, release date, and whether it is marked as a favorite (inFavorites).

# 5 Highlight selected item

State Management: Redux was used to manage the application state, including the favorites list (favorites). This state keeps track of which movies are marked as favorites.

Handling Function: handleFavorites function that is invoked when the user presses Enter on a specific movie in the HeroParts component.

Redux Dispatch: Within the handleFavorites function, you utilized Redux's dispatch function to call the setFavorites action, which adds or removes the movie from favorites based on its current state.

Visual Feedback: In the movie's visual representation, user conditional rendering of heart icons (bi bi-heart and bi bi-heart-fill) that change on click or when the Enter key is pressed, providing users with clear feedback on whether the movie has been added or removed from favorites.

CSS Classes: CSS classes were added to visually distinguish which movies are added to favorites, enabling users to easily identify which movies are marked as favorites.

These implementations enable users to interactively manage their favorite movies using the keyboard, enhancing overall user experience and accessibility of the application.

# # 6 On Enter Key Add Item to Favorites / Remove if Already in Favorites

-   **TAB Key:** Allows users to move focus from one interactive element to another, such as links, form fields, menus, and media player controls.
-   **Arrow Keys:** Used for navigating through options within applications.
-   **ENTER Key:** Activates selected elements, like icons in favorites.
-   **Space Bar:** Typically used for scrolling or activating elements, such as checkboxes and radio buttons.

Implementing keyboard navigation enhances accessibility by providing alternative navigation methods for users who may not use a mouse or touch screen.
