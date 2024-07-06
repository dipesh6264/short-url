
const shortid= require("shortid");
const URL = require('../models/url')



async function handleGenerateNewShortURL(req, res){
const body = req.body;
if(!body.url) return res.status(400).json({error : 'url is required'});
const shortID = shortid();
await URL.create({
    shortId : shortID,
    redirectURL:body.url,
    visitHistory: [],
    createdBy:req.user._id,
});
return res.render("home",{id:shortID,fd:true})

}

async function handelGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });

    if (!result) {
        return res.status(404).send('URL not found');
    }

    return res.render('analytics', {
        shortId: result.shortId,
        redirectURL: result.redirectURL,
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports={
handleGenerateNewShortURL,
handelGetAnalytics,
};