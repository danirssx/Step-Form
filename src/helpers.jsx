import iconMalo from "../icons/malo.png";

export const INFO_STEPS = [
  { num: 1, info: "YOUR INFO", status: true },
  { num: 2, info: "SELECT PLAN", status: false },
  { num: 3, info: "ADD-ONS", status: false },
  { num: 4, info: "SUMMARY", status: false },
];

export const PLAN_LIST = [
  { text: "Arcade", icon: iconMalo, price: "$9/mo", bg: "bg-orange-200" },
  { text: "Advanced", icon: iconMalo, price: "$12/mo", bg: "bg-blue-300" },
  { text: "Pro", icon: iconMalo, price: "$14/mo", bg: "bg-purple" },
];

export const ADDS_LIST = [
  {
    service: "Online Service",
    info: "Access to Multiplayer games",
    price: "+$1/mo",
    status: true,
  },
  {
    service: "Larger Storage",
    info: "Extra 1 TB of cloud save",
    price: "+$2/mo",
    status: false,
  },
  {
    service: "Customizable profile",
    info: "Custom theme on your profile",
    price: "+$2/mo",
    status: false,
  },
];