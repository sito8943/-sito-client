# Super small Socket Client for chat

## Events

1. connected - to know if the client connected
2. disconnect - to know if the client disconnected
3. notify - to know if the client has to sync with the server
4. error - to know if an error has occurred

### How to use

```
import { SocketClient } from "@sito/socket-client";

const serverUrl = process.env.SERVER_URL;

const socket = new SocketClient(serverUrl, {
  onConnected: (socket) => console.info(socket),
  onDisconnect: (socket) => console.info(socket),
  onNotify: (socket) => console.info(socket),
});
```
