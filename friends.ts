import React, { useState } from 'react';
import { addFriend, removeFriend, getFriends, Friend } from './friends';

const FriendsComponent: React.FC = () => {
    const [friendsList, setFriendsList] = useState<Friend[]>(getFriends());
    const [friendName, setFriendName] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFriendName(event.target.value);
    };

    const handleAddFriend = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (friendName.trim()) {
            const newFriend = addFriend(friendName);
            setFriendsList([...friendsList, newFriend]);
            setFriendName(''); // Clear the input after submission
        }
    };

    const handleRemoveFriend = (id: number) => {
        if (removeFriend(id)) {
            setFriendsList(getFriends()); // Refresh the list of friends
        }
    };
