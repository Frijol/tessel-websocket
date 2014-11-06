tessel-websocket
==========

Talk to Tessel over a websocket connection. This is a set of basic instructions for communicating to a Tessel from Node on your computer over a websocket connection.

*Credit: This websocket demo is a simplification from this [Neopixel-Tessel-websocket  project](https://projects.tessel.io/projects/animate-neopixels-over-websockets) by [johnnyman727](https://github.com/johnnyman727).*

## Setup

1. Clone this repo, enter its directory and run `npm install`.
1. Plug in Tessel to your computer.
1. [Connect Tessel to Wifi](start.tessel.io/wifi) with `tessel wifi -n network -p password`. Be sure to connect your Tessel to the same network as your computer.
1. Once Tessel is connected, run `tessel wifi -l` to get your Tessel's IP address.
1. In `client.js`, set `ipAddress` as your Tessel's IP address.
1. In your terminal, run `tessel run server.js` to start your Tessel listening.
  ```sh
  INFO Deploying bundle (95.00 KB)...
  INFO Running script...
  Listening on port 8000
  ```
1. In another window of your terminal, run `node client.js` to connect to your Tessel from your computer.
  ```sh
  Connected to server! You may start typing  into the console.
  ```
  In your server window, Tessel should also note the connection:
  ```sh
  INFO Deploying bundle (95.00 KB)...
  INFO Running script...
  Listening on port 8000
  Accepted new connection...
  ```
1. In the terminal window running the client, type something and hit enter to send to Tessel:
 ```sh
 Connected to server! You may start typing  into the console.
 hi

 ```
 Server-side response:
 ```sh
 INFO Deploying bundle (95.00 KB)...
 INFO Running script...
 Listening on port 8000
 Accepted new connection...
 Got data: hi
 ```
 
Congrats! You now have a websocket connection from your computer to Tessel.

## Troubleshooting

If you get disconnected, close the server and the client, reset the tessel, reconnect to wifi, and try again.
