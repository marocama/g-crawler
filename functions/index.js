const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors')({origin: true})
const functions = require('firebase-functions')

exports.crawler = functions.region('southamerica-east1').runWith({timeoutSeconds: 540, memory: '512MB'}).https.onRequest(async (req, res) => { 
  cors(req, res, async () => { 
    
    const search = (req.params.search || '').replace(/ /g, '+')

    const { status, data } = await axios.get(`https://www.google.com/search?q=${search}&oq=${search}`)
    if (status !== 200) { return res.status(500).json({ message: 'Solicitação indisponível.' }) }

    const results = [], $ = cheerio.load(data)
    
    functions.logger.info('Documento obtido', data)
    const items = $('.MjjYud')
    functions.logger.info('ITEMS', items.length)
    
    items.each(element => { console.log('Encontrei')
				
      const title = $(element).find('.LC20lb.MBeuO.DKV0Md').text()
      const link = $(element).find('.tjvcx.GvPZzd.cHaqb').text()

      results.push({ title, link })
    })

    return res.status(200).json({ results })
  }) 
})