var dress = require('../models/dress');
// List of all dresss

// for a specific dress.
exports.dress_detail = function(req, res) {
res.send('NOT IMPLEMENTED: dress detail: ' + req.params.id);
};
// Handle dress create on POST.

// Handle dress delete form on DELETE.
exports.dress_delete = function(req, res) {
res.send('NOT IMPLEMENTED: dress delete DELETE ' + req.params.id);
};
// Handle dress update form on PUT.
exports.dress_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: dress update PUT' + req.params.id);
};

// List of all dresss
exports.dress_list = async function(req, res) {
    try{
    thedresss = await dress.find();
    res.send(thedresss);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle dress create on POST.
exports.dress_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dress();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dress_type":"goat", "cost":12, "size":"large"}
    document.types = req.body.types;
    document.fabric = req.body.fabric;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // VIEWS
// Handle a show all view
exports.dress_view_all_Page = async function(req, res) {
    try{
    thedresss = await dress.find();
    res.render('dress', { title: 'dress Search Results', results: thedresss });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };