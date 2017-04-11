var fs = require('fs');

const PROJ = '<!-- PROJ -->';
const ORG = '<!-- ORG -->';
const htmlFile = './indexTest.html';
const jsFile = './js/main.js';
const ORG_RE = /\<\!\-\-\sORG\s\-\-\>/
const PROJ_RE = /\<\!\-\-\sPROJ\s\-\-\>/

var jsCode = fs.readFileSync(jsFile).toString();
var html = fs.readFileSync(htmlFile).toString();

var type;
var pic;
var id;
var title;
var titleColor;
var date;
var punchline;
var description;

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Org or project? ', (answer) => {
    type = answer;
    rl.question('What\'s the picture name in /assets/? ', (answer) => {
        pic = answer;
        rl.question('What id for the html? ', (answer) => {
            id = answer
            var replStr = `<img src="assets/${pic}" alt="" id="${id}">`;
            replStr = type === 'org' ? `${ORG}\n${replStr}` : `${PROJ}\n${replStr}`
            var re = type === 'org' ? ORG_RE : PROJ_RE;
            html = html.replace(re, replStr);
            fs.writeFile(htmlFile, html, (err) => {
                if (err) throw err;
            });
            rl.question('What is the title? ', (answer) => {
                title = answer;
                rl.question('What is the color of the title? (no #) ', (answer) => {
                    titleColor = answer;
                    rl.question('What is the date to be displayed? ', (answer) => {
                        date = answer;
                        rl.question('What is the punchline? ', (answer) => {
                            punchline = answer;
                            rl.question('What is the description of your project? ', (answer) => {
                                description = answer;
                                var newjs = `\n\$(#${id}).on(\"click\", function() {\n` +
                                    `document.getElementById("title").innerHTML = "${title}";\n` +
                                    `document.getElementById("title").style.color = "#${titleColor}";\n` +
                                    `document.getElementById("date").innerHTML = "${date}";\n` +
                                    `document.getElementById("punchline").innerHTML = "${punchline}";\n` +
                                    `document.getElementById("description").innerHTML = "${description}";\n` +
                                    `});`;
                                fs.writeFile(jsFile, jsCode + newjs, (err) => {
                                    if (err) throw err;
                                });
                                rl.close();
                            });
                        });
                    });
                });
            });
        });
    });
});
