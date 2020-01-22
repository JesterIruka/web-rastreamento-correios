const app = require('./app')
const { rastro } = require('rastrojs');
const brdate = require('./utils/br-date');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

app.get('/', async (req,res) => {
    const codigo = req.query.codigo;
    let track = null;
    if (codigo !== undefined && codigo.length > 0) {
        if (codigo.length == 13) {
            track = await rastro.track(req.query.codigo);
            if ((track=track[0]).isInvalid) track = false;
        } else track = false;
    }
    return res.render('track', {track, brdate, codigo})
});

module.exports = app;