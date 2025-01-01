"use strict";(self.webpackChunkinstallerarmoury=self.webpackChunkinstallerarmoury||[]).push([[2481],{7572:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=i(4848),l=i(8453);const t={title:"Swift",description:""},r="Programming with Swift",a={id:"Programming/Swift/Swift",title:"Swift",description:"",source:"@site/docs/Programming/Swift/Swift.md",sourceDirName:"Programming/Swift",slug:"/Programming/Swift/",permalink:"/InstallerArmory/docs/Programming/Swift/",draft:!1,unlisted:!1,editUrl:"https://github.com/jeetsuthar/InstallerArmory/tree/main/docs/Programming/Swift/Swift.md",tags:[],version:"current",frontMatter:{title:"Swift",description:""},sidebar:"tutorialSidebar",previous:{title:"Kotlin",permalink:"/InstallerArmory/docs/Programming/Kotlin/"}},o={},d=[{value:"Windows Installation",id:"windows-installation",level:2},{value:"1. Install Windows Subsystem for Linux (WSL)",id:"1-install-windows-subsystem-for-linux-wsl",level:3},{value:"2. Install Swift on WSL",id:"2-install-swift-on-wsl",level:3},{value:"3. Verify Installation",id:"3-verify-installation",level:3},{value:"Linux Installation",id:"linux-installation",level:2},{value:"1. Download Swift",id:"1-download-swift",level:3},{value:"2. Install Swift",id:"2-install-swift",level:3},{value:"3. Verify Installation",id:"3-verify-installation-1",level:3},{value:"macOS Installation",id:"macos-installation",level:2},{value:"1. Install Xcode (Recommended)",id:"1-install-xcode-recommended",level:3},{value:"2. Alternative: Install Swift via Homebrew",id:"2-alternative-install-swift-via-homebrew",level:3},{value:"3. Verify Installation",id:"3-verify-installation-2",level:3}];function c(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"programming-with-swift",children:"Programming with Swift"})}),"\n",(0,s.jsxs)(e.p,{children:["This guide provides step-by-step instructions to install Swift on ",(0,s.jsx)(e.strong,{children:"Windows"}),", ",(0,s.jsx)(e.strong,{children:"Linux"}),", and ",(0,s.jsx)(e.strong,{children:"macOS"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"windows-installation",children:"Windows Installation"}),"\n",(0,s.jsx)(e.h3,{id:"1-install-windows-subsystem-for-linux-wsl",children:"1. Install Windows Subsystem for Linux (WSL)"}),"\n",(0,s.jsx)(e.p,{children:"Swift doesn\u2019t run natively on Windows. It requires WSL to run within a Linux environment on Windows."}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Open ",(0,s.jsx)(e.strong,{children:"PowerShell"})," as an administrator."]}),"\n",(0,s.jsxs)(e.li,{children:["Run the following command:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"wsl --install\n"})}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Once installed, restart your computer if prompted."}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"2-install-swift-on-wsl",children:"2. Install Swift on WSL"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Open ",(0,s.jsx)(e.strong,{children:"WSL"})," (Ubuntu)."]}),"\n",(0,s.jsxs)(e.li,{children:["Update package lists with:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo apt update\nsudo apt upgrade\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Install the required dependencies:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"sudo apt install clang libicu-dev\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Download Swift from the ",(0,s.jsx)(e.a,{href:"https://swift.org/download/",children:"official Swift website"}),", selecting the latest stable release for Ubuntu."]}),"\n",(0,s.jsxs)(e.li,{children:["Install Swift by running:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'tar -xvzf swift-<version>-ubuntu.tar.gz\nsudo mv swift-<version>-ubuntu /usr/share/swift\necho "export PATH=/usr/share/swift/usr/bin:$PATH" >> ~/.bashrc\nsource ~/.bashrc\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"3-verify-installation",children:"3. Verify Installation"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Open a new ",(0,s.jsx)(e.strong,{children:"WSL"})," Terminal window."]}),"\n",(0,s.jsxs)(e.li,{children:["Run ",(0,s.jsx)(e.code,{children:"swift --version"}),". The installed Swift version should be displayed."]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"linux-installation",children:"Linux Installation"}),"\n",(0,s.jsx)(e.h3,{id:"1-download-swift",children:"1. Download Swift"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Visit the ",(0,s.jsx)(e.a,{href:"https://swift.org/download/",children:"official Swift download page"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"Download the latest Swift release for Linux (.tar.gz)."}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"2-install-swift",children:"2. Install Swift"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Open the ",(0,s.jsx)(e.strong,{children:"Terminal"})," and navigate to the directory where the file was downloaded."]}),"\n",(0,s.jsxs)(e.li,{children:["Extract the Swift file:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"tar -xvzf swift-<version>-ubuntu.tar.gz\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Move the extracted folder to ",(0,s.jsx)(e.code,{children:"/usr/share"}),":","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'sudo mv swift-<version>-ubuntu /usr/share/swift\necho "export PATH=/usr/share/swift/usr/bin:$PATH" >> ~/.bashrc\nsource ~/.bashrc\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"3-verify-installation-1",children:"3. Verify Installation"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Open a new Terminal window."}),"\n",(0,s.jsxs)(e.li,{children:["Run ",(0,s.jsx)(e.code,{children:"swift --version"}),". The Swift version should be displayed."]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"macos-installation",children:"macOS Installation"}),"\n",(0,s.jsx)(e.h3,{id:"1-install-xcode-recommended",children:"1. Install Xcode (Recommended)"}),"\n",(0,s.jsxs)(e.p,{children:["Swift comes pre-installed with ",(0,s.jsx)(e.strong,{children:"Xcode"}),", the official IDE for Swift development."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Visit the ",(0,s.jsx)(e.a,{href:"https://apps.apple.com/us/app/xcode/id497799835?mt=12",children:"Mac App Store"})," and download ",(0,s.jsx)(e.strong,{children:"Xcode"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Open Xcode and go to ",(0,s.jsx)(e.strong,{children:"Preferences"})," > ",(0,s.jsx)(e.strong,{children:"Locations"}),", then set the Command Line Tools to the latest Xcode version."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"2-alternative-install-swift-via-homebrew",children:"2. Alternative: Install Swift via Homebrew"}),"\n",(0,s.jsxs)(e.p,{children:["If you don\u2019t want to use Xcode, you can install Swift via ",(0,s.jsx)(e.strong,{children:"Homebrew"}),"."]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Install Homebrew (if not installed):","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["Install Swift:","\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"brew install swift\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"3-verify-installation-2",children:"3. Verify Installation"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Open ",(0,s.jsx)(e.strong,{children:"Terminal"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["Run ",(0,s.jsx)(e.code,{children:"swift --version"}),". The Swift version should be displayed."]}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Note:"})," Follow these steps to set up Swift for development on any of the platforms listed above."]}),"\n",(0,s.jsx)("center",{children:(0,s.jsx)("i",{children:"Thank you for visiting!"})})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>a});var s=i(6540);const l={},t=s.createContext(l);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);