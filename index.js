import { io } from "socket.io-client";

/**
 * @description Socket Client
 */
export class SocketClient {
  /**
   *
   * @param {string} serverUrl - socket url
   * @param {function} syncFunction - function to trigger after notify event
   * @param {object} options - socket.io-client options
   */
  constructor(serverUrl, syncFunction, options) {
    this.syncFunction = syncFunction;
    this.socket = io(serverUrl, {
      reconnectionDelayMax: options?.reconnectionDelayMax ?? 10000,
      auth: {
        token: options?.token ?? "",
      },
    });

    // * Event to notify a client
    this.socket.on("notify", syncFunction);
  }
}
