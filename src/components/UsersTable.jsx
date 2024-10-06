import React from "react";

{
  /* Data for Users Table */
}
const UserData = [
  {
    id: "1",
    customer_name: "Shirley A. Lape",
    customer_email: "shirley.lape@gmail.com",
    current_order_status: "PLACED",
  },
  {
    id: "2",
    customer_name: "James K. Watson",
    customer_email: "james.watson@yahoo.com",
    current_order_status: "SHIPPED",
  },
  {
    id: "3",
    customer_name: "Emily R. Smith",
    customer_email: "emily.smith@hotmail.com",
    current_order_status: "DELIVERED",
  },
  {
    id: "4",
    customer_name: "Michael J. Brown",
    customer_email: "michael.brown@gmail.com",
    current_order_status: "CANCELLED",
  },
  {
    id: "5",
    customer_name: "Linda S. Johnson",
    customer_email: "linda.johnson@aol.com",
    current_order_status: "RETURNED",
  },
  {
    id: "6",
    customer_name: "David A. Lee",
    customer_email: "david.lee@gmail.com",
    current_order_status: "PLACED",
  },
  {
    id: "7",
    customer_name: "Laura P. Harris",
    customer_email: "laura.harris@hotmail.com",
    current_order_status: "SHIPPED",
  },
  {
    id: "8",
    customer_name: "Robert M. Wilson",
    customer_email: "robert.wilson@yahoo.com",
    current_order_status: "DELIVERED",
  },
  {
    id: "9",
    customer_name: "Patricia C. Martinez",
    customer_email: "patricia.martinez@gmail.com",
    current_order_status: "PLACED",
  },
  {
    id: "10",
    customer_name: "Thomas E. Taylor",
    customer_email: "thomas.taylor@aol.com",
    current_order_status: "CANCELLED",
  },
];

export default function UsersTable() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-lg border border-orange-500 flex-1">
      <strong className="text-black text-lg font-semibold">Users</strong>
      <div className="overflow-x-auto border border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700 text-center">
          <thead className="bg-slate-300">
            <tr className="border-b border-gray-400">
              <th className="py-3">ID</th>
              <th className="py-3">Customer Name</th>
              <th className="py-3 hidden md:table-cell">Customer Email</th>
              <th className="py-3 hidden md:table-cell">Order Status</th>
            </tr>
          </thead>
          <tbody>
            {UserData.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-4">{user.id}</td>
                <td className="py-4">{user.customer_name}</td>
                <td className="py-4 hidden md:table-cell">
                  {user.customer_email}
                </td>
                <td className="py-4 hidden md:table-cell">
                  {user.current_order_status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
