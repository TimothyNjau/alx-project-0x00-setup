import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
    return (
        <div className="flex flex-col gap-10 justify-items bg-gray-700">
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />
            <div className="flex justify-between w-[200px]">        
            <Button title="Book" styles="rounded-sm"/>
            <Button title="Book" styles="rounded-md"/>
            <Button title="Book" styles="rounded-full"/>
            </div>
        </div>
    )
}

export default Landing;