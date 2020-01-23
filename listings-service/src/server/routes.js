import { Listings } from "#root/db/models";
import { Listing } from "../db/models";
const setupRoutes = app => {
  app.get("/listings", async  (req, res, next) => {
    const listings = await Listing.findAll();
    return res.json(listings);
  });
};

export default setupRoutes;
