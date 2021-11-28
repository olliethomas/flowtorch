"use strict";(self.webpackChunkflowtorch=self.webpackChunkflowtorch||[]).push([[7680],{869:function(e,o,a){a.r(o),a.d(o,{frontMatter:function(){return p},contentTitle:function(){return h},metadata:function(){return b},toc:function(){return k},default:function(){return u}});var s=a(7462),t=a(3366),c=(a(7294),a(3905)),n=a(2814),r=a(1436),l=a(1032),i=(a(8666),a(2520)),m=(a(84),a(7868)),d=["components"],p={id:"flowtorch.bijectors.bijector",sidebar_label:"Bijector"},h=void 0,b={unversionedId:"api/flowtorch.bijectors.bijector",id:"api/flowtorch.bijectors.bijector",isDocsHomePage:!1,title:"flowtorch.bijectors.bijector",description:"flowtorch  bijectors  Bijector",source:"@site/docs/api/flowtorch.bijectors.bijector.mdx",sourceDirName:"api",slug:"/api/flowtorch.bijectors.bijector",permalink:"/api/flowtorch.bijectors.bijector",editUrl:"https://github.com/facebookincubator/flowtorch/edit/main/website/docs/api/flowtorch.bijectors.bijector.mdx",tags:[],version:"current",frontMatter:{id:"flowtorch.bijectors.bijector",sidebar_label:"Bijector"},sidebar:"apiSidebar",previous:{title:"Autoregressive",permalink:"/api/flowtorch.bijectors.autoregressive"},next:{title:"Compose",permalink:"/api/flowtorch.bijectors.compose"}},k=[{value:'<span className="doc-symbol-name">flowtorch.bijectors.Bijector</span>',id:"class",children:[{value:'<span className="doc-symbol-name">__init__</span>',id:"--init--",children:[],level:3},{value:'<span className="doc-symbol-name">forward</span>',id:"forward",children:[],level:3},{value:'<span className="doc-symbol-name">forward_shape</span>',id:"forward-shape",children:[],level:3},{value:'<span className="doc-symbol-name">inverse</span>',id:"inverse",children:[],level:3},{value:'<span className="doc-symbol-name">inverse_shape</span>',id:"inverse-shape",children:[],level:3},{value:'<span className="doc-symbol-name">log_abs_det_jacobian</span>',id:"log-abs-det-jacobian",children:[],level:3},{value:'<span className="doc-symbol-name">param_shapes</span>',id:"param-shapes",children:[],level:3}],level:2}],N={toc:k};function u(e){var o=e.components,a=(0,t.Z)(e,d);return(0,c.kt)("wrapper",(0,s.Z)({},N,a,{components:o,mdxType:"MDXLayout"}),(0,c.kt)(m.Z,{url:"https://github.com/facebookincubator/flowtorch/blob/main/flowtorch/bijectors/base.py",mdxType:"PythonNavbar"},(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/flowtorch"},"flowtorch")," ",(0,c.kt)(n.G,{icon:r.cLY,size:"sm",mdxType:"FontAwesomeIcon"})," ",(0,c.kt)("a",{parentName:"p",href:"/api/flowtorch.bijectors"},"bijectors")," ",(0,c.kt)(n.G,{icon:r.cLY,size:"sm",mdxType:"FontAwesomeIcon"})," ",(0,c.kt)("em",{parentName:"p"},"Bijector"))),(0,c.kt)(l.Z,{mdxType:"PythonClass"},(0,c.kt)("div",{className:"doc-class-row"},(0,c.kt)("div",{className:"doc-class-label"},(0,c.kt)("span",{className:"doc-symbol-label"},"class")),(0,c.kt)("div",{className:"doc-class-signature"},(0,c.kt)("h2",{id:"class"},(0,c.kt)("span",{className:"doc-symbol-name"},"flowtorch.bijectors.Bijector")),(0,c.kt)("span",{className:"doc-inherits-from"},"Inherits from: ",(0,c.kt)("span",{className:"doc-symbol-name"},"builtins.object"))))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"empty docstring\n")),(0,c.kt)(i.Z,{mdxType:"PythonMethod"},(0,c.kt)("div",{className:"doc-method-row"},(0,c.kt)("div",{className:"doc-method-label"},(0,c.kt)("span",{className:"doc-symbol-label"},"member")),(0,c.kt)("div",{className:"doc-method-signature"},(0,c.kt)("h3",{id:"--init--"},(0,c.kt)("span",{className:"doc-symbol-name"},"_","_","init","_","_")),(0,c.kt)("span",{className:"doc-symbol-signature"},"(self, params: Union[flowtorch.lazy.Lazy, NoneType] = None, *, shape: torch.Size, context_shape: Union[torch.Size, NoneType] = None) -> None")))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"<empty docstring>\n")),(0,c.kt)(i.Z,{mdxType:"PythonMethod"},(0,c.kt)("div",{className:"doc-method-row"},(0,c.kt)("div",{className:"doc-method-label"},(0,c.kt)("span",{className:"doc-symbol-label"},"member")),(0,c.kt)("div",{className:"doc-method-signature"},(0,c.kt)("h3",{id:"forward"},(0,c.kt)("span",{className:"doc-symbol-name"},"forward")),(0,c.kt)("span",{className:"doc-symbol-signature"},"(self, x: torch.Tensor, context: Union[torch.Tensor, NoneType] = None) -> torch.Tensor")))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"<empty docstring>\n")),(0,c.kt)(i.Z,{mdxType:"PythonMethod"},(0,c.kt)("div",{className:"doc-method-row"},(0,c.kt)("div",{className:"doc-method-label"},(0,c.kt)("span",{className:"doc-symbol-label"},"member")),(0,c.kt)("div",{className:"doc-method-signature"},(0,c.kt)("h3",{id:"forward-shape"},(0,c.kt)("span",{className:"doc-symbol-name"},"forward","_","shape")),(0,c.kt)("span",{className:"doc-symbol-signature"},"(self, shape: torch.Size) -> torch.Size")))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\nInfers the shape of the forward computation, given the input shape.\nDefaults to preserving shape.\n\n")),(0,c.kt)(i.Z,{mdxType:"PythonMethod"},(0,c.kt)("div",{className:"doc-method-row"},(0,c.kt)("div",{className:"doc-method-label"},(0,c.kt)("span",{className:"doc-symbol-label"},"member")),(0,c.kt)("div",{className:"doc-method-signature"},(0,c.kt)("h3",{id:"inverse"},(0,c.kt)("span",{className:"doc-symbol-name"},"inverse")),(0,c.kt)("span",{className:"doc-symbol-signature"},"(self, y: torch.Tensor, x: Union[torch.Tensor, NoneType] = None, context: Union[torch.Tensor, NoneType] = None) -> torch.Tensor")))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"<empty docstring>\n")),(0,c.kt)(i.Z,{mdxType:"PythonMethod"},(0,c.kt)("div",{className:"doc-method-row"},(0,c.kt)("div",{className:"doc-method-label"},(0,c.kt)("span",{className:"doc-symbol-label"},"member")),(0,c.kt)("div",{className:"doc-method-signature"},(0,c.kt)("h3",{id:"inverse-shape"},(0,c.kt)("span",{className:"doc-symbol-name"},"inverse","_","shape")),(0,c.kt)("span",{className:"doc-symbol-signature"},"(self, shape: torch.Size) -> torch.Size")))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\nInfers the shapes of the inverse computation, given the output shape.\nDefaults to preserving shape.\n\n")),(0,c.kt)(i.Z,{mdxType:"PythonMethod"},(0,c.kt)("div",{className:"doc-method-row"},(0,c.kt)("div",{className:"doc-method-label"},(0,c.kt)("span",{className:"doc-symbol-label"},"member")),(0,c.kt)("div",{className:"doc-method-signature"},(0,c.kt)("h3",{id:"log-abs-det-jacobian"},(0,c.kt)("span",{className:"doc-symbol-name"},"log","_","abs","_","det","_","jacobian")),(0,c.kt)("span",{className:"doc-symbol-signature"},"(self, x: torch.Tensor, y: torch.Tensor, context: Union[torch.Tensor, NoneType] = None) -> torch.Tensor")))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\nComputes the log det jacobian `log |dy/dx|` given input and output.\nBy default, assumes a volume preserving bijection.\n\n")),(0,c.kt)(i.Z,{mdxType:"PythonMethod"},(0,c.kt)("div",{className:"doc-method-row"},(0,c.kt)("div",{className:"doc-method-label"},(0,c.kt)("span",{className:"doc-symbol-label"},"member")),(0,c.kt)("div",{className:"doc-method-signature"},(0,c.kt)("h3",{id:"param-shapes"},(0,c.kt)("span",{className:"doc-symbol-name"},"param","_","shapes")),(0,c.kt)("span",{className:"doc-symbol-signature"},"(self, shape: torch.Size) -> Sequence[torch.Size]")))),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"\nAbstract method to return shapes of parameters\n\n")))}u.isMDXComponent=!0}}]);