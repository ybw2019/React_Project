const sendAction = (type = "none", value = "none") => {
    return {
        type: type,
        value: value
    }
};
export default sendAction;