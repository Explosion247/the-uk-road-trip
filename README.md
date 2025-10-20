#the UK road trips

## Site Overview

The aim of this website is to help people decide where they would like to visit on their next road trip around the uk.

This website will have a variety of different locations to visit, for example Edinburgh zoo, Bamburgh castle or Alnwick gardens. The user will be able to create a list of all the places they would like to visit.

Using this list you will be able to estimate how long your trip will take, how long it will to move from one destination to another, and add in your own locations you would like to visit. You will be able to use this website to get directions to different place using google maps, however while you are traveling it would be better to use your own navigation app and use this website only for planning.

## Table of Content

User Experience UX

[Design](#design)

- [Colours](#colours)
- [Wireframe](#wireframe)

[Features](#features)

Deployment

Testing

Technologies Used

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

## Deployment

The website was created using Virtual Studio Code (VSC) and its then linked to a Repository on GitHub. Within VSC there is a Commit and

## Credits and References

### images

#### Bamburgh Castle

- [Historic Houses](https://www.historichouses.org/house/bamburgh-castle/visit/) - image
- [Bamburghcastle.com](https://www.bamburghcastle.com/castle/) - information

#### Alnwick gardens

- [Choose Where - alnwick gardens](https://choosewhere.com/alnwick-garden-visitor-guide)
- []

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
