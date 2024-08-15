const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://jayasricharan8122:PrjRuleEngine@ruleengine.k8t26.mongodb.net/rule-engine?retryWrites=true&w=majority');

    // Connection Success
    console.log('MongoDB connected...'); 

    // Optional: Listen for connection events
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
      console.error(`Mongoose connection error: ${err.message}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Mongoose disconnected from MongoDB');
    });

  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;


