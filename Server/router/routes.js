import createrouter from "./add-resource.js";

function routes(app){
    app.use("/",createrouter);
}

export default routes