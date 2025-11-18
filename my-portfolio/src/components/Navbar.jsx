import React, { useState } from "react";

const Navbar = ({ logo, items, arrow }) => {
    const [open, setOpen] = useState(true);

    const setVisibility = () => {
        setOpen(!open);
    };


    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(true);  
    };

    return (
        <div className="flex justify-between items-center px-16 md:px-16 py-2 relative bg-[#F1F1F1]">


            <img src={logo} alt="logo" className="h-14" />


            <div
                className={`hidden md:flex gap-6 overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                {items.map((item, idx) => (
                    <p
                        key={idx}
                        className="hover:cursor-pointer text-sm transition hover:text-blue-500"
                        onClick={() => handleScroll(item.id)}
                    >
                        {item.label}
                    </p>
                ))}
            </div>


            <img
                src={arrow}
                alt="arrow"
                className={`${open ? "h-8 rotate-180" : "h-8 -rotate-90"
                    } hover:cursor-pointer transition-all duration-300 delay-150 ease-in-out`}
                onClick={setVisibility}
            />


            <div
                className={`md:hidden absolute left-0 right-0 flex flex-col gap-4 items-center top-20 py-4 bg-[#F1F1F1] transition-all duration-300 delay-150 ease-in-out shadow-md ${!open
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                {items.map((item, idx) => (
                    <p
                        key={idx}
                        className="hover:cursor-pointer py-1 text-sm transition hover:text-blue-500"
                        onClick={() => handleScroll(item.id)}
                    >
                        {item.label}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
