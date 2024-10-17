import duvetCovers from "../assets/discover/duvet-covers.jpg";
import pillows from "../assets/discover/pillows.jpg";
import heat from "../assets/discover/heat.jpg";
import candles from "../assets/discover/candles.jpg";
import services from "../assets/discover/services.jpg";
import last from "../assets/discover/last.png";
import { FaArrowRight } from "react-icons/fa6";

export const discover = [
  {
    name: "dekbedovertrekken en hoeslakens",
    img: duvetCovers,
    type: { value: "30%", cat: "korting" },
    valid: "20 oktober",
  },
  {
    name: "warmtecussens en kruiken",
    img: heat,
    type: { value: "30%", cat: "korting" },
    valid: "20 oktober",
  },
  {
    name: "dekbedden en kussens",
    img: pillows,
    type: { value: "30%", cat: "korting" },
    valid: "20 oktober",
  },
  {
    name: "(led) kaarsen en sfeerlichten",
    img: candles,
    type: { value: "40%", cat: "korting" },
    valid: "20 oktober",
  },
  {
    name: "servies",
    img: services,
    type: { value: "2+1", cat: "gratis" },
    valid: "20 oktober",
  },

  {
    name: "warmtecussens en kruiken",
    img: heat,
    type: { value: "30%", cat: "korting" },
    valid: "20 oktober",
  },
  {
    name: "dekbedden en kussens",
    img: pillows,
    type: { value: "30%", cat: "korting" },
    valid: "20 oktober",
  },
  {
    title: "meer aanbiedlingen",
    icon: <FaArrowRight />,
    img: last,
    islast: true,
  },
];
