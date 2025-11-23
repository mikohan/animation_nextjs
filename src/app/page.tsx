import {
  Navbar,
  Hero,
  LogoTicker,
  ProductShowcase,
  Pricing,
  Testimonials,
  CallToAction,
  Footer,
} from "@/sections";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
