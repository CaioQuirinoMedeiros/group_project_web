(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,n,t){"use strict";t.r(n);var a,r,c,o,s=t(0),i=t.n(s),u=t(30),l=t.n(u),p=t(15),m=t(14),d=t.n(m),b=t(13),f=t(97),g=t(90),h=t(19),O=Object(h.a)(),j=t(39),v=t(9),E=t(29),x=t(33),S=t.n(x),k=Object(E.createActions)({signInRequest:["email","password"],signInSuccess:["token"],signInFailure:[],signOut:null,signUpRequest:["name","email","password"],signUpSuccess:null,getPermissionsSuccess:["roles","permissions"]}),y=k.Types,w=k.Creators,C=y,T=w,M=S()({signedIn:!!localStorage.getItem("@saas:token"),token:localStorage.getItem("@saas:token"),roles:[],permissions:[]}),R=Object(E.createReducer)(M,(a={},Object(v.a)(a,y.SIGN_IN_SUCCESS,function(e,n){var t=n.token;return e.merge({signedIn:!0,token:t})}),Object(v.a)(a,y.SIGN_OUT,function(e){return e.merge({signedIn:!1,token:null})}),Object(v.a)(a,y.GET_PERMISSIONS_SUCCESS,function(e,n){var t=n.roles,a=n.permissions;return e.merge({roles:t,permissions:a})}),a)),_=t(53),P=Object(E.createActions)({getTeamsRequest:null,getTeamsSuccess:["data"],getTeamsFailure:null,selectTeam:["team"],openTeamModal:null,closeTeamModal:null,createTeamRequest:["name"],createTeamSuccess:["team"]}),I=P.Types,A=P.Creators,z=I,U=A,q=S()({data:[],teamModalOpen:!1,active:JSON.parse(localStorage.getItem("@saas:team"))||null}),D=Object(E.createReducer)(q,(r={},Object(v.a)(r,I.GET_TEAMS_SUCCESS,function(e,n){var t=n.data;return e.merge({data:t})}),Object(v.a)(r,I.SELECT_TEAM,function(e,n){var t=n.team;return localStorage.setItem("@saas:team",JSON.stringify(t)),e.merge({active:t})}),Object(v.a)(r,I.OPEN_TEAM_MODAL,function(e){return e.merge({teamModalOpen:!0})}),Object(v.a)(r,I.CLOSE_TEAM_MODAL,function(e){return e.merge({teamModalOpen:!1})}),Object(v.a)(r,I.CREATE_TEAM_SUCCESS,function(e,n){var t=n.team;return e.merge({data:[].concat(Object(_.a)(e.data),[t])})}),r)),L=Object(E.createActions)({getProjectsRequest:null,getProjectsSuccess:["data"],openProjectModal:null,closeProjectModal:null,createProjectRequest:["title"],createProjectSuccess:["project"],deleteProjectRequest:["id"],deleteProjectSuccess:["id"]}),N=L.Types,B=L.Creators,G=N,J=B,Q=S()({data:[],projectModalOpen:!1}),F=Object(E.createReducer)(Q,(c={},Object(v.a)(c,N.GET_PROJECTS_SUCCESS,function(e,n){var t=n.data;return e.merge({data:t})}),Object(v.a)(c,N.OPEN_PROJECT_MODAL,function(e){return e.merge({projectModalOpen:!0})}),Object(v.a)(c,N.CLOSE_PROJECT_MODAL,function(e){return e.merge({projectModalOpen:!1})}),Object(v.a)(c,N.CREATE_PROJECT_SUCCESS,function(e,n){var t=n.project;return e.merge({data:[].concat(Object(_.a)(e.data),[t])})}),Object(v.a)(c,N.DELETE_PROJECT_SUCCESS,function(e,n){var t=n.id;return e.merge({data:e.data.filter(function(e){return e.id!==t})})}),c)),H=t(31),V=Object(E.createActions)({openMemberModal:null,closeMemberModal:null,getMembersRequest:null,getMembersSuccess:["data"],updateMemberRequest:["id","roles"],inviteMemberRequest:["email"]}),K=V.Types,W=V.Creators,X=K,Y=W,Z=S()({data:[],membersModalOpen:!1}),$=Object(E.createReducer)(Z,(o={},Object(v.a)(o,K.OPEN_MEMBER_MODAL,function(e){return e.merge({memberModalOpen:!0})}),Object(v.a)(o,K.CLOSE_MEMBER_MODAL,function(e){return e.merge({memberModalOpen:!1})}),Object(v.a)(o,K.GET_MEMBERS_SUCCESS,function(e,n){var t=n.data;return e.merge({data:t})}),Object(v.a)(o,K.UPDATE_MEMBER_REQUEST,function(e,n){var t=n.id,a=n.roles;return e.merge({data:e.data.map(function(e){return e.id===t?Object(H.a)({},e,{roles:a}):e})})}),o)),ee=t(6),ne=t.n(ee),te=t(4),ae=t(17),re=t(93),ce=t.n(re).a.create({baseURL:"https://group-project-api.herokuapp.com"});ce.interceptors.request.use(function(e){var n=qe.getState().auth.token,t=qe.getState().teams.active,a=Object(H.a)({},e.headers);return n&&(a.Authorization="Bearer ".concat(n)),t&&(a.TEAM=t.slug),Object(H.a)({},e,{headers:a})});var oe=ce,se=ne.a.mark(pe),ie=ne.a.mark(me),ue=ne.a.mark(de),le=ne.a.mark(be);function pe(e){var n,t,a;return ne.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.email,t=e.password,r.prev=1,r.next=4,Object(te.b)(oe.post,"sessions",{email:n,password:t});case 4:return a=r.sent,localStorage.setItem("@saas:token",a.data.token),r.next=8,Object(te.d)(T.signInSuccess(a.data.token));case 8:return r.next=10,Object(te.d)(Object(ae.d)("/"));case 10:return r.next=12,Object(te.d)(m.actions.add({type:"success",title:"Bem-vindo",message:"Login realizado com sucesso"}));case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(te.d)(m.actions.add({type:"error",title:"Falha no login",message:"Verifique seu email/senha"}));case 18:case"end":return r.stop()}},se,null,[[1,14]])}function me(){return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem("@saas:token"),localStorage.removeItem("@saas:team"),e.next=4,Object(te.d)(Object(ae.d)("/signin"));case 4:case"end":return e.stop()}},ie)}function de(e){var n,t,a,r;return ne.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return n=e.name,t=e.email,a=e.password,c.prev=1,c.next=4,Object(te.b)(oe.post,"users",{name:n,email:t,password:a});case 4:return r=c.sent,localStorage.setItem("@saas:token",r.data.token),c.next=8,Object(te.d)(T.signInSuccess(r.data.token));case 8:return c.next=10,Object(te.d)(Object(ae.d)("/"));case 10:return c.next=12,Object(te.d)(m.actions.add({type:"success",title:"Bem-vindo",message:"Login realizado com sucesso"}));case 12:c.next=18;break;case 14:return c.prev=14,c.t0=c.catch(1),c.next=18,Object(te.d)(m.actions.add({type:"error",title:"Falha no cadastro",message:"Ops! Algo deu errado ao cadastrar o usu\xe1rio"}));case 18:case"end":return c.stop()}},ue,null,[[1,14]])}function be(){var e,n,t,a,r;return ne.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(te.e)(function(e){return e.teams.active});case 2:return e=c.sent,c.next=5,Object(te.e)(function(e){return e.auth.signedIn});case 5:return c.next=7,c.sent;case 7:if(c.sent&&e){c.next=10;break}return c.abrupt("return");case 10:return c.next=12,Object(te.b)(oe.get,"permissions");case 12:return n=c.sent,t=n.data,a=t.roles,r=t.permissions,c.next=16,Object(te.d)(T.getPermissionsSuccess(a,r));case 16:case"end":return c.stop()}},le)}var fe=ne.a.mark(he),ge=ne.a.mark(Oe);function he(){var e;return ne.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(te.b)(oe.get,"teams");case 2:return e=n.sent,n.next=5,Object(te.d)(U.getTeamsSuccess(e.data));case 5:case"end":return n.stop()}},fe)}function Oe(e){var n,t;return ne.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.name,a.prev=1,a.next=4,Object(te.b)(oe.post,"teams",{name:n});case 4:return t=a.sent,a.next=7,Object(te.d)(U.createTeamSuccess(t.data));case 7:return a.next=9,Object(te.d)(U.closeTeamModal());case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,Object(te.d)(m.actions.add({type:"error",title:"Erro na opera\xe7\xe3o",message:"Houve um erro, tente novamente"}));case 15:case"end":return a.stop()}},ge,null,[[1,11]])}var je=ne.a.mark(xe),ve=ne.a.mark(Se),Ee=ne.a.mark(ke);function xe(){var e;return ne.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(te.b)(oe.get,"projects");case 2:return e=n.sent,n.next=5,Object(te.d)(J.getProjectsSuccess(e.data));case 5:case"end":return n.stop()}},je)}function Se(e){var n,t;return ne.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.title,a.prev=1,a.next=4,Object(te.b)(oe.post,"projects",{title:n});case 4:return t=a.sent,a.next=7,Object(te.d)(J.createProjectSuccess(t.data));case 7:return a.next=9,Object(te.d)(J.closeProjectModal());case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(1),a.next=15,Object(te.d)(m.actions.add({type:"error",title:"Erro na opera\xe7\xe3o",message:"Houve um erro, tente novamente"}));case 15:case"end":return a.stop()}},ve,null,[[1,11]])}function ke(e){var n;return ne.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.id,t.prev=1,t.next=4,Object(te.b)(oe.delete,"projects/".concat(n));case 4:return t.next=6,Object(te.d)(J.deleteProjectSuccess(n));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(1),t.next=12,Object(te.d)(m.actions.add({type:"error",title:"Erro na opera\xe7\xe3o",message:"Houve um erro ao tentar deletar o projeto"}));case 12:case"end":return t.stop()}},Ee,null,[[1,8]])}var ye=ne.a.mark(Te),we=ne.a.mark(Me),Ce=ne.a.mark(Re);function Te(){var e;return ne.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(te.b)(oe.get,"members");case 2:return e=n.sent,n.next=5,Object(te.d)(Y.getMembersSuccess(e.data));case 5:case"end":return n.stop()}},ye)}function Me(e){var n,t;return ne.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.id,t=e.roles,a.prev=1,a.next=4,Object(te.b)(oe.put,"members/".concat(n),{roles:t.map(function(e){return e.id})});case 4:return a.next=6,Object(te.d)(m.actions.add({type:"success",title:"Membro atualizado",message:"O membro foi atualizado com sucesso"}));case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(1),a.next=12,Object(te.d)(m.actions.add({type:"error",title:"Erro na opera\xe7\xe3o",message:"Houve um erro ao atualizar o membro, tente novamente"}));case 12:case"end":return a.stop()}},we,null,[[1,8]])}function Re(e){var n;return ne.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.email,t.prev=1,t.next=4,Object(te.b)(oe.post,"invites",{invites:[n]});case 4:return t.next=6,Object(te.d)(m.actions.add({type:"success",title:"Membro convidado",message:"O convite foi enviado com sucesso"}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(1),t.next=12,Object(te.d)(m.actions.add({type:"error",title:"Erro na opera\xe7\xe3o",message:"Houve um erro ao convidar o membro, tente novamente"}));case 12:case"end":return t.stop()}},Ce,null,[[1,8]])}var _e=ne.a.mark(Pe);function Pe(){return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.a)([Object(te.c)(be),Object(te.f)(C.SIGN_IN_REQUEST,pe),Object(te.f)(C.SIGN_OUT,me),Object(te.f)(C.SIGN_UP_REQUEST,de),Object(te.f)(z.GET_TEAMS_REQUEST,he),Object(te.f)(z.CREATE_TEAM_REQUEST,Oe),Object(te.f)(z.SELECT_TEAM,xe),Object(te.f)(z.SELECT_TEAM,be),Object(te.f)(G.GET_PROJECTS_REQUEST,xe),Object(te.f)(G.CREATE_PROJECT_REQUEST,Se),Object(te.f)(G.DELETE_PROJECT_REQUEST,ke),Object(te.f)(X.GET_MEMBERS_REQUEST,Te),Object(te.f)(X.UPDATE_MEMBER_REQUEST,Me),Object(te.f)(X.INVITE_MEMBER_REQUEST,Re)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},_e)}var Ie,Ae=Object(f.a)(),ze=[Ae,Object(g.a)(O)],Ue=Object(b.e)((Ie=O,Object(b.c)({auth:R,toastr:m.reducer,teams:D,projects:F,members:$,router:Object(j.b)(Ie)})),b.a.apply(void 0,ze));Ae.run(Pe);var qe=Ue,De=t(28),Le=t(54),Ne=function(e){var n=e.component,t=Object(Le.a)(e,["component"]);return i.a.createElement(De.b,Object.assign({},t,{render:function(e){return qe.getState().auth.signedIn?i.a.createElement(n,e):i.a.createElement(De.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))};Ne.defaultProps={location:null};var Be=Ne,Ge=function(e){var n=e.component,t=Object(Le.a)(e,["component"]);return i.a.createElement(De.b,Object.assign({},t,{render:function(e){return qe.getState().auth.signedIn?i.a.createElement(De.a,{to:{pathname:"/",state:{from:e.location}}}):i.a.createElement(n,e)}}))};Ge.defaultProps={location:null};var Je=Ge,Qe=t(23),Fe=t(24),He=t(26),Ve=t(25),Ke=t(27),We=t(10),Xe=t(11);function Ye(){var e=Object(We.a)(["\n  background: #36393f;\n  border-radius: 5px;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);\n  padding: 40px;\n  width: ","px;\n\n  h1 {\n    font-size: 26px;\n    font-weight: 500;\n    text-align: center;\n    margin: 0 0 10px;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n\n    > span {\n      color: #b9bbbe;\n      font-size: 14px;\n      line-height: 16px;\n      font-weight: 600;\n      margin-top: 15px;\n    }\n\n    > input {\n      height: 40px;\n      padding: 10px;\n      border-radius: 3px;\n      border: 1px solid rgba(0, 0, 0, 0.3);\n      background-color: rgba(0, 0, 0, 0.1);\n      color: #f6f6f6;\n      margin-top: 8px;\n      transition: all 0.2s;\n      font-size: 16px;\n\n      &:focus {\n        border-color: #7289da;\n      }\n    }\n\n    > button {\n      margin-top: 20px;\n    }\n  }\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(We.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Ze=function(){return e},e}var $e=Xe.c.div(Ze()),en=Xe.c.div(Ye(),function(e){return"big"===e.size?600:400}),nn=function(e){var n=e.children,t=e.size;return i.a.createElement($e,null,i.a.createElement(en,{size:t},n))};nn.defaultProps={size:"default"};var tn=nn;function an(){var e=Object(We.a)(["\n      background: none;\n      &:hover {\n        background: none;\n        opacity: 0.6;\n      }\n    "]);return an=function(){return e},e}function rn(){var e=Object(We.a)(["\n  border-radius: 3px;\n  transition: all 0.2s;\n  background: #7289da;\n  border: none;\n  color: #fff;\n  font-size: 12px;\n  padding: 0 10px;\n  text-transform: uppercase;\n  font-weight: 700;\n\n  ",";\n  ",";\n\n  ","\n"]);return rn=function(){return e},e}function cn(){var e=Object(We.a)(["\n    background: #b9bbbe;\n    color: #666;\n    &:hover {\n      background: #999;\n    }\n  "]);return cn=function(){return e},e}function on(){var e=Object(We.a)(["\n    background: #e04848;\n    &hover {\n      background: #a43d3d;\n    }\n  "]);return on=function(){return e},e}function sn(){var e=Object(We.a)(["\n    background: #7289da;\n\n    &:hover {\n      background: #5f73bc;\n    }\n  "]);return sn=function(){return e},e}function un(){var e=Object(We.a)(["\n    height: 44px;\n    font-size: 18px;\n  "]);return un=function(){return e},e}function ln(){var e=Object(We.a)(["\n    height: 36px;\n    font-size: 14px;\n  "]);return ln=function(){return e},e}function pn(){var e=Object(We.a)(["\n    height: 28px;\n    font-size: 12px;\n  "]);return pn=function(){return e},e}var mn={small:Object(Xe.b)(pn()),default:Object(Xe.b)(ln()),big:Object(Xe.b)(un())},dn={default:Object(Xe.b)(sn()),danger:Object(Xe.b)(on()),gray:Object(Xe.b)(cn())},bn=Xe.c.button.attrs({type:"button"})(rn(),function(e){return mn[e.size||"default"]},function(e){return dn[e.color||"default"]},function(e){return!1===e.filled&&Object(Xe.b)(an())});function fn(){var e=Object(We.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #e04848;\n  background: transparent;\n  color: #e04848;\n  font-weight: bold;\n  transition: all 0.2s;\n\n  &:hover {\n    border-color: #a43d3d;\n    color: #a43d3d;\n  }\n"]);return fn=function(){return e},e}function gn(){var e=Object(We.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px dashed rgba(255, 255, 255, 0.3);\n  margin: 0 0 8px;\n  background: transparent;\n  color: rgba(255, 255, 255, 0.3);\n  font-weight: bold;\n  transition: all 0.2s;\n\n  &:hover {\n    border: 1px dashed rgba(255, 255, 255, 0.6);\n    color: rgba(255, 255, 255, 0.6);\n  }\n"]);return gn=function(){return e},e}function hn(){var e=Object(We.a)(["\n  border: none;\n  background: transparent;\n  margin: 0 0 8px;\n\n  img {\n    transition: all 0.2s;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n  }\n\n  &:hover img {\n    border-radius: 30%;\n  }\n"]);return hn=function(){return e},e}function On(){var e=Object(We.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return On=function(){return e},e}function jn(){var e=Object(We.a)(["\n  background: #202225;\n  padding: 20px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"]);return jn=function(){return e},e}var vn=Xe.c.aside(jn()),En=Xe.c.div(On()),xn=Xe.c.button(hn()),Sn=Xe.c.button(gn()),kn=Xe.c.button(fn()),yn=function(e){function n(){var e,t;Object(Qe.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(He.a)(this,(e=Object(Ve.a)(n)).call.apply(e,[this].concat(r)))).state={newTeam:""},t.handleTeamSelect=function(e){(0,t.props.selectTeam)(e)},t.handleInputChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t.handleCreateTeam=function(e){e.preventDefault(),(0,t.props.createTeamRequest)(t.state.newTeam)},t}return Object(Ke.a)(n,e),Object(Fe.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.getTeamsRequest)()}},{key:"render",value:function(){var e=this,n=this.props,t=n.teams,a=n.openTeamModal,r=n.closeTeamModal,c=n.signOut,o=this.state.newTeam;return i.a.createElement(vn,null,i.a.createElement(En,null,t.data.map(function(n){return i.a.createElement(xn,{key:n.id,onClick:function(){return e.handleTeamSelect(n)}},i.a.createElement("img",{src:"https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=".concat(n.name),alt:n.name}))}),i.a.createElement(xn,null),i.a.createElement(Sn,{onClick:a},"NOVO"),t.teamModalOpen&&i.a.createElement(tn,null,i.a.createElement("h1",null,"Criar time"),i.a.createElement("form",{onSubmit:this.handleCreateTeam},i.a.createElement("span",null,"NOME"),i.a.createElement("input",{name:"newTeam",value:o,onChange:this.handleInputChange}),i.a.createElement(bn,{size:"big",type:"submit"},"Salvar"),i.a.createElement(bn,{size:"small",color:"gray",onClick:r},"Cancelar")))),i.a.createElement(kn,{onClick:c},"SAIR"))}}]),n}(s.Component),wn=Object(p.connect)(function(e){return{teams:e.teams}},function(e){return Object(b.b)(Object(H.a)({},U,T),e)})(yn),Cn=function(e,n,t){var a=e.roles,r=e.permissions;return!(n&&!a.includes(n))&&!(t&&!r.includes(t))},Tn=Object(p.connect)(function(e){return{auth:e.auth}})(function(e){var n=e.children,t=e.auth,a=e.checkRole,r=e.checkPermission;return"function"===typeof n?n(Cn(t,a,r)):Cn(t,a,r)&&n}),Mn=t(40),Rn=t(96);function _n(){var e=Object(We.a)(["\n  padding-bottom: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n"]);return _n=function(){return e},e}function Pn(){var e=Object(We.a)(["\n  list-style: none;\n  margin: 20px 0 0;\n\n  li {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px 0 0;\n\n    &:first-child {\n      margin: 0;\n    }\n\n    strong {\n      font-size: 18px;\n    }\n\n    > div {\n      width: 320px;\n      color: #666;\n    }\n  }\n"]);return Pn=function(){return e},e}var In=Xe.c.ul(Pn()),An=Xe.c.form(_n()),zn=function(e){function n(){var e,t;Object(Qe.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(He.a)(this,(e=Object(Ve.a)(n)).call.apply(e,[this].concat(r)))).state={roles:[],invite:""},t.handleInputChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t.handleInvite=function(e){e.preventDefault();var n=t.state.invite;(0,t.props.inviteMemberRequest)(n),t.setState({invite:""})},t.handleRolesChange=function(e,n){(0,t.props.updateMemberRequest)(e,n)},t}return Object(Ke.a)(n,e),Object(Fe.a)(n,[{key:"componentDidMount",value:function(){var e=Object(Mn.a)(ne.a.mark(function e(){var n;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(0,this.props.getMembersRequest)(),e.next=4,oe.get("roles");case 4:n=e.sent,this.setState({roles:n.data});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,n=this.props,t=n.closeMemberModal,a=n.members,r=this.state,c=r.roles,o=r.invite;return i.a.createElement(tn,{size:"big"},i.a.createElement("h1",null,"Membros"),i.a.createElement(Tn,{checkPermission:"invites_create"},i.a.createElement(An,{onSubmit:this.handleInvite},i.a.createElement("input",{name:"invite",placeholder:"Convidar para o time",value:o,onChange:this.handleInputChange}),i.a.createElement(bn,{type:"submit"},"Enviar"))),i.a.createElement("form",{onSubmit:function(){}},i.a.createElement(In,null,a.data.map(function(n){return i.a.createElement("li",{key:n.id},i.a.createElement("strong",null,n.user.name),i.a.createElement(Tn,{checkRole:"administrator"},function(t){return i.a.createElement(Rn.a,{isMulti:!0,isDisabled:!t,value:n.roles,options:c,getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.id},onChange:function(t){return e.handleRolesChange(n.id,t)}})}))})),i.a.createElement(bn,{onClick:t,filled:!1,color:"gray"},"Cancelar")))}}]),n}(s.Component),Un=Object(p.connect)(function(e){return{members:e.members}},function(e){return Object(b.b)(Y,e)})(zn);function qn(){var e=Object(We.a)(["\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  margin: 0 0 20px;\n  padding: 20px;\n  cursor: pointer;\n  transition: background 0.3s;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.3);\n  }\n\n  button {\n    opacity: 0.4;\n    transition: opacity 0.3s;\n\n    &:hover {\n      opacity: 0.9;\n    }\n  }\n\n  p {\n    font-size: 18px;\n  }\n"]);return qn=function(){return e},e}function Dn(){var e=Object(We.a)(["\n  flex: 1;\n  padding: 20px;\n  overflow-y: scroll;\n\n  > header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 20px;\n  }\n\n  h1 {\n    font-size: 20px;\n  }\n\n  div {\n    > button {\n      margin-left: 10px;\n    }\n  }\n"]);return Dn=function(){return e},e}var Ln=Xe.c.div(Dn()),Nn=Xe.c.div(qn()),Bn=function(e){function n(){var e,t;Object(Qe.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(He.a)(this,(e=Object(Ve.a)(n)).call.apply(e,[this].concat(r)))).state={newProject:""},t.handleInputChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t.handleCreateProject=function(e){e.preventDefault(),(0,t.props.createProjectRequest)(t.state.newProject)},t}return Object(Ke.a)(n,e),Object(Fe.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.getProjectsRequest;e.activeTeam&&n()}},{key:"render",value:function(){var e=this.props,n=e.activeTeam,t=e.projects,a=e.openProjectModal,r=e.closeProjectModal,c=e.openMemberModal,o=e.deleteProjectRequest,s=e.members,u=this.state.newProject;return n?i.a.createElement(Ln,null,i.a.createElement("header",null,i.a.createElement("h1",null,n.name),i.a.createElement("div",null,i.a.createElement(Tn,{checkPermission:"projects_create"},i.a.createElement(bn,{onClick:a},"+ Novo")),i.a.createElement(bn,{onClick:c},"Membros"))),t.data.map(function(e){return i.a.createElement(Nn,{key:e.id},i.a.createElement("p",null,e.title),i.a.createElement(Tn,{checkPermission:"projects_create"},i.a.createElement(bn,{color:"danger",onClick:function(){return o(e.id)}},"delete")))}),t.projectModalOpen&&i.a.createElement(tn,null,i.a.createElement("h1",null,"Criar projeto"),i.a.createElement("form",{onSubmit:this.handleCreateProject},i.a.createElement("span",null,"NOME"),i.a.createElement("input",{name:"newProject",value:u,onChange:this.handleInputChange}),i.a.createElement(bn,{size:"big",type:"submit"},"Salvar"),i.a.createElement(bn,{size:"small",color:"gray",onClick:r},"Cancelar"))),s.memberModalOpen&&i.a.createElement(Un,null)):null}}]),n}(s.Component);Bn.defaultProps={activeTeam:null};var Gn=Object(p.connect)(function(e){return{activeTeam:e.teams.active,projects:e.projects,members:e.members}},function(e){return Object(b.b)(Object(H.a)({},J,Y),e)})(Bn);function Jn(){var e=Object(We.a)(["\n  height: 100%;\n  display: flex;\n  align-items: stretch;\n"]);return Jn=function(){return e},e}var Qn=Xe.c.div(Jn()),Fn=function(e){function n(){return Object(Qe.a)(this,n),Object(He.a)(this,Object(Ve.a)(n).apply(this,arguments))}return Object(Ke.a)(n,e),Object(Fe.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(Qn,null,i.a.createElement(wn,null),i.a.createElement(Gn,null))}}]),n}(s.Component),Hn=t(34);function Vn(){var e=Object(We.a)(["\n  background: #36393f;\n  border-radius: 5px;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);\n  padding: 40px;\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n\n  h1 {\n    font-size: 26px;\n    font-weight: 500;\n    text-align: center;\n    margin: 0 0 10px;\n  }\n\n  span {\n    color: #b9bbbe;\n    font-size: 14px;\n    line-height: 16px;\n    font-weight: 600;\n    margin-top: 15px;\n  }\n\n  input {\n    height: 40px;\n    padding: 10px;\n    border-radius: 3px;\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    background-color: rgba(0, 0, 0, 0.1);\n    color: #f6f6f6;\n    margin-top: 8px;\n    transition: all 0.2s;\n    font-size: 16px;\n\n    &:focus {\n      border-color: #7289da;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    text-align: center;\n    margin-top: 10px;\n    color: #ccc;\n    transition: all 0.3s;\n\n    &:hover {\n      color: #fff;\n    }\n  }\n\n  button {\n    margin-top: 20px;\n  }\n"]);return Vn=function(){return e},e}function Kn(){var e=Object(We.a)(["\n  flex: 1;\n  height: 100%;\n  background: #202225;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Kn=function(){return e},e}var Wn=Xe.c.div(Kn()),Xn=Xe.c.form(Vn()),Yn=function(e){function n(){var e,t;Object(Qe.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(He.a)(this,(e=Object(Ve.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",email:"",password:""},t.handleSubmit=function(){var e=Object(Mn.a)(ne.a.mark(function e(n){var a,r,c,o,s;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=t.state,r=a.name,c=a.email,o=a.password,s=t.props.signUpRequest,e.next=5,s(r,c,o);case 5:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.handleInputChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t}return Object(Ke.a)(n,e),Object(Fe.a)(n,[{key:"render",value:function(){var e=this.state,n=e.name,t=e.email,a=e.password;return i.a.createElement(Wn,null,i.a.createElement(Xn,{onSubmit:this.handleSubmit},i.a.createElement("h1",null,"Criar conta"),i.a.createElement("span",null,"Nome"),i.a.createElement("input",{type:"name",name:"name",value:n,onChange:this.handleInputChange}),i.a.createElement("span",null,"Email"),i.a.createElement("input",{type:"email",name:"email",value:t,onChange:this.handleInputChange}),i.a.createElement("span",null,"Senha"),i.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleInputChange}),i.a.createElement(bn,{size:"big",color:"default",type:"submit"},"Criar"),i.a.createElement(Hn.a,{to:"/signin"},"Entrar")))}}]),n}(s.Component),Zn=Object(p.connect)(null,function(e){return Object(b.b)(T,e)})(Yn),$n=function(e){function n(){var e,t;Object(Qe.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(He.a)(this,(e=Object(Ve.a)(n)).call.apply(e,[this].concat(r)))).state={email:"",password:""},t.handleSubmit=function(){var e=Object(Mn.a)(ne.a.mark(function e(n){var a,r,c,o;return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=t.state,r=a.email,c=a.password,o=t.props.signInRequest,e.next=5,o(r,c);case 5:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.handleInputChange=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t}return Object(Ke.a)(n,e),Object(Fe.a)(n,[{key:"render",value:function(){var e=this.state,n=e.email,t=e.password;return i.a.createElement(Wn,null,i.a.createElement(Xn,{onSubmit:this.handleSubmit},i.a.createElement("h1",null,"Bem-vindo"),i.a.createElement("span",null,"Email"),i.a.createElement("input",{type:"email",name:"email",value:n,onChange:this.handleInputChange}),i.a.createElement("span",null,"Senha"),i.a.createElement("input",{type:"password",name:"password",value:t,onChange:this.handleInputChange}),i.a.createElement(bn,{size:"big",color:"default",type:"submit"},"Entrar"),i.a.createElement(Hn.a,{to:"/signup"},"Criar conta")))}}]),n}(s.Component),et=Object(p.connect)(null,function(e){return Object(b.b)(T,e)})($n),nt=function(){return i.a.createElement(j.a,{history:O},i.a.createElement(De.d,null,i.a.createElement(Je,{path:"/signin",component:et}),i.a.createElement(Je,{path:"/signup",component:Zn}),i.a.createElement(Be,{path:"/",exact:!0,component:Fn}),i.a.createElement(De.a,{to:"/signin"})))};t(186);function tt(){var e=Object(We.a)(['\n  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swap");\n\n  * {\n    padding: 0;\n    margin: 0;\n    outline: none;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #353940;\n    color: #fff;\n    font-family: \'Source Sans Pro\', "Arial", sans-serif;\n    text-rendering: optimizeLegibility !important;\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  html, body, #root {\n    height: 100%\n  }\n\n  input, button {\n    font-family: \'Source Sans Pro\', "Arial", sans-serif;\n  }\n\n  button {\n    cursor: pointer;\n  }\n']);return tt=function(){return e},e}var at=Object(Xe.a)(tt()),rt=function(){return i.a.createElement(p.Provider,{store:qe},i.a.createElement(i.a.Fragment,null,i.a.createElement(nt,null),i.a.createElement(at,null),i.a.createElement(d.a,{transitionIn:"fadeIn",transitionOut:"fadeOut",timeOut:4e3})))};l.a.render(i.a.createElement(rt,null),document.getElementById("root"))},99:function(e,n,t){e.exports=t(187)}},[[99,1,2]]]);
//# sourceMappingURL=main.57cc378d.chunk.js.map