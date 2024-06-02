import { Response, Request } from "express";
import { ItemService } from "../services/ItemService";


export class ItemController{
    constructor(private itemService: ItemService){}

    async getAllItems(req: Request, res: Response){
        const items = await this.itemService.getAllItems();
        res.json(items)
    }

    async saveItem(req: Request, res: Response){
        const payloadItem = req.body
        try {
            const saveReturn = this.itemService.saveItem(payloadItem)
            res.json(saveReturn).status(201);
            return;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async updateIem(req: Request, res: Response){
        const idUpdate = req.body.id;
        const bodyUpdate = req.body.mensagem
        try {
            const updateItem = await this.itemService.updateItem(idUpdate, bodyUpdate);
            res.json(updateItem).status(201);
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async deleteItem(req: Request, res: Response){
        const idDelete = req.body.id
        try {
            const deleteId = await this.itemService.deleteItem(idDelete);
            res.json(deleteId).status(200);
            return;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

}

