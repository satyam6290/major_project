const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const  allistings = await  Listing.find({});
        res.render("index.ejs",{allistings});
    };

module.exports.renderNewForm = (req, res) => {
        res.render("new.ejs");
    };
module.exports.createListing = async (req, res, next) => {
 
let url = req.file.path;
let filename = req.file.filename;
    let listing = req.body.listing;
        const newListing = new Listing(listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
        await newListing.save();
        req.flash("success","New listing created!");
        res.redirect("/listings");
    };

    module.exports.showListing = async(req, res) => {
        let{id} = req.params;
        const listing = await Listing.findById(id)
        .populate({
            path:"reviews",
            populate:{
                path:"author",
            },
            })
        .populate("owner");
        if(!listing) {
            req.flash("error"," listing you are requested does not exist!");
            res.redirect("/listings");
        }
       // console.log(listing);
        res.render("show.ejs",{listing});
    };

    module.exports.editListing = async (req,res) => {
        let {id} = req.params;
        const listing = await Listing.findById(id);
        if(!listing) {
            req.flash("error"," listing you are requested does not exist!");
            res.redirect("/listings");
        }
        let originalImageUrl = listing.image.url;
      originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_200");
        res.render("edit.ejs", {listing, originalImageUrl});
    };

    module.exports.updateListing =  async (req, res) => {
        let {id} = req.params;
let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
   listing.image = {url,filename};
   await listing.save();
 }
        req.flash("success"," listing Updated!");
    
       res.redirect(`/listings/${id}`);
    
    };

    module.exports.deleteListing = async (req, res) => {
        let {id} = req.params;
        let deletedListings = await Listing.findByIdAndDelete(id);
       // console.log(deletedListings);
        req.flash("success"," listing Deleted!");
        res.redirect("/listings");
    };
