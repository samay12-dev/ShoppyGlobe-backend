import getProducts from "../controller/getProducts.js"
function route1(app){
	// `getProducts` is exported as the default function, so use it directly
	app.get('/product', getProducts.getProduct)
    app.post('/cart',getProducts.createProduct)
    app.get('/product/:id',getProducts.specificProduct)
}
export default route1
