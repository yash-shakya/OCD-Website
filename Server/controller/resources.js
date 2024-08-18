import resource from "../models/resource.js";

export async function addResource(req,res){
    const { title, link, category, description } = req.body;
    const result = await resource.create({
        title,
        link,
        category,
        description
    });
    console.log(result);
    return res.status(201).redirect("https://jaiyankargupta.github.io/OCD-Website/html/add-resource.html");
}

export async function viewResource(req,res){
    const resources = await resource.find({});
    res.json(resources);
}