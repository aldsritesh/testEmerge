import FactCard from "@/components/invoice/FactCard";
import { BsArrowUpRight, BsFillPatchCheckFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";

import ChartCard from "@/components/invoice/ChartCard";
import { MoreHorizOutlined } from "@mui/icons-material";
import { createContext, useContext, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import BillingTable from "@/components/invoice/BillingTable";
import FlyOut from "@/components/Flyout";
import AddInvoiceForm from "@/components/invoice/AddInvoiceForm";
import LongCard from "@/components/invoice/LongCard";
import ModalDerived from "@/components/Modal";
import moment from "moment";
import PreviewInvoice from "@/components/invoice/PreviewInvoice";
import PreviewFinalData from "@/components/invoice/PreviewFinalData";
import InvoicePayment from "@/components/invoice/InvoicePayment";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { GlobalContext } from "@/layouts/GlobalLayout";
import Link from "next/link";
import PatientClaimInfo from "@/components/invoice/NewClaim/PatientClaimInfo";
import Insurance from "@/components/invoice/NewClaim/Insurance";
import PatientCondition from "@/components/invoice/NewClaim/PatientCondition";
import ReferPhysicianData from "@/components/invoice/NewClaim/ReferingPhysician";
import PatientOtherDetails from "@/components/invoice/NewClaim/PatientOtherDetails";
import PaidClaimTable from "@/components/invoice/PaidClaimTable";
import PendingClaimTable from "@/components/invoice/PendingClaimTable";
import AllClaimTable from "@/components/invoice/AllClaimTable";
import AllClaimsForm from "@/components/invoice/NewClaim/AllClaimForm";
import InWorkingClaims from "./NewClaim/InReviewClaim";
import InReviewClaims from "./NewClaim/InReviewClaim";
import SubmittedClaimTable from "./NewClaim/SubmittedClaims";
import DeniedClaimTable from "./NewClaim/DeniedClaims";
import WorkingClaimTable from "./NewClaim/WorkingClaims";

interface RowData {
  [key: string]: any;
}

const FieldType = [
  { title: "All Claims" },
  { title: "Paid Claims" },
  { title: "Pending Claims" },
  { title: "In Review" },
  { title: "Submitted Claims" },
  { title: "Denied Claims" },
  { title: "Working Claims" },
];

export const InvoiceContext = createContext({
  isInvoicePreviewModalVisible: false,
  setIsInvoicePreviewModalVisible: (string: string) => {},
  isInvoiceFinalDataShow: false,
  setIsInvoiceFinalDataShow: (string: string) => {},
  isPaymentModalOpen: false,
  setIsPaymentModalOpen: (string: string) => {},
  invoiceData: null,
  setInvoiceData: (array: Array<any>) => {},
  data: null,
  setData: (array: Array<any>) => {},

  claimForm: null,
  setClaimForm: (array: Array<any>) => {},
  addFlyoutVisibility: false,
  setAddFlyoutVisibility: (string: string) => {},
});

export default function ClaimTab() {
  const [select, setSelect] = useState<any>(0);
  const [data, setData] = useState<RowData[]>([
    {
      id: "1",
      invoice_no: "1",
      customer_name: "User One",
      status: "paid",
      date: "5/12/23",
      dueDate: "5/12/23",
      amount: "$5000",
      action: "",
      paymentMode: "",
    },
    {
      id: "2",
      invoice_no: "2",
      customer_name: "User Two",
      status: "overdue by 1 day",
      date: "5/12/23",
      dueDate: "5/12/23",
      amount: "$5000",
      action: "",
      paymentMode: "",
    },
    {
      id: "3",
      invoice_no: "3",
      customer_name: "User Three",
      status: "due in 14 days",
      date: "5/12/23",
      dueDate: "5/12/23",
      amount: "$5000",
      action: "",
      paymentMode: "",
    },
    {
      id: "4",
      invoice_no: "4",
      customer_name: "User Four",
      status: "paid",
      date: "5/12/23",
      dueDate: "5/12/23",
      amount: "$5000",
      action: "",
      paymentMode: "",
    },
    {
      id: "5",
      invoice_no: "5",
      customer_name: "User Five",
      status: "overdue by 1 day",
      date: "5/12/23",
      dueDate: "5/12/23",
      amount: "$5000",
      action: "",
      paymentMode: "",
    },
  ]);
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
      color: "#1258fc",
    },
    // {
    //   name: "series-2",
    //   data: [10, 20, 55, 20, 63, 38, 70, 11],
    // },
  ];

  const [claimForm, setClaimForm] = useState<any>({});
  const [invoiceData, setInvoiceData] = useState<any>({});
  const [addFlyoutVisibility, setAddFlyoutVisibility] = useState(false);
  const [isInvoicePreviewModalVisible, setIsInvoicePreviewModalVisible] =
    useState<any>(false);
  const [isInvoiceFinalDataShow, setIsInvoiceFinalDataShow] =
    useState<any>(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<any>(false);

  function handleStoreInvoice(newInvoice: any, type: any) {
    if (type == "draft") {
      setData([
        ...data,
        {
          id: newInvoice.invoiceNo,
          invoice_no: newInvoice.invoiceNo,
          customer_name: newInvoice.email,
          status: type,
          date: moment(newInvoice.issuedOn).format("DDD/mm/yyyy"),
          dueDate: moment(newInvoice.issuedOn).format("DDD/mm/yyyy"),
          amount: newInvoice.total_amount,
          action: "",
        },
      ]);
      setIsInvoicePreviewModalVisible(false);
      setAddFlyoutVisibility(false);
    } else if (type == "paid") {
      setData([
        ...data,
        {
          id: newInvoice.invoice_no,
          invoice_no: newInvoice.invoice_no,
          customer_name: newInvoice.customer_name,
          status: type,
          date: moment(newInvoice.issuedOn).format("DDD/mm/yyyy"),
          dueDate: moment(newInvoice.issuedOn).format("DDD/mm/yyyy"),
          amount: newInvoice.amount,
          action: "",
        },
      ]);
    } else {
      setInvoiceData({
        id: data.length + 1,
        invoice_no: newInvoice.invoiceNo,
        customer_name: newInvoice.email,
        status: type,
        date: moment(newInvoice.issuedOn).format("DDD/mm/yyyy"),
        dueDate: moment(newInvoice.issuedOn).format("DDD/mm/yyyy"),
        amount: newInvoice.total_amount,
        action: "",
      });
      setIsInvoicePreviewModalVisible(true);
      setAddFlyoutVisibility(false);
    }
  }

  // to store claim data
  function handleStoreClaim(item: any) {
    setData([
      ...data,
      {
        id: data.length + 1,
        invoice_no: data.length + 1,
        customer_name: item.patientName,
        status: "new",
        date: new Date(),
        dueDate: new Date(),
        amount: item.primaryInsurance,
        action: "",
      },
    ]);
    setAddFlyoutVisibility(false);
  }

  const value: any = {
    invoiceData,
    setInvoiceData,
    isInvoicePreviewModalVisible,
    setIsInvoicePreviewModalVisible,
    isInvoiceFinalDataShow,
    setIsInvoiceFinalDataShow,
    isPaymentModalOpen,
    setIsPaymentModalOpen,
    data,
    setData,
    addFlyoutVisibility,
    setAddFlyoutVisibility,
    claimForm,
    setClaimForm,
  };

  const ctx = useContext(GlobalContext);
  ctx.setTitle("Claims");

  return (
    <InvoiceContext.Provider value={value}>
      <main className="bg-white md:h-auto pb-24 overflow-hidden  relative">
        <FlyOut
          visibility={addFlyoutVisibility}
          onClose={() => setAddFlyoutVisibility(false)}
        >
          {/* <AddInvoiceForm
            handleChange={(newInvoice: string, type: string) =>
              handleStoreInvoice(newInvoice, type)
            }
          /> */}
          <div className="bg-white  pb-10 h-[100vh] scrollbar-hide  overflow-y-scroll ">
            <div className="flex justify-start items-start gap-5 flex-col">
              <AllClaimsForm
                onClose={() => setAddFlyoutVisibility(false)}
                handleStoreChange={(item: any) => handleStoreClaim(item)}
              />
            </div>
          </div>
        </FlyOut>
        <header className="bg-white p-4 flex justify-between flex-wrap overflow-x-hidden items-center ">
          <h1 className="text-3xl font-semibold">Claims</h1>
          <select className="border border-gray-400 w-40 outline-none px-2 rounded-sm py-1 shadow">
            <option value="30">Last 30 Days</option>
            <option value="15">Last 15 Days</option>
            <option value="7">Last 7 Days</option>
          </select>
        </header>

        <div className="px-4 mt-3">
          <div className="flex flex-wrap overflow-x-hidden">
            <div className="w-full md:w-8/12">
              <div className="mb-6 lg:mb-0 pb-2 gap-3  shadow-md flex  pl-5 overflow-x-hidden border-[1px] border-gray-200  rounded-lg">
                <div className="w-full md:w-4/12   ">
                  <FactCard
                    title="Total Claims"
                    currency="$"
                    titleIcon={<FaBookmark className="text-sm text-newBlue" />}
                    subSpanData={"/month"}
                    subIcon={<BsArrowUpRight className="text-[8px]" />}
                    index={1}
                    moneyValue={152.9}
                    moneyValueData={"+1.50"}
                    numberValue={52}
                    numberValueData={"+1.50"}
                  />
                </div>
                <div className="w-full md:w-4/12  ">
                  <FactCard
                    title="Paid Claims"
                    currency="$"
                    titleIcon={
                      <BsFillPatchCheckFill className="text-sm text-[#20cc6d]" />
                    }
                    subSpanData={"/month"}
                    subIcon={<FiTrendingUp className="text-[8px]" />}
                    index={2}
                    moneyValue={109.3}
                    moneyValueData={"-0.475"}
                    numberValue={109}
                    numberValueData={"-0.475"}
                  />
                </div>
                <div className="w-full md:w-4/12  ">
                  <FactCard
                    title="Pending Claims"
                    currency="$"
                    titleIcon={
                      <IoTimeSharp className="text-sm text-[#ee8f0e]" />
                    }
                    subSpanData={"/month"}
                    subIcon={<FiTrendingDown className="text-[8px]" />}
                    index={3}
                    moneyValue={152.9}
                    moneyValueData={"+1.75"}
                    numberValue={152.9}
                    numberValueData={"+1.75"}
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 ">
              <div className="pb-2 lg:pl-3">
                <LongCard
                  title="Total Receivables"
                  number={109.3}
                  currency="$"
                  titleIcon={<IoTimeSharp className="text-sm text-[#ee8f0e]" />}
                  subData={"+1.50"}
                  subSpanData={"Total unpaid Claims $43,078"}
                  subIcon={<FiTrendingUp className="text-[10px]" />}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 px-4 mb-2.5">
          <div className="flex flex-wrap overflow-hidden border shadow-md rounded-lg relative h-auto">
            <div className="w-full md:w-10/12 flex flex-wrap">
              <ChartCard
                data={{
                  options: options,
                  series: series,
                  type: "area",
                  height: 300,
                  width: "100%",
                }}
                name="Cash Flow"
              />
            </div>
            <div className="w-full md:w-2/12 px-3 h-full">
              <div className="flex justify-end p-3">
                <button className="p-1 shadow border rounded">
                  <MoreHorizOutlined />
                </button>
              </div>
              <div className="w-full py-4 px-2 flex flex-col justify-between h-auto mt-3">
                <div>
                  <p className="text-xs font-semibold  pb-2 text-newBlue ">
                    Cash as on 04/01/2022
                  </p>
                  <p className="text-2xl font-semibold">$487.1k</p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold  pb-1  text-green-500">
                    Incoming
                  </p>
                  <p className="text-2xl font-semibold">$75.0k</p>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-semibold  pb-1  text-red-500">
                    Outgoing
                  </p>
                  <p className="text-2xl font-semibold">$562.1k</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="w-full border bg-white p-4 shadow-md rounded-lg">
            <div className="flex flex-wrap justify-between items-center pb-3">
              <div>
                <h3 className="font-semibold text-2xl">
                  {select == 0
                    ? "All Claims"
                    : select == 1
                    ? "Paid Claims"
                    : select == 2
                    ? "Pending Claims"
                    : select == 3
                    ? "In Review Claims"
                    : select == 4
                    ? "Submitted Claims"
                    : select == 5
                    ? "Denied Claims"
                    : select == 6
                    ? "Working Claims"
                    : ""}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {/* <Link href="/invoice/new-claim">
                  <div className=" flex justify-center items-center px-4 py-2 rounded-md text-white capitalize bg-newBlue">
                    <PlusIcon className="h-4 w-4 text-white" /> New Claims
                  </div>
                </Link> */}
                <button
                  className=" flex justify-center items-center px-4 py-2 rounded-md text-white capitalize bg-newBlue"
                  onClick={() => {
                    setAddFlyoutVisibility(true);
                    setInvoiceData(null);
                  }}
                >
                  <PlusIcon className="h-4 w-4 text-white" /> New Claims
                </button>
                <button className="px-1 shadow border rounded">
                  <MoreHorizOutlined />
                </button>
              </div>
            </div>
            <div className="text-[#34373a] font-semibold bg-gray-100 text-xs border-t border-x rounded-t-md w-[41.5 rem]  flex ">
              {FieldType.map((item: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelect(index)}
                  className={`px-2 py-2.5  text-center ${
                    select == index ? "bg-white rounded-t-md" : ""
                  } `}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="border-t border-gray-100 rounded-r-md ">
              {select === 0 ? (
                <AllClaimTable data={data} />
              ) : select === 1 ? (
                <PaidClaimTable data={data} />
              ) : select === 2 ? (
                <PendingClaimTable data={data} />
              ) : select === 3 ? (
                <InReviewClaims data={data} />
              ) : select === 4 ? (
                <SubmittedClaimTable data={data} />
              ) : select === 5 ? (
                <DeniedClaimTable data={data} />
              ) : select === 6 ? (
                <WorkingClaimTable data={data} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </main>

      <div>
        {isInvoicePreviewModalVisible && (
          <ModalDerived
            visibility={isInvoicePreviewModalVisible}
            onClose={() => setIsInvoicePreviewModalVisible(false)}
          >
            <PreviewInvoice
              handleChange={(newInvoice: string, type: string) =>
                handleStoreInvoice(newInvoice, type)
              }
            />
          </ModalDerived>
        )}
      </div>
      <div>
        {isInvoiceFinalDataShow && (
          <ModalDerived
            visibility={isInvoiceFinalDataShow}
            onClose={() => setIsInvoiceFinalDataShow(false)}
          >
            <PreviewFinalData />
          </ModalDerived>
        )}
      </div>
      <div>
        {isPaymentModalOpen && (
          <ModalDerived
            visibility={isPaymentModalOpen}
            onClose={() => setIsPaymentModalOpen(false)}
          >
            <InvoicePayment
              handleChange={(newInvoice: string) =>
                handleStoreInvoice(newInvoice, "paid")
              }
            />
          </ModalDerived>
        )}
      </div>
    </InvoiceContext.Provider>
  );
}
