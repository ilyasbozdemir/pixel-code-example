// next.config.js

module.exports = {
  
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'mdx'],
    async headers() {
      return [
        {
          // Allow CORS for all origins
          source: '/api/pixel',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*',
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, PUT, DELETE, OPTIONS',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: '*',
            },
          ],
        },
      ];
    },
  };

