// export default function Invoices() {
//     return (
//       <main style={{ padding: "1rem 0" }}>
//         <h2>Invoices</h2>
//       </main>
//     );
//   }

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { getInvoices } from "../Datas/data";


export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <Link style={{ display: "block", margin: "1rem 0" }} to={`/invoices/${invoice.number}`} key={invoice.number} >
           {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}