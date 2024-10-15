# News App

A dynamic and responsive News App built using React and the Context API. This app allows users to search for news articles from different categories and fetches real-time news based on user preferences. It integrates with a news API and displays articles with smooth navigation and a clean interface.

## Demo

Check out the live demo of the app:

[News App Live Demo](https://azmat-7860.github.io/News-App/)

## Features

- **Real-time News Fetching**: Fetches news articles from an external API based on the user's search query.
- **Category Search**: Users can filter news articles by category (e.g., Sports, Technology, Politics).
- **Responsive Design**: Fully responsive layout, compatible with all screen sizes.
- **Bootstrap Integration**: Utilizes Bootstrap for easy and sleek styling.

## Tech Stack

- **Frontend**: React, Context API
- **Styling**: Bootstrap, CSS3
- **Data Fetching**: Fetch API
- **Build Tool**: Vite

## Screenshots

### Homepage

![News App Homepage](/public/Screenshot1.png)

### Category View

![News App Category View](/public/News-app.png)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Azmat-7860/News-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd News-App
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

- Enter a search term or select a category to fetch relevant news articles.
- Browse through the articles, and click on "Read More" to view the full news articles.

## API

This app uses the [NewsAPI](https://newsapi.org/) to fetch news articles.

## Firebase Hosting

This project is hosted using Firebase. You can deploy the app by following these steps:

1. Install the Firebase CLI:

   ```bash
   npm install -g firebase-tools
   ```

2. Log in to Firebase:

   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:

   ```bash
   firebase init
   ```

4. Deploy the app:
   ```bash
   firebase deploy
   ```

## Contributing

Feel free to fork this project and contribute by submitting a pull request. Any suggestions or improvements are welcome!

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
