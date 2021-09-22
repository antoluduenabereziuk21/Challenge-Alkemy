const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const bodyParser = require('body-parser');
const apiPrefix= config.get ('apiPrefix')

app.use(bodyParser.json());
app.use("/",router);

app.listen(port, ()=> {
  console.log(`App listen in port :${port}`);
})

<<<<<<< HEAD
app.use("/user",require("./routes/userRoutes"));
=======
app.use(apiPrefix + "/user",require("./routes/userRoutes"));
app.use(apiPrefix + "/auth",require (".routes/authRoutes"));

>>>>>>> sequelize
