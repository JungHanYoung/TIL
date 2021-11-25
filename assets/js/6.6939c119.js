(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(s,n,a){s.exports=a.p+"assets/img/10_1_1.2762cb91.png"},194:function(s,n,a){s.exports=a.p+"assets/img/10_1_2.a505932d.png"},195:function(s,n,a){s.exports=a.p+"assets/img/10_1_3.9a7c8ccb.png"},214:function(s,n,a){"use strict";a.r(n);var t=[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#이것이-우분투-리눅스다"}},[s._v("이것이 우분투 리눅스다")]),a("ul",[a("li",[a("a",{attrs:{href:"#_9장-4교시-라운드-로빈-방식-round-robin-네임서버"}},[s._v("9장 4교시 라운드 로빈 방식(Round Robin) 네임서버")]),a("ul",[a("li",[a("a",{attrs:{href:"#라운드-로빈-방식"}},[s._v("라운드 로빈 방식")])]),a("li",[a("a",{attrs:{href:"#실습"}},[s._v("실습")])])])]),a("li",[a("a",{attrs:{href:"#_10장-1교시-메일서버-개념-메일서버를-위한-네임서버-구축"}},[s._v("10장 1교시 메일서버 개념, 메일서버를 위한 네임서버 구축")]),a("ul",[a("li",[a("a",{attrs:{href:"#이메일의-송수신에서-사용되는-프로토콜"}},[s._v("이메일의 송수신에서 사용되는 프로토콜")])]),a("li",[a("a",{attrs:{href:"#작동원리-센드메일-그림"}},[s._v("작동원리(센드메일) 그림")])]),a("li",[a("a",{attrs:{href:"#실습-메일서버를-위한-네임서버-구축"}},[s._v("실습 : 메일서버를 위한 네임서버 구축")])])])]),a("li",[a("a",{attrs:{href:"#_10장-2교시-sendmail-메일-서버-구축"}},[s._v("10장 2교시 Sendmail 메일 서버 구축")]),a("ul",[a("li",[a("a",{attrs:{href:"#실습-메일서버-구현"}},[s._v("실습 : 메일서버 구현")])])])])])])])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h1",{attrs:{id:"_10월-8일"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10월-8일","aria-hidden":"true"}},[this._v("#")]),this._v(" 10월 8일")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h2",{attrs:{id:"이것이-우분투-리눅스다"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#이것이-우분투-리눅스다","aria-hidden":"true"}},[this._v("#")]),this._v(" 이것이 우분투 리눅스다")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"_9장-4교시-라운드-로빈-방식-round-robin-네임서버"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9장-4교시-라운드-로빈-방식-round-robin-네임서버","aria-hidden":"true"}},[this._v("#")]),this._v(" 9장 4교시 라운드 로빈 방식(Round Robin) 네임서버")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h4",{attrs:{id:"라운드-로빈-방식"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#라운드-로빈-방식","aria-hidden":"true"}},[this._v("#")]),this._v(" 라운드 로빈 방식")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h4",{attrs:{id:"실습"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#실습","aria-hidden":"true"}},[this._v("#")]),this._v(" 실습")])},function(){var s=this.$createElement,n=this._self._c||s;return n("ul",[n("li",[this._v("www.john.com으로 서비스 요청시 외부 사이트 3개의 IP로 라운드 로빈 수행\n"),n("ul",[n("li",[n("code",[this._v("www.yes24.com")])]),this._v(" "),n("li",[n("code",[this._v("www.danawa.com")])]),this._v(" "),n("li",[n("code",[this._v("www.nate.com")])])])])])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 9장 3교시에 이어서")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nslookup")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" www.yes24.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". www.yes24.com의 IP주소\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" www.danawa.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". www.danawa.com의 IP주소\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" www.nate.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". www.nate.com의 IP주소\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" /etc/bind\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" john.com.db\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nwww     IN  CNAME   webserver.john.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 맨밑\nwebserver   100 IN  A   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("yes24 IP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            200 IN  A   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("danawa IP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n            300 IN  A   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("nate IP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 오류 체크")]),s._v("\nnamed-checkzone john.com john.com.db\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 네임서버 재시작")]),s._v("\nsystemctl restart bind9\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 적용됬는지 확인")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nslookup")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" server 192.168.111.100\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" www.john.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 할당한 3개의 IP가 있는 것을 확인"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"_10장-1교시-메일서버-개념-메일서버를-위한-네임서버-구축"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10장-1교시-메일서버-개념-메일서버를-위한-네임서버-구축","aria-hidden":"true"}},[this._v("#")]),this._v(" 10장 1교시 메일서버 개념, 메일서버를 위한 네임서버 구축")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h4",{attrs:{id:"이메일의-송수신에서-사용되는-프로토콜"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#이메일의-송수신에서-사용되는-프로토콜","aria-hidden":"true"}},[this._v("#")]),this._v(" 이메일의 송수신에서 사용되는 프로토콜")])},function(){var s=this.$createElement,n=this._self._c||s;return n("ul",[n("li",[this._v("SMTP(Simple Mail Transfer Protocol) : 클라이언트가 메일을 보내거나, 메일 서버끼리 메일을 주고 받을 때")]),this._v(" "),n("li",[this._v("POP3(Post Office Protocol), IMAP(Internet Mail Access Protocol) : 메일서버에 도착되어 있는 메일을 가져올때")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[n("img",{attrs:{src:a(193),alt:""}})])},function(){var s=this.$createElement,n=this._self._c||s;return n("h4",{attrs:{id:"작동원리-센드메일-그림"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#작동원리-센드메일-그림","aria-hidden":"true"}},[this._v("#")]),this._v(" 작동원리(센드메일) 그림")])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[n("img",{attrs:{src:a(194),alt:""}})])},function(){var s=this.$createElement,n=this._self._c||s;return n("h4",{attrs:{id:"실습-메일서버를-위한-네임서버-구축"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#실습-메일서버를-위한-네임서버-구축","aria-hidden":"true"}},[this._v("#")]),this._v(" 실습 : 메일서버를 위한 네임서버 구축")])},function(){var s=this.$createElement,n=this._self._c||s;return n("p",[n("img",{attrs:{src:a(195),alt:""}})])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ul",[a("li",[s._v("도메인 구성\n"),a("ul",[a("li",[s._v("Server : mail.naver.com라는 도메인")]),s._v(" "),a("li",[s._v("Server(B) : mail.daum.net이라는 도메인")]),s._v(" "),a("li",[s._v("Client(Linux) : "),a("code",[s._v("mail.naver.com")]),s._v(" 메일서버의 클라이언트")]),s._v(" "),a("li",[s._v("WinClient(Window) : "),a("code",[s._v("mail.daum.net")]),s._v(" 메일서버의 클라이언트")])])]),s._v(" "),a("li")])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 네임서버 구축 전 sendmail 패키지 설치 및 자신에게 자기 도메인 등록")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Server")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 센드메일 패키지 설치")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v("  -y  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  sendmail\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## hostname 변경")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/hostname\n1 server -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mail.naver.com\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## mail.naver.com을 hosts에 등록")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/hosts\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n3 \n+ 192.168.111.100   mail.naver.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## mail.naver.com을 sendmail의 로컬설정 변경")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/mail/local-host-names\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 맨밑\n+ mail.naver.com\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 적용시키기 위해 재부팅")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Server(B) -> *** 위와 동일하게 ***")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 네임서버 구축")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 패키지 설치")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v("  -y  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bind9 bind9utils\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 네임서버 구축관련 설정들")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  /etc/bind/named.conf.options\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n3\n+   recursion  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+   allow-query  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  any"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 네임서버 구축관련 설정들 - 캐시db 지정")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  /etc/bind/named.conf\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 맨밑\n+ zone  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"naver.com"')]),s._v(" IN  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n+   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("type")]),s._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/bind/naver.com.db"')]),s._v("\n+ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+\n+ zone  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"daum.net"')]),s._v(" IN  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n+   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("type")]),s._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/bind/daum.net.db"')]),s._v("\n+ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 네임서버 구축관련 설정들 - 캐시db 구축")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v("  /etc/bind\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v("  naver.com.db  daum.net.db\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  naver.com.db\n+ "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TTL")]),s._v("  3H\n+ @     IN  SOA     0   root.   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" 2 1D 1H 1W 1H "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n+\n+ @     IN  NS      0\n+       IN  A       192.168.111.100\n+       IN  MX      10      mail.naver.com\n+\n+ mail  IN  A       192.168.111.100\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v("  -f  naver.com.db  daum.net.db\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  daum.net.db\n+ "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TTL")]),s._v("  3H\n+ @     IN  SOA     0   root.   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" 2 1D 1H 1W 1H "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n+\n+ @     IN  NS      0\n+       IN  A       192.168.111.200\n+       IN  MX      10      mail.daum.net\n+\n+ mail  IN  A       192.168.111.200\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 문법상 이상없는지 확인")]),s._v("\nnamed-checkconf\nnamed-checkzone  naver.com  naver.com.db\nnamed-checkzone  daum.net  daum.net.db\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 네임서버 재시작")]),s._v("\nsystemctl  restart  bind9\nsystemctl  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v("  bind9\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 방화벽 포트 허용 ( 편하게 방화벽을 아예 꺼버림 )")]),s._v("\nufw  disable\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 네임서버 확인")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nslookup")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" server 192.168.111.100\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mail.naver.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 응답성공\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mail.daum.net\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 응답성공\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 모든 가상머신에 192.168.111.100(Server)를 네임서버로 지정")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Linux")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  /etc/NetworkManager/system-connections/유선\\ 연결\\ 1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ipv4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\naddress1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\ndns"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("192.168.111.100     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("- 변경\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n:wq\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  /etc/resolv.conf\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnameserver  192.168.111.100     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("- 변경\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Windows")]),s._v("\n명령프롬프트\nnetsh  interface  ip  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v("  dns  Ethernet0  static  192.168.111.100\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 서버 응답 확인")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nslookup")]),s._v("    -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  Linux, Windows 모두 가능\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br"),a("span",{staticClass:"line-number"},[s._v("111")]),a("br"),a("span",{staticClass:"line-number"},[s._v("112")]),a("br"),a("span",{staticClass:"line-number"},[s._v("113")]),a("br"),a("span",{staticClass:"line-number"},[s._v("114")]),a("br"),a("span",{staticClass:"line-number"},[s._v("115")]),a("br"),a("span",{staticClass:"line-number"},[s._v("116")]),a("br"),a("span",{staticClass:"line-number"},[s._v("117")]),a("br"),a("span",{staticClass:"line-number"},[s._v("118")]),a("br"),a("span",{staticClass:"line-number"},[s._v("119")]),a("br"),a("span",{staticClass:"line-number"},[s._v("120")]),a("br"),a("span",{staticClass:"line-number"},[s._v("121")]),a("br"),a("span",{staticClass:"line-number"},[s._v("122")]),a("br"),a("span",{staticClass:"line-number"},[s._v("123")]),a("br"),a("span",{staticClass:"line-number"},[s._v("124")]),a("br"),a("span",{staticClass:"line-number"},[s._v("125")]),a("br"),a("span",{staticClass:"line-number"},[s._v("126")]),a("br"),a("span",{staticClass:"line-number"},[s._v("127")]),a("br"),a("span",{staticClass:"line-number"},[s._v("128")]),a("br"),a("span",{staticClass:"line-number"},[s._v("129")]),a("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h3",{attrs:{id:"_10장-2교시-sendmail-메일-서버-구축"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10장-2교시-sendmail-메일-서버-구축","aria-hidden":"true"}},[this._v("#")]),this._v(" 10장 2교시 Sendmail 메일 서버 구축")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h4",{attrs:{id:"실습-메일서버-구현"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#실습-메일서버-구현","aria-hidden":"true"}},[this._v("#")]),this._v(" 실습 : 메일서버 구현")])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ul",[a("li",[a("code",[s._v("naver.com")]),s._v(" 메일 서버와 "),a("code",[s._v("daum.net")]),s._v(" 메일 서버를 구축")]),s._v(" "),a("li",[s._v("sendmail, dovecot 패키지의 설치 및 설정")]),s._v(" "),a("li",[s._v("메일 클라이언트로 사용법 및 확인")])])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Server")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## dovecot(메일 받는) 패키지 설치")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v("  -y  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("  dovecot-pop3d\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## sendmail 관련 설정")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  /etc/mail/sendmail.conf\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n98 Cwnaver.com      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("- 변경\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n269 DaemonP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". , Port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("smtp      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("- Addr 제거\n270 DaemonP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". , Port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("smtp      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("- Addr 제거\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  /etc/mail/access\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 맨밑\n+\n+ naver.com       RELAY\n+ daum.net        RELAY\n+ 192.168.111     RELAY\n:wq\nmakemap  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hash")]),s._v("  /etc/mail/access  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("  /etc/mail/access\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## dovecot 관련 설정 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  /etc/dovecot/dovecot.conf\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n30          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("- 주석제거\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n33          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("- 주석제거\n+ disable_plaintext_auth "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" no\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  /etc/dovecot/conf.d/10-mail.conf\n121 mail_access_groups "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mail   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("- 변경\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n166         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("- 주석제거\n:wq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 메일 클라이언트가 사용할 유저 생성")]),s._v("\nadduser lee\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 비밀번호 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 서비스 재시작")]),s._v("\nsystemctl  restart  sendmail\nsystemctl  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v("  sendmail\nsystemctl  restart  dovecot\nsystemctl  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("enable")]),s._v("  dovecot\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Server(B) - *** 위와 동일 ***")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h5",{attrs:{id:"클라이언트"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#클라이언트","aria-hidden":"true"}},[this._v("#")]),this._v(" 클라이언트")])},function(){var s=this.$createElement,n=this._self._c||s;return n("h6",{attrs:{id:"에볼루션-메일-클라이언트-linux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#에볼루션-메일-클라이언트-linux","aria-hidden":"true"}},[this._v("#")]),this._v(" 에볼루션 메일 클라이언트(Linux)")])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ul",[a("li",[s._v("신상정보\n"),a("ul",[a("li",[s._v("전체이름 : 이네이버")]),s._v(" "),a("li",[s._v("전자메일 주소 : "),a("code",[s._v("lee@naver.com")])])])]),s._v(" "),a("li",[s._v("메일받기\n"),a("ul",[a("li",[s._v("서버종류 : POP")]),s._v(" "),a("li",[s._v("서버 : "),a("code",[s._v("mail.naver.com")])]),s._v(" "),a("li",[s._v("사용자이름 : lee")])])]),s._v(" "),a("li",[s._v("메일보내기\n"),a("ul",[a("li",[s._v("서버 종류 : SMTP")]),s._v(" "),a("li",[s._v("서버 : "),a("code",[s._v("mail.naver.com")])])])]),s._v(" "),a("li",[s._v("계정정보\n"),a("ul",[a("li",[s._v("이름: 네이버메일\n...")])])]),s._v(" "),a("li",[s._v("메인 인증 요청\n"),a("ul",[a("li",[s._v("서버 유저 비밀번호 입력")])])])])},function(){var s=this.$createElement,n=this._self._c||s;return n("h6",{attrs:{id:"opera-mail-클라이언트"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#opera-mail-클라이언트","aria-hidden":"true"}},[this._v("#")]),this._v(" Opera Mail 클라이언트")])},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ul",[a("li",[s._v("전자메일")]),s._v(" "),a("li",[s._v("계정\n"),a("ul",[a("li",[s._v("표시 이름 : 김다음")]),s._v(" "),a("li",[s._v("전자메일 주소 : "),a("code",[s._v("kim@daum.net")])]),s._v(" "),a("li",[s._v("계정 이름 : kim")]),s._v(" "),a("li",[s._v("비밀번호 : ...")]),s._v(" "),a("li",[s._v("계정유형 : POP")])])]),s._v(" "),a("li",[s._v("서버\n"),a("ul",[a("li",[s._v("수신서버 : "),a("code",[s._v("mail.daum.net")])]),s._v(" "),a("li",[s._v("송신서버 : "),a("code",[s._v("mail.daum.net")])])])])])}],e=a(0),r=Object(e.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("p"),s._m(0),a("p"),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),a("p",[s._v("여러 대의 웹서버를 운영해서, 웹 클라이언트가 서비스를 요청할 경우에 교대로 서비스를 제공하도록 하는 방식")]),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),a("hr"),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),s._m(12),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._v(" "),s._m(16),s._v(" "),s._m(17),a("hr"),s._v(" "),s._m(18),s._v(" "),s._m(19),s._v(" "),s._m(20),s._v(" "),s._m(21),s._m(22),s._v(" "),a("p",[s._v("Linux : 에볼루션(메일 클라이언트) 사용\nWindows : Opera Mail 1.0")]),s._v(" "),s._m(23),s._v(" "),s._m(24),s._v(" "),a("p",[s._v("자기자신한테 보내본다.")]),s._v(" "),s._m(25),s._v(" "),a("blockquote",[a("p",[s._v("카페 자료실에서 다운로드 "),a("a",{attrs:{href:"https://cafe.naver.com/thisislinux",target:"_blank",rel:"noopener noreferrer"}},[s._v("링크"),a("OutboundLink")],1)])]),s._v(" "),s._m(26),s._v(" "),a("p",[s._v("lee@naver.com 에게 메일을 보내본다!")])])},t,!1,null,null,null);r.options.__file="08.md";n.default=r.exports}}]);