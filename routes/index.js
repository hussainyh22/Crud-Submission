const express = require("express");
const studentRouter = require("./student");
const router = express.Router();

router.use("/", studentRouter);

module.exports = studentRouter;


// router.use("/student", studentRouter);

// module.exports = router;