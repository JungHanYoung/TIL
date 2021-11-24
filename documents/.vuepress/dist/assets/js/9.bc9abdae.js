(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{172:function(s,a,n){s.exports=n.p+"assets/img/grub_1.1dd160a8.png"},173:function(s,a,n){s.exports=n.p+"assets/img/kernel_compile.69083a5e.png"},207:function(s,a,n){"use strict";n.r(a);var e=[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"content"},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#이것이-우분투-리눅스다"}},[s._v("이것이 우분투 리눅스다")]),e("ul",[e("li",[e("a",{attrs:{href:"#_4장-10교시-grub-부트로더-커널컴파일"}},[s._v("4장 10교시 GRUB 부트로더, 커널컴파일")]),e("ul",[e("li",[e("a",{attrs:{href:"#grub-부트로더"}},[s._v("GRUB 부트로더")])]),e("li",[e("a",{attrs:{href:"#모듈의-개념과-커널-컴파일"}},[s._v("모듈의 개념과 커널 컴파일")])])])])])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"이것이-우분투-리눅스다"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#이것이-우분투-리눅스다","aria-hidden":"true"}},[s._v("#")]),s._v(" 이것이 우분투 리눅스다")]),s._v(" "),e("h3",{attrs:{id:"_4장-10교시-grub-부트로더-커널컴파일"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4장-10교시-grub-부트로더-커널컴파일","aria-hidden":"true"}},[s._v("#")]),s._v(" 4장 10교시 GRUB 부트로더, 커널컴파일")]),s._v(" "),e("h4",{attrs:{id:"grub-부트로더"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grub-부트로더","aria-hidden":"true"}},[s._v("#")]),s._v(" GRUB 부트로더")]),s._v(" "),e("p",[s._v("앞서 GRUB 부트로더를 변경하는 법을 실습함.")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("특징")]),s._v(" "),e("ul",[e("li",[s._v("부트 정보를 사용자가 임의로 변경해 부팅할 수 있다.")]),s._v(" "),e("li",[s._v("다른 여러 가지 운영체제와 멀티부팅 가능.")]),s._v(" "),e("li",[s._v("대화형 설정을 제공해 커널의 경로와 파일 이름만 알면 부팅이 가능하다.")])])]),s._v(" "),e("li",[e("p",[s._v("GRUB 설정방법")]),s._v(" "),e("ul",[e("li",[s._v("/boot/grub/grub.cfg 설정파일\n"),e("ul",[e("li",[s._v("직접 변경 X")])])]),s._v(" "),e("li",[s._v("/etc/default/grub 파일과 /etc/grub.d/ 디렉터리의 파일을 수정한 후에 'grub-mkconfig' 명령어를 실행해 설정함.")])])])]),s._v(" "),e("h5",{attrs:{id:"실습"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#실습","aria-hidden":"true"}},[s._v("#")]),s._v(" 실습")]),s._v(" "),e("ul",[e("li",[s._v("부트로더 변경")]),s._v(" "),e("li",[s._v("GRUB에 비밀번호 지정")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('Server(B)\n\n// GRUB 부트로더 관련 설정파일 수정작업\n# vi /etc/default/grub\n...\n// 부팅시간 및 변경\n...\nGRUB_TIMEOUT=2 -> 20\nGRUB_DISTRIBUTOR="..." => "This is Linux"\n...\n:wq\n\n// GRUB 부트로더 업데이트\n# update-grub\n...\n# reboot\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[e("img",{attrs:{src:n(172),alt:"An Image"}})]),s._v(" "),e("p",[s._v("다음과 같이 부트로더가 변경되었다.")]),s._v(" "),e("br"),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('*** GRUB 부트로더에 비밀번호 설정\n# vi /etc/grub.d/00_header\n... 맨밑에서 추가 ...\ncat << EOF\nset superusers="grubuser"   // username\npassword grubuser 4321      // password\nEOF\n:wq\n\n// GRUB 부트로더 업데이터\n# update-grub\n# reboot\n\n// GRUB 편집시 username과 password 입력해야 가능\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("br"),s._v(" "),e("h4",{attrs:{id:"모듈의-개념과-커널-컴파일"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#모듈의-개념과-커널-컴파일","aria-hidden":"true"}},[s._v("#")]),s._v(" 모듈의 개념과 커널 컴파일")]),s._v(" "),e("p",[s._v("커널")]),s._v(" "),e("ul",[e("li",[s._v("리눅스의 엔진 역할")]),s._v(" "),e("li",[s._v("부팅시 항시 로딩되는 코드")])]),s._v(" "),e("p",[s._v("모듈")]),s._v(" "),e("ul",[e("li",[s._v("필요할 때마다 호출하여 사용되는 코드")]),s._v(" "),e("li",[s._v("커널이 커지는 것을 방지")])]),s._v(" "),e("br"),s._v(" "),e("p",[e("img",{attrs:{src:n(173),alt:"An Image"}})]),s._v(" "),e("h5",{attrs:{id:"실습-커널-업그레이드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#실습-커널-업그레이드","aria-hidden":"true"}},[s._v("#")]),s._v(" 실습 - 커널 업그레이드")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 현재 커널 버전 확인 **\n# uname -r\n... 커널 버전\n\n// kernel.org 사이트 이동 -> 커널 압축파일 다운로드 **\n// 다운받은 압축파일이 있는 경로 이동\n# cd 다운로드/\n# ls -l\n// 압축파일 이동\n# mv  linux.4.9.6.tar.xz  /usr/src\n# cd /usr/src\n\n// 압축풀기 **\n# tar  xfJ  linux.4.9.6.tar.xz\n# cd linux.4.9.6\n\n// 커널 설정 위한 관련 패키지 설치\n# apt-get -y install qt5-default libssl-dev\n... 다운받는중 ...\n\n// 커널 설정 초기화 **\n# make mrproper\n\n// 커널 환경 설정 **\n# make xconfig\n... 커널 설정 프로그램 ...\n-> 필요한 내용을 찾아 설정 추가/취소\n--- 영상에서는 USB포맷인 NTFS 파일시스템 지원 추가\n... 저장 후 닫기\n\n// 이전 정보 삭제 **\n# make clean\n\n// 커널 컴파일 및 설치 **\n# make : 커널 소스가 설정한 내용에 따라 컴파일 되는 것\n# make modules_install\n# make install\n-> 3가지 작업을 명령 한 줄로 \n# make; make modules_install; make install\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br")])])])}],t=n(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);r.options.__file="01.md";a.default=r.exports}}]);