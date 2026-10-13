import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ['192.168.100.14', 'localhost'],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
};

export default withNextIntl(nextConfig);
