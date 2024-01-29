async function readData () {
    const filePath = "./src/5wDict.txt";
    const fileContent = await (await fetch(filePath)).text();
    return fileContent.split('\n')
}

export const fileContent = await readData()