// Your code here
function createEmployeeRecord(array){
    let record;
    return record = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord)
}

function createDTSObject (getType, dateStamp) {
    return {type: getType, date: dateStamp.slice(0,10), hour: parseInt(dateStamp.slice(-4))}
}

function createTimeInEvent(object, dateStamp) {
    object.timeInEvents.push(createDTSObject("TimeIn", dateStamp))
    return object
}

function createTimeOutEvent(object, dateStamp) {
    object.timeOutEvents.push(createDTSObject("TimeOut", dateStamp))
    return object
}