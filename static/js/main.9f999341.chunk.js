(this.webpackJsonpproject_frontend=this.webpackJsonpproject_frontend||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/profile-icon-design-free-vector.e496d7cc.jpg"},,,,function(e,a,t){e.exports=t(26)},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(8),r=t.n(s),o=(t(17),t(4)),i=t(2),m=t(3),c=t.n(m);t(18);var u=()=>{const e=Object(i.p)();Object(l.useEffect)(()=>{c.a.get("jwt_token")&&e("/dashboard")},[e]);return n.a.createElement("div",{className:"home-container"},n.a.createElement("h1",{className:"home-head"},"React Authentication App"),n.a.createElement("h2",{className:"guest-greeting"},"Welcome"),n.a.createElement("div",{className:"signup-login-container"},n.a.createElement("div",{className:"home-btns-container"},n.a.createElement("h3",{className:"home-btns-heading"},"Are you a New User?"),n.a.createElement("button",{className:"home-btn",onClick:()=>{e("/signup")}},"Register")),n.a.createElement("div",{className:"home-btns-container"},n.a.createElement("h3",{className:"home-btns-heading"},"Already a User?"),n.a.createElement("button",{className:"home-btn",onClick:()=>{e("/login")}},"Login"))))};t(19);var d=()=>{const[e,a]=Object(l.useState)(""),[t,s]=Object(l.useState)(""),[r,o]=Object(l.useState)(!1),[m,u]=Object(l.useState)({firstName:"",lastName:"",mobileNumber:"",email:"",password:""}),[d,p]=Object(l.useState)({firstName:"",lastName:"",mobileNumber:"",email:"",password:""}),g=Object(i.p)();Object(l.useEffect)(()=>{c.a.get("jwt_token")&&g("/dashboard")});const N=e=>/^[A-Za-z\s]+$/.test(e.trim())?"":"*only Alphabets please",b=e=>{var a;if(10!==(null===(a=e.trim())||void 0===a?void 0:a.length))return"*Only 10 digits please";return/^[0-9]+$/.test(e.trim())?"":"*only Numbers please"},E=e=>/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e.trim())?"":"*Please Enter a Valid Email",h=e=>{const a=e.trim(),t=/[A-Z]/.test(a),l=/[a-z]/.test(a),n=/[0-9]/.test(a),s=/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(a);return a.length>=5&&l&&t&&s&&n?"":"*password should have an UpperCase, a LowerCase, a Number, a SpecialCharacter and minimum length 5"},v=e=>{const{name:a,value:t}=null===e||void 0===e?void 0:e.target;let l="";switch(a){case"firstName":case"lastName":l=N(t);break;case"mobileNumber":l=b(t);break;case"email":l=E(t);break;case"password":l=h(t)}p({...d,[a]:l})},f=()=>{g("/login")},w=e=>{const{name:a,value:t}=null===e||void 0===e?void 0:e.target;u({...m,[a]:t.trim()}),p({...d,[a]:""})},y=async e=>{if(e.preventDefault(),!(()=>{const e={firstName:N(null===m||void 0===m?void 0:m.firstName),lastName:N(null===m||void 0===m?void 0:m.lastName),mobileNumber:b(null===m||void 0===m?void 0:m.mobileNumber),email:E(null===m||void 0===m?void 0:m.email),password:h(null===m||void 0===m?void 0:m.password)};p({...d});return!Object.values(e).some(e=>""!==e)})())return;console.log("signup Triggered");const t={...m,mobileNumber:null===m||void 0===m?void 0:m.mobileNumber.toString()},l={mode:"cors",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};try{const e=await fetch("https://quasar-colossal-wing.glitch.me/api/auth/signup",l);if(console.log("signupResponse",e),e.ok){a("");const t=await e.json(),{userId:l,userData:n}=t,{firstName:s,lastName:r}=n;(async(e,a,t)=>{c.a.set("jwt_token",""+e);const l=JSON.stringify(t);await localStorage.setItem("username",a),await localStorage.setItem("userProfileData",l),g("/dashboard")})(l,s+" "+r,n)}else{s("");const t=await e.json(),{message:l}=t;a(l)}}catch(n){console.error("An error occurred during signup:",n),a("An error occurred: "+n.message)}};return n.a.createElement("div",{className:"signup-page"},n.a.createElement("h1",{className:"signup-head"}," React Authentication App "),n.a.createElement("form",{className:"signup-form",onSubmit:y},n.a.createElement("div",{className:"signup-input-el-container"},n.a.createElement("label",{className:"signup-label-el",htmlFor:"firstname"}," First Name : "),n.a.createElement("input",{onBlur:v,onChange:w,type:"input",className:"signup-input-el",id:"firstname",name:"firstName",placeholder:"Enter your First Name",required:!0})),(null===d||void 0===d?void 0:d.firstName)&&n.a.createElement("p",{className:"signup-error-msg"}," ",null===d||void 0===d?void 0:d.firstName,"  "),n.a.createElement("div",{className:"signup-input-el-container"},n.a.createElement("label",{className:"signup-label-el",htmlFor:"lastname"}," Last Name : "),n.a.createElement("input",{onBlur:v,onChange:w,type:"input",className:"signup-input-el",id:"lastname",name:"lastName",placeholder:"Enter your Last Name",required:!0})),(null===d||void 0===d?void 0:d.lastName)&&n.a.createElement("p",{className:"signup-error-msg"}," ",null===d||void 0===d?void 0:d.lastName,"  "),n.a.createElement("div",{className:"signup-input-el-container"},n.a.createElement("label",{className:"signup-label-el",htmlFor:"mobilenumber"}," Mobile Number  : "),n.a.createElement("input",{onBlur:v,onChange:w,type:"tel",className:"signup-input-el",id:"mobilenumber",name:"mobileNumber",placeholder:"Enter your Mobile Number",required:!0})),(null===d||void 0===d?void 0:d.mobileNumber)&&n.a.createElement("p",{className:"signup-error-msg"}," ",null===d||void 0===d?void 0:d.mobileNumber,"  "),n.a.createElement("div",{className:"signup-input-el-container"},n.a.createElement("label",{className:"signup-label-el",htmlFor:"email"}," Email  : "),n.a.createElement("input",{onBlur:v,onChange:w,type:"email",className:"signup-input-el",id:"email",name:"email",placeholder:"Enter your Email",required:!0})),(null===d||void 0===d?void 0:d.email)&&n.a.createElement("p",{className:"signup-error-msg"}," ",null===d||void 0===d?void 0:d.email,"  "),n.a.createElement("div",{className:"signup-input-el-container"},n.a.createElement("label",{className:"signup-label-el",htmlFor:"password"},"Password:"),n.a.createElement("div",{className:"password-toggle-container"},n.a.createElement("input",{onBlur:v,onChange:w,type:r?"text":"password",className:"signup-input-el password-input",id:"password",name:"password",placeholder:"Enter your Password",required:!0}),n.a.createElement("button",{type:"button",className:"show-password-btn",onClick:()=>o(!r)},r?"Hide":"Show"))),(null===d||void 0===d?void 0:d.password)&&n.a.createElement("p",{className:"signup-error-msg"}," ",null===d||void 0===d?void 0:d.password,"  "),n.a.createElement("button",{className:"signup-button",type:"submit"}," Register  "),n.a.createElement("p",{className:"signup-error-msg"}," ",e," "),n.a.createElement("p",{className:"signup-error-msg signup-success-msg"}," ",t," "),n.a.createElement("p",{className:"login-signup",onClick:f}," Already Registered. Do you Want to Login ?  ")))};t(20);var p=()=>{const[e,a]=Object(l.useState)(""),[t,s]=Object(l.useState)(""),[r,o]=Object(l.useState)(!1),[m,u]=Object(l.useState)(""),d=Object(i.p)();Object(l.useEffect)(()=>{c.a.get("jwt_token")&&d("/dashboard")},[d]);return n.a.createElement("div",{className:"login-page"},n.a.createElement("h1",{className:"login-head"},"React Authentication App"),n.a.createElement("form",{className:"login-form",onSubmit:async a=>{if(a.preventDefault(),u(""),!e||!t)return void u("Both email and password are required.");const l={userEmail:e,userPassword:t},n={mode:"cors",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)};try{const e=await fetch("https://quasar-colossal-wing.glitch.me/api/auth/login",n);if(e.ok){const a=await e.json(),{userId:t,userData:l}=a,{firstName:n,lastName:i}=l;s=t,r=n+" "+i,o=l,c.a.set("jwt_token",""+s),localStorage.setItem("username",r),localStorage.setItem("userProfileData",JSON.stringify(o)),d("/dashboard")}else{const a=await e.json();u(a.message)}}catch(i){u("Unable to connect. Please try again later.")}var s,r,o}},n.a.createElement("div",{className:"login-input-el-container"},n.a.createElement("label",{htmlFor:"login-email",className:"login-label-el"},"Email:"),n.a.createElement("input",{id:"login-email",onBlur:()=>{e||u("*Email should not be empty")},onChange:e=>a(e.target.value.trim()),value:e,type:"email",className:"login-input-el",placeholder:"Enter your Registered Email",required:!0})),n.a.createElement("div",{className:"login-input-el-container"},n.a.createElement("label",{htmlFor:"login-password",className:"login-label-el"},"Password:"),n.a.createElement("div",{className:"password-toggle-container"},n.a.createElement("input",{id:"login-password",onBlur:()=>{t||u("*Please Enter your Password")},onChange:e=>s(e.target.value.trim()),value:t,type:r?"text":"password",className:"login-input-el password-input",placeholder:"Enter your Password",required:!0}),n.a.createElement("button",{type:"button",className:"show-password-btn",onClick:()=>o(!r)},r?"Hide":"Show"))),n.a.createElement("button",{className:"login-button",type:"submit"},"Login"),n.a.createElement("p",{className:"error-msg"},m),n.a.createElement("p",{className:"login-signup",onClick:()=>d("/")},"Not Registered Yet? Do you Want to Register?")))};t(21);var g=()=>{const e=Object(i.p)(),a=Object(i.n)(),t=e=>a.pathname===e?"active":"";return n.a.createElement("div",{className:"navbar"},n.a.createElement("div",{className:"brand",onClick:()=>{e("/dashboard")}},"React Authentication App"),n.a.createElement("div",{className:"nav-links"},n.a.createElement("a",{href:"/dashboard",className:t("/dashboard")},"Dashboard"),n.a.createElement("a",{href:"/profile",className:t("/profile")},"Profile")),n.a.createElement("button",{className:"logout-btn",onClick:()=>{c.a.remove("jwt_token"),e("/login"),localStorage.removeItem("username"),localStorage.removeItem("userProfileData")}},"Logout"))},N=t(5),b=t.n(N);t(22);var E=()=>{const e=localStorage.getItem("username");return n.a.createElement("div",{className:"dashboard-container"},n.a.createElement(g,null),n.a.createElement("div",{className:"dashboard-sec"},n.a.createElement("h1",{className:"dashboard-head"}," Welcome to the Dashboard ",e," "),n.a.createElement("img",{src:b.a,alt:"profile-pic",className:"profile-img"})))};t(23);var h=()=>{const e=localStorage.getItem("userProfileData"),a=localStorage.getItem("username"),t=JSON.parse(e);let l;const{email:s,mobileNumber:r}=t,o=r.toString().length;if(o<10){const e="0".repeat(10-o);l=`${e}${r.toString()}`}else l=r;return n.a.createElement("div",{className:"dashboard-container"},n.a.createElement(g,null),n.a.createElement("div",{className:"profile-sec"},n.a.createElement("img",{src:b.a,alt:"profile-pic",className:"profile-img"}),n.a.createElement("div",{className:"profile-details-sec"},n.a.createElement("h1",{className:"profile-head-el"},n.a.createElement("span",{className:"profile-span-el"},"Username:")," ",a),n.a.createElement("h1",{className:"profile-head-el"},n.a.createElement("span",{className:"profile-span-el"},"Mobile Number:")," ",l),n.a.createElement("h1",{className:"profile-head-el"},n.a.createElement("span",{className:"profile-span-el"},"Email:")," ",s))))};var v=e=>{let{element:a}=e;const t=Object(i.p)(),[n,s]=Object(l.useState)(!1);return Object(l.useEffect)(()=>{c.a.get("jwt_token")?s(!0):t("/")},[t]),n?a:null};t(24);var f=()=>n.a.createElement("div",{className:"not-found-container"},n.a.createElement("h1",{className:"not-found-heading"},"404 - Not Found"),n.a.createElement("p",{className:"not-found-message"},"The page you are looking for does not exist."));t(25);var w=function(){return n.a.createElement("div",{className:"App-container"},n.a.createElement(o.a,null,n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/",element:n.a.createElement(u,null)}),n.a.createElement(i.a,{path:"/signup",element:n.a.createElement(d,null)}),n.a.createElement(i.a,{path:"/login",element:n.a.createElement(p,null)}),n.a.createElement(i.a,{path:"/dashboard",element:n.a.createElement(v,{element:n.a.createElement(E,null)})}),n.a.createElement(i.a,{path:"/profile",element:n.a.createElement(v,{element:n.a.createElement(h,null)})}),n.a.createElement(i.a,{path:"*",element:n.a.createElement(f,null)}))))};var y=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:s,getTTFB:r}=a;t(e),l(e),n(e),s(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null))),y()}],[[9,1,2]]]);
//# sourceMappingURL=main.9f999341.chunk.js.map