import React, { useContext } from 'react';
import { keencontext } from './ContextProvider';
import time from './time.jsx';
const Timeline = () => {
    const keeninfo = useContext(keencontext);
    const { call, video, text } = keeninfo;
    console.log(call);
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#1A2B47] mb-4">Timeline</h1>

                {/* DaisyUI Select for filtering */}
                <select className="select select-bordered w-full max-w-xs bg-white shadow-sm border-gray-200">
                    <option disabled selected>Filter by type</option>
                    <option>Calls</option>
                    <option>Meetups</option>
                    <option>Messages</option>
                </select>
            </div>

            {
                call.map(c => <time c={c} />)
            }
        </div>
    );
};

export default Timeline;