(function () {

    function runExpresServer() {
        let express = require('express');
        let app = express();
        let port = process.env.port || 3000;


        app.get('/', (req, res) => {
            res.send('Hello Landling page');
        });

        let bookRouter = express.Router();
        bookRouter.route('/books')
            .get((req, res) => {
                var book = {
                    name: 'testbook'
                };
                res.json(book);
            });

        app.use('/api', bookRouter);

        app.listen(port, () => {
            console.log('express server listening on port ' + port);
        });
    }

    module.exports = {
        run: runExpresServer
    }

})();
