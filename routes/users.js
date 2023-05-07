const express = require("express");
const router = express.Router();


router.use(logger);


router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("New User Form");
});

router.get("/premium", (req, res) => {
  res.send("User Premium List");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

// Elementary way to add methods on each route
router
  .route("/:userId")
  .get((req, res) => {
    console.log(req.user);
    req.params.userId;
    res.send(`Get User with User ID ${req.params.userId}`);
  })
  .put((req, res) => {
    req.params.userId;
    res.send(`Update User with User ID ${req.params.userId}`);
  })
  .delete((req, res) => {
    req.params.userId;
    res.send(`Delet User with User ID ${req.params.userId}`);
  });

// // Beginners way to add methods on each route
// router.get('/:userId', (req, res) => {
//     req.params.userId
//     res.send(`Get User with User ID ${req.params.userId}`)
// })

// router.put('/:userId', (req, res) => {
//     req.params.userId
//     res.send(`Update User with User ID ${req.params.userId}`)
// })

// router.delet('/:userId', (req, res) => {
//     req.params.userId
//     res.send(`Delet User with User ID ${req.params.userId}`)
// })

const users = [
  { name: "Kyle", email: " ky@email.com" },
  { name: "Sally", email: "Sally@email.com" },
];

router.param("userId", (req, res, next, userId) => {
  req.user = users[userId];
  next();
});


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
  }

module.exports = router;
