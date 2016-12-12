const log = (text) => {
    if (process.env.NODE_ENV === 'development')
        console.log(text);
}

export default log;