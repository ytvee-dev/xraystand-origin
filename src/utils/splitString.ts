const splitString = (text: string) => {
    const strArray: string[] = text.split("\n").map(part => part.trim());
    return strArray;
}

export default splitString;