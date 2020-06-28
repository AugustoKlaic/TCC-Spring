var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "210682",
        "ok": "182804",
        "ko": "27878"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59987",
        "ok": "59987",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4834",
        "ok": "5571",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "9662",
        "ok": "10173",
        "ko": "0"
    },
    "percentiles1": {
        "total": "69",
        "ok": "102",
        "ko": "0"
    },
    "percentiles2": {
        "total": "3647",
        "ok": "6401",
        "ko": "0"
    },
    "percentiles3": {
        "total": "28655",
        "ok": "29845",
        "ko": "0"
    },
    "percentiles4": {
        "total": "37905",
        "ok": "42445",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 103535,
        "percentage": 49
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7464,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 71805,
        "percentage": 34
    },
    "group4": {
        "name": "failed",
        "count": 27878,
        "percentage": 13
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1443.027",
        "ok": "1252.082",
        "ko": "190.945"
    }
},
contents: {
"req_get-pet-visits-b5cf9": {
        type: "REQUEST",
        name: "Get pet visits",
path: "Get pet visits",
pathFormatted: "req_get-pet-visits-b5cf9",
stats: {
    "name": "Get pet visits",
    "numberOfRequests": {
        "total": "210682",
        "ok": "182804",
        "ko": "27878"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59987",
        "ok": "59987",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "4834",
        "ok": "5571",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "9662",
        "ok": "10173",
        "ko": "0"
    },
    "percentiles1": {
        "total": "69",
        "ok": "102",
        "ko": "0"
    },
    "percentiles2": {
        "total": "3652",
        "ok": "6410",
        "ko": "0"
    },
    "percentiles3": {
        "total": "28655",
        "ok": "29846",
        "ko": "0"
    },
    "percentiles4": {
        "total": "37905",
        "ok": "42445",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 103535,
        "percentage": 49
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7464,
        "percentage": 4
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 71805,
        "percentage": 34
    },
    "group4": {
        "name": "failed",
        "count": 27878,
        "percentage": 13
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1443.027",
        "ok": "1252.082",
        "ko": "190.945"
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
