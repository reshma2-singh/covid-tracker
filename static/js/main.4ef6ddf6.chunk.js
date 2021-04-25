(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{58:function(e,t,a){e.exports=a(70)},64:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a.n(c),o=a(34),l=a.n(o),u=a(42),i=a(10),m=(a(64),a(106)),f=a(107),d=a(108),v=a(98),p=a(102),h=a(103);var E=function(e){var t=e.title,a=e.cases,n=e.total;return r.a.createElement("div",null,r.a.createElement(v.a,{className:"infoBox"},r.a.createElement(p.a,null,r.a.createElement(h.a,{className:"infoBox__title",color:"textSecondary"},t),r.a.createElement("h2",{className:"infoBox__cases"},a),r.a.createElement(h.a,{className:"infoBox__total"},n,"Total"))))};var b=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement("strong",null,a)))})))},O=(a(68),a(105)),j=a(110),y=a(49),N=a(14),g=a.n(N),x=a(109),_=a(104),w={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"#fb4443",multiplier:2e3}},C=function(e){return e?"+".concat(g()(e).format("0.0a")):"+0"};var S=function(e){var t=e.center,a=e.casesType,c=e.zoom,s=e.countries,o=Object(n.useState)(0),l=Object(i.a)(o,2),u=(l[0],l[1],Object(n.useState)(0)),m=Object(i.a)(u,2);return m[0],m[1],r.a.createElement("div",null,r.a.createElement(O.a,{className:"map",center:t,zoom:c},r.a.createElement(j.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(x.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:w[t].hex,fillColor:w[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*w[t].multiplier},r.a.createElement(_.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",g()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",g()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",g()(e.deaths).format("0,0")))))}))}(s,a)))};var I=function(){var e=Object(n.useState)(3),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),o=Object(i.a)(s,2),h=o[0],O=o[1],j=Object(n.useState)("worldwide"),N=Object(i.a)(j,2),x=N[0],_=N[1],w=Object(n.useState)({}),I=Object(i.a)(w,2),k=I[0],R=I[1],B=Object(n.useState)([]),z=Object(i.a)(B,2),D=z[0],T=z[1],J=Object(n.useState)("cases"),M=Object(i.a)(J,2),q=M[0],A=M[1],K=Object(n.useState)([]),V=Object(i.a)(K,2),F=V[0],G=V[1],H=Object(n.useState)({lat:34.80746,lng:-40.4796}),L=Object(i.a)(H,2),P=L[0],Q=L[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=function(e){var t=Object(y.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t}(e);T(a),O(t),G(e)}))}));var U=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,_(a),n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){_(a),R(e),Q([e.countryInfo.lat,e.countryInfo.long]),c(4)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",null,"COVID-19 TRACKER"),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(f.a,{variant:"outlined",onChange:U,value:x},r.a.createElement(d.a,{value:"worldwide"},"worldwide"),h.map((function(e){return r.a.createElement(d.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(E,{onClick:function(e){return A("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===q,cases:C(k.todayCases),total:g()(k.cases).format("0.0a")}),r.a.createElement(E,{onClick:function(e){return A("recovered")},title:"Recovered",active:"recovered"===q,cases:C(k.todayRecovered),total:g()(k.recovered).format("0.0a")}),r.a.createElement(E,{onClick:function(e){return A("deaths")},title:"Deaths",isRed:!0,active:"deaths"===q,cases:C(k.todayDeaths),total:g()(k.deaths).format("0.0a")})),r.a.createElement(S,{countries:F,casesType:q,center:P,zoom:a})),r.a.createElement(v.a,{className:"app__right"},r.a.createElement(p.a,null,r.a.createElement(b,{countries:D}))))};a(69);s.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.4ef6ddf6.chunk.js.map