const express = require('express')
const NotificationService = require("./notifcation")

const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/createNotification', async (req, res) => {
    try {
        const data =  await NotificationService.createNotification(req.body);
        res.status(200);
        res.send(data);
    } catch(err) {
        console.error(`Error while creating notification, ${err}`)
        res.status(500);
        res.send(err)
    }
});

app.post('/sendNotificationToEmailById', async (req, res) => {
    try {
        const data = await NotificationService.sendNotificationToEmailById(req.body);
        res.status(200);
        res.send(data);
    } catch(err) {
        console.error(`Error while sending notification, ${err}`)
        res.status(500);
        res.send(err);
    }
});


app.get('/listNotificationByStatus', async (req, res) => {
    try {
        const data = await NotificationService.listNotificationByStatus(req.body);
        res.status(200);
        res.send(data);
    } catch(err) {
        console.error(`Error while fetching notification, ${err}`)
        res.status(500);
        res.send(err);
    }
});

app.put('/updateNotificatiionById', async (req, res) => {
    try {
        const data = await NotificationService.updateNotificatiionById(req.body);
        res.status(200);
        res.send(data);
    } catch(err) {
        console.error(`Error while updating notification, ${err}`)
        res.status(500);
        res.send(err);
    }
});


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);


