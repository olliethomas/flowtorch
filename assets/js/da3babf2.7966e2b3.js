"use strict";(self.webpackChunkflowtorch=self.webpackChunkflowtorch||[]).push([[1943],{104:function(e,a,s){s.r(a),s.d(a,{frontMatter:function(){return p},contentTitle:function(){return h},metadata:function(){return b},toc:function(){return k},default:function(){return u}});var o=s(7462),t=s(3366),n=(s(7294),s(3905)),c=s(2814),l=s(1436),r=s(1032),m=(s(8666),s(2520)),d=(s(84),s(7868)),i=["components"],p={id:"flowtorch.bijectors.exp",sidebar_label:"Exp"},h=void 0,b={unversionedId:"api/flowtorch.bijectors.exp",id:"api/flowtorch.bijectors.exp",isDocsHomePage:!1,title:"flowtorch.bijectors.exp",description:"flowtorch  bijectors  Exp",source:"@site/docs/api/flowtorch.bijectors.exp.mdx",sourceDirName:"api",slug:"/api/flowtorch.bijectors.exp",permalink:"/api/flowtorch.bijectors.exp",editUrl:"https://github.com/facebookincubator/flowtorch/edit/main/website/docs/api/flowtorch.bijectors.exp.mdx",tags:[],version:"current",frontMatter:{id:"flowtorch.bijectors.exp",sidebar_label:"Exp"},sidebar:"apiSidebar",previous:{title:"Elementwise",permalink:"/api/flowtorch.bijectors.elementwise"},next:{title:"Fixed",permalink:"/api/flowtorch.bijectors.fixed"}},k=[{value:'<span className="doc-symbol-name">flowtorch.bijectors.Exp</span>',id:"class",children:[{value:'<span className="doc-symbol-name">__init__</span>',id:"--init--",children:[],level:3},{value:'<span className="doc-symbol-name">forward</span>',id:"forward",children:[],level:3},{value:'<span className="doc-symbol-name">forward_shape</span>',id:"forward-shape",children:[],level:3},{value:'<span className="doc-symbol-name">inverse</span>',id:"inverse",children:[],level:3},{value:'<span className="doc-symbol-name">inverse_shape</span>',id:"inverse-shape",children:[],level:3},{value:'<span className="doc-symbol-name">log_abs_det_jacobian</span>',id:"log-abs-det-jacobian",children:[],level:3},{value:'<span className="doc-symbol-name">param_shapes</span>',id:"param-shapes",children:[],level:3},{value:'<span className="doc-symbol-name">parameters</span>',id:"parameters",children:[],level:3}],level:2}],N={toc:k};function u(e){var a=e.components,s=(0,t.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},N,s,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(d.Z,{url:"https://github.com/facebookincubator/flowtorch/blob/main/flowtorch/bijectors/exp.py",mdxType:"PythonNavbar"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/flowtorch"},"flowtorch")," ",(0,n.kt)(c.G,{icon:l.cLY,size:"sm",mdxType:"FontAwesomeIcon"})," ",(0,n.kt)("a",{parentName:"p",href:"/api/flowtorch.bijectors"},"bijectors")," ",(0,n.kt)(c.G,{icon:l.cLY,size:"sm",mdxType:"FontAwesomeIcon"})," ",(0,n.kt)("em",{parentName:"p"},"Exp"))),(0,n.kt)(r.Z,{mdxType:"PythonClass"},(0,n.kt)("div",{className:"doc-class-row"},(0,n.kt)("div",{className:"doc-class-label"},(0,n.kt)("span",{className:"doc-symbol-label"},"class")),(0,n.kt)("div",{className:"doc-class-signature"},(0,n.kt)("h2",{id:"class"},(0,n.kt)("span",{className:"doc-symbol-name"},"flowtorch.bijectors.Exp")),(0,n.kt)("span",{className:"doc-inherits-from"},"Inherits from: ",(0,n.kt)("span",{className:"doc-symbol-name"},"flowtorch.bijectors.fixed.Fixed"))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nElementwise bijector via the mapping :math:`y = \\exp(x)`.\n\n")),(0,n.kt)(m.Z,{mdxType:"PythonMethod"},(0,n.kt)("div",{className:"doc-method-row"},(0,n.kt)("div",{className:"doc-method-label"},(0,n.kt)("span",{className:"doc-symbol-label"},"member")),(0,n.kt)("div",{className:"doc-method-signature"},(0,n.kt)("h3",{id:"--init--"},(0,n.kt)("span",{className:"doc-symbol-name"},"_","_","init","_","_")),(0,n.kt)("span",{className:"doc-symbol-signature"},"(self, params_fn: Union[flowtorch.lazy.Lazy, NoneType] = None, *, shape: torch.Size, context_shape: Union[torch.Size, NoneType] = None) -> None")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<empty docstring>\n")),(0,n.kt)(m.Z,{mdxType:"PythonMethod"},(0,n.kt)("div",{className:"doc-method-row"},(0,n.kt)("div",{className:"doc-method-label"},(0,n.kt)("span",{className:"doc-symbol-label"},"member")),(0,n.kt)("div",{className:"doc-method-signature"},(0,n.kt)("h3",{id:"forward"},(0,n.kt)("span",{className:"doc-symbol-name"},"forward")),(0,n.kt)("span",{className:"doc-symbol-signature"},"(self, x: torch.Tensor, context: Union[torch.Tensor, NoneType] = None) -> torch.Tensor")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<empty docstring>\n")),(0,n.kt)(m.Z,{mdxType:"PythonMethod"},(0,n.kt)("div",{className:"doc-method-row"},(0,n.kt)("div",{className:"doc-method-label"},(0,n.kt)("span",{className:"doc-symbol-label"},"member")),(0,n.kt)("div",{className:"doc-method-signature"},(0,n.kt)("h3",{id:"forward-shape"},(0,n.kt)("span",{className:"doc-symbol-name"},"forward","_","shape")),(0,n.kt)("span",{className:"doc-symbol-signature"},"(self, shape: torch.Size) -> torch.Size")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nInfers the shape of the forward computation, given the input shape.\nDefaults to preserving shape.\n\n")),(0,n.kt)(m.Z,{mdxType:"PythonMethod"},(0,n.kt)("div",{className:"doc-method-row"},(0,n.kt)("div",{className:"doc-method-label"},(0,n.kt)("span",{className:"doc-symbol-label"},"member")),(0,n.kt)("div",{className:"doc-method-signature"},(0,n.kt)("h3",{id:"inverse"},(0,n.kt)("span",{className:"doc-symbol-name"},"inverse")),(0,n.kt)("span",{className:"doc-symbol-signature"},"(self, y: torch.Tensor, x: Union[torch.Tensor, NoneType] = None, context: Union[torch.Tensor, NoneType] = None) -> torch.Tensor")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<empty docstring>\n")),(0,n.kt)(m.Z,{mdxType:"PythonMethod"},(0,n.kt)("div",{className:"doc-method-row"},(0,n.kt)("div",{className:"doc-method-label"},(0,n.kt)("span",{className:"doc-symbol-label"},"member")),(0,n.kt)("div",{className:"doc-method-signature"},(0,n.kt)("h3",{id:"inverse-shape"},(0,n.kt)("span",{className:"doc-symbol-name"},"inverse","_","shape")),(0,n.kt)("span",{className:"doc-symbol-signature"},"(self, shape: torch.Size) -> torch.Size")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nInfers the shapes of the inverse computation, given the output shape.\nDefaults to preserving shape.\n\n")),(0,n.kt)(m.Z,{mdxType:"PythonMethod"},(0,n.kt)("div",{className:"doc-method-row"},(0,n.kt)("div",{className:"doc-method-label"},(0,n.kt)("span",{className:"doc-symbol-label"},"member")),(0,n.kt)("div",{className:"doc-method-signature"},(0,n.kt)("h3",{id:"log-abs-det-jacobian"},(0,n.kt)("span",{className:"doc-symbol-name"},"log","_","abs","_","det","_","jacobian")),(0,n.kt)("span",{className:"doc-symbol-signature"},"(self, x: torch.Tensor, y: torch.Tensor, context: Union[torch.Tensor, NoneType] = None) -> torch.Tensor")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nComputes the log det jacobian `log |dy/dx|` given input and output.\nBy default, assumes a volume preserving bijection.\n\n")),(0,n.kt)(m.Z,{mdxType:"PythonMethod"},(0,n.kt)("div",{className:"doc-method-row"},(0,n.kt)("div",{className:"doc-method-label"},(0,n.kt)("span",{className:"doc-symbol-label"},"member")),(0,n.kt)("div",{className:"doc-method-signature"},(0,n.kt)("h3",{id:"param-shapes"},(0,n.kt)("span",{className:"doc-symbol-name"},"param","_","shapes")),(0,n.kt)("span",{className:"doc-symbol-signature"},"(self, shape: torch.Size) -> Sequence[torch.Size]")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nGiven a base distribution, calculate the parameters for the transformation\nof that distribution under this bijector. By default, no parameters are\nset.\n\n")),(0,n.kt)(m.Z,{mdxType:"PythonMethod"},(0,n.kt)("div",{className:"doc-method-row"},(0,n.kt)("div",{className:"doc-method-label"},(0,n.kt)("span",{className:"doc-symbol-label"},"member")),(0,n.kt)("div",{className:"doc-method-signature"},(0,n.kt)("h3",{id:"parameters"},(0,n.kt)("span",{className:"doc-symbol-name"},"parameters")),(0,n.kt)("span",{className:"doc-symbol-signature"},"(self) -> Iterator[torch.Tensor]")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<empty docstring>\n")))}u.isMDXComponent=!0}}]);