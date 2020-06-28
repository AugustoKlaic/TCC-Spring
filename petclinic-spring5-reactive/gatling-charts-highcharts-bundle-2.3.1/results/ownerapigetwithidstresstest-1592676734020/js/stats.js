var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "211692",
        "ok": "185354",
        "ko": "26338"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60082",
        "ok": "60082",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "6375",
        "ok": "7281",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11108",
        "ok": "11589",
        "ko": "0"
    },
    "percentiles1": {
        "total": "85",
        "ok": "130",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8320",
        "ok": "10800",
        "ko": "0"
    },
    "percentiles3": {
        "total": "32951",
        "ok": "33880",
        "ko": "0"
    },
    "percentiles4": {
        "total": "40447",
        "ok": "41899",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 96109,
        "percentage": 45
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6997,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 82248,
        "percentage": 39
    },
    "group4": {
        "name": "failed",
        "count": 26338,
        "percentage": 12
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1470.083",
        "ok": "1287.181",
        "ko": "182.903"
    }
},
contents: {
"req_get-pet-owners--07f85": {
        type: "REQUEST",
        name: "Get pet owners by id",
path: "Get pet owners by id",
pathFormatted: "req_get-pet-owners--07f85",
stats: {
    "name": "Get pet owners by id",
    "numberOfRequests": {
        "total": "211692",
        "ok": "185354",
        "ko": "26338"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60082",
        "ok": "60082",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "6375",
        "ok": "7281",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "11108",
        "ok": "11589",
        "ko": "0"
    },
    "percentiles1": {
        "total": "85",
        "ok": "130",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8383",
        "ok": "10770",
        "ko": "0"
    },
    "percentiles3": {
        "total": "32963",
        "ok": "33885",
        "ko": "0"
    },
    "percentiles4": {
        "total": "40447",
        "ok": "41899",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 96109,
        "percentage": 45
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6997,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 82248,
        "percentage": 39
    },
    "group4": {
        "name": "failed",
        "count": 26338,
        "percentage": 12
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1470.083",
        "ok": "1287.181",
        "ko": "182.903"
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
