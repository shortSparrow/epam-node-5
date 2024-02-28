const http = require("http");

const parseRequestBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      resolve(JSON.parse(body));
    });

    req.on("error", (error) => {
      reject(error);
    });
  });

class Server {
  #server;
  #middlewares = {};

  constructor() {
    this.#server = http.createServer();
    this.#server.on("request", async (req, res) => {
      this.#addExtensions(res);

      const key = `${req.url}:${req.method}`;
      // console.log("key: ", key);
      if (this.#middlewares[key]) {
        if (
          req.method === "POST" ||
          req.method === "PUT" ||
          req.method === "PATCH"
        ) {
          const reqBody = await parseRequestBody(req);
          req.body = reqBody;
        }
        this.#middlewares[key](req, res);
      }
    });
  }

  #addExtensions = (res) => {
    res.status = (code) => {
      res.statusCode = code;
      return res;
    };

    res.json = (data) => {
      res.appendHeader("Content-Type", "application/json");
      res.write(JSON.stringify(data));
      res.end();
    };
  };

  route = (method, path, cb) => {
    // console.log("XX: ", `${path}:${method}`);
    this.#middlewares[`${path}:${method.toUpperCase()}`] = cb;
  };

  listen = (port, address, cb) => {
    this.#server.listen(port, address, () => {
      console.log("Lister server on: ", this.#server.address());
      cb?.();
    });
  };

  useRouter = (routes) => {
    routes.forEach((routeItem) => {
      this.route(routeItem.method, routeItem.path, routeItem.cb);
    });
  };

  static createRouter = () => {
    const list = [];
    return {
      add: (method, path, cb) => {
        list.push({
          method,
          path,
          cb: cb,
        });
      },
      getRoutes: () => list,
    };
  };
}

const server = new Server();

module.exports = {
  app: server,
  Server,
};
