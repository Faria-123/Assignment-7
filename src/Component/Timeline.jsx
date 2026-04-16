import React, { useContext } from 'react';
import { keencontext } from './ContextProvider';
// import time from './time.jsx';
import Time from './time.jsx';
import Text from './Text.jsx';
import Video from './video.jsx';
const Timeline = () => {
    const keeninfo = useContext(keencontext);
    const { call, video, text } = keeninfo;
    console.log(text);
    return (
        <div className='container mx-auto mb-10'>
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

            <div className="flex flex-col gap-2">

                {call?.length > 0 &&
                    call.map((c, index) => (
                        <Time key={c.id || index} c={c} />
                    ))
                }

                {text?.length > 0 &&
                    text.map((t, index) => (
                        <Text key={t.id || index} t={t} />
                    ))
                }
                {video?.length > 0 &&
                    video.map((v, index) => (
                        <Video key={v.id || index} v={v} />
                    ))
                }
            </div>
        </div>
    );
};

export default Timeline;