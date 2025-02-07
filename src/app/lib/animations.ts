export const AnimationUp1 = {
    initial: { y: 25, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 1, ease: 'easeOut' }
};

export const AnimationUp2 = {
    initial: { y: 15 },
    whileInView: { y: 0 },
    transition: { duration: 1, ease: 'easeOut' }
};

export const AnimationRight = (isSmallScreen: boolean) => ({
    whileInView: { x: isSmallScreen ? [0, 0] : [20,0], opacity: [0,1] },
    transition: { duration: 1, ease: 'easeOut' }
});

export const AnimationLeft = (isSmallScreen : boolean) => ({
    whileInView: { x: isSmallScreen ? [0, 0] : [-20,0], opacity: [0,1] },
    transition: { duration: 1, ease: 'easeOut' }
});

export const AnimateCircle = {
    initial: { opacity: 0 },
    whileInView: { rotate: [360, -45, 0], opacity: 1, scale: [.5, 1.1, 1] },
    transition: { duration: .8 }
}

export const AnimateOpacityCircle = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: .3, delay: .5 }
}

export const AnimateRectangularInput = {
    initial: { opacity: 0 },
    whileInView: { rotate: [-180, 0], opacity: 1, scale: [.5, 1] },
    transition: { duration: 1, ease: 'easeOut', delay: 1 }
}

export const AnimateRectangularShape = {
    whileInView: { y: [0, 10, 0] },
    transition: { y: {repeat: Infinity, repeatType: 'loop', duration: 2, ease: 'easeInOut',}}
};

export const AnimateOpacity = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1 }
}
