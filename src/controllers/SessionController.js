const User = require('../models/User');

// index, show, store, update, destroy

module.exports = {
    async store(req, res) {
        const { email } = await req.body;
        // const email = req.body.email;

        // let user = await User.findOne({ email: email });
        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};