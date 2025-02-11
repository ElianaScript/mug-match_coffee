import React from 'react';
import GradientBackground from '../components/GradientBackground';

const ProfileSettings = () => {
    return (
        <GradientBackground>
            <div className="text-center text-white text-3xl font-bold mt-6">Profile Settings</div>
            <p className="text-center text-white mt-4 italic">Manage your account settings and preferences here.</p>
        </GradientBackground>
    );
};

export default ProfileSettings;