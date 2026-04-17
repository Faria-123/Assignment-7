import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { keencontext } from './ContextProvider';
import { IoNotificationsOutline, IoArchiveOutline, IoTrashOutline } from "react-icons/io5";
import { FiPhoneCall, FiMessageSquare, FiVideo, FiEdit2 } from "react-icons/fi";
import toast from 'react-hot-toast';
const details = () => {

    const { id } = useParams();
    const keeninfo = useContext(keencontext);
    const { keen, handlecall, handlevideo, handletext } = keeninfo;
    const profile = keen.find(k => k.id === Number(id));
    // console.log(profile);

    const getStatusBg = (status) => {
        const s = status.toLowerCase();
        if (s === "overdue") return "bg-red-500";
        if (s === "almost due") return "bg-[#EFAD44]";
        return "bg-[#244D3F]";
    };
    return (
        <div className='  bg-slate-50'>
            <div className="container mx-auto min-h-screen p-4 md:p-12">
                <div className="container mx-auto flex flex-col lg:flex-row gap-8">

                    {/* LEFT SIDEBAR */}
                    <div className="lg:w-1/3 flex flex-col gap-4">
                        {/* Profile Card */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center text-center border border-gray-100">
                            <img src={profile.picture} className="w-24 h-24 rounded-full mb-4 border-4 border-slate-50" alt={profile.name} />
                            <h2 className="text-2xl font-bold text-[#1A2B47]">{profile.name}</h2>
                            <div className="flex flex-col gap-2 mt-3">
                                <span className={`${getStatusBg(profile.status)} text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full w-fit mx-auto`}>
                                    {profile.status}
                                </span>
                                <div className="flex gap-2 justify-center flex-wrap">
                                    {profile.tags.map(tag => (
                                        <span key={tag} className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="mt-6 text-gray-500 italic text-sm">"{profile.bio}"</p>
                            <p className="text-gray-400 text-xs mt-2">Preferred: {profile.email}</p>
                        </div>

                        {/* Action  */}
                        <div className="flex flex-col gap-2">
                            <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 p-3 rounded-xl border border-gray-200 text-gray-700 font-medium transition-all shadow-sm">
                                <IoNotificationsOutline /> Snooze 2 Weeks
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 p-3 rounded-xl border border-gray-200 text-gray-700 font-medium transition-all shadow-sm">
                                <IoArchiveOutline /> Archive
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-white hover:bg-red-50 p-3 rounded-xl border border-gray-200 text-red-500 font-medium transition-all shadow-sm">
                                <IoTrashOutline /> Delete
                            </button>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="lg:w-2/3 flex flex-col gap-6">
                        {/* Top Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <p className="text-3xl font-bold text-[#1A2B47]">{profile.days_since_contact}</p>
                                <p className="text-gray-400 text-xs uppercase mt-1">Days Since Contact</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <p className="text-3xl font-bold text-[#1A2B47]">{profile.goal}</p>
                                <p className="text-gray-400 text-xs uppercase mt-1">Goal (Days)</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <p className="text-xl font-bold text-[#244D3F]">{profile.next_due_date}</p>
                                <p className="text-gray-400 text-xs uppercase mt-1">Next Due</p>
                            </div>
                        </div>

                        {/* Relationship */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-[#1A2B47] text-lg">Relationship Goal</h3>
                                <p className="text-gray-500 mt-2">Connect every <span className="font-bold text-gray-800">{profile.goal} days</span></p>
                            </div>
                            <button className="p-2 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
                                <FiEdit2 className="text-gray-400" />
                            </button>
                        </div>

                        {/* Quick  */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-[#1A2B47] text-lg mb-6">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <button onClick={() => handlecall(profile)} className="flex flex-col items-center gap-2 p-6 rounded-xl border border-gray-100 bg-slate-50 hover:bg-slate-100 transition-all group">
                                    <FiPhoneCall className="text-2xl text-slate-400 group-hover:text-[#244D3F]" />
                                    <span className="text-sm font-medium text-gray-600">Call</span>
                                </button>
                                <button onClick={() => handletext(profile)} className="flex flex-col items-center gap-2 p-6 rounded-xl border border-gray-100 bg-slate-50 hover:bg-slate-100 transition-all group">
                                    <FiMessageSquare className="text-2xl text-slate-400 group-hover:text-[#244D3F]" />
                                    <span className="text-sm font-medium text-gray-600">Text</span>
                                </button>
                                <button onClick={() => handlevideo(profile)} className="flex flex-col items-center gap-2 p-6 rounded-xl border border-gray-100 bg-slate-50 hover:bg-slate-100 transition-all group">
                                    <FiVideo className="text-2xl text-slate-400 group-hover:text-[#244D3F]" />
                                    <span className="text-sm font-medium text-gray-600">Video</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default details;