import {
  Card,
  CardBottom,
  CardImage,
  CardTop,
} from "@/components/Craft/widgets/Card";
import Container from "@/components/Craft/widgets/Container";
FullWidthContainer;
import { Editor } from "@craftjs/core";
import { Button, ButtonText } from "@/components/Craft/widgets/Button";
import { Text } from "@/components/Craft/widgets/Text/Text";
import { Grid, GridTop } from "@/components/Craft/widgets/Grid";
import { BuilderImage } from "@/components/Craft/widgets/Image";
import { Topbar } from "@/components/Craft/Topbar";
import { createContext, useContext, useState } from "react";
import {
  HeroLayout,
  HeroText,
  HeroButton,
} from "@/components/Craft/widgets/prebuilt/HeroLayout";
import { GlobalContext } from "@/layouts/GlobalLayout";

import {
  HeaderLayout,
  HeaderLogo,
  HeaderMenu,
} from "@/components/Craft/widgets/prebuilt/Header";
import { Link, LinkText } from "@/components/Craft/widgets/Link";
import App, { MainApp } from "@/components/Craft/widgets/App";
import Divider from "@/components/Craft/widgets/Divider";
import { BuilderVideo } from "@/components/Craft/widgets/Video";
import { List } from "@/components/Craft/widgets/List";
import ListItem from "@/components/Craft/widgets/ListItem";
import CustomHTML from "@/components/Craft/widgets/CustomHTML";
import MapElement from "@/components/Craft/widgets/Map";
import Countdown from "@/components/Craft/widgets/Countdown";
import Progress from "@/components/Craft/widgets/Progress";
import Calendar from "@/components/Craft/widgets/Calendar";
import { Review, ReviewTitle } from "@/components/Craft/widgets/Reviews";
import {
  OrderConfirmation,
  OrderText,
} from "@/components/Craft/widgets/prebuilt/OrderConfirmation";
import {
  FormElements,
  OrderOneStep,
} from "@/components/Craft/widgets/prebuilt/OrderOneStep";
import { OrderTwoStep } from "@/components/Craft/widgets/prebuilt/OrderTwoStep";
import { FAQs, FAQsText } from "@/components/Craft/widgets/FAQs";
// import {
//   Testimonials,
//   TestimonialsText,
// } from "@/components/Craft/widgets/prebuilt/Testimonials";
// import {
//   Carousels,
//   CarouselsText,
// } from "@/components/Craft/widgets/prebuilt/Carousel";
import { TextInputElement } from "@/components/Craft/widgets/form/TextInput";
import { TextAreaElement } from "@/components/Craft/widgets/form/TextareaElement";
import { RadioInputElement } from "@/components/Craft/widgets/form/RadioElement";
import { CheckboxInputElement } from "@/components/Craft/widgets/form/CheckboxElement";
import { SelectBoxInputElement } from "@/components/Craft/widgets/form/SelectInputElement";
import { AttachmentElement } from "@/components/Craft/widgets/form/Attachment";
import { DatePickerElement } from "@/components/Craft/widgets/form/DatePicker";
import {
  Breadcrumbs,
  BreadcrumbsText,
} from "@/components/Craft/widgets/prebuilt/Breadcrumbs";
// import {
//   Footers,
//   FootersText,
// } from "@/components/Craft/widgets/prebuilt/Footer";
import {
  MainForm,
  MainFormTop,
} from "@/components/Craft/widgets/form/MainForm";

