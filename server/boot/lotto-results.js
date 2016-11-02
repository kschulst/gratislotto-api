'use strict';

var async = require('async');

module.exports = function(app) {
  // data sources
  var mongoDs = app.dataSources.mongoDb;


  // create all models
  async.parallel({
    lotto: async.apply(populateLottoResults)
  }, function(err, results) {
    if (err) throw err;
    console.log("Done populating historical results");
  });

  function populateLottoResults(cb) {
    mongoDs.automigrate('LottoResult', function(err) {
      if (err) return cb(err);

      app.models.LottoResult.create([
          {
            "id": 1,
            "drawDate": "1996-05-11T00:00:00",
            "numbers": [1, 7, 25, 26, 31, 32, 33],
            "addNumbers": [6, 24],
            "prizes": ["4522036", "90440", "6669", "181", "63"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60293818
          },
          {
            "id": 2,
            "drawDate": "1996-05-18T00:00:00",
            "numbers": [3, 6, 11, 25, 28, 30, 31],
            "addNumbers": [14, 22],
            "prizes": ["2212604", "80458", "5931", "173", "52"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59002784
          },
          {
            "id": 3,
            "drawDate": "1996-05-25T00:00:00",
            "numbers  ": [13, 14, 16, 20, 29, 32, 34],
            "addNumbers": [10, 23],
            "prizes": ["2151159", "97779", "5698", "178", "54"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57364244
          },
          {
            "id": 4,
            "drawDate": "1996-06-01T00:00:00",
            "numbers": [4, 16, 19, 21, 22, 24, 32],
            "addNumbers": [28, 33],
            "prizes": ["1712256", "83934", "5573", "164", "48"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57075214
          },
          {
            "id": 5,
            "drawDate": "1996-06-08T00:00:00",
            "numbers": [1, 3, 10, 21, 24, 27, 30],
            "addNumbers": [11, 34],
            "prizes": ["1197591", "69859", "5486", "161", "54"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 55887606
          },
          {
            "id": 6,
            "drawDate": "1996-06-15T00:00:00",
            "numbers": [1, 8, 10, 26, 29, 31, 33],
            "addNumbers": [24, 32],
            "prizes": ["4206249", "73793", "5833", "168", "61"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 56083332
          },
          {
            "id": 7,
            "drawDate": "1996-06-22T00:00:00",
            "numbers": [4, 8, 9, 11, 12, 17, 33],
            "addNumbers": [3, 26],
            "prizes": ["1232101", "82929", "6634", "168", "42"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57498090
          },
          {
            "id": 8,
            "drawDate": "1996-06-29T00:00:00",
            "numbers": [2, 5, 24, 30, 31, 33, 34],
            "addNumbers": [26, 28],
            "prizes": ["1434390", "95626", "6510", "198", "59"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57375628
          },
          {
            "id": 9,
            "drawDate": "1996-07-06T00:00:00",
            "numbers": [1, 5, 9, 15, 17, 22, 23],
            "addNumbers": [10, 14],
            "prizes": ["2877771", "59953", "4733", "138", "48"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57555422
          },
          {
            "id": 10,
            "drawDate": "1996-07-13T00:00:00",
            "numbers": [5, 10, 14, 23, 26, 29, 31],
            "addNumbers": [12, 24],
            "prizes": ["539262", "60761", "3562", "129", "52"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57521334
          },
          {
            "id": 11,
            "drawDate": "1996-07-20T00:00:00",
            "numbers": [8, 10, 19, 25, 29, 31, 33],
            "addNumbers": [14, 22],
            "prizes": ["2127287", "77355", "5860", "165", "54"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 56727664
          },
          {
            "id": 12,
            "drawDate": "1996-07-27T00:00:00",
            "numbers": [2, 7, 9, 21, 24, 27, 33],
            "addNumbers": [5, 25],
            "prizes": ["2101531", "45685", "3589", "114", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 56040836
          },
          {
            "id": 13,
            "drawDate": "1996-08-03T00:00:00",
            "numbers": [4, 12, 16, 17, 23, 28, 32],
            "addNumbers": [9, 20],
            "prizes": ["4179353", "35720", "4335", "130", "38"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 55724710
          },
          {
            "id": 14,
            "drawDate": "1996-08-10T00:00:00",
            "numbers": [2, 13, 15, 18, 24, 25, 31],
            "addNumbers": [9, 32],
            "prizes": ["2046826", "67109", "5091", "162", "53"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 54582032
          },
          {
            "id": 15,
            "drawDate": "1996-08-17T00:00:00",
            "numbers": [11, 14, 16, 18, 20, 30, 33],
            "addNumbers": [10, 31],
            "prizes": ["8157009", "113291", "6226", "174", "58"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 54380062
          },
          {
            "id": 16,
            "drawDate": "1996-08-24T00:00:00",
            "numbers": [2, 3, 5, 8, 25, 29, 32],
            "addNumbers": [17, 22],
            "prizes": ["2099083", "61737", "5575", "145", "44"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 55975564
          },
          {
            "id": 17,
            "drawDate": "1996-08-31T00:00:00",
            "numbers": [5, 6, 9, 14, 17, 27, 28],
            "addNumbers": [2, 13],
            "prizes": ["1053578", "29064", "3547", "120", "39"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 56190856
          },
          {
            "id": 18,
            "drawDate": "1996-09-07T00:00:00",
            "numbers": [6, 11, 15, 17, 19, 31, 33],
            "addNumbers": [7, 34],
            "prizes": ["1669284", "69553", "5853", "174", "54"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 55642818
          },
          {
            "id": 19,
            "drawDate": "1996-09-14T00:00:00",
            "numbers": [2, 3, 4, 10, 11, 13, 33],
            "addNumbers": [12, 29],
            "prizes": ["4239111", "75698", "6197", "176", "53"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 56521484
          },
          {
            "id": 20,
            "drawDate": "1996-09-21T00:00:00",
            "numbers": [1, 7, 17, 18, 19, 23, 31],
            "addNumbers": [16, 20],
            "prizes": ["1697787", "92271", "5126", "150", "56"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 56592908
          },
          {
            "id": 21,
            "drawDate": "1996-09-28T00:00:00",
            "numbers": [3, 13, 21, 25, 29, 30, 34],
            "addNumbers": [26, 33],
            "prizes": ["1237022", "78719", "4982", "154", "52"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57727700
          },
          {
            "id": 22,
            "drawDate": "1996-10-05T00:00:00",
            "numbers": [2, 3, 8, 18, 20, 24, 34],
            "addNumbers": [10, 12],
            "prizes": ["2905958", "55883", "5720", "176", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58119160
          },
          {
            "id": 23,
            "drawDate": "1996-10-12T00:00:00",
            "numbers": [1, 16, 19, 22, 28, 29, 33],
            "addNumbers": [2, 25],
            "prizes": ["Gull-Lotto!", "110373", "6158", "169", "54"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57394052
          },
          {
            "id": 24,
            "drawDate": "1996-10-19T00:00:00",
            "numbers": [1, 2, 5, 7, 10, 23, 28],
            "addNumbers": [6, 33],
            "prizes": ["4230947", "76497", "4688", "136", "46"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 83637544
          },
          {
            "id": 25,
            "drawDate": "1996-10-26T00:00:00",
            "numbers": [8, 10, 18, 24, 26, 28, 31],
            "addNumbers": [17, 29],
            "prizes": ["1162393", "63692", "4962", "155", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61994314
          },
          {
            "id": 26,
            "drawDate": "1996-11-02T00:00:00",
            "numbers": [4, 5, 7, 16, 22, 29, 31],
            "addNumbers": [6, 34],
            "prizes": ["1537700", "61508", "4608", "141", "52"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61508020
          },
          {
            "id": 27,
            "drawDate": "1996-11-09T00:00:00",
            "numbers": [6, 11, 13, 16, 19, 25, 34],
            "addNumbers": [1, 30],
            "prizes": ["8981110", "70164", "5947", "171", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59874072
          },
          {
            "id": 28,
            "drawDate": "1996-11-16T00:00:00",
            "numbers": [4, 8, 12, 14, 20, 22, 27],
            "addNumbers": [9, 15],
            "prizes": ["1005087", "38990", "3320", "115", "37"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60305256
          },
          {
            "id": 29,
            "drawDate": "1996-11-23T00:00:00",
            "numbers": [2, 5, 11, 14, 19, 23, 26],
            "addNumbers": [25, 31],
            "prizes": ["877568", "44321", "3207", "125", "48"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58504570
          },
          {
            "id": 30,
            "drawDate": "1996-11-30T00:00:00",
            "numbers": [3, 12, 24, 25, 27, 32, 33],
            "addNumbers": [21, 23],
            "prizes": ["2918239", "43773", "5684", "154", "48"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58364784
          },
          {
            "id": 31,
            "drawDate": "1996-12-07T00:00:00",
            "numbers": [1, 4, 16, 22, 24, 27, 32],
            "addNumbers": [10, 17],
            "prizes": ["2173662", "57201", "5212", "140", "48"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57964332
          },
          {
            "id": 32,
            "drawDate": "1996-12-14T00:00:00",
            "numbers": [9, 11, 13, 14, 18, 23, 28],
            "addNumbers": [17, 20],
            "prizes": ["1295411", "59657", "4617", "144", "49"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60452528
          },
          {
            "id": 33,
            "drawDate": "1996-12-21T00:00:00",
            "numbers": [5, 8, 14, 17, 18, 25, 29],
            "addNumbers": [22, 34],
            "prizes": ["1693965", "55410", "4522", "126", "48"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 79051734
          },
          {
            "id": 34,
            "drawDate": "1996-12-28T00:00:00",
            "numbers": [5, 8, 10, 17, 21, 22, 24],
            "addNumbers": [11, 30],
            "prizes": ["4610757", "57634", "4848", "138", "51"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61476762
          },
          {
            "id": 35,
            "drawDate": "1997-01-04T00:00:00",
            "numbers": [2, 11, 12, 14, 21, 24, 27],
            "addNumbers": [18, 34],
            "prizes": ["2293695", "63713", "4661", "138", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61165216
          },
          {
            "id": 36,
            "drawDate": "1997-01-11T00:00:00",
            "numbers": [2, 3, 8, 11, 17, 21, 25],
            "addNumbers": [5, 27],
            "prizes": ["2311682", "55703", "4073", "132", "42"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61644862
          },
          {
            "id": 37,
            "drawDate": "1997-01-18T00:00:00",
            "numbers": [3, 16, 19, 22, 24, 31, 34],
            "addNumbers": [6, 20],
            "prizes": ["2310121", "59233", "5760", "174", "57"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61603234
          },
          {
            "id": 38,
            "drawDate": "1997-01-25T00:00:00",
            "numbers": [3, 4, 6, 11, 12, 21, 26],
            "addNumbers": [2, 10],
            "prizes": ["1295264", "62964", "4583", "144", "48"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60445660
          },
          {
            "id": 39,
            "drawDate": "1997-02-01T00:00:00",
            "numbers": [8, 12, 13, 23, 26, 27, 31],
            "addNumbers": [10, 25],
            "prizes": ["1834651", "64600", "5107", "154", "52"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61155062
          },
          {
            "id": 40,
            "drawDate": "1997-02-08T00:00:00",
            "numbers": [5, 11, 13, 18, 23, 30, 33],
            "addNumbers": [22, 26],
            "prizes": ["1819817", "47889", "5060", "154", "49"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60660582
          },
          {
            "id": 41,
            "drawDate": "1997-02-15T00:00:00",
            "numbers": [4, 8, 11, 12, 14, 17, 27],
            "addNumbers": [3, 18],
            "prizes": ["1128529", "55729", "4234", "129", "46"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60188234
          },
          {
            "id": 42,
            "drawDate": "1997-02-22T00:00:00",
            "numbers": [4, 9, 15, 21, 23, 28, 31],
            "addNumbers": [20, 34],
            "prizes": ["1291173", "47074", "3449", "117", "44"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60254784
          },
          {
            "id": 43,
            "drawDate": "1997-03-01T00:00:00",
            "numbers": [1, 5, 8, 10, 13, 19, 30],
            "addNumbers": [11, 25],
            "prizes": ["2210981", "77578", "5059", "155", "51"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58959504
          },
          {
            "id": 44,
            "drawDate": "1997-03-08T00:00:00",
            "numbers": [6, 14, 15, 18, 24, 25, 31],
            "addNumbers": [1, 9],
            "prizes": ["8646145", "72051", "5905", "160", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57640968
          },
          {
            "id": 45,
            "drawDate": "1997-03-15T00:00:00",
            "numbers": [1, 7, 18, 21, 31, 33, 34],
            "addNumbers": [25, 26],
            "prizes": ["4326734", "92058", "5328", "168", "49"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57689788
          },
          {
            "id": 46,
            "drawDate": "1997-03-22T00:00:00",
            "numbers": [1, 4, 9, 19, 24, 28, 31],
            "addNumbers": [12, 22],
            "prizes": ["1465809", "62820", "4963", "152", "52"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58632392
          },
          {
            "id": 47,
            "drawDate": "1997-03-29T00:00:00",
            "numbers": [2, 7, 9, 25, 27, 29, 32],
            "addNumbers": [11, 19],
            "prizes": ["1397491", "49910", "4331", "125", "43"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 55899652
          },
          {
            "id": 48,
            "drawDate": "1997-04-05T00:00:00",
            "numbers": [4, 5, 9, 19, 22, 26, 30],
            "addNumbers": [15, 31],
            "prizes": ["931589", "60755", "4286", "133", "47"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 55895362
          },
          {
            "id": 49,
            "drawDate": "1997-04-12T00:00:00",
            "numbers": [9, 10, 11, 12, 22, 24, 34],
            "addNumbers": [3, 13],
            "prizes": ["1674710", "91016", "6085", "182", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 55823690
          },
          {
            "id": 50,
            "drawDate": "1997-04-19T00:00:00",
            "numbers": [1, 5, 8, 12, 21, 30, 32],
            "addNumbers": [18, 26],
            "prizes": ["973356", "48133", "4664", "157", "49"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58401400
          },
          {
            "id": 51,
            "drawDate": "1997-04-26T00:00:00",
            "numbers": [12, 15, 18, 22, 29, 30, 32],
            "addNumbers": [16, 27],
            "prizes": ["1465066", "70242", "4341", "128", "47"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68369770
          },
          {
            "id": 52,
            "drawDate": "1997-05-03T00:00:00",
            "numbers": [3, 5, 8, 13, 14, 20, 22],
            "addNumbers": [21, 30],
            "prizes": ["1233599", "56810", "5451", "152", "52"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57567988
          },
          {
            "id": 53,
            "drawDate": "1997-05-10T00:00:00",
            "numbers": [8, 9, 10, 17, 20, 25, 32],
            "addNumbers": [4, 26],
            "prizes": ["4252677", "72079", "5778", "153", "49"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 56702372
          },
          {
            "id": 54,
            "drawDate": "1997-05-17T00:00:00",
            "numbers": [1, 4, 11, 18, 20, 23, 32],
            "addNumbers": [8, 28],
            "prizes": ["1109911", "40048", "4942", "152", "44"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 51795876
          },
          {
            "id": 55,
            "drawDate": "1997-05-24T00:00:00",
            "numbers": [4, 6, 12, 21, 27, 31, 33],
            "addNumbers": [1, 3],
            "prizes": ["2063769", "67664", "4810", "153", "52"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 55033854
          },
          {
            "id": 56,
            "drawDate": "1997-05-31T00:00:00",
            "numbers": [4, 12, 14, 17, 19, 21, 31],
            "addNumbers": [1, 32],
            "prizes": ["1974834", "50636", "5057", "150", "54"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 52662264
          },
          {
            "id": 57,
            "drawDate": "1997-06-07T00:00:00",
            "numbers": [4, 6, 9, 11, 28, 30, 32],
            "addNumbers": [12, 24],
            "prizes": ["1930527", "101606", "5728", "162", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 51480728
          },
          {
            "id": 58,
            "drawDate": "1997-06-14T00:00:00",
            "numbers": [4, 5, 9, 16, 27, 28, 34],
            "addNumbers": [23, 30],
            "prizes": ["1950999", "43355", "4364", "126", "43"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 52026650
          },
          {
            "id": 59,
            "drawDate": "1997-06-21T00:00:00",
            "numbers": [1, 2, 7, 8, 11, 24, 29],
            "addNumbers": [13, 16],
            "prizes": ["1601517", "93111", "5275", "161", "51"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 53383902
          },
          {
            "id": 60,
            "drawDate": "1997-06-28T00:00:00",
            "numbers": [3, 8, 9, 17, 21, 23, 29],
            "addNumbers": [28, 30],
            "prizes": ["1000395", "40420", "3185", "110", "43"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 53354450
          },
          {
            "id": 61,
            "drawDate": "1997-07-05T00:00:00",
            "numbers": [4, 10, 15, 24, 27, 28, 33],
            "addNumbers": [3, 21],
            "prizes": ["1587706", "45105", "3993", "130", "43"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 52923536
          },
          {
            "id": 62,
            "drawDate": "1997-07-12T00:00:00",
            "numbers": [1, 6, 10, 15, 22, 23, 25],
            "addNumbers": [13, 27],
            "prizes": ["975898", "51363", "4266", "139", "47"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 52047846
          },
          {
            "id": 63,
            "drawDate": "1997-07-19T00:00:00",
            "numbers": [10, 14, 20, 23, 25, 26, 34],
            "addNumbers": [8, 33],
            "prizes": ["1313732", "56302", "4877", "141", "47"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 52549304
          },
          {
            "id": 64,
            "drawDate": "1997-07-26T00:00:00",
            "numbers": [7, 8, 9, 10, 13, 19, 20],
            "addNumbers": [6, 14],
            "prizes": ["1304552", "52182", "5163", "161", "52"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 52182092
          },
          {
            "id": 65,
            "drawDate": "1997-08-02T00:00:00",
            "numbers": [2, 3, 8, 12, 22, 23, 29],
            "addNumbers": [6, 28],
            "prizes": ["1948310", "52657", "4383", "136", "46"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 51954954
          },
          {
            "id": 66,
            "drawDate": "1997-08-09T00:00:00",
            "numbers": [2, 9, 13, 17, 19, 30, 34],
            "addNumbers": [1, 28],
            "prizes": ["3812796", "70607", "4814", "158", "54"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 50837280
          },
          {
            "id": 67,
            "drawDate": "1997-08-16T00:00:00",
            "numbers": [4, 9, 12, 20, 22, 29, 30],
            "addNumbers": [16, 26],
            "prizes": ["1910123", "56180", "3866", "133", "44"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 50936624
          },
          {
            "id": 68,
            "drawDate": "1997-08-23T00:00:00",
            "numbers": [2, 3, 10, 17, 18, 32, 34],
            "addNumbers": [11, 28],
            "prizes": ["4257901", "67585", "5430", "164", "51"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 56772026
          },
          {
            "id": 69,
            "drawDate": "1997-08-30T00:00:00",
            "numbers": [7, 9, 16, 23, 27, 30, 34],
            "addNumbers": [1, 14, 33],
            "prizes": ["1014815", "48115", "4995", "170", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74419876
          },
          {
            "id": 70,
            "drawDate": "1997-09-06T00:00:00",
            "numbers": [1, 4, 14, 17, 18, 27, 32],
            "addNumbers": [5, 8, 30],
            "prizes": ["3117325", "47710", "6255", "185", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62346585
          },
          {
            "id": 71,
            "drawDate": "1997-09-13T00:00:00",
            "numbers": [2, 4, 10, 15, 18, 26, 32],
            "addNumbers": [1, 17, 33],
            "prizes": ["1923155", "49565", "4640", "160", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64105274
          },
          {
            "id": 72,
            "drawDate": "1997-09-20T00:00:00",
            "numbers": [1, 3, 6, 21, 22, 27, 34],
            "addNumbers": [14, 20, 33],
            "prizes": ["3262395", "69905", "7715", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65247950
          },
          {
            "id": 73,
            "drawDate": "1997-09-27T00:00:00",
            "numbers": [14, 21, 26, 27, 28, 30, 33],
            "addNumbers": [7, 12, 20],
            "prizes": ["4664830", "59045", "7800", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62197779
          },
          {
            "id": 74,
            "drawDate": "1997-10-04T00:00:00",
            "numbers": [5, 8, 9, 10, 19, 25, 26],
            "addNumbers": [3, 15, 20],
            "prizes": ["2301825", "53530", "7880", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61382091
          },
          {
            "id": 75,
            "drawDate": "1997-10-11T00:00:00",
            "numbers": [6, 8, 9, 11, 19, 32, 34],
            "addNumbers": [10, 15, 22],
            "prizes": ["Gull-Lotto!", "65025", "9455", "260", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62424522
          },
          {
            "id": 76,
            "drawDate": "1997-10-18T00:00:00",
            "numbers": [3, 5, 8, 11, 23, 24, 28],
            "addNumbers": [15, 18, 30],
            "prizes": ["7592545", "51990", "7080", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 89426412
          },
          {
            "id": 77,
            "drawDate": "1997-10-25T00:00:00",
            "numbers": [4, 11, 16, 17, 24, 26, 27],
            "addNumbers": [8, 13, 34],
            "prizes": ["1433900", "50690", "7210", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66915396
          },
          {
            "id": 78,
            "drawDate": "1997-11-01T00:00:00",
            "numbers": [2, 3, 14, 20, 22, 23, 30],
            "addNumbers": [6, 7, 18],
            "prizes": ["4891850", "65220", "9025", "250", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65224704
          },
          {
            "id": 79,
            "drawDate": "1997-11-08T00:00:00",
            "numbers": [2, 7, 12, 16, 29, 32, 34],
            "addNumbers": [8, 14, 22],
            "prizes": ["1910860", "39805", "5180", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63695484
          },
          {
            "id": 80,
            "drawDate": "1997-11-15T00:00:00",
            "numbers": [3, 4, 13, 19, 29, 30, 33],
            "addNumbers": [10, 12, 20],
            "prizes": ["4729140", "53135", "8705", "255", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63055236
          },
          {
            "id": 81,
            "drawDate": "1997-11-22T00:00:00",
            "numbers": [1, 5, 6, 10, 21, 25, 33],
            "addNumbers": [8, 20, 29],
            "prizes": ["2281150", "63365", "7095", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60830748
          },
          {
            "id": 82,
            "drawDate": "1997-11-29T00:00:00",
            "numbers": [2, 9, 13, 22, 23, 25, 31],
            "addNumbers": [3, 16, 17],
            "prizes": ["1830575", "63560", "7310", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61019196
          },
          {
            "id": 83,
            "drawDate": "1997-12-06T00:00:00",
            "numbers": [8, 10, 13, 17, 25, 26, 32],
            "addNumbers": [5, 16, 27],
            "prizes": ["9042700", "77950", "9640", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60284670
          },
          {
            "id": 84,
            "drawDate": "1997-12-13T00:00:00",
            "numbers": [12, 13, 14, 17, 20, 25, 33],
            "addNumbers": [15, 19, 31],
            "prizes": ["9698385", "98960", "11250", "280", "60"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64655922
          },
          {
            "id": 85,
            "drawDate": "1997-12-20T00:00:00",
            "numbers": [4, 18, 21, 22, 27, 30, 31],
            "addNumbers": [8, 29, 32],
            "prizes": ["1287705", "74005", "7800", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 85847040
          },
          {
            "id": 86,
            "drawDate": "1997-12-27T00:00:00",
            "numbers": [2, 8, 9, 20, 22, 28, 31],
            "addNumbers": [1, 5, 21],
            "prizes": ["4877115", "68690", "7180", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65028258
          },
          {
            "id": 87,
            "drawDate": "1998-01-03T00:00:00",
            "numbers": [4, 9, 17, 20, 27, 29, 31],
            "addNumbers": [12, 30, 32],
            "prizes": ["360930", "29890", "3360", "150", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64967622
          },
          {
            "id": 88,
            "drawDate": "1998-01-10T00:00:00",
            "numbers": [7, 8, 11, 14, 21, 22, 31],
            "addNumbers": [3, 5, 33],
            "prizes": ["1634040", "69040", "7135", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65361621
          },
          {
            "id": 89,
            "drawDate": "1998-01-17T00:00:00",
            "numbers": [3, 4, 10, 19, 31, 32, 34],
            "addNumbers": [14, 23, 28],
            "prizes": ["Gull-Lotto!", "89115", "10040", "265", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65352141
          },
          {
            "id": 90,
            "drawDate": "1998-01-24T00:00:00",
            "numbers": [8, 10, 14, 17, 19, 22, 31],
            "addNumbers": [4, 5, 23],
            "prizes": ["8060275", "59410", "7755", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 95853396
          },
          {
            "id": 91,
            "drawDate": "1998-01-31T00:00:00",
            "numbers": [2, 6, 12, 13, 16, 26, 31],
            "addNumbers": [21, 23, 30],
            "prizes": ["3478490", "38645", "7125", "200", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69569808
          },
          {
            "id": 92,
            "drawDate": "1998-02-07T00:00:00",
            "numbers": [12, 16, 20, 22, 27, 32, 33],
            "addNumbers": [6, 18, 25],
            "prizes": ["1449365", "58985", "6995", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67637037
          },
          {
            "id": 93,
            "drawDate": "1998-02-14T00:00:00",
            "numbers": [6, 10, 21, 23, 24, 28, 32],
            "addNumbers": [5, 26, 31],
            "prizes": ["2013520", "77440", "6280", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67117338
          },
          {
            "id": 94,
            "drawDate": "1998-02-21T00:00:00",
            "numbers": [6, 19, 20, 21, 23, 26, 32],
            "addNumbers": [3, 9, 24],
            "prizes": ["2015840", "66310", "10860", "260", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67194708
          },
          {
            "id": 95,
            "drawDate": "1998-02-28T00:00:00",
            "numbers": [6, 9, 11, 12, 21, 26, 34],
            "addNumbers": [17, 23, 28],
            "prizes": ["3242380", "63160", "7355", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64847688
          },
          {
            "id": 96,
            "drawDate": "1998-03-07T00:00:00",
            "numbers": [2, 7, 8, 9, 17, 26, 31],
            "addNumbers": [5, 23, 30],
            "prizes": ["4795225", "53280", "7585", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63936363
          },
          {
            "id": 97,
            "drawDate": "1998-03-14T00:00:00",
            "numbers": [1, 2, 3, 15, 16, 30, 33],
            "addNumbers": [21, 22, 26],
            "prizes": ["Gull-Lotto!", "63105", "9545", "260", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64788792
          },
          {
            "id": 98,
            "drawDate": "1998-03-21T00:00:00",
            "numbers": [1, 4, 8, 15, 23, 26, 31],
            "addNumbers": [24, 25, 30],
            "prizes": ["5975095", "42460", "5435", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 94547166
          },
          {
            "id": 99,
            "drawDate": "1998-03-28T00:00:00",
            "numbers": [2, 11, 15, 17, 19, 26, 27],
            "addNumbers": [3, 12, 32],
            "prizes": ["3370915", "43215", "6830", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67418328
          },
          {
            "id": 100,
            "drawDate": "1998-04-04T00:00:00",
            "numbers": [1, 11, 14, 17, 18, 24, 28],
            "addNumbers": [12, 16, 27],
            "prizes": ["2919885", "94185", "8715", "245", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 77863680
          },
          {
            "id": 101,
            "drawDate": "1998-04-11T00:00:00",
            "numbers": [1, 5, 12, 15, 17, 24, 26],
            "addNumbers": [3, 13, 25],
            "prizes": ["9843535", "63095", "7910", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65623584
          },
          {
            "id": 102,
            "drawDate": "1998-04-18T00:00:00",
            "numbers": [2, 5, 19, 20, 21, 29, 33],
            "addNumbers": [22, 24, 34],
            "prizes": ["1704645", "70050", "7230", "215", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68185941
          },
          {
            "id": 103,
            "drawDate": "1998-04-25T00:00:00",
            "numbers": [2, 3, 17, 22, 26, 27, 29],
            "addNumbers": [1, 25, 30],
            "prizes": ["4949025", "101000", "7625", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65987013
          },
          {
            "id": 104,
            "drawDate": "1998-05-02T00:00:00",
            "numbers": [1, 9, 22, 24, 26, 29, 31],
            "addNumbers": [13, 25, 28],
            "prizes": ["4796270", "70530", "8125", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63950277
          },
          {
            "id": 105,
            "drawDate": "1998-05-09T00:00:00",
            "numbers": [4, 8, 11, 14, 24, 29, 30],
            "addNumbers": [6, 12, 13],
            "prizes": ["2313875", "69070", "7815", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61703355
          },
          {
            "id": 106,
            "drawDate": "1998-05-16T00:00:00",
            "numbers": [4, 7, 15, 19, 24, 26, 34],
            "addNumbers": [3, 11, 25],
            "prizes": ["3040745", "57010", "7340", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60814932
          },
          {
            "id": 107,
            "drawDate": "1998-05-23T00:00:00",
            "numbers": [2, 8, 16, 17, 24, 31, 33],
            "addNumbers": [5, 15, 28],
            "prizes": ["4536775", "74370", "7445", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60490353
          },
          {
            "id": 108,
            "drawDate": "1998-05-30T00:00:00",
            "numbers": [2, 4, 9, 10, 12, 19, 22],
            "addNumbers": [1, 23, 26],
            "prizes": ["1740565", "55080", "5050", "165", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58018878
          },
          {
            "id": 109,
            "drawDate": "1998-06-06T00:00:00",
            "numbers": [1, 2, 5, 14, 18, 26, 33],
            "addNumbers": [6, 20, 24],
            "prizes": ["8531760", "82035", "7575", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 56878410
          },
          {
            "id": 110,
            "drawDate": "1998-06-13T00:00:00",
            "numbers": [7, 12, 14, 17, 26, 27, 33],
            "addNumbers": [13, 15, 16],
            "prizes": ["4315715", "74405", "7275", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 57542910
          },
          {
            "id": 111,
            "drawDate": "1998-06-20T00:00:00",
            "numbers": [11, 12, 16, 18, 21, 25, 26],
            "addNumbers": [15, 29, 34],
            "prizes": ["4372665", "59895", "7710", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58302246
          },
          {
            "id": 112,
            "drawDate": "1998-06-27T00:00:00",
            "numbers": [15, 18, 23, 25, 27, 32, 33],
            "addNumbers": [8, 11, 21],
            "prizes": ["1248470", "59855", "6795", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58262007
          },
          {
            "id": 113,
            "drawDate": "1998-07-04T00:00:00",
            "numbers": [4, 8, 13, 19, 21, 23, 28],
            "addNumbers": [16, 17, 30],
            "prizes": ["983090", "40215", "6090", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58985598
          },
          {
            "id": 114,
            "drawDate": "1998-07-11T00:00:00",
            "numbers": [2, 6, 11, 14, 15, 19, 25],
            "addNumbers": [16, 18, 28],
            "prizes": ["2964700", "64450", "8370", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59294007
          },
          {
            "id": 115,
            "drawDate": "1998-07-18T00:00:00",
            "numbers": [2, 5, 9, 25, 26, 28, 29],
            "addNumbers": [8, 18, 20],
            "prizes": ["4470275", "50225", "7425", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59603670
          },
          {
            "id": 116,
            "drawDate": "1998-07-25T00:00:00",
            "numbers": [1, 6, 10, 12, 14, 15, 29],
            "addNumbers": [11, 17, 18],
            "prizes": ["4510700", "79135", "8555", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60142728
          },
          {
            "id": 117,
            "drawDate": "1998-08-01T00:00:00",
            "numbers": [2, 5, 6, 8, 10, 11, 30],
            "addNumbers": [13, 18, 32],
            "prizes": ["1289945", "47520", "5995", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60197649
          },
          {
            "id": 118,
            "drawDate": "1998-08-08T00:00:00",
            "numbers": [1, 4, 6, 10, 16, 17, 18],
            "addNumbers": [3, 23, 31],
            "prizes": ["2203990", "57995", "7225", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58773147
          },
          {
            "id": 119,
            "drawDate": "1998-08-15T00:00:00",
            "numbers": [1, 3, 4, 5, 10, 17, 18],
            "addNumbers": [20, 21, 28],
            "prizes": ["2968365", "80955", "7370", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59367360
          },
          {
            "id": 120,
            "drawDate": "1998-08-22T00:00:00",
            "numbers": [5, 12, 14, 22, 26, 28, 34],
            "addNumbers": [8, 9, 30],
            "prizes": ["1520055", "38645", "6735", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60802398
          },
          {
            "id": 121,
            "drawDate": "1998-08-29T00:00:00",
            "numbers": [7, 10, 12, 19, 23, 29, 30],
            "addNumbers": [9, 27, 28],
            "prizes": ["1821920", "56230", "6995", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60730803
          },
          {
            "id": 122,
            "drawDate": "1998-09-05T00:00:00",
            "numbers": [15, 22, 28, 30, 31, 33, 34],
            "addNumbers": [10, 17, 20],
            "prizes": ["2240300", "81465", "7285", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59741391
          },
          {
            "id": 123,
            "drawDate": "1998-09-12T00:00:00",
            "numbers": [6, 12, 16, 18, 21, 24, 28],
            "addNumbers": [8, 11, 26],
            "prizes": ["1293350", "46190", "6015", "185", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60356541
          },
          {
            "id": 124,
            "drawDate": "1998-09-19T00:00:00",
            "numbers": [5, 7, 10, 18, 19, 23, 28],
            "addNumbers": [1, 8, 21],
            "prizes": ["1824900", "54965", "5900", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60830163
          },
          {
            "id": 125,
            "drawDate": "1998-09-26T00:00:00",
            "numbers": [11, 18, 21, 30, 32, 33, 34],
            "addNumbers": [4, 6, 7],
            "prizes": ["1519355", "69060", "9340", "260", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60774336
          },
          {
            "id": 126,
            "drawDate": "1998-10-03T00:00:00",
            "numbers": [3, 9, 15, 21, 28, 31, 32],
            "addNumbers": [17, 23, 26],
            "prizes": ["662560", "37100", "5395", "185", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61839270
          },
          {
            "id": 127,
            "drawDate": "1998-10-10T00:00:00",
            "numbers": [4, 6, 8, 18, 19, 21, 30],
            "addNumbers": [3, 15, 17],
            "prizes": ["1537915", "65910", "5945", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61516689
          },
          {
            "id": 128,
            "drawDate": "1998-10-17T00:00:00",
            "numbers": [3, 5, 17, 19, 20, 24, 33],
            "addNumbers": [10, 15, 30],
            "prizes": ["9226095", "62335", "7845", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61507314
          },
          {
            "id": 129,
            "drawDate": "1998-10-24T00:00:00",
            "numbers": [2, 6, 13, 17, 19, 27, 34],
            "addNumbers": [3, 28, 30],
            "prizes": ["1325650", "53950", "5870", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61863891
          },
          {
            "id": 130,
            "drawDate": "1998-10-31T00:00:00",
            "numbers": [3, 5, 6, 8, 12, 15, 19],
            "addNumbers": [9, 18, 28],
            "prizes": ["3068160", "40015", "5975", "190", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61363206
          },
          {
            "id": 131,
            "drawDate": "1998-11-07T00:00:00",
            "numbers": [2, 9, 10, 19, 21, 26, 27],
            "addNumbers": [17, 24, 30],
            "prizes": ["1503320", "64425", "6065", "180", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60132966
          },
          {
            "id": 132,
            "drawDate": "1998-11-14T00:00:00",
            "numbers": [6, 10, 16, 19, 20, 21, 31],
            "addNumbers": [26, 32, 33],
            "prizes": ["9132005", "61700", "7670", "235", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60880056
          },
          {
            "id": 133,
            "drawDate": "1998-11-21T00:00:00",
            "numbers": [1, 16, 18, 21, 23, 28, 29],
            "addNumbers": [10, 13, 14],
            "prizes": ["3040830", "86060", "8585", "225", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60816699
          },
          {
            "id": 134,
            "drawDate": "1998-11-28T00:00:00",
            "numbers": [2, 15, 16, 21, 22, 24, 28],
            "addNumbers": [9, 26, 29],
            "prizes": ["2997850", "51095", "8630", "210", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59957025
          },
          {
            "id": 135,
            "drawDate": "1998-12-05T00:00:00",
            "numbers": [8, 9, 20, 22, 23, 28, 32],
            "addNumbers": [31, 33, 34],
            "prizes": ["8991220", "41625", "5875", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59941488
          },
          {
            "id": 136,
            "drawDate": "1998-12-12T00:00:00",
            "numbers": [1, 6, 11, 12, 18, 20, 23],
            "addNumbers": [10, 16, 27],
            "prizes": ["4711345", "78520", "8065", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62817948
          },
          {
            "id": 137,
            "drawDate": "1998-12-19T00:00:00",
            "numbers": [8, 13, 14, 16, 23, 25, 30],
            "addNumbers": [7, 22, 33],
            "prizes": ["2926395", "86070", "8920", "245", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 78037287
          },
          {
            "id": 138,
            "drawDate": "1998-12-26T00:00:00",
            "numbers": [3, 20, 22, 25, 27, 30, 32],
            "addNumbers": [10, 14, 26],
            "prizes": ["1911450", "79640", "7325", "225", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63715011
          },
          {
            "id": 139,
            "drawDate": "1999-01-02T00:00:00",
            "numbers": [2, 8, 12, 15, 17, 28, 34],
            "addNumbers": [3, 5, 23],
            "prizes": ["3353540", "48835", "6415", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67070889
          },
          {
            "id": 140,
            "drawDate": "1999-01-09T00:00:00",
            "numbers": [2, 3, 4, 9, 10, 18, 28],
            "addNumbers": [1, 20, 29],
            "prizes": ["1244480", "55930", "6890", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66372429
          },
          {
            "id": 141,
            "drawDate": "1999-01-16T00:00:00",
            "numbers": [7, 11, 17, 31, 32, 33, 34],
            "addNumbers": [6, 13, 19],
            "prizes": ["1651000", "71780", "7480", "255", "60"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66040167
          },
          {
            "id": 142,
            "drawDate": "1999-01-23T00:00:00",
            "numbers": [8, 16, 18, 20, 21, 28, 34],
            "addNumbers": [12, 29, 32],
            "prizes": ["3176630", "48130", "6400", "185", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63532638
          },
          {
            "id": 143,
            "drawDate": "1999-01-30T00:00:00",
            "numbers": [5, 7, 24, 26, 30, 31, 34],
            "addNumbers": [19, 23, 25],
            "prizes": ["1905155", "103540", "6650", "250", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63505197
          },
          {
            "id": 144,
            "drawDate": "1999-02-06T00:00:00",
            "numbers": [8, 12, 19, 22, 29, 31, 34],
            "addNumbers": [2, 7, 28],
            "prizes": ["3126970", "55835", "6690", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62539485
          },
          {
            "id": 145,
            "drawDate": "1999-02-13T00:00:00",
            "numbers": [11, 16, 17, 18, 27, 28, 29],
            "addNumbers": [10, 14, 19],
            "prizes": ["1045960", "53485", "7065", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62757759
          },
          {
            "id": 146,
            "drawDate": "1999-02-20T00:00:00",
            "numbers": [3, 4, 12, 14, 22, 28, 31],
            "addNumbers": [2, 11, 24],
            "prizes": ["4718115", "56840", "5970", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62908251
          },
          {
            "id": 147,
            "drawDate": "1999-02-27T00:00:00",
            "numbers": [2, 10, 14, 20, 23, 29, 34],
            "addNumbers": [7, 9, 17],
            "prizes": ["1546095", "55215", "6505", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61843998
          },
          {
            "id": 148,
            "drawDate": "1999-03-06T00:00:00",
            "numbers": [1, 16, 18, 19, 25, 30, 31],
            "addNumbers": [8, 14, 32],
            "prizes": ["3013930", "115920", "9225", "250", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60278631
          },
          {
            "id": 149,
            "drawDate": "1999-03-13T00:00:00",
            "numbers": [1, 8, 11, 12, 17, 18, 20],
            "addNumbers": [5, 21, 30],
            "prizes": ["3036290", "63255", "8430", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60725877
          },
          {
            "id": 150,
            "drawDate": "1999-03-20T00:00:00",
            "numbers": [2, 8, 13, 14, 18, 23, 33],
            "addNumbers": [19, 22, 30],
            "prizes": ["4651960", "66455", "8660", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62026146
          },
          {
            "id": 151,
            "drawDate": "1999-03-27T00:00:00",
            "numbers": [1, 3, 4, 12, 27, 28, 34],
            "addNumbers": [18, 22, 33],
            "prizes": ["2346275", "82325", "8185", "255", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62567349
          },
          {
            "id": 152,
            "drawDate": "1999-04-03T00:00:00",
            "numbers": [2, 17, 25, 27, 28, 31, 34],
            "addNumbers": [3, 6, 29],
            "prizes": ["1773520", "82105", "8690", "245", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59117493
          },
          {
            "id": 153,
            "drawDate": "1999-04-10T00:00:00",
            "numbers": [2, 5, 8, 9, 17, 22, 27],
            "addNumbers": [13, 32, 33],
            "prizes": ["1014975", "29850", "4240", "145", "35"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60898728
          },
          {
            "id": 154,
            "drawDate": "1999-04-17T00:00:00",
            "numbers": [12, 17, 18, 22, 30, 32, 34],
            "addNumbers": [5, 6, 7],
            "prizes": ["3210325", "67820", "8385", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64206597
          },
          {
            "id": 155,
            "drawDate": "1999-04-24T00:00:00",
            "numbers": [1, 4, 5, 16, 20, 22, 24],
            "addNumbers": [17, 29, 30],
            "prizes": ["6666665", "57610", "8445", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 89109846
          },
          {
            "id": 156,
            "drawDate": "1999-05-01T00:00:00",
            "numbers": [5, 12, 22, 30, 32, 33, 34],
            "addNumbers": [3, 4, 17],
            "prizes": ["9064175", "67640", "7270", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60427842
          },
          {
            "id": 157,
            "drawDate": "1999-05-08T00:00:00",
            "numbers": [1, 9, 10, 11, 18, 22, 34],
            "addNumbers": [15, 16, 29],
            "prizes": ["3146880", "100430", "8855", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62937666
          },
          {
            "id": 158,
            "drawDate": "1999-05-15T00:00:00",
            "numbers": [1, 2, 3, 12, 17, 19, 26],
            "addNumbers": [4, 8, 30],
            "prizes": ["3224945", "66265", "8395", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64498926
          },
          {
            "id": 159,
            "drawDate": "1999-05-22T00:00:00",
            "numbers": [10, 11, 13, 14, 21, 24, 32],
            "addNumbers": [17, 20, 31],
            "prizes": ["4641715", "64465", "8755", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61889586
          },
          {
            "id": 160,
            "drawDate": "1999-05-29T00:00:00",
            "numbers": [12, 14, 24, 27, 28, 29, 33],
            "addNumbers": [7, 10, 16],
            "prizes": ["8976205", "74800", "8990", "255", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59841372
          },
          {
            "id": 161,
            "drawDate": "1999-06-05T00:00:00",
            "numbers": [4, 8, 12, 13, 29, 32, 33],
            "addNumbers": [1, 24, 34],
            "prizes": ["4536650", "90730", "8215", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60488712
          },
          {
            "id": 162,
            "drawDate": "1999-06-12T00:00:00",
            "numbers": [3, 6, 10, 11, 24, 28, 33],
            "addNumbers": [2, 14, 18],
            "prizes": ["Gull-Lotto!", "51505", "7670", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59749281
          },
          {
            "id": 163,
            "drawDate": "1999-06-19T00:00:00",
            "numbers": [1, 9, 24, 25, 28, 29, 32],
            "addNumbers": [8, 21, 22],
            "prizes": ["3869805", "72735", "10110", "250", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 95042985
          },
          {
            "id": 164,
            "drawDate": "1999-06-26T00:00:00",
            "numbers": [6, 7, 10, 15, 16, 22, 23],
            "addNumbers": [8, 12, 33],
            "prizes": ["4961800", "59065", "7960", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66157377
          },
          {
            "id": 165,
            "drawDate": "1999-07-03T00:00:00",
            "numbers": [10, 11, 15, 16, 18, 20, 23],
            "addNumbers": [4, 24, 27],
            "prizes": ["4970030", "49700", "7835", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66267123
          },
          {
            "id": 166,
            "drawDate": "1999-07-10T00:00:00",
            "numbers": [8, 14, 19, 25, 28, 30, 33],
            "addNumbers": [3, 16, 20],
            "prizes": ["4814045", "67800", "9400", "255", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64187268
          },
          {
            "id": 167,
            "drawDate": "1999-07-17T00:00:00",
            "numbers": [5, 12, 19, 23, 24, 28, 34],
            "addNumbers": [21, 27, 30],
            "prizes": ["4876615", "73885", "7875", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65021541
          },
          {
            "id": 168,
            "drawDate": "1999-07-24T00:00:00",
            "numbers": [3, 4, 8, 9, 17, 18, 32],
            "addNumbers": [14, 24, 29],
            "prizes": ["3228005", "66325", "7830", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64560156
          },
          {
            "id": 169,
            "drawDate": "1999-07-31T00:00:00",
            "numbers": [10, 24, 27, 28, 32, 33, 34],
            "addNumbers": [17, 22, 26],
            "prizes": ["3130970", "47435", "7875", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62619486
          },
          {
            "id": 170,
            "drawDate": "1999-08-07T00:00:00",
            "numbers": [3, 11, 13, 17, 22, 25, 27],
            "addNumbers": [5, 8, 16],
            "prizes": ["770265", "36105", "5655", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61621518
          },
          {
            "id": 171,
            "drawDate": "1999-08-14T00:00:00",
            "numbers": [2, 5, 15, 16, 21, 29, 34],
            "addNumbers": [7, 30, 32],
            "prizes": ["2325485", "55365", "6775", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62012934
          },
          {
            "id": 172,
            "drawDate": "1999-08-21T00:00:00",
            "numbers": [8, 9, 14, 20, 21, 30, 31],
            "addNumbers": [6, 7, 28],
            "prizes": ["2368850", "72885", "8565", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63169362
          },
          {
            "id": 173,
            "drawDate": "1999-08-28T00:00:00",
            "numbers": [8, 14, 21, 22, 23, 26, 28],
            "addNumbers": [19, 24, 32],
            "prizes": ["1346580", "54170", "6050", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62840514
          },
          {
            "id": 174,
            "drawDate": "1999-09-04T00:00:00",
            "numbers": [8, 13, 15, 16, 20, 28, 33],
            "addNumbers": [2, 14, 32],
            "prizes": ["6666665", "51590", "6560", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 84609588
          },
          {
            "id": 175,
            "drawDate": "1999-09-11T00:00:00",
            "numbers": [8, 14, 19, 20, 25, 30, 34],
            "addNumbers": [1, 23, 27],
            "prizes": ["Gull-Lotto!", "68965", "10190", "270", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67128918
          },
          {
            "id": 176,
            "drawDate": "1999-09-18T00:00:00",
            "numbers": [2, 7, 12, 27, 28, 30, 31],
            "addNumbers": [10, 13, 20],
            "prizes": ["4318235", "70085", "7825", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 105600501
          },
          {
            "id": 177,
            "drawDate": "1999-09-25T00:00:00",
            "numbers": [6, 10, 13, 15, 18, 23, 25],
            "addNumbers": [9, 14, 28],
            "prizes": ["1552730", "76540", "5470", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72460734
          },
          {
            "id": 178,
            "drawDate": "1999-10-02T00:00:00",
            "numbers": [10, 18, 22, 27, 29, 30, 32],
            "addNumbers": [1, 13, 19],
            "prizes": ["3549750", "54330", "6695", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70995063
          },
          {
            "id": 179,
            "drawDate": "1999-10-09T00:00:00",
            "numbers": [3, 4, 10, 13, 16, 24, 30],
            "addNumbers": [8, 25, 27],
            "prizes": ["2522555", "62285", "9445", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67268205
          },
          {
            "id": 180,
            "drawDate": "1999-10-16T00:00:00",
            "numbers": [12, 17, 20, 22, 27, 29, 30],
            "addNumbers": [19, 26, 34],
            "prizes": ["3397100", "62905", "6580", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67942014
          },
          {
            "id": 181,
            "drawDate": "1999-10-23T00:00:00",
            "numbers": [10, 15, 17, 18, 22, 31, 32],
            "addNumbers": [16, 20, 24],
            "prizes": ["1641705", "69365", "7890", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65668206
          },
          {
            "id": 182,
            "drawDate": "1999-10-30T00:00:00",
            "numbers": [3, 6, 15, 17, 21, 25, 34],
            "addNumbers": [26, 30, 33],
            "prizes": ["2448285", "66165", "6590", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65287605
          },
          {
            "id": 183,
            "drawDate": "1999-11-06T00:00:00",
            "numbers": [5, 8, 11, 13, 18, 23, 31],
            "addNumbers": [2, 10, 19],
            "prizes": ["9691335", "44865", "7570", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64608918
          },
          {
            "id": 184,
            "drawDate": "1999-11-13T00:00:00",
            "numbers": [2, 8, 13, 14, 15, 27, 29],
            "addNumbers": [6, 24, 25],
            "prizes": ["5015190", "55720", "6980", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66869214
          },
          {
            "id": 185,
            "drawDate": "1999-11-20T00:00:00",
            "numbers": [6, 14, 18, 19, 24, 27, 31],
            "addNumbers": [3, 11, 12],
            "prizes": ["1666430", "68480", "7380", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66657306
          },
          {
            "id": 186,
            "drawDate": "1999-11-27T00:00:00",
            "numbers": [1, 4, 16, 18, 19, 27, 30],
            "addNumbers": [12, 23, 31],
            "prizes": ["3243435", "47230", "6980", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64868793
          },
          {
            "id": 187,
            "drawDate": "1999-12-04T00:00:00",
            "numbers": [2, 5, 6, 10, 16, 24, 25],
            "addNumbers": [12, 21, 29],
            "prizes": ["9619125", "57945", "7945", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64127520
          },
          {
            "id": 188,
            "drawDate": "1999-12-11T00:00:00",
            "numbers": [5, 6, 9, 15, 17, 29, 33],
            "addNumbers": [20, 23, 32],
            "prizes": ["2558585", "49680", "8170", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68229030
          },
          {
            "id": 189,
            "drawDate": "1999-12-18T00:00:00",
            "numbers": [4, 5, 8, 9, 10, 18, 23],
            "addNumbers": [7, 25, 28],
            "prizes": ["2500000", "63640", "7200", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 87402789
          },
          {
            "id": 190,
            "drawDate": "1999-12-26T00:00:00",
            "numbers": [2, 3, 8, 22, 25, 30, 33],
            "addNumbers": [5, 6, 27],
            "prizes": ["2467130", "68530", "8625", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65790159
          },
          {
            "id": 191,
            "drawDate": "1999-12-31T00:00:00",
            "numbers": [6, 9, 14, 15, 22, 23, 25],
            "addNumbers": [20, 21, 34],
            "prizes": ["2344605", "82265", "7335", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62522883
          },
          {
            "id": 192,
            "drawDate": "2000-01-08T00:00:00",
            "numbers": [5, 6, 7, 24, 28, 32, 33],
            "addNumbers": [10, 23, 29],
            "prizes": ["1703070", "71960", "8655", "255", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68122869
          },
          {
            "id": 193,
            "drawDate": "2000-01-15T00:00:00",
            "numbers": [3, 11, 22, 24, 28, 29, 32],
            "addNumbers": [8, 16, 33],
            "prizes": ["2527350", "54350", "7800", "225", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67396104
          },
          {
            "id": 194,
            "drawDate": "2000-01-22T00:00:00",
            "numbers": [12, 16, 19, 24, 25, 31, 32],
            "addNumbers": [1, 17, 28],
            "prizes": ["4930675", "80830", "9740", "260", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65742339
          },
          {
            "id": 195,
            "drawDate": "2000-01-29T00:00:00",
            "numbers": [10, 16, 24, 26, 27, 30, 31],
            "addNumbers": [8, 17, 18],
            "prizes": ["1675425", "79780", "7990", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67017111
          },
          {
            "id": 196,
            "drawDate": "2000-02-05T00:00:00",
            "numbers": [2, 5, 6, 24, 25, 27, 29],
            "addNumbers": [20, 26, 28],
            "prizes": ["3369405", "66500", "7410", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67388163
          },
          {
            "id": 197,
            "drawDate": "2000-02-12T00:00:00",
            "numbers": [4, 7, 11, 14, 17, 18, 26],
            "addNumbers": [12, 13, 22],
            "prizes": ["2555840", "63105", "7330", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68155767
          },
          {
            "id": 198,
            "drawDate": "2000-02-19T00:00:00",
            "numbers": [2, 9, 10, 18, 22, 26, 30],
            "addNumbers": [4, 16, 21],
            "prizes": ["1706460", "56880", "5165", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68258598
          },
          {
            "id": 199,
            "drawDate": "2000-02-26T00:00:00",
            "numbers": [1, 3, 6, 12, 20, 24, 34],
            "addNumbers": [2, 14, 30],
            "prizes": ["1651600", "73950", "8630", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66064155
          },
          {
            "id": 200,
            "drawDate": "2000-03-04T00:00:00",
            "numbers": [1, 5, 8, 19, 21, 30, 34],
            "addNumbers": [3, 6, 29],
            "prizes": ["4912310", "68225", "7805", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65497527
          },
          {
            "id": 201,
            "drawDate": "2000-03-11T00:00:00",
            "numbers": [1, 3, 6, 12, 19, 21, 23],
            "addNumbers": [4, 31, 33],
            "prizes": ["1957460", "57570", "6565", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65248749
          },
          {
            "id": 202,
            "drawDate": "2000-03-18T00:00:00",
            "numbers": [6, 8, 12, 13, 14, 17, 20],
            "addNumbers": [15, 21, 26],
            "prizes": ["Gull-Lotto!", "86725", "9265", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64758273
          },
          {
            "id": 203,
            "drawDate": "2000-03-25T00:00:00",
            "numbers": [6, 9, 16, 20, 21, 22, 23],
            "addNumbers": [13, 25, 29],
            "prizes": ["5829860", "73145", "7675", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 90704709
          },
          {
            "id": 204,
            "drawDate": "2000-04-01T00:00:00",
            "numbers": [2, 5, 9, 21, 22, 24, 29],
            "addNumbers": [3, 4, 20],
            "prizes": ["2580015", "67010", "5935", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68800488
          },
          {
            "id": 205,
            "drawDate": "2000-04-08T00:00:00",
            "numbers": [7, 8, 18, 26, 27, 29, 30],
            "addNumbers": [1, 5, 13],
            "prizes": ["2504185", "71545", "8650", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66778281
          },
          {
            "id": 206,
            "drawDate": "2000-04-15T00:00:00",
            "numbers": [2, 6, 12, 17, 24, 26, 33],
            "addNumbers": [4, 11, 18],
            "prizes": ["5000000", "50485", "7380", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 79433637
          },
          {
            "id": 207,
            "drawDate": "2000-04-22T00:00:00",
            "numbers": [1, 3, 13, 17, 24, 26, 33],
            "addNumbers": [8, 27, 30],
            "prizes": ["10322235", "60715", "7665", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68814927
          },
          {
            "id": 208,
            "drawDate": "2000-04-29T00:00:00",
            "numbers": [5, 12, 14, 15, 16, 19, 21],
            "addNumbers": [6, 24, 32],
            "prizes": ["1976330", "68620", "9335", "245", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65877810
          },
          {
            "id": 209,
            "drawDate": "2000-05-06T00:00:00",
            "numbers": [3, 8, 12, 18, 19, 20, 22],
            "addNumbers": [11, 14, 32],
            "prizes": ["1895310", "78970", "6550", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63177141
          },
          {
            "id": 210,
            "drawDate": "2000-05-13T00:00:00",
            "numbers": [2, 5, 9, 22, 24, 29, 32],
            "addNumbers": [1, 13, 14],
            "prizes": ["1605560", "34900", "3145", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64222533
          },
          {
            "id": 211,
            "drawDate": "2000-05-20T00:00:00",
            "numbers": [1, 2, 5, 11, 12, 20, 25],
            "addNumbers": [18, 27, 28],
            "prizes": ["2327485", "62905", "7900", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62066310
          },
          {
            "id": 212,
            "drawDate": "2000-05-27T00:00:00",
            "numbers": [2, 7, 13, 14, 17, 28, 29],
            "addNumbers": [6, 8, 21],
            "prizes": ["2331730", "37605", "6970", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62179527
          },
          {
            "id": 213,
            "drawDate": "2000-06-03T00:00:00",
            "numbers": [2, 3, 9, 11, 12, 16, 24],
            "addNumbers": [10, 19, 27],
            "prizes": ["1146845", "54610", "7520", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61165122
          },
          {
            "id": 214,
            "drawDate": "2000-06-10T00:00:00",
            "numbers": [15, 22, 25, 28, 29, 30, 31],
            "addNumbers": [7, 19, 27],
            "prizes": ["3086685", "62565", "7965", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61733721
          },
          {
            "id": 215,
            "drawDate": "2000-06-17T00:00:00",
            "numbers": [3, 12, 14, 18, 19, 22, 24],
            "addNumbers": [4, 28, 29],
            "prizes": ["3076125", "60710", "6290", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61522575
          },
          {
            "id": 216,
            "drawDate": "2000-06-24T00:00:00",
            "numbers": [6, 15, 18, 19, 23, 28, 31],
            "addNumbers": [2, 5, 17],
            "prizes": ["1598455", "43590", "6735", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63938301
          },
          {
            "id": 217,
            "drawDate": "2000-07-01T00:00:00",
            "numbers": [4, 11, 17, 18, 20, 21, 26],
            "addNumbers": [7, 15, 23],
            "prizes": ["4796805", "57100", "7610", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63957405
          },
          {
            "id": 218,
            "drawDate": "2000-07-08T00:00:00",
            "numbers": [4, 5, 10, 11, 17, 21, 25],
            "addNumbers": [2, 13, 28],
            "prizes": ["4774075", "75775", "6710", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63654393
          },
          {
            "id": 219,
            "drawDate": "2000-07-15T00:00:00",
            "numbers": [2, 6, 12, 15, 25, 28, 33],
            "addNumbers": [20, 21, 31],
            "prizes": ["2433520", "54685", "5855", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64893924
          },
          {
            "id": 220,
            "drawDate": "2000-07-22T00:00:00",
            "numbers": [6, 11, 12, 14, 28, 31, 32],
            "addNumbers": [19, 21, 30],
            "prizes": ["9694555", "59840", "8940", "245", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64630392
          },
          {
            "id": 221,
            "drawDate": "2000-07-29T00:00:00",
            "numbers": [1, 14, 21, 23, 24, 27, 29],
            "addNumbers": [12, 16, 28],
            "prizes": ["4736040", "67655", "8685", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63147225
          },
          {
            "id": 222,
            "drawDate": "2000-08-05T00:00:00",
            "numbers": [1, 4, 10, 12, 14, 19, 29],
            "addNumbers": [17, 20, 34],
            "prizes": ["2365945", "81580", "7245", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63091977
          },
          {
            "id": 223,
            "drawDate": "2000-08-12T18:00:00",
            "numbers": [3, 6, 8, 14, 15, 26, 32],
            "addNumbers": [1, 4, 25],
            "prizes": ["4712300", "79865", "7800", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62830716
          },
          {
            "id": 224,
            "drawDate": "2000-08-19T18:00:00",
            "numbers": [1, 3, 12, 19, 22, 29, 34],
            "addNumbers": [6, 14, 16],
            "prizes": ["2388490", "68240", "7495", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63693135
          },
          {
            "id": 225,
            "drawDate": "2000-08-26T18:00:00",
            "numbers": [2, 4, 6, 7, 8, 13, 15],
            "addNumbers": [20, 29, 32],
            "prizes": ["3245535", "65785", "5680", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64910787
          },
          {
            "id": 226,
            "drawDate": "2000-09-02T18:00:00",
            "numbers": [1, 4, 18, 25, 26, 28, 32],
            "addNumbers": [2, 23, 27],
            "prizes": ["5000000", "81040", "8940", "245", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 85362498
          },
          {
            "id": 227,
            "drawDate": "2000-09-09T18:00:00",
            "numbers": [2, 13, 19, 24, 28, 29, 33],
            "addNumbers": [5, 12, 30],
            "prizes": ["10184570", "69755", "8015", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67897146
          },
          {
            "id": 228,
            "drawDate": "2000-09-16T18:00:00",
            "numbers": [10, 15, 17, 24, 26, 32, 34],
            "addNumbers": [4, 29, 33],
            "prizes": ["10118475", "60225", "8545", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67456518
          },
          {
            "id": 229,
            "drawDate": "2000-09-23T18:00:00",
            "numbers": [5, 6, 17, 18, 24, 25, 29],
            "addNumbers": [12, 19, 31],
            "prizes": ["1693965", "50315", "6960", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67758633
          },
          {
            "id": 230,
            "drawDate": "2000-09-30T18:00:00",
            "numbers": [7, 13, 17, 19, 21, 27, 31],
            "addNumbers": [2, 5, 9],
            "prizes": ["1005075", "26445", "4400", "170", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67005333
          },
          {
            "id": 231,
            "drawDate": "2000-10-07T18:00:00",
            "numbers": [2, 3, 8, 10, 22, 26, 33],
            "addNumbers": [14, 31, 32],
            "prizes": ["3276110", "45080", "6020", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65522280
          },
          {
            "id": 232,
            "drawDate": "2000-10-14T18:00:00",
            "numbers": [2, 9, 10, 11, 16, 28, 32],
            "addNumbers": [8, 17, 34],
            "prizes": ["9982755", "73400", "6705", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66551706
          },
          {
            "id": 233,
            "drawDate": "2000-10-21T18:00:00",
            "numbers": [3, 5, 14, 16, 18, 27, 30],
            "addNumbers": [4, 8, 25],
            "prizes": ["1671730", "49165", "5625", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66869364
          },
          {
            "id": 234,
            "drawDate": "2000-10-28T18:00:00",
            "numbers": [8, 9, 15, 18, 20, 25, 27],
            "addNumbers": [1, 14, 33],
            "prizes": ["2480015", "76305", "8010", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66133743
          },
          {
            "id": 235,
            "drawDate": "2000-11-04T18:00:00",
            "numbers": [1, 5, 10, 11, 18, 19, 29],
            "addNumbers": [25, 27, 31],
            "prizes": ["2466995", "50865", "6700", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65786664
          },
          {
            "id": 236,
            "drawDate": "2000-11-11T18:00:00",
            "numbers": [6, 9, 14, 27, 28, 29, 31],
            "addNumbers": [2, 11, 33],
            "prizes": ["2462210", "63950", "6990", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65659047
          },
          {
            "id": 237,
            "drawDate": "2000-11-18T18:00:00",
            "numbers": [2, 3, 10, 13, 20, 21, 32],
            "addNumbers": [4, 16, 27],
            "prizes": ["4832350", "70030", "6690", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64431351
          },
          {
            "id": 238,
            "drawDate": "2000-11-25T18:00:00",
            "numbers": [5, 10, 17, 20, 24, 29, 30],
            "addNumbers": [8, 27, 28],
            "prizes": ["3247620", "53530", "7345", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64952451
          },
          {
            "id": 239,
            "drawDate": "2000-12-02T18:00:00",
            "numbers": [1, 3, 11, 16, 17, 20, 24],
            "addNumbers": [21, 29, 30],
            "prizes": ["1603490", "72885", "9320", "245", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64139637
          },
          {
            "id": 240,
            "drawDate": "2000-12-09T18:00:00",
            "numbers": [11, 16, 17, 20, 22, 23, 32],
            "addNumbers": [2, 6, 13],
            "prizes": ["9648560", "63475", "8315", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64323735
          },
          {
            "id": 241,
            "drawDate": "2000-12-16T18:00:00",
            "numbers": [7, 12, 16, 22, 23, 25, 34],
            "addNumbers": [11, 14, 18],
            "prizes": ["3409575", "75210", "8425", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68191509
          },
          {
            "id": 242,
            "drawDate": "2000-12-23T18:00:00",
            "numbers": [6, 8, 12, 26, 29, 32, 33],
            "addNumbers": [10, 17, 24],
            "prizes": ["10000000", "58750", "7705", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 95571255
          },
          {
            "id": 243,
            "drawDate": "2000-12-30T18:00:00",
            "numbers": [4, 5, 11, 18, 20, 25, 29],
            "addNumbers": [15, 19, 28],
            "prizes": ["2728295", "48715", "7975", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72754641
          },
          {
            "id": 244,
            "drawDate": "2001-01-06T18:00:00",
            "numbers": [1, 2, 11, 17, 20, 22, 27],
            "addNumbers": [6, 14, 18],
            "prizes": ["1332160", "43675", "7045", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71048568
          },
          {
            "id": 245,
            "drawDate": "2001-01-13T18:00:00",
            "numbers": [3, 8, 10, 15, 19, 21, 30],
            "addNumbers": [1, 4, 33],
            "prizes": ["5318130", "45450", "7425", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70908447
          },
          {
            "id": 246,
            "drawDate": "2001-01-20T18:00:00",
            "numbers": [4, 9, 13, 17, 19, 21, 26],
            "addNumbers": [10, 12, 30],
            "prizes": ["1525410", "46025", "5330", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71185884
          },
          {
            "id": 247,
            "drawDate": "2001-01-27T18:00:00",
            "numbers": [2, 9, 12, 17, 20, 21, 22],
            "addNumbers": [6, 26, 27],
            "prizes": ["2523865", "48535", "6305", "185", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67303125
          },
          {
            "id": 248,
            "drawDate": "2001-02-03T18:00:00",
            "numbers": [3, 7, 16, 18, 24, 25, 30],
            "addNumbers": [13, 19, 28],
            "prizes": ["5063275", "81665", "8110", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67510386
          },
          {
            "id": 249,
            "drawDate": "2001-02-10T18:00:00",
            "numbers": [9, 13, 16, 17, 23, 25, 30],
            "addNumbers": [2, 20, 29],
            "prizes": ["5068430", "48270", "8575", "225", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67579095
          },
          {
            "id": 250,
            "drawDate": "2001-02-17T18:00:00",
            "numbers": [5, 8, 23, 27, 28, 29, 31],
            "addNumbers": [2, 14, 26],
            "prizes": ["5076105", "65075", "7805", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67681401
          },
          {
            "id": 251,
            "drawDate": "2001-02-24T18:00:00",
            "numbers": [5, 8, 16, 17, 19, 23, 27],
            "addNumbers": [10, 11, 33],
            "prizes": ["1125620", "36440", "4550", "170", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67537425
          },
          {
            "id": 252,
            "drawDate": "2001-03-03T18:00:00",
            "numbers": [1, 5, 9, 11, 15, 19, 23],
            "addNumbers": [24, 32, 33],
            "prizes": ["1673495", "46055", "5795", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66939807
          },
          {
            "id": 253,
            "drawDate": "2001-03-10T18:00:00",
            "numbers": [3, 13, 18, 20, 24, 25, 32],
            "addNumbers": [2, 7, 27],
            "prizes": ["3307310", "69870", "7935", "250", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66146298
          },
          {
            "id": 254,
            "drawDate": "2001-03-17T18:00:00",
            "numbers": [5, 22, 23, 26, 28, 29, 33],
            "addNumbers": [4, 7, 16],
            "prizes": ["3318455", "73200", "5420", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66369132
          },
          {
            "id": 255,
            "drawDate": "2001-03-24T18:00:00",
            "numbers": [3, 6, 7, 11, 21, 28, 30],
            "addNumbers": [4, 9, 34],
            "prizes": ["2483555", "51205", "6775", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66228240
          },
          {
            "id": 256,
            "drawDate": "2001-03-31T18:00:00",
            "numbers": [4, 14, 16, 24, 25, 32, 33],
            "addNumbers": [11, 15, 20],
            "prizes": ["10030155", "61910", "7375", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66867711
          },
          {
            "id": 257,
            "drawDate": "2001-04-07T18:00:00",
            "numbers": [3, 6, 12, 22, 30, 32, 33],
            "addNumbers": [2, 17, 24],
            "prizes": ["20000000", "68160", "7705", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 80888034
          },
          {
            "id": 258,
            "drawDate": "2001-04-14T18:00:00",
            "numbers": [2, 6, 11, 16, 23, 24, 28],
            "addNumbers": [7, 20, 25],
            "prizes": ["1711020", "56405", "7060", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68440860
          },
          {
            "id": 259,
            "drawDate": "2001-04-21T18:00:00",
            "numbers": [1, 3, 10, 23, 25, 29, 30],
            "addNumbers": [7, 11, 28],
            "prizes": ["1471665", "66035", "6795", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68677932
          },
          {
            "id": 260,
            "drawDate": "2001-04-28T18:00:00",
            "numbers": [10, 14, 23, 28, 29, 31, 32],
            "addNumbers": [4, 16, 33],
            "prizes": ["5066005", "61035", "8210", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67546737
          },
          {
            "id": 261,
            "drawDate": "2001-05-05T18:00:00",
            "numbers": [13, 14, 20, 23, 28, 30, 33],
            "addNumbers": [2, 4, 26],
            "prizes": ["2463585", "69395", "8955", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65695704
          },
          {
            "id": 262,
            "drawDate": "2001-05-12T18:00:00",
            "numbers": [3, 4, 7, 9, 14, 15, 26],
            "addNumbers": [19, 22, 32],
            "prizes": ["1572625", "47655", "7440", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62905089
          },
          {
            "id": 263,
            "drawDate": "2001-05-19T18:00:00",
            "numbers": [4, 12, 13, 14, 15, 18, 28],
            "addNumbers": [2, 31, 34],
            "prizes": ["4758560", "65185", "8075", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63447504
          },
          {
            "id": 264,
            "drawDate": "2001-05-26T18:00:00",
            "numbers": [6, 11, 16, 22, 24, 31, 34],
            "addNumbers": [10, 12, 33],
            "prizes": ["2349720", "81020", "8255", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62659293
          },
          {
            "id": 265,
            "drawDate": "2001-06-02T18:00:00",
            "numbers": [2, 11, 13, 16, 18, 26, 33],
            "addNumbers": [15, 17, 28],
            "prizes": ["4651490", "61200", "7465", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62019876
          },
          {
            "id": 266,
            "drawDate": "2001-06-09T18:00:00",
            "numbers": [1, 2, 4, 18, 21, 22, 31],
            "addNumbers": [17, 27, 33],
            "prizes": ["9252545", "87285", "8365", "245", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61683651
          },
          {
            "id": 267,
            "drawDate": "2001-06-16T18:00:00",
            "numbers": [17, 20, 21, 26, 29, 32, 33],
            "addNumbers": [8, 22, 27],
            "prizes": ["1878610", "47435", "7345", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62620398
          },
          {
            "id": 268,
            "drawDate": "2001-06-23T18:00:00",
            "numbers": [7, 11, 12, 19, 21, 25, 31],
            "addNumbers": [18, 27, 32],
            "prizes": ["10000000", "59430", "8025", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 80826702
          },
          {
            "id": 269,
            "drawDate": "2001-06-30T18:00:00",
            "numbers": [4, 6, 16, 17, 18, 26, 30],
            "addNumbers": [7, 8, 27],
            "prizes": ["10037170", "59040", "7290", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66914475
          },
          {
            "id": 270,
            "drawDate": "2001-07-07T18:00:00",
            "numbers": [2, 16, 20, 24, 27, 32, 33],
            "addNumbers": [1, 7, 26],
            "prizes": ["4827850", "73145", "6285", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64371348
          },
          {
            "id": 271,
            "drawDate": "2001-07-14T18:00:00",
            "numbers": [1, 15, 24, 28, 30, 33, 34],
            "addNumbers": [7, 11, 19],
            "prizes": ["9938550", "68070", "8670", "260", "60"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66257022
          },
          {
            "id": 272,
            "drawDate": "2001-07-21T18:00:00",
            "numbers": [2, 4, 9, 10, 13, 22, 29],
            "addNumbers": [7, 12, 34],
            "prizes": ["3295005", "59545", "6190", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65900133
          },
          {
            "id": 273,
            "drawDate": "2001-07-28T18:00:00",
            "numbers": [1, 2, 6, 7, 17, 21, 32],
            "addNumbers": [12, 23, 25],
            "prizes": ["1885240", "53555", "6625", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62841387
          },
          {
            "id": 274,
            "drawDate": "2001-08-04T18:00:00",
            "numbers": [8, 11, 14, 19, 21, 25, 26],
            "addNumbers": [10, 15, 31],
            "prizes": ["3217230", "65210", "8175", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64344627
          },
          {
            "id": 275,
            "drawDate": "2001-08-11T18:00:00",
            "numbers": [1, 2, 6, 15, 18, 26, 34],
            "addNumbers": [19, 24, 28],
            "prizes": ["4793160", "53855", "7510", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63908811
          },
          {
            "id": 276,
            "drawDate": "2001-08-18T18:00:00",
            "numbers": [3, 14, 15, 22, 23, 24, 26],
            "addNumbers": [13, 17, 18],
            "prizes": ["2383710", "50180", "5555", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63565602
          },
          {
            "id": 277,
            "drawDate": "2001-08-25T18:00:00",
            "numbers": [4, 9, 11, 13, 17, 22, 31],
            "addNumbers": [2, 16, 20],
            "prizes": ["1382800", "62045", "6825", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64530879
          },
          {
            "id": 278,
            "drawDate": "2001-09-01T18:00:00",
            "numbers": [1, 2, 12, 13, 24, 26, 30],
            "addNumbers": [16, 23, 28],
            "prizes": ["3333330", "83495", "8360", "245", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 83495154
          },
          {
            "id": 279,
            "drawDate": "2001-09-08T18:00:00",
            "numbers": [1, 2, 6, 7, 24, 25, 32],
            "addNumbers": [14, 28, 34],
            "prizes": ["3405875", "66345", "8440", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68117532
          },
          {
            "id": 280,
            "drawDate": "2001-09-15T18:00:00",
            "numbers": [5, 6, 10, 17, 24, 31, 33],
            "addNumbers": [13, 21, 27],
            "prizes": ["10106300", "60880", "8590", "250", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67375362
          },
          {
            "id": 281,
            "drawDate": "2001-09-22T18:00:00",
            "numbers": [3, 6, 16, 18, 19, 28, 31],
            "addNumbers": [8, 23, 34],
            "prizes": ["2043575", "45615", "6640", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68119233
          },
          {
            "id": 282,
            "drawDate": "2001-09-29T18:00:00",
            "numbers": [1, 4, 7, 11, 19, 20, 33],
            "addNumbers": [15, 27, 28],
            "prizes": ["2021485", "70190", "7835", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67382982
          },
          {
            "id": 283,
            "drawDate": "2001-10-06T18:00:00",
            "numbers": [7, 9, 25, 27, 31, 32, 34],
            "addNumbers": [5, 18, 30],
            "prizes": ["4866660", "82485", "9710", "250", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64888803
          },
          {
            "id": 284,
            "drawDate": "2001-10-13T18:00:00",
            "numbers": [5, 8, 9, 11, 12, 20, 34],
            "addNumbers": [14, 19, 32],
            "prizes": ["3278285", "63860", "8745", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65565702
          },
          {
            "id": 285,
            "drawDate": "2001-10-20T18:00:00",
            "numbers": [5, 10, 22, 26, 27, 30, 33],
            "addNumbers": [1, 8, 19],
            "prizes": ["10014595", "57555", "7525", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66763992
          },
          {
            "id": 286,
            "drawDate": "2001-10-27T18:00:00",
            "numbers": [8, 17, 23, 25, 27, 33, 34],
            "addNumbers": [3, 15, 26],
            "prizes": ["3293250", "58115", "7595", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65865090
          },
          {
            "id": 287,
            "drawDate": "2001-11-03T18:00:00",
            "numbers": [1, 9, 21, 26, 27, 31, 33],
            "addNumbers": [5, 7, 19],
            "prizes": ["2450585", "63650", "8975", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65349063
          },
          {
            "id": 288,
            "drawDate": "2001-11-10T18:00:00",
            "numbers": [2, 12, 15, 22, 29, 33, 34],
            "addNumbers": [18, 21, 28],
            "prizes": ["4904080", "52730", "6415", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65387796
          },
          {
            "id": 289,
            "drawDate": "2001-11-17T18:00:00",
            "numbers": [4, 10, 20, 24, 25, 26, 32],
            "addNumbers": [12, 23, 34],
            "prizes": ["9666600", "75520", "8290", "245", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64444005
          },
          {
            "id": 290,
            "drawDate": "2001-11-24T18:00:00",
            "numbers": [3, 14, 20, 23, 29, 30, 32],
            "addNumbers": [9, 11, 26],
            "prizes": ["2515945", "43755", "8630", "230", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67091985
          },
          {
            "id": 291,
            "drawDate": "2001-12-01T18:00:00",
            "numbers": [2, 11, 13, 17, 24, 28, 32],
            "addNumbers": [25, 30, 34],
            "prizes": ["1429720", "70475", "6470", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66720288
          },
          {
            "id": 292,
            "drawDate": "2001-12-08T18:00:00",
            "numbers": [2, 9, 13, 16, 18, 31, 34],
            "addNumbers": [5, 21, 33],
            "prizes": ["3305850", "36195", "8530", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66117036
          },
          {
            "id": 293,
            "drawDate": "2001-12-15T18:00:00",
            "numbers": [6, 8, 10, 13, 14, 17, 23],
            "addNumbers": [1, 20, 32],
            "prizes": ["2092250", "66210", "7925", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69741696
          },
          {
            "id": 294,
            "drawDate": "2001-12-22T18:00:00",
            "numbers": [1, 2, 6, 10, 11, 20, 24],
            "addNumbers": [8, 21, 26],
            "prizes": ["3333330", "48500", "7255", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 89889030
          },
          {
            "id": 295,
            "drawDate": "2001-12-29T18:00:00",
            "numbers": [2, 4, 19, 26, 28, 32, 34],
            "addNumbers": [21, 27, 33],
            "prizes": ["5364185", "64625", "8525", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71522481
          },
          {
            "id": 296,
            "drawDate": "2002-01-05T18:00:00",
            "numbers": [8, 9, 15, 16, 21, 32, 33],
            "addNumbers": [5, 27, 30],
            "prizes": ["3673620", "52480", "7045", "200", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73472403
          },
          {
            "id": 297,
            "drawDate": "2002-01-12T18:00:00",
            "numbers": [2, 3, 8, 12, 18, 19, 27],
            "addNumbers": [9, 17, 26],
            "prizes": ["2105715", "47855", "5995", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70190532
          },
          {
            "id": 298,
            "drawDate": "2002-01-19T18:00:00",
            "numbers": [5, 10, 18, 26, 27, 30, 33],
            "addNumbers": [4, 13, 23],
            "prizes": ["2096560", "51895", "5405", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69885429
          },
          {
            "id": 299,
            "drawDate": "2002-01-26T18:00:00",
            "numbers": [7, 8, 10, 12, 13, 16, 27],
            "addNumbers": [4, 22, 32],
            "prizes": ["4962235", "57035", "7505", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66163134
          },
          {
            "id": 300,
            "drawDate": "2002-02-02T18:00:00",
            "numbers": [2, 3, 17, 20, 21, 22, 27],
            "addNumbers": [6, 16, 28],
            "prizes": ["2506250", "51145", "6745", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66833439
          },
          {
            "id": 301,
            "drawDate": "2002-02-09T18:00:00",
            "numbers": [1, 4, 10, 14, 22, 25, 33],
            "addNumbers": [8, 31, 32],
            "prizes": ["2030865", "62680", "5550", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67695513
          },
          {
            "id": 302,
            "drawDate": "2002-02-16T18:00:00",
            "numbers": [4, 10, 14, 20, 25, 30, 33],
            "addNumbers": [8, 27, 32],
            "prizes": ["Gull-Lotto!", "63520", "7480", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67758636
          },
          {
            "id": 303,
            "drawDate": "2002-02-23T18:00:00",
            "numbers": [1, 9, 12, 16, 17, 19, 31],
            "addNumbers": [5, 6, 25],
            "prizes": ["12474715", "66005", "8240", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 98570916
          },
          {
            "id": 304,
            "drawDate": "2002-03-02T18:00:00",
            "numbers": [10, 12, 19, 21, 23, 26, 30],
            "addNumbers": [4, 7, 29],
            "prizes": ["1192225", "56470", "6965", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71533506
          },
          {
            "id": 305,
            "drawDate": "2002-03-09T18:00:00",
            "numbers": [3, 4, 6, 13, 14, 15, 20],
            "addNumbers": [32, 33, 34],
            "prizes": ["10527755", "103210", "9075", "255", "60"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70185045
          },
          {
            "id": 306,
            "drawDate": "2002-03-16T18:00:00",
            "numbers": [3, 4, 6, 7, 11, 15, 19],
            "addNumbers": [2, 13, 33],
            "prizes": ["2135045", "49880", "6545", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71168235
          },
          {
            "id": 307,
            "drawDate": "2002-03-23T18:00:00",
            "numbers": [1, 3, 6, 16, 21, 28, 31],
            "addNumbers": [18, 27, 34],
            "prizes": ["1318065", "53255", "6050", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70296864
          },
          {
            "id": 308,
            "drawDate": "2002-03-30T18:00:00",
            "numbers": [9, 12, 14, 15, 17, 18, 32],
            "addNumbers": [19, 27, 31],
            "prizes": ["9776415", "70840", "9600", "255", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65176131
          },
          {
            "id": 309,
            "drawDate": "2002-04-06T18:00:00",
            "numbers": [5, 8, 15, 16, 18, 21, 23],
            "addNumbers": [6, 22, 30],
            "prizes": ["2447555", "53790", "6240", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65268234
          },
          {
            "id": 310,
            "drawDate": "2002-04-13T18:00:00",
            "numbers": [4, 7, 8, 11, 12, 19, 21],
            "addNumbers": [2, 20, 33],
            "prizes": ["4983690", "57280", "5630", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66449238
          },
          {
            "id": 311,
            "drawDate": "2002-04-20T18:00:00",
            "numbers": [5, 18, 19, 23, 27, 28, 34],
            "addNumbers": [6, 21, 30],
            "prizes": ["5012270", "64255", "8150", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66830274
          },
          {
            "id": 312,
            "drawDate": "2002-04-27T18:00:00",
            "numbers": [2, 4, 11, 13, 14, 18, 21],
            "addNumbers": [1, 6, 17],
            "prizes": ["4000000", "50560", "6975", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 84272544
          },
          {
            "id": 313,
            "drawDate": "2002-05-04T18:00:00",
            "numbers": [4, 8, 14, 18, 25, 28, 34],
            "addNumbers": [6, 7, 15],
            "prizes": ["2069040", "60850", "4990", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68968062
          },
          {
            "id": 314,
            "drawDate": "2002-05-11T18:00:00",
            "numbers": [5, 17, 19, 24, 29, 31, 34],
            "addNumbers": [7, 32, 33],
            "prizes": ["3339915", "89460", "8910", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66798354
          },
          {
            "id": 315,
            "drawDate": "2002-05-18T18:00:00",
            "numbers": [7, 12, 17, 20, 21, 25, 31],
            "addNumbers": [1, 24, 30],
            "prizes": ["2432235", "64855", "6905", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64859697
          },
          {
            "id": 316,
            "drawDate": "2002-05-25T18:00:00",
            "numbers": [7, 8, 15, 19, 29, 32, 34],
            "addNumbers": [10, 14, 26],
            "prizes": ["2439230", "108410", "8380", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65046240
          },
          {
            "id": 317,
            "drawDate": "2002-06-01T18:00:00",
            "numbers": [5, 19, 20, 26, 28, 30, 31],
            "addNumbers": [3, 17, 32],
            "prizes": ["Gull-Lotto!", "81320", "8540", "250", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62888514
          },
          {
            "id": 318,
            "drawDate": "2002-06-08T18:00:00",
            "numbers": [8, 9, 15, 16, 22, 30, 34],
            "addNumbers": [4, 10, 28],
            "prizes": ["5198390", "69270", "7875", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 75735333
          },
          {
            "id": 319,
            "drawDate": "2002-06-15T18:00:00",
            "numbers": [2, 12, 15, 16, 18, 21, 26],
            "addNumbers": [4, 17, 24],
            "prizes": ["3322665", "51380", "6430", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66453375
          },
          {
            "id": 320,
            "drawDate": "2002-06-22T18:00:00",
            "numbers": [2, 11, 12, 15, 21, 25, 31],
            "addNumbers": [6, 7, 16],
            "prizes": ["2222220", "41070", "6945", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 79403838
          },
          {
            "id": 321,
            "drawDate": "2002-06-29T18:00:00",
            "numbers": [2, 9, 10, 17, 24, 32, 33],
            "addNumbers": [3, 5, 19],
            "prizes": ["2048455", "66505", "8125", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68281941
          },
          {
            "id": 322,
            "drawDate": "2002-07-06T18:00:00",
            "numbers": [5, 11, 22, 23, 27, 28, 32],
            "addNumbers": [8, 9, 19],
            "prizes": ["2511445", "50225", "7945", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66971988
          },
          {
            "id": 323,
            "drawDate": "2002-07-13T18:00:00",
            "numbers": [5, 9, 13, 18, 20, 21, 28],
            "addNumbers": [23, 32, 34],
            "prizes": ["4910970", "35075", "5700", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65479659
          },
          {
            "id": 324,
            "drawDate": "2002-07-20T18:00:00",
            "numbers": [5, 10, 13, 16, 20, 21, 23],
            "addNumbers": [6, 19, 32],
            "prizes": ["2483315", "81420", "7930", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66221778
          },
          {
            "id": 325,
            "drawDate": "2002-07-27T18:00:00",
            "numbers": [3, 6, 10, 18, 24, 30, 32],
            "addNumbers": [8, 23, 28],
            "prizes": ["3252535", "68715", "7425", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65050797
          },
          {
            "id": 326,
            "drawDate": "2002-08-03T18:00:00",
            "numbers": [11, 15, 19, 23, 24, 33, 34],
            "addNumbers": [18, 22, 26],
            "prizes": ["3212350", "70860", "8150", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64247007
          },
          {
            "id": 327,
            "drawDate": "2002-08-10T18:00:00",
            "numbers": [1, 9, 10, 19, 20, 24, 29],
            "addNumbers": [28, 32, 34],
            "prizes": ["4819025", "49170", "6870", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64253688
          },
          {
            "id": 328,
            "drawDate": "2002-08-17T18:00:00",
            "numbers": [2, 9, 11, 13, 14, 21, 33],
            "addNumbers": [1, 5, 15],
            "prizes": ["2413660", "67045", "5830", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64364268
          },
          {
            "id": 329,
            "drawDate": "2002-08-24T18:00:00",
            "numbers": [7, 8, 10, 12, 24, 30, 31],
            "addNumbers": [13, 17, 27],
            "prizes": ["1949280", "95550", "8500", "245", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64976052
          },
          {
            "id": 330,
            "drawDate": "2002-08-31T18:00:00",
            "numbers": [1, 4, 5, 14, 20, 23, 26],
            "addNumbers": [6, 16, 21],
            "prizes": ["3333330", "72145", "8005", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 81769341
          },
          {
            "id": 331,
            "drawDate": "2002-09-07T18:00:00",
            "numbers": [4, 6, 7, 9, 10, 29, 31],
            "addNumbers": [11, 16, 30],
            "prizes": ["5139875", "58405", "7490", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68531673
          },
          {
            "id": 332,
            "drawDate": "2002-09-14T18:00:00",
            "numbers": [1, 6, 12, 17, 24, 27, 32],
            "addNumbers": [4, 20, 21],
            "prizes": ["2567410", "44265", "6825", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68464350
          },
          {
            "id": 333,
            "drawDate": "2002-09-21T18:00:00",
            "numbers": [19, 22, 24, 28, 29, 32, 33],
            "addNumbers": [1, 2, 9],
            "prizes": ["3410715", "65590", "6970", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68214396
          },
          {
            "id": 334,
            "drawDate": "2002-09-28T18:00:00",
            "numbers": [3, 13, 16, 20, 23, 29, 33],
            "addNumbers": [8, 10, 14],
            "prizes": ["5110605", "38715", "6270", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68141466
          },
          {
            "id": 335,
            "drawDate": "2002-10-05T18:00:00",
            "numbers": [4, 8, 9, 13, 14, 29, 30],
            "addNumbers": [2, 3, 34],
            "prizes": ["1663190", "69295", "7845", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66527742
          },
          {
            "id": 336,
            "drawDate": "2002-10-12T18:00:00",
            "numbers": [1, 6, 13, 23, 27, 28, 29],
            "addNumbers": [3, 4, 26],
            "prizes": ["2011475", "72875", "8190", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67049184
          },
          {
            "id": 337,
            "drawDate": "2002-10-19T18:00:00",
            "numbers": [3, 8, 9, 11, 20, 22, 29],
            "addNumbers": [12, 31, 34],
            "prizes": ["2550350", "54845", "5950", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68009418
          },
          {
            "id": 338,
            "drawDate": "2002-10-26T18:00:00",
            "numbers": [4, 6, 8, 16, 27, 29, 34],
            "addNumbers": [15, 31, 32],
            "prizes": ["2022340", "51590", "6580", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67411368
          },
          {
            "id": 339,
            "drawDate": "2002-11-02T18:00:00",
            "numbers": [2, 6, 13, 16, 17, 28, 32],
            "addNumbers": [5, 8, 10],
            "prizes": ["1674590", "58415", "6365", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66983709
          },
          {
            "id": 340,
            "drawDate": "2002-11-09T18:00:00",
            "numbers": [11, 17, 18, 19, 21, 22, 23],
            "addNumbers": [12, 14, 34],
            "prizes": ["5037350", "71960", "6635", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67164714
          },
          {
            "id": 341,
            "drawDate": "2002-11-16T18:00:00",
            "numbers": [7, 13, 15, 16, 19, 21, 33],
            "addNumbers": [8, 27, 29],
            "prizes": ["2501805", "69490", "9130", "235", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66714924
          },
          {
            "id": 342,
            "drawDate": "2002-11-23T18:00:00",
            "numbers": [2, 14, 15, 23, 26, 31, 33],
            "addNumbers": [6, 22, 29],
            "prizes": ["2010115", "60545", "6620", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67003854
          },
          {
            "id": 343,
            "drawDate": "2002-11-30T18:00:00",
            "numbers": [1, 2, 5, 10, 16, 22, 30],
            "addNumbers": [11, 31, 32],
            "prizes": ["3313020", "74170", "7860", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66260451
          },
          {
            "id": 344,
            "drawDate": "2002-12-07T18:00:00",
            "numbers": [4, 13, 15, 16, 17, 25, 28],
            "addNumbers": [2, 5, 8],
            "prizes": ["9847605", "71355", "8835", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65650725
          },
          {
            "id": 345,
            "drawDate": "2002-12-14T18:00:00",
            "numbers": [4, 7, 12, 16, 23, 27, 29],
            "addNumbers": [22, 32, 34],
            "prizes": ["3440840", "49150", "5455", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68816829
          },
          {
            "id": 346,
            "drawDate": "2002-12-21T18:00:00",
            "numbers": [1, 6, 16, 20, 25, 27, 32],
            "addNumbers": [15, 23, 31],
            "prizes": ["6666665", "65695", "6860", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 94604208
          },
          {
            "id": 347,
            "drawDate": "2002-12-28T18:00:00",
            "numbers": [7, 12, 15, 16, 27, 28, 33],
            "addNumbers": [3, 6, 23],
            "prizes": ["3554725", "47185", "7145", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71094594
          },
          {
            "id": 348,
            "drawDate": "2003-01-04T18:00:00",
            "numbers": [13, 14, 15, 18, 28, 31, 34],
            "addNumbers": [5, 16, 29],
            "prizes": ["3523100", "68630", "8820", "245", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70462047
          },
          {
            "id": 349,
            "drawDate": "2003-01-11T18:00:00",
            "numbers": [4, 6, 11, 12, 17, 20, 21],
            "addNumbers": [15, 25, 32],
            "prizes": ["2147125", "78935", "6510", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71570859
          },
          {
            "id": 350,
            "drawDate": "2003-01-18T18:00:00",
            "numbers": [1, 4, 8, 20, 21, 23, 34],
            "addNumbers": [3, 30, 32],
            "prizes": ["2136945", "62850", "8530", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71231514
          },
          {
            "id": 351,
            "drawDate": "2003-01-25T18:00:00",
            "numbers": [4, 12, 15, 16, 18, 21, 34],
            "addNumbers": [5, 19, 27],
            "prizes": ["2546070", "53600", "8485", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67895325
          },
          {
            "id": 352,
            "drawDate": "2003-02-01T18:00:00",
            "numbers": [1, 7, 9, 11, 13, 18, 34],
            "addNumbers": [24, 27, 33],
            "prizes": ["3413385", "67365", "9175", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68267796
          },
          {
            "id": 353,
            "drawDate": "2003-02-08T18:00:00",
            "numbers": [7, 19, 20, 21, 23, 27, 32],
            "addNumbers": [11, 22, 24],
            "prizes": ["2570220", "64255", "8920", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68539281
          },
          {
            "id": 354,
            "drawDate": "2003-02-15T18:00:00",
            "numbers": [2, 10, 17, 18, 20, 30, 33],
            "addNumbers": [1, 5, 34],
            "prizes": ["1716910", "51505", "6195", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68676534
          },
          {
            "id": 355,
            "drawDate": "2003-02-22T18:00:00",
            "numbers": [4, 12, 15, 19, 20, 23, 24],
            "addNumbers": [9, 22, 32],
            "prizes": ["1723950", "68050", "7670", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68958072
          },
          {
            "id": 356,
            "drawDate": "2003-03-01T18:00:00",
            "numbers": [4, 8, 14, 21, 22, 26, 34],
            "addNumbers": [3, 7, 24],
            "prizes": ["3415420", "44935", "5420", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68308461
          },
          {
            "id": 357,
            "drawDate": "2003-03-08T18:00:00",
            "numbers": [3, 5, 7, 16, 24, 26, 34],
            "addNumbers": [10, 25, 27],
            "prizes": ["5083135", "61985", "7385", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67775172
          },
          {
            "id": 358,
            "drawDate": "2003-03-15T18:00:00",
            "numbers": [3, 15, 20, 26, 31, 33, 34],
            "addNumbers": [7, 18, 25],
            "prizes": ["5156275", "71610", "8590", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68750394
          },
          {
            "id": 359,
            "drawDate": "2003-03-22T18:00:00",
            "numbers": [3, 13, 18, 22, 27, 29, 33],
            "addNumbers": [6, 16, 31],
            "prizes": ["1456850", "53670", "6355", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67986492
          },
          {
            "id": 360,
            "drawDate": "2003-03-29T18:00:00",
            "numbers": [1, 3, 6, 15, 18, 30, 33],
            "addNumbers": [17, 22, 28],
            "prizes": ["3376770", "69385", "6715", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67535430
          },
          {
            "id": 361,
            "drawDate": "2003-04-05T18:00:00",
            "numbers": [8, 22, 23, 24, 25, 26, 30],
            "addNumbers": [2, 5, 34],
            "prizes": ["1981405", "72845", "8675", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66046935
          },
          {
            "id": 362,
            "drawDate": "2003-04-12T18:00:00",
            "numbers": [7, 17, 19, 22, 24, 29, 32],
            "addNumbers": [16, 21, 26],
            "prizes": ["5101735", "47235", "7555", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68023188
          },
          {
            "id": 363,
            "drawDate": "2003-04-19T18:00:00",
            "numbers": [2, 3, 5, 6, 16, 25, 30],
            "addNumbers": [11, 18, 33],
            "prizes": ["9568805", "50895", "8450", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63792060
          },
          {
            "id": 364,
            "drawDate": "2003-04-26T18:00:00",
            "numbers": [6, 7, 11, 15, 23, 28, 29],
            "addNumbers": [16, 27, 30],
            "prizes": ["4867780", "49165", "6950", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64903752
          },
          {
            "id": 365,
            "drawDate": "2003-05-03T18:00:00",
            "numbers": [1, 4, 20, 21, 22, 27, 34],
            "addNumbers": [3, 25, 30],
            "prizes": ["3289500", "75910", "7815", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65790072
          },
          {
            "id": 366,
            "drawDate": "2003-05-10T18:00:00",
            "numbers": [11, 14, 19, 24, 27, 31, 33],
            "addNumbers": [1, 12, 21],
            "prizes": ["20000000", "68235", "7710", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 78246411
          },
          {
            "id": 367,
            "drawDate": "2003-05-17T18:00:00",
            "numbers": [2, 7, 13, 15, 19, 27, 30],
            "addNumbers": [5, 21, 24],
            "prizes": ["2244595", "46280", "7100", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59855967
          },
          {
            "id": 368,
            "drawDate": "2003-05-24T18:00:00",
            "numbers": [1, 2, 9, 10, 12, 15, 25],
            "addNumbers": [6, 18, 30],
            "prizes": ["1990055", "51820", "7355", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66335313
          },
          {
            "id": 369,
            "drawDate": "2003-05-31T18:00:00",
            "numbers": [9, 18, 21, 27, 28, 30, 32],
            "addNumbers": [12, 13, 33],
            "prizes": ["3237540", "71415", "8040", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64750800
          },
          {
            "id": 370,
            "drawDate": "2003-06-07T18:00:00",
            "numbers": [5, 9, 13, 15, 22, 23, 26],
            "addNumbers": [20, 31, 34],
            "prizes": ["1366640", "47355", "5955", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63776766
          },
          {
            "id": 371,
            "drawDate": "2003-06-14T18:00:00",
            "numbers": [1, 11, 12, 18, 20, 23, 32],
            "addNumbers": [24, 29, 33],
            "prizes": ["2508125", "61925", "6555", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66883362
          },
          {
            "id": 372,
            "drawDate": "2003-06-21T18:00:00",
            "numbers": [1, 10, 12, 17, 25, 29, 32],
            "addNumbers": [4, 9, 30],
            "prizes": ["6666665", "66990", "8060", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 86646717
          },
          {
            "id": 373,
            "drawDate": "2003-06-28T18:00:00",
            "numbers": [5, 6, 11, 18, 19, 20, 22],
            "addNumbers": [4, 8, 31],
            "prizes": ["2028645", "65020", "8310", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67621506
          },
          {
            "id": 374,
            "drawDate": "2003-07-05T18:00:00",
            "numbers": [2, 7, 14, 16, 24, 25, 33],
            "addNumbers": [13, 21, 27],
            "prizes": ["2000185", "54950", "6575", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66672993
          },
          {
            "id": 375,
            "drawDate": "2003-07-12T18:00:00",
            "numbers": [6, 8, 10, 15, 25, 26, 28],
            "addNumbers": [12, 27, 29],
            "prizes": ["2003005", "49575", "6460", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66766911
          },
          {
            "id": 376,
            "drawDate": "2003-07-19T18:00:00",
            "numbers": [1, 4, 6, 17, 18, 20, 33],
            "addNumbers": [3, 10, 34],
            "prizes": ["2460035", "59275", "8130", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65601063
          },
          {
            "id": 377,
            "drawDate": "2003-07-26T18:00:00",
            "numbers": [2, 12, 22, 25, 26, 30, 32],
            "addNumbers": [19, 21, 24],
            "prizes": ["2402050", "69620", "6990", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64054674
          },
          {
            "id": 378,
            "drawDate": "2003-08-02T18:00:00",
            "numbers": [6, 13, 14, 19, 21, 30, 33],
            "addNumbers": [10, 11, 20],
            "prizes": ["9670170", "76745", "8540", "255", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64467816
          },
          {
            "id": 379,
            "drawDate": "2003-08-09T18:00:00",
            "numbers": [14, 18, 20, 28, 32, 33, 34],
            "addNumbers": [13, 16, 31],
            "prizes": ["2353025", "56020", "8295", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62747430
          },
          {
            "id": 380,
            "drawDate": "2003-08-16T18:00:00",
            "numbers": [1, 8, 12, 16, 19, 25, 28],
            "addNumbers": [6, 7, 24],
            "prizes": ["2417015", "53120", "7245", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64453854
          },
          {
            "id": 381,
            "drawDate": "2003-08-23T18:00:00",
            "numbers": [2, 6, 7, 16, 18, 20, 25],
            "addNumbers": [8, 24, 28],
            "prizes": ["1419300", "51210", "6525", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66234015
          },
          {
            "id": 382,
            "drawDate": "2003-08-30T18:00:00",
            "numbers": [6, 8, 12, 19, 20, 22, 28],
            "addNumbers": [7, 10, 34],
            "prizes": ["1954890", "67875", "6665", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65163105
          },
          {
            "id": 383,
            "drawDate": "2003-09-06T18:00:00",
            "numbers": [1, 19, 22, 24, 27, 29, 31],
            "addNumbers": [20, 25, 30],
            "prizes": ["4876560", "71710", "7700", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65020842
          },
          {
            "id": 384,
            "drawDate": "2003-09-13T18:00:00",
            "numbers": [7, 8, 11, 12, 15, 25, 31],
            "addNumbers": [2, 13, 27],
            "prizes": ["2500000", "53350", "7380", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 81806484
          },
          {
            "id": 385,
            "drawDate": "2003-09-20T18:00:00",
            "numbers": [3, 10, 16, 22, 25, 26, 33],
            "addNumbers": [20, 30, 32],
            "prizes": ["5138275", "47575", "7035", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68510334
          },
          {
            "id": 386,
            "drawDate": "2003-09-27T18:00:00",
            "numbers": [4, 10, 12, 16, 18, 19, 24],
            "addNumbers": [15, 27, 32],
            "prizes": ["2519355", "57255", "7155", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67182813
          },
          {
            "id": 387,
            "drawDate": "2003-10-04T18:00:00",
            "numbers": [1, 3, 4, 5, 9, 14, 25],
            "addNumbers": [6, 22, 27],
            "prizes": ["2524615", "59400", "7615", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67323105
          },
          {
            "id": 388,
            "drawDate": "2003-10-11T18:00:00",
            "numbers": [12, 14, 16, 22, 23, 28, 32],
            "addNumbers": [19, 27, 29],
            "prizes": ["3404390", "58025", "6680", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68087805
          },
          {
            "id": 389,
            "drawDate": "2003-10-18T18:00:00",
            "numbers": [5, 13, 14, 16, 17, 19, 22],
            "addNumbers": [11, 12, 18],
            "prizes": ["2488630", "82950", "8775", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66363543
          },
          {
            "id": 390,
            "drawDate": "2003-10-25T18:00:00",
            "numbers": [7, 11, 14, 15, 17, 19, 32],
            "addNumbers": [13, 16, 23],
            "prizes": ["3299645", "79830", "8665", "245", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65992965
          },
          {
            "id": 391,
            "drawDate": "2003-11-01T18:00:00",
            "numbers": [1, 3, 10, 19, 21, 29, 34],
            "addNumbers": [6, 18, 32],
            "prizes": ["3334880", "57495", "7475", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66697644
          },
          {
            "id": 392,
            "drawDate": "2003-11-08T18:00:00",
            "numbers": [1, 4, 5, 15, 23, 24, 28],
            "addNumbers": [14, 20, 33],
            "prizes": ["9919090", "59750", "8075", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66127296
          },
          {
            "id": 393,
            "drawDate": "2003-11-15T18:00:00",
            "numbers": [4, 7, 20, 23, 28, 30, 32],
            "addNumbers": [2, 12, 21],
            "prizes": ["9968290", "69220", "6130", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66455298
          },
          {
            "id": 394,
            "drawDate": "2003-11-22T18:00:00",
            "numbers": [2, 3, 4, 13, 19, 20, 28],
            "addNumbers": [22, 26, 30],
            "prizes": ["1976920", "83765", "7110", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65897352
          },
          {
            "id": 395,
            "drawDate": "2003-11-29T18:00:00",
            "numbers": [6, 11, 17, 21, 22, 30, 32],
            "addNumbers": [13, 24, 29],
            "prizes": ["1981830", "66060", "7575", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66061164
          },
          {
            "id": 396,
            "drawDate": "2003-12-06T18:00:00",
            "numbers": [2, 7, 9, 24, 28, 29, 30],
            "addNumbers": [8, 14, 16],
            "prizes": ["4868550", "64055", "8070", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64914012
          },
          {
            "id": 397,
            "drawDate": "2003-12-13T18:00:00",
            "numbers": [7, 14, 15, 17, 18, 33, 34],
            "addNumbers": [16, 19, 25],
            "prizes": ["2103400", "64915", "9270", "265", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70113399
          },
          {
            "id": 398,
            "drawDate": "2003-12-20T18:00:00",
            "numbers": [3, 4, 6, 11, 12, 25, 32],
            "addNumbers": [15, 22, 30],
            "prizes": ["5000000", "82535", "8045", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 85840551
          },
          {
            "id": 399,
            "drawDate": "2003-12-27T18:00:00",
            "numbers": [1, 2, 7, 16, 24, 30, 31],
            "addNumbers": [8, 11, 34],
            "prizes": ["5239695", "73795", "7770", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69862647
          },
          {
            "id": 400,
            "drawDate": "2004-01-03T18:00:00",
            "numbers": [3, 6, 7, 9, 15, 24, 30],
            "addNumbers": [13, 14, 31],
            "prizes": ["1715165", "72470", "6885", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68606769
          },
          {
            "id": 401,
            "drawDate": "2004-01-10T18:00:00",
            "numbers": [4, 6, 17, 20, 25, 26, 34],
            "addNumbers": [13, 19, 32],
            "prizes": ["2580300", "77020", "9450", "260", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68808066
          },
          {
            "id": 402,
            "drawDate": "2004-01-17T18:00:00",
            "numbers": [8, 15, 18, 19, 25, 31, 32],
            "addNumbers": [6, 7, 11],
            "prizes": ["5140200", "64250", "8080", "245", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68536044
          },
          {
            "id": 403,
            "drawDate": "2004-01-24T18:00:00",
            "numbers": [16, 19, 23, 29, 30, 32, 34],
            "addNumbers": [18, 21, 22],
            "prizes": ["3404335", "66315", "9180", "245", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68086773
          },
          {
            "id": 404,
            "drawDate": "2004-01-31T18:00:00",
            "numbers": [6, 10, 11, 14, 19, 20, 31],
            "addNumbers": [7, 15, 17],
            "prizes": ["5122305", "70165", "8875", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68297466
          },
          {
            "id": 405,
            "drawDate": "2004-02-07T18:00:00",
            "numbers": [2, 6, 13, 20, 24, 29, 31],
            "addNumbers": [1, 14, 22],
            "prizes": ["1686280", "67450", "7145", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67451280
          },
          {
            "id": 406,
            "drawDate": "2004-02-14T18:00:00",
            "numbers": [4, 11, 12, 14, 25, 31, 33],
            "addNumbers": [2, 3, 24],
            "prizes": ["2047520", "76400", "9270", "255", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68250699
          },
          {
            "id": 407,
            "drawDate": "2004-02-21T18:00:00",
            "numbers": [1, 23, 24, 25, 26, 27, 29],
            "addNumbers": [7, 19, 28],
            "prizes": ["5105515", "9215", "7665", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68073543
          },
          {
            "id": 408,
            "drawDate": "2004-02-28T18:00:00",
            "numbers": [11, 13, 14, 18, 21, 24, 25],
            "addNumbers": [6, 19, 20],
            "prizes": ["3377430", "65790", "8195", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67548612
          },
          {
            "id": 409,
            "drawDate": "2004-03-06T18:00:00",
            "numbers": [9, 11, 12, 22, 23, 24, 28],
            "addNumbers": [6, 15, 25],
            "prizes": ["1436550", "79805", "7455", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67039095
          },
          {
            "id": 410,
            "drawDate": "2004-03-13T18:00:00",
            "numbers": [9, 14, 16, 19, 21, 29, 31],
            "addNumbers": [15, 22, 26],
            "prizes": ["2003150", "47690", "6280", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66771831
          },
          {
            "id": 411,
            "drawDate": "2004-03-20T18:00:00",
            "numbers": [2, 3, 5, 9, 22, 26, 32],
            "addNumbers": [14, 20, 28],
            "prizes": ["1669890", "45540", "6815", "190", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66795621
          },
          {
            "id": 412,
            "drawDate": "2004-03-27T18:00:00",
            "numbers": [7, 9, 12, 16, 20, 31, 33],
            "addNumbers": [4, 14, 15],
            "prizes": ["1963865", "65460", "7390", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65462268
          },
          {
            "id": 413,
            "drawDate": "2004-04-03T18:00:00",
            "numbers": [7, 10, 12, 15, 18, 24, 30],
            "addNumbers": [4, 25, 29],
            "prizes": ["2857140", "65785", "6650", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 77189166
          },
          {
            "id": 414,
            "drawDate": "2004-04-10T18:00:00",
            "numbers": [7, 16, 21, 22, 23, 26, 29],
            "addNumbers": [8, 11, 20],
            "prizes": ["4874760", "56680", "7625", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64996836
          },
          {
            "id": 415,
            "drawDate": "2004-04-17T18:00:00",
            "numbers": [3, 7, 12, 20, 26, 28, 34],
            "addNumbers": [18, 30, 32],
            "prizes": ["4923200", "64775", "8160", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65642694
          },
          {
            "id": 416,
            "drawDate": "2004-04-24T18:00:00",
            "numbers": [2, 3, 9, 22, 24, 28, 34],
            "addNumbers": [7, 8, 10],
            "prizes": ["4874225", "70640", "7555", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64989711
          },
          {
            "id": 417,
            "drawDate": "2004-05-01T18:00:00",
            "numbers": [5, 9, 10, 15, 20, 21, 24],
            "addNumbers": [6, 18, 23],
            "prizes": ["4437030", "48755", "7210", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59160447
          },
          {
            "id": 418,
            "drawDate": "2004-05-08T18:00:00",
            "numbers": [6, 10, 11, 20, 25, 28, 29],
            "addNumbers": [5, 14, 32],
            "prizes": ["9052850", "55200", "7275", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60352350
          },
          {
            "id": 419,
            "drawDate": "2004-05-15T18:00:00",
            "numbers": [4, 5, 8, 15, 21, 29, 33],
            "addNumbers": [11, 13, 19],
            "prizes": ["1874415", "60075", "6635", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62480604
          },
          {
            "id": 420,
            "drawDate": "2004-05-22T18:00:00",
            "numbers": [3, 11, 12, 13, 18, 32, 34],
            "addNumbers": [8, 19, 28],
            "prizes": ["3038850", "59975", "8900", "250", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60777051
          },
          {
            "id": 421,
            "drawDate": "2004-05-29T18:00:00",
            "numbers": [1, 10, 14, 15, 17, 25, 28],
            "addNumbers": [4, 13, 24],
            "prizes": ["3023880", "50960", "7740", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60477669
          },
          {
            "id": 422,
            "drawDate": "2004-06-05T18:00:00",
            "numbers": [3, 6, 15, 21, 23, 27, 31],
            "addNumbers": [17, 19, 20],
            "prizes": ["1496305", "42750", "5380", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59852259
          },
          {
            "id": 423,
            "drawDate": "2004-06-12T18:00:00",
            "numbers": [4, 14, 16, 18, 22, 31, 33],
            "addNumbers": [10, 20, 21],
            "prizes": ["1827610", "65270", "8245", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60920424
          },
          {
            "id": 424,
            "drawDate": "2004-06-19T18:00:00",
            "numbers": [8, 9, 12, 16, 21, 22, 26],
            "addNumbers": [17, 27, 30],
            "prizes": ["2562500", "66615", "5885", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 81715095
          },
          {
            "id": 425,
            "drawDate": "2004-06-26T18:00:00",
            "numbers": [3, 5, 11, 15, 23, 26, 29],
            "addNumbers": [13, 21, 33],
            "prizes": ["3289475", "27875", "4725", "170", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65789586
          },
          {
            "id": 426,
            "drawDate": "2004-07-03T18:00:00",
            "numbers": [5, 6, 9, 13, 21, 27, 34],
            "addNumbers": [2, 10, 12],
            "prizes": ["1945050", "50650", "6630", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64835010
          },
          {
            "id": 427,
            "drawDate": "2004-07-10T18:00:00",
            "numbers": [2, 4, 5, 13, 16, 29, 31],
            "addNumbers": [1, 3, 19],
            "prizes": ["4857685", "70400", "8065", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64769181
          },
          {
            "id": 428,
            "drawDate": "2004-07-17T18:00:00",
            "numbers": [1, 11, 15, 20, 26, 31, 32],
            "addNumbers": [13, 19, 22],
            "prizes": ["4807300", "68675", "8865", "250", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64097343
          },
          {
            "id": 429,
            "drawDate": "2004-07-24T18:00:00",
            "numbers": [1, 3, 8, 10, 11, 12, 26],
            "addNumbers": [17, 23, 30],
            "prizes": ["4768610", "59605", "6495", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63581484
          },
          {
            "id": 430,
            "drawDate": "2004-07-31T18:00:00",
            "numbers": [1, 4, 11, 13, 16, 21, 25],
            "addNumbers": [6, 8, 27],
            "prizes": ["3092910", "69240", "7430", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61858245
          },
          {
            "id": 431,
            "drawDate": "2004-08-07T18:00:00",
            "numbers": [9, 13, 17, 20, 22, 33, 34],
            "addNumbers": [7, 16, 29],
            "prizes": ["3023160", "61280", "6665", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60463203
          },
          {
            "id": 432,
            "drawDate": "2004-08-14T18:00:00",
            "numbers": [6, 7, 9, 13, 16, 23, 31],
            "addNumbers": [3, 12, 25],
            "prizes": ["4580640", "49250", "7025", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61075215
          },
          {
            "id": 433,
            "drawDate": "2004-08-21T18:00:00",
            "numbers": [1, 3, 11, 20, 23, 26, 34],
            "addNumbers": [5, 15, 29],
            "prizes": ["1580560", "46945", "7760", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63222546
          },
          {
            "id": 434,
            "drawDate": "2004-08-28T18:00:00",
            "numbers": [5, 16, 18, 19, 26, 28, 32],
            "addNumbers": [2, 4, 24],
            "prizes": ["2339285", "56365", "6770", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62381046
          },
          {
            "id": 435,
            "drawDate": "2004-09-04T18:00:00",
            "numbers": [5, 7, 16, 20, 21, 22, 23],
            "addNumbers": [8, 9, 11],
            "prizes": ["3096520", "41470", "7575", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61930476
          },
          {
            "id": 436,
            "drawDate": "2004-09-11T18:00:00",
            "numbers": [3, 8, 14, 15, 17, 18, 29],
            "addNumbers": [5, 7, 9],
            "prizes": ["4740995", "60010", "7430", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63213312
          },
          {
            "id": 437,
            "drawDate": "2004-09-18T18:00:00",
            "numbers": [1, 15, 17, 20, 22, 28, 31],
            "addNumbers": [7, 18, 25],
            "prizes": ["1359950", "61020", "7850", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63464529
          },
          {
            "id": 438,
            "drawDate": "2004-09-25T18:00:00",
            "numbers": [1, 6, 8, 11, 16, 23, 32],
            "addNumbers": [20, 29, 30],
            "prizes": ["3192970", "48375", "7245", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63859434
          },
          {
            "id": 439,
            "drawDate": "2004-10-02T18:00:00",
            "numbers": [2, 3, 7, 15, 17, 24, 25],
            "addNumbers": [11, 28, 33],
            "prizes": ["2000000", "56550", "7880", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73139640
          },
          {
            "id": 440,
            "drawDate": "2004-10-09T18:00:00",
            "numbers": [7, 10, 12, 15, 20, 25, 27],
            "addNumbers": [4, 23, 26],
            "prizes": ["3219490", "47345", "5775", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64389855
          },
          {
            "id": 441,
            "drawDate": "2004-10-16T18:00:00",
            "numbers": [1, 3, 8, 19, 22, 31, 32],
            "addNumbers": [23, 28, 29],
            "prizes": ["1222955", "67940", "9090", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65224347
          },
          {
            "id": 442,
            "drawDate": "2004-10-23T18:00:00",
            "numbers": [4, 15, 21, 27, 30, 33, 34],
            "addNumbers": [17, 22, 23],
            "prizes": ["2462590", "76955", "7780", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65669169
          },
          {
            "id": 443,
            "drawDate": "2004-10-30T18:00:00",
            "numbers": [8, 12, 14, 17, 21, 22, 28],
            "addNumbers": [7, 23, 24],
            "prizes": ["3251410", "39015", "5805", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65028201
          },
          {
            "id": 444,
            "drawDate": "2004-11-06T18:00:00",
            "numbers": [3, 14, 16, 24, 27, 29, 34],
            "addNumbers": [1, 22, 31],
            "prizes": ["2342085", "55760", "6565", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62455644
          },
          {
            "id": 445,
            "drawDate": "2004-11-13T18:00:00",
            "numbers": [5, 6, 15, 20, 22, 24, 25],
            "addNumbers": [13, 17, 28],
            "prizes": ["1565030", "60190", "7745", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62601279
          },
          {
            "id": 446,
            "drawDate": "2004-11-20T18:00:00",
            "numbers": [6, 13, 16, 19, 21, 22, 25],
            "addNumbers": [4, 31, 32],
            "prizes": ["2357430", "53575", "7815", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62864808
          },
          {
            "id": 447,
            "drawDate": "2004-11-27T18:00:00",
            "numbers": [1, 10, 16, 28, 29, 32, 34],
            "addNumbers": [6, 14, 27],
            "prizes": ["9260660", "67105", "7110", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61737756
          },
          {
            "id": 448,
            "drawDate": "2004-12-04T18:00:00",
            "numbers": [1, 2, 8, 13, 23, 24, 25],
            "addNumbers": [16, 21, 27],
            "prizes": ["Gull-Lotto!", "62220", "8590", "250", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62223975
          },
          {
            "id": 449,
            "drawDate": "2004-12-11T18:00:00",
            "numbers": [5, 10, 14, 15, 17, 30, 33],
            "addNumbers": [11, 32, 34],
            "prizes": ["7019910", "59825", "8385", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 78174324
          },
          {
            "id": 450,
            "drawDate": "2004-12-18T18:00:00",
            "numbers": [6, 8, 11, 21, 25, 27, 30],
            "addNumbers": [1, 3, 17],
            "prizes": ["10000000", "54235", "7745", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74487408
          },
          {
            "id": 451,
            "drawDate": "2004-12-26T18:00:00",
            "numbers": [1, 2, 11, 17, 30, 32, 33],
            "addNumbers": [5, 6, 23],
            "prizes": ["3174085", "83525", "9875", "275", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63481782
          },
          {
            "id": 452,
            "drawDate": "2005-01-01T18:00:00",
            "numbers": [3, 8, 10, 14, 21, 22, 29],
            "addNumbers": [5, 20, 27],
            "prizes": ["1294325", "41560", "5090", "170", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60401841
          },
          {
            "id": 453,
            "drawDate": "2005-01-08T18:00:00",
            "numbers": [5, 6, 12, 13, 30, 32, 33],
            "addNumbers": [1, 7, 14],
            "prizes": ["1917705", "74910", "10025", "265", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63923625
          },
          {
            "id": 454,
            "drawDate": "2005-01-15T18:00:00",
            "numbers": [3, 7, 17, 24, 25, 28, 29],
            "addNumbers": [5, 16, 23],
            "prizes": ["956300", "55595", "6915", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63753513
          },
          {
            "id": 455,
            "drawDate": "2005-01-22T18:00:00",
            "numbers": [2, 8, 9, 15, 20, 27, 34],
            "addNumbers": [6, 17, 31],
            "prizes": ["1602045", "37840", "5625", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64081899
          },
          {
            "id": 456,
            "drawDate": "2005-01-29T18:00:00",
            "numbers": [3, 5, 16, 23, 30, 32, 33],
            "addNumbers": [2, 15, 20],
            "prizes": ["Gull-Lotto!", "69735", "8715", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64158906
          },
          {
            "id": 457,
            "drawDate": "2005-02-05T18:00:00",
            "numbers": [7, 8, 9, 10, 13, 20, 26],
            "addNumbers": [14, 28, 32],
            "prizes": ["5343045", "71635", "8790", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 78322305
          },
          {
            "id": 458,
            "drawDate": "2005-02-12T18:00:00",
            "numbers": [4, 9, 11, 15, 25, 28, 32],
            "addNumbers": [10, 19, 23],
            "prizes": ["10153905", "51280", "6915", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67692720
          },
          {
            "id": 459,
            "drawDate": "2005-02-19T18:00:00",
            "numbers": [1, 6, 8, 9, 14, 22, 29],
            "addNumbers": [7, 12, 19],
            "prizes": ["2525095", "37130", "6600", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67335966
          },
          {
            "id": 460,
            "drawDate": "2005-02-26T18:00:00",
            "numbers": [1, 9, 12, 18, 21, 30, 32],
            "addNumbers": [3, 4, 6],
            "prizes": ["1089405", "56345", "7780", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65364567
          },
          {
            "id": 461,
            "drawDate": "2005-03-05T18:00:00",
            "numbers": [1, 15, 17, 22, 29, 32, 34],
            "addNumbers": [10, 13, 21],
            "prizes": ["3205470", "61640", "5265", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64109418
          },
          {
            "id": 462,
            "drawDate": "2005-03-12T18:00:00",
            "numbers": [4, 7, 10, 11, 13, 24, 27],
            "addNumbers": [1, 29, 30],
            "prizes": ["3171815", "45310", "6725", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63436389
          },
          {
            "id": 463,
            "drawDate": "2005-03-19T18:00:00",
            "numbers": [3, 4, 9, 18, 22, 25, 33],
            "addNumbers": [6, 13, 17],
            "prizes": ["5000000", "46035", "6970", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72429792
          },
          {
            "id": 464,
            "drawDate": "2005-03-26T18:00:00",
            "numbers": [3, 5, 14, 16, 17, 26, 29],
            "addNumbers": [13, 18, 23],
            "prizes": ["1901075", "45260", "5280", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63369192
          },
          {
            "id": 465,
            "drawDate": "2005-04-02T18:00:00",
            "numbers": [1, 2, 9, 11, 18, 25, 29],
            "addNumbers": [13, 14, 33],
            "prizes": ["2364605", "64780", "7445", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63056181
          },
          {
            "id": 466,
            "drawDate": "2005-04-09T18:00:00",
            "numbers": [1, 5, 9, 10, 17, 21, 26],
            "addNumbers": [18, 20, 23],
            "prizes": ["4708170", "50085", "5185", "170", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62775624
          },
          {
            "id": 467,
            "drawDate": "2005-04-16T18:00:00",
            "numbers": [1, 2, 3, 10, 17, 31, 33],
            "addNumbers": [24, 25, 32],
            "prizes": ["3097330", "87660", "10300", "260", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61946631
          },
          {
            "id": 468,
            "drawDate": "2005-04-23T18:00:00",
            "numbers": [4, 11, 12, 17, 19, 27, 29],
            "addNumbers": [15, 16, 28],
            "prizes": ["3025110", "49860", "5770", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60502278
          },
          {
            "id": 469,
            "drawDate": "2005-04-30T18:00:00",
            "numbers": [11, 12, 15, 19, 23, 31, 32],
            "addNumbers": [8, 13, 34],
            "prizes": ["4535725", "69780", "8605", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60476346
          },
          {
            "id": 470,
            "drawDate": "2005-05-07T18:00:00",
            "numbers": [1, 2, 6, 19, 26, 27, 32],
            "addNumbers": [3, 12, 31],
            "prizes": ["4421590", "60565", "9405", "255", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58954581
          },
          {
            "id": 471,
            "drawDate": "2005-05-14T18:00:00",
            "numbers": [1, 13, 14, 25, 26, 27, 32],
            "addNumbers": [12, 16, 28],
            "prizes": ["910470", "72255", "8605", "260", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60698100
          },
          {
            "id": 472,
            "drawDate": "2005-05-21T18:00:00",
            "numbers": [2, 8, 11, 12, 15, 20, 30],
            "addNumbers": [6, 24, 26],
            "prizes": ["1819865", "63185", "6900", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60662298
          },
          {
            "id": 473,
            "drawDate": "2005-05-28T18:00:00",
            "numbers": [1, 5, 8, 10, 14, 24, 31],
            "addNumbers": [4, 18, 20],
            "prizes": ["999925", "64280", "7435", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59995662
          },
          {
            "id": 474,
            "drawDate": "2005-06-04T18:00:00",
            "numbers": [1, 9, 11, 14, 19, 28, 31],
            "addNumbers": [16, 26, 30],
            "prizes": ["1783595", "57905", "7805", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59453280
          },
          {
            "id": 475,
            "drawDate": "2005-06-11T18:00:00",
            "numbers": [5, 7, 9, 10, 11, 25, 32],
            "addNumbers": [4, 8, 28],
            "prizes": ["2940070", "72295", "9145", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58801497
          },
          {
            "id": 476,
            "drawDate": "2005-06-18T18:00:00",
            "numbers": [8, 9, 11, 13, 14, 27, 32],
            "addNumbers": [3, 12, 18],
            "prizes": ["4457925", "70760", "8755", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59439000
          },
          {
            "id": 477,
            "drawDate": "2005-06-25T18:00:00",
            "numbers": [2, 3, 15, 17, 20, 24, 25],
            "addNumbers": [6, 32, 33],
            "prizes": ["20000000", "84260", "5885", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65164056
          },
          {
            "id": 478,
            "drawDate": "2005-07-02T18:00:00",
            "numbers": [3, 5, 8, 10, 20, 22, 30],
            "addNumbers": [9, 21, 26],
            "prizes": ["1013650", "36200", "5440", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60819081
          },
          {
            "id": 479,
            "drawDate": "2005-07-09T18:00:00",
            "numbers": [9, 17, 18, 20, 22, 29, 32],
            "addNumbers": [11, 26, 31],
            "prizes": ["2209680", "72445", "5635", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 58924920
          },
          {
            "id": 480,
            "drawDate": "2005-07-16T18:00:00",
            "numbers": [14, 16, 20, 25, 26, 27, 33],
            "addNumbers": [15, 18, 30],
            "prizes": ["2287050", "77525", "9090", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60988128
          },
          {
            "id": 481,
            "drawDate": "2005-07-23T18:00:00",
            "numbers": [3, 10, 16, 20, 26, 28, 31],
            "addNumbers": [14, 24, 33],
            "prizes": ["1846355", "44380", "6660", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61545177
          },
          {
            "id": 482,
            "drawDate": "2005-07-30T18:00:00",
            "numbers": [1, 7, 9, 11, 14, 19, 31],
            "addNumbers": [2, 21, 32],
            "prizes": ["3033420", "65940", "4720", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60668493
          },
          {
            "id": 483,
            "drawDate": "2005-08-06T18:00:00",
            "numbers": [13, 19, 22, 29, 30, 31, 33],
            "addNumbers": [8, 10, 21],
            "prizes": ["2280625", "60015", "9140", "255", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60816741
          },
          {
            "id": 484,
            "drawDate": "2005-08-13T18:00:00",
            "numbers": [6, 10, 15, 18, 23, 30, 34],
            "addNumbers": [16, 19, 21],
            "prizes": ["1838120", "69625", "7255", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61270701
          },
          {
            "id": 485,
            "drawDate": "2005-08-20T18:00:00",
            "numbers": [8, 9, 16, 21, 23, 33, 34],
            "addNumbers": [6, 22, 29],
            "prizes": ["3093675", "42965", "5995", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61873539
          },
          {
            "id": 486,
            "drawDate": "2005-08-27T18:00:00",
            "numbers": [5, 8, 16, 23, 25, 28, 31],
            "addNumbers": [2, 13, 34],
            "prizes": ["916820", "44075", "5590", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61121547
          },
          {
            "id": 487,
            "drawDate": "2005-09-03T18:00:00",
            "numbers": [4, 5, 13, 20, 23, 27, 28],
            "addNumbers": [3, 7, 19],
            "prizes": ["9040210", "76610", "6140", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60268095
          },
          {
            "id": 488,
            "drawDate": "2005-09-10T18:00:00",
            "numbers": [7, 10, 11, 15, 20, 26, 28],
            "addNumbers": [3, 5, 17],
            "prizes": ["4488870", "58295", "6420", "195", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 59851605
          },
          {
            "id": 489,
            "drawDate": "2005-09-17T18:00:00",
            "numbers": [1, 3, 10, 12, 13, 16, 34],
            "addNumbers": [2, 8, 15],
            "prizes": ["3025090", "73185", "9775", "250", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60501897
          },
          {
            "id": 490,
            "drawDate": "2005-09-24T18:00:00",
            "numbers": [5, 9, 12, 16, 19, 30, 33],
            "addNumbers": [3, 29, 32],
            "prizes": ["2288060", "71500", "7160", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61015038
          },
          {
            "id": 491,
            "drawDate": "2005-10-01T18:00:00",
            "numbers": [8, 9, 13, 14, 15, 19, 20],
            "addNumbers": [12, 24, 34],
            "prizes": ["2283645", "72495", "7595", "240", "60"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60897264
          },
          {
            "id": 492,
            "drawDate": "2005-10-08T18:00:00",
            "numbers": [7, 8, 12, 13, 14, 24, 26],
            "addNumbers": [17, 30, 33],
            "prizes": ["3016035", "74160", "8580", "245", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60320766
          },
          {
            "id": 493,
            "drawDate": "2005-10-15T18:00:00",
            "numbers": [3, 4, 9, 10, 18, 26, 27],
            "addNumbers": [5, 6, 14],
            "prizes": ["1849705", "48675", "6730", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61656942
          },
          {
            "id": 494,
            "drawDate": "2005-10-22T18:00:00",
            "numbers": [9, 11, 18, 26, 28, 30, 31],
            "addNumbers": [8, 19, 33],
            "prizes": ["3118760", "64970", "7955", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62375253
          },
          {
            "id": 495,
            "drawDate": "2005-10-29T18:00:00",
            "numbers": [1, 6, 13, 14, 19, 20, 26],
            "addNumbers": [11, 21, 25],
            "prizes": ["9362375", "59255", "8950", "250", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62415855
          },
          {
            "id": 496,
            "drawDate": "2005-11-05T18:00:00",
            "numbers": [3, 4, 8, 14, 19, 20, 27],
            "addNumbers": [5, 23, 33],
            "prizes": ["2315615", "47255", "6960", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61749759
          },
          {
            "id": 497,
            "drawDate": "2005-11-12T18:00:00",
            "numbers": [1, 2, 11, 13, 14, 21, 31],
            "addNumbers": [5, 15, 26],
            "prizes": ["2415760", "70020", "7510", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64420383
          },
          {
            "id": 498,
            "drawDate": "2005-11-19T18:00:00",
            "numbers": [1, 5, 6, 15, 17, 26, 29],
            "addNumbers": [9, 25, 31],
            "prizes": ["3870075", "44650", "6585", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 77401548
          },
          {
            "id": 499,
            "drawDate": "2005-11-26T18:00:00",
            "numbers": [2, 6, 9, 12, 15, 16, 19],
            "addNumbers": [18, 23, 33],
            "prizes": ["3192565", "59120", "6340", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63851346
          },
          {
            "id": 500,
            "drawDate": "2005-12-03T18:00:00",
            "numbers": [12, 22, 25, 27, 30, 31, 34],
            "addNumbers": [18, 21, 26],
            "prizes": ["2377130", "70955", "8850", "255", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63390198
          },
          {
            "id": 501,
            "drawDate": "2005-12-10T18:00:00",
            "numbers": [3, 8, 9, 10, 15, 20, 24],
            "addNumbers": [18, 19, 30],
            "prizes": ["1060130", "56120", "7045", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63607914
          },
          {
            "id": 502,
            "drawDate": "2005-12-17T18:00:00",
            "numbers": [1, 7, 12, 19, 24, 27, 30],
            "addNumbers": [6, 17, 18],
            "prizes": ["2477845", "47650", "6510", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66075930
          },
          {
            "id": 503,
            "drawDate": "2005-12-24T16:00:00",
            "numbers": [5, 7, 8, 15, 17, 18, 24],
            "addNumbers": [1, 3, 12],
            "prizes": ["Gull-Lotto!", "53930", "7915", "225", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 79821507
          },
          {
            "id": 504,
            "drawDate": "2005-12-31T16:00:00",
            "numbers": [6, 18, 25, 27, 28, 30, 32],
            "addNumbers": [7, 12, 34],
            "prizes": ["4072770", "65595", "8120", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 83089443
          },
          {
            "id": 505,
            "drawDate": "2006-01-07T18:00:00",
            "numbers": [1, 4, 7, 11, 20, 22, 28],
            "addNumbers": [15, 19, 31],
            "prizes": ["1993790", "47020", "6900", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66459726
          },
          {
            "id": 506,
            "drawDate": "2006-01-14T18:00:00",
            "numbers": [16, 17, 18, 19, 21, 27, 34],
            "addNumbers": [2, 25, 26],
            "prizes": ["10027520", "66850", "8165", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66850149
          },
          {
            "id": 507,
            "drawDate": "2006-01-21T18:00:00",
            "numbers": [8, 10, 13, 17, 18, 22, 25],
            "addNumbers": [15, 23, 27],
            "prizes": ["4966665", "54575", "7420", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66222228
          },
          {
            "id": 508,
            "drawDate": "2006-01-28T18:00:00",
            "numbers": [5, 10, 12, 13, 17, 18, 26],
            "addNumbers": [6, 11, 24],
            "prizes": ["9688665", "74525", "7725", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64591104
          },
          {
            "id": 509,
            "drawDate": "2006-02-04T18:00:00",
            "numbers": [1, 3, 10, 13, 18, 23, 29],
            "addNumbers": [7, 25, 31],
            "prizes": ["3176975", "52945", "7550", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63539583
          },
          {
            "id": 510,
            "drawDate": "2006-02-11T18:00:00",
            "numbers": [1, 3, 9, 15, 17, 18, 28],
            "addNumbers": [10, 12, 34],
            "prizes": ["3176150", "65260", "6870", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63523020
          },
          {
            "id": 511,
            "drawDate": "2006-02-18T18:00:00",
            "numbers": [4, 7, 8, 21, 28, 30, 33],
            "addNumbers": [5, 19, 31],
            "prizes": ["4728735", "59105", "7045", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63049818
          },
          {
            "id": 512,
            "drawDate": "2006-02-25T18:00:00",
            "numbers": [3, 6, 7, 20, 31, 33, 34],
            "addNumbers": [5, 11, 28],
            "prizes": ["3166110", "66885", "8810", "255", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63322212
          },
          {
            "id": 513,
            "drawDate": "2006-03-04T18:00:00",
            "numbers": [5, 9, 11, 14, 21, 25, 34],
            "addNumbers": [4, 29, 33],
            "prizes": ["3120500", "55065", "7145", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62410098
          },
          {
            "id": 514,
            "drawDate": "2006-03-11T18:00:00",
            "numbers": [9, 13, 22, 23, 30, 31, 34],
            "addNumbers": [2, 5, 17],
            "prizes": ["1550440", "73830", "8725", "245", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62017764
          },
          {
            "id": 515,
            "drawDate": "2006-03-18T18:00:00",
            "numbers": [1, 3, 6, 15, 18, 21, 29],
            "addNumbers": [4, 13, 25],
            "prizes": ["4726095", "45880", "5950", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63014655
          },
          {
            "id": 516,
            "drawDate": "2006-03-25T18:00:00",
            "numbers": [12, 13, 15, 18, 27, 28, 31],
            "addNumbers": [24, 25, 33],
            "prizes": ["1557815", "56990", "7760", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62312793
          },
          {
            "id": 517,
            "drawDate": "2006-04-01T18:00:00",
            "numbers": [1, 8, 26, 27, 30, 31, 32],
            "addNumbers": [10, 14, 29],
            "prizes": ["Gull-Lotto!", "84530", "9770", "275", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64245174
          },
          {
            "id": 518,
            "drawDate": "2006-04-08T18:00:00",
            "numbers": [3, 10, 15, 17, 18, 23, 28],
            "addNumbers": [1, 25, 26],
            "extraDrawText": "Spillerkortnummer 322 654 504",
            "extraDrawPrize": 800000,
            "prizes": ["3627455", "40125", "4900", "150", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 86830727
          },
          {
            "id": 519,
            "drawDate": "2006-04-15T18:00:00",
            "numbers": [8, 11, 15, 19, 26, 29, 32],
            "addNumbers": [4, 9, 31],
            "extraDrawText": "Spillerkortnummer 309 429 813",
            "extraDrawPrize": 1294000,
            "prizes": ["2344935", "40510", "4570", "155", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73579234
          },
          {
            "id": 520,
            "drawDate": "2006-04-22T18:00:00",
            "numbers": [3, 9, 18, 20, 29, 30, 31],
            "addNumbers": [5, 19, 28],
            "extraDrawText": "Spillerkortnummer 324 996 991",
            "extraDrawPrize": 893000,
            "prizes": ["5525580", "50655", "6580", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74303338
          },
          {
            "id": 521,
            "drawDate": "2006-04-29T18:00:00",
            "numbers": [8, 22, 23, 27, 30, 31, 32],
            "addNumbers": [1, 5, 7],
            "extraDrawText": "Spillerkortnummer 313 137 832",
            "extraDrawPrize": 1635000,
            "prizes": ["8387485", "86120", "7920", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 75188297
          },
          {
            "id": 522,
            "drawDate": "2006-05-06T18:00:00",
            "numbers": [5, 6, 9, 12, 20, 23, 30],
            "addNumbers": [10, 13, 14],
            "extraDrawText": "Spillerkortnummer 321 716 685",
            "extraDrawPrize": 1193000,
            "prizes": ["7848070", "73255", "5590", "180", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70372061
          },
          {
            "id": 523,
            "drawDate": "2006-05-13T18:00:00",
            "numbers": [4, 6, 7, 13, 14, 19, 23],
            "addNumbers": [10, 28, 32],
            "extraDrawText": "Spillerkortnummer 329 560 663",
            "extraDrawPrize": 1521000,
            "prizes": ["5419230", "46365", "7030", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72879003
          },
          {
            "id": 524,
            "drawDate": "2006-05-20T18:00:00",
            "numbers": [12, 14, 16, 19, 27, 33, 34],
            "addNumbers": [9, 10, 25],
            "extraDrawText": "Spillerkortnummer 324 920 528",
            "extraDrawPrize": 1716000,
            "prizes": ["16599290", "66575", "7640", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74403977
          },
          {
            "id": 525,
            "drawDate": "2006-05-27T18:00:00",
            "numbers": [1, 8, 9, 10, 12, 17, 22],
            "addNumbers": [15, 16, 18],
            "extraDrawText": "Spillerkortnummer 340 773 724",
            "extraDrawPrize": 2994000,
            "prizes": ["16040085", "51465", "6355", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71907523
          },
          {
            "id": 526,
            "drawDate": "2006-06-03T18:00:00",
            "numbers": [2, 8, 10, 16, 18, 20, 33],
            "addNumbers": [13, 25, 34],
            "extraDrawText": "Spillerkortnummer 304 368 996",
            "extraDrawPrize": 388000,
            "prizes": ["5226620", "51600", "5990", "175", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70299430
          },
          {
            "id": 527,
            "drawDate": "2006-06-10T18:00:00",
            "numbers": [1, 17, 19, 24, 28, 32, 34],
            "addNumbers": [5, 10, 25],
            "extraDrawText": "Spillerkortnummer 0",
            "extraDrawPrize": 1079000,
            "prizes": ["5048965", "57175", "8615", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67920092
          },
          {
            "id": 528,
            "drawDate": "2006-06-17T18:00:00",
            "numbers": [3, 7, 9, 14, 17, 23, 26],
            "addNumbers": [16, 25, 33],
            "extraDrawText": "Spillerkortnummer 323 540 297",
            "extraDrawPrize": 1399000,
            "prizes": ["3791255", "48660", "5260", "165", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68001056
          },
          {
            "id": 529,
            "drawDate": "2006-06-24T18:00:00",
            "numbers": [10, 12, 17, 21, 25, 28, 30],
            "addNumbers": [11, 20, 22],
            "extraDrawText": "Spillerkortnummer 331 409 091",
            "extraDrawPrize": 1778000,
            "prizes": ["5209085", "50775", "6295", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70064532
          },
          {
            "id": 530,
            "drawDate": "2006-07-01T18:00:00",
            "numbers": [5, 8, 9, 20, 24, 26, 34],
            "addNumbers": [3, 10, 30],
            "extraDrawText": "Spillerkortnummer 320 245 083",
            "extraDrawPrize": 1106000,
            "prizes": ["25000000", "85230", "7760", "215", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 75898564
          },
          {
            "id": 531,
            "drawDate": "2006-07-08T18:00:00",
            "numbers": [1, 6, 12, 18, 23, 28, 30],
            "addNumbers": [5, 19, 33],
            "extraDrawText": "Spillerkortnummer 308 772 164",
            "extraDrawPrize": 2048000,
            "prizes": ["7932540", "46810", "5815", "175", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71126268
          },
          {
            "id": 532,
            "drawDate": "2006-07-15T18:00:00",
            "numbers": [1, 6, 15, 17, 25, 28, 33],
            "addNumbers": [13, 14, 19],
            "extraDrawText": "Spillerkortnummer 332 782 139",
            "extraDrawPrize": 1315000,
            "prizes": ["7963020", "58400", "6395", "200", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71398428
          },
          {
            "id": 533,
            "drawDate": "2006-07-22T18:00:00",
            "numbers": [9, 11, 13, 21, 26, 31, 32],
            "addNumbers": [7, 8, 10],
            "extraDrawText": "Spillerkortnummer 340 432 027",
            "extraDrawPrize": 523000,
            "prizes": ["5277820", "61580", "6895", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70985128
          },
          {
            "id": 534,
            "drawDate": "2006-07-29T18:00:00",
            "numbers": [11, 16, 18, 21, 23, 24, 34],
            "addNumbers": [6, 27, 33],
            "extraDrawText": "Spillerkortnummer 320 531 547",
            "extraDrawPrize": 833000,
            "prizes": ["15714890", "93810", "8895", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70455780
          },
          {
            "id": 535,
            "drawDate": "2006-08-05T18:00:00",
            "numbers": [1, 5, 8, 10, 12, 32, 33],
            "addNumbers": [18, 26, 34],
            "extraDrawText": "Spillerkortnummer 333 434 643",
            "extraDrawPrize": 1269000,
            "prizes": ["3901845", "36420", "8505", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69975840
          },
          {
            "id": 536,
            "drawDate": "2006-08-12T18:00:00",
            "numbers": [3, 5, 8, 15, 23, 24, 31],
            "addNumbers": [2, 11, 13],
            "extraDrawText": "Spillerkortnummer 322 654 674",
            "extraDrawPrize": 516000,
            "prizes": ["3964610", "54275", "5770", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71096672
          },
          {
            "id": 537,
            "drawDate": "2006-08-19T18:00:00",
            "numbers": [1, 3, 5, 6, 27, 29, 31],
            "addNumbers": [19, 23, 28],
            "extraDrawText": "Spillerkortnummer 324 214 564",
            "extraDrawPrize": 1022000,
            "prizes": ["Gull-Lotto!", "70765", "7515", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72914664
          },
          {
            "id": 538,
            "drawDate": "2006-08-26T18:00:00",
            "numbers": [10, 11, 12, 13, 17, 18, 23],
            "addNumbers": [8, 14, 16],
            "extraDrawText": "Spillerkortnummer 313 638 386",
            "extraDrawPrize": 1998000,
            "prizes": ["17883125", "50560", "6895", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 87356104
          },
          {
            "id": 539,
            "drawDate": "2006-09-02T18:00:00",
            "numbers": [2, 8, 12, 13, 15, 20, 25],
            "addNumbers": [26, 29, 30],
            "extraDrawText": "Spillerkortnummer 323 853 884",
            "extraDrawPrize": 674000,
            "prizes": ["5545175", "46415", "5770", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74565740
          },
          {
            "id": 540,
            "drawDate": "2006-09-09T18:00:00",
            "numbers": [1, 3, 6, 20, 24, 28, 31],
            "addNumbers": [5, 9, 34],
            "extraDrawText": "Spillerkortnummer 325 872 216",
            "extraDrawPrize": 3018000,
            "prizes": ["2317415", "65060", "6765", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72719280
          },
          {
            "id": 541,
            "drawDate": "2006-09-16T18:00:00",
            "numbers": [2, 4, 12, 14, 16, 18, 24],
            "addNumbers": [3, 11, 28],
            "extraDrawText": "Spillerkortnummer 327 066 361",
            "extraDrawPrize": 672000,
            "prizes": ["8115875", "43855", "6115", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72763192
          },
          {
            "id": 542,
            "drawDate": "2006-09-23T18:00:00",
            "numbers": [12, 15, 16, 18, 22, 24, 33],
            "addNumbers": [3, 19, 31],
            "extraDrawText": "Spillerkortnummer 315 206 821",
            "extraDrawPrize": 1216000,
            "prizes": ["5514335", "59810", "8120", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74152748
          },
          {
            "id": 543,
            "drawDate": "2006-09-30T18:00:00",
            "numbers": [5, 9, 18, 19, 22, 26, 30],
            "addNumbers": [1, 12, 13],
            "extraDrawText": "Spillerkortnummer 0",
            "extraDrawPrize": 3340000,
            "prizes": ["2023575", "42400", "4875", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72570712
          },
          {
            "id": 544,
            "drawDate": "2006-10-07T18:00:00",
            "numbers": [9, 10, 15, 17, 19, 22, 30],
            "addNumbers": [3, 31, 33],
            "extraDrawText": "Spillerkortnummer 326 282 682",
            "extraDrawPrize": 433000,
            "prizes": ["8066685", "71400", "7145", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72323980
          },
          {
            "id": 545,
            "drawDate": "2006-10-14T18:00:00",
            "numbers": [4, 12, 13, 21, 24, 27, 32],
            "addNumbers": [7, 11, 20],
            "extraDrawText": "Spillerkortnummer 331 507 938",
            "extraDrawPrize": 616000,
            "prizes": ["5437420", "48125", "6400", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73122600
          },
          {
            "id": 546,
            "drawDate": "2006-10-21T18:00:00",
            "numbers": [6, 9, 10, 19, 20, 24, 25],
            "addNumbers": [21, 22, 32],
            "extraDrawText": "Spillerkortnummer 334 760 961",
            "extraDrawPrize": 3073000,
            "prizes": ["3334025", "58615", "6895", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74720228
          },
          {
            "id": 547,
            "drawDate": "2006-10-28T18:00:00",
            "numbers": [4, 6, 10, 14, 17, 27, 34],
            "addNumbers": [16, 21, 25],
            "extraDrawText": "Spillerkortnummer 331 311 115",
            "extraDrawPrize": 1749000,
            "prizes": ["4293910", "50675", "6595", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 76977012
          },
          {
            "id": 548,
            "drawDate": "2006-11-04T18:00:00",
            "numbers": [2, 11, 17, 23, 25, 27, 30],
            "addNumbers": [14, 22, 29],
            "extraDrawText": "Spillerkortnummer 322 036 625",
            "extraDrawPrize": 1359000,
            "prizes": ["16411225", "58505", "7110", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73564416
          },
          {
            "id": 549,
            "drawDate": "2006-11-11T18:00:00",
            "numbers": [2, 11, 24, 26, 28, 31, 34],
            "addNumbers": [5, 6, 20],
            "extraDrawText": "Spillerkortnummer 327 700 965",
            "extraDrawPrize": 1117000,
            "prizes": ["8220155", "69180", "8470", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73694272
          },
          {
            "id": 550,
            "drawDate": "2006-11-18T18:00:00",
            "numbers": [8, 9, 11, 19, 24, 27, 33],
            "addNumbers": [4, 21, 25],
            "extraDrawText": "Spillerkortnummer 321 920 421",
            "extraDrawPrize": 1825000,
            "prizes": ["8272960", "61550", "7355", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74165736
          },
          {
            "id": 551,
            "drawDate": "2006-11-25T18:00:00",
            "numbers": [1, 7, 15, 16, 17, 18, 31],
            "addNumbers": [4, 9, 14],
            "extraDrawText": "Spillerkortnummer 337 369 642",
            "extraDrawPrize": 2055000,
            "prizes": ["8188710", "62745", "7255", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73413512
          },
          {
            "id": 552,
            "drawDate": "2006-12-02T18:00:00",
            "numbers": [6, 10, 12, 15, 17, 21, 26],
            "addNumbers": [3, 5, 24],
            "extraDrawText": "Spillerkortnummer 320 014 259",
            "extraDrawPrize": 2847000,
            "prizes": ["5380625", "46035", "6515", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72361980
          },
          {
            "id": 553,
            "drawDate": "2006-12-09T18:00:00",
            "numbers": [5, 6, 11, 12, 18, 19, 33],
            "addNumbers": [1, 7, 9],
            "extraDrawText": "Spillerkortnummer 321 161 504",
            "extraDrawPrize": 268000,
            "prizes": ["5399495", "75600", "6485", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72614696
          },
          {
            "id": 554,
            "drawDate": "2006-12-16T18:00:00",
            "numbers": [11, 12, 21, 24, 25, 27, 34],
            "addNumbers": [3, 23, 26],
            "extraDrawText": "Spillerkortnummer 0",
            "extraDrawPrize": 993000,
            "prizes": ["4272100", "73105", "8925", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 76587572
          },
          {
            "id": 555,
            "drawDate": "2006-12-23T18:00:00",
            "numbers": [7, 8, 9, 21, 24, 28, 31],
            "addNumbers": [5, 14, 32],
            "extraDrawText": "Spillerkortnummer 335 904 511",
            "extraDrawPrize": 1317000,
            "prizes": ["2424965", "62945", "7635", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 97731680
          },
          {
            "id": 556,
            "drawDate": "2006-12-30T18:00:00",
            "numbers": [6, 7, 13, 17, 23, 29, 30],
            "addNumbers": [9, 10, 27],
            "extraDrawText": "Spillerkortnummer 330 597 525",
            "extraDrawPrize": 3471000,
            "prizes": ["4529465", "66435", "6020", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 81183344
          },
          {
            "id": 557,
            "drawDate": "2007-01-06T18:00:00",
            "numbers": [3, 6, 15, 17, 19, 31, 32],
            "addNumbers": [14, 28, 34],
            "extraDrawText": "Spillerkortnummer 333 739 596",
            "extraDrawPrize": 1130000,
            "prizes": ["3420855", "64565", "7635", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 76658464
          },
          {
            "id": 558,
            "drawDate": "2007-01-13T18:00:00",
            "numbers": [3, 13, 18, 20, 24, 31, 32],
            "addNumbers": [5, 12, 14],
            "extraDrawText": "Spillerkortnummer 327 028 968",
            "extraDrawPrize": 849000,
            "prizes": ["17130810", "79950", "7675", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 76776852
          },
          {
            "id": 559,
            "drawDate": "2007-01-20T18:00:00",
            "numbers": [1, 3, 9, 12, 16, 18, 20],
            "addNumbers": [17, 21, 30],
            "extraDrawText": "Spillerkortnummer 328 795 712",
            "extraDrawPrize": 677000,
            "prizes": ["4258635", "58300", "5790", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 76347132
          },
          {
            "id": 560,
            "drawDate": "2007-01-27T18:00:00",
            "numbers": [4, 6, 8, 9, 12, 18, 31],
            "addNumbers": [5, 14, 30],
            "extraDrawText": "Spillerkortnummer 336 547 643",
            "extraDrawPrize": 2345000,
            "prizes": ["4092890", "49440", "6100", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73387400
          },
          {
            "id": 561,
            "drawDate": "2007-02-03T18:00:00",
            "numbers": [5, 6, 15, 17, 21, 30, 32],
            "addNumbers": [8, 22, 33],
            "extraDrawText": "Spillerkortnummer 321 394 741",
            "extraDrawPrize": 1956000,
            "prizes": ["8290725", "59945", "7690", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74324336
          },
          {
            "id": 562,
            "drawDate": "2007-02-10T18:00:00",
            "numbers": [1, 3, 12, 13, 14, 19, 21],
            "addNumbers": [4, 6, 10],
            "extraDrawText": "Spillerkortnummer 330 764 126",
            "extraDrawPrize": 2086000,
            "prizes": ["16435130", "65915", "8490", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73671136
          },
          {
            "id": 563,
            "drawDate": "2007-02-17T18:00:00",
            "numbers": [11, 12, 16, 18, 27, 32, 33],
            "addNumbers": [15, 28, 34],
            "extraDrawText": "Spillerkortnummer 337 141 728",
            "extraDrawPrize": 2000000,
            "prizes": ["5646025", "66890", "7795", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 75616412
          },
          {
            "id": 564,
            "drawDate": "2007-02-24T18:00:00",
            "numbers": [3, 10, 13, 14, 20, 28, 30],
            "addNumbers": [6, 15, 16],
            "extraDrawText": "Spillerkortnummer 326 335 821",
            "extraDrawPrize": 2200000,
            "prizes": ["5682055", "50295", "6420", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 76099012
          },
          {
            "id": 565,
            "drawDate": "2007-03-03T18:00:00",
            "numbers": [5, 6, 17, 18, 23, 25, 30],
            "addNumbers": [11, 14, 34],
            "extraDrawText": "Spillerkortnummer 329 210 181",
            "extraDrawPrize": 2700000,
            "prizes": ["4185820", "67155", "7225", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74746788
          },
          {
            "id": 566,
            "drawDate": "2007-03-10T18:00:00",
            "numbers": [1, 2, 3, 4, 9, 18, 32],
            "addNumbers": [27, 31, 34],
            "extraDrawText": "Spillerkortnummer 327 164 478",
            "extraDrawPrize": 2400000,
            "prizes": ["2367695", "69745", "8135", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73990520
          },
          {
            "id": 567,
            "drawDate": "2007-03-17T18:00:00",
            "numbers": [5, 6, 10, 17, 19, 21, 23],
            "addNumbers": [11, 27, 31],
            "extraDrawText": "Spillerkortnummer 0",
            "extraDrawPrize": 2200000,
            "prizes": ["8222805", "62080", "6245", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73417920
          },
          {
            "id": 568,
            "drawDate": "2007-03-24T18:00:00",
            "numbers": [1, 2, 12, 15, 17, 20, 31],
            "addNumbers": [6, 14, 21],
            "extraDrawText": "Spillerkortnummer 337 598 151",
            "extraDrawPrize": 1500000,
            "prizes": ["8413265", "116735", "8615", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 75118480
          },
          {
            "id": 569,
            "drawDate": "2007-03-31T18:00:00",
            "numbers": [2, 7, 8, 9, 10, 26, 29],
            "addNumbers": [17, 28, 33],
            "extraDrawText": "Spillerkortnummer 340 735 912",
            "extraDrawPrize": 500000,
            "prizes": ["3475605", "55070", "6620", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 77580500
          },
          {
            "id": 570,
            "drawDate": "2007-04-07T18:00:00",
            "numbers": [2, 7, 8, 14, 15, 25, 32],
            "addNumbers": [4, 13, 22],
            "extraDrawText": "Spillerkortnummer 330 636 128",
            "extraDrawPrize": 1300000,
            "prizes": ["8150365", "62450", "7125", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72771132
          },
          {
            "id": 571,
            "drawDate": "2007-04-14T18:00:00",
            "numbers": [4, 7, 9, 16, 18, 20, 26],
            "addNumbers": [5, 23, 24],
            "extraDrawText": "Spillerkortnummer 280 789 656",
            "extraDrawPrize": 500000,
            "prizes": ["2333970", "49335", "6000", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72936692
          },
          {
            "id": 572,
            "drawDate": "2007-04-21T18:00:00",
            "numbers": [2, 7, 12, 14, 25, 28, 29],
            "addNumbers": [13, 15, 21],
            "extraDrawText": "Spillerkortnummer 350 255 299",
            "extraDrawPrize": 500000,
            "prizes": ["4113335", "42660", "6255", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73452484
          },
          {
            "id": 573,
            "drawDate": "2007-04-28T18:00:00",
            "numbers": [1, 6, 13, 19, 31, 32, 34],
            "addNumbers": [25, 26, 27],
            "extraDrawText": "Spillerkortnummer 328 763 543",
            "extraDrawPrize": 500000,
            "prizes": ["5397515", "51315", "8380", "205", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72288164
          },
          {
            "id": 574,
            "drawDate": "2007-05-05T18:00:00",
            "numbers": [2, 13, 23, 26, 29, 32, 33],
            "addNumbers": [7, 9, 19],
            "extraDrawText": "Spillerkortnummer 324 799 038",
            "extraDrawPrize": 1500000,
            "prizes": ["7713905", "55000", "7880", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68874180
          },
          {
            "id": 575,
            "drawDate": "2007-05-12T18:00:00",
            "numbers": [5, 12, 15, 18, 21, 23, 29],
            "addNumbers": [3, 24, 28],
            "extraDrawText": "Spillerkortnummer 337 965 125",
            "extraDrawPrize": 2500000,
            "prizes": ["5227065", "60985", "5545", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70005360
          },
          {
            "id": 576,
            "drawDate": "2007-05-19T18:00:00",
            "numbers": [5, 11, 15, 20, 22, 25, 28],
            "addNumbers": [13, 16, 27],
            "extraDrawText": "Spillerkortnummer 323 145 506",
            "extraDrawPrize": 1900000,
            "prizes": ["3137595", "47940", "5330", "170", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70035628
          },
          {
            "id": 577,
            "drawDate": "2007-05-26T18:00:00",
            "numbers": [3, 23, 26, 27, 29, 32, 33],
            "addNumbers": [6, 17, 24],
            "extraDrawText": "Spillerkortnummer 324 755 173",
            "extraDrawPrize": 500000,
            "prizes": ["15398085", "71865", "7685", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68741452
          },
          {
            "id": 578,
            "drawDate": "2007-06-02T18:00:00",
            "numbers": [3, 18, 23, 24, 30, 32, 34],
            "addNumbers": [2, 16, 29],
            "extraDrawText": "Spillerkortnummer 332 812 634",
            "extraDrawPrize": 500000,
            "prizes": ["Gull-Lotto!", "84715", "8550", "240", "60"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67773160
          },
          {
            "id": 579,
            "drawDate": "2007-06-09T18:00:00",
            "numbers": [2, 5, 8, 13, 14, 17, 28],
            "addNumbers": [10, 24, 31],
            "extraDrawText": "Spillerkortnummer 339 168 955",
            "extraDrawPrize": 2200000,
            "prizes": ["8177785", "53565", "6205", "180", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 78258744
          },
          {
            "id": 580,
            "drawDate": "2007-06-16T18:00:00",
            "numbers": [14, 15, 18, 22, 24, 27, 31],
            "addNumbers": [21, 29, 30],
            "extraDrawText": "Spillerkortnummer 327 215 552",
            "extraDrawPrize": 500000,
            "prizes": ["3951285", "49475", "7375", "205", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70558704
          },
          {
            "id": 581,
            "drawDate": "2007-06-23T18:00:00",
            "numbers": [1, 6, 16, 17, 22, 26, 28],
            "addNumbers": [3, 18, 27],
            "extraDrawText": "Spillerkortnummer 328 857 334",
            "extraDrawPrize": 2100000,
            "prizes": ["5000000", "60205", "7500", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 79578788
          },
          {
            "id": 582,
            "drawDate": "2007-06-30T18:00:00",
            "numbers": [13, 19, 20, 21, 22, 26, 33],
            "addNumbers": [1, 14, 16],
            "extraDrawText": "Spillerkortnummer 338 161 171",
            "extraDrawPrize": 500000,
            "prizes": ["4069600", "69640", "7535", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72671448
          },
          {
            "id": 583,
            "drawDate": "2007-07-07T18:00:00",
            "numbers": [1, 14, 15, 19, 24, 25, 26],
            "addNumbers": [5, 17, 20],
            "extraDrawText": "Spillerkortnummer 321 156 324",
            "extraDrawPrize": 2000000,
            "prizes": ["8056910", "76595", "8215", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71936740
          },
          {
            "id": 584,
            "drawDate": "2007-07-14T18:00:00",
            "numbers": [1, 6, 9, 14, 22, 25, 33],
            "addNumbers": [23, 31, 32],
            "extraDrawText": "Spillerkortnummer 331 955 637",
            "extraDrawPrize": 2400000,
            "prizes": ["5484120", "58655", "5365", "195", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73448096
          },
          {
            "id": 585,
            "drawDate": "2007-07-21T18:00:00",
            "numbers": [4, 9, 18, 24, 26, 28, 29],
            "addNumbers": [7, 23, 31],
            "extraDrawText": "Spillerkortnummer 0",
            "extraDrawPrize": 500000,
            "prizes": ["4062655", "62260", "6815", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72547448
          },
          {
            "id": 586,
            "drawDate": "2007-07-28T18:00:00",
            "numbers": [2, 7, 9, 11, 20, 21, 25],
            "addNumbers": [3, 16, 24],
            "extraDrawText": "Spillerkortnummer 326 383 781",
            "extraDrawPrize": 1400000,
            "prizes": ["Gull-Lotto!", "65150", "6445", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71386884
          },
          {
            "id": 587,
            "drawDate": "2007-08-04T18:00:00",
            "numbers": [3, 5, 8, 12, 23, 25, 33],
            "addNumbers": [13, 16, 30],
            "extraDrawText": "Spillerkortnummer 325 485 598",
            "extraDrawPrize": 1500000,
            "prizes": ["7220225", "44500", "5570", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 89778888
          },
          {
            "id": 588,
            "drawDate": "2007-08-11T18:00:00",
            "numbers": [9, 12, 13, 16, 20, 31, 32],
            "addNumbers": [6, 21, 23],
            "extraDrawText": "Spillerkortnummer 329 109 243",
            "extraDrawPrize": 500000,
            "prizes": ["8398145", "81345", "8380", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74983448
          },
          {
            "id": 589,
            "drawDate": "2007-08-18T18:00:00",
            "numbers": [2, 4, 8, 14, 15, 16, 28],
            "addNumbers": [3, 29, 31],
            "extraDrawText": "Spillerkortnummer 333 111 853",
            "extraDrawPrize": 500000,
            "prizes": ["8328520", "53445", "4750", "165", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74361792
          },
          {
            "id": 590,
            "drawDate": "2007-08-25T18:00:00",
            "numbers": [3, 8, 9, 18, 19, 28, 33],
            "addNumbers": [6, 12, 25],
            "extraDrawText": "Spillerkortnummer 320 776 836",
            "extraDrawPrize": 1400000,
            "prizes": ["2354215", "55660", "5655", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73569372
          },
          {
            "id": 591,
            "drawDate": "2007-09-01T18:00:00",
            "numbers": [12, 15, 16, 29, 30, 33, 34],
            "addNumbers": [9, 20, 22],
            "extraDrawText": "Spillerkortnummer 341 079 967",
            "extraDrawPrize": 500000,
            "prizes": ["4135475", "80115", "7735", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73847792
          },
          {
            "id": 592,
            "drawDate": "2007-09-08T18:00:00",
            "numbers": [10, 14, 16, 19, 21, 28, 30],
            "addNumbers": [7, 17, 29],
            "extraDrawText": "Spillerkortnummer 329 474 786",
            "extraDrawPrize": 500000,
            "prizes": ["8001370", "52660", "6265", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71440848
          },
          {
            "id": 593,
            "drawDate": "2007-09-15T18:00:00",
            "numbers": [5, 6, 9, 17, 21, 25, 32],
            "addNumbers": [10, 16, 28],
            "extraDrawText": "Spillerkortnummer 331 690 054",
            "extraDrawPrize": 500000,
            "prizes": ["2309955", "40295", "5265", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72186248
          },
          {
            "id": 594,
            "drawDate": "2007-09-22T18:00:00",
            "numbers": [5, 10, 14, 17, 22, 32, 33],
            "addNumbers": [6, 15, 31],
            "extraDrawText": "Spillerkortnummer 337 425 941",
            "extraDrawPrize": 500000,
            "prizes": ["2877240", "55390", "6105", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 77068932
          },
          {
            "id": 595,
            "drawDate": "2007-09-29T18:00:00",
            "numbers": [6, 13, 21, 22, 26, 27, 28],
            "addNumbers": [2, 3, 4],
            "extraDrawText": "Spillerkortnummer 350 141 961",
            "extraDrawPrize": 500000,
            "prizes": ["8751105", "73650", "7290", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 78134876
          },
          {
            "id": 596,
            "drawDate": "2007-10-06T18:00:00",
            "numbers": [1, 2, 3, 4, 18, 21, 23],
            "addNumbers": [6, 29, 31],
            "extraDrawText": "Spillerkortnummer 334 179 461",
            "extraDrawPrize": 1900000,
            "prizes": ["Gull-Lotto!", "77555", "7550", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 78229916
          },
          {
            "id": 597,
            "drawDate": "2007-10-13T18:00:00",
            "numbers": [3, 7, 10, 15, 22, 25, 29],
            "addNumbers": [6, 8, 12],
            "extraDrawText": "Spillerkortnummer 323 937 483",
            "extraDrawPrize": 1900000,
            "prizes": ["6357855", "41355", "5805", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 92069892
          },
          {
            "id": 598,
            "drawDate": "2007-10-20T18:00:00",
            "numbers": [11, 16, 21, 22, 23, 30, 32],
            "addNumbers": [4, 28, 33],
            "extraDrawText": "Spillerkortnummer 338 163 601",
            "extraDrawPrize": 1000000,
            "prizes": ["9049375", "66365", "7550", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 80798024
          },
          {
            "id": 599,
            "drawDate": "2007-10-27T18:00:00",
            "numbers": [3, 7, 14, 23, 26, 30, 31],
            "addNumbers": [8, 21, 33],
            "extraDrawText": "Spillerkortnummer 329 670 003",
            "extraDrawPrize": 2200000,
            "prizes": ["5582640", "65135", "6000", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74767552
          },
          {
            "id": 600,
            "drawDate": "2007-11-03T18:00:00",
            "numbers": [3, 15, 18, 27, 29, 30, 33],
            "addNumbers": [6, 10, 32],
            "extraDrawText": "Spillerkortnummer 328 113 316",
            "extraDrawPrize": 2100000,
            "prizes": ["8254700", "49275", "6960", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73702708
          },
          {
            "id": 601,
            "drawDate": "2007-11-10T18:00:00",
            "numbers": [3, 10, 16, 17, 21, 22, 34],
            "addNumbers": [27, 28, 31],
            "extraDrawText": "Spillerkortnummer 336 288 078",
            "extraDrawPrize": 900000,
            "prizes": ["5392045", "49430", "7150", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72214944
          },
          {
            "id": 602,
            "drawDate": "2007-11-17T18:00:00",
            "numbers": [6, 8, 12, 14, 16, 22, 28],
            "addNumbers": [5, 21, 27],
            "extraDrawText": "Spillerkortnummer 331 569 249",
            "extraDrawPrize": 500000,
            "prizes": ["3159120", "58760", "5415", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70516084
          },
          {
            "id": 603,
            "drawDate": "2007-11-24T18:00:00",
            "numbers": [2, 4, 14, 21, 30, 31, 33],
            "addNumbers": [8, 22, 26],
            "extraDrawText": "Spillerkortnummer 336 040 831",
            "extraDrawPrize": 1800000,
            "prizes": ["15844820", "65600", "7875", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70735820
          },
          {
            "id": 604,
            "drawDate": "2007-12-01T18:00:00",
            "numbers": [1, 21, 23, 24, 25, 32, 33],
            "addNumbers": [5, 7, 30],
            "extraDrawText": "Spillerkortnummer 324 802 936",
            "extraDrawPrize": 500000,
            "prizes": ["3108650", "69995", "8415", "235", "60"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69389568
          },
          {
            "id": 605,
            "drawDate": "2007-12-08T18:00:00",
            "numbers": [6, 7, 16, 21, 24, 27, 28],
            "addNumbers": [20, 25, 30],
            "extraDrawText": "Spillerkortnummer 324 200 125",
            "extraDrawPrize": 1500000,
            "prizes": ["3080475", "60825", "6020", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68760688
          },
          {
            "id": 606,
            "drawDate": "2007-12-15T18:00:00",
            "numbers": [1, 2, 10, 20, 23, 25, 31],
            "addNumbers": [5, 7, 26],
            "extraDrawText": "Spillerkortnummer 323 702 225",
            "extraDrawPrize": 500000,
            "prizes": ["3230980", "60100", "8435", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72120096
          },
          {
            "id": 607,
            "drawDate": "2007-12-22T18:00:00",
            "numbers": [1, 2, 6, 13, 15, 31, 34],
            "addNumbers": [8, 21, 23],
            "extraDrawText": "Spillerkortnummer 330 556 259",
            "extraDrawPrize": 1700000,
            "prizes": ["4694005", "56700", "6315", "205", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 83821524
          },
          {
            "id": 608,
            "drawDate": "2007-12-29T18:00:00",
            "numbers": [1, 8, 11, 25, 28, 30, 31],
            "addNumbers": [13, 22, 32],
            "extraDrawText": "Spillerkortnummer 327 481 295",
            "extraDrawPrize": 2000000,
            "prizes": ["16581070", "67560", "7630", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74022636
          },
          {
            "id": 609,
            "drawDate": "2008-01-05T18:00:00",
            "numbers": [2, 20, 21, 26, 30, 32, 33],
            "addNumbers": [3, 9, 15],
            "extraDrawText": "Spillerkortnummer 327 399 227",
            "extraDrawPrize": 2000000,
            "prizes": ["15989845", "70765", "8655", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71383256
          },
          {
            "id": 610,
            "drawDate": "2008-01-12T18:00:00",
            "numbers": [1, 4, 8, 12, 18, 20, 22],
            "addNumbers": [29, 31, 33],
            "extraDrawText": "Spillerkortnummer 340 351 223",
            "extraDrawPrize": 2100000,
            "prizes": ["8126020", "57940", "5895", "175", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72553788
          },
          {
            "id": 611,
            "drawDate": "2008-01-19T18:00:00",
            "numbers": [2, 5, 7, 19, 23, 24, 27],
            "addNumbers": [4, 20, 33],
            "extraDrawText": "Spillerkortnummer 336 727 062",
            "extraDrawPrize": 1900000,
            "prizes": ["3289490", "63965", "6115", "180", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73426152
          },
          {
            "id": 612,
            "drawDate": "2008-01-26T18:00:00",
            "numbers": [6, 11, 19, 22, 24, 30, 33],
            "addNumbers": [7, 14, 15],
            "extraDrawText": "Spillerkortnummer 328 850 355",
            "extraDrawPrize": 1700000,
            "prizes": ["7946020", "74170", "8135", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70946648
          },
          {
            "id": 613,
            "drawDate": "2008-02-02T18:00:00",
            "numbers": [4, 13, 14, 23, 31, 33, 34],
            "addNumbers": [9, 10, 19],
            "extraDrawText": "Spillerkortnummer 333 294 986",
            "extraDrawPrize": 2100000,
            "prizes": ["7876690", "65220", "7960", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70327600
          },
          {
            "id": 614,
            "drawDate": "2008-02-09T18:00:00",
            "numbers": [1, 6, 10, 14, 15, 33, 34],
            "addNumbers": [4, 19, 32],
            "extraDrawText": "Spillerkortnummer 340 649 162",
            "extraDrawPrize": 2500000,
            "prizes": ["5224515", "85600", "7725", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69971224
          },
          {
            "id": 615,
            "drawDate": "2008-02-16T18:00:00",
            "numbers": [10, 11, 12, 16, 24, 28, 32],
            "addNumbers": [18, 25, 26],
            "extraDrawText": "Spillerkortnummer 330 880 802",
            "extraDrawPrize": 500000,
            "prizes": ["7854685", "56005", "7600", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70131128
          },
          {
            "id": 616,
            "drawDate": "2008-02-23T18:00:00",
            "numbers": [3, 5, 7, 9, 14, 29, 32],
            "addNumbers": [13, 16, 30],
            "extraDrawText": "Spillerkortnummer 337 577 019",
            "extraDrawPrize": 500000,
            "prizes": ["7861395", "72070", "6940", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70191040
          },
          {
            "id": 617,
            "drawDate": "2008-03-01T18:00:00",
            "numbers": [12, 15, 18, 21, 24, 25, 28],
            "addNumbers": [1, 29, 33],
            "extraDrawText": "Spillerkortnummer 334 470 197",
            "extraDrawPrize": 2100000,
            "prizes": ["3102075", "50395", "5880", "180", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69242856
          },
          {
            "id": 618,
            "drawDate": "2008-03-08T18:00:00",
            "numbers": [7, 15, 18, 19, 21, 30, 31],
            "addNumbers": [14, 16, 22],
            "extraDrawText": "Spillerkortnummer 0",
            "extraDrawPrize": 500000,
            "prizes": ["3992810", "70685", "7020", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71300264
          },
          {
            "id": 619,
            "drawDate": "2008-03-15T18:00:00",
            "numbers": [1, 3, 12, 14, 18, 24, 25],
            "addNumbers": [2, 9, 11],
            "extraDrawText": "Spillerkortnummer 0",
            "extraDrawPrize": 2200000,
            "prizes": ["4000000", "58630", "6875", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 79536072
          },
          {
            "id": 620,
            "drawDate": "2008-03-22T18:00:00",
            "numbers": [2, 3, 7, 17, 20, 33, 34],
            "addNumbers": [8, 12, 32],
            "extraDrawText": "Spillerkortnummer 323 909 934",
            "extraDrawPrize": 500000,
            "prizes": ["5360595", "57335", "7765", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71793728
          },
          {
            "id": 621,
            "drawDate": "2008-03-29T18:00:00",
            "numbers": [10, 11, 17, 23, 28, 31, 32],
            "addNumbers": [7, 16, 30],
            "extraDrawText": "Spillerkortnummer 330 402 697",
            "extraDrawPrize": 500000,
            "prizes": ["5387530", "74085", "8135", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72154480
          },
          {
            "id": 622,
            "drawDate": "2008-04-05T18:00:00",
            "numbers": [6, 8, 9, 11, 18, 20, 28],
            "addNumbers": [7, 17, 26],
            "extraDrawText": "Spillerkortnummer 334 138 177",
            "extraDrawPrize": 2300000,
            "prizes": ["5247475", "48105", "6165", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70278732
          },
          {
            "id": 623,
            "drawDate": "2008-04-12T18:00:00",
            "numbers": [5, 6, 10, 19, 23, 27, 29],
            "addNumbers": [2, 21, 26],
            "extraDrawText": "Spillerkortnummer 323 974 137",
            "extraDrawPrize": 2100000,
            "prizes": ["15721555", "53100", "6035", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70185528
          },
          {
            "id": 624,
            "drawDate": "2008-04-19T18:00:00",
            "numbers": [3, 4, 6, 11, 17, 27, 31],
            "addNumbers": [1, 20, 23],
            "extraDrawText": "Spillerkortnummer 330 455 436",
            "extraDrawPrize": 2200000,
            "prizes": ["3051175", "62160", "7795", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68106620
          },
          {
            "id": 625,
            "drawDate": "2008-04-26T18:00:00",
            "numbers": [4, 6, 8, 15, 20, 25, 30],
            "addNumbers": [1, 11, 12],
            "extraDrawText": "Spillerkortnummer 333 730 961",
            "extraDrawPrize": 500000,
            "prizes": ["3786970", "50495", "6000", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67624536
          },
          {
            "id": 626,
            "drawDate": "2008-05-03T18:00:00",
            "numbers": [7, 17, 18, 22, 24, 26, 34],
            "addNumbers": [5, 15, 27],
            "extraDrawText": "Spillerkortnummer 327 877 528",
            "extraDrawPrize": 500000,
            "prizes": ["14769605", "62150", "8145", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65935756
          },
          {
            "id": 627,
            "drawDate": "2008-05-10T18:00:00",
            "numbers": [4, 6, 14, 17, 21, 23, 30],
            "addNumbers": [1, 12, 20],
            "extraDrawText": "Spillerkortnummer 324 982 989",
            "extraDrawPrize": 1800000,
            "prizes": ["4863980", "59455", "7175", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65142612
          },
          {
            "id": 628,
            "drawDate": "2008-05-17T18:00:00",
            "numbers": [3, 12, 13, 16, 24, 28, 29],
            "addNumbers": [9, 22, 33],
            "extraDrawText": "Spillerkortnummer 350 776 495",
            "extraDrawPrize": 1800000,
            "prizes": ["2689955", "52310", "6415", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60043724
          },
          {
            "id": 629,
            "drawDate": "2008-05-24T18:00:00",
            "numbers": [11, 12, 20, 22, 23, 24, 34],
            "addNumbers": [1, 2, 17],
            "extraDrawText": "Spillerkortnummer 332 075 249",
            "extraDrawPrize": 500000,
            "prizes": ["14629830", "63650", "7440", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65311756
          },
          {
            "id": 630,
            "drawDate": "2008-05-31T18:00:00",
            "numbers": [6, 8, 13, 17, 23, 25, 34],
            "addNumbers": [3, 18, 26],
            "extraDrawText": "Spillerkortnummer 324 023 243",
            "extraDrawPrize": 2000000,
            "prizes": ["3570240", "73315", "7710", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63754292
          },
          {
            "id": 631,
            "drawDate": "2008-06-07T18:00:00",
            "numbers": [7, 11, 14, 15, 18, 22, 28],
            "addNumbers": [16, 21, 27],
            "extraDrawText": "Spillerkortnummer 334 496 795",
            "extraDrawPrize": 500000,
            "prizes": ["4593705", "49130", "6600", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 61522876
          },
          {
            "id": 632,
            "drawDate": "2008-06-14T18:00:00",
            "numbers": [6, 9, 15, 17, 29, 32, 34],
            "addNumbers": [1, 7, 33],
            "extraDrawText": "Spillerkortnummer 351 125 915",
            "extraDrawPrize": 500000,
            "prizes": ["14814935", "73130", "7120", "215", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66138124
          },
          {
            "id": 633,
            "drawDate": "2008-06-21T18:00:00",
            "numbers": [3, 6, 11, 14, 15, 20, 24],
            "addNumbers": [9, 25, 34],
            "extraDrawText": "Spillerkortnummer 355 558 949",
            "extraDrawPrize": 1100000,
            "prizes": ["6666665", "66490", "7195", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74007860
          },
          {
            "id": 634,
            "drawDate": "2008-06-28T18:00:00",
            "numbers": [3, 9, 13, 17, 18, 27, 31],
            "addNumbers": [1, 11, 14],
            "extraDrawText": "Spillerkortnummer 328 126 776",
            "extraDrawPrize": 500000,
            "prizes": ["3078680", "51315", "4905", "165", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68720584
          },
          {
            "id": 635,
            "drawDate": "2008-07-05T18:00:00",
            "numbers": [3, 10, 11, 12, 24, 26, 32],
            "addNumbers": [4, 9, 21],
            "extraDrawText": "Spillerkortnummer 280 234 395",
            "extraDrawPrize": 500000,
            "prizes": ["4966095", "60700", "7220", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66510260
          },
          {
            "id": 636,
            "drawDate": "2008-07-12T18:00:00",
            "numbers": [1, 7, 14, 15, 25, 26, 30],
            "addNumbers": [23, 29, 31],
            "extraDrawText": "Spillerkortnummer 337 481 689",
            "extraDrawPrize": 2500000,
            "prizes": ["5090725", "70005", "7800", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68179376
          },
          {
            "id": 637,
            "drawDate": "2008-07-19T18:00:00",
            "numbers": [10, 12, 20, 25, 28, 29, 34],
            "addNumbers": [23, 26, 30],
            "extraDrawText": "Spillerkortnummer 331 038 387",
            "extraDrawPrize": 1000000,
            "prizes": ["3089725", "74820", "9465", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68967092
          },
          {
            "id": 638,
            "drawDate": "2008-07-26T18:00:00",
            "numbers": [7, 10, 18, 19, 21, 22, 23],
            "addNumbers": [11, 25, 34],
            "extraDrawText": "Spillerkortnummer 333 554 675",
            "extraDrawPrize": 2000000,
            "prizes": ["4886850", "67200", "7640", "200", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65448920
          },
          {
            "id": 639,
            "drawDate": "2008-08-02T18:00:00",
            "numbers": [3, 10, 14, 15, 22, 23, 28],
            "addNumbers": [8, 26, 32],
            "extraDrawText": "Spillerkortnummer 324 560 853",
            "extraDrawPrize": 500000,
            "prizes": ["1340030", "32615", "4750", "160", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65805176
          },
          {
            "id": 640,
            "drawDate": "2008-08-09T18:00:00",
            "numbers": [16, 17, 18, 22, 26, 30, 34],
            "addNumbers": [1, 14, 25],
            "extraDrawText": "Spillerkortnummer 330 349 852",
            "extraDrawPrize": 2600000,
            "prizes": ["7426455", "76250", "8150", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66307636
          },
          {
            "id": 641,
            "drawDate": "2008-08-16T18:00:00",
            "numbers": [1, 15, 20, 22, 23, 29, 30],
            "addNumbers": [3, 8, 21],
            "extraDrawText": "Spillerkortnummer 323 222 153",
            "extraDrawPrize": 500000,
            "prizes": ["4947610", "22410", "7995", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66262688
          },
          {
            "id": 642,
            "drawDate": "2008-08-23T18:00:00",
            "numbers": [2, 3, 9, 15, 19, 20, 33],
            "addNumbers": [14, 16, 32],
            "extraDrawText": "Spillerkortnummer 333 450 059",
            "extraDrawPrize": 1700000,
            "prizes": ["2983030", "56300", "6485", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66585544
          },
          {
            "id": 643,
            "drawDate": "2008-08-30T18:00:00",
            "numbers": [7, 9, 11, 21, 22, 25, 28],
            "addNumbers": [5, 8, 17],
            "extraDrawText": "Spillerkortnummer 0",
            "extraDrawPrize": 2000000,
            "prizes": ["4977690", "44060", "6195", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66665508
          },
          {
            "id": 644,
            "drawDate": "2008-09-06T18:00:00",
            "numbers": [14, 15, 16, 17, 24, 26, 29],
            "addNumbers": [7, 13, 19],
            "extraDrawText": "Spillerkortnummer 328 462 365",
            "extraDrawPrize": 500000,
            "prizes": ["7445625", "53090", "7895", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66478824
          },
          {
            "id": 645,
            "drawDate": "2008-09-13T18:00:00",
            "numbers": [1, 5, 8, 9, 11, 20, 23],
            "addNumbers": [3, 14, 26],
            "extraDrawText": "Spillerkortnummer 335 557 939",
            "extraDrawPrize": 500000,
            "prizes": ["1988355", "45365", "5105", "170", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71012844
          },
          {
            "id": 646,
            "drawDate": "2008-09-20T18:00:00",
            "numbers": [5, 9, 14, 18, 23, 25, 26],
            "addNumbers": [1, 12, 31],
            "extraDrawText": "Spillerkortnummer 337 974 472",
            "extraDrawPrize": 500000,
            "prizes": ["3278245", "54640", "5720", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73175156
          },
          {
            "id": 647,
            "drawDate": "2008-09-27T18:00:00",
            "numbers": [1, 8, 11, 12, 24, 26, 31],
            "addNumbers": [2, 6, 30],
            "extraDrawText": "Spillerkortnummer 330 583 755",
            "extraDrawPrize": 2300000,
            "prizes": ["2342215", "51955", "6790", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73194268
          },
          {
            "id": 648,
            "drawDate": "2008-10-04T18:00:00",
            "numbers": [1, 6, 10, 11, 18, 19, 20],
            "addNumbers": [13, 17, 22],
            "extraDrawText": "Spillerkortnummer 326 872 371",
            "extraDrawPrize": 500000,
            "prizes": ["8142640", "67425", "6475", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72702152
          },
          {
            "id": 649,
            "drawDate": "2008-10-11T18:00:00",
            "numbers": [4, 6, 9, 15, 20, 27, 29],
            "addNumbers": [3, 11, 21],
            "extraDrawText": "Spillerkortnummer 354 588 426",
            "extraDrawPrize": 2500000,
            "prizes": ["2738725", "51440", "5890", "170", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73358740
          },
          {
            "id": 650,
            "drawDate": "2008-10-18T18:00:00",
            "numbers": [16, 21, 25, 29, 31, 32, 33],
            "addNumbers": [3, 4, 19],
            "extraDrawText": "Spillerkortnummer 334 847 551",
            "extraDrawPrize": 1500000,
            "prizes": ["15522065", "69900", "8035", "215", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69294936
          },
          {
            "id": 651,
            "drawDate": "2008-10-25T18:00:00",
            "numbers": [5, 7, 14, 17, 19, 22, 30],
            "addNumbers": [1, 15, 23],
            "extraDrawText": "Spillerkortnummer 332 946 864",
            "extraDrawPrize": 500000,
            "prizes": ["7662445", "77130", "6955", "205", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68414688
          },
          {
            "id": 652,
            "drawDate": "2008-11-01T18:00:00",
            "numbers": [3, 9, 13, 20, 30, 32, 34],
            "addNumbers": [22, 29, 31],
            "extraDrawText": "Spillerkortnummer 327 454 788",
            "extraDrawPrize": 500000,
            "prizes": ["3790820", "90520", "7955", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67693260
          },
          {
            "id": 653,
            "drawDate": "2008-11-08T18:00:00",
            "numbers": [3, 4, 5, 12, 14, 19, 24],
            "addNumbers": [1, 13, 31],
            "extraDrawText": "Spillerkortnummer 325 559 557",
            "extraDrawPrize": 2400000,
            "prizes": ["3786725", "82725", "7755", "200", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67620140
          },
          {
            "id": 654,
            "drawDate": "2008-11-15T18:00:00",
            "numbers": [3, 6, 7, 8, 21, 23, 24],
            "addNumbers": [15, 26, 32],
            "extraDrawText": "Spillerkortnummer 322 651 166",
            "extraDrawPrize": 1700000,
            "prizes": ["7680040", "63590", "6125", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68571800
          },
          {
            "id": 655,
            "drawDate": "2008-11-22T18:00:00",
            "numbers": [9, 12, 21, 24, 25, 26, 27],
            "addNumbers": [4, 17, 28],
            "extraDrawText": "Spillerkortnummer 331 350 058",
            "extraDrawPrize": 1000000,
            "prizes": ["5053115", "73420", "7245", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67675652
          },
          {
            "id": 656,
            "drawDate": "2008-11-29T18:00:00",
            "numbers": [4, 7, 9, 13, 16, 17, 25],
            "addNumbers": [23, 26, 32],
            "extraDrawText": "Spillerkortnummer 329 472 337",
            "extraDrawPrize": 1400000,
            "prizes": ["7523155", "54395", "6740", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67171060
          },
          {
            "id": 657,
            "drawDate": "2008-12-06T18:00:00",
            "numbers": [1, 3, 6, 14, 22, 23, 32],
            "addNumbers": [4, 11, 34],
            "extraDrawText": "Spillerkortnummer 325 066 168",
            "extraDrawPrize": 1900000,
            "prizes": ["4926195", "75870", "7855", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65975888
          },
          {
            "id": 658,
            "drawDate": "2008-12-13T18:00:00",
            "numbers": [1, 6, 15, 20, 25, 32, 34],
            "addNumbers": [4, 5, 12],
            "extraDrawText": "Spillerkortnummer 0",
            "extraDrawPrize": 500000,
            "prizes": ["2095035", "59750", "6630", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74822764
          },
          {
            "id": 659,
            "drawDate": "2008-12-20T18:00:00",
            "numbers": [2, 17, 19, 24, 25, 27, 29],
            "addNumbers": [4, 10, 33],
            "extraDrawText": "Spillerkortnummer 328 432 519",
            "extraDrawPrize": 2300000,
            "prizes": ["2922405", "63390", "7840", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 78278764
          },
          {
            "id": 660,
            "drawDate": "2008-12-27T18:00:00",
            "numbers": [1, 2, 14, 16, 28, 29, 32],
            "addNumbers": [10, 12, 31],
            "extraDrawText": "Spillerkortnummer 335 705 866",
            "extraDrawPrize": 2100000,
            "prizes": ["7935465", "60805", "8195", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70852368
          },
          {
            "id": 661,
            "drawDate": "2009-01-03T18:00:00",
            "numbers": [6, 10, 12, 17, 24, 25, 27],
            "addNumbers": [3, 19, 30],
            "extraDrawText": "Spillerkortnummer 330 742 719",
            "extraDrawPrize": 500000,
            "prizes": ["15773450", "52580", "6335", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70417208
          },
          {
            "id": 662,
            "drawDate": "2009-01-10T18:00:00",
            "numbers": [5, 13, 14, 15, 19, 28, 30],
            "addNumbers": [2, 9, 12],
            "extraDrawText": "Spillerkortnummer 332 109 046",
            "extraDrawPrize": 2200000,
            "prizes": ["7905115", "66530", "7665", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70581400
          },
          {
            "id": 663,
            "drawDate": "2009-01-17T18:00:00",
            "numbers": [6, 18, 24, 28, 31, 32, 34],
            "addNumbers": [1, 13, 21],
            "extraDrawText": "Spillerkortnummer 350 356 139",
            "extraDrawPrize": 1900000,
            "prizes": ["5214570", "52835", "8225", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69838052
          },
          {
            "id": 664,
            "drawDate": "2009-01-24T18:00:00",
            "numbers": [2, 4, 8, 13, 22, 31, 34],
            "addNumbers": [5, 12, 32],
            "extraDrawText": "Spillerkortnummer 327 598 746",
            "extraDrawPrize": 1000000,
            "prizes": ["15746570", "96240", "7330", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70297204
          },
          {
            "id": 665,
            "drawDate": "2009-01-31T18:00:00",
            "numbers": [22, 23, 25, 29, 30, 33, 34],
            "addNumbers": [2, 12, 14],
            "extraDrawText": "Spillerkortnummer 327 156 244",
            "extraDrawPrize": 2100000,
            "prizes": ["3175465", "107250", "7070", "230", "60"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70881016
          },
          {
            "id": 666,
            "drawDate": "2009-02-07T18:00:00",
            "numbers": [1, 2, 11, 15, 21, 30, 32],
            "addNumbers": [3, 22, 27],
            "extraDrawText": "Spillerkortnummer 323 570 534",
            "extraDrawPrize": 500000,
            "prizes": ["7684160", "53310", "7735", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68608596
          },
          {
            "id": 667,
            "drawDate": "2009-02-14T18:00:00",
            "numbers": [2, 15, 22, 27, 28, 29, 32],
            "addNumbers": [6, 25, 30],
            "extraDrawText": "Spillerkortnummer 333 006 384",
            "extraDrawPrize": 500000,
            "prizes": ["2631875", "62360", "5965", "170", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70496732
          },
          {
            "id": 668,
            "drawDate": "2009-02-21T18:00:00",
            "numbers": [2, 3, 9, 10, 14, 18, 26],
            "addNumbers": [20, 22, 33],
            "extraDrawText": "Spillerkortnummer 352 246 796",
            "extraDrawPrize": 500000,
            "prizes": ["16072325", "58935", "6420", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71751464
          },
          {
            "id": 669,
            "drawDate": "2009-02-28T18:00:00",
            "numbers": [2, 5, 9, 14, 23, 26, 29],
            "addNumbers": [6, 27, 32],
            "extraDrawText": "Spillerkortnummer 336 005 716",
            "extraDrawPrize": 2300000,
            "prizes": ["1947565", "42545", "4000", "150", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69555988
          },
          {
            "id": 670,
            "drawDate": "2009-03-07T18:00:00",
            "numbers": [2, 3, 18, 22, 23, 26, 33],
            "addNumbers": [11, 28, 32],
            "extraDrawText": "Spillerkortnummer 339 402 313",
            "extraDrawPrize": 2500000,
            "prizes": ["7773465", "62355", "7430", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69405944
          },
          {
            "id": 671,
            "drawDate": "2009-03-14T18:00:00",
            "numbers": [4, 5, 22, 24, 26, 30, 31],
            "addNumbers": [3, 17, 28],
            "extraDrawText": "Spillerkortnummer 352 110 625",
            "extraDrawPrize": 500000,
            "prizes": ["3151070", "76305", "8585", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70336488
          },
          {
            "id": 672,
            "drawDate": "2009-03-21T18:00:00",
            "numbers": [4, 11, 14, 18, 29, 30, 31],
            "addNumbers": [2, 3, 20],
            "extraDrawText": "Spillerkortnummer 336 267 917",
            "extraDrawPrize": 500000,
            "prizes": ["7898925", "68730", "5960", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70526140
          },
          {
            "id": 673,
            "drawDate": "2009-03-28T18:00:00",
            "numbers": [1, 5, 16, 22, 29, 32, 33],
            "addNumbers": [8, 11, 34],
            "extraDrawText": "Spillerkortnummer 329 947 773",
            "extraDrawPrize": 2100000,
            "prizes": ["3885060", "57810", "7975", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69376080
          },
          {
            "id": 674,
            "drawDate": "2009-04-04T18:00:00",
            "numbers": [1, 5, 9, 16, 25, 26, 31],
            "addNumbers": [4, 32, 34],
            "extraDrawText": "Spillerkortnummer 370 904 291",
            "extraDrawPrize": 2000000,
            "prizes": ["10000000", "63650", "7075", "205", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73064236
          },
          {
            "id": 675,
            "drawDate": "2009-04-11T18:00:00",
            "numbers": [8, 12, 13, 21, 26, 30, 31],
            "addNumbers": [4, 9, 11],
            "extraDrawText": "Spillerkortnummer 354 296 568",
            "extraDrawPrize": 1900000,
            "prizes": ["6666665", "65390", "6750", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 75056940
          },
          {
            "id": 676,
            "drawDate": "2009-04-18T18:00:00",
            "numbers": [2, 3, 7, 15, 19, 29, 34],
            "addNumbers": [1, 10, 28],
            "extraDrawText": "Spillerkortnummer 370 879 093",
            "extraDrawPrize": 2100000,
            "prizes": ["7805420", "62610", "7060", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69691256
          },
          {
            "id": 677,
            "drawDate": "2009-04-25T18:00:00",
            "numbers": [4, 6, 15, 20, 29, 31, 33],
            "addNumbers": [11, 24, 27],
            "extraDrawText": "Spillerkortnummer 368 295 308",
            "extraDrawPrize": 2300000,
            "prizes": ["3879935", "75165", "7910", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69284588
          },
          {
            "id": 678,
            "drawDate": "2009-05-02T18:00:00",
            "numbers": [2, 6, 8, 9, 18, 25, 29],
            "addNumbers": [5, 15, 21],
            "extraDrawText": "Spillerkortnummer 323 845 409",
            "extraDrawPrize": 1400000,
            "prizes": ["3111050", "42475", "5580", "170", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69443132
          },
          {
            "id": 679,
            "drawDate": "2009-05-09T18:00:00",
            "numbers": [4, 6, 8, 12, 20, 22, 33],
            "addNumbers": [3, 13, 28],
            "extraDrawText": "Spillerkortnummer 331 788 787",
            "extraDrawPrize": 2300000,
            "prizes": ["3061075", "51695", "6340", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68327584
          },
          {
            "id": 680,
            "drawDate": "2009-05-16T18:00:00",
            "numbers": [3, 5, 6, 7, 11, 16, 32],
            "addNumbers": [12, 19, 28],
            "extraDrawText": "Spillerkortnummer 334 249 156",
            "extraDrawPrize": 1500000,
            "prizes": ["15510650", "60325", "8925", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69243984
          },
          {
            "id": 681,
            "drawDate": "2009-05-23T18:00:00",
            "numbers": [5, 15, 22, 24, 25, 31, 34],
            "addNumbers": [8, 21, 27],
            "extraDrawText": "Spillerkortnummer 330 557 336",
            "extraDrawPrize": 500000,
            "prizes": ["5094745", "89165", "8585", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68233192
          },
          {
            "id": 682,
            "drawDate": "2009-05-30T18:00:00",
            "numbers": [2, 7, 14, 15, 17, 19, 27],
            "addNumbers": [16, 24, 33],
            "extraDrawText": "Spillerkortnummer 329 532 606",
            "extraDrawPrize": 2200000,
            "prizes": ["14727125", "78755", "5965", "180", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65746112
          },
          {
            "id": 683,
            "drawDate": "2009-06-06T18:00:00",
            "numbers": [3, 9, 14, 17, 21, 31, 33],
            "addNumbers": [1, 7, 34],
            "extraDrawText": "Spillerkortnummer 350 144 907",
            "extraDrawPrize": 500000,
            "prizes": ["3625630", "48980", "4660", "160", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64743416
          },
          {
            "id": 684,
            "drawDate": "2009-06-13T18:00:00",
            "numbers": [1, 4, 7, 13, 17, 19, 23],
            "addNumbers": [2, 8, 20],
            "extraDrawText": "Spillerkortnummer 351 423 933",
            "extraDrawPrize": 2100000,
            "prizes": ["15022030", "59320", "6345", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67062640
          },
          {
            "id": 685,
            "drawDate": "2009-06-20T18:00:00",
            "numbers": [7, 11, 21, 23, 28, 30, 31],
            "addNumbers": [3, 18, 25],
            "extraDrawText": "Spillerkortnummer 354 249 793",
            "extraDrawPrize": 2200000,
            "prizes": ["10000000", "52410", "6730", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72920672
          },
          {
            "id": 686,
            "drawDate": "2009-06-27T18:00:00",
            "numbers": [2, 13, 14, 20, 24, 25, 31],
            "addNumbers": [8, 11, 29],
            "extraDrawText": "Spillerkortnummer 352 541 484",
            "extraDrawPrize": 2500000,
            "prizes": ["Gull-Lotto!", "95440", "8105", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66394840
          },
          {
            "id": 687,
            "drawDate": "2009-07-04T18:00:00",
            "numbers": [2, 4, 9, 19, 21, 29, 34],
            "addNumbers": [5, 8, 26],
            "extraDrawText": "Spillerkortnummer 335 324 203",
            "extraDrawPrize": 500000,
            "prizes": ["5279915", "62525", "6210", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 75031500
          },
          {
            "id": 688,
            "drawDate": "2009-07-11T18:00:00",
            "numbers": [1, 5, 13, 22, 23, 25, 29],
            "addNumbers": [4, 15, 19],
            "extraDrawText": "Spillerkortnummer 369 987 052",
            "extraDrawPrize": 500000,
            "prizes": ["3099135", "54485", "7730", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69177132
          },
          {
            "id": 689,
            "drawDate": "2009-07-18T18:00:00",
            "numbers": [2, 8, 10, 15, 23, 27, 28],
            "addNumbers": [29, 32, 33],
            "extraDrawText": "Spillerkortnummer 337 499 795",
            "extraDrawPrize": 500000,
            "prizes": ["3108495", "33810", "4605", "155", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69386092
          },
          {
            "id": 690,
            "drawDate": "2009-07-25T18:00:00",
            "numbers": [2, 5, 8, 10, 15, 18, 20],
            "addNumbers": [3, 26, 30],
            "extraDrawText": "Spillerkortnummer 359 848 005",
            "extraDrawPrize": 500000,
            "prizes": ["1016670", "41205", "4110", "145", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68080828
          },
          {
            "id": 691,
            "drawDate": "2009-08-01T18:00:00",
            "numbers": [7, 11, 12, 15, 16, 22, 31],
            "addNumbers": [1, 13, 24],
            "extraDrawText": "Spillerkortnummer 350 297 116",
            "extraDrawPrize": 500000,
            "prizes": ["5039915", "46760", "7825", "215", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67498916
          },
          {
            "id": 692,
            "drawDate": "2009-08-08T18:00:00",
            "numbers": [11, 12, 14, 16, 17, 20, 27],
            "addNumbers": [19, 22, 30],
            "extraDrawText": "Spillerkortnummer 339 406 667",
            "extraDrawPrize": 2000000,
            "prizes": ["Gull-Lotto!", "58585", "7045", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66229328
          },
          {
            "id": 693,
            "drawDate": "2009-08-15T18:00:00",
            "numbers": [7, 8, 9, 16, 30, 33, 34],
            "addNumbers": [3, 15, 31],
            "extraDrawText": "Spillerkortnummer 335 758 739",
            "extraDrawPrize": 2100000,
            "prizes": ["16651595", "65840", "8260", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 82445640
          },
          {
            "id": 694,
            "drawDate": "2009-08-22T18:00:00",
            "numbers": [4, 13, 16, 19, 23, 28, 33],
            "addNumbers": [3, 20, 31],
            "extraDrawText": "Spillerkortnummer 341 380 663",
            "extraDrawPrize": 500000,
            "prizes": ["3947805", "58745", "6405", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70496572
          },
          {
            "id": 695,
            "drawDate": "2009-08-29T18:00:00",
            "numbers": [1, 2, 6, 9, 10, 16, 31],
            "addNumbers": [25, 29, 33],
            "extraDrawText": "Spillerkortnummer 330 966 057",
            "extraDrawPrize": 500000,
            "prizes": ["15595625", "105350", "7545", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69623340
          },
          {
            "id": 696,
            "drawDate": "2009-09-05T18:00:00",
            "numbers": [5, 6, 9, 10, 19, 24, 29],
            "addNumbers": [4, 22, 30],
            "extraDrawText": "Spillerkortnummer 352 329 709",
            "extraDrawPrize": 2700000,
            "prizes": ["3887850", "53945", "6275", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69425972
          },
          {
            "id": 697,
            "drawDate": "2009-09-12T18:00:00",
            "numbers": [4, 5, 16, 17, 20, 23, 30],
            "addNumbers": [9, 22, 33],
            "extraDrawText": "Spillerkortnummer 366 553 274",
            "extraDrawPrize": 2400000,
            "prizes": ["2844075", "65375", "7530", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 76180656
          },
          {
            "id": 698,
            "drawDate": "2009-09-19T18:00:00",
            "numbers": [1, 5, 11, 22, 24, 32, 34],
            "addNumbers": [14, 17, 23],
            "extraDrawText": "Spillerkortnummer 334 288 259",
            "extraDrawPrize": 1500000,
            "prizes": ["5774755", "70585", "7820", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 77340488
          },
          {
            "id": 699,
            "drawDate": "2009-09-26T18:00:00",
            "numbers": [6, 12, 14, 15, 17, 28, 33],
            "addNumbers": [13, 16, 32],
            "extraDrawText": "Spillerkortnummer 351 407 145",
            "extraDrawPrize": 2400000,
            "prizes": ["5749720", "79065", "8275", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 77005232
          },
          {
            "id": 700,
            "drawDate": "2009-10-03T18:00:00",
            "numbers": [1, 12, 18, 25, 28, 29, 30],
            "addNumbers": [6, 7, 23],
            "extraDrawText": "Spillerkortnummer 333 960 449",
            "extraDrawPrize": 500000,
            "prizes": ["5735485", "48535", "6605", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 76814564
          },
          {
            "id": 701,
            "drawDate": "2009-10-10T18:00:00",
            "numbers": [4, 5, 17, 24, 27, 31, 34],
            "addNumbers": [7, 30, 32],
            "extraDrawText": "Spillerkortnummer 280 919 914",
            "extraDrawPrize": 2200000,
            "prizes": ["5689865", "65395", "8430", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 76203556
          },
          {
            "id": 702,
            "drawDate": "2009-10-17T18:00:00",
            "numbers": [2, 7, 9, 15, 16, 17, 28],
            "addNumbers": [29, 33, 34],
            "extraDrawText": "Spillerkortnummer 370 072 652",
            "extraDrawPrize": 2100000,
            "prizes": ["15544475", "53920", "6230", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69394984
          },
          {
            "id": 703,
            "drawDate": "2009-10-24T18:00:00",
            "numbers": [6, 10, 13, 16, 21, 23, 29],
            "addNumbers": [2, 22, 30],
            "extraDrawText": "Spillerkortnummer 369 410 562",
            "extraDrawPrize": 2300000,
            "prizes": ["7803130", "62590", "6925", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69670840
          },
          {
            "id": 704,
            "drawDate": "2009-10-31T18:00:00",
            "numbers": [2, 5, 9, 21, 26, 27, 32],
            "addNumbers": [1, 3, 34],
            "extraDrawText": "Spillerkortnummer 363 636 847",
            "extraDrawPrize": 2000000,
            "prizes": ["7754095", "62200", "5025", "170", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69233000
          },
          {
            "id": 705,
            "drawDate": "2009-11-07T18:00:00",
            "numbers": [11, 12, 13, 20, 22, 23, 29],
            "addNumbers": [3, 8, 19],
            "extraDrawText": "Spillerkortnummer 353 922 525",
            "extraDrawPrize": 2100000,
            "prizes": ["7657435", "83640", "7560", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68369964
          },
          {
            "id": 706,
            "drawDate": "2009-11-14T18:00:00",
            "numbers": [2, 5, 6, 13, 17, 18, 24],
            "addNumbers": [4, 9, 16],
            "extraDrawText": "Spillerkortnummer 360 062 592",
            "extraDrawPrize": 2000000,
            "prizes": ["3934030", "57705", "7355", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70250556
          },
          {
            "id": 707,
            "drawDate": "2009-11-21T18:00:00",
            "numbers": [2, 6, 7, 12, 13, 17, 18],
            "addNumbers": [16, 20, 32],
            "extraDrawText": "Spillerkortnummer 361 335 672",
            "extraDrawPrize": 2300000,
            "prizes": ["3128375", "48965", "4940", "165", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69829872
          },
          {
            "id": 708,
            "drawDate": "2009-11-28T18:00:00",
            "numbers": [5, 6, 9, 23, 24, 31, 32],
            "addNumbers": [10, 11, 27],
            "extraDrawText": "Spillerkortnummer 355 514 496",
            "extraDrawPrize": 500000,
            "prizes": ["7649500", "77000", "7780", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68299148
          },
          {
            "id": 709,
            "drawDate": "2009-12-05T18:00:00",
            "numbers": [6, 19, 23, 29, 30, 31, 32],
            "addNumbers": [3, 13, 33],
            "extraDrawText": "Spillerkortnummer 355 427 229",
            "extraDrawPrize": 500000,
            "prizes": ["3800105", "84820", "6885", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67859096
          },
          {
            "id": 710,
            "drawDate": "2009-12-12T18:00:00",
            "numbers": [1, 5, 7, 9, 13, 14, 22],
            "addNumbers": [2, 18, 24],
            "extraDrawText": "Spillerkortnummer 359 323 294",
            "extraDrawPrize": 500000,
            "prizes": ["3225165", "41390", "6315", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71990356
          },
          {
            "id": 711,
            "drawDate": "2009-12-19T18:00:00",
            "numbers": [9, 11, 14, 19, 23, 32, 34],
            "addNumbers": [2, 12, 26],
            "extraDrawText": "Spillerkortnummer 366 576 569",
            "extraDrawPrize": 500000,
            "prizes": ["7500000", "64805", "7465", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 91295584
          },
          {
            "id": 712,
            "drawDate": "2009-12-26T18:00:00",
            "numbers": [7, 8, 11, 21, 24, 26, 33],
            "addNumbers": [4, 12, 23],
            "extraDrawText": "Spillerkortnummer 356 840 501",
            "extraDrawPrize": 500000,
            "prizes": ["3845315", "47000", "6270", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68666344
          },
          {
            "id": 713,
            "drawDate": "2010-01-02T18:00:00",
            "numbers": [3, 7, 8, 10, 17, 18, 23],
            "addNumbers": [9, 12, 16],
            "extraDrawText": "Spillerkortnummer 337 310 742",
            "extraDrawPrize": 500000,
            "prizes": ["4180315", "60450", "6600", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74648540
          },
          {
            "id": 714,
            "drawDate": "2010-01-09T18:00:00",
            "numbers": [4, 11, 15, 21, 22, 27, 34],
            "addNumbers": [3, 17, 30],
            "extraDrawText": "Spillerkortnummer 280 200 846",
            "extraDrawPrize": 500000,
            "prizes": ["4007735", "56370", "6360", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71566776
          },
          {
            "id": 715,
            "drawDate": "2010-01-16T18:00:00",
            "numbers": [5, 15, 17, 20, 24, 25, 31],
            "addNumbers": [8, 23, 32],
            "extraDrawText": "Spillerkortnummer 370 348 809",
            "extraDrawPrize": 2000000,
            "prizes": ["3242940", "61205", "7090", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72387140
          },
          {
            "id": 716,
            "drawDate": "2010-01-23T18:00:00",
            "numbers": [1, 2, 11, 23, 24, 25, 32],
            "addNumbers": [5, 9, 22],
            "extraDrawText": "Spillerkortnummer 365 809 971",
            "extraDrawPrize": 500000,
            "prizes": ["15889225", "63725", "9055", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70934056
          },
          {
            "id": 717,
            "drawDate": "2010-01-30T18:00:00",
            "numbers": [9, 13, 14, 16, 26, 28, 32],
            "addNumbers": [2, 3, 4],
            "extraDrawText": "Spillerkortnummer 368 708 596",
            "extraDrawPrize": 2400000,
            "prizes": ["16575620", "39765", "6840", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73998304
          },
          {
            "id": 718,
            "drawDate": "2010-02-06T18:00:00",
            "numbers": [3, 6, 12, 18, 21, 28, 29],
            "addNumbers": [8, 20, 24],
            "extraDrawText": "Spillerkortnummer 364 575 842",
            "extraDrawPrize": 2500000,
            "prizes": ["8374250", "51795", "4975", "160", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74770108
          },
          {
            "id": 719,
            "drawDate": "2010-02-13T18:00:00",
            "numbers": [19, 21, 23, 24, 26, 29, 34],
            "addNumbers": [8, 11, 25],
            "extraDrawText": "Spillerkortnummer 362 030 268",
            "extraDrawPrize": 500000,
            "prizes": ["8191065", "75090", "6565", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73134552
          },
          {
            "id": 720,
            "drawDate": "2010-02-20T18:00:00",
            "numbers": [3, 9, 12, 18, 20, 23, 33],
            "addNumbers": [13, 26, 28],
            "extraDrawText": "Spillerkortnummer 365 429 974",
            "extraDrawPrize": 2600000,
            "prizes": ["16417320", "43895", "6115", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73291620
          },
          {
            "id": 721,
            "drawDate": "2010-02-27T18:00:00",
            "numbers": [2, 7, 15, 24, 26, 29, 30],
            "addNumbers": [3, 8, 28],
            "extraDrawText": "Spillerkortnummer 334 626 376",
            "extraDrawPrize": 500000,
            "prizes": ["5519845", "57440", "7240", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73926496
          },
          {
            "id": 722,
            "drawDate": "2010-03-06T18:00:00",
            "numbers": [1, 5, 8, 11, 12, 21, 34],
            "addNumbers": [3, 13, 20],
            "extraDrawText": "Spillerkortnummer 367 201 825",
            "extraDrawPrize": 2100000,
            "prizes": ["8259985", "62360", "6855", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73749888
          },
          {
            "id": 723,
            "drawDate": "2010-03-13T18:00:00",
            "numbers": [1, 4, 5, 17, 18, 32, 33],
            "addNumbers": [11, 15, 16],
            "extraDrawText": "Spillerkortnummer 369 523 829",
            "extraDrawPrize": 2500000,
            "prizes": ["3281190", "75200", "8380", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73240932
          },
          {
            "id": 724,
            "drawDate": "2010-03-20T18:00:00",
            "numbers": [7, 11, 13, 24, 30, 31, 32],
            "addNumbers": [12, 15, 23],
            "extraDrawText": "Spillerkortnummer 353 332 239",
            "extraDrawPrize": 500000,
            "prizes": ["8214655", "75305", "8485", "245", "60"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73345144
          },
          {
            "id": 725,
            "drawDate": "2010-03-27T18:00:00",
            "numbers": [10, 15, 18, 22, 25, 28, 30],
            "addNumbers": [16, 24, 33],
            "extraDrawText": "Spillerkortnummer 329 479 111",
            "extraDrawPrize": 500000,
            "prizes": ["4233530", "61220", "5405", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 75598800
          },
          {
            "id": 726,
            "drawDate": "2010-04-03T18:00:00",
            "numbers": [5, 6, 7, 14, 18, 22, 29],
            "addNumbers": [2, 20, 32],
            "extraDrawText": "Spillerkortnummer 341 148 638",
            "extraDrawPrize": 2100000,
            "prizes": ["4000000", "52320", "7045", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 80983424
          },
          {
            "id": 727,
            "drawDate": "2010-04-10T18:00:00",
            "numbers": [1, 9, 11, 16, 19, 22, 24],
            "addNumbers": [2, 15, 21],
            "extraDrawText": "Spillerkortnummer 355 385 288",
            "extraDrawPrize": 2500000,
            "prizes": ["5410995", "69445", "6575", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72468692
          },
          {
            "id": 728,
            "drawDate": "2010-04-17T18:00:00",
            "numbers": [1, 7, 15, 17, 24, 29, 32],
            "addNumbers": [14, 22, 27],
            "extraDrawText": "Spillerkortnummer 363 584 794",
            "extraDrawPrize": 500000,
            "prizes": ["4051315", "59425", "7070", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72344940
          },
          {
            "id": 729,
            "drawDate": "2010-04-24T18:00:00",
            "numbers": [1, 2, 5, 7, 26, 27, 30],
            "addNumbers": [9, 20, 23],
            "extraDrawText": "Spillerkortnummer 356 597 467",
            "extraDrawPrize": 2300000,
            "prizes": ["3198305", "72015", "7135", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71390760
          },
          {
            "id": 730,
            "drawDate": "2010-05-01T18:00:00",
            "numbers": [7, 17, 20, 21, 24, 27, 31],
            "addNumbers": [16, 19, 33],
            "extraDrawText": "Spillerkortnummer 368 025 542",
            "extraDrawPrize": 500000,
            "prizes": ["7231510", "59880", "6195", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64567092
          },
          {
            "id": 731,
            "drawDate": "2010-05-08T18:00:00",
            "numbers": [1, 5, 13, 15, 16, 17, 34],
            "addNumbers": [14, 19, 21],
            "extraDrawText": "Spillerkortnummer 352 105 178",
            "extraDrawPrize": 2500000,
            "prizes": ["3007850", "68935", "8160", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67139512
          },
          {
            "id": 732,
            "drawDate": "2010-05-15T18:00:00",
            "numbers": [5, 8, 15, 23, 28, 29, 33],
            "addNumbers": [1, 2, 22],
            "extraDrawText": "Spillerkortnummer 367 582 642",
            "extraDrawPrize": 500000,
            "prizes": ["15493275", "41000", "5750", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69166412
          },
          {
            "id": 733,
            "drawDate": "2010-05-22T18:00:00",
            "numbers": [2, 7, 8, 10, 11, 18, 29],
            "addNumbers": [13, 22, 27],
            "extraDrawText": "Spillerkortnummer 359 210 169",
            "extraDrawPrize": 500000,
            "prizes": ["7483725", "61965", "6755", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66818980
          },
          {
            "id": 734,
            "drawDate": "2010-05-29T18:00:00",
            "numbers": [9, 11, 13, 17, 24, 26, 31],
            "addNumbers": [4, 30, 33],
            "extraDrawText": "Spillerkortnummer 336 053 266",
            "extraDrawPrize": 500000,
            "prizes": ["5015570", "68970", "7280", "205", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67172828
          },
          {
            "id": 735,
            "drawDate": "2010-06-05T18:00:00",
            "numbers": [8, 12, 16, 20, 23, 28, 29],
            "addNumbers": [10, 18, 27],
            "extraDrawText": "Spillerkortnummer 369 396 517",
            "extraDrawPrize": 500000,
            "prizes": ["4854155", "44500", "4795", "150", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65011064
          },
          {
            "id": 736,
            "drawDate": "2010-06-12T18:00:00",
            "numbers": [1, 2, 10, 11, 13, 25, 26],
            "addNumbers": [9, 16, 30],
            "extraDrawText": "Spillerkortnummer 351 299 283",
            "extraDrawPrize": 1500000,
            "prizes": ["4919000", "60125", "7140", "215", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65879524
          },
          {
            "id": 737,
            "drawDate": "2010-06-19T18:00:00",
            "numbers": [1, 3, 7, 10, 23, 25, 32],
            "addNumbers": [18, 21, 28],
            "extraDrawText": "Spillerkortnummer 356 237 104",
            "extraDrawPrize": 2900000,
            "prizes": ["2517535", "61545", "7700", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67434068
          },
          {
            "id": 738,
            "drawDate": "2010-06-26T18:00:00",
            "numbers": [1, 7, 8, 9, 26, 29, 32],
            "addNumbers": [2, 11, 15],
            "extraDrawText": "Spillerkortnummer 360 624 144",
            "extraDrawPrize": 500000,
            "prizes": ["5000000", "66085", "6890", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70110928
          },
          {
            "id": 739,
            "drawDate": "2010-07-03T18:00:00",
            "numbers": [13, 15, 21, 22, 28, 29, 34],
            "addNumbers": [25, 30, 32],
            "extraDrawText": "Spillerkortnummer 355 528 212",
            "extraDrawPrize": 500000,
            "prizes": ["5009305", "64290", "7270", "215", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67088944
          },
          {
            "id": 740,
            "drawDate": "2010-07-10T18:00:00",
            "numbers": [3, 6, 7, 22, 25, 28, 29],
            "addNumbers": [15, 23, 24],
            "extraDrawText": "Spillerkortnummer 367 958 358",
            "extraDrawPrize": 500000,
            "prizes": ["7580730", "57230", "7680", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67685104
          },
          {
            "id": 741,
            "drawDate": "2010-07-17T18:00:00",
            "numbers": [1, 9, 11, 12, 14, 16, 17],
            "addNumbers": [19, 23, 25],
            "extraDrawText": "Spillerkortnummer 362 947 822",
            "extraDrawPrize": 500000,
            "prizes": ["7532770", "77345", "7780", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67256912
          },
          {
            "id": 742,
            "drawDate": "2010-07-24T18:00:00",
            "numbers": [1, 7, 18, 21, 24, 28, 34],
            "addNumbers": [4, 26, 29],
            "extraDrawText": "Spillerkortnummer 358 090 955",
            "extraDrawPrize": 500000,
            "prizes": ["5050995", "86435", "6840", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67647320
          },
          {
            "id": 743,
            "drawDate": "2010-07-31T18:00:00",
            "numbers": [1, 5, 10, 11, 14, 26, 33],
            "addNumbers": [3, 9, 28],
            "extraDrawText": "Spillerkortnummer 356 775 854",
            "extraDrawPrize": 1500000,
            "prizes": ["7691950", "64735", "7320", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68678164
          },
          {
            "id": 744,
            "drawDate": "2010-08-07T18:00:00",
            "numbers": [11, 12, 13, 18, 21, 30, 34],
            "addNumbers": [8, 9, 20],
            "extraDrawText": "Spillerkortnummer 280 666 107",
            "extraDrawPrize": 2100000,
            "prizes": ["4976405", "51785", "8210", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66648296
          },
          {
            "id": 745,
            "drawDate": "2010-08-14T18:00:00",
            "numbers": [1, 3, 5, 13, 14, 27, 34],
            "addNumbers": [9, 17, 23],
            "extraDrawText": "Spillerkortnummer 366 641 109",
            "extraDrawPrize": 2700000,
            "prizes": ["4993680", "46330", "7525", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66879684
          },
          {
            "id": 746,
            "drawDate": "2010-08-21T18:00:00",
            "numbers": [1, 4, 7, 11, 12, 20, 23],
            "addNumbers": [5, 18, 19],
            "extraDrawText": "Spillerkortnummer 358 832 185",
            "extraDrawPrize": 500000,
            "prizes": ["5102865", "46230", "6190", "180", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68342000
          },
          {
            "id": 747,
            "drawDate": "2010-08-28T18:00:00",
            "numbers": [7, 8, 12, 13, 14, 28, 31],
            "addNumbers": [25, 30, 33],
            "extraDrawText": "Spillerkortnummer 339 641 086",
            "extraDrawPrize": 500000,
            "prizes": ["3847610", "71830", "8465", "215", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68707328
          },
          {
            "id": 748,
            "drawDate": "2010-09-04T18:00:00",
            "numbers": [8, 15, 16, 26, 27, 30, 34],
            "addNumbers": [19, 23, 24],
            "extraDrawText": "Spillerkortnummer 366 528 351",
            "extraDrawPrize": 2000000,
            "prizes": ["5003510", "46985", "6420", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67011340
          },
          {
            "id": 749,
            "drawDate": "2010-09-11T18:00:00",
            "numbers": [11, 14, 15, 19, 23, 27, 30],
            "addNumbers": [3, 6, 10],
            "extraDrawText": "Spillerkortnummer 280 388 358",
            "extraDrawPrize": 2500000,
            "prizes": ["7625905", "43985", "6795", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68088444
          },
          {
            "id": 750,
            "drawDate": "2010-09-18T18:00:00",
            "numbers": [4, 5, 6, 22, 23, 26, 32],
            "addNumbers": [11, 20, 30],
            "extraDrawText": "Spillerkortnummer 362 400 955",
            "extraDrawPrize": 500000,
            "prizes": ["3206175", "67460", "7235", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71566464
          },
          {
            "id": 751,
            "drawDate": "2010-09-25T18:00:00",
            "numbers": [11, 13, 16, 26, 29, 30, 33],
            "addNumbers": [10, 15, 21],
            "extraDrawText": "Spillerkortnummer 370 659 378",
            "extraDrawPrize": 1300000,
            "prizes": ["8088795", "63885", "7505", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72221392
          },
          {
            "id": 752,
            "drawDate": "2010-10-02T18:00:00",
            "numbers": [3, 4, 26, 27, 29, 33, 34],
            "addNumbers": [8, 10, 18],
            "extraDrawText": "Spillerkortnummer 363 254 455",
            "extraDrawPrize": 1800000,
            "prizes": ["15861485", "79835", "7670", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70810220
          },
          {
            "id": 753,
            "drawDate": "2010-10-09T18:00:00",
            "numbers": [6, 8, 22, 24, 28, 31, 34],
            "addNumbers": [1, 5, 25],
            "extraDrawText": "Spillerkortnummer 352 394 322",
            "extraDrawPrize": 2100000,
            "prizes": ["3165055", "52755", "6685", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70648652
          },
          {
            "id": 754,
            "drawDate": "2010-10-16T18:00:00",
            "numbers": [3, 9, 12, 15, 16, 24, 30],
            "addNumbers": [1, 8, 27],
            "extraDrawText": "Spillerkortnummer 362 390 488",
            "extraDrawPrize": 500000,
            "prizes": ["4004230", "48945", "6610", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71504184
          },
          {
            "id": 755,
            "drawDate": "2010-10-23T18:00:00",
            "numbers": [2, 8, 10, 18, 19, 21, 22],
            "addNumbers": [3, 4, 24],
            "extraDrawText": "Spillerkortnummer 367 418 265",
            "extraDrawPrize": 500000,
            "prizes": ["15835150", "65560", "6470", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70692644
          },
          {
            "id": 756,
            "drawDate": "2010-10-30T18:00:00",
            "numbers": [4, 11, 16, 17, 22, 23, 25],
            "addNumbers": [5, 9, 33],
            "extraDrawText": "Spillerkortnummer 350 948 357",
            "extraDrawPrize": 1400000,
            "prizes": ["7765980", "78175", "6605", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69339140
          },
          {
            "id": 757,
            "drawDate": "2010-11-06T18:00:00",
            "numbers": [4, 6, 8, 17, 30, 31, 34],
            "addNumbers": [12, 14, 32],
            "extraDrawText": "Spillerkortnummer 341 751 438",
            "extraDrawPrize": 1800000,
            "prizes": ["15610180", "77055", "8150", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69688304
          },
          {
            "id": 758,
            "drawDate": "2010-11-13T18:00:00",
            "numbers": [1, 5, 6, 7, 10, 12, 20],
            "addNumbers": [8, 15, 28],
            "extraDrawText": "Spillerkortnummer 366 112 339",
            "extraDrawPrize": 500000,
            "prizes": ["2318215", "41655", "5075", "165", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72444300
          },
          {
            "id": 759,
            "drawDate": "2010-11-20T18:00:00",
            "numbers": [6, 7, 18, 22, 26, 32, 33],
            "addNumbers": [11, 12, 15],
            "extraDrawText": "Spillerkortnummer 366 116 826",
            "extraDrawPrize": 2000000,
            "prizes": ["Gull-Lotto!", "57940", "6710", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73564708
          },
          {
            "id": 760,
            "drawDate": "2010-11-27T18:00:00",
            "numbers": [6, 12, 14, 15, 17, 18, 22],
            "addNumbers": [19, 26, 31],
            "extraDrawText": "Spillerkortnummer 357 576 008",
            "extraDrawPrize": 500000,
            "prizes": ["34508370", "71200", "7060", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 80490528
          },
          {
            "id": 761,
            "drawDate": "2010-12-04T18:00:00",
            "numbers": [3, 6, 7, 14, 15, 19, 32],
            "addNumbers": [5, 24, 25],
            "extraDrawText": "Spillerkortnummer 370 403 577",
            "extraDrawPrize": 2300000,
            "prizes": ["Gull-Lotto!", "65120", "7560", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73619468
          },
          {
            "id": 762,
            "drawDate": "2010-12-11T18:00:00",
            "numbers": [8, 12, 24, 26, 27, 30, 33],
            "addNumbers": [2, 15, 23],
            "extraDrawText": "Spillerkortnummer 363 267 611",
            "extraDrawPrize": 500000,
            "prizes": ["8738190", "84625", "8400", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 82419652
          },
          {
            "id": 763,
            "drawDate": "2010-12-18T18:00:00",
            "numbers": [2, 7, 11, 13, 14, 17, 25],
            "addNumbers": [5, 30, 32],
            "extraDrawText": "Spillerkortnummer 366 371 246",
            "extraDrawPrize": 500000,
            "prizes": ["7500000", "56000", "6640", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 85706660
          },
          {
            "id": 764,
            "drawDate": "2010-12-25T18:00:00",
            "numbers": [11, 13, 19, 20, 21, 22, 24],
            "addNumbers": [12, 18, 23],
            "extraDrawText": "Spillerkortnummer 350 028 187",
            "extraDrawPrize": 500000,
            "prizes": ["7971870", "48720", "8130", "215", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71177448
          },
          {
            "id": 765,
            "drawDate": "2011-01-01T18:00:00",
            "numbers": [10, 13, 18, 20, 26, 31, 34],
            "addNumbers": [3, 12, 28],
            "extraDrawText": "Spillerkortnummer 357 782 586",
            "extraDrawPrize": 500000,
            "prizes": ["5243615", "73415", "9590", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70227036
          },
          {
            "id": 766,
            "drawDate": "2011-01-08T18:00:00",
            "numbers": [1, 6, 7, 13, 14, 27, 31],
            "addNumbers": [4, 12, 25],
            "extraDrawText": "Spillerkortnummer 367 841 361",
            "extraDrawPrize": 500000,
            "prizes": ["5322805", "62105", "6995", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71287616
          },
          {
            "id": 767,
            "drawDate": "2011-01-15T18:00:00",
            "numbers": [2, 10, 11, 17, 22, 30, 31],
            "addNumbers": [16, 32, 33],
            "extraDrawText": "Spillerkortnummer 368 214 147",
            "extraDrawPrize": 500000,
            "prizes": ["5302745", "65860", "6855", "205", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71018960
          },
          {
            "id": 768,
            "drawDate": "2011-01-22T18:00:00",
            "numbers": [4, 6, 10, 20, 26, 28, 31],
            "addNumbers": [22, 29, 32],
            "extraDrawText": "Spillerkortnummer 335 841 278",
            "extraDrawPrize": 500000,
            "prizes": ["5211490", "83610", "7985", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69796744
          },
          {
            "id": 769,
            "drawDate": "2011-01-29T18:00:00",
            "numbers": [3, 9, 10, 12, 15, 27, 32],
            "addNumbers": [19, 31, 33],
            "extraDrawText": "Spillerkortnummer 374 053 749",
            "extraDrawPrize": 1700000,
            "prizes": ["5203310", "58925", "6475", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69687212
          },
          {
            "id": 770,
            "drawDate": "2011-02-05T18:00:00",
            "numbers": [2, 4, 8, 9, 10, 21, 33],
            "addNumbers": [17, 30, 34],
            "extraDrawText": "Spillerkortnummer 378 764 853",
            "extraDrawPrize": 500000,
            "prizes": ["7813250", "49520", "6000", "175", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69761196
          },
          {
            "id": 771,
            "drawDate": "2011-02-12T18:00:00",
            "numbers": [4, 10, 11, 16, 21, 23, 24],
            "addNumbers": [3, 22, 32],
            "extraDrawText": "Spillerkortnummer 374 178 793",
            "extraDrawPrize": 2700000,
            "prizes": ["5179080", "51130", "6480", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69362732
          },
          {
            "id": 772,
            "drawDate": "2011-02-19T18:00:00",
            "numbers": [1, 11, 15, 27, 28, 29, 31],
            "addNumbers": [5, 7, 23],
            "extraDrawText": "Spillerkortnummer 281 013 605",
            "extraDrawPrize": 500000,
            "prizes": ["5253220", "50565", "7195", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70355672
          },
          {
            "id": 773,
            "drawDate": "2011-02-26T18:00:00",
            "numbers": [3, 4, 6, 15, 21, 27, 34],
            "addNumbers": [5, 16, 20],
            "extraDrawText": "Spillerkortnummer 353 847 588",
            "extraDrawPrize": 2300000,
            "prizes": ["3069595", "43775", "6810", "185", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68517776
          },
          {
            "id": 774,
            "drawDate": "2011-03-05T18:00:00",
            "numbers": [3, 6, 10, 15, 20, 22, 23],
            "addNumbers": [24, 26, 30],
            "extraDrawText": "Spillerkortnummer 368 571 937",
            "extraDrawPrize": 500000,
            "prizes": ["3017360", "50295", "5325", "165", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67351804
          },
          {
            "id": 776,
            "drawDate": "2011-03-19T18:00:00",
            "numbers": [1, 6, 9, 10, 16, 33, 34],
            "addNumbers": [19, 29, 30],
            "extraDrawText": "Spillerkortnummer 352 676 399",
            "extraDrawPrize": 2300000,
            "prizes": ["7719725", "70770", "8225", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68926148
          },
          {
            "id": 777,
            "drawDate": "2011-03-26T18:00:00",
            "numbers": [6, 8, 21, 22, 25, 30, 32],
            "addNumbers": [1, 10, 13],
            "extraDrawText": "Spillerkortnummer 370 102 808",
            "extraDrawPrize": 500000,
            "prizes": ["7588600", "59025", "8085", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67755372
          },
          {
            "id": 778,
            "drawDate": "2011-04-02T18:00:00",
            "numbers": [1, 11, 13, 20, 21, 27, 33],
            "addNumbers": [14, 15, 25],
            "extraDrawText": "Spillerkortnummer 366 819 489",
            "extraDrawPrize": 500000,
            "prizes": ["3786930", "67040", "6610", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67623820
          },
          {
            "id": 779,
            "drawDate": "2011-04-09T18:00:00",
            "numbers": [4, 12, 17, 20, 23, 27, 33],
            "addNumbers": [28, 30, 32],
            "extraDrawText": "Spillerkortnummer 352 261 758",
            "extraDrawPrize": 2500000,
            "prizes": ["3679195", "51050", "5715", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65699944
          },
          {
            "id": 780,
            "drawDate": "2011-04-16T18:00:00",
            "numbers": [8, 14, 16, 17, 19, 24, 33],
            "addNumbers": [15, 20, 21],
            "extraDrawText": "Spillerkortnummer 354 115 946",
            "extraDrawPrize": 2500000,
            "prizes": ["3134620", "103155", "8465", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69969204
          },
          {
            "id": 781,
            "drawDate": "2011-04-23T18:00:00",
            "numbers": [1, 2, 4, 11, 18, 20, 23],
            "addNumbers": [10, 15, 28],
            "extraDrawText": "Spillerkortnummer 375 675 423",
            "extraDrawPrize": 1800000,
            "prizes": ["5000000", "50210", "7015", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 75098096
          },
          {
            "id": 782,
            "drawDate": "2011-04-30T18:00:00",
            "numbers": [15, 20, 25, 26, 29, 30, 31],
            "addNumbers": [3, 14, 22],
            "extraDrawText": "Spillerkortnummer 335 836 276",
            "extraDrawPrize": 1800000,
            "prizes": ["3728950", "69615", "8265", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66588444
          },
          {
            "id": 783,
            "drawDate": "2011-05-07T18:00:00",
            "numbers": [4, 7, 10, 12, 24, 28, 33],
            "addNumbers": [9, 29, 31],
            "extraDrawText": "Spillerkortnummer 363 210 394",
            "extraDrawPrize": 2900000,
            "prizes": ["14947155", "73785", "7555", "205", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66728376
          },
          {
            "id": 784,
            "drawDate": "2011-05-14T18:00:00",
            "numbers": [5, 9, 12, 14, 20, 26, 27],
            "addNumbers": [11, 19, 33],
            "extraDrawText": "Spillerkortnummer 364 949 724",
            "extraDrawPrize": 500000,
            "prizes": ["3136425", "51605", "6320", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70009536
          },
          {
            "id": 785,
            "drawDate": "2011-05-21T18:00:00",
            "numbers": [2, 9, 11, 13, 22, 25, 30],
            "addNumbers": [18, 19, 24],
            "extraDrawText": "Spillerkortnummer 355 147 575",
            "extraDrawPrize": 500000,
            "prizes": ["2511195", "62380", "5720", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67264248
          },
          {
            "id": 786,
            "drawDate": "2011-05-28T18:00:00",
            "numbers": [2, 3, 20, 22, 25, 26, 34],
            "addNumbers": [13, 21, 33],
            "extraDrawText": "Spillerkortnummer 361 092 476",
            "extraDrawPrize": 1900000,
            "prizes": ["1842435", "68790", "8675", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65801328
          },
          {
            "id": 787,
            "drawDate": "2011-06-04T18:00:00",
            "numbers": [8, 11, 15, 22, 30, 32, 33],
            "addNumbers": [6, 20, 28],
            "extraDrawText": "Spillerkortnummer 366 999 693",
            "extraDrawPrize": 2300000,
            "prizes": ["7214305", "44090", "6085", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64413480
          },
          {
            "id": 788,
            "drawDate": "2011-06-11T18:00:00",
            "numbers": [9, 11, 13, 24, 26, 28, 31],
            "addNumbers": [25, 30, 34],
            "extraDrawText": "Spillerkortnummer 378 708 027",
            "extraDrawPrize": 1600000,
            "prizes": ["14747945", "86035", "6580", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65839044
          },
          {
            "id": 789,
            "drawDate": "2011-06-18T18:00:00",
            "numbers": [3, 5, 13, 15, 17, 23, 25],
            "addNumbers": [14, 28, 31],
            "extraDrawText": "Spillerkortnummer 354 638 405",
            "extraDrawPrize": 500000,
            "prizes": ["3806685", "51425", "4820", "180", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67976520
          },
          {
            "id": 790,
            "drawDate": "2011-06-25T18:00:00",
            "numbers": [2, 7, 8, 21, 23, 30, 32],
            "addNumbers": [4, 20, 24],
            "extraDrawText": "Spillerkortnummer 356 022 935",
            "extraDrawPrize": 500000,
            "prizes": ["15647335", "59065", "7790", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69854176
          },
          {
            "id": 791,
            "drawDate": "2011-07-02T18:00:00",
            "numbers": [6, 12, 14, 19, 29, 30, 31],
            "addNumbers": [18, 21, 26],
            "extraDrawText": "Spillerkortnummer 379 519 648",
            "extraDrawPrize": 500000,
            "prizes": ["5206850", "60750", "7910", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69734660
          },
          {
            "id": 792,
            "drawDate": "2011-07-09T18:00:00",
            "numbers": [5, 6, 7, 8, 10, 14, 15],
            "addNumbers": [11, 21, 27],
            "extraDrawText": "Spillerkortnummer 323 476 976",
            "extraDrawPrize": 1800000,
            "prizes": ["5168945", "68630", "6880", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69226972
          },
          {
            "id": 793,
            "drawDate": "2011-07-16T18:00:00",
            "numbers": [3, 7, 10, 14, 18, 24, 30],
            "addNumbers": [9, 13, 15],
            "extraDrawText": "Spillerkortnummer 359 320 597",
            "extraDrawPrize": 1900000,
            "prizes": ["3089955", "55080", "6490", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 68972296
          },
          {
            "id": 794,
            "drawDate": "2011-07-23T18:00:00",
            "numbers": [9, 13, 19, 21, 25, 28, 33],
            "addNumbers": [7, 12, 27],
            "extraDrawText": "Spillerkortnummer 368 771 401",
            "extraDrawPrize": 2200000,
            "prizes": ["3018155", "66785", "6490", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67369556
          },
          {
            "id": 795,
            "drawDate": "2011-07-30T18:00:00",
            "numbers": [6, 10, 17, 19, 28, 31, 33],
            "addNumbers": [1, 3, 7],
            "extraDrawText": "Spillerkortnummer 370 967 142",
            "extraDrawPrize": 500000,
            "prizes": ["3607190", "60715", "7865", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64414188
          },
          {
            "id": 796,
            "drawDate": "2011-08-06T18:00:00",
            "numbers": [2, 6, 13, 14, 16, 19, 23],
            "addNumbers": [4, 11, 31],
            "extraDrawText": "Spillerkortnummer 354 880 408",
            "extraDrawPrize": 2200000,
            "prizes": ["14369050", "78475", "7815", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 64147552
          },
          {
            "id": 797,
            "drawDate": "2011-08-13T18:00:00",
            "numbers": [1, 4, 9, 11, 15, 16, 34],
            "addNumbers": [7, 18, 30],
            "extraDrawText": "Spillerkortnummer 362 070 698",
            "extraDrawPrize": 500000,
            "prizes": ["4862360", "63465", "7930", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65120904
          },
          {
            "id": 798,
            "drawDate": "2011-08-20T18:00:00",
            "numbers": [1, 11, 12, 15, 23, 30, 32],
            "addNumbers": [3, 21, 22],
            "extraDrawText": "Spillerkortnummer 367 653 798",
            "extraDrawPrize": 2000000,
            "prizes": ["3028025", "84485", "7430", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67589920
          },
          {
            "id": 799,
            "drawDate": "2011-08-27T18:00:00",
            "numbers": [2, 6, 15, 20, 23, 24, 32],
            "addNumbers": [7, 19, 34],
            "extraDrawText": "Spillerkortnummer 360 885 286",
            "extraDrawPrize": 2200000,
            "prizes": ["3775320", "68005", "6400", "200", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 67416472
          },
          {
            "id": 800,
            "drawDate": "2011-09-03T18:00:00",
            "numbers": [5, 7, 9, 13, 16, 28, 34],
            "addNumbers": [6, 12, 15],
            "extraDrawText": "Spillerkortnummer 338 542 503",
            "extraDrawPrize": 500000,
            "prizes": ["7954015", "71640", "7085", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71018024
          },
          {
            "id": 801,
            "drawDate": "2011-09-10T18:00:00",
            "numbers": [4, 6, 9, 13, 18, 21, 31],
            "addNumbers": [26, 27, 32],
            "extraDrawText": "Spillerkortnummer 369 889 381",
            "extraDrawPrize": 1800000,
            "prizes": ["Gull-Lotto!", "47425", "6020", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 74231700
          },
          {
            "id": 802,
            "drawDate": "2011-09-17T18:00:00",
            "numbers": [2, 6, 10, 16, 20, 23, 27],
            "addNumbers": [9, 19, 22],
            "extraDrawText": "Spillerkortnummer 364 568 846",
            "extraDrawPrize": 500000,
            "prizes": ["4976705", "38000", "4215", "160", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 81290464
          },
          {
            "id": 803,
            "drawDate": "2011-09-24T18:00:00",
            "numbers": [1, 4, 18, 21, 25, 30, 33],
            "addNumbers": [2, 24, 28],
            "extraDrawText": "Spillerkortnummer 367 402 964",
            "extraDrawPrize": 1700000,
            "prizes": ["8257605", "58880", "7050", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 73728660
          },
          {
            "id": 804,
            "drawDate": "2011-10-01T18:00:00",
            "numbers": [8, 13, 14, 15, 20, 26, 32],
            "addNumbers": [16, 24, 34],
            "extraDrawText": "Spillerkortnummer 355 190 861",
            "extraDrawPrize": 500000,
            "prizes": ["772895", "67195", "5130", "185", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 72458940
          },
          {
            "id": 805,
            "drawDate": "2011-10-08T18:00:00",
            "numbers": [7, 9, 20, 23, 26, 28, 31],
            "addNumbers": [5, 15, 24],
            "extraDrawText": "Spillerkortnummer 360 312 204",
            "extraDrawPrize": 500000,
            "prizes": ["2640325", "47285", "7435", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70722992
          },
          {
            "id": 806,
            "drawDate": "2011-10-15T18:00:00",
            "numbers": [2, 3, 7, 8, 19, 22, 32],
            "addNumbers": [15, 21, 24],
            "extraDrawText": "Spillerkortnummer 368 489 897",
            "extraDrawPrize": 1900000,
            "prizes": ["3929655", "70785", "7055", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70172420
          },
          {
            "id": 807,
            "drawDate": "2011-10-22T18:00:00",
            "numbers": [1, 10, 12, 14, 15, 22, 23],
            "addNumbers": [17, 30, 34],
            "extraDrawText": "Spillerkortnummer 378 762 716",
            "extraDrawPrize": 2300000,
            "prizes": ["7877630", "62220", "7220", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70336004
          },
          {
            "id": 808,
            "drawDate": "2011-10-29T18:00:00",
            "numbers": [1, 9, 10, 16, 23, 24, 33],
            "addNumbers": [4, 11, 32],
            "extraDrawText": "Spillerkortnummer 368 263 718",
            "extraDrawPrize": 1200000,
            "prizes": ["5227325", "59195", "7135", "210", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70008864
          },
          {
            "id": 809,
            "drawDate": "2011-11-05T18:00:00",
            "numbers": [1, 5, 7, 10, 14, 17, 25],
            "addNumbers": [12, 16, 21],
            "extraDrawText": "Spillerkortnummer 365 748 018",
            "extraDrawPrize": 2200000,
            "prizes": ["3893090", "49965", "6635", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69519536
          },
          {
            "id": 810,
            "drawDate": "2011-11-12T18:00:00",
            "numbers": [3, 7, 9, 20, 23, 29, 31],
            "addNumbers": [17, 22, 30],
            "extraDrawText": "Spillerkortnummer 361 084 073",
            "extraDrawPrize": 500000,
            "prizes": ["3907640", "59000", "6245", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69779312
          },
          {
            "id": 811,
            "drawDate": "2011-11-19T18:00:00",
            "numbers": [8, 9, 16, 17, 18, 20, 25],
            "addNumbers": [21, 23, 26],
            "extraDrawText": "Spillerkortnummer 369 105 976",
            "extraDrawPrize": 500000,
            "prizes": ["15828555", "56430", "7145", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 70663192
          },
          {
            "id": 812,
            "drawDate": "2011-11-26T18:00:00",
            "numbers": [11, 14, 18, 20, 28, 29, 32],
            "addNumbers": [4, 15, 27],
            "extraDrawText": "Spillerkortnummer 376 141 216",
            "extraDrawPrize": 2200000,
            "prizes": ["15464190", "47825", "7130", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69036564
          },
          {
            "id": 813,
            "drawDate": "2011-12-03T18:00:00",
            "numbers": [2, 6, 14, 18, 22, 24, 31],
            "addNumbers": [4, 17, 19],
            "extraDrawText": "Spillerkortnummer 341 544 541",
            "extraDrawPrize": 500000,
            "prizes": ["3883465", "54620", "6790", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 69347660
          },
          {
            "id": 814,
            "drawDate": "2011-12-10T18:00:00",
            "numbers": [7, 9, 14, 25, 28, 31, 33],
            "addNumbers": [11, 12, 26],
            "extraDrawText": "Spillerkortnummer 281 024 616",
            "extraDrawPrize": 1700000,
            "prizes": ["7869965", "74820", "8350", "220", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 70267576,
            "totalNumberOfWinners": 120097,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280808,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 815,
            "drawDate": "2011-12-17T18:00:00",
            "numbers": [2, 7, 9, 12, 15, 24, 25],
            "addNumbers": [4, 16, 27],
            "extraDrawText": "Spillerkortnummer 352 820 676",
            "extraDrawPrize": 1300000,
            "prizes": ["3291755", "52155", "6200", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 73476680,
            "totalNumberOfWinners": 141756,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280832,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 816,
            "drawDate": "2011-12-24T16:00:00",
            "numbers": [13, 15, 25, 27, 28, 33, 34],
            "addNumbers": [4, 10, 21],
            "extraDrawText": "Spillerkortnummer 322 710 973",
            "extraDrawPrize": 2500000,
            "prizes": ["4000000", "67265", "7870", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 85403104,
            "totalNumberOfWinners": 151785,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280836,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 817,
            "drawDate": "2011-12-31T16:00:00",
            "numbers": [2, 5, 8, 13, 21, 22, 30],
            "addNumbers": [7, 10, 24],
            "extraDrawText": "Spillerkortnummer 362 840 349",
            "extraDrawPrize": 500000,
            "prizes": ["5722965", "55085", "6590", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 76646872,
            "totalNumberOfWinners": 146990,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280838,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 818,
            "drawDate": "2012-01-07T18:00:00",
            "numbers": [3, 5, 15, 23, 24, 28, 32],
            "addNumbers": [9, 26, 31],
            "prizes": ["6624560", "75495", "5500", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 76363852,
            "totalNumberOfWinners": 142157,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280848,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 819,
            "drawDate": "2012-01-14T18:00:00",
            "numbers": [1, 4, 19, 20, 27, 30, 34],
            "addNumbers": [15, 29, 31],
            "prizes": ["13012765", "101955", "7755", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 75001556,
            "totalNumberOfWinners": 125539,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280854,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 820,
            "drawDate": "2012-01-21T18:00:00",
            "numbers": [4, 8, 9, 14, 16, 24, 28],
            "addNumbers": [13, 18, 30],
            "prizes": ["2588850", "110010", "5270", "165", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 74606760,
            "totalNumberOfWinners": 143750,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280858,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 821,
            "drawDate": "2012-01-28T18:00:00",
            "numbers": [2, 6, 10, 19, 20, 23, 31],
            "addNumbers": [3, 14, 25],
            "prizes": ["Gull-Lotto!", "85010", "5400", "190", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 71333904,
            "totalNumberOfWinners": 129127,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280848,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 822,
            "drawDate": "2012-02-04T18:00:00",
            "numbers": [9, 16, 17, 23, 25, 32, 34],
            "addNumbers": [3, 5, 7],
            "prizes": ["5122545", "102110", "6620", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 76289984,
            "totalNumberOfWinners": 135832,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280848,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 823,
            "drawDate": "2012-02-11T18:00:00",
            "numbers": [1, 12, 14, 15, 23, 29, 30],
            "addNumbers": [2, 9, 19],
            "prizes": ["4169560", "142550", "7045", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 72096192,
            "totalNumberOfWinners": 126013,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280852,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 824,
            "drawDate": "2012-02-18T18:00:00",
            "numbers": [4, 7, 11, 21, 26, 31, 33],
            "addNumbers": [18, 20, 22],
            "prizes": ["4175195", "66110", "5680", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 72193580,
            "totalNumberOfWinners": 136783,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280858,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 825,
            "drawDate": "2012-02-25T18:00:00",
            "numbers": [5, 7, 12, 13, 22, 25, 29],
            "addNumbers": [4, 30, 32],
            "prizes": ["1358860", "98910", "5370", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 70488520,
            "totalNumberOfWinners": 130962,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280862,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 826,
            "drawDate": "2012-03-03T18:00:00",
            "numbers": [8, 10, 11, 16, 21, 28, 32],
            "addNumbers": [17, 27, 33],
            "prizes": ["6016245", "75415", "4680", "165", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 69351544,
            "totalNumberOfWinners": 139858,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280866,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 827,
            "drawDate": "2012-03-10T18:00:00",
            "numbers": [7, 8, 9, 15, 17, 18, 28],
            "addNumbers": [6, 20, 21],
            "prizes": ["2380345", "71045", "6085", "195", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 68597896,
            "totalNumberOfWinners": 136837,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280880,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 828,
            "drawDate": "2012-03-17T18:00:00",
            "numbers": [1, 8, 9, 10, 12, 31, 33],
            "addNumbers": [2, 14, 17],
            "prizes": ["5980190", "130375", "7745", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 68935944,
            "totalNumberOfWinners": 114928,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280884,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 829,
            "drawDate": "2012-03-24T18:00:00",
            "numbers": [4, 18, 19, 20, 26, 31, 34],
            "addNumbers": [3, 21, 33],
            "prizes": ["3966940", "119350", "8290", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 68592708,
            "totalNumberOfWinners": 107971,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280890,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 830,
            "drawDate": "2012-03-31T18:00:00",
            "numbers": [1, 6, 16, 20, 21, 27, 33],
            "addNumbers": [14, 17, 32],
            "prizes": ["4118965", "121495", "6190", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 71221372,
            "totalNumberOfWinners": 127453,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280894,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 831,
            "drawDate": "2012-04-07T18:00:00",
            "numbers": [2, 9, 16, 19, 30, 31, 32],
            "addNumbers": [21, 28, 34],
            "prizes": ["4732220", "97515", "5665", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 81825156,
            "totalNumberOfWinners": 147426,
            "superlottoResult": {
              "id": 831,
              "drawDate": "2012-04-07T18:00:00",
              "numberOfWinners": 50,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280906,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 832,
            "drawDate": "2012-04-14T18:00:00",
            "numbers": [3, 11, 20, 24, 27, 28, 30],
            "addNumbers": [1, 31, 34],
            "prizes": ["1751125", "96040", "6445", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 70650656,
            "totalNumberOfWinners": 120615,
            "superlottoResult": {
              "id": 831,
              "drawDate": "2012-04-07T18:00:00",
              "numberOfWinners": 50,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280925,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 833,
            "drawDate": "2012-04-21T18:00:00",
            "numbers": [3, 5, 10, 11, 22, 24, 30],
            "addNumbers": [1, 15, 33],
            "prizes": ["3061580", "104080", "5975", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 70584048,
            "totalNumberOfWinners": 130994,
            "superlottoResult": {
              "id": 831,
              "drawDate": "2012-04-07T18:00:00",
              "numberOfWinners": 50,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280929,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 834,
            "drawDate": "2012-04-28T18:00:00",
            "numbers": [5, 7, 11, 27, 31, 32, 34],
            "addNumbers": [2, 6, 22],
            "prizes": ["3997775", "107390", "6880", "230", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 69125804,
            "totalNumberOfWinners": 115372,
            "superlottoResult": {
              "id": 831,
              "drawDate": "2012-04-07T18:00:00",
              "numberOfWinners": 50,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280943,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 835,
            "drawDate": "2012-05-05T18:00:00",
            "numbers": [2, 7, 8, 12, 18, 28, 32],
            "addNumbers": [6, 13, 26],
            "prizes": ["1922990", "47420", "3395", "165", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 66501112,
            "totalNumberOfWinners": 136859,
            "superlottoResult": {
              "id": 831,
              "drawDate": "2012-04-07T18:00:00",
              "numberOfWinners": 50,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280953,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 836,
            "drawDate": "2012-05-12T18:00:00",
            "numbers": [2, 8, 18, 25, 26, 29, 33],
            "addNumbers": [11, 17, 23],
            "prizes": ["1897000", "109755", "7320", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 65602476,
            "totalNumberOfWinners": 119596,
            "superlottoResult": {
              "id": 831,
              "drawDate": "2012-04-07T18:00:00",
              "numberOfWinners": 50,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280955,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 837,
            "drawDate": "2012-05-19T18:00:00",
            "numbers": [8, 11, 14, 16, 19, 22, 28],
            "addNumbers": [4, 7, 24],
            "prizes": ["5670195", "90260", "6010", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 65362520,
            "totalNumberOfWinners": 127776,
            "superlottoResult": {
              "id": 831,
              "drawDate": "2012-04-07T18:00:00",
              "numberOfWinners": 50,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280955,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 838,
            "drawDate": "2012-05-26T18:00:00",
            "numbers": [12, 18, 22, 23, 25, 33, 34],
            "addNumbers": [4, 14, 17],
            "prizes": ["Gull-Lotto!", "87120", "7440", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 63088208,
            "totalNumberOfWinners": 102073,
            "superlottoResult": {
              "id": 831,
              "drawDate": "2012-04-07T18:00:00",
              "numberOfWinners": 50,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280955,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 839,
            "drawDate": "2012-06-02T18:00:00",
            "numbers": [7, 10, 17, 18, 21, 24, 28],
            "addNumbers": [15, 31, 33],
            "prizes": ["11422115", "86465", "5455", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 68578840,
            "totalNumberOfWinners": 130517,
            "superlottoResult": {
              "id": 831,
              "drawDate": "2012-04-07T18:00:00",
              "numberOfWinners": 50,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280957,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 840,
            "drawDate": "2012-06-09T18:00:00",
            "numbers": [6, 7, 24, 26, 28, 29, 31],
            "addNumbers": [1, 10, 13],
            "prizes": ["3719580", "98165", "7350", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 64315584,
            "totalNumberOfWinners": 108274,
            "superlottoResult": {
              "id": 831,
              "drawDate": "2012-04-07T18:00:00",
              "numberOfWinners": 50,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280957,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 841,
            "drawDate": "2012-06-16T18:00:00",
            "numbers": [2, 6, 7, 12, 20, 26, 28],
            "addNumbers": [3, 24, 34],
            "prizes": ["2855085", "86765", "5370", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 65823372,
            "totalNumberOfWinners": 123812,
            "superlottoResult": {
              "id": 831,
              "drawDate": "2012-04-07T18:00:00",
              "numberOfWinners": 50,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280957,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 842,
            "drawDate": "2012-06-23T18:00:00",
            "numbers": [3, 6, 12, 14, 17, 25, 33],
            "addNumbers": [10, 23, 32],
            "prizes": ["2966150", "106235", "6420", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 68383916,
            "totalNumberOfWinners": 120839,
            "superlottoResult": {
              "id": 831,
              "drawDate": "2012-04-07T18:00:00",
              "numberOfWinners": 50,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280957,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 843,
            "drawDate": "2012-06-30T18:00:00",
            "numbers": [5, 12, 13, 14, 16, 27, 33],
            "addNumbers": [19, 20, 34],
            "prizes": ["6459135", "129555", "6555", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 74456936,
            "totalNumberOfWinners": 126888,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280961,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 844,
            "drawDate": "2012-07-07T18:00:00",
            "numbers": [1, 15, 16, 26, 27, 28, 31],
            "addNumbers": [6, 11, 22],
            "prizes": ["1956040", "98080", "6080", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 67644160,
            "totalNumberOfWinners": 126991,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280963,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 845,
            "drawDate": "2012-07-14T18:00:00",
            "numbers": [6, 18, 19, 21, 22, 23, 25],
            "addNumbers": [2, 16, 32],
            "prizes": ["11852700", "116535", "7175", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 68315296,
            "totalNumberOfWinners": 117551,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280963,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 846,
            "drawDate": "2012-07-21T18:00:00",
            "numbers": [5, 8, 15, 18, 19, 26, 33],
            "addNumbers": [9, 10, 29],
            "prizes": ["2984190", "80885", "5475", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 68799804,
            "totalNumberOfWinners": 132809,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280963,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 847,
            "drawDate": "2012-07-28T18:00:00",
            "numbers": [6, 10, 11, 14, 26, 30, 34],
            "addNumbers": [2, 8, 16],
            "prizes": ["11736285", "86540", "6705", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 67644304,
            "totalNumberOfWinners": 121793,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280963,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 848,
            "drawDate": "2012-08-04T18:00:00",
            "numbers": [11, 15, 20, 24, 27, 31, 33],
            "addNumbers": [4, 25, 30],
            "prizes": ["3830555", "88650", "5440", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 66234456,
            "totalNumberOfWinners": 115786,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280965,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 849,
            "drawDate": "2012-08-11T18:00:00",
            "numbers": [3, 5, 12, 15, 17, 25, 26],
            "addNumbers": [9, 29, 31],
            "prizes": ["2886365", "70600", "5915", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 66544516,
            "totalNumberOfWinners": 125151,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280965,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 850,
            "drawDate": "2012-08-18T18:00:00",
            "numbers": [2, 9, 13, 14, 20, 22, 26],
            "addNumbers": [19, 30, 33],
            "prizes": ["2940560", "81915", "5410", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 67793892,
            "totalNumberOfWinners": 130950,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280973,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 851,
            "drawDate": "2012-08-25T18:00:00",
            "numbers": [2, 7, 8, 10, 16, 23, 33],
            "addNumbers": [4, 5, 28],
            "prizes": ["3884375", "83475", "6345", "200", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 67165024,
            "totalNumberOfWinners": 132855,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280973,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 852,
            "drawDate": "2012-09-01T18:00:00",
            "numbers": [3, 8, 13, 18, 19, 27, 30],
            "addNumbers": [5, 25, 32],
            "prizes": ["2881095", "99630", "6105", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 66423028,
            "totalNumberOfWinners": 121383,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280973,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 853,
            "drawDate": "2012-09-08T18:00:00",
            "numbers": [10, 21, 22, 23, 27, 28, 34],
            "addNumbers": [4, 8, 11],
            "prizes": ["Gull-Lotto!", "98075", "5530", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 66510644,
            "totalNumberOfWinners": 127885,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280973,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 854,
            "drawDate": "2012-09-15T18:00:00",
            "numbers": [1, 3, 5, 10, 13, 14, 16],
            "addNumbers": [18, 25, 26],
            "prizes": ["4857240", "127830", "6140", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 73467536,
            "totalNumberOfWinners": 132367,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280973,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 855,
            "drawDate": "2012-09-22T18:00:00",
            "numbers": [13, 15, 16, 23, 25, 26, 32],
            "addNumbers": [17, 21, 29],
            "prizes": ["12267685", "91810", "6770", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 70707140,
            "totalNumberOfWinners": 120026,
            "superlottoResult": {
              "id": 843,
              "drawDate": "2012-06-30T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280983,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 856,
            "drawDate": "2012-09-29T18:00:00",
            "numbers": [7, 8, 9, 19, 20, 21, 33],
            "addNumbers": [2, 5, 23],
            "prizes": ["2681835", "96055", "5350", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 77286364,
            "totalNumberOfWinners": 146349,
            "superlottoResult": {
              "id": 856,
              "drawDate": "2012-09-29T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280983,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 857,
            "drawDate": "2012-10-06T18:00:00",
            "numbers": [13, 14, 22, 24, 27, 28, 30],
            "addNumbers": [4, 25, 26],
            "prizes": ["2460720", "92080", "6820", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 70914244,
            "totalNumberOfWinners": 121843,
            "superlottoResult": {
              "id": 856,
              "drawDate": "2012-09-29T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280985,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 858,
            "drawDate": "2012-10-13T18:00:00",
            "numbers": [3, 6, 13, 21, 22, 26, 33],
            "addNumbers": [16, 17, 30],
            "prizes": ["3076540", "74345", "5070", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 70928940,
            "totalNumberOfWinners": 140577,
            "superlottoResult": {
              "id": 856,
              "drawDate": "2012-09-29T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280985,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 859,
            "drawDate": "2012-10-20T18:00:00",
            "numbers": [12, 15, 19, 22, 27, 28, 33],
            "addNumbers": [9, 29, 31],
            "prizes": ["6248000", "106200", "6620", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 72023064,
            "totalNumberOfWinners": 135298,
            "superlottoResult": {
              "id": 856,
              "drawDate": "2012-09-29T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280985,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 860,
            "drawDate": "2012-10-27T18:00:00",
            "numbers": [1, 9, 12, 15, 17, 19, 33],
            "addNumbers": [4, 18, 25],
            "prizes": ["6082205", "110900", "6620", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 70111912,
            "totalNumberOfWinners": 123423,
            "superlottoResult": {
              "id": 856,
              "drawDate": "2012-09-29T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280987,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 861,
            "drawDate": "2012-11-03T18:00:00",
            "numbers": [1, 10, 17, 18, 26, 30, 34],
            "addNumbers": [9, 19, 25],
            "prizes": ["3993230", "81175", "6420", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [["Andelsbank", "", "", "", "", ""]],
            "turnover": 69047224,
            "totalNumberOfWinners": 115418,
            "superlottoResult": {
              "id": 856,
              "drawDate": "2012-09-29T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280987,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 862,
            "drawDate": "2012-11-10T18:00:00",
            "numbers": [11, 13, 19, 21, 22, 25, 26],
            "addNumbers": [2, 16, 33],
            "prizes": ["11877440", "114535", "6620", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 68457876,
            "totalNumberOfWinners": 121492,
            "superlottoResult": {
              "id": 856,
              "drawDate": "2012-09-29T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280989,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 863,
            "drawDate": "2012-11-17T18:00:00",
            "numbers": [3, 5, 9, 18, 24, 28, 34],
            "addNumbers": [6, 13, 17],
            "prizes": ["5914390", "126200", "6665", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 68177412,
            "totalNumberOfWinners": 122560,
            "superlottoResult": {
              "id": 856,
              "drawDate": "2012-09-29T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280989,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 864,
            "drawDate": "2012-11-24T18:00:00",
            "numbers": [4, 14, 18, 20, 21, 25, 28],
            "addNumbers": [1, 8, 9],
            "prizes": ["3884230", "75880", "6245", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 67162540,
            "totalNumberOfWinners": 129388,
            "superlottoResult": {
              "id": 856,
              "drawDate": "2012-09-29T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280991,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 865,
            "drawDate": "2012-12-01T18:00:00",
            "numbers": [5, 6, 8, 16, 25, 30, 33],
            "addNumbers": [11, 24, 28],
            "prizes": ["11492055", "87310", "5930", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 66236636,
            "totalNumberOfWinners": 115539,
            "superlottoResult": {
              "id": 856,
              "drawDate": "2012-09-29T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280995,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 866,
            "drawDate": "2012-12-08T18:00:00",
            "numbers": [2, 5, 6, 13, 21, 29, 34],
            "addNumbers": [12, 17, 20],
            "prizes": ["5751395", "73945", "6115", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 66298536,
            "totalNumberOfWinners": 124324,
            "superlottoResult": {
              "id": 856,
              "drawDate": "2012-09-29T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281000,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 867,
            "drawDate": "2012-12-15T18:00:00",
            "numbers": [6, 10, 14, 17, 21, 22, 26],
            "addNumbers": [15, 30, 31],
            "prizes": ["4001150", "67625", "4555", "165", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 69184172,
            "totalNumberOfWinners": 137919,
            "superlottoResult": {
              "id": 856,
              "drawDate": "2012-09-29T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 45000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281010,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 868,
            "drawDate": "2012-12-22T18:00:00",
            "numbers": [3, 9, 10, 14, 15, 23, 30],
            "addNumbers": [5, 19, 24],
            "prizes": ["7069895", "122245", "5725", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 81497368,
            "totalNumberOfWinners": 153884,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281012,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 869,
            "drawDate": "2012-12-29T18:00:00",
            "numbers": [7, 13, 15, 22, 28, 31, 33],
            "addNumbers": [8, 10, 14],
            "prizes": ["12230535", "79645", "6115", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 70493016,
            "totalNumberOfWinners": 125093,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281012,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 870,
            "drawDate": "2013-01-05T18:00:00",
            "numbers": [10, 12, 16, 18, 27, 28, 31],
            "addNumbers": [3, 29, 34],
            "prizes": ["2359535", "101995", "6540", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 67998260,
            "totalNumberOfWinners": 121126,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281016,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 871,
            "drawDate": "2013-01-12T18:00:00",
            "numbers": [4, 16, 19, 21, 23, 24, 32],
            "addNumbers": [1, 6, 13],
            "prizes": ["1091005", "98650", "6100", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 69170428,
            "totalNumberOfWinners": 118472,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281023,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 872,
            "drawDate": "2013-01-19T18:00:00",
            "numbers": [5, 14, 16, 19, 23, 24, 27],
            "addNumbers": [1, 3, 20],
            "prizes": ["5975630", "75855", "5740", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 68883344,
            "totalNumberOfWinners": 127981,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281035,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 873,
            "drawDate": "2013-01-26T18:00:00",
            "numbers": [11, 13, 16, 23, 25, 33, 34],
            "addNumbers": [21, 22, 28],
            "prizes": ["11422320", "90910", "6635", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 65834720,
            "totalNumberOfWinners": 113292,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281037,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 874,
            "drawDate": "2013-02-02T18:00:00",
            "numbers": [3, 8, 11, 13, 25, 29, 34],
            "addNumbers": [4, 5, 17],
            "prizes": ["2269530", "72025", "7115", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 65404324,
            "totalNumberOfWinners": 114084,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281039,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 875,
            "drawDate": "2013-02-09T18:00:00",
            "numbers": [14, 16, 18, 23, 26, 29, 30],
            "addNumbers": [8, 10, 33],
            "prizes": ["5646950", "77575", "6170", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 65094548,
            "totalNumberOfWinners": 119354,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281041,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 876,
            "drawDate": "2013-02-16T18:00:00",
            "numbers": [1, 5, 7, 9, 10, 16, 29],
            "addNumbers": [11, 19, 24],
            "prizes": ["Gull-Lotto!", "74720", "6025", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 65276696,
            "totalNumberOfWinners": 128944,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5280989,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 877,
            "drawDate": "2013-02-23T18:00:00",
            "numbers": [5, 10, 15, 17, 22, 23, 32],
            "addNumbers": [7, 20, 28],
            "prizes": ["7859260", "67510", "5360", "180", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 70618332,
            "totalNumberOfWinners": 144585,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281012,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 878,
            "drawDate": "2013-03-02T18:00:00",
            "numbers": [8, 9, 12, 19, 22, 30, 33],
            "addNumbers": [13, 17, 24],
            "prizes": ["2841680", "111755", "6325", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 65514308,
            "totalNumberOfWinners": 114063,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281043,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 879,
            "drawDate": "2013-03-09T18:00:00",
            "numbers": [7, 8, 10, 13, 25, 27, 33],
            "addNumbers": [9, 12, 26],
            "prizes": ["1872715", "112685", "7045", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 64762640,
            "totalNumberOfWinners": 108792,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281043,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 880,
            "drawDate": "2013-03-16T18:00:00",
            "numbers": [6, 8, 18, 21, 27, 29, 33],
            "addNumbers": [1, 5, 16],
            "prizes": ["2825470", "78710", "5175", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 65140628,
            "totalNumberOfWinners": 125772,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281048,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 881,
            "drawDate": "2013-03-23T18:00:00",
            "numbers": [3, 9, 15, 22, 23, 24, 28],
            "addNumbers": [7, 19, 26],
            "prizes": ["3893120", "83660", "4485", "175", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 67316200,
            "totalNumberOfWinners": 134287,
            "superlottoResult": {
              "id": 868,
              "drawDate": "2012-12-22T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 46000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281048,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 882,
            "drawDate": "2013-03-30T18:00:00",
            "numbers": [3, 6, 9, 11, 25, 32, 33],
            "addNumbers": [5, 7, 31],
            "prizes": ["3181795", "113960", "8075", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 73355580,
            "totalNumberOfWinners": 121995,
            "superlottoResult": {
              "id": 882,
              "drawDate": "2013-03-30T18:00:00",
              "numberOfWinners": 47,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281050,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 883,
            "drawDate": "2013-04-06T18:00:00",
            "numbers": [1, 7, 8, 9, 13, 18, 30],
            "addNumbers": [21, 24, 33],
            "prizes": ["11265575", "108635", "6805", "200", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 64931272,
            "totalNumberOfWinners": 114367,
            "superlottoResult": {
              "id": 882,
              "drawDate": "2013-03-30T18:00:00",
              "numberOfWinners": 47,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281050,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 884,
            "drawDate": "2013-04-13T18:00:00",
            "numbers": [4, 5, 6, 9, 12, 27, 30],
            "addNumbers": [20, 22, 34],
            "prizes": ["11385445", "81555", "5345", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 65622168,
            "totalNumberOfWinners": 123493,
            "superlottoResult": {
              "id": 882,
              "drawDate": "2013-03-30T18:00:00",
              "numberOfWinners": 47,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281060,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 885,
            "drawDate": "2013-04-20T18:00:00",
            "numbers": [1, 2, 9, 13, 14, 21, 33],
            "addNumbers": [27, 32, 34],
            "prizes": ["1431035", "74550", "6195", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              ["Andelsbank", "", "", "", "", ""]
            ],
            "turnover": 65984528,
            "totalNumberOfWinners": 122921,
            "superlottoResult": {
              "id": 882,
              "drawDate": "2013-03-30T18:00:00",
              "numberOfWinners": 47,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281060,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 886,
            "drawDate": "2013-04-27T18:00:00",
            "numbers": [7, 12, 14, 15, 17, 24, 26],
            "addNumbers": [2, 8, 33],
            "prizes": ["5528040", "120520", "7280", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 63723836,
            "totalNumberOfWinners": 112288,
            "superlottoResult": {
              "id": 882,
              "drawDate": "2013-03-30T18:00:00",
              "numberOfWinners": 47,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281060,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 887,
            "drawDate": "2013-05-04T18:00:00",
            "numbers": [11, 20, 21, 22, 27, 30, 31],
            "addNumbers": [2, 9, 10],
            "prizes": ["Gull-Lotto!", "83935", "7305", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 62710368,
            "totalNumberOfWinners": 116035,
            "superlottoResult": {
              "id": 882,
              "drawDate": "2013-03-30T18:00:00",
              "numberOfWinners": 47,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281064,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 888,
            "drawDate": "2013-05-11T18:00:00",
            "numbers": [9, 10, 12, 14, 20, 25, 32],
            "addNumbers": [7, 33, 34],
            "prizes": ["22603335", "97970", "7870", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 67568228,
            "totalNumberOfWinners": 111049,
            "superlottoResult": {
              "id": 882,
              "drawDate": "2013-03-30T18:00:00",
              "numberOfWinners": 47,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281066,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 889,
            "drawDate": "2013-05-18T18:00:00",
            "numbers": [2, 13, 17, 18, 19, 24, 32],
            "addNumbers": [1, 11, 15],
            "prizes": ["5463470", "107435", "6190", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 62979500,
            "totalNumberOfWinners": 103389,
            "superlottoResult": {
              "id": 882,
              "drawDate": "2013-03-30T18:00:00",
              "numberOfWinners": 47,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281080,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 890,
            "drawDate": "2013-05-25T18:00:00",
            "numbers": [2, 5, 6, 10, 16, 20, 27],
            "addNumbers": [9, 13, 28],
            "prizes": ["1803015", "73305", "4255", "160", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 62352124,
            "totalNumberOfWinners": 135598,
            "superlottoResult": {
              "id": 882,
              "drawDate": "2013-03-30T18:00:00",
              "numberOfWinners": 47,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281080,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 891,
            "drawDate": "2013-06-01T18:00:00",
            "numbers": [7, 8, 15, 17, 25, 28, 32],
            "addNumbers": [4, 19, 26],
            "prizes": ["5334805", "81060", "5630", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [[null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"]],
            "turnover": 61496344,
            "totalNumberOfWinners": 115371,
            "superlottoResult": {
              "id": 882,
              "drawDate": "2013-03-30T18:00:00",
              "numberOfWinners": 47,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281080,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 892,
            "drawDate": "2013-06-08T18:00:00",
            "numbers": [1, 2, 10, 21, 28, 30, 34],
            "addNumbers": [4, 6, 17],
            "prizes": ["Gull-Lotto!", "123255", "7595", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "turnover": 60921096,
            "totalNumberOfWinners": 109344,
            "superlottoResult": {
              "id": 882,
              "drawDate": "2013-03-30T18:00:00",
              "numberOfWinners": 47,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281080,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 893,
            "drawDate": "2013-06-15T18:00:00",
            "numbers": [1, 11, 12, 16, 17, 18, 28],
            "addNumbers": [5, 19, 20],
            "prizes": ["4395995", "98645", "6630", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 65764696,
            "totalNumberOfWinners": 117039,
            "superlottoResult": {
              "id": 882,
              "drawDate": "2013-03-30T18:00:00",
              "numberOfWinners": 47,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281120,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 894,
            "drawDate": "2013-06-22T18:00:00",
            "numbers": [8, 11, 13, 15, 20, 21, 23],
            "addNumbers": [12, 18, 28],
            "prizes": ["4026735", "87790", "6220", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerList": [
              [null, "", "0000", "UKJENT", "0", "UKJENT"], [null, "", "0000", "UKJENT", "0", "UKJENT"],
              [null, "", "0000", "UKJENT", "0", "UKJENT"]
            ],
            "turnover": 69626564,
            "totalNumberOfWinners": 132632,
            "superlottoResult": {
              "id": 894,
              "drawDate": "2013-06-22T18:00:00",
              "numberOfWinners": 39,
              "prizeAmount": 1000000
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 13,
              "prizePool": 5281178,
              "drawDate": "2013-09-21T20:00:00"
            }
          },
          {
            "id": 895,
            "drawDate": "2013-06-29T18:00:00",
            "unsortednumbers": [8, 25, 21, 32, 29, 28, 14],
            "unsortedaddNumbers": [22, 4, 20],
            "numbers": [8, 14, 21, 25, 28, 29, 32],
            "addNumbers": [4, 20, 22],
            "prizes": ["3801705", "84100", "5725", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 68, 551, 23696, 100601],
            "winnerList": [
              ["M", "", "0904", "GRIMSTAD", "9", "Aust-Agder"], ["M", "", "1001", "KRISTIANSAND", "10", "Vest-Agder"],
              ["K", "", "1243", "OS", "12", "Hordaland"]
            ],
            "turnover": 65735600,
            "totalNumberOfWinners": 124919,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634308,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 896,
            "drawDate": "2013-07-06T18:00:00",
            "unsortednumbers": [6, 10, 15, 30, 26, 34, 29],
            "unsortedaddNumbers": [7, 24, 14],
            "numbers": [6, 10, 15, 26, 29, 30, 34],
            "addNumbers": [7, 14, 24],
            "prizes": ["Gull-Lotto!", "79925", "6775", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [0, 69, 449, 20485, 87805],
            "turnover": 63392344,
            "totalNumberOfWinners": 108808,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633676,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 897,
            "drawDate": "2013-07-13T18:00:00",
            "unsortednumbers": [14, 13, 11, 3, 31, 9, 23],
            "unsortedaddNumbers": [22, 18, 30],
            "numbers": [3, 9, 11, 13, 14, 23, 31],
            "addNumbers": [18, 22, 30],
            "prizes": ["5668085", "92915", "5520", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 63, 585, 24891, 101091],
            "winnerList": [
              ["K", "", "0538", "NORDRE LAND", "5", "Oppland"], ["K", "", "0301", "OSLO", "3", "Oslo"],
              ["K", "", "1124", "SOLA", "11", "Rogaland"], ["M", "", "0706", "SANDEFJORD", "7", "Vestfold"]
            ],
            "turnover": 67284064,
            "totalNumberOfWinners": 126634,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634312,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 898,
            "drawDate": "2013-07-20T18:00:00",
            "unsortednumbers": [11, 20, 13, 31, 25, 7, 12],
            "unsortedaddNumbers": [9, 24, 32],
            "numbers": [7, 11, 12, 13, 20, 25, 31],
            "addNumbers": [9, 24, 32],
            "prizes": ["5533680", "95680", "6755", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [2, 58, 453, 20659, 86376],
            "winnerList": [
              ["M", "", "1001", "KRISTIANSAND", "10", "Vest-Agder"], ["M", "", "1101", "EIGERSUND", "11", "Rogaland"]
            ],
            "turnover": 63788840,
            "totalNumberOfWinners": 107548,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 899,
            "drawDate": "2013-07-27T18:00:00",
            "unsortednumbers": [13, 16, 30, 18, 12, 33, 31],
            "unsortedaddNumbers": [5, 26, 7],
            "numbers": [12, 13, 16, 18, 30, 31, 33],
            "addNumbers": [5, 7, 26],
            "prizes": ["2664685", "118770", "7205", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 45, 409, 17900, 80649],
            "winnerList": [
              ["M", "", "2020", "PORSANGER", "20", "Finnmark"], ["K", "", "1543", "NESSET", "15", "Møre og Romsdal"],
              ["K", "", "0106", "FREDRIKSTAD", "1", "Østfold"], ["M", "", "0415", "LØTEN", "4", "Hedmark"]
            ],
            "turnover": 61433704,
            "totalNumberOfWinners": 99007,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633758,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 900,
            "drawDate": "2013-08-03T18:00:00",
            "unsortednumbers": [1, 5, 22, 10, 23, 18, 26],
            "unsortedaddNumbers": [15, 33, 6],
            "numbers": [1, 5, 10, 18, 22, 23, 26],
            "addNumbers": [6, 15, 33],
            "prizes": ["10743215", "71825", "6230", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [1, 75, 477, 21815, 97133],
            "winnerList": [["K", "", "0625", "NEDRE EIKER", "6", "Buskerud"]],
            "turnover": 61920548,
            "totalNumberOfWinners": 119501,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 901,
            "drawDate": "2013-08-10T18:00:00",
            "unsortednumbers": [26, 7, 29, 12, 3, 2, 5],
            "unsortedaddNumbers": [8, 33, 23],
            "numbers": [2, 3, 5, 7, 12, 26, 29],
            "addNumbers": [8, 23, 33],
            "prizes": ["2664790", "78600", "5100", "170", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 68, 578, 24547, 97127],
            "winnerList": [
              ["M", "", "1443", "EID", "14", "Sogn og Fjordane"],
              ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"],
              ["M", "", "0105", "SARPSBORG", "1", "Østfold"], ["Andelsbank", "", "", "", "", ""]
            ],
            "turnover": 61436108,
            "totalNumberOfWinners": 122324,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634071,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 902,
            "drawDate": "2013-08-17T18:00:00",
            "unsortednumbers": [21, 27, 23, 13, 11, 34, 29],
            "unsortedaddNumbers": [12, 22, 20],
            "numbers": [11, 13, 21, 23, 27, 29, 34],
            "addNumbers": [12, 20, 22],
            "prizes": ["10740635", "109910", "6190", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [1, 49, 480, 21557, 87219],
            "winnerList": [["M", "", "0617", "GOL", "6", "Buskerud"]],
            "turnover": 61905704,
            "totalNumberOfWinners": 109306,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634189,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 903,
            "drawDate": "2013-08-24T18:00:00",
            "unsortednumbers": [34, 13, 19, 1, 31, 26, 14],
            "unsortedaddNumbers": [30, 25, 8],
            "numbers": [1, 13, 14, 19, 26, 31, 34],
            "addNumbers": [8, 25, 30],
            "prizes": ["3558975", "124505", "7325", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 43, 403, 18687, 81127],
            "winnerList": [
              ["M", "", "0704", "TØNSBERG", "7", "Vestfold"],
              ["K", "", "1573", "SMØLA", "15", "Møre og Romsdal"], ["M", "", "0301", "OSLO", "3", "Oslo"]
            ],
            "turnover": 61538552,
            "totalNumberOfWinners": 100263,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634189,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 904,
            "drawDate": "2013-08-31T18:00:00",
            "unsortednumbers": [12, 13, 8, 4, 24, 15, 6],
            "unsortedaddNumbers": [25, 14, 16],
            "numbers": [4, 6, 8, 12, 13, 15, 24],
            "addNumbers": [14, 16, 25],
            "prizes": ["2678680", "94255", "6385", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 57, 464, 21555, 92459],
            "winnerList": [
              ["M", "", "0805", "PORSGRUNN", "8", "Telemark"], ["M", "", "1201", "BERGEN", "12", "Hordaland"],
              ["M", "", "1103", "STAVANGER", "11", "Rogaland"], ["M", "", "0805", "PORSGRUNN", "8", "Telemark"]
            ],
            "turnover": 61756416,
            "totalNumberOfWinners": 114539,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634034,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 905,
            "drawDate": "2013-09-07T18:00:00",
            "unsortednumbers": [6, 25, 15, 31, 28, 13, 10],
            "unsortedaddNumbers": [7, 33, 24],
            "numbers": [6, 10, 13, 15, 25, 28, 31],
            "addNumbers": [7, 24, 33],
            "prizes": ["3564815", "95760", "6470", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 56, 457, 20867, 88393],
            "winnerList": [
              ["M", "", "1201", "BERGEN", "12", "Hordaland"], ["M", "", "0230", "LØRENSKOG", "2", "Akershus"],
              ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"]
            ],
            "turnover": 61639484,
            "totalNumberOfWinners": 109776,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634071,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 906,
            "drawDate": "2013-09-14T18:00:00",
            "unsortednumbers": [14, 12, 6, 27, 3, 30, 7],
            "unsortedaddNumbers": [10, 5, 32],
            "numbers": [3, 6, 7, 12, 14, 27, 30],
            "addNumbers": [5, 10, 32],
            "prizes": ["1606080", "88085", "5140", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [7, 64, 605, 24016, 98154],
            "winnerList": [
              ["M", "", "0805", "PORSGRUNN", "8", "Telemark"], ["K", "", "1804", "BODØ", "18", "Nordland"],
              ["M", "", "0706", "SANDEFJORD", "7", "Vestfold"], ["K", "", "0214", "ÅS", "2", "Akershus"],
              ["M", "", "1219", "BØMLO", "12", "Hordaland"], ["M", "", "1813", "BRØNNØY", "18", "Nordland"],
              ["M", "", "1624", "RISSA", "16", "Sør-Trøndelag"]
            ],
            "turnover": 64798744,
            "totalNumberOfWinners": 122846,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634317,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 907,
            "drawDate": "2013-09-21T18:00:00",
            "unsortednumbers": [14, 20, 16, 30, 6, 1, 21],
            "unsortedaddNumbers": [11, 13, 34],
            "numbers": [1, 6, 14, 16, 20, 21, 30],
            "addNumbers": [11, 13, 34],
            "prizes": ["2437355", "72745", "6265", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [5, 84, 538, 23185, 101379],
            "winnerList": [
              ["M", "", "1102", "SANDNES", "11", "Rogaland"], ["M", "", "1247", "ASKØY", "12", "Hordaland"],
              ["M", "", "1813", "BRØNNØY", "18", "Nordland"], ["M", "", "1247", "ASKØY", "12", "Hordaland"],
              ["M", "", "1813", "BRØNNØY", "18", "Nordland"]
            ],
            "turnover": 70240868,
            "totalNumberOfWinners": 125191,
            "superlottoResult": {
              "id": 907,
              "drawDate": "2013-09-21T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 41000000,
              "winnerList": [["K", "", "1931", "LENVIK", "19", "Troms"]]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634239,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 908,
            "drawDate": "2013-09-28T18:00:00",
            "unsortednumbers": [18, 34, 33, 9, 1, 32, 24],
            "unsortedaddNumbers": [11, 7, 6],
            "numbers": [1, 9, 18, 24, 32, 33, 34],
            "addNumbers": [6, 7, 11],
            "prizes": ["3707625", "103285", "7730", "235", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 54, 398, 18728, 83559],
            "winnerList": [
              ["M", "", "1525", "STRANDA", "15", "Møre og Romsdal"], ["K", "", "0412", "RINGSAKER", "4", "Hedmark"],
              ["K", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"]
            ],
            "turnover": 64108812,
            "totalNumberOfWinners": 102742,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634071,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 909,
            "drawDate": "2013-10-05T18:00:00",
            "unsortednumbers": [25, 15, 8, 3, 28, 23, 29],
            "unsortedaddNumbers": [18, 33, 1],
            "numbers": [3, 8, 15, 23, 25, 28, 29],
            "addNumbers": [1, 18, 33],
            "prizes": ["3686440", "54905", "5290", "180", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 101, 578, 24471, 102242],
            "winnerList": [
              ["M", "", "0627", "RØYKEN", "6", "Buskerud"], ["M", "", "1627", "BJUGN", "16", "Sør-Trøndelag"],
              ["K", "", "1813", "BRØNNØY", "18", "Nordland"]
            ],
            "turnover": 63742556,
            "totalNumberOfWinners": 127395,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634369,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 910,
            "drawDate": "2013-10-12T18:00:00",
            "unsortednumbers": [6, 30, 1, 31, 3, 24, 17],
            "unsortedaddNumbers": [7, 12, 32],
            "numbers": [1, 3, 6, 17, 24, 30, 31],
            "addNumbers": [7, 12, 32],
            "prizes": ["1844230", "120620", "6970", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [6, 46, 439, 20701, 90586],
            "winnerList": [
              ["M", "", "0617", "GOL", "6", "Buskerud"], ["K", "", "1505", "KRISTIANSUND", "15", "Møre og Romsdal"],
              ["M", "", "0231", "SKEDSMO", "2", "Akershus"], ["K", "", "0805", "PORSGRUNN", "8", "Telemark"],
              ["K", "", "1903", "HARSTAD", "19", "Troms"], ["M", "", "1551", "EIDE", "15", "Møre og Romsdal"]
            ],
            "turnover": 63777468,
            "totalNumberOfWinners": 111778,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633915,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 911,
            "drawDate": "2013-10-19T18:00:00",
            "unsortednumbers": [13, 26, 1, 24, 27, 30, 15],
            "unsortedaddNumbers": [11, 6, 20],
            "numbers": [1, 13, 15, 24, 26, 27, 30],
            "addNumbers": [6, 11, 20],
            "prizes": ["5567965", "99710", "6845", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [2, 56, 450, 19577, 88601],
            "winnerList": [["M", "", "0301", "OSLO", "3", "Oslo"], ["K", "", "1719", "LEVANGER", "17", "Nord-Trøndelag"]],
            "turnover": 64184060,
            "totalNumberOfWinners": 108686,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633758,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 912,
            "drawDate": "2013-10-26T18:00:00",
            "unsortednumbers": [25, 8, 24, 16, 33, 9, 32],
            "unsortedaddNumbers": [34, 28, 10],
            "numbers": [8, 9, 16, 24, 25, 32, 33],
            "addNumbers": [10, 28, 34],
            "prizes": ["3708135", "94545", "6675", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 59, 461, 20587, 88890],
            "winnerList": [
              ["M", "", "0124", "ASKIM", "1", "Østfold"], ["M", "", "0520", "RINGEBU", "5", "Oppland"],
              ["M", "", "1871", "ANDØY", "18", "Nordland"]
            ],
            "turnover": 64117692,
            "totalNumberOfWinners": 110000,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634239,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 913,
            "drawDate": "2013-11-02T18:00:00",
            "unsortednumbers": [5, 28, 13, 8, 33, 15, 32],
            "unsortedaddNumbers": [26, 11, 22],
            "numbers": [5, 8, 13, 15, 28, 32, 33],
            "addNumbers": [11, 22, 26],
            "prizes": ["3658280", "84665", "5895", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 65, 515, 21905, 95466],
            "winnerList": [
              ["M", "", "1201", "BERGEN", "12", "Hordaland"], ["M", "", "1719", "LEVANGER", "17", "Nord-Trøndelag"],
              ["M", "", "1531", "SULA", "15", "Møre og Romsdal"]
            ],
            "turnover": 63255600,
            "totalNumberOfWinners": 117954,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634369,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 914,
            "drawDate": "2013-11-09T18:00:00",
            "unsortednumbers": [12, 20, 28, 23, 25, 7, 21],
            "unsortedaddNumbers": [17, 11, 22],
            "numbers": [7, 12, 20, 21, 23, 25, 28],
            "addNumbers": [11, 17, 22],
            "prizes": ["Gull-Lotto!", "95450", "6455", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [0, 57, 465, 21322, 93326],
            "turnover": 62539460,
            "totalNumberOfWinners": 115170,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634370,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 915,
            "drawDate": "2013-11-16T18:00:00",
            "unsortednumbers": [14, 27, 11, 4, 8, 24, 6],
            "unsortedaddNumbers": [13, 10, 12],
            "numbers": [4, 6, 8, 11, 14, 24, 27],
            "addNumbers": [10, 12, 13],
            "prizes": ["4529500", "82155", "5540", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [5, 72, 589, 24876, 103953],
            "winnerList": [
              ["M", "", "2012", "ALTA", "20", "Finnmark"], ["M", "", "1441", "SELJE", "14", "Sogn og Fjordane"],
              ["M", "", "0213", "SKI", "2", "Akershus"], ["M", "", "1653", "MELHUS", "16", "Sør-Trøndelag"],
              ["M", "", "0301", "OSLO", "3", "Oslo"]
            ],
            "turnover": 67993740,
            "totalNumberOfWinners": 129495,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634370,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 916,
            "drawDate": "2013-11-23T18:00:00",
            "unsortednumbers": [3, 7, 34, 27, 12, 6, 25],
            "unsortedaddNumbers": [2, 9, 26],
            "numbers": [3, 6, 7, 12, 25, 27, 34],
            "addNumbers": [2, 9, 26],
            "prizes": ["Gull-Lotto!", "92475", "6540", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [0, 60, 468, 21196, 92995],
            "turnover": 63778156,
            "totalNumberOfWinners": 114719,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633786,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 917,
            "drawDate": "2013-11-30T18:00:00",
            "unsortednumbers": [26, 8, 25, 29, 11, 28, 31],
            "unsortedaddNumbers": [16, 22, 24],
            "numbers": [8, 11, 25, 26, 28, 29, 31],
            "addNumbers": [16, 22, 24],
            "prizes": ["5776295", "163165", "7320", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 37, 455, 21499, 102663],
            "winnerList": [
              ["K", "", "1612", "HEMNE", "16", "Sør-Trøndelag"], ["K", "", "1149", "KARMØY", "11", "Rogaland"],
              ["K", "", "0626", "LIER", "6", "Buskerud"], ["K", "", "0928", "BIRKENES", "9", "Aust-Agder"]
            ],
            "turnover": 69393024,
            "totalNumberOfWinners": 124658,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634127,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 918,
            "drawDate": "2013-12-07T18:00:00",
            "unsortednumbers": [32, 9, 23, 6, 15, 8, 7],
            "unsortedaddNumbers": [14, 16, 17],
            "numbers": [6, 7, 8, 9, 15, 23, 32],
            "addNumbers": [14, 16, 17],
            "prizes": ["Gull-Lotto!", "125030", "7275", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [0, 44, 417, 21199, 92777],
            "turnover": 63234416,
            "totalNumberOfWinners": 114437,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633575,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 919,
            "drawDate": "2013-12-14T18:00:00",
            "unsortednumbers": [14, 17, 33, 27, 28, 23, 30],
            "unsortedaddNumbers": [15, 34, 2],
            "numbers": [14, 17, 23, 27, 28, 30, 33],
            "addNumbers": [2, 15, 34],
            "prizes": ["3925310", "106920", "5945", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [6, 59, 585, 24083, 104616],
            "winnerList": [
              ["M", "", "1841", "FAUSKE", "18", "Nordland"], ["M", "", "1253", "OSTERØY", "12", "Hordaland"],
              ["M", "", "1663", "MALVIK", "16", "Sør-Trøndelag"],
              ["M", "", "1504", "ÅLESUND", "15", "Møre og Romsdal"], ["M", "", "1922", "BARDU", "19", "Troms"],
              ["M", "", "1502", "MOLDE", "15", "Møre og Romsdal"]
            ],
            "turnover": 72511344,
            "totalNumberOfWinners": 129349,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633955,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 920,
            "drawDate": "2013-12-21T18:00:00",
            "unsortednumbers": [13, 4, 14, 25, 21, 3, 34],
            "unsortedaddNumbers": [5, 20, 32],
            "numbers": [3, 4, 13, 14, 21, 25, 34],
            "addNumbers": [5, 20, 32],
            "prizes": ["4560875", "134530", "7290", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 51, 519, 25226, 105593],
            "winnerList": [
              ["K", "", "0237", "EIDSVOLL", "2", "Akershus"], ["K", "", "0136", "RYGGE", "1", "Østfold"],
              ["M", "", "0436", "TOLGA", "4", "Hedmark"]
            ],
            "turnover": 78862448,
            "totalNumberOfWinners": 131392,
            "superlottoResult": {
              "id": 920,
              "drawDate": "2013-12-21T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 43000000,
              "winnerList": [["M", "", "1638", "ORKDAL", "16", "Sør-Trøndelag"]]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634034,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 921,
            "drawDate": "2013-12-28T18:00:00",
            "unsortednumbers": [12, 28, 22, 8, 17, 23, 27],
            "unsortedaddNumbers": [26, 5, 4],
            "numbers": [8, 12, 17, 22, 23, 27, 28],
            "addNumbers": [4, 5, 26],
            "prizes": ["6033955", "75640", "5795", "185", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [2, 80, 576, 25755, 113034],
            "winnerList": [["M", "", "0227", "FET", "2", "Akershus"], ["K", "", "0106", "FREDRIKSTAD", "1", "Østfold"]],
            "turnover": 69555712,
            "totalNumberOfWinners": 139447,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633676,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 922,
            "drawDate": "2014-01-04T18:00:00",
            "unsortednumbers": [21, 18, 4, 19, 2, 6, 27],
            "unsortedaddNumbers": [8, 13, 1],
            "numbers": [2, 4, 6, 18, 19, 21, 27],
            "addNumbers": [1, 8, 13],
            "prizes": ["2925715", "78240", "5915", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 75, 547, 24707, 105111],
            "winnerList": [
              ["M", "", "1648", "MIDTRE GAULDAL", "16", "Sør-Trøndelag"],
              ["M", "", "1201", "BERGEN", "12", "Hordaland"], ["K", "", "1813", "BRØNNØY", "18", "Nordland"],
              ["K", "", "0602", "DRAMMEN", "6", "Buskerud"]
            ],
            "turnover": 67451752,
            "totalNumberOfWinners": 130444,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633758,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 923,
            "drawDate": "2014-01-11T18:00:00",
            "unsortednumbers": [24, 5, 4, 28, 23, 11, 7],
            "unsortedaddNumbers": [10, 16, 12],
            "numbers": [4, 5, 7, 11, 23, 24, 28],
            "addNumbers": [10, 12, 16],
            "prizes": ["Gull-Lotto!", "77660", "6605", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [0, 76, 493, 23330, 105111],
            "turnover": 67841712,
            "totalNumberOfWinners": 129010,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634100,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 924,
            "drawDate": "2014-01-18T18:00:00",
            "unsortednumbers": [2, 8, 12, 20, 3, 29, 15],
            "unsortedaddNumbers": [23, 5, 18],
            "numbers": [2, 3, 8, 12, 15, 20, 29],
            "addNumbers": [5, 18, 23],
            "prizes": ["4849305", "67995", "5850", "180", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [5, 92, 590, 27512, 120645],
            "winnerList": [
              ["M", "", "0106", "FREDRIKSTAD", "1", "Østfold"], ["M", "", "0123", "SPYDEBERG", "1", "Østfold"],
              ["M", "", "0235", "ULLENSAKER", "2", "Akershus"], ["K", "", "0125", "EIDSBERG", "1", "Østfold"],
              ["K", "", "0213", "SKI", "2", "Akershus"]
            ],
            "turnover": 71907808,
            "totalNumberOfWinners": 148844,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634312,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 925,
            "drawDate": "2014-01-25T18:00:00",
            "unsortednumbers": [23, 26, 30, 25, 6, 2, 33],
            "unsortedaddNumbers": [14, 18, 4],
            "numbers": [2, 6, 23, 25, 26, 30, 33],
            "addNumbers": [4, 14, 18],
            "prizes": ["5765320", "111190", "6815", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [2, 52, 468, 20992, 92403],
            "winnerList": [["M", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "1813", "BRØNNØY", "18", "Nordland"]],
            "turnover": 66459040,
            "totalNumberOfWinners": 113917,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634239,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 926,
            "drawDate": "2014-02-01T18:00:00",
            "unsortednumbers": [3, 30, 20, 14, 18, 33, 15],
            "unsortedaddNumbers": [24, 5, 2],
            "numbers": [3, 14, 15, 18, 20, 30, 33],
            "addNumbers": [2, 5, 24],
            "prizes": ["2860495", "110335", "7095", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 52, 446, 20621, 90480],
            "winnerList": [
              ["M", "", "0417", "STANGE", "4", "Hedmark"], ["M", "", "0221", "AURSKOG-HØLAND", "2", "Akershus"],
              ["M", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0814", "BAMBLE", "8", "Telemark"]
            ],
            "turnover": 65948072,
            "totalNumberOfWinners": 111603,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634369,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 927,
            "drawDate": "2014-02-08T18:00:00",
            "unsortednumbers": [28, 24, 25, 27, 14, 15, 34],
            "unsortedaddNumbers": [3, 4, 26],
            "numbers": [14, 15, 24, 25, 27, 28, 34],
            "addNumbers": [3, 4, 26],
            "prizes": ["2797390", "102015", "7280", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 55, 425, 20084, 91639],
            "winnerList": [
              ["M", "", "0231", "SKEDSMO", "2", "Akershus"], ["M", "", "0709", "LARVIK", "7", "Vestfold"],
              ["M", "", "0709", "LARVIK", "7", "Vestfold"], ["M", "", "1813", "BRØNNØY", "18", "Nordland"]
            ],
            "turnover": 64493244,
            "totalNumberOfWinners": 112207,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634312,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 928,
            "drawDate": "2014-02-15T18:00:00",
            "unsortednumbers": [26, 22, 25, 10, 33, 27, 24],
            "unsortedaddNumbers": [30, 29, 1],
            "numbers": [10, 22, 24, 25, 26, 27, 33],
            "addNumbers": [1, 29, 30],
            "prizes": ["2838720", "123775", "6780", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 46, 463, 21874, 90367],
            "winnerList": [
              ["M", "", "0805", "PORSGRUNN", "8", "Telemark"], ["K", "", "0711", "SVELVIK", "7", "Vestfold"],
              ["M", "", "1849", "HAMARØY", "18", "Nordland"], ["M", "", "0136", "RYGGE", "1", "Østfold"]
            ],
            "turnover": 65446096,
            "totalNumberOfWinners": 112754,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634005,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 929,
            "drawDate": "2014-02-22T18:00:00",
            "unsortednumbers": [13, 26, 16, 12, 33, 31, 7],
            "unsortedaddNumbers": [3, 23, 4],
            "numbers": [7, 12, 13, 16, 26, 31, 33],
            "addNumbers": [3, 4, 23],
            "prizes": ["3770050", "103115", "7190", "220", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 55, 435, 20250, 95337],
            "winnerList": [
              ["M", "", "1520", "ØRSTA", "15", "Møre og Romsdal"],
              ["M", "", "0106", "FREDRIKSTAD", "1", "Østfold"],
              ["M", "", "1653", "MELHUS", "16", "Sør-Trøndelag"]
            ],
            "turnover": 65188256,
            "totalNumberOfWinners": 116080,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634127,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 930,
            "drawDate": "2014-03-01T18:00:00",
            "unsortednumbers": [25, 8, 10, 13, 3, 12, 28],
            "unsortedaddNumbers": [11, 9, 32],
            "numbers": [3, 8, 10, 12, 13, 25, 28],
            "addNumbers": [9, 11, 32],
            "prizes": ["2237630", "98420", "5400", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [5, 57, 573, 23831, 96788],
            "winnerList": [
              ["K", "", "0301", "OSLO", "3", "Oslo"], ["K", "", "0220", "ASKER", "2", "Akershus"],
              ["M", "", "1224", "KVINNHERAD", "12", "Hordaland"], ["K", "", "1617", "HITRA", "16", "Sør-Trøndelag"],
              ["M", "", "2028", "BÅTSFJORD", "20", "Finnmark"]
            ],
            "turnover": 64485096,
            "totalNumberOfWinners": 121254,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634005,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 931,
            "drawDate": "2014-03-08T18:00:00",
            "unsortednumbers": [7, 32, 13, 34, 1, 19, 2],
            "unsortedaddNumbers": [22, 14, 6],
            "numbers": [1, 2, 7, 13, 19, 32, 34],
            "addNumbers": [6, 14, 22],
            "prizes": ["1571380", "108150", "7040", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [7, 51, 432, 21022, 85243],
            "winnerList": [
              ["M", "", "0709", "LARVIK", "7", "Vestfold"], ["K", "", "0105", "SARPSBORG", "1", "Østfold"],
              ["M", "", "2018", "MÅSØY", "20", "Finnmark"], ["K", "", "0514", "LOM", "5", "Oppland"],
              ["K", "", "1811", "BINDAL", "18", "Nordland"], ["K", "", "2004", "HAMMERFEST", "20", "Finnmark"],
              ["M", "", "1640", "RØROS", "16", "Sør-Trøndelag"]
            ],
            "turnover": 63398768,
            "totalNumberOfWinners": 106755,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633758,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 932,
            "drawDate": "2014-03-15T18:00:00",
            "unsortednumbers": [22, 16, 7, 1, 15, 27, 24],
            "unsortedaddNumbers": [20, 13, 18],
            "numbers": [1, 7, 15, 16, 22, 24, 27],
            "addNumbers": [13, 18, 20],
            "prizes": ["2776275", "78430", "6620", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 71, 464, 21466, 91815],
            "winnerList": [
              ["M", "", "1820", "ALSTAHAUG", "18", "Nordland"], ["K", "", "0301", "OSLO", "3", "Oslo"],
              ["M", "", "1941", "SKJERVØY", "19", "Troms"], ["K", "", "0236", "NES", "2", "Akershus"]
            ],
            "turnover": 64006388,
            "totalNumberOfWinners": 113820,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634308,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 933,
            "drawDate": "2014-03-22T18:00:00",
            "unsortednumbers": [21, 31, 25, 33, 29, 22, 18],
            "unsortedaddNumbers": [2, 11, 15],
            "numbers": [18, 21, 22, 25, 29, 31, 33],
            "addNumbers": [2, 11, 15],
            "prizes": ["5659690", "115835", "5950", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [2, 49, 526, 21220, 94570],
            "winnerList": [["M", "", "1247", "ASKØY", "12", "Hordaland"], ["M", "", "0602", "DRAMMEN", "6", "Buskerud"]],
            "turnover": 65241408,
            "totalNumberOfWinners": 116367,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634005,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 934,
            "drawDate": "2014-03-29T18:00:00",
            "unsortednumbers": [11, 15, 16, 1, 18, 13, 17],
            "unsortedaddNumbers": [12, 6, 30],
            "numbers": [1, 11, 13, 15, 16, 17, 18],
            "addNumbers": [6, 12, 30],
            "prizes": ["Gull-Lotto!", "77095", "6330", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [0, 71, 477, 20328, 84635],
            "turnover": 62918628,
            "totalNumberOfWinners": 105511,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634034,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 935,
            "drawDate": "2014-04-05T18:00:00",
            "unsortednumbers": [24, 23, 32, 28, 3, 19, 4],
            "unsortedaddNumbers": [16, 17, 7],
            "numbers": [3, 4, 19, 23, 24, 28, 32],
            "addNumbers": [7, 16, 17],
            "prizes": ["22604665", "93030", "7380", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [1, 63, 438, 21770, 100459],
            "winnerList": [["M", "", "1805", "NARVIK", "18", "Nordland"]],
            "turnover": 67367632,
            "totalNumberOfWinners": 122731,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634071,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 936,
            "drawDate": "2014-04-12T18:00:00",
            "unsortednumbers": [3, 10, 14, 11, 26, 16, 9],
            "unsortedaddNumbers": [34, 12, 18],
            "numbers": [3, 9, 10, 11, 14, 16, 26],
            "addNumbers": [12, 18, 34],
            "prizes": ["11748800", "107115", "6015", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [1, 55, 540, 25030, 101118],
            "winnerList": [["M", "", "1413", "HYLLESTAD", "14", "Sogn og Fjordane"]],
            "turnover": 67716428,
            "totalNumberOfWinners": 126744,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634317,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 937,
            "drawDate": "2014-04-19T18:00:00",
            "unsortednumbers": [34, 27, 6, 18, 24, 16, 30],
            "unsortedaddNumbers": [17, 25, 32],
            "numbers": [6, 16, 18, 24, 27, 30, 34],
            "addNumbers": [17, 25, 32],
            "prizes": ["2723670", "86440", "6605", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [5, 79, 570, 26314, 106312],
            "winnerList": [
              ["M", "", "0528", "ØSTRE TOTEN", "5", "Oppland"], ["M", "", "0806", "SKIEN", "8", "Telemark"],
              ["K", "", "0604", "KONGSBERG", "6", "Buskerud"], ["K", "", "2030", "SØR-VARANGER", "20", "Finnmark"],
              ["M", "", "1543", "NESSET", "15", "Møre og Romsdal"]
            ],
            "turnover": 78491964,
            "totalNumberOfWinners": 133280,
            "superlottoResult": {
              "id": 937,
              "drawDate": "2014-04-19T18:00:00",
              "numberOfWinners": 26,
              "prizeAmount": 2192305,
              "winnerList": [
                ["M", "", "0602", "DRAMMEN", "6", "Buskerud"], ["K", "", "0220", "ASKER", "2", "Akershus"],
                ["K", "", "0709", "LARVIK", "7", "Vestfold"], ["M", "", "1411", "GULEN", "14", "Sogn og Fjordane"],
                ["K", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "1103", "STAVANGER", "11", "Rogaland"],
                ["M", "", "1228", "ODDA", "12", "Hordaland"], ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"],
                ["M", "", "1201", "BERGEN", "12", "Hordaland"], ["K", "", "2027", "NESSEBY", "20", "Finnmark"],
                ["M", "", "1201", "BERGEN", "12", "Hordaland"], ["M", "", "1001", "KRISTIANSAND", "10", "Vest-Agder"],
                ["M", "", "1663", "MALVIK", "16", "Sør-Trøndelag"],
                ["K", "", "0106", "FREDRIKSTAD", "1", "Østfold"], ["M", "", "1813", "BRØNNØY", "18", "Nordland"],
                ["K", "", "0502", "GJØVIK", "5", "Oppland"], ["M", "", "0231", "SKEDSMO", "2", "Akershus"],
                ["M", "", "0412", "RINGSAKER", "4", "Hedmark"], ["M", "", "0106", "FREDRIKSTAD", "1", "Østfold"],
                ["M", "", "1902", "TROMSØ", "19", "Troms"], ["K", "", "0826", "TINN", "8", "Telemark"],
                ["M", "", "1744", "OVERHALLA", "17", "Nord-Trøndelag"], ["K", "", "1103", "STAVANGER", "11", "Rogaland"],
                ["M", "", "0814", "BAMBLE", "8", "Telemark"], ["M", "", "1001", "KRISTIANSAND", "10", "Vest-Agder"]
              ]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634317,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 938,
            "drawDate": "2014-04-26T18:00:00",
            "unsortednumbers": [31, 17, 26, 9, 29, 10, 8],
            "unsortedaddNumbers": [32, 4, 30],
            "numbers": [8, 9, 10, 17, 26, 29, 31],
            "addNumbers": [4, 30, 32],
            "prizes": ["2796555", "98405", "6405", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 57, 483, 21767, 90960],
            "winnerList": [
              ["K", "", "1018", "SØGNE", "10", "Vest-Agder"], ["M", "", "0605", "RINGERIKE", "6", "Buskerud"],
              ["M", "", "1201", "BERGEN", "12", "Hordaland"], ["K", "", "1247", "ASKØY", "12", "Hordaland"]
            ],
            "turnover": 64473992,
            "totalNumberOfWinners": 113271,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634312,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 939,
            "drawDate": "2014-05-03T18:00:00",
            "unsortednumbers": [27, 29, 30, 1, 9, 2, 8],
            "unsortedaddNumbers": [13, 21, 22],
            "numbers": [1, 2, 8, 9, 27, 29, 30],
            "addNumbers": [13, 21, 22],
            "prizes": ["2214440", "81645", "6050", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [5, 68, 506, 21918, 99329],
            "winnerList": [
              ["K", "", "1146", "TYSVÆR", "11", "Rogaland"], ["M", "", "0511", "DOVRE", "5", "Oppland"],
              ["K", "", "0219", "BÆRUM", "2", "Akershus"], ["K", "", "1663", "MALVIK", "16", "Sør-Trøndelag"],
              ["K", "", "1520", "ØRSTA", "15", "Møre og Romsdal"]
            ],
            "turnover": 63816736,
            "totalNumberOfWinners": 121826,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633915,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 940,
            "drawDate": "2014-05-10T18:00:00",
            "unsortednumbers": [23, 25, 34, 3, 26, 1, 5],
            "unsortedaddNumbers": [31, 32, 24],
            "numbers": [1, 3, 5, 23, 25, 26, 34],
            "addNumbers": [24, 31, 32],
            "prizes": ["10813225", "135550", "7350", "225", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [1, 40, 407, 18943, 77861],
            "winnerList": [["M", "", "0517", "SEL", "5", "Oppland"]],
            "turnover": 62324084,
            "totalNumberOfWinners": 97252,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 941,
            "drawDate": "2014-05-17T18:00:00",
            "unsortednumbers": [14, 30, 10, 11, 9, 8, 17],
            "unsortedaddNumbers": [3, 27, 26],
            "numbers": [8, 9, 10, 11, 14, 17, 30],
            "addNumbers": [3, 26, 27],
            "prizes": ["Gull-Lotto!", "93360", "6540", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [0, 54, 425, 18854, 88682],
            "turnover": 57948184,
            "totalNumberOfWinners": 108015,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633915,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 942,
            "drawDate": "2014-05-24T18:00:00",
            "unsortednumbers": [33, 34, 5, 21, 23, 4, 29],
            "unsortedaddNumbers": [3, 7, 16],
            "numbers": [4, 5, 21, 23, 29, 33, 34],
            "addNumbers": [3, 7, 16],
            "prizes": ["10564420", "104780", "7190", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [2, 53, 426, 19613, 90925],
            "winnerList": [["M", "", "0213", "SKI", "2", "Akershus"], ["M", "", "0101", "HALDEN", "1", "Østfold"]],
            "turnover": 63831908,
            "totalNumberOfWinners": 111019,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634308,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 943,
            "drawDate": "2014-05-31T18:00:00",
            "unsortednumbers": [32, 17, 34, 10, 14, 22, 2],
            "unsortedaddNumbers": [8, 24, 4],
            "numbers": [2, 10, 14, 17, 22, 32, 34],
            "addNumbers": [4, 8, 24],
            "prizes": ["3462285", "73355", "4590", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 71, 626, 22828, 87967],
            "winnerList": [
              ["M", "", "1653", "MELHUS", "16", "Sør-Trøndelag"],
              ["K", "", "0540", "SØR-AURDAL", "5", "Oppland"], ["K", "", "0815", "KRAGERØ", "8", "Telemark"]
            ],
            "turnover": 59866616,
            "totalNumberOfWinners": 111495,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634317,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 944,
            "drawDate": "2014-06-07T18:00:00",
            "unsortednumbers": [6, 20, 31, 25, 19, 12, 5],
            "unsortedaddNumbers": [7, 21, 17],
            "numbers": [5, 6, 12, 19, 20, 25, 31],
            "addNumbers": [7, 17, 21],
            "prizes": ["2563460", "85690", "6815", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 60, 416, 19781, 83787],
            "winnerList": [
              ["M", "", "0230", "LØRENSKOG", "2", "Akershus"], ["M", "", "1102", "SANDNES", "11", "Rogaland"],
              ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"], ["M", "", "1201", "BERGEN", "12", "Hordaland"]
            ],
            "turnover": 59099948,
            "totalNumberOfWinners": 104048,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 945,
            "drawDate": "2014-06-14T18:00:00",
            "unsortednumbers": [6, 24, 25, 26, 21, 16, 18],
            "unsortedaddNumbers": [15, 27, 12],
            "numbers": [6, 16, 18, 21, 24, 25, 26],
            "addNumbers": [12, 15, 27],
            "prizes": ["10566440", "108130", "6890", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [1, 49, 424, 20389, 89932],
            "winnerList": [["M", "", "0301", "OSLO", "3", "Oslo"]],
            "turnover": 60901676,
            "totalNumberOfWinners": 110795,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634239,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 946,
            "drawDate": "2014-06-21T18:00:00",
            "unsortednumbers": [5, 33, 11, 29, 20, 22, 6],
            "unsortedaddNumbers": [25, 8, 32],
            "numbers": [5, 6, 11, 20, 22, 29, 33],
            "addNumbers": [8, 25, 32],
            "prizes": ["3968025", "96275", "6470", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 62, 509, 22975, 99652],
            "winnerList": [
              ["M", "", "1851", "LØDINGEN", "18", "Nordland"],
              ["K", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"],
              ["M", "", "0221", "AURSKOG-HØLAND", "2", "Akershus"]
            ],
            "turnover": 68611416,
            "totalNumberOfWinners": 123201,
            "superlottoResult": {
              "id": 946,
              "drawDate": "2014-06-21T18:00:00",
              "numberOfWinners": 2,
              "prizeAmount": 14000000,
              "winnerList": [
                ["M", "", "1119", "HÅ", "11", "Rogaland"], ["K", "", "1505", "KRISTIANSUND", "15", "Møre og Romsdal"]
              ]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633786,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 947,
            "drawDate": "2014-06-28T18:00:00",
            "unsortednumbers": [5, 2, 9, 22, 14, 30, 3],
            "unsortedaddNumbers": [8, 34, 31],
            "numbers": [2, 3, 5, 9, 14, 22, 30],
            "addNumbers": [8, 31, 34],
            "prizes": ["2744570", "117125", "5695", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 47, 533, 23705, 93590],
            "winnerList": [
              ["K", "", "1663", "MALVIK", "16", "Sør-Trøndelag"], ["M", "", "0633", "NORE OG UVDAL", "6", "Buskerud"],
              ["M", "", "1424", "ÅRDAL", "14", "Sogn og Fjordane"], ["M", "", "0219", "BÆRUM", "2", "Akershus"]
            ],
            "turnover": 63275452,
            "totalNumberOfWinners": 117879,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633786,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 948,
            "drawDate": "2014-07-05T18:00:00",
            "unsortednumbers": [29, 9, 25, 3, 13, 21, 24],
            "unsortedaddNumbers": [11, 27, 19],
            "numbers": [3, 9, 13, 21, 24, 25, 29],
            "addNumbers": [11, 19, 27],
            "prizes": ["2186710", "83065", "5185", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [5, 66, 583, 23615, 98671],
            "winnerList": [
              ["M", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0806", "SKIEN", "8", "Telemark"],
              ["K", "", "0219", "BÆRUM", "2", "Akershus"], ["M", "", "0124", "ASKIM", "1", "Østfold"],
              ["K", "", "1443", "EID", "14", "Sogn og Fjordane"]
            ],
            "turnover": 63017676,
            "totalNumberOfWinners": 122940,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634394,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 949,
            "drawDate": "2014-07-12T18:00:00",
            "unsortednumbers": [22, 1, 20, 19, 24, 13, 15],
            "unsortedaddNumbers": [9, 28, 4],
            "numbers": [1, 13, 15, 19, 20, 22, 24],
            "addNumbers": [4, 9, 28],
            "prizes": ["10641220", "106715", "7935", "225", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [1, 50, 371, 18616, 83790],
            "winnerList": [["M", "", "1247", "ASKØY", "12", "Hordaland"]],
            "turnover": 61332708,
            "totalNumberOfWinners": 102828,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634005,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 950,
            "drawDate": "2014-07-19T18:00:00",
            "unsortednumbers": [10, 25, 12, 30, 28, 6, 29],
            "unsortedaddNumbers": [33, 7, 15],
            "numbers": [6, 10, 12, 25, 28, 29, 30],
            "addNumbers": [7, 15, 33],
            "prizes": ["3587395", "88465", "6675", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 61, 446, 20778, 89070],
            "winnerList": [
              ["K", "", "1201", "BERGEN", "12", "Hordaland"], ["K", "", "0602", "DRAMMEN", "6", "Buskerud"],
              ["M", "", "0538", "NORDRE LAND", "5", "Oppland"]
            ],
            "turnover": 62029924,
            "totalNumberOfWinners": 110358,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633758,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 951,
            "drawDate": "2014-07-26T18:00:00",
            "unsortednumbers": [16, 10, 14, 2, 33, 27, 12],
            "unsortedaddNumbers": [9, 4, 3],
            "numbers": [2, 10, 12, 14, 16, 27, 33],
            "addNumbers": [3, 4, 9],
            "prizes": ["3443155", "90870", "5760", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 57, 496, 21498, 94181],
            "winnerList": [
              ["K", "", "0101", "HALDEN", "1", "Østfold"], ["K", "", "1813", "BRØNNØY", "18", "Nordland"],
              ["M", "", "1106", "HAUGESUND", "11", "Rogaland"]
            ],
            "turnover": 59535900,
            "totalNumberOfWinners": 116235,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634394,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 952,
            "drawDate": "2014-08-02T18:00:00",
            "unsortednumbers": [32, 13, 18, 24, 1, 21, 29],
            "unsortedaddNumbers": [12, 7, 27],
            "numbers": [1, 13, 18, 21, 24, 29, 32],
            "addNumbers": [7, 12, 27],
            "prizes": ["1487195", "74570", "6680", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [7, 70, 431, 18720, 85639],
            "winnerList": [
              ["K", "", "1653", "MELHUS", "16", "Sør-Trøndelag"], ["M", "", "0235", "ULLENSAKER", "2", "Akershus"],
              ["M", "", "0104", "MOSS", "1", "Østfold"], ["M", "", "0301", "OSLO", "3", "Oslo"],
              ["M", "", "0301", "OSLO", "3", "Oslo"], ["K", "", "0237", "EIDSVOLL", "2", "Akershus"],
              ["K", "", "1504", "ÅLESUND", "15", "Møre og Romsdal"]
            ],
            "turnover": 60002196,
            "totalNumberOfWinners": 104867,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634370,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 953,
            "drawDate": "2014-08-09T18:00:00",
            "unsortednumbers": [19, 18, 23, 2, 6, 34, 15],
            "unsortedaddNumbers": [9, 26, 1],
            "numbers": [2, 6, 15, 18, 19, 23, 34],
            "addNumbers": [1, 9, 26],
            "prizes": ["5202580", "81520", "5935", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [2, 64, 485, 20175, 87541],
            "winnerList": [
              ["M", "", "1813", "BRØNNØY", "18", "Nordland"], ["M", "", "0104", "MOSS", "1", "Østfold"]
            ],
            "turnover": 59972112,
            "totalNumberOfWinners": 108267,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634317,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 954,
            "drawDate": "2014-08-16T18:00:00",
            "unsortednumbers": [24, 33, 2, 27, 12, 3, 20],
            "unsortedaddNumbers": [30, 17, 16],
            "numbers": [2, 3, 12, 20, 24, 27, 33],
            "addNumbers": [16, 17, 30],
            "prizes": ["5301260", "90110", "6530", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [2, 59, 449, 20550, 92048],
            "winnerList": [["K", "", "0624", "ØVRE EIKER", "6", "Buskerud"], ["M", "", "0403", "HAMAR", "4", "Hedmark"]],
            "turnover": 61109660,
            "totalNumberOfWinners": 113108,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633786,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 955,
            "drawDate": "2014-08-23T18:00:00",
            "unsortednumbers": [28, 33, 21, 31, 14, 10, 24],
            "unsortedaddNumbers": [9, 4, 11],
            "numbers": [10, 14, 21, 24, 28, 31, 33],
            "addNumbers": [4, 9, 11],
            "prizes": ["Gull-Lotto!", "83920", "5385", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [0, 66, 567, 23163, 94729],
            "turnover": 63664152,
            "totalNumberOfWinners": 118525,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634394,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 956,
            "drawDate": "2014-08-30T18:00:00",
            "unsortednumbers": [13, 6, 2, 21, 5, 27, 24],
            "unsortedaddNumbers": [29, 26, 12],
            "numbers": [2, 5, 6, 13, 21, 24, 27],
            "addNumbers": [12, 26, 29],
            "prizes": ["5974795", "73240", "5275", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 88, 674, 26636, 112799],
            "winnerList": [
              ["K", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "1902", "TROMSØ", "19", "Troms"],
              ["M", "", "1925", "SØRREISA", "19", "Troms"], ["M", "", "1201", "BERGEN", "12", "Hordaland"]
            ],
            "turnover": 74083284,
            "totalNumberOfWinners": 140201,
            "superlottoResult": {
              "id": 956,
              "drawDate": "2014-08-30T18:00:00",
              "numberOfWinners": 17,
              "prizeAmount": 1882350,
              "winnerList": [
                ["M", "", "1219", "BØMLO", "12", "Hordaland"], ["M", "", "0301", "OSLO", "3", "Oslo"],
                ["M", "", "0605", "RINGERIKE", "6", "Buskerud"], ["M", "", "1201", "BERGEN", "12", "Hordaland"],
                ["K", "", "0235", "ULLENSAKER", "2", "Akershus"], ["K", "", "1804", "BODØ", "18", "Nordland"],
                ["M", "", "0529", "VESTRE TOTEN", "5", "Oppland"], ["M", "", "1902", "TROMSØ", "19", "Troms"],
                ["M", "", "0235", "ULLENSAKER", "2", "Akershus"], ["K", "", "1001", "KRISTIANSAND", "10", "Vest-Agder"],
                ["M", "", "0937", "EVJE OG HORNNES", "9", "Aust-Agder"], ["M", "", "0227", "FET", "2", "Akershus"],
                ["K", "", "1211", "ETNE", "12", "Hordaland"], ["M", "", "0815", "KRAGERØ", "8", "Telemark"],
                ["M", "", "0231", "SKEDSMO", "2", "Akershus"], ["M", "", "0106", "FREDRIKSTAD", "1", "Østfold"],
                ["K", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"]
              ]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634370,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 957,
            "drawDate": "2014-09-06T18:00:00",
            "unsortednumbers": [12, 6, 9, 2, 3, 1, 29],
            "unsortedaddNumbers": [13, 34, 31],
            "numbers": [1, 2, 3, 6, 9, 12, 29],
            "addNumbers": [13, 31, 34],
            "prizes": ["3654830", "77435", "4040", "160", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 71, 750, 26715, 91573],
            "winnerList": [
              ["M", "", "0135", "RÅDE", "1", "Østfold"], ["K", "", "1201", "BERGEN", "12", "Hordaland"],
              ["M", "", "0231", "SKEDSMO", "2", "Akershus"]
            ],
            "turnover": 63195992,
            "totalNumberOfWinners": 119112,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634100,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 958,
            "drawDate": "2014-09-13T18:00:00",
            "unsortednumbers": [15, 6, 33, 16, 19, 13, 8],
            "unsortedaddNumbers": [24, 23, 3],
            "numbers": [6, 8, 13, 15, 16, 19, 33],
            "addNumbers": [3, 23, 24],
            "prizes": ["2782830", "111630", "8190", "225", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 50, 376, 19713, 93056],
            "winnerList": [
              ["M", "", "0230", "LØRENSKOG", "2", "Akershus"], ["K", "", "1201", "BERGEN", "12", "Hordaland"],
              ["K", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "1505", "KRISTIANSUND", "15", "Møre og Romsdal"]
            ],
            "turnover": 64157512,
            "totalNumberOfWinners": 113199,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634369,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 959,
            "drawDate": "2014-09-20T18:00:00",
            "unsortednumbers": [28, 24, 15, 33, 32, 26, 31],
            "unsortedaddNumbers": [12, 14, 20],
            "numbers": [15, 24, 26, 28, 31, 32, 33],
            "addNumbers": [12, 14, 20],
            "prizes": ["6033840", "88985", "6520", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [2, 68, 512, 21859, 94820],
            "winnerList": [["M", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0231", "SKEDSMO", "2", "Akershus"]],
            "turnover": 69554400,
            "totalNumberOfWinners": 117261,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633758,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 960,
            "drawDate": "2014-09-27T18:00:00",
            "unsortednumbers": [22, 19, 16, 1, 31, 20, 25],
            "unsortedaddNumbers": [27, 17, 32],
            "numbers": [1, 16, 19, 20, 22, 25, 31],
            "addNumbers": [17, 27, 32],
            "prizes": ["Gull-Lotto!", "117345", "8070", "230", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [0, 50, 401, 19973, 86855],
            "turnover": 67441620,
            "totalNumberOfWinners": 107279,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634127,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 961,
            "drawDate": "2014-10-04T18:00:00",
            "unsortednumbers": [3, 27, 9, 15, 33, 16, 22],
            "unsortedaddNumbers": [11, 25, 26],
            "numbers": [3, 9, 15, 16, 22, 27, 33],
            "addNumbers": [11, 25, 26],
            "prizes": ["2363550", "54400", "2160", "125", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [10, 110, 1527, 37342, 113174],
            "winnerList": [
              ["K", "", "0230", "LØRENSKOG", "2", "Akershus"], ["K", "", "1804", "BODØ", "18", "Nordland"],
              ["M", "", "0106", "FREDRIKSTAD", "1", "Østfold"], ["K", "", "0124", "ASKIM", "1", "Østfold"],
              ["M", "", "1554", "AVERØY", "15", "Møre og Romsdal"], ["K", "", "1201", "BERGEN", "12", "Hordaland"],
              ["M", "", "1929", "BERG", "19", "Troms"], ["M", "", "1617", "HITRA", "16", "Sør-Trøndelag"],
              ["M", "", "1548", "FRÆNA", "15", "Møre og Romsdal"], ["M", "", "1931", "LENVIK", "19", "Troms"]
            ],
            "turnover": 68786228,
            "totalNumberOfWinners": 152163,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633915,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 962,
            "drawDate": "2014-10-11T18:00:00",
            "unsortednumbers": [5, 26, 28, 15, 24, 22, 21],
            "unsortedaddNumbers": [2, 23, 34],
            "numbers": [5, 15, 21, 22, 24, 26, 28],
            "addNumbers": [2, 23, 34],
            "prizes": ["2824230", "84545", "6160", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 67, 507, 22990, 100922],
            "winnerList": [
              ["M", "", "0602", "DRAMMEN", "6", "Buskerud"], ["K", "", "1106", "HAUGESUND", "11", "Rogaland"],
              ["M", "", "0819", "NOME", "8", "Telemark"], ["M", "", "1127", "RANDABERG", "11", "Rogaland"]
            ],
            "turnover": 65111940,
            "totalNumberOfWinners": 124490,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634369,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 963,
            "drawDate": "2014-10-18T18:00:00",
            "unsortednumbers": [1, 18, 20, 26, 29, 2, 5],
            "unsortedaddNumbers": [28, 23, 32],
            "numbers": [1, 2, 5, 18, 20, 26, 29],
            "addNumbers": [23, 28, 32],
            "prizes": ["2860530", "130395", "7625", "205", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 44, 415, 21930, 93699],
            "winnerList": [
              ["M", "", "0427", "ELVERUM", "4", "Hedmark"], ["K", "", "1837", "MELØY", "18", "Nordland"],
              ["M", "", "1931", "LENVIK", "19", "Troms"], ["K", "", "1102", "SANDNES", "11", "Rogaland"]
            ],
            "turnover": 65948928,
            "totalNumberOfWinners": 116092,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634127,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 964,
            "drawDate": "2014-10-25T18:00:00",
            "unsortednumbers": [27, 20, 1, 10, 13, 15, 31],
            "unsortedaddNumbers": [34, 21, 17],
            "numbers": [1, 10, 13, 15, 20, 27, 31],
            "addNumbers": [17, 21, 34],
            "prizes": ["2831350", "82300", "6365", "195", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 69, 492, 22757, 97167],
            "winnerList": [
              ["K", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0512", "LESJA", "5", "Oppland"],
              ["M", "", "1201", "BERGEN", "12", "Hordaland"], ["K", "", "0219", "BÆRUM", "2", "Akershus"]
            ],
            "turnover": 65276156,
            "totalNumberOfWinners": 120489,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633676,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 965,
            "drawDate": "2014-11-01T18:00:00",
            "unsortednumbers": [15, 4, 26, 33, 16, 12, 30],
            "unsortedaddNumbers": [28, 11, 1],
            "numbers": [4, 12, 15, 16, 26, 30, 33],
            "addNumbers": [1, 11, 28],
            "prizes": ["3812930", "114715", "6085", "205", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 50, 520, 22086, 95183],
            "winnerList": [
              ["M", "", "1617", "HITRA", "16", "Sør-Trøndelag"], ["M", "", "1121", "TIME", "11", "Rogaland"],
              ["M", "", "1902", "TROMSØ", "19", "Troms"]
            ],
            "turnover": 65929704,
            "totalNumberOfWinners": 117842,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634071,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 966,
            "drawDate": "2014-11-08T18:00:00",
            "unsortednumbers": [20, 27, 28, 12, 23, 16, 25],
            "unsortedaddNumbers": [13, 18, 8],
            "numbers": [12, 16, 20, 23, 25, 27, 28],
            "addNumbers": [8, 13, 18],
            "prizes": ["2309550", "71485", "5630", "190", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [5, 81, 567, 24279, 108012],
            "winnerList": [
              ["M", "", "1813", "BRØNNØY", "18", "Nordland"],
              ["M", "", "1505", "KRISTIANSUND", "15", "Møre og Romsdal"],
              ["M", "", "1721", "VERDAL", "17", "Nord-Trøndelag"], ["M", "", "1805", "NARVIK", "18", "Nordland"],
              ["M", "", "0105", "SARPSBORG", "1", "Østfold"]
            ],
            "turnover": 66557732,
            "totalNumberOfWinners": 132944,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 967,
            "drawDate": "2014-11-15T18:00:00",
            "unsortednumbers": [33, 17, 28, 4, 15, 12, 23],
            "unsortedaddNumbers": [25, 2, 18],
            "numbers": [4, 12, 15, 17, 23, 28, 33],
            "addNumbers": [2, 18, 25],
            "prizes": ["5911465", "81210", "6135", "185", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [2, 73, 533, 25053, 103379],
            "winnerList": [["M", "", "1251", "VAKSDAL", "12", "Hordaland"], ["K", "", "0403", "HAMAR", "4", "Hedmark"]],
            "turnover": 68143724,
            "totalNumberOfWinners": 129040,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634394,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 968,
            "drawDate": "2014-11-22T18:00:00",
            "unsortednumbers": [1, 21, 18, 34, 19, 3, 9],
            "unsortedaddNumbers": [7, 25, 20],
            "numbers": [1, 3, 9, 18, 19, 21, 34],
            "addNumbers": [7, 20, 25],
            "prizes": ["1951965", "91760", "6075", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [6, 64, 533, 23298, 99192],
            "winnerList": [
              ["K", "", "1238", "KVAM", "12", "Hordaland"], ["K", "", "1146", "TYSVÆR", "11", "Rogaland"],
              ["M", "", "1938", "LYNGEN", "19", "Troms"], ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"],
              ["K", "", "1822", "LEIRFJORD", "18", "Nordland"], ["K", "", "1563", "SUNNDAL", "15", "Møre og Romsdal"]
            ],
            "turnover": 67503244,
            "totalNumberOfWinners": 123093,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634034,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 969,
            "drawDate": "2014-11-29T18:00:00",
            "unsortednumbers": [34, 17, 33, 3, 28, 22, 14],
            "unsortedaddNumbers": [8, 31, 18],
            "numbers": [3, 14, 17, 22, 28, 33, 34],
            "addNumbers": [8, 18, 31],
            "prizes": ["2877060", "80145", "6120", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 72, 520, 23541, 95130],
            "winnerList": [
              ["M", "", "1756", "INDERØY", "17", "Nord-Trøndelag"], ["M", "", "0906", "ARENDAL", "9", "Aust-Agder"],
              ["K", "", "0716", "RE", "7", "Vestfold"], ["M", "", "2030", "SØR-VARANGER", "20", "Finnmark"]
            ],
            "turnover": 66329944,
            "totalNumberOfWinners": 119267,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 970,
            "drawDate": "2014-12-06T18:00:00",
            "unsortednumbers": [7, 30, 19, 34, 14, 33, 15],
            "unsortedaddNumbers": [20, 31, 27],
            "numbers": [7, 14, 15, 19, 30, 33, 34],
            "addNumbers": [20, 27, 31],
            "prizes": ["2241475", "140495", "7865", "240", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [5, 40, 394, 18689, 83918],
            "winnerList": [
              ["K", "", "0105", "SARPSBORG", "1", "Østfold"], ["M", "", "1201", "BERGEN", "12", "Hordaland"],
              ["M", "", "0230", "LØRENSKOG", "2", "Akershus"], ["M", "", "0412", "RINGSAKER", "4", "Hedmark"],
              ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"]
            ],
            "turnover": 64595908,
            "totalNumberOfWinners": 103046,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633955,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 971,
            "drawDate": "2014-12-13T18:00:00",
            "unsortednumbers": [14, 6, 25, 24, 28, 31, 16],
            "unsortedaddNumbers": [13, 10, 23],
            "numbers": [6, 14, 16, 24, 25, 28, 31],
            "addNumbers": [10, 13, 23],
            "prizes": ["3849825", "96520", "5960", "210", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 60, 536, 21724, 93253],
            "winnerList": [
              ["K", "", "1103", "STAVANGER", "11", "Rogaland"], ["M", "", "0238", "NANNESTAD", "2", "Akershus"],
              ["M", "", "1201", "BERGEN", "12", "Hordaland"]
            ],
            "turnover": 66567660,
            "totalNumberOfWinners": 115576,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634127,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 972,
            "drawDate": "2014-12-20T18:00:00",
            "unsortednumbers": [11, 28, 22, 2, 13, 12, 15],
            "unsortedaddNumbers": [17, 24, 20],
            "numbers": [2, 11, 12, 13, 15, 22, 28],
            "addNumbers": [17, 20, 24],
            "prizes": ["3307265", "80895", "6570", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 82, 557, 27661, 116733],
            "winnerList": [
              ["M", "", "0301", "OSLO", "3", "Oslo"], ["K", "", "0237", "EIDSVOLL", "2", "Akershus"],
              ["M", "", "2011", "KAUTOKEINO", "20", "Finnmark"], ["K", "", "0602", "DRAMMEN", "6", "Buskerud"]
            ],
            "turnover": 76248240,
            "totalNumberOfWinners": 145037,
            "superlottoResult": {
              "id": 972,
              "drawDate": "2014-12-20T18:00:00",
              "numberOfWinners": 13,
              "prizeAmount": 4384615,
              "winnerList": [
                ["M", "", "1201", "BERGEN", "12", "Hordaland"], ["K", "", "1837", "MELØY", "18", "Nordland"],
                ["M", "", "1832", "HEMNES", "18", "Nordland"], ["M", "", "0138", "HOBØL", "1", "Østfold"],
                ["M", "", "0301", "OSLO", "3", "Oslo"], ["K", "", "0219", "BÆRUM", "2", "Akershus"],
                ["K", "", "1263", "LINDÅS", "12", "Hordaland"], ["M", "", "1243", "OS", "12", "Hordaland"],
                ["M", "", "1106", "HAUGESUND", "11", "Rogaland"], ["M", "", "1235", "VOSS", "12", "Hordaland"],
                ["M", "", "1102", "SANDNES", "11", "Rogaland"], ["M", "", "1401", "FLORA", "14", "Sogn og Fjordane"],
                ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"]
              ]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633919,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 973,
            "drawDate": "2014-12-27T18:00:00",
            "unsortednumbers": [33, 24, 12, 16, 1, 26, 20],
            "unsortedaddNumbers": [9, 15, 18],
            "numbers": [1, 12, 16, 20, 24, 26, 33],
            "addNumbers": [9, 15, 18],
            "prizes": ["2886210", "76170", "6880", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [4, 76, 464, 21064, 96181],
            "winnerList": [
              ["K", "", "0904", "GRIMSTAD", "9", "Aust-Agder"], ["M", "", "0105", "SARPSBORG", "1", "Østfold"],
              ["M", "", "1804", "BODØ", "18", "Nordland"], ["M", "", "1001", "KRISTIANSAND", "10", "Vest-Agder"]
            ],
            "turnover": 66540932,
            "totalNumberOfWinners": 117789,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634100,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 974,
            "drawDate": "2015-01-03T18:00:00",
            "unsortednumbers": [9, 21, 16, 13, 31, 5, 19],
            "unsortedaddNumbers": [6, 23, 20],
            "numbers": [5, 9, 13, 16, 19, 21, 31],
            "addNumbers": [6, 20, 23],
            "prizes": ["3861425", "86695", "5395", "190", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 67, 594, 24159, 101963],
            "winnerList": [
              ["K", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"],
              ["K", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"], ["M", "", "2012", "ALTA", "20", "Finnmark"]
            ],
            "turnover": 66768160,
            "totalNumberOfWinners": 126786,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634239,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 975,
            "drawDate": "2015-01-10T18:00:00",
            "unsortednumbers": [18, 5, 8, 6, 32, 23, 22],
            "unsortedaddNumbers": [9, 16, 12],
            "numbers": [5, 6, 8, 18, 22, 23, 32],
            "addNumbers": [9, 12, 16],
            "prizes": ["3766160", "91375", "6350", "200", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 62, 492, 22208, 101295],
            "winnerList": [
              ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"], ["M", "", "0220", "ASKER", "2", "Akershus"],
              ["M", "", "0215", "FROGN", "2", "Akershus"]
            ],
            "turnover": 65120984,
            "totalNumberOfWinners": 124060,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 976,
            "drawDate": "2015-01-17T18:00:00",
            "unsortednumbers": [27, 8, 5, 14, 28, 18, 20],
            "unsortedaddNumbers": [30, 31, 1],
            "numbers": [5, 8, 14, 18, 20, 27, 28],
            "addNumbers": [1, 30, 31],
            "prizes": ["11552855", "80455", "6300", "180", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [1, 72, 507, 25201, 98574],
            "winnerList": [["K", "", "0214", "ÅS", "2", "Akershus"]],
            "turnover": 66587080,
            "totalNumberOfWinners": 124355,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634071,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 977,
            "drawDate": "2015-01-24T18:00:00",
            "unsortednumbers": [25, 12, 10, 33, 5, 32, 11],
            "unsortedaddNumbers": [2, 28, 30],
            "numbers": [5, 10, 11, 12, 25, 32, 33],
            "addNumbers": [2, 28, 30],
            "prizes": ["5966350", "115065", "7205", "235", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [2, 52, 458, 20057, 94686],
            "winnerList": [["M", "", "1201", "BERGEN", "12", "Hordaland"], ["Andelsbank", "", "", "", "", ""]],
            "turnover": 68776372,
            "totalNumberOfWinners": 115255,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634369,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 978,
            "drawDate": "2015-01-31T18:00:00",
            "unsortednumbers": [11, 13, 18, 1, 14, 32, 31],
            "unsortedaddNumbers": [25, 3, 20],
            "numbers": [1, 11, 13, 14, 18, 31, 32],
            "addNumbers": [3, 20, 25],
            "prizes": ["3835610", "103035", "9645", "240", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 56, 330, 19090, 88293],
            "winnerList": [
              ["M", "", "0403", "HAMAR", "4", "Hedmark"], ["M", "", "0704", "TØNSBERG", "7", "Vestfold"],
              ["M", "", "1014", "VENNESLA", "10", "Vest-Agder"]
            ],
            "turnover": 66321792,
            "totalNumberOfWinners": 107772,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634034,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 979,
            "drawDate": "2015-02-07T18:00:00",
            "unsortednumbers": [24, 29, 32, 4, 15, 17, 23],
            "unsortedaddNumbers": [2, 7, 26],
            "numbers": [4, 15, 17, 23, 24, 29, 32],
            "addNumbers": [2, 7, 26],
            "prizes": ["11261590", "95710", "7000", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [1, 59, 445, 21098, 96953],
            "winnerList": [["K", "", "0301", "OSLO", "3", "Oslo"]],
            "turnover": 64908320,
            "totalNumberOfWinners": 118556,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634312,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 980,
            "drawDate": "2015-02-14T18:00:00",
            "unsortednumbers": [4, 19, 22, 2, 29, 17, 21],
            "unsortedaddNumbers": [3, 32, 1],
            "numbers": [2, 4, 17, 19, 21, 22, 29],
            "addNumbers": [1, 3, 32],
            "prizes": ["3731770", "130550", "5745", "195", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [3, 43, 539, 22828, 92631],
            "winnerList": [
              ["K", "", "1815", "VEGA", "18", "Nordland"], ["M", "", "0602", "DRAMMEN", "6", "Buskerud"],
              ["Andelsbank", "", "", "", "", ""]
            ],
            "turnover": 64526320,
            "totalNumberOfWinners": 116044,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 981,
            "drawDate": "2015-02-21T18:00:00",
            "unsortednumbers": [13, 24, 27, 20, 21, 5, 30],
            "unsortedaddNumbers": [31, 6, 26],
            "numbers": [5, 13, 20, 21, 24, 27, 30],
            "addNumbers": [6, 26, 31],
            "prizes": ["5743350", "117545", "6775", "215", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [2, 49, 469, 21032, 89911],
            "winnerList": [["K", "", "0106", "FREDRIKSTAD", "1", "Østfold"], ["M", "", "0441", "OS", "4", "Hedmark"]],
            "turnover": 66205808,
            "totalNumberOfWinners": 111463,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634189,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 982,
            "drawDate": "2015-02-28T18:00:00",
            "unsortednumbers": [28, 20, 12, 17, 33, 34, 27],
            "unsortedaddNumbers": [14, 9, 30],
            "numbers": [12, 17, 20, 27, 28, 33, 34],
            "addNumbers": [9, 14, 30],
            "prizes": ["11212760", "110245", "7000", "215", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [1, 51, 443, 20764, 93614],
            "winnerList": [["K", "", "1001", "KRISTIANSAND", "10", "Vest-Agder"]],
            "turnover": 64626880,
            "totalNumberOfWinners": 114873,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634308,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 983,
            "drawDate": "2015-03-07T18:00:00",
            "unsortednumbers": [24, 12, 23, 2, 20, 33, 1],
            "unsortedaddNumbers": [10, 9, 31],
            "numbers": [1, 2, 12, 20, 23, 24, 33],
            "addNumbers": [9, 10, 31],
            "prizes": ["10976140", "125085", "6960", "220", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [1, 44, 436, 19771, 90247],
            "winnerList": [["M", "", "0625", "NEDRE EIKER", "6", "Buskerud"]],
            "turnover": 63263080,
            "totalNumberOfWinners": 110499,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633575,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 984,
            "drawDate": "2015-03-14T18:00:00",
            "unsortednumbers": [12, 21, 22, 13, 30, 24, 4],
            "unsortedaddNumbers": [29, 6, 14],
            "numbers": [4, 12, 13, 21, 22, 24, 30],
            "addNumbers": [6, 14, 29],
            "prizes": ["11326155", "109215", "6190", "210", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 + 1 rette"],
            "winnerCountTable": [1, 52, 506, 21321, 94258],
            "winnerList": [["M", "", "0301", "OSLO", "3", "Oslo"]],
            "turnover": 65280452,
            "totalNumberOfWinners": 116138,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633919,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 985,
            "drawDate": "2015-03-21T18:00:00",
            "unsortednumbers": [14, 29, 18, 12, 9, 5, 17],
            "unsortedaddNumbers": [22],
            "numbers": [5, 9, 12, 14, 17, 18, 29],
            "addNumbers": [22],
            "prizes": ["6939505", "93270", "3340", "90", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 21, 614, 23643, 329764],
            "winnerList": [["M", "", "1201", "BERGEN", "12", "Hordaland"], ["K", "", "1260", "RADØY", "12", "Hordaland"]],
            "turnover": 74618357,
            "totalNumberOfWinners": 354044,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633955,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 986,
            "drawDate": "2015-03-28T18:00:00",
            "unsortednumbers": [13, 22, 5, 33, 16, 25, 26],
            "unsortedaddNumbers": [12],
            "numbers": [5, 13, 16, 22, 25, 26, 33],
            "addNumbers": [12],
            "prizes": ["Gull-Lotto!", "117770", "3995", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [0, 17, 525, 21796, 305369],
            "turnover": 76272295,
            "totalNumberOfWinners": 327707,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634005,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 987,
            "drawDate": "2015-04-04T18:00:00",
            "unsortednumbers": [34, 2, 20, 22, 3, 33, 7],
            "unsortedaddNumbers": [29],
            "numbers": [2, 3, 7, 20, 22, 33, 34],
            "addNumbers": [29],
            "prizes": ["4367080", "154140", "4380", "110", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [7, 15, 553, 23393, 337523],
            "winnerList": [
              ["M", "", "1201", "BERGEN", "12", "Hordaland"], ["M", "", "0904", "GRIMSTAD", "9", "Aust-Agder"],
              ["M", "", "1943", "KVÆNANGEN", "19", "Troms"],
              ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"], ["K", "", "1924", "MÅLSELV", "19", "Troms"],
              ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"], ["Andelsbank", "", "", "", "", ""]
            ],
            "turnover": 88080234,
            "totalNumberOfWinners": 361491,
            "superlottoResult": {
              "id": 987,
              "drawDate": "2015-04-04T18:00:00",
              "numberOfWinners": 20,
              "prizeAmount": 2450000,
              "winnerList": [
                ["K", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0805", "PORSGRUNN", "8", "Telemark"],
                ["M", "", "0701", "HORTEN", "7", "Vestfold"], ["K", "", "1813", "BRØNNØY", "18", "Nordland"],
                ["M", "", "1256", "MELAND", "12", "Hordaland"], ["M", "", "2012", "ALTA", "20", "Finnmark"],
                ["M", "", "2018", "MÅSØY", "20", "Finnmark"], ["M", "", "1903", "HARSTAD", "19", "Troms"],
                ["K", "", "0428", "TRYSIL", "4", "Hedmark"], ["M", "", "1505", "KRISTIANSUND", "15", "Møre og Romsdal"],
                ["M", "", "0111", "HVALER", "1", "Østfold"], ["M", "", "1201", "BERGEN", "12", "Hordaland"],
                ["M", "", "1813", "BRØNNØY", "18", "Nordland"], ["K", "", "0301", "OSLO", "3", "Oslo"],
                ["M", "", "0412", "RINGSAKER", "4", "Hedmark"], ["M", "", "1719", "LEVANGER", "17", "Nord-Trøndelag"],
                ["M", "", "1246", "FJELL", "12", "Hordaland"], ["K", "", "0301", "OSLO", "3", "Oslo"],
                ["K", "", "1638", "ORKDAL", "16", "Sør-Trøndelag"], ["K", "", "1804", "BODØ", "18", "Nordland"]
              ]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634308,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 988,
            "drawDate": "2015-04-11T18:00:00",
            "unsortednumbers": [28, 18, 29, 20, 32, 14, 1],
            "unsortedaddNumbers": [15],
            "numbers": [1, 14, 18, 20, 28, 29, 32],
            "addNumbers": [15],
            "prizes": ["Gull-Lotto!", "85415", "3895", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [0, 24, 551, 20459, 296206],
            "turnover": 78098280,
            "totalNumberOfWinners": 317240,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634034,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 989,
            "drawDate": "2015-04-18T18:00:00",
            "unsortednumbers": [27, 28, 34, 14, 2, 13, 16],
            "unsortedaddNumbers": [11],
            "numbers": [2, 13, 14, 16, 27, 28, 34],
            "addNumbers": [11],
            "prizes": ["30017440", "121455", "4360", "105", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 18, 525, 22766, 318283],
            "winnerList": [["M", "", "0301", "OSLO", "3", "Oslo"]],
            "turnover": 83285810,
            "totalNumberOfWinners": 341593,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 990,
            "drawDate": "2015-04-25T18:00:00",
            "unsortednumbers": [31, 24, 5, 17, 22, 15, 10],
            "unsortedaddNumbers": [3],
            "numbers": [5, 10, 15, 17, 22, 24, 31],
            "addNumbers": [3],
            "prizes": ["Gull-Lotto!", "98605", "4020", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [0, 21, 539, 22710, 305801],
            "turnover": 78887730,
            "totalNumberOfWinners": 329071,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634317,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 991,
            "drawDate": "2015-05-02T18:00:00",
            "unsortednumbers": [15, 9, 14, 17, 12, 29, 2],
            "unsortedaddNumbers": [20],
            "numbers": [2, 9, 12, 14, 15, 17, 29],
            "addNumbers": [20],
            "prizes": ["29821360", "101800", "4515", "105", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 21, 496, 22841, 326276],
            "winnerList": [["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"]],
            "turnover": 81442173,
            "totalNumberOfWinners": 349635,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634317,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 992,
            "drawDate": "2015-05-09T18:00:00",
            "unsortednumbers": [26, 10, 31, 11, 15, 22, 2],
            "unsortedaddNumbers": [8],
            "numbers": [2, 10, 11, 15, 22, 26, 31],
            "addNumbers": [8],
            "prizes": ["7051655", "48545", "3340", "95", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 41, 624, 23693, 311051],
            "winnerList": [["M", "", "1103", "STAVANGER", "11", "Rogaland"], ["Andelsbank", "", "", "", "", ""]],
            "turnover": 75824293,
            "totalNumberOfWinners": 335411,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634239,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 993,
            "drawDate": "2015-05-16T18:00:00",
            "unsortednumbers": [28, 2, 24, 26, 5, 34, 4],
            "unsortedaddNumbers": [20],
            "numbers": [2, 4, 5, 24, 26, 28, 34],
            "addNumbers": [20],
            "prizes": ["14450430", "145665", "4505", "120", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 14, 474, 18846, 280437],
            "winnerList": [["K", "", "0216", "NESODDEN", "2", "Akershus"]],
            "turnover": 77690495,
            "totalNumberOfWinners": 299772,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633915,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 994,
            "drawDate": "2015-05-23T18:00:00",
            "unsortednumbers": [20, 6, 3, 22, 11, 30, 25],
            "unsortedaddNumbers": [33],
            "numbers": [3, 6, 11, 20, 22, 25, 30],
            "addNumbers": [33],
            "prizes": ["2802175", "68180", "3900", "105", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [5, 29, 531, 20713, 286497],
            "winnerList": [
              ["K", "", "1149", "KARMØY", "11", "Rogaland"], ["M", "", "1149", "KARMØY", "11", "Rogaland"],
              ["K", "", "1103", "STAVANGER", "11", "Rogaland"], ["M", "", "1149", "KARMØY", "11", "Rogaland"]
            ],
            "turnover": 75327299,
            "totalNumberOfWinners": 307775,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633786,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 995,
            "drawDate": "2015-05-30T18:00:00",
            "unsortednumbers": [1, 22, 3, 33, 5, 2, 25],
            "unsortedaddNumbers": [29],
            "numbers": [1, 2, 3, 5, 22, 25, 33],
            "addNumbers": [29],
            "prizes": ["6906385", "177215", "4335", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 11, 471, 18737, 276882],
            "winnerList": [["K", "", "0105", "SARPSBORG", "1", "Østfold"], ["M", "", "1866", "HADSEL", "18", "Nordland"]],
            "turnover": 74262231,
            "totalNumberOfWinners": 296103,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633786,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 996,
            "drawDate": "2015-06-06T18:00:00",
            "unsortednumbers": [7, 11, 4, 27, 30, 8, 25],
            "unsortedaddNumbers": [16],
            "numbers": [4, 7, 8, 11, 25, 27, 30],
            "addNumbers": [16],
            "prizes": ["13494000", "146490", "3715", "105", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 13, 537, 20370, 277984],
            "winnerList": [["K", "", "0301", "OSLO", "3", "Oslo"]],
            "turnover": 72548410,
            "totalNumberOfWinners": 298905,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634100,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 997,
            "drawDate": "2015-06-13T18:00:00",
            "unsortednumbers": [21, 22, 26, 13, 9, 12, 3],
            "unsortedaddNumbers": [20],
            "numbers": [3, 9, 12, 13, 21, 22, 26],
            "addNumbers": [20],
            "prizes": ["2749455", "102110", "3385", "95", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [5, 19, 600, 23298, 311297],
            "winnerList": [
              ["K", "", "2004", "HAMMERFEST", "20", "Finnmark"],
              ["M", "", "1505", "KRISTIANSUND", "15", "Møre og Romsdal"],
              ["M", "", "0217", "OPPEGÅRD", "2", "Akershus"], ["K", "", "1813", "BRØNNØY", "18", "Nordland"],
              ["K", "", "1443", "EID", "14", "Sogn og Fjordane"]
            ],
            "turnover": 73910156,
            "totalNumberOfWinners": 335219,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634239,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 998,
            "drawDate": "2015-06-20T18:00:00",
            "unsortednumbers": [4, 24, 8, 21, 31, 11, 18],
            "unsortedaddNumbers": [9],
            "numbers": [4, 8, 11, 18, 21, 24, 31],
            "addNumbers": [9],
            "prizes": ["3813435", "143515", "3525", "105", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [4, 15, 639, 23271, 313994],
            "winnerList": [
              ["M", "", "0402", "KONGSVINGER", "4", "Hedmark"], ["M", "", "0402", "KONGSVINGER", "4", "Hedmark"],
              ["M", "", "0417", "STANGE", "4", "Hedmark"], ["M", "", "1824", "VEFSN", "18", "Nordland"]
            ],
            "turnover": 82009363,
            "totalNumberOfWinners": 337923,
            "superlottoResult": {
              "id": 998,
              "drawDate": "2015-06-20T18:00:00",
              "numberOfWinners": 1,
              "prizeAmount": 34000000,
              "winnerList": [["M", "", "1804", "BODØ", "18", "Nordland"]]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634394,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 999,
            "drawDate": "2015-06-27T18:00:00",
            "unsortednumbers": [34, 24, 14, 2, 18, 29, 19],
            "unsortedaddNumbers": [17],
            "numbers": [2, 14, 18, 19, 24, 29, 34],
            "addNumbers": [17],
            "prizes": ["7008495", "219800", "4655", "120", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 9, 445, 18165, 264362],
            "winnerList": [["M", "", "0602", "DRAMMEN", "6", "Buskerud"], ["M", "", "0602", "DRAMMEN", "6", "Buskerud"]],
            "turnover": 75360214,
            "totalNumberOfWinners": 282983,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634394,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1000,
            "drawDate": "2015-07-04T18:00:00",
            "unsortednumbers": [18, 25, 1, 28, 31, 4, 19],
            "unsortedaddNumbers": [33],
            "numbers": [1, 4, 18, 19, 25, 28, 31],
            "addNumbers": [33],
            "prizes": ["2295705", "149530", "4425", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [6, 13, 460, 19186, 268832],
            "winnerList": [
              ["M", "", "1001", "KRISTIANSAND", "10", "Vest-Agder"], ["K", "", "1103", "STAVANGER", "11", "Rogaland"],
              ["K", "", "1532", "GISKE", "15", "Møre og Romsdal"], ["K", "", "0124", "ASKIM", "1", "Østfold"],
              ["M", "", "0417", "STANGE", "4", "Hedmark"], ["K", "", "1804", "BODØ", "18", "Nordland"]
            ],
            "turnover": 74055154,
            "totalNumberOfWinners": 288497,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634394,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1001,
            "drawDate": "2015-07-11T18:00:00",
            "unsortednumbers": [4, 17, 19, 31, 32, 7, 25],
            "unsortedaddNumbers": [6],
            "numbers": [4, 7, 17, 19, 25, 31, 32],
            "addNumbers": [6],
            "prizes": ["6966905", "491615", "4660", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 4, 442, 19920, 269778],
            "winnerList": [["K", "", "1922", "BARDU", "19", "Troms"], ["K", "", "2014", "LOPPA", "20", "Finnmark"]],
            "turnover": 74913002,
            "totalNumberOfWinners": 290146,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634370,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1002,
            "drawDate": "2015-07-18T18:00:00",
            "unsortednumbers": [29, 11, 34, 33, 25, 13, 31],
            "unsortedaddNumbers": [22],
            "numbers": [11, 13, 25, 29, 31, 33, 34],
            "addNumbers": [22],
            "prizes": ["4732290", "143110", "5465", "125", "55"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 14, 384, 17956, 259691],
            "winnerList": [
              ["K", "", "1941", "SKJERVØY", "19", "Troms"], ["M", "", "0627", "RØYKEN", "6", "Buskerud"],
              ["M", "", "1201", "BERGEN", "12", "Hordaland"]
            ],
            "turnover": 76327290,
            "totalNumberOfWinners": 278048,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633915,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1003,
            "drawDate": "2015-07-25T18:00:00",
            "unsortednumbers": [24, 5, 13, 28, 7, 29, 33],
            "unsortedaddNumbers": [3],
            "numbers": [5, 7, 13, 24, 28, 29, 33],
            "addNumbers": [3],
            "prizes": ["6885275", "102285", "4530", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 19, 449, 18570, 269246],
            "winnerList": [
              ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"], ["M", "", "0220", "ASKER", "2", "Akershus"]
            ],
            "turnover": 74035235,
            "totalNumberOfWinners": 288286,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634127,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1004,
            "drawDate": "2015-08-01T18:00:00",
            "unsortednumbers": [7, 26, 9, 25, 27, 14, 12],
            "unsortedaddNumbers": [33],
            "numbers": [7, 9, 12, 14, 25, 26, 27],
            "addNumbers": [33],
            "prizes": ["13723810", "215200", "4445", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 9, 456, 19488, 279324],
            "winnerList": [["M", "", "0124", "ASKIM", "1", "Østfold"]],
            "turnover": 73783934,
            "totalNumberOfWinners": 299278,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633786,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1005,
            "drawDate": "2015-08-08T18:00:00",
            "unsortednumbers": [21, 24, 2, 34, 7, 28, 11],
            "unsortedaddNumbers": [6],
            "numbers": [2, 7, 11, 21, 24, 28, 34],
            "addNumbers": [6],
            "prizes": ["Gull-Lotto!", "119710", "3835", "105", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [0, 16, 523, 20692, 279766],
            "turnover": 72968653,
            "totalNumberOfWinners": 300997,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634370,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1006,
            "drawDate": "2015-08-15T18:00:00",
            "unsortednumbers": [25, 33, 31, 28, 16, 17, 21],
            "unsortedaddNumbers": [13],
            "numbers": [16, 17, 21, 25, 28, 31, 33],
            "addNumbers": [13],
            "prizes": ["7112425", "174970", "4110", "110", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [4, 12, 535, 21678, 305060],
            "winnerList": [
              ["M", "", "2012", "ALTA", "20", "Finnmark"], ["K", "", "0412", "RINGSAKER", "4", "Hedmark"],
              ["M", "", "1520", "ØRSTA", "15", "Møre og Romsdal"], ["Andelsbank", "", "", "", "", ""]
            ],
            "turnover": 79986731,
            "totalNumberOfWinners": 327289,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633919,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1007,
            "drawDate": "2015-08-22T18:00:00",
            "unsortednumbers": [22, 6, 25, 16, 26, 29, 23],
            "unsortedaddNumbers": [3],
            "numbers": [6, 16, 22, 23, 25, 26, 29],
            "addNumbers": [3],
            "prizes": ["6946155", "98030", "5120", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 20, 401, 19115, 281841],
            "winnerList": [["K", "", "1824", "VEFSN", "18", "Nordland"], ["K", "", "1263", "LINDÅS", "12", "Hordaland"]],
            "turnover": 74689875,
            "totalNumberOfWinners": 301379,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634394,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1008,
            "drawDate": "2015-08-29T18:00:00",
            "unsortednumbers": [10, 34, 24, 20, 4, 3, 11],
            "unsortedaddNumbers": [2],
            "numbers": [3, 4, 10, 11, 20, 24, 34],
            "addNumbers": [2],
            "prizes": ["6920135", "244155", "4800", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 8, 426, 19437, 274690],
            "winnerList": [["K", "", "0215", "FROGN", "2", "Akershus"], ["M", "", "1102", "SANDNES", "11", "Rogaland"]],
            "turnover": 74410079,
            "totalNumberOfWinners": 294563,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634034,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1009,
            "drawDate": "2015-09-05T18:00:00",
            "unsortednumbers": [1, 26, 12, 19, 5, 4, 25],
            "unsortedaddNumbers": [31],
            "numbers": [1, 4, 5, 12, 19, 25, 26],
            "addNumbers": [31],
            "prizes": ["2298100", "102415", "3965", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [6, 19, 514, 19667, 276122],
            "winnerList": [
              ["M", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0301", "OSLO", "3", "Oslo"],
              ["M", "", "1813", "BRØNNØY", "18", "Nordland"], ["K", "", "0214", "ÅS", "2", "Akershus"],
              ["K", "", "1004", "FLEKKEFJORD", "10", "Vest-Agder"],
              ["K", "", "1711", "MERÅKER", "17", "Nord-Trøndelag"]
            ],
            "turnover": 74132343,
            "totalNumberOfWinners": 296328,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634127,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1010,
            "drawDate": "2015-09-12T18:00:00",
            "unsortednumbers": [33, 8, 11, 5, 23, 13, 19],
            "unsortedaddNumbers": [30],
            "numbers": [5, 8, 11, 13, 19, 23, 33],
            "addNumbers": [30],
            "prizes": ["3497645", "63690", "3540", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [4, 31, 584, 21636, 293281],
            "winnerList": [
              ["K", "", "0602", "DRAMMEN", "6", "Buskerud"], ["M", "", "0235", "ULLENSAKER", "2", "Akershus"],
              ["K", "", "0235", "ULLENSAKER", "2", "Akershus"], ["M", "", "0219", "BÆRUM", "2", "Akershus"]
            ],
            "turnover": 75218255,
            "totalNumberOfWinners": 315536,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633955,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1011,
            "drawDate": "2015-09-19T18:00:00",
            "unsortednumbers": [21, 4, 34, 25, 32, 1, 16],
            "unsortedaddNumbers": [19],
            "numbers": [1, 4, 16, 21, 25, 32, 34],
            "addNumbers": [19],
            "prizes": ["3122655", "137715", "4270", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [5, 16, 540, 21203, 298536],
            "winnerList": [
              ["K", "", "1247", "ASKØY", "12", "Hordaland"], ["M", "", "0230", "LØRENSKOG", "2", "Akershus"],
              ["K", "", "1902", "TROMSØ", "19", "Troms"], ["K", "", "1211", "ETNE", "12", "Hordaland"],
              ["K", "", "1833", "RANA", "18", "Nordland"]
            ],
            "turnover": 83942345,
            "totalNumberOfWinners": 320300,
            "superlottoResult": {
              "id": 1011,
              "drawDate": "2015-09-19T18:00:00",
              "numberOfWinners": 24,
              "prizeAmount": 1625000,
              "winnerList": [
                ["K", "", "0806", "SKIEN", "8", "Telemark"], ["M", "", "0941", "BYKLE", "9", "Aust-Agder"],
                ["M", "", "1504", "ÅLESUND", "15", "Møre og Romsdal"],
                ["M", "", "0415", "LØTEN", "4", "Hedmark"],
                ["K", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"],
                ["M", "", "1417", "VIK", "14", "Sogn og Fjordane"], ["K", "", "0723", "TJØME", "7", "Vestfold"],
                ["K", "", "0219", "BÆRUM", "2", "Akershus"], ["M", "", "0706", "SANDEFJORD", "7", "Vestfold"],
                ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"], ["M", "", "0301", "OSLO", "3", "Oslo"],
                ["M", "", "0106", "FREDRIKSTAD", "1", "Østfold"], ["K", "", "0704", "TØNSBERG", "7", "Vestfold"],
                ["M", "", "0415", "LØTEN", "4", "Hedmark"], ["K", "", "0709", "LARVIK", "7", "Vestfold"],
                ["M", "", "1102", "SANDNES", "11", "Rogaland"], ["K", "", "0105", "SARPSBORG", "1", "Østfold"],
                ["M", "", "0227", "FET", "2", "Akershus"], ["M", "", "0806", "SKIEN", "8", "Telemark"],
                ["K", "", "1557", "GJEMNES", "15", "Møre og Romsdal"],
                ["M", "", "1505", "KRISTIANSUND", "15", "Møre og Romsdal"],
                ["K", "", "1505", "KRISTIANSUND", "15", "Møre og Romsdal"], ["M", "", "0301", "OSLO", "3", "Oslo"],
                ["M", "", "1511", "VANYLVEN", "15", "Møre og Romsdal"]
              ]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634071,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1012,
            "drawDate": "2015-09-26T18:00:00",
            "unsortednumbers": [31, 21, 7, 15, 26, 10, 29],
            "unsortedaddNumbers": [28],
            "numbers": [7, 10, 15, 21, 26, 29, 31],
            "addNumbers": [28],
            "prizes": ["4741940", "223075", "3510", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 9, 599, 22443, 301884],
            "winnerList": [
              ["K", "", "1102", "SANDNES", "11", "Rogaland"], ["M", "", "0412", "RINGSAKER", "4", "Hedmark"],
              ["M", "", "0701", "HORTEN", "7", "Vestfold"]
            ],
            "turnover": 76482910,
            "totalNumberOfWinners": 324938,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634239,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1013,
            "drawDate": "2015-10-03T18:00:00",
            "unsortednumbers": [27, 15, 18, 14, 8, 24, 31],
            "unsortedaddNumbers": [29],
            "numbers": [8, 14, 15, 18, 24, 27, 31],
            "addNumbers": [29],
            "prizes": ["14084245", "99380", "4115", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 20, 506, 20218, 281867],
            "winnerList": [["M", "", "1201", "BERGEN", "12", "Hordaland"]],
            "turnover": 75721765,
            "totalNumberOfWinners": 302612,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633676,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1014,
            "drawDate": "2015-10-10T18:00:00",
            "unsortednumbers": [16, 7, 34, 17, 2, 4, 6],
            "unsortedaddNumbers": [19],
            "numbers": [2, 4, 6, 7, 16, 17, 34],
            "addNumbers": [19],
            "prizes": ["4676530", "86085", "4450", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 23, 466, 20083, 284678],
            "winnerList": [
              ["K", "", "0605", "RINGERIKE", "6", "Buskerud"], ["M", "", "1102", "SANDNES", "11", "Rogaland"],
              ["K", "", "0301", "OSLO", "3", "Oslo"]
            ],
            "turnover": 75427950,
            "totalNumberOfWinners": 305253,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634312,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1015,
            "drawDate": "2015-10-17T18:00:00",
            "unsortednumbers": [15, 5, 8, 18, 11, 22, 21],
            "unsortedaddNumbers": [24],
            "numbers": [5, 8, 11, 15, 18, 21, 22],
            "addNumbers": [24],
            "prizes": ["6947315", "103205", "3495", "95", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 19, 587, 22699, 310082],
            "winnerList": [
              ["K", "", "1245", "SUND", "12", "Hordaland"], ["M", "", "0122", "TRØGSTAD", "1", "Østfold"]
            ],
            "turnover": 74702355,
            "totalNumberOfWinners": 333389,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1016,
            "drawDate": "2015-10-24T18:00:00",
            "unsortednumbers": [8, 22, 2, 15, 7, 26, 21],
            "unsortedaddNumbers": [17],
            "numbers": [2, 7, 8, 15, 21, 22, 26],
            "addNumbers": [17],
            "prizes": ["4680960", "76225", "3815", "90", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 26, 544, 24128, 318294],
            "winnerList": [
              ["K", "", "0704", "TØNSBERG", "7", "Vestfold"], ["K", "", "1201", "BERGEN", "12", "Hordaland"],
              ["Andelsbank", "", "", "", "", ""]
            ],
            "turnover": 75499410,
            "totalNumberOfWinners": 342995,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634308,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1017,
            "drawDate": "2015-10-31T18:00:00",
            "unsortednumbers": [13, 29, 18, 5, 23, 11, 31],
            "unsortedaddNumbers": [28],
            "numbers": [5, 11, 13, 18, 23, 29, 31],
            "addNumbers": [28],
            "prizes": ["2752880", "277505", "3445", "105", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [5, 7, 590, 21008, 280508],
            "winnerList": [
              ["M", "", "0709", "LARVIK", "7", "Vestfold"], ["M", "", "1702", "STEINKJER", "17", "Nord-Trøndelag"],
              ["M", "", "1149", "KARMØY", "11", "Rogaland"], ["M", "", "1106", "HAUGESUND", "11", "Rogaland"],
              ["K", "", "0904", "GRIMSTAD", "9", "Aust-Agder"]
            ],
            "turnover": 74002230,
            "totalNumberOfWinners": 302118,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634189,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1018,
            "drawDate": "2015-11-07T18:00:00",
            "unsortednumbers": [26, 10, 19, 33, 25, 16, 29],
            "unsortedaddNumbers": [12],
            "numbers": [10, 16, 19, 25, 26, 29, 33],
            "addNumbers": [12],
            "prizes": ["7218000", "92605", "4470", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 22, 477, 19458, 282156],
            "winnerList": [["K", "", "1201", "BERGEN", "12", "Hordaland"], ["M", "", "2011", "KAUTOKEINO", "20", "Finnmark"]],
            "turnover": 77612935,
            "totalNumberOfWinners": 302115,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634369,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1019,
            "drawDate": "2015-11-14T18:00:00",
            "unsortednumbers": [8, 4, 10, 5, 2, 6, 20],
            "unsortedaddNumbers": [21],
            "numbers": [2, 4, 5, 6, 8, 10, 20],
            "addNumbers": [21],
            "prizes": ["3635425", "60360", "2490", "80", "40"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [4, 34, 862, 29210, 337188],
            "winnerList": [
              ["M", "", "1913", "SKÅNLAND", "19", "Troms"], ["M", "", "1103", "STAVANGER", "11", "Rogaland"],
              ["K", "", "0427", "ELVERUM", "4", "Hedmark"], ["K", "", "0104", "MOSS", "1", "Østfold"]
            ],
            "turnover": 78181290,
            "totalNumberOfWinners": 367298,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633758,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1020,
            "drawDate": "2015-11-21T18:00:00",
            "unsortednumbers": [27, 17, 2, 16, 4, 31, 12],
            "unsortedaddNumbers": [7],
            "numbers": [2, 4, 12, 16, 17, 27, 31],
            "addNumbers": [7],
            "prizes": ["2847775", "77285", "3785", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [5, 26, 556, 21959, 301416],
            "winnerList": [
              ["M", "", "1103", "STAVANGER", "11", "Rogaland"], ["M", "", "0528", "ØSTRE TOTEN", "5", "Oppland"],
              ["M", "", "1201", "BERGEN", "12", "Hordaland"], ["K", "", "0901", "RISØR", "9", "Aust-Agder"],
              ["M", "", "1103", "STAVANGER", "11", "Rogaland"]
            ],
            "turnover": 76553170,
            "totalNumberOfWinners": 323962,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634034,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1021,
            "drawDate": "2015-11-28T18:00:00",
            "unsortednumbers": [8, 16, 10, 28, 14, 25, 13],
            "unsortedaddNumbers": [11],
            "numbers": [8, 10, 13, 14, 16, 25, 28],
            "addNumbers": [11],
            "prizes": ["6961035", "163730", "4425", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 12, 465, 19705, 284199],
            "winnerList": [["M", "", "0301", "OSLO", "3", "Oslo"], ["K", "", "0106", "FREDRIKSTAD", "1", "Østfold"]],
            "turnover": 74849855,
            "totalNumberOfWinners": 304383,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634100,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1022,
            "drawDate": "2015-12-05T18:00:00",
            "unsortednumbers": [11, 2, 31, 21, 30, 22, 23],
            "unsortedaddNumbers": [20],
            "numbers": [2, 11, 21, 22, 23, 30, 31],
            "addNumbers": [20],
            "prizes": ["13902610", "93430", "4345", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 21, 473, 19799, 283586],
            "winnerList": [["K", "", "0101", "HALDEN", "1", "Østfold"]],
            "turnover": 74745235,
            "totalNumberOfWinners": 303880,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634317,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1023,
            "drawDate": "2015-12-12T18:00:00",
            "unsortednumbers": [1, 14, 5, 26, 4, 16, 34],
            "unsortedaddNumbers": [6],
            "numbers": [1, 4, 5, 14, 16, 26, 34],
            "addNumbers": [6],
            "prizes": ["4884960", "103410", "3580", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 20, 605, 21139, 290379],
            "winnerList": [
              ["M", "", "0935", "IVELAND", "9", "Aust-Agder"], ["M", "", "1439", "VÅGSØY", "14", "Sogn og Fjordane"],
              ["Andelsbank", "", "", "", "", ""]
            ],
            "turnover": 78789750,
            "totalNumberOfWinners": 312146,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1024,
            "drawDate": "2015-12-19T18:00:00",
            "unsortednumbers": [15, 1, 34, 29, 19, 18, 14],
            "unsortedaddNumbers": [20],
            "numbers": [1, 14, 15, 18, 19, 29, 34],
            "addNumbers": [20],
            "prizes": ["2758390", "129760", "4710", "125", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [6, 18, 519, 21307, 313811],
            "winnerList": [
              ["M", "", "1940", "KÅFJORD", "19", "Troms"], ["M", "", "1624", "RISSA", "16", "Sør-Trøndelag"],
              ["M", "", "0709", "LARVIK", "7", "Vestfold"], ["K", "", "0728", "LARDAL", "7", "Vestfold"],
              ["M", "", "2019", "NORDKAPP", "20", "Finnmark"], ["K", "", "1838", "GILDESKÅL", "18", "Nordland"]
            ],
            "turnover": 88980465,
            "totalNumberOfWinners": 335661,
            "superlottoResult": {
              "id": 1024,
              "drawDate": "2015-12-19T18:00:00",
              "numberOfWinners": 31,
              "prizeAmount": 1161290,
              "winnerList": [
                ["K", "", "0709", "LARVIK", "7", "Vestfold"], ["M", "", "1133", "HJELMELAND", "11", "Rogaland"],
                ["M", "", "0540", "SØR-AURDAL", "5", "Oppland"], ["K", "", "1251", "VAKSDAL", "12", "Hordaland"],
                ["K", "", "1547", "AUKRA", "15", "Møre og Romsdal"], ["K", "", "1401", "FLORA", "14", "Sogn og Fjordane"],
                ["M", "", "1201", "BERGEN", "12", "Hordaland"], ["K", "", "1103", "STAVANGER", "11", "Rogaland"],
                ["M", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0228", "RÆLINGEN", "2", "Akershus"],
                ["M", "", "1505", "KRISTIANSUND", "15", "Møre og Romsdal"],
                ["K", "", "1804", "BODØ", "18", "Nordland"],
                ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"],
                ["M", "", "0105", "SARPSBORG", "1", "Østfold"], ["K", "", "0542", "NORD-AURDAL", "5", "Oppland"],
                ["K", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0214", "ÅS", "2", "Akershus"],
                ["M", "", "0215", "FROGN", "2", "Akershus"], ["M", "", "1101", "EIGERSUND", "11", "Rogaland"],
                ["K", "", "0136", "RYGGE", "1", "Østfold"], ["M", "", "1827", "DØNNA", "18", "Nordland"],
                ["M", "", "0301", "OSLO", "3", "Oslo"], ["K", "", "1238", "KVAM", "12", "Hordaland"],
                ["M", "", "1244", "AUSTEVOLL", "12", "Hordaland"], ["K", "", "0301", "OSLO", "3", "Oslo"],
                ["K", "", "1266", "MASFJORDEN", "12", "Hordaland"], ["M", "", "0432", "RENDALEN", "4", "Hedmark"],
                ["M", "", "0701", "HORTEN", "7", "Vestfold"], ["M", "", "1149", "KARMØY", "11", "Rogaland"],
                ["Andelsbank", "", "", "", "", ""]
              ]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633919,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1025,
            "drawDate": "2015-12-26T18:00:00",
            "unsortednumbers": [17, 29, 6, 15, 34, 13, 9],
            "unsortedaddNumbers": [23],
            "numbers": [6, 9, 13, 15, 17, 29, 34],
            "addNumbers": [23],
            "prizes": ["13860880", "85050", "3975", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 23, 515, 19030, 274793],
            "winnerList": [["K", "", "1703", "NAMSOS", "17", "Nord-Trøndelag"]],
            "turnover": 74520870,
            "totalNumberOfWinners": 294362,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633955,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1026,
            "drawDate": "2016-01-02T18:00:00",
            "unsortednumbers": [17, 28, 15, 6, 19, 34, 23],
            "unsortedaddNumbers": [29],
            "numbers": [6, 15, 17, 19, 23, 28, 34],
            "addNumbers": [29],
            "prizes": ["7303615", "79285", "4205", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 26, 513, 20534, 290956],
            "winnerList": [
              ["K", "", "1663", "MALVIK", "16", "Sør-Trøndelag"], ["M", "", "1201", "BERGEN", "12", "Hordaland"]
            ],
            "turnover": 78533495,
            "totalNumberOfWinners": 312031,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634317,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1027,
            "drawDate": "2016-01-09T18:00:00",
            "unsortednumbers": [32, 27, 6, 25, 5, 18, 34],
            "unsortedaddNumbers": [28],
            "numbers": [5, 6, 18, 25, 27, 32, 34],
            "addNumbers": [28],
            "prizes": ["4745020", "83705", "4925", "120", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 24, 427, 18612, 271093],
            "winnerList": [
              ["K", "", "0602", "DRAMMEN", "6", "Buskerud"], ["M", "", "0616", "NES", "6", "Buskerud"],
              ["K", "", "1102", "SANDNES", "11", "Rogaland"]
            ],
            "turnover": 76532610,
            "totalNumberOfWinners": 290159,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633915,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1028,
            "drawDate": "2016-01-16T18:00:00",
            "unsortednumbers": [13, 9, 24, 7, 21, 27, 12],
            "unsortedaddNumbers": [26],
            "numbers": [7, 9, 12, 13, 21, 24, 27],
            "addNumbers": [26],
            "prizes": ["3571040", "125990", "3595", "95", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [4, 16, 587, 23808, 313639],
            "winnerList": [
              ["K", "", "0711", "SVELVIK", "7", "Vestfold"], ["M", "", "1004", "FLEKKEFJORD", "10", "Vest-Agder"],
              ["K", "", "1224", "KVINNHERAD", "12", "Hordaland"], ["M", "", "2004", "HAMMERFEST", "20", "Finnmark"]
            ],
            "turnover": 76796625,
            "totalNumberOfWinners": 338054,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633915,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1029,
            "drawDate": "2016-01-23T18:00:00",
            "unsortednumbers": [17, 7, 18, 14, 5, 11, 23],
            "unsortedaddNumbers": [26],
            "numbers": [5, 7, 11, 14, 17, 18, 23],
            "addNumbers": [26],
            "prizes": ["7249935", "66010", "3900", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 31, 549, 22326, 304278],
            "winnerList": [["M", "", "1938", "LYNGEN", "19", "Troms"], ["K", "", "0829", "KVITESEID", "8", "Telemark"]],
            "turnover": 77956295,
            "totalNumberOfWinners": 327186,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633919,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1030,
            "drawDate": "2016-01-30T18:00:00",
            "unsortednumbers": [16, 10, 2, 14, 28, 32, 13],
            "unsortedaddNumbers": [18],
            "numbers": [2, 10, 13, 14, 16, 28, 32],
            "addNumbers": [18],
            "prizes": ["2444285", "159210", "3710", "105", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [6, 13, 584, 22324, 305600],
            "winnerList": [
              ["K", "", "1902", "TROMSØ", "19", "Troms"], ["M", "", "0819", "NOME", "8", "Telemark"],
              ["M", "", "0403", "HAMAR", "4", "Hedmark"], ["M", "", "0238", "NANNESTAD", "2", "Akershus"],
              ["K", "", "0233", "NITTEDAL", "2", "Akershus"], ["M", "", "1563", "SUNNDAL", "15", "Møre og Romsdal"]
            ],
            "turnover": 78847940,
            "totalNumberOfWinners": 328527,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634071,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1031,
            "drawDate": "2016-02-06T18:00:00",
            "unsortednumbers": [17, 1, 21, 8, 16, 10, 24],
            "unsortedaddNumbers": [28],
            "numbers": [1, 8, 10, 16, 17, 21, 24],
            "addNumbers": [28],
            "prizes": ["4744610", "105725", "3945", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 19, 533, 20683, 295856],
            "winnerList": [
              ["M", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0230", "LØRENSKOG", "2", "Akershus"],
              ["M", "", "1034", "HÆGEBOSTAD", "10", "Vest-Agder"]
            ],
            "turnover": 76525985,
            "totalNumberOfWinners": 317094,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633786,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1032,
            "drawDate": "2016-02-13T18:00:00",
            "unsortednumbers": [10, 24, 23, 19, 18, 26, 12],
            "unsortedaddNumbers": [4],
            "numbers": [10, 12, 18, 19, 23, 24, 26],
            "addNumbers": [4],
            "prizes": ["3595295", "101480", "4140", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [4, 20, 513, 20701, 287862],
            "winnerList": [
              ["K", "", "0226", "SØRUM", "2", "Akershus"], ["K", "", "1502", "MOLDE", "15", "Møre og Romsdal"],
              ["M", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "1263", "LINDÅS", "12", "Hordaland"]
            ],
            "turnover": 77318220,
            "totalNumberOfWinners": 309100,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634369,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1033,
            "drawDate": "2016-02-20T18:00:00",
            "unsortednumbers": [23, 11, 3, 33, 31, 7, 19],
            "unsortedaddNumbers": [10],
            "numbers": [3, 7, 11, 19, 23, 31, 33],
            "addNumbers": [10],
            "prizes": ["4907910", "74210", "2995", "95", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 28, 726, 24033, 308074],
            "winnerList": [
              ["M", "", "0236", "NES", "2", "Akershus"], ["M", "", "0514", "LOM", "5", "Oppland"],
              ["M", "", "1201", "BERGEN", "12", "Hordaland"]
            ],
            "turnover": 79159890,
            "totalNumberOfWinners": 332864,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634005,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1034,
            "drawDate": "2016-02-27T18:00:00",
            "unsortednumbers": [7, 26, 21, 23, 1, 9, 15],
            "unsortedaddNumbers": [33],
            "numbers": [1, 7, 9, 15, 21, 23, 26],
            "addNumbers": [33],
            "prizes": ["3580100", "63155", "4005", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [4, 32, 528, 22829, 313179],
            "winnerList": [
              ["M", "", "0827", "HJARTDAL", "8", "Telemark"], ["M", "", "0301", "OSLO", "3", "Oslo"],
              ["K", "", "1422", "LÆRDAL", "14", "Sogn og Fjordane"], ["M", "", "0301", "OSLO", "3", "Oslo"]
            ],
            "turnover": 76991400,
            "totalNumberOfWinners": 336572,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634308,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1035,
            "drawDate": "2016-03-05T18:00:00",
            "unsortednumbers": [6, 13, 21, 32, 30, 12, 18],
            "unsortedaddNumbers": [29],
            "numbers": [6, 12, 13, 18, 21, 30, 32],
            "addNumbers": [29],
            "prizes": ["6985755", "82155", "3580", "100", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 24, 577, 21778, 287819],
            "winnerList": [["M", "", "0226", "SØRUM", "2", "Akershus"], ["Andelsbank", "", "", "", "", ""]],
            "turnover": 75115670,
            "totalNumberOfWinners": 310200,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634034,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1036,
            "drawDate": "2016-03-12T18:00:00",
            "unsortednumbers": [26, 23, 28, 9, 18, 15, 21],
            "unsortedaddNumbers": [29],
            "numbers": [9, 15, 18, 21, 23, 26, 28],
            "addNumbers": [29],
            "prizes": ["3529720", "73795", "3335", "90", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [4, 27, 625, 24667, 322990],
            "winnerList": [
              ["K", "", "1221", "STORD", "12", "Hordaland"], ["M", "", "1119", "HÅ", "11", "Rogaland"],
              ["M", "", "1245", "SUND", "12", "Hordaland"], ["M", "", "2020", "PORSANGER", "20", "Finnmark"]
            ],
            "turnover": 75907980,
            "totalNumberOfWinners": 348313,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634370,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1037,
            "drawDate": "2016-03-19T18:00:00",
            "unsortednumbers": [27, 34, 14, 21, 32, 30, 29],
            "unsortedaddNumbers": [9],
            "numbers": [14, 21, 27, 29, 30, 32, 34],
            "addNumbers": [9],
            "prizes": ["4995075", "151060", "4145", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 14, 534, 21011, 289927],
            "winnerList": [
              ["K", "", "0625", "NEDRE EIKER", "6", "Buskerud"], ["M", "", "0625", "NEDRE EIKER", "6", "Buskerud"],
              ["M", "", "1833", "RANA", "18", "Nordland"]
            ],
            "turnover": 80565745,
            "totalNumberOfWinners": 311489,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634394,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1038,
            "drawDate": "2016-03-26T18:00:00",
            "unsortednumbers": [18, 34, 26, 31, 17, 13, 22],
            "unsortedaddNumbers": [24],
            "numbers": [13, 17, 18, 22, 26, 31, 34],
            "addNumbers": [24],
            "prizes": ["8651590", "87210", "4675", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 28, 547, 24124, 336182],
            "winnerList": [["M", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0301", "OSLO", "3", "Oslo"]],
            "turnover": 93027850,
            "totalNumberOfWinners": 360883,
            "superlottoResult": {
              "id": 1038,
              "drawDate": "2016-03-26T18:00:00",
              "numberOfWinners": 30,
              "prizeAmount": 1366665,
              "winnerList": [
                ["K", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0627", "RØYKEN", "6", "Buskerud"],
                ["M", "", "2020", "PORSANGER", "20", "Finnmark"], ["M", "", "1119", "HÅ", "11", "Rogaland"],
                ["K", "", "1922", "BARDU", "19", "Troms"], ["M", "", "2004", "HAMMERFEST", "20", "Finnmark"],
                ["K", "", "0919", "FROLAND", "9", "Aust-Agder"], ["M", "", "1032", "LYNGDAL", "10", "Vest-Agder"],
                ["M", "", "0906", "ARENDAL", "9", "Aust-Agder"], ["M", "", "1122", "GJESDAL", "11", "Rogaland"],
                ["K", "", "0403", "HAMAR", "4", "Hedmark"], ["M", "", "1870", "SORTLAND", "18", "Nordland"],
                ["M", "", "0106", "FREDRIKSTAD", "1", "Østfold"],
                ["M", "", "1543", "NESSET", "15", "Møre og Romsdal"], ["M", "", "1103", "STAVANGER", "11", "Rogaland"],
                ["M", "", "0236", "NES", "2", "Akershus"], ["M", "", "0106", "FREDRIKSTAD", "1", "Østfold"],
                ["M", "", "1535", "VESTNES", "15", "Møre og Romsdal"],
                ["M", "", "1813", "BRØNNØY", "18", "Nordland"], ["M", "", "0301", "OSLO", "3", "Oslo"],
                ["M", "", "0604", "KONGSBERG", "6", "Buskerud"], ["K", "", "0914", "TVEDESTRAND", "9", "Aust-Agder"],
                ["K", "", "1833", "RANA", "18", "Nordland"], ["M", "", "0806", "SKIEN", "8", "Telemark"],
                ["M", "", "0502", "GJØVIK", "5", "Oppland"],
                ["M", "", "1648", "MIDTRE GAULDAL", "16", "Sør-Trøndelag"],
                ["K", "", "0137", "VÅLER", "1", "Østfold"],
                ["M", "", "1505", "KRISTIANSUND", "15", "Møre og Romsdal"]
              ]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634317,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1039,
            "drawDate": "2016-04-02T18:00:00",
            "unsortednumbers": [7, 19, 13, 12, 17, 25, 6],
            "unsortedaddNumbers": [24],
            "numbers": [6, 7, 12, 13, 17, 19, 25],
            "addNumbers": [24],
            "prizes": ["2894105", "107480", "3385", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [5, 19, 632, 22365, 304367],
            "winnerList": [
              ["K", "", "1260", "RADØY", "12", "Hordaland"], ["M", "", "1201", "BERGEN", "12", "Hordaland"],
              ["K", "", "0627", "RØYKEN", "6", "Buskerud"], ["M", "", "0624", "ØVRE EIKER", "6", "Buskerud"],
              ["M", "", "0538", "NORDRE LAND", "5", "Oppland"]
            ],
            "turnover": 77798640,
            "totalNumberOfWinners": 327388,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634369,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1040,
            "drawDate": "2016-04-09T18:00:00",
            "unsortednumbers": [2, 17, 16, 8, 20, 26, 7],
            "unsortedaddNumbers": [3],
            "numbers": [2, 7, 8, 16, 17, 20, 26],
            "addNumbers": [3],
            "prizes": ["7135315", "80560", "3685", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 25, 572, 22500, 308314],
            "winnerList": [
              ["M", "", "1545", "MIDSUND", "15", "Møre og Romsdal"], ["M", "", "1103", "STAVANGER", "11", "Rogaland"]
            ],
            "turnover": 76723845,
            "totalNumberOfWinners": 331413,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634308,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1041,
            "drawDate": "2016-04-16T18:00:00",
            "unsortednumbers": [2, 11, 31, 24, 1, 4, 7],
            "unsortedaddNumbers": [3],
            "numbers": [1, 2, 4, 7, 11, 24, 31],
            "addNumbers": [3],
            "prizes": ["4821885", "49790", "4550", "105", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 41, 470, 21311, 296273],
            "winnerList": [
              ["M", "", "0124", "ASKIM", "1", "Østfold"], ["K", "", "1121", "TIME", "11", "Rogaland"],
              ["K", "", "1102", "SANDNES", "11", "Rogaland"]
            ],
            "turnover": 77772340,
            "totalNumberOfWinners": 318098,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633676,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1042,
            "drawDate": "2016-04-23T18:00:00",
            "unsortednumbers": [14, 30, 31, 10, 34, 29, 27],
            "unsortedaddNumbers": [13],
            "numbers": [10, 14, 27, 29, 30, 31, 34],
            "addNumbers": [13],
            "prizes": ["Gull-Lotto!", "120045", "4925", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [0, 17, 434, 19448, 274291],
            "turnover": 77746420,
            "totalNumberOfWinners": 294190,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634127,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1043,
            "drawDate": "2016-04-30T18:00:00",
            "unsortednumbers": [10, 6, 11, 16, 14, 8, 21],
            "unsortedaddNumbers": [9],
            "numbers": [6, 8, 10, 11, 14, 16, 21],
            "addNumbers": [9],
            "prizes": ["29961665", "99435", "3850", "95", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 22, 595, 25703, 345017],
            "winnerList": [["K", "", "0217", "OPPEGÅRD", "2", "Akershus"]],
            "turnover": 83337805,
            "totalNumberOfWinners": 371338,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634239,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1044,
            "drawDate": "2016-05-07T18:00:00",
            "unsortednumbers": [17, 26, 22, 2, 7, 33, 19],
            "unsortedaddNumbers": [21],
            "numbers": [2, 7, 17, 19, 22, 26, 33],
            "addNumbers": [21],
            "prizes": ["6944895", "108900", "3700", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 18, 555, 21824, 293741],
            "winnerList": [["M", "", "0624", "ØVRE EIKER", "6", "Buskerud"], ["M", "", "0626", "LIER", "6", "Buskerud"]],
            "turnover": 74676300,
            "totalNumberOfWinners": 316140,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634369,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1045,
            "drawDate": "2016-05-14T18:00:00",
            "unsortednumbers": [20, 23, 4, 9, 29, 32, 26],
            "unsortedaddNumbers": [8],
            "numbers": [4, 9, 20, 23, 26, 29, 32],
            "addNumbers": [8],
            "prizes": ["7172355", "92020", "3780", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 22, 561, 22441, 300550],
            "winnerList": [
              ["K", "", "1001", "KRISTIANSAND", "10", "Vest-Agder"], ["K", "", "1417", "VIK", "14", "Sogn og Fjordane"]
            ],
            "turnover": 77122140,
            "totalNumberOfWinners": 323576,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633915,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1046,
            "drawDate": "2016-05-21T18:00:00",
            "unsortednumbers": [30, 20, 21, 19, 1, 16, 5],
            "unsortedaddNumbers": [23],
            "numbers": [1, 5, 16, 19, 20, 21, 30],
            "addNumbers": [23],
            "prizes": ["7039510", "165575", "4560", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 12, 456, 19468, 277692],
            "winnerList": [
              ["M", "", "1638", "ORKDAL", "16", "Sør-Trøndelag"], ["M", "", "0301", "OSLO", "3", "Oslo"]
            ],
            "turnover": 75693670,
            "totalNumberOfWinners": 297630,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634127,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1047,
            "drawDate": "2016-05-28T18:00:00",
            "unsortednumbers": [13, 8, 21, 25, 17, 11, 4],
            "unsortedaddNumbers": [20],
            "numbers": [4, 8, 11, 13, 17, 21, 25],
            "addNumbers": [20],
            "prizes": ["3439975", "66960", "3300", "95", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [4, 29, 616, 22750, 297788],
            "winnerList": [
              ["M", "", "0714", "HOF", "7", "Vestfold"], ["K", "", "1120", "KLEPP", "11", "Rogaland"],
              ["K", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0230", "LØRENSKOG", "2", "Akershus"]
            ],
            "turnover": 73977985,
            "totalNumberOfWinners": 321187,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633676,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1048,
            "drawDate": "2016-06-04T18:00:00",
            "unsortednumbers": [6, 16, 27, 10, 29, 14, 26],
            "unsortedaddNumbers": [4],
            "numbers": [6, 10, 14, 16, 26, 27, 29],
            "addNumbers": [4],
            "prizes": ["13222225", "88855", "4360", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 21, 448, 20331, 283967],
            "winnerList": [["M", "", "0529", "VESTRE TOTEN", "5", "Oppland"]],
            "turnover": 71087240,
            "totalNumberOfWinners": 304768,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633786,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1049,
            "drawDate": "2016-06-11T18:00:00",
            "unsortednumbers": [31, 6, 25, 32, 7, 9, 29],
            "unsortedaddNumbers": [13],
            "numbers": [6, 7, 9, 25, 29, 31, 32],
            "addNumbers": [13],
            "prizes": ["13581485", "95835", "5455", "125", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 20, 368, 17284, 258788],
            "winnerList": [["M", "", "2111", "SPITSBERGEN", "21", "Svalbard"]],
            "turnover": 73018745,
            "totalNumberOfWinners": 276461,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1050,
            "drawDate": "2016-06-18T18:00:00",
            "unsortednumbers": [20, 30, 28, 32, 9, 22, 7],
            "unsortedaddNumbers": [25],
            "numbers": [7, 9, 20, 22, 28, 30, 32],
            "addNumbers": [25],
            "prizes": ["7167275", "126435", "4065", "105", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 16, 521, 21369, 294333],
            "winnerList": [
              ["K", "", "1238", "KVAM", "12", "Hordaland"], ["K", "", "1717", "FROSTA", "17", "Nord-Trøndelag"]
            ],
            "turnover": 77067495,
            "totalNumberOfWinners": 316241,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634034,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1051,
            "drawDate": "2016-06-25T18:00:00",
            "unsortednumbers": [24, 20, 8, 11, 30, 33, 22],
            "unsortedaddNumbers": [2],
            "numbers": [8, 11, 20, 22, 24, 30, 33],
            "addNumbers": [2],
            "prizes": ["3209710", "83885", "3970", "105", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [5, 27, 597, 23698, 320518],
            "winnerList": [
              ["M", "", "1833", "RANA", "18", "Nordland"], ["M", "", "1833", "RANA", "18", "Nordland"],
              ["K", "", "1235", "VOSS", "12", "Hordaland"], ["K", "", "1505", "KRISTIANSUND", "15", "Møre og Romsdal"],
              ["K", "", "2028", "BÅTSFJORD", "20", "Finnmark"]
            ],
            "turnover": 86282625,
            "totalNumberOfWinners": 344845,
            "superlottoResult": {
              "id": 1051,
              "drawDate": "2016-06-25T18:00:00",
              "numberOfWinners": 30,
              "prizeAmount": 1200000,
              "winnerList": [
                ["M", "", "0720", "STOKKE", "7", "Vestfold"], ["K", "", "1201", "BERGEN", "12", "Hordaland"],
                ["K", "", "1630", "ÅFJORD", "16", "Sør-Trøndelag"],
                ["K", "", "1034", "HÆGEBOSTAD", "10", "Vest-Agder"], ["M", "", "1865", "VÅGAN", "18", "Nordland"],
                ["K", "", "0722", "NØTTERØY", "7", "Vestfold"], ["M", "", "1902", "TROMSØ", "19", "Troms"],
                ["K", "", "0701", "HORTEN", "7", "Vestfold"], ["K", "", "0214", "ÅS", "2", "Akershus"],
                ["M", "", "0620", "HOL", "6", "Buskerud"], ["K", "", "1014", "VENNESLA", "10", "Vest-Agder"],
                ["K", "", "1805", "NARVIK", "18", "Nordland"], ["K", "", "1663", "MALVIK", "16", "Sør-Trøndelag"],
                ["K", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0536", "SØNDRE LAND", "5", "Oppland"],
                ["M", "", "0529", "VESTRE TOTEN", "5", "Oppland"], ["K", "", "1805", "NARVIK", "18", "Nordland"],
                ["M", "", "0720", "STOKKE", "7", "Vestfold"], ["M", "", "1653", "MELHUS", "16", "Sør-Trøndelag"],
                ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"], ["M", "", "1246", "FJELL", "12", "Hordaland"],
                ["K", "", "0105", "SARPSBORG", "1", "Østfold"], ["M", "", "0536", "SØNDRE LAND", "5", "Oppland"],
                ["M", "", "1103", "STAVANGER", "11", "Rogaland"], ["M", "", "0111", "HVALER", "1", "Østfold"],
                ["K", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"],
                ["M", "", "1103", "STAVANGER", "11", "Rogaland"], ["M", "", "1903", "HARSTAD", "19", "Troms"],
                ["M", "", "0106", "FREDRIKSTAD", "1", "Østfold"], ["M", "", "0814", "BAMBLE", "8", "Telemark"]
              ]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634100,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1052,
            "drawDate": "2016-07-02T18:00:00",
            "unsortednumbers": [31, 32, 7, 20, 3, 6, 13],
            "unsortedaddNumbers": [5],
            "numbers": [3, 6, 7, 13, 20, 31, 32],
            "addNumbers": [5],
            "prizes": ["7327230", "129260", "4530", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 16, 478, 19799, 286198],
            "winnerList": [["K", "", "1201", "BERGEN", "12", "Hordaland"], ["M", "", "1201", "BERGEN", "12", "Hordaland"]],
            "turnover": 78787470,
            "totalNumberOfWinners": 306493,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633758,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1053,
            "drawDate": "2016-07-09T18:00:00",
            "unsortednumbers": [34, 6, 28, 14, 26, 20, 15],
            "unsortedaddNumbers": [32],
            "numbers": [6, 14, 15, 20, 26, 28, 34],
            "addNumbers": [32],
            "prizes": ["4793305", "92245", "4275", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 22, 497, 19660, 287441],
            "winnerList": [
              ["K", "", "0709", "LARVIK", "7", "Vestfold"], ["M", "", "1124", "SOLA", "11", "Rogaland"],
              ["M", "", "1837", "MELØY", "18", "Nordland"]
            ],
            "turnover": 77311390,
            "totalNumberOfWinners": 307623,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1054,
            "drawDate": "2016-07-16T18:00:00",
            "unsortednumbers": [24, 5, 27, 12, 22, 26, 9],
            "unsortedaddNumbers": [28],
            "numbers": [5, 9, 12, 22, 24, 26, 27],
            "addNumbers": [28],
            "prizes": ["2052135", "144805", "3620", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [7, 14, 586, 22568, 309672],
            "winnerList": [
              ["K", "", "1938", "LYNGEN", "19", "Troms"], ["K", "", "1703", "NAMSOS", "17", "Nord-Trøndelag"],
              ["M", "", "1622", "AGDENES", "16", "Sør-Trøndelag"], ["M", "", "1201", "BERGEN", "12", "Hordaland"],
              ["M", "", "1429", "FJALER", "14", "Sogn og Fjordane"], ["K", "", "0806", "SKIEN", "8", "Telemark"],
              ["M", "", "0228", "RÆLINGEN", "2", "Akershus"]
            ],
            "turnover": 77230935,
            "totalNumberOfWinners": 332847,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634312,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1055,
            "drawDate": "2016-07-23T18:00:00",
            "unsortednumbers": [16, 23, 11, 26, 22, 20, 17],
            "unsortedaddNumbers": [13],
            "numbers": [11, 16, 17, 20, 22, 23, 26],
            "addNumbers": [13],
            "prizes": ["14325710", "106405", "4250", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 19, 498, 20775, 297856],
            "winnerList": [["M", "", "0301", "OSLO", "3", "Oslo"]],
            "turnover": 77019970,
            "totalNumberOfWinners": 319149,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633955,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1056,
            "drawDate": "2016-07-30T18:00:00",
            "unsortednumbers": [29, 18, 7, 4, 1, 17, 20],
            "unsortedaddNumbers": [21],
            "numbers": [1, 4, 7, 17, 18, 20, 29],
            "addNumbers": [21],
            "prizes": ["14218815", "95555", "3970", "105", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 21, 529, 21081, 291397],
            "winnerList": [["M", "", "0127", "SKIPTVET", "1", "Østfold"]],
            "turnover": 76445260,
            "totalNumberOfWinners": 313029,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633955,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1057,
            "drawDate": "2016-08-06T18:00:00",
            "unsortednumbers": [28, 22, 17, 18, 6, 34, 19],
            "unsortedaddNumbers": [15],
            "numbers": [6, 17, 18, 19, 22, 28, 34],
            "addNumbers": [15],
            "prizes": ["2346245", "99335", "4305", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [6, 20, 483, 19552, 277069],
            "winnerList": [
              ["K", "", "0520", "RINGEBU", "5", "Oppland"], ["K", "", "0722", "NØTTERØY", "7", "Vestfold"],
              ["M", "", "0301", "OSLO", "3", "Oslo"], ["M", "", "0301", "OSLO", "3", "Oslo"],
              ["K", "", "1121", "TIME", "11", "Rogaland"], ["M", "", "0906", "ARENDAL", "9", "Aust-Agder"]
            ],
            "turnover": 75685425,
            "totalNumberOfWinners": 297130,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634239,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1058,
            "drawDate": "2016-08-13T18:00:00",
            "unsortednumbers": [21, 15, 5, 13, 10, 32, 9],
            "unsortedaddNumbers": [33],
            "numbers": [5, 9, 10, 13, 15, 21, 32],
            "addNumbers": [33],
            "prizes": ["4811245", "70240", "4415", "110", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 29, 483, 20899, 302899],
            "winnerList": [
              ["K", "", "1505", "KRISTIANSUND", "15", "Møre og Romsdal"], ["K", "", "1833", "RANA", "18", "Nordland"],
              ["M", "", "1502", "MOLDE", "15", "Møre og Romsdal"]
            ],
            "turnover": 77600745,
            "totalNumberOfWinners": 324313,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1059,
            "drawDate": "2016-08-20T18:00:00",
            "unsortednumbers": [34, 8, 16, 17, 19, 18, 21],
            "unsortedaddNumbers": [7],
            "numbers": [8, 16, 17, 18, 19, 21, 34],
            "addNumbers": [7],
            "prizes": ["14512585", "113785", "4755", "115", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 18, 451, 20218, 286372],
            "winnerList": [["K", "", "1840", "SALTDAL", "18", "Nordland"]],
            "turnover": 78024670,
            "totalNumberOfWinners": 307060,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634034,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1060,
            "drawDate": "2016-08-27T18:00:00",
            "unsortednumbers": [11, 25, 19, 31, 17, 29, 13],
            "unsortedaddNumbers": [2],
            "numbers": [11, 13, 17, 19, 25, 29, 31],
            "addNumbers": [2],
            "prizes": ["14123825", "94915", "3385", "105", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [1, 21, 616, 20787, 282122],
            "winnerList": [["K", "", "0106", "FREDRIKSTAD", "1", "Østfold"]],
            "turnover": 75934565,
            "totalNumberOfWinners": 303547,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19634189,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1061,
            "drawDate": "2016-09-03T18:00:00",
            "unsortednumbers": [16, 18, 31, 1, 20, 24, 15],
            "unsortedaddNumbers": [5],
            "numbers": [1, 15, 16, 18, 20, 24, 31],
            "addNumbers": [5],
            "prizes": ["3519480", "116870", "5050", "120", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [4, 17, 412, 18521, 268828],
            "winnerList": [
              ["K", "", "0105", "SARPSBORG", "1", "Østfold"], ["K", "", "1822", "LEIRFJORD", "18", "Nordland"],
              ["M", "", "0426", "VÅLER", "4", "Hedmark"], ["K", "", "1860", "VESTVÅGØY", "18", "Nordland"]
            ],
            "turnover": 75687845,
            "totalNumberOfWinners": 287782,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19632953,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1062,
            "drawDate": "2016-09-10T18:00:00",
            "unsortednumbers": [19, 31, 18, 1, 27, 15, 6],
            "unsortedaddNumbers": [25],
            "numbers": [1, 6, 15, 18, 19, 27, 31],
            "addNumbers": [25],
            "prizes": ["2414175", "127765", "3245", "100", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [6, 16, 659, 22918, 301031],
            "winnerList": [
              ["K", "", "0106", "FREDRIKSTAD", "1", "Østfold"], ["K", "", "1868", "ØKSNES", "18", "Nordland"],
              ["K", "", "0706", "SANDEFJORD", "7", "Vestfold"], ["M", "", "1903", "HARSTAD", "19", "Troms"],
              ["K", "", "0106", "FREDRIKSTAD", "1", "Østfold"],
              ["M", "", "1504", "ÅLESUND", "15", "Møre og Romsdal"]
            ],
            "turnover": 77876675,
            "totalNumberOfWinners": 324630,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19632480,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1063,
            "drawDate": "2016-09-17T18:00:00",
            "unsortednumbers": [12, 19, 3, 29, 24, 9, 2],
            "unsortedaddNumbers": [20],
            "numbers": [2, 3, 9, 12, 19, 24, 29],
            "addNumbers": [20],
            "prizes": ["3984285", "140570", "3700", "100", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [4, 16, 636, 25202, 339798],
            "winnerList": [
              ["M", "", "1719", "LEVANGER", "17", "Nord-Trøndelag"],
              ["M", "", "1653", "MELHUS", "16", "Sør-Trøndelag"], ["K", "", "1933", "BALSFJORD", "19", "Troms"],
              ["K", "", "1001", "KRISTIANSAND", "10", "Vest-Agder"]
            ],
            "turnover": 85683645,
            "totalNumberOfWinners": 365656,
            "superlottoResult": {
              "id": 1063,
              "drawDate": "2016-09-17T18:00:00",
              "numberOfWinners": 30,
              "prizeAmount": 1166665,
              "winnerList": [
                ["M", "", "0604", "KONGSBERG", "6", "Buskerud"], ["K", "", "1149", "KARMØY", "11", "Rogaland"],
                ["K", "", "0704", "TØNSBERG", "7", "Vestfold"], ["K", "", "0605", "RINGERIKE", "6", "Buskerud"],
                ["M", "", "1243", "OS", "12", "Hordaland"], ["K", "", "1719", "LEVANGER", "17", "Nord-Trøndelag"],
                ["M", "", "1429", "FJALER", "14", "Sogn og Fjordane"], ["K", "", "0719", "ANDEBU", "7", "Vestfold"],
                ["M", "", "0805", "PORSGRUNN", "8", "Telemark"],
                ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"],
                ["M", "", "0235", "ULLENSAKER", "2", "Akershus"], ["K", "", "1833", "RANA", "18", "Nordland"],
                ["K", "", "0230", "LØRENSKOG", "2", "Akershus"], ["K", "", "0105", "SARPSBORG", "1", "Østfold"],
                ["M", "", "0211", "VESTBY", "2", "Akershus"], ["K", "", "0301", "OSLO", "3", "Oslo"],
                ["M", "", "1119", "HÅ", "11", "Rogaland"], ["M", "", "1841", "FAUSKE", "18", "Nordland"],
                ["K", "", "0517", "SEL", "5", "Oppland"], ["M", "", "1860", "VESTVÅGØY", "18", "Nordland"],
                ["K", "", "1939", "STORFJORD", "19", "Troms"], ["K", "", "0128", "RAKKESTAD", "1", "Østfold"],
                ["M", "", "0935", "IVELAND", "9", "Aust-Agder"], ["M", "", "0231", "SKEDSMO", "2", "Akershus"],
                ["M", "", "1902", "TROMSØ", "19", "Troms"], ["K", "", "1032", "LYNGDAL", "10", "Vest-Agder"],
                ["M", "", "1102", "SANDNES", "11", "Rogaland"]
              ]
            },
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19632953,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1064,
            "drawDate": "2016-09-24T18:00:00",
            "unsortednumbers": [1, 21, 10, 27, 2, 16, 7],
            "unsortedaddNumbers": [11],
            "numbers": [1, 2, 7, 10, 16, 21, 27],
            "addNumbers": [11],
            "prizes": ["3586940", "155760", "3425", "95", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [4, 13, 619, 23144, 315583],
            "winnerList": [
              ["M", "", "1106", "HAUGESUND", "11", "Rogaland"], ["M", "", "1601", "TRONDHEIM", "16", "Sør-Trøndelag"],
              ["M", "", "0701", "HORTEN", "7", "Vestfold"], ["Andelsbank", "", "", "", "", ""]
            ],
            "turnover": 77138530,
            "totalNumberOfWinners": 339363,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19632760,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1065,
            "drawDate": "2016-10-01T18:00:00",
            "unsortednumbers": [11, 5, 14, 2, 24, 19, 30],
            "unsortedaddNumbers": [17],
            "numbers": [2, 5, 11, 14, 19, 24, 30],
            "addNumbers": [17],
            "prizes": ["2862925", "106325", "3585", "105", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [5, 19, 590, 21214, 288744],
            "winnerList": [
              ["M", "", "1841", "FAUSKE", "18", "Nordland"], ["M", "", "1836", "RØDØY", "18", "Nordland"],
              ["M", "", "0219", "BÆRUM", "2", "Akershus"], ["M", "", "0706", "SANDEFJORD", "7", "Vestfold"],
              ["K", "", "1103", "STAVANGER", "11", "Rogaland"]
            ],
            "turnover": 76960350,
            "totalNumberOfWinners": 310572,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633758,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1066,
            "drawDate": "2016-10-08T18:00:00",
            "unsortednumbers": [14, 22, 27, 17, 24, 9, 13],
            "unsortedaddNumbers": [12],
            "numbers": [9, 13, 14, 17, 22, 24, 27],
            "addNumbers": [12],
            "prizes": ["4663745", "98725", "3705", "95", "45"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [3, 20, 558, 23170, 304807],
            "winnerList": [
              ["K", "", "1243", "OS", "12", "Hordaland"], ["K", "", "0301", "OSLO", "3", "Oslo"],
              ["M", "", "0135", "RÅDE", "1", "Østfold"]
            ],
            "turnover": 75221745,
            "totalNumberOfWinners": 328558,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633303,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1067,
            "drawDate": "2016-10-15T18:00:00",
            "unsortednumbers": [1, 24, 17, 12, 27, 25, 21],
            "unsortedaddNumbers": [20],
            "numbers": [1, 12, 17, 21, 24, 25, 27],
            "addNumbers": [20],
            "prizes": ["7065720", "166195", "4810", "110", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 12, 434, 20361, 284604],
            "winnerList": [
              ["M", "", "1865", "VÅGAN", "18", "Nordland"], ["M", "", "1719", "LEVANGER", "17", "Nord-Trøndelag"]
            ],
            "turnover": 75975520,
            "totalNumberOfWinners": 305413,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633882,
              "drawDate": "2016-12-24T20:00:00"
            }
          },
          {
            "id": 1068,
            "drawDate": "2016-10-22T18:00:00",
            "unsortednumbers": [17, 24, 11, 13, 2, 31, 34],
            "unsortedaddNumbers": [14],
            "numbers": [2, 11, 13, 17, 24, 31, 34],
            "addNumbers": [14],
            "prizes": ["7178145", "144720", "4505", "120", "50"],
            "prizeCaptionTable": ["7 rette", "6 + 1 rette", "6 rette", "5 rette", "4 rette"],
            "winnerCountTable": [2, 14, 471, 19064, 272324],
            "winnerList": [
              ["K", "", "1224", "KVINNHERAD", "12", "Hordaland"], ["K", "", "0706", "SANDEFJORD", "7", "Vestfold"]
            ],
            "turnover": 77184375,
            "totalNumberOfWinners": 291875,
            "superlottoNextDraw": {
              "numberOfDrawsUntil": 9,
              "prizePool": 19633052,
              "drawDate": "2016-12-24T20:00:00"
            }
          }
        ]
        , cb);
    });
  }


};
