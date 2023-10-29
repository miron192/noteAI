/** @type {import('next').NextConfig} */
const nextConfig = {images:{
    domains:["oaidalleapiprodscus.blob.core.windows.net", "firebasestorage.googleapis.com"]
},
typescript:{
    ignoreBuildErrors:true,
},
eslint:{ignoreDuringBuilds:true}}

module.exports = nextConfig
