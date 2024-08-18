import createrouter from "./add-resource.js";
import viewrouter from "./view-resource.js";
import userRoute from "./user.js";

function routes(app){
    app.use("/create",createrouter);
    app.use("/view",viewrouter);
    app.use("/",userRoute);
}

export default routes