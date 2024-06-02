import { Router } from "express";
import { ItemController } from "../controllers/ItemController";
import { ItemService } from "../services/ItemService";
import { ItemRepository } from '../repositories/ItemRepository'; 

const router = Router();
const itemRepository = new ItemRepository();
const itemService = new ItemService(itemRepository);
const itemController = new ItemController(itemService);

router.get('/', (req, res) => itemController.getAllItems(req, res));
router.post('/delete', (req, res) => itemController.deleteItem(req, res));
router.post('/save', (req, res) => itemController.saveItem(req, res));
router.post('/update', (req, res) => itemController.updateIem(req, res));


export default router;
