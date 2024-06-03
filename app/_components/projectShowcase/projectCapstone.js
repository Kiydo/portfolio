import Trailer from '../../media/videos/capstone/trailer.mp4';
import ProjectVideo from '../projectVideo';

export default function ProjectCapstone() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <h1 className="text-5xl font-bold my-8 text-day-three">My Projects</h1>
            <ProjectVideo
                videoSrc="/media/videos/capstone/trailer.mp4" // URL relative to the public directory
                title="My Awesome Project"
                description="This is a video showcasing my awesome project. I built this project using React, Node.js, and other cool technologies."
            />
        </div>
    );
}