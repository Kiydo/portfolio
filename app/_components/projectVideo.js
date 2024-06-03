import React from 'react';

export default function ProjectVideo ({ videoSrc, title, description }) {
    return (
        <div className="flex flex-col items-center my-12 bg-day-two p-4 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-day-three">{title}</h2>
            <video controls className="w-full max-w-4xl mb-4">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className="text-lg text-day-three text-center">{description}</p>
        </div>
    );
};

