webpackJsonp([0],{429:function(e,t,n){"use strict";(function(e){var a=n(90),c=n(791),r=(n.n(c),n(435)),o=n(433),l=n(434),i=n(436);t.a=function(){return e.createElement(c.StickyContainer,null,e.createElement(c.Sticky,{topOffset:80},function(t){var n=t.style;return e.createElement("header",{style:n},e.createElement(r.a,null))}),e.createElement("main",null,e.createElement("section",null,e.createElement(a.a,null,e.createElement(o.a,null))),e.createElement("section",{className:"alter"},e.createElement(a.a,null,e.createElement(l.a,null))),e.createElement("section",null,e.createElement(a.a,null,e.createElement(i.a,null))),e.createElement("section",null,e.createElement("div",{style:{height:"20em"}}))))}}).call(t,n(0))},430:function(e,t){},433:function(e,t,n){"use strict";(function(e){var a=n(90),c=n(783),r=n.n(c),o=n(687),l=n.n(o),i=n(504),u=(n.n(i),n(503));n.n(u);t.a=function(){return e.createElement("div",null,e.createElement(a.b,{as:"h1",icon:"photo",content:"3D макетлар"}),e.createElement(a.f,{basic:!0,padded:"very"},e.createElement(r.a,{dots:!0,slidesToShow:2,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!0},l.a.range(1,7).map(function(t){return e.createElement("img",{key:"i"+t,src:n(887)("./"+t+".jpg")})}),l.a.range(1,3).map(function(t){return e.createElement("video",{key:"v"+t,controls:!0},e.createElement("source",{src:n(888)("./v"+t+".mp4"),type:"video/mp4"}))}))))}}).call(t,n(0))},434:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(0),l=n.n(o),i=n(792),u=n.n(i),m=n(90),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(e){function t(e){a(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.tick=function(){var e=n.state,t=e.seconds,a=e.minutes,c=e.hours,r=e.days;return t>0?void n.setState({seconds:t-1}):a>0?void n.setState({seconds:59,minutes:a-1}):c>0?void n.setState({seconds:59,minutes:59,hours:c-1}):r>0?void n.setState({seconds:59,minutes:59,hours:23,days:r-1}):void n.setState({seconds:0,minutes:0,hours:0,days:0})};var r=(n.props.startDateTime.valueOf()-Date.now())/1e3,o=Math.floor(r%60);r/=60;var l=Math.floor(r%60);r/=60;var i=Math.floor(r%24);return r/=24,n.state={days:Math.floor(r),hours:i,minutes:l,seconds:o},n}return r(t,e),s(t,[{key:"componentWillMount",value:function(){this.timer=window.setInterval(this.tick,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"statistic",value:function(e,t){return l.a.createElement(m.d,{value:l.a.createElement(u.a,null,e<10?"0"+e:e),label:t})}},{key:"render",value:function(){var e=this.state,t=e.days,n=e.hours,a=e.minutes,c=e.seconds;return l.a.createElement("div",null,l.a.createElement(m.b,{as:"h1"},l.a.createElement(m.e,{name:"calendar"}),"Ишга тушиш санаси:  ",this.props.startDateTime.toLocaleString()),l.a.createElement(m.a,{textAlign:"center"},l.a.createElement(m.d.Group,{className:"inline"},this.statistic(t,"кун"),this.statistic(n,"соат"),this.statistic(a,"минут"),this.statistic(c,"секунд"))),l.a.createElement("p",null,"* Ишчи ўринлар сони 30. Клиника қурилиши учун кўзда тутилган маблағ 600 млн, тиббий жихозлаш учун кўзда тутилган маблағ 400 млн."))}}]),t}(l.a.PureComponent);t.a=f,f.defaultProps={startDateTime:new Date("2019-09-01 9:00")}},435:function(e,t,n){"use strict";(function(e){var a=n(90);t.a=function(){return e.createElement(a.g,{className:"mainMenu"},e.createElement(a.a,null,e.createElement(a.g.Item,{header:!0,as:"h1"},e.createElement("img",{src:n(526)}),"Травматолог.уз"),e.createElement(a.g.Item,{style:{width:"40em"}},e.createElement(a.h,{columns:"sixteen"},e.createElement(a.h.Column,{width:10},e.createElement(a.c,null,e.createElement(a.c.Item,null,e.createElement(a.i,{src:n(525),width:"16",shape:"circular"}),e.createElement(a.c.Content,null,"Турдиев Шерзод")),e.createElement(a.c.Item,{icon:"marker",content:"Наманган вилоят, Мингбулоқ туман."}),e.createElement(a.c.Item,{icon:"phone",content:"+998 (91) 281-1985"}))),e.createElement(a.h.Column,{width:6},e.createElement(a.c,null,e.createElement(a.c.Item,{icon:"mail",content:e.createElement("a",{href:"mailto:bookmaker1985@bk.ru"},"bookmaker1985@bk.ru")}),e.createElement(a.c.Item,{icon:"mail",content:e.createElement("a",{href:"mailto:bookmaker2013@gmail.com"},"bookmaker2013@gmail.com")}),e.createElement(a.c.Item,null,e.createElement(a.c.Icon,{name:"facebook"}),e.createElement(a.c.Content,null,e.createElement("a",{href:"http://fb.com/travmatolog",target:"_blank"},"fb.com/travmatolog")))))))))}}).call(t,n(0))},436:function(e,t,n){"use strict";(function(e){var a=n(90);t.a=function(){return e.createElement("div",null,e.createElement(a.b,{as:"h1",icon:"medkit",content:"Тиббий хизмат"}),e.createElement(a.a,null,e.createElement("div",null,"Ахолига малакали амбулатор ва стационар тиббий хизмат курсатиш:",e.createElement(a.c,{size:"large"},e.createElement(a.c.Item,{icon:"checkmark",content:"травматология-ортопедия"}),e.createElement(a.c.Item,{icon:"checkmark",content:"гинекология"}),e.createElement(a.c.Item,{icon:"checkmark",content:"кордиология"}),e.createElement(a.c.Item,{icon:"checkmark",content:"стоматология"}),e.createElement(a.c.Item,{icon:"checkmark",content:"Лаборатор, инструментал ва биохимик тахлиллар (50 дан ортиқ)"}),e.createElement(a.c.Item,{icon:"checkmark",content:"УТТ"}),e.createElement(a.c.Item,{icon:"checkmark",content:"Рақамли рентген текшируви"}),e.createElement("p",null,"ва бошқалар.")))))}}).call(t,n(0))},437:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=n(42),a=(n.n(t),n(432)),c=(n.n(a),n(431)),r=(n.n(c),n(430)),o=(n.n(r),n(429));!function(){t.render(e.createElement(a.AppContainer,null,e.createElement(o.a,null)),document.getElementById("root"))}()}.call(t,n(0))},517:function(e,t,n){e.exports=n.p+"a4888dffdcf3b144ecf8eab2dd265fc3.jpg"},518:function(e,t,n){e.exports=n.p+"774227a31adb1015ba028d423a2f5238.jpg"},519:function(e,t,n){e.exports=n.p+"77f9856ce8847f74b6beac94c1fbc663.jpg"},520:function(e,t,n){e.exports=n.p+"7d16e2b9b3893b0923fd5aaaaac239ad.jpg"},521:function(e,t,n){e.exports=n.p+"f5531840a30dece2bf134b300852f4c6.jpg"},522:function(e,t,n){e.exports=n.p+"e434635b033841a922d07199148da0b7.jpg"},523:function(e,t,n){e.exports=n.p+"63389467ffb90e7b3367996321e53113.mp4"},524:function(e,t,n){e.exports=n.p+"b1b85ac8506b9834a4ce564816633db5.mp4"},525:function(e,t,n){e.exports=n.p+"9e941a161f375944ff4b85c23c98af3e.jpg"},526:function(e,t,n){e.exports=n.p+"74b15a3168af5799b262ab8ad3323bbf.gif"},887:function(e,t,n){function a(e){return n(c(e))}function c(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./1.jpg":517,"./2.jpg":518,"./3.jpg":519,"./4.jpg":520,"./5.jpg":521,"./6.jpg":522};a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=887},888:function(e,t,n){function a(e){return n(c(e))}function c(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./v1.mp4":523,"./v2.mp4":524};a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=888}},[437]);
//# sourceMappingURL=main.js.map