import { useState, useEffect } from "react";
interface User {
    id: number;
    name: string;
}

function Contact() {
    const [data, setData] = useState<User[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const user = await response.json();
            setData(user);
        };

        fetchData();
    }, []);

    return (
        <div>
            {data.length > 0 ? (
                <div>Contact {data[0].name}</div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    )
}

export default Contact