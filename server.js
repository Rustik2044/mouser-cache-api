require('dotenv').config();
const express = require('express');
const app = express();

// Импорт маршрутов Mouser
const mouserRoutes = require('./routes/mouser');

app.use(express.json());

// Префикс /api для всех внешних API-интеграций
app.use('/api', mouserRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
