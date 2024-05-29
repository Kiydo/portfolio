import React from 'react';
import ProfilePicture from '../_components/profilePicture';
import { useContextProvider } from "@/app/_utils/globalContext";

export default function Intro() { 
    return (
        <div className="h-full flex">
            <div className="flex-grow flex-shrink w-2/3 p-4">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="flex-grow-0 flex-shrink-0">
                <ProfilePicture />
            </div>
        </div>
    );
}