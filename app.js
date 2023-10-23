const express = require("express");
const app = express();

const port = 3000;

const welcome = (req, res) => {
  res.send("Welcome to Express");
};

app.get("/", welcome);

const welcomeName = (req, res) => {
  res.send(`Welcome ${req.params.name}`);
};

app.get("/users/:name", welcomeName);

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});

const cocktails = [
    {
      id: 1,
      name: "Margarita",
    },
    {
      id: 2,
      name: "Mojito",
    },
    {
      id: 3,
      name: "Cuba Libre",
    },
  ];
  
  const getCocktails = (req, res) => {
    res.status(200).json(cocktails);
  };
  
  app.get("/api/cocktails", getCocktails);