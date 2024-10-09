export function add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = /,|\n/; 

    if (numbers.startsWith("//")) {
        const delimiterLine = numbers.split("\n")[0];
        delimiter = new RegExp(delimiterLine[2]);
        numbers = numbers.split("\n")[1]; 
    }

    const numberList = numbers.split(delimiter).map(Number);

    const negatives = numberList.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numberList.reduce((sum, num) => sum + num, 0);
}
