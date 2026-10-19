
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("CRM API fonctionne !");
});

app.get("/api/health", (req, res) => {
    res.json({ message: "Backend connecté !" });
});

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connecté !");

        const port = process.env.PORT || 3000;

        app.listen(port, () => {
            console.log(`Serveur démarré sur le port ${port}`);
        });
    } catch (error) {
        console.error("Erreur de connexion :", error.message);
    }
}

startServer();
