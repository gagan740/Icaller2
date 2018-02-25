const List      =   require('../models/list');

module.exports  =   (router) => {
    router.post('/list', (req, res) => {
        // List
        // .find({})
        // .sort({'_id': -1})
        // .limit(100)
        // .exec((err, list) => {
        //     if (err) throw err;
        //     if (!list) {
        //         res.json({ success: false, message: 'Something went wrong.' });
        //     } else {
        //         res.json({ success: true, list: list});
        //     }
        // });
        console.log(req.body);
        let list    =   new List({listID: parseInt(req.body.listID)});

        list.save(err => {
            if (err) {
                res.json({ success: false, message: err });
            } else {
                res.json({ success: true, message: "success"});
            }
        });

    });

    router.post('/get-list', (req, res) => {
        console.log(req.body);
        List
        .find({})
        .sort(req.body.sort)
        .skip(parseInt(req.body.skip))
        .limit(parseInt(req.body.limit))
        .exec((err, list) => {
            if (err) throw err;
            if (!list) {
                res.json({ success: false, message: 'Something went wrong.' });
            } else {
                res.json({ success: true, list: list});
            }
        });
    });

    return router;
};