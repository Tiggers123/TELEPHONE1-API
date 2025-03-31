const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

//
// middleware
//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
// controllers
//
const { UserController } = require("./controllers/UserController");
const { CompanyController } = require("./controllers/CompanyController");
const { ProductController } = require("./controllers/ProductController");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//
//user
//
app.post("/api/user/signin", UserController.signIn);

//
//company
//
app.post("/api/company/create",CompanyController.create);
app.get("/api/company/list", CompanyController.list);
//
//buy
//
app.post("/api/buy/create",ProductController.create);
app.get("/api/buy/list",ProductController.list);
app.put("/api/buy/update/:id",ProductController.update);
app.delete("/api/buy/remove/:id",ProductController.remove);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
