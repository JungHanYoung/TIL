(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{170:function(s,t,e){s.exports=e.p+"assets/img/grub1.d940ab6c.png"},171:function(s,t,e){s.exports=e.p+"assets/img/grub2.6d74228b.png"},206:function(s,t,e){"use strict";e.r(t);var a=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#이것이-우분투-리눅스다"}},[s._v("이것이 우분투 리눅스다")]),e("ul",[e("li",[e("a",{attrs:{href:"#_4장-필수-개념과-명령어"}},[s._v("4장 필수 개념과 명령어")]),e("ul",[e("li",[e("a",{attrs:{href:"#파이프"}},[s._v("파이프")])]),e("li",[e("a",{attrs:{href:"#필터"}},[s._v("필터")])]),e("li",[e("a",{attrs:{href:"#리다이렉션"}},[s._v("리다이렉션")])]),e("li",[e("a",{attrs:{href:"#프로세스-process"}},[s._v("프로세스(Process)")])]),e("li",[e("a",{attrs:{href:"#서비스"}},[s._v("서비스")])]),e("li",[e("a",{attrs:{href:"#소켓"}},[s._v("소켓")])]),e("li",[e("a",{attrs:{href:"#응급복구"}},[s._v("응급복구")])])])])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"이것이-우분투-리눅스다"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#이것이-우분투-리눅스다","aria-hidden":"true"}},[this._v("#")]),this._v(" 이것이 우분투 리눅스다")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"_4장-필수-개념과-명령어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4장-필수-개념과-명령어","aria-hidden":"true"}},[this._v("#")]),this._v(" 4장 필수 개념과 명령어")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"파이프"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#파이프","aria-hidden":"true"}},[this._v("#")]),this._v(" 파이프")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("두 개의 프로그램을 연결해 주는 연결통로")]),this._v(" "),t("li",[this._v("'|' - 해당 기호로 파이프 표시")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h5",{attrs:{id:"실습"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실습","aria-hidden":"true"}},[this._v("#")]),this._v(" 실습")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# ls -l /etc\n.... 파일 및 디렉토리들 ...\n// 해당 출력을 페이지단위로 보기! -> 파이프 이용\n# ls -l /etc | more\n... 페이지 단위로 출력, spacebar로 다음 페이지 이동\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br"),t("span",{staticClass:"line-number"},[this._v("5")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"필터"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#필터","aria-hidden":"true"}},[this._v("#")]),this._v(" 필터")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("필요한 것만 걸러주는 명령어")]),this._v(" "),t("li",[this._v("주로 '파이프'를 이용")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h5",{attrs:{id:"실습-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실습-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 실습")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 현재 컴퓨터에서 작동되는 프로세스 출력\n# ps -ef\n... 프로세스들 ...\n// 'bash'키워드가 들어간 프로세스 출력\n# ps -ef | grep bash\n... 'bash' 키워드가 들어간 프로세스만 출력된다 ...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"리다이렉션"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#리다이렉션","aria-hidden":"true"}},[this._v("#")]),this._v(" 리다이렉션")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("표준 입출력 방향을 바꿔줌")]),this._v(" "),t("li",[this._v("출력 내용을 파일로 저장할 때 씀")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h5",{attrs:{id:"실습-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실습-3","aria-hidden":"true"}},[this._v("#")]),this._v(" 실습")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# ls -l > list.txt\n.. 해당 명령에 대한 출력을 list.txt에 저장\n// list.txt를 sort하고 sort한 내용 다시 저장\n# sort < list.txt > out.txt\n// 확인\n# cat out.txt\n... 완료\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"프로세스-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-process","aria-hidden":"true"}},[this._v("#")]),this._v(" 프로세스(Process)")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[e("p",[s._v("하드디스크에 저장된 프로그램이 메모리에 로딩되어 활성화된 것")]),s._v(" "),e("ul",[e("li",[s._v("포어그라운드(Foreground) 프로세스 : 실행화면에 나타나 사용자와 상호작용하는 프로세스\n"),e("ul",[e("li",[s._v("대부분의 응용프로그램")])])]),s._v(" "),e("li",[s._v("백그라운드(background) 프로세스 : 실행은 되었지만, 화면에 나타나지 않고 실행되는 프로세스\n"),e("ul",[e("li",[s._v("백신프로그램, 서버 데몬 등")])])])])]),s._v(" "),e("li",[e("p",[s._v("부모 프로세스와 자식 프로세스")]),s._v(" "),e("ul",[e("li",[s._v("모든 프로세스는 부모 프로세스를 가짐")]),s._v(" "),e("li",[s._v("부모 프로세스를 kill하면 자식도 자동으로 kill")])])]),s._v(" "),e("li",[e("p",[s._v("관련 명령어")]),s._v(" "),e("ul",[e("li",[s._v("ps : 현재 프로세스의 상태를 확인하는 명령\n"),e("ul",[e("li",[s._v('"ps -ef | grep <프로세스 이름>" 주로 사용')])])]),s._v(" "),e("li",[s._v("kill : 프로세스를 강제로 종료하는 명령어\n"),e("ul",[e("li",[s._v('"kill -9 <프로세스 번호>"는 강제종료')])])]),s._v(" "),e("li",[s._v("pstree : 프로세스를 부모, 자식 관계의 트리 형태로 보여줌")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h5",{attrs:{id:"실습-foreground-프로세스와-background-프로세스의-상호-전환"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실습-foreground-프로세스와-background-프로세스의-상호-전환","aria-hidden":"true"}},[this._v("#")]),this._v(" 실습 - Foreground 프로세스와 Background 프로세스의 상호 전환")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("*** 프로세스 종료 ***\n// 아무것도 출력하지 않는 포어그라운드 프로세스\n# yes > /dev/null\n\n// ** 새 터미널을 열고 ** 프로세스 확인\n# ps -ef | grep yes\nroot    1774    1635    95  21:23   pts/18  00:00:12    yes\n->\n프로세스번호 : 1774\n부모프로세스번호 : 1635\n\n// kill로 프로세스 강제종료\n# kill -9 1774\n... 이전 터미널의 작업이 종료된 것 확인\n\n// 부모프로세스를 강제종료하면..?\n# kill -9 1635\n... 터미널 자체가 닫히는 것을 확인\n\n*** 포어그라운드 -> 백그라운드 -> 포어그라운드\n# yes > /dev/null\n// 해당 작업을 잠시 멈춤\n<ctrl + z>\n[1]+ 정지됨     yes > /dev/null\n\n// 백그라운드로 전환\n# bg\n... 전환 완료\n\n// 포어그라운드 전환 위한 작업번호 확인\n# jobs\n[1]+ 실행중 ...\n// 작업번호 1을 포어그라운드 전환\n# fg 1\n... 전환 완료\n\n*** 처음부터 백그라운드로 실행\n# gedit &\n... &을 붙이면 편집기도 켜지고 터미널도 사용가능하다.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"서비스"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#서비스","aria-hidden":"true"}},[this._v("#")]),this._v(" 서비스")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[s._v("시스템과 독자적으로 구동되어 제공하는 프로세스\n"),e("ul",[e("li",[s._v("웹서버, DB서버, FTP서버 등")])])]),s._v(" "),e("li",[s._v("실행 및 종료는 'systemctl start/stop/restart <서비스이름>'\n"),e("ul",[e("li",[s._v("서비스 실행 스크립트 파일은 /lib/systemd/system 디렉토리에 '서비스이름.service'로 확인")])])]),s._v(" "),e("li",[s._v("부팅과 동시에 서비스 자동 실행여부 지정가능\n"),e("ul",[e("li",[s._v("systemctl list-unit-files 명령 실행시 현재 사용(enable)과 사용안함(disable) 확인가능")]),s._v(" "),e("li",[s._v("rcconf 명령으로 설정")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"소켓"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#소켓","aria-hidden":"true"}},[this._v("#")]),this._v(" 소켓")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("항상 가동되는 서비스와 다르게, 소켓은 외부에서 특정 서비스를 요청한 경우 systemd가 구동시킨다.")]),this._v(" "),t("li",[this._v("요청이 끝나면 소켓도 종료된다.")]),this._v(" "),t("li",[this._v("단점 : 서비스 요청할 때는 처음 연결되는 시간이 보통 서비스보다 약간 더 걸릴 수 있다.")]),this._v(" "),t("li",[this._v("장점 : 평소에 가동이 안되므로 메모리를 아낄 수 있다.")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"응급복구"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#응급복구","aria-hidden":"true"}},[this._v("#")]),this._v(" 응급복구")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h5",{attrs:{id:"실습-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#실습-4","aria-hidden":"true"}},[this._v("#")]),this._v(" 실습")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("root 비밀번호를 분실하였을 때")]),this._v(" "),t("li",[this._v("응급복구모드로 들어가 비밀번호 재설정")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("blockquote",[a("p",[s._v("부팅시 ESC를 누르면")]),s._v(" "),a("p",[a("img",{attrs:{src:e(170),alt:"An Image"}})]),s._v(" "),a("p",[s._v("'e'키 입력")]),s._v(" "),a("p",[a("img",{attrs:{src:e(171),alt:"An Image"}})]),s._v(" "),a("p",[s._v("초록밑줄의 내용을 추가")]),s._v(" "),a("p",[s._v("ctrl + x 로 부팅")]),s._v(" "),a("p",[s._v("자동으로 root 계정 로그인")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# mount\n... / 파티션이 읽기전용(ro)로 마운트되어 패스워드 설정 불가 -> 응급복구모드로 들어갈 시 읽기전용으로 마운트됨\n\n// 읽기전용을 읽기쓰기로 다시 마운트\n# mount -o remount,rw /\n\n// 패스워드 변경\n# passwd\n... 새 패스워드 설정\n... 변경 성공\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("해당 방법으로 들어갈 수 있다면 심각한 문제.")]),this._v(" "),t("li",[this._v("실제 컴퓨터 운용시 GRUB 편집 자체를 막도록한다.")]),this._v(" "),t("li",[this._v("보통은 GRUB에 비밀번호 설정 또는 CMOS를 걸어놓거나 한다.")])])}],n=e(0),r=Object(n.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[e("p"),s._m(0),e("p"),s._v(" "),s._m(1),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.youtube.com/playlist?list=PLVsNizTWUw7H0hL3MIk4POxadZVwNOycL",target:"_blank",rel:"noopener noreferrer"}},[s._v("유튜브 링크"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("4장 9교시 : 파이프, 필터, 리다이렉션, 응급복구")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),s._m(11),s._v(" "),s._m(12),s._v(" "),s._m(13),s._v(" "),s._m(14),s._m(15),s._v(" "),s._m(16),s._v(" "),s._m(17),s._v(" "),s._m(18),s._m(19),s._v(" "),s._m(20),s._v(" "),s._m(21),s._v(" "),s._m(22),s._v(" "),s._m(23),s._v(" "),s._m(24),s._v(" "),s._m(25),s._v(" "),s._m(26),s._v(" "),s._m(27),s._m(28)])},a,!1,null,null,null);r.options.__file="29.md";t.default=r.exports}}]);