module.exports = {
  async rewrites() {
   return [
     {
        source: '/api/:path*',
        destination: '/api/:path*',
     },
   ]
  },
  images: {
    domains: ['ibb.co','imgur.com','i.ibb.co',"ebackendbucket.s3.amazonaws.com","via.placeholder.com"
  ],
  },
};
