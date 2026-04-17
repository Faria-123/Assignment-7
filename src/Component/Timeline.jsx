import React, { useContext } from 'react';
import { useState } from 'react';
import { keencontext } from './ContextProvider';
// import time from './time.jsx';
import Time from './time.jsx';
import Text from './Text.jsx';
import Video from './video.jsx';
const Timeline = () => {
    const keeninfo = useContext(keencontext);
    const { call, video, text } = keeninfo;
    console.log(text);
    const [filter, setFilter] = useState("all");

    return (
        <div className='container mx-auto mb-10'>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#1A2B47] mb-4">Timeline</h1>

                {/* DaisyUI Select for filtering */}
                <select
                    className="select select-bordered w-full max-w-xs bg-white shadow-sm border-gray-200"
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="all">Filter Timeline</option>
                    <option value="call">Calls</option>
                    <option value="video">Meetups</option>
                    <option value="text">Messages</option>
                </select>
            </div>

            <div className="flex flex-col gap-2">

                {(filter === "all" || filter === "call") &&
                    call?.map((c, index) => (
                        <Time key={c.id || index} c={c} />
                    ))
                }

                {(filter === "all" || filter === "text") &&
                    text?.map((t, index) => (
                        <Text key={t.id || index} t={t} />
                    ))
                }

                {(filter === "all" || filter === "video") &&
                    video?.map((v, index) => (
                        <Video key={v.id || index} v={v} />
                    ))
                }

            </div>
        </div>
    );
};

export default Timeline;