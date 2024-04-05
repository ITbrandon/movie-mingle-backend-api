import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoute from "./routes/post.route.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/api/posts", postRoute);

mongoose
  .connect(
    "mongodb+srv://brandoniticka:eCMyRjhRmZ4fGn6X@backenddb.qx5crjn.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server Listening on Port 3000");
    });
  })
  .catch(() => {
    console.log("Failed to Connect");
  });
