const mqtt = require("mqtt");
const { MQTT_URL, MQTT_PORT } = require("../../config/ApiKeys");

class MqttClient {
	constructor() {
		if (MqttClient.instance) {
			return MqttClient.instance;
		}

		this.client = null;
		MqttClient.instance = this;
		this.topics = ["ride/#"]; // hardcoded topics
		this.subscribedTopics = new Set();
	}

	connect(_username, _password, handleMessageCallback) {
		const connectOptions = { username: _username, password: _password, clean: true };
		if (!this.client) {
			this.client = mqtt.connect(MQTT_URL + MQTT_PORT, connectOptions);
			this.client.on("connect", () => {
				console.log("Connected to MQTT broker");
				this.client.subscribe(this.topics);
				this.topics.forEach((topic) => {
					console.log('subscribed to ', topic);
					this.subscribedTopics.add(topic);
				});
			});
			this.client.on("error", (err) => {
				console.log("Error", err.message);
			});
			this.client.on("message", (topic, msg) => {
				// console.log('new message', msg.toString());
				// this.handleMessage(topic, msg);
				handleMessageCallback(topic, msg);
			});
			this.client.on("connection", (client) => {
				console.log("New MQTT client connected", client);
			});
		}
	}

	subscribe(topic) {
		if (!this.subscribedTopics.has(topic)) {
			this.client.subscribe(topic);
			this.subscribedTopics.add(topic);
		}
	}

	unsubscribe(topic) {
		if (this.subscribedTopics.has(topic)) {
			this.client.unsubscribe(topic);
			this.subscribedTopics.delete(topic);
		}
	}

	publish(topic, message) {
		this.client.publish(topic, message);
	}

	getSubscriptions() {
		return Array.from(this.subscribedTopics);
	}

}

module.exports = MqttClient;
