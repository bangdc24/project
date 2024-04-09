/** @type {import('next').NextConfig} */

const nextConfig = {
//   experimental: {
//     appDir: true,
//       swcPlugins: [
//           ['nextsuperjson-plugin', {}],
//         ],
//   },

  images: {
    domains: [
        "res.cloudinary.com",
        "avatars.githubusercontent.com",
        "lh3.googleusercontent.com"
    ]
    //   remotePatterns: [
    //       {
    //           protocol: 'http',
    //           hostname: 'github.com'
    //       },
    //       {
    //           protocol: 'http',
    //           hostname: 'raw.githubusercontent.com'
    //       },
    //       {
    //           protocol: 'http',
    //           hostname: 'google.com'
    //       },
    //       {
    //           protocol: 'http',
    //           hostname: 'raw.googleusercontent.com'
    //       }
    //   ],
  }
};

export default nextConfig;
