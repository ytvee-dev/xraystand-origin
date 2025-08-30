const cloudinaryUrlsRecord: Record<string, string> = {
  "trafficLawsPage/trafficLight/background": "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1756567690/tlBackground_co473s.avif",
  "trafficLawsPage/trafficLight/redOn": "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1756567691/redOn_nizxqb.avif",
  "trafficLawsPage/trafficLight/redOff": "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1756567690/redOff_tsib2i.avif",
  "trafficLawsPage/trafficLight/yellowOn": "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1756567691/yellowOn_lcofvk.avif",
  "trafficLawsPage/trafficLight/yellowOff": "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1756567690/yellowOff_al1oni.avif",
  "trafficLawsPage/trafficLight/greenOn": "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1756567690/greenOn_kacswf.avif",
  "trafficLawsPage/trafficLight/greenOff": "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1756567689/greenOff_rwoxvf.avif",
};

export const getImageUrl = (id: string): string => cloudinaryUrlsRecord[id];

export default cloudinaryUrlsRecord;
