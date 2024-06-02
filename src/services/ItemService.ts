import { IItemRepository } from "../repositories/IItemRepository";
import { Item } from "../entities/Item";

export class ItemService{
    constructor(private itemRepo: IItemRepository){}

    async getAllItems(): Promise<Item[]>{
        return this.itemRepo.findAll();
    }

    async saveItem(payloadItem: any): Promise<void>{
        return this.itemRepo.save(payloadItem);
    }

    async updateItem(id:any, Item:any): Promise<void>{
        return this.itemRepo.update(id, Item);
    }

    async deleteItem(id:any){
        return this.itemRepo.delete(id);
    }
}