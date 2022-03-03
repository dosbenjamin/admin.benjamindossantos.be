module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3e03ba4b85ef5f24e8fa77b785e1bba1'),
  },
});
