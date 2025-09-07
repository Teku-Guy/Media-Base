
import { Metadata } from "next";

type ProfileProps = {
    params: { profile: string };
};

export const generateMetadata = async ({ params }: ProfileProps): Promise<Metadata> => {
    const profile_name = (await params).profile;
    return {
        title: `(${profile_name})`,
        description: `This is the profile page for user: ${profile_name}.`,
    };
};

export default async function Profile({ params }: ProfileProps) {
    const profile_name = (await params).profile;
    return (
        <div>
            <h1>Profile: {profile_name}</h1>
            <p>This is a placeholder for the profile page.</p>
        </div>
    );
}