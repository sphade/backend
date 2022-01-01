module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a5b74af45d060ec22e464dc4be49c0a0'),
  },
});
