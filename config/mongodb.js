const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MongoDB');
    }
});