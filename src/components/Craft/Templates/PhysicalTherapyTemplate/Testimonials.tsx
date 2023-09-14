import { Text } from "../../widgets/Text/Text";
import { useNode, Element, useEditor } from "@craftjs/core";
import { BuilderImage } from "../../widgets/Image";
import { AiFillPlusSquare, AiOutlineShoppingCart } from "react-icons/ai";

import {
  baseDefaults,
  CommonSettings,
  getCommonSettingsProps,
  ICommonSettingsProps,
} from "../../widgets/CommonSettings";
import { createElement, useState } from "react";
import FlyOut from "@/components/Flyout";
import { MuiColorInput } from "mui-color-input";
import TextInput from "@/components/controls/TextInput";
import { IoContract } from "react-icons/io5";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { DeleteForever } from "@mui/icons-material";
import LeftFlyOut from "@/components/LeftLayout";
import { TopbarSection } from "../../TopBarSections";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const elementName = "Testimonial";

const defaults = {
  backgroundColor: "#ffffff",
  borderColor: "#313641",
  borderRadius: 0,
};

interface ITestimonialProps extends ICommonSettingsProps {
  size?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
}

export const TestimonialText = ({ children }: any) => {
  const {
    connectors: { connect },
  }: any = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

TestimonialText.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every((incomingNode: any) => false),
  },
};

export const Testimonial = ({
  size,
  backgroundColor = defaults.backgroundColor,
  borderRadius = defaults.borderRadius,
  borderColor = defaults.borderColor,
  borderType = "border-solid",
  borderWidth = baseDefaults.borderWidth,
  marginTop = baseDefaults.marginTop,
  marginBottom = baseDefaults.marginBottom,
  marginLeft = baseDefaults.marginLeft,
  marginRight = baseDefaults.marginRight,
  paddingTop = baseDefaults.paddingTop,
  paddingBottom = baseDefaults.paddingBottom,
  paddingLeft = baseDefaults.paddingLeft,
  paddingRight = baseDefaults.paddingRight,
  shadow,
  shadowColor,
}: ITestimonialProps) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const {
    connectors: { connect, drag },
    hovered,
  }: any = useNode((state) => ({ hovered: state.events.hovered }));

  const data = [
    {
      id: 1,
      author: "Robert Joe",
      desc: '"Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."',
      image: (
        <BuilderImage
          width={130}
          height={130}
          borderRadius={100}
          imageSrc={require("../../../../../public/images/TherapyLogos_files/author-1.jpg")}
        />
      ),
    },
    {
      id: 2,
      author: "Robert Joe",
      desc: '"Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."',
      image: (
        <BuilderImage
          width={130}
          height={130}
          borderRadius={100}
          imageSrc={require("../../../../../public/images/TherapyLogos_files/author-1.jpg")}
        />
      ),
    },
    {
      id: 3,
      author: "Robert Joe",

      desc: '"Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."',
      image: (
        <BuilderImage
          width={130}
          height={130}
          borderRadius={100}
          imageSrc={require("../../../../../public/images/TherapyLogos_files/author-1.jpg")}
        />
      ),
    },
    {
      id: 4,
      author: "Robert Joe",
      desc: '"Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."',
      image: (
        <BuilderImage
          width={130}
          height={130}
          borderRadius={100}
          imageSrc={require("../../../../../public/images/TherapyLogos_files/author-1.jpg")}
        />
      ),
    },
    {
      id: 5,
      author: "Robert Joe",
      desc: '"Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."',
      image: (
        <BuilderImage
          width={130}
          height={130}
          borderRadius={100}
          imageSrc={require("../../../../../public/images/TherapyLogos_files/author-1.jpg")}
        />
      ),
    },
    {
      id: 6,
      author: "Robert Joe",
      desc: '"Osed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."',
      image: (
        <BuilderImage
          width={130}
          height={130}
          borderRadius={100}
          imageSrc={require("../../../../../public/images/TherapyLogos_files/author-1.jpg")}
        />
      ),
    },
  ];

  return (
    <>
      <LeftFlyOut
        visibility={openCreateModal}
        onClose={() => {
          setOpenCreateModal(false);
        }}
      >
        <TopbarSection />
      </LeftFlyOut>

      <div
        ref={(ref: any) => connect(drag(ref))}
        className={` bg-white py-2 w-full h-auto ${size} hover:z-20 ${
          hovered && "hover:outline-blue-500  hover:outline "
        }  relative ${shadowColor} ${shadow} ${borderType} `}
        style={{
          backgroundColor,
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`,
          marginLeft: `${marginLeft}px`,
          marginRight: `${marginRight}px`,
          paddingTop: `${paddingTop}px`,
          paddingBottom: `${paddingBottom}px`,
          paddingLeft: `${paddingLeft}px`,
          paddingRight: `${paddingRight}px`,
          borderWidth: `${borderWidth}px`,
          borderRadius: `${borderRadius}px`,
          borderColor,
        }}
      >
        {hovered && (
          <>
            <div className="absolute z-50 top-0 right-0 bg-blue-500 text-white text-xs px-1">
              {elementName}
            </div>
            <div
              className="absolute bottom-[-2%] right-[50%] z-50 bg-orange-500 text-white text-xs px-1"
              onClick={() => {
                setOpenCreateModal(true);
              }}
            >
              +
            </div>
          </>
        )}

        <div className="w-full carousel  bg-[#49505A] bg-opacity-20">
          {data.map((item: any, index: number) => (
            <div
              id={`slide${item.id}`}
              className="carousel-item relative w-full "
              key={index}
            >
              <div className="flex flex-col gap-2 px-20 py-3 items-center">
                <div>{item.image}</div>
                <div className="flex flex-wrap items-center">
                  <Text text={`${item.desc}`} color="#49505A" />
                </div>
                <div>
                  <Text
                    text={item.author}
                    bold="font-semibold"
                    color="#49505A"
                  />
                </div>
              </div>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-3 top-1/2">
                <a href={`#slide${item.id - 1}`} className=" btn-circle">
                  ❮
                </a>
                <a href={`#slide${item.id + 1}`} className=" btn-circle">
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const TestimonialSettings = () => {
  const {
    actions: { setProp },
    props,
    id,
    data,
  } = useNode((node) => ({
    props: node.data.props,
    data: node.data,
  }));

  const { state } = useEditor((state) => {
    return { state };
  });

  return (
    <div>
      <CommonSettings />
    </div>
  );
};

Testimonial.craft = {
  related: {
    settings: TestimonialSettings,
  },
  props: {
    ...getCommonSettingsProps(),
    background: defaults.backgroundColor,
    borderRadius: defaults.borderRadius,
    borderColor: defaults.borderColor,
    paddingRight: 0,
    paddingLeft: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  displayName: elementName,
};
