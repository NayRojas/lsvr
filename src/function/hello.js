// src/functions/hello.js

module.exports = (req, res) => {
    res.status(200).json({ message: "Hello from the serverless function!" });
  };
  