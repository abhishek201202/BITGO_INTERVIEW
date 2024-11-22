## CURLS TO TEST

#1. create notification

```bash
curl --location 'http://localhost:8080/createNotification' \
--header 'Content-Type: application/json' \
--data '{
    "currentPrice": 12,
    "dailyPercentageChange": 45,
    "tradingVolume": 12
}'
```

#2. send notification

```bash
curl --location 'http://localhost:8080/sendNotificationToEmailById' \
--header 'Content-Type: application/json' \
--data '{
    "ids": [4699]
}'
```

#3. list notification by status

```bash
curl --location --request GET 'http://localhost:8080/listNotificationByStatus' \
--header 'Content-Type: application/json' \
--data '{
    "status": "SENT"
}'
```