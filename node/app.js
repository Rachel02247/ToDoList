// const express = require('express');
// const axios = require('axios');

// const app = express();
// const PORT = process.env.PORT || 3000;

// const API_KEY = 'rnd_yNMd6vAVoTZrTHYj3r2EXjiHTGsa';

// app.get('/services', async (req, res) => {
//     try {
//         const response = await axios.get('https://api.render.com/v1/services', {
//             headers: {
//                 'Authorization': `Bearer ${API_KEY}`,
//                 'Accept': 'application/json'
//             }
//         });
//         res.json(response.data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error retrieving services');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// API של Render
const RENDER_API_URL = "https://api.render.com/v1/services";
const API_KEY = 'rnd_yNMd6vAVoTZrTHYj3r2EXjiHTGsa';

// נקודת קצה שמחזירה את רשימת האפליקציות
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(RENDER_API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Render API:", error);
    res.status(500).json({ error: "Failed to fetch data from Render API" });
  }
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