import {
  NavBar,
  NavBarsText,
} from "../../../components/Craft/Templates/dentalTemplate/navBar";
import {
  Banner,
  BannersText,
} from "../../../components/Craft/Templates/dentalTemplate/banner";
import {
  FooterWeb,
  FooterWebsText,
} from "../../../components/Craft/Templates/dentalTemplate/footer";
import {
  CardBanner,
  CardBannersText,
} from "../../../components/Craft/Templates/dentalTemplate/cards";
import {
  CardBottomNew,
  CardBottomsText,
} from "../../../components/Craft/Templates/dentalTemplate/cardBottom";
import {
  AboutTemp,
  AboutTempsText,
} from "@/components/Craft/Templates/dentalTemplate/aboutUs";
import {
  CardHeader,
  CardHeadersText,
} from "@/components/Craft/Templates/dentalTemplate/cardHeader";
import {
  WebTestimonial,
  WebTestimonialsText,
} from "@/components/Craft/Templates/dentalTemplate/webTestimonial";
// import {
//   ContactTemp,
//   ContactTempsText,
// } from "@/components/Craft/Templates/dentalTemplate/contactUs";
import {
  Team,
  TeamsText,
} from "@/components/Craft/Templates/dentalTemplate/team";
// import {
//   HeaderMenuNew,
//   NewNavBarLayout,
// } from "@/components/Craft/Templates/dentalTemplate/newNavBar";
import {
  FaBriefcaseMedical,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCalendarAlt,
  FaTwitter,
  FaUserAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import {
  BsArrowLeftRight,
  BsArrowRight,
  BsCheckLg,
  BsFillTelephoneFill,
  BsTelephoneOutbound,
  BsTwitter,
} from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import {
  Blog,
  BlogsText,
} from "@/components/Craft/Templates/dentalTemplate/blog";
import ErrorBoundary from "@/components/Craft/Templates/dentalTemplate/errorNew";
import MyComponent from "@/components/Craft/Templates/dentalTemplate/newDemo";
import {
  ContactTemp,
  ContactTempsText,
  ContactTempTop,
} from "@/components/Craft/Templates/dentalTemplate/contactUs";

import { Headline } from "@/components/Craft/widgets/Text/Headline";
import {
  Newsletter,
  NewsletterText,
} from "@/components/Craft/widgets/prebuilt/Newsletter";
import {
  ImageOverlay,
  ImageOverlayText,
} from "@/components/Craft/widgets/prebuilt/ImageOverlay";
import {
  CtaLayout,
  CtaLayoutText,
} from "@/components/Craft/widgets/prebuilt/CtaLayout";
import {
  BlogLayout,
  BlogLayoutsText,
} from "@/components/Craft/widgets/prebuilt/BlogLayout";
import {
  GlobalHeaderLayout,
  GlobalHeaderLogo,
  GlobalHeaderMenu,
} from "@/components/Craft/GlobalSectionLayouts/HeaderLayout";
import {
  GlobalHeroButton,
  GlobalHeroLayout,
  GlobalHeroText,
} from "@/components/Craft/GlobalSectionLayouts/HeroLayout";
import {
  GlobalFAQs,
  GlobalFAQsText,
} from "@/components/Craft/GlobalSectionLayouts/FaqLayout";
import {
  GlobalTestimonialsLayout,
  GlobalTestimonialsText,
} from "@/components/Craft/GlobalSectionLayouts/TestimonialLayout";
import {
  GlobalCarouselsLayout,
  GlobalCarouselsText,
} from "@/components/Craft/GlobalSectionLayouts/CarouselsLayout";
import {
  GlobalBreadcrumbsLayout,
  GlobalBreadcrumbsText,
} from "@/components/Craft/GlobalSectionLayouts/BreadcrumbsLayout";
import {
  GlobalFooterLayout,
  GlobalFootersText,
} from "@/components/Craft/GlobalSectionLayouts/FooterLayout";
import {
  GlobalBannerLayout,
  GlobalBannersText,
} from "@/components/Craft/GlobalSectionLayouts/BannerLayout";
import {
  GlobalCardHeader,
  GlobalCardHeadersText,
} from "@/components/Craft/GlobalSectionLayouts/CardHeaderLayout";
import {
  GlobalCardBanner,
  GlobalCardBannersText,
} from "@/components/Craft/GlobalSectionLayouts/CardBannerLayout";
import {
  GlobalWebTestimonial,
  GlobalWebTestimonialsText,
} from "@/components/Craft/GlobalSectionLayouts/WebTestimonialLayout";
import {
  GlobalCardBottom,
  GlobalCardBottomsText,
} from "@/components/Craft/GlobalSectionLayouts/CardBottomLayout";
import {
  GlobalFooterWeb,
  GlobalFooterWebsText,
} from "@/components/Craft/GlobalSectionLayouts/WebFooterLayout";
import {
  GlobalTeam,
  GlobalTeamsText,
} from "@/components/Craft/GlobalSectionLayouts/TeamLayout";
import {
  GlobalContactTemp,
  GlobalContactTempTop,
  GlobalContactTempsText,
} from "@/components/Craft/GlobalSectionLayouts/ContactLayout";
import {
  GlobalCtaLayout,
  GlobalCtaLayoutText,
} from "@/components/Craft/GlobalSectionLayouts/CtaLayout";
import {
  GlobalBlogLayout,
  GlobalBlogLayoutsText,
} from "@/components/Craft/GlobalSectionLayouts/BlogLayout";

import Wide from "@/components/Craft/SectionsLayouts/Wide";
import Medium from "@/components/Craft/SectionsLayouts/Medium";
import Small from "@/components/Craft/SectionsLayouts/Small";
import {
  HeaderMenuNew,
  NewNavBarLayout,
} from "@/components/Craft/Templates/dentalTemplate/newNavBar";
import {
  HeaderMenuTherapy,
  TherapyButton,
  TherapyHeaderLogo,
  TherapyTempNavbar,
} from "@/components/Craft/Templates/PhysicalTherapyTemplate/TherapyTempNavbar";
import {
  WelcomePost,
  WelcomePostButton,
  WelcomePostText,
} from "@/components/Craft/Templates/PhysicalTherapyTemplate/WelcomePost";
import {
  WhyChooseUs,
  WhyChooseUsButton,
  WhyChooseUsText,
} from "@/components/Craft/Templates/PhysicalTherapyTemplate/WhyChooseUs";
import {
  ServicesLayout,
  ServicesText,
} from "../../../components/Craft/Templates/PhysicalTherapyTemplate/Services";
import {
  AboutUs,
  AboutUsButton,
  AboutUsText,
} from "@/components/Craft/Templates/PhysicalTherapyTemplate/AboutUs";
import {
  Testimonial,
  TestimonialText,
} from "@/components/Craft/Templates/PhysicalTherapyTemplate/Testimonials";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import {
  PhysioBlog,
  PhysioBlogText,
} from "@/components/Craft/Templates/PhysicalTherapyTemplate/PhysioBlog";
import {
  PhysioAppointment,
  PhysioAppointmentButton,
  PhysioAppointmentText,
} from "@/components/Craft/Templates/PhysicalTherapyTemplate/Appointment";
import {
  PhysioFooter,
  PhysioFooterText,
} from "@/components/Craft/Templates/PhysicalTherapyTemplate/PhysioFooter";
import {
  ChiroNavBar,
  ChiroNavBarButton,
  ChiroNavBarLogo,
  HeaderMenuChiro,
} from "@/components/Craft/Templates/ChiroTemplate/ChiroNavBar";
import {
  ChiroBanner,
  ChiroBannerButton,
  ChiroBannerText,
} from "@/components/Craft/Templates/ChiroTemplate/ChiroBanner";
import {
  ChiroAppointment,
  ChiroAppointmentText,
} from "@/components/Craft/Templates/ChiroTemplate/ChiroAppointment";
import { MdAttachEmail, MdEmail, MdOutlineFacebook } from "react-icons/md";
import {
  ChiroAbout,
  ChiroAboutImage,
  ChiroAboutText,
} from "@/components/Craft/Templates/ChiroTemplate/ChiroAbout";
SmallWidth;
import FullWidth from "@/components/Craft/SectionsLayouts/FullWidth";

import dynamic from "next/dynamic";
import {
  Testimonials,
  TestimonialsText,
} from "@/components/Craft/widgets/prebuilt/Testimonials";
import FullWidthContainer from "@/components/Craft/widgets/FullWidthContainer";
import MediumWidth from "@/components/Craft/SectionsLayouts/Medium";
import MediumWidthContainer from "@/components/Craft/widgets/MidiumWidthContainer";
MediumWidthContainer;
// import Main from "@/components/Craft/Main";
import { SubTopHeader } from "@/components/Craft/SubTopHeader";
import SeoSettings from "@/components/Craft/Settings/SeoSettings";
import SmallWidth from "@/components/Craft/SectionsLayouts/Small";
import WebContainer from "@/components/Craft/widgets/form/webContainer";
import {
  ChiroTeam,
  ChiroTeamImage,
  ChiroTeamText,
} from "@/components/Craft/Templates/ChiroTemplate/ChiroTeam";
import { IoCallSharp } from "react-icons/io5";
import {
  ChiroFeaturedServices,
  ChiroFeaturedServicesText,
} from "@/components/Craft/Templates/ChiroTemplate/ChiroFeaturedServices";
import {
  ChiroQualityService,
  ChiroQualityServiceButton,
  ChiroQualityServiceText,
} from "@/components/Craft/Templates/ChiroTemplate/ChiroQualityService";
import {
  ChiroClientSays,
  ChiroClientSaysButton,
  ChiroClientSaysText,
} from "@/components/Craft/Templates/ChiroTemplate/ChiroClientSays";
import { AiFillStar, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import {
  ChiroArticles,
  ChiroArticlesButton,
  ChiroArticlesText,
} from "@/components/Craft/Templates/ChiroTemplate/ChiroArticles";
import {
  ChiroFooter,
  ChiroFooterImage,
  ChiroFooterText,
} from "@/components/Craft/Templates/ChiroTemplate/ChiroFooter";
import {
  ChiroTemplate,
  ChiroTemplateSection,
} from "@/components/Craft/TemplateSection/ChiroTemplate";
import {
  PhysicalTherapyTemplate,
  PhysicalTherapyTemplateSection,
} from "@/components/Craft/TemplateSection/PhysicalTherapyTemplate";
import {
  DentleTemplate,
  DentleTemplateSection,
} from "@/components/Craft/TemplateSection/DentleTemplate";
import { CardTextData, TextCard } from "@/components/Craft/widgets/TextCard";
import { TeamCard, TeamCardData } from "@/components/Craft/widgets/TeamCard";
import {
  TextTestimonial,
  TextTestimonialData,
} from "@/components/Craft/widgets/TextTestimonial";
import { RatingStars } from "@/components/Craft/widgets/RatingStars";
import { BlogCard, BlogCardData } from "@/components/Craft/widgets/BlogCard";
import {
  Footers,
  FootersText,
} from "@/components/Craft/widgets/prebuilt/Footer";

import { useRouter } from "next/router";
import {
  BlogCardPotrait,
  BlogCardPotraitData,
} from "@/components/Craft/widgets/BlogCardPotrait";
import { SelectBox } from "@/components/Craft/widgets/Select";
import {
  AcuNavBar,
  AcuNavBarButton,
  AcuNavBarLogo,
  HeaderMenuAcu,
} from "@/components/Craft/Templates/AcupuntureTemplate/AcuNavBar";
import {
  AcuBanner,
  AcuBannerButton,
  AcuBannerText,
} from "@/components/Craft/Templates/AcupuntureTemplate/AcuBanner";
import FormContainer from "@/components/FormCraft/Container";
import {
  ServicesImageCard,
  ServicesImageCardData,
} from "@/components/Craft/widgets/ServicesImageCard";
import {
  AcuTemplate,
  AcuTemplateSection,
} from "@/components/Craft/TemplateSection/AcupunctureTemplate";
import {
  AcuProcedures,
  AcuProceduresImage,
  AcuProceduresText,
} from "@/components/Craft/Templates/AcupuntureTemplate/AcuProcedures";
import {
  ServiceRateCard,
  ServiceRateCardData,
} from "@/components/Craft/widgets/ServiceRateCard";

import { ClientSaysCardData } from "@/components/Craft/widgets/ClientSaysCard";

import {
  AcuAboutus,
  AcuAboutusButton,
  AcuAboutusText,
} from "@/components/Craft/Templates/AcupuntureTemplate/Aboutus";
import {
  AcuNews,
  AcuNewsText,
} from "@/components/Craft/Templates/AcupuntureTemplate/AcuNews";
import { NewsCard, NewsCardData } from "@/components/Craft/widgets/NewsCard";
import {
  AcuFooter,
  AcuFooterImage,
  AcuFooterText,
} from "@/components/Craft/Templates/AcupuntureTemplate/Acufooter";
import {
  AcuFeaturedServices,
  AcuFeaturedServicesText,
} from "@/components/Craft/Templates/AcupuntureTemplate/Acuservices";
import {
  ServicesCard,
  ServicesCardData,
} from "@/components/Craft/widgets/ServicesCard";
import {
  AcuTeam,
  AcuTeamImage,
  AcuTeamText,
} from "@/components/Craft/Templates/AcupuntureTemplate/AcuTeam";
import PreviewSet from "@/components/Craft/PreviewSet";
import Icons from "@/components/Craft/widgets/Icons";

const Main = dynamic(() => import("@/components/Craft/Main"), { ssr: false });

import { Facebook, Instagram, Twitter } from "@mui/icons-material";

import {
  AcuWelcomeBanner,
  AcuWelcomeBannerButton,
  AcuWelcomeBannerText,
} from "@/components/Craft/Templates/AcupuntureTemplate/Acuwelcomebanner";

import {
  AcuContactus,
  AcuContactusButton,
  AcuContactusText,
} from "@/components/Craft/Templates/AcupuntureTemplate/AcuContactus";
import {
  AcuReviews,
  AcuReviewsText,
} from "@/components/Craft/Templates/AcupuntureTemplate/AcuReviews";
import {
  ReviewsCard,
  ReviewsCardData,
} from "@/components/Craft/widgets/ReviewsCard";
import RateCard from "@/components/Craft/widgets/RateCard";
import { GlobalContactusForm } from "@/components/Craft/widgets/form/GlobalContactusForm";
import {
  HeaderMenuPracto,
  PractoNavbar,
  PractoNavbarButton,
  PractoNavbarLogo,
} from "@/components/Craft/Templates/PractoTemplate/PractoNavbar";
import {
  PractoContactus,
  PractoContactusButton,
  PractoContactusText,
} from "@/components/Craft/Templates/PractoTemplate/PractoContactus";
import {
  GlobalRequestForm,
  GlobalRequestFormData,
} from "@/components/Craft/widgets/form/RequestQoute";
import {
  PractoOffer,
  PractoOfferText,
} from "@/components/Craft/Templates/PractoTemplate/PractoOffer";
import {
  ServicesOfferCard,
  ServicesOfferCardData,
} from "@/components/Craft/widgets/ServicesOfferCard";
import {
  PractoBlog,
  PractoBlogImage,
  PractoBlogText,
} from "@/components/Craft/Templates/PractoTemplate/PractoBlog";
import {
  ContactUsBanner,
  ContactUsBannerText,
} from "@/components/Craft/widgets/ContactUsBanner";
import {
  PractoContactUsBanner,
  PractoContactUsBannerText,
} from "@/components/Craft/Templates/PractoTemplate/PractoContactUsBanner";
import {
  PractoMap,
  PractoMapText,
} from "@/components/Craft/Templates/PractoTemplate/PractoMap";

import {
  FeaturedCard,
  FeaturedCardData,
} from "@/components/Craft/widgets/FeaturedCard";
import {
  PractoChooseUs,
  PractoChooseUsButton,
  PractoChooseUsText,
} from "@/components/Craft/Templates/PractoTemplate/PractoChooseUs";
import { PractoBanner, PractoBannerButton, PractoBannerText } from "@/components/Craft/Templates/PractoTemplate/PractoBanner";

export const CraftContext = createContext({
  tabValue: 0,
  setTabValue: (tabValue: number) => {},
  tools: "prebuilt",
  setTools: (tool: string) => {},
  section: "Section",
  setSection: (section: string) => {},
  device: "desktop",
  setDevice: (device: string) => {},
  preview: false,
  setPreview: (preview: boolean) => {},
});

export default function Preview() {
  const [tabValue, setTabValue] = useState(0);
  const [tools, setTools] = useState("prebuilt");
  const [section, setSection] = useState("Sections");
  const [device, setDevice] = useState("desktop");
  const router = useRouter();

  const ctx = useContext(GlobalContext);
  ctx.setOpen(false);
  const value: any = {
    tabValue,
    setTabValue,
    tools,
    setTools,
    device,
    setDevice,
    section,
    setSection,
  };

  return (
    <CraftContext.Provider value={value}>
      <div className="h-full overflow-y-scroll scrollbar-hide">
        <Editor
          enabled={false}
          resolver={{
            App,
            FaFacebook,
            FaTwitter,
            FaLinkedin,
            FaYoutube,
            FiHome,
            BsTelephoneOutbound,
            CiMail,
            BlogLayout,
            BlogLayoutsText,
            CtaLayout,
            CtaLayoutText,
            ContactTempsText,
            ContactTemp,
            ContactTempTop,
            MyComponent,
            Blog,
            BlogsText,
            // HeaderMenuNew,
            Team,
            // NewNavBarLayout,
            TeamsText,
            WebTestimonial,
            WebTestimonialsText,
            CardHeader,
            CardHeadersText,
            AboutTemp,
            AboutTempsText,
            CardBottomNew,
            CardBottomsText,
            CardBanner,
            CardBannersText,
            Banner,
            FooterWeb,
            FooterWebsText,
            BannersText,
            NavBar,
            NavBarsText,
            // FootersText,
            // Footers,
            Breadcrumbs,
            BreadcrumbsText,
            // Carousels,
            // CarouselsText,
            // Testimonials,
            Testimonials,
            TestimonialsText,
            FAQs,
            FAQsText,
            Card,
            Button,
            Text,
            List,
            ListItem,
            Headline,
            Container,
            CardTop,
            CardBottom,
            Grid,
            GridTop,
            BuilderImage,
            HeroLayout,
            HeroText,
            HeroButton,
            ButtonText,
            HeaderLayout,
            HeaderLogo,
            HeaderMenu,
            Link,
            LinkText,
            Divider,
            BuilderVideo,
            MainApp,
            CardImage,
            CustomHTML,
            MapElement,
            Countdown,
            Progress,
            Calendar,
            Review,
            ReviewTitle,
            OrderConfirmation,
            OrderText,
            OrderOneStep,
            OrderTwoStep,
            FormElements,
            //Form
            //
            MainForm,
            MainFormTop,
            TextInputElement,
            TextAreaElement,
            RadioInputElement,
            CheckboxInputElement,
            SelectBoxInputElement,
            AttachmentElement,
            DatePickerElement,
            ErrorBoundary,
            //sections
            FormContainer,
            Newsletter,
            NewsletterText,
            ImageOverlay,
            ImageOverlayText,
            GlobalHeaderLayout,
            GlobalHeroLayout,
            GlobalFAQs,
            GlobalHeaderLogo,
            GlobalHeaderMenu,
            GlobalHeroText,
            GlobalHeroButton,
            GlobalFAQsText,
            GlobalTestimonialsLayout,
            GlobalTestimonialsText,
            GlobalCarouselsLayout,
            GlobalCarouselsText,
            GlobalBreadcrumbsLayout,
            GlobalBreadcrumbsText,
            GlobalFooterLayout,
            GlobalFootersText,
            GlobalBannerLayout,
            GlobalBannersText,
            GlobalCardHeadersText,
            GlobalCardHeader,
            GlobalCardBanner,
            GlobalCardBannersText,
            GlobalWebTestimonial,
            GlobalWebTestimonialsText,
            GlobalCardBottom,
            GlobalCardBottomsText,
            GlobalFooterWeb,
            GlobalFooterWebsText,
            GlobalTeam,
            GlobalTeamsText,
            GlobalContactTemp,
            GlobalContactTempsText,
            GlobalContactTempTop,
            GlobalCtaLayout,
            GlobalCtaLayoutText,
            GlobalBlogLayout,
            GlobalBlogLayoutsText,
            FullWidth,
            Wide,
            Medium,
            Small,
            NewNavBarLayout,
            HeaderMenuNew,

            TherapyTempNavbar,
            TherapyHeaderLogo,
            HeaderMenuTherapy,
            TherapyButton,
            WelcomePost,
            WelcomePostButton,
            WelcomePostText,
            WhyChooseUs,
            WhyChooseUsText,
            WhyChooseUsButton,
            ServicesLayout,
            ServicesText,
            AboutUs,
            AboutUsText,
            AboutUsButton,
            Testimonial,
            TestimonialText,
            ImQuotesLeft,
            ImQuotesRight,
            PhysioBlog,
            PhysioBlogText,
            PhysioAppointment,
            PhysioAppointmentText,
            PhysioAppointmentButton,
            PhysioFooter,
            PhysioFooterText,

            ChiroNavBar,
            ChiroNavBarButton,
            ChiroNavBarLogo,
            HeaderMenuChiro,
            ChiroBanner,
            ChiroBannerButton,
            ChiroBannerText,
            ChiroAppointment,
            ChiroAppointmentText,
            FaUserAlt,
            MdAttachEmail,
            BsFillTelephoneFill,
            FaBriefcaseMedical,
            FaRegCalendarAlt,
            ChiroAbout,
            ChiroAboutText,
            ChiroAboutImage,
            ChiroTeam,
            ChiroTeamText,
            ChiroTeamImage,
            IoCallSharp,
            MdEmail,
            ChiroFeaturedServices,
            ChiroFeaturedServicesText,
            ChiroQualityService,
            ChiroQualityServiceButton,
            ChiroQualityServiceText,
            BsCheckLg,
            ChiroClientSays,
            ChiroClientSaysButton,
            ChiroClientSaysText,
            AiFillStar,
            ChiroArticles,
            ChiroArticlesText,
            ChiroArticlesButton,
            ChiroFooter,
            ChiroFooterText,
            MdOutlineFacebook,
            AiFillTwitterCircle,
            AiFillYoutube,
            ChiroTemplateSection,
            ChiroTemplate,

            // width section
            MediumWidthContainer,

            FullWidthContainer,
            MediumWidth,
            SmallWidth,
            //webcontainer
            WebContainer,

            PhysicalTherapyTemplate,
            PhysicalTherapyTemplateSection,

            DentleTemplate,
            DentleTemplateSection,
            TextCard,
            CardTextData,
            TeamCard,
            TeamCardData,
            TextTestimonialData,
            TextTestimonial,
            RatingStars,
            BlogCard,
            BlogCardData,
            Footers,
            FootersText,
            ChiroFooterImage,
            BsTwitter,

            BlogCardPotrait,
            BlogCardPotraitData,
            SelectBox,
            ServicesImageCard,
            ServicesImageCardData,

            // acu
            AcuNavBar,
            AcuNavBarButton,
            AcuNavBarLogo,
            HeaderMenuAcu,
            AcuBanner,
            AcuBannerButton,
            AcuBannerText,
            AcuTemplate,
            AcuTemplateSection,
            AcuProcedures,
            AcuProceduresText,
            AcuProceduresImage,
            ServiceRateCard,
            ServiceRateCardData,

            ClientSaysCardData,

            AcuAboutus,
            AcuAboutusButton,
            AcuAboutusText,
            AcuNews,
            AcuNewsText,
            AcuFooter,

            AcuFeaturedServicesText,
            AcuFeaturedServices,
            Facebook,
            Twitter,
            Instagram,
            BsArrowLeftRight,
            BsArrowRight,
            AcuFooterText,

            AcuTeam,
            AcuTeamImage,
            AcuTeamText,
            Icons,
            ServicesCard,
            ServicesCardData,
            AcuWelcomeBannerButton,
            AcuWelcomeBanner,
            AcuWelcomeBannerText,
            AcuContactus,
            AcuContactusButton,
            AcuContactusText,
            AcuReviews,
            AcuReviewsText,
            ReviewsCardData,
            AcuFooterImage,
            NewsCard,
            NewsCardData,
            ReviewsCard,
            RateCard,
            GlobalContactusForm,
            PractoNavbar,
            PractoNavbarButton,
            PractoNavbarLogo,
            HeaderMenuPracto,
            PractoContactus,
            PractoContactusButton,
            PractoContactusText,
            GlobalRequestForm,
            GlobalRequestFormData,
            PractoOffer,
            PractoOfferText,
            ServicesOfferCard,
            ServicesOfferCardData,
            PractoBlog,
            PractoBlogImage,
            PractoBlogText,
            ContactUsBanner,
            ContactUsBannerText,
            PractoContactUsBanner,
            PractoContactUsBannerText,
            PractoMap,
            PractoMapText,
            PractoChooseUs,
            PractoChooseUsButton,
            PractoChooseUsText,
            FeaturedCard,
            FeaturedCardData,
            PractoBanner ,
PractoBannerButton,
PractoBannerText,
          }}
        >
          <PreviewSet />
        </Editor>
      </div>
    </CraftContext.Provider>
  );
}
