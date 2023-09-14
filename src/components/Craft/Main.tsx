/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from "react";
import { Toolbox } from "./Toolbox";
import { Element, Frame, useEditor } from "@craftjs/core";
import Container from "./widgets/Container";
// import { HeroLayout } from "./widgets/prebuilt/HeroLayout";
import { SettingsPanel } from "./Settings";
// import { HeaderLayout } from "./widgets/prebuilt/Header";
// import { BuilderImage } from "./widgets/Image";
// import App from "./widgets/App";
// import { OrderOneStep } from "./widgets/prebuilt/OrderOneStep";
// import { OrderTwoStep } from "./widgets/prebuilt/OrderTwoStep";
// import { TemplateOne } from "./Templates/dentalTemplate";
// import { NavBar } from "./Templates/dentalTemplate/navBar";
// import { Banner } from "./Templates/dentalTemplate/banner";
// import { CardHeader } from "./Templates/dentalTemplate/cardHeader";
// import { CardBanner } from "./Templates/dentalTemplate/cards";
// import { WebTestimonial } from "./Templates/dentalTemplate/webTestimonial";
// import { CardBottomNew } from "./Templates/dentalTemplate/cardBottom";
// import { FooterWeb } from "./Templates/dentalTemplate/footer";
// import { Team } from "./Templates/dentalTemplate/team";
// import { ContactTemp } from "./Templates/dentalTemplate/contactUs";
// import { AboutTemp } from "./Templates/dentalTemplate/aboutUs";
// import { NewNavBarLayout } from "./Templates/dentalTemplate/newNavBar";
// import { Blog } from "./Templates/dentalTemplate/blog";
// import MyComponent from "./Templates/dentalTemplate/newDemo";
// import { BlogLayout } from "./widgets/prebuilt/BlogLayout";
// import { useState } from "react";
import { TherapyTempNavbar } from "./Templates/PhysicalTherapyTemplate/TherapyTempNavbar";
import { WelcomePost } from "./Templates/PhysicalTherapyTemplate/WelcomePost";
import { WhyChooseUs } from "./Templates/PhysicalTherapyTemplate/WhyChooseUs";
import { ServicesLayout } from "./Templates/PhysicalTherapyTemplate/Services";
import { AboutUs } from "./Templates/PhysicalTherapyTemplate/AboutUs";
import { Testimonial } from "./Templates/PhysicalTherapyTemplate/Testimonials";
import { PhysioBlog } from "./Templates/PhysicalTherapyTemplate/PhysioBlog";
import { PhysioAppointment } from "./Templates/PhysicalTherapyTemplate/Appointment";
import { PhysioFooter } from "./Templates/PhysicalTherapyTemplate/PhysioFooter";
import { ChiroNavBar } from "./Templates/ChiroTemplate/ChiroNavBar";
import { ChiroBanner } from "./Templates/ChiroTemplate/ChiroBanner";
import { ChiroAppointment } from "./Templates/ChiroTemplate/ChiroAppointment";
import { ChiroAbout } from "./Templates/ChiroTemplate/ChiroAbout";
import { ChiroTeam } from "./Templates/ChiroTemplate/ChiroTeam";
import { ChiroFeaturedServices } from "./Templates/ChiroTemplate/ChiroFeaturedServices";
import { ChiroQualityService } from "./Templates/ChiroTemplate/ChiroQualityService";
import { useRouter } from "next/router";
import { ChiroClientSays } from "./Templates/ChiroTemplate/ChiroClientSays";
import { ChiroArticles } from "./Templates/ChiroTemplate/ChiroArticles";
import { ChiroFooter } from "./Templates/ChiroTemplate/ChiroFooter";
import lz from "lzutf8";
import { AcuNavBar } from "./Templates/AcupuntureTemplate/AcuNavBar";
import { AcuBanner } from "./Templates/AcupuntureTemplate/AcuBanner";
import { AcuProcedures } from "./Templates/AcupuntureTemplate/AcuProcedures";

import { AcuFooter } from "./Templates/AcupuntureTemplate/Acufooter";
import { AcuAboutus } from "./Templates/AcupuntureTemplate/Aboutus";
import { AcuFeaturedServices } from "./Templates/AcupuntureTemplate/Acuservices";
import { AcuTeam } from "./Templates/AcupuntureTemplate/AcuTeam";
import { AcuWelcomeBanner } from "./Templates/AcupuntureTemplate/Acuwelcomebanner";
import { AcuContactus } from "./Templates/AcupuntureTemplate/AcuContactus";
import { AcuReviews } from "./Templates/AcupuntureTemplate/AcuReviews";
import { AcuNews } from "./Templates/AcupuntureTemplate/AcuNews";
import { PractoNavbar } from "./Templates/PractoTemplate/PractoNavbar";
import { PractoContactus } from "./Templates/PractoTemplate/PractoContactus";
import { PractoOffer } from "./Templates/PractoTemplate/PractoOffer";
import { PractoBlog } from "./Templates/PractoTemplate/PractoBlog";
import { PractoContactUsBanner } from "./Templates/PractoTemplate/PractoContactUsBanner";
import { PractoMap } from "./Templates/PractoTemplate/PractoMap";
import { PractoChooseUs } from "./Templates/PractoTemplate/PractoChooseUs";
import { PractoBanner } from "./Templates/PractoTemplate/PractoBanner";

