import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* The problem statement lives outside public/ so it is only reachable
     through the time-gated /ps route. Tracing makes sure it is deployed. */
  outputFileTracingIncludes: {
    "/ps": ["./Investor_Resilliance.pdf"],
  },
};

export default nextConfig;