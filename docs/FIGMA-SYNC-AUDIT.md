# Figma / source synchronization audit — 2026-10-02

## Access verified
Figma connector successfully read file RxVjl3wcnyUyfms6o5DDzB through metadata and read-only Plugin API. Root inventory has ten pages. Initial get_metadata without a node listed only Cover/Foundations; root Plugin API inventory and per-page reads recovered all pages, so the initial metadata response was not a complete document inventory. Design source was not modified.

Readable representations: structured node/page metadata; text and component properties/variants; variables and text/effect styles; screenshot/image context and reference code via design-context tool; vector/image exports through supported asset tools. This task actually inspected structure/text/components/variables/styles. It did not test screenshots, asset downloads, full .fig file decoding, Dev Mode UI access, or a local desktop MCP endpoint.

Dev Mode can expose this context through desktop MCP (Figma desktop, Dev Mode enabled, MCP server enabled and suitable seat/access). Remote connector access here is proven, but it does not prove the local desktop Dev Mode server is configured. Official references:
- https://developers.figma.com/docs/figma-mcp-server/local-server-installation/
- https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/
- https://developers.openai.com/codex/mcp

## Measured coverage, not visual similarity
- Token values: 130/130 = 100%. 51 primitive values + 27 semantic colors × two modes + 18 spacing/radius + seven motion values match source CSS after resolving aliases and converting colors/units. Primitive names differ: Figma WEB syntax uses --hn-p-*, source uses --hn-primitive-*; value parity does not imply syntax parity.
- Source icon-name membership: 38/38 = 100%; all source names exist at 24×24 in Icons 67:2168. Figma catalog contains 1,694 entries; source intentionally uses a subset. Vector paths were not compared.
- Main component render-function presence: 23/23 = 100%; this is presence, not all variant/behavior parity.
- Canonical desktop screen route coverage: 13/13 = 100%; separate country-detail route also exists. Six mobile references map to screens/states; responsive appearance was not screenshot-verified.
- Overall Figma/source UI synchronization percentage: NOT DETERMINED. Combining these different coverage denominators would create a misleading score; layout, glyphs, assets, copy and behavior still have gaps.

## Verified implementation gaps
- runtime.ts rerenders and scrolls to top; does not restore old filters/scroll required by 43:41.
- pages.ts save/reminder/filter-save handlers show toasts; no real auth guard, persistent save or 14/3-day email scheduler established.
- Checkout button directly routes to success; no confirmed payment webhook or return-to-reading context established.
- Quiz demonstrates q14/sessionStorage, then static result; not complete 36-question engine.
- Embedded sample data remains; no full HN_DATA adapter in current main.ts.
- D11 labels, Home country values and several scholarship samples differ from live Figma reference copy.
- Official logo/provider assets and full responsive visual regression still outstanding.

## Spec updates delivered
CONTENT-SPEC and SCREEN-SPEC now preserve exact live design copy, source node references, frame composition/bounds and acceptance. Existing UI/COMPONENT/ICON/ROUTE/ARCHITECTURE specs receive verified supplements/corrections. figma/spec-snapshot.json preserves machine-readable evidence. These updates close documentation gaps for the inspected snapshot; they do not implement the remaining UI/services or assert 100% visual parity.
