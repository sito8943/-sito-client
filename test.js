import { SocketClient } from "./index.js";

const serverUrl = process.env.SERVER_URL;

const socket = new SocketClient(serverUrl);
