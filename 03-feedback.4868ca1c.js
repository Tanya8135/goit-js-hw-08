!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return a[e]=l,t.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=l);var o,r=l("eaxEB"),i="feedback-form-state",u=document.querySelector(".feedback-form"),s=u.elements.email,d=u.elements.message;try{o=JSON.parse(localStorage.getItem(i))||{}}catch(e){o={}}s.value=o.email||"",d.value=o.message||"",u.addEventListener("input",e(r)((function(){var e={email:s.value,message:d.value};localStorage.setItem(i,JSON.stringify(e))}),500)),u.addEventListener("submit",(function(e){e.preventDefault();localStorage.removeItem(i),s.value="",d.value="",console.log({email:"",message:""})}))}();
//# sourceMappingURL=03-feedback.4868ca1c.js.map
