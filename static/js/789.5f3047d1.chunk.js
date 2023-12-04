"use strict";(self.webpackChunkfootballmanager=self.webpackChunkfootballmanager||[]).push([[789],{678:(e,l,i)=>{i.d(l,{Z:()=>s});var n=i(627),t=i(697),o=i(2791),r=i(184);function a(e){return(0,r.jsx)(d,{...e})}const d=e=>{let{children:l,sx:i,...o}=e;return(0,r.jsx)(n.Z,{in:!0,timeout:500,children:(0,r.jsx)(t.Z,{sx:{height:"100vh",padding:{xs:"10px",sm:"15px",md:"22px",lg:"40px",xl:"40px"},overflow:"auto",width:"calc(100vw - 60px)",...i},...o,children:l})})},s=o.memo(a)},6751:(e,l,i)=>{i.d(l,{Z:()=>p});var n=i(9823),t=i(5289),o=i(7123),r=i(9157),a=i(5661),d=i(3400),s=i(6934),c=i(890),u=(i(2791),i(341)),h=i(184);const x=(0,s.ZP)(t.Z)((e=>{let{theme:l,props:i}=e;return{"& .MuiDialog-root":{color:u.O.text.normal},"& .MuiDialog-paper":{backgroundColor:u.O.layout.secondary,color:u.O.text.normal},"& .MuiDialogContent-root":{padding:l.spacing(2)},"& .MuiDialogActions-root":{padding:l.spacing(1)},"& .MuiDialogContent-dividers":{borderTop:e=>null!==e&&void 0!==e&&e.disableDividers?"none":"1px solid  #494949",borderBottom:e=>null!==e&&void 0!==e&&e.disableDividers?"none":"1px solid  #494949"}}}));function v(e){let{children:l,onClose:i,showCloseIcon:t,...o}=e;return(0,h.jsxs)(a.Z,{sx:{m:0,p:2},...o,children:[(0,h.jsx)(c.Z,{variant:"18600",children:l}),i&&t?(0,h.jsx)(d.Z,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:(0,h.jsx)(n.Z,{})}):null]})}const p=function(e){let{children:l,setOpen:i,open:n,maxWidth:t="md",dialogTitle:a,footer:d,doHandleClose:s,isHandleClose:u,showCloseIcon:p=!0,contentSx:m,disableDividers:g,disableBackdropClick:j,...Z}=e;const f=(e,l)=>{i(!1)};return(0,h.jsxs)(x,{fullWidth:!0,disableDividers:g,disableBackdropClick:j,maxWidth:t,onClose:(e,l)=>p&&u?s():f(),open:n,...Z,children:[(0,h.jsx)(v,{id:"customized-dialog-title",showCloseIcon:p,onClose:(e,l)=>p&&u?s:f(),children:a&&(0,h.jsx)(c.Z,{fontFamily:"fontBold",fontSize:16,children:a})}),(0,h.jsx)(r.Z,{sx:{...m},dividers:!0,children:l}),d&&(0,h.jsx)(o.Z,{children:d})]})}},1199:(e,l,i)=>{i.d(l,{AQ:()=>a,Xf:()=>r,h5:()=>t,wK:()=>n});const n=e=>{const l=["Player Name","Player Image","Jersey Number","Position","Height","Weight","Nationality","Flag Image","Starter","Appearances","Minutes Played","Goals ","Assists","Clean Sheets","Saves"];return null===l||void 0===l?void 0:l.some((l=>!e.includes(l)))},t=e=>(null===e||void 0===e?void 0:e.length)>=1&&!(null!==e&&void 0!==e&&e.some((e=>null===e||void 0===e?void 0:e.some((e=>""===e||void 0===e)))));function o(e){return e%1?e.toFixed(2):e}const r=e=>"Unidefined"===e||"Unknown"===e||isNaN(e)?e:"".concat(o(e)," kg"),a=e=>isNaN(e)?e:"".concat(o(e/100)," m")},4789:(e,l,i)=>{i.r(l),i.d(l,{default:()=>le});var n=i(2791),t=i(4919),o=i(1428),r=i(678),a=i(1889),d=i(890),s=i(6314),c=i(697),u=i(5403),h=i(8096),x=i(7133),v=i(7391),p=i(3466),m=i(5130),g=i(4294),j=i(184);const Z=e=>{const{isLoading:l,disabled:i,...n}=e;return(0,j.jsx)(g.Z,{disabled:l||i,...n})};var f=i(341),y=i(763);const C=function(e){const{label:l,inputSx:i,fullWidth:n,variant:t,dropdownProps:o,endLabel:r,startLabel:a,required:s,labelStyle:c,sx:u,endAction:g,startAction:y,onkeyDown:C,buttonClick:b,endButton:w,showButton:D,showClear:P,onClear:k,...S}=e;return(0,j.jsxs)(h.Z,{fullWidth:n,children:[l&&(0,j.jsxs)(x.Z,{htmlFor:"outlined-adornment-password",sx:c,children:[(0,j.jsxs)(d.Z,{variant:"14500",color:f.O.text.heading,children:[" ",l]}),s&&(0,j.jsx)("font",{color:"red",children:" *"})]}),(0,j.jsx)(v.Z,{variant:t,onKeyDown:e=>C?C(e):"number"===(null===S||void 0===S?void 0:S.type)?["e","E","+","-"].includes(e.key)&&e.preventDefault():null,sx:{...u,minHeight:20,marginTop:1},InputProps:{endAdornment:(r||o||g||w||P)&&(0,j.jsxs)(j.Fragment,{children:[r&&(0,j.jsx)(p.Z,{position:"start",children:r}),g&&g,w&&D&&(0,j.jsx)(Z,{onClick:b,variant:"text",children:null===w||void 0===w?void 0:w.label}),P&&(0,j.jsx)(m.Z,{sx:{cursor:"pointer"},onClick:k})]}),startAdornment:(a||y)&&(0,j.jsxs)(j.Fragment,{children:[a&&(0,j.jsx)(p.Z,{position:"start",children:a}),y&&y]}),sx:{...i},...S.InputProps},...S})]})};var b=i(4356),w=i(225);const D=(0,w.Z)("div")((e=>{let{theme:l}=e;return{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}));function P(){return(0,j.jsxs)(D,{children:[(0,j.jsx)(d.Z,{variant:"14400",children:" You do not have any players on the roster"}),(0,j.jsxs)(d.Z,{variant:"14500",color:f.O.primary.main,children:[" ","Import Team"]})]})}const k=function(e){const{columns:l=[],rows:i=[],...n}=e;return(0,j.jsx)("div",{style:{height:700,width:"100%",backgroundColor:f.O.layout.secondary,color:f.O.text.normal,borderRadius:8},children:(0,j.jsx)(b._$,{slots:{noRowsOverlay:P},rows:i,columns:l,disableColumnMenu:!0,disableColumnFilter:!0,disableColumnSelector:!0,hideFooterPagination:!0,hideFooterRowCount:!0,hideFooterSelectedRowCount:!0,hideFooter:!0,isRowSelectable:!1,autosizeOnMount:!0})})};var S=i(3044),O=i(2094),I=i(6934),N=i(2065),M=i(5117);(0,I.ZP)((e=>(0,j.jsx)(M.Z,{elevation:0,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},...e})))((e=>{let{theme:l}=e;return{"& .MuiPaper-root":{borderRadius:6,marginTop:l.spacing(1),minWidth:180,backgroundColor:"black",color:"light"===l.palette.mode?"rgb(55, 65, 81)":l.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:l.palette.text.secondary,marginRight:l.spacing(1.5)},"&:active":{backgroundColor:(0,N.Fq)(l.palette.primary.main,l.palette.action.selectedOpacity)}}}}}));var E=i(5087),F=i(3786),W=i(9259);const R=function(e){return(0,j.jsx)(W.Z,{width:"14",height:"12",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,j.jsx)("path",{d:"M10.8984 1.29688C11.582 0.613281 12.7031 0.613281 13.3867 1.29688L14.4531 2.36328C15.1367 3.04688 15.1367 4.16797 14.4531 4.85156L13.1406 6.16406L9.58594 2.60938L10.8984 1.29688ZM12.5117 6.79297L6.14062 13.1641C5.86719 13.4375 5.51172 13.6562 5.12891 13.7656L1.82031 14.7227C1.60156 14.8047 1.35547 14.75 1.19141 14.5586C1 14.3945 0.945312 14.1484 1 13.9297L1.98438 10.6211C2.09375 10.2383 2.3125 9.88281 2.58594 9.60938L8.95703 3.23828L12.5117 6.79297Z",fill:"#F8F8F8"})})};var L=i(5397);const H=(0,w.Z)((e=>(0,E.Z)({menuRoot:{minWidth:"400px"}})));const A=function(e){const{open:l,anchorEl:i,setAnchorEl:n,setDeleteDailog:t,setEditDailog:o}=e,r=H(),a=()=>{n(null)};return(0,j.jsx)(M.Z,{className:r.menuRoot,anchorEl:i,open:l,onClose:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:(0,j.jsxs)(c.Z,{sx:{width:233,height:166,padding:"10px 25px"},children:[(0,j.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",mb:1,children:[(0,j.jsx)(d.Z,{variant:"18600",color:f.O.text.heading,children:"Actions"}),(0,j.jsx)(m.Z,{sx:{cursor:"pointer"},onClick:a})]}),(0,j.jsx)(F.Z,{sx:{padding:"3px 0"},onClick:()=>{o(!0),a()},children:(0,j.jsxs)(s.Z,{direction:"row",mt:2,alignItems:"center",children:[(0,j.jsx)(R,{mr:1}),(0,j.jsx)(d.Z,{ml:1,variant:"14500",color:f.O.text.normal,children:"Edit Player"})," "]})}),(0,j.jsx)(F.Z,{sx:{padding:"3px 0"},onClick:()=>{t(!0),a()},children:(0,j.jsxs)(s.Z,{direction:"row",mt:2,alignItems:"center",children:[(0,j.jsx)(L.Z,{}),(0,j.jsx)(d.Z,{ml:1,variant:"14500",color:f.O.text.normal,children:"Delete Player"})," "]})})]})})};var T=i(7689),B=i(1199);const z=function(e){const{tableData:l=[],setDeleteDailog:i,setEditDailog:t,setSelectedRowId:o}=e,r=(0,T.s0)(),[a,u]=(0,n.useState)(),h=(0,n.useMemo)((()=>[{field:"player name",headerName:"Player Name",flex:.25,sortable:!1,renderHeader:()=>(0,j.jsx)(d.Z,{variant:"12500",children:"Player Name"}),renderCell:e=>{var l;return(0,j.jsxs)(s.Z,{direction:"row",spacing:1,display:"flex",justifyContent:"center",alignItems:"center",children:[(0,j.jsx)(S.Z,{sx:{width:24,height:24},src:null===(l=e.row)||void 0===l?void 0:l["flag image"]}),(0,j.jsx)(d.Z,{onClick:()=>r("/formation?playerId=".concat(null===e||void 0===e?void 0:e.id)),sx:{textDecoration:"underline",cursor:"pointer"},variant:"14500",children:e.value})]})}},{field:"jersey number",headerName:"Jersey Number",flex:.125,sortable:!1,renderHeader:()=>(0,j.jsx)(d.Z,{variant:"12500",children:"Jersey Number"}),renderCell:e=>(0,j.jsx)(d.Z,{variant:"14500",children:e.value})},{field:"starter",headerName:"Starter",flex:.1,sortable:!1,renderHeader:()=>(0,j.jsx)(d.Z,{variant:"12500",children:"Starter"}),renderCell:e=>(0,j.jsx)(d.Z,{variant:"14500",children:e.value})},{field:"position",headerName:"Position",flex:.125,sortable:!1,renderHeader:()=>(0,j.jsx)(d.Z,{variant:"12500",children:"Position"}),renderCell:e=>(0,j.jsx)(d.Z,{variant:"14500",children:e.value})},{field:"height",headerName:"Height",flex:.1,sortable:!1,renderHeader:()=>(0,j.jsx)(d.Z,{variant:"12500",children:"Height"}),renderCell:e=>(0,j.jsx)(d.Z,{variant:"14500",children:(0,B.AQ)(e.value)})},{field:"weight",headerName:"Weight",flex:.1,sortable:!1,renderHeader:()=>(0,j.jsx)(d.Z,{variant:"12500",children:"Weight"}),renderCell:e=>(0,j.jsx)(d.Z,{variant:"14500",children:(0,B.Xf)(e.value)})},{field:"nationality",headerName:"Nationality",flex:.15,sortable:!1,renderHeader:()=>(0,j.jsx)(d.Z,{variant:"12500",children:"Nationality"}),renderCell:e=>(0,j.jsx)(d.Z,{variant:"14500",children:e.value})},{field:"appearances",headerName:"Appearances",flex:.1,sortable:!1,renderHeader:()=>(0,j.jsx)(d.Z,{variant:"12500",children:"Apperances"}),renderCell:e=>(0,j.jsx)(d.Z,{variant:"14500",children:e.value})},{field:"minutes played",headerName:"Minutes Played",flex:.15,sortable:!1,renderHeader:()=>(0,j.jsx)(d.Z,{variant:"12500",children:"Minutes Played"}),renderCell:e=>(0,j.jsx)(d.Z,{variant:"14500",children:e.value})},{field:"actions",type:"actions",flex:.1,renderCell:e=>(0,j.jsxs)(c.Z,{children:[(0,j.jsx)(O.Z,{sx:{cursor:"pointer"},onClick:l=>{u(l.currentTarget),o(e.id)}}),(0,j.jsx)(A,{open:Boolean(a),anchorEl:a,setAnchorEl:u,setDeleteDailog:i,setEditDailog:t})]})}]),[a]);return(0,j.jsx)(k,{columns:h,rows:l,disableColumnMenu:!0,disableColumnFilter:!0,disableColumnSelector:!0})};var q=i(6751),J=i(7763);const Y=function(e){const{setCsvData:l,showCSVtext:i,showError:n}=e,{CSVReader:t}=(0,J.ds)();return(0,j.jsxs)(c.Z,{children:[(0,j.jsx)(t,{onUploadAccepted:e=>{l(e)},children:e=>{let{getRootProps:l,acceptedFile:i,ProgressBar:t,getRemoveFileProps:o}=e;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(c.Z,{sx:{border:n?"1px solid ".concat(f.O.error.main):"1px solid #494949",minWidth:300,maxWidth:400,borderRadius:2,height:44,padding:"2px 4px",cursor:"pointer"},direction:"row",display:"flex",justifyContent:"space-between",alignItems:"center",mb:2,...l(),children:[(0,j.jsx)(d.Z,{variant:"14400",color:f.O.text.muted,children:null!==i&&void 0!==i&&i.name?null===i||void 0===i?void 0:i.name:"No file selected"}),(0,j.jsx)(c.Z,{sx:{borderLeft:n?"1px solid ".concat(f.O.error.main):"1px solid #494949",height:44,padding:"2px 4px"},display:"flex",alignItems:"center",children:(0,j.jsx)(d.Z,{variant:"14500",children:" Select file"})})]})})}}),i&&(0,j.jsx)(d.Z,{variant:"14400",color:f.O.text.muted,children:"File must be in .csv format"})]})};const K=function(e){var l,i,t,o,r,u,h,x,v;const{setCsvData:p,csvData:m,jsonData:g={}}=e,Z=(0,n.useMemo)((()=>{var e;let l=0;const i={};return null!==g&&void 0!==g&&g.groupedPlayers?(null===(e=Object.keys(null===g||void 0===g?void 0:g.groupedPlayers))||void 0===e||e.forEach((e=>{var n,t,o,r;l+=null===g||void 0===g||null===(n=g.groupedPlayers)||void 0===n||null===(t=n[e])||void 0===t?void 0:t.length,i["".concat(e,"s")]=null===g||void 0===g||null===(o=g.groupedPlayers)||void 0===o||null===(r=o[e])||void 0===r?void 0:r.length})),{"Total Players":l,...i}):{}}),[m.length,null===g||void 0===g?void 0:g.length,p]);return(0,j.jsxs)(c.Z,{minHeight:300,children:[(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.Z,{variant:"14500",color:f.O.text.muted,children:"Roster File"}),(0,j.jsx)(Y,{setCsvData:p,showCSVtext:(0,B.h5)(null===m||void 0===m||null===(l=m.data)||void 0===l?void 0:l.slice(1))||!(null!==m&&void 0!==m&&null!==(i=m.data)&&void 0!==i&&i.length),showError:!(0,B.h5)(null===m||void 0===m||null===(t=m.data)||void 0===t?void 0:t.slice(1))&&(null===m||void 0===m||null===(o=m.data)||void 0===o?void 0:o.length)}),!(0,B.h5)(null===m||void 0===m||null===(r=m.data)||void 0===r?void 0:r.slice(1))&&(null===m||void 0===m||null===(u=m.data)||void 0===u?void 0:u.length)>=1&&(0,j.jsx)(d.Z,{variant:"14500",color:f.O.error.main,children:"Error"})]}),(null===m||void 0===m||null===(h=m.data)||void 0===h?void 0:h.length)>=1&&((0,B.h5)(null===m||void 0===m||null===(x=m.data)||void 0===x?void 0:x.slice(1))?(0,j.jsxs)(c.Z,{mt:2,children:[(0,j.jsx)(d.Z,{variant:"14500",children:"File Summary"}),(0,j.jsx)(a.ZP,{container:!0,spacing:2,mt:1,children:(null===g||void 0===g?void 0:g.groupedPlayers)&&(null===Object||void 0===Object||null===(v=Object.keys(Z))||void 0===v?void 0:v.map(((e,l)=>(0,j.jsx)(a.ZP,{item:!0,xs:2,md:2,lg:2,xl:2,children:(0,j.jsxs)(s.Z,{alignItems:"flex-start",children:[(0,j.jsx)(d.Z,{variant:"14400",children:e}),(0,j.jsx)(d.Z,{variant:"16600",children:null===Z||void 0===Z?void 0:Z[e]})]})}))))})]}):(0,j.jsx)(c.Z,{children:(0,j.jsx)(d.Z,{variant:"14400",children:" Your sheet is missing data. Please ensure all cells are filled out."})}))]})};var V=i(765),U=i(5523),G=i(1419),Q=i(8406);const X=function(e){const{value:l,onChange:i,options:n,fullWidth:t}=e;return(0,j.jsx)(Q.Z,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",fullWidth:t,value:l,onChange:i,children:n.map((e=>(0,j.jsx)(F.Z,{value:e,children:(0,j.jsx)(d.Z,{variant:"12400",color:f.O.text.normal,children:e})},e)))})};var $=i(9434),_=i(9337);const ee=function(e){const{editDailog:l,setEditDailog:i,setDeleteDailog:t,deleteDailog:o,filteredData:r,setFilteredData:u,handleEditDeleteModalClose:h,selectedRowId:v,importedData:p,nationalityOptions:m}=e,g=(0,$.I0)(),[b,w]=(0,n.useState)(null===r||void 0===r?void 0:r.find((e=>(null===e||void 0===e?void 0:e.id)===v))),D=(0,n.useMemo)((()=>null===r||void 0===r?void 0:r.find((e=>(null===e||void 0===e?void 0:e.id)===v))),[r,v]),P=(0,n.useMemo)((()=>["Goalkeeper","Defender","Midfielder","Forward"]),[]);return(0,j.jsxs)("div",{children:[l&&(0,j.jsx)(q.Z,{open:l,maxWidth:"sm",handleClose:h,setOpen:i,dialogTitle:"Edit Player",footer:(0,j.jsx)(s.Z,{direction:"row",spacing:2,children:(0,j.jsx)(Z,{disabled:(0,y.isEqual)(b,D),onClick:function(){const e=[...r],l=[...p],i=r.findIndex((e=>e.id===v)),n=p.findIndex((e=>e.id===v));l.splice(n,1,{...b}),g((0,_.s7)(l)),e.splice(i,1,b),u(e),h()},children:"Edit Player"})}),children:(0,j.jsxs)(a.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(a.ZP,{item:!0,md:8,lg:8,xl:8,children:(0,j.jsx)(C,{fullWidth:!0,label:"Player Name",placeholder:"player name",value:null===b||void 0===b?void 0:b["player name"],onChange:e=>w({...b,"player name":e.target.value})})}),(0,j.jsx)(a.ZP,{item:!0,md:4,lg:4,xl:4,children:(0,j.jsx)(C,{fullWidth:!0,label:"Jersey Number",placeholder:"Jersey Number",value:null===b||void 0===b?void 0:b["jersey number"],type:"number",onChange:e=>w({...b,"jersey number":e.target.value})})}),(0,j.jsx)(a.ZP,{item:!0,md:6,lg:6,xl:6,children:(0,j.jsx)(C,{fullWidth:!0,label:"Height",placeholder:"Height",value:null===b||void 0===b?void 0:b.height,type:"number",onChange:e=>w({...b,height:e.target.value})})}),(0,j.jsx)(a.ZP,{item:!0,md:6,lg:6,xl:6,children:(0,j.jsx)(C,{fullWidth:!0,label:"Weight",placeholder:"Weight",value:null===b||void 0===b?void 0:b.weight,type:"number",onChange:e=>w({...b,weight:e.target.value})})}),(0,j.jsx)(a.ZP,{item:!0,md:12,lg:12,xl:12,children:(0,j.jsx)(X,{fullWidth:!0,placeholder:"Select Nationality",options:m,value:null===b||void 0===b?void 0:b.nationality,onChange:e=>w({...b,nationality:e.target.value})})}),(0,j.jsx)(a.ZP,{item:!0,md:12,lg:12,xl:12,children:(0,j.jsx)(X,{fullWidth:!0,placeholder:"Select Position",options:P,value:null===b||void 0===b?void 0:b.position,onChange:e=>w({...b,position:e.target.value})})}),(0,j.jsxs)(a.ZP,{item:!0,md:4,lg:4,xl:4,children:[(0,j.jsx)(x.Z,{htmlFor:"outlined-adornment-password",children:(0,j.jsxs)(d.Z,{variant:"14500",color:f.O.text.heading,children:[" ","Starter"]})}),(0,j.jsxs)(V.Z,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",defaultValue:null===b||void 0===b?void 0:b.starter,children:[(0,j.jsx)(c.Z,{sx:{alignItems:"center",mr:"1rem"},children:(0,j.jsx)(U.Z,{sx:{mr:0},value:"Yes",control:(0,j.jsx)(G.Z,{onChange:e=>w({...b,starter:e.target.value})}),label:"Yes"})}),(0,j.jsx)(c.Z,{children:(0,j.jsx)(U.Z,{value:"No",control:(0,j.jsx)(G.Z,{onChange:e=>w({...b,starter:e.target.value})}),label:"No"})})]})]})]})}),o&&(0,j.jsx)(q.Z,{disableDividers:!0,open:o,maxWidth:"xs",handleClose:h,setOpen:t,dialogTitle:"Are you sure?",footer:(0,j.jsxs)(s.Z,{direction:"row",spacing:2,children:[(0,j.jsx)(Z,{variant:"outlined",onClick:h,children:"Cancel"}),(0,j.jsx)(Z,{onClick:function(){const e=[...r],l=[...p],i=r.findIndex((e=>e.id===v)),n=p.findIndex((e=>e.id===v));l.splice(n,1),g((0,_.s7)(l)),e.splice(i,1),u(e),h()},children:"Delete"})]}),children:(0,j.jsx)(d.Z,{variant:"14400",color:f.O.text.normal,children:"This action cannot be undone."})})]})};const le=function(){var e,l,i;const h=(0,$.v9)((e=>e.players)),x=(0,$.I0)(),[v,p]=(0,n.useState)(!1),[m,g]=(0,n.useState)([]),[b,w]=(0,n.useState)([]),[D,P]=(0,n.useState)([]),[k,S]=(0,n.useState)(""),[O,I]=(0,n.useState)(null===h||void 0===h?void 0:h.playersData),[N,M]=(0,n.useState)(!1),[E,F]=(0,n.useState)(!1),[W,R]=(0,n.useState)(),[L,H]=(0,n.useState)({display:"none"}),[A,T]=(0,n.useState)(!1),J=e=>{p(e)};function Y(){var e;const l=null===h||void 0===h||null===(e=h.playersData)||void 0===e?void 0:e.filter((e=>{var l,i,n,t;return(null===e||void 0===e||null===(l=e["player name"])||void 0===l||null===(i=l.toLowerCase())||void 0===i?void 0:i.includes(null===k||void 0===k?void 0:k.toLowerCase()))||(null===e||void 0===e||null===(n=e.position)||void 0===n||null===(t=n.toLowerCase())||void 0===t?void 0:t.includes(null===k||void 0===k?void 0:k.toLowerCase()))}));I(l)}(0,n.useEffect)((()=>{if(null!==b&&void 0!==b&&b.data){var e;const l=null===b||void 0===b?void 0:b.data[0].map(((e,l)=>{var i,n;return{id:l,columnName:null===e||void 0===e||null===(i=e.toString())||void 0===i||null===(n=i.trim())||void 0===n?void 0:n.toLowerCase(),label:e}}));if((0,B.wK)(l)&&(0,B.h5)(null===b||void 0===b||null===(e=b.data)||void 0===e?void 0:e.slice(1))){const e=null===b||void 0===b?void 0:b.data.slice(1).map((e=>e.reduce(((e,i,n)=>(e[l[n].columnName]=i.trim(),e)),{}))),i=(0,y.groupBy)(e,"position");P({data:null===e||void 0===e?void 0:e.map(((e,l)=>({...e,id:l}))),groupedPlayers:i})}else g({error:"Your sheet is missing data. Please ensure all cells are filled out."})}else P([])}),[b.length]);const V=(0,n.useMemo)((()=>{var e;return(0,y.uniq)(null===h||void 0===h||null===(e=h.playersData)||void 0===e?void 0:e.map((e=>null===e||void 0===e?void 0:e.nationality)))}));return(0,j.jsxs)(r.Z,{children:[(0,j.jsxs)(a.ZP,{container:!0,justifyContent:"space-between",children:[(0,j.jsxs)(a.ZP,{item:!0,md:6,xs:6,lg:6,xl:6,justifyContent:"center",alignItems:"center",children:[(0,j.jsx)(d.Z,{variant:"O12500",children:"Roster Details"}),(0,j.jsxs)(s.Z,{direction:"row",display:"felx",alignItems:"center",onMouseEnter:e=>{H({display:"block"})},onMouseLeave:e=>{H({display:"none"})},children:[v?(0,j.jsx)(c.Z,{sx:{mr:2},children:(0,j.jsx)(C,{value:null===h||void 0===h?void 0:h.teamName,onChange:e=>{x((0,_.rk)(e.target.value))}})}):(0,j.jsx)(d.Z,{variant:"18600",sx:{mr:2},children:null===h||void 0===h?void 0:h.teamName}),(0,j.jsx)(c.Z,{sx:{cursor:"pointer",padding:0,margin:0},children:v?(0,j.jsx)(o.Z,{sx:{fontSize:"25px",color:f.O.text.heading},onClick:()=>J(!1)}):(0,j.jsx)(c.Z,{sx:{padding:0,margin:0},children:(0,j.jsx)(t.Z,{sx:{display:"My Team"!==(null===h||void 0===h?void 0:h.teamName)?null===L||void 0===L?void 0:L.display:"block",color:f.O.text.heading},onClick:()=>J(!0)})})})]})]}),(0,j.jsx)(a.ZP,{item:!0,md:6,xs:6,lg:6,xl:6,justifyContent:"flex-end",children:(0,j.jsxs)(s.Z,{direction:"row",justifyContent:"flex-end",spacing:2,alignItems:"center",children:[(0,j.jsx)(C,{onKeyDown:e=>{27===e.keyCode&&(S(""),I(null===h||void 0===h?void 0:h.playersData)),13===e.keyCode&&Y()},sx:{maxWidth:400},showClear:!(0,y.isEmpty)(k)&&(!(0,y.isEqual)(O,null===h||void 0===h?void 0:h.playersData)||(0,y.isEmpty)(O)),onClear:()=>{S(""),I(null===h||void 0===h?void 0:h.playersData)},showButton:!(0,y.isEmpty)(k)&&(0,y.isEqual)(O,null===h||void 0===h?void 0:h.playersData),endButton:{label:"Search"},buttonClick:()=>Y(),value:k,onChange:e=>S(e.target.value),startAction:(0,j.jsx)(u.Z,{})}),(0,j.jsx)(Z,{variant:(null===h||void 0===h||null===(e=h.playersData)||void 0===e?void 0:e.length)>=1?"outlined":"contained",onClick:()=>T(!0),children:(null===h||void 0===h||null===(l=h.playersData)||void 0===l?void 0:l.length)>=1?"Re-Import Team":"Import Team"})]})})]}),(0,j.jsxs)(c.Z,{sx:{pt:5},children:[" ",(0,j.jsx)(z,{tableData:O,setEditDailog:M,setDeleteDailog:F,setSelectedRowId:R})]}),A&&(0,j.jsx)(q.Z,{open:A,handleClose:function(){T(!1),w([]),P([])},setOpen:T,dialogTitle:"Importer",footer:(0,j.jsx)(Z,{disabled:!(0,B.h5)(null===b||void 0===b||null===(i=b.data)||void 0===i?void 0:i.slice(1)),onClick:()=>{x((0,_.s7)(null===D||void 0===D?void 0:D.data)),I(null===D||void 0===D?void 0:D.data),P([]),w([]),T(!1)},children:"Import"}),children:(0,j.jsx)(K,{maxWidth:"lg",playerTypes:m,csvData:b,setCsvData:w,jsonData:D})}),(N||E)&&(0,j.jsx)(ee,{importedData:null===h||void 0===h?void 0:h.playersData,editDailog:N,setEditDailog:M,setDeleteDailog:F,deleteDailog:E,filteredData:O,setFilteredData:I,handleEditDeleteModalClose:function(){M(!1),F(!1),R(null)},selectedRowId:W,nationalityOptions:V})]})}}}]);
//# sourceMappingURL=789.5f3047d1.chunk.js.map