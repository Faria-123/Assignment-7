import React from 'react';
import { Link } from 'react-router';

const Card = ({ k }) => {
    const { id, name, picture, days_since_contact, tags, status } = k;
    // console.log(id, name, picture, days_since_contact, tags, status);
    return (
        <Link to={`details/${id}`}>
            {/* start */}
            <div className="max-w-xs bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100">


                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-50 shadow-sm">
                    <img
                        src={picture}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </div>


                <h3 className="text-[#1A2B47] text-xl font-bold mb-1">
                    {name}
                </h3>


                <p className="text-gray-400 text-sm mb-4">
                    {days_since_contact}d ago
                </p>


                <div className='flex gap-4'>
                    {
                        tags.map(t => <div className="bg-[#E8F5E9] text-[#2E7D32] text-[10px] font-bold px-3 py-1 rounded-full mb-3 tracking-wider">
                            {t}
                        </div>)
                    }
                </div>

                <div className={`
    ${status.toLowerCase() === "almost due" ? "bg-[#EFAD44]" : ""}
    ${status.toLowerCase() === "overdue" ? "bg-red-400" : ""}
    ${status.toLowerCase() === "on-track" ? "bg-[#244D3F]" : ""}
    text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm text-center min-w-[100px]
`}>
                    {status}
                </div>
            </div>

        </Link>
    );
};

export default Card;