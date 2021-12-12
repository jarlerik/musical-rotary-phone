export const pathMatches = (currentPath: string, path: string) => {
    const currentPathArr = currentPath.split("/");
    const pathArr = path.split("/");
    return currentPathArr[1] === pathArr[1] && currentPathArr.length === pathArr.length;
}

export const getParams = (currentPath: string, path: string) => {
    const currentPathArr = currentPath.split("/");
    const pathArr = path.split("/");

    const params = pathArr.reduce((paramsObject, currentValue, currentIndex) => {
        if (currentValue.startsWith(':')) {
            paramsObject[currentValue.replace(/:/g, '')] = currentPathArr[currentIndex];
        }
        return paramsObject;
    }, {});
    return params;
}