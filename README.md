# Car Rental App Design

## Links and Instructions

The code is deployed on Snack Expo [here](https://snack.expo.dev/@noumanmalik/laughing-popsicle)

To bring the app up locally:  

1. Clone the repo on your machine
2. In the terminal inside the project directory enter the command `npx expo start`

## Information

This is the first time I have ever made an app using React Native and Expo. There was a slight learning curve for the components that are used in React Native, but other than that, most of my experience in React and Next just transfered over.

For the design, I focused on making the simplest screen for the user so they don't need to see anything that is unnecessary. Just the cars that are available to rent with the image, name, and price.

While making the app I assumed that the user is already logged in, that is why I only made the screen where the cars are shown. I also only show 30 cars from the api, to make sure the app doesn't have any issue in loading.

I combined the requirements of search and filter (by make, year, and color) into one solution of adding a search bar, where the user can search any aspect of the car, including the name, year, color, and model.
