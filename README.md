# Weather Application
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

![image](https://user-images.githubusercontent.com/73398186/176395416-aec1d4a4-09e4-4ceb-b515-0f4514c3feed.png)

## Description

The weather application has two sub systems.  
* **Client side** - written using React.js  
deployed here: https://weatherapplicationclient.herokuapp.com/ 
* **Server side** - written using Node.js & Express  
deployed here: https://weatherapplication10.herokuapp.com/  
(to get a response from the server use it like this: https://weatherapplication10.herokuapp.com/getWeatherCity?city=${query} )

## Getting Started

### Dependencies

* Node.js v14.17.5
* Windows 10

### Installing

* Clone this repository locally
* In each folder (front and server) run:
```
npm install
```

### Executing program

**Each subsystem needs to run individually**
* open cmd in front folder and run 
```npm start```
* open *another* cmd in server folder and run
```node app.js```

## IMPORTANT

The current React.js app is requesting data from the **deployed server**.
To make the app send requests to the local server (folder server):  
1. Access front/src/App.js
2. In App.js line 17 appears the alternative link (`http://localhost:3001/getWeatherCity?city=${query}`)
3. Copy the previous link and paste it instead of the link in line 18 (inside the fetch function)
