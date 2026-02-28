testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
let Passcounter = 0;
let Failcounter = 0;
let Skipcounter = 0;
for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        Passcounter++;
        //console.log("Test " + (i + 1) + ": Passed");
    } else if (testResults[i] === "fail") {
        Failcounter++;
        //console.log("Test " + (i + 1) + ": Failed");
    } else if (testResults[i] === "skip") {
        Skipcounter++;
        //console.log("Test " + (i + 1) + ": Skipped");
    }
}

console.log("Total Passes:", Passcounter);
console.log("Total Fails:", Failcounter);
console.log("Total Skips:", Skipcounter);
if (Passcounter === testResults.length) {
    console.log("All tests passed! VERDICT: Ready for release");
} else if (Failcounter <= 2) {
    console.log(Passcounter/testResults.length*100 + "% VERDICT: Minor failures. Review before release");
} else if (Failcounter > 2) {
    console.log(Passcounter/testResults.length*100 + "% VERDICT: Too many failures. Do not release");
} else {
    console.log("VERDICT: Inconclusive results. Further testing needed");
}