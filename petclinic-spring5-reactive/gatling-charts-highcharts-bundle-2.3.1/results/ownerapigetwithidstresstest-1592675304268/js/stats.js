var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "211069",
        "ok": "0",
        "ko": "211069"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "43654",
        "ok": "-",
        "ko": "43654"
    },
    "meanResponseTime": {
        "total": "11719",
        "ok": "-",
        "ko": "11719"
    },
    "standardDeviation": {
        "total": "13884",
        "ok": "-",
        "ko": "13884"
    },
    "percentiles1": {
        "total": "2668",
        "ok": "-",
        "ko": "2669"
    },
    "percentiles2": {
        "total": "25358",
        "ok": "-",
        "ko": "25347"
    },
    "percentiles3": {
        "total": "36486",
        "ok": "-",
        "ko": "36486"
    },
    "percentiles4": {
        "total": "39751",
        "ok": "-",
        "ko": "39751"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 211069,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1648.977",
        "ok": "-",
        "ko": "1648.977"
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
        "total": "211069",
        "ok": "0",
        "ko": "211069"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "43654",
        "ok": "-",
        "ko": "43654"
    },
    "meanResponseTime": {
        "total": "11719",
        "ok": "-",
        "ko": "11719"
    },
    "standardDeviation": {
        "total": "13884",
        "ok": "-",
        "ko": "13884"
    },
    "percentiles1": {
        "total": "2670",
        "ok": "-",
        "ko": "2667"
    },
    "percentiles2": {
        "total": "25358",
        "ok": "-",
        "ko": "25356"
    },
    "percentiles3": {
        "total": "36486",
        "ok": "-",
        "ko": "36486"
    },
    "percentiles4": {
        "total": "39751",
        "ok": "-",
        "ko": "39751"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 211069,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "1648.977",
        "ok": "-",
        "ko": "1648.977"
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
