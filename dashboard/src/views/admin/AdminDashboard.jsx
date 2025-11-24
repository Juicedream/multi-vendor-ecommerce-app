import { MdCurrencyExchange } from "react-icons/md";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { siteUrl } from "../../utils/constants";

const AdminDashboard = () => {
  const state = {
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: { radius: 30 },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: { enabled: false },
      strock: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: { position: "top" },

      // responsiveness
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "July",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: { bar: { horizontal: true } },
            chart: { height: "550px" },
          },
        },
      ],
    },
    series: [
      {
        name: "Orders",
        data: [23, 24, 25, 26, 27, 28, 21, 29, 22, 20, 18, 19],
      },
      {
        name: "Revenue",
        data: [35, 34, 33, 36, 39, 38, 32, 31, 37, 31, 28, 29],
      },
      {
        name: "Sellers",
        data: [45, 44, 43, 46, 49, 48, 42, 41, 47, 40, 38, 39],
      },
    ],
  };
  return (
    <div className="px-2 md:px-7 py-5">
      {/* Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$3434</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="w-10 h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$3434</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>
          <div className="w-10 h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl">
            <MdCurrencyExchange className="text-[#fae8e8] shadow-lg" />
          </div>
        </div>
      </div>
      {/* Chart and Chats */}
      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          {/* Chart on the left */}
          <div className="w-full p-4 rounded-md bg-[#6a5fdf]">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        {/* Chatbox on the right */}
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6]">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
                Recent Seller Message
              </h2>
              <Link className="font-semibold text-sm text-[#d0d2d6]">
                View All
              </Link>
            </div>
            {/* Chat Messages */}
            <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
              <ol className="relative border-slate-600 ml-4">
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-1.5 bg-[#4c7fe2] rounded-full z-10">
                    <img
                      className="w-full rounded-full h-full shadow-lg"
                      src={`${siteUrl}/images/admin.jpg`}
                      alt="chat sender image"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      How are you?
                    </div>
                  </div>
                </li>
              </ol>
              <ol className="relative border-slate-600 ml-4">
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-1.5 bg-[#4c7fe2] rounded-full z-10">
                    <img
                      className="w-full rounded-full h-full shadow-lg"
                      src={`${siteUrl}/images/admin.jpg`}
                      alt="chat sender image"
                    />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        8 days ago
                      </time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      When am i getting paid? This is not funny anymore
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* Recent orders table */}
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
            Recent Orders
          </h2>
          <Link className="font-semibold text-sm text-[#d0d2d6]">View all</Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                [1,2,3,4,5].map((value, i) => (
                  <tr key={i}>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                  #34432
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                  $256.90
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                  Pending
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                  Pending
                </td>
                <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                  <Link>View</Link>
                </td>
              </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
