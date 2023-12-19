function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequiredcfd;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},e.parcelRequiredcfd=i),i.register("1dkLo",(function(e,n){function r(t){const e=t.map((({id:t,poster_path:e,title:n,genres:r,release_year:i,vote_average:s})=>`<div>\n    <img id="${t}" src="${e}" alt="movie poster" loading="lazy" />\n            <p class="movie-title">   ${n} </p>\n            <p class="movie-short-descr"> ${r} | ${i} | <span>${s}</span></p>\n        </div>`)).join("");document.querySelector(".movies-div").innerHTML=e}function i(t,e){const n=document.querySelector(".buttons-div");if(null!==n&&n.remove(),1===e)return;let r,i,s,o=`\n      <button id="rgtdotBtn">...</button>\n      <button>${e}</button>\n      <button id="rgtarwBtn">&rarr;</button>\n    </div>`;switch(t){case 1:r=1,i=3;break;case 2:r=1,i=4;break;default:r=t-2,i=t+2}i>=e&&(i=e-1);let a="";for(let t=r;t<=i;t++)1!==t&&(a+=`<button>${t}</button>`);let c='<div class="buttons-div">\n      <button id="lftarwBtn">&larr;</button>\n      <button id="oneBtn">1</button>\n      <button id="lftdotBtn">...</button>'+a+o;document.querySelector("main").insertAdjacentHTML("beforeend",c);const u=document.querySelector("#lftarwBtn"),h=document.querySelector("#lftdotBtn"),l=document.querySelector("#rgtdotBtn"),d=document.querySelector("#rgtarwBtn");t>=1&&t<=4&&(h.style.display="none",s=t+2),1===t&&(u.style.display="none",s=2),t>4&&(s=6),e-i<2&&(l.style.display="none"),t===e&&(d.style.display="none",s=7);document.querySelector(`.buttons-div :nth-child(${s})`).classList.add("active"),u.style.backgroundColor="#F7F7F7",d.style.backgroundColor="#F7F7F7"}t(e.exports,"renderMoviesList",(function(){return r})),t(e.exports,"renderPaginationButtons",(function(){return i}))})),i.register("5uEKZ",(function(t,e){})),i.register("jPzW1",(function(e,n){t(e.exports,"downloadWatchedQueuedMoviesFromDB",(function(){return h})),t(e.exports,"itemAccess",(function(){return $e6fea7a6f2e20116$export$6cab6cd873649772})),t(e.exports,"uploadWatchedQueuedMoviesToDB",(function(){return l})),i("ftYLF");var r=i("3PjDZ"),s=i("9FYXe");const o=(0,r.getFirestore)(s.app),a="your-device-ID",c=(0,r.doc)(o,"watched_and_queued_movie_list","your-device-ID");let u={watchedMovies:[],queuedMovies:[]};console.dir(s.app),console.dir(o),console.log(a);const h=async function(){try{$e6fea7a6f2e20116$export$6cab6cd873649772=await(0,r.getDoc)(c),savedMovies=$e6fea7a6f2e20116$export$6cab6cd873649772.data(),console.log(savedMovies),u.watchedMovies=savedMovies.watchedMovies,u.queuedMovies=savedMovies.queuedMovies,console.log("The movies added to watched are: ",savedMovies.watchedMovies,"and queued are: ",savedMovies.queuedMovies)}catch(t){console.log("I couldn't find the list of movies, because: ",t)}},l=async function(t,e){h(),console.log(t,e);const n=JSON.stringify(e);console.log(n),"watched"===t?(u.watchedMovies=[],u.watchedMovies.push(n)):(u.queuedMovies=[],u.queuedMovies.push(n));try{await(0,r.setDoc)(c,u),console.log("The list of movies has been successfully added")}catch(t){console.log("I couldn't save the list of movies, because: ",t)}}})),i.register("ftYLF",(function(e,n){t(e.exports,"getFirestore",(function(){return i("3PjDZ").getFirestore})),t(e.exports,"doc",(function(){return i("3PjDZ").doc})),t(e.exports,"getDoc",(function(){return i("3PjDZ").getDoc})),t(e.exports,"setDoc",(function(){return i("3PjDZ").setDoc})),i("3PjDZ")})),i.register("3PjDZ",(function(e,n){t(e.exports,"doc",(function(){return ao})),t(e.exports,"getFirestore",(function(){return ho})),t(e.exports,"getDoc",(function(){return qo})),t(e.exports,"setDoc",(function(){return zo}));var r=i("ix4Jr"),s=i("4a6xH"),o=i("7vF8m"),a=i("ffjl9"),c=i("4bwHs");i("4TNnu");const u="@firebase/firestore";
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
 */class h{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}h.UNAUTHENTICATED=new h(null),h.GOOGLE_CREDENTIALS=new h("google-credentials-uid"),h.FIRST_PARTY=new h("first-party-uid"),h.MOCK_USER=new h("mock-user");
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
 */
let l="10.7.0";
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
 */const d=new(0,o.Logger)("@firebase/firestore");function f(){return d.logLevel}function g(t,...e){if(d.logLevel<=o.LogLevel.DEBUG){const n=e.map(y);d.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(d.logLevel<=o.LogLevel.ERROR){const n=e.map(y);d.error(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(d.logLevel<=o.LogLevel.WARN){const n=e.map(y);d.warn(`Firestore (${l}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{
/**
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
 */return e=t,JSON.stringify(e)}catch(e){return t}var e}
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
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function w(t,e){t||v()}function E(t,e){return t}
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends a.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class T{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class I{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(h.UNAUTHENTICATED)))}shutdown(){}}class C{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class A{start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(w("string"==typeof e.accessToken),new I(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return w(null===t||"string"==typeof t),new h(t)}constructor(t){this.t=t,this.currentUser=h.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class D{T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=h.FIRST_PARTY,this.I=new Map}}class k{getToken(){return Promise.resolve(new D(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(h.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.l=t,this.h=e,this.P=n}}class N{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x{start(t,e){const n=t=>{null!=t.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,g("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(w("string"==typeof t.token),this.R=t.token,new N(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}}
/**
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
 */
function L(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class R{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=L(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function O(t,e){return t<e?-1:t>e?1:0}function M(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
 */
class P{static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new P(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?O(this.nanoseconds,t.nanoseconds):O(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new _(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new _(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new _(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
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
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new P(0,0))}static max(){return new F(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
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
 */class V{get length(){return this.len}isEqual(t){return 0===V.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof V?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}}class U extends V{construct(t,e,n){return new U(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new _(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new U(e)}static emptyPath(){return new U([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends V{construct(t,e,n){return new j(t,e,n)}static isValidIdentifier(t){return B.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new j(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new _(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new _(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new _(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new _(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new j(e)}static emptyPath(){return new j([])}}
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
 */class q{static fromPath(t){return new q(U.fromString(t))}static fromName(t){return new q(U.fromString(t).popFirst(5))}static empty(){return new q(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===U.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return U.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new U(t.slice()))}constructor(t){this.path=t}}
/**
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
 */class ${constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}$.UNKNOWN_ID=-1;function z(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(1e9===r?new P(n+1,0):new P(n,r));return new H(i,q.empty(),e)}function K(t){return new H(t.readTime,t.key,-1)}class H{static min(){return new H(F.min(),q.empty(),-1)}static max(){return new H(F.max(),q.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function G(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=q.comparator(t.documentKey,e.documentKey),0!==n?n:O(t.largestBatchId,e.largestBatchId))}
/**
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
 */const Q="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
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
 */async function X(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Q)throw t;g("LocalStore","Unexpectedly lost primary lease")}
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
 */class Y{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Y(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Y?e:Y.resolve(e)}catch(t){return Y.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Y.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Y.reject(e)}static resolve(t){return new Y(((e,n)=>{e(t)}))}static reject(t){return new Y(((e,n)=>{n(t)}))}static waitFor(t){return new Y(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Y.resolve(!1);for(const n of t)e=e.next((t=>t?Y.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Y(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Y(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
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
 */function J(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */
class Z{se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}}function tt(t){return null==t}function et(t){return 0===t&&1/t==-1/0}function nt(t){return"number"==typeof t&&Number.isInteger(t)&&!et(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */Z._e=-1;const rt=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],it=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],st=it;
/**
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
 */
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
 */
function ot(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function at(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ct(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class ut{insert(t,e){return new ut(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ht(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ht(this.root,t,this.comparator,!1)}getReverseIterator(){return new ht(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ht(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}}class ht{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class lt{copy(t,e,n,r,i){return new lt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return lt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:lt.RED,this.left=null!=r?r:lt.EMPTY,this.right=null!=i?i:lt.EMPTY,this.size=this.left.size+1+this.right.size}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1,lt.EMPTY=new class{get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
 */
class dt{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ft(this.data.getIterator())}getIteratorFrom(t){return new ft(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof dt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new ut(this.comparator)}}class ft{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
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
 */
class gt{static empty(){return new gt([])}unionWith(t){let e=new dt(j.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new gt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return M(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(j.comparator)}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class pt extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */let mt=Symbol.iterator;
/**
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
 */class yt{static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new pt("Invalid base64 string: "+t):t}}(t);return new yt(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new yt(e)}[mt](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return O(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}yt.EMPTY_BYTE_STRING=new yt("");const vt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wt(t){if(w(!!t),"string"==typeof t){let e=0;const n=vt.exec(t);if(w(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Et(t.seconds),nanos:Et(t.nanos)}}function Et(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function bt(t){return"string"==typeof t?yt.fromBase64String(t):yt.fromUint8Array(t)}
/**
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
 */function _t(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Tt(t){const e=t.mapValue.fields.__previous_value__;return _t(e)?Tt(e):e}function It(t){const e=wt(t.mapValue.fields.__local_write_time__.timestampValue);return new P(e.seconds,e.nanos)}
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
 */class St{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Ct{static empty(){return new Ct("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ct&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
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
 */const At={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Dt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_t(t)?4:jt(t)?9007199254740991:10:v()}function kt(t,e){if(t===e)return!0;const n=Dt(t);if(n!==Dt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return It(t).isEqual(It(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=wt(t.timestampValue),r=wt(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,bt(t.bytesValue).isEqual(bt(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Et(t.geoPointValue.latitude)===Et(e.geoPointValue.latitude)&&Et(t.geoPointValue.longitude)===Et(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Et(t.integerValue)===Et(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Et(t.doubleValue),r=Et(e.doubleValue);return n===r?et(n)===et(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return M(t.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ot(n)!==ot(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!kt(n[t],r[t])))return!1;return!0}(t,e);default:return v()}var r}function Nt(t,e){return void 0!==(t.values||[]).find((t=>kt(t,e)))}function xt(t,e){if(t===e)return 0;const n=Dt(t),r=Dt(e);if(n!==r)return O(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Et(t.integerValue||t.doubleValue),r=Et(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Lt(t.timestampValue,e.timestampValue);case 4:return Lt(It(t),It(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(t,e){const n=bt(t),r=bt(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=O(n[t],r[t]);if(0!==e)return e}return O(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=O(Et(t.latitude),Et(e.latitude));return 0!==n?n:O(Et(t.longitude),Et(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=xt(n[t],r[t]);if(e)return e}return O(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===At.mapValue&&e===At.mapValue)return 0;if(t===At.mapValue)return 1;if(e===At.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=O(r[t],s[t]);if(0!==e)return e;const o=xt(n[r[t]],i[s[t]]);if(0!==o)return o}return O(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function Lt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return O(t,e);const n=wt(t),r=wt(e),i=O(n.seconds,r.seconds);return 0!==i?i:O(n.nanos,r.nanos)}function Rt(t){return Ot(t)}function Ot(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=wt(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bt(t.bytesValue).toBase64():"referenceValue"in t?function(t){return q.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ot(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Ot(t.fields[i])}`;return n+"}"}(t.mapValue):v()}function Mt(t){return!!t&&"integerValue"in t}function Pt(t){return!!t&&"arrayValue"in t}function Ft(t){return!!t&&"nullValue"in t}function Vt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ut(t){return!!t&&"mapValue"in t}function Bt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return at(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Bt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function jt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
 */
class qt{static empty(){return new qt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ut(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Bt(e)}setAll(t){let e=j.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Bt(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Ut(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Ut(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){at(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new qt(Bt(this.value))}constructor(t){this.value=t}}function $t(t){const e=[];return at(t.fields,((t,n)=>{const r=new j([t]);if(Ut(n)){const t=$t(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new gt(e)
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
 */}class zt{static newInvalidDocument(t){return new zt(t,0,F.min(),F.min(),F.min(),qt.empty(),0)}static newFoundDocument(t,e,n,r){return new zt(t,1,e,F.min(),n,r,0)}static newNoDocument(t,e){return new zt(t,2,e,F.min(),F.min(),qt.empty(),0)}static newUnknownDocument(t,e){return new zt(t,3,e,F.min(),F.min(),qt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof zt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}}
/**
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
 */class Kt{constructor(t,e){this.position=t,this.inclusive=e}}function Ht(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?q.comparator(q.fromName(o.referenceValue),n.key):xt(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Gt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kt(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class Qt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class Xt{}class Yt extends Xt{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new se(t,e,n):"array-contains"===e?new ue(t,n):"in"===e?new he(t,n):"not-in"===e?new le(t,n):"array-contains-any"===e?new de(t,n):new Yt(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new oe(t,n):new ae(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(xt(e,this.value)):null!==e&&Dt(this.value)===Dt(e)&&this.matchesComparison(xt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Jt extends Xt{static create(t,e){return new Jt(t,e)}matches(t){return Zt(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}}function Zt(t){return"and"===t.op}function te(t){return ee(t)&&Zt(t)}function ee(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function ne(t){if(t instanceof Yt)return t.field.canonicalString()+t.op.toString()+Rt(t.value);if(te(t))return t.filters.map((t=>ne(t))).join(",");{const e=t.filters.map((t=>ne(t))).join(",");return`${t.op}(${e})`}}function re(t,e){return t instanceof Yt?(n=t,(r=e)instanceof Yt&&n.op===r.op&&n.field.isEqual(r.field)&&kt(n.value,r.value)):t instanceof Jt?function(t,e){return e instanceof Jt&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&re(n,e.filters[r])),!0)}(t,e):void v();var n,r}function ie(t){return t instanceof Yt?`${(e=t).field.canonicalString()} ${e.op} ${Rt(e.value)}`:t instanceof Jt?function(t){return t.op.toString()+" {"+t.getFilters().map(ie).join(" ,")+"}"}(t):"Filter";var e}class se extends Yt{matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=q.fromName(n.referenceValue)}}class oe extends Yt{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=ce("in",e)}}class ae extends Yt{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=ce("not-in",e)}}function ce(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>q.fromName(t.referenceValue)))}class ue extends Yt{matches(t){const e=t.data.field(this.field);return Pt(e)&&Nt(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class he extends Yt{matches(t){const e=t.data.field(this.field);return null!==e&&Nt(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class le extends Yt{matches(t){if(Nt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Nt(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class de extends Yt{matches(t){const e=t.data.field(this.field);return!(!Pt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Nt(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
/**
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
 */class fe{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ce=null}}function ge(t,e=null,n=[],r=[],i=null,s=null,o=null){return new fe(t,e,n,r,i,s,o)}function pe(t){const e=E(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>ne(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),tt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Rt(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Rt(t))).join(",")),e.ce=t}return e.ce}function me(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Wt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!re(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gt(t.startAt,e.startAt)&&Gt(t.endAt,e.endAt)}function ye(t){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
 */
class ve{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function we(t,e,n,r,i,s,o,a){return new ve(t,e,n,r,i,s,o,a)}function Ee(t){return new ve(t)}function be(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function _e(t){return null!==t.collectionGroup}function Te(t){const e=E(t);if(null===e.le){e.le=[];const t=new Set;for(const n of e.explicitOrderBy)e.le.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(t){let e=new dt(j.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.le.push(new Qt(r,n))})),t.has(j.keyField().canonicalString())||e.le.push(new Qt(j.keyField(),n))}return e.le}function Ie(t){const e=E(t);return e.he||(e.he=Se(e,Te(t))),e.he}function Se(t,e){if("F"===t.limitType)return ge(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Qt(t.field,e)}));const n=t.endAt?new Kt(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Kt(t.startAt.position,t.startAt.inclusive):null;return ge(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ce(t,e,n){return new ve(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ae(t,e){return me(Ie(t),Ie(e))&&t.limitType===e.limitType}function De(t){return`${pe(Ie(t))}|lt:${t.limitType}`}function ke(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>ie(t))).join(", ")}]`),tt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Rt(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Rt(t))).join(",")),`Target(${e})`}(Ie(t))}; limitType=${t.limitType})`}function Ne(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):q.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Te(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=Ht(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,Te(n),r)||n.endAt&&!function(t,e,n){const r=Ht(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,Te(n),r)));var n,r}function xe(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Le(t){return(e,n)=>{let r=!1;for(const i of Te(t)){const t=Re(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Re(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?xt(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
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
 */class Oe{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){at(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return ct(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
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
 */const Me=new ut(q.comparator);function Pe(){return Me}const Fe=new ut(q.comparator);function Ve(...t){let e=Fe;for(const n of t)e=e.insert(n.key,n);return e}function Ue(t){let e=Fe;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Be(){return qe()}function je(){return qe()}function qe(){return new Oe((t=>t.toString()),((t,e)=>t.isEqual(e)))}const $e=new ut(q.comparator),ze=new dt(q.comparator);function Ke(...t){let e=ze;for(const n of t)e=e.add(n);return e}const He=new dt(O);function Ge(){return He}
/**
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
 */function Qe(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:et(e)?"-0":e}}function We(t){return{integerValue:""+t}}function Xe(t,e){return nt(e)?We(e):Qe(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ye{constructor(){this._=void 0}}function Je(t,e,n){return t instanceof en?nn(t,e):t instanceof rn?sn(t,e):n}function Ze(t,e){return t instanceof on?Mt(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null;var n,r}class tn extends Ye{}class en extends Ye{constructor(t){super(),this.elements=t}}function nn(t,e){const n=cn(e);for(const e of t.elements)n.some((t=>kt(t,e)))||n.push(e);return{arrayValue:{values:n}}}class rn extends Ye{constructor(t){super(),this.elements=t}}function sn(t,e){let n=cn(e);for(const e of t.elements)n=n.filter((t=>!kt(t,e)));return{arrayValue:{values:n}}}class on extends Ye{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function an(t){return Et(t.integerValue||t.doubleValue)}function cn(t){return Pt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class un{constructor(t,e){this.version=t,this.transformResults=e}}class hn{static none(){return new hn}static exists(t){return new hn(void 0,t)}static updateTime(t){return new hn(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function ln(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class dn{}function fn(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Tn(t.key,hn.none()):new vn(t.key,t.data,hn.none());{const n=t.data,r=qt.empty();let i=new dt(j.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new wn(t.key,r,new gt(i.toArray()),hn.none())}}function gn(t,e,n){var r;t instanceof vn?function(t,e,n){const r=t.value.clone(),i=bn(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof wn?function(t,e,n){if(!ln(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=bn(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(En(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function pn(t,e,n,r){return t instanceof vn?function(t,e,n,r){if(!ln(t.precondition,e))return n;const i=t.value.clone(),s=_n(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof wn?function(t,e,n,r){if(!ln(t.precondition,e))return n;const i=_n(t.fieldTransforms,r,e),s=e.data;return s.setAll(En(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):(i=e,s=n,ln(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function mn(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Ze(r.transform,t||null);null!=i&&(null===n&&(n=qt.empty()),n.set(r.field,i))}return n||null}function yn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&M(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof en&&r instanceof en||n instanceof rn&&r instanceof rn?M(n.elements,r.elements,kt):n instanceof on&&r instanceof on?kt(n.Ie,r.Ie):n instanceof tn&&r instanceof tn);var n,r}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}class vn extends dn{getFieldMask(){return null}constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class wn extends dn{getFieldMask(){return this.fieldMask}constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function En(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function bn(t,e,n){const r=new Map;w(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Je(o,a,n[i]))}return r}function _n(t,e,n){const r=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);r.set(a.field,(s=c,o=e,(i=t)instanceof tn?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&_t(e)&&(e=Tt(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):i instanceof en?nn(i,s):i instanceof rn?sn(i,s):function(t,e){const n=Ze(t,e),r=an(n)+an(t.Ie);return Mt(n)&&Mt(t.Ie)?We(r):Qe(t.serializer,r)}(i,s)))}var i,s,o;return r}class Tn extends dn{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class In extends dn{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class Sn{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&gn(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=pn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=pn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=je();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=fn(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(F.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ke())}isEqual(t){return this.batchId===t.batchId&&M(this.mutations,t.mutations,((t,e)=>yn(t,e)))&&M(this.baseMutations,t.baseMutations,((t,e)=>yn(t,e)))}constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}}class Cn{static from(t,e,n){w(t.mutations.length===n.length);let r=$e;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new Cn(t,e,n,r)}constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}}
/**
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
 */class An{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
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
 */
class Dn{constructor(t,e){this.count=t,this.unchangedNames=e}}
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
 */var kn,Nn;function xn(t){switch(t){default:return v();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Ln(t){if(void 0===t)return p("GRPC error has no .code"),b.UNKNOWN;switch(t){case kn.OK:return b.OK;case kn.CANCELLED:return b.CANCELLED;case kn.UNKNOWN:return b.UNKNOWN;case kn.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case kn.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case kn.INTERNAL:return b.INTERNAL;case kn.UNAVAILABLE:return b.UNAVAILABLE;case kn.UNAUTHENTICATED:return b.UNAUTHENTICATED;case kn.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case kn.NOT_FOUND:return b.NOT_FOUND;case kn.ALREADY_EXISTS:return b.ALREADY_EXISTS;case kn.PERMISSION_DENIED:return b.PERMISSION_DENIED;case kn.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case kn.ABORTED:return b.ABORTED;case kn.OUT_OF_RANGE:return b.OUT_OF_RANGE;case kn.UNIMPLEMENTED:return b.UNIMPLEMENTED;case kn.DATA_LOSS:return b.DATA_LOSS;default:return v()}}(Nn=kn||(kn={}))[Nn.OK=0]="OK",Nn[Nn.CANCELLED=1]="CANCELLED",Nn[Nn.UNKNOWN=2]="UNKNOWN",Nn[Nn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Nn[Nn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Nn[Nn.NOT_FOUND=5]="NOT_FOUND",Nn[Nn.ALREADY_EXISTS=6]="ALREADY_EXISTS",Nn[Nn.PERMISSION_DENIED=7]="PERMISSION_DENIED",Nn[Nn.UNAUTHENTICATED=16]="UNAUTHENTICATED",Nn[Nn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Nn[Nn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Nn[Nn.ABORTED=10]="ABORTED",Nn[Nn.OUT_OF_RANGE=11]="OUT_OF_RANGE",Nn[Nn.UNIMPLEMENTED=12]="UNIMPLEMENTED",Nn[Nn.INTERNAL=13]="INTERNAL",Nn[Nn.UNAVAILABLE=14]="UNAVAILABLE",Nn[Nn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
let Rn=null;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */function On(){return new TextEncoder}
/**
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
 */const Mn=new(0,c.Integer)([4294967295,4294967295],0);function Pn(t){const e=On().encode(t),n=new(0,c.Md5);return n.update(e),new Uint8Array(n.digest())}function Fn(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new(0,c.Integer)([n,r],0),new(0,c.Integer)([i,s],0)]}class Vn{de(t,e,n){let r=t.add(e.multiply(c.Integer.fromNumber(n)));return 1===r.compare(Mn)&&(r=new(0,c.Integer)([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=Pn(t),[n,r]=Fn(e);for(let t=0;t<this.hashCount;t++){const e=this.de(n,r,t);if(!this.Ae(e))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new Vn(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.Te)return;const e=Pn(t),[n,r]=Fn(e);for(let t=0;t<this.hashCount;t++){const e=this.de(n,r,t);this.Re(e)}}Re(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Un(`Invalid padding: ${e}`);if(n<0)throw new Un(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new Un(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new Un(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=c.Integer.fromNumber(this.Te)}}class Un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Bn{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,jn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Bn(F.min(),r,new ut(O),Pe(),Ke())}constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class jn{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new jn(n,e,Ke(),Ke(),Ke())}constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
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
 */class qn{constructor(t,e,n,r){this.Ve=t,this.removedTargetIds=e,this.key=n,this.me=r}}class $n{constructor(t,e){this.targetId=t,this.fe=e}}class zn{constructor(t,e,n=yt.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Kn{get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=Ke(),e=Ke(),n=Ke();return this.pe.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}})),new jn(this.ye,this.we,t,e,n)}Fe(){this.Se=!1,this.pe=Qn()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,w(this.ge>=0)}Be(){this.Se=!0,this.we=!0}constructor(){this.ge=0,this.pe=Qn(),this.ye=yt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}}class Hn{$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.Ce(t.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(t.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(e);break;case 3:this.je(e)&&(n.Be(),n.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.Ce(t.resumeToken));break;default:v()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.fe.count,r=this.Ye(e);if(r){const i=r.target;if(ye(i))if(0===n){const t=new q(i.path);this.We(e,t,zt.newNoDocument(t,F.min()))}else w(1===n);else{const r=this.Ze(e);if(r!==n){const n=this.Xe(t),i=n?this.et(n,t,r):1;if(0!==i){this.He(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}null==Rn||Rn.tt(function(t,e,n,r,i){var s,o,a,c,u,h;const l={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},d=e.unchangedNames;return d&&(l.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(h=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==h?h:0,mightContain:t=>{var e;return null!==(e=null==r?void 0:r.mightContain(t))&&void 0!==e&&e}}),l}(r,t.fe,this.Le.nt(),n,i))}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=bt(n).toUint8Array()}catch(t){if(t instanceof pt)return m("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new Vn(s,r,i)}catch(t){return m(t instanceof Un?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.Te?null:o}et(t,e,n){return e.fe.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach((n=>{const i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.We(e,n,null),r++)})),r}it(t){const e=new Map;this.ke.forEach(((n,r)=>{const i=this.Ye(r);if(i){if(n.current&&ye(i.target)){const e=new q(i.target.path);null!==this.qe.get(e)||this.st(r,e)||this.We(r,e,zt.newNoDocument(e,t))}n.De&&(e.set(r,n.ve()),n.Fe())}}));let n=Ke();this.Qe.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.qe.forEach(((e,n)=>n.setReadTime(t)));const r=new Bn(t,e,this.Ke,this.qe,n);return this.qe=Pe(),this.Qe=Gn(),this.Ke=new ut(O),r}Ue(t,e){if(!this.je(t))return;const n=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,n),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const r=this.ze(t);this.st(t,e)?r.Me(e,1):r.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),n&&(this.qe=this.qe.insert(e,n))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Kn,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new dt(O),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||g("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Kn),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}constructor(t){this.Le=t,this.ke=new Map,this.qe=Pe(),this.Qe=Gn(),this.Ke=new ut(O)}}function Gn(){return new ut(q.comparator)}function Qn(){return new ut(q.comparator)}const Wn={asc:"ASCENDING",desc:"DESCENDING"},Xn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yn={and:"AND",or:"OR"};class Jn{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Zn(t,e){return t.useProto3Json||tt(e)?e:{value:e}}function tr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function er(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nr(t,e){return tr(t,e.toTimestamp())}function rr(t){return w(!!t),F.fromTimestamp(function(t){const e=wt(t);return new P(e.seconds,e.nanos)}(t))}function ir(t,e){return(n=t,new U(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function sr(t){const e=U.fromString(t);return w(Ir(e)),e}function or(t,e){return ir(t.databaseId,e.path)}function ar(t,e){const n=sr(e);if(n.get(1)!==t.databaseId.projectId)throw new _(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new _(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(lr(n))}function cr(t,e){return ir(t.databaseId,e)}function ur(t){const e=sr(t);return 4===e.length?U.emptyPath():lr(e)}function hr(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lr(t){return w(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function dr(t,e,n){return{name:or(t,e),fields:n.value.mapValue.fields}}function fr(t,e){let n;if(e instanceof vn)n={update:dr(t,e.key,e.value)};else if(e instanceof Tn)n={delete:or(t,e.key)};else if(e instanceof wn)n={update:dr(t,e.key,e.data),updateMask:Tr(e.fieldMask)};else{if(!(e instanceof In))return v();n={verify:or(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof tn)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof en)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof rn)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof on)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw v()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:nr(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:v())),n;var r,i}function gr(t,e){return{documents:[cr(t,e.path)]}}function pr(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=cr(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=cr(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return _r(Jt.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Er((e=t).field),direction:vr(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Zn(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n;var a}function mr(t){let e=ur(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){w(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=yr(t);return e instanceof Jt&&te(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Qt(br((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,tt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Kt(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Kt(n,e)}(n.endAt)),we(e,i,o,s,a,"F",c,u)}function yr(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=br(t.unaryFilter.field);return Yt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=br(t.unaryFilter.field);return Yt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=br(t.unaryFilter.field);return Yt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=br(t.unaryFilter.field);return Yt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?(n=t,Yt.create(br(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,Jt.create(e.compositeFilter.filters.map((t=>yr(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return v()}}(e.compositeFilter.op))):v();var e,n}function vr(t){return Wn[t]}function wr(t){return Xn[t]}function Er(t){return{fieldPath:t.canonicalString()}}function br(t){return j.fromServerFormat(t.fieldPath)}function _r(t){return t instanceof Yt?function(t){if("=="===t.op){if(Vt(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NAN"}};if(Ft(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Vt(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NOT_NAN"}};if(Ft(t.value))return{unaryFilter:{field:Er(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Er(t.field),op:wr(t.op),value:t.value}}}(t):t instanceof Jt?function(t){const e=t.getFilters().map((t=>_r(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,Yn[n]),filters:e}};var n}(t):v()}function Tr(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ir(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */class Sr{withSequenceNumber(t){return new Sr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}constructor(t,e,n,r,i=F.min(),s=F.min(),o=yt.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}}
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
 */class Cr{constructor(t){this.ut=t}}function Ar(t){const e=mr({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ce(e,e.limit,"L"):e}
/**
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
 */class Dr{ht(t,e){this.Pt(t,e),e.It()}Pt(t,e){if("nullValue"in t)this.Tt(e,5);else if("booleanValue"in t)this.Tt(e,10),e.Et(t.booleanValue?1:0);else if("integerValue"in t)this.Tt(e,15),e.Et(Et(t.integerValue));else if("doubleValue"in t){const n=Et(t.doubleValue);isNaN(n)?this.Tt(e,13):(this.Tt(e,15),et(n)?e.Et(0):e.Et(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Tt(e,20),"string"==typeof n?e.dt(n):(e.dt(`${n.seconds||""}`),e.Et(n.nanos||0))}else if("stringValue"in t)this.At(t.stringValue,e),this.Rt(e);else if("bytesValue"in t)this.Tt(e,30),e.Vt(bt(t.bytesValue)),this.Rt(e);else if("referenceValue"in t)this.ft(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Tt(e,45),e.Et(n.latitude||0),e.Et(n.longitude||0)}else"mapValue"in t?jt(t)?this.Tt(e,Number.MAX_SAFE_INTEGER):(this.gt(t.mapValue,e),this.Rt(e)):"arrayValue"in t?(this.yt(t.arrayValue,e),this.Rt(e)):v()}At(t,e){this.Tt(e,25),this.wt(t,e)}wt(t,e){e.dt(t)}gt(t,e){const n=t.fields||{};this.Tt(e,55);for(const t of Object.keys(n))this.At(t,e),this.Pt(n[t],e)}yt(t,e){const n=t.values||[];this.Tt(e,50);for(const t of n)this.Pt(t,e)}ft(t,e){this.Tt(e,37),q.fromName(t).path.forEach((t=>{this.Tt(e,60),this.wt(t,e)}))}Tt(t,e){t.Et(e)}Rt(t){t.Et(2)}constructor(){}}Dr.St=new Dr;
/**
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
 */
class kr{addToCollectionParentIndex(t,e){return this.on.add(e),Y.resolve()}getCollectionParents(t,e){return Y.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return Y.resolve()}deleteFieldIndex(t,e){return Y.resolve()}deleteAllFieldIndexes(t){return Y.resolve()}createTargetIndexes(t,e){return Y.resolve()}getDocumentsMatchingTarget(t,e){return Y.resolve(null)}getIndexType(t,e){return Y.resolve(0)}getFieldIndexes(t,e){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,e){return Y.resolve(H.min())}getMinOffsetFromCollectionGroup(t,e){return Y.resolve(H.min())}updateCollectionGroup(t,e,n){return Y.resolve()}updateIndexEntries(t,e){return Y.resolve()}constructor(){this.on=new Nr}}class Nr{add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new dt(U.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new dt(U.comparator)).toArray()}constructor(){this.index={}}}
/**
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
 */new Uint8Array(0);class xr{static withCacheSize(t){return new xr(t,xr.DEFAULT_COLLECTION_PERCENTILE,xr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
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
 */
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
 */xr.DEFAULT_COLLECTION_PERCENTILE=10,xr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xr.DEFAULT=new xr(41943040,xr.DEFAULT_COLLECTION_PERCENTILE,xr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xr.DISABLED=new xr(-1,0,0);
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
 */
class Lr{next(){return this.xn+=2,this.xn}static On(){return new Lr(0)}static Nn(){return new Lr(-1)}constructor(t){this.xn=t}}
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
 */
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
 */
class Rr{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,zt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Y.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new Oe((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
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
 */
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
 */
/**
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
 */
class Or{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Mr{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&pn(n.mutation,t,gt.empty(),P.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ke()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ke()){const r=Be();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Ve();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Be();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ke())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Pe();const s=qe(),o=qe();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof wn)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),pn(o.mutation,e,o.mutation.getFieldMask(),P.now())):s.set(e.key,gt.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Or(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=qe();let r=new ut(((t,e)=>t-e)),i=Ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||gt.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Ke()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=je();c.forEach((t=>{if(!i.has(t)){const r=fn(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Y.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return i=e,q.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):_e(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r);var i}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Y.resolve(Be());let o=-1,a=i;return s.next((e=>Y.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Y.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ke()))).next((t=>({batchId:o,changes:Ue(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next((t=>{let e=Ve();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=Ve();return this.indexManager.getCollectionParents(t,i).next((o=>Y.forEach(o,(o=>{const a=(c=e,u=o.child(i),new ve(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,zt.newInvalidDocument(r)))}));let n=Ve();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&pn(s.mutation,r,gt.empty(),P.now()),Ne(e,r)&&(n=n.insert(t,r))})),n}))}constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}}
/**
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
 */class Pr{getBundleMetadata(t,e){return Y.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,{id:(n=e).id,version:n.version,createTime:rr(n.createTime)}),Y.resolve();var n}getNamedQuery(t,e){return Y.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,{name:(n=e).name,query:Ar(n.bundledQuery),readTime:rr(n.readTime)}),Y.resolve();var n}constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}}
/**
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
 */class Fr{getOverlay(t,e){return Y.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Be();return Y.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.lt(t,e,r)})),Y.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.lr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.lr.delete(n)),Y.resolve()}getOverlaysForCollection(t,e,n){const r=Be(),i=e.length+1,s=new q(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Y.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new ut(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Be(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Be(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return Y.resolve(o)}lt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.lr.get(r.largestBatchId).delete(n.key);this.lr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new An(e,n));let i=this.lr.get(e);void 0===i&&(i=Ke(),this.lr.set(e,i)),this.lr.set(e,i.add(n.key))}constructor(){this.overlays=new ut(q.comparator),this.lr=new Map}}
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
 */class Vr{isEmpty(){return this.hr.isEmpty()}addReference(t,e){const n=new Ur(t,e);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.dr(new Ur(t,e))}Ar(t,e){t.forEach((t=>this.removeReference(t,e)))}Rr(t){const e=new q(new U([])),n=new Ur(e,t),r=new Ur(e,t+1),i=[];return this.Ir.forEachInRange([n,r],(t=>{this.dr(t),i.push(t.key)})),i}Vr(){this.hr.forEach((t=>this.dr(t)))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new q(new U([])),n=new Ur(e,t),r=new Ur(e,t+1);let i=Ke();return this.Ir.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Ur(t,0),n=this.hr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.hr=new dt(Ur.Pr),this.Ir=new dt(Ur.Tr)}}class Ur{static Pr(t,e){return q.comparator(t.key,e.key)||O(t.gr,e.gr)}static Tr(t,e){return O(t.gr,e.gr)||q.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.gr=e}}
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
 */class Br{checkEmpty(t){return Y.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Sn(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.yr=this.yr.add(new Ur(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Y.resolve(s)}lookupMutationBatch(t,e){return Y.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Sr(n),i=r<0?0:r;return Y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ur(e,0),r=new Ur(e,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([n,r],(t=>{const e=this.wr(t.gr);i.push(e)})),Y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new dt(O);return e.forEach((t=>{const e=new Ur(t,0),r=new Ur(t,Number.POSITIVE_INFINITY);this.yr.forEachInRange([e,r],(t=>{n=n.add(t.gr)}))})),Y.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;q.isDocumentKey(i)||(i=i.child(""));const s=new Ur(new q(i),0);let o=new dt(O);return this.yr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.gr)),!0)}),s),Y.resolve(this.br(o))}br(t){const e=[];return t.forEach((t=>{const n=this.wr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){w(0===this.Dr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return Y.forEach(e.mutations,(r=>{const i=new Ur(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.yr=n}))}Fn(t){}containsKey(t,e){const n=new Ur(e,0),r=this.yr.firstAfterOrEqual(n);return Y.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new dt(Ur.Pr)}}
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
 */class jr{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Cr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Y.resolve(n?n.document.mutableCopy():zt.newInvalidDocument(e))}getEntries(t,e){let n=Pe();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():zt.newInvalidDocument(t))})),Y.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Pe();const s=e.path,o=new q(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||G(K(o),n)<=0||(r.has(o.key)||Ne(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Y.resolve(i)}getAllFromCollectionGroup(t,e,n,r){v()}vr(t,e){return Y.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new qr(this)}getSize(t){return Y.resolve(this.size)}constructor(t){this.Cr=t,this.docs=new ut(q.comparator),this.size=0}}class qr extends Rr{applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this._r.addEntry(t,r)):this._r.removeEntry(n)})),Y.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}constructor(t){super(),this._r=t}}
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
 */class $r{forEachTarget(t,e){return this.Fr.forEach(((t,n)=>e(n))),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Mr&&(this.Mr=e),Y.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new Lr(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,Y.resolve()}updateTargetData(t,e){return this.kn(e),Y.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Fr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Y.waitFor(i).next((()=>r))}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fr.get(e)||null;return Y.resolve(n)}addMatchingKeys(t,e,n){return this.Or.Er(e,n),Y.resolve()}removeMatchingKeys(t,e,n){this.Or.Ar(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Y.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),Y.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Or.mr(e);return Y.resolve(n)}containsKey(t,e){return Y.resolve(this.Or.containsKey(e))}constructor(t){this.persistence=t,this.Fr=new Oe((t=>pe(t)),me),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Vr,this.targetCount=0,this.Nr=Lr.On()}}
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
 */class zr{start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Fr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new Br(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,n){g("MemoryPersistence","Starting transaction:",t);const r=new Kr(this.Lr.next());return this.referenceDelegate.$r(),n(r).next((t=>this.referenceDelegate.Ur(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Wr(t,e){return Y.or(Object.values(this.Br).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Br={},this.overlays={},this.Lr=new Z(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new $r(this),this.indexManager=new kr,this.remoteDocumentCache=new jr((t=>this.referenceDelegate.Qr(t))),this.serializer=new Cr(e),this.Kr=new Pr(this.serializer)}}class Kr extends W{constructor(t){super(),this.currentSequenceNumber=t}}class Hr{static jr(t){return new Hr(t)}get Hr(){if(this.zr)return this.zr;throw v()}addReference(t,e,n){return this.Gr.addReference(n,e),this.Hr.delete(n.toString()),Y.resolve()}removeReference(t,e,n){return this.Gr.removeReference(n,e),this.Hr.add(n.toString()),Y.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),Y.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach((t=>this.Hr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Hr,(n=>{const r=q.fromPath(n);return this.Jr(t,r).next((t=>{t||e.removeEntry(r,F.min())}))})).next((()=>(this.zr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Jr(t,e).next((t=>{t?this.Hr.delete(e.toString()):this.Hr.add(e.toString())}))}Qr(t){return 0}Jr(t,e){return Y.or([()=>Y.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}constructor(t){this.persistence=t,this.Gr=new Vr,this.zr=null}}
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
 */
class Gr{static Qi(t,e){let n=Ke(),r=Ke();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Gr(t,e.fromCache,n,r)}constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.ki=n,this.qi=r}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Qr{get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}constructor(){this._documentReadCount=0}}
/**
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
 */class Wr{initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.zi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.ji(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new Qr;return this.Hi(t,e,n).next((r=>{if(i.result=r,this.$i)return this.Ji(t,e,n,r.size)}))})).next((()=>i.result))}Ji(t,e,n,r){return n.documentReadCount<this.Ui?(f()<=o.LogLevel.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),Y.resolve()):(f()<=o.LogLevel.DEBUG&&g("QueryEngine","Query:",ke(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Wi*r?(f()<=o.LogLevel.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ie(e))):Y.resolve())}zi(t,e){if(be(e))return Y.resolve(null);let n=Ie(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Ce(e,null,"F"),n=Ie(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Ke(...r);return this.Gi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Yi(e,r);return this.Zi(e,s,i,n.readTime)?this.zi(t,Ce(e,null,"F")):this.Xi(t,s,e,n)}))))})))))}ji(t,e,n,r){return be(e)||r.isEqual(F.min())?Y.resolve(null):this.Gi.getDocuments(t,n).next((i=>{const s=this.Yi(e,i);return this.Zi(e,s,n,r)?Y.resolve(null):(f()<=o.LogLevel.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ke(e)),this.Xi(t,s,e,z(r,-1)).next((t=>t)))}))}Yi(t,e){let n=new dt(Le(t));return e.forEach(((e,r)=>{Ne(t,r)&&(n=n.add(r))})),n}Zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Hi(t,e,n){return f()<=o.LogLevel.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",ke(e)),this.Gi.getDocumentsMatchingQuery(t,e,H.min(),n)}Xi(t,e,n,r){return this.Gi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}}
/**
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
 */class Xr{os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Mr(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ts)))}constructor(t,e,n,r){this.persistence=t,this.es=e,this.serializer=r,this.ts=new ut(O),this.ns=new Oe((t=>pe(t)),me),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(n)}}function Yr(t,e,n,r){return new Xr(t,e,n,r)}async function Jr(t,e){const n=E(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.os(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Ke();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({_s:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Zr(t){const e=E(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qr.getLastRemoteSnapshotVersion(t)))}function ti(t,e,n){let r=Ke(),i=Ke();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=Pe();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(F.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):g("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{us:r,cs:i}}))}function ei(t,e){const n=E(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function ni(t,e){const n=E(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.qr.getTargetData(t,e).next((i=>i?(r=i,Y.resolve(r)):n.qr.allocateTargetId(t).next((i=>(r=new Sr(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.qr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.ts.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ts=n.ts.insert(t.targetId,t),n.ns.set(e,t.targetId)),t}))}async function ri(t,e,n){const r=E(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!J(t))throw t;g("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function ii(t,e,n){const r=E(t);let i=F.min(),s=Ke();return r.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const r=E(t),i=r.ns.get(n);return void 0!==i?Y.resolve(r.ts.get(i)):r.qr.getTargetData(e,n)}(r,t,Ie(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.es.getDocumentsMatchingQuery(t,e,n?i:F.min(),n?s:Ke()))).next((t=>(si(r,xe(e),t),{documents:t,ls:s})))))}function si(t,e,n){let r=t.rs.get(e)||F.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.rs.set(e,r)}class oi{ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=Ge()}}class ai{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,n){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new oi,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.eo=new oi,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
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
 */class ci{ro(t){}shutdown(){}}
/**
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
 */class ui{ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */let hi=null;function li(){return null===hi?hi=268435456+Math.round(2147483648*Math.random()):hi++,"0x"+hi.toString(16)
/**
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
 */}const di={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class fi{ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}constructor(t){this.co=t.co,this.lo=t.lo}}
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
 */const gi="WebChannelConnection";class pi extends class{get yo(){return!1}wo(t,e,n,r,i){const s=li(),o=this.So(t,e);g("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(a,r,i),this.Do(t,o,a,n).then((e=>(g("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw m("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Co(t,e,n,r,i,s){return this.wo(t,e,n,r,i)}bo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}So(t,e){const n=di[t];return`${this.mo}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=e+"://"+t.host,this.fo=`projects/${n}/databases/${r}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}}{Do(t,e,n,r){const i=li();return new Promise(((s,o)=>{const a=new(0,c.XhrIo);a.setWithCredentials(!0),a.listenOnce(c.EventType.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case c.ErrorCode.NO_ERROR:const e=a.getResponseJson();g(gi,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case c.ErrorCode.TIMEOUT:g(gi,`RPC '${t}' ${i} timed out`),o(new _(b.DEADLINE_EXCEEDED,"Request time out"));break;case c.ErrorCode.HTTP_ERROR:const n=a.getStatus();if(g(gi,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(e.status);o(new _(t,e.message))}else o(new _(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new _(b.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{g(gi,`RPC '${t}' ${i} completed.`)}}));const u=JSON.stringify(r);g(gi,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",u,n,15)}))}vo(t,e,n){const r=li(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=(0,c.createWebChannelTransport)(),o=(0,c.getStatEventTarget)(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.bo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const h=i.join("");g(gi,`Creating RPC '${t}' stream ${r}: ${h}`,a);const l=s.createWebChannel(h,a);let d=!1,f=!1;const p=new fi({co:e=>{f?g(gi,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(d||(g(gi,`Opening RPC '${t}' stream ${r} transport.`),l.open(),d=!0),g(gi,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},lo:()=>l.close()}),y=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return y(l,c.WebChannel.EventType.OPEN,(()=>{f||g(gi,`RPC '${t}' stream ${r} transport opened.`)})),y(l,c.WebChannel.EventType.CLOSE,(()=>{f||(f=!0,g(gi,`RPC '${t}' stream ${r} transport closed`),p.Ro())})),y(l,c.WebChannel.EventType.ERROR,(e=>{f||(f=!0,m(gi,`RPC '${t}' stream ${r} transport errored:`,e),p.Ro(new _(b.UNAVAILABLE,"The operation could not be completed")))})),y(l,c.WebChannel.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];w(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){g(gi,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=kn[t];if(void 0!==e)return Ln(e)}(e),i=o.message;void 0===n&&(n=b.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),f=!0,p.Ro(new _(n,i)),l.close()}else g(gi,`RPC '${t}' stream ${r} received:`,i),p.Vo(i)}})),y(o,c.Event.STAT_EVENT,(e=>{e.stat===c.Stat.PROXY?g(gi,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===c.Stat.NOPROXY&&g(gi,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{p.Ao()}),0),p}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}}
/**
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
 */
/**
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
 */function mi(){return"undefined"!=typeof document?document:null}
/**
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
 */function yi(t){return new Jn(t,!0)}
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
 */class vi{reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),r=Math.max(0,e-n);r>0&&g("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,r,(()=>(this.Bo=Date.now(),t()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}constructor(t,e,n=1e3,r=1.5,i=6e4){this.si=t,this.timerId=e,this.Fo=n,this.Mo=r,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}}
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
 */class wi{jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==t?this.zo.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===b.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Uo===e&&this.s_(t,n)}),(e=>{t((()=>{const t=new _(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.o_(t)}))}))}s_(t,e){const n=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho((()=>{n((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((t=>{n((()=>this.o_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(t){return g("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget((()=>this.Uo===t?e():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,r,i,s,o,a){this.si=t,this.Ko=n,this.$o=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new vi(t,e)}}class Ei extends wi{__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:v(),s=e.targetChange.targetIds||[],o=function(t,e){return t.useProto3Json?(w(void 0===e||"string"==typeof e),yt.fromBase64String(e||"")):(w(void 0===e||e instanceof Uint8Array),yt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?b.UNKNOWN:Ln(t.code);return new _(e,t.message||"")}(a);n=new zn(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ar(t,r.document.name),s=rr(r.document.updateTime),o=r.document.createTime?rr(r.document.createTime):F.min(),a=new qt({mapValue:{fields:r.document.fields}}),c=zt.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new qn(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ar(t,r.document),s=r.readTime?rr(r.readTime):F.min(),o=zt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new qn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ar(t,r.document),s=r.removedTargetIds||[];n=new qn([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Dn(r,i),o=t.targetId;n=new $n(o,s)}}var r;return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return F.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?F.min():e.readTime?rr(e.readTime):F.min()}(t);return this.listener.a_(e,n)}u_(t){const e={};e.database=hr(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=ye(r)?{documents:gr(t,r)}:{query:pr(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=er(t,e.resumeToken);const r=Zn(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(F.min())>0){n.readTime=tr(t,e.snapshotVersion.toTimestamp());const r=Zn(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.e_(e)}c_(t){const e={};e.database=hr(this.serializer),e.removeTarget=t,this.e_(e)}constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}}class bi extends wi{get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(w(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const r=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(w(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?rr(t.updateTime):rr(e);return n.isEqual(F.min())&&(n=rr(e)),new un(n,t.transformResults||[])}(t,n)))):[]),i=rr(t.commitTime);return this.listener.I_(i,r)}var e,n;return w(!t.writeResults||0===t.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=hr(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>fr(this.serializer,t)))};this.e_(e)}constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i,this.l_=!1}}
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
 */class _i extends class{}{A_(){if(this.d_)throw new _(b.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.wo(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _(b.UNKNOWN,t.toString())}))}Co(t,e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Co(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new _(b.UNKNOWN,t.toString())}))}terminate(){this.d_=!0}constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.d_=!1}}class Ti{g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(t){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,"Online"===t&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(p(e),this.f_=!1):g("OnlineStateTracker",e)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}}
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
 */class Ii{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro((t=>{n.enqueueAndForget((async()=>{Ri(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=E(t);e.C_.add(4),await Ci(e),e.M_.set("Unknown"),e.C_.delete(4),await Si(e)}(this))}))})),this.M_=new Ti(n,r)}}async function Si(t){if(Ri(t))for(const e of t.v_)await e(!0)}async function Ci(t){for(const e of t.v_)await e(!1)}function Ai(t,e){const n=E(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Li(n)?xi(n):Yi(n).Ho()&&ki(n,e))}function Di(t,e){const n=E(t),r=Yi(n);n.D_.delete(e),r.Ho()&&Ni(n,e),0===n.D_.size&&(r.Ho()?r.Zo():Ri(n)&&n.M_.set("Unknown"))}function ki(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Yi(t).u_(e)}function Ni(t,e){t.x_.Oe(e),Yi(t).c_(e)}function xi(t){t.x_=new Hn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Yi(t).start(),t.M_.g_()}function Li(t){return Ri(t)&&!Yi(t).jo()&&t.D_.size>0}function Ri(t){return 0===E(t).C_.size}function Oi(t){t.x_=void 0}async function Mi(t){t.D_.forEach(((e,n)=>{ki(t,e)}))}async function Pi(t,e){Oi(t),Li(t)?(t.M_.w_(e),xi(t)):t.M_.set("Unknown")}async function Fi(t,e,n){if(t.M_.set("Online"),e instanceof zn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.D_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.D_.delete(r),t.x_.removeTarget(r))}(t,e)}catch(n){g("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Vi(t,n)}else if(e instanceof qn?t.x_.$e(e):e instanceof $n?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(F.min()))try{const e=await Zr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.x_.it(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.D_.get(r);i&&t.D_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.D_.get(e);if(!r)return;t.D_.set(e,r.withResumeToken(yt.EMPTY_BYTE_STRING,r.snapshotVersion)),Ni(t,e);const i=new Sr(r.target,e,n,r.sequenceNumber);ki(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){g("RemoteStore","Failed to raise snapshot:",e),await Vi(t,e)}}async function Vi(t,e,n){if(!J(e))throw e;t.C_.add(1),await Ci(t),t.M_.set("Offline"),n||(n=()=>Zr(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Si(t)}))}function Ui(t,e){return e().catch((n=>Vi(t,n,e)))}async function Bi(t){const e=E(t),n=Ji(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;ji(e);)try{const t=await ei(e.localStore,r);if(null===t){0===e.b_.length&&n.Zo();break}r=t.batchId,qi(e,t)}catch(t){await Vi(e,t)}$i(e)&&zi(e)}function ji(t){return Ri(t)&&t.b_.length<10}function qi(t,e){t.b_.push(e);const n=Ji(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function $i(t){return Ri(t)&&!Ji(t).jo()&&t.b_.length>0}function zi(t){Ji(t).start()}async function Ki(t){Ji(t).E_()}async function Hi(t){const e=Ji(t);for(const n of t.b_)e.P_(n.mutations)}async function Gi(t,e,n){const r=t.b_.shift(),i=Cn.from(r,e,n);await Ui(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Bi(t)}async function Qi(t,e){e&&Ji(t).h_&&await async function(t,e){if(xn(n=e.code)&&n!==b.ABORTED){const n=t.b_.shift();Ji(t).Yo(),await Ui(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Bi(t)}var n}(t,e),$i(t)&&zi(t)}async function Wi(t,e){const n=E(t);n.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const r=Ri(n);n.C_.add(3),await Ci(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Si(n)}async function Xi(t,e){const n=E(t);e?(n.C_.delete(2),await Si(n)):e||(n.C_.add(2),await Ci(n),n.M_.set("Unknown"))}function Yi(t){return t.O_||(t.O_=function(t,e,n){const r=E(t);return r.A_(),new Ei(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{ho:Mi.bind(null,t),Io:Pi.bind(null,t),a_:Fi.bind(null,t)}),t.v_.push((async e=>{e?(t.O_.Yo(),Li(t)?xi(t):t.M_.set("Unknown")):(await t.O_.stop(),Oi(t))}))),t.O_}function Ji(t){return t.N_||(t.N_=function(t,e,n){const r=E(t);return r.A_(),new bi(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{ho:Ki.bind(null,t),Io:Qi.bind(null,t),T_:Hi.bind(null,t),I_:Gi.bind(null,t)}),t.v_.push((async e=>{e?(t.N_.Yo(),await Bi(t)):(await t.N_.stop(),t.b_.length>0&&(g("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))}))),t.N_
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
 */}class Zi{get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Zi(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new _(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function ts(t,e){if(p("AsyncQueue",`${e}: ${t}`),J(t))return new _(b.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class es{static emptySet(t){return new es(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof es))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new es;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||q.comparator(e.key,n.key):(t,e)=>q.comparator(t.key,e.key),this.keyedMap=Ve(),this.sortedSet=new ut(this.comparator)}}
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
 */class ns{track(t){const e=t.doc.key,n=this.B_.get(e);n?0!==t.type&&3===n.type?this.B_=this.B_.insert(e,t):3===t.type&&1!==n.type?this.B_=this.B_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.B_=this.B_.remove(e):1===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):v():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.B_=new ut(q.comparator)}}class rs{static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new rs(t,e,es.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ae(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
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
 */class is{constructor(){this.k_=void 0,this.listeners=[]}}class ss{constructor(){this.queries=new Oe((t=>De(t)),Ae),this.onlineState="Unknown",this.q_=new Set}}async function os(t,e){const n=E(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new is),i)try{s.k_=await n.onListen(r)}catch(t){const n=ts(t,`Initialization of query '${ke(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&hs(n)}async function as(t,e){const n=E(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function cs(t,e){const n=E(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.K_(t)&&(r=!0);i.k_=t}}r&&hs(n)}function us(t,e,n){const r=E(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function hs(t){t.q_.forEach((t=>{t.next()}))}class ls{K_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new rs(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.J_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}H_(t){t=rs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}constructor(t,e,n){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=n||{}}}
/**
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
 */
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
 */
class ds{constructor(t){this.key=t}}class fs{constructor(t){this.key=t}}class gs{get ua(){return this.ia}ca(t,e){const n=e?e.la:new ns,r=e?e.aa:this.aa;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),h=Ne(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.ha(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this._a(h,a)>0||c&&this._a(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{aa:s,la:n,Zi:o,mutatedKeys:i}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}(t.type,e.type)||this._a(t.doc,e.doc))),this.Pa(n),r=null!=r&&r;const o=e&&!r?this.Ia():[],a=0===this.oa.size&&this.current&&!r?1:0,c=a!==this.sa;return this.sa=a,0!==s.length||c?{snapshot:new rs(this.query,t.aa,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({aa:this.aa,la:new ns,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach((t=>this.ia=this.ia.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.ia=this.ia.delete(t))),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=Ke(),this.aa.forEach((t=>{this.Ea(t.key)&&(this.oa=this.oa.add(t.key))}));const e=[];return t.forEach((t=>{this.oa.has(t)||e.push(new fs(t))})),this.oa.forEach((n=>{t.has(n)||e.push(new ds(n))})),e}da(t){this.ia=t.ls,this.oa=Ke();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return rs.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Ke(),this.mutatedKeys=Ke(),this._a=Le(t),this.aa=new es(this._a)}}class ps{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ms{constructor(t){this.key=t,this.Ra=!1}}class ys{get isPrimaryClient(){return!0===this.Ca}constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new Oe((t=>De(t)),Ae),this.fa=new Map,this.ga=new Set,this.pa=new ut(q.comparator),this.ya=new Map,this.wa=new Vr,this.Sa={},this.ba=new Map,this.Da=Lr.Nn(),this.onlineState="Unknown",this.Ca=void 0}}async function vs(t,e){const n=Ps(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const t=await ni(n.localStore,Ie(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await ws(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&Ai(n.remoteStore,t)}return i}async function ws(t,e,n,r,i){t.va=(e,n,r)=>async function(t,e,n,r){let i=e.view.ca(n);i.Zi&&(i=await ii(t.localStore,e.query,!1).then((({documents:t})=>e.view.ca(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return Ns(t,e.targetId,a.Ta),a.snapshot}(t,e,n,r);const s=await ii(t.localStore,e,!0),o=new gs(e,s.ls),a=o.ca(s.documents),c=jn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);Ns(t,n,u.Ta);const h=new ps(e,n,o);return t.ma.set(e,h),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function Es(t,e){const n=E(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter((t=>!Ae(t,e)))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ri(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Di(n.remoteStore,r.targetId),Ds(n,r.targetId)})).catch(X)):(Ds(n,r.targetId),await ri(n.localStore,r.targetId,!0))}async function bs(t,e){const n=E(t);try{const t=await function(t,e){const n=E(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.qr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.qr.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);var h,l,d;null!==e.targetMismatches.get(a)?u=u.withResumeToken(yt.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),l=u,d=s,(0===(h=c).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.qr.updateTargetData(t,u))}));let a=Pe(),c=Ke();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(ti(t,s,e.documentUpdates).next((t=>{a=t.us,c=t.cs}))),!r.isEqual(F.min())){const e=n.qr.getLastRemoteSnapshotVersion(t).next((e=>n.qr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Y.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.ts=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ya.get(e);r&&(w(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Ra=!0:t.modifiedDocuments.size>0?w(r.Ra):t.removedDocuments.size>0&&(w(r.Ra),r.Ra=!1))})),await Rs(n,t,e)}catch(t){await X(t)}}function _s(t,e,n){const r=E(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.ma.forEach(((n,r)=>{const i=r.view.Q_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=E(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Q_(e)&&(r=!0)})),r&&hs(n)}(r.eventManager,e),t.length&&r.Va.a_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ts(t,e,n){const r=E(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let t=new ut(q.comparator);t=t.insert(s,zt.newNoDocument(s,F.min()));const n=Ke().add(s),i=new Bn(F.min(),new Map,new ut(O),t,n);await bs(r,i),r.pa=r.pa.remove(s),r.ya.delete(e),Ls(r)}else await ri(r.localStore,e,!1).then((()=>Ds(r,e,n))).catch(X)}async function Is(t,e){const n=E(t),r=e.batch.batchId;try{const t=await function(t,e){const n=E(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Y.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);w(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ke();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);As(n,r,null),Cs(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rs(n,t)}catch(t){await X(t)}}async function Ss(t,e,n){const r=E(t);try{const t=await function(t,e){const n=E(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(w(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);As(r,e,n),Cs(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Rs(r,t)}catch(t){await X(t)}}function Cs(t,e){(t.ba.get(e)||[]).forEach((t=>{t.resolve()})),t.ba.delete(e)}function As(t,e,n){const r=E(t);let i=r.Sa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Ds(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach((e=>{t.wa.containsKey(e)||ks(t,e)}))}function ks(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);null!==n&&(Di(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Ls(t))}function Ns(t,e,n){for(const r of n)r instanceof ds?(t.wa.addReference(r.key,e),xs(t,r)):r instanceof fs?(g("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||ks(t,r.key)):v()}function xs(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(g("SyncEngine","New document in limbo: "+n),t.ga.add(r),Ls(t))}function Ls(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new q(U.fromString(e)),r=t.Da.next();t.ya.set(r,new ms(n)),t.pa=t.pa.insert(n,r),Ai(t.remoteStore,new Sr(Ie(Ee(n.path)),r,"TargetPurposeLimboResolution",Z._e))}}async function Rs(t,e,n){const r=E(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach(((t,a)=>{o.push(r.va(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Gr.Qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Va.a_(i),await async function(t,e){const n=E(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Y.forEach(e,(e=>Y.forEach(e.ki,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Y.forEach(e.qi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!J(t))throw t;g("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ts.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ts=n.ts.insert(e,i)}}}(r.localStore,s))}async function Os(t,e){const n=E(t);if(!n.currentUser.isEqual(e)){g("SyncEngine","User change. New user:",e.toKey());const t=await Jr(n.localStore,e);n.currentUser=e,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ba.forEach((t=>{t.forEach((t=>{t.reject(new _(b.CANCELLED,i))}))})),r.ba.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Rs(n,t._s)}var r,i}function Ms(t,e){const n=E(t),r=n.ya.get(e);if(r&&r.Ra)return Ke().add(r.key);{let t=Ke();const r=n.fa.get(e);if(!r)return t;for(const e of r){const r=n.ma.get(e);t=t.unionWith(r.view.ua)}return t}}function Ps(t){const e=E(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bs.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ms.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ts.bind(null,e),e.Va.a_=cs.bind(null,e.eventManager),e.Va.Fa=us.bind(null,e.eventManager),e}function Fs(t){const e=E(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Is.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ss.bind(null,e),e}class Vs{async initialize(t){this.serializer=yi(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Yr(this.persistence,new Wr,t.initialUser,this.serializer)}createPersistence(t){return new zr(Hr.jr,this.serializer)}createSharedClientState(t){return new ai}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Us{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>_s(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Os.bind(null,this.syncEngine),await Xi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ss}createDatastore(t){const e=yi(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new pi(r));var r;return function(t,e,n,r){return new _i(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>_s(this.syncEngine,t,0),s=ui.D()?new ui:new ci,new Ii(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ys(t,e,n,r,i,s);return o&&(a.Ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=E(t);g("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await Ci(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */
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
 */
class Bs{next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):p("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
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
 */
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
 */
class js{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ts(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=h.UNAUTHENTICATED,this.clientId=R.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{g("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(g("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function qs(t,e){t.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Jr(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function $s(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ks(t);g("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Wi(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Wi(e.remoteStore,n))),t._onlineComponents=e}function zs(t){return"FirebaseError"===t.name?t.code===b.FAILED_PRECONDITION||t.code===b.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Ks(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await qs(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!zs(n))throw n;m("Error using user provided cache. Falling back to memory cache: "+n),await qs(t,new Vs)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await qs(t,new Vs);return t._offlineComponents}async function Hs(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await $s(t,t._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await $s(t,new Us))),t._onlineComponents}function Gs(t){return Hs(t).then((t=>t.syncEngine))}async function Qs(t){const e=await Hs(t),n=e.eventManager;return n.onListen=vs.bind(null,e.syncEngine),n.onUnlisten=Es.bind(null,e.syncEngine),n}function Ws(t,e,n={}){const r=new T;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Bs({next:s=>{e.enqueueAndForget((()=>as(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new _(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new _(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new ls(Ee(n.path),s,{includeMetadataChanges:!0,J_:!0});return os(t,o)}(await Qs(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */
function Xs(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const Ys=new Map;
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
 */function Js(t,e,n){if(!n)throw new _(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Zs(t){if(!q.isDocumentKey(t))throw new _(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function to(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":v()}function eo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=to(t);throw new _(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
class no{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var e,n}constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new _(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new _(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new _(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xs(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new _(b.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new _(b.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new _(b.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}}class ro{get app(){if(!this._app)throw new _(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new _(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new no(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new S;switch(t.type){case"firstParty":return new k(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new _(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ys.get(t);e&&(g("ComponentProvider","Removing Datastore"),Ys.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new no({}),this._settingsFrozen=!1}}
/**
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
 */
class io{withConverter(t){return new io(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class so{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oo(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new so(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class oo extends io{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new so(this.firestore,null,new q(t))}withConverter(t){return new oo(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,Ee(n)),this._path=n,this.type="collection"}}function ao(t,e,...n){if(t=(0,a.getModularInstance)(t),1===arguments.length&&(e=R.newId()),Js("doc","path",e),t instanceof ro){const r=U.fromString(e,...n);return Zs(r),new so(t,null,new q(r))}{if(!(t instanceof so||t instanceof oo))throw new _(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(U.fromString(e,...n));return Zs(r),new so(t.firestore,t instanceof oo?t.converter:null,new q(r))}}
/**
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
 */
class co{get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=mi();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise((()=>{}));const e=new T;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ya.push(t),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!J(t))throw t;g("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(t){const e=this.Ja.then((()=>(this.tu=!0,t().catch((t=>{this.eu=t,this.tu=!1;throw p("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.tu=!1,t))))));return this.Ja=e,e}enqueueAfterDelay(t,e,n){this.su(),this.ru.indexOf(t)>-1&&(e=0);const r=Zi.createAndSchedule(this,t,e,n,(t=>this.au(t)));return this.Xa.push(r),r}su(){this.eu&&v()}verifyOperationInProgress(){}async uu(){let t;do{t=this.Ja,await t}while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then((()=>{this.Xa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Xa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.uu()}))}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new vi(this,"async_queue_retry"),this.iu=()=>{const t=mi();t&&g("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const t=mi();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.iu)}}class uo extends ro{_terminate(){return this._firestoreClient||fo(this),this._firestoreClient.terminate()}constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new co,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function ho(t,e){const n="object"==typeof t?t:(0,r.getApp)(),i="string"==typeof t?t:e||"(default)",s=(0,r._getProvider)(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const t=(0,a.getDefaultEmulatorHostnameAndPort)("firestore");t&&function(t,e,n,r={}){var i;const s=(t=eo(t,ro))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&m("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=h.MOCK_USER;else{e=(0,a.createMockUserToken)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new _(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new h(s)}t._authCredentials=new C(new I(e,n))}}(s,...t)}return s}function lo(t){return t._firestoreClient||fo(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function fo(t){var e,n,r;const i=t._freezeSettings(),s=(o=t._databaseId,a=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",c=t._persistenceKey,new St(o,a,c,(u=i).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Xs(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,c,u;t._firestoreClient=new js(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
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
 */
class go{static fromBase64String(t){try{return new go(yt.fromBase64String(t))}catch(t){throw new _(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new go(yt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
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
 */class po{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new _(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(t)}}
/**
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
 */
class mo{constructor(t){this._methodName=t}}
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
 */class yo{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return O(this._lat,t._lat)||O(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new _(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new _(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
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
 */const vo=/^__.*__$/;class wo{toMutation(t,e){return null!==this.fieldMask?new wn(t,this.data,this.fieldMask,e,this.fieldTransforms):new vn(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Eo(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class bo{get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new bo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Au(t),r}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.Tu({path:n,du:!1});return r.Pu(),r}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Lo(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(0===t.length)throw this.mu("Document fields must not be empty");if(Eo(this.Iu)&&vo.test(t))throw this.mu('Document fields cannot begin and end with "__"')}constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class _o{pu(t,e,n,r=!1){return new bo({Iu:t,methodName:e,gu:n,path:j.emptyPath(),du:!1,fu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||yi(t)}}function To(t){const e=t._freezeSettings(),n=yi(t._databaseId);return new _o(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Io(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Do("Data must be an object, but it was:",o,r);const a=Co(r,o);let c,u;if(s.merge)c=new gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=ko(e,r,n);if(!o.contains(i))throw new _(b.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ro(t,i)||t.push(i)}c=new gt(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new wo(new qt(a),c,u)}function So(t,e){if(Ao(t=(0,a.getModularInstance)(t)))return Do("Unsupported field value:",e,t),Co(t,e);if(t instanceof mo)return function(t,e){if(!Eo(e.Iu))throw e.mu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.mu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&4!==e.Iu)throw e.mu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=So(i,e.Vu(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Xe(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=P.fromDate(t);return{timestampValue:tr(e.serializer,n)}}if(t instanceof P){const n=new P(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:tr(e.serializer,n)}}if(t instanceof yo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof go)return{bytesValue:er(e.serializer,t._byteString)};if(t instanceof so){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.mu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ir(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.mu(`Unsupported field value: ${to(t)}`)}(t,e)}function Co(t,e){const n={};return ct(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):at(t,((t,r)=>{const i=So(r,e.Eu(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Ao(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof P||t instanceof yo||t instanceof go||t instanceof so||t instanceof mo)}function Do(t,e,n){if(!Ao(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=to(n);throw"an object"===r?e.mu(t+" a custom object"):e.mu(t+" "+r)}var r}function ko(t,e,n){if((e=(0,a.getModularInstance)(e))instanceof po)return e._internalPath;if("string"==typeof e)return xo(t,e);throw Lo("Field path arguments must be of type string or ",t,!1,void 0,n)}const No=new RegExp("[~\\*/\\[\\]]");function xo(t,e,n){if(e.search(No)>=0)throw Lo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new po(...e.split("."))._internalPath}catch(r){throw Lo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new _(b.INVALID_ARGUMENT,a+t+c)}function Ro(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */class Oo{get id(){return this._key.path.lastSegment()}get ref(){return new so(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Mo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Po("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}}class Mo extends Oo{data(){return super.data()}}function Po(t,e){return"string"==typeof e?xo(t,e):e instanceof po?e._internalPath:e._delegate._internalPath}
/**
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
 */class Fo{convertValue(t,e="none"){switch(Dt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return at(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new yo(Et(t.latitude),Et(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Tt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(It(t));default:return null}}convertTimestamp(t){const e=wt(t);return new P(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=U.fromString(t);w(Ir(n));const r=new Ct(n.get(1),n.get(3)),i=new q(n.popFirst(5));return r.isEqual(e)||p(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
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
 */function Vo(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
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
 */
class Uo{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class Bo extends Oo{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Po("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}}class jo extends Bo{data(t={}){return super.data(t)}}
/**
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
 */
function qo(t){t=eo(t,so);const e=eo(t.firestore,uo);return Ws(lo(e),t._key).then((n=>Ho(e,t,n)))}class $o extends Fo{convertBytes(t){return new go(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new so(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function zo(t,e,n){t=eo(t,so);const r=eo(t.firestore,uo),i=Vo(t.converter,e,n);return Ko(r,[Io(To(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,hn.none())])}function Ko(t,e){return function(t,e){const n=new T;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const r=Fs(t);try{const t=await function(t,e){const n=E(t),r=P.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ke());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Pe(),c=Ke();return n.ss.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=mn(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new wn(t.key,e,$t(e.value.mapValue),hn.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Ue(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Sa[t.currentUser.toKey()];r||(r=new ut(O)),r=r.insert(e,n),t.Sa[t.currentUser.toKey()]=r}(r,t.batchId,n),await Rs(r,t.changes),await Bi(r.remoteStore)}catch(t){const e=ts(t,"Failed to persist write");n.reject(e)}}(await Gs(t),e,n))),n.promise}(lo(t),e)}function Ho(t,e,n){const r=n.docs.get(e._key),i=new $o(t);return new Bo(t,i,e._key,r,new Uo(n.hasPendingWrites,n.fromCache),e.converter)}
/**
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
 */new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
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
 */!function(t,e=!0){var n;n=r.SDK_VERSION,l=n,(0,r._registerComponent)(new(0,s.Component)("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new uo(new A(t.getProvider("auth-internal")),new x(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new _(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ct(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(u,"4.4.0",t),(0,r.registerVersion)(u,"4.4.0","esm2017")}()})),i.register("ix4Jr",(function(e,n){t(e.exports,"_registerComponent",(function(){return y})),t(e.exports,"_getProvider",(function(){return v})),t(e.exports,"_removeServiceInstance",(function(){return w})),t(e.exports,"SDK_VERSION",(function(){return T})),t(e.exports,"initializeApp",(function(){return I})),t(e.exports,"getApp",(function(){return S})),t(e.exports,"registerVersion",(function(){return C}));var r=i("4a6xH"),s=i("7vF8m"),o=i("ffjl9"),a=i("cCiiD");o=i("ffjl9");
/**
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
 */
class c{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const u="@firebase/app",h="0.9.25",l=new(0,s.Logger)("@firebase/app"),d="[DEFAULT]",f={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},g=new Map,p=new Map;function m(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function y(t){const e=t.name;if(p.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;p.set(e,t);for(const e of g.values())m(e,t);return!0}function v(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function w(t,e,n="[DEFAULT]"){v(t,e).clearInstance(n)}
/**
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
 */
const E={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},b=new(0,o.ErrorFactory)("app","Firebase",E);
/**
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
 */
class _{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw b.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}}
/**
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
 */const T="10.7.1";function I(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:d,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!=typeof s||!s)throw b.create("bad-app-name",{appName:String(s)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw b.create("no-options");const a=g.get(s);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(i,a.config))return a;throw b.create("duplicate-app",{appName:s})}const c=new(0,r.ComponentContainer)(s);for(const t of p.values())c.addComponent(t);const u=new _(n,i,c);return g.set(s,u),u}function S(t="[DEFAULT]"){const e=g.get(t);if(!e&&t===d&&(0,o.getDefaultAppConfig)())return I();if(!e)throw b.create("no-app",{appName:t});return e}function C(t,e,n){var i;let s=null!==(i=f[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}y(new(0,r.Component)(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
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
 */
const A="firebase-heartbeat-store";let D=null;function k(){return D||(D=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(A)}}).catch((t=>{throw b.create("idb-open",{originalErrorMessage:t.message})}))),D}async function N(t,e){try{const n=(await k()).transaction(A,"readwrite"),r=n.objectStore(A);await r.put(e,x(t)),await n.done}catch(t){if(t instanceof o.FirebaseError)l.warn(t.message);else{const e=b.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});l.warn(e.message)}}}function x(t){return`${t.name}!${t.options.appId}`}
/**
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
 */class L{async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=R();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=R(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),M(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),M(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new O(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function R(){return(new Date).toISOString().substring(0,10)}class O{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await k();return await e.transaction(A).objectStore(A).get(x(t))}catch(t){if(t instanceof o.FirebaseError)l.warn(t.message);else{const e=b.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});l.warn(e.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return N(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function M(t){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */var P;P="",y(new(0,r.Component)("platform-logger",(t=>new c(t)),"PRIVATE")),y(new(0,r.Component)("heartbeat",(t=>new L(t)),"PRIVATE")),C(u,h,P),C(u,h,"esm2017"),C("fire-js","")})),i.register("4a6xH",(function(e,n){t(e.exports,"Component",(function(){return s})),t(e.exports,"ComponentContainer",(function(){return c}));var r=i("ffjl9");class s{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
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
 */const o="[DEFAULT]";
/**
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
 */class a{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new(0,r.Deferred);if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===o?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class c{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}})),i.register("ffjl9",(function(n,r){t(n.exports,"base64urlEncodeWithoutPadding",(function(){return u})),t(n.exports,"getDefaultEmulatorHostnameAndPort",(function(){return f})),t(n.exports,"getDefaultAppConfig",(function(){return g})),t(n.exports,"Deferred",(function(){return p})),t(n.exports,"createMockUserToken",(function(){return m})),t(n.exports,"getUA",(function(){return y})),t(n.exports,"isSafari",(function(){return v})),t(n.exports,"isIndexedDBAvailable",(function(){return w})),t(n.exports,"validateIndexedDBOpenable",(function(){return E})),t(n.exports,"FirebaseError",(function(){return b})),t(n.exports,"ErrorFactory",(function(){return _})),t(n.exports,"deepEqual",(function(){return I})),t(n.exports,"getModularInstance",(function(){return C}));var s=i("4TNnu");
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
 */const o=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw new c;const u=i<<2|s>>4;if(r.push(u),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const u=function(t){return function(t){const e=o(t);return a.encodeByteArray(e,!0)}(t).replace(/\./g,"")},h=function(t){try{return a.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
const l=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,d=()=>{try{return l()||(()=>{if(void 0===s||void 0===s.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&h(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},f=t=>{const e=(t=>{var e,n;return null===(n=null===(e=d())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},g=()=>{var t;return null===(t=d())||void 0===t?void 0:t.config};
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
 */
class p{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */function m(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[u(JSON.stringify({alg:"none",type:"JWT"})),u(JSON.stringify(s)),""].join(".")}
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
 */function y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function v(){return!function(){var t;const n=null===(t=d())||void 0===t?void 0:t.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){try{return"object"==typeof indexedDB}catch(t){return!1}}function E(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class b extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,b.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(T,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new b(r,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const T=/\{\$([^}]+)}/g;
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
 */function I(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(S(n)&&S(s)){if(!I(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function S(t){return null!==t&&"object"==typeof t}
/**
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
 */
/**
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
 */
function C(t){return t&&t._delegate?t._delegate:t}})),i.register("4TNnu",(function(t,e){var n,r,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var c,u=[],h=!1,l=-1;function d(){h&&c&&(h=!1,c.length?u=c.concat(u):l=-1,u.length&&f())}function f(){if(!h){var t=a(d);h=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,h=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function p(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new g(t,e)),1!==u.length||h||a(f)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),i.register("7vF8m",(function(e,n){t(e.exports,"LogLevel",(function(){return i})),t(e.exports,"Logger",(function(){return h})),t(e.exports,"setLogLevel",(function(){return l})),t(e.exports,"setUserLogHandler",(function(){return d}));
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
 */
const r=[];var i,s;(s=i||(i={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,c={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=c[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class h{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}constructor(t){this.name=t,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,r.push(this)}}function l(t){r.forEach((e=>{e.setLogLevel(t)}))}function d(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");n>=(null!=r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}})),i.register("cCiiD",(function(e,n){t(e.exports,"openDB",(function(){return s}));var r=i("ekHjI");r=i("ekHjI");function s(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),c=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",(t=>{i((0,r.w)(a.result),t.oldVersion,t.newVersion,(0,r.w)(a.transaction),t)})),n&&a.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),c.then((t=>{o&&t.addEventListener("close",(()=>o())),s&&t.addEventListener("versionchange",(t=>s(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),c}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function u(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(c.get(e))return c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!o.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return c.set(e,s),s}(0,r.r)((t=>({...t,get:(e,n,r)=>u(e,n)||t.get(e,n,r),has:(e,n)=>!!u(e,n)||t.has(e,n)})))})),i.register("ekHjI",(function(e,n){t(e.exports,"w",(function(){return g})),t(e.exports,"r",(function(){return l}));let r,i;const s=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakMap,u=new WeakMap;let h={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function l(t){h=t(h)}function d(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(p(this),e),g(s.get(this))}:function(...e){return g(t.apply(p(this),e))}:function(e,...n){const r=t.call(p(this),e,...n);return a.set(r,e.sort?e.sort():[e]),g(r)}}function f(t){return"function"==typeof t?d(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));o.set(t,e)}(t),e=t,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,h):t);var e}function g(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(g(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&s.set(e,t)})).catch((()=>{})),u.set(e,t),e}(t);if(c.has(t))return c.get(t);const e=f(t);return e!==t&&(c.set(t,e),u.set(e,t)),e}const p=t=>u.get(t)})),i.register("4bwHs",(function(n,r){t(n.exports,"createWebChannelTransport",(function(){return dr})),t(n.exports,"getStatEventTarget",(function(){return fr})),t(n.exports,"ErrorCode",(function(){return gr})),t(n.exports,"EventType",(function(){return pr})),t(n.exports,"Event",(function(){return mr})),t(n.exports,"Stat",(function(){return yr})),t(n.exports,"WebChannel",(function(){return vr})),t(n.exports,"XhrIo",(function(){return wr})),t(n.exports,"Md5",(function(){return Er})),t(n.exports,"Integer",(function(){return br}));var i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o={},a=a||{},c=s||self;function u(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var l="closure_uid_"+(1e9*Math.random()>>>0),d=0;function f(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function p(t,e,n){return(p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:g).apply(null,arguments)}function m(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function v(){this.s=this.s,this.o=this.o}v.prototype.s=!1,v.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,l)&&t[l]||(t[l]=++d))},v.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function E(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function b(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(u(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function _(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};c.addEventListener("test",t,e),c.removeEventListener("test",t,e)}catch(t){}return t}();function I(t){return/^[\s\xa0]*$/.test(t)}function S(){var t=c.navigator;return t&&(t=t.userAgent)?t:""}function C(t){return-1!=S().indexOf(t)}function A(t){return A[" "](t),t}A[" "]=function(){};var D,k,N,x=C("Opera"),L=C("Trident")||C("MSIE"),R=C("Edge"),O=R||L,M=C("Gecko")&&!(-1!=S().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),P=-1!=S().toLowerCase().indexOf("webkit")&&!C("Edge");function F(){var t=c.document;return t?t.documentMode:void 0}t:{var V="",U=(k=S(),M?/rv:([^\);]+)(\)|;)/.exec(k):R?/Edge\/([\d\.]+)/.exec(k):L?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(k):P?/WebKit\/(\S+)/.exec(k):x?/(?:Version)[ \/]?(\S+)/.exec(k):void 0);if(U&&(V=U?U[1]:""),L){var B=F();if(null!=B&&B>parseFloat(V)){D=String(B);break t}}D=V}if(c.document&&L){var j=F();N=j||(parseInt(D,10)||void 0)}else N=void 0;var q=N;function $(t,e){if(_.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(M){t:{try{A(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:z[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$.$.h.call(this)}}y($,_);var z={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),H=0;function G(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++H,this.fa=this.ia=!1}function Q(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function W(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function X(t){const e={};for(const n in t)e[n]=t[n];return e}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function J(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<Y.length;e++)n=Y[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Z(t){this.src=t,this.g={},this.h=0}function tt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=w(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Q(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function et(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}Z.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=et(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new G(e,this.src,s,!!r,i)).ia=n,t.push(e)),e};var nt="closure_lm_"+(1e6*Math.random()|0),rt={};function it(t,e,n,r,i){if(r&&r.once)return ot(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)it(t,e[s],n,r,i);return null}return n=ft(n),t&&t[K]?t.O(e,n,h(r)?!!r.capture:!!r,i):st(t,e,n,!1,r,i)}function st(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=h(i)?!!i.capture:!!i,a=lt(t);if(a||(t[nt]=a=new Z(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=ht;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)T||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ut(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ot(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ot(t,e[s],n,r,i);return null}return n=ft(n),t&&t[K]?t.P(e,n,h(r)?!!r.capture:!!r,i):st(t,e,n,!0,r,i)}function at(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)at(t,e[s],n,r,i);else r=h(r)?!!r.capture:!!r,n=ft(n),t&&t[K]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=et(s=t.g[e],n,r,i))&&(Q(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=lt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=et(e,n,r,i)),(n=-1<t?e[t]:null)&&ct(n))}function ct(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[K])tt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ut(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=lt(e))?(tt(n,t),0==n.h&&(n.src=null,e[nt]=null)):Q(t)}}}function ut(t){return t in rt?rt[t]:rt[t]="on"+t}function ht(t,e){if(t.fa)t=!0;else{e=new $(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ct(t),t=n.call(r,e)}return t}function lt(t){return(t=t[nt])instanceof Z?t:null}var dt="__closure_events_fn_"+(1e9*Math.random()>>>0);function ft(t){return"function"==typeof t?t:(t[dt]||(t[dt]=function(e){return t.handleEvent(e)}),t[dt])}function gt(){v.call(this),this.i=new Z(this),this.S=this,this.J=null}function pt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"==typeof e)e=new _(e,t);else if(e instanceof _)e.target=e.target||t;else{var i=e;J(e=new _(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=mt(o,r,!0,e)&&i}if(i=mt(o=e.g=t,r,!0,e)&&i,i=mt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=mt(o=e.g=n[s],r,!1,e)&&i}function mt(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&tt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}y(gt,v),gt.prototype[K]=!0,gt.prototype.removeEventListener=function(t,e,n,r){at(this,t,e,n,r)},gt.prototype.N=function(){if(gt.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Q(n[r]);delete e.g[t],e.h--}}this.J=null},gt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},gt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var yt=c.JSON.stringify;function vt(){var t=St;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var wt=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new Et),(t=>t.reset()));class Et{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function bt(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function _t(t){c.setTimeout((()=>{throw t}),0)}let Tt,It=!1,St=new class{add(t,e){const n=wt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}},Ct=()=>{const t=c.Promise.resolve(void 0);Tt=()=>{t.then(At)}};var At=()=>{for(var t;t=vt();){try{t.h.call(t.g)}catch(t){_t(t)}var e=wt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}It=!1};function Dt(t,e){gt.call(this),this.h=t||1,this.g=e||c,this.j=p(this.qb,this),this.l=Date.now()}function kt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Nt(t,e,n){if("function"==typeof t)n&&(t=p(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=p(t.handleEvent,t)}return 2147483647<Number(e)?-1:c.setTimeout(t,e||0)}function xt(t){t.g=Nt((()=>{t.g=null,t.i&&(t.i=!1,xt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}y(Dt,gt),(i=Dt.prototype).ga=!1,i.T=null,i.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),pt(this,"tick"),this.ga&&(kt(this),this.start()))}},i.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.N=function(){Dt.$.N.call(this),kt(this),delete this.g};class Lt extends v{l(t){this.h=arguments,this.g?this.i=!0:xt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Rt(t){v.call(this),this.h=t,this.g={}}y(Rt,v);var Ot=[];function Mt(t,e,n,r){Array.isArray(n)||(n&&(Ot[0]=n.toString()),n=Ot);for(var i=0;i<n.length;i++){var s=it(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Pt(t){W(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ct(t)}),t),t.g={}}function Ft(){this.g=!0}function Vt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return yt(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Rt.prototype.N=function(){Rt.$.N.call(this),Pt(this)},Rt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ft.prototype.Ea=function(){this.g=!1},Ft.prototype.info=function(){};var Ut={},Bt=null;function jt(){return Bt=Bt||new gt}function qt(t){_.call(this,Ut.Ta,t)}function $t(t){const e=jt();pt(e,new qt(e))}function zt(t,e){_.call(this,Ut.STAT_EVENT,t),this.stat=e}function Kt(t){const e=jt();pt(e,new zt(e,t))}function Ht(t,e){_.call(this,Ut.Ua,t),this.size=e}function Gt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){t()}),e)}Ut.Ta="serverreachability",y(qt,_),Ut.STAT_EVENT="statevent",y(zt,_),Ut.Ua="timingevent",y(Ht,_);var Qt={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Wt={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Xt(){}function Yt(t){return t.h||(t.h=t.i())}function Jt(){}Xt.prototype.h=null;var Zt,te={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ee(){_.call(this,"d")}function ne(){_.call(this,"c")}function re(){}function ie(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Rt(this),this.P=oe,t=O?125:void 0,this.V=new Dt(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new se}function se(){this.i=null,this.g="",this.h=!1}y(ee,_),y(ne,_),y(re,Xt),re.prototype.g=function(){return new XMLHttpRequest},re.prototype.i=function(){return{}},Zt=new re;var oe=45e3,ae={},ce={};function ue(t,e,n){t.L=1,t.A=De(Te(e)),t.u=n,t.S=!0,he(t,null)}function he(t,e){t.G=Date.now(),ge(t),t.B=Te(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),je(n.i,"t",r),t.o=0,n=t.l.J,t.h=new se,t.g=Bn(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Lt(p(t.Pa,t,t.g),t.O)),Mt(t.U,t.g,"readystatechange",t.nb),e=t.I?X(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),$t(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.v,t.B,t.m,t.W,t.u)}function le(t){return!!t.g&&("GET"==t.v&&2!=t.L&&t.l.Ha)}function de(t,e,n){let r,i=!0;for(;!t.J&&t.o<n.length;){if(r=fe(t,n),r==ce){4==e&&(t.s=4,Kt(14),i=!1),Vt(t.j,t.m,null,"[Incomplete Response]");break}if(r==ae){t.s=4,Kt(15),Vt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Vt(t.j,t.m,r,null),we(t,r)}le(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=n.length||t.h.h||(t.s=1,Kt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ln(e),e.M=!0,Kt(11))):(Vt(t.j,t.m,n,"[Invalid Chunked Response]"),ve(t),ye(t))}function fe(t,e){var n=t.o,r=e.indexOf("\n",n);return-1==r?ce:(n=Number(e.substring(n,r)),isNaN(n)?ae:(r+=1)+n>e.length?ce:(e=e.slice(r,r+n),t.o=r+n,e))}function ge(t){t.Y=Date.now()+t.P,pe(t,t.P)}function pe(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=Gt(p(t.lb,t),e)}function me(t){t.C&&(c.clearTimeout(t.C),t.C=null)}function ye(t){0==t.l.H||t.J||Mn(t.l,t)}function ve(t){me(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,kt(t.V),Pt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function we(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Ge(n.i,t)))if(!t.K&&Ge(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;On(n),In(n)}xn(n),Kt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=Gt(p(n.ib,n),6e3));if(1>=He(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Fn(n,11)}else if((t.K||n.g==t)&&On(n),!I(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Qe(s,s.h),s.h=null))}if(r.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,Ae(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((r=n).wa=Un(r,r.J?r.pa:null,r.Y),o.K){We(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(me(a),ge(a)),r.g=o}else Nn(r);0<n.j.length&&Cn(n)}else"stop"!=u[0]&&"close"!=u[0]||Fn(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Fn(n,7):Tn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}$t()}catch(t){}}function Ee(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(u(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(i=ie.prototype).setTimeout=function(t){this.P=t},i.nb=function(t){t=t.target;const e=this.M;e&&3==yn(t)?e.l():this.Pa(t)},i.Pa=function(t){try{if(t==this.g)t:{const l=yn(this.g);var e=this.g.Ia();this.g.da();if(!(3>l)&&(3!=l||O||this.g&&(this.h.h||this.g.ja()||vn(this.g)))){this.J||4!=l||7==e||$t(),me(this);var n=this.g.da();this.ca=n;e:if(le(this)){var r=vn(this.g);t="";var i=r.length,s=4==yn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ve(this),ye(this);var o="";break e}this.h.i=new c.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.s=3,Kt(12),ve(this),ye(this);break t}Vt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,we(this,n)}this.S?(de(this,l,o),O&&this.i&&3==l&&(Mt(this.U,this.V,"tick",this.mb),this.V.start())):(Vt(this.j,this.m,o,null),we(this,o)),4==l&&ve(this),this.i&&!this.J&&(4==l?Mn(this.l,this):(this.i=!1,ge(this)))}else(function(t){const e={};t=(t.g&&2<=yn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(I(t[r]))continue;var n=bt(t[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Kt(12)):(this.s=0,Kt(13)),ve(this),ye(this)}}}catch(t){}},i.mb=function(){if(this.g){var t=yn(this.g),e=this.g.ja();this.o<e.length&&(me(this),de(this,t,e),this.i&&4!=t&&ge(this))}},i.cancel=function(){this.J=!0,ve(this)},i.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.B),2!=this.L&&($t(),Kt(17)),ve(this),this.s=2,ye(this)):pe(this,this.Y-t)};var be=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _e(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _e){this.h=t.h,Ie(this,t.j),this.s=t.s,this.g=t.g,Se(this,t.m),this.l=t.l;var e=t.i,n=new Fe;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ce(this,n),this.o=t.o}else t&&(e=String(t).match(be))?(this.h=!1,Ie(this,e[1]||"",!0),this.s=ke(e[2]||""),this.g=ke(e[3]||"",!0),Se(this,e[4]),this.l=ke(e[5]||"",!0),Ce(this,e[6]||"",!0),this.o=ke(e[7]||"")):(this.h=!1,this.i=new Fe(null,this.h))}function Te(t){return new _e(t)}function Ie(t,e,n){t.j=n?ke(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Se(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ce(t,e,n){e instanceof Fe?(t.i=e,function(t,e){e&&!t.j&&(Ve(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ue(this,e),je(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Ne(e,Me)),t.i=new Fe(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function De(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ke(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ne(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xe(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}_e.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ne(e,Le,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ne(e,Le,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ne(n,"/"==n.charAt(0)?Oe:Re,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ne(n,Pe)),t.join("")};var Le=/[#\/\?@]/g,Re=/[#\?:]/g,Oe=/[#\?]/g,Me=/[#\?@]/g,Pe=/#/g;function Fe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ve(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ue(t,e){Ve(t),e=qe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Be(t,e){return Ve(t),e=qe(t,e),t.g.has(e)}function je(t,e,n){Ue(t,e),0<n.length&&(t.i=null,t.g.set(qe(t,e),E(n)),t.h+=n.length)}function qe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(i=Fe.prototype).add=function(t,e){Ve(this),this.i=null,t=qe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){Ve(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},i.ta=function(){Ve(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},i.Z=function(t){Ve(this);let e=[];if("string"==typeof t)Be(this,t)&&(e=e.concat(this.g.get(qe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return Ve(this),this.i=null,Be(this,t=qe(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function $e(t){this.l=t||ze,c.PerformanceNavigationTiming?t=0<(t=c.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(c.g&&c.g.Ka&&c.g.Ka()&&c.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ze=10;function Ke(t){return!!t.h||!!t.g&&t.g.size>=t.j}function He(t){return t.h?1:t.g?t.g.size:0}function Ge(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Qe(t,e){t.g?t.g.add(e):t.h=e}function We(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Xe(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return E(t.i)}$e.prototype.cancel=function(){if(this.i=Xe(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ye(){this.g=new class{stringify(t){return c.JSON.stringify(t,void 0)}parse(t){return c.JSON.parse(t,void 0)}}}function Je(t,e,n){const r=n||"";try{Ee(t,(function(t,n){let i=t;h(t)&&(i=yt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Ze(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function tn(t){this.l=t.ec||null,this.j=t.ob||!1}function en(t,e){gt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=nn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}y(tn,Xt),tn.prototype.g=function(){return new en(this.l,this.j)},tn.prototype.i=function(t){return function(){return t}}({}),y(en,gt);var nn=0;function rn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,on(t)}function on(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(i=en.prototype).open=function(t,e){if(this.readyState!=nn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,on(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||c).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,sn(this)),this.readyState=nn},i.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,on(this)),this.g&&(this.readyState=3,on(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==c.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},i.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?sn(this):on(this),3==this.readyState&&rn(this)}},i.Za=function(t){this.g&&(this.response=this.responseText=t,sn(this))},i.Ya=function(t){this.g&&(this.response=t,sn(this))},i.ka=function(){this.g&&sn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(en.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var an=c.JSON.parse;function cn(t){gt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=un,this.L=this.M=!1}y(cn,gt);var un="",hn=/^https?$/i,ln=["POST","PUT"];function dn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fn(t),pn(t)}function fn(t){t.F||(t.F=!0,pt(t,"complete"),pt(t,"error"))}function gn(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=yn(t)||2!=t.da()))if(t.v&&4==yn(t))Nt(t.La,0,t);else if(pt(t,"readystatechange"),4==yn(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.I).match(be)[1]||null;!i&&c.self&&c.self.location&&(i=c.self.location.protocol.slice(0,-1)),r=!hn.test(i?i.toLowerCase():"")}n=r}if(n)pt(t,"complete"),pt(t,"success");else{t.m=6;try{var s=2<yn(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",fn(t)}}finally{pn(t)}}}function pn(t,e){if(t.g){mn(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||pt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function mn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(c.clearTimeout(t.A),t.A=null)}function yn(t){return t.g?t.g.readyState:0}function vn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case un:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function wn(t){let e="";return W(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function En(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=wn(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ae(t,e,n))}function bn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _n(t){this.Ga=0,this.j=[],this.l=new Ft,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bn("baseRetryDelayMs",5e3,t),this.hb=bn("retryDelaySeedMs",1e4,t),this.eb=bn("forwardChannelMaxRetries",2,t),this.xa=bn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new $e(t&&t.concurrentRequestLimit),this.Ja=new Ye,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Tn(t){if(Sn(t),3==t.H){var e=t.W++,n=Te(t.I);if(Ae(n,"SID",t.K),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Dn(t,n),(e=new ie(t,t.l,e)).L=2,e.A=De(Te(n)),n=!1,c.navigator&&c.navigator.sendBeacon)try{n=c.navigator.sendBeacon(e.A.toString(),"")}catch(t){}!n&&c.Image&&((new Image).src=e.A,n=!0),n||(e.g=Bn(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ge(e)}Vn(t)}function In(t){t.g&&(Ln(t),t.g.cancel(),t.g=null)}function Sn(t){In(t),t.u&&(c.clearTimeout(t.u),t.u=null),On(t),t.i.cancel(),t.m&&("number"==typeof t.m&&c.clearTimeout(t.m),t.m=null)}function Cn(t){if(!Ke(t.i)&&!t.m){t.m=!0;var e=t.Na;Tt||Ct(),It||(Tt(),It=!0),St.add(e,t),t.C=0}}function An(t,e){var n;n=e?e.m:t.W++;const r=Te(t.I);Ae(r,"SID",t.K),Ae(r,"RID",n),Ae(r,"AID",t.V),Dn(t,r),t.o&&t.s&&En(r,t.o,t.s),n=new ie(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=kn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Qe(t.i,n),ue(n,r,e)}function Dn(t,e){t.na&&W(t.na,(function(t,n){Ae(e,n,t)})),t.h&&Ee({},(function(t,n){Ae(e,n,t)}))}function kn(t,e,n){n=Math.min(t.j.length,n);var r=t.h?p(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),s=!1;else try{Je(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Nn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Tt||Ct(),It||(Tt(),It=!0),St.add(e,t),t.A=0}}function xn(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Gt(p(t.Ma,t),Pn(t,t.A)),t.A++,!0)}function Ln(t){null!=t.B&&(c.clearTimeout(t.B),t.B=null)}function Rn(t){t.g=new ie(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Te(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.K),Ae(e,"AID",t.V),Ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ae(e,"TO",t.qa),Ae(e,"TYPE","xmlhttp"),Dn(t,e),t.o&&t.s&&En(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=De(Te(e)),n.u=null,n.S=!0,he(n,t)}function On(t){null!=t.v&&(c.clearTimeout(t.v),t.v=null)}function Mn(t,e){var n=null;if(t.g==e){On(t),Ln(t),t.g=null;var r=2}else{if(!Ge(t.i,e))return;n=e.F,We(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;pt(r=jt(),new Ht(r,n)),Cn(t)}else Nn(t);else if(3==(i=e.s)||0==i&&0<e.ca||!(1==r&&function(t,e){return!(He(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=Gt(p(t.Na,t,e),Pn(t,t.C)),t.C++,0)))}(t,e)||2==r&&xn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Fn(t,5);break;case 4:Fn(t,10);break;case 3:Fn(t,6);break;default:Fn(t,2)}}function Pn(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Fn(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=p(t.pb,t);n||(n=new _e("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Ie(n,"https"),De(n)),function(t,e){const n=new Ft;if(c.Image){const r=new Image;r.onload=m(Ze,n,r,"TestLoadImage: loaded",!0,e),r.onerror=m(Ze,n,r,"TestLoadImage: error",!1,e),r.onabort=m(Ze,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=m(Ze,n,r,"TestLoadImage: timeout",!1,e),c.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Kt(2);t.H=0,t.h&&t.h.za(e),Vn(t),Sn(t)}function Vn(t){if(t.H=0,t.ma=[],t.h){const e=Xe(t.i);0==e.length&&0==t.j.length||(b(t.ma,e),b(t.ma,t.j),t.i.i.length=0,E(t.j),t.j.length=0),t.h.ya()}}function Un(t,e,n){var r=n instanceof _e?Te(n):new _e(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Se(r,r.m);else{var i=c.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new _e(null);r&&Ie(s,r),e&&(s.g=e),i&&Se(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ae(r,n,e),Ae(r,"VER",t.ra),Dn(t,r),r}function Bn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ha&&!t.va?new cn(new tn({ob:n})):new cn(t.va)).Oa(t.J),e}function jn(){}function qn(){if(L&&!(10<=Number(q)))throw Error("Environmental error: no available transport.")}function $n(t,e){gt.call(this),this.g=new _n(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!I(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!I(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Hn(this)}function zn(t){ee.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Kn(){ne.call(this),this.status=1}function Hn(t){this.g=t}function Gn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Qn(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(e^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function Wn(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}(i=cn.prototype).Oa=function(t){this.M=t},i.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Zt.g(),this.C=this.u?Yt(this.u):Yt(Zt),this.g.onreadystatechange=p(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void dn(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=c.FormData&&t instanceof c.FormData,!(0<=w(ln,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{mn(this),0<this.B&&((this.L=function(t){return L&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=p(this.ua,this)):this.A=Nt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){dn(this,t)}},i.ua=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,pt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,pt(this,"complete"),pt(this,"abort"),pn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pn(this,!0)),cn.$.N.call(this)},i.La=function(){this.s||(this.G||this.v||this.l?gn(this):this.kb())},i.kb=function(){gn(this)},i.isActive=function(){return!!this.g},i.da=function(){try{return 2<yn(this)?this.g.status:-1}catch(t){return-1}},i.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),an(e)}},i.Ia=function(){return this.m},i.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=_n.prototype).ra=8,i.H=1,i.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ie(this,this.l,t);let s=this.s;if(this.U&&(s?(s=X(s),J(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=kn(this,i,e),Ae(n=Te(this.I),"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),Dn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(wn(s)))+"&"+e:this.o&&En(n,this.o,s)),Qe(this.i,i),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),i.aa=!0,ue(i,n,null)):ue(i,n,e),this.H=2}}else 3==this.H&&(t?An(this,t):0==this.j.length||Ke(this.i)||An(this))},i.Ma=function(){if(this.u=null,Rn(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Gt(p(this.jb,this),t)}},i.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Kt(10),In(this),Rn(this))},i.ib=function(){null!=this.v&&(this.v=null,In(this),xn(this),Kt(19))},i.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Kt(2)):(this.l.info("Failed to ping google.com"),Kt(1))},i.isActive=function(){return!!this.h&&this.h.isActive(this)},(i=jn.prototype).Ba=function(){},i.Aa=function(){},i.za=function(){},i.ya=function(){},i.isActive=function(){return!0},i.Va=function(){},qn.prototype.g=function(t,e){return new $n(t,e)},y($n,gt),$n.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Kt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Un(t,null,t.Y),Cn(t)},$n.prototype.close=function(){Tn(this.g)},$n.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=yt(t),t=n);e.j.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.fb++,t)),3==e.H&&Cn(e)},$n.prototype.N=function(){this.g.h=null,delete this.j,Tn(this.g),delete this.g,$n.$.N.call(this)},y(zn,ee),y(Kn,ne),y(Hn,jn),Hn.prototype.Ba=function(){pt(this.g,"a")},Hn.prototype.Aa=function(t){pt(this.g,new zn(t))},Hn.prototype.za=function(t){pt(this.g,new Kn)},Hn.prototype.ya=function(){pt(this.g,"b")},y(Gn,(function(){this.blockSize=-1})),Gn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Gn.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)Qn(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Qn(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Qn(this,r),i=0;break}}this.h=i,this.i+=e},Gn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var Xn={};function Yn(t){return-128<=t&&128>t?function(t,e){var n=Xn;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new Wn([0|t],0>t?-1:0)})):new Wn([0|t],0>t?-1:0)}function Jn(t){if(isNaN(t)||!isFinite(t))return tr;if(0>t)return sr(Jn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Zn;return new Wn(e,0)}var Zn=4294967296,tr=Yn(0),er=Yn(1),nr=Yn(16777216);function rr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function ir(t){return-1==t.h}function sr(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Wn(n,~t.h).add(er)}function or(t,e){return t.add(sr(e))}function ar(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function cr(t,e){this.g=t,this.h=e}function ur(t,e){if(rr(e))throw Error("division by zero");if(rr(t))return new cr(tr,tr);if(ir(t))return e=ur(sr(t),e),new cr(sr(e.g),sr(e.h));if(ir(e))return e=ur(t,sr(e)),new cr(sr(e.g),e.h);if(30<t.g.length){if(ir(t)||ir(e))throw Error("slowDivide_ only works with positive integers.");for(var n=er,r=e;0>=r.X(t);)n=hr(n),r=hr(r);var i=lr(n,1),s=lr(r,1);for(r=lr(r,2),n=lr(n,2);!rr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=lr(r,1),n=lr(n,1)}return e=or(t,i.R(e)),new cr(i,e)}for(i=tr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),o=(s=Jn(n)).R(e);ir(o)||0<o.X(t);)o=(s=Jn(n-=r)).R(e);rr(s)&&(s=er),i=i.add(s),t=or(t,o)}return new cr(i,t)}function hr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Wn(n,t.h)}function lr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Wn(i,t.h)}(i=Wn.prototype).ea=function(){if(ir(this))return-sr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Zn+r)*e,e*=Zn}return t},i.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(rr(this))return"0";if(ir(this))return"-"+sr(this).toString(t);for(var e=Jn(Math.pow(t,6)),n=this,r="";;){var i=ur(n,e).g,s=((0<(n=or(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(rr(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},i.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},i.X=function(t){return ir(t=or(this,t))?-1:rr(t)?0:1},i.abs=function(){return ir(this)?sr(this):this},i.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Wn(n,-2147483648&n[n.length-1]?-1:0)},i.R=function(t){if(rr(this)||rr(t))return tr;if(ir(this))return ir(t)?sr(this).R(sr(t)):sr(sr(this).R(t));if(ir(t))return sr(this.R(sr(t)));if(0>this.X(nr)&&0>t.X(nr))return Jn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,ar(n,2*r+2*i),n[2*r+2*i+1]+=s*c,ar(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ar(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ar(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Wn(n,0)},i.gb=function(t){return ur(this,t).h},i.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Wn(n,this.h&t.h)},i.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Wn(n,this.h|t.h)},i.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Wn(n,this.h^t.h)},qn.prototype.createWebChannel=qn.prototype.g,$n.prototype.send=$n.prototype.u,$n.prototype.open=$n.prototype.m,$n.prototype.close=$n.prototype.close,Qt.NO_ERROR=0,Qt.TIMEOUT=8,Qt.HTTP_ERROR=6,Wt.COMPLETE="complete",Jt.EventType=te,te.OPEN="a",te.CLOSE="b",te.ERROR="c",te.MESSAGE="d",gt.prototype.listen=gt.prototype.O,cn.prototype.listenOnce=cn.prototype.P,cn.prototype.getLastError=cn.prototype.Sa,cn.prototype.getLastErrorCode=cn.prototype.Ia,cn.prototype.getStatus=cn.prototype.da,cn.prototype.getResponseJson=cn.prototype.Wa,cn.prototype.getResponseText=cn.prototype.ja,cn.prototype.send=cn.prototype.ha,cn.prototype.setWithCredentials=cn.prototype.Oa,Gn.prototype.digest=Gn.prototype.l,Gn.prototype.reset=Gn.prototype.reset,Gn.prototype.update=Gn.prototype.j,Wn.prototype.add=Wn.prototype.add,Wn.prototype.multiply=Wn.prototype.R,Wn.prototype.modulo=Wn.prototype.gb,Wn.prototype.compare=Wn.prototype.X,Wn.prototype.toNumber=Wn.prototype.ea,Wn.prototype.toString=Wn.prototype.toString,Wn.prototype.getBits=Wn.prototype.D,Wn.fromNumber=Jn,Wn.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return sr(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=Jn(Math.pow(n,8)),i=tr,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=Jn(Math.pow(n,o)),i=i.R(o).add(Jn(a))):i=(i=i.R(r)).add(Jn(a))}return i};var dr=o.createWebChannelTransport=function(){return new qn},fr=o.getStatEventTarget=function(){return jt()},gr=o.ErrorCode=Qt,pr=o.EventType=Wt,mr=o.Event=Ut,yr=o.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},vr=(o.FetchXmlHttpFactory=tn,o.WebChannel=Jt),wr=o.XhrIo=cn,Er=o.Md5=Gn,br=o.Integer=Wn})),i.register("9FYXe",(function(e,n){t(e.exports,"app",(function(){return r})),i("gKkQl");const r=(0,i("ix4Jr").initializeApp)({apiKey:"AIzaSyAKYrF2YoqGKSaSU407C9X91DqaZMAg4q4",authDomain:"filmoteka-urraccon.firebase.com",projectId:"filmoteka-urraccon",storageBucket:"filmoteka-urraccon.appspot.com",messagingSenderId:"712511464775",appId:"1:712511464775:web:f28be5eb7fc38469c69862"})})),i.register("gKkQl",(function(e,n){t(e.exports,"initializeApp",(function(){return i("ix4Jr").initializeApp})),t(e.exports,"registerVersion",(function(){return i("ix4Jr").registerVersion}));i("ix4Jr");
/**
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
 */
(0,i("ix4Jr").registerVersion)("firebase","10.7.1","app")}));
//# sourceMappingURL=my_library.e1efc8cc.js.map
