module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '457f8ba0437dc6ca6b7ba6956a821d8d'),
  },
});
