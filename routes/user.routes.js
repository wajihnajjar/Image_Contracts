const router = require('express').Router();
const userController = require("../controllers/user.controller");
const pass = require("../controllers/confirmPassword")
const contractController = require("../controllers/contract.controller");

router.post("/register", userController.register);
router.post("/fn", userController.fn);
router.post("/registerwithfcb", userController.registerwithfcb);
router.post("/activation",userController.activate);
router.get("/userInfo",userController.decodeToken);
router.get("/allUsers",userController.getAllUsers);
router.post('/confirmPassword',pass.confirmPassword)
router.get("/notification/:id", contractController.getNotification);
router.put('/updatenot/:id',userController.updateNotifications)
router.get('/getnotstatus/:id',userController.getnotstatus)
router.delete('/deleteUser/:userId', userController.deleteUser);
router.post("/addAnswer" ,userController.addAnswer)
router.post("/getAllAnswerOfUser" , userController.getAllAnswerOfUser)
router.post("/getUserInfoWithId" , userController.getUserInfoWithId)
router.post("/getNameOfSpecificContract" , userController.getNameOfSpecificContract)
router.post ("/getAllUsersByNotification" , userController.getAllUsersByNotification)
router.post("/deleteOneNotificationOfUser" , userController.deleteOneNotificationOfUser)
router.post("/deleteAllNotificationOfUser", userController.deleteAllNotificationOfUser)
module.exports = router;
// router.post("/addAnswer" ,userController.addAnswer)
// router.post("/getAllAnswerOfUser" , userController.getAllAnswerOfUser)
// router.post("/getUserInfoWithId" , userController.getUserInfoWithId)
module.exports = router;
