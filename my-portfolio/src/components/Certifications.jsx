import React from 'react'
import CertificationsCard from './CertificationsCard'

function Certifications({ certifications }) {

    return (
        <div className="px-2 mt-7 pb-10 flex flex-col gap-3">
            <h1 className="capitalize mt-10 sm:text-lg md:text-xl lg:text-2xl text-gray-700">
                Certifications
            </h1>

            <p className="text-4xl sm:text-5xl font-medium">
                Professional <br />
                Credentials.
            </p>

            <div className="mt-5  mb-5">
                {certifications.map((certificate, idx) => (
                    <CertificationsCard key={idx} certificate={certificate} />
                ))}

            </div>

        </div>
    )
}

export default Certifications
