import{r as h,j as e}from"./app-vnY1w0JR.js";import{B as u}from"./BorderHover-_s8umbJl.js";import{F as v}from"./Footer-67HZlA54.js";const m=({title:o,content:n,image:c,list:x,isPotrait:r})=>{const[t,a]=h.useState(!1),p=()=>{t||a(!0)},d=()=>{t&&a(!1)},i=()=>{r&&a(s=>!s)};return e.jsxs("div",{className:"relative rounded-xl overflow-hidden shadow-md mb-8 p-3 items-center",onMouseEnter:p,onMouseLeave:d,children:[e.jsxs("div",{className:"relative",children:[c,r&&e.jsx("div",{className:"absolute inset-0 w-full h-full flex-col justify-between p-2 lg:p-6 text-left bg-cardul z-10 overflow-x-hidden",style:{visibility:t?"visible":"hidden"},children:e.jsx("ul",{className:`lg:space-y-1 text-white transition-all duration-300 ${t?"max-h-96 opacity-100 pointer-events-auto":"max-h-0 opacity-0 pointer-events-none"}`,style:{transform:`translateY(${t?0:"100%"})`},children:x.map((s,g)=>e.jsxs("li",{className:"group relative",children:[e.jsx("span",{className:"text-lg mr-2",children:"▪ "}),typeof s=="string"?s:e.jsx(u,{defBorderColor:"bg-gray-700",hovBorderColor:"bg-white",children:e.jsx("a",{href:s.link,className:"text-xs md:text-sm xl:text-base",children:s.text})})]},g))})})]}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-2xl box-border text-[#14151b] font-extrabold mb-2",children:o}),e.jsx("p",{className:"text-gray-600",children:n}),r&&e.jsx("button",{type:"button",onClick:i,className:"text-black bg-white border-2 rounded-sm border-[#02789e] py-2 px-5 mt-2 block md:hidden",children:t?"Close":"Explore"})]})]})},b=({title:o,content:n,image:c,list:x,isPotrait:r})=>{const[t,a]=h.useState(!1);let p=e.jsx("img",{className:"h-full w-full",src:typeof c=="string"?c:"",alt:"Services"});const d=()=>{a(!t)};return e.jsxs("div",{className:"md:col-span-2 grid md:grid-cols-3 items-center relative rounded-xl overflow-hidden shadow-md mb-8 md:bg-[#fbac94]",onMouseEnter:d,onMouseLeave:d,children:[e.jsxs("div",{className:"p-4 col-span-2",children:[e.jsx("h3",{className:"text-2xl box-border text-[#14151b] font-extrabold mb-2",children:o}),e.jsx("p",{className:" text-[#14151b]",children:n})]}),e.jsxs("div",{className:"relative col-span-1 hidden md:block",children:[p,r&&e.jsx("div",{className:`absolute inset-0 justify-between p-4 text-left transition-opacity ${t?"opacity-90":"opacity-0"} bg-cardul z-10`,style:{transform:`translate(${t?0:"90%"}, ${t?0:"-90%"})`,transition:"transform 0.3s ease-in-out",visibility:t?"visible":"hidden"},children:e.jsx("ul",{className:"max-w-md space-y-1 text-white hover:text-gray-500 w-fit",children:x.map((i,s)=>e.jsxs("li",{className:"group relative overflow-hidden",children:[e.jsx("span",{className:"group-hover:text-white text-lg mr-2",children:"▪ "}),typeof i=="string"?i:e.jsx(u,{defBorderColor:"bg-gray-700",hovBorderColor:"bg-white",children:e.jsx("a",{href:i.link,className:"hover:text-white relative overflow-hidden",children:i.text})})]},s))})})]})]})},f=()=>e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:[e.jsx(m,{title:"Cuptivating Design Services",content:"A good design is thefirst impression you would make on your customers.",image:e.jsx("img",{className:"h-full w-full",src:"https://www.sparxitsolutions.com/assets-style/images/captivating-designs.jpg",alt:"Services"}),list:[{text:"web design",link:"#"},{text:"eCommerce Website Design",link:"#"},{text:"Logo design",link:"#"},{text:"Corporate Website Design",link:"#"},{text:"B2B Website Design",link:"#"}],isPotrait:!0}),e.jsx(b,{title:"Web and Mobile App Development",content:"Begin your journey to create revenue-generating digital solutions for your business.",mobileImage:"https://vtechpk.com/wp-content/uploads/2022/02/Custom-Mobile-App-Development.jpg",image:"https://www.sparxitsolutions.com/assets-style/images/web-app.jpg",list:[{text:"Mobile App Development",link:"#"},{text:"Android App Development",link:"#"},{text:"Hybrid App development",link:"#"},{text:"Flutter App development",link:"#"},{text:"PhP App Development",link:"#"},{text:"Python App Development",link:"#"},{text:"React Native App Development",link:"#"},{text:"Java Development",link:"#"},{text:"iOS App Development",link:"#"},{text:"ReactJS Development",link:"#"}],isPotrait:!0}),e.jsx(m,{title:"Outcome DriveneCommerce Development",content:"Expand the community of the fastest-growing insustry domains in the age of digitalisation",image:e.jsx("img",{className:"h-full w-full",src:"https://www.sparxitsolutions.com/assets-style/images/outcome-driven.jpg",alt:"Services"}),list:[{text:"WooCommerce Development",link:"#"},{text:"eCommerce Development",link:"#"},{text:"B2B eCommerce",link:"#"},{text:"Wordpress Development",link:"#"},{text:"Shopify Development",link:"#"},{text:"Magento Development",link:"#"},{text:"BigCommerce Development",link:"#"}],isPotrait:!0}),e.jsx(m,{title:"Blockchain Development Services",content:"We create secure blockchain networks with increased traceability of data and transactions",image:e.jsx("img",{className:"h-full w-full",src:"https://www.sparxitsolutions.com/assets-style/images/blockchain-development-services.jpg",alt:"Services"}),list:[{text:"Blockchain Development",link:"#"},{text:"Enterprise Blockchain Development",link:"#"},{text:"NFT Marketplace Development",link:"#"},{text:"Cryptocurrency Wallet Development",link:"#"},{text:"Cryptocurrency Exchange Development",link:"#"},{text:"Smart Contract Development",link:"#"}],isPotrait:!0}),e.jsx(m,{title:"Cloud Integration Services",content:"Intergrating cloud technology to provide your business resources a wider and safer space",image:e.jsx("img",{className:"h-full w-full",src:"https://www.sparxitsolutions.com/assets-style/images/cloud-integration.jpg",alt:"Services"}),list:[{text:"Salesforce",link:"#"},{text:"AWS",link:"#"},{text:"Azure",link:"#"},{text:"Google Cloud",link:"#"}],isPotrait:!0})]}),l=({title:o,content:n})=>e.jsx("div",{className:"mx-auto mb-8 mt-8 ",children:e.jsxs("div",{className:"border-t-8 border-[#14151b] w-64 md:w-[90%]",children:[e.jsx("h3",{className:"text-xl md:text-3xl font-extrabold mb-2 mt-3",children:o}),e.jsx("p",{className:"text-gray-600 text-sm md:text-base",children:n})]})}),j=()=>e.jsxs("div",{className:"mb-8 border-b-2 border-black p-4",children:[e.jsxs("h3",{className:"text-2xl md:text-4xl font-extrabold mb-2 md:leading-normal",children:["The Stakeholders of ",e.jsx("span",{className:"text-red-500",children:"Futuristic Technology Solutions"})]}),e.jsx("span",{className:"text-sm md:text-lg",children:"Your Ideas, Our Expertise = Maximum Customer Success"}),e.jsx("div",{className:"pb-4",children:e.jsxs("div",{className:"flex flex-nowrap overflow-x-scroll md:overflow-x-hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 md:gap-10",children:[e.jsx(l,{title:"Blockchain Development",content:"Enhancing and securing the ways to store and modify data of transactions with Blockchain-powered solutions for banking, finance, healthcare, and other industries."}),e.jsx(l,{title:"IoT",content:"Unfold the incredible abilities of the internet-of-things to transfer data without human intervention. A well-architectured IoT ecosystem transforms the business."}),e.jsx(l,{title:"Augmented Reality",content:"Mingle technology and real-world with supreme Augmented reality solutions to increase the emotional interaction and appeal of your brand."}),e.jsx(l,{title:"Data Intelligence",content:"Analyze your business roadmap and possible outcomes more sophisticatedly using the power of data."}),e.jsx(l,{title:"Artificial Intelligence",content:"Automate your business operations and processes with AI-powered solutions to reduce human intervention and increase efficiency."}),e.jsx(l,{title:"Virtual reality",content:"Create your own world of possibilities using our advanced VR solutions focusing on varying enterprise needs."})]})}),e.jsx("button",{type:"button",className:"border-2 hover:border-[#02789e] px-8 py-5 font-medium text-white hover:text-[#14151b] bg-[#02789e] hover:bg-white rounded-lg text-center cursor-pointer mb-8",children:"Share Your Product Idea"})]}),w=()=>e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex flex-col gap-y-4 md:flex-row justify-between w-[90%]",children:[e.jsx("h3",{className:"md:text-4xl text-2xl font-extrabold",children:"What People Say About Us"}),e.jsx("button",{type:"button",className:"border-2 border-[#02789e] px-8 py-5 font-medium hover:text-white text-[#14151b] hover:bg-[#02789e] bg-white rounded-lg text-center cursor-pointer mb-8",children:"Explore Our Work"})]}),e.jsx("div",{children:e.jsx("div",{children:e.jsx("div",{className:"max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6",children:e.jsxs("figure",{className:"max-w-screen-md mx-auto",children:[e.jsx("svg",{className:"h-12 mx-auto mb-3 text-[#02789e]",viewBox:"0 0 24 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z",fill:"currentColor"})}),e.jsx("blockquote",{children:e.jsx("p",{className:"text-2xl font-medium text-gray-900",children:'"Their work was impeccable. Everything was done on time and they even let me share my ideas on the designs, colors and fonts to use on my website."'})}),e.jsxs("figcaption",{className:"flex items-center justify-center mt-6 space-x-3",children:[e.jsx("img",{className:"w-6 h-6 rounded-full",src:"https://mwangikanothe.com/build/assets/profile-default-b1fa350e.jpg"}),e.jsxs("div",{className:"flex items-center divide-x-2 divide-gray-900 ",children:[e.jsx("div",{className:"pr-3 font-medium text-gray-900",children:"Amos Wako"}),e.jsx("div",{className:"pl-3 text-sm font-light text-[#02789e]",children:"Customer"})]})]})]})})})})]}),y=()=>e.jsxs("div",{className:"mt-12 ",children:[e.jsxs("h2",{className:"font-extrabold text-3xl md:text-4xl text-[#14151b] md:leading-normal box-border pb-3",children:["Reshaping Dynamics of ",e.jsx("span",{className:"font-semibold text-red-500 text-2xl md:text-3xl",children:" Modern~Age Business with Our Tech Solutions"})]}),e.jsx("span",{className:"text-base md:text-xl text-[#14151b]",children:"Your doorway of assured growth through the commitmnent of qualitative delivery"}),e.jsx("div",{className:"border-b-2 border-black pt-8 md:py-12",children:e.jsx(f,{})}),e.jsx("div",{className:"mt-12",children:e.jsx(j,{})}),e.jsx("div",{className:"relative",children:e.jsx(w,{})}),e.jsx("div",{className:"",children:e.jsx(v,{})})]}),N=y;function S(){return e.jsx("div",{className:"container mx-auto px-4 sm:px-8 py-8 space-y-4",children:e.jsx(N,{})})}export{S as default};