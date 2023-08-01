const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = 'Harryisagoodb$0y'


// ROUTE 1: create a user using: POST "/api/auth/createuser" No login required
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  let success = false
  // if there are errors, return bad request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  // check whether user exist already or not

  try {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ success, error: "user already exist" })
    }

    const salt = await bcrypt.genSaltSync(10);

    const secPass = await bcrypt.hashSync(req.body.password, salt);

    // Create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })

    const data = {
      user: {
        id: user.id
      }
    }

    const authtoken = jwt.sign(data, JWT_SECRET);

    success = true
    res.json({ success, authtoken })

  } catch (error) {
    console.log(error.message)
    res.status(500).send("Internal Server Error")
  }



  // .then(user => res.json(user))
  // .catch(err=> {console.log(err)
  //   res.json({error:'This email is already taken, please enter another email'})
  // })    


})

// Route 2: Authenticate a user using: POST "/api/auth/createuser" No login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').exists(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


const { email, password } = req.body;
try {
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "please use correct credentials" });
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    success = false
    return res.status(400).json({ success, error: "please use correct credentials" });
  }

  const data = {
    user: {
      id: user.id
    }
  }

  const authtoken = jwt.sign(data, JWT_SECRET);
  
  success = true
  res.json({ success, authtoken })

} catch (error) {
  console.log(error.message)
  res.status(500).send("Internal Server Error")
}
})

// ROUTE 3: Get loggen in user details using: POST "/api/auth/getuser"  Login required
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.log(error.message)
  res.status(500).send("Internal Server Error")
  }
})

module.exports = router