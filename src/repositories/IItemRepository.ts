import { Item } from "../entities/Item";

export interface IItemRepository {
    findAll(): Promise<Item[]>;
    findById(id: string): Promise<Item | null>;
    save(item: Item): Promise<void>;
    update(id: string, item: Item): Promise<void>;
    delete(id: string): Promise<void>;
  }
