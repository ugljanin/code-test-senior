import * as fs from 'fs';
export const getAllCollections = (req, res, next) => {
    let rawdata = fs.readFileSync('./json/collections.json');
    let result = JSON.parse(rawdata);
    res.json(result);
};
export const getCollectionNews = (req, res, next) => {
    let rawdata = fs.readFileSync(`./json/${req.params.id}.json`);
    let result = JSON.parse(rawdata);
    res.json(result);
};
