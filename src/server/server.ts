import * as express from "express";
import * as http from "http";

const app = express();

app.use(express.static(__dirname));

const expressServer: http.Server = app.listen(9000);
