const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');


const cors = require("cors");
const app = express();

const mysql = require(`mysql-await`);
//create database connection
const conn = mysql.createConnection({
  host: 'mysql-ch3ster.alwaysdata.net',
  user: 'ch3ster',
  password: 'masucxcv',
  database: 'ch3ster_db'
});

//connect to database
conn.connect((err) => {
    console.log(`error aru ka? ${err}`)
    if (err) throw err;
    console.log('Mysql Connected...');
});


app.use(cors({ origin: true }));
app.use(cors());

const hbs = require('hbs');




app.use(fileUpload());

app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use('/static', express.static('static'));

app.post("/seki/darubi",  async (req, res) => {

    console.log("enter post");

    const passportfile = req.files.passfile.data;
    const transferfile = req.files.transfile.data;
    const ststatusfile = req.files.status_file.data;
    const visastampfile = req.files.stampfile.data;
    const phonenum = req.body.phnum;
    const dormname = req.body.dname;
    const facebook = req.body.fbook;
    const ch1 = req.body.Yfour;
    const ch2 = req.body.Yfive;
    const ch3 = req.body.Ysix;
    const ch4 = req.body.Yseven;
    const ch5 = req.body.Yeight;
    
    console.log(passportfile);
    console.log(transferfile);
    console.log(ststatusfile);
    console.log(visastampfile);
    console.log(phonenum);
    console.log(dormname);
    console.log(facebook);

    if(ch1 == 'yes' && ch2 =='yes' && ch3 == 'yes' && ch4 == 'yes' && ch5 == 'yes'){
        console.log('YES')
    }
    else{
        res.redirect('/renew');
    }
  
    const results = [];
  
    try {

         let sql = "INSERT INTO `renew visa` (`renew_visa_id`, `cert_std`, `transcript`, `passport`, `visa_stamp`,`phone_num`, `room_name_num`, `fb_acc`, `YesOrNo`) VALUES (NULL,? ,? , ?, ?, ?, ?, ?, ?)";
                                                                //var1 (NULL,? , ?) for pass, phnum
        let results = await conn.awaitQuery(sql,[passportfile,transferfile,ststatusfile,visastampfile,phonenum,dormname,facebook,ch1] );
                                                                //[var1,        var2]
        res.redirect('/submit');
        
    } catch (err) {
        console.log(err);
        res.redirect('/renew');
    }


  });

  app.post("/extendpass/upload",  async (req, res) => {

    console.log("enter post");

    const passportfile = req.files.passfile.data;
    const transferfile = req.files.transfile.data;
    const ststatusfile = req.files.status_file.data;
    const visastampfile = req.files.stampfile.data;
    const phonenum = req.body.phnum;
    const dormname = req.body.dname;
    const facebook = req.body.fbook;
    const ch1 = req.body.Yfour;
    const ch2 = req.body.Yfive;
    const ch3 = req.body.Ysix;
    const ch4 = req.body.Yseven;
    const ch5 = req.body.Yeight;
    
    console.log(passportfile);
    console.log(transferfile);
    console.log(ststatusfile);
    console.log(visastampfile);
    console.log(phonenum);
    console.log(dormname);
    console.log(facebook);

    if(ch1 == 'yes' && ch2 =='yes' && ch3 == 'yes' && ch4 == 'yes' && ch5 == 'yes'){
        console.log('YES')
    }
    else{
        res.redirect('/renew_pass');
    }
  
    const results = [];
  
    try {

         let sql = "INSERT INTO `renew passport` (`cert_std`, `transcript`, `passport`, `visa_stamp`,`phone_num`, `room_num`, `fb_acc`, `YesOrNo`) VALUES (? ,? , ?, ?, ?, ?, ?, ?)";
                                                                //var1 (NULL,? , ?) for pass, phnum
        let results = await conn.awaitQuery(sql,[passportfile,transferfile,ststatusfile,visastampfile,phonenum,dormname,facebook,ch1] );
                                                                //[var1,        var2]
        res.redirect('/submit');
        
    } catch (err) {
        console.log(err);
        res.redirect('/renew');
    }


  });

  app.post("/newvisa/fromhome",  async (req, res) => {

    console.log("enter post");

    const passportfile = req.files.passfile.data;
    const transferfile = req.files.transfile.data;
    const ststatusfile = req.files.status_file.data;
    const visastampfile = req.files.stampfile.data;
    
    console.log(passportfile);
    console.log(transferfile);
    console.log(ststatusfile);
    console.log(visastampfile);
  
    const results = [];
  
    try {

         let sql = "INSERT INTO `new student visa from home country` (`cert_std`, `transcript`, `passport`, `visa_stamp`) VALUES (? ,? , ?, ?)";
                                                                //var1 (NULL,? , ?) for pass, phnum
        let results = await conn.awaitQuery(sql,[passportfile,transferfile,ststatusfile,visastampfile] );
                                                                //[var1,        var2]
        let nextPage =  req.body.getDoc;
        console.log(nextPage);

        if (nextPage == "choose1") {
           res.redirect('/choice1')
        } 
        else if(nextPage == "choose2"){
            res.redirect('/choice2')
        }

        else if(nextPage == "choose3"){
            res.redirect('/choice3')
        }
        
    } catch (err) {
        console.log(err);
        res.redirect('/new_visa');
    }


  });

  app.post("/choi1/upload",  async (req, res) => {

    console.log("enter post");

    const Email_address = req.body.Email;
    const phonenum = req.body.phnum;
    
    console.log(Email_address);
    console.log(phonenum);
  
    const results = [];
  
    try {

         let sql = "INSERT INTO `new student visa from home country` (`email_add`,`phone_num`) VALUES (? ,?)";
                                                                //var1 (NULL,? , ?) for pass, phnum
        let results = await conn.awaitQuery(sql,[Email_address,phonenum] );
                                                                //[var1,        var2]
        res.redirect('/submit');
        
    } catch (err) {
        console.log(err);
        res.redirect('/choice1');
    }


  });

  app.post("/choi2/upload",  async (req, res) => {

    console.log("enter post");

    const Homeaddress = req.body.address;
    const phonenum = req.body.phnum;
    
    console.log(Homeaddress);
    console.log(phonenum);
  
    const results = [];
  
    try {

         let sql = "INSERT INTO `new student visa from home country` (`address`,`phone_num`) VALUES (? ,?)";
                                                                //var1 (NULL,? , ?) for pass, phnum
        let results = await conn.awaitQuery(sql,[Homeaddress,phonenum] );
                                                                //[var1,        var2]
        res.redirect('/submit');
        
    } catch (err) {
        console.log(err);
        res.redirect('/choice2');
    }


  });

  app.post("/choi3/upload",  async (req, res) => {

    console.log("enter post");

    const friend_name = req.body.passname;
    const friend_passnum = req.body.passnum;
    const phonenum = req.body.phnum;
    
    console.log(friend_name);
    console.log(friend_passnum);
    console.log(phonenum);
  
    const results = [];
  
    try {

         let sql = "INSERT INTO `new student visa from home country` (`friend_name`,`friend_passport`,`phone_num`) VALUES (? ,?, ?)";
                                                                //var1 (NULL,? , ?) for pass, phnum
        let results = await conn.awaitQuery(sql,[friend_name,friend_passnum,phonenum] );
                                                                //[var1,        var2]
        res.redirect('/submit');
        
    } catch (err) {
        console.log(err);
        res.redirect('/choice3');
    }


  });

  app.post("/cancel/visa",  async (req, res) => {

    console.log("enter post");

    const passportfile = req.files.passfile.data;
    const transferfile = req.files.transfile.data;
    const cancelDate = req.body.canv;
    const phonenum = req.body.phnum;
    const dormname = req.body.dname;
    const facebook = req.body.fbook;
    const ch1 = req.body.Yfour;
    const ch2 = req.body.Yfive;
    const ch3 = req.body.Ysix;
    const ch4 = req.body.Yseven;
    const ch5 = req.body.Yeight;
    
    console.log(passportfile);
    console.log(transferfile);
    console.log(cancelDate);
    console.log(phonenum);
    console.log(dormname);
    console.log(facebook);

    if(ch1 == 'yes' && ch2 =='yes' && ch3 == 'yes' && ch4 == 'yes' && ch5 == 'yes'){
        console.log('YES')
    }
    else{
        res.redirect('/renew');
    }
  
    const results = [];
  
    try {

         let sql = "INSERT INTO `cancel student visa` (`passport`, `visa_stamp`,`cancel_date`,`phone_num`, `room_num`, `fb_acc`, `YesOrNo`) VALUES (? ,? , ?, ?, ?, ?, ?)";
                                                                //var1 (NULL,? , ?) for pass, phnum
        let results = await conn.awaitQuery(sql,[passportfile,transferfile,cancelDate,phonenum,dormname,facebook,ch1] );
                                                                //[var1,        var2]
        res.redirect('/submit');
        
    } catch (err) {
        console.log(err);
        res.redirect('/cancel_visa');
    }


  });

  app.post("/shuttlebus/upload",  async (req, res) => {

    console.log("enter post");
    const purpose = req.body.exten;
    const other_text = req.body.other;
    const DATE = req.body.dAtE;
    const phonenum = req.body.phnum;
    const commenting = req.body.comme;
    const Yfive = req.body.Yfive;

    console.log(purpose);
    console.log(other_text);
    console.log(DATE);
    console.log(phonenum);
    console.log(commenting);
    console.log(Yfive);


  
    const results = [];
  
    try {

         let sql = "INSERT INTO `apply shuttle bus` (`purpose_travel`, `date`,`phone_num`,`comment`,`YesOrNo` ) VALUES (? ,? , ?, ?, ?)";
                                                                //var1 (NULL,? , ?) for pass, phnum
        let results = await conn.awaitQuery(sql,[purpose,other_text,DATE,phonenum,commenting,Yfive] );
                                                                //[var1,        var2]
        res.redirect('/submit');
        
    } catch (err) {
        console.log(err);
        res.redirect('/shuttle');
    }


  });

  app.post("/refund/upload",  async (req, res) => {

    console.log("enter post");

    const passportfile = req.files.passfile.data;
    const transferfile = req.files.transfile.data;
    const ststatusfile = req.files.status_file.data;
    const visastampfile =  req.files.stampfile.data;
    const phonenum = req.body.phnum;
    
    console.log(passportfile);
    console.log(transferfile);
    console.log(ststatusfile);
    console.log(visastampfile);
    console.log(phonenum);
  
    const results = [];
  
    try {

         let sql = "INSERT INTO `apply insurance refund` (`original_receipt`, `doctor_cert`,`passport`,`phone_num` ) VALUES (? ,? , ?, ?)";
                                                                //var1 (NULL,? , ?) for pass, phnum
        let results = await conn.awaitQuery(sql,[passportfile,transferfile,ststatusfile,phonenum] );
                                                                //[var1,        var2]
        res.redirect('/submit');
        
    } catch (err) {
        console.log(err);
        res.redirect('/insurance');
    }


  });

  app.post("/noti/fication",  async (req, res) => {

    console.log("enter post");
    const student_name = req.body.stName;
    const student_email = req.body.stMail;
    const visa_expireDate = req.body.visaex;
    const pass_expireDate = req.body.passex;
    const report_90days = req.body.repo;

    console.log(student_name);
    console.log(student_email);    
    console.log(visa_expireDate);
    console.log(pass_expireDate);
    console.log(report_90days);
  
    const results = [];
  
    try {

         let sql = "INSERT INTO `visa passport noti` (`st_name`,`st_Email`,`visa_date`,`passport_date`,`report_date`) VALUES (? ,? , ?, ?, ?)";
                                                                //var1 (NULL,? , ?) for pass, phnum
        let results = await conn.awaitQuery(sql,[student_name,student_email,visa_expireDate,pass_expireDate,report_90days] );
                                                                //[var1,        var2]
        res.redirect('/submit');
        
    } catch (err) {
        console.log(err);
        res.redirect('/notification');
    }


  });


