import { useParams } from "react-router-dom";

export const UserProfile = () => {
    const params = useParams()
    const userId = params.userId
    return (
        <div>Datails about user{userId}</div>
       
    );
};
