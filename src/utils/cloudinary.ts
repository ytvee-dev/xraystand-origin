export const cloudinaryUrls: Record<string, string> = {
    "rusLit/backgrounds/coverBg.avif": "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1756567670/coverBg_de07rp.avif",
};

export const getImageUrl = (id: string): string => {
    return cloudinaryUrls[id] ?? `./assets/images/${id}`;
};

export default getImageUrl;
