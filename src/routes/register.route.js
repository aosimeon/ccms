import express from "express";

const router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.render("register", { siteName: "UCOC", title: "Register" });
});

module.exports = router;
