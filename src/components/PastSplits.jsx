import { useState, useEffect } from "react";
import axios from "axios";

const PastSplits = () => {
  const [pastSplits, setPastSplits] = useState([]);

  useEffect(() => {
    // Fetch past splits when the component is mounted
    const fetchPastSplits = async () => {
      try {
        const response = await axios.get(
          "https://money-memo-api.vercel.app/api/past-splits"
        );
        setPastSplits(response.data);
      } catch (error) {
        console.error("Error fetching past splits:", error);
      }
    };

    fetchPastSplits();
  }, []);

  // Filter splits by type
  const groupSplits = pastSplits.filter((split) => split.splitType === "group");
  const pairSplits = pastSplits.filter((split) => split.splitType === "pair");

  return (
    // <div className="p-4">
    //   <div className="">
    //     <h2 className="text-black text-2xl mb-4 text-center font-semibold">
    //       Past Splits
    //     </h2>
    //   </div>

    //   {/* Group Splits Section */}
    //   <div>
    //     <h3 className="text-black text-xl mb-4">Group Splits</h3>
    //     {groupSplits.length > 0 ? (
    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    //         {groupSplits.map((split, index) => (
    //           <div key={index} className="bg-black p-4 rounded-lg shadow-md">
    //             <h3 className="text-xl font-bold mb-2">
    //               Amount: {split.totalAmount}
    //             </h3>
    //             <p>
    //               <strong>Date:</strong>{" "}
    //               {new Date(split.createdAt).toLocaleString()}
    //             </p>
    //             <p>
    //               <strong>Members:</strong> {split.members.join(", ")}
    //             </p>
    //             <ul>
    //               {split.splitResult.map((result, idx) => (
    //                 <li key={idx}>
    //                   {result.member}: {result.share}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         ))}
    //       </div>
    //     ) : (
    //       <p className="text-black">No group splits found</p>
    //     )}
    //   </div>

    //   {/* Pair Splits Section */}
    //   <div>
    //     <h3 className="text-black text-xl mb-4">Pair Splits</h3>
    //     {pairSplits.length > 0 ? (
    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //         {pairSplits.map((split, index) => (
    //           <div key={index} className="bg-white p-4 rounded-lg shadow-md">
    //             <h3 className="text-xl font-bold mb-2">
    //               Amount: {split.totalAmount}
    //             </h3>
    //             <p>
    //               <strong>Date:</strong>{" "}
    //               {new Date(split.createdAt).toLocaleString()}
    //             </p>
    //             <p>
    //               <strong>Members:</strong> {split.members.join(", ")}
    //             </p>
    //             <ul>
    //               {split.splitResult.map((result, idx) => (
    //                 <li key={idx}>
    //                   {result.member}: {result.share}
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         ))}
    //       </div>
    //     ) : (
    //       <p className="text-black">No pair splits found</p>
    //     )}
    //   </div>
    // </div>
    <div className="p-6 bg-gradient-to-br from-blue-100 to-blue-50 min-h-screen">
      <div className="mb-8 text-center">
        <h2 className="text-gray-800 text-3xl font-semibold border-b-4 border-blue-500 inline-block pb-2">
          Past Splits
        </h2>
      </div>

      {/* Group Splits Section */}
      <div className="mb-12">
        <h3 className="text-blue-800 text-2xl font-semibold mb-6 border-l-4 pl-3 border-blue-500">
          Group Splits
        </h3>
        {groupSplits.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupSplits.map((split, index) => (
              <div
                key={index}
                className="bg-blue-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-white"
              >
                <h4 className="text-2xl font-bold mb-3">
                  Amount:{" "}
                  <span className="text-yellow-300">₹{split.totalAmount}</span>
                </h4>
                <p className="mb-2">
                  <strong>Date:</strong>{" "}
                  {new Date(split.createdAt).toLocaleString()}
                </p>
                <p className="mb-4">
                  <strong>Members:</strong> {split.members.join(", ")}
                </p>
                <ul className="space-y-1">
                  {split.splitResult.map((result, idx) => (
                    <li key={idx} className="flex justify-between">
                      <span>{result.member}:</span>
                      <span className="font-semibold">₹{result.share}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700">No group splits found</p>
        )}
      </div>

      {/* Pair Splits Section */}
      <div>
        <h3 className="text-blue-800 text-2xl font-semibold mb-6 border-l-4 pl-3 border-blue-500">
          Pair Splits
        </h3>
        {pairSplits.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pairSplits.map((split, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-200"
              >
                <h4 className="text-2xl font-bold text-blue-700 mb-3">
                  Amount:{" "}
                  <span className="text-blue-500">₹{split.totalAmount}</span>
                </h4>
                <p className="text-gray-600 mb-2">
                  <strong>Date:</strong>{" "}
                  {new Date(split.createdAt).toLocaleString()}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Members:</strong> {split.members.join(", ")}
                </p>
                <ul className="space-y-1">
                  {split.splitResult.map((result, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between text-gray-800"
                    >
                      <span>{result.member}:</span>
                      <span className="font-semibold">₹{result.share}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700">No pair splits found</p>
        )}
      </div>
    </div>
  );
};

export default PastSplits;
