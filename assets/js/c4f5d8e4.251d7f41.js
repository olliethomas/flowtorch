"use strict";(self.webpackChunkflowtorch=self.webpackChunkflowtorch||[]).push([[4195],{3226:function(e,t,a){a.r(t),a.d(t,{default:function(){return G}});var n=a(7294),r=a(1022),i=a(2263),l=a(7462),o=a(3746),s=a(5350),m="code_vulq";var c=function(e){var t=(0,i.Z)().siteConfig.themeConfig.prism,a=void 0===t?{}:t,r=(0,n.useState)(!1),c=r[0],u=r[1];(0,n.useEffect)((function(){u(!0)}),[]);var d=(0,s.Z)().isDarkTheme,g=a.theme,h=a.darkTheme||g,p=d?h:g,f=e.language,b=void 0===f?"python":f,E=e.code;return n.createElement(o.ZP,(0,l.Z)({},o.lG,{code:E,language:b,key:c,theme:p}),(function(e){var t=e.className,a=e.style,r=e.tokens,i=e.getLineProps,l=e.getTokenProps;return n.createElement("pre",{className:t+" "+m,style:a},r.map((function(e,t){return n.createElement("div",i({line:e,key:t}),e.map((function(e,t){return n.createElement("span",l({token:e,key:t}))})))})))}))},u=a(6396),d=a(8215),g=a(5697),h="headline_GW8p",p="category_GaVn",f="title_yolx",b="subtitle_RAZ1";function E(e){var t=e.category,a=e.title,r=e.subtitle,i=e.offset;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--"+(12-i)+" col--offset-"+i},n.createElement("div",{className:h},t&&n.createElement("span",{className:p},t),a&&n.createElement("h2",{className:f},a),r&&n.createElement("h3",{className:b},r))))}E.propTypes={category:g.PropTypes.string,title:g.PropTypes.string,subtitle:g.PropTypes.string,offset:g.PropTypes.number},E.defaultProps={offset:0};var v=E,_=[{label:"Bivariate Normal",code:"import torch\nimport flowtorch.bijectors as B\nimport flowtorch.distributions as D\nimport flowtorch.parameters as P\n\n# Lazily instantiated flow plus base and target distributions\nparams_fn = P.DenseAutoregressive(hidden_dims=(32,))\nbijectors = B.AffineAutoregressive(params_fn=params_fn)\nbase_dist = torch.distributions.Independent(\n  torch.distributions.Normal(torch.zeros(2), torch.ones(2)), \n  1\n)\ntarget_dist = torch.distributions.Independent(\n  torch.distributions.Normal(torch.zeros(2)+5, torch.ones(2)*0.5),\n  1\n)\n\n# Instantiate transformed distribution and parameters\nflow = D.Flow(base_dist, bijectors)\n\n# Training loop\nopt = torch.optim.Adam(flow.parameters(), lr=5e-3)\nframe = 0\nfor idx in range(3001):\n    opt.zero_grad()\n\n    # Minimize KL(p || q)\n    y = target_dist.sample((1000,))\n    loss = -flow.log_prob(y).mean()\n\n    if idx % 500 == 0:\n        print('epoch', idx, 'loss', loss)\n        \n    loss.backward()\n    opt.step()"}],y={examples:"examples_bQMf",animation_svg:"animation_svg_VqDO",animation:"animation_thx0",example_container:"example_container_7+SN","animation-1":"animation-1_QB29","animation-2":"animation-2_uPBQ","animation-3":"animation-3_c0W6","animation-4":"animation-4_KeyY","animation-5":"animation-5_x24D","animation-6":"animation-6_DeHy"};var N=function(){var e,t,a,r,i,o;return n.createElement(n.Fragment,null,_&&_.length&&n.createElement("section",{id:"examples",className:y.examples},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6"},n.createElement(v,{category:"Examples"}),n.createElement(u.Z,{defaultValue:_[0].label,values:_.map((function(e,t){return{label:e.label,value:e.label}})),className:y.tabs},_.map((function(e,t){return n.createElement(d.Z,{key:t,value:e.label},n.createElement(c,(0,l.Z)({key:t},e)))})))),n.createElement("div",{className:"col col--6"},n.createElement("div",{className:y.example_container},n.createElement("svg",{className:y.animation_svg,xmlns:"http://www.w3.org/2000/svg"},n.createElement("g",{className:y.animation},n.createElement("image",((e={height:"30rem"}).height="30rem",e.href="img/bivariate-normal-frame-0.svg",e)),n.createElement("image",((t={height:"30rem"}).height="30rem",t.href="img/bivariate-normal-frame-1.svg",t)),n.createElement("image",((a={height:"30rem"}).height="30rem",a.href="img/bivariate-normal-frame-2.svg",a)),n.createElement("image",((r={height:"30rem"}).height="30rem",r.href="img/bivariate-normal-frame-3.svg",r)),n.createElement("image",((i={height:"30rem"}).height="30rem",i.href="img/bivariate-normal-frame-4.svg",i)),n.createElement("image",((o={height:"30rem"}).height="30rem",o.href="img/bivariate-normal-frame-5.svg",o))))))))))},w=a(6010),x=a(5154),Z="features_QT-1",k="feature_qE4w",P="header_UXlB",T="icon_f7X3",F="title_DByG",z=[{icon:n.createElement(x.II3,{size:24}),title:n.createElement(n.Fragment,null,"Simple but powerful"),description:n.createElement(n.Fragment,null,"Design, train, and sample from complex probability distributions using only a few lines of code. Advanced features such as conditionality, caching, and structured representations are planned for future released.")},{icon:n.createElement(x.THo,{size:24}),title:n.createElement(n.Fragment,null,"Community focused"),description:n.createElement(n.Fragment,null,"We help you be a successful user or contributor through detailed user, developer, and API guides. Educational tutorials and research benchmarks are planned for the future. We welcome your feedback!")},{icon:n.createElement(x.ZUW,{size:24}),title:n.createElement(n.Fragment,null,"Modular and extendable"),description:n.createElement(n.Fragment,null,"Combine multiple bijections to form complex normalizing flows, and mix-and-match conditioning networks with bijections. FlowTorch has a well-defined interface so you easily create your own components!")},{icon:n.createElement(x.SjQ,{size:24}),title:n.createElement(n.Fragment,null,"Production ready"),description:n.createElement(n.Fragment,null,"Proven code migrated from Pyro, with improved unit testing and continuous integration. And it is easy to add standard unit tests to components you write yourself!")}];function C(e){var t=e.icon,a=e.title,r=e.description;return n.createElement("div",{className:(0,w.Z)("col col--6",k)},n.createElement("div",{className:"item"},n.createElement("div",{className:P},t&&n.createElement("div",{className:T},t),n.createElement("h2",{className:F},a)),n.createElement("p",null,r)))}var D=function(){return n.createElement(n.Fragment,null,z&&z.length&&n.createElement("section",{id:"features",className:Z},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--12"},n.createElement("div",{className:"row"},z.map((function(e,t){return n.createElement(C,(0,l.Z)({key:t},e))}))))))))},S=a(9960),A=a(4996),B={banner:"banner_sXaJ",logo:"logo_6UqO",buttons:"buttons_g4WO",subtitle:"subtitle_6SC4"};var j=function(){return(0,i.Z)().siteConfig,n.createElement("header",{id:"hero",className:(0,w.Z)("hero",B.banner)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("h1",{className:"hero__subtitle"},n.createElement("img",{className:"hero__img",src:"img/logo.svg"}),"Easily ",n.createElement("span",{className:"hero__primary"},"learn")," and ",n.createElement("span",{className:"hero__primary"},"sample")," complex ",n.createElement("span",{className:"hero__secondary"},"probability distributions")," with PyTorch")),n.createElement("div",{className:"hero__buttons row"},n.createElement("div",{className:B.buttons},n.createElement(S.Z,{className:(0,w.Z)("button button--primary button--lg",B.getStarted),to:(0,A.Z)("users")},"Get Started")),n.createElement("div",{className:B.buttons},n.createElement(S.Z,{className:(0,w.Z)("button button--warning button--lg",B.getStarted),to:(0,A.Z)("dev")},"Contribute"),n.createElement("iframe",{className:"hero__github_button",src:"https://ghbtns.com/github-btn.html?user=facebookincubator&repo=flowtorch&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"})))))};function G(){var e=(0,i.Z)().siteConfig;return n.createElement(r.Z,{title:""+e.title,description:"FlowTorch is a library for representing complex or high-dimensional probability distributions."},n.createElement(j,null),n.createElement("main",null,n.createElement(D,null),n.createElement(N,null)))}}}]);