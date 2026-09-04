document.documentElement.dataset.theme =
  localStorage.getItem('openvk.theme') === 'dark' ? 'dark' : 'default';
(function () {
  var frame = 791;
  var mobile = 771;
  var maxZoom = 1.9;
  function syncZoom() {
    var width = window.innerWidth;
    var zoom = width < mobile ? 1 : Math.min(maxZoom, Math.max(1, (width - 32) / frame));
    document.documentElement.style.setProperty('--ovk-zoom', String(zoom));
  }
  syncZoom();
  window.addEventListener('resize', syncZoom);
})();
(function () {
  var stored = localStorage.getItem('openvk.lang');
  var known = {
    ru: 1,
    en: 1,
    uk: 1,
    by: 1,
    by_lat: 1,
    pl: 1,
    lv: 1,
    lt: 1,
    de: 1,
    es: 1,
    hy: 1,
    sr_cyr: 1,
    sr_lat: 1,
    tr: 1,
    kk: 1,
    kk_lat: 1,
    ru_old: 1,
    eo: 1,
    ru_sov: 1,
    ru_lat: 1,
    udm: 1,
    'zh-Hans': 1,
    id: 1,
    qqx: 1,
  };
  if (stored && known[stored]) {
    document.documentElement.lang = stored === 'qqx' ? 'en' : stored.split('_')[0];
  }
})();
