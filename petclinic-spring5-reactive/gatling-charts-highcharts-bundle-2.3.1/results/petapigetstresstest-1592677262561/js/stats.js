var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "211214",
        "ok": "190551",
        "ko": "20663"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59871",
        "ok": "59871",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3396",
        "ok": "3764",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "7936",
        "ok": "8272",
        "ko": "0"
    },
    "percentiles1": {
        "total": "50",
        "ok": "57",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1532",
        "ok": "3109",
        "ko": "0"
    },
    "percentiles3": {
        "total": "19678",
        "ok": "20255",
        "ko": "0"
    },
    "percentiles4": {
        "total": "38162",
        "ok": "40525",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 124459,
        "percentage": 59
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6682,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 59410,
        "percentage": 28
    },
    "group4": {
        "name": "failed",
        "count": 20663,
        "percentage": 10
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1446.671",
        "ok": "1305.144",
        "ko": "141.527"
    }
},
contents: {
"req_get-pets-98715": {
        type: "REQUEST",
        name: "Get pets",
path: "Get pets",
pathFormatted: "req_get-pets-98715",
stats: {
    "name": "Get pets",
    "numberOfRequests": {
        "total": "211214",
        "ok": "190551",
        "ko": "20663"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59871",
        "ok": "59871",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "3396",
        "ok": "3764",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "7936",
        "ok": "8272",
        "ko": "0"
    },
    "percentiles1": {
        "total": "50",
        "ok": "57",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1528",
        "ok": "3067",
        "ko": "0"
    },
    "percentiles3": {
        "total": "19690",
        "ok": "20264",
        "ko": "0"
    },
    "percentiles4": {
        "total": "38162",
        "ok": "40525",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 124459,
        "percentage": 59
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6682,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 59410,
        "percentage": 28
    },
    "group4": {
        "name": "failed",
        "count": 20663,
        "percentage": 10
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1446.671",
        "ok": "1305.144",
        "ko": "141.527"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
