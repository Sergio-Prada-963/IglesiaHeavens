import app from './mysqlDB/app.js';
const main = () =>{
    app.listen(app.get('port'));
    console.log(`mysql online Port: ${app.get('port')}`);
}
main();