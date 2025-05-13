require('dotenv').config();
const express = require('express');
const app = express();

// Импорт маршрутов Mouser
const mouserRoutes = require('./routes/mouser');

app.use(express.json());

// ✅ Используем нейтральный префикс для масштабируемости
app.use('/api', mouserRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
