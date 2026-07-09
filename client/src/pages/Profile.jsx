import { useAuth } from "../context/AuthContext";

function Profile() {

    const { user } = useAuth();

    return (

        <div className="max-w-4xl mx-auto py-20">

            <h1 className="text-4xl font-bold">

                Welcome,

                {user.username}

            </h1>

            <p className="mt-5">

                {user.email}

            </p>

        </div>

    );

}

export default Profile;