const mongoose = require('mongoose');
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

let url = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("connected to database");
}).catch((err) => console.log(err));

async function main() {
    await mongoose.connect(url);
}

const initDB = async () => {
    await Listing.deleteMany({});

    // Check if initdata.data exists before performing any operations on it
    if (initdata.data && Array.isArray(initdata.data)) {
        initdata.data = initdata.data.map((obj) => ({ ...obj, owner: "65d977c7a428747aef5df220" }));
        await Listing.insertMany(initdata.data);
        console.log("connected to database successfully");
    } else {
        console.log("initdata.data is not properly defined");
    }
};

initDB();
