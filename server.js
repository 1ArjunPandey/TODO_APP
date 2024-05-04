import { app } from "./app.js";
import { connectDB } from "./data/user.js";



connectDB();



app.listen(process.env.PORT, () => {
    console.log(`Server is working on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode with port no ${process.env.FRONTEND_URL}`);
})