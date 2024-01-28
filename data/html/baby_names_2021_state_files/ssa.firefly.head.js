// update <html class> to indicate JS support
document.documentElement.classList.remove('no-js');

// update <html class> if this is Internet Explorer
if (!Array.prototype.includes) {
  document.documentElement.classList.add('is-ie');
}

/*------------------------------------*\

# GOOGLE TAG MANAGER

\*------------------------------------*/

var dataGA = document.documentElement.dataset.ga || 'on';
if (dataGA === 'on') {
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-KPTWM8C');
}
