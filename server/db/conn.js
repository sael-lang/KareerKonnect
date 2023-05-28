const mongoose = require("mongoose");

const DB =
  "mongodb+srv://aliraza:kareerkonnect19@cluster0.wo9dtro.mongodb.net/kareerkonnect?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Server Started Successfully!"))
  .catch((error) => console.log(error.message));
