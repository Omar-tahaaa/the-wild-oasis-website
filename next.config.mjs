/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL(
        `${process.env.SUPABASE_URL}/storage/v1/object/public/cabin-images//**`
      ),
    ],
  },
};

export default nextConfig;
