
// import { FAQsText } from './FAQs';
// import { useNode, Element, useEditor } from "@craftjs/core";
// import { Text } from "./Text/Text";
// import { createElement, useState } from "react";

// import { defaults } from 'chart.js';
// import { baseDefaults } from './CommonSettings';

// export default function MultipleFaqs() {
//     const {
//         connectors: { connect, drag },
//         hovered,
//       } = useNode((state) => ({ hovered: state.events.hovered }));
//     const [factor, setfactor] = useState<number>(1);
//     const [content, setContent] = useState<JSX.Element[]>([]);
//     const handleMultiply = (({
//         size,
//         backgroundColor = defaults.backgroundColor,
//         borderRadius = defaults.borderRadius,
//         borderColor = defaults.borderColor,
//         borderType = "border-solid",
//         borderWidth = baseDefaults.borderWidth,
//         marginTop = baseDefaults.marginTop,
//         marginBottom = baseDefaults.marginBottom,
//         marginLeft = baseDefaults.marginLeft,
//         marginRight = baseDefaults.marginRight,
//         paddingTop = baseDefaults.paddingTop,
//         paddingBottom = baseDefaults.paddingBottom,
//         paddingLeft = baseDefaults.paddingLeft,
//         paddingRight = baseDefaults.paddingRight,
//         shadow,
//         shadowColor,
//       }: IFAQsProps)) => {

//       const newContent = content.concat(
//         <div key={content.length}>
//           <Element id="FAQsText" is={FAQsText} canvas>
//             <div
//               className={`   w-full h-auto ${size} mr-2 ${
//                 hovered && "hover:outline-pink-500 hover:outline "
//               }  relative ${shadowColor} ${shadow} ${borderType}`}
//               style={{
//                 backgroundColor: "#f8f8f8",
//                 marginTop: `${marginTop}px`,
//                 marginBottom: `${marginBottom}px`,
//                 marginLeft: `${marginLeft}px`,
//                 marginRight: `${marginRight}px`,
//                 paddingTop: `${paddingTop}px`,
//                 paddingBottom: `${paddingBottom}px`,
//                 paddingLeft: `${paddingLeft}px`,
//                 paddingRight: `${paddingRight}px`,
//                 borderWidth: `${borderWidth}px`,
//                 borderRadius: `2px`,
//                 borderColor,
//               }}
//               // onClick={handleClick}
//               // onClick={() => setShowResults(true)}
//             >
//               <Text
//                 paddingLeft={10}
//                 paddingBottom={10}
//                 paddingTop={10}
//                 alignment="left"
//                 text="Question"
//                 fontSize={20}
//                 bold="font-semibold"
//                 color="#000000"
//                 backgroundColor="#f8f8f8"
//               />
//             </div>
//             <div
//               className={` w-full h-auto ${size} mr-2 ${
//                 hovered && "hover:outline-pink-500 hover:outline "
//               }  relative ${shadowColor} ${shadow} ${borderType} `}
//               style={{
//                 backgroundColor: "#f8f8f8",
//                 marginTop: `${marginBottom}px`,
//                 marginBottom: `${marginBottom}px`,
//                 marginLeft: `${marginLeft}px`,
//                 marginRight: `${marginRight}px`,
//                 paddingTop: `${"0px"}`,
//                 paddingBottom: `${"5px"}`,
//                 paddingLeft: `${paddingLeft}px`,
//                 paddingRight: `${paddingRight}px`,
//                 borderWidth: `${borderWidth}px`,
//                 borderRadius: `2px`,
//                 borderColor,
//               }}
//             >
//               <Text
//                 paddingLeft={15}
//                 paddingBottom={10}
//                 paddingTop={10}
//                 marginTop={1}
//                 alignment="left"
//                 text="Answer"
//                 fontSize={16}
//                 bold="font-medium"
//                 color="#474343"
//                 backgroundColor="#f8f8f8"
//               />
//             </div>
//           </Element>
//         </div>
//       );
//       setContent(newContent);
//     };
//     return (
//     <div>
        
  
//         </div>
//   )
// }
import React from 'react'

export default function MultipleFaqs() {
  return (
    <div>MultipleFaqs</div>
  )
}
