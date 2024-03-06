Author: BSG92, BUDDGUN92
### Run `npm i` to install the dependencies

## Contains the minimal code required.
`.env` <br>
`config/ApiKeys.js` <br>
`lib/classes/mqtt.js` <- contains the hardcoded topics.
 <br>

Set the below params as required. Can be found in `index.js` file.<br>
 ` mqttClient.connect(username, password, callback_function);`


## Inorder to connect to the HiveMQ cluster instance:
Change the following values in the `.env` file.<br>
`MQTT_PORT=8883/mqtt`<br>
`MQTT_URL="mqtts://your_instance.s1.eu.hivemq.cloud:"`
