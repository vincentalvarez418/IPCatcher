export async function getClientInfo() {
  const ipRes = await fetch('https://api.ipify.org/?format=json');
    const ipData = await ipRes.json();

  const info = {
    ip: ipData.ip,
    city: ipData.city,
    region: ipData.region,
    country: ipData.country_name,
    postal: ipData.postal,
    latitude: ipData.latitude,
    longitude: ipData.longitude,
    org: ipData.org,
    timezone: ipData.timezone,
    utc_offset: ipData.utc_offset,
    country_calling_code: ipData.country_calling_code,
    currency: ipData.currency,
    languages: ipData.languages,

    userAgent: navigator.userAgent,
    platform: navigator.platform,
    appVersion: navigator.appVersion,
    appName: navigator.appName,
    product: navigator.product,
    language: navigator.language,
    languagesList: navigator.languages,
    vendor: navigator.vendor,
    cookieEnabled: navigator.cookieEnabled,
    javaEnabled: navigator.javaEnabled?.() || false,
    doNotTrack: navigator.doNotTrack,

    hardwareConcurrency: navigator.hardwareConcurrency || null,
    deviceMemory: navigator.deviceMemory || null,
    maxTouchPoints: navigator.maxTouchPoints || 0,
    touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,

    screen: {
      width: screen.width,
      height: screen.height,
      availWidth: screen.availWidth,
      availHeight: screen.availHeight,
      pixelDepth: screen.pixelDepth,
      colorDepth: screen.colorDepth,
      pixelRatio: window.devicePixelRatio,
      orientation: screen.orientation?.type || 'unknown',
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight
    },

    connection: navigator.connection
      ? {
          type: navigator.connection.type,
          effectiveType: navigator.connection.effectiveType,
          downlink: navigator.connection.downlink,
          rtt: navigator.connection.rtt,
          saveData: navigator.connection.saveData
        }
      : null,

    referrer: document.referrer || 'direct',
    locationHref: window.location.href,
    locationOrigin: window.location.origin,
    locationPath: window.location.pathname,

    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timeZoneOffset: new Date().getTimezoneOffset(),
    time: new Date().toISOString(),

    mimeTypes: [...navigator.mimeTypes].map(m => m.type),
    plugins: [...navigator.plugins].map(p => p.name),

    math: {
      acos: Math.acos(0.123456789),
      sin: Math.sin(1),
      tan: Math.tan(1),
      pow: Math.pow(Math.PI, -100),
      sqrt: Math.sqrt(2),
      e: Math.E,
      pi: Math.PI
    }
  };

  return info;
}