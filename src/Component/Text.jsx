import React from 'react';

import { LuMessageCircleMore } from "react-icons/lu";


const Text = ({ t }) => {
    // console.log(t);
    return (
        <div>
            <div className="border-2 border-dashed border-blue-400 p-4 rounded-lg ">

                <div className="flex items-center gap-3">


                    <div className="text-yellow-500 text-xl">
                        <LuMessageCircleMore />

                    </div>


                    <div>
                        <h2 className="text-sm font-medium text-gray-800">
                            Text with{" "}
                            <span className="text-blue-600 font-semibold">
                                {t.name}
                            </span>
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">
                            {t.next_due_date}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Text; 