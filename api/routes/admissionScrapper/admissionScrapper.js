// import express from "express";
// import axios from "axios";
// import cheerio from "cheerio";
// import AdmissionData from "../../models/admissionSchema.js";

// const admissionRouter = express.Router();

// admissionRouter.get("/admissiondata", async (req, res) => {
//     try {
//         const response = await axios.get('https://unilag.edu.ng/?page_id=2551', {
//             headers: {
//                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
//             }
//         });
//         const html = response.data;
//         const $ = cheerio.load(html);

//         let data = [];
//         $('selector-for-data').each((index, element) => {
//             data.push({
//                 title: $(element).find('selector-for-title').text(),
//                 link: $(element).find('selector-for-link').attr('href')
//             });
//         });

//         await AdmissionData.insertMany(data);
//         res.json(data);
//     } catch (error) {
//         res.status(500).send('Error occurred while scraping');
//     }
// });

// admissionRouter.get('/data', async (req, res) => {
//     try {
//         const data = await AdmissionData.find();
//         res.json(data);
//     } catch (error) {
//         res.status(500).send('Error occurred while fetching data');
//     }
// });

// export default admissionRouter;


// import express from "express";
// import axios from "axios";
// import cheerio from "cheerio";
// import mongoose from 'mongoose';
// import AdmissionData from "../../models/admissionSchema.js"; 

// const admissionRouter = express.Router();



// admissionRouter.get("/scrape", async (req, res) => {
//     try {
//         const response = await axios.get('https://en.wikipedia.org/wiki/List_of_universities_in_Nigeria');
//         const html = response.data;
//         const $ = cheerio.load(html);

//         let data = [];
//         $('table.wikitable tbody tr').each((index, element) => {
//             const name = $(element).find('td:nth-child(1)').text().trim();
//             const link = $(element).find('td:nth-child(1) a').attr('href');
//             if (name) {
//                 data.push({
//                     title: name,
//                     link: `https://en.wikipedia.org${link}`
//                 });
//             }
//         });

//         await AdmissionData.insertMany(data);
//         res.json(data);
//     } catch (error) {
//         res.status(500).send('Error occurred while scraping');
//     }
// });

// admissionRouter.get('/data', async (req, res) => {
//     try {
//         const data = await AdmissionData.find();
//         res.json(data);
//     } catch (error) {
//         res.status(500).send('Error occurred while fetching data');
//     }
// });

// export default admissionRouter;



import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import mongoose from 'mongoose';
import AdmissionData from "../../models/admissionSchema.js"; // Ensure this path is correct

const admissionRouter = express.Router();

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/unilag', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

admissionRouter.get("/admissiondata", async (req, res) => {
    try {
        const response = await axios.get('https://en.wikipedia.org/wiki/List_of_universities_in_Nigeria', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Referer': 'https://www.google.com/',
                'DNT': '1',
                'Upgrade-Insecure-Requests': '1'
            }
        });
        const html = response.data;
        const $ = cheerio.load(html);

        let data = [];
        $('table.wikitable tbody tr').each((index, element) => {
            const name = $(element).find('td:nth-child(1)').text().trim();
            const link = $(element).find('td:nth-child(1) a').attr('href');
            if (name) {
                data.push({
                    title: name,
                    link: `https://en.wikipedia.org${link}`
                });
            }
        });

        await AdmissionData.insertMany(data);
        res.json(data);
    } catch (error) {
        res.status(500).send('Error occurred while scraping');
    }
});

admissionRouter.get('/data', async (req, res) => {
    try {
        const data = await AdmissionData.find();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error occurred while fetching data');
    }
});

export default admissionRouter;
