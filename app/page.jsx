// import TicketCart from "./(components)/TicketCart";

// const getTickets = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/Tickets", {
//       cache: "no-store",
//     });

//     return res.json();
//   } catch (error) {
//     console.log("Failed to get tickets", error);
//   }
// };

// const Dashboard = async () => {
//   const { tickets } = await getTickets();

//   const uniqueCategories = [
//     ...new Set(tickets?.map(({ category }) => category)),
//   ];

//   return (
//     <div className="p-5">
//       <div>
//         {tickets &&
//           uniqueCategories?.map((uniqueCategory, categoryIndex) => (
//             <div key={categoryIndex} className="mb-4">
//               <h4>{uniqueCategory}</h4>
//               <div className="lg:grid grid-cols-2 xl:grid-cols-4">
//                 {tickets
//                   .filter((ticket) => ticket.category === uniqueCategories)
//                   .map((filteredTicket, _index) => (
//                     <TicketCart
//                       id={_index}
//                       key={_index}
//                       ticket={filteredTicket}
//                     />
//                   ))}
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import TicketCart from "./components/TicketCart"; // Removed unnecessary parentheses
import TicketCart from "./(components)/TicketCart";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h4>{uniqueCategory}</h4>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory) // Fixed filtering logic
                  .map((filteredTicket, _index) => (
                    <TicketCart
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
