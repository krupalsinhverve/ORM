const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router
  .route("/")
  .post(profileController.createProfile);
  
router
  .route("/:id")
  .get(profileController.getProfileById)
  // .put(profileController.updateProfile)
  .delete(profileController.deleteProfile);

module.exports = router;
