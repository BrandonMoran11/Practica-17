let express = require('express'); // inyección de la dependecia
let router = express.Router(); // instanciamos el router

router.get('/student', function (req, res) { 
    res.render('student');  //se renderiza la vista ejs de student
});

router.post('/addStudent', (req,res)=>{
    res.render('displayData',{nombre: req.body.nombre,     //Se renderiza la vista de displayData con las keys y values que tiene de la carpeta views
                              edad: req.body.edad,
                              nss: req.body.nss,
                              tipoSangre: req.body.tipoSangre
    });
})

router.post('/personJson', express.json({type:'*/*'}), (req, res)=>{
    console.log(`nombre: ${req.body.nombre}
                apellido: ${req.body.apellido}`); //se imprimen en la terminal los datos del Json
})

router.get('/testJson', (req,res)=>{
    res.render('testJson'); //se renderiza la vista ejs de testJson
});
module.exports = router; //Se exporta el router