const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const mongoose = require('mongoose');
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";
mongoose.connect(mongoURL, {useNewUrlParser: true})
.then(() => {
  console.log("💻 ==> Connected!!");
})
.catch((err) => {
  console.log(`Error connecting to Mongo: ${err}`);
});


// Send every other request to the React app
// Define any API routes before this runs

require("./routes/apiRoutes")(app);




app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
