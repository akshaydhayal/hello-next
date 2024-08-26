/** @type {import('next').NextConfig} */
const nextConfig = {};




// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   async headers() {
//     return [
//         {
//         // Sets security headers for all routes
//         source: "/(.*)",
//         headers: [
//           {
//             key: "Content-Security-Policy",
//             value:
//             //   "default-src 'self' https://geeksforgeeks.com/'; style-src 'self' ; image-src 'https://geeksforgeeks.org/';  script-src 'self' https://abcd.com; font-src 'self' 'https://example.com/'",
//                   "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' https://my-canvas.com/* https://cdn.dummyjson.com data:; connect-src 'self' https://dummyjson.com/ https://api.dscvr.one https://api1.stg.dscvr.one https://*.helius-rpc.com; font-src 'self';"

//             },
//         ],
//     },
// ];
// },
// };

export default nextConfig;


