const employeeCtrl = {};

const Employee = require('../models/Employee');


employeeCtrl.getEmployees = async (req,res)=>{
 const employees = await Employee.find()

 res.json(employees)
};

employeeCtrl.createEmployees = async(req,res)=>{
 const newEmployee = new Employee(req.body);
console.log(newEmployee);
await newEmployee.save();
res.json({status:"save"})

};
employeeCtrl.getEmployee = async (req,res)=>{
    const employee = await Employee.findById(req.params.id);
    res.json(employee);

};
employeeCtrl.editEmployees = async (req,res)=>{
    const employee = await Employee.findByIdAndUpdate(req.params.id,req.body);
    console.log(employee);
    
     res.json({status:"update"})
 

};
employeeCtrl.deleteEmployees = async (req,res)=>{
  await Employee.findByIdAndDelete(req.params.id);
   
     res.json({status:"delete"});
 

};

 module.exports =employeeCtrl;