const { app } = require("./Server");
const { api } = require("./routes/api");

const PORT = 8000;

app.useRouter(api);

app.listen(PORT, "localhost");
