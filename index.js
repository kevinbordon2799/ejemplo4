const path = require("path");
const fs = require("fs");

const readPersonsFile = function () {
    const FILE_NAME = "persons.json";
    const FILE_PATH = path.join(__dirname, FILE_NAME);

    fs.readFile(FILE_PATH, { encoding: "utf-8" }, function (err, data) {
        console.log({ err, data: JSON.parse(data) });
    });
};

const readTeamsFile = function () {
    const FILE_NAME = "teams.json";
    const FILE_PATH = path.join(__dirname, FILE_NAME);

    fs.readFile(FILE_PATH, { encoding: "utf-8" }, function (err, data) {
        console.log({ err, data: JSON.parse(data) });
    });
};

readPersonsFile();
readTeamsFile();
