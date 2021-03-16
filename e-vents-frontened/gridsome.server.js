const axios = require('axios');
module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/]
        })
      ])
    }
  })
  api.loadSource(async (actions) => {
    const { data } = await axios.get("http://localhost:1337/products");
    const collection = actions.addCollection({
      typeName: "Product",
    });
    for (const product of data) {
      collection.addNode({
        id: product.id,
        title: product.title,
        price: product.price,
        rating: product.rating,
        description: product.description,
        image: product.image.formats.thumbnail.url,
        instructions: product.instructions,
      });
    }
  });
}