import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { useEffect } from "react";
const Section1 = dynamic(() => import("../components/Section1"), {
  ssr: false,
});
const Section2 = dynamic(() => import("../components/Section2"), {
  ssr: false,
});
const Section3 = dynamic(() => import("../components/Section3"), {
  ssr: false,
});
const Section4 = dynamic(() => import("../components/Section4"), {
  ssr: false,
});
const Table = dynamic(() => import("../components/Table"), { ssr: false });
import { Footer } from "components/Footer";
const Satoshi = localFont({
  src: "../public/font/Satoshi-Light.woff",
  display: "swap",
});
const Cabinet = localFont({
  src: "../public/font/CabinetGrotesk-Bold.woff",
  display: "swap",
});
const Homepage = () => {
  useEffect(() => {
    window.setTimeout(() => {
      document.querySelector("#main")?.scrollTo(0, 0);
    }, 100);
  }, []);
  return (
    <>
      <main id="main" className={Satoshi.className}>
        <Section1 />
        <Section2 />
        <Section3 />

        <Table />

        <Section4 />
        <section className={"roadmap " + Cabinet.className} id="timeline">
          <div className="roadmap_main">
            <div className="meteor_line">
              <svg
                width="1205"
                height="84"
                viewBox="0 0 1205 84"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1200 79L17.2126 79C8.34156 79 2.53722 69.7069 6.42926 61.7352L34.1293 5"
                  stroke="url(#paint0_linear_4_189)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_4_189"
                    x1="599"
                    y1="79"
                    x2="599"
                    y2="5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00CC9B" />
                    <stop offset="1" stopColor="#00CC9B" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2>Test Timeline</h2>
            <dl>
              <dt>
                <span>Sep 1, 2024</span>
              </dt>
              <dd>
                - Open, update, and close channels between two nodes <br />
                - Support for channels with any RGB++ Coin <br />- Cross-chain
                interoperability with the Bitcoin Lightning Network
              </dd>
              <dt>
                <span>Mid-Sep 2024</span>
              </dt>
              <dd>
                - Multi-hop routing support <br />- Watchtower service
              </dd>
              {/* <dt>
                <span>2025 Q1</span>
              </dt>
              <dd>- Fiber Network mainnet launch</dd> */}
            </dl>
            <a
            href="https://www.youtube.com/watch?v=-es_tPxfQTo"
            target="_blank"
            className="youtube"
            style={{
              backgroundImage:
                "url('https://i.ytimg.com/vi_webp/-es_tPxfQTo/maxresdefault.webp')",
            }}
          >
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
              <path
                className="ytp-large-play-button-bg"
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#f00"
              ></path>
              <path d="M 45,24 27,14 27,34" fill="#fff"></path>
            </svg>
          </a>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })

export default Homepage;
