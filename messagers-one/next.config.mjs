/** @type {import('next').NextConfig} */

const nextConfig = {
    // experimental: {
    //     swcPlugins: [
    //         // Example: Enable the "react-intl" plugin for internationalization
    //         ['react-intl', {}],
    //       ],
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'github.com'
            },
            {
                protocol: 'http',
                hostname: 'raw.githubusercontent.com'
            },
            {
                protocol: 'http',
                hostname: 'google.com'
            },
            {
                protocol: 'http',
                hostname: 'raw.googleusercontent.com'
            },
            {
                protocol: 'http',
                hostname: 'facebook.com'
            },
            {
                protocol: 'http',
                hostname: 'raw.facebookusercontent.com'
            }
        ],
    }
};

export default nextConfig;
