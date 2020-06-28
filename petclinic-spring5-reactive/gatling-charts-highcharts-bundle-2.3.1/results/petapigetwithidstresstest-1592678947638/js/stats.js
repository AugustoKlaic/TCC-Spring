var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "210826",
        "ok": "190919",
        "ko": "19907"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59997",
        "ok": "59997",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2859",
        "ok": "3157",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "7448",
        "ok": "7766",
        "ko": "0"
    },
    "percentiles1": {
        "total": "49",
        "ok": "56",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1267",
        "ok": "1482",
        "ko": "0"
    },
    "percentiles3": {
        "total": "17363",
        "ok": "17798",
        "ko": "0"
    },
    "percentiles4": {
        "total": "36356",
        "ok": "37714",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 129895,
        "percentage": 62
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7220,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 53804,
        "percentage": 26
    },
    "group4": {
        "name": "failed",
        "count": 19907,
        "percentage": 9
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1444.014",
        "ok": "1307.664",
        "ko": "136.349"
    }
},
contents: {
"req_get-pet-with-id-f2d9f": {
        type: "REQUEST",
        name: "Get pet with Id",
path: "Get pet with Id",
pathFormatted: "req_get-pet-with-id-f2d9f",
stats: {
    "name": "Get pet with Id",
    "numberOfRequests": {
        "total": "210826",
        "ok": "190919",
        "ko": "19907"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "59997",
        "ok": "59997",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "2859",
        "ok": "3157",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "7448",
        "ok": "7766",
        "ko": "0"
    },
    "percentiles1": {
        "total": "49",
        "ok": "56",
        "ko": "0"
    },
    "percentiles2": {
        "total": "1273",
        "ok": "1479",
        "ko": "0"
    },
    "percentiles3": {
        "total": "17383",
        "ok": "17796",
        "ko": "0"
    },
    "percentiles4": {
        "total": "36356",
        "ok": "37714",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 129895,
        "percentage": 62
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7220,
        "percentage": 3
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 53804,
        "percentage": 26
    },
    "group4": {
        "name": "failed",
        "count": 19907,
        "percentage": 9
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1444.014",
        "ok": "1307.664",
        "ko": "136.349"
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
