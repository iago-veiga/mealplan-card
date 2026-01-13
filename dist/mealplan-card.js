const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=/* @__PURE__ */Symbol(),r=/* @__PURE__ */new WeakMap;let s=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=r.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(i,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const r=1===e.length?e[0]:t.reduce((t,i,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new s(r,e,i)},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:o,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,m=u.trustedTypes,f=m?m.emptyScript:"",g=u.reactiveElementPolyfillSupport,y=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(r){i=null}}return i}},v=(e,t)=>!o(e,t),_={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=/* @__PURE__ */Symbol("metadata"),u.litPropertyMetadata??=/* @__PURE__ */new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=/* @__PURE__ */Symbol(),r=this.getPropertyDescriptor(e,i,t);void 0!==r&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const n=r?.call(this);s?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...c(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=/* @__PURE__ */new Map;for(const[t,i]of this.elementProperties){const e=this._$Eu(t,i);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=/* @__PURE__ */new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,r)=>{if(t)i.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of r){const r=document.createElement("style"),s=e.litNonce;void 0!==s&&r.setAttribute("nonce",s),r.textContent=t.cssText,i.appendChild(r)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=r;const n=s.fromAttribute(t,e.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(e,t,i,r=!1,s){if(void 0!==e){const n=this.constructor;if(!1===r&&(s=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??v)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},n){i&&!(this._$Ej??=/* @__PURE__ */new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==s||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,i,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=/* @__PURE__ */new Map,$[y("finalized")]=/* @__PURE__ */new Map,g?.({ReactiveElement:$}),(u.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,x=e=>e,A=w.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+T,k=`<${M}>`,O=document,C=()=>O.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,D=Array.isArray,I="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,H=/>/g,j=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,z=(Y=1,(e,...t)=>({_$litType$:Y,strings:e,values:t})),F=/* @__PURE__ */Symbol.for("lit-noChange"),q=/* @__PURE__ */Symbol.for("lit-nothing"),V=/* @__PURE__ */new WeakMap,W=O.createTreeWalker(O,129);var Y;function Q(e,t){if(!D(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}class J{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,n=0;const a=e.length-1,o=this.parts,[l,d]=((e,t)=>{const i=e.length-1,r=[];let s,n=2===t?"<svg>":3===t?"<math>":"",a=N;for(let o=0;o<i;o++){const t=e[o];let i,l,d=-1,c=0;for(;c<t.length&&(a.lastIndex=c,l=a.exec(t),null!==l);)c=a.lastIndex,a===N?"!--"===l[1]?a=U:void 0!==l[1]?a=H:void 0!==l[2]?(B.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=j):void 0!==l[3]&&(a=j):a===j?">"===l[0]?(a=s??N,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,i=l[1],a=void 0===l[3]?j:'"'===l[3]?L:R):a===L||a===R?a=j:a===U||a===H?a=N:(a=j,s=void 0);const h=a===j&&e[o+1].startsWith("/>")?" ":"";n+=a===N?t+k:d>=0?(r.push(i),t.slice(0,d)+S+t.slice(d)+T+h):t+T+(-2===d?o:h)}return[Q(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]})(e,t);if(this.el=J.createElement(l,i),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=W.nextNode())&&o.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(S)){const t=d[n++],i=r.getAttribute(e).split(T),a=/([.?@])?(.*)/.exec(t);o.push({type:1,index:s,name:a[2],strings:i,ctor:"."===a[1]?ee:"?"===a[1]?te:"@"===a[1]?ie:X}),r.removeAttribute(e)}else e.startsWith(T)&&(o.push({type:6,index:s}),r.removeAttribute(e));if(B.test(r.tagName)){const e=r.textContent.split(T),t=e.length-1;if(t>0){r.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)r.append(e[i],C()),W.nextNode(),o.push({type:2,index:++s});r.append(e[t],C())}}}else if(8===r.nodeType)if(r.data===M)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=r.data.indexOf(T,e+1));)o.push({type:7,index:s}),e+=T.length-1}s++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,r){if(t===F)return t;let s=void 0!==r?i._$Co?.[r]:i._$Cl;const n=P(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(e),s._$AT(e,i,r)),void 0!==r?(i._$Co??=[])[r]=s:i._$Cl=s),void 0!==s&&(t=K(e,s._$AS(e,t.values),s,r)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??O).importNode(t,!0);W.currentNode=r;let s=W.nextNode(),n=0,a=0,o=i[0];for(;void 0!==o;){if(n===o.index){let t;2===o.type?t=new G(s,s.nextSibling,this,e):1===o.type?t=new o.ctor(s,o.name,o.strings,this,e):6===o.type&&(t=new re(s,this,e)),this._$AV.push(t),o=i[++a]}n!==o?.index&&(s=W.nextNode(),n++)}return W.currentNode=O,r}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),P(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>D(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new Z(r,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new J(e)),t}k(e){D(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new G(this.O(C()),this.O(C()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=x(e).nextSibling;x(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(e,t=this,i,r){const s=this.strings;let n=!1;if(void 0===s)e=K(this,e,t,0),n=!P(e)||e!==this._$AH&&e!==F,n&&(this._$AH=e);else{const r=e;let a,o;for(e=s[0],a=0;a<s.length-1;a++)o=K(this,r[i+a],t,a),o===F&&(o=this._$AH[a]),n||=!P(o)||o!==this._$AH[a],o===q?e=q:e!==q&&(e+=(o??"")+s[a+1]),this._$AH[a]=o}n&&!r&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class te extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class ie extends X{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??q)===F)return;const i=this._$AH,r=e===q&&i!==q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==q&&(i===q||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const se=w.litHtmlPolyfillSupport;se?.(J,G),(w.litHtmlVersions??=[]).push("3.3.2");const ne=globalThis;let ae=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const r=i?.renderBefore??t;let s=r._$litPart$;if(void 0===s){const e=i?.renderBefore??null;r._$litPart$=s=new G(t.insertBefore(C(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};ae._$litElement$=!0,ae.finalized=!0,ne.litElementHydrateSupport?.({LitElement:ae});const oe=ne.litElementPolyfillSupport;oe?.({LitElement:ae}),(ne.litElementVersions??=[]).push("4.2.2");const le=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:v},ce=(e=de,t,i)=>{const{kind:r,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(void 0===n&&globalThis.litPropertyMetadata.set(s,n=/* @__PURE__ */new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===r){const{name:r}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(r,s,e,!0,i)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=i;return function(i){const s=this[r];t.call(this,i),this.requestUpdate(r,s,e,!0,i)}}throw Error("Unsupported decorator location: "+r)};function he(e){return(t,i)=>"object"==typeof i?ce(e,t,i):((e,t,i)=>{const r=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),r?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function pe(e){return he({...e,state:!0,attribute:!1})}const ue={en:{common:{back:"Back",cancel:"Cancel",save:"Save",delete:"Delete",close:"Close",portion:"Portion",time:"Time",days:"Days",enabled:"Enabled",disabled:"Disabled",every_day:"Every day",no_days:"No days",add_meal:"Add Meal"},days:{short:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],full:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},main:{manage_schedules:"Manage Schedules",configuration_required:"Configuration required",configuration_instructions:"Please configure a sensor and manufacturer in the card settings."},schedule_view:{manage_schedules:"Manage Schedules",edit_feeding_time:"Edit Feeding Time",no_meals_scheduled:"No meals scheduled",click_add_meal_to_get_started:"Click 'Add Meal' below to create your first feeding schedule",sensor_unavailable:"Entity Unavailable",sensor_unavailable_message:"The selected sensor is not available. You cannot save changes until the device is accessible."},meal_card:{edit_meal:"Edit Meal",confirm_delete:"Are you sure you want to delete this meal?"},config:{portion_label:"Portion size",portion_helper:"Grams per portion",sensor_label:"Meal Plan Sensor",sensor_helper:"Select the sensor or text entity containing meal plan data",manufacturer_label:"Feeder Profile",manufacturer_helper:"Select your feeder manufacturer and model",title_label:"Title",helper_label:"Helper Entity (Optional)",helper_helper:"This input_text helper acts as a backup storage for your meal plan schedule. When the sensor is unavailable, the card will restore the schedule from this helper to prevent data loss.",transport_label:"Transport Type",transport_helper:"How to write data: Sensor (via set_value service) or MQTT (publish to zigbee2mqtt topic)"}},sv:{common:{back:"Tillbaka",cancel:"Avbryt",save:"Spara",delete:"Ta bort",close:"Stäng",portion:"Portion",time:"Tid",days:"Dagar",enabled:"Aktiverad",disabled:"Inaktiverad",every_day:"Varje dag",no_days:"Inga dagar",add_meal:"Lägg till måltid"},days:{short:["Mån","Tis","Ons","Tor","Fre","Lör","Sön"],full:["Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag","Söndag"]},main:{manage_schedules:"Hantera scheman",configuration_required:"Konfiguration krävs",configuration_instructions:"Vänligen konfigurera en sensor och tillverkare i kortets inställningar."},schedule_view:{manage_schedules:"Hantera scheman",edit_feeding_time:"Redigera matningstid",no_meals_scheduled:"Inga måltider schemalagda",click_add_meal_to_get_started:"Klicka på 'Lägg till måltid' nedan för att skapa ditt första matningsschema",sensor_unavailable:"Entiteten otillgänglig",sensor_unavailable_message:"Den valda entitete är inte tillgänglig. Du kan inte spara ändringar förrän enheten är åtkomlig."},meal_card:{edit_meal:"Redigera måltid",confirm_delete:"Är du säker på att du vill ta bort denna måltid?"},config:{portion_label:"Portionsstorlek",portion_helper:"Gram per portion",sensor_label:"Meal Plan-sensor",sensor_helper:"Välj sensorn eller textentiteten som innehåller matplanens data",manufacturer_label:"Matarprofil",manufacturer_helper:"Välj din tillverkares modell",title_label:"Titel",helper_label:"Hjälparentitet (valfritt)",helper_helper:"Denna input_text fungerar som backup för ditt schema. När sensorn är otillgänglig återställer kortet schemat från hjälparen för att undvika dataförlust.",transport_label:"Transporttyp",transport_helper:"Hur data skrivs: Sensor (via set_value) eller MQTT (publish till zigbee2mqtt topic)"}},ru:{common:{back:"Назад",cancel:"Отмена",save:"Сохранить",delete:"Удалить",close:"Закрыть",portion:"Порция",time:"Время",days:"Дни",enabled:"Включено",disabled:"Выключено",every_day:"Каждый день",no_days:"Нет дней",add_meal:"Добавить питание"},days:{short:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],full:["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"]},main:{manage_schedules:"Управлять расписанием",configuration_required:"Требуется настройка",configuration_instructions:"Пожалуйста укажите сенсор и производителя в настройках карточки."},schedule_view:{manage_schedules:"Управление расписанием",edit_feeding_time:"Редактировать время кормления",no_meals_scheduled:"Не запланировано кормления",click_add_meal_to_get_started:"Нажмите 'Add Meal' для создания первого плана кормежки",sensor_unavailable:"Сущность недоступна",sensor_unavailable_message:"Выбранный сенсор недоступен. Вы не можете сохранить изменения, пока устройство не станет доступно."},meal_card:{edit_meal:"Редактировать кормежку",confirm_delete:"Вы действительно хотите удалить кормежку?"},config:{portion_label:"Размер порции",portion_helper:"Грамм в порции",sensor_label:"Сенсор расписания кормушки",sensor_helper:"Выберите сенсор содержащий данные кормушки",manufacturer_label:"Профиль кормушки",manufacturer_helper:"Выберите производителя и модель кормушки",title_label:"Название",helper_label:"Сущность помощника (не обязательно)",helper_helper:"Этот input_text помощник Работает как экстренное хранилище данных вашего плана. Когда  сенсор не доступен, карточка будет брать данные из этого помощника чтобы не потерять данные.",transport_label:"Тип транспорта",transport_helper:"Как записать данные: Сенсор (через set_value сервис) или MQTT (опубликовать топик в zigbee2mqtt)"}}};let me="en";function fe(e,t){return t.split(".").reduce((e,t)=>e?.[t],e)}function ge(e){const t=fe(ue[me],e)??fe(ue.en,e)??e;return"string"==typeof t?t:e}var ye=/* @__PURE__ */(e=>(e.TIME="time",e.PORTION="portion",e.SIZE="size",e.DAYS="days",e.ENABLED="enabled",e.EDIT="edit",e.DELETE="delete",e.ADD="add",e))(ye||{}),be=/* @__PURE__ */(e=>(e.SENSOR="sensor",e.MQTT="mqtt",e))(be||{});const ve=/\{([A-Z_]+)\:(\d+)\}/g;var _e=/* @__PURE__ */(e=>(e.DAYS="DAYS",e.HOUR="HOUR",e.MINUTE="MINUTE",e.PORTION="PORTION",e.ENABLED="ENABLED",e.FILL="FILL",e))(_e||{});const $e=/* @__PURE__ */new Set(["DAYS"]),we=(e,t)=>`{${e}:${t}}`;var xe=/* @__PURE__ */(e=>(e.BASE64="base64",e.HEX="hex",e.DICT="dict",e))(xe||{});class Ae{constructor(e,t){if(!e)throw new Error("Template is required");this.tokens=Ae.parseTemplate(e),this.profile=t,this.chunkLen=Ae.calculateChunkLength(this.tokens)}static parseTemplate(e){if(!e||"string"!=typeof e)throw new Error("Invalid template");const t=[];ve.lastIndex=0;let i,r=0;for(;null!==(i=ve.exec(e));){if(i.index!==r)throw new Error("Invalid template: unexpected characters between tokens");const e=i[1],s=i[2];if(!e||!s)throw new Error("Invalid token format in template");const n=parseInt(s,10);if(!Number.isInteger(n)||n<=0)throw new Error("Invalid token length");t.push({name:e,length:n}),r=ve.lastIndex}if(r!==e.length)throw new Error("Invalid template: tokens must exactly cover template");return t}static calculateChunkLength(e){return e.reduce((e,t)=>e+t.length,0)}encode(e){return e.map(e=>this.serializeEntry(e)).join("")}decode(e){if(e.length%this.chunkLen!==0)throw new Error("Invalid templated meal plan length");const t=[];for(let i=0;i<e.length;i+=this.chunkLen){const r=e.slice(i,i+this.chunkLen);t.push(this.parseEntry(r))}return t}serializeEntry(e){const t=this.profile.encode?this.profile.encode(e):e;return this.tokens.map(e=>{if(e.name===_e.FILL)return"0".repeat(e.length);const i=e.name.toLowerCase(),r=t[i];return null==r?"".padStart(e.length,"0"):this.formatField(e.name,r,e.length)}).join("")}parseEntry(e){let t=0;const i={};for(const r of this.tokens){const s=e.slice(t,t+r.length);if(t+=r.length,r.name===_e.FILL)continue;const n=r.name.toLowerCase(),a=this.parseField(r.name,s);null!=a&&(i[n]=a)}if(this.profile.decode){return this.profile.decode(i)}return i}formatField(e,t,i){return this.shouldUseHex(e)?t.toString(16).padStart(i,"0"):t.toString(10).padStart(i,"0")}parseField(e,t){return this.shouldUseHex(e)?parseInt(t,16)||0:parseInt(t,10)||0}shouldUseHex(e){return!this.profile.encodingType||this.profile.encodingType===xe.BASE64||$e.has(e)}}class Ee{constructor(e){if(!e)throw new Error("Invalid device profile for encoding/decoding");this.profile=e}}const Se={[xe.BASE64]:class extends Ee{hexToBase64(e){const t=[];for(let i=0;i<e.length;i+=2)t.push(parseInt(e.slice(i,i+2),16));return btoa(String.fromCharCode(...t))}base64ToHex(e){let t;try{t=atob(e)}catch{throw new Error("Invalid base64")}const i=new Uint8Array([...t].map(e=>e.charCodeAt(0)));return Array.from(i).map(e=>e.toString(16).padStart(2,"0")).join("")}encode(e){const t=this.profile.encodingTemplate;if(!t)throw new Error("encodingTemplate is required for Base64Encoder");const i=new Ae(t,this.profile).encode(e);return this.hexToBase64(i)}decode(e){if(!e||"unknown"===e)return[];const t=this.profile.encodingTemplate;if(!t)throw new Error("encodingTemplate is required for Base64Encoder");const i=this.base64ToHex(e);return new Ae(t,this.profile).decode(i)}},[xe.HEX]:class extends Ee{encode(e){const t=this.profile.encodingTemplate;if(!t)throw new Error("encodingTemplate is required for TemplateBasedEncoder");return new Ae(t,this.profile).encode(e)}decode(e){const t=this.profile.encodingTemplate;if(!t)throw new Error("encodingTemplate is required for TemplateBasedEncoder");return new Ae(t,this.profile).decode(e)}},[xe.DICT]:class extends Ee{encode(e){const t=this.profile.encode?this.profile.encode(e):e;return JSON.stringify(t)}decode(e){if(!e||"unknown"===e)return[];try{const t=JSON.parse(e),i=this.profile.decode?this.profile.decode(t):t;return Array.isArray(i)?i:[]}catch{throw new Error("Invalid JSON data for DICT encoding")}}}};class Te{constructor(e,t,i,r){this.host=e,this._meals=[],this.subscribers=/* @__PURE__ */new Set,this.host.addController(this),this.profile=t,this.hass=i,this.config=r,this.encoder=function(e){if(!e)throw new Error("Device profile is required for encoder initialization");return new(0,Se[e.encodingType])(e)}(t),this.writeValue={[be.SENSOR]:e=>this.setSensorValue(e),[be.MQTT]:e=>this.publishMQTT(e)}[this.config.transport_type],this.hass?this.updateFromHass().catch(e=>{console.error("[MealStateController] Failed to load initial data:",e)}):console.warn("[MealStateController] Initialized without hass object. Data loading will be skipped.")}get meals(){return this._meals}set meals(e){this._meals=e,this.notifySubscribers()}hostConnected(){}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}notifySubscribers(){this.host.requestUpdate(),this.subscribers.forEach(e=>e())}isValidState(e){return"string"==typeof e&&""!==e.trim()&&"unknown"!==e&&"unavailable"!==e}getEntityValue(e){const t=this.hass.states?.[e],i=t?.state;return this.isValidState(i)?i:null}async setEntityValue(e,t){if(!e)return;const i=e.split(".")[0];i&&await this.hass.callService(i,"set_value",{entity_id:e,value:t})}async updateFromHass(e=!0){const t=this.getEntityValue(this.config.sensor),i=this.config.helper?this.getEntityValue(this.config.helper):null;let r=null;t?r=this.encoder.decode(t):i&&(r=this.encoder.decode(i)),e&&(this.meals=r?[...r]:[])}async saveMeals(e){await this.writeValue(this.encoder.encode(e)),this.meals=[...e]}async setSensorValue(e){await this.setEntityValue(this.config.sensor,e),this.config.helper&&await this.setEntityValue(this.config.helper,e)}async publishMQTT(e){const t=this.config.sensor.split("."),i=`zigbee2mqtt/${t[1]?.split("_")[0]||t[1]}/set`;await this.hass.callService("mqtt","publish",{topic:i,payload:e})}}const Me=e=>{const t=t=>{if(void 0===t.days)return t;let i=0;return e.forEach(([e,r])=>{t.days&1<<e&&(i|=1<<r)}),{...t,days:127&i}},i=t=>{const i=t;if(void 0===i.days)return t;let r=0;const s=127&i.days;return e.forEach(([e,t])=>{s&1<<t&&(r|=1<<e)}),{...i,days:r}};return{encode:e=>Array.isArray(e)?e.map(t):t(e),decode:e=>Array.isArray(e)?e.map(i):i(e)}};const ke=`${we(_e.DAYS,2)}${we(_e.HOUR,2)}${we(_e.MINUTE,2)}${we(_e.PORTION,2)}${we(_e.ENABLED,2)}`,Oe=`${we(_e.HOUR,2)}${we(_e.MINUTE,2)}${we(_e.PORTION,2)}${we(_e.ENABLED,2)}`,Ce=[ye.TIME,ye.PORTION,ye.DAYS,ye.ENABLED,ye.EDIT,ye.DELETE,ye.ADD],Pe=[ye.TIME,ye.PORTION,ye.ENABLED,ye.EDIT],De=[{manufacturer:"Cleverio",models:["PF100"],encodingType:xe.BASE64,encodingTemplate:ke,fields:Ce},{manufacturer:"HoneyGuardian",models:["S56"],encodingType:xe.BASE64,encodingTemplate:Oe,fields:Pe},{manufacturer:"Fukumaru-W",models:["f1y6wo"],encodingType:xe.BASE64,encodingTemplate:ke,fields:Ce},{manufacturer:"Yuposl",models:["enyxp8"],encodingType:xe.BASE64,encodingTemplate:ke,fields:Ce},{manufacturer:"Arlec",models:["PF002HA"],encodingType:xe.BASE64,encodingTemplate:ke,fields:Ce},{manufacturer:"PetLibro",models:["000004ajdj"],encodingType:xe.BASE64,encodingTemplate:ke,fields:Ce},{manufacturer:"MolyPet",models:["F02W"],encodingType:xe.BASE64,encodingTemplate:ke,fields:Ce},{manufacturer:"PetNest",models:[],encodingType:xe.HEX,encodingTemplate:`${we(_e.DAYS,2)}${we(_e.HOUR,2)}${we(_e.MINUTE,2)}${we(_e.PORTION,2)}${we(_e.ENABLED,1)}${we(_e.FILL,6)}`,fields:Ce},{manufacturer:"Petrust",models:[],encodingType:xe.BASE64,encodingTemplate:ke,fields:Ce},{manufacturer:"Meowmatic",models:[],encodingType:xe.BASE64,encodingTemplate:ke,fields:Ce},{manufacturer:"Puppy Kitty",models:[],encodingType:xe.HEX,encodingTemplate:`${we(_e.DAYS,2)}${we(_e.HOUR,2)}${we(_e.MINUTE,2)}${we(_e.PORTION,1)}${we(_e.ENABLED,1)}`,fields:Ce,...Me([[5,0],[4,1],[3,2],[2,3],[0,4],[1,5],[6,6]])},{manufacturer:"Aqara",models:["C1"],encodingType:xe.DICT,fields:[ye.TIME,ye.SIZE,ye.DAYS,ye.EDIT,ye.DELETE,ye.ADD],...function(e,t,i){const r=i?Object.fromEntries(Object.entries(i).map(([e,t])=>[t,e])):void 0,s=(e,t)=>{const i={};for(const[r,s]of Object.entries(e))null!==s&&(i[t?.[r]??r]=s);return i};return{encode:r=>{const n=Array.isArray(r)?r:[r];return{[e]:n.map(e=>{const r=t?.encode?t.encode(e):e;return s(r,i)})}},decode:i=>{const n=i,a=Array.isArray(n)?n:n[e];return Array.isArray(a)?a.map(e=>{const i=s(e,r);return t?.decode?t.decode(i):i}):[]}}}("schedule",(e=>{const t={};return Object.entries(e).forEach(([e,i])=>{t[i]=parseInt(e,10)}),{encode:t=>{if(void 0===t.days)return t;const i=void 0!==e[t.days]?e[t.days]:t.days;return{...t,days:i}},decode:e=>{if(void 0===e.days)return e;const i="string"==typeof e.days&&void 0!==t[e.days]?t[e.days]:e.days;return{...e,days:i}}}})({127:"everyday",31:"workdays",96:"weekend",1:"mon",2:"tue",4:"wed",8:"thu",16:"fri",32:"sat",64:"sun",85:"mon-wed-fri-sun",42:"tue-thu-sat"}),{portion:"size"})},{manufacturer:"Wuipet",models:["du4l-wc-01"],encodingType:xe.BASE64,encodingTemplate:ke,fields:Ce}],Ie=De;function Ne(e){const t=De.find(t=>t.manufacturer===e);if(!t)return;if(t.encode||t.decode||!t.fields.includes(ye.DAYS))return t;const i=Me([[0,6],[1,5],[2,4],[3,3],[4,2],[5,1],[6,0]]);return{...t,...i}}function Ue(e,t){const i=t??0;return`${(e??0).toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}`}function He(e,t){return 60*(e??0)+(t??0)}function je(e){return void 0===e.enabled||1===e.enabled}function Re(e,t){return e?.fields.includes(t)??!1}var Le=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,ze=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?Be(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&Le(t,i,n),n};let Fe=class extends ae{constructor(){super(...arguments),this.meals=[],this.portions=6}render(){const e=this.meals.filter(je),t=function(e,t){let i=0;return e.forEach(e=>{"number"==typeof e.days&&"number"==typeof e.portion&&e.days&1<<t&&(i+=e.portion)}),i}(e,/* @__PURE__ */(new Date).getDay())*this.portions,i=function(e){let t=0;return e.forEach(e=>{if("number"==typeof e.days&&"number"==typeof e.portion)for(let i=0;i<7;i++)e.days&1<<i&&(t+=e.portion)}),t/7}(e)*this.portions;return z`
      <div class="overview-row">
        <ha-chip class="overview-schedules">
          <ha-icon icon="mdi:calendar-clock"></ha-icon>
          Schedules:
          <span style="white-space:nowrap;">${this.meals.length}</span>
        </ha-chip>
        <ha-chip class="overview-active">
          <ha-icon icon="mdi:check-circle-outline"></ha-icon>
          Active:
          <span style="white-space:nowrap;">${e.length}</span>
        </ha-chip>
        <ha-chip class="overview-grams">
          <ha-icon icon="mdi:food-drumstick"></ha-icon>
          Today: <span style="white-space:nowrap;">${t}g</span>
        </ha-chip>
        <ha-chip class="overview-average">
          <ha-icon icon="mdi:scale-balance"></ha-icon>
          Avg/Week:
          <span style="white-space:nowrap;">${i.toFixed(1)}g</span>
        </ha-chip>
      </div>
    `}};Fe.styles=n`
    .overview-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      margin: 0 16px 8px 16px;
      box-sizing: border-box;
      padding-right: 8px;
    }
    @media (max-width: 600px) {
      .overview-row {
        flex-direction: column;
        gap: 4px;
        margin: 0 4px 8px 4px;
      }
    }
  `,ze([he({type:Array})],Fe.prototype,"meals",2),ze([he({type:Number})],Fe.prototype,"portions",2),Fe=ze([le("meal-overview")],Fe);class qe extends CustomEvent{constructor(e){super("save",{detail:e,bubbles:!0,composed:!0})}}class Ve extends CustomEvent{constructor(){super("schedule-closed",{detail:void 0,bubbles:!0,composed:!0})}}const We=n`
  .days-row {
    display: flex;
    gap: 1px;
    flex-wrap: wrap;
    align-items: center;
  }
  .day-cell {
    width: 1.7em;
    height: 1.7em;
    line-height: 1.7em;
    text-align: center;
    border-radius: 6px;
    background: var(--card-background-color, #f0f0f0);
    color: #8a8a8a;
    font-weight: 600;
    font-size: 0.95em;
    margin: 0 1px;
    transition:
      background 0.2s,
      color 0.2s;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .edit-mode .days-row {
    justify-content: center;
    margin: 0 auto;
    gap: 8px;
  }
  .edit-mode .day-cell {
    width: 2.6em;
    height: 2.6em;
    line-height: 2.6em;
    font-size: 1.25em;
    margin: 0 4px;
  }
  .day-cell.selected {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }
  .day-cell.readonly {
    cursor: default;
  }
`;function Ye({days:e=0,editable:t=!1,dayLabels:i,onDaysChanged:r}){const s=i&&7===i.length?i:["M","T","W","T","F","S","S"];return z`
    <style>
      ${We}
    </style>
    <div class="days-row${t?" edit-mode":""}">
      ${s.map((i,s)=>z`
          <span
            class="day-cell${e&1<<s?" selected":""}${t?"":" readonly"}"
            @click=${t?()=>(i=>{if(!t||!r)return;r(e^1<<i)})(s):void 0}
            >${i}</span
          >
        `)}
    </div>
  `}var Qe=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,Ke=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?Je(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&Qe(t,i,n),n};function Ze(e,t){return"number"==typeof e&&!isNaN(e)&&"number"==typeof t&&!isNaN(t)&&e>=0&&e<=23&&t>=0&&t<=59}const Ge=["06:00","08:00","12:00","18:00","21:00"];let Xe=class extends ae{constructor(){super(...arguments),this.open=!1,this.formData={}}updated(e){e.has("meal")&&this.meal&&(this.formData={...this.meal})}handleUpdate(e){this.formData={...this.formData,...e}}handleTimeInput(e){const t=e.target.value,[i,r]=t.split(":").map(Number);this.handleUpdate({hour:i,minute:r})}handlePortionInput(e){this.handleUpdate({portion:parseInt(e.target.value,10)})}handlePredefinedTime(e){const[t,i]=e.split(":").map(Number);this.handleUpdate({hour:t,minute:i})}handleSave(){this.validate(this.formData)&&this.dispatchEvent(new qe({meal:this.formData,index:this.index}))}validate(e){return Ze(e.hour,e.minute)?!(!e.portion||e.portion<1)||(console.warn("Invalid portion:",e.portion),!1):(console.warn("Invalid time:",e.hour,e.minute),!1)}renderDaysField(){return Re(this.profile,ye.DAYS)?Ye({days:this.formData?.days??0,editable:!0,onDaysChanged:e=>this.handleUpdate({days:e})}):""}renderPortionRow(){return Re(this.profile,ye.PORTION)?z`
      <div class="edit-form-group">
        <label for="edit-portion">${ge("common.portion")}</label>
        <input
          id="edit-portion"
          type="number"
          min="1"
          .value=${String(this.formData?.portion??1)}
          @input=${this.handlePortionInput}
        />
      </div>
    `:""}renderPredefinedTimes(){return z`
      <div class="edit-predefined-times">
        ${Ge.map(e=>z`
            <ha-button
              type="button"
              @click=${()=>this.handlePredefinedTime(e)}
            >
              ${e}
            </ha-button>
          `)}
      </div>
    `}render(){return this.open&&this.profile?z`
      <form class="edit-form" @submit=${e=>e.preventDefault()}>
        ${this.renderDaysField()}
        <div class="edit-form-group">
          <label for="edit-time">${ge("common.time")}</label>
          <input
            id="edit-time"
            class="edit-time"
            type="time"
            .value=${e=this.formData.hour,t=this.formData.minute,Ze(e,t)?Ue(e,t):"--:--"}
            @input=${this.handleTimeInput}
          />
        </div>
        ${this.renderPortionRow()} ${this.renderPredefinedTimes()}
      </form>
    `:z``;var e,t}};Xe.styles=n`
    .edit-form {
      display: flex;
      flex-direction: column;
      gap: 0.75em;
      width: 100%;
      box-sizing: border-box;
    }
    .edit-form-group {
      display: flex;
      flex-direction: column;
      gap: 0.4em;
    }
    .edit-predefined-times {
      display: flex;
      gap: 0.4em;
      flex-wrap: wrap;
    }
    .edit-predefined-times ha-button {
      flex: 1 1 auto;
      min-width: 60px;
      max-width: calc(25% - 0.3em);
    }
    @media (max-width: 768px) {
      .edit-predefined-times ha-button {
        flex: 1 1 auto;
        min-width: 50px;
        max-width: calc(33.333% - 0.3em);
        font-size: 0.85em;
        --ha-button-height: 28px;
      }
    }
    label {
      font-weight: 500;
      font-size: 0.95em;
    }
    input[type='time'],
    input[type='number'] {
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      font-size: 1em;
      width: 100%;
      box-sizing: border-box;
    }
    .edit-mode .days-row {
      justify-content: center;
      margin: 0 auto;
      gap: 6px;
    }
    .edit-mode .day-cell {
      width: 2.4em;
      height: 2.4em;
      line-height: 2.4em;
      font-size: 1.15em;
      margin: 0 2px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,Ke([he({type:Object})],Xe.prototype,"meal",2),Ke([he({type:Number})],Xe.prototype,"index",2),Ke([he({type:Object})],Xe.prototype,"profile",2),Ke([he({type:Boolean})],Xe.prototype,"open",2),Ke([pe()],Xe.prototype,"formData",2),Xe=Ke([le("meal-edit-dialog")],Xe);var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,it=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?tt(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&et(t,i,n),n};let rt=class extends ae{constructor(){super(...arguments),this.index=0,this.expanded=!1}toggleExpand(){const e=this.expanded;if(this.expanded=!this.expanded,this.expanded&&!e){const e=this.parentElement;e&&e.querySelectorAll("meal-card").forEach(e=>{e!==this&&e.expanded&&(e.expanded=!1)}),this.updateComplete.then(()=>{this.scrollIntoView({behavior:"smooth",block:"nearest"})})}}getSummary(){const e=[];return Re(this.profile,ye.PORTION)&&e.push(`${ge("common.portion")}: ${this.meal.portion}`),e.join(" • ")}handleMealUpdate(e){const t=e.target.checked,i={...this.meal,enabled:t?1:0};this.onMealAction&&this.onMealAction("update",this.index,i)}render(){const e=Ue(this.meal.hour,this.meal.minute);return z`
      <div class="meal-card">
        <div class="meal-card-header" @click=${this.toggleExpand}>
          <div class="meal-card-number">${this.index+1}</div>
          <div class="meal-card-summary">
            <div class="meal-card-time">${e}</div>
            <div class="meal-card-info">${this.getSummary()}</div>
          </div>
          <div class="meal-card-days">${this.renderDaysInline()}</div>
          ${this.renderEnabledToggle()}
          <ha-icon
            class="meal-card-expand-icon ${this.expanded?"expanded":""}"
            icon="mdi:chevron-down"
          ></ha-icon>
        </div>
        ${this.expanded?this.renderDetails():""}
      </div>
    `}renderDetails(){return z`
      <div class="meal-card-details">${this.renderActionButtons()}</div>
    `}renderDaysInline(){return Re(this.profile,ye.DAYS)&&void 0!==this.meal.days?Ye({days:this.meal.days,editable:!1}):""}renderEnabledToggle(){return Re(this.profile,ye.ENABLED)?z`
      <ha-switch
        .checked=${!!this.meal.enabled}
        @change=${e=>{this.handleMealUpdate(e)}}
        @click=${e=>{e.stopPropagation()}}
        title="${this.meal.enabled?ge("common.enabled"):ge("common.disabled")}"
      ></ha-switch>
    `:""}renderActionButtons(){return Re(this.profile,ye.DELETE)?z`
      <div class="meal-card-actions-section">
        <ha-button
          @click=${()=>{this.onMealAction&&this.onMealAction("edit",this.index,this.meal)}}
        >
          <ha-icon icon="mdi:pencil" slot="icon"></ha-icon>
          ${ge("meal_card.edit_meal")}
        </ha-button>
        <ha-button
          class="delete-button"
          @click=${()=>{confirm(ge("meal_card.confirm_delete"))&&this.onMealAction&&this.onMealAction("delete",this.index,this.meal)}}
        >
          <ha-icon icon="mdi:delete" slot="icon"></ha-icon>
          ${ge("common.delete")}
        </ha-button>
      </div>
    `:""}};rt.styles=n`
    .meal-card {
      background: var(--card-background-color, #fff);
      border-radius: 6px;
      margin-bottom: 6px;
      border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    }
    .meal-card-header {
      display: flex;
      align-items: center;
      padding: 8px 4px 8px 10px;
      cursor: pointer;
    }
    .meal-card-header:hover {
      background: var(--secondary-background-color, #f5f5f5);
    }
    .meal-card-header ha-switch,
    .meal-card-header ha-icon {
      pointer-events: auto;
    }
    .meal-card-number {
      font-size: 0.75em;
      font-weight: 600;
      color: var(--primary-color);
      background: var(--primary-color-light, rgba(3, 169, 244, 0.1));
      padding: 2px 6px;
      border-radius: 10px;
      margin-right: 8px;
      min-width: 20px;
      text-align: center;
    }
    .meal-card-summary {
      flex: 1;
      min-width: 0;
    }
    .meal-card-time {
      font-weight: 600;
      font-size: 1em;
      line-height: 1.4;
    }
    .meal-card-info {
      font-size: 0.8em;
      color: var(--secondary-text-color);
      line-height: 1.2;
    }
    .meal-card-days {
      margin-right: 8px;
    }
    .meal-card-days .days-row {
      margin: 0;
    }
    .meal-card-days .day-cell {
      width: 1.6em;
      height: 1.6em;
      font-size: 0.85em;
    }
    ha-switch {
      margin-left: auto;
    }
    @media (max-width: 500px) {
      .meal-card-header {
        flex-wrap: wrap;
      }
      .meal-card-summary {
        order: 1;
      }
      ha-switch {
        order: 2;
      }
      .meal-card-expand-icon {
        order: 3;
      }
      .meal-card-days {
        order: 10;
        width: 100%;
        margin: 4px 0 2px 36px;
      }
      .meal-card-days .days-row {
        gap: 3px;
        row-gap: 2px;
      }
    }
    .meal-card-expand-icon {
      transition: transform 0.2s;
      margin-left: 4px;
      --mdc-icon-size: 24px;
      color: var(--primary-color);
      cursor: pointer;
    }
    .meal-card-expand-icon:hover {
      color: var(--primary-color-dark, var(--primary-color));
    }
    .meal-card-expand-icon.expanded {
      transform: rotate(180deg);
    }
    .meal-card-details {
      padding: 0 10px 8px 10px;
      border-top: 1px solid var(--divider-color, #e0e0e0);
      background: var(--secondary-background-color, #f5f5f5);
    }
    .meal-card-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 0;
    }
    .meal-card-label {
      font-weight: 500;
      color: var(--secondary-text-color);
      font-size: 0.85em;
    }
    .meal-card-value {
      font-size: 0.9em;
    }
    .meal-card-actions-section {
      margin-top: 8px;
      padding-top: 8px;
      display: flex;
      gap: 8px;
    }
    .meal-card-actions-section ha-button {
      flex: 1;
      --ha-button-height: 32px;
    }
    .meal-card-actions-section .delete-button {
      --mdc-theme-primary: var(--error-color, #db4437);
    }
  `,it([he({type:Object})],rt.prototype,"meal",2),it([he({type:Number})],rt.prototype,"index",2),it([he({type:Object})],rt.prototype,"profile",2),it([he({type:Boolean})],rt.prototype,"expanded",2),it([he({attribute:!1})],rt.prototype,"onMealAction",2),rt=it([le("meal-card")],rt);const st=1;class nt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const at=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends nt{constructor(e){if(super(e),e.type!==st||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=/* @__PURE__ */new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const r of this.st)r in t||(i.remove(r),this.st.delete(r));for(const r in t){const e=!!t[r];e===this.st.has(r)||this.nt?.has(r)||(e?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return F}});var ot=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,dt=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?lt(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&ot(t,i,n),n};let ct=class extends ae{constructor(){super(...arguments),this.type="info",this.title="",this.message="",this.icon=""}getIcon(){if(this.icon)return this.icon;switch(this.type){case"warning":return"mdi:alert";case"error":return"mdi:alert-circle";case"success":return"mdi:check-circle";default:return"mdi:information"}}render(){return z`
      <div
        class=${at({banner:!0,[this.type]:!0})}
        role="alert"
        aria-live="polite"
      >
        <ha-icon .icon=${this.getIcon()}></ha-icon>
        <div class="content">
          ${this.title?z`<div class="title">${this.title}</div>`:""}
          <div class="text">${this.message}</div>
        </div>
      </div>
    `}};ct.styles=n`
    .banner {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 16px;
      border-radius: 8px;
      background: var(--card-background-color);
      border-left: 4px solid var(--divider-color);
      margin: 8px 0 16px;
    }
    /* Emphasize type via border color + subtle background tint */
    .banner.warning {
      border-left-color: var(--warning-color);
      background-color: var(--warning-bg-color, rgba(255, 152, 0, 0.12));
    }
    .banner.info {
      border-left-color: var(--info-color);
      background-color: var(--info-bg-color, rgba(0, 123, 255, 0.1));
    }
    .banner.error {
      border-left-color: var(--error-color);
      background-color: var(--error-bg-color, rgba(244, 67, 54, 0.12));
    }
    .banner.success {
      border-left-color: var(--success-color);
      background-color: var(--success-bg-color, rgba(76, 175, 80, 0.12));
    }
    .content {
      flex: 1;
    }
    .title {
      font-weight: 600;
      margin-bottom: 4px;
      /* inherit text color from theme */
    }
    .text {
      font-size: 0.95em;
      /* inherit secondary text color from theme */
    }
    ha-icon {
      --mdc-icon-size: 24px;
      margin-top: 2px;
      flex-shrink: 0;
    }
  `,dt([he({type:String})],ct.prototype,"type",2),dt([he({type:String})],ct.prototype,"title",2),dt([he({type:String})],ct.prototype,"message",2),dt([he({type:String})],ct.prototype,"icon",2),ct=dt([le("message-banner")],ct);var ht=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,ut=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?pt(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&ht(t,i,n),n};let mt=class extends ae{constructor(){super(...arguments),this.draftMeals=[],this.editMeal=null,this.heading=ge("schedule_view.manage_schedules")}connectedCallback(){super.connectedCallback(),this.draftMeals=this.sortMealsByTime([...this.mealState.meals]),this.unsubscribe=this.mealState.subscribe(()=>{this.resetDraft()})}sortMealsByTime(e){return[...e].sort((e,t)=>He(e.hour,e.minute)-He(t.hour,t.minute))}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.()}resetDraft(){this.draftMeals=this.sortMealsByTime([...this.mealState.meals])}updateMeal(e,t){this.draftMeals=this.sortMealsByTime(this.draftMeals.map((i,r)=>r===e?t:i))}handleMealAction(e,t,i){"update"===e?this.draftMeals=this.draftMeals.map((e,r)=>r===t?i:e):"delete"===e?this.draftMeals=this.draftMeals.filter((e,i)=>i!==t):"edit"===e&&(this.heading=ge("schedule_view.edit_feeding_time"),this.editMeal={meal:i,index:t})}addMeal(e){this.draftMeals=this.sortMealsByTime([...this.draftMeals,e])}handleOpenAdd(){this.heading=ge("common.add_meal"),this.editMeal={meal:{hour:12,minute:0,portion:1,days:127,enabled:1}}}async handleCancel(){this.resetDraft(),this.dispatchEvent(new Ve)}async handleSave(){await this.mealState.saveMeals(this.draftMeals),this.dispatchEvent(new Ve)}handleEditSave(e){const{meal:t,index:i}=e.detail;void 0!==i&&i>=0?this.updateMeal(i,t):this.addMeal(t),this.closeEditForm()}closeEditForm(){this.heading=ge("schedule_view.manage_schedules"),this.editMeal=null}hasPendingChanges(){return JSON.stringify(this.draftMeals)!==JSON.stringify(this.mealState.meals)}isSensorAvailable(){const e=this.hass?.states?.[this.mealState.config.sensor];if(!e)return!1;const t=e.state;return"unknown"!==t&&"unavailable"!==t}renderMealForm(){return null===this.editMeal?"":z`
      <div>
        <meal-edit-dialog
          .meal=${this.editMeal.meal}
          .index=${this.editMeal.index}
          .profile=${this.mealState.profile}
          .open=${!0}
          @save=${this.handleEditSave}
          @cancel=${this.closeEditForm}
        ></meal-edit-dialog>
      </div>
      <ha-button slot="secondaryAction" @click=${this.closeEditForm}>
        ${ge("common.back")}
      </ha-button>
      <ha-button
        slot="primaryAction"
        class="ha-primary"
        @click=${()=>{const e=this.shadowRoot?.querySelector("meal-edit-dialog");e?.handleSave()}}
      >
        ${ge("common.save")}
      </ha-button>
    `}renderEmptyState(){return z`
      <div class="empty-state">
        <ha-icon icon="mdi:calendar-blank"></ha-icon>
        <div class="empty-state-title">
          ${ge("schedule_view.no_meals_scheduled")}
        </div>
        <div class="empty-state-subtitle">
          ${ge("schedule_view.click_add_meal_to_get_started")}
        </div>
      </div>
    `}renderAddButton(){return Re(this.mealState.profile,ye.ADD)?z`
      <ha-button slot="secondaryAction" @click=${this.handleOpenAdd}>
        ${ge("common.add_meal")}
      </ha-button>
    `:""}renderCardView(){if(null!==this.editMeal)return"";if(!this.mealState.profile)return"";const e=this.isSensorAvailable();return z`
      <message-banner
        .type=${"warning"}
        .title=${ge("schedule_view.sensor_unavailable")}
        .message=${ge("schedule_view.sensor_unavailable_message")}
        ?hidden=${e}
      ></message-banner>
      <div class="schedule-cards">
        ${0===this.draftMeals.length?this.renderEmptyState():this.draftMeals.map((e,t)=>z`
                <meal-card
                  .meal=${e}
                  .index=${t}
                  .profile=${this.mealState.profile}
                  .onMealAction=${this.handleMealAction.bind(this)}
                >
                </meal-card>
              `)}
      </div>
      ${this.renderAddButton()}
      <ha-button slot="secondaryAction" @click=${this.handleCancel}>
        ${ge("common.cancel")}
      </ha-button>
      <ha-button
        slot="primaryAction"
        class="ha-primary"
        @click=${this.handleSave}
        ?disabled=${!this.hasPendingChanges()||!e}
      >
        ${ge("common.save")}
      </ha-button>
    `}render(){return z`
      <ha-dialog open scrimClickAction heading=${this.heading}>
        <meal-message-display></meal-message-display>
        ${this.renderCardView()} ${this.renderMealForm()}
      </ha-dialog>
    `}};mt.styles=n`
    .schedule-cards {
      display: block;
      max-height: 330px;
      overflow-y: auto;
      padding: 8px 0;
    }
    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: var(--secondary-text-color);
    }
    .empty-state ha-icon {
      --mdc-icon-size: 48px;
      color: var(--disabled-text-color);
      margin-bottom: 16px;
    }
    .empty-state-title {
      font-size: 1.1em;
      font-weight: 500;
      margin-bottom: 8px;
    }
    .empty-state-subtitle {
      font-size: 0.9em;
    }
    ha-dialog {
      --mdc-dialog-min-width: min(480px, 90vw);
      --mdc-dialog-max-width: 480px;
    }
    @media (max-width: 768px) {
      ha-dialog {
        --mdc-dialog-min-width: 95vw;
        --mdc-dialog-max-width: 95vw;
      }
    }
  `,ut([he({type:Object})],mt.prototype,"mealState",2),ut([he({type:Object})],mt.prototype,"hass",2),ut([pe()],mt.prototype,"draftMeals",2),ut([pe()],mt.prototype,"editMeal",2),ut([pe()],mt.prototype,"heading",2),mt=ut([le("schedule-view")],mt);var ft=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,yt=(e,t,i,r)=>{for(var s,n=r>1?void 0:r?gt(t,i):t,a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r?s(t,i,n):s(n))||n);return r&&n&&ft(t,i,n),n};let bt=class extends ae{constructor(){super(...arguments),this._dialogOpen=!1}static get styles(){return n`
      :host,
      ha-card {
        display: block;
        height: 100%;
        overflow: hidden;
      }
    `}setConfig(e){if(this.config=e,this.hass&&this.config.sensor&&this.config.manufacturer){const e=Ne(this.config.manufacturer);e&&(this.mealState=new Te(this,e,this.hass,this.config))}}async connectedCallback(){var e;if(super.connectedCallback(),await(e=this.hass?.language,void(me=ue?.[e]?e:"en")),this.config?.sensor&&this.config.manufacturer){const e=Ne(this.config.manufacturer);e&&(this.mealState=new Te(this,e,this.hass,this.config))}}updated(e){super.updated(e),e.has("hass")&&this.mealState&&(this.mealState.hass=this.hass,this.mealState.updateFromHass())}render(){return z`
      <ha-card header="${this.config.title}">
        ${this.renderContent()} ${this.renderScheduleDialog()}
      </ha-card>
    `}renderContent(){return this.mealState?z`
      <meal-overview
        .meals=${this.mealState.meals}
        .portions=${this.config?.portions}
      ></meal-overview>
      <div class="card-actions">
        <ha-button @click=${()=>this._dialogOpen=!0}>
          <ha-icon icon="mdi:table-edit"></ha-icon>
          ${ge("main.manage_schedules")}
        </ha-button>
      </div>
    `:this.renderConfigurationRequired()}renderConfigurationRequired(){return z`
      <div class="card-content">
        <ha-icon icon="mdi:cog"></ha-icon>
        <p>${ge("main.configuration_required")}</p>
        <p>${ge("main.configuration_instructions")}</p>
      </div>
    `}renderScheduleDialog(){return this._dialogOpen&&this.mealState?z`
      <schedule-view
        .mealState=${this.mealState}
        .hass=${this.hass}
        @schedule-closed=${()=>{this._dialogOpen=!1}}
      ></schedule-view>
    `:""}static getConfigForm(){return{schema:[{name:"sensor",required:!0,selector:{entity:{filter:[{domain:["sensor","text","input_text"]}]}}},{name:"manufacturer",required:!0,selector:{select:{options:Ie.map(e=>({value:e.manufacturer,label:e.manufacturer})).map(e=>({value:e.value,label:e.label})),mode:"dropdown"}}},{type:"grid",name:"",flatten:!0,column_min_width:"200px",schema:[{name:"title",selector:{text:{}}},{name:"portions",selector:{number:{min:1,max:10,mode:"box",unit_of_measurement:"g"}}}]},{name:"helper",selector:{entity:{filter:[{domain:"input_text"}]}}},{name:"transport_type",selector:{select:{options:[{value:"sensor",label:"Sensor (default)"},{value:"mqtt",label:"MQTT"}],mode:"dropdown"}}}],computeLabel:e=>{switch(e.name){case"sensor":return ge("config.sensor_label");case"manufacturer":return ge("config.manufacturer_label");case"title":return ge("config.title_label");case"portions":return ge("config.portion_label");case"helper":return ge("config.helper_label");case"transport_type":return ge("config.transport_label");default:return}},computeHelper:e=>{switch(e.name){case"sensor":return ge("config.sensor_helper");case"manufacturer":return ge("config.manufacturer_helper");case"helper":return ge("config.helper_helper");case"portions":return ge("config.portion_helper");case"transport_type":return ge("config.transport_helper");default:return}}}}static getStubConfig(){return{sensor:"",title:"MealPlan Card",helper:"",portions:6,manufacturer:"",model:"",transport_type:be.SENSOR}}static getGridOptions(){return{columns:6,rows:4,min_columns:6,min_rows:4}}};yt([he({type:Object})],bt.prototype,"hass",2),yt([he({type:Object})],bt.prototype,"config",2),yt([pe()],bt.prototype,"mealState",2),yt([pe()],bt.prototype,"_dialogOpen",2),bt=yt([le("mealplan-card")],bt),window.customCards=window.customCards||[],window.customCards.push({type:"mealplan-card",name:"Mealplan Card",preview:!1,description:"Mealplan card to decode/encode base64 meal_plan"});export{bt as MealPlanCard};
