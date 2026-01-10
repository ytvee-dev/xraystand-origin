type AnyObj = Record<string, unknown>;

const PREFIX_MAP: Record<string, string> = {
  default: "/assets/images",
};

function baseUrl() {
  const b = (import.meta as any).env?.BASE_URL ?? "/";
  return b.endsWith("/") ? b.slice(0, -1) : b;
}

function buildPublicPath(p: string) {
  const clean = p.replace(/^\/+/, "");
  const prefix = PREFIX_MAP.default;
  return `${baseUrl()}${prefix}/${clean}`.replace(/\/{2,}/g, "/");
}

export function collectFromPathsJson(obj: AnyObj): string[] {
  const urls: string[] = [];
  const visit = (v: unknown) => {
    if (typeof v === "string") {
      if (/\.(png|jpe?g|webp|avif|gif|svg)$/i.test(v)) {
        if (v.startsWith("http")) {
          urls.push(v);
        } else {
          urls.push(buildPublicPath(v));
        }
      }
      return;
    }
    if (Array.isArray(v)) v.forEach(visit);
    else if (v && typeof v === "object")
      Object.values(v as AnyObj).forEach(visit);
  };
  visit(obj);
  return Array.from(new Set(urls));
}
