!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){n[e]=r},r.parcelRequired7c6=a);var o=a("dCfNN"),l={form:document.querySelector(".feedback-form")},i="feedback-form-state",f={};!function(){var e=localStorage.getItem(i);if(e){var r=JSON.parse(e);for(var t in r)f[t]=r[t];l.form.elements.email.value=f.email?f.email:"",l.form.elements.message.value=f.message?f.message:""}}(),l.form.addEventListener("submit",(function(e){e.preventDefault();var r=e.currentTarget.elements,t=r.email,n=r.message;if(""===t.value||""===n.value)return alert("Будь ласка заповнити усі поля");console.log(f),e.currentTarget.reset(),localStorage.removeItem(i)})),l.form.addEventListener("input",e(o)((function(e){f[e.target.name]=e.target.value,localStorage.setItem(i,JSON.stringify(f))}),500))}();
//# sourceMappingURL=03-feedback.fc44aa2c.js.map