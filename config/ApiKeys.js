require("dotenv").config();
const process = require("process");

const API_ADDRESS = process.env.API_ADDRESS;
const API_PORT = process.env.API_PORT;
const API_VERSION = process.env.API_VERSION;

const API_BASE = `${API_ADDRESS}:${API_PORT}`;
const API_BASE_FULL = `${API_ADDRESS}:${API_PORT}${API_VERSION}`;

const MQTT_URL = process.env.MQTT_URL;
const MQTT_PORT = process.env.MQTT_PORT;

const MONGODB_URL = process.env.MONGODB_URL;

module.exports = {
	API_ADDRESS,
	API_PORT,
	API_VERSION,
	API_BASE,
	API_BASE_FULL,
	MQTT_URL,
	MQTT_PORT,
	MONGODB_URL,
};
