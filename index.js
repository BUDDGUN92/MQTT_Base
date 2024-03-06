const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MqttClient = require("./lib/classes/mqtt");
const cors = require("cors");
const { API_BASE_FULL, API_PORT, API_VERSION } = require('./config/ApiKeys');
// const morgan = require('morgan');
require("dotenv").config();

const mqttClient = new MqttClient();
const app = express();
app.use(
	cors({
		origin: ["http://localhost:3000"],
		credentials: true,
	})
);
// app.use(morgan('combined'));
app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(`${API_VERSION}/stats`, (req, res) => {
	// app.get("/stats", (req, res) => {
	const subscriptions = mqttClient.getSubscriptions();
	res.status(200).json({ subscriptions: subscriptions });
});


async function handleMessage(topic, msg) {
	console.log('topic => '+topic, 'msg => '+msg);
 
    // Todo:
    /* Perform the required steps to process & store the latitude and longitude in the mongodb */
	return;
}

app.listen(API_PORT,()=>{
    console.log('APP Running at ' + API_BASE_FULL);
    // username, password, callback_function
    mqttClient.connect("hive", "MosquittoServer", handleMessage);
})