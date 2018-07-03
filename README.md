Responsive Landing Page.

// <video className="intro-video" autoPlay loop muted>
//   <source src={atom} type='video/mp4'/>
//   </video>

VideoModule.defaultProps = {
  usecase: {
    text: "Choose your use case. Auth0’s Universal Identity Platform for web, mobile and IoT can handle any of them — B2C, B2B, B2E or a combination.",
    video: usecases,
    desktop: "",
    mobile:""
  },
  tech: {
    text:"Your language. Your stack. Auth0 can connect to any application or API. Our 65+ SDKs and pre-configured Quickstarts offer rapid integration.",
    video: tech,
    desktop: "",
    mobile:""
  },
  deploy: {
    text:"Choose the deployment that suits your needs — your cloud, Auth0 Cloud, on-premise, or hybrid.",
    video: deploy,
    desktop: "",
    mobile:""
  },
  custom: {
    text:"Easily customize your app’s authentication process by writing code or picking one of our 100+ pre-built Auth0 Rules and Extensions.",
    video: custom,
    desktop: "",
    mobile:""
  },
  result: {
    text:"Your use case(s) + Your tech stack + Your deployment model + Your customization + Your changing needs = a seamless and secure Auth0 Identity solution that adapts to your future",
    video: result,
    desktop: "",
    mobile:""
  }
}
