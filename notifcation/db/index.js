const NotificationDB = {} 
/*
{
    [id]: {
        "currentPrice": 12,
        "dailyPercentageChange": 45,
        "tradingVolume": 12,
        "status": "DELETED" / "SENT" / "FAILED"
    }
}

*/

const NotificationDML = {
    create: async (req) => {
        const id = Math.floor(Math.random() * 10000)
        NotificationDB[id] = {
            ...req,
            status: "CREATED"
        };
        return id;
    },
    get: async (id) => {
        return NotificationDB[id];
    },
    update: async (id, req) => {
        NotificationDB[id] = {
            ...NotificationDB[id],
            status: req.status
        }
    },
    delete: async (id) => {
        NotificationDB[id].status = "DELETED"
    },
    getNotificationByStatus: async (status) => {
        const response = []
        Object.values(NotificationDB).forEach(curr => {
            if(curr.status === status) {
                response.push(curr);
            }
        })
        return response
    }
}

module.exports = NotificationDML
