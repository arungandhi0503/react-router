/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from "react-router-dom";
function Home() {

    const data = useLoaderData() as any[] || [];
    console.log(data);
    return (
        <>
            {data.length > 0 ? (
                <>
                    <div>Home</div>
                    <div>{data[0].name}</div>
                </>
            ) : (
                <p>No data available</p>
            )}
        </>
    );
}

export default Home