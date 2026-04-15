import React, { useContext } from 'react';
import { keencontext } from './ContextProvider.jsx'
import Card from './Card.jsx';
import { RxDividerVertical } from 'react-icons/rx';
const HomePage = () => {
    const keeninfo = useContext(keencontext);
    const { keen } = keeninfo;
    console.log(keen);
    return (


        <div className='container mx-auto'>
            <div class="py-16 px-4">
                <div class="container mx-auto">

                    <div class="text-center mb-16">
                        <h1 class="text-4xl md:text-5xl font-extrabold text-[#1A2B47] mb-5 tracking-tight">
                            Friends to keep close in your life
                        </h1>

                        <p class="text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed text-sm">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>

                        <button class="bg-[#244D3F] hover:bg-[#1a3a2f] text-white px-7 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-all shadow-md">
                            <span class="text-2xl leading-none font-light">+</span>
                            Add a Friend
                        </button>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">

                        <div class="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                            <span class="text-5xl font-bold text-[#244D3F] mb-3">{keen.length}</span>
                            <span class="text-gray-400 text-sm font-medium uppercase tracking-wide">Total Friends</span>
                        </div>

                        <div class="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                            <span class="text-5xl font-bold text-[#244D3F] mb-3">3</span>
                            <span class="text-gray-400 text-sm font-medium uppercase tracking-wide">On Track</span>
                        </div>

                        <div class="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                            <span class="text-5xl font-bold text-[#244D3F] mb-3">6</span>
                            <span class="text-gray-400 text-sm font-medium uppercase tracking-wide">Need Attention</span>
                        </div>

                        <div class="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                            <span class="text-5xl font-bold text-[#244D3F] mb-3">12</span>
                            <span class="text-gray-400 text-sm font-medium uppercase tracking-wide">Interactions This Month</span>
                        </div>

                    </div>

                </div>
            </div>
            <div className='container mx-auto font-bold text-[1.2rem] justify-items-start'>
                Your Friends
            </div>
            <div className='container mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    keen.map(k => <Card k={k} />)
                }
            </div>
        </div>
    );
};

export default HomePage;