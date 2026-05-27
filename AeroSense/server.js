const express = require("express");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 3000;

// serve frontend
app.use(express.static(path.join(__dirname, "public")));

// -------------------------
// ARDUINO CONNECTION (FIXED)
// -------------------------
const port = new SerialPort({
    path: "COM9",
    baudRate: 9600
});

const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));

port.on("open", () => {
    console.log("Arduino connected on COM9");
});

parser.on("data", (data) => {
    console.log("Arduino:", data.toString().trim());

    // send clean data to browser
    io.emit("sensorData", data.toString().trim());
});

port.on("error", (err) => {
    console.log("Serial Port Error:", err.message);
});

// -------------------------
// FRONTEND CONNECTION
// -------------------------
io.on("connection", (socket) => {
    console.log("Frontend connected");
});

// -------------------------
// START SERVER
// -------------------------
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});