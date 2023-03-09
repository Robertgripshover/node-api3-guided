const Hubs = require('./hubs-model.js');

async function checkHubIdExists(req, res, next) {
    try {
        const hub = await Hubs.findById(req.param.id);
        if (hub) {
            req.hub = hub;
            next();
        } else {
            next({status: 404, message: `Hub ${req.params.id} not found`});
        }
    } catch (err) {
        next(err);
    }
}

module.exports = {
    checkHubIdExists,
};