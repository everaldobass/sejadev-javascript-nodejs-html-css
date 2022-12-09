import { Router } from "express"

import { listUsers, createUser, deleteUser, updateUser } from "../services/userService"

const router = Router()


//Criando a rota
router.get('/', async (req, res)=>{

   const userList = await listUsers()
   res.status(201).send(userList)
})


router.post('/', async (req, res) => {
    try {

      const user = await createUser(req.body)
      res.status(201).send(user)
      
    } catch (error) {

      res.status(400).send(error)
      console.log(error)
      
    }
 })


 router.delete('/:userId', async (req, res)=>{
   await deleteUser(req.params.userId)
   res.send()

})


 router.put('/:userId', async (req, res)=>{
   await updateUser(req.params.userId)
   res.send()
 })

 
//Exportar
export default router