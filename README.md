# Restaurant App 🍽️

Welcome to the Restaurant App, a front-end project built using React and Parcel. This application allows users to browse various restaurants, view menus, and manage their carts. The project is designed to be user-friendly and responsive, providing an optimal experience on desktop and mobile devices.

## Features

- 🏠 **Home Page**: Browse through a selection of restaurants.
- 📞 **Contact Page**: Contact the restaurant or support team.
- 🛒 **Cart Page**: View and manage the items in your cart.
- ℹ️ **About Page**: Learn more about the restaurant or the application.
- 🍽️ **Restaurant Menu**: View detailed menus for each restaurant by clicking on the restaurant cards.

## Technologies Used

- ⚛️ **React**: A JavaScript library for building user interfaces.
- 🚀 **Parcel**: A blazing fast, zero-configuration web application bundler.
- 🎨 **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- 📡 **Swiggy API**: Used for fetching restaurant data and menus.
- 🛠️ **@reduxjs/toolkit**: A toolset for efficient Redux development.
- 🌐 **react-router-dom**: A library for routing in React applications.
- ⭐ **react-icons**: A library for including popular icons in your React project.

## Screenshots

### Home Page
#### Mobile View
![Screenshot 2024-07-15 153206](https://github.com/user-attachments/assets/7d62dd18-b700-41a8-928e-b53f162b3b7a)
#### Laptop View
![Screenshot 2024-07-15 150422](https://github.com/user-attachments/assets/9244fce6-3d97-475f-98ab-8feee4e17535)


### Contact Page
#### Mobile View
![Screenshot 2024-07-15 153314](https://github.com/user-attachments/assets/5477e00d-a06c-4bec-8f2a-9c7e9a356200)
#### Laptop View
![Screenshot 2024-07-15 153329](https://github.com/user-attachments/assets/fded4e2c-1229-4687-a258-675ef8225599)


### Cart Page
#### Mobile View
![Screenshot 2024-07-15 154052](https://github.com/user-attachments/assets/972d5ccb-2e32-40bc-a20a-90618e535fc6)
#### Laptop View
![Screenshot 2024-07-15 154029](https://github.com/user-attachments/assets/eeb93435-6823-4ea2-90de-ff14093de111)


### Restaurant Menu
#### Mobile View
![Screenshot 2024-07-15 153804](https://github.com/user-attachments/assets/89e8b8f6-6631-49dd-a90e-6fc115e07788)
#### Laptop View
![Screenshot 2024-07-15 153734](https://github.com/user-attachments/assets/f9bb8a7c-da7f-4dd2-8368-82a13ae0199d)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Ankit-Kum-ar/restaurant-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd restaurant-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

The application should now be running on `http://localhost:1234`.

## Important: Enable CORS

To view the website properly, you need to enable the CORS extension in your browser. Here are the steps to do it:

1. **Install the CORS extension**:
    - For Chrome: [CROS ALLOW](https://chromewebstore.google.com/detail/lhobafahddgcelffkeicbaginigeejlf?hl=en)
    - For Firefox: [CORS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/)

2. **Enable the extension**:
    - After installing, click on the extension icon in your browser toolbar and turn it on.

## Installing Tailwind CSS

To add Tailwind CSS to this project, follow these steps:

1. Install Tailwind CSS via npm:
    ```bash
    npm install -D tailwindcss
    ```

2. Initialize Tailwind CSS configuration:
    ```bash
    npx tailwindcss init
    ```

3. Configure your `tailwind.config.js` file:
    ```js
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

4. Add Tailwind directives to your CSS file:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Project Structure

```css
restaurant-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── HomePage.js
│   │   ├── ContactPage.js
│   │   ├── CartPage.js
│   │   ├── AboutPage.js
│   │   └── RestaurantMenu.js
│   │
│   ├── assets/
│   │   └── images/
│   │
│   ├── App.js
│   ├── index.js
│   └── styles.css
│
├── package.json
└── README.md

 ```
## Contributing
Contributions are welcome! If you have any suggestions or improvements, please create an issue or submit a pull request.
