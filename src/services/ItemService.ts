import { IItemRepository } from "../repositories/IItemRepository";
import { Item } from "../entities/Item";

export class ItemService{
    constructor(private itemRepo: IItemRepository){}

    async getAllItems(): Promise<Item[]>{
        return this.itemRepo.findAll();
    }
}