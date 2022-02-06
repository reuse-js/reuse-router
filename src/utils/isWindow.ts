export function isWindow(): boolean {
  if(typeof window === "undefined") return false
  return true
}