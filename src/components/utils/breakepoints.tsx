const breakepoints = {
    mobile: "375px",
    tablet: "768px",
    desktop: "1240px"
}

const screens = {
    sm: `(min-width : ${breakepoints.mobile})`,
    md: `(min-width : ${breakepoints.tablet})`,
    lg: `(min-width : ${breakepoints.desktop})`
}


export default screens;