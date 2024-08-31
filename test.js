import { SocketClient } from "./index.js";

const serverUrl = process.env.SERVER_URL;

const socket = new SocketClient(serverUrl, {
  onConnected: (socket) => console.info(socket),
  onDisconnect: (socket) => console.info(socket),
  onNotify: (socket) => console.info(socket),
});
