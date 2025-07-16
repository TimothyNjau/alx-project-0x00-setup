import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div className="flex flex-col gap-10 justify-items bg-gray-700">
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />
         
            <Button title="Book Now" styles="rounded-sm"/>
            <Button title="View Now" styles="rounded-md"/>
            <Button title="Call Now" styles="rounded-full"/>
        </div>
    )
}

export default Landing;