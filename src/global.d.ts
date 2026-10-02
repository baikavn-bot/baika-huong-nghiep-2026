export {};

declare global {
  interface Window {
    HN_DATA?: {
      sch?: unknown[];
      cty?: unknown[];
      adm?: unknown;
      upd?: string;
    } | null;
  }
}
