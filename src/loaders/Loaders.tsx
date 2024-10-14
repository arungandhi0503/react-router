import { LoaderData } from '../interface/Interface'

export async function homeLoader(): Promise<LoaderData> {  // Type the loader return value
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const user = await response.json();
    return user;
}