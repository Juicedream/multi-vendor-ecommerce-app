const bcrypt = require("bcrypt");
// Custom modules
const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utils/response");
const { createToken } = require("../utils/createToken");

class authControllers {
  // Admin Login
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      // Find the admin with the email provided
      const admin = await adminModel.findOne({ email }).select("+password");
      // Check password
      const passwordMatch = await bcrypt.compare(password, admin.password);

      if (!admin || !passwordMatch) {
        return responseReturn(res, 400, {
          error: "Invalid Credentials",
        });
      }
      // Creating a sign in token
      const token = await createToken({
        id: admin._id,
        role: admin.role
      });
      // Save to cookie as response
      res.cookie('accessToken', token, {
        expires: new Date(Date.now() + 7*24*60*60*1000)
      });
      // Return success response
      responseReturn(res, 200, {
        token,
        message: "Login Sucessful"
      })

    } catch (error) {
      return responseReturn(res, 500, {
        error: error.message,
      });
    }
  };

  getUser = async (req, res) => {
    const { id, role } = req;
    try{
      if (role === "admin") {
        const user = await adminModel.findById(id).select("-password");
        return responseReturn(res, 200, {
          userInfo: user,
        })
      }else {
        console.log("Seller Info");
      }
    }catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = new authControllers();