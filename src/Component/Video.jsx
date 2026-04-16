import React from 'react';
// import { FaHandshake } from "react-icons/fa";
import { MdOutlineVideoCameraFront } from "react-icons/md";

const Video = ({ v }) => {
    // console.log(c);
    return (
        <div>
            <div className="border-2 border-dashed border-blue-400 p-4 rounded-lg">

                <div className="flex items-center gap-3">

                    {/* Icon */}
                    <div className="text-yellow-500 text-xl">
                        <MdOutlineVideoCameraFront />

                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="text-sm font-medium text-gray-800">
                            Video with{" "}
                            <span className="text-blue-600 font-semibold">
                                {v.name}
                            </span>
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">
                            {v.next_due_date}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Video; 