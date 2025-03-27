# Automobile Showcase Application

## Project Overview
This is a web-based automobile showcase application that allows users to browse different car models, their variants, colors, accessories, and features. The frontend is built using Angular, ensuring a clean UI and scalable architecture.

## Features
- Display car models and their variants
- Show available colors with pricing
- List accessories and features with images
- Responsive UI for smooth navigation

## Tech Stack
- **Frontend:** Angular 19.2.4, TypeScript, HTML, CSS
- **Backend:** Node.js (v22.14.0)
- **Database**: MongoDB (v8.0.6)
- **Package Manager:** npm (v10.9.2)

## Setup and Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)
- Angular CLI
  ```sh
  npm install -g @angular/cli
  ```

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/automobile-showcase-app.git
   cd automobile-showcase-app/frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the application:
   ```sh
   npm run start
   ```
   AND
   ```sh
   ng serve --open
   ```
   This will start the application at `http://localhost:4200/`.

## API Endpoints
The frontend interacts with backend APIs to fetch car models, variants, and features.

### Example API Calls
- **Get all models:**
  ```sh
  GET http://localhost:3000/models
  ```
- **Get variant details:**
  ```sh
  GET http://localhost:3000/variants
  ```


## Additional Features
- **Scalability:**
  - Modular code structure for easy expansion
  - API service for efficient data handling
- **Clean UI:**
  - Organized navigation for models and variants
  - Responsive design for different screen sizes


