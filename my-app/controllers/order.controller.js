const orderService = require("../services/order.service")

async function createOrder(req, res) {
    try {
        const response = await orderService.createOrder(req.body);
        if (response == null) {
            return res.status(401).json({ error: "Create order failed" });
        }
        else {
            res.json({ success: true, message: "Order created successfully" });
        }
    }
    catch (ex) {
        console.error(ex.stack)
        res.status(400);
        res.json({ success: false, error: ex.message });
    }
}


module.exports = {
    createOrder
}