![nasanotion](https://github.com/user-attachments/assets/f5e65cb8-48c0-4dc0-b757-bf3569f32d2f)

# MARS ROVER IMAGES
It provides :
* Browse photos from three Mars rovers (Curiosity, Opportunity, Spirit)
* Filter photos by rover, Martian sol, and camera type


## Team members
1. [Allen Jude](https://github.com/Ajallen14)
2. [Alwin Emmanuel Sebastian](https://github.com/Alwin42)

## Link to product walkthrough
[link to video](https://drive.google.com/file/d/1LBQWmelNXeCaHcTkolichcNUci7VnP3A/view?usp=sharing)

## How it Works ?

The application fetches and displays Mars Rover photos from NASA's API with these key components:

### [Home Page](https://github.com/Ajallen14/NASA-api-Saturday-Hacknight-/blob/main/app/page.tsx)
Manages the main state and data fetching
Uses infinite scroll for pagination
Handles loading and error states

### [Photo Display](https://github.com/Ajallen14/NASA-api-Saturday-Hacknight-/blob/main/components/PhotoGrid.tsx)
Renders photos in a responsive grid
Shows photo details on hover
Opens detailed view in modal

### [Filtering](https://github.com/Ajallen14/NASA-api-Saturday-Hacknight-/blob/main/components/Filters.tsx)
Allows selection of rover, sol (Martian day), and camera
Updates the main query when filters change

### [API Integration](https://github.com/Ajallen14/NASA-api-Saturday-Hacknight-/blob/main/lib/api.ts)
Handles communication with NASA's API
Manages query parameters and error handling

## Libraries used

- Next.js - 13.5.1
- React - 18.2.0
- TypeScript - 5.2.2


## How to configure
1. Clone the project
2. Install dependencies:

        npm install

3. Create .env.local file:

        NEXT_PUBLIC_NASA_API_KEY = your_nasa_api_key_here

4. Get your API key from api.nasa.gov
5. Replace your_nasa_api_key_here with your actual NASA API key

## How to Run
Development:

        npm run dev

Production:
    
        npm run build
        npm start
The application will be available at http://localhost:3000
