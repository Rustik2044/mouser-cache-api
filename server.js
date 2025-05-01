require('dotenv').config();
const express = require('express');
const app = express();
const mouserRoutes = require('./routes/mouser');

app.use(express.json());
app.use('/mouser', mouserRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
