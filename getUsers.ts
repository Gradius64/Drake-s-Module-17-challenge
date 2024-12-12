interface User {
    id: number;
    name: string;
    email: string;
}

async function getAllUsers():  Promise<User[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users: User[] = await response.json();
        return users;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
}


      
try {
    
  
}
catch
{

}
