const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database')


/* GET home page. */
router.get('/',function (req,res){
    res.send('ESTA ES LA RUTA RAIZ DEL PROYECTO')
})

router.get('/getall',(req,res)=>{
    mysqlConnection.query('SELECT * FROM student',(error,result)=>{
        if(error){
            res.send('error to fetch student all records')
        }else {
            res.json(result);
        }
    })
})



router.post('/create', (req, res) => {
    const data = [req.body.id,req.body.firstname, req.body.lastname, req.body.roll_number];

    mysqlConnection.query('INSERT INTO student SET id = ?, firstname = ?, lastname = ?, roll_number = ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
})

router.put('/update/:id', (req, res) => {
    const data = [req.body.firstname, req.body.lastname, req.body.roll_number, req.params.id];
    mysqlConnection.query('UPDATE student SET firstname = ?, lastname = ?, roll_number = ? WHERE id = ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    mysqlConnection.query('DELETE FROM student WHERE id =' + id, (error, result) => {
        if (error) throw error;
        res.send(result);
    });
});


module.exports = router;