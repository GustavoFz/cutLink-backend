const routes = require('express').Router();

const generateLink = require('./components/generateLink');
const Link = require('./models/Link');

routes.get('/', (req, res) => {
    return res.json({info: 'Welcome to the cutLink API'});
});

routes.post('/create', async (req, res) => {


   const link = await Link.create({
       originalUrl: req.body.url,
       shortUrl: generateLink.random()
       
   });
    return res.json(link);
});

// routes.post('/create/:url', async (req, res) => {


//     const link = await Link.create({
//         originalUrl: req.params.originalUrl,
//         shortUrl: generateLink.random()
//     });
 
//      return res.json({info: "your link was created successfully"});
//  });

routes.get('/links', async (req, res) => {
    const links = await Link.find()
    return res.json(links);
    
});

routes.delete('/delete/:id', async (req, res) => {
    const link = await Link.deleteOne({_id: req.params.id})

    return res.json({info: "yor link was successfully deleted"})
})

module.exports = routes;