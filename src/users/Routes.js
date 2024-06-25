import { Router } from "express";
import Controller from "./Controller.js";

export const router = Router()

// Get

router.get('/', Controller.GetUsers)
router.get('/:id', Controller.GetUserByID)

// Post

router.post('/', Controller.CreateUser)

// Delete

router.delete('/:id', Controller.DeleteUserByID)

// Put
router.put('/:id', Controller.UpdateUserByID)