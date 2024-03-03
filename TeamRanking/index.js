const puppeteer = require("puppeteer");
const express = require("express");
const app = express();

// Template Engine
app.set("view engine", "ejs");

// Public
app.use(express.static("public"))

// Team Fetch
let teams = [];
const getir = async () => {
    var url = `https://www.mackolik.com/puan-durumu/türkiye-süper-lig/2023-2024/482ofyysbdbeoxauk19yg7tdt`;
    var browser = await puppeteer.launch();
    var page = await browser.newPage();
    await page.goto(url);
    for (let i=1; i<=20; i++)
    {
        var sections = await page.$(`[class="p0c-competition-tables__table p0c-competition-tables__table--total"] tbody tr:nth-child(${i})`);
        var team = await (await sections.getProperty('textContent')).jsonValue();
        var text = team.split(" ")
        if(text[15]=="Ç.")
        {
            var a = {
                siralama: text[2],
                takim: "Ç. Rizespor",
                oynanan: text[23+1],
                galibiyet: text[29+1],
                beraberlik: text[32+1],
                maglubiyet: text[35+1],
                atilangol: text[38+1],
                yenilengol: text[41+1],
                averaj: text[44+1],
                puan: text[47+1],
                son5: text[52+1],
                son4: text[56+1],
                son3: text[60+1],
                son2: text[64+1],
                son1: text[68+1]
            }
            teams.push(a);
        }
        else if (text[15]=="MKE")
        {
            var b = {
                siralama: text[2],
                takim: "MKE Ankaragücü",
                oynanan: text[23+1],
                galibiyet: text[29+1],
                beraberlik: text[32+1],
                maglubiyet: text[35+1],
                atilangol: text[38+1],
                yenilengol: text[41+1],
                averaj: text[44+1],
                puan: text[47+1],
                son5: text[52+1],
                son4: text[56+1],
                son3: text[60+1],
                son2: text[64+1],
                son1: text[68+1]
            }
            teams.push(b);
        }
        else if (text[15]=="Adana")
        {
            var c = {
                siralama: text[2],
                takim: "Adana Demirspor",
                oynanan: text[23+1],
                galibiyet: text[29+1],
                beraberlik: text[32+1],
                maglubiyet: text[35+1],
                atilangol: text[38+1],
                yenilengol: text[41+1],
                averaj: text[44+1],
                puan: text[47+1],
                son5: text[52+1],
                son4: text[56+1],
                son3: text[60+1],
                son2: text[64+1],
                son1: text[68+1]
            }
            teams.push(c);
        }
        else if (text[15]=="Gaziantep")
        {
            var d = {
                siralama: text[2],
                takim: "Gaziantep FK",
                oynanan: text[23+1],
                galibiyet: text[29+1],
                beraberlik: text[32+1],
                maglubiyet: text[35+1],
                atilangol: text[38+1],
                yenilengol: text[41+1],
                averaj: text[44+1],
                puan: text[47+1],
                son5: text[52+1],
                son4: text[56+1],
                son3: text[60+1],
                son2: text[64+1],
                son1: text[68+1]
            }
            teams.push(d);
        }
        else
        {
            var e = {
                siralama: text[2],
                takim: text[15],
                oynanan: text[23],
                galibiyet: text[29],
                beraberlik: text[32],
                maglubiyet: text[35],
                atilangol: text[38],
                yenilengol: text[41],
                averaj: text[44],
                puan: text[47],
                son5: text[52],
                son4: text[56],
                son3: text[60],
                son2: text[64],
                son1: text[68]
            }
        teams.push(e);
        }
    }
    /*
    teams.forEach(tm => {
        console.log("Siralama : " + tm.siralama + " / Takım : " + tm.takim + " / Oynanan Maç Sayısı : " + tm.oynanan 
        + " / Yenilen Gol : " + tm.yenilengol + " / Averaj : " + tm.averaj + " / Puan : " + tm.puan + 
        " / Son 5 Maç : " + tm.son5 + " - " + tm.son4 +  " - " + tm.son3 +  " - " + tm.son2 +  " - " + tm.son1)
        console.log(" ")
    });
    */

    browser.close();
}

// Pages
app.get("/", async (req, res) => {
    teams= [];
    await getir();
    res.render("main", {
        t: teams
    });
})

// Server Port
app.listen(3000, () => {
    console.log("Sunucu 3000 portundan başlatıldı!");
})