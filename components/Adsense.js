// Google AdSense script
// Replace Publisher ID in page ad units
import Script from "next/script";

export default function Adsense() {
  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
      />
    </>
  );
}
