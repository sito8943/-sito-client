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
      onConnection = () => {}, // to trigger on connection
      onDisconnection = () => {}, // to trigger on disconnection
      onNotify = () => {}, // to trigger whenever is notified
    } = callbacks;

    // * Event to notify a client
    this.socket.on("connection", onConnection);

    // * Event to notify a client
    this.socket.on("disconnection", onDisconnection);

    // * Event to notify a client
    this.socket.on("notify", onNotify);
  }
}
