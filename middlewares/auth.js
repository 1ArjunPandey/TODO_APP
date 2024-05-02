import { User } from "../model/user.js";
import jwt from "jsonwebtoken"
import ErrorHandler from "./error.js";



export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) return next(new ErrorHandler("Login first", 404))
    // if (!token) {
    //     return res.status(404).json({
    //         success: false,
    //         message: "Login first",
    //     });
    // }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
    req.user = await User.findById(decoded._id)

    next();

}