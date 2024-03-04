const express = require("express");
const router = express();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isloggedIn,isOwner,validateListing} = require("../middleware.js");

const listingController = require("../controllers/listing.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


router.route("/")
.get(wrapAsync(listingController.index))
.post(
isloggedIn,
upload.single('listing[image]'),
validateListing,
     wrapAsync(listingController.createListing)
     );


  // New route
  router.get("/new",isloggedIn,listingController.renderNewForm);


router.route("/:id")
     //show routes
.get(wrapAsync( listingController.showListing))
//update routes
.put(isloggedIn,
     isOwner,
     upload.single('listing[image]'),
wrapAsync(listingController.updateListing))
//delte routes
.delete(isloggedIn,isOwner,
wrapAsync( listingController.deleteListing)
);
  
//edit routes
router.get("/:id/edit", 
isloggedIn,
isOwner,

wrapAsync(listingController.editListing));




module.exports = router;
