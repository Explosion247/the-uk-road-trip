#the UK road trips

## Site Overview

The aim of this website is to help people decide where they would like to visit on their next road trip around the uk.

This website will have a variety of different locations to visit, for example Edinburgh zoo, Bamburgh castle or Alnwick gardens. The user will be able to create a list of all the places they would like to visit.

Using this list you will be able to estimate how long your trip will take, how long it will to move from one destination to another, and add in your own locations you would like to visit. You will be able to use this website to get directions to different place using google maps, however while you are traveling it would be better to use your own navigation app and use this website only for planning.

## Table of Content

[User Experience UX](#user-experience-ux)

[Design](#design)

- [Colours](#colours)
- [Wireframe](#wireframe)

[Features](#features)

[Deployment & Testing](#deployment-&-testing)

[Technologies Used](#technologies-used)

[Credits and References](#credits-and-references)

- [images](#images)
- [code](#code)

## User Experience UX

## Design

### Colours

The colours that i have chosen for this website are natural colours so they match with the images that will be used, there will be images of nature like fields, animals and beaches.

![colour pallet](/assets/images/README-images/colour-pallet.png)

### Wireframe

## Features

### included Features

- Map - The main page of this website contains a large map that will allow the user to search for different locations
- destination list - using the map you will be able to click on different locations and add them to a list to be used to help plan your trip. This list will contain, the name, street and post code to allow you to use your proffered navigation app.
- local areas - when you start your trip planning, the map will focus on your local area, this allow you to start where you currently are and then find areas nearby. after clicking on a marker, the local area will then change to that marker to allow you to find things that are local to that stop.

### To be included in the future

- Duration - I would like to include the duration of the trip from one location to another, so that you will know long different sections of the trip will take. It would also use this Duration to create a total time of travel during this trip.
- add Button - At the moment clicking any of the markers will add them to the current list, however i would like to add a button that would do this so that in case you click on the wrong marker.
- remove button - If you change your mind while planning the trip, a button to remove certain locations would allow you to remove unwanted destinations
- click - when you find a location on the map that you have not typed in, you should be able to click on the marker and have it added to the list
- Set start point - If the user decided not to share their location, the selected location is incorrect, or the user would like to start from a different destination, a Start Point button would allow the user to select their start point allowing the user the ability to customize their journey how they like it.

## Technologies used

I have used a few different processes to create the website, there are two main technologies used.

### Google Maps API

The Google maps api is used to connect the website to Google Maps, this has several components built within.

- markers - Places a marker on top of locations selected
- directions - Allows the user to get directions from one location to another
- GeoLocation - Used to get the users location to start the journey from their current location
- Search - Allows the user to search for their desired location for the next stop

Each of these components allows you to customise the map to your specific needs, however some of these require smaller API's to allow them to function.

### Bootstrap

Using the Bootstrap toolkit, allows the website to be responsive between different size devices, and making it easier to implement different features.

## Deployment & Testing

### Deployment

The website was created using Virtual Studio Code (VSC) and its then linked to a Repository on GitHub. Within VSC there is a Commit and Sync feature that will allow you to upload the files to GitHub.

Once the code is uploaded to GitHub, you can use GitHub pages to host the website and allow others to use it.

### Testing

The testing of the website is to ensure that everything is working properly and ensure that there is nothing that might cause errors / reduce the amount of errors that could appear.

#### Manual Testing

One of the best ways to test the website is by manually testing everything to ensure that all the buttons are working correctly, and that any features of the website are working.

The Other way to test the website is by using a validator, for this we use websites like https://validator.w3.org/nu/#textarea, this allows you to input your code and then it will check to it against a set of standard to ensure they are met. The results for the HTML, CSS and JavaScript files are listed below.

#### Validation Testing

One of the main errors that will appear are trailing slashes, this is because due to a VSC extension, trailing slashes are automatically included.

#### HTML

After uploading the HTML, the only Messages that have appeared are the trailing slashes, and a missing starter tag of <lang = "en">

![html-validator-fail](/assets/images/README-images/html-validator-fail.png)

The errors have been fixed, however further uploads will contain trailing slashes as they are added when the file is saved

![html-validator-pass](/assets/images/README-images/html-validator-pass.png)

#### CSS

When testing the CSS, 1 error and 2 warning have appeared.

The Error is that padding has an incorrect operator, there is a comma (,) between the two values when there shouldn't be. This

![css-validator-fail](/assets/images/README-images/css-validator-fail.png)

![css-validator-pass](/assets/images/README-images/css-validator-pass.png)

The two warning are that the import sheet will not be checked by the validator, and that the background-color and color are the same, however these are both required and will not be changed.

![css-validator-warning](/assets/images/README-images/css-validator-warnings.png)

#### JavaScript

To test the JavaScript i have used a website this i previously created that uses the JSHint API. When you originally test the code, it will come up with alot of errors, these mainly mention items available in either esversion: 6 (ES6) or esversion: 8 (ES8).

![jshint-fail-no-es8-or-8](/assets/images/README-images/jshint-fail-no-es8-or-8.png)

However if you enable ES6 and ES8 then only one error will appear, This error will appear because of a line break on line 59. This can be fixed if you remove the line brake, however due to the VSC extension, it is automatically including the line brake.

![jshint-fail-with-es8-and-8](/assets/images/README-images/jshint-fail-with-es8-and-8.png)

![jshint-pass](/assets/images/README-images/jshint-pass.png)

## Credits and References

### images

#### Bamburgh Castle

- [Historic Houses](https://www.historichouses.org/house/bamburgh-castle/visit/) - image
- [Bamburghcastle.com](https://www.bamburghcastle.com/castle/) - information

#### Alnwick gardens

- [Choose Where - Alnwick Gardens](https://choosewhere.com/alnwick-garden-visitor-guide)
- [Wikipedia - Alnwick Gardens](https://en.wikipedia.org/wiki/Alnwick_Garden)

#### Edinburgh Zoo

- [Edinburgh zoo map](https://learning.rzss.org.uk/mod/resource/view.php?id=2582)
- [Edinburghzoo.org.uk](https://www.edinburghzoo.org.uk/visit/about) - information

### Code

Google Maps API

- [Load the Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/load-maps-js-api?_gl=1*xgaozz*_up*MQ..*_ga*MjExNjI4MzQzNy4xNzU5MTU1Mjc4*_ga_SM8HXJ53K2*czE3NTkxNTUyNzckbzEkZzAkdDE3NTkxNTUyNzckajYwJGwwJGgw*_ga_NRWSTWS78N*czE3NTkxNTUyNzgkbzEkZzEkdDE3NTkxNTUzMTkkajE5JGwwJGgw#javascript)
- [Geolocation: displaying User Or Device Position on Maps](https://developers.google.com/maps/documentation/javascript/examples/map-geolocation?_gl=1*mhvji6*_up*MQ..*_ga*MTEzODQxNTEzMy4xNzU5MTYyNjYz*_ga_NRWSTWS78N*czE3NTkxNjI2NjMkbzEkZzEkdDE3NTkxNjM2NTAkajUyJGwwJGgw#maps_map_geolocation-html)

- [Advanced Marker Element: Places a Marker onto the Map](https://developers.google.com/maps/documentation/javascript/adding-a-google-map?_gl=1*1y9hta4*_up*MQ..*_ga*MTQ0NjQ0Mjg0Ni4xNzYwOTU4MTQ5*_ga_NRWSTWS78N*czE3NjA5NTgxNDkkbzEkZzAkdDE3NjA5NTgyODYkajU5JGwwJGgw*_ga_SM8HXJ53K2*czE3NjA5NTgxNDkkbzEkZzAkdDE3NjA5NTgxNDkkajYwJGwwJGgw)

- [Routes: Creating a route from one location to another](https://developers.google.com/maps/documentation/javascript/routes/get-a-route?_gl=1*evj7ft*_up*MQ..*_ga*MTQ0NjQ0Mjg0Ni4xNzYwOTU4MTQ5*_ga_NRWSTWS78N*czE3NjA5NTgxNDkkbzEkZzEkdDE3NjA5NTg0NzMkajI5JGwwJGgw*_ga_SM8HXJ53K2*czE3NjA5NTgxNDkkbzEkZzAkdDE3NjA5NTgxNDkkajYwJGwwJGgw)

- [Info Window: Created a marker above the clicked marker that includes information](https://developers.google.com/maps/documentation/javascript/infowindows?_gl=1*7ddby2*_up*MQ..*_ga*MTQ0NjQ0Mjg0Ni4xNzYwOTU4MTQ5*_ga_NRWSTWS78N*czE3NjA5NTgxNDkkbzEkZzEkdDE3NjA5NTg2MDAkajUyJGwwJGgw*_ga_SM8HXJ53K2*czE3NjA5NTgxNDkkbzEkZzAkdDE3NjA5NTgxNDkkajYwJGwwJGgw)

- [Text Search: Allows the user to search for locations](https://developers.google.com/maps/documentation/javascript/place-search?_gl=1*yq9z3j*_up*MQ..*_ga*MTQ0NjQ0Mjg0Ni4xNzYwOTU4MTQ5*_ga_NRWSTWS78N*czE3NjA5NTgxNDkkbzEkZzEkdDE3NjA5NTg3MTUkajE1JGwwJGgw*_ga_SM8HXJ53K2*czE3NjA5NTgxNDkkbzEkZzAkdDE3NjA5NTgxNDkkajYwJGwwJGgw)

Chat GPT has been used to help create the map with search and marker, however after that many additions have been added without Chat GPT
