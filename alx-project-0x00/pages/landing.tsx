import Card from "@/components/Card";

const Landing: React.FC = () => {
    return (
        <div className="flex flex-col gap-10 justify-items bg-gray-700">
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Landing;