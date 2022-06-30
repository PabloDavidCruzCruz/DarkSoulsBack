const express = require ('express');
const app = express();
const morgan = require('morgan');

//Configuracion de servidor
app.set('port', process.env.PORT || 3000); //En caso exista un puerto en la nube, si no por defecto que tome el 3000
app.set('json spaces',2);

app.use(morgan('dev'));//Permite ver el comportamiento del servidor en tiempo real
app.use(express.urlencoded({extended: false})); //Entender datos que vienen desde inputs de formularios
app.use(express.json()); //permite recibir formatos json

//Rutas
app.use(require('./routes/index'));
app.use('/api/enemigos',require('./routes/enemigos'));

//iniciar servidor
app.listen(3000, () =>{
    console.log(`Server on port ${(3000)}`);
});

