const shoppingCartService = require("../services/shoppingCart.service")

async function getActiveShoppingCart(req, res) {
    try {
        res.json({ sucess: true, data: await shoppingCartService.getActiveShoppingCart() });

    } catch (ex) {
        console.error(ex.stack)
        res.status(400).json({ success: false, error: ex });
    }
}

async function addProductToShoppingCart(req, res) {
    try {
        const response = await shoppingCartService.addProductToShoppingCart(req.body.productId,req.body.count);
        req.session.shoppingCart = response;
        res.json({ success: true, data: response });
    } catch (ex) {
        console.error(ex.stack);
        res.status(400).send(ex);
    }

}

async function removeProductFromShoppingCart(req, res) {
    try {

    } catch (ex) {
        console.error(ex.stack);
        res.status(400).json({ success: false, error: ex });
    }
    const response = await shoppingCartService.removeProductFromShoppingCart(req.body.productId,req.body.count);
    req.session.shoppingCart = response;
    res.json({ success: true, data: response });
}

async function deleteShoppingCart(req, res) {
    const response = await shoppingCartService.deleteShoppingCart(req.body.Id);
    delete req.session.shoppingCart;
    res.json({ success: true, message: "Deleted successfully" });
}

async function createShoppingCart(req, res) {
    if (req.session.loggedIn) {
        const productId = req.body;
        res.render("../views/shoppingCart", { shoppingCart: await shoppingCartService.createShoppingCart( productId) });
    }
    else {
        return res.redirect("/signin");
    }
}

async function getProducts(req, res) {
    res.render("shoppingCart", { shoppingCart: await shoppingCartService.getProducts() });
}

module.exports = {
    getActiveShoppingCart,
    addProductToShoppingCart,
    deleteShoppingCart,
    createShoppingCart,
    removeProductFromShoppingCart,
    getProducts
}
