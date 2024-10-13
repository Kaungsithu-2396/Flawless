const { hostname } = require("os");

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
            },
            {
                protocol: "https",
                hostname: "flawless-dusky.vercel.app",
            },
            {
                protocol: "http",
                hostname: "res.cloudinary.com",
            },
        ],
    },
};
