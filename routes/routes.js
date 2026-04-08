import getProducts from "../controller/getProducts.js"
import cart from "../controller/cart.js"
function route1(app){
	// `getProducts` is exported as the default function, so use it directly
	app.get('/product', getProducts.getProduct)
    app.post('/cart',cart.create)
    app.get('/product/:id',getProducts.specificProduct)
    app.put('/update',cart.update)
}
export default route1
