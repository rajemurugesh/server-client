const express = require('express');
const router = express.Router();


const model = require('../model/model');

//Get method
router.get("/", async (req, res) => {
    const data2 = await model.find();
    res.json(data2);
  });

  //Post method
router.post("/", async (req, res) => {
    console.log("Inside post function");
    const data = new model({
      Emp_id: req.body.Emp_id,
      Emp_name: req.body.Emp_name,
      Emp_phone: req.body.Emp_phone,
      Emp_Address: req.body.Emp_Address,
    });
    const data1 = await data.save();
    res.json(data1);
  });
  
  //Put method
router.put("/:Emp_id", async (req, res) => {
    let updateid = req.params.Emp_id;
    let updatename = req.body.Emp_name;
    let updatephone = req.body.Emp_phone;
    let updataddress = req.body.Emp_Address;
    model.findOneAndUpdate(
      { Emp_id: updateid },
      {
        $set: {
          Emp_name: updatename,
          Emp_Address: updataddress,
          Emp_phone: updatephone,
        },
      },
      { new: true },
      (err, data) => {
        if (err) {
          res.send("error");
        } else {
          if (data == null) {
            res.send("nothing found");
          } else {
            res.send(data);
          }
        }
      }
    );
  });
  
  //Delete Method
  router.delete("/:Emp_id", async (req, res) => {
    let deleteid = req.params.Emp_id;
    model.findOneAndDelete({ Emp_id: deleteid }, (err, dcos) => {
      if (err) {
        res.send("errr");
      } else {
        if (dcos == null) {
          res.send("wrong id");
        } else {
          res.send("Deleted");
        }
      }
    });
  });

module.exports = router;