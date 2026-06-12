import { Router } from 'express';
export function createCollectionRouter(collectionName, model) {
    const router = Router();
    router.get('/', async (_request, response, next) => {
        try {
            const items = await model.find();
            response.json({ collection: collectionName, items });
        }
        catch (error) {
            next(error);
        }
    });
    router.post('/', async (request, response, next) => {
        try {
            const item = await model.create(request.body);
            response.status(201).json({ collection: collectionName, item });
        }
        catch (error) {
            next(error);
        }
    });
    return router;
}
