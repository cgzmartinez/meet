# Meet App

## Description

The goal of this project is to build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Feature 1

### User Story
As a user, I should be able to filter events by city so that I can see the list of events that take place 
in that city.

### Scenarios

1. Given that the user hasn’t searched for any city, when the user opens the app, then the user should see 
a list of all upcoming events.

2. Given that the main page is open, when the user starts typing in the city textbox, then the user should 
see a list of cities (suggestions) that match what they’ve typed.

3. Given that the user was typing “Berlin” in the city textbox and the list of suggested cities is showing, 
when the user selects a city (e.g., “Berlin, Germany”) from the list, then their city should be changed 
to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city.

## Feature 2

### User Story  
As a user, I should be able to show/hide event details so that I can show/hide information about 
an event.

### Scenarios

1. Given that the app hasn't been opened, when the user opens the app, then all of the event details should
be collapsed. 

2. Given that the event details are hidden, when the user opens the event, then the details about the event 
should be shown.

3. Given that the event details are shown, when the users click the event, then the details should be hidden.

## Feature 3

### User Story 
As a user, I should be able to specify the number of events so that I can change how many events I want to see.

### Scenarios

1. Given that the user hasn't specified a number, when the user searches for events, then the default number is 32. 

2. Given that a number of events are show, when the user changes the number of events shown, then the events shown 
reflect that number.

## Feature 4

### User Story 
As a user, I should be able to use the app when offline so that I can see recent/cached data. 

### Scenarios

1. Given that there is no internet connection, when the user opens/uses the app, the app will show cached data.

2. Given that there is no internet connection, when the user changes settings (city, time range, etc.), then the app
will show an error. 

## Feature 5

### User Story 
As a user, I should be able to have access to visual data so that it is easier to understand.  

### Scenarios

1. Given that there are upcoming events in cities, when the user searches for events in a city, then the
data should be shown as a chart with the number of upcoming events in each city.


## Technologies
- React
