import mark from './assets/mark.png?url';
import wordmark from './assets/wordmark.png?url';
import tagline from './assets/tagline.png?url';
/** Original BAIKA image assets; Figma Horizontal 4:4 and Stacked 4:7. */
export function Logo(variant:'horizontal'|'stacked'='horizontal',scale=1):string {
  const stacked=variant==='stacked';
  const image=(src:string,width:number,height:number)=>`<img src="${src}" width="${width*scale}" height="${height*scale}" alt="" draggable="false">`;
  return `<div class="hn-logo hn-logo--${variant}" role="img" aria-label="Hướng Nghiệp${stacked?' — Một sản phẩm của BAIKA':''}" style="width:${(stacked?240:187)*scale}px;height:${(stacked?193:40)*scale}px;gap:${10*scale}px">${image(mark,stacked?126:41,stacked?122:40)}${image(wordmark,stacked?240:136,stacked?37:21)}${stacked?image(tagline,184,14):''}</div>`;
}
