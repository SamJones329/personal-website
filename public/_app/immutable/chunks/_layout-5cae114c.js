/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=function(e){const t=[];let n=0;for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&a+1<e.length&&(e.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++a)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},at=function(e){const t=[];let n=0,a=0;for(;n<e.length;){const r=e[n++];if(r<128)t[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[a++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],s=e[n++],o=e[n++],c=((r&7)<<18|(i&63)<<12|(s&63)<<6|o&63)-65536;t[a++]=String.fromCharCode(55296+(c>>10)),t[a++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],s=e[n++];t[a++]=String.fromCharCode((r&15)<<12|(i&63)<<6|s&63)}}return t.join("")},_e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<e.length;r+=3){const i=e[r],s=r+1<e.length,o=s?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=i>>2,f=(i&3)<<4|o>>4;let g=(o&15)<<2|l>>6,h=l&63;c||(h=64,s||(g=64)),a.push(n[u],n[f],n[g],n[h])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ee(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):at(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],o=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const f=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||o==null||l==null||f==null)throw Error();const g=i<<2|o>>4;if(a.push(g),l!==64){const h=o<<4&240|l>>2;if(a.push(h),f!==64){const rt=l<<6&192|f;a.push(rt)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},it=function(e){const t=Ee(e);return _e.encodeByteArray(t,!0)},ve=function(e){return it(e).replace(/\./g,"")},st=function(e){try{return _e.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function Ae(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function X(){return typeof indexedDB=="object"}function Z(){return new Promise((e,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Se(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function ot(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=()=>ot().__FIREBASE_DEFAULTS__,lt=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dt=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&st(e[1]);return t&&JSON.parse(t)},ut=()=>{try{return ct()||lt()||dt()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ft=()=>{var e;return(e=ut())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,a))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="FirebaseError";class D extends Error{constructor(t,n,a){super(n),this.code=t,this.customData=a,this.name=pt,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(t,n,a){this.service=t,this.serviceName=n,this.errors=a}create(t,...n){const a=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?gt(i,a):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new D(r,o,a)}}function gt(e,t){return e.replace(mt,(n,a)=>{const r=t[a];return r!=null?String(r):`<${a}?>`})}const mt=/\{\$([^}]+)}/g;function R(e,t){if(e===t)return!0;const n=Object.keys(e),a=Object.keys(t);for(const r of n){if(!a.includes(r))return!1;const i=e[r],s=t[r];if(ae(i)&&ae(s)){if(!R(i,s))return!1}else if(i!==s)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function ae(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=1e3,It=2,yt=4*60*60*1e3,wt=.5;function ie(e,t=bt,n=It){const a=t*Math.pow(n,e),r=Math.round(wt*a*(Math.random()-.5)*2);return Math.min(yt,a+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e){return e&&e._delegate?e._delegate:e}class w{constructor(t,n,a){this.name=t,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const a=new ht;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&a.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(vt(t))try{this.getOrInitializeService({instanceIdentifier:E})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});a.resolve(i)}catch{}}}}clearInstance(t=E){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=E){return this.instances.has(t)}getOptions(t=E){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[i,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);a===o&&s.resolve(r)}return r}onInit(t,n){var a;const r=this.normalizeInstanceIdentifier(n),i=(a=this.onInitCallbacks.get(r))!==null&&a!==void 0?a:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const a=this.onInitCallbacks.get(n);if(!!a)for(const r of a)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:_t(t),options:n}),this.instances.set(t,a),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=E){return this.component?this.component.multipleInstances?t:E:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _t(e){return e===E?void 0:e}function vt(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Et(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(d||(d={}));const St={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},Tt=d.INFO,Dt={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},Ct=(e,t,...n)=>{if(t<e.logLevel)return;const a=new Date().toISOString(),r=Dt[t];if(r)console[r](`[${a}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class De{constructor(t){this.name=t,this._logLevel=Tt,this._logHandler=Ct,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in d))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?St[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...t),this._logHandler(this,d.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...t),this._logHandler(this,d.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,d.INFO,...t),this._logHandler(this,d.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,d.WARN,...t),this._logHandler(this,d.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...t),this._logHandler(this,d.ERROR,...t)}}const Ot=(e,t)=>t.some(n=>e instanceof n);let se,oe;function Rt(){return se||(se=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bt(){return oe||(oe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ce=new WeakMap,W=new WeakMap,Oe=new WeakMap,L=new WeakMap,Q=new WeakMap;function Mt(e){const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n(b(e.result)),r()},s=()=>{a(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Ce.set(n,e)}).catch(()=>{}),Q.set(t,e),t}function $t(e){if(W.has(e))return;const t=new Promise((n,a)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{n(),r()},s=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});W.set(e,t)}let q={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return W.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Oe.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function kt(e){q=e(q)}function Nt(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=e.call(x(this),t,...n);return Oe.set(a,t.sort?t.sort():[t]),b(a)}:Bt().includes(e)?function(...t){return e.apply(x(this),t),b(Ce.get(this))}:function(...t){return b(e.apply(x(this),t))}}function Pt(e){return typeof e=="function"?Nt(e):(e instanceof IDBTransaction&&$t(e),Ot(e,Rt())?new Proxy(e,q):e)}function b(e){if(e instanceof IDBRequest)return Mt(e);if(L.has(e))return L.get(e);const t=Pt(e);return t!==e&&(L.set(e,t),Q.set(t,e)),t}const x=e=>Q.get(e);function Re(e,t,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const s=indexedDB.open(e,t),o=b(s);return a&&s.addEventListener("upgradeneeded",c=>{a(b(s.result),c.oldVersion,c.newVersion,b(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),o.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),o}const Ft=["get","getKey","getAll","getAllKeys","count"],Lt=["put","add","delete","clear"],j=new Map;function ce(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(j.get(t))return j.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,r=Lt.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||Ft.includes(n)))return;const i=async function(s,...o){const c=this.transaction(s,r?"readwrite":"readonly");let l=c.store;return a&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),r&&c.done]))[0]};return j.set(t,i),i}kt(e=>({...e,get:(t,n,a)=>ce(t,n)||e.get(t,n,a),has:(t,n)=>!!ce(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jt(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function jt(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const G="@firebase/app",le="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=new De("@firebase/app"),Ht="@firebase/app-compat",Vt="@firebase/analytics-compat",zt="@firebase/analytics",Ut="@firebase/app-check-compat",Wt="@firebase/app-check",qt="@firebase/auth",Gt="@firebase/auth-compat",Kt="@firebase/database",Yt="@firebase/database-compat",Jt="@firebase/functions",Xt="@firebase/functions-compat",Zt="@firebase/installations",Qt="@firebase/installations-compat",en="@firebase/messaging",tn="@firebase/messaging-compat",nn="@firebase/performance",rn="@firebase/performance-compat",an="@firebase/remote-config",sn="@firebase/remote-config-compat",on="@firebase/storage",cn="@firebase/storage-compat",ln="@firebase/firestore",dn="@firebase/firestore-compat",un="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="[DEFAULT]",fn={[G]:"fire-core",[Ht]:"fire-core-compat",[zt]:"fire-analytics",[Vt]:"fire-analytics-compat",[Wt]:"fire-app-check",[Ut]:"fire-app-check-compat",[qt]:"fire-auth",[Gt]:"fire-auth-compat",[Kt]:"fire-rtdb",[Yt]:"fire-rtdb-compat",[Jt]:"fire-fn",[Xt]:"fire-fn-compat",[Zt]:"fire-iid",[Qt]:"fire-iid-compat",[en]:"fire-fcm",[tn]:"fire-fcm-compat",[nn]:"fire-perf",[rn]:"fire-perf-compat",[an]:"fire-rc",[sn]:"fire-rc-compat",[on]:"fire-gcs",[cn]:"fire-gcs-compat",[ln]:"fire-fst",[dn]:"fire-fst-compat","fire-js":"fire-js",[un]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=new Map,Y=new Map;function hn(e,t){try{e.container.addComponent(t)}catch(n){v.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function A(e){const t=e.name;if(Y.has(t))return v.debug(`There were multiple attempts to register component ${t}.`),!1;Y.set(t,e);for(const n of B.values())hn(n,e);return!0}function N(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},I=new k("app","Firebase",pn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,n,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new w("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw I.create("app-deleted",{appName:this._name})}}function Be(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const a=Object.assign({name:K,automaticDataCollectionEnabled:!1},t),r=a.name;if(typeof r!="string"||!r)throw I.create("bad-app-name",{appName:String(r)});if(n||(n=ft()),!n)throw I.create("no-options");const i=B.get(r);if(i){if(R(n,i.options)&&R(a,i.config))return i;throw I.create("duplicate-app",{appName:r})}const s=new At(r);for(const c of Y.values())s.addComponent(c);const o=new gn(n,a,s);return B.set(r,o),o}function mn(e=K){const t=B.get(e);if(!t&&e===K)return Be();if(!t)throw I.create("no-app",{appName:e});return t}function y(e,t,n){var a;let r=(a=fn[e])!==null&&a!==void 0?a:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${t}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),v.warn(o.join(" "));return}A(new w(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="firebase-heartbeat-database",In=1,O="firebase-heartbeat-store";let H=null;function Me(){return H||(H=Re(bn,In,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(O)}}}).catch(e=>{throw I.create("idb-open",{originalErrorMessage:e.message})})),H}async function yn(e){var t;try{return(await Me()).transaction(O).objectStore(O).get($e(e))}catch(n){if(n instanceof D)v.warn(n.message);else{const a=I.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});v.warn(a.message)}}}async function de(e,t){var n;try{const r=(await Me()).transaction(O,"readwrite");return await r.objectStore(O).put(t,$e(e)),r.done}catch(a){if(a instanceof D)v.warn(a.message);else{const r=I.create("idb-set",{originalErrorMessage:(n=a)===null||n===void 0?void 0:n.message});v.warn(r.message)}}}function $e(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=1024,En=30*24*60*60*1e3;class _n{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new An(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=ue();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(r=>r.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=En}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ue(),{heartbeatsToSend:n,unsentEntries:a}=vn(this._heartbeatsCache.heartbeats),r=ve(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ue(){return new Date().toISOString().substring(0,10)}function vn(e,t=wn){const n=[];let a=e.slice();for(const r of e){const i=n.find(s=>s.agent===r.agent);if(i){if(i.dates.push(r.date),fe(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),fe(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class An{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X()?Z().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yn(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return de(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return de(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function fe(e){return ve(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e){A(new w("platform-logger",t=>new xt(t),"PRIVATE")),A(new w("heartbeat",t=>new _n(t),"PRIVATE")),y(G,le,e),y(G,le,"esm2017"),y("fire-js","")}Sn("");var Tn="firebase",Dn="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */y(Tn,Dn,"app");const ke="@firebase/installations",ee="0.5.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=1e4,Pe=`w:${ee}`,Fe="FIS_v2",Cn="https://firebaseinstallations.googleapis.com/v1",On=60*60*1e3,Rn="installations",Bn="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},S=new k(Rn,Bn,Mn);function Le(e){return e instanceof D&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe({projectId:e}){return`${Cn}/projects/${e}/installations`}function je(e){return{token:e.token,requestStatus:2,expiresIn:kn(e.expiresIn),creationTime:Date.now()}}async function He(e,t){const a=(await t.json()).error;return S.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Ve({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function $n(e,{refreshToken:t}){const n=Ve(e);return n.append("Authorization",Nn(t)),n}async function ze(e){const t=await e();return t.status>=500&&t.status<600?e():t}function kn(e){return Number(e.replace("s","000"))}function Nn(e){return`${Fe} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const a=xe(e),r=Ve(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const s={fid:n,authVersion:Fe,appId:e.appId,sdkVersion:Pe},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await ze(()=>fetch(a,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:je(l.authToken)}}else throw await He("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=/^[cdef][\w-]{21}$/,J="";function xn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=jn(e);return Ln.test(n)?n:J}catch{return J}}function jn(e){return Fn(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=new Map;function qe(e,t){const n=P(e);Ge(n,t),Hn(n,t)}function Ge(e,t){const n=We.get(e);if(!!n)for(const a of n)a(t)}function Hn(e,t){const n=Vn();n&&n.postMessage({key:e,fid:t}),zn()}let _=null;function Vn(){return!_&&"BroadcastChannel"in self&&(_=new BroadcastChannel("[Firebase] FID Change"),_.onmessage=e=>{Ge(e.data.key,e.data.fid)}),_}function zn(){We.size===0&&_&&(_.close(),_=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="firebase-installations-database",Wn=1,T="firebase-installations-store";let V=null;function te(){return V||(V=Re(Un,Wn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(T)}}})),V}async function M(e,t){const n=P(e),r=(await te()).transaction(T,"readwrite"),i=r.objectStore(T),s=await i.get(n);return await i.put(t,n),await r.done,(!s||s.fid!==t.fid)&&qe(e,t.fid),t}async function Ke(e){const t=P(e),a=(await te()).transaction(T,"readwrite");await a.objectStore(T).delete(t),await a.done}async function F(e,t){const n=P(e),r=(await te()).transaction(T,"readwrite"),i=r.objectStore(T),s=await i.get(n),o=t(s);return o===void 0?await i.delete(n):await i.put(o,n),await r.done,o&&(!s||s.fid!==o.fid)&&qe(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e){let t;const n=await F(e.appConfig,a=>{const r=qn(a),i=Gn(e,r);return t=i.registrationPromise,i.installationEntry});return n.fid===J?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function qn(e){const t=e||{fid:xn(),registrationStatus:0};return Ye(t)}function Gn(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(S.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=Kn(e,n);return{installationEntry:n,registrationPromise:a}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Yn(e)}:{installationEntry:t}}async function Kn(e,t){try{const n=await Pn(e,t);return M(e.appConfig,n)}catch(n){throw Le(n)&&n.customData.serverCode===409?await Ke(e.appConfig):await M(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Yn(e){let t=await he(e.appConfig);for(;t.registrationStatus===1;)await Ue(100),t=await he(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await ne(e);return a||n}return t}function he(e){return F(e,t=>{if(!t)throw S.create("installation-not-found");return Ye(t)})}function Ye(e){return Jn(e)?{fid:e.fid,registrationStatus:0}:e}function Jn(e){return e.registrationStatus===1&&e.registrationTime+Ne<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xn({appConfig:e,heartbeatServiceProvider:t},n){const a=Zn(e,n),r=$n(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&r.append("x-firebase-client",l)}const s={installation:{sdkVersion:Pe,appId:e.appId}},o={method:"POST",headers:r,body:JSON.stringify(s)},c=await ze(()=>fetch(a,o));if(c.ok){const l=await c.json();return je(l)}else throw await He("Generate Auth Token",c)}function Zn(e,{fid:t}){return`${xe(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e,t=!1){let n;const a=await F(e.appConfig,i=>{if(!Je(i))throw S.create("not-registered");const s=i.authToken;if(!t&&tr(s))return i;if(s.requestStatus===1)return n=Qn(e,t),i;{if(!navigator.onLine)throw S.create("app-offline");const o=rr(i);return n=er(e,o),o}});return n?await n:a.authToken}async function Qn(e,t){let n=await pe(e.appConfig);for(;n.authToken.requestStatus===1;)await Ue(100),n=await pe(e.appConfig);const a=n.authToken;return a.requestStatus===0?re(e,t):a}function pe(e){return F(e,t=>{if(!Je(t))throw S.create("not-registered");const n=t.authToken;return ar(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function er(e,t){try{const n=await Xn(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await M(e.appConfig,a),n}catch(n){if(Le(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ke(e.appConfig);else{const a=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await M(e.appConfig,a)}throw n}}function Je(e){return e!==void 0&&e.registrationStatus===2}function tr(e){return e.requestStatus===2&&!nr(e)}function nr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+On}function rr(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ar(e){return e.requestStatus===1&&e.requestTime+Ne<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(e){const t=e,{installationEntry:n,registrationPromise:a}=await ne(t);return a?a.catch(console.error):re(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sr(e,t=!1){const n=e;return await or(n),(await re(n,t)).token}async function or(e){const{registrationPromise:t}=await ne(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e){if(!e||!e.options)throw z("App Configuration");if(!e.name)throw z("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw z(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function z(e){return S.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="installations",lr="installations-internal",dr=e=>{const t=e.getProvider("app").getImmediate(),n=cr(t),a=N(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},ur=e=>{const t=e.getProvider("app").getImmediate(),n=N(t,Xe).getImmediate();return{getId:()=>ir(n),getToken:r=>sr(n,r)}};function fr(){A(new w(Xe,dr,"PUBLIC")),A(new w(lr,ur,"PRIVATE"))}fr();y(ke,ee);y(ke,ee,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="analytics",hr="firebase_id",pr="origin",gr=60*1e3,mr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ze="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=new De("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function br(e,t){const n=document.createElement("script");n.src=`${Ze}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Ir(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function yr(e,t,n,a,r,i){const s=a[r];try{if(s)await t[s];else{const c=(await Qe(n)).find(l=>l.measurementId===r);c&&await t[c.appId]}}catch(o){p.error(o)}e("config",r,i)}async function wr(e,t,n,a,r){try{let i=[];if(r&&r.send_to){let s=r.send_to;Array.isArray(s)||(s=[s]);const o=await Qe(n);for(const c of s){const l=o.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",a,r||{})}catch(i){p.error(i)}}function Er(e,t,n,a){async function r(i,s,o){try{i==="event"?await wr(e,t,n,s,o):i==="config"?await yr(e,t,n,a,s,o):i==="consent"?e("consent","update",o):e("set",s)}catch(c){p.error(c)}}return r}function _r(e,t,n,a,r){let i=function(...s){window[a].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Er(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}function vr(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ze)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},m=new k("analytics","Analytics",Ar);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=30,Tr=1e3;class Dr{constructor(t={},n=Tr){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const et=new Dr;function Cr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Or(e){var t;const{appId:n,apiKey:a}=e,r={method:"GET",headers:Cr(a)},i=mr.replace("{app-id}",n),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw m.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Rr(e,t=et,n){const{appId:a,apiKey:r,measurementId:i}=e.options;if(!a)throw m.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:a};throw m.create("no-api-key")}const s=t.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new $r;return setTimeout(async()=>{o.abort()},n!==void 0?n:gr),tt({appId:a,apiKey:r,measurementId:i},s,o,t)}async function tt(e,{throttleEndTimeMillis:t,backoffCount:n},a,r=et){var i,s;const{appId:o,measurementId:c}=e;try{await Br(a,t)}catch(l){if(c)return p.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${(i=l)===null||i===void 0?void 0:i.message}]`),{appId:o,measurementId:c};throw l}try{const l=await Or(e);return r.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!Mr(u)){if(r.deleteThrottleMetadata(o),c)return p.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const f=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?ie(n,r.intervalMillis,Sr):ie(n,r.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(o,g),p.debug(`Calling attemptFetch again in ${f} millis`),tt(e,g,a,r)}}function Br(e,t){return new Promise((n,a)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(i),a(m.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Mr(e){if(!(e instanceof D)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class $r{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function kr(e,t,n,a,r){if(r&&r.global){e("event",n,a);return}else{const i=await t,s=Object.assign(Object.assign({},a),{send_to:i});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(){var e;if(X())try{await Z()}catch(t){return p.warn(m.create("indexeddb-unavailable",{errorInfo:(e=t)===null||e===void 0?void 0:e.toString()}).message),!1}else return p.warn(m.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Pr(e,t,n,a,r,i,s){var o;const c=Rr(e);c.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&p.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>p.error(h)),t.push(c);const l=Nr().then(h=>{if(h)return a.getId()}),[u,f]=await Promise.all([c,l]);vr(i)||br(i,u.measurementId),r("js",new Date);const g=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return g[pr]="firebase",g.update=!0,f!=null&&(g[hr]=f),r("config",u.measurementId,g),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t){this.app=t}_delete(){return delete C[this.app.options.appId],Promise.resolve()}}let C={},ge=[];const me={};let U="dataLayer",Lr="gtag",be,nt,Ie=!1;function xr(){const e=[];if(Ae()&&e.push("This is a browser extension environment."),Se()||e.push("Cookies are not available."),e.length>0){const t=e.map((a,r)=>`(${r+1}) ${a}`).join(" "),n=m.create("invalid-analytics-context",{errorInfo:t});p.warn(n.message)}}function jr(e,t,n){xr();const a=e.options.appId;if(!a)throw m.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)p.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw m.create("no-api-key");if(C[a]!=null)throw m.create("already-exists",{id:a});if(!Ie){Ir(U);const{wrappedGtag:i,gtagCore:s}=_r(C,ge,me,U,Lr);nt=i,be=s,Ie=!0}return C[a]=Pr(e,ge,me,t,be,U,n),new Fr(e)}function Hr(e=mn()){e=Te(e);const t=N(e,$);return t.isInitialized()?t.getImmediate():Vr(e)}function Vr(e,t={}){const n=N(e,$);if(n.isInitialized()){const r=n.getImmediate();if(R(t,n.getOptions()))return r;throw m.create("already-initialized")}return n.initialize({options:t})}async function zr(){if(Ae()||!Se()||!X())return!1;try{return await Z()}catch{return!1}}function Ur(e,t,n,a){e=Te(e),kr(nt,C[e.app.options.appId],t,n,a).catch(r=>p.error(r))}const ye="@firebase/analytics",we="0.8.3";function Wr(){A(new w($,(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return jr(a,r,n)},"PUBLIC")),A(new w("analytics-internal",e,"PRIVATE")),y(ye,we),y(ye,we,"esm2017");function e(t){try{const n=t.getProvider($).getImmediate();return{logEvent:(a,r,i)=>Ur(n,a,r,i)}}catch(n){throw m.create("interop-component-reg-failed",{reason:n})}}}Wr();const qr={apiKey:"AIzaSyAhVzIbyS8zG1Su0xTTZ1jbCqLkAO_HMm0",authDomain:"personal-website-46a49.firebaseapp.com",projectId:"personal-website-46a49",storageBucket:"personal-website-46a49.appspot.com",messagingSenderId:"258594875840",appId:"1:258594875840:web:c7217f867527bb70ad8025",measurementId:"G-XQ3SX9PY6P"},Gr=Be(qr);zr().then(e=>{e&&Hr(Gr)});const Kr=!0,Yr=Object.freeze(Object.defineProperty({__proto__:null,prerender:Kr},Symbol.toStringTag,{value:"Module"}));export{Yr as _,Kr as p};
