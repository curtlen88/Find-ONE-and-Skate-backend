## FIND ONE AND SKATE ()


  Introducing Find One and Skate - a one-of-a-kind app designed specifically for skateboarders. Our app provides a comprehensive platform for the skateboarding community to discover, share, and connect. With an interactive map, users can search for the best skateboarding spots, view photos and videos of the spots uploaded by other users, and even add their own favorite spots to the map. By creating an account, users can not only contribute to the growth of the skateboarding community but also receive additional perks such as the ability to save their favorite spots, leave comments and reviews, and connect with other skateboarders. Our mission is to create a supportive and inclusive environment for skateboarders of all levels to connect, share their experiences, and progress their skills. With its innovative features and user-friendly design, Find One And Skate is set to revolutionize the way the skateboarding community discovers and interacts with each other. 
  
## Screen Shots From App  
![Screen Shot 2023-02-16 at 7 38 51 PM](https://user-images.githubusercontent.com/117604017/219544188-51af7d9d-fdda-4020-a0ab-fff2155ed21f.png)
![Screen Shot 2023-02-16 at 7 48 22 PM](https://user-images.githubusercontent.com/117604017/219545346-28af282d-dd01-4d21-934b-5b45579fb67f.png)
![Screen Shot 2023-02-16 at 7 46 23 PM](https://user-images.githubusercontent.com/117604017/219545426-df52990f-aa6b-4fb3-aa97-8a9e080fadb4.png)


  
  
## CREATORS
- Curtlen Aumiller
- Charles Lamb

## Tech Stack

- React
- Express
- Nodejs
- MongoDB
- MapBox
- BCryptjs

## Installation:

* React:
React is a JavaScript library for building user interfaces.

To install React, you need to have Node.js and npm installed on your system. Once you have these installed, you can create a new React project using the following command: npx create-react-app find-one-and-skate.  Then after you CD into the app, run the following command: npm start.

* Express:
Express is a web application framework for Node.js.

To install Express, you need to have Node.js and npm installed on your system. Once you have these installed, you can install Express using the following command: npm install express.

* Node.js:
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

To install Node.js, you can download the installer from the official Node.js website at https://nodejs.org/en/download/. Follow the instructions provided by the installer to complete the installation.

*MongoDB:
MongoDB is a NoSQL database.

To install MongoDB, you can download the appropriate installer from the official MongoDB website at https://www.mongodb.com/try/download/community. Follow the instructions provided by the installer to complete the installation.

* MapBox:
MapBox is a mapping platform for developers.

To use MapBox in your project, you need to create a MapBox account and obtain an API key. You can then use the MapBox API to add maps to your application. To install the MapBox SDK for React, you can use the following command: npm install react-mapbox-gl.

* BCryptjs:
BCryptjs is a library for hashing passwords.

To install BCryptjs, you can use the following command: npm install bcryptjs.



## User Flow
- For ease of use, we plan on using modals so the user never has to navigate away from the map page just to fill out a form etc.  Images & videos will render to the side of the map as to not disrupt the discovery of new spots. 

## User Stories
* As a user, I want to be able to create a new profile with an email and password
* As a user, I want to be able to sign in to my account
* As a user, I want to be able to update my password
* As a user, I want to be able to search on the map for the skate spots
* As a user, I want to be able to click on a pin to see the skate spot images and videos
* As a user, I want to be able to add favorite skate spots to be saved to my profile
* As a user, I want to be able to create a new skate spot and add images and videos of that skate spot
* As a user, I want to be able to delete a skate spot I have created or favorited
* As a user, I want to be able to add/delete additional images and videos of a skate spot I have created

## SPRINTS
- Friday // Study documentation on Mapbox & Leaflet and determine use case for both.  EOD Choose one, begin implementation.
- Weekend // Establish map functionality and desired user map experience.
- Monday // Database integration and server file structure setup.
- Tuesday // Map out pages and stub out components.
- Wednesday // Add data to all relevant files & components and test functionality.
- Thursday // Add Styling/CSS framework.


## MVP GOALS
- Create an app that displays an interactive map with location pins showing skate spots.
- The user will be able to click on a pin, and view information about the spot including photos and videos, best times to visit, etc.
- The app will have a feature to alow the user to add a pin and relevant information to the spot.
- Implement the use of modals for a better user experience and quick functionality.
- Implement the ability to up/downvote a spot on the map.

## STRETCH GOALS
- Create a competitve user feature "king of the spot" where the most upvoted content becomes eligible to win prizes from selected skate partnerships.
- Implement the use of a geolocation API to get user location, so they can view nearby spots.
- Provide directions to nearby spots.
- Use sorting to display most upvoted videos at the top of the list.
- Link to social media upload page.
- Size of pin on map determined by quantity of user content.
- Enable user to add and view comments on spots.
- Reponsive views on all devices.



## Entity Relationship Diagram
![skate-erd](https://user-images.githubusercontent.com/117604017/218008705-6b96dcf7-4128-482f-b006-44d4cf0c9b9a.png)




## RESTful Routing Chart
![Screen Shot 2023-02-09 at 9 23 29 PM](https://user-images.githubusercontent.com/117604017/218008888-cb4e9a84-c52b-456c-82b5-2fbe465a9797.png)

## Approach Taken

The approach taken for creating the "find one and skate" app was to use React, Mapbox, and MongoDB to provide users with an interactive platform where they can discover new skate spots, create an account, and upload photos and videos of their skating experiences at the locations. The goal was to create a social platform that could help skateboarders improve their skills by sharing their content, while also discovering new skate spots. The app was designed to provide a seamless user experience, with a simple and intuitive interface that would enable users to easily search for skate spots and upload their content. However, building the project came with many hurdles, including integrating Mapbox, ensuring that data was accurately captured and stored, and managing the security of user data.

Despite the challenges, building the skateboarding app was a rewarding experience. Overcoming the hurdles required a lot of effort, collaboration, and creative problem-solving, but the result was a high-quality app that exceeded expectations. The project team also learned valuable lessons about the importance of planning, testing, and iterating, which helped them to produce a product that met the needs of its intended users. Overall, building the "find one and skate" app using React, Mapbox, and MongoDB was a challenging but rewarding experience that demonstrated the power of collaboration, creativity, and perseverance.

## Post Project Reflection

The project team was very psyched in building the concept for this project.  We wanted to challenge ourselves with something new, and sharpen our skills in places where there was room for improvement. That being said, we learned that react, react-modals, and mapbox do not play well together, and it's important to be aware of their limitations and potential conflicts.  While each tool has its own unique benefits, using them together can sometimes create unexpected challenges that can impede progress towards a completed project.

For example, React state is a powerful tool for managing the state of a web application, but it can become problematic when used in conjunction with Mapbox layers. Mapbox layers rely heavily on a single, global state object, which can lead to synchronization issues when used with React state.

Similarly, react-modals can add another layer of complexity to the mix, in that they also rely heavily on the use of React state. This can create conflicts when combined with Mapbox layers, leading to further technical challenges.

We found ways to integrate these technologies together by modifying the code to avoid conflicts, finding workarounds, and simply changing the way that the technologies are used.

## Wireframes of User Views
![Screen Shot 2023-02-09 at 9 45 57 PM](https://user-images.githubusercontent.com/117604017/218011167-d030a26a-7b7d-410a-b25c-e900d80ea8be.png)


![Screen Shot 2023-02-09 at 9 49 46 PM](https://user-images.githubusercontent.com/117604017/218011677-e0d22ee2-3ffe-430a-9ad1-4e5ace0597ff.png)


![Screen Shot 2023-02-09 at 11 04 30 PM](https://user-images.githubusercontent.com/117604017/218025097-934b9da2-f5f8-440e-839e-156980f6e5d2.png)


![Screen Shot 2023-02-09 at 11 09 16 PM](https://user-images.githubusercontent.com/117604017/218025799-7a0bef28-0876-4cd3-919b-5ea6c61bba9b.png)
