module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'd9b0df66ff97a666027e665707b4e3e7'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3e03ba4b85ef5f24e8fa77b785e1bba1'),
  },
  url: '/dashboard'
});
