module.exports=(()=>{var e={21:(e,t,r)=>{var a,s=(a=r(191))&&"object"==typeof a&&"default"in a?a.default:a,c=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var t=function(e,t,r){var a=e.auth,o=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;a=a?encodeURIComponent(a).replace(/%3A/i,":")+"@":"",e.host?n=a+e.host:o&&(n=a+(~o.indexOf(":")?"["+o+"]":o),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,s,c);return""+t.protocol+t.host+t.pathname+t.search+t.hash}var h="http://",p="w.w",n=h+p,l=/^https?|ftp|gopher|file/,i=/^(.*?)([#?].*)/,m=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,v=/^([a-z0-9.+-]*:)?\/\/\/*/i,_=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var a=(e=e.trim()).match(i);e=a?u(a[1]).replace(/\\/g,"/")+a[2]:u(e).replace(/\\/g,"/"),_.test(e)&&"/"!==e.slice(-1)&&(e+="/");var c=!/(^javascript)/.test(e)&&e.match(m),h=v.test(e),f="";c&&(l.test(c[1])||(f=c[1].toLowerCase(),e=""+c[2]+c[3]),c[2]||(h=!1,l.test(c[1])?(f=c[1],e=""+c[3]):e="//"+c[3]),3!==c[2].length&&1!==c[2].length||(f=c[1],e="/"+c[3]));var d,b=e.match(/(:[0-9]+)/),g="";b&&b[1]&&3===b[1].length&&(e=e.replace(g=b[1],g+"00"));var y={},w="",x="";try{d=new URL(e)}catch(t){w=t,f||r||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(x="/",e=e.substr(1));try{d=new URL(e,n)}catch(e){return y.protocol=f,y.href=f,y}}y.slashes=h&&!x,y.host=d.host===p?"":d.host,y.hostname=d.hostname===p?"":d.hostname.replace(/(\[|\])/g,""),y.protocol=w?f||null:d.protocol,y.search=d.search.replace(/\\/g,"%5C"),y.hash=d.hash.replace(/\\/g,"%5C");var q=e.split("#");!y.search&&~q[0].indexOf("?")&&(y.search="?"),y.hash||""!==q[1]||(y.hash="#"),y.query=t?s.decode(d.search.substr(1)):y.search.substr(1),y.pathname=x+u(d.pathname).replace(/"/g,"%22"),"about:"===y.protocol&&"blank"===y.pathname&&(y.protocol="",y.pathname=""),w&&"/"!==e[0]&&(y.pathname=y.pathname.substr(1)),f&&!l.test(f)&&"/"!==e.slice(-1)&&"/"===y.pathname&&(y.pathname=""),y.path=y.pathname+y.search,y.auth=[d.username,d.password].map(decodeURIComponent).filter(Boolean).join(":"),y.port=d.port,g&&(y.host=y.host.replace(g+"00",g),y.port=y.port.slice(0,-2)),y.href=x?""+y.pathname+y.search+y.hash:o(y);var R=/^(file)/.test(y.href)?["host","hostname"]:[];return Object.keys(y).forEach(function(e){~R.indexOf(e)||(y[e]=y[e]||null)}),y}var b=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,g=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var a=f(t),s="";r.protocol&&!r.slashes&&(s=r.protocol,e=e.replace(r.protocol,""),s+="/"===t[0]||"/"===e[0]?"/":""),s&&a.protocol&&(s="",a.slashes||(s=a.protocol,t=t.replace(a.protocol,"")));var c=e.match(b);c&&!a.protocol&&(e=e.substr((s=c[1]+(c[2]||"")).length),/^\/\/[^\/]/.test(t)&&(s=s.slice(0,-1)));var p=new URL(e,n+"/"),l=new URL(t,p).toString().replace(n,""),i=a.protocol||r.protocol;return i+=r.slashes||a.slashes?"//":"",!s&&i?l=l.replace(h,i):s&&(l=l.replace(h,"")),g.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),s&&(l=s+("/"===l[0]?l.substr(1):l)),l}t.parse=f,t.format=o,t.resolve=d,t.resolveObject=function(e,t){return f(d(e,t))}},191:e=>{"use strict";e.exports=require("querystring")}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var a=t[r]={exports:{}};var o=true;try{e[r](a,a.exports,__nccwpck_require__);o=false}finally{if(o)delete t[r]}return a.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(21)})();