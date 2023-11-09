const tailwind = `/*! tailwindcss v3.3.5 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}:root,[data-theme]{background-color:hsl(var(--b1)/1);background-color:hsl(var(--b1)/var(--tw-bg-opacity,1));color:hsl(var(--bc)/1);color:hsl(var(--bc)/var(--tw-text-opacity,1))}html{-webkit-tap-highlight-color:transparent}:root{--pf:259 94% 44%;--sf:314 100% 40%;--af:174 75% 39%;--nf:214 20% 14%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:259 94% 51%;--pc:259 96% 91%;--s:314 100% 47%;--sc:314 100% 91%;--a:174 75% 46%;--ac:174 75% 11%;--n:214 20% 21%;--nc:212 19% 87%;--b1:0 0% 100%;--b2:0 0% 95%;--b3:180 2% 90%;--bc:215 28% 17%;color-scheme:light}@media (prefers-color-scheme:dark){:root{--pf:262 80% 43%;--sf:316 70% 43%;--af:175 70% 34%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:262 80% 50%;--pc:0 0% 100%;--s:316 70% 50%;--sc:0 0% 100%;--a:175 70% 41%;--ac:0 0% 100%;--n:213 18% 20%;--nf:212 17% 17%;--nc:220 13% 69%;--b1:212 18% 14%;--b2:213 18% 12%;--b3:213 18% 10%;--bc:220 13% 69%;color-scheme:dark}}[data-theme=light]{--pf:259 94% 44%;--sf:314 100% 40%;--af:174 75% 39%;--nf:214 20% 14%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:259 94% 51%;--pc:259 96% 91%;--s:314 100% 47%;--sc:314 100% 91%;--a:174 75% 46%;--ac:174 75% 11%;--n:214 20% 21%;--nc:212 19% 87%;--b1:0 0% 100%;--b2:0 0% 95%;--b3:180 2% 90%;--bc:215 28% 17%;color-scheme:light}[data-theme=dark]{--pf:262 80% 43%;--sf:316 70% 43%;--af:175 70% 34%;--in:198 93% 60%;--su:158 64% 52%;--wa:43 96% 56%;--er:0 91% 71%;--inc:198 100% 12%;--suc:158 100% 10%;--wac:43 100% 11%;--erc:0 100% 14%;--rounded-box:1rem;--rounded-btn:0.5rem;--rounded-badge:1.9rem;--animation-btn:0.25s;--animation-input:.2s;--btn-text-case:uppercase;--btn-focus-scale:0.95;--border-btn:1px;--tab-border:1px;--tab-radius:0.5rem;--p:262 80% 50%;--pc:0 0% 100%;--s:316 70% 50%;--sc:0 0% 100%;--a:175 70% 41%;--ac:0 0% 100%;--n:213 18% 20%;--nf:212 17% 17%;--nc:220 13% 69%;--b1:212 18% 14%;--b2:213 18% 12%;--b3:213 18% 10%;--bc:220 13% 69%;color-scheme:dark}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.avatar.placeholder>div{align-items:center;display:flex;justify-content:center}@media (hover:hover){.table tr.hover:hover,.table tr.hover:nth-child(2n):hover{--tw-bg-opacity:1;background-color:hsl(var(--b2)/1);background-color:hsl(var(--b2)/var(--tw-bg-opacity))}}.divider{align-items:center;align-self:stretch;display:flex;flex-direction:row;height:1rem;margin-bottom:1rem;margin-top:1rem;white-space:nowrap}.divider:after,.divider:before{content:"";flex-grow:1;height:.125rem;width:100%}.hero{background-position:50%;background-size:cover;display:grid;place-items:center;width:100%}.hero>*{grid-column-start:1;grid-row-start:1}.hero-content{align-items:center;display:flex;gap:1rem;justify-content:center;max-width:80rem;padding:1rem;z-index:0}.input{--tw-border-opacity:0;--tw-bg-opacity:1;background-color:hsl(var(--b1)/1);background-color:hsl(var(--b1)/var(--tw-bg-opacity));border-color:hsl(var(--bc)/var(--tw-border-opacity));border-radius:.5rem;border-radius:var(--rounded-btn,.5rem);border-width:1px;flex-shrink:1;font-size:1rem;height:3rem;line-height:2;line-height:1.5rem;padding-left:1rem;padding-right:1rem}.input-group>.input{isolation:isolate}.input-group>*,.input-group>.input,.input-group>.select,.input-group>.textarea{border-radius:0}.mockup-browser{border-radius:1rem;border-radius:var(--rounded-box,1rem);overflow:hidden;overflow-x:auto;position:relative}.mockup-browser pre[data-prefix]:before{content:attr(data-prefix);display:inline-block;text-align:right}.table{border-radius:1rem;border-radius:var(--rounded-box,1rem);font-size:.875rem;line-height:1.25rem;position:relative;text-align:left;width:100%}.table :where(.table-pin-rows thead tr){--tw-bg-opacity:1;background-color:hsl(var(--b1)/1);background-color:hsl(var(--b1)/var(--tw-bg-opacity));position:sticky;top:0;z-index:1}.table :where(.table-pin-rows tfoot tr){--tw-bg-opacity:1;background-color:hsl(var(--b1)/1);background-color:hsl(var(--b1)/var(--tw-bg-opacity));bottom:0;position:sticky;z-index:1}.table :where(.table-pin-cols tr th){--tw-bg-opacity:1;background-color:hsl(var(--b1)/1);background-color:hsl(var(--b1)/var(--tw-bg-opacity));left:0;position:sticky;right:0}@keyframes button-pop{0%{transform:scale(.98);transform:scale(var(--btn-focus-scale,.98))}40%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}.divider:after,.divider:before{--tw-bg-opacity:0.1;background-color:hsl(var(--bc)/.1);background-color:hsl(var(--bc)/var(--tw-bg-opacity))}.divider:not(:empty){gap:1rem}.input input:focus{outline:2px solid transparent;outline-offset:2px}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input-bordered{--tw-border-opacity:0.2}.input:focus,.input:focus-within{outline-color:hsl(var(--bc)/.2);outline-offset:2px;outline-style:solid;outline-width:2px}.input-disabled,.input:disabled,.input[disabled]{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:0.2;background-color:hsl(var(--b2)/1);background-color:hsl(var(--b2)/var(--tw-bg-opacity));border-color:hsl(var(--b2)/var(--tw-border-opacity));cursor:not-allowed}.input-disabled::placeholder,.input:disabled::placeholder,.input[disabled]::placeholder{--tw-placeholder-opacity:0.2;color:hsl(var(--bc)/.2);color:hsl(var(--bc)/var(--tw-placeholder-opacity))}.loading{aspect-ratio:1/1;background-color:currentColor;display:inline-block;-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke='%23000'%3E%3Cstyle%3E@keyframes spinner_zKoa{to{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%25{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%25{stroke-dasharray:42 150;stroke-dashoffset:-16}95%25,to{stroke-dasharray:42 150;stroke-dashoffset:-59}}%3C/style%3E%3Cg style='transform-origin:center;animation:spinner_zKoa 2s linear infinite'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' style='stroke-linecap:round;animation:spinner_YpZS 1.5s ease-out infinite'/%3E%3C/g%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke='%23000'%3E%3Cstyle%3E@keyframes spinner_zKoa{to{transform:rotate(360deg)}}@keyframes spinner_YpZS{0%25{stroke-dasharray:0 150;stroke-dashoffset:0}47.5%25{stroke-dasharray:42 150;stroke-dashoffset:-16}95%25,to{stroke-dasharray:42 150;stroke-dashoffset:-59}}%3C/style%3E%3Cg style='transform-origin:center;animation:spinner_zKoa 2s linear infinite'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3' style='stroke-linecap:round;animation:spinner_YpZS 1.5s ease-out infinite'/%3E%3C/g%3E%3C/svg%3E");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:100%;mask-size:100%;pointer-events:none;width:1.5rem}.mockup-browser .mockup-browser-toolbar{align-items:center;display:inline-flex;margin-bottom:.75rem;margin-top:.75rem;padding-right:1.4em;width:100%}.mockup-browser .mockup-browser-toolbar:before{aspect-ratio:1/1;border-radius:9999px;box-shadow:1.4em 0,2.8em 0,4.2em 0;content:"";display:inline-block;height:.75rem;margin-right:4.8rem;opacity:.3}.mockup-browser .mockup-browser-toolbar .input{--tw-bg-opacity:1;background-color:hsl(var(--b2)/1);background-color:hsl(var(--b2)/var(--tw-bg-opacity));display:block;height:1.75rem;margin-left:auto;margin-right:auto;overflow:hidden;padding-left:2rem;position:relative;text-overflow:ellipsis;white-space:nowrap;width:24rem}.mockup-browser .mockup-browser-toolbar .input:before{--tw-translate-y:-50%;aspect-ratio:1/1;border-color:currentColor;border-radius:9999px;border-width:2px;content:"";height:.75rem;left:.5rem;opacity:.6;position:absolute;top:50%;transform:translate(var(--tw-translate-x),-50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.mockup-browser .mockup-browser-toolbar .input:after{--tw-translate-y:25%;--tw-rotate:-45deg;border-color:currentColor;border-radius:9999px;border-width:1px;content:"";height:.5rem;left:1.25rem;opacity:.6;position:absolute;top:50%;transform:translate(var(--tw-translate-x),25%) rotate(-45deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes modal-pop{0%{opacity:0}}@keyframes progress-loading{50%{background-position-x:-115%}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}.table :where(th,td){padding:.75rem 1rem;vertical-align:middle}.table tr.active,.table tr.active:nth-child(2n),.table-zebra tbody tr:nth-child(2n){--tw-bg-opacity:1;background-color:hsl(var(--b2)/1);background-color:hsl(var(--b2)/var(--tw-bg-opacity))}.table :where(thead,tbody) :where(tr:first-child:last-child),.table :where(thead,tbody) :where(tr:not(:last-child)){--tw-border-opacity:1;border-bottom-color:hsl(var(--b2)/var(--tw-border-opacity));border-bottom-width:1px}.table :where(thead,tfoot){color:hsl(var(--bc)/.6);font-size:.75rem;font-weight:700;line-height:1rem;white-space:nowrap}@keyframes toast-pop{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}.table-xs :not(thead):not(tfoot) tr{font-size:.75rem;line-height:1rem}.table-xs :where(th,td){padding:.25rem .5rem}.mt-4{margin-top:1rem}.flex{display:flex}.table{display:table}.h-10{height:2.5rem}.min-h-screen{min-height:100vh}.w-full{width:100%}.max-w-2xl{max-width:42rem}.items-center{align-items:center}.justify-center{justify-content:center}.space-x-5>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:1.25rem;margin-left:calc(1.25rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(1.25rem*var(--tw-space-x-reverse))}.overflow-x-auto{overflow-x:auto}.border{border-width:1px}.bg-base-100{--tw-bg-opacity:1;background-color:hsl(var(--b1)/1);background-color:hsl(var(--b1)/var(--tw-bg-opacity))}.bg-base-200{--tw-bg-opacity:1;background-color:hsl(var(--b2)/1);background-color:hsl(var(--b2)/var(--tw-bg-opacity))}.bg-base-300{--tw-bg-opacity:1;background-color:hsl(var(--b3)/1);background-color:hsl(var(--b3)/var(--tw-bg-opacity))}.p-4{padding:1rem}.py-12{padding-bottom:3rem;padding-top:3rem}.pb-6{padding-bottom:1.5rem}.pt-6{padding-top:1.5rem}.text-center{text-align:center}.text-5xl{font-size:3rem;line-height:1}.font-bold{font-weight:700}`;
export {
  tailwind as default
};
//# sourceMappingURL=entry-styles-1.mjs-7cad8dba.js.map
