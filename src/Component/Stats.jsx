import React, { useContext } from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { keencontext } from './ContextProvider';
const Stats = () => {
    const keeninfo = useContext(keencontext);
    const { call, text, video } = keeninfo;

    const data = [
        { name: 'Text', value: text.length, fill: '#6B21A8' },
        { name: 'Call', value: call.length, fill: '#244D3F' },
        { name: 'Video', value: video.length, fill: '#16A34A' },
        // { name: 'Group D', value: 200, fill: '#FF8042' },
    ];
    return (
        <div className='bg-[#F8FAFC] container mx-auto'>
            <div className='container mx-auto'>
                <div className='container m-l-[200px]'>
                    <h1 className='font-bold text-[2rem]'>Friendship Analytics</h1>
                </div>

                <div className='bg-white p-3 m-3 mb-10 rounded-2xl shadow-2xl mx-[200px]'>
                    <h1 className='text-[20px] text-gray-500'>By Interaction Type</h1>
                    <div className='w-full flex justify-center'>
                        <PieChart style={{ width: '100%', maxWidth: '300px', maxHeight: '50vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />
                            <Legend />
                            <Tooltip />
                        </PieChart>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stats;