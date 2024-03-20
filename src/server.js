const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://20.244.56.144',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  })
);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});