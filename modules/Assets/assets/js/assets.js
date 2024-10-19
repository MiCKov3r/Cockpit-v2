import "../components/display-image.js";

// Global Vue components
VueView.component('asset-preview', 'assets:assets/vue-components/asset-preview.js');
VueView.component('field-asset', 'assets:assets/vue-components/field-asset.js');

App.on('field-richtext-image-sources', evt => {
    let img = evt.params[0];

    img.sources['Assets'] = () => {

        VueView.ui.modal('assets:assets/dialogs/asset-picker.js', {}, {

            onSelect: (asset) => {
                img.src = App.base(`#uploads:${asset.path}`);
            }

        }, {size: 'xlarge'})
    };
});

App.on('field-richtext-link-sources', evt => {
    let link = evt.params[0];

    link.sources['Assets'] = () => {

        VueView.ui.modal('assets:assets/dialogs/asset-picker.js', {}, {

            onSelect: (asset) => {
                link.href = location.origin + App.route(`/assets/link/${asset._id}`);
            }

        }, {size: 'xlarge'})
    };
});

App.utils.$interpolate.fns.$image = function(asset, w = 25, h = 25, mode = 'bestFit', q = 80) {

    if (!asset || !asset.type || asset.type !== 'image') return '';

    return `<display-image class="kiss-display-inline-block" src="${asset._id}" w="${w}" h="${h}" mode="${mode}" q="${q}" style="vertical-align: middle;"></display-image>`;
};

