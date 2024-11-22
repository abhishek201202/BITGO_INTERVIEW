const createNotification = async (createNotificationRequest) => {
    console.log("createNotificationRequest::", createNotificationRequest);
    return {
        status: "success",
        message: "Notification created successfully",
        data: {
            notificationId: 1
        }
    }
};

const sendNotificationToEmailById = async (sendNotificationRequest) => {
    console.log("sendNotificationRequest::", sendNotificationRequest);
    return {
        status: "success",
        message: "Notification sent successfully"
    }
};


const listNotificationByStatus = async (listNotificationRequest) => {
    console.log("listNotificationRequest::", listNotificationRequest);
    const data = [];
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
