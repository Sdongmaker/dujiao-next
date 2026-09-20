/**
 * 站点名称未配置时的兜底展示名。
 * 使用当前访问域名，不内置任何第三方品牌名，避免未配置站点名称时对外露出厂商品牌。
 */
export function fallbackBrandName(): string {
  return String(window.location.hostname || '').trim()
}
