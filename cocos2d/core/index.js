require('./platform');
require('./assets');

if (!(CC_EDITOR && Editor.isCoreLevel)) {
    require('./CCNode');
    require('./CCScene');
    require('./components/CCComponent');
    require('./components/CCSpriteRenderer');
}
