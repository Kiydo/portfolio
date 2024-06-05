"use client";
import React, { useState } from 'react';
import ProjectVideo from '../projectVideo';

export default function ProjectCapstone() {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(prevState => !prevState);
    };

    const projectDescription =
    "For my capstone project, developed for Grow Within Nutrition, I led an innovative endeavor aimed at revolutionizing their online presence. Tasked with creating a prototype for a new website, I embarked on a journey to introduce cutting-edge features tailored to enhance user experience for both staff and customers.\n\n" +
    "My foremost goal was to infuse a familiar yet fresh look into the website, ensuring a seamless transition for existing users while captivating new audiences. To achieve this, I centralized and integrated various business processes within the site, streamlining operations and fostering efficiency.\n\n" +
    "One of the key highlights of my project was the emphasis on user-friendliness, particularly catering to individuals less adept with technology. I meticulously designed a user interface that prioritized simplicity without compromising functionality, ensuring a smooth and intuitive experience for all users.\n\n" +
    "Admin privileges were integrated into the system, empowering staff with the ability to customize content swiftly and effortlessly, eliminating the need for developer intervention. This allowed for dynamic content management, enabling rapid modifications, creation, and editing of content.\n\n" +
    "Furthermore, I implemented an integrated scheduling system, complete with a user-friendly calendar interface, facilitating seamless appointment bookings and management. Additionally, I incorporated a robust payment gateway, enabling secure and hassle-free transactions for customers.\n\n" +
    "To augment client engagement, my platform boasted a comprehensive blogging system, enabling the creation and dissemination of engaging content to the audience. Moreover, customizable newsletters were seamlessly integrated, allowing targeted communication with subscribers.\n\n" +
    "In essence, my capstone project for Grow Within Nutrition represented a holistic approach to website development, encompassing advanced functionalities tailored to elevate user experience, streamline operations, and foster meaningful engagement with the audience";



    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center bg-day-one">
            <ProjectVideo
                videoSrc="/media/videos/capstone/trailer.webm"
                title="Grow Within Nutrition"
            />
            <button 
                onClick={toggleDescription} 
                className="text-day-three transform transition-transform duration-300 hover:scale-110 flex items-center gap-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md font-bold bg-day-two"   
            >
                {showDescription ? '▲' : '▼'} {/* Unicode characters for up and down arrows */}
                {showDescription ? 'Hide Details' : 'Show Details'}
            </button>
            {showDescription && (
                <div className="my-2 max-w-4xl mx-12">
                    <p>{projectDescription}</p>
                </div>
            )}
        </div>
    );
}
