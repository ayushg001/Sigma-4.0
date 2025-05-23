import Display from "./display";
import Buttons from "./btns";

import { useState } from "react";

export  default function Calculator(){
    let [ numbers , useNumbers ] = useState()
    let [ operator , useOperator ] = useState()
    let [ result , useResult ] = useState()

<Display/>
<Buttons/>

}