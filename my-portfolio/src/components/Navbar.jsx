import React, { useState } from "react";

const Navbar = ({ logo, items, arrow }) => {
    const previewUrl = "https://drive.google.com/file/d/1z1EtApDcaPIdaR5lKjhXQ7OqJ7Emuwvr/preview";
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1z1EtApDcaPIdaR5lKjhXQ7OqJ7Emuwvr";

    const [open, setOpen] = useState(true);
    const [showResume, setShowResume] = useState(false);

    const openResume = () => {
        setShowResume(true);
        setOpen(true);
    };


    const closeResume = () => setShowResume(false);

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
                        onClick={() => item.isResume ? openResume() : handleScroll(item.id)}

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
                        onClick={() => item.isResume ? openResume() : handleScroll(item.id)}

                    >
                        {item.label}
                    </p>
                ))}
            </div>
            {showResume && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-[#F1F1F1] p-6 rounded-2xl shadow-xl w-11/12 md:w-2/3 lg:w-1/2 animate-slideUp">


                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">My Resume</h2>
                            <button onClick={closeResume} className="text-gray-600 hover:text-black text-xl">✕</button>
                        </div>


                        <iframe
                            src={previewUrl}
                            className="w-full h-[60vh] border rounded-lg"
                            title="Resume Preview"
                        ></iframe>

                        <div className="flex justify-between mt-4">
                            <a
                                href={downloadUrl}
                                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
                            >
                                Download
                            </a>

                            <a
                                href={previewUrl}
                                target="_blank"
                                className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300"
                            >
                                Open in New Tab
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
