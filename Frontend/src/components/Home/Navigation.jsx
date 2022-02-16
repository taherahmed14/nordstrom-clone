import { NavMen } from "./NavMen";
import { NavWomen } from "./NavWomen";
import { NavSales } from "./NavSales";
import { NavKids } from "./NavKids";
import { NavYAdults } from "./NavYAdult";
import { NavActiveWear } from "./NavActiveWear";
import { NavHome } from "./NavHome";
import { NavBeauty } from "./NavBeauty";
import { NavDesigner } from "./NavDesigner";

export const Navigation = () => {
  return (
    <div style={{display: 'flex'}}>
        <NavSales />
        <NavWomen />
        <NavMen />
        <NavKids />
        <NavYAdults />
        <NavActiveWear />
        <NavHome />
        <NavBeauty />
        <NavDesigner />
    </div>

  )
}
