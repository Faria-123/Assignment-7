import React from 'react';
import { FaHandshake } from "react-icons/fa";

const time = ({ c }) => {
    console.log(c);
    return (
        <div>
            <div className="border-2 border-dashed border-blue-400 p-4 rounded-lg w-[500px]">

                <div className="flex items-center gap-3">

                    {/* Icon */}
                    <div className="text-yellow-500 text-xl">
                        <FaHandshake />
                    </div>

                    {/* Text */}
                    <div>
                        <h2 className="text-sm font-medium text-gray-800">
                            Meetup with{" "}
                            <span className="text-blue-600 font-semibold">
                                {c.name}
                            </span>
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">
                            {c.next_due_date}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default time; <div className="border-2 border-dashed border-blue-400 p-4 rounded-lg w-[500px]">

    <div className="flex items-center gap-3">

        {/* Icon */}
        <div className="text-yellow-500 text-xl">
            <FaHandshake />
        </div>

        {/* Text */}
        <div>
            <h2 className="text-sm font-medium text-gray-800">
                Meetup with{" "}
                <span className="text-blue-600 font-semibold">
                    Tom Baker
                </span>
            </h2>
            <p className="text-xs text-gray-500 mt-1">
                March 29, 2026
            </p>
        </div>

    </div>

</div>