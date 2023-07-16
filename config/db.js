const mongoose = require('mongoose');

const connectDB = async() => {

    // const conn = await mongoose.connect(process.env.MONGO_URI, {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false
    // });

    // https://stackoverflow.com/questions/68958221/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported
    /**
     * useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options.
     * Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false.
     * Please remove these options from your code.
     */
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected:  ${conn.connection.host}`);

};

module.exports = connectDB;