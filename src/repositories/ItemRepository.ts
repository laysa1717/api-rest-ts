import { Item } from "../entities/Item";
import { IItemRepository } from "./IItemRepository";

export class ItemRepository implements IItemRepository {
  private items: Item[] = []; // Este array funciona como nossa "base de dados" em memória

  async findAll(): Promise<Item[]> {
    return this.items;
  }

  async findById(id: string): Promise<Item | null> {
    const item = this.items.find(item => item.id === id);
    if (!item) return null;
    return item;
  }

  async save(item: Item): Promise<void> {
    this.items.push(item);
  }

  async update(id: string, updatedItem: Item): Promise<void> {
    const itemIndex = this.items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      this.items[itemIndex] = updatedItem;
    }
  }

  async delete(id: string): Promise<void> {
    const itemIndex = this.items.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
      this.items.splice(itemIndex, 1);
    }
  }
}
