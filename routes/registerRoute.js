import controller from "../controller/registerModel.js";

function route(app){
app.post('/register',controller.register);
app.post('/login',controller.login)
app.get('/cart',()=>{})
}
export default route 