// import { ServicesLayout } from "./Templates/PhysicalTherapyTemplate/Services";
export default function Main() {
  const router = useRouter();
  const stateToLoad = router?.query;
  console.log("stateToLoad", stateToLoad);
  const [viewportSize, setViewportSize] = useState("desktop");
  const [view, setView] = useState(false);
  const [elementIdToRender, setElementIdToRender] = useState(null);
  const { actions } = useEditor((state, query) => {
    //@ts-ignore
    const [currentNodeId] = state.events.selected;
    let selected;
    // console.log("state", state);

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      draggedComponent: state?.nodes?.ROOT?.data?.nodes?.length,
      enabled: state.options.enabled,
    };
  });

  const handleViewportChange = (size: any) => {
    setView(true);
    console.log(viewportSize);
    setViewportSize(size);
  };
  const frameStyles = {
    width:
      viewportSize === "mobile"
        ? "375px"
        : viewportSize === "tablet"
        ? "768px"
        : "100%",
    height: "100vh",
    border: "1px solid #ccc",
    overflow: "hidden",
  };
  const handleElementSelect = (elementId: any) => {
    setElementIdToRender(elementId);
    setView(true);
  };
  const [json, setJson] = useState("");
  useEffect(() => {
    const stateToLoads = localStorage.getItem("EditData");
    if (stateToLoads) {
      const json = lz.decompress(lz.decodeBase64(stateToLoads));
      if (json) actions?.deserialize(json);
      setJson(json);
    }
  }, []);

  return (
    <div>
      {stateToLoad.fromIframe ? (
        <Frame json={json}>
          <Element is={Container} canvas>
            <ChiroNavBar />
            <ChiroBanner />
            <ChiroAppointment />
            <ChiroAbout />
            <ChiroTeam />
            <ChiroFeaturedServices />
            <ChiroQualityService />
            <ChiroClientSays />
            <ChiroArticles />
            <ChiroFooter />
          </Element>
        </Frame>
      ) : (
        <div className="flex h-full pb-20">
          <div className="w-[22%] pr-2 h-screen">
            <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
              <Toolbox />
            </div>
          </div>
          <div className="w-[78%]  overflow-y-scroll scrollbar-hide h-[80vh]  px-5">
            <div className="flex justify-center mb-2">
              <button
                onClick={() => handleViewportChange("mobile")}
                className="btn btn-outline mx-2"
              >
                Mobile
              </button>
              <button
                onClick={() => handleViewportChange("tablet")}
                className="btn btn-outline mx-2"
              >
                Tablet
              </button>
              <button
                onClick={() => handleViewportChange("desktop")}
                className="btn btn-outline mx-2"
              >
                Desktop
              </button>
              <button
                onClick={() => setView(false)}
                className="btn btn-outline mx-2"
              >
                Disable View
              </button>
            </div>
            {/* <div  className="flex justify-center"> */}
            {view ? (
              <iframe
                style={frameStyles}
                src={`/builder/website/craft?fromIframe=true`}
              />
            ) : (
              <div className=" overflow-y-scroll  ">
                {json == "" ? (
                  <Frame>
                    <Element is={Container} canvas>
                      <ChiroNavBar />
                      <ChiroBanner />
                      <ChiroAppointment />
                      <ChiroAbout />
                      <ChiroTeam />
                      <ChiroFeaturedServices />
                      <ChiroQualityService />
                      <ChiroClientSays />
                      <ChiroArticles />
                      <ChiroFooter />
                      {/* <TherapyTempNavbar />
                      <WelcomePost />
                      <WhyChooseUs />
                      <ServicesLayout />
                      <AboutUs />
                   
                      <PhysioBlog />
                      <PhysioAppointment />
                      <PhysioFooter /> */}
                      {/* <NavBar />
                      <Banner />
                      <CardHeader />
                      <CardBanner />
                      <WebTestimonial />
                      <CardBottomNew />
                      <Team />
                      <FooterWeb /> */}

                      {/* <AcuNavBar />
                      <AcuWelcomeBanner />
                      <AcuFeaturedServices />
                      <AcuAboutus />

                      <AcuBanner />
                      <AcuNews />
                      <AcuReviews /> */}
                      {/* <AcuTeam /> */}
                      {/* <AcuProcedures />

                      <AcuContactus />
                      <AcuFooter /> */}
                      {/* <PractoNavbar />
                      <PractoContactus />
                      <PractoOffer />
                      <PractoContactUsBanner />
                      <PractoBlog />
                      <PractoMap />
                      <PractoChooseUs /> */}
                    </Element>
                  </Frame>
                ) : (
                  <Frame json={json}>
                    <Element is={Container} canvas>
                      ...
                    </Element>
                  </Frame>
                )}
              </div>
            )}
            {/* </div> */}
          </div>
          <div className="w-[22%] pr-2 h-screen">
            <div className="bg-white rounded-md shadow-md h-full overflow-y-scroll pb-40 scrollbar-hide">
              <SettingsPanel />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
