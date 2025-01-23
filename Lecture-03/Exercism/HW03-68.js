const logs = [
    { "timestamp": "2024-09-15T08:23:45Z", "user": "Alice", "action": "LOGIN", "details": "User Alice logged in" },
    { "timestamp": "2024-09-15T08:25:12Z", "user": "Alice", "action": "REQUEST", "details": "Requested resource 123" },
    { "timestamp": "2024-09-15T08:27:30Z", "user": "Alice", "action": "LOGOUT", "details": "User Alice logged out" },
    { "timestamp": "2024-09-15T08:35:11Z", "user": "Bob", "action": "LOGIN", "details": "User Bob logged in" },
    { "timestamp": "2024-09-15T08:40:22Z", "user": "Bob", "action": "REQUEST", "details": "Requested resource 124" },
    { "timestamp": "2024-09-15T08:42:08Z", "user": "Bob", "action": "ERROR", "details": "Database connection failed" },
    { "timestamp": "2024-09-15T08:45:15Z", "user": "Alice", "action": "LOGIN", "details": "User Alice logged in" },
    { "timestamp": "2024-09-15T08:50:30Z", "user": "Alice", "action": "REQUEST", "details": "Requested resource 125" },
    { "timestamp": "2024-09-15T08:55:45Z", "user": "Bob", "action": "ERROR", "details": "File not found" },
    { "timestamp": "2024-09-15T09:27:30Z", "user": "Alice", "action": "LOGOUT", "details": "User Alice logged out" },
    { "timestamp": "2024-09-15T09:00:00Z", "user": "Bob", "action": "LOGOUT", "details": "User Bob logged out" },
    { "timestamp": "2024-09-16T08:35:11Z", "user": "Bob", "action": "LOGIN", "details": "User Bob logged in" },
    { "timestamp": "2024-09-16T08:55:45Z", "user": "Bob", "action": "ERROR", "details": "File not found" },
    { "timestamp": "2024-09-16T10:00:00Z", "user": "Bob", "action": "LOGOUT", "details": "User Bob logged out" }
];

// Log processing function
function processLogs(logs) {
// สร้าง object สำหรับรายงาน
const report = {
    totalActionsPerUser: {}, // เก็บจำนวน action ของแต่ละ user
    sessionDurations: {}, // เก็บระยะเวลา session ของแต่ละ user
    errorCount: {}, // เก็บจำนวน error ของแต่ละ user
    mostActiveUser: '', // ชื่อ user ที่มีจำนวน action มากที่สุด
};

// ตัวแปรสำหรับเก็บข้อมูลชั่วคราว
const sessionStart = {}; // เก็บเวลาที่ user login
const actionCounts = {}; // เก็บจำนวน action ของแต่ละ user

// วนลูปผ่าน logs ทีละรายการ
for (let i = 0; i < logs.length; i++) {
    const log = logs[i]; // ข้อมูล log ปัจจุบัน
    const user = log.user; // ชื่อ user
    const action = log.action; // ประเภทของ action
    const timestamp = log.timestamp; // เวลาใน log

    // ** นับจำนวน action ของแต่ละ user **
    if (!actionCounts[user]) {
        actionCounts[user] = 0; // ถ้า user ยังไม่มีใน actionCounts ให้เริ่มนับที่ 0
    }
    actionCounts[user]++; // เพิ่มจำนวน action ของ user

    // ** คำนวณระยะเวลา session **
    if (action === 'LOGIN') {
        // บันทึกเวลาที่ user login
        sessionStart[user] = new Date(timestamp);
    } else if (action === 'LOGOUT') {
        // ถ้ามีเวลา login ที่บันทึกไว้
        if (sessionStart[user]) {
            const loginTime = sessionStart[user]; // เวลา login
            const logoutTime = new Date(timestamp); // เวลา logout
            const duration = Math.round((logoutTime - loginTime) / 60000); // คำนวณเป็นนาที

            // เก็บระยะเวลา session ลงในรายงาน
            if (!report.sessionDurations[user]) {
                report.sessionDurations[user] = []; // ถ้า user ยังไม่มี session ให้สร้าง array ใหม่
            }
            report.sessionDurations[user].push(duration); // บันทึกระยะเวลา session
            delete sessionStart[user]; // ลบข้อมูล login เวลาออก
        }
    }

    // ** นับจำนวน error ของแต่ละ user **
    if (action === 'ERROR') {
        if (!report.errorCount[user]) {
            report.errorCount[user] = 0; // ถ้า user ยังไม่มีใน errorCount ให้เริ่มนับที่ 0
        }
        report.errorCount[user]++; // เพิ่มจำนวน error
    }
}

// ** ใส่ข้อมูล action count ลงในรายงาน **
report.totalActionsPerUser = actionCounts;

// ** ใส่ข้อมูล error ที่ยังไม่มีค่าเป็น 0 **
for (const user in actionCounts) {
    if (!report.errorCount[user]) {
        report.errorCount[user] = 0;
    }
}

// ** ใส่ข้อมูล session ที่ยังไม่มีค่าเป็น array เปล่า **
for (const user in actionCounts) {
    if (!report.sessionDurations[user]) {
        report.sessionDurations[user] = [];
    }
}

// ** ค้นหา user ที่มีจำนวน action มากที่สุด **
let maxActions = 0;
for (const user in actionCounts) {
    if (actionCounts[user] > maxActions) {
        maxActions = actionCounts[user];
        report.mostActiveUser = user; // บันทึกชื่อ user ที่มี action มากที่สุด
    }
}

    return report;
}

const report = processLogs(logs);
console.log(report);

/*
Expected Output:
{
    totalActionsPerUser: { Alice: 6, Bob: 8 },
    sessionDurations: { Alice: [4, 42], Bob: [25, 85] },
    errorCount: { Alice: 0, Bob: 3 },
    mostActiveUser: 'Bob'
}
*/


module.exports = processLogs;
