import express from "express";
import { isAuthenticated ,authorizeAdmin} from "../middlewares/auth.js";
import { paymentVerfication,placeOrder,getMyOrders, getOrderDetails, getadminOrders ,processOrder,placeOrderOnline} from "../controllers/order.js";
const router=express.Router();

router.post("/createorderonline",isAuthenticated,placeOrderOnline);
router.post("/paymentverfication",isAuthenticated,paymentVerfication);
router.post("/createorder",isAuthenticated,placeOrder);
router.get("/myorders",isAuthenticated,getMyOrders);
router.get("/order/:id",isAuthenticated,getOrderDetails);
router.get("/admin/orders",isAuthenticated,authorizeAdmin,getadminOrders);
router.get("/admin/order/:id",isAuthenticated,authorizeAdmin,processOrder);
export default router;   