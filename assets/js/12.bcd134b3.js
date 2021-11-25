(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{196:function(s,t,n){s.exports=n.p+"assets/img/14_1.f7f3c087.png"},216:function(s,t,n){"use strict";n.r(t);var a=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"이것이-우분투-리눅스다"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이것이-우분투-리눅스다","aria-hidden":"true"}},[s._v("#")]),s._v(" 이것이 우분투 리눅스다")]),s._v(" "),a("h3",{attrs:{id:"_14장-nfs서버-구축"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14장-nfs서버-구축","aria-hidden":"true"}},[s._v("#")]),s._v(" 14장 NFS서버 구축")]),s._v(" "),a("h4",{attrs:{id:"nfs서버"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nfs서버","aria-hidden":"true"}},[s._v("#")]),s._v(" NFS서버")]),s._v(" "),a("ul",[a("li",[s._v("Linux(Unix) 컴퓨터끼리 저장 공간을 공유할 수 있도록 해주는 시스템")])]),s._v(" "),a("p",[a("img",{attrs:{src:n(196),alt:""}})]),s._v(" "),a("table",[a("thead",[a("tr",[a("th"),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("서버")]),s._v(" "),a("th",{staticStyle:{"text-align":"center"}},[s._v("클라이언트")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("패키지")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("nfs-server, rpcbind")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("nfs-common")])]),s._v(" "),a("tr",[a("td",[s._v("실행")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("$ systemctl restart nfs-server")]),s._v(" "),a("td",{staticStyle:{"text-align":"center"}},[s._v("$ mount -t nfs 192.168.111.100:/share ~/myShare")])])])]),s._v(" "),a("h4",{attrs:{id:"실습"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실습","aria-hidden":"true"}},[s._v("#")]),s._v(" 실습")]),s._v(" "),a("h5",{attrs:{id:"server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server","aria-hidden":"true"}},[s._v("#")]),s._v(" Server")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### Server ####")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NFS 패키지 설치")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v("  -y  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nfs-common  nfs-kernel-server  rpcbind\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 공유 디렉토리 생성")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v("  /share\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NFS 설정")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  /etc/exports\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 맨밑\n+ /share 192.168.111.*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw, sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 서버 시작")]),s._v("\nsystemctl  restart  nfs-server\nsystemctl  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v("  nfs-server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 방화벽 비활성화")]),s._v("\nufw  disable\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### Client ####")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NFS 클라이언트 관련 패키지 설치")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v("  -y  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  nfs-common\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 서버에서 마운트되고 있는 폴더 확인")]),s._v("\nshowmount  -e  192.168.111.100\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 디렉토리 생성 및 마운트")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v("  ~/myShare\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v("  -t  nfs  192.168.111.100:/share  ~/myShare\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fstab 등록")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v("  gedit  /etc/fstab\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 맨밑에\n+ 192.168.111.100:/share  /home/ubuntu/myShare  nfs  defaults  0  0\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])])])}],e=n(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);r.options.__file="11.md";t.default=r.exports}}]);