(this["webpackJsonpcovid-react-app"]=this["webpackJsonpcovid-react-app"]||[]).push([[0],{105:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(67),o=a.n(c),u=a(5),i=a.n(u),s=a(10),l=a(68),d=a(69),p=a(26),v=a(76),f=a(75),m=a(30),h=a.n(m),b="https://covid19.mathdro.id/api";function y(e){return g.apply(this,arguments)}function g(){return(g=Object(s.a)(i.a.mark((function e(t){var a,n,r,c,o,u,s,l,d,p,v;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b,t&&(a="".concat(b,"/countries/").concat(t)),e.prev=2,e.next=5,h.a.get(a);case 5:return n=e.sent,r=n.data,c=(r=void 0===r?{}:r).confirmed,o=r.recovered,u=r.deaths,s=r.countryDetail,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,countryDetail:s,lastUpdate:l});case 12:e.prev=12,e.t0=e.catch(2),alert(null===(d=e.t0.response)||void 0===d||null===(p=d.data)||void 0===p||null===(v=p.error)||void 0===v?void 0:v.message);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function x(){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(i.a.mark((function e(){var t,a,n,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(b,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),alert(null===(r=e.t0.response)||void 0===r||null===(c=r.data)||void 0===c||null===(o=c.error)||void 0===o?void 0:o.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function O(){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(i.a.mark((function e(){var t,a,n,r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat(b,"/countries"));case 3:return t=e.sent,a=t.data.countries,n=a.map((function(e){return e.name})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),alert(null===(r=e.t0.response)||void 0===r||null===(c=r.data)||void 0===c||null===(o=c.error)||void 0===o?void 0:o.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var k=a(224),C=a(228),w=a(225),D=a(226),N=a(70),I=a.n(N),S=(a(105),{infected:{title:"Infected",text:"No. of active cases of COVID-19",valText:"confirmed"},recovered:{title:"Recovered",text:"No. of recoveries from COVID-19",valText:"recovered"},deaths:{title:"Deaths",text:"No. of deaths caused by COVID-19",valText:"deaths"}});var T=function(e){var t=e.data,a=e.data,n=a.confirmed,c=a.deaths,o=a.recovered,u=a.lastUpdate;if(!n||!c||!o)return"Loading...";var i=new Date(u).toDateString();return r.a.createElement("div",{className:"cards-container"},r.a.createElement(k.a,{container:!0,spacing:3,justify:"center"},Object.keys(S).map((function(e,a){return r.a.createElement(k.a,{item:!0,xs:12,md:3,key:a,component:C.a,className:"card ".concat(e)},console.log(S[e].valText),r.a.createElement(w.a,null,r.a.createElement(D.a,{color:"textSecondary",gutterBottom:!0},S[e].title),r.a.createElement(D.a,{variant:"h6"},r.a.createElement(I.a,{start:0,end:t[S[e].valText].value,duration:2.5,separator:","})),r.a.createElement(D.a,{color:"textSecondary"},i),r.a.createElement(D.a,{variant:"body2"},S[e].text)))}))))},V=a(29),B=a(41);a(203);var U=function(e){var t=e.data,a=e.data,c=a.confirmed,o=a.recovered,u=a.deaths,l=e.country,d=Object(n.useState)([]),p=Object(V.a)(d,2),v=p[0],f=p[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,x();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=(null===v||void 0===v?void 0:v.length)?r.a.createElement(B.Line,{data:{labels:v.map((function(e){return e.date})),datasets:[{data:v.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:v.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,h=t.confirmed?r.a.createElement(B.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 255, 0.5)"],data:[c.value,o.value,u.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in a ".concat(l)}}}):null;return r.a.createElement("div",{className:"chart-conatiner"},l?h:m)},J=a(229),L=a(227);a(204);var R=function(e){var t=e.handleCountires,a=Object(n.useState)([]),c=Object(V.a)(a,2),o=c[0],u=c[1];Object(n.useEffect)((function(){!function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,O();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var l=Object(n.useCallback)((function(e){t(e.target.value)}),[t]);return r.a.createElement(J.a,{className:"pick-country"},r.a.createElement(L.a,{defaultValue:"",onChange:l},r.a.createElement("option",{value:""},"Global"),(null===o||void 0===o?void 0:o.length)&&o.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))))},G=(a(205),function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:{},country:""},n.handleCountires=n.handleCountires.bind(Object(p.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,a.setState({data:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleCountires",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:a=e.sent,this.setState({data:a,country:t}),console.log(a);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:"container"},r.a.createElement("img",{className:"covid-img",src:"https://i.ibb.co/7QpKsCX/image.png",alt:"coron-icon"}),r.a.createElement(T,{data:t}),r.a.createElement(R,{handleCountires:this.handleCountires}),r.a.createElement(U,{data:t,country:a}))}}]),a}(n.Component));o.a.render(r.a.createElement(G,null),document.getElementById("root"))},79:function(e,t,a){e.exports=a(206)}},[[79,1,2]]]);
//# sourceMappingURL=main.90cfdc76.chunk.js.map