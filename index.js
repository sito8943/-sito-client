import { io } from "socket.io-client";

export class SocketClient {
  constructor(serverUrl, options) {
    socket = io(serverUrl, {
      reconnectionDelayMax: options?.reconnectionDelayMax ?? 10000,
      auth: {
        token: options?.token ?? "",
      },
    });
  }
}
