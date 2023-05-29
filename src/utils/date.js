import dayjs from 'dayjs';

// export const getBuddhistEra = () => dayjs().add(543, 'year').toString();
export const getBuddhistEra = () => dayjs().add(543, 'year').year();
