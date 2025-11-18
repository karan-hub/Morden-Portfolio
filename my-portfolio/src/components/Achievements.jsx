import React from 'react'
import AchievementsCard from './AchievementsCard'


function Achievements({ achievements }) {
    return (
        <div className="px-2 mt-7 pb-10 flex flex-col gap-3">
            <h1 className="capitalize mt-10 sm:text-lg md:text-xl lg:text-2xl text-gray-700">
                Achievements
            </h1>

            <p className="text-4xl sm:text-5xl font-medium">
                Milestones <br />
                & Recognition.
            </p>

            <div className="mt-5">
                {achievements.map((achievement, idx) => (
                    <AchievementsCard key={idx} achievement={achievement} />
                ))}

            </div>
        </div>
    )
}

export default Achievements
