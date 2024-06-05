
import ProjectVideo from '../projectVideo';


export default function ProjectCapstone() {

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <h1 className="text-5xl font-bold my-8 text-day-three">My Projects</h1>
            <ProjectVideo
                videoSrc="/media/videos/capstone/trailer.mp4" // URL relative to the public directory
                title="Grow Within Nutrition"
                description="Description"
            />
            {/* <video height="452" width="768" controls >
                <source src="https://ik.imagekit.io/ikmedia/example_video.mp4" />
                Your browser does not support the video tag...
            </video> */}
        </div>
    );
}