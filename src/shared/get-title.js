import defaultSettings from '../../setting.js';

const title = defaultSettings.title || 'vue - admin'

export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}
