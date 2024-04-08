import { Response, Request } from "express";
import { ItemService } from "../services/ItemService";


export class ItemController{
    constructor(private itemService: ItemService){}

    async getAllItems(req: Request, res: Response){
        const items = await this.itemService.getAllItems();
        res.json(items)
    }

}

