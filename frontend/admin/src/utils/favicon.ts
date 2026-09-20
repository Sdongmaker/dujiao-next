import { getImageUrl } from './image'

const SITE_ICON_LINK_ID = 'site-favicon'

export function resolveSiteIconHref(value: unknown): string {
  const icon = String(value || '').trim()
  return icon ? getImageUrl(icon) : ''
}

export function applySiteIcon(value: unknown) {
  const link = document.getElementById(SITE_ICON_LINK_ID) as HTMLLinkElement | null
  if (!link) return
  const href = resolveSiteIconHref(value)
  if (href) {
    link.href = href
    return
  }
  // 未配置站点图标时不回退到任何内置图标
  link.removeAttribute('href')
}
