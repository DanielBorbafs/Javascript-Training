function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    // contagem de Apples que cairam 
    apples.forEach(appleDistance => {
        let applePosition = a + appleDistance;
        if (applePosition >= s && applePosition <= t) {
            appleCount++;
        }
    });

    // Contando as laranjas que cairam da casa
    oranges.forEach(orangeDistance => {
        let orangePosition = b + orangeDistance;
        if (orangePosition >= s && orangePosition <= t) {
            orangeCount++;
        }
    });

    console.log(appleCount);
    console.log(orangeCount);
}

// Example para chamar a função
const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);