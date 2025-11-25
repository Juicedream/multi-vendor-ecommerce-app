import { Virtuoso as List } from "react-virtuoso";



const PaymentRequest = () => {
  const Row = ({ index }) => (
    <div className="flex text-sm text-white font-medium">
      <div className="w-[25%] p-2">{index + 1}</div>
      <div className="w-[25%] p-2">$4253.90</div>
      <div className="w-[25%] p-2">
        <span className="py-0.5 px-[5px] bg-slate-300 text-blue-500 rounded-md text-sm">
          pending
        </span>
      </div>
      <div className="w-[25%] p-2">12 Nov 2025</div>
      <div className="w-[25%] p-2">
        <button className="bg-indigo-500 hover:shadow-indigo-50/50 shadow-lg px-3 py-0.5 text-white rounded-sm text-sm cursor-pointer">
          Confirm
        </button>
      </div>
    </div>
  );

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <h2 className="text-xl font-medium pb-5 text-[#d0d2d6]">
          Withdrawal Request
        </h2>

        <div className="w-full overflow-x-auto">
          <div className="flex uppercase text-xs font-bold bg-[#a7a3de] min-w-[340px] rounded-md">
            <div className="w-[25%] p-2">No</div>
            <div className="w-[25%] p-2">Amount</div>
            <div className="w-[25%] p-2">Status</div>
            <div className="w-[25%] p-2">Date</div>
            <div className="w-[25%] p-2">Action</div>
          </div>

         {
            <List
                style={{ minWidth: "340px", height: "400px", overflow: "auto", scrollbarWidth: "none" }}
                totalCount={10}
                className="List"
                itemContent={(index) => <Row index={index}/>}                
            />
         }
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;
