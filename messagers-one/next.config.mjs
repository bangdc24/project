/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     wasmMemoryLimit: 512,// Adjust as needed
    //     appDir: true,
    //     swcPlugins: [
    //         ["next-superjson-plugin", {}]
    //     ]
    // },
    images: {
        domains: [
            "res.cloundinary.com",
            "avtars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "lh3.facebookusercontent.com"
        ]
    }
};

export default nextConfig;
