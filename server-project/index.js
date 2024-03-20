const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//import routes 
const userRoutes = require('./routes/user_routes')
const superheroRoutes = require('./routes/superhero_routes');
const addressRoutes = require('./routes/address_routes')

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4003;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// http://localhost:4003/
app.listen(PORT, () => console.log('Server running on port', PORT));

// http://localhost:4003/api/v1/users/new-user
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/superheros', superheroRoutes);
app.use('/api/v1/address', addressRoutes);

//connect to mongo
const getConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION );
      //,{
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    //});
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Failed with error: ${error.message}`);
  }
};

getConnection();
