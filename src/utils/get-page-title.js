import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue style guoqing'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
