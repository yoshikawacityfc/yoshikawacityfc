module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: [
      process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT.replace("https://", ""),
    ],
  },
};
