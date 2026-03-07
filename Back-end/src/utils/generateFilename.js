const generateProfileFilename = (userId, originalName) => {
    const extension = originalName.split('.').pop();
    return `profile/${userId}/profile-${userId}-${Date.now()}.${extension}`;
}

export default generateProfileFilename;