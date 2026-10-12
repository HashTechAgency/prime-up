import Script from "next/script";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
// Google Ads conversion tag (shared by llcprimeup@gmail.com). Always loaded so
// conversion tracking doesn't depend on the GA env var.
const ADS_ID = "AW-17619898459";
const GTM_ID = "GTM-PFC9GNDT";

export function GoogleTag() {
  const extraConfig =
    GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== ADS_ID
      ? `gtag('config', '${GA_MEASUREMENT_ID}');`
      : "";

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ADS_ID}');
            ${extraConfig}
          `,
        }}
      />
      {/* <!-- Event snippet for Contact (1) conversion page --> */}
      <Script
        id="google-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', { 
                  'send_to': 'AW-17619898459/y8_JCJys9KkbENug6dFB',
                  'event_callback': callback
              });
              return false;
            }
          `,
        }}
      />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `,
        }}
      />

      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}
