(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){e.exports=a(57)},44:function(e,t,a){},45:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(14),r=a.n(s),c=(a(44),a(3)),l=a(4),o=a(6),m=a(5),d=a(25),u=a.n(d),p=(a(45),a(21)),h=a(27),f=a(30),g=a.n(f),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(p.a)(e)),e}return Object(l.a)(a,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,t="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",t)}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var t=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat()}var a=i.a.memo((function(){return i.a.createElement(h.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,t){return!0}));return i.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},i.a.createElement("div",{className:"row aligner",style:{height:"100%"}},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"header-content"},i.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),i.a.createElement("br",null),i.a.createElement("h1",{className:"mb-0"},i.a.createElement(h.a,{steps:[t],wrapper:"p"})),i.a.createElement("div",{className:"title-container"},i.a.createElement(a,null)),i.a.createElement("div",{className:"resume-button-container"},i.a.createElement("a",{href:"https://drive.google.com/file/d/1TFo3G1c6tqcn_b1qVCreeJBGgv4R88CD/view?usp=share_link",target:"_blank",rel:"noopener noreferrer",className:"resume-button"},"Resume")),i.a.createElement("div",{className:"theme-switch-container"},i.a.createElement(g.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#6E5AAD",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:i.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:i.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"}))))))}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e;this.props.sharedBasicInfo&&(e=this.props.sharedBasicInfo.social.map((function(e){var t="0 0 30px rgba(157, 138, 222, 0.5)";return i.a.createElement("span",{key:e.name,className:"m-4"},i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",margin:"0 6px",fontSize:"24px",color:"#fff",transition:"box-shadow 0.3s ease"},onMouseOver:function(e){return e.target.style.boxShadow=t},onMouseOut:function(e){return e.target.style.boxShadow="0 0 0 transparent"}},i.a.createElement("i",{className:e.class})))})));var t="0 0 30px rgba(157, 138, 222, 0.5)";return i.a.createElement("footer",null,i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"email-section",style:{marginTop:"20px"}},i.a.createElement("h3",null,"Let's Connect!"),i.a.createElement("p",null,"I'm always eager to connect and explore new opportunities. Whether you have a question, need assistance, or simply want to say hello, feel free to reach out anytime!"),i.a.createElement("a",{href:"mailto:laprasad20@gmail.com",className:"email-button",style:{display:"inline-block",padding:"10px 20px",margin:"5px 0",backgroundColor:"rgba(31, 31, 56, 1)",color:"#fff",textDecoration:"none",borderRadius:"5px",boxShadow:"0 0 0 transparent",transition:"box-shadow 0.3s ease"},onMouseOver:function(e){return e.target.style.boxShadow=t},onMouseOut:function(e){return e.target.style.boxShadow="0 0 0 transparent"}},"Send Email")),i.a.createElement("div",{className:"social-links"},e),i.a.createElement("div",{className:"achievements-container"},i.a.createElement("div",{className:"copyright py-4 text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("small",null,"Made with ",i.a.createElement("span",{style:{color:"red"}},"\u2764")," by Laasya Anantha Prasad"))))))}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header,n=this.props.resumeBasicInfo.description;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{style:{color:"white"}},i.a.createElement("span",null,t)),i.a.createElement("div",{className:"row center mx-auto mb-4"},i.a.createElement("div",{className:"col-md-4 mb-5 center"},i.a.createElement("div",{className:"polaroid"},i.a.createElement("span",{style:{cursor:"auto"}},i.a.createElement("img",{style:{height:"300px",width:"520px",objectFit:"cover"},src:e,alt:"Avatar placeholder"})))),i.a.createElement("div",{className:"col-md-8 center"},i.a.createElement("div",{className:"col-md-10"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},i.a.createElement("br",null),i.a.createElement("span",{className:"wave"},a," "),i.a.createElement("br",null),i.a.createElement("br",null),n)))))))}}]),a}(n.Component),b=a(15),x=(a(29),a(16)),N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,t=this.props.resumeExperience.map((function(e,t){var a,n,s=e.technologies,r=e.mainTech.map((function(e,t){return i.a.createElement(x.a,{pill:!0,className:"main-badge mr-2 mb-2",key:t},e)})),c=s.map((function(e,t){return i.a.createElement(x.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:t},e)})),l=null===(a=e.content)||void 0===a?void 0:a.map((function(e,t){return i.a.createElement("li",{key:t,style:{marginBottom:"8px"}},e)}));return n=0===t?i.a.createElement("img",{src:"images/Validifi.png",alt:"Validifi",style:{width:"100%",height:"100%",borderRadius:"50%"}}):1===t?i.a.createElement("img",{src:"images/cisco.png",alt:"Cisco",style:{width:"100%",height:"100%",borderRadius:"50%"}}):2===t?i.a.createElement("img",{src:"images/krtrimaiq.jpeg",alt:"Krtrimaiq",style:{width:"100%",height:"100%",borderRadius:"50%"}}):3===t?i.a.createElement("img",{src:"images/HPE.png",alt:"HPE",style:{width:"100%",height:"100%",borderRadius:"50%"}}):i.a.createElement("i",{className:"fab fa-angular experience-icon"}),i.a.createElement(b.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#FFFFFF",color:"#fff",textAlign:"center",boxShadow:"0 0 15px 5px #7B6FAD",border:"2px solid #FFFFFF"},icon:n,key:t},i.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},r),i.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),i.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},c),l&&i.a.createElement("ul",{style:{textAlign:"left",marginTop:"15px",paddingLeft:"20px",listStyleType:"disc"}},l))}));return i.a.createElement("section",{id:"resume",className:"pb-5"},i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(b.VerticalTimeline,null,t,i.a.createElement(b.VerticalTimelineElement,{iconStyle:{background:"#6E5AAD",color:"#FFFFFF",textAlign:"center",border:"2px solid #FFFFFF",boxShadow:"0 0 15px 5px #7B6FAD"},icon:i.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),a}(n.Component),w=a(60),k=a(31),j=a.n(k),F=a(32),S=a.n(F),A=a(33),O=a.n(A),B=(a(53),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,t=this.props.data.images,a=this.props.data.title,n=this.props.data.description,s=this.props.data.url;if(this.props.data.technologies){e.map((function(e,t){return i.a.createElement("li",{className:"list-inline-item mx-3",key:t},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center"},i.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}));if(this.props.data.images)var r=t.map((function(e,t){return i.a.createElement("div",{key:t,"data-src":e})}))}}return i.a.createElement(w.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),i.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},i.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},i.a.createElement("div",{className:"slider-tab"},i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement(j.a,{cssModule:[S.a,O.a],animation:"scaleOutAnimation",className:"slider-image"},r)),i.a.createElement("div",{className:"col-md-10 mx-auto"},i.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},a,s?i.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"link-href"},i.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),i.a.createElement("p",{className:"modal-description"},n))))}}]),a}(n.Component)),D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.projects,a=this.props.resumeProjects.map((function(t){return i.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:t.title,style:{cursor:"pointer"}},i.a.createElement("span",{className:"portfolio-item d-block"},i.a.createElement("div",{className:"foto",onClick:function(){return a=t,void e.setState({detailsModalShow:!0,deps:a});var a}},i.a.createElement("div",null,i.a.createElement("img",{src:t.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),i.a.createElement("span",{className:"project-date"},t.startDate),i.a.createElement("br",null),i.a.createElement("p",{className:"project-title-settings mt-3"},t.title)))))}));return i.a.createElement("section",{id:"portfolio"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",null,t)),i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"row mx-auto"},a)),i.a.createElement(B,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),a}(n.Component),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,t=this.props.sharedSkills.icons.map((function(e,t){return i.a.createElement("li",{className:"list-inline-item mx-3",key:t},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center skills-tile achievement-card"},i.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return i.a.createElement("section",{id:"skills"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title"},i.a.createElement("span",{className:"text-white"},e))),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},t))))}}]),a}(n.Component),T=a(20),C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e={marginTop:"10px",fontSize:"1rem",color:"#555",fontWeight:"400"};if(this.props.resumeAchievements&&this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.achievements,a=this.props.resumeAchievements.map((function(t,a){return i.a.createElement("div",{className:"achievement-card",key:a,"data-aos":"fade-up","data-aos-delay":100*a},i.a.createElement("div",{className:"achievement-icon"},i.a.createElement("i",{className:"fas fa-trophy"})),i.a.createElement("div",{className:"achievement-content"},i.a.createElement("div",{className:"achievement-text-content"},i.a.createElement("h3",{className:"achievement-title"},t.title),i.a.createElement("p",{className:"achievement-description"},t.description),t.tags&&i.a.createElement("div",{className:"achievement-tags"},t.tags.map((function(e,t){return i.a.createElement(x.a,{pill:!0,className:"achievement-badge mr-2 mb-2",key:t},e)}))),"Harvard Agriculture Datathon 2024"===t.title&&i.a.createElement("p",{style:Object(T.a)(Object(T.a)({},e),{},{color:"white",fontSize:"1.2rem"})},i.a.createElement("div",{className:"resume-button-container"},i.a.createElement("a",{href:"https://datascience.harvard.edu/2024/10/25/tackling-agriculture-and-food-security-in-a-changing-climate-celebrating-solutions-from-the-hdsi-agri-datathon/",target:"_blank",rel:"noopener noreferrer",className:"resume-button"},"Results"))),"Research Publication"===t.title&&i.a.createElement("p",{style:Object(T.a)(Object(T.a)({},e),{},{color:"white",fontSize:"1.2rem"})},i.a.createElement("div",{className:"resume-button-container"},i.a.createElement("a",{href:"https://ieeexplore.ieee.org/document/10170349",target:"_blank",rel:"noopener noreferrer",className:"resume-button"},"Read the paper")))),t.image&&i.a.createElement("div",{className:"achievement-image-wrapper"},i.a.createElement("img",{src:t.image,alt:t.title,className:"achievement-image",onError:function(e){e.target.onerror=null,e.target.src="/images/placeholder.jpg"}}))))}));return i.a.createElement("section",{id:"achievements",className:"pb-5"},i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title"},i.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},t||"Achievements")))),i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement("div",{className:"achievements-container"},a)))}}]),a}(n.Component),_=a(38),L=a.n(_),R=(a(55),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.resumeEducation&&this.props.resumeBasicInfo){var e=this.props.resumeBasicInfo.section_name.education,t=this.props.resumeEducation.map((function(e,t){var a,n=e.coursework||[],s=e.gpa,r=e.location,c=e["Research Assistant"]||[],l=e["Teaching Assistant"]||[],o=e.extra||[],m=function(e){return e.map((function(e,t){return i.a.createElement("li",{key:t,style:{marginBottom:"3px"},dangerouslySetInnerHTML:{__html:e}})}))},d=(n[0]||"").split(",").map((function(e){return e.trim()}));return a=0===t?i.a.createElement("img",{src:"images/Northeastern.png",alt:"Northeastern University",style:{width:"100%",height:"100%",borderRadius:"50%"}}):1===t?i.a.createElement("img",{src:"images/BMS.jpeg",alt:"B. M. S. College of Engineering",style:{width:"100%",height:"100%",borderRadius:"50%"}}):i.a.createElement("i",{className:"fas fa-graduation-cap education-icon"}),i.a.createElement(b.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:e.years,iconStyle:{background:"#6E5AAD",color:"#FFFFFF",textAlign:"center",border:"3px solid #FFFFFF",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 15px 5px #7B6FAD"},icon:a,key:t},i.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.degree),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left",marginTop:"-5px"}},e.institution),r&&i.a.createElement("h5",{className:"vertical-timeline-element-location",style:{textAlign:"left",marginTop:"-10px",marginBottom:"10px"}},r),s&&i.a.createElement(x.a,{className:"main-badge",style:{marginBottom:"10px"}},"GPA: ",s),c.length>0&&i.a.createElement("div",{className:"research-section"},i.a.createElement("h4",null,"Research Assistant:"),i.a.createElement("ul",{style:{textAlign:"left",marginTop:"5px",paddingLeft:"20px",listStyleType:"disc"}},m(c))),l.length>0&&i.a.createElement("div",{className:"teaching-section"},i.a.createElement("h4",null,"Teaching Assistant:"),i.a.createElement("ul",{style:{textAlign:"left",marginTop:"5px",paddingLeft:"20px",listStyleType:"disc"}},m(l))),d.length>0&&i.a.createElement("div",{className:"coursework-section"},i.a.createElement("h4",null,"Coursework:"),i.a.createElement("ul",{style:{textAlign:"left",marginTop:"5px",paddingLeft:"20px",listStyleType:"disc"}},m(d))),o.length>0&&i.a.createElement("div",{className:"extra-info"},i.a.createElement("h4",null,"Other Activities:"),i.a.createElement("ul",{style:{textAlign:"left",marginTop:"5px",paddingLeft:"20px",listStyleType:"disc"}},m(o))))}));return i.a.createElement("section",{id:"education",className:"pb-5"},i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(b.VerticalTimeline,null,t,i.a.createElement(b.VerticalTimelineElement,{iconStyle:{background:"#6E5AAD",color:"#FFFFFF",textAlign:"center",border:"3px solid #FFFFFF",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 15px 5px #7B6FAD"},icon:i.a.createElement("i",{className:"fas fa-graduation-cap mx-auto education-icon",style:{fontSize:"2.5rem"}})}))))}return null}}]),a}(n.Component));L.a.init({duration:1e3,once:!0});var M=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.loadSharedData(),this.loadResumeFromPath("res_primaryLanguage.json")}},{key:"loadResumeFromPath",value:function(e){u.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"loadSharedData",value:function(){u.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(E,{sharedData:this.state.sharedData.basic_info}),i.a.createElement(y,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),i.a.createElement(N,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(I,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(D,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(C,{resumeAchievements:this.state.resumeData.achievements,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(R,{resumeEducation:this.state.resumeData.education,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(v,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),a}(n.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(56);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",r.a.render(i.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/laasya-portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/laasya-portfolio","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(t,e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.2960ad39.chunk.js.map