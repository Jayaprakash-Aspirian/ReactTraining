import { useSelector } from "react-redux";


const allusersare = useSelector((state: any) => state.allusersdata.list);

// const useris = allusersare.find(
//     (data: any) => data.mobile === mobile && data.password === password
//   );
//   const mobileis = allusersare.find((data: any) => data.mobile === mobile);
  