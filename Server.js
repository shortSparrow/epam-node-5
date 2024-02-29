const http = require("http");
const {
  isUrlMathPattern,
  extractDynamicParams,
  parseRequestBody,
} = require("./utils");

class Server {
  #server;
  #middlewares = {};

  constructor() {
    this.#server = http.createServer();
    this.#server.on("request", async (req, res) => {
      this.#addExtensions(res);

      const matchedRoute = Object.entries(this.#middlewares).find((item) => {
        const value = item[1];

        return (
          req.method === value.method &&
          isUrlMathPattern(value.pattern, req.url)
        );
      });

      const routeInfo = {
        key: matchedRoute[0],
        pattern: matchedRoute[1].pattern,
      };

      console.log("routePattern: ", routeInfo);

      if (matchedRoute && this.#middlewares[routeInfo.key]) {
        if (
          req.method === "POST" ||
          req.method === "PUT" ||
          req.method === "PATCH"
        ) {
          const reqBody = await parseRequestBody(req);
          req.body = reqBody;
        }
        req.params = extractDynamicParams(routeInfo.pattern, req.url);

        this.#middlewares[routeInfo.key].cb(req, res);
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
    // console.log("XX: ", `${path}:${method.toUpperCase()}`);
    this.#middlewares[`${path}:${method.toUpperCase()}`] = {
      pattern: path,
      method: method.toUpperCase(),
      cb,
    };
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
