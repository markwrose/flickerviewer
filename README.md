React Native Flickr Random Image Viewing Component



































This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

This component and included sample application were created using React Native and Expo.

File Structure:

The flickrviewer.js component file located in the ./src/component/ directory is the where the code for the component is located.

The app.js in the FlickrViewer or project root directory is the sample application that implements the flickrviewer component.

The sample application requires all the directories and files under the ./src directory

Required Attributes:

The flickrviewer requires 2 attributes.  
	- DisplayInterval : determines how frequently the image is refreshed.
	- ApiKey : your access key to the Flickr api – you can request a key here: https://www.flickr.com/services/apps/create/apply/
In the sample application bot of these attributes are managed via the config.json file that is located in the FlickrViewer or project root directory.

Below is the config.json file for my implementation.

{
  apiKey :"b8456b957137d462e7c8088dad495c9b", //Enter the Flickr apiKey for accessing your registered Flickr App
  timeInterval : "3000" //Enter the displayInterval in milliseconds
}


Installing & Running the sample application:

Assuming that you have Node installed, you can use npm to install the create-react-native-app command line utility:

	npm install -g create-react-native-app

Then run the following commands to create a new React Native project called "FlickrViewer":

	create-react-native-app FlickrViewer

	cd FlickrViewer

	npm start

This will start a development server for you, and print a QR code in your terminal.

Download the files & directories from this github repository.

From your local project file:

	- Replace the app.js file with the one provide in this repository.

	- Copy everything in this repositories ./src directory and recreate the same 	directories in your project folder.

	- Copy the config.json file and place it in your projects main directory.

	- Update the local config.json file to include Your apiKey for accessing the 	Flickr API.

	- Change the timeInterval value in config.json if you like, by default it is 	3 seconds or 3000 milliseconds


Install the Expo client app on your iOS or Android phone and connect to the same wireless network as your computer. Using the Expo app, scan the QR code from your terminal to open your project.



	 

# flickrviewer
