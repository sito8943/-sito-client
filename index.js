import { io } from "socket.io-client";

/**
 * @description Socket Client
 */
export class SocketClient {
  /**
   *
   * @param {string} serverUrl - socket url
   * @param {object} callbacks - functions to trigger after certain events
   * @param {object} options - socket.io-client options
   */
  constructor(serverUrl, callbacks, options) {
    this.socket = io(serverUrl, {
      reconnectionDelayMax: options?.reconnectionDelayMax ?? 10000,
      auth: {
        token: options?.token ?? "",
      },
    });

    const {
      onConnected = () => {
        console.info("connected");
      },
      onDisconnect = () => {
        console.info("disconnected");
      },
      onNotify = () => {
        console.info("notified");
      },
      onError = (error) => {
        console.error(error.message);
      },
    } = callbacks;

    this.socket.on("error", onError);
    this.socket.on("connected", onConnected);
    this.socket.on("disconnect", onDisconnect);
    this.socket.on("notify", onNotify);
  }
}
