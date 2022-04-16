# Hydroponic Irrigation With IoT

Farms around the world account for 70% of all water that is consumed annually. A large amount of this water goes to waste due to the use of poor irrigation techniques, evaporation, and overall water management. Hydroponics can be a solution to this problem due to the efficient use and re-use of water in the system.

Hydroponics refers to an agricultural technique where plants are grown without soil. Plants do not need soil to grow; instead, they require the nutrients obtained from the soil. In a hydroponic system, the nutrients are dissolved in water and circulated through the system. This process has been found to improve the quality yield and shorten growth time. Hydroponic Systems also maximize the use of cultivation space and prevent challenges such as pollution from pesticides and insecticides. Hydroponics can be made more efficient through IoT. The use of sensors and actuators can enable automation of the irrigation process. This could also enable the collection of vital farming data, which can be used to ensure data-driven farming.

# Components Used
- PVC Pipes, Tubes, Tank/Container, Plastic Cups, Arduino micro-controller, float switch, submersible pump, LCD display, LEDs, piezzo, DHT11 Sensor, water level sensor, PIR Sensor, wires, breadboard.
 ## Assembly
 ### Image 1
 Vertical System Assembly
 ![hw](https://user-images.githubusercontent.com/53308954/163692704-2207e87a-6d13-442d-8cc6-27dc28ed6b0c.jpeg)

 ### Image 2
 Sensors And Actuators
 ![ArduinoArchitecture1](https://user-images.githubusercontent.com/53308954/163692811-e7b886a6-c78a-4fbd-a23d-857ad4f750f3.jpeg)

## Demo
https://user-images.githubusercontent.com/53308954/163692493-5c88afd8-9765-446c-af9c-89fcc2ab7307.mp4
## Installation

Install my project with npm

```bash
  npm install
  touch .env
  node app.js  
```

```bash
  cd client
  npm install
  npm start 
```

```bash
  cd socket
  npm install
  node index.js
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`JWT_SECRET`

## Future Work
- Incorporation of an ESP32 module for data transfer using wifi.
- Adding LED Strips (serve as growth lights), pH sensor
- Data Analytics for Data Collected
- Notification for Events in the calendar


