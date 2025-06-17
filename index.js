const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const moodRoutes = require('./routes/mood');
const recommendationRoutes = require('./routes/recommendations');
const energyRoutes = require('./routes/energy');   // <-- add this

app.use('/api/mood', moodRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/energy', energyRoutes);              // <-- add this

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
