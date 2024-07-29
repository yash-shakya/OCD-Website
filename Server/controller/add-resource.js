import Resource from '../models/resource.js';

export async function createResource(req, res) {
    const { title, link, category, description } = req.body;
    const result = await Resource.create({
        title,
        link,
        category,
        description
    });

    return res.status(201).send(result);
}