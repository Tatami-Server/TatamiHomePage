const dns = require("dns");
dns.setDefaultResultOrder("ipv4first")

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false,
        remotePatterns: [
            { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
            { protocol: 'https', hostname: 'mineskin.eu' },
            { protocol: 'https', hostname: 'tatami-f2ad1.firebaseapp.com' },
            { protocol: 'https', hostname: 'dev-tatami.web.app' },
            { protocol: 'https', hostname: 'tatamiserver.com' },
        ]
    }
}

module.exports = nextConfig
