const {Router} = require('express');

const router = Router();

const employeeCtrl = require('../controllers/employees.controllers.js')
//CRUD /api/employees

router.get('/', employeeCtrl.getEmployees);
router.post('/', employeeCtrl.createEmployees);
router.get('/:id', employeeCtrl.getEmployee);
router.put('/:id', employeeCtrl.editEmployees);
router.delete('/:id', employeeCtrl.deleteEmployees);

module.exports = router;