(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{378:function(t,s,a){"use strict";a.r(s);var e=a(44),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bookmark-tomb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bookmark-tomb"}},[t._v("#")]),t._v(" Bookmark Tomb")]),t._v(" "),a("blockquote",[a("p",[t._v("A bookmark sync system.")]),t._v(" "),a("p",[t._v("Built with Springboot, Vue and MongoDB.")])]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("This is cross-browser sync application, only support chromium kernel browser.")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/Miunangel/BookmarkTomb_Plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Plugin Repository"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Build with Vue, TS and Vuetify.")]),t._v(" "),a("p",[t._v("[Install Plugin][https://chrome.google.com/webstore/detail/bookmark-tomb-sync/igmnbfjbdpapgclchnfofacjempnmioe]")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/AmourLoveR/BookmarkTomb_Front",target:"_blank",rel:"noopener noreferrer"}},[t._v("Front-End Repository"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Build with Vue, JS and Vuetify.")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/Miunangel/BookmarkTomb_Back",target:"_blank",rel:"noopener noreferrer"}},[t._v("Back-End Repository"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Based on SpringBoot, and storage data in MongoDB.")]),t._v(" "),a("h2",{attrs:{id:"get-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-start"}},[t._v("#")]),t._v(" Get Start")]),t._v(" "),a("h3",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("You need firstly install unzip to extract the files from release package.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/wzl20001001/BookmarkTomb_Back/releases/latest/download/BookmarkTomb.zip -O bookmark_tomb.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" bookmark_tomb.zip -d bookmark_tomb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" bookmark_tomb.zip\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x bookmark_tomb/*.sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can custom the target directory")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" bookmark_tomb /usr/local/share/\n/usr/local/share/bookmark_tomb/start.sh\n")])])]),a("h3",{attrs:{id:"develop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#develop"}},[t._v("#")]),t._v(" Develop")]),t._v(" "),a("p",[t._v("You can visit the API document by run the source code.")]),t._v(" "),a("blockquote",[a("p",[t._v("TO-DO")])]),t._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),t._v(" Change the captcha plugin.")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Configure the email and database by API.")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),t._v(" Simplify log to log4j, instead of nohup.")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),t._v(" and so on...")])]),t._v(" "),a("h2",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[t._v("#")]),t._v(" Tips")]),t._v(" "),a("h3",{attrs:{id:"system-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-config"}},[t._v("#")]),t._v(" System Config")]),t._v(" "),a("blockquote",[a("p",[t._v("Init System")])]),t._v(" "),a("p",[t._v("You can init system(database and email) by webpage, and restart the system after set configurations;")]),t._v(" "),a("p",[t._v("You also can change the email or database configurations by web page, "),a("strong",[t._v("But")]),t._v(" we not recommend change the DB host, port or DB name.\nSo we don't provide the Api to change the database's host, port and DBname, you only can change the database's username and password to improve the security;")]),t._v(" "),a("p",[t._v("You can change the email configuration as you like, you just need to ensure it can be used and the host is "),a("strong",[t._v("SMTP")]),t._v(" email server;")]),t._v(" "),a("p",[t._v("You also can directly change the conf file, which locates at "),a("code",[t._v("~/.bookmark_tomb/conf.json")]),t._v(";")]),t._v(" "),a("p",[t._v("The file formate like follow:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// After copy, please remove the comments.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is the port of service.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If you run jar by java -jar, the default port is 8080.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serverPort"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This control the switch of register.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the email is disable, also can't register.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registerEnable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This control the switch of email service.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"emailEnable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is the configuration of database.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The username and password is optional, these filed should be added when your database need auth.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"database"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dbname"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bookmark_tomb"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is the confgiration of email, we use smtp to send email.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"host"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"smtp.xxx.xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("587")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"front-and-back-end-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-and-back-end-deployment"}},[t._v("#")]),t._v(" Front and back end deployment")]),t._v(" "),a("p",[t._v("If you want to deploy front end independent, you can clone the source code from front end repository.")]),t._v(" "),a("h2",{attrs:{id:"words-in-the-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#words-in-the-end"}},[t._v("#")]),t._v(" Words in the End")]),t._v(" "),a("blockquote",[a("p",[t._v("This maybe an ugly system, we will refactor the system some time later,\nthe better version will release at last version.")]),t._v(" "),a("p",[t._v("Maybe after the Vue3 ecosystem matures...")])])])}),[],!1,null,null,null);s.default=r.exports}}]);