app.get('/', (req, res) => {
    res.render('main_page');

});

app.get('/admission', (req, res) => {
    res.render('admission');

});



app.get('/main_page', (req, res) => {
    res.render('main_page');

});


app.get('/renew', (req, res) => {
    res.render('renew');

});

app.get('/submit', (req, res) => {
    res.render('submit');

});

app.get('/renew_pass', (req, res) => {
    res.render('renew_pass');

});

app.get('/new_visa', (req, res) => {
    res.render('new_visa');

});

app.get('/choice1', (req, res) => {
    res.render('choice1');

});

app.get('/choice2', (req, res) => {
    res.render('choice2');

});

app.get('/choice3', (req, res) => {
    res.render('choice3');

});

app.get('/cancel_visa', (req, res) => {
    res.render('cancel_visa');

});

app.get('/insurance', (req, res) => {
    res.render('insurance');

});

app.get('/shuttle', (req, res) => {
    res.render('shuttle');

});

app.get('/notification', (req, res) => {
    res.render('notification');

});

app.get('/database/renew_passprot', async (req, res) => {

    console.log("tesfgsfdg")

    let results = [];

    try {

        let sql = "SELECT * FROM `renew visa`"

            results = await conn.awaitQuery(sql);
        
            res.render('admin_page.hbs',{results})

    } catch (err) {
        
        console.log(err)
    }

})

app.get('/database/visa_passport_noti', async (req, res) => {

    console.log("tesfgsfdg")

    let results = [];

    try {

        let sql = "SELECT * FROM `visa passport noti`"

            results = await conn.awaitQuery(sql);
        
            // res.send(results)
            res.render('admin_page', {results})

    } catch (err) {
        
        console.log(err)
    }

})

app.listen(3001, () => {
    console.log('start');
    console.log('http://localhost:3001/');
})