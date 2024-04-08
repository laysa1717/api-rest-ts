import { Router } from "express";
import { ItemController } from "../controllers/ItemController";
import { ItemService } from "../services/ItemService";
import { ItemRepository } from '../repositories/ItemRepository'; 

const router = Router();
const itemRepository = new ItemRepository();
const itemService = new ItemService(itemRepository);
const itemController = new ItemController(itemService);

router.get('/', (req, res) => itemController.getAllItems(req, res));

export default router;
