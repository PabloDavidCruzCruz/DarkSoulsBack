const {Router} = require('express');
const router = Router();
const fs = require('fs');
const { v4 } = require('uuid');

const json_enemigos = fs.readFileSync('src/enemigos.json','utf-8');
let enemigos = JSON.parse(json_enemigos)

router.get('/',(req,res)=>{
    res.render('index.ejs',{
        enemigos
    })
});

//RenderizarFormulario
router.get('/new-entry',(req,res)=>{
    res.render('new-entry');
});

router.post('/new-entry',(req,res)=>{
    const {title,tipo,debilidad,dificultad,image,descripcion} = req.body;
    if(!title || !tipo || !debilidad || !dificultad || !image || !descripcion){
        res.status(400).send('Campos Incompletos');
        return;
    }
    
    let newEnemigo = {
        id: v4(),
        title,
        tipo,
        debilidad,
        dificultad,
        image,
        descripcion
    };
    
    enemigos.push(newEnemigo);
    const json_enemigos = JSON.stringify(enemigos)
    fs.writeFileSync('src/enemigos.json',json_enemigos,'utf-8');
    res.redirect('/');
});

router.get('/delete/:id',(req,res) => {
    enemigos = enemigos.filter(enemigo => enemigo.id !=req.params.id);
    const json_enemigos = JSON.stringify(enemigos)
    fs.writeFileSync('src/enemigos.json',json_enemigos,'utf-8');
    res.redirect('/');
});

module.exports = router;