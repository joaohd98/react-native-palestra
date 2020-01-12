
interface IImages {
  [key: string]: any | {[key: string]: any}
}

export const images: IImages = {
  warning: require('./images/warning.png'),
  profiles: {
    "1.jpg": require('./images/profiles/profile1.jpg'),
    "2.jpg": require('./images/profiles/profile2.jpg'),
    "3.jpg": require('./images/profiles/profile3.jpg'),
    "4.jpg": require('./images/profiles/profile4.jpg'),
    "5.jpg": require('./images/profiles/profile5.jpg'),
    "6.jpg": require('./images/profiles/profile6.jpg'),
    "7.jpg": require('./images/profiles/profile7.jpg'),
    "8.jpg": require('./images/profiles/profile8.jpg')
  },
};
