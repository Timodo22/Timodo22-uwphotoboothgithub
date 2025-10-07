(function() {
    var cdnOrigin = "https://cdn.shopify.com";
    var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.TiXrO7Ka.js", "/cdn/shopifycloud/checkout-web/assets/c1/app.BMlYnG8f.js", "/cdn/shopifycloud/checkout-web/assets/c1/nl.C8Zzu8ck.js", "/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.CsuNT4HT.js", "/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection.CYk2Dc0t.js", "/cdn/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation.CQfFS0Bz.js", "/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.DdALwPue.js", "/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.CAFOAWB2.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.Cb34lrkP.js", "/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.DEN3zbfY.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.BRnI5C3Y.js", "/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.CuP_dhav.js", "/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.BqcSctYb.js", "/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.8PXILRfj.js", "/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.KT7b7rw0.js", "/cdn/shopifycloud/checkout-web/assets/c1/index.D6xz48ja.js", "/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.-JYCSorz.js"];
    var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.DxIYCz1z.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.PMX4OSBO.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryMethodSelectorSection.BvrdqG-K.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useEditorShopPayNavigation.CBpWLJzT.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.CKAakmU8.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = [];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;

        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
    }

    function onLoaded() {
        try {
            if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
                preconnectAssets();
                prefetchAssets();
            }
        } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();