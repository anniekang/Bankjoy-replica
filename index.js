const express = require('express');
const { PORT } = process.env;


express()
  .use(express.static(`${__dirname}/public`))
  .listen(PORT || 3000, () => {
      console.log(`listening on ${PORT || 3000}`);
    })
