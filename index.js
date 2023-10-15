var express=require("express");
var path=require("path");//lo trae incluido Node
var cors=require("cors");
var rutasUsuarios=require("./rutas/usuariosRutas");
var rutasProductos=require("./rutas/productosRutas");
var rutasUsuariosApis=require("./rutas/usuariosRutasApis");
var rutasProductosApis=require("./rutas/productosRutasApis");

var app=express();
app.set("view engine","ejs"); //indica que como motor de vista voy a utilizar la aplicación ejs
app.use(cors());
app.use(express.json()); //express utilizará un formato llamado json
app.use(express.urlencoded({extended:true}));//que detecte los formularios, cuando este en false quiere decir que no recibe archivos y si es true si, a través de los formularios
app.use("/",express.static(path.join(__dirname,"/web")));//dirname acomoda las direcciones según el sistema operativo (slashes)
app.use("/",rutasUsuarios); //indica la ruta que tiene que seguir al abrir el navegador
app.use("/",rutasProductos);
app.use("/", rutasUsuariosApis);
app.use("/", rutasProductosApis);

var port=process.env.PORT || 3000; //o me manda un puerto disponible o me manda al puerto 3000
app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port);
}); //arrancar el servidor

