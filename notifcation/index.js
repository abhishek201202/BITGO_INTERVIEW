const NotificationDML = require("./db")

const createNotification = async (createNotificationRequest) => {
    const id = await NotificationDML.create(createNotificationRequest)
    return {
        status: "success",
        message: "Notification created successfully",
        data: {
            notificationId: id
        }
    }
};

const sendEmail = async (id) => {
    const data = await NotificationDML.get(id);
    NotificationDML.update(id, {
        status: "SENT"
    })
    console.log(`notification sent for id ${id}`);
}

const sendNotificationToEmailById = async (sendNotificationRequest) => {
    for(const id of sendNotificationRequest.ids) {
        await sendEmail(id);
    }
    return {
        status: "success",
        message: "Notification sent successfully"
    }
};


const listNotificationByStatus = async (listNotificationRequest) => {
    console.log("listNotificationRequest::", listNotificationRequest);
    const data = await NotificationDML.getNotificationByStatus(listNotificationRequest.status)
    return {
        status: "success",
        data
    }
};

const updateNotificatiionById = async (updateNotificationRequest) => {
    console.log("updateNotificationRequest::", updateNotificationRequest);
    return {
        status: "success",
        message: "Notification updated successfully"
    }
};

const NotificationService = {
    createNotification,
    sendNotificationToEmailById,
    listNotificationByStatus,
    updateNotificatiionById
}

module.exports = NotificationService;
