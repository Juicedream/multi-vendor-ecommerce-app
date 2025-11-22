// Node modules
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// Custom modules
const { responseReturn } = require("../utils/response");

dotenv.config();

module.exports.authMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies; // get jwt token from frontend cookies

  if (!accessToken) {
    return responseReturn(res, 409, {
      error: "Please Login First",
    });
  }

  try {
    const decodedToken = await jwt.verify(accessToken, process.env.SECRET);
    // Assigning role and id to the next request
    req.role = decodedToken.role;
    req.id = decodedToken.id;
    next()
  } catch (error) {
    return responseReturn(res, 409, {
      error: "Please Login",
    });
  }
};